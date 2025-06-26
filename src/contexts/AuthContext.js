import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [refreshToken, setRefreshToken] = useState(null);

  // 토큰 유효성 검사 함수 추가
  const isTokenValid = (token) => {
    if (!token) return false;
    
    try {
      // JWT 토큰 구조 확인 (3개 부분으로 구성되어야 함)
      const parts = token.split('.');
      if (parts.length !== 3) return false;
      
      // payload 디코딩하여 만료 시간 확인
      const payload = JSON.parse(atob(parts[1]));
      const currentTime = Math.floor(Date.now() / 1000);
      
      return payload.exp > currentTime;
    } catch (error) {
      console.error('Token validation error:', error);
      return false;
    }
  };
  
  // 초기화 시 토큰 유효성 검사
  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    const storedUser = localStorage.getItem('user');
    
    if (storedToken && storedUser) {
      if (isTokenValid(storedToken)) {
        try {
          setToken(storedToken);
          setUser(JSON.parse(storedUser));
          setIsLoggedIn(true);
        } catch (error) {
          console.error('Failed to parse stored user data:', error);
          logout();
        }
      } else {
        console.log('Token expired, logging out');
        logout();
      }
    }
  }, []);

  const login = async (userData) => {
    setIsLoggedIn(true);
    setToken(userData.token);
    setRefreshToken(userData.refreshToken);
    
    // Store tokens first
    localStorage.setItem('token', userData.token);
    localStorage.setItem('refreshToken', userData.refreshToken || '');
    
    // Fetch complete user data from backend
    try {
      const response = await fetch('https://unithon1.shop/api/members/me', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${userData.token}`,
          'Content-Type': 'application/json'
        }
      });
      
      if (response.ok) {
        const completeUserData = await response.json();
        setUser(completeUserData);
        localStorage.setItem('user', JSON.stringify(completeUserData));
      } else {
        // Fallback to login response data
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
      }
    } catch (error) {
      console.error('Failed to fetch user data:', error);
      // Fallback to login response data
      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
    }
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUser(null);
    setToken(null);
    setRefreshToken(null);
    
    // localStorage에서도 제거
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('user');
  };

  // refreshToken 함수 구현
  const refreshTokenFunc = async () => {
    try {
      const currentRefreshToken = refreshToken || localStorage.getItem('refreshToken');
      if (!currentRefreshToken) {
        console.error('No refresh token available');
        return false;
      }

      // 백엔드에 토큰 갱신 요청
      const response = await fetch('https://unithon1.shop/api/members/refresh', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          refreshToken: currentRefreshToken
        })
      });

      if (response.ok) {
        const data = await response.json();
        if (data.accessToken) {
          // 새 토큰 저장
          setToken(data.accessToken);
          localStorage.setItem('token', data.accessToken);
          
          // 새 refreshToken이 있다면 저장
          if (data.refreshToken) {
            setRefreshToken(data.refreshToken);
            localStorage.setItem('refreshToken', data.refreshToken);
          }
          
          return true;
        }
      }
      
      return false;
    } catch (error) {
      console.error('Token refresh failed:', error);
      return false;
    }
  };

  return (
    <AuthContext.Provider value={{
      isLoggedIn,
      user,
      token,
      refreshToken,
      login,
      logout,
      refreshTokenFunc
    }}>
      {children}
    </AuthContext.Provider>
  );
};

// Remove this duplicate export line:
// export { AuthProvider, useAuth };
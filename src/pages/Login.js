import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import styled from 'styled-components';
import {
  Visibility as VisibilityIcon,
  VisibilityOff as VisibilityOffIcon,
  Google as GoogleIcon,
} from '@mui/icons-material';

const Container = styled.div`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const LoginCard = styled.div`
  background: white;
  border-radius: 20px;
  padding: 40px 30px;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

const LogoImage = styled.img`
  width: 120px;
  height: auto;
  margin-bottom: 10px;
`;

const LogoText = styled.h1`
  font-size: 32px;
  font-weight: 700;
  color: #333;
  margin: 0;
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Subtitle = styled.p`
  font-size: 16px;
  color: #666;
  margin: 8px 0 0 0;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: relative;
`;

const Label = styled.label`
  font-size: 14px;
  font-weight: 600;
  color: #333;
`;

const Input = styled.input`
  padding: 16px;
  border: 2px solid #E1E5E9;
  border-radius: 12px;
  font-size: 16px;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #667eea;
  }
  
  &::placeholder {
    color: #A0A0A0;
  }
`;

const PasswordInput = styled(Input)`
  padding-right: 50px;
`;

const PasswordToggle = styled.button`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  color: #666;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    color: #333;
  }
`;

const ForgotPassword = styled(Link)`
  color: #667eea;
  text-decoration: none;
  font-size: 14px;
  text-align: right;
  
  &:hover {
    text-decoration: underline;
  }
`;

const LoginButton = styled.button`
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  border: none;
  border-radius: 12px;
  padding: 16px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  
  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(102, 126, 234, 0.3);
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const Divider = styled.div`
  display: flex;
  align-items: center;
  margin: 30px 0;
  
  &::before,
  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: #E1E5E9;
  }
  
  span {
    padding: 0 20px;
    color: #666;
    font-size: 14px;
  }
`;

const GoogleButton = styled.button`
  width: 100%;
  padding: 16px;
  border: 2px solid #E1E5E9;
  border-radius: 12px;
  background: white;
  color: #333;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    border-color: #4285F4;
    box-shadow: 0 4px 12px rgba(66, 133, 244, 0.15);
  }
`;

const SignupPrompt = styled.p`
  text-align: center;
  margin-top: 30px;
  color: #666;
  font-size: 14px;
`;

const SignupLink = styled(Link)`
  color: #667eea;
  text-decoration: none;
  font-weight: 600;
  
  &:hover {
    text-decoration: underline;
  }
`;

const ErrorMessage = styled.div`
  background: #FFEBEE;
  color: #C62828;
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 14px;
  margin-bottom: 20px;
  border-left: 4px solid #F44336;
`;

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
  
    try {
      const response = await fetch('https://unithon1.shop/api/members/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password
        })
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Login failed');
      }
  
      // 로그인 성공 처리 부분 수정
      const userData = await response.json();
  
      // 디버깅을 위한 로깅 추가
      console.log('Login response:', userData);
  
      // 백엔드에서 accessToken을 반환하므로 이를 token으로 사용
      const token = userData.accessToken || userData.token;
      const refreshToken = userData.refreshToken;
  
      // 토큰 유효성 검사 수정
      if (!token || token.split('.').length !== 3) {
        throw new Error('Invalid access token received from server');
      }
  
      // 사용자 ID 확인 (백엔드 응답에 id가 없을 수 있음)
      if (!userData.id) {
        console.warn('User ID is missing in the response');
        // 이메일을 임시 ID로 사용하거나 별도 API 호출로 사용자 정보 가져오기
      }
  
      // AuthContext의 login 함수 호출
      await login({
        id: userData.id || userData.email || formData.email, // Use email as fallback ID
        email: userData.email || formData.email,
        nickname: userData.nickname,
        role: userData.role,
        token: token,
        refreshToken: refreshToken,
        ...userData
      });
  
      console.log('Login successful');
      navigate('/mypage');
    } catch (err) {
      console.error('Login error:', err);
      setError(err.message || 'Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    console.log('Initiating Google OAuth...');
    alert('Google login integration will be implemented with OAuth 2.0');
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Container>
      <LoginCard>
        <Logo>
          <LogoImage src="/assets/images/logo.png" alt="UniBus Logo" />
          <LogoText>UniBus</LogoText>
          <Subtitle>Welcome back! Please sign in to your account.</Subtitle>
        </Logo>

        {error && <ErrorMessage>{error}</ErrorMessage>}

        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </InputGroup>

          <InputGroup>
            <Label htmlFor="password">Password</Label>
            <PasswordInput
              id="password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
            <PasswordToggle
              type="button"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </PasswordToggle>
          </InputGroup>

          <ForgotPassword to="/forgot-password">
            Forgot your password?
          </ForgotPassword>

          <LoginButton type="submit" disabled={isLoading}>
            {isLoading ? 'Signing In...' : 'Sign In'}
          </LoginButton>
        </Form>

        <Divider>
          <span>or</span>
        </Divider>

        <GoogleButton type="button" onClick={handleGoogleLogin}>
          <GoogleIcon style={{ color: '#4285F4' }} />
          Continue with Google
        </GoogleButton>

        <SignupPrompt>
          Don't have an account?{' '}
          <SignupLink to="/register">Sign up here</SignupLink>
        </SignupPrompt>
      </LoginCard>
    </Container>
  );
};

export default Login;
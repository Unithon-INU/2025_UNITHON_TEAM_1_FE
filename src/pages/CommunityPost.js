import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from '../contexts/AuthContext';
import {
  ArrowBack as ArrowBackIcon,
  Photo as PhotoIcon,
} from '@mui/icons-material';

const Container = styled.div`
  background-color: white;
  min-height: 100vh;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  border-bottom: 1px solid #E0E0E0;
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 100;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  padding: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: 600;
  color: #333;
  margin: 0;
  flex: 1;
  text-align: center;
`;

const PostButton = styled.button`
  background: ${props => props.disabled ? '#E0E0E0' : '#2196F3'};
  color: ${props => props.disabled ? '#999' : 'white'};
  border: none;
  border-radius: 20px;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 600;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  transition: all 0.3s ease;
  
  &:hover {
    background: ${props => props.disabled ? '#E0E0E0' : '#1976D2'};
  }
`;

const Content = styled.div`
  padding: 20px;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #2196F3;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  margin-right: 12px;
`;

const UserDetails = styled.div`
  flex: 1;
`;

const UserName = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin-bottom: 2px;
`;

const PostingAs = styled.div`
  font-size: 12px;
  color: #666;
`;

const CategorySelector = styled.div`
  margin-bottom: 20px;
`;

const CategoryLabel = styled.label`
  display: block;
  font-size: 14px;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
`;

const CategorySelect = styled.select`
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #E0E0E0;
  border-radius: 8px;
  font-size: 14px;
  background: white;
  cursor: pointer;
  
  &:focus {
    outline: none;
    border-color: #2196F3;
  }
`;

const TitleInput = styled.input`
  width: 100%;
  padding: 16px 0;
  border: none;
  border-bottom: 1px solid #E0E0E0;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 20px;
  
  &:focus {
    outline: none;
    border-bottom-color: #2196F3;
  }
  
  &::placeholder {
    color: #999;
  }
`;

const ContentTextarea = styled.textarea`
  width: 100%;
  min-height: 200px;
  padding: 16px 0;
  border: none;
  font-size: 16px;
  line-height: 1.5;
  resize: vertical;
  
  &:focus {
    outline: none;
  }
  
  &::placeholder {
    color: #999;
  }
`;

const Divider = styled.div`
  height: 1px;
  background: #E0E0E0;
  margin: 0 20px;
`;

const ActionsBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
`;

const ActionButton = styled.button`
  background: none;
  border: none;
  color: #2196F3;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  
  &:hover {
    color: #1976D2;
  }
`;

const CharacterCount = styled.div`
  font-size: 12px;
  color: #666;
`;

const CommunityPost = () => {
  const navigate = useNavigate();
  const { user, token, refreshTokenFunc } = useAuth();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('GENERAL');
  // Remove the hardcoded userNickname state
  // const [userNickname, setUserNickname] = useState('User');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const categories = [
    { value: 'GENERAL', label: 'General' },
    { value: 'HOUSING', label: 'Housing' },
    { value: 'JOBS', label: 'Jobs' },
    { value: 'STUDY', label: 'Study' },
    { value: 'SOCIAL', label: 'Social' },
    { value: 'HELP', label: 'Help' }
  ];

  // Get the user nickname from the auth context
  const userNickname = user?.nickname || 'User';

  // Define canPost condition
  const canPost = title.trim() && content.trim() && category && !isSubmitting;

  const handlePost = async () => {
    if (!canPost) return;
    
    // 토큰 가져오기 통일
    const authToken = token || localStorage.getItem('token');
    
    // 토큰 유효성 검사 추가
    if (!user || !authToken) {
      alert('Please log in to create a post.');
      navigate('/login');
      return;
    }
    
    // 토큰 형식 검증
    if (!authToken.includes('.') || authToken.split('.').length !== 3) {
      console.error('Invalid token format');
      alert('Invalid authentication token. Please log in again.');
      navigate('/login');
      return;
    }
    
    // 토큰 만료 확인 및 갱신 시도
    try {
      const tokenParts = authToken.split('.');
      const payload = JSON.parse(atob(tokenParts[1]));
      const currentTime = Math.floor(Date.now() / 1000);
      
      // 토큰이 만료되었거나 만료 임박한 경우
      if (payload.exp <= currentTime + 300) { // 5분 이내 만료 예정
        console.log('Token expired or expiring soon, attempting refresh');
        
        // refreshTokenFunc 사용
        if (refreshTokenFunc) {
          const refreshed = await refreshTokenFunc();
          if (!refreshed) {
            alert('Your session has expired. Please log in again.');
            navigate('/login');
            return;
          }
          // 토큰 갱신 성공 시 새 토큰 사용
          const newToken = localStorage.getItem('token');
          if (newToken) {
            authToken = newToken;
          }
        } else {
          alert('Your session has expired. Please log in again.');
          navigate('/login');
          return;
        }
      }
    } catch (error) {
      console.error('Token validation error:', error);
      alert('Authentication error. Please log in again.');
      navigate('/login');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // 요청 데이터 준비
      const requestData = {
        category: category,
        title: title.trim(),
        content: content.trim()
      };
      
      // 상세 로깅
      console.log('=== POST 요청 정보 ===');
      console.log('URL:', 'https://unithon1.shop/api/posts');
      console.log('Method:', 'POST');
      console.log('Headers:', {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken}`
      });
      console.log('Request Body:', JSON.stringify(requestData, null, 2));
      console.log('User Info:', user);
      console.log('Token:', authToken ? `${authToken.substring(0, 20)}...` : 'No token');
      console.log('========================');
      
      const response = await fetch('https://unithon1.shop/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`
        },
        body: JSON.stringify(requestData)
      });
      
      // 응답 정보 로깅
      console.log('=== 응답 정보 ===');
      console.log('Status:', response.status);
      console.log('Status Text:', response.statusText);
      console.log('Headers:', Object.fromEntries(response.headers.entries()));
      
      if (!response.ok) {
        let errorText;
        try {
          errorText = await response.text();
          console.log('Error Response Body:', errorText);
        } catch (e) {
          console.log('Error reading response body:', e);
        }
        
        if (response.status === 401) {
          throw new Error('Authentication required. Please log in.');
        }
        throw new Error(`Failed to create post: ${response.status} - ${errorText || 'Unknown error'}`);
      }
      
      const newPost = await response.json();
      console.log('Post created successfully:', newPost);
      
      navigate('/community');
    } catch (error) {
      console.error('게시글 생성 실패:', error);
      if (error.message.includes('Authentication')) {
        alert('로그인이 필요합니다.');
        navigate('/login');
      } else {
        alert(`게시글 생성에 실패했습니다: ${error.message}`);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  // Remove the entire useEffect that was trying to fetch user nickname
  // useEffect(() => {
  //   const fetchUserNickname = async (authToken) => {
  //     try {
  //       // 기존: const response = await fetch(`https://unithon1.shop/api/members/${user.id}`, {
  //       const response = await fetch('https://unithon1.shop/api/members/me', {
  //         method: 'GET',
  //         headers: {
  //           'Authorization': `Bearer ${authToken}`,
  //           'Content-Type': 'application/json'
  //         }
  //       });
  //   
  //       if (response.ok) {
  //         const userData = await response.json();
  //         return userData.nickname;
  //       }
  //       return null;
  //     } catch (error) {
  //       console.error('Error fetching user nickname:', error);
  //       return null;
  //     }
  //   };
  //   fetchUserNickname();
  // }, [user]);

  return (
    <Container>
      <Header>
        <BackButton onClick={() => navigate('/community')}>
          <ArrowBackIcon />
        </BackButton>
        <Title>New Post</Title>
        <PostButton disabled={!canPost} onClick={handlePost}>
          {isSubmitting ? 'Posting...' : 'Post'}
        </PostButton>
      </Header>

      <Content>
        <UserInfo>
          <Avatar>
            {userNickname.charAt(0).toUpperCase()}
          </Avatar>
          <UserDetails>
            <UserName>{userNickname}</UserName>
            <PostingAs>Posting to Community</PostingAs>
          </UserDetails>
        </UserInfo>

        <CategorySelector>
          <CategoryLabel>Category</CategoryLabel>
          <CategorySelect 
            value={category} 
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map(cat => (
              <option key={cat.value} value={cat.value}>
                {cat.label}
              </option>
            ))}
          </CategorySelect>
        </CategorySelector>

        <TitleInput
          placeholder="What's your question or topic?"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          maxLength={100}
        />
        
        <ContentTextarea
          placeholder="Share your thoughts, ask questions, or start a discussion..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          maxLength={1000}
        />
      </Content>

      <Divider />

      <ActionsBar>
        <ActionButton>
          <PhotoIcon fontSize="small" />
          Photo
        </ActionButton>
        
        <CharacterCount>
          {content.length}/1000
        </CharacterCount>
      </ActionsBar>
    </Container>
  );
};

export default CommunityPost;

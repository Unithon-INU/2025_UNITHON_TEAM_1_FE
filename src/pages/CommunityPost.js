import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from '../contexts/AuthContext';
import {
  ArrowBack as ArrowBackIcon,
  PhotoCamera as PhotoIcon,
} from '@mui/icons-material';

const Container = styled.div`
  background-color: white;
  min-height: 100vh;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
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
  margin-right: 16px;
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
`;

const PostButton = styled.button`
  background: ${props => props.disabled ? '#E0E0E0' : '#2196F3'};
  color: ${props => props.disabled ? '#757575' : 'white'};
  border: none;
  border-radius: 20px;
  padding: 8px 20px;
  font-size: 14px;
  font-weight: 600;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  transition: background 0.3s ease;
  
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
  background: linear-gradient(135deg, #2196F3, #21CBF3);
  margin-right: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 600;
  color: white;
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
  color: #757575;
`;

const CategorySelector = styled.div`
  margin-bottom: 20px;
`;

const CategoryLabel = styled.label`
  font-size: 14px;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
  display: block;
`;

const CategorySelect = styled.select`
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #E0E0E0;
  border-radius: 8px;
  font-size: 16px;
  background: white;
  color: #333;
  
  &:focus {
    outline: none;
    border-color: #2196F3;
  }
`;

const TitleInput = styled.input`
  width: 100%;
  padding: 16px;
  border: none;
  font-size: 18px;
  font-weight: 600;
  color: #333;
  background: transparent;
  
  &::placeholder {
    color: #BDBDBD;
  }
  
  &:focus {
    outline: none;
  }
`;

const ContentTextarea = styled.textarea`
  width: 100%;
  min-height: 200px;
  padding: 16px;
  border: none;
  font-size: 16px;
  color: #333;
  background: transparent;
  resize: vertical;
  font-family: inherit;
  line-height: 1.5;
  
  &::placeholder {
    color: #BDBDBD;
  }
  
  &:focus {
    outline: none;
  }
`;

const Divider = styled.div`
  height: 1px;
  background: #F0F0F0;
  margin: 0 -20px;
`;

const ActionsBar = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 20px;
  gap: 20px;
`;

const ActionButton = styled.button`
  background: none;
  border: none;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  color: #757575;
  transition: all 0.3s ease;
  
  &:hover {
    background: #F5F5F5;
    color: #333;
  }
`;

const CharacterCount = styled.div`
  margin-left: auto;
  font-size: 12px;
  color: #757575;
`;

const CommunityPost = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [userNickname, setUserNickname] = useState('User');

  // Define categories array
  const categories = [
    { value: '', label: 'Select a category' },
    { value: 'General', label: 'General Discussion' },
    { value: 'Academic', label: 'Academic' },
    { value: 'Events', label: 'Events' },
    { value: 'Questions', label: 'Questions' },
    { value: 'Announcements', label: 'Announcements' }
  ];

  // Define canPost condition
  const canPost = title.trim() && content.trim() && category;

  // Define handlePost function
  const handlePost = async () => {
    if (!canPost) return;
    
    try {
      // Handle post creation logic here
      console.log('Creating post:', { 
        title, 
        content, 
        category, 
        author: userNickname 
      });
      
      // Navigate back to community after successful post
      navigate('/community');
    } catch (error) {
      console.error('Failed to create post:', error);
    }
  };

  // Fetch user nickname
  useEffect(() => {
    const fetchUserNickname = async () => {
      try {
        const response = await fetch('http://43.203.125.32:8080/api/members');
        if (response.ok) {
          const userData = await response.json();
          if (userData && userData.length > 0) {
            setUserNickname(userData[0].nickname || 'User');
          }
        }
      } catch (error) {
        console.error('Failed to fetch user nickname:', error);
      }
    };

    fetchUserNickname();
  }, []);

  return (
    <Container>
      <Header>
        <BackButton onClick={() => navigate('/community')}>
          <ArrowBackIcon />
        </BackButton>
        <Title>New Post</Title>
        <PostButton disabled={!canPost} onClick={handlePost}>
          Post
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
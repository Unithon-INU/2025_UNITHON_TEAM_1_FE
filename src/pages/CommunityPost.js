import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from '../contexts/AuthContext';
import {
  ArrowBack as ArrowBackIcon,
  Photo as PhotoIcon,
  Close as CloseIcon,
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

// Add new styled components for image upload
const ImageUploadContainer = styled.div`
  margin: 16px 0;
`;

const ImagePreview = styled.div`
  position: relative;
  display: inline-block;
  margin-bottom: 16px;
`;

const PreviewImage = styled.img`
  max-width: 100%;
  max-height: 200px;
  border-radius: 8px;
  border: 1px solid #E0E0E0;
`;

const RemoveImageButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
`;

const HiddenFileInput = styled.input`
  display: none;
`;

const CommunityPost = () => {
  const navigate = useNavigate();
  const { user, token, refreshTokenFunc } = useAuth();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('HOUSING');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const categories = [
    { value: 'HOUSING', label: 'Housing' },
    { value: 'JOBS', label: 'Jobs' },
    { value: 'STUDY', label: 'Study' },
    { value: 'SOCIAL', label: 'Social' },
    { value: 'HELP', label: 'Help' }
  ];

  const userNickname = user?.nickname || 'User';
  const canPost = title.trim() && content.trim() && category && !isSubmitting;

  // Handle image selection
  const handleImageSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Check file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert('Image size must be less than 5MB');
        return;
      }
      
      // Check file type
      if (!file.type.startsWith('image/')) {
        alert('Please select an image file');
        return;
      }
      
      setSelectedImage(file);
      
      // Create preview
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Remove selected image
  const handleRemoveImage = () => {
    setSelectedImage(null);
    setImagePreview(null);
  };

  const handlePost = async () => {
    if (!canPost) return;
    
    let authToken = token || localStorage.getItem('token');
    
    if (!user || !authToken) {
      alert('Please log in to create a post.');
      navigate('/login');
      return;
    }
    
    if (!authToken.includes('.') || authToken.split('.').length !== 3) {
      console.error('Invalid token format');
      alert('Invalid authentication token. Please log in again.');
      navigate('/login');
      return;
    }
    
    try {
      const tokenParts = authToken.split('.');
      const payload = JSON.parse(atob(tokenParts[1]));
      const currentTime = Math.floor(Date.now() / 1000);
      
      if (payload.exp <= currentTime + 300) {
        console.log('Token expired or expiring soon, attempting refresh');
        
        if (refreshTokenFunc) {
          const refreshed = await refreshTokenFunc();
          if (!refreshed) {
            alert('Your session has expired. Please log in again.');
            navigate('/login');
            return;
          }
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
      // Create FormData for multipart/form-data
      const formData = new FormData();
      
      // Add query parameters to URL
      const url = new URL('https://unithon1.shop/api/posts');
      url.searchParams.append('category', category);
      url.searchParams.append('title', title.trim());
      url.searchParams.append('content', content.trim());
      
      // Add image if selected
      if (selectedImage) {
        formData.append('image', selectedImage);
      }
      
      const response = await fetch(url.toString(), {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${authToken}`
          // Don't set Content-Type for FormData, let browser set it
        },
        body: formData
      });
      
      console.log('=== Response Info ===');
      console.log('Status:', response.status);
      console.log('Status Text:', response.statusText);
      
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
      console.error('Post creation failed:', error);
      if (error.message.includes('Authentication')) {
        alert('Login required.');
        navigate('/login');
      } else {
        alert(`Failed to create post: ${error.message}`);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

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
        
        {/* Image Upload Section */}
        <ImageUploadContainer>
          {imagePreview && (
            <ImagePreview>
              <PreviewImage src={imagePreview} alt="Preview" />
              <RemoveImageButton onClick={handleRemoveImage}>
                <CloseIcon fontSize="small" />
              </RemoveImageButton>
            </ImagePreview>
          )}
        </ImageUploadContainer>
      </Content>

      <Divider />

      <ActionsBar>
        <ActionButton onClick={() => document.getElementById('image-upload').click()}>
          <PhotoIcon fontSize="small" />
          Photo
        </ActionButton>
        <HiddenFileInput
          id="image-upload"
          type="file"
          accept="image/*"
          onChange={handleImageSelect}
        />
        
        <CharacterCount>
          {content.length}/1000
        </CharacterCount>
      </ActionsBar>
    </Container>
  );
};

export default CommunityPost;

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import {
  ArrowBack as ArrowBackIcon,
  Add as AddIcon,
  Search as SearchIcon,
  FilterList as FilterIcon,
  FavoriteBorder as HeartIcon,
  ChatBubbleOutline as CommentIcon,
  Share as ShareIcon,
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

const HeaderActions = styled.div`
  display: flex;
  gap: 8px;
`;

const IconButton = styled.button`
  background: none;
  border: none;
  padding: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #757575;
  
  &:hover {
    color: #333;
  }
`;

const FilterContainer = styled.div`
  display: flex;
  padding: 16px 20px;
  gap: 12px;
  border-bottom: 1px solid #E0E0E0;
  overflow-x: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  
  &::-webkit-scrollbar {
    display: none;
  }
`;

const FilterChip = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== 'active'
})`
  background: ${props => props.active ? '#2196F3' : '#F5F5F5'};
  color: ${props => props.active ? 'white' : '#757575'};
  border: none;
  border-radius: 20px;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
  flex-shrink: 0;
  
  &:hover {
    background: ${props => props.active ? '#1976D2' : '#E0E0E0'};
  }
`;

const PostsList = styled.div`
  padding: 0 20px;
`;

const PostCard = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid #F0F0F0;
  cursor: pointer;
  
  &:hover {
    background-color: #FAFAFA;
  }
  
  &:last-child {
    border-bottom: none;
  }
`;

const PostHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`;

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${props => props.color || '#E3F2FD'};
  margin-right: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  color: #333;
`;

const PostInfo = styled.div`
  flex: 1;
`;

const Username = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #333;
  margin-bottom: 2px;
`;

const PostTime = styled.div`
  font-size: 12px;
  color: #757575;
`;

const PostTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin: 0 0 8px 0;
  line-height: 1.4;
`;

const PostContent = styled.p`
  font-size: 14px;
  color: #666;
  margin: 0 0 12px 0;
  line-height: 1.5;
`;

const PostActions = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const ActionButton = styled.button`
  background: none;
  border: none;
  font-size: 14px;
  color: #757575;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
  
  &:hover {
    color: #333;
  }
`;

const FAB = styled.button`
  position: fixed;
  bottom: 80px;
  right: 20px;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: #2196F3;
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(33, 150, 243, 0.4);
  transition: all 0.3s ease;
  z-index: 1000;
  
  &:hover {
    background: #1976D2;
    transform: scale(1.1);
  }
`;

const Community = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('All');
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [showSearch, setShowSearch] = useState(false);

  const filters = ['All', 'HOUSING', 'JOBS', 'STUDY', 'SOCIAL', 'HELP'];

  // Fetch posts from backend
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        let url = 'https://unithon1.shop/api/posts';
        const params = new URLSearchParams();
        
        if (activeFilter !== 'All') {
          params.append('category', activeFilter);
        }
        
        if (searchKeyword.trim()) {
          params.append('keyword', searchKeyword.trim());
        }
        
        if (params.toString()) {
          url += `?${params.toString()}`;
        }
        
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
        setError('Failed to load posts');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [activeFilter, searchKeyword]);

  const filteredPosts = activeFilter === 'All' 
    ? posts 
    : posts.filter(post => post.category === activeFilter);

  return (
    <Container>
      <Header>
        <BackButton onClick={() => navigate('/')}>
          <ArrowBackIcon />
        </BackButton>
        <Title>Community</Title>
      </Header>

      {loading && <div style={{ padding: '20px', textAlign: 'center' }}>Loading posts...</div>}
      {error && <div style={{ padding: '20px', textAlign: 'center', color: 'red' }}>{error}</div>}
      
      <PostsList>
        {posts.map(post => (
          <PostCard key={post.id} onClick={() => navigate(`/community/post/${post.id}`)}>
            <PostHeader>
              <Avatar color={getAvatarColor(post.nickname)}>
                {post.nickname.charAt(0).toUpperCase()}
              </Avatar>
              <PostInfo>
                <Username>{post.nickname}</Username>
                <PostTime>{formatDate(post.createdAt)}</PostTime>
              </PostInfo>
            </PostHeader>
            <PostTitle>{post.title}</PostTitle>
            <PostContent>{post.content}</PostContent>
            <PostActions>
              <span>❤️ {post.likeCount}</span>
              <span>💬 {post.commentCount}</span>
            </PostActions>
          </PostCard>
        ))}
      </PostsList>

      <FAB onClick={() => navigate('/community/post')}>
        <AddIcon />
      </FAB>
    </Container>
  );
};

// Helper functions
const getAvatarColor = (nickname) => {
  const colors = ['#FF6B6B', '#F3E5F5', '#E8F5E8', '#FFF3E0', '#E3F2FD'];
  return colors[nickname.length % colors.length];
};

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const now = new Date();
  const diffInHours = Math.floor((now - date) / (1000 * 60 * 60));
  
  if (diffInHours < 1) return 'Just now';
  if (diffInHours < 24) return `${diffInHours} hours ago`;
  if (diffInHours < 48) return '1 day ago';
  return `${Math.floor(diffInHours / 24)} days ago`;
};

export default Community;
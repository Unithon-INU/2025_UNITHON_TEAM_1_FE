import React, { useState } from 'react';
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

const FilterChip = styled.button`
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

  const filters = ['All', 'Housing', 'Jobs', 'Study', 'Social', 'Help'];

  // In the posts array, you'll want to fetch real data from API
  // For now, update the hardcoded data to use more realistic nicknames
  const posts = [
    {
      id: 1,
      username: 'StudentA', // This should come from API
      avatar: 'S',
      avatarColor: '#FF6B6B',
      time: '2 hours ago',
      category: 'General',
      title: 'Welcome to our university community!',
      content: 'Looking forward to connecting with fellow students...',
      likes: 24,
      comments: 10,
    },
    {
      id: 2,
      username: 'Mike Johnson',
      avatar: 'MJ',
      avatarColor: '#F3E5F5',
      time: '1 day ago',
      title: 'Best places to study on campus?',
      content: 'Looking for quiet study spots on campus. The library is always crowded. Any hidden gems?',
      likes: 8,
      comments: 5,
      category: 'Study'
    },
    {
      id: 3,
      username: 'Emma Chen',
      avatar: 'EC',
      avatarColor: '#E8F5E8',
      time: '3 days ago',
      title: 'Looking for a roommate for spring semester',
      content: 'Female student looking for a roommate near Hongik University. Clean, quiet, and friendly!',
      likes: 23,
      comments: 12,
      category: 'Housing'
    },
    {
      id: 4,
      username: 'David Park',
      avatar: 'DP',
      avatarColor: '#FFF3E0',
      time: '1 week ago',
      title: 'Korean language exchange group',
      content: 'Starting a language exchange group for international students. Meet every Saturday at 2 PM!',
      likes: 31,
      comments: 18,
      category: 'Social'
    }
  ];

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

      <FilterContainer>
        {filters.map(filter => (
          <FilterChip
            key={filter}
            active={activeFilter === filter}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </FilterChip>
        ))}
      </FilterContainer>

      <PostsList>
        {filteredPosts.map(post => (
          <PostCard key={post.id} onClick={() => navigate(`/community/post/${post.id}`)}>
            <PostHeader>
              <Avatar color={post.avatarColor}>
                {post.avatar}
              </Avatar>
              <PostInfo>
                <Username>{post.username}</Username>
                <PostTime>{post.time}</PostTime>
              </PostInfo>
            </PostHeader>
            <PostTitle>{post.title}</PostTitle>
            <PostContent>{post.content}</PostContent>
            <PostActions>
              <ActionButton>
                ❤️ {post.likes}
              </ActionButton>
              <ActionButton>
                💬 {post.comments}
              </ActionButton>
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

export default Community;
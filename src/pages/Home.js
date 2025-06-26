import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  background-color: white;
  min-height: 100vh;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  gap: 12px;
`;

const LogoImage = styled.img`
  width: 40px;
  height: auto;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  color: #333;
  margin: 0;
`;

const TabContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
  border-bottom: 1px solid #E0E0E0;
`;

const Tab = styled.button`
  background: none;
  border: none;
  padding: 12px 16px;
  font-size: 16px;
  font-weight: ${props => props.active ? '600' : '400'};
  color: ${props => props.active ? '#333' : '#757575'};
  border-bottom: ${props => props.active ? '2px solid #2196F3' : 'none'};
  cursor: pointer;
  margin-right: 20px;
`;

const SectionTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin: 30px 0 16px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ViewAllButton = styled.button`
  background: none;
  border: none;
  color: #2196F3;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  
  &:hover {
    text-decoration: underline;
  }
`;

const PostCard = styled.div`
  display: flex;
  margin-bottom: 16px;
  cursor: pointer;
  
  &:hover {
    opacity: 0.8;
  }
`;

const PostImage = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 8px;
  background: ${props => props.color || '#E3F2FD'};
  margin-right: 16px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 600;
  color: #333;
`;

const PostContent = styled.div`
  flex: 1;
`;

const PostTitle = styled.h3`
  font-size: 16px;
  font-weight: 500;
  color: #333;
  margin: 0 0 8px 0;
  line-height: 1.4;
`;

const PostMeta = styled.p`
  font-size: 14px;
  color: #757575;
  margin: 0;
`;

const CategoryTag = styled.span`
  display: inline-block;
  background: #E3F2FD;
  color: #1976D2;
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
  margin-right: 8px;
`;

const LikeCount = styled.span`
  color: #F44336;
  font-weight: 500;
`;

const ClubCard = styled.div`
  display: flex;
  margin-bottom: 16px;
  cursor: pointer;
  
  &:hover {
    opacity: 0.8;
  }
`;

const ClubImage = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 8px;
  background: ${props => props.color || '#E8F5E8'};
  margin-right: 16px;
  flex-shrink: 0;
`;

const ClubContent = styled.div`
  flex: 1;
`;

const ClubName = styled.h3`
  font-size: 16px;
  font-weight: 500;
  color: #333;
  margin: 0 0 4px 0;
`;

const ClubDescription = styled.p`
  font-size: 14px;
  color: #757575;
  margin: 0;
`;

const JobCard = styled.div`
  background: white;
  border: 1px solid #E0E0E0;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
  cursor: pointer;
  
  &:hover {
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  }
`;

const JobTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin: 0 0 8px 0;
`;

const JobLocation = styled.p`
  font-size: 14px;
  color: #757575;
  margin: 0;
`;

const ApplyButton = styled.button`
  background: #2196F3;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 500;
  margin-top: 12px;
  cursor: pointer;
  
  &:hover {
    background: #1976D2;
  }
`;

const LoadingText = styled.div`
  text-align: center;
  color: #757575;
  padding: 20px;
`;

const Home = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('For You');
  const [topPosts, setTopPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Helper function to get avatar color
  const getAvatarColor = (nickname) => {
    const colors = ['#FF6B6B', '#F3E5F5', '#E8F5E8', '#FFF3E0', '#E3F2FD'];
    return colors[nickname.length % colors.length];
  };

  // Helper function to format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor((now - date) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${diffInHours} hours ago`;
    if (diffInHours < 48) return '1 day ago';
    return `${Math.floor(diffInHours / 24)} days ago`;
  };

  // Fetch top 3 most liked posts
  useEffect(() => {
    const fetchTopPosts = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://unithon1.shop/api/posts/top', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        
        if (!response.ok) {
          throw new Error('Failed to fetch top posts');
        }
        
        const data = await response.json();
        setTopPosts(data);
      } catch (error) {
        console.error('Error fetching top posts:', error);
        // Fallback to empty array if API fails
        setTopPosts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchTopPosts();
  }, []);

  const clubs = [
    {
      id: 1,
      name: 'International Student Association',
      description: 'Connect with students from around the world',
      color: '#E8F5E8'
    },
    {
      id: 2,
      name: 'Korean Culture Club',
      description: 'Explore Korean culture and traditions',
      color: '#FFF3E0'
    }
  ];

  const jobs = [
    {
      id: 1,
      title: 'Software Engineer',
      location: 'Seoul, South Korea • Full-time'
    }
  ];

  return (
    <Container>
      <Header>
        <LogoImage src="/assets/images/logo.png" alt="UniBus Logo" />
        <Title>Home</Title>
      </Header>

      <SectionTitle>
        Board
        <ViewAllButton onClick={() => navigate('/community')}>
          View All
        </ViewAllButton>
      </SectionTitle>
      
      {loading ? (
        <LoadingText>Loading popular posts...</LoadingText>
      ) : topPosts.length > 0 ? (
        topPosts.map(post => (
          <PostCard key={post.id} onClick={() => navigate(`/community/post/${post.id}`)}>
            <PostImage color={getAvatarColor(post.nickname)}>
              {post.nickname.charAt(0).toUpperCase()}
            </PostImage>
            <PostContent>
              <PostTitle>{post.title}</PostTitle>
              <PostMeta>
                <CategoryTag>{post.category}</CategoryTag>
                <LikeCount>❤️ {post.likeCount}</LikeCount> • {post.commentCount} comments • {formatDate(post.createdAt)}
              </PostMeta>
            </PostContent>
          </PostCard>
        ))
      ) : (
        <LoadingText>No popular posts available</LoadingText>
      )}

      <SectionTitle>Clubs</SectionTitle>
      {clubs.map(club => (
        <ClubCard key={club.id} onClick={() => navigate(`/clubs/${club.id}`)}>
          <ClubImage color={club.color} />
          <ClubContent>
            <ClubName>{club.name}</ClubName>
            <ClubDescription>{club.description}</ClubDescription>
          </ClubContent>
        </ClubCard>
      ))}

      <SectionTitle>Jobs</SectionTitle>
      {jobs.map(job => (
        <JobCard key={job.id} onClick={() => navigate('/jobs')}>
          <JobTitle>{job.title}</JobTitle>
          <JobLocation>{job.location}</JobLocation>
          <ApplyButton onClick={(e) => { e.stopPropagation(); navigate('/jobs'); }}>Apply</ApplyButton>
        </JobCard>
      ))}
    </Container>
  );
};

export default Home;
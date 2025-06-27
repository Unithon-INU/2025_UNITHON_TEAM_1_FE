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
  align-items: center;
  margin-bottom: 30px;
  position: relative;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  color: #333;
  margin: 0;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

const LogoImage = styled.img`
  width: 40px;
  height: auto;
  z-index: 1;
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
  color: #757575;
  font-weight: 400;
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
  display: flex;
  align-items: center;
  justify-content: center;
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



const LoadingText = styled.div`
  text-align: center;
  color: #757575;
  padding: 20px;
`;

const Home = () => {
  const navigate = useNavigate();
  const [topPosts, setTopPosts] = useState([]);
  const [topClubs, setTopClubs] = useState([]);
  const [topJobs, setTopJobs] = useState([]);
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

  // Helper function to get total like count
  const getTotalLikeCount = (post) => {
    const allPostLikes = JSON.parse(localStorage.getItem('allPostLikes') || '{}');
    const localLikes = allPostLikes[post.id.toString()] || 0;
    return post.likeCount + localLikes;
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
        setTopPosts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchTopPosts();
  }, []);

  // Set top 3 clubs from the clubs list
  useEffect(() => {
    // Top 3 clubs from the clubs list (first 3 clubs)
    const clubs = [
      {
        id: 1,
        name: 'INUO',
        category: 'Culture Division',
        description: 'Orchestra Club - Experience classical music and orchestral performances with fellow musicians.',
        members: 45,
        location: 'Music Hall',
        logo: '🎼',
        color: '#E3F2FD'
      },
      {
        id: 2,
        name: 'IUDC',
        category: 'Culture Division',
        description: 'Dance Club - Express yourself through various dance styles and choreography.',
        members: 38,
        location: 'Dance Studio',
        logo: '💃',
        color: '#F3E5F5'
      },
      {
        id: 3,
        name: '인인극회',
        category: 'Culture Division',
        description: 'Theater Club - Explore acting, directing, and theatrical productions.',
        members: 32,
        location: 'Theater',
        logo: '🎭',
        color: '#FFF3E0'
      }
    ];
    
    setTopClubs(clubs);
  }, []);

  // Set top 3 jobs from the jobs list
  useEffect(() => {
    // Top 3 jobs from the jobs list
    const jobs = [
      {
        id: 1,
        title: 'Solder Paste Technology Developer',
        company: '엠케이전자',
        location: 'Eumseong-gun, Chungcheongbuk-do',
        schedule: 'Temporary',
        logo: 'https://dw42ybivffkam.cloudfront.net/0d0725c0-6762-42a5-9955-ede5e6e849c3.jpeg?format=auto&width=1920&quality=100',
        color: '#E3F2FD',
        category: 'R&D'
      },
      {
        id: 2,
        title: 'Recruiting foreign service/marketing planning/publisher',
        company: '(주)전북은행',
        location: 'Yeongdeungpo-gu, Seoul',
        schedule: 'Intern',
        logo: 'https://dw42ybivffkam.cloudfront.net/9cf33b0c-62b6-4251-92eb-4bd181b764c2.png?format=auto&width=1920&quality=100',
        color: '#E8F5E8',
        category: 'Marketing/Ads'
      },
      {
        id: 3,
        title: 'Recruitment for Samji Electronics Signal Processing Team',
        company: '삼지전자',
        location: 'Hwaseong-si, Gyeonggi-do',
        schedule: 'Full Time',
        logo: 'https://dw42ybivffkam.cloudfront.net/8d2d9b78-d325-4d5f-af08-0270e53b7b63.png?format=auto&width=1920&quality=100',
        color: '#FFF3E0',
        category: 'IT'
      }
    ];
    
    setTopJobs(jobs);
  }, []);

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
                <LikeCount>♡ {getTotalLikeCount(post)}</LikeCount> • {post.commentCount} comments • {formatDate(post.createdAt)}
              </PostMeta>
            </PostContent>
          </PostCard>
        ))
      ) : (
        <LoadingText>No popular posts available</LoadingText>
      )}

      <SectionTitle>
        Clubs
        <ViewAllButton onClick={() => navigate('/clubs')}>
          View All
        </ViewAllButton>
      </SectionTitle>
      {topClubs.map(club => (
        <ClubCard key={club.id} onClick={() => navigate('/clubs')}>
          <ClubImage color={club.color}>
            <span style={{ fontSize: '24px' }}>{club.logo}</span>
          </ClubImage>
          <ClubContent>
            <ClubName>{club.name}</ClubName>
            <ClubDescription>{club.description}</ClubDescription>
          </ClubContent>
        </ClubCard>
      ))}

      <SectionTitle>
        Jobs
        <ViewAllButton onClick={() => navigate('/jobs')}>
          View All
        </ViewAllButton>
      </SectionTitle>
      {topJobs.map(job => (
        <ClubCard key={job.id} onClick={() => navigate('/jobs')}>
          <ClubImage color={job.color}>
            {job.logo.startsWith('http') ? (
              <img src={job.logo} alt={job.company} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }} />
            ) : (
              <span style={{ fontSize: '24px' }}>{job.logo}</span>
            )}
          </ClubImage>
          <ClubContent>
            <ClubName>{job.title}</ClubName>
            <ClubDescription>{job.company} • {job.location}</ClubDescription>
          </ClubContent>
        </ClubCard>
      ))}
    </Container>
  );
};

export default Home;
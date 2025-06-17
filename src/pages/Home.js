import React from 'react';
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

const SectionCard = styled.div`
  background: white;
  border-radius: 16px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const MoreButton = styled.button`
  background: none;
  border: none;
  color: #757575;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  padding: 8px 0;
  margin-top: 12px;
  width: 100%;
  text-align: center;
  transition: color 0.3s ease;
  
  &:hover {
    color: #2196F3;
  }
`;

const PostPreview = styled.div`
  padding: 12px 0;
  border-bottom: 1px solid #F0F0F0;
  cursor: pointer;
  transition: background 0.3s ease;
  border-radius: 8px;
  margin: 0 -8px;
  padding: 12px 8px;
  
  &:hover {
    background: #F8F9FA;
  }
  
  &:last-child {
    border-bottom: none;
  }
`;

const Home = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = React.useState('For You');

  const boardPosts = [
    {
      id: 1,
      title: 'How to find a part-time job in Seoul?',
      meta: '10 comments • 2 hours ago',
      color: '#E3F2FD'
    },
    {
      id: 2,
      title: 'Best places to study on campus?',
      meta: '5 comments • 1 day ago',
      color: '#F3E5F5'
    },
    {
      id: 3,
      title: 'Looking for a roommate for the spring semester',
      meta: '12 comments • 3 days ago',
      color: '#E8F5E8'
    }
  ];

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
        <Title>Home</Title>
      </Header>

      <SectionTitle>Board</SectionTitle>
      {boardPosts.map(post => (
        <PostCard key={post.id} onClick={() => navigate(`/community/post/${post.id}`)}>
          <PostImage color={post.color} />
          <PostContent>
            <PostTitle>{post.title}</PostTitle>
            <PostMeta>{post.meta}</PostMeta>
          </PostContent>
        </PostCard>
      ))}

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
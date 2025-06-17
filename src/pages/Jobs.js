import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import {
  ArrowBack as ArrowBackIcon,
  Search as SearchIcon,
  FilterList as FilterIcon,
  LocationOn as LocationIcon,
  Schedule as ScheduleIcon,
  AttachMoney as MoneyIcon,
  Business as BusinessIcon,
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
  
  &:hover {
    background: ${props => props.active ? '#1976D2' : '#E0E0E0'};
  }
`;

const JobsList = styled.div`
  padding: 0 20px;
`;

const JobCard = styled.div`
  background: white;
  border: 1px solid #E0E0E0;
  border-radius: 12px;
  padding: 20px;
  margin: 16px 0;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    transform: translateY(-2px);
  }
`;

const JobHeader = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 16px;
`;

const CompanyLogo = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 8px;
  background: ${props => props.color || '#E3F2FD'};
  margin-right: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  flex-shrink: 0;
`;

const JobInfo = styled.div`
  flex: 1;
`;

const JobTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin: 0 0 4px 0;
  line-height: 1.3;
`;

const CompanyName = styled.div`
  font-size: 14px;
  color: #757575;
  margin-bottom: 8px;
`;

const JobType = styled.span`
  background: ${props => {
    switch(props.type) {
      case 'Full-time': return '#E8F5E8';
      case 'Part-time': return '#FFF3E0';
      case 'Internship': return '#E3F2FD';
      default: return '#F5F5F5';
    }
  }};
  color: ${props => {
    switch(props.type) {
      case 'Full-time': return '#2E7D32';
      case 'Part-time': return '#F57C00';
      case 'Internship': return '#1976D2';
      default: return '#757575';
    }
  }};
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 500;
`;

const JobDescription = styled.p`
  font-size: 14px;
  color: #666;
  margin: 12px 0;
  line-height: 1.5;
`;

const JobDetails = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin: 16px 0;
`;

const DetailItem = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  color: #757575;
`;

const JobActions = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 16px;
`;

const ApplyButton = styled.button`
  background: #2196F3;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  flex: 1;
  transition: background 0.3s ease;
  
  &:hover {
    background: #1976D2;
  }
`;



const Jobs = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Full-time', 'Part-time', 'Internship', 'Remote'];

  const jobs = [
    {
      id: 1,
      title: 'Software Engineer',
      company: 'Samsung Electronics',
      type: 'Full-time',
      location: 'Seoul, Gangnam',
      salary: '₩45,000,000 - ₩65,000,000',
      schedule: 'Mon-Fri, 9AM-6PM',
      description: 'Join our international team developing cutting-edge mobile applications. Korean language skills preferred but not required.',
      logo: '📱',
      color: '#E3F2FD',
      posted: '2 days ago'
    },
    {
      id: 2,
      title: 'English Teacher',
      company: 'YBM Education',
      type: 'Part-time',
      location: 'Seoul, Hongdae',
      salary: '₩25,000 - ₩35,000/hour',
      schedule: 'Flexible hours',
      description: 'Teach English conversation classes to Korean students. Native English speaker required.',
      logo: '📚',
      color: '#E8F5E8',
      posted: '1 day ago'
    },
    {
      id: 3,
      title: 'Marketing Intern',
      company: 'Naver Corporation',
      type: 'Internship',
      location: 'Seoul, Bundang',
      salary: '₩1,500,000/month',
      schedule: 'Mon-Fri, 10AM-5PM',
      description: 'Support international marketing campaigns and content creation. Great opportunity for students.',
      logo: '📈',
      color: '#FFF3E0',
      posted: '3 days ago'
    },
    {
      id: 4,
      title: 'Cafe Staff',
      company: 'Starbucks Korea',
      type: 'Part-time',
      location: 'Seoul, Myeongdong',
      salary: '₩9,160/hour',
      schedule: 'Shifts available',
      description: 'Customer service in busy downtown location. Basic Korean communication required.',
      logo: '☕',
      color: '#F3E5F5',
      posted: '1 week ago'
    },
    {
      id: 5,
      title: 'UX Designer',
      company: 'Kakao Corp',
      type: 'Full-time',
      location: 'Seoul, Pangyo',
      salary: '₩40,000,000 - ₩55,000,000',
      schedule: 'Mon-Fri, 9AM-6PM',
      description: 'Design user experiences for mobile applications used by millions of Koreans.',
      logo: '🎨',
      color: '#FFF8E1',
      posted: '5 days ago'
    },
    {
      id: 6,
      title: 'Content Creator',
      company: 'YouTube Korea',
      type: 'Remote',
      location: 'Remote',
      salary: '₩30,000,000 - ₩45,000,000',
      schedule: 'Flexible',
      description: 'Create engaging content for international audiences. Video editing skills required.',
      logo: '🎬',
      color: '#FCE4EC',
      posted: '1 week ago'
    }
  ];

  const filteredJobs = activeFilter === 'All' 
    ? jobs 
    : jobs.filter(job => job.type === activeFilter);

  return (
    <Container>
      <Header>
        <BackButton onClick={() => navigate('/')}>
          <ArrowBackIcon />
        </BackButton>
        <Title>Job Career</Title>
        <HeaderActions>
          <IconButton>
            <SearchIcon />
          </IconButton>
          <IconButton>
            <FilterIcon />
          </IconButton>
        </HeaderActions>
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

      <JobsList>
        {filteredJobs.map(job => (
          <JobCard key={job.id} onClick={() => navigate(`/jobs/${job.id}`)}>
            <JobHeader>
              <CompanyLogo color={job.color}>
                {job.logo}
              </CompanyLogo>
              <JobInfo>
                <JobTitle>{job.title}</JobTitle>
                <CompanyName>{job.company}</CompanyName>
                <JobType type={job.type}>{job.type}</JobType>
              </JobInfo>
            </JobHeader>
            <JobDescription>{job.description}</JobDescription>
            <JobDetails>
              <DetailItem>
                <LocationIcon fontSize="small" />
                {job.location}
              </DetailItem>
              <DetailItem>
                <MoneyIcon fontSize="small" />
                {job.salary}
              </DetailItem>
              <DetailItem>
                <ScheduleIcon fontSize="small" />
                {job.schedule}
              </DetailItem>
              <DetailItem>
                <BusinessIcon fontSize="small" />
                Posted {job.posted}
              </DetailItem>
            </JobDetails>
            <JobActions>
              <ApplyButton>
                Apply Now
              </ApplyButton>
            </JobActions>
          </JobCard>
        ))}
      </JobsList>
    </Container>
  );
};

export default Jobs;
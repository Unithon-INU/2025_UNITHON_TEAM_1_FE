import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import {
  ArrowBack as ArrowBackIcon,
  Search as SearchIcon,
  FilterList as FilterIcon,
  LocationOn as LocationIcon,
  Schedule as ScheduleIcon,
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

const JobsList = styled.div`
  padding: 0 20px;
`;

// New kowork.kr inspired design
const JobCard = styled.div`
  position: relative;
  width: 100%;
  background: white;
  border: 1px solid #E0E0E0;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: #2196F3;
    box-shadow: 0 4px 12px rgba(33, 150, 243, 0.15);
    transform: translateY(-2px);
  }
`;

const JobHeader = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 16px;
`;

const CompanyLogo = styled.div`
  width: 48px;
  height: 48px;
  background: ${props => props.color || '#F5F5F5'};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  margin-right: 16px;
  flex-shrink: 0;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const JobInfo = styled.div`
  flex: 1;
  min-width: 0;
`;

const JobTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin: 0 0 4px 0;
  line-height: 1.4;
`;

const CompanyName = styled.p`
  font-size: 14px;
  color: #757575;
  margin: 0;
  font-weight: 500;
`;

const JobType = styled.span`
  background: #E3F2FD;
  color: #1976D2;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 500;
  margin-left: auto;
`;

const JobDetails = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
  flex-wrap: wrap;
`;

const DetailItem = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  color: #757575;
  
  svg {
    font-size: 16px;
  }
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Tag = styled.span`
  background: ${props => {
    switch(props.type) {
      case 'skill': return '#E8F5E8';
      case 'experience': return '#FFF3E0';
      case 'language': return '#F3E5F5';
      case 'visa': return '#E1F5FE';
      default: return '#F5F5F5';
    }
  }};
  color: ${props => {
    switch(props.type) {
      case 'skill': return '#2E7D32';
      case 'experience': return '#F57C00';
      case 'language': return '#7B1FA2';
      case 'visa': return '#0277BD';
      default: return '#757575';
    }
  }};
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 11px;
  font-weight: 500;
`;

const Jobs = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'IT', 'Marketing/Ads', 'Education', 'Translation', 'Sales/CS', 'Office/Administration', 'Service', 'Production/Manufacturing'];

  // Real job data from CSV file
  const jobs = [
    {
      id: 1,
      title: 'Solder Paste Technology Developer',
      company: '엠케이전자',
      location: 'Eumseong-gun, Chungcheongbuk-do',
      schedule: 'Temporary',
      logo: 'https://dw42ybivffkam.cloudfront.net/0d0725c0-6762-42a5-9955-ede5e6e849c3.jpeg?format=auto&width=1920&quality=100',
      color: '#E3F2FD',
      category: 'R&D',
      visatype: 'E-7 Sponsors',
      tags: [
        { text: 'R&D', type: 'skill' },
        { text: 'Technology', type: 'skill' },
        { text: 'E-7 Visa', type: 'visa' },
        { text: 'Technical English', type: 'language' }
      ]
    },
    {
      id: 2,
      title: 'Recruiting foreign service/marketing planning/publisher',
      company: '(주)전북은행',
      location: 'Yeongdeungpo-gu, Seoul',
      schedule: 'Intern',
      logo: 'https://dw42ybivffkam.cloudfront.net/9cf33b0c-62b6-4251-92eb-4bd181b764c2.png?format=auto&width=1920&quality=100',
      color: '#E8F5E8',
      category: 'Marketing/Ads',
      visatype: '',
      tags: [
        { text: 'Marketing', type: 'skill' },
        { text: 'Publishing', type: 'skill' },
        { text: 'Internship', type: 'experience' },
        { text: 'Korean/English', type: 'language' }
      ]
    },
    {
      id: 3,
      title: 'Recruitment for Samji Electronics Signal Processing Team',
      company: '삼지전자',
      location: 'Hwaseong-si, Gyeonggi-do',
      schedule: 'Full Time',
      logo: 'https://dw42ybivffkam.cloudfront.net/8d2d9b78-d325-4d5f-af08-0270e53b7b63.png?format=auto&width=1920&quality=100',
      color: '#FFF3E0',
      category: 'IT',
      visatype: 'E-7 Sponsors',
      tags: [
        { text: 'Signal Processing', type: 'skill' },
        { text: 'Electronics', type: 'skill' },
        { text: 'E-7 Visa', type: 'visa' },
        { text: 'Engineering', type: 'experience' }
      ]
    },
    {
      id: 4,
      title: 'StemOn Co., Ltd. Recruiting new and experienced embedded developers',
      company: '주식회사 스템온',
      location: 'Seongnam-si, Gyeonggi-do',
      schedule: 'Full Time',
      logo: 'https://dw42ybivffkam.cloudfront.net/6f12a921-6b4c-4784-a182-723fd71abb90.png?format=auto&width=1920&quality=100',
      color: '#F3E5F5',
      category: 'IT',
      visatype: 'E-7 Sponsors',
      tags: [
        { text: 'Embedded Systems', type: 'skill' },
        { text: 'C/C++', type: 'skill' },
        { text: 'E-7 Visa', type: 'visa' },
        { text: 'New/Experienced', type: 'experience' }
      ]
    },
    {
      id: 5,
      title: 'Global Business Development Manager (US RTM Market)',
      company: '주식회사 엑소시스템즈',
      location: 'Seongnam-si, Gyeonggi-do',
      schedule: 'Full Time',
      logo: 'https://dw42ybivffkam.cloudfront.net/2e1cfad9-e1e0-48f7-8ee3-6d69a82c19ca.png?format=auto&width=1920&quality=100',
      color: '#E1F5FE',
      category: 'Marketing/Ads',
      visatype: 'E-7 Sponsors',
      tags: [
        { text: 'Business Development', type: 'skill' },
        { text: 'Global Market', type: 'skill' },
        { text: 'E-7 Visa', type: 'visa' },
        { text: 'English Native', type: 'language' }
      ]
    },
    {
      id: 6,
      title: 'Hyundai Elevator Global Internship',
      company: '현대엘리베이터',
      location: 'Jongno-gu, Seoul',
      schedule: 'Intern',
      logo: 'https://dw42ybivffkam.cloudfront.net/bb0047c9-b748-4483-b589-5f87566deb80.png?format=auto&width=1920&quality=100',
      color: '#F1F8E9',
      category: 'Office/Administration',
      visatype: '',
      tags: [
        { text: 'Global Program', type: 'skill' },
        { text: 'Internship', type: 'experience' },
        { text: 'Foreign Students', type: 'experience' },
        { text: 'English', type: 'language' }
      ]
    },
    {
      id: 7,
      title: 'English-speaking influencer marketing (intern)',
      company: '(주)어댑트',
      location: 'Gangnam-gu, Seoul',
      schedule: 'Intern',
      logo: 'https://dw42ybivffkam.cloudfront.net/fc0b4940-40bb-47bd-b480-19346ad90543.png?format=auto&width=1920&quality=100',
      color: '#E8F5E8',
      category: 'Marketing/Ads',
      visatype: '',
      tags: [
        { text: 'Influencer Marketing', type: 'skill' },
        { text: 'Social Media', type: 'skill' },
        { text: 'Internship', type: 'experience' },
        { text: 'English Native', type: 'language' }
      ]
    },
    {
      id: 8,
      title: 'Performance Marketer (Japan Business)',
      company: '에이블리코퍼레이션',
      location: 'Seocho-gu, Seoul',
      schedule: 'Full Time',
      logo: 'https://dw42ybivffkam.cloudfront.net/a9976cf1-ba1b-4e0f-a03c-de418df8546a.jpeg?format=auto&width=1920&quality=100',
      color: '#FFF3E0',
      category: 'Marketing/Ads',
      visatype: 'E-7 Sponsors',
      tags: [
        { text: 'Performance Marketing', type: 'skill' },
        { text: 'Japan Market', type: 'skill' },
        { text: 'E-7 Visa', type: 'visa' },
        { text: 'Japanese', type: 'language' }
      ]
    },
    {
      id: 9,
      title: 'Hiring Italian Freelance Translators',
      company: '글나무주식회사',
      location: 'Jongno-gu, Seoul',
      schedule: 'Freelance',
      logo: 'https://dw42ybivffkam.cloudfront.net/s3-kowork-company-logos/50571841-054a-4ab0-9ccc-e815839504e3.png?format=auto&width=1920&quality=100',
      color: '#F3E5F5',
      category: 'Translation',
      visatype: '',
      tags: [
        { text: 'Italian Translation', type: 'skill' },
        { text: 'Freelance', type: 'experience' },
        { text: 'Remote Work', type: 'skill' },
        { text: 'Italian Native', type: 'language' }
      ]
    },
    {
      id: 10,
      title: 'Full-time: Teach Corporate English in Ulsan',
      company: 'SPEP',
      location: 'Ulju-gun, Ulsan',
      schedule: 'Full Time',
      logo: 'https://dw42ybivffkam.cloudfront.net/s3-kowork-company-logos/9672f93c-836a-4618-886e-0150c18b0610.jpeg?format=auto&width=1920&quality=100',
      color: '#E1F5FE',
      category: 'Education',
      visatype: '',
      tags: [
        { text: 'Corporate English', type: 'skill' },
        { text: 'Teaching', type: 'skill' },
        { text: 'Full Benefits', type: 'experience' },
        { text: 'English Native', type: 'language' }
      ]
    }
  ];

  const filteredJobs = activeFilter === 'All' 
    ? jobs 
    : jobs.filter(job => job.category === activeFilter);

  return (
    <Container>
      <Header>
        <BackButton onClick={() => navigate('/')}>
          <ArrowBackIcon />
        </BackButton>
        <Title>Job Career</Title>
        {/* Removed HeaderActions section with search and filter buttons */}
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
                {job.logo.startsWith('http') ? (
                  <img src={job.logo} alt={job.company} />
                ) : (
                  job.logo
                )}
              </CompanyLogo>
              <JobInfo>
                <JobTitle>{job.title}</JobTitle>
                <CompanyName>{job.company}</CompanyName>
              </JobInfo>
              <JobType>{job.schedule}</JobType>
            </JobHeader>
            
            <JobDetails>
              <DetailItem>
                <LocationIcon fontSize="small" />
                {job.location}
              </DetailItem>
              {job.visatype && (
                <DetailItem>
                  <BusinessIcon fontSize="small" />
                  {job.visatype}
                </DetailItem>
              )}
            </JobDetails>
            
            <TagsContainer>
              {job.tags.map((tag, index) => (
                <Tag key={index} type={tag.type}>
                  {tag.text}
                </Tag>
              ))}
            </TagsContainer>
          </JobCard>
        ))}
      </JobsList>
    </Container>
  );
};

export default Jobs;
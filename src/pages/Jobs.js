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

  const filters = ['All', 'R&D', 'Teaching', 'IT', 'Marketing', 'Sales'];

  // Job data using JSON structure
  const jobsData = [
    {
      "title": "Solder Paste Technology Developer",
      "company": "엠케이전자",
      "logo": "https://dw42ybivffkam.cloudfront.net/0d0725c0-6762-42a5-9955-ede5e6e849c3.jpeg?format=auto&width=1920&quality=100",
      "jobField": "R&D",
      "type": "Temporary",
      "visa": "E1~E7",
      "salary": "₩50,000,000 ~ ₩70,000,000/year (negotiable)",
      "location": "Eumseong-gun, Chungcheongbuk-do",
      "schedule": "Mon to Fri, 08:30 ~ 17:30 (flexible based on candidate's request)",
      "experience": "5+ years in solder paste/flux development",
      "language": "Intermediate to advanced English",
      "description": "Develop solder cream products, handle customer support, manage projects, and provide training. Work includes general SMT, automotive, and semiconductor product lines.",
      "responsibilities": [
        "Develop solder cream and flux technologies",
        "Develop SMT, automotive electrical, and semiconductor solder paste lines",
        "Respond to customer issues and requests",
        "Visit customers regularly and promote technologies",
        "Manage projects and train team members"
      ],
      "requirements": [
        "Bachelor's degree or higher (4 years)",
        "Major in Chemistry, Chemical Engineering, or related field",
        "Minimum 5 years of experience in solder paste flux development",
        "English proficiency (intermediate to advanced)"
      ],
      "contactPerson": "엠케이전자",
      "contactEmail": null,
      "contactPhone": null
    },
    {
      "title": "Recruitment for Samji Electronics Signal Processing Team",
      "company": "삼지전자",
      "logo": "https://dw42ybivffkam.cloudfront.net/8d2d9b78-d325-4d5f-af08-0270e53b7b63.png?format=auto&width=1920&quality=100",
      "jobField": "Etc",
      "type": "Full Time",
      "visa": "Employment Visa (E1~E7)",
      "salary": "Follow Company Inner Rule",
      "location": "63-27 Geumgok-ro, Hwaseong-si, Gyeonggi-do, Republic of Korea",
      "schedule": "Mon to Fri, 08:30 ~ 17:30",
      "experience": "New or experienced (2 years or more)",
      "language": null,
      "description": "Digital Board H/W testing and verification, design; Mass production transfer work",
      "responsibilities": [
        "Digital Board H/W testing and verification, design",
        "Mass production transfer work"
      ],
      "requirements": [
        "New or experienced (2 years or more)",
        "College graduate or higher",
        "Engineering major (electrical, electronic, information and communication related)",
        "Residing in Korea",
        "TOPIK level 3 or higher"
      ],
      "contactPerson": null,
      "contactEmail": null,
      "contactPhone": null
    },
    
    {
      "title": "Recruiting new and experienced embedded developers (foreigners welcome to apply)",
      "company": "주식회사 스템온",
      "logo": "https://dw42ybivffkam.cloudfront.net/6f12a921-6b4c-4784-a182-723fd71abb90.png?format=auto&width=1920&quality=100",
      "jobField": "IT",
      "type": "Full Time",
      "visa": "Employment Visa (E1~E7), Job Seeking Visa (D10), Residence (F2), Overseas Korean (F4), Permanent Residence (F5), International Marriage (F6)",
      "salary": "Decision After Interview",
      "location": "14, Galmachi-ro 288beon-gil, Jungwon-gu, Seongnam-si, Gyeonggi-do, Republic of Korea",
      "schedule": "Mon to Fri, 09:00 ~ 18:00",
      "experience": "New graduates or experienced",
      "language": null,
      "description": "Development of automated biotech equipment combining ultrasonic cell reprogramming technology for overseas market entry; Embedded development focused on MCU firmware using C/C++.",
      "responsibilities": null,
      "requirements": [
        "MCU firmware (C, C++) embedded development skills",
        "Major in electrical/electronic engineering, computer science, or related fields",
        "No restrictions on overseas business trips",
        "Excellent communication and quick understanding skills",
        "TOPIK Level 5 or higher"
      ],
      "contactPerson": null,
      "contactEmail": "stemon_recruit@stemon.co.kr",
      "contactPhone": "0316227720"
    },
    {
      "title": "Global Business Development Manager (US RTM Market)",
      "company": "주식회사 엑소시스템즈",
      "logo": "https://dw42ybivffkam.cloudfront.net/2e1cfad9-e1e0-48f7-8ee3-6d69a82c19ca.png?format=auto&width=1920&quality=100",
      "jobField": "Marketing/Ads",
      "type": "Full Time",
      "visa": "Employment Visa (E1~E7), International Marriage (F6), Residence (F2), Overseas Korean (F4), Permanent Residence (F5)",
      "salary": "Follow Company Inner Rule",
      "location": "43 Changeop-ro, Sujeong-gu, Seongnam-si, Gyeonggi-do, Republic of Korea",
      "schedule": "Mon, Tue, Wed, Thu, Fri / 09:30 ~ 18:30",
      "experience": "More than 3 years of related experience",
      "language": null,
      "description": "Securing US healthcare RTM market strategy and performing initial business development; Establishing GTM strategy for digital medical devices that have obtained domestic insurance benefits",
      "responsibilities": [
        "Securing US healthcare RTM market strategy and performing initial business development",
        "Establishing GTM strategy for digital medical devices that have obtained domestic insurance benefits"
      ],
      "requirements": [
        "Early pioneering experience in the US healthcare market",
        "Excellent communication skills and proposal-making ability",
        "Ability to derive and achieve marketing key factors",
        "More than 3 years of related experience"
      ],
      "contactPerson": null,
      "contactEmail": "exosystems@exosystems.io",
      "contactPhone": "0317019088"
    },
    {
      "title": "English-Speaking Influencer Marketing Intern",
      "company": "(주)어댑트",
      "logo": "https://dw42ybivffkam.cloudfront.net/fc0b4940-40bb-47bd-b480-19346ad90543.png?format=auto&width=1920&quality=100",
      "jobField": "Marketing/Ads",
      "type": "Intern",
      "visa": "D10, E1~E7, F1, F2, F3, F4, F5, F6",
      "salary": "Follow Company Inner Rule",
      "location": "534 Samseong-ro, Gangnam-gu, Seoul, Republic of Korea",
      "schedule": "Mon to Fri, 09:30 ~ 18:30",
      "experience": "Preferred: influencer marketing or SNS operation",
      "language": "English (Business level or higher); Spanish is a plus",
      "description": "Plan, produce, and analyze influencer/UGC video content. Operate SNS accounts, conduct trend research, and manage influencer outreach.",
      "responsibilities": [
        "Plan and produce UGC video content",
        "Seeding, contacting, and managing influencers",
        "Operate SNS channel accounts",
        "Analyze English-speaking short-form content trends"
      ],
      "requirements": [
        "Business-level English proficiency",
        "Valid visa (D10, E1~E7, F1, F2, F3, F4, F5, F6)",
        "Full-time availability during internship",
        "Strong communication skills",
        "Eagerness to learn and grow"
      ],
      "contactPerson": "(주)어댑트",
      "contactEmail": "hr@adaptkorea.com",
      "contactPhone": null
    }
    
    
    
  ];

  // Filter logic
  const filteredJobs = activeFilter === 'All' 
    ? jobsData 
    : jobsData.filter(job => job.jobField === activeFilter);

  return (
    <Container>
      <Header>
        <BackButton onClick={() => navigate(-1)}>
          <ArrowBackIcon />
        </BackButton>
        <Title>Jobs</Title>
      </Header>

      <FilterContainer>
        {filters.map((filter) => (
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
        {filteredJobs.map((job, index) => (
          <JobCard key={index} onClick={() => navigate(`/jobs/${encodeURIComponent(job.title)}`)}>
            <JobHeader>
              <CompanyLogo>
                {job.logo ? (
                  <img src={job.logo} alt={job.company} />
                ) : (
                  job.company.split(' ').map(word => word[0]).join('').slice(0, 2)
                )}
              </CompanyLogo>
              <JobInfo>
                <JobTitle>{job.title}</JobTitle>
                <CompanyName>{job.company}</CompanyName>
              </JobInfo>
              <JobType>{job.type}</JobType>
            </JobHeader>
            
            <JobDetails>
              <DetailItem>
                <LocationIcon fontSize="small" />
                {job.location}
              </DetailItem>
              {job.visa && (
                <DetailItem>
                  <BusinessIcon fontSize="small" />
                  Visa: {job.visa}
                </DetailItem>
              )}
            </JobDetails>
            
            <TagsContainer>
              <Tag type="skill">{job.jobField}</Tag>
              <Tag type="experience">{job.type}</Tag>
              <Tag type="visa">{job.visa}</Tag>
            </TagsContainer>
          </JobCard>
        ))}
      </JobsList>
    </Container>
  );
};

export default Jobs;
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import {
  ArrowBack as ArrowBackIcon,
  LocationOn as LocationIcon,
  Schedule as ScheduleIcon,
  AttachMoney as MoneyIcon,
  Work as WorkIcon,
  Language as LanguageIcon,
  School as EducationIcon,
  Person as PersonIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  Bookmark as BookmarkIcon,
  BookmarkBorder as BookmarkBorderIcon,
  Share as ShareIcon,
} from '@mui/icons-material';

const Container = styled.div`
  background-color: white;
  min-height: 100vh;
  padding-bottom: 100px;
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

const ActionButtons = styled.div`
  display: flex;
  gap: 8px;
`;

const ActionButton = styled.button`
  background: none;
  border: none;
  padding: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background 0.3s ease;
  
  &:hover {
    background: #F5F5F5;
  }
`;

const Content = styled.div`
  padding: 20px;
`;

const JobHeader = styled.div`
  margin-bottom: 24px;
`;

const CompanyLogo = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 16px;
  background: linear-gradient(135deg, #2196F3, #21CBF3);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  color: white;
  font-weight: 600;
  margin-bottom: 16px;
`;

const JobTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: #333;
  margin: 0 0 8px 0;
`;

const CompanyName = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: #2196F3;
  margin-bottom: 16px;
`;

const JobType = styled.div`
  display: inline-block;
  background: #E8F5E8;
  color: #2E7D32;
  padding: 6px 12px;
  border-radius: 16px;
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const QuickInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-bottom: 24px;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #666;
`;

const InfoIcon = styled.div`
  color: #2196F3;
  display: flex;
  align-items: center;
`;

const Section = styled.div`
  margin-bottom: 32px;
`;

const SectionTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin: 0 0 16px 0;
`;

const SectionContent = styled.div`
  font-size: 16px;
  line-height: 1.6;
  color: #666;
`;

const RequirementsList = styled.ul`
  margin: 0;
  padding-left: 20px;
  
  li {
    margin-bottom: 8px;
    font-size: 16px;
    line-height: 1.6;
    color: #666;
  }
`;

const ContactSection = styled.div`
  background: #F8F9FA;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 24px;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
  font-size: 14px;
  color: #666;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const ContactIcon = styled.div`
  color: #2196F3;
  display: flex;
  align-items: center;
`;

const ApplyButton = styled.button`
  position: fixed;
  bottom: 80px;
  left: 40px;
  right: 40px;
  padding: 16px;
  background: #2196F3;
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease;
  z-index: 999;
  
  &:hover {
    background: #1976D2;
  }
`;

const JobsPostDetail = () => {
  const navigate = useNavigate();
  const { jobTitle } = useParams();
  const [isBookmarked, setIsBookmarked] = useState(false);

  // Job data array (same as in Jobs.js)
  const jobsData = [
    {
      "title": "Solder Paste Technology Developer",
      "company": "엠케이전자",
      "jobField": "R&D",
      "type": "Temporary",
      "visa": "E1~E7",
      "salary": "₩50,000,000 ~ ₩70,000,000/year (negotiable)",
      "location": "157 Wonnamsandan-ro, Wonnam-myeon, Eumseong-gun, Chungcheongbuk-do, Republic of Korea",
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

  // Handler functions
  const handleApply = () => {
    alert(`This fuction will be adding`);
    // You can customize this to redirect to an application form
    // navigate('/apply', { state: { job: jobData } });
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: jobData?.title,
        text: `Check out this job: ${jobData?.title} at ${jobData?.company}`,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  // Find job by title
  const jobData = jobsData.find(job => job.title === decodeURIComponent(jobTitle));

  // Loading state
  if (!jobData) {
    return (
      <Container>
        <Header>
          <BackButton onClick={() => navigate('/jobs')}>
            <ArrowBackIcon />
          </BackButton>
          <Title>Job Details</Title>
        </Header>
        <div style={{ padding: '20px', textAlign: 'center', color: 'red' }}>
          Job not found
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <Header>
        <BackButton onClick={() => navigate('/jobs')}>
          <ArrowBackIcon />
        </BackButton>
        <Title>Job Details</Title>
        <ActionButtons>
          <ActionButton onClick={handleBookmark}>
            {isBookmarked ? <BookmarkIcon /> : <BookmarkBorderIcon />}
          </ActionButton>
          <ActionButton onClick={handleShare}>
            <ShareIcon />
          </ActionButton>
        </ActionButtons>
      </Header>

      <Content>
        <JobHeader>
          <CompanyLogo>
            {jobData.company.split(' ').map(word => word[0]).join('').slice(0, 2)}
          </CompanyLogo>
          <JobTitle>{jobData.title}</JobTitle>
          <CompanyName>{jobData.company}</CompanyName>
          <JobType>{jobData.type}</JobType>
        </JobHeader>

        <QuickInfo>
          <InfoItem>
            <InfoIcon>
              <MoneyIcon fontSize="small" />
            </InfoIcon>
            {jobData.salary}
          </InfoItem>
          <InfoItem>
            <InfoIcon>
              <LocationIcon fontSize="small" />
            </InfoIcon>
            {jobData.location}
          </InfoItem>
          <InfoItem>
            <InfoIcon>
              <ScheduleIcon fontSize="small" />
            </InfoIcon>
            {jobData.schedule}
          </InfoItem>
          <InfoItem>
            <InfoIcon>
              <WorkIcon fontSize="small" />
            </InfoIcon>
            {jobData.experience}
          </InfoItem>
          <InfoItem>
            <InfoIcon>
              <LanguageIcon fontSize="small" />
            </InfoIcon>
            {jobData.language}
          </InfoItem>
          {jobData.visa && (
            <InfoItem>
              <InfoIcon>
                <WorkIcon fontSize="small" />
              </InfoIcon>
              Visa: {jobData.visa}
            </InfoItem>
          )}
        </QuickInfo>

        <Section>
          <SectionTitle>Job Description</SectionTitle>
          <SectionContent>{jobData.description}</SectionContent>
        </Section>

        <Section>
          <SectionTitle>Responsibilities</SectionTitle>
          <RequirementsList>
            {jobData.responsibilities && jobData.responsibilities.length > 0 ? (
              jobData.responsibilities.map((item, index) => (
                <li key={index}>{item}</li>
              ))
            ) : (
              <li>No specific responsibilities listed</li>
            )}
          </RequirementsList>
        </Section>

        <Section>
          <SectionTitle>Requirements</SectionTitle>
          <RequirementsList>
            {jobData.requirements && jobData.requirements.length > 0 ? (
              jobData.requirements.map((item, index) => (
                <li key={index}>{item}</li>
              ))
            ) : (
              <li>No specific requirements listed</li>
            )}
          </RequirementsList>
        </Section>

        <ContactSection>
          <SectionTitle>Contact Information</SectionTitle>
          <ContactItem>
            <ContactIcon>
              <PersonIcon fontSize="small" />
            </ContactIcon>
            {jobData.contactPerson}
          </ContactItem>
          {jobData.contactEmail && (
            <ContactItem>
              <ContactIcon>
                <EmailIcon fontSize="small" />
              </ContactIcon>
              {jobData.contactEmail}
            </ContactItem>
          )}
          {jobData.contactPhone && (
            <ContactItem>
              <ContactIcon>
                <PhoneIcon fontSize="small" />
              </ContactIcon>
              {jobData.contactPhone}
            </ContactItem>
          )}
        </ContactSection>
      </Content>

      <ApplyButton onClick={handleApply}>
        Apply Now
      </ApplyButton>
    </Container>
  );
};

export default JobsPostDetail;
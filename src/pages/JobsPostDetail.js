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
  const { id } = useParams();
  const [isBookmarked, setIsBookmarked] = useState(false);

  // Sample job data - in real app, this would be fetched based on the ID
  const jobData = {
    1: {
      id: 1,
      title: 'English Tutor Position',
      company: 'Seoul Language Academy',
      type: 'Part-time',
      salary: '₩15,000/hour',
      location: 'Gangnam, Seoul',
      schedule: 'Flexible hours',
      experience: 'Entry level',
      language: 'English (Native)',
      description: 'We are looking for enthusiastic English tutors to join our team. This is a great opportunity for international students to earn money while sharing their language skills with Korean students.',
      responsibilities: [
        'Conduct one-on-one or small group English lessons',
        'Prepare lesson materials and activities',
        'Assess student progress and provide feedback',
        'Maintain a positive and encouraging learning environment'
      ],
      requirements: [
        'Native or near-native English proficiency',
        'Bachelor\'s degree (in progress or completed)',
        'Previous tutoring or teaching experience preferred',
        'Excellent communication and interpersonal skills',
        'Reliable and punctual',
        'Legal work permit in South Korea'
      ],
      contact: {
        person: 'Ms. Park Ji-hye',
        email: 'jobs@seoulacademy.co.kr',
        phone: '+82-2-1234-5678'
      }
    },
    2: {
      id: 2,
      title: 'Campus Tour Guide',
      company: 'Incheon National University',
      type: 'Part-time',
      salary: '₩12,000/hour',
      location: 'INU Campus, Incheon',
      schedule: 'Weekends',
      experience: 'Entry level',
      language: 'English & Korean',
      description: 'Join our international student services team as a campus tour guide. Help prospective international students and their families learn about our beautiful campus and academic programs.',
      responsibilities: [
        'Lead campus tours for prospective students and visitors',
        'Provide information about academic programs and campus life',
        'Answer questions about student services and facilities',
        'Assist with special events and orientation programs'
      ],
      requirements: [
        'Current INU student (undergraduate or graduate)',
        'Fluent in English and conversational Korean',
        'Outgoing personality and excellent communication skills',
        'Knowledge of campus facilities and academic programs',
        'Available on weekends and some weekdays',
        'Previous customer service experience preferred'
      ],
      contact: {
        person: 'International Affairs Office',
        email: 'international@inu.ac.kr',
        phone: '+82-32-835-8114'
      }
    }
  };

  const job = jobData[id] || jobData[1];

  // Remove these imports if no longer needed:
  // Bookmark as BookmarkIcon,
  // BookmarkBorder as BookmarkBorderIcon, 
  // Share as ShareIcon,
  
  // Remove these handler functions if they exist:
  // const handleBookmark = () => { ... }
  // const handleShare = () => { ... }

  const handleApply = () => {
    // Handle job application
    alert(`This function will be adding soon!`);
  };

  return (
    <Container>
      <Header>
        <BackButton onClick={() => navigate('/jobs')}>
          <ArrowBackIcon />
        </BackButton>
        <Title>Job Details</Title>
      </Header>

      <Content>
        <JobHeader>
          <CompanyLogo>
            {job.company.split(' ').map(word => word[0]).join('').slice(0, 2)}
          </CompanyLogo>
          <JobTitle>{job.title}</JobTitle>
          <CompanyName>{job.company}</CompanyName>
          <JobType>{job.type}</JobType>
        </JobHeader>

        <QuickInfo>
          <InfoItem>
            <InfoIcon>
              <MoneyIcon fontSize="small" />
            </InfoIcon>
            {job.salary}
          </InfoItem>
          <InfoItem>
            <InfoIcon>
              <LocationIcon fontSize="small" />
            </InfoIcon>
            {job.location}
          </InfoItem>
          <InfoItem>
            <InfoIcon>
              <ScheduleIcon fontSize="small" />
            </InfoIcon>
            {job.schedule}
          </InfoItem>
          <InfoItem>
            <InfoIcon>
              <WorkIcon fontSize="small" />
            </InfoIcon>
            {job.experience}
          </InfoItem>
          <InfoItem>
            <InfoIcon>
              <LanguageIcon fontSize="small" />
            </InfoIcon>
            {job.language}
          </InfoItem>
        </QuickInfo>

        <Section>
          <SectionTitle>Job Description</SectionTitle>
          <SectionContent>{job.description}</SectionContent>
        </Section>

        <Section>
          <SectionTitle>Responsibilities</SectionTitle>
          <RequirementsList>
            {job.responsibilities.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </RequirementsList>
        </Section>

        <Section>
          <SectionTitle>Requirements</SectionTitle>
          <RequirementsList>
            {job.requirements.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </RequirementsList>
        </Section>

        <ContactSection>
          <SectionTitle>Contact Information</SectionTitle>
          <ContactItem>
            <ContactIcon>
              <PersonIcon fontSize="small" />
            </ContactIcon>
            {job.contact.person}
          </ContactItem>
          <ContactItem>
            <ContactIcon>
              <EmailIcon fontSize="small" />
            </ContactIcon>
            {job.contact.email}
          </ContactItem>
          <ContactItem>
            <ContactIcon>
              <PhoneIcon fontSize="small" />
            </ContactIcon>
            {job.contact.phone}
          </ContactItem>
        </ContactSection>
      </Content>

      <ApplyButton onClick={handleApply}>
        Apply Now
      </ApplyButton>
    </Container>
  );
};

export default JobsPostDetail;
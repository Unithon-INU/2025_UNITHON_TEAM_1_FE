import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import {
  ArrowBack as ArrowBackIcon,
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
  padding: 0;
`;

const ClubImage = styled.div`
  width: 100%;
  height: 200px;
  background: linear-gradient(135deg, #2196F3, #21CBF3);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 48px;
  color: white;
  font-weight: 600;
`;

const ClubInfo = styled.div`
  padding: 20px;
`;

const ClubName = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: #333;
  margin: 0 0 8px 0;
`;

const ClubCategory = styled.div`
  display: inline-block;
  background: #E3F2FD;
  color: #1976D2;
  padding: 4px 12px;
  border-radius: 16px;
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 16px;
`;

const ClubDescription = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #666;
  margin: 0 0 24px 0;
`;

const InfoSection = styled.div`
  margin-bottom: 24px;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  font-size: 14px;
  color: #666;
`;

const InfoIcon = styled.div`
  margin-right: 12px;
  color: #2196F3;
  display: flex;
  align-items: center;
`;

const InfoText = styled.div`
  flex: 1;
`;

const ContactSection = styled.div`
  background: #F8F9FA;
  margin: 0 -20px;
  padding: 20px;
`;

const SectionTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin: 0 0 16px 0;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  font-size: 14px;
  color: #666;
`;

const ContactIcon = styled.div`
  margin-right: 12px;
  color: #2196F3;
  display: flex;
  align-items: center;
`;

const ContactText = styled.div`
  flex: 1;
`;

const JoinButton = styled.button`
  width: calc(100% - 40px);
  margin: 20px;
  padding: 16px;
  background: #2196F3;
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease;
  
  &:hover {
    background: #1976D2;
  }
`;

const EventsSection = styled.div`
  padding: 20px;
  border-top: 1px solid #E0E0E0;
`;

const EventCard = styled.div`
  background: white;
  border: 1px solid #E0E0E0;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 12px;
`;

const EventTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
`;

const EventDetails = styled.div`
  font-size: 14px;
  color: #666;
  display: flex;
  align-items: center;
  gap: 16px;
`;

const ClubsPost = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [isFavorited, setIsFavorited] = useState(false);

  // Sample club data - in real app, this would be fetched based on the ID
  const clubData = {
    id: id || '1',
    name: 'International Student Association',
    category: 'Cultural',
    description: 'A vibrant community for international students to connect, share experiences, and support each other in their academic journey in South Korea. We organize cultural events, study groups, and social activities throughout the year.',
    members: 245,
    meetingTime: 'Every Friday 6:00 PM',
    location: 'Student Center Room 301',
    established: '2018',
    contact: {
      email: 'isa@university.ac.kr',
      phone: '+82-10-1234-5678',
      website: 'www.isa-university.com'
    },
    events: [
      {
        title: 'Cultural Night 2024',
        date: 'March 15, 2024',
        time: '7:00 PM',
        location: 'Main Auditorium'
      },
      {
        title: 'Study Group - Korean Language',
        date: 'Every Tuesday',
        time: '5:00 PM',
        location: 'Library Study Room 3'
      }
    ]
  };

  const handleFavorite = () => {
    setIsFavorited(!isFavorited);
  };

  const handleShare = () => {
    // Handle share functionality
    if (navigator.share) {
      navigator.share({
        title: clubData.name,
        text: clubData.description,
        url: window.location.href
      });
    }
  };

  const handleJoin = () => {
    // Handle join club functionality
    alert('Join request sent! The club will contact you soon.');
  };

  return (
    <Container>
      <Header>
        <BackButton onClick={() => navigate('/clubs')}>
          <ArrowBackIcon />
        </BackButton>
        <Title>Club Details</Title>
      </Header>

      <Content>
        <ClubImage>
          {clubData.name.split(' ').map(word => word[0]).join('').slice(0, 3)}
        </ClubImage>

        <ClubInfo>
          <ClubName>{clubData.name}</ClubName>
          <ClubCategory>{clubData.category}</ClubCategory>
          <ClubDescription>{clubData.description}</ClubDescription>

        </ClubInfo>
      </Content>
    </Container>
  );
};

export default ClubsPost;
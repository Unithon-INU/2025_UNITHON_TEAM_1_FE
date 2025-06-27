import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Container = styled.div`
  padding: 20px;
  background-color: #f5f5f5;
  min-height: 100vh;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  padding: 10px 0;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  margin-right: 10px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin: 0;
`;

const GuideGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
`;

const GuideCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  display: flex;
  align-items: center;
  gap: 16px;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`;

const GuideIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 12px;
  background-color: ${props => props.color || '#2196F3'};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  flex-shrink: 0;
`;

const GuideContent = styled.div`
  flex: 1;
`;

const GuideTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin: 0 0 8px 0;
`;

const GuideDescription = styled.p`
  font-size: 14px;
  color: #666;
  margin: 0 0 8px 0;
  line-height: 1.4;
`;

const GuideCategory = styled.span`
  font-size: 12px;
  color: #2196F3;
  background-color: #E3F2FD;
  padding: 4px 8px;
  border-radius: 12px;
  font-weight: 500;
`;

function Guides() {
  const navigate = useNavigate();
  const [guides, setGuides] = useState([]);

  useEffect(() => {
    // Sample guide data
    const guideData = [
      {
        id: 1,
        title: 'Foreign Student Guide',
        description: 'Complete guide for international students studying in Korea.',
        category: 'International',
        icon: '🌍',
        color: '#4CAF50'
      },
      {
        id: 2,
        title: 'Job Application Guide',
        description: 'Step-by-step guide on applying for internships and full-time positions through UniBus.',
        category: 'Career',
        icon: '💼',
        color: '#FF9800'
      },
      {
        id: 3,
        title: 'Campus Navigation',
        description: 'Find your way around campus with our comprehensive location guide.',
        category: 'Campus',
        icon: '🗺️',
        color: '#9C27B0'
      },
      {
        id: 4,
        title: 'Study Tips',
        description: 'Effective study strategies and academic success tips for university students.',
        category: 'Academic',
        icon: '📚',
        color: '#2196F3'
      },
      {
        id: 5,
        title: 'Visa Tips',
        description: 'Complete guide to Korean visa types, requirements, and application processes for international students.',
        category: 'International',
        icon: '📋',
        color: '#FF5722'
      },
      {
        id: 6,
        title: 'Health Insurance Guide',
        description: 'Complete guide to Korean National Health Insurance (NHIS) for international students.',
        category: 'International',
        icon: '🏥',
        color: '#E91E63'
      }
    ];
    setGuides(guideData);
  }, []);

  const handleGuideClick = (guideId) => {
    navigate(`/guides/${guideId}`);
  };

  return (
    <Container>
      <Header>
        <BackButton onClick={() => navigate('/')}>
          <ArrowBackIcon />
        </BackButton>
        <Title>Guides</Title>
      </Header>
      
      <GuideGrid>
        {guides.map(guide => (
          <GuideCard key={guide.id} onClick={() => handleGuideClick(guide.id)}>
            <GuideIcon color={guide.color}>
              <span>{guide.icon}</span>
            </GuideIcon>
            <GuideContent>
              <GuideTitle>{guide.title}</GuideTitle>
              <GuideDescription>{guide.description}</GuideDescription>
              <GuideCategory>{guide.category}</GuideCategory>
            </GuideContent>
          </GuideCard>
        ))}
      </GuideGrid>
    </Container>
  );
}

export default Guides;
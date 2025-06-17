import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import {
  ArrowBack as ArrowBackIcon,
  Search as SearchIcon,
  FilterList as FilterIcon,
  People as PeopleIcon,
  LocationOn as LocationIcon,
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

const ClubsList = styled.div`
  padding: 0 20px;
`;

const ClubCard = styled.div`
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

const ClubHeader = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 16px;
`;

const ClubLogo = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 12px;
  background: ${props => props.color || '#E3F2FD'};
  margin-right: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  flex-shrink: 0;
`;

const ClubInfo = styled.div`
  flex: 1;
`;

const ClubName = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin: 0 0 8px 0;
  line-height: 1.3;
`;

const ClubCategory = styled.span`
  background: #E3F2FD;
  color: #1976D2;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 500;
`;

const ClubDescription = styled.p`
  font-size: 14px;
  color: #666;
  margin: 12px 0;
  line-height: 1.5;
`;

const ClubStats = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 16px;
`;

const StatItem = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  color: #757575;
`;

const JoinButton = styled.button`
  background: #2196F3;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 16px;
  transition: background 0.3s ease;
  
  &:hover {
    background: #1976D2;
  }
`;

const Clubs = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Culture Division', 'Sports Division', 'Academic Division', 'Hobby & Exhibition Division', 'Volunteer Division', 'Religious Division'];

  // University club data organized by divisions
  const clubs = [
    // Culture Division
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
    },
    {
      id: 4,
      name: '포크라인',
      category: 'Culture Division',
      description: 'Band Club - Create music and perform with acoustic and electric instruments.',
      members: 28,
      location: 'Music Room',
      logo: '🎸',
      color: '#E8F5E8'
    },
    {
      id: 5,
      name: '젊은영상',
      category: 'Culture Division',
      description: 'Video Production Club - Learn filmmaking, editing, and video production techniques.',
      members: 25,
      location: 'Media Center',
      logo: '🎬',
      color: '#FFF8E1'
    },
    {
      id: 6,
      name: '함성',
      category: 'Culture Division',
      description: 'Band Club - Rock and contemporary music performances and jam sessions.',
      members: 30,
      location: 'Band Room',
      logo: '🎵',
      color: '#E0F2F1'
    },
    {
      id: 7,
      name: 'UIAC(산악부)',
      category: 'Culture Division',
      description: 'Mountaineering (Climbing) Club - Explore mountains and develop climbing skills.',
      members: 42,
      location: 'Outdoor Center',
      logo: '🏔️',
      color: '#FCE4EC'
    },
    // Sports Division
    {
      id: 8,
      name: '다크호스',
      category: 'Sports Division',
      description: 'Table Tennis Club - Improve your ping pong skills through regular practice and tournaments.',
      members: 35,
      location: 'Sports Center',
      logo: '🏓',
      color: '#E3F2FD'
    },
    {
      id: 9,
      name: 'PANG',
      category: 'Sports Division',
      description: 'Table Tennis Club - Competitive table tennis training and inter-university matches.',
      members: 28,
      location: 'Gymnasium',
      logo: '🏓',
      color: '#F3E5F5'
    },
    {
      id: 10,
      name: 'UITC',
      category: 'Sports Division',
      description: 'Tennis Club - Learn tennis techniques and participate in friendly matches.',
      members: 40,
      location: 'Tennis Court',
      logo: '🎾',
      color: '#FFF3E0'
    },
    {
      id: 11,
      name: '리바운드',
      category: 'Sports Division',
      description: 'Basketball Club - Develop basketball skills and team spirit through regular games.',
      members: 45,
      location: 'Basketball Court',
      logo: '🏀',
      color: '#E8F5E8'
    },
    {
      id: 12,
      name: '효월검우회',
      category: 'Sports Division',
      description: 'Kendo Club - Learn traditional Japanese swordsmanship and martial arts discipline.',
      members: 22,
      location: 'Martial Arts Hall',
      logo: '⚔️',
      color: '#FFF8E1'
    },
    {
      id: 13,
      name: '싸우라비',
      category: 'Sports Division',
      description: 'Taekwondo Club - Master Korean martial arts and self-defense techniques.',
      members: 38,
      location: 'Taekwondo Hall',
      logo: '🥋',
      color: '#E0F2F1'
    },
    {
      id: 14,
      name: 'BOSS',
      category: 'Sports Division',
      description: 'Snowboarding Club - Hit the slopes and enjoy winter sports adventures.',
      members: 32,
      location: 'Sports Center',
      logo: '🏂',
      color: '#FCE4EC'
    },
    {
      id: 15,
      name: '인풋아웃풋',
      category: 'Sports Division',
      description: 'Futsal Club - Fast-paced indoor soccer games and skill development.',
      members: 48,
      location: 'Indoor Soccer Field',
      logo: '⚽',
      color: '#E3F2FD'
    },
    {
      id: 16,
      name: '페더스(배민)',
      category: 'Sports Division',
      description: 'Badminton Club - Improve agility and technique in this popular racquet sport.',
      members: 36,
      location: 'Badminton Court',
      logo: '🏸',
      color: '#F3E5F5'
    },
    {
      id: 17,
      name: '바이킹',
      category: 'Sports Division',
      description: 'Baseball Club - America\'s pastime with Korean enthusiasm and team spirit.',
      members: 42,
      location: 'Baseball Field',
      logo: '⚾',
      color: '#FFF3E0'
    },
    // Academic Division
    {
      id: 18,
      name: 'EDA',
      category: 'Academic Division',
      description: 'English Debate Club - Enhance critical thinking and public speaking skills.',
      members: 25,
      location: 'Debate Hall',
      logo: '🎤',
      color: '#E8F5E8'
    },
    {
      id: 19,
      name: '아르고나우츠',
      category: 'Academic Division',
      description: 'Stock Investment Club - Learn about financial markets and investment strategies.',
      members: 30,
      location: 'Business Building',
      logo: '📈',
      color: '#FFF8E1'
    },
    {
      id: 20,
      name: 'PINCOM',
      category: 'Academic Division',
      description: 'Programming Club - Code, create, and collaborate on software development projects.',
      members: 55,
      location: 'Computer Lab',
      logo: '💻',
      color: '#E0F2F1'
    },
    // Hobby & Exhibition Division
    {
      id: 21,
      name: '한아랑',
      category: 'Hobby & Exhibition Division',
      description: 'Comics/Anime Club - Explore Japanese and Korean pop culture, manga, and anime.',
      members: 28,
      location: 'Student Lounge',
      logo: '📚',
      color: '#FCE4EC'
    },
    {
      id: 22,
      name: 'Cookinu',
      category: 'Hobby & Exhibition Division',
      description: 'Cooking Club - Learn to prepare delicious Korean and international dishes.',
      members: 35,
      location: 'Cooking Lab',
      logo: '👨‍🍳',
      color: '#E3F2FD'
    },
    {
      id: 23,
      name: '보.인.다',
      category: 'Hobby & Exhibition Division',
      description: 'Board Game Club - Strategy, fun, and social gaming with fellow enthusiasts.',
      members: 32,
      location: 'Game Room',
      logo: '🎲',
      color: '#F3E5F5'
    },
    {
      id: 24,
      name: '기우회',
      category: 'Hobby & Exhibition Division',
      description: 'Go (Baduk) Club - Master the ancient strategy game of Go.',
      members: 18,
      location: 'Traditional Games Room',
      logo: '⚫',
      color: '#FFF3E0'
    },
    {
      id: 25,
      name: '인유공방',
      category: 'Hobby & Exhibition Division',
      description: 'DIY Crafts Club - Create handmade items and explore various craft techniques.',
      members: 26,
      location: 'Art Studio',
      logo: '🎨',
      color: '#E8F5E8'
    },
    // Volunteer Division
    {
      id: 26,
      name: '로타랙트',
      category: 'Volunteer Division',
      description: 'Volunteer Club - Community service and social responsibility projects.',
      members: 40,
      location: 'Community Center',
      logo: '🤝',
      color: '#FFF8E1'
    },
    {
      id: 27,
      name: '초아다솜',
      category: 'Volunteer Division',
      description: 'Good Neighbors Volunteer Club - International humanitarian aid and local community support.',
      members: 35,
      location: 'Volunteer Center',
      logo: '❤️',
      color: '#E0F2F1'
    },
    {
      id: 28,
      name: '느을사랑',
      category: 'Volunteer Division',
      description: 'Animal Volunteer Club - Care for animals and promote animal welfare.',
      members: 28,
      location: 'Animal Shelter',
      logo: '🐕',
      color: '#FCE4EC'
    },
    // Religious Division
    {
      id: 29,
      name: 'JOY선교회',
      category: 'Religious Division',
      description: 'Religious Club - Christian fellowship, worship, and spiritual growth.',
      members: 45,
      location: 'Chapel',
      logo: '✝️',
      color: '#E3F2FD'
    },
    {
      id: 30,
      name: 'CFM',
      category: 'Religious Division',
      description: 'Religious Club - Christian faith community with Bible study and fellowship.',
      members: 32,
      location: 'Prayer Room',
      logo: '📖',
      color: '#F3E5F5'
    },
    {
      id: 31,
      name: 'IVF',
      category: 'Religious Division',
      description: 'Religious Club - Inter-Varsity Fellowship for Christian students.',
      members: 38,
      location: 'Fellowship Hall',
      logo: '🕊️',
      color: '#FFF3E0'
    },
    {
      id: 32,
      name: 'JDM',
      category: 'Religious Division',
      description: 'Religious Club - Christian discipleship and mission-focused community.',
      members: 25,
      location: 'Mission Center',
      logo: '🌟',
      color: '#E8F5E8'
    },
    {
      id: 33,
      name: 'CCC',
      category: 'Religious Division',
      description: 'Religious Club - Campus Crusade for Christ, evangelism and discipleship.',
      members: 42,
      location: 'Campus Ministry',
      logo: '🙏',
      color: '#FFF8E1'
    },
    {
      id: 34,
      name: '가톨릭학생회',
      category: 'Religious Division',
      description: 'Religious Club - Catholic student community for worship and service.',
      members: 35,
      location: 'Catholic Center',
      logo: '⛪',
      color: '#E0F2F1'
    }
  ];

  const filteredClubs = activeFilter === 'All' 
    ? clubs 
    : clubs.filter(club => club.category === activeFilter);

  return (
    <Container>
      <Header>
        <BackButton onClick={() => navigate('/')}>
          <ArrowBackIcon />
        </BackButton>
        <Title>Clubs & Organizations</Title>

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

      <ClubsList>
        {filteredClubs.map(club => (
          <ClubCard key={club.id} onClick={() => navigate(`/clubs/${club.id}`)}>
            <ClubHeader>
              <ClubLogo color={club.color}>
                {club.logo}
              </ClubLogo>
              <ClubInfo>
                <ClubName>{club.name}</ClubName>
                <ClubCategory>{club.category}</ClubCategory>
              </ClubInfo>
            </ClubHeader>
            <ClubDescription>{club.description}</ClubDescription>
          </ClubCard>
        ))}
      </ClubsList>
    </Container>
  );
};

export default Clubs;
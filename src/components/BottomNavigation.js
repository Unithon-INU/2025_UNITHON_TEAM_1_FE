import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import {
  Home as HomeIcon,
  Forum as CommunityIcon,
  Groups as ClubsIcon,
  Work as JobsIcon,
  Person as PersonIcon,
} from '@mui/icons-material';

const NavContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 414px;
  height: 80px;
  background-color: white;
  border-top: 1px solid #E0E0E0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 1000;
  box-shadow: 0 -2px 10px rgba(0,0,0,0.1);
`;

const NavItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  padding: 8px;
  color: ${props => props.active ? '#2196F3' : '#757575'};
  transition: color 0.3s ease;
  
  &:hover {
    color: #2196F3;
  }
`;

const NavLabel = styled.span`
  font-size: 12px;
  margin-top: 4px;
  font-weight: ${props => props.active ? '600' : '400'};
`;

const BottomNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { path: '/', icon: HomeIcon, label: 'Home' },
    { path: '/community', icon: CommunityIcon, label: 'Community' },
    { path: '/clubs', icon: ClubsIcon, label: 'Clubs' },
    { path: '/jobs', icon: JobsIcon, label: 'Jobs' },
    { path: '/mypage', icon: PersonIcon, label: 'My Page' },
  ];

  return (
    <NavContainer>
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = location.pathname === item.path;
        
        return (
          <NavItem
            key={item.path}
            active={isActive}
            onClick={() => navigate(item.path)}
          >
            <Icon fontSize="medium" />
            <NavLabel active={isActive}>{item.label}</NavLabel>
          </NavItem>
        );
      })}
    </NavContainer>
  );
};

export default BottomNavigation;
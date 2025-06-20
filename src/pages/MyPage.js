import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from '../contexts/AuthContext';
import {
  ArrowBack as ArrowBackIcon,
  Settings as SettingsIcon,
  Edit as EditIcon,
  School as SchoolIcon,
  ExitToApp as LogoutIcon,
  Login as LoginIcon,
  ChevronRight as ChevronRightIcon,
} from '@mui/icons-material';

const Container = styled.div`
  background-color: #F5F5F5;
  min-height: 100vh;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 20px;
  background-color: white;
  border-bottom: 1px solid #E0E0E0;
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

const SettingsButton = styled.button`
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

const ProfileSection = styled.div`
  background: white;
  padding: 24px 20px;
  margin-bottom: 16px;
`;

const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Avatar = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, #2196F3, #21CBF3);
  margin-right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  font-weight: 600;
  color: white;
`;

const ProfileInfo = styled.div`
  flex: 1;
`;

const UserName = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: #333;
  margin: 0 0 4px 0;
`;

const UserStatus = styled.p`
  font-size: 14px;
  color: #757575;
  margin: 0;
`;

const EditButton = styled.button`
  background: #F5F5F5;
  border: none;
  border-radius: 8px;
  padding: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background: #E0E0E0;
  }
`;

const ProfileDetails = styled.div`
  display: grid;
  gap: 16px;
`;

const DetailItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const DetailIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background: #F5F5F5;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #757575;
`;

const DetailContent = styled.div`
  flex: 1;
`;

const DetailLabel = styled.div`
  font-size: 12px;
  color: #757575;
  margin-bottom: 2px;
`;

const DetailValue = styled.div`
  font-size: 14px;
  color: #333;
  font-weight: 500;
`;

const MenuSection = styled.div`
  background: white;
  margin-bottom: 16px;
`;

const SectionTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin: 0;
  padding: 16px 20px 8px 20px;
`;

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 20px;
  cursor: pointer;
  border-bottom: 1px solid #F0F0F0;
  
  &:hover {
    background: #FAFAFA;
  }
  
  &:last-child {
    border-bottom: none;
  }
`;

const MenuIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background: ${props => props.color || '#F5F5F5'};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
  color: ${props => props.iconColor || '#757575'};
`;

const MenuContent = styled.div`
  flex: 1;
`;

const MenuTitle = styled.div`
  font-size: 16px;
  color: #333;
  font-weight: 500;
  margin-bottom: 2px;
`;

const MenuSubtitle = styled.div`
  font-size: 14px;
  color: #757575;
`;

const EditModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  border-radius: 12px;
  padding: 24px;
  margin: 20px;
  width: 100%;
  max-width: 400px;
`;

const ModalTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin: 0 0 20px 0;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #E0E0E0;
  border-radius: 8px;
  font-size: 16px;
  margin-bottom: 20px;
  
  &:focus {
    outline: none;
    border-color: #2196F3;
  }
`;

const ModalActions = styled.div`
  display: flex;
  gap: 12px;
  justify-content: flex-end;
`;

const ModalButton = styled.button`
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease;
`;

const SaveButton = styled(ModalButton)`
  background: #2196F3;
  color: white;
  
  &:hover {
    background: #1976D2;
  }
`;

const CancelButton = styled(ModalButton)`
  background: #F5F5F5;
  color: #333;
  
  &:hover {
    background: #E0E0E0;
  }
`;

const LoginPrompt = styled.div`
  background: white;
  margin: 16px;
  padding: 32px 20px;
  border-radius: 12px;
  text-align: center;
`;

const LoginTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: #333;
  margin: 0 0 8px 0;
`;

const LoginSubtitle = styled.p`
  font-size: 16px;
  color: #757575;
  margin: 0 0 24px 0;
`;

const LoginButton = styled.button`
  background: #2196F3;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px 32px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease;
  
  &:hover {
    background: #1976D2;
  }
`;

const MyPage = () => {
  const { user, isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();
  const [userName, setUserName] = useState('Loading...');
  const [isEditingName, setIsEditingName] = useState(false);
  const [editedName, setEditedName] = useState('');
  const [tempName, setTempName] = useState('');

  // Fetch user data using the specific member ID
  useEffect(() => {
    const fetchUserData = async () => {
      if (isLoggedIn && user && user.id) {
        try {
          const response = await fetch(`https://unithon1.shop/api/members/${user.id}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${user.token || localStorage.getItem('token')}`
            }
          });
          
          if (response.ok) {
            const userData = await response.json();
            // Use the nickname from the API response
            setUserName(userData.nickname || 'User');
          } else {
            console.error('Failed to fetch user data');
            setUserName(user.nickname || 'User');
          }
        } catch (error) {
          console.error('Failed to fetch user data:', error);
          // Fallback to stored user data
          setUserName(user.nickname || 'User');
        }
      } else if (isLoggedIn && user) {
        // If no ID available, use stored nickname
        setUserName(user.nickname || 'User');
      }
    };

    fetchUserData();
  }, [isLoggedIn, user]);

  const handleEditName = () => {
    setTempName(userName);
    setIsEditingName(true);
  };

  const handleSaveName = () => {
    if (tempName.trim()) {
      setUserName(tempName.trim());
    }
    setIsEditingName(false);
  };

  const handleCancelEdit = () => {
    setTempName('');
    setIsEditingName(false);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const menuItems = [];

  if (!isLoggedIn) {
    return (
      <Container>
        <Header>
          <BackButton onClick={() => navigate('/')}>
            <ArrowBackIcon />
          </BackButton>
          <Title>My Page</Title>
        </Header>

        <LoginPrompt>
          <LoginIcon style={{ fontSize: 48, color: '#2196F3', marginBottom: 16 }} />
          <LoginTitle>Welcome to UniBus</LoginTitle>
          <LoginSubtitle>Please log in to access your profile and personalized features</LoginSubtitle>
          <LoginButton onClick={() => navigate('/login')}>
            Log In
          </LoginButton>
        </LoginPrompt>
      </Container>
    );
  }

  return (
    <Container>
      <Header>
        <BackButton onClick={() => navigate('/')}>
          <ArrowBackIcon />
        </BackButton>
        <Title>My Page</Title>
        <SettingsButton>
          <SettingsIcon />
        </SettingsButton>
      </Header>

      <ProfileSection>
        <ProfileHeader>
          <Avatar>
            {userName.split(' ').map(name => name[0]).join('').slice(0, 2)}
          </Avatar>
          <ProfileInfo>
            <UserName>{userName}</UserName>
            <UserStatus>International Student</UserStatus>
          </ProfileInfo>
          <EditButton onClick={handleEditName}>
            <EditIcon />
          </EditButton>
        </ProfileHeader>

        <ProfileDetails>
          <DetailItem>
            <DetailIcon>
              <SchoolIcon />
            </DetailIcon>
            <DetailContent>
              <DetailLabel>University</DetailLabel>
              <DetailValue>Incheon National University</DetailValue>
            </DetailContent>
          </DetailItem>
        </ProfileDetails>
      </ProfileSection>

      <MenuSection>
        <SectionTitle>Settings</SectionTitle>
        {menuItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <MenuItem key={index} onClick={item.onClick}>
              <MenuIcon color={item.color} iconColor={item.iconColor}>
                <Icon />
              </MenuIcon>
              <MenuContent>
                <MenuTitle>{item.title}</MenuTitle>
                <MenuSubtitle>{item.subtitle}</MenuSubtitle>
              </MenuContent>
              <ChevronRightIcon color="action" />
            </MenuItem>
          );
        })}
      </MenuSection>

      <MenuSection>
        <MenuItem onClick={handleLogout}>
          <MenuIcon color="#FFEBEE" iconColor="#F44336">
            <LogoutIcon />
          </MenuIcon>
          <MenuContent>
            <MenuTitle style={{ color: '#F44336' }}>Sign Out</MenuTitle>
            <MenuSubtitle>Sign out of your account</MenuSubtitle>
          </MenuContent>
          <ChevronRightIcon color="action" />
        </MenuItem>
      </MenuSection>

      {isEditingName && (
        <EditModal>
          <ModalContent>
            <ModalTitle>Edit Profile</ModalTitle>
            <Input
              type="text"
              value={tempName}
              onChange={(e) => setTempName(e.target.value)}
              placeholder="Enter your name"
              autoFocus
            />
            <ModalActions>
              <CancelButton onClick={handleCancelEdit}>
                Cancel
              </CancelButton>
              <SaveButton onClick={handleSaveName}>
                Save
              </SaveButton>
            </ModalActions>
          </ModalContent>
        </EditModal>
      )}
    </Container>
  );
};

export default MyPage;
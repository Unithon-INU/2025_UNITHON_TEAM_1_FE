// Add useEffect import
import React, { useState, useCallback, useEffect } from 'react';
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

const MenuIcon = styled.div.withConfig({
  shouldForwardProp: (prop) => !['iconColor'].includes(prop),
})`
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

// Add this new styled component for the login prompt
const LoginPrompt = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  text-align: center;
  background: white;
  margin: 20px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
`;

const LoginPromptIcon = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: #E3F2FD;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  color: #2196F3;
`;

const LoginPromptTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: #333;
  margin: 0 0 12px 0;
`;

const LoginPromptText = styled.p`
  font-size: 16px;
  color: #666;
  margin: 0 0 24px 0;
  line-height: 1.5;
`;

const LoginButton = styled.button`
  background: #2196F3;
  color: white;
  border: none;
  padding: 12px 32px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background: #1976D2;
  }
`;

// Add new styled components for footer links
const FooterSection = styled.div`
  padding: 20px;
  text-align: center;
`;

const FooterLink = styled.button`
  background: none;
  border: none;
  color: #999;
  font-size: 12px;
  cursor: pointer;
  margin: 0 8px;
  text-decoration: underline;
  
  &:hover {
    color: #666;
  }
`;

const MyPage = () => {
  const { 
    user, 
    isLoggedIn, 
    logout, 
    token
  } = useAuth();
  
  const navigate = useNavigate();
  const [userName, setUserName] = useState('Loading...');
  const [isEditingName, setIsEditingName] = useState(false);
  const [tempName, setTempName] = useState('');

  // Update userName when user data is available
  useEffect(() => {
    if (user && user.nickname) {
      setUserName(user.nickname);
    } else if (user && user.email) {
      // Fallback to email prefix if nickname is not available
      setUserName(user.email.split('@')[0]);
    }
  }, [user]);

  // Add function to update user profile
  const handleSaveName = useCallback(async () => {
    if (tempName.trim() && token) {
      try {
        const response = await fetch('https://unithon1.shop/api/members/me', {
          method: 'PUT',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            nickname: tempName.trim()
          })
        });
        
        if (response.ok) {
          setUserName(tempName.trim());
          // Update user context with new data
          const updatedUser = { ...user, nickname: tempName.trim() };
          localStorage.setItem('user', JSON.stringify(updatedUser));
        }
      } catch (error) {
        console.error('Failed to update profile:', error);
      }
    }
    setIsEditingName(false);
  }, [tempName, token, user]);

  const handleEditName = useCallback(() => {
    setTempName(userName);
    setIsEditingName(true);
  }, [userName]);

  const handleCancelEdit = useCallback(() => {
    setTempName('');
    setIsEditingName(false);
  }, []);

  // Remove this duplicate function declaration (lines 412-417)
  // const handleSaveName = useCallback(() => {
  //   if (tempName.trim()) {
  //     setUserName(tempName.trim());
  //   }
  //   setIsEditingName(false);
  // }, [tempName]);

  const handleLogout = useCallback(() => {
    logout();
    navigate('/');
  }, [logout, navigate]);

  const menuItems = [];

  if (!isLoggedIn) {
    return (
      <Container>
        <Header>
          <BackButton onClick={() => navigate(-1)}>
            <ArrowBackIcon />
          </BackButton>
          <Title>My Page</Title>
        </Header>
        
        <LoginPrompt>
          <LoginPromptIcon>
            <LoginIcon style={{ fontSize: 40 }} />
          </LoginPromptIcon>
          <LoginPromptTitle>Login Required</LoginPromptTitle>
          <LoginPromptText>
            Please log in to access your profile and manage your account settings.
          </LoginPromptText>
          <LoginButton onClick={() => navigate('/login')}>
            Go to Login
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
        {/* Remove the SettingsButton */}
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

      {/* Remove the Settings MenuSection completely */}

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

      {/* Add footer with policy links */}
      <FooterSection>
        <FooterLink onClick={() => navigate('/privacy-policy')}>
          Privacy Policy
        </FooterLink>
        <FooterLink onClick={() => navigate('/terms-of-service')}>
          Terms
        </FooterLink>
      </FooterSection>

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
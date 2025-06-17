import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import {
  ArrowBack as ArrowBackIcon,
  Security as SecurityIcon,
  Lock as LockIcon,
  Visibility as VisibilityIcon,
  VisibilityOff as VisibilityOffIcon,
  Shield as ShieldIcon,
  Key as KeyIcon,
  AccountCircle as AccountIcon,
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

const Content = styled.div`
  padding: 20px;
`;

const Section = styled.div`
  background: white;
  border-radius: 12px;
  margin-bottom: 16px;
  overflow: hidden;
`;

const SectionHeader = styled.div`
  padding: 20px;
  border-bottom: 1px solid #F0F0F0;
`;

const SectionTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin: 0 0 8px 0;
  display: flex;
  align-items: center;
  gap: 12px;
`;

const SectionDescription = styled.p`
  font-size: 14px;
  color: #666;
  margin: 0;
  line-height: 1.5;
`;

const SectionContent = styled.div`
  padding: 20px;
`;

const SettingItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
  border-bottom: 1px solid #F0F0F0;
  
  &:last-child {
    border-bottom: none;
  }
`;

const SettingInfo = styled.div`
  flex: 1;
`;

const SettingTitle = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #333;
  margin-bottom: 4px;
`;

const SettingSubtitle = styled.div`
  font-size: 14px;
  color: #666;
`;

const Toggle = styled.button`
  width: 50px;
  height: 28px;
  border-radius: 14px;
  border: none;
  background: ${props => props.enabled ? '#2196F3' : '#E0E0E0'};
  position: relative;
  cursor: pointer;
  transition: background 0.3s ease;
  
  &::after {
    content: '';
    position: absolute;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: white;
    top: 2px;
    left: ${props => props.enabled ? '24px' : '2px'};
    transition: left 0.3s ease;
  }
`;

const Button = styled.button`
  background: #F5F5F5;
  border: none;
  border-radius: 8px;
  padding: 12px 16px;
  font-size: 14px;
  font-weight: 500;
  color: #333;
  cursor: pointer;
  transition: background 0.3s ease;
  
  &:hover {
    background: #E0E0E0;
  }
`;

const InfoText = styled.div`
  font-size: 14px;
  line-height: 1.6;
  color: #666;
  margin-bottom: 16px;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const PrivacySecurity = () => {
  const navigate = useNavigate();
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
  const [dataCollectionEnabled, setDataCollectionEnabled] = useState(true);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(true);
  const [notificationPrivacy, setNotificationPrivacy] = useState(true);

  return (
    <Container>
      <Header>
        <BackButton onClick={() => navigate('/mypage')}>
          <ArrowBackIcon />
        </BackButton>
        <Title>Privacy & Security</Title>
      </Header>

      <Content>




        <Section>
          <SectionHeader>
            <SectionTitle>
              <KeyIcon />
              Privacy Policy
            </SectionTitle>
          </SectionHeader>
          <SectionContent>
            <InfoText>
              <strong>Data Collection:</strong> We collect information you provide directly to us, such as when you create an account, update your profile, or communicate with other users.
            </InfoText>
            <InfoText>
              <strong>Information Use:</strong> We use the information we collect to provide, maintain, and improve our services, process transactions, and communicate with you.
            </InfoText>
            <InfoText>
              <strong>Information Sharing:</strong> We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.
            </InfoText>
            <InfoText>
              <strong>Data Security:</strong> We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </InfoText>
            <InfoText>
              <strong>Your Rights:</strong> You have the right to access, update, or delete your personal information. You can also opt out of certain communications from us.
            </InfoText>
            <InfoText>
              <strong>Contact Us:</strong> If you have any questions about this Privacy Policy, please contact us at privacy@unibus.app
            </InfoText>
          </SectionContent>
        </Section>
      </Content>
    </Container>
  );
};

export default PrivacySecurity;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Container = styled.div`
  background-color: white;
  min-height: 100vh;
  padding-bottom: 100px;
`;

const Header = styled.div`
  position: sticky;
  top: 0;
  background: white;
  padding: 16px 20px;
  border-bottom: 1px solid #E0E0E0;
  display: flex;
  align-items: center;
  z-index: 100;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  padding: 8px;
  margin-right: 12px;
  cursor: pointer;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background-color: #F5F5F5;
  }
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: 600;
  color: #333;
  margin: 0;
`;

const Content = styled.div`
  padding: 20px;
`;

const Section = styled.div`
  margin-bottom: 24px;
`;

const SectionTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin: 0 0 12px 0;
`;

const SectionContent = styled.div`
  font-size: 14px;
  line-height: 1.6;
  color: #666;
  margin-bottom: 16px;
`;

const List = styled.ul`
  margin: 8px 0;
  padding-left: 20px;
`;

const ListItem = styled.li`
  margin-bottom: 4px;
  font-size: 14px;
  color: #666;
`;

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <Container>
      <Header>
        <BackButton onClick={handleBack}>
          <ArrowBackIcon />
        </BackButton>
        <Title>Privacy Policy</Title>
      </Header>

      <Content>
        <Section>
          <SectionTitle>Information We Collect</SectionTitle>
          <SectionContent>
            We collect information you provide directly to us, such as when you create an account, 
            update your profile, or contact us for support.
          </SectionContent>
          <List>
            <ListItem>Personal information (name, email address, phone number)</ListItem>
            <ListItem>University and academic information</ListItem>
            <ListItem>Profile information and preferences</ListItem>
            <ListItem>Communications and interactions on our platform</ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>How We Use Your Information</SectionTitle>
          <SectionContent>
            We use the information we collect to provide, maintain, and improve our services.
          </SectionContent>
          <List>
            <ListItem>To provide and maintain our services</ListItem>
            <ListItem>To communicate with you about our services</ListItem>
            <ListItem>To personalize your experience</ListItem>
            <ListItem>To ensure the security of our platform</ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>Information Sharing</SectionTitle>
          <SectionContent>
            We do not sell, trade, or otherwise transfer your personal information to third parties 
            without your consent, except as described in this policy.
          </SectionContent>
        </Section>

        <Section>
          <SectionTitle>Data Security</SectionTitle>
          <SectionContent>
            We implement appropriate security measures to protect your personal information against 
            unauthorized access, alteration, disclosure, or destruction.
          </SectionContent>
        </Section>

        <Section>
          <SectionTitle>Your Rights</SectionTitle>
          <SectionContent>
            You have the right to access, update, or delete your personal information. 
            You may also opt out of certain communications from us.
          </SectionContent>
        </Section>

        <Section>
          <SectionTitle>Contact Us</SectionTitle>
          <SectionContent>
            If you have any questions about this Privacy Policy, please contact us at:
            <br /><br />
            Email: privacy@unibus.com
            <br />
            Address: Incheon National University, South Korea
          </SectionContent>
        </Section>

        <Section>
          <SectionContent>
            <strong>Last updated:</strong> January 2025
          </SectionContent>
        </Section>
      </Content>
    </Container>
  );
};

export default PrivacyPolicy;
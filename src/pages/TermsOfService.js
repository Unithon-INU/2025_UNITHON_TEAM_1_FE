import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ArrowBack as ArrowBackIcon } from '@mui/icons-material';

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

const Content = styled.div`
  padding: 20px;
  line-height: 1.6;
  color: #333;
`;

const Section = styled.div`
  margin-bottom: 24px;
`;

const SectionTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin-bottom: 12px;
`;

const SectionContent = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 16px;
`;

const LastUpdated = styled.div`
  font-size: 12px;
  color: #999;
  margin-bottom: 20px;
  text-align: center;
`;

const TermsOfService = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Header>
        <BackButton onClick={() => navigate(-1)}>
          <ArrowBackIcon />
        </BackButton>
        <Title>Terms of Service</Title>
      </Header>

      <Content>
        <LastUpdated>Last updated: December 2024</LastUpdated>

        <Section>
          <SectionTitle>1. Acceptance of Terms</SectionTitle>
          <SectionContent>
            By accessing and using this service, you accept and agree to be bound by the terms 
            and provision of this agreement. If you do not agree to abide by the above, 
            please do not use this service.
          </SectionContent>
        </Section>

        <Section>
          <SectionTitle>2. Use License</SectionTitle>
          <SectionContent>
            Permission is granted to temporarily download one copy of the materials on our 
            platform for personal, non-commercial transitory viewing only. This is the grant 
            of a license, not a transfer of title.
          </SectionContent>
        </Section>

        <Section>
          <SectionTitle>3. User Accounts</SectionTitle>
          <SectionContent>
            When you create an account with us, you must provide information that is accurate, 
            complete, and current at all times. You are responsible for safeguarding the 
            password and for all activities that occur under your account.
          </SectionContent>
        </Section>

        <Section>
          <SectionTitle>4. Prohibited Uses</SectionTitle>
          <SectionContent>
            You may not use our service for any unlawful purpose or to solicit others to 
            perform unlawful acts. You may not transmit any worms or viruses or any code 
            of a destructive nature.
          </SectionContent>
        </Section>

        <Section>
          <SectionTitle>5. Content</SectionTitle>
          <SectionContent>
            Our service allows you to post, link, store, share and otherwise make available 
            certain information, text, graphics, videos, or other material. You are responsible 
            for the content that you post to the service.
          </SectionContent>
        </Section>

        <Section>
          <SectionTitle>6. Privacy Policy</SectionTitle>
          <SectionContent>
            Your privacy is important to us. Please review our Privacy Policy, which also 
            governs your use of the service, to understand our practices.
          </SectionContent>
        </Section>

        <Section>
          <SectionTitle>7. Termination</SectionTitle>
          <SectionContent>
            We may terminate or suspend your account immediately, without prior notice or 
            liability, for any reason whatsoever, including without limitation if you breach 
            the Terms.
          </SectionContent>
        </Section>

        <Section>
          <SectionTitle>8. Changes to Terms</SectionTitle>
          <SectionContent>
            We reserve the right, at our sole discretion, to modify or replace these Terms 
            at any time. If a revision is material, we will try to provide at least 30 days 
            notice prior to any new terms taking effect.
          </SectionContent>
        </Section>

        <Section>
          <SectionTitle>9. Contact Information</SectionTitle>
          <SectionContent>
            If you have any questions about these Terms of Service, please contact us through 
            the app or at our support email address.
          </SectionContent>
        </Section>
      </Content>
    </Container>
  );
};

export default TermsOfService;
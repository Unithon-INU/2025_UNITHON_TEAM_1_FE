import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
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

const ContentCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

const GuideIcon = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 16px;
  background-color: ${props => props.color || '#4CAF50'};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  margin: 0 auto 20px;
`;

const GuideDescription = styled.p`
  font-size: 16px;
  color: #666;
  line-height: 1.6;
  text-align: center;
  margin-bottom: 30px;
`;

const GuideContent = styled.div`
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

const SectionTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: #333;
  margin: 0 0 16px 0;
  border-bottom: 2px solid #4CAF50;
  padding-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const SubsectionTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #444;
  margin: 20px 0 12px 0;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const ContentText = styled.p`
  font-size: 14px;
  color: #666;
  line-height: 1.6;
  margin-bottom: 16px;
`;

const StepList = styled.ol`
  padding-left: 20px;
  margin-bottom: 16px;
  
  li {
    font-size: 14px;
    color: #666;
    line-height: 1.6;
    margin-bottom: 8px;
  }
`;

const InfoBox = styled.div`
  background: #f8f9fa;
  border-left: 4px solid #4CAF50;
  padding: 16px;
  margin: 16px 0;
  border-radius: 4px;
  
  .info-title {
    font-weight: 600;
    color: #333;
    margin-bottom: 8px;
  }
  
  .info-content {
    font-size: 14px;
    color: #666;
    line-height: 1.5;
  }
`;

const WarningBox = styled.div`
  background: #fff3cd;
  border-left: 4px solid #ffc107;
  padding: 16px;
  margin: 16px 0;
  border-radius: 4px;
  
  .warning-title {
    font-weight: 600;
    color: #856404;
    margin-bottom: 8px;
  }
  
  .warning-content {
    font-size: 14px;
    color: #856404;
    line-height: 1.5;
  }
`;

const ContactInfo = styled.div`
  background: #e3f2fd;
  border-radius: 8px;
  padding: 16px;
  margin: 16px 0;
  
  .contact-title {
    font-weight: 600;
    color: #1976d2;
    margin-bottom: 8px;
  }
  
  .contact-item {
    font-size: 14px;
    color: #1976d2;
    margin-bottom: 4px;
  }
`;



function GuideDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [guide, setGuide] = useState(null);

  useEffect(() => {
    // Sample guide data based on ID
    const guides = {
      '1': {
        id: 1,
        title: 'Foreign Student Guide',
        description: 'Complete guide for international students studying in Korea.',
        category: 'International',
        icon: '🌍',
        color: '#4CAF50'
      },
      '2': {
        id: 2,
        title: 'Job Application Guide',
        description: 'Step-by-step guide on applying for internships and full-time positions through UniBus.',
        category: 'Career',
        icon: '💼',
        color: '#FF9800'
      },
      '3': {
        id: 3,
        title: 'Campus Navigation',
        description: 'Find your way around campus with our comprehensive location guide.',
        category: 'Campus',
        icon: '🗺️',
        color: '#9C27B0'
      },
      '4': {
        id: 4,
        title: 'Study Tips',
        description: 'Effective study strategies and academic success tips for university students.',
        category: 'Academic',
        icon: '📚',
        color: '#2196F3'
      },
      '5': {
        id: 5,
        title: 'Visa Tips',
        description: 'Complete guide to Korean visa types, requirements, and application processes for international students.',
        category: 'Academic',
        icon: '📋',
        color: '#FF5722'
      },
      '6': {
        id: 6,
        title: 'Health Insurance Guide',
        description: 'Complete guide to Korean National Health Insurance (NHIS) for international students.',
        category: 'Academic',
        icon: '🏥',
        color: '#E91E63'
      }
    };

    const currentGuide = guides[id];
    setGuide(currentGuide);
  }, [id]);

  if (!guide) {
    return (
      <Container>
        <Header>
          <BackButton onClick={() => navigate('/guides')}>
            <ArrowBackIcon />
          </BackButton>
          <Title>Guide Not Found</Title>
        </Header>
      </Container>
    );
  }

  return (
    <Container>
      <Header>
        <BackButton onClick={() => navigate('/guides')}>
          <ArrowBackIcon />
        </BackButton>
        <Title>{guide.title}</Title>
      </Header>
      
      <ContentCard>
        <GuideIcon color={guide.color}>
          <span>{guide.icon}</span>
        </GuideIcon>
        <GuideDescription>{guide.description}</GuideDescription>
      </ContentCard>

      {id === '1' && (
        <>
          {/* T-money Card Section */}
          <GuideContent>
            <SectionTitle>🚇 T-money Card - Your Essential Transportation Card</SectionTitle>
            <ContentText>
              The T-money card is the most convenient way to use public transportation in Seoul and surrounding areas. 
              It works on subways, buses, and even some taxis!
            </ContentText>
            
            <SubsectionTitle>💳 How to Get a T-money Card</SubsectionTitle>
            <StepList>
              <li>Visit any subway station ticket machine or convenience store (7-Eleven, CU, GS25)</li>
              <li>Look for "T-money" signs or ask staff "T-money card juseyo" (T-money 카드 주세요)</li>
              <li>Card costs 2,500 KRW (non-refundable)</li>
              <li>Add money to your card (minimum 1,000 KRW)</li>
            </StepList>
            
            <SubsectionTitle>💰 How to Recharge Your T-money Card</SubsectionTitle>
            <StepList>
              <li>Use ticket machines in subway stations (English available)</li>
              <li>Visit convenience stores and say "T-money chungjeong" (T-money 충전)</li>
              <li>Use the Tmoney app on your phone</li>
              <li>Minimum recharge: 1,000 KRW</li>
            </StepList>
            
            <InfoBox>
              <div className="info-title">💡 Pro Tips</div>
              <div className="info-content">
                • Subway: 1,370 KRW per ride<br/>
                • Bus: 1,370 KRW per ride<br/>
                • Transfer discount: Free transfers within 30 minutes<br/>
                • Keep at least 1,370 KRW on your card for subway exit
              </div>
            </InfoBox>
          </GuideContent>

          {/* Banking Section */}
          <GuideContent>
            <SectionTitle>🏦 Banking in Korea</SectionTitle>
            <ContentText>
              Opening a Korean bank account is essential for receiving scholarships, part-time job payments, and daily transactions.
            </ContentText>
            
            <SubsectionTitle>📋 Required Documents</SubsectionTitle>
            <StepList>
              <li>Alien Registration Card (ARC)</li>
              <li>Passport</li>
              <li>Student ID or enrollment certificate</li>
              <li>Phone number (Korean number preferred)</li>
              <li>Initial deposit (usually 10,000-50,000 KRW)</li>
            </StepList>
            
            <SubsectionTitle>🏛️ Recommended Banks for Students</SubsectionTitle>
            <ContentText>
              <strong>Woori Bank:</strong> Student-friendly, English support available<br/>
              <strong>Shinhan Bank:</strong> Good online banking, many ATMs<br/>
              <strong>KB Kookmin Bank:</strong> Largest bank network in Korea
            </ContentText>
            
            <WarningBox>
              <div className="warning-title">⚠️ Important</div>
              <div className="warning-content">
                You need an ARC to open a bank account. Apply for your ARC within 90 days of arrival!
              </div>
            </WarningBox>
          </GuideContent>

          {/* Mobile Phone Section */}
          <GuideContent>
            <SectionTitle>📱 Getting a Korean Phone Number</SectionTitle>
            <ContentText>
              A Korean phone number is essential for banking, delivery services, and daily life.
            </ContentText>
            
            <SubsectionTitle>📞 Options for Students</SubsectionTitle>
            <ContentText>
              <strong>1. Prepaid Plans:</strong> No contract, pay as you go<br/>
              <strong>2. Postpaid Plans:</strong> Monthly billing, better rates<br/>
              <strong>3. MVNO Carriers:</strong> Cheaper alternatives (HelloMobile, KT M Mobile)
            </ContentText>
            
            <SubsectionTitle>🏪 Where to Get Service</SubsectionTitle>
            <StepList>
              <li>Official carrier stores (SK Telecom, KT, LG U+)</li>
              <li>Electronics stores (Hi-mart, Electronic Land)</li>
              <li>University international student office (sometimes offers group discounts)</li>
            </StepList>
            
            <InfoBox>
              <div className="info-title">💡 Student Tip</div>
              <div className="info-content">
                Many carriers offer student discounts. Bring your student ID and ask about "haksaeng hallin" (학생 할인).
              </div>
            </InfoBox>
          </GuideContent>

          {/* Healthcare Section */}
          <GuideContent>
            <SectionTitle>🏥 Healthcare & Insurance</SectionTitle>
            <ContentText>
              Korea has excellent healthcare, and as a student, you're eligible for National Health Insurance.
            </ContentText>
            
            <SubsectionTitle>🩺 National Health Insurance (NHI)</SubsectionTitle>
            <StepList>
              <li>Mandatory for students staying over 6 months</li>
              <li>Apply at your local district office (gu-cheong)</li>
              <li>Cost: Around 60,000-80,000 KRW per month</li>
              <li>Covers 70% of medical costs</li>
            </StepList>
            
            <SubsectionTitle>🏥 How to Use Healthcare</SubsectionTitle>
            <ContentText>
              <strong>Clinics:</strong> For minor issues, walk-ins welcome<br/>
              <strong>Hospitals:</strong> For serious issues, may need referral<br/>
              <strong>Pharmacies:</strong> Green cross sign, some medicines available without prescription
            </ContentText>
            
            <ContactInfo>
              <div className="contact-title">🚨 Emergency Numbers</div>
              <div className="contact-item">Emergency: 119 (Fire/Ambulance)</div>
              <div className="contact-item">Police: 112</div>
              <div className="contact-item">Tourist Hotline: 1330 (24/7, English support)</div>
            </ContactInfo>
          </GuideContent>

          {/* Daily Life Section */}
          <GuideContent>
            <SectionTitle>🛒 Daily Life Essentials</SectionTitle>
            
            <SubsectionTitle>🏪 Shopping & Groceries</SubsectionTitle>
            <ContentText>
              <strong>Convenience Stores:</strong> 7-Eleven, CU, GS25 (24/7, bill payments, ATMs)<br/>
              <strong>Supermarkets:</strong> E-Mart, Lotte Mart, Homeplus<br/>
              <strong>Traditional Markets:</strong> Fresh produce, cheaper prices<br/>
              <strong>Online:</strong> Coupang (Korean Amazon), Market Kurly (groceries)
            </ContentText>
            
            <SubsectionTitle>🚚 Delivery Services</SubsectionTitle>
            <ContentText>
              Korea has amazing delivery culture! Most restaurants deliver, and you can order almost anything online.
            </ContentText>
            <StepList>
              <li><strong>Food Delivery:</strong> Baedal Minjok (배달의민족), Yogiyo (요기요)</li>
              <li><strong>General Delivery:</strong> Coupang, 11st</li>
              <li><strong>Grocery Delivery:</strong> Market Kurly, SSG.com</li>
            </StepList>
            
            <SubsectionTitle>🧺 Laundry</SubsectionTitle>
            <ContentText>
              <strong>Coin Laundromats:</strong> Common in residential areas<br/>
              <strong>Dry Cleaning:</strong> "Setakso" (세탁소)<br/>
              <strong>Dorm Laundry:</strong> Usually available in dormitory buildings
            </ContentText>
          </GuideContent>

          {/* Cultural Tips Section */}
          <GuideContent>
            <SectionTitle>🎭 Cultural Tips & Etiquette</SectionTitle>
            
            <SubsectionTitle>🙏 Basic Etiquette</SubsectionTitle>
            <StepList>
              <li>Bow when greeting (slight nod is fine for foreigners)</li>
              <li>Remove shoes when entering homes</li>
              <li>Use both hands when giving/receiving business cards</li>
              <li>Don't blow your nose in public</li>
              <li>Be quiet on public transportation</li>
            </StepList>
            
            <SubsectionTitle>🍽️ Dining Etiquette</SubsectionTitle>
            <StepList>
              <li>Wait for the eldest to start eating</li>
              <li>Don't stick chopsticks upright in rice</li>
              <li>Sharing food is common - order dishes to share</li>
              <li>Drinking: Turn away when drinking with elders</li>
            </StepList>
            
            <InfoBox>
              <div className="info-title">🗣️ Useful Korean Phrases</div>
              <div className="info-content">
                • Hello: Annyeonghaseyo (안녕하세요)<br/>
                • Thank you: Gamsahamnida (감사합니다)<br/>
                • Excuse me: Jeogiyo (저기요)<br/>
                • I don't speak Korean: Hangugeo mot haeyo (한국어 못 해요)<br/>
                • How much?: Eolmayeyo? (얼마예요?)
              </div>
            </InfoBox>
          </GuideContent>

          {/* Emergency Contacts */}
          <GuideContent>
            <SectionTitle>📞 Important Contacts & Resources</SectionTitle>
            
            <ContactInfo>
              <div className="contact-title">🏫 University Resources</div>
              <div className="contact-item">International Student Office: Check your university website</div>
              <div className="contact-item">Student Counseling: Available at most universities</div>
              <div className="contact-item">Korean Language Center: Free or low-cost Korean classes</div>
            </ContactInfo>
            
            <ContactInfo>
              <div className="contact-title">🌐 Helpful Apps & Websites</div>
              <div className="contact-item">Papago: Translation app by Naver</div>
              <div className="contact-item">Citymapper: Navigation for Seoul</div>
              <div className="contact-item">KakaoTalk: Essential messaging app</div>
              <div className="contact-item">Hikorea.go.kr: Immigration services</div>
            </ContactInfo>
            
            <WarningBox>
              <div className="warning-title">📋 Important Deadlines</div>
              <div className="warning-content">
                • ARC Application: Within 90 days of arrival<br/>
                • Health Insurance: Within 6 months<br/>
                • Visa Extension: 2-3 months before expiry<br/>
                • Part-time Work Permit: Before starting any job
              </div>
            </WarningBox>
          </GuideContent>
        </>
      )}

      {id === '2' && (
        <>
          {/* Resume & CV Section */}
          <GuideContent>
            <SectionTitle>📄 Building Your Resume/CV</SectionTitle>
            <ContentText>
              Your resume is your first impression with employers. In Korea, both international-style resumes and Korean-style CVs are commonly used depending on the company type.
            </ContentText>
            
            <SubsectionTitle>📝 Resume vs CV in Korea</SubsectionTitle>
            <ContentText>
              <strong>International Resume:</strong> 1-2 pages, skills-focused, for multinational companies<br/>
              <strong>Korean CV (이력서):</strong> Standardized format, includes photo, for Korean companies<br/>
              <strong>Portfolio:</strong> Essential for creative/technical roles
            </ContentText>
            
            <SubsectionTitle>✅ Essential Resume Sections</SubsectionTitle>
            <StepList>
              <li><strong>Contact Information:</strong> Name, phone, email, LinkedIn, portfolio</li>
              <li><strong>Professional Summary:</strong> 2-3 lines highlighting your value proposition</li>
              <li><strong>Education:</strong> University, major, GPA (if 3.5+), relevant coursework</li>
              <li><strong>Experience:</strong> Internships, part-time jobs, projects (use action verbs)</li>
              <li><strong>Skills:</strong> Technical skills, languages, certifications</li>
              <li><strong>Projects:</strong> Academic, personal, or team projects with results</li>
            </StepList>
            
            <InfoBox>
              <div className="info-title">💡 Resume Tips</div>
              <div className="info-content">
                • Use action verbs: "Developed," "Managed," "Increased"<br/>
                • Quantify achievements: "Increased efficiency by 25%"<br/>
                • Tailor for each application<br/>
                • Keep formatting clean and consistent<br/>
                • Use ATS-friendly fonts (Arial, Calibri)
              </div>
            </InfoBox>
          </GuideContent>

          {/* Job Search Platforms */}
          <GuideContent>
            <SectionTitle>🔍 Job Search Platforms & Resources</SectionTitle>
            <ContentText>
              Korea has various job platforms catering to different types of positions and career levels.
            </ContentText>
            
            <SubsectionTitle>🌐 Major Job Platforms</SubsectionTitle>
            <ContentText>
              <strong>Korean Platforms:</strong><br/>
              • JobKorea (잡코리아) - Largest Korean job site<br/>
              • Saramin (사람인) - Popular for entry-level positions<br/>
              • Incruit (인크루트) - Good for internships<br/>
              • Wanted - Tech and startup focused<br/><br/>
              <strong>International Platforms:</strong><br/>
              • LinkedIn - Essential for networking<br/>
              • Indeed Korea - English-friendly interface<br/>
              • Glassdoor - Company reviews and salaries<br/>
              • Jobs.go.kr - Government job portal
            </ContentText>
            
            <SubsectionTitle>🏢 Company Types in Korea</SubsectionTitle>
            <StepList>
              <li><strong>Chaebol:</strong> Large conglomerates (Samsung, LG, Hyundai)</li>
              <li><strong>SMEs:</strong> Small-medium enterprises, often more flexible</li>
              <li><strong>Startups:</strong> Growing tech scene, especially in Gangnam</li>
              <li><strong>Foreign Companies:</strong> Multinational corporations with Korean offices</li>
              <li><strong>Government:</strong> Public sector positions, stable but competitive</li>
            </StepList>
            
            <WarningBox>
              <div className="warning-title">⚠️ Work Visa Requirements</div>
              <div className="warning-content">
                International students need proper work authorization. Check your visa status and apply for work permits if required. Student visas typically allow 20 hours/week part-time work.
              </div>
            </WarningBox>
          </GuideContent>

          {/* Application Process */}
          <GuideContent>
            <SectionTitle>📋 Application Process & Timeline</SectionTitle>
            <ContentText>
              Korean companies often follow structured recruitment cycles, especially for new graduate positions.
            </ContentText>
            
            <SubsectionTitle>📅 Recruitment Seasons</SubsectionTitle>
            <ContentText>
              <strong>Spring Recruitment (상반기):</strong> March-May hiring<br/>
              <strong>Fall Recruitment (하반기):</strong> September-November hiring<br/>
              <strong>Rolling Basis:</strong> Year-round for experienced positions
            </ContentText>
            
            <SubsectionTitle>📝 Typical Application Steps</SubsectionTitle>
            <StepList>
              <li><strong>Online Application:</strong> Submit resume/CV and cover letter</li>
              <li><strong>Document Screening:</strong> Initial review (1-2 weeks)</li>
              <li><strong>Aptitude Test:</strong> Some companies require written tests</li>
              <li><strong>1st Interview:</strong> HR or phone/video screening</li>
              <li><strong>2nd Interview:</strong> Technical or panel interview</li>
              <li><strong>Final Interview:</strong> Executive or cultural fit assessment</li>
              <li><strong>Reference Check:</strong> Background verification</li>
              <li><strong>Job Offer:</strong> Salary negotiation and contract</li>
            </StepList>
            
            <InfoBox>
              <div className="info-title">⏰ Timeline Expectations</div>
              <div className="info-content">
                • Large companies: 4-8 weeks process<br/>
                • Startups/SMEs: 2-4 weeks process<br/>
                • Government positions: 2-6 months<br/>
                • Apply 2-3 months before desired start date
              </div>
            </InfoBox>
          </GuideContent>

          {/* Interview Preparation */}
          <GuideContent>
            <SectionTitle>🎤 Interview Preparation</SectionTitle>
            <ContentText>
              Korean interviews often emphasize cultural fit, teamwork, and long-term commitment alongside technical skills.
            </ContentText>
            
            <SubsectionTitle>🤝 Korean Interview Culture</SubsectionTitle>
            <StepList>
              <li><strong>Punctuality:</strong> Arrive 10-15 minutes early</li>
              <li><strong>Dress Code:</strong> Conservative business attire</li>
              <li><strong>Bowing:</strong> Slight bow when greeting and leaving</li>
              <li><strong>Business Cards:</strong> Receive with both hands, read carefully</li>
              <li><strong>Hierarchy:</strong> Show respect to senior interviewers</li>
            </StepList>
            
            <SubsectionTitle>❓ Common Interview Questions</SubsectionTitle>
            <ContentText>
              <strong>General Questions:</strong><br/>
              • "Tell me about yourself" (자기소개)<br/>
              • "Why do you want to work here?"<br/>
              • "What are your strengths and weaknesses?"<br/>
              • "Where do you see yourself in 5 years?"<br/><br/>
              <strong>Korea-Specific Questions:</strong><br/>
              • "Why did you choose to work in Korea?"<br/>
              • "How do you handle cultural differences?"<br/>
              • "Are you planning to stay in Korea long-term?"<br/>
              • "How is your Korean language ability?"
            </ContentText>
            
            <SubsectionTitle>🎯 Technical Interview Prep</SubsectionTitle>
            <StepList>
              <li>Review job description and required skills</li>
              <li>Prepare portfolio or work samples</li>
              <li>Practice coding problems (for tech roles)</li>
              <li>Research company's products/services</li>
              <li>Prepare questions about the role and company</li>
            </StepList>
          </GuideContent>

          {/* Networking & Professional Development */}
          <GuideContent>
            <SectionTitle>🤝 Networking & Professional Development</SectionTitle>
            <ContentText>
              Building professional relationships is crucial in Korea's relationship-based business culture.
            </ContentText>
            
            <SubsectionTitle>🌐 Networking Opportunities</SubsectionTitle>
            <StepList>
              <li><strong>University Career Fairs:</strong> Direct access to recruiters</li>
              <li><strong>Industry Meetups:</strong> Tech, finance, marketing groups</li>
              <li><strong>Professional Associations:</strong> Join relevant industry groups</li>
              <li><strong>LinkedIn Groups:</strong> Korea-based professional communities</li>
              <li><strong>Company Info Sessions:</strong> Learn about company culture</li>
              <li><strong>Alumni Networks:</strong> Connect with university graduates</li>
            </StepList>
            
            <SubsectionTitle>📚 Skill Development Resources</SubsectionTitle>
            <ContentText>
              <strong>Online Learning:</strong><br/>
              • Coursera, edX - International courses<br/>
              • Inflearn, FastCampus - Korean platforms<br/>
              • YouTube - Free tutorials and lectures<br/><br/>
              <strong>Certifications:</strong><br/>
              • Google, AWS, Microsoft certifications<br/>
              • Korean language proficiency (TOPIK)<br/>
              • Industry-specific certifications
            </ContentText>
            
            <InfoBox>
              <div className="info-title">💼 Building Your Professional Brand</div>
              <div className="info-content">
                • Optimize your LinkedIn profile in English and Korean<br/>
                • Create a professional portfolio website<br/>
                • Contribute to open-source projects<br/>
                • Write technical blogs or articles<br/>
                • Attend industry conferences and workshops
              </div>
            </InfoBox>
          </GuideContent>

          {/* Salary & Benefits */}
          <GuideContent>
            <SectionTitle>💰 Salary Negotiation & Benefits</SectionTitle>
            <ContentText>
              Understanding Korean compensation structures helps you negotiate effectively and evaluate offers.
            </ContentText>
            
            <SubsectionTitle>💵 Salary Ranges (Entry Level)</SubsectionTitle>
            <ContentText>
              <strong>Tech/Engineering:</strong> 35-50M KRW annually<br/>
              <strong>Finance/Banking:</strong> 40-60M KRW annually<br/>
              <strong>Marketing/Sales:</strong> 30-45M KRW annually<br/>
              <strong>Consulting:</strong> 45-70M KRW annually<br/>
              <strong>Government:</strong> 25-35M KRW annually
            </ContentText>
            
            <SubsectionTitle>🎁 Common Benefits</SubsectionTitle>
            <StepList>
              <li><strong>Health Insurance:</strong> National Health Insurance coverage</li>
              <li><strong>Pension:</strong> National Pension Service contribution</li>
              <li><strong>Vacation:</strong> 15+ days annually, increases with tenure</li>
              <li><strong>Bonuses:</strong> Performance bonuses, holiday bonuses</li>
              <li><strong>Meal Allowance:</strong> Company cafeteria or meal vouchers</li>
              <li><strong>Transportation:</strong> Subway/bus pass reimbursement</li>
              <li><strong>Education:</strong> Training programs, conference attendance</li>
            </StepList>
            
            <SubsectionTitle>🤝 Negotiation Tips</SubsectionTitle>
            <ContentText>
              • Research market rates using salary websites<br/>
              • Consider total compensation, not just base salary<br/>
              • Be prepared to justify your value<br/>
              • Understand company's budget constraints<br/>
              • Negotiate respectfully and professionally
            </ContentText>
            
            <WarningBox>
              <div className="warning-title">💡 Cultural Note</div>
              <div className="warning-content">
                Salary negotiation in Korea is often less aggressive than Western countries. Focus on your qualifications and value rather than demanding specific amounts.
              </div>
            </WarningBox>
          </GuideContent>

          {/* Legal & Practical Considerations */}
          <GuideContent>
            <SectionTitle>⚖️ Legal & Practical Considerations</SectionTitle>
            
            <SubsectionTitle>📋 Employment Contract Essentials</SubsectionTitle>
            <StepList>
              <li><strong>Job Title & Responsibilities:</strong> Clearly defined role</li>
              <li><strong>Salary & Payment Schedule:</strong> Monthly/bi-weekly payments</li>
              <li><strong>Working Hours:</strong> Standard 40 hours/week, overtime policies</li>
              <li><strong>Vacation & Leave:</strong> Annual leave, sick leave, maternity/paternity</li>
              <li><strong>Termination Clauses:</strong> Notice period, severance pay</li>
              <li><strong>Confidentiality:</strong> Non-disclosure agreements</li>
            </StepList>
            
            <SubsectionTitle>🏢 Workplace Culture</SubsectionTitle>
            <ContentText>
              <strong>Hierarchy:</strong> Respect for seniority and position<br/>
              <strong>Team Harmony:</strong> Group consensus and collaboration<br/>
              <strong>Work-Life Balance:</strong> Improving, but long hours still common<br/>
              <strong>After-Work Socializing:</strong> Company dinners (회식) are important
            </ContentText>
            
            <ContactInfo>
              <div className="contact-title">📞 Important Resources</div>
              <div className="contact-item">Ministry of Employment: moel.go.kr</div>
              <div className="contact-item">Labor Rights: 1350 (Korean)</div>
              <div className="contact-item">Immigration: hikorea.go.kr</div>
              <div className="contact-item">Tax Information: nts.go.kr</div>
            </ContactInfo>
            
            <InfoBox>
              <div className="info-title">🎯 Success Tips</div>
              <div className="info-content">
                • Learn basic Korean for workplace communication<br/>
                • Understand Korean business etiquette<br/>
                • Build relationships with colleagues<br/>
                • Show commitment to long-term career in Korea<br/>
                • Continuously develop your skills and expertise
              </div>
            </InfoBox>
          </GuideContent>
        </>
      )}

      {id === '3' && (
        <>
          {/* Campus Overview */}
          <GuideContent>
            <SectionTitle>🏫 Incheon National University Songdo Campus Overview</SectionTitle>
            <ContentText>
              Incheon National University is a national university located in Songdo International City, Yeonsu-gu, Incheon Metropolitan City. <mcreference link="https://www.inu.ac.kr/mbshome/mbs/inu/campusmap/contents/songdo.jsp" index="4">4</mcreference> Most colleges moved from Jemulpo Campus to Songdo Campus in 2009 and are currently located at Songdo Campus.
            </ContentText>
            
            <SubsectionTitle>📍 Campus Location and Transportation</SubsectionTitle>
            <ContentText>
              <strong>Address:</strong> 119 Academy-ro, Yeonsu-gu, Incheon (Songdo-dong)<br/>
              <strong>From Incheon International Airport:</strong> About 20 minutes by bus or car <mcreference link="https://www.inu.ac.kr/mbshome/mbs/inuengl/visit/visitcampus.html" index="1">1</mcreference><br/>
              <strong>From Seoul:</strong> About 30 miles (48km)<br/>
              <strong>Subway:</strong> No direct subway line to Songdo, bus or car recommended
            </ContentText>
            
            <InfoBox>
              <div className="info-title">🚌 Campus Shuttle Bus</div>
              <div className="info-content">
                Blue INU shuttle buses circulate within the campus. <mcreference link="https://www.inu.ac.kr/mbshome/mbs/inuengl/visit/visitcampus.html" index="1">1</mcreference><br/>
                Use the shuttle bus instead of walking for long-distance travel between buildings.
              </div>
            </InfoBox>
          </GuideContent>

          {/* Main Buildings */}
          <GuideContent>
            <SectionTitle>🏢 Main Buildings Guide</SectionTitle>
            <ContentText>
              Songdo Campus consists of 41 main buildings, each identified by number and name. <mcreference link="https://www.inu.ac.kr/inuengl/8483/subview.do" index="4">4</mcreference>
            </ContentText>
            
            <SubsectionTitle>🏛️ Administrative and Central Facilities</SubsectionTitle>
            <StepList>
              <li><strong>01. Administration Building:</strong> Admissions Office, Academic Affairs, President's Office and other main administrative departments <mcreference link="https://www.inu.ac.kr/mbshome/mbs/inu/campusmap/contents/songdo.jsp" index="4">4</mcreference></li>
              <li><strong>02. Faculty Hall:</strong> Faculty offices and meeting rooms</li>
              <li><strong>03. INU CUBE:</strong> Innovative educational space</li>
              <li><strong>04. Information Computing Center (BM Contents Building):</strong> IT services and computer facilities</li>
              <li><strong>06. Haksan Library (Ireum Building):</strong> Central library, reading rooms, resource center</li>
            </StepList>
            
            <SubsectionTitle>🎓 College Buildings</SubsectionTitle>
            <StepList>
              <li><strong>05. College of Natural Sciences & Life Sciences Technology:</strong> Science departments</li>
              <li><strong>07. College of Information Technology:</strong> Computer Engineering and IT-related departments</li>
              <li><strong>08. College of Engineering:</strong> Engineering departments</li>
              <li><strong>13. College of Social Sciences, Law & Global Economics:</strong> Social Science departments</li>
              <li><strong>14. Business & Northeast Asian International Commerce Logistics:</strong> Business and logistics departments</li>
              <li><strong>15. College of Humanities:</strong> Humanities departments</li>
              <li><strong>16. College of Arts and Physical Education:</strong> Arts and sports departments</li>
              <li><strong>28. College of Urban Sciences:</strong> Urban planning and architecture departments</li>
            </StepList>
          </GuideContent>

          {/* Student Facilities */}
          <GuideContent>
            <SectionTitle>🏠 Student Facilities</SectionTitle>
            
            <SubsectionTitle>🏨 Dormitory</SubsectionTitle>
            <StepList>
              <li><strong>18-1. Dormitory 1:</strong> For undergraduate students</li>
              <li><strong>18-2. Dormitory 2:</strong> For undergraduate students</li>
              <li><strong>18-3. Dormitory 3:</strong> For graduate and exchange students</li>
            </StepList>
            
            <SubsectionTitle>🍽️ Dining and Convenience Facilities</SubsectionTitle>
            <StepList>
              <li><strong>11. Welfare Building (Student Cafeteria):</strong> Main student cafeteria, cafe, convenience store</li>
              <li><strong>17. Student Union Building:</strong> Student club rooms, meeting rooms, lounges</li>
              <li><strong>10. Guest House:</strong> Visitor accommodation</li>
            </StepList>
            
            <SubsectionTitle>🏃‍♂️ Sports and Recreation</SubsectionTitle>
            <StepList>
              <li><strong>20. Sports Center Golf Practice Range:</strong> Golf practice facility</li>
              <li><strong>21. Gymnasium:</strong> Indoor sports activities</li>
              <li><strong>23. Auditorium & Performance Hall:</strong> Large events and performances</li>
            </StepList>
          </GuideContent>

          {/* Research & Special Facilities */}
          <GuideContent>
            <SectionTitle>🔬 Research and Special Facilities</SectionTitle>
            
            <SubsectionTitle>🧪 Research Facilities</SubsectionTitle>
            <StepList>
              <li><strong>09. Joint Laboratory Building:</strong> Shared laboratories and practice rooms</li>
              <li><strong>27. Second Joint Laboratory Building:</strong> Additional laboratory space</li>
              <li><strong>19. Convergence Liberal Arts College:</strong> Industry-academic cooperation and R&D</li>
              <li><strong>41. Bio Complex:</strong> Life sciences research facility</li>
            </StepList>
            
            <SubsectionTitle>🏢 Other Facilities</SubsectionTitle>
            <StepList>
              <li><strong>12. Convention Center:</strong> Large meetings and events</li>
              <li><strong>22. ROTC Building:</strong> Military training facility</li>
              <li><strong>24. Observation Tower:</strong> Campus landmark</li>
              <li><strong>25. Daycare Center:</strong> Childcare facility for faculty and staff</li>
              <li><strong>26. Greenhouse:</strong> Plant research and cultivation facility</li>
            </StepList>
          </GuideContent>

          {/* Navigation Tips */}
          <GuideContent>
            <SectionTitle>🗺️ Campus Navigation Tips</SectionTitle>
            
            <SubsectionTitle>📱 Digital Tools</SubsectionTitle>
            <ContentText>
              <strong>Official Campus Map:</strong> Detailed campus map available on INU website<br/>
              <strong>Building Number System:</strong> All buildings are numbered 01-41 for easy navigation<br/>
              <strong>AED Locations:</strong> 14 AEDs installed across campus for emergencies
            </ContentText>
            
            <SubsectionTitle>🚶‍♂️ Movement Guide</SubsectionTitle>
            <StepList>
              <li><strong>Central Garden:</strong> Campus center, reference point for main buildings</li>
              <li><strong>Haedanghwa-ro:</strong> Main campus street with open visibility</li>
              <li><strong>University Street:</strong> Community spaces for each college</li>
              <li><strong>Shuttle Bus Stops:</strong> Located in front of major buildings</li>
            </StepList>
            
            <WarningBox>
              <div className="warning-title">⚠️ Precautions</div>
              <div className="warning-content">
                • Allow extra time for first visits as the campus is large<br/>
                • Use shuttle buses for long distances between buildings<br/>
                • Use underground passages during bad weather<br/>
                • Use well-lit main paths at night for safety
              </div>
            </WarningBox>
          </GuideContent>

          {/* Emergency & Contact */}
          <GuideContent>
            <SectionTitle>🆘 Emergency and Contact Information</SectionTitle>
            
            <ContactInfo>
              <div className="contact-title">📞 Important Contacts</div>
              <div className="contact-item">Control Center: 032-835-8114</div>
              <div className="contact-item">Campus Planning & Safety: 032-835-8010</div>
              <div className="contact-item">Student Counseling Center: 032-835-8297</div>
              <div className="contact-item">Health Center: 032-835-8393</div>
            </ContactInfo>
            
            <InfoBox>
              <div className="info-title">🏥 Medical and Safety Facilities</div>
              <div className="info-content">
                • 14 AEDs installed across campus<br/>
                • Health Center: First aid and basic medical services<br/>
                • CCTV and Emergency Bells: Installed throughout campus<br/>
                • 24-hour Security: Monitored by Control Center
              </div>
            </InfoBox>
          </GuideContent>

          {/* Visa Information Section */}
          <GuideContent>
            <SectionTitle>📋 Visa Information for Korea</SectionTitle>
            <ContentText>
              Understanding Korean visa requirements is crucial for international students. Different visa types serve different purposes, and it's essential to obtain the correct visa for your stay in Korea.
            </ContentText>
            
            <SubsectionTitle>🎓 Student Visas (D-2 and D-4)</SubsectionTitle>
            <ContentText>
              <strong>D-2 Student Visa:</strong> For degree-seeking students (Bachelor's, Master's, PhD)<br/>
              <strong>D-4 Korean Language Trainee:</strong> For Korean language course students<br/><br/>
              <strong>Required Documents:</strong>
            </ContentText>
            <StepList>
              <li>Valid passport (minimum 6 months validity)</li>
              <li>Completed visa application form</li>
              <li>Certificate of Admission from Korean university</li>
              <li>Financial proof (bank statements, scholarship letters)</li>
              <li>Academic transcripts and diplomas</li>
              <li>Health certificate and tuberculosis test results</li>
              <li>Passport photos (3.5cm x 4.5cm)</li>
            </StepList>
            
            <InfoBox>
              <div className="info-title">💡 Student Visa Tips</div>
              <div className="info-content">
                • Apply at Korean embassy/consulate in your home country<br/>
                • Processing time: 5-10 business days<br/>
                • D-2 visa allows part-time work (up to 20 hours/week with permit)<br/>
                • Cannot change from tourist visa (C-3) to student visa within Korea
              </div>
            </InfoBox>
            
            <SubsectionTitle>🏢 Work Visas (E-1 to E-7)</SubsectionTitle>
            <ContentText>
              Korea offers various work visa categories for different professions:
            </ContentText>
            <StepList>
              <li><strong>E-1 Professor:</strong> University-level teaching and research</li>
              <li><strong>E-2 Foreign Language Instructor:</strong> English/foreign language teaching</li>
              <li><strong>E-3 Researcher:</strong> Research work in specialized fields</li>
              <li><strong>E-4 Technical Instructor:</strong> Technology and natural science experts</li>
              <li><strong>E-5 Professional:</strong> Licensed professionals (lawyers, doctors, architects)</li>
              <li><strong>E-6 Arts and Entertainment:</strong> Artists, athletes, entertainers</li>
              <li><strong>E-7 Special Ability:</strong> Specialized workers with employment contracts</li>
            </StepList>
            
            <SubsectionTitle>🌍 Tourist and Short-term Visas</SubsectionTitle>
            <ContentText>
              <strong>Visa-Free Entry:</strong> Many countries have visa-free agreements with Korea for stays up to 90 days<br/>
              <strong>C-3 Short-term Visit:</strong> For tourism, business, family visits (90 days maximum)
            </ContentText>
            
            <WarningBox>
              <div className="warning-title">⚠️ Important Visa Warnings</div>
              <div className="warning-content">
                • Never work on a tourist visa - this is illegal<br/>
                • Cannot change visa status without leaving Korea (except specific cases)<br/>
                • Overstaying your visa results in fines and entry bans<br/>
                • Always carry your passport and Alien Registration Card
              </div>
            </WarningBox>
            
            <SubsectionTitle>🔄 Visa Extensions and Changes</SubsectionTitle>
            <StepList>
              <li><strong>Extension Applications:</strong> Apply 2 months before expiration</li>
              <li><strong>Required Documents:</strong> Application form, passport, financial proof, reason for extension</li>
              <li><strong>Processing Location:</strong> Immigration office in your area</li>
              <li><strong>Fees:</strong> Vary by visa type (typically 30,000-100,000 KRW)</li>
            </StepList>
            
            <SubsectionTitle>📱 K-ETA (Korea Electronic Travel Authorization)</SubsectionTitle>
            <ContentText>
              For visa-free countries, K-ETA may be required for entry. As of 2024, K-ETA requirements are temporarily waived for US citizens until December 31, 2024, but check current requirements before travel.
            </ContentText>
            
            <ContactInfo>
              <div className="contact-title">📞 Visa and Immigration Contacts</div>
              <div className="contact-item">Korea Immigration Service: 1345 (Korean, English, Chinese, Japanese)</div>
              <div className="contact-item">Hi Korea (Immigration Portal): hikorea.go.kr</div>
              <div className="contact-item">Korea Visa Portal: visa.go.kr</div>
              <div className="contact-item">Nearest Immigration Office: Find location on hikorea.go.kr</div>
            </ContactInfo>
            
            <InfoBox>
              <div className="info-title">🎯 Visa Success Tips</div>
              <div className="info-content">
                • Start visa application process early (2-3 months before travel)<br/>
                • Ensure all documents are properly translated and notarized<br/>
                • Keep copies of all visa documents<br/>
                • Register at immigration office within 90 days of arrival<br/>
                • Maintain valid visa status throughout your stay
              </div>
            </InfoBox>
          </GuideContent>

          {/* Insurance Information Section */}
          <GuideContent>
            <SectionTitle>🏥 Health Insurance in Korea</SectionTitle>
            <ContentText>
              Health insurance is mandatory for all international students in Korea. Understanding the Korean National Health Insurance System (NHIS) and temporary coverage options is essential for your health and legal status.
            </ContentText>
            
            <SubsectionTitle>🇰🇷 Korean National Health Insurance (NHIS)</SubsectionTitle>
            <ContentText>
              <strong>Mandatory Enrollment:</strong> All international students with D-2 and D-4 visas are automatically enrolled in NHIS upon alien registration.<br/>
              <strong>Coverage Start Date:</strong> From your alien registration date (first entry) or re-entry date (subsequent entries)
            </ContentText>
            
            <InfoBox>
              <div className="info-title">📋 NHIS Enrollment by Visa Type</div>
              <div className="info-content">
                • <strong>D-2 Student Visa:</strong> Automatic enrollment from alien registration date<br/>
                • <strong>D-4 Korean Language:</strong> 6 months after entry date<br/>
                • <strong>F-4 Overseas Korean:</strong> From school entrance date<br/>
                • No action required - NHIS processes enrollment automatically
              </div>
            </InfoBox>
            
            <SubsectionTitle>💰 Insurance Fees and Payment</SubsectionTitle>
            <ContentText>
              <strong>Monthly Premium (2024-2025):</strong> Approximately 76,390 KRW (~$60 USD)<br/>
              <strong>Student Discount:</strong> 50% reduction available for eligible students
            </ContentText>
            
            <StepList>
              <li><strong>Eligibility for Discount:</strong> No income tax paid in previous year, household income below 3.6 million KRW, property tax base below 135 million KRW</li>
              <li><strong>Payment Due:</strong> By the 25th of each month (prepayment for next month)</li>
              <li><strong>Billing:</strong> Mailed to your registered address from the 10th of each month</li>
              <li><strong>Payment Methods:</strong> Bank transfer, convenience stores, online, NHIS office</li>
            </StepList>
            
            <SubsectionTitle>🏥 Coverage and Benefits</SubsectionTitle>
            <ContentText>
              International students receive the same benefits as Korean citizens:
            </ContentText>
            <StepList>
              <li><strong>Inpatient Care:</strong> 80% coverage (you pay 20%)</li>
              <li><strong>Outpatient Care:</strong> 30-70% coverage depending on facility type</li>
              <li><strong>Dental Care:</strong> Covered for basic treatments</li>
              <li><strong>Traditional Korean Medicine:</strong> Covered</li>
              <li><strong>Health Checkups:</strong> Free biannual checkups based on birth year</li>
              <li><strong>Pregnancy/Childbirth:</strong> Comprehensive coverage</li>
            </StepList>
            
            <SubsectionTitle>⏰ Temporary Insurance (First 3 Months)</SubsectionTitle>
            <ContentText>
              <strong>Coverage Gap:</strong> NHIS enrollment takes 6-8 weeks after arrival, creating a coverage gap.<br/>
              <strong>Requirement:</strong> You must have private health insurance for the first 2-3 months in Korea.
            </ContentText>
            
            <WarningBox>
              <div className="warning-title">⚠️ Critical Insurance Requirements</div>
              <div className="warning-content">
                • Bring proof of temporary health insurance before arrival<br/>
                • Coverage must be valid from arrival date until NHIS activation<br/>
                • Minimum coverage: 1 billion KRW for medical expenses<br/>
                • Failure to provide proof may result in admission rescission
              </div>
            </WarningBox>
            
            <SubsectionTitle>📱 Managing Your NHIS Account</SubsectionTitle>
            <StepList>
              <li><strong>NHIS Card:</strong> Automatically mailed to your registered address</li>
              <li><strong>Electronic Billing:</strong> Set up email/SMS billing by calling 033-811-2000</li>
              <li><strong>Automatic Payment:</strong> Link to Korean bank account for convenience</li>
              <li><strong>Address Changes:</strong> Report to nearest NHIS center immediately</li>
              <li><strong>Family Coverage:</strong> Add spouse and children under 19 at NHIS office</li>
            </StepList>
            
            <SubsectionTitle>🚫 Consequences of Non-Payment</SubsectionTitle>
            <ContentText>
              <strong>Health Benefits:</strong> Suspended until arrears are paid<br/>
              <strong>Visa Extension:</strong> Blocked if overdue amount exceeds 500,000 KRW<br/>
              <strong>Legal Status:</strong> May affect your ability to maintain student status
            </ContentText>
            
            <SubsectionTitle>🔄 Insurance Exemption (Rare Cases)</SubsectionTitle>
            <ContentText>
              You may apply for NHIS exemption if you have equivalent foreign insurance coverage, but this requires:
            </ContentText>
            <StepList>
              <li>Minimum 1 billion KRW medical coverage</li>
              <li>Coverage for common diseases and injuries</li>
              <li>Valid for your entire stay in Korea</li>
              <li>Application at NHIS Center for Foreign Residents</li>
              <li>Korean translation of insurance policy required</li>
            </StepList>
            
            <ContactInfo>
              <div className="contact-title">📞 NHIS Contact Information</div>
              <div className="contact-item">NHIS Hotline: 033-811-2000 (English, Chinese, Vietnamese, Uzbek)</div>
              <div className="contact-item">General Inquiry: 1577-1000 (Press 7 for foreign languages)</div>
              <div className="contact-item">NHIS Website: nhis.or.kr/english</div>
              <div className="contact-item">Hi Korea Portal: hikorea.go.kr</div>
            </ContactInfo>
            
            <InfoBox>
              <div className="info-title">💡 Insurance Success Tips</div>
              <div className="info-content">
                • Purchase temporary insurance before arriving in Korea<br/>
                • Set up automatic payment to avoid late fees<br/>
                • Keep your NHIS card with you at all times<br/>
                • Register for electronic billing for faster communication<br/>
                • Report address changes immediately to avoid billing issues<br/>
                • Use health checkups - they're free and comprehensive
              </div>
            </InfoBox>
          </GuideContent>
        </>
      )}

      {id === '4' && (
        <>
          {/* Academic System Overview */}
          <GuideContent>
            <SectionTitle>🎓 Understanding Korean University Academic System</SectionTitle>
            <ContentText>
              The Korean university education system has unique characteristics that require time for international students to adapt. Understanding Korean educational culture and systems is crucial for academic success.
            </ContentText>
            
            <SubsectionTitle>📚 Semester System</SubsectionTitle>
            <ContentText>
              <strong>1st Semester:</strong> March - June (Spring Semester)<br/>
              <strong>2nd Semester:</strong> September - December (Fall Semester)<br/>
              <strong>Seasonal Semester:</strong> Summer (Jul-Aug), Winter (Jan-Feb) - Optional<br/>
              <strong>Midterm Exams:</strong> Mid-semester (April, October)<br/>
              <strong>Final Exams:</strong> End of semester (June, December)
            </ContentText>
            
            <SubsectionTitle>📊 Grading System</SubsectionTitle>
            <StepList>
              <li><strong>A+ (4.5):</strong> 95-100 points, Excellent</li>
              <li><strong>A0 (4.0):</strong> 90-94 points, Very Good</li>
              <li><strong>B+ (3.5):</strong> 85-89 points, Good</li>
              <li><strong>B0 (3.0):</strong> 80-84 points, Average</li>
              <li><strong>C+ (2.5):</strong> 75-79 points, Below Average</li>
              <li><strong>C0 (2.0):</strong> 70-74 points, Minimum Pass</li>
              <li><strong>F (0.0):</strong> Below 70 points, Fail</li>
            </StepList>
            
            <InfoBox>
              <div className="info-title">💡 GPA Management Tips</div>
              <div className="info-content">
                • Usually need 3.0+ GPA to maintain scholarships<br/>
                • Minimum 2.0 GPA required for graduation<br/>
                • Can retake courses to improve grades (max 3 times)<br/>
                • Use Pass/Fail courses to protect GPA
              </div>
            </InfoBox>
          </GuideContent>

          {/* Study Strategies */}
          <GuideContent>
            <SectionTitle>📖 Effective Study Strategies</SectionTitle>
            
            <SubsectionTitle>📝 Class Participation Methods</SubsectionTitle>
            <StepList>
              <li><strong>Attendance:</strong> Very important - Usually 10-20% of final grade</li>
              <li><strong>Active Participation:</strong> Ask questions and join discussions</li>
              <li><strong>Assignment Submission:</strong> Meet deadlines, avoid plagiarism</li>
              <li><strong>Team Projects:</strong> Collaboration and communication skills are important</li>
              <li><strong>Presentations:</strong> Use PowerPoint, clear delivery needed</li>
            </StepList>
            
            <SubsectionTitle>📚 Efficient Study Methods</SubsectionTitle>
            <ContentText>
              <strong>Preview-Review System:</strong><br/>
              • Read materials before class<br/>
              • Review class content same day<br/>
              • Comprehensive weekly review on weekends<br/><br/>
              <strong>Note-Taking Methods:</strong><br/>
              • Combine digital and analog methods<br/>
              • Focus on key keywords<br/>
              • Use diagrams and illustrations
            </ContentText>
            
            <SubsectionTitle>🧠 Exam Preparation Strategy</SubsectionTitle>
            <StepList>
              <li><strong>Study Groups:</strong> Study with Korean students</li>
              <li><strong>Past Exams:</strong> Request materials from seniors</li>
              <li><strong>Professor Consultation:</strong> Actively use office hours</li>
              <li><strong>Time Management:</strong> Plan 2-3 weeks before exams</li>
              <li><strong>Memorization:</strong> Use repetition and association techniques</li>
            </StepList>
          </GuideContent>

          {/* Language & Communication */}
          <GuideContent>
            <SectionTitle>🗣️ Language and Communication</SectionTitle>
            
            <SubsectionTitle>🇰🇷 Korean Language Learning Tips</SubsectionTitle>
            <ContentText>
              <strong>Academic Korean:</strong> Learn academic terms different from daily Korean<br/>
              <strong>Major Terminology:</strong> Organize key terms for each major<br/>
              <strong>Presentation Korean:</strong> Practice formal presentation expressions<br/>
              <strong>Discussion Korean:</strong> Learn to express opinions and counter-arguments
            </ContentText>
            
            <SubsectionTitle>👥 Communication with Professors</SubsectionTitle>
            <StepList>
              <li><strong>Honorific Language:</strong> Always use polite language</li>
              <li><strong>Email Etiquette:</strong> Clear subject line, polite greetings</li>
              <li><strong>Office Hours:</strong> Make appointments in advance</li>
              <li><strong>Question Preparation:</strong> Prepare specific and clear questions</li>
              <li><strong>Show Gratitude:</strong> Express thanks after receiving help</li>
            </StepList>
            
            <SubsectionTitle>🤝 Peer Relationships</SubsectionTitle>
            <ContentText>
              <strong>Study Group Participation:</strong> Improve language skills while studying with Korean students<br/>
              <strong>Cultural Exchange:</strong> Build relationships through cultural sharing<br/>
              <strong>Asking for Help:</strong> Actively seek help when needed<br/>
              <strong>Mutual Support:</strong> Offer help with foreign languages and international perspectives
            </ContentText>
          </GuideContent>

          {/* Academic Resources */}
          <GuideContent>
            <SectionTitle>📚 Utilizing Academic Resources</SectionTitle>
            
            <SubsectionTitle>🏛️ Library Usage</SubsectionTitle>
            <StepList>
              <li><strong>Study Room Reservation:</strong> Book seats through online system</li>
              <li><strong>Resource Search:</strong> Learn to use academic databases</li>
              <li><strong>Group Study Rooms:</strong> Reserve spaces for team projects</li>
              <li><strong>Reference Services:</strong> Ask librarians for search assistance</li>
              <li><strong>Digital Resources:</strong> Use e-books and research databases</li>
            </StepList>
            
            <SubsectionTitle>💻 Online Learning Tools</SubsectionTitle>
            <ContentText>
              <strong>LMS (Learning Management System):</strong><br/>
              • Download lecture materials<br/>
              • Submit assignments and check grades<br/>
              • Check announcements and schedules<br/><br/>
              <strong>Useful Apps/Websites:</strong><br/>
              • Naver Dictionary: Korean-Foreign language translation<br/>
              • Google Scholar: Academic paper search<br/>
              • YouTube: Lecture videos and study materials
            </ContentText>
            
            <SubsectionTitle>🎯 Learning Support Services</SubsectionTitle>
            <StepList>
              <li><strong>Tutoring Program:</strong> Learning support from senior students</li>
              <li><strong>Writing Center:</strong> Report writing guidance</li>
              <li><strong>Language Exchange:</strong> Korean-Foreign language exchange</li>
              <li><strong>Counseling Center:</strong> Academic and psychological counseling</li>
              <li><strong>International Student Support:</strong> Programs for foreign students</li>
            </StepList>
          </GuideContent>

          {/* Time Management */}
          <GuideContent>
            <SectionTitle>⏰ Time Management and Academic Planning</SectionTitle>
            
            <SubsectionTitle>📅 Semester Planning</SubsectionTitle>
            <StepList>
              <li><strong>Syllabus Analysis:</strong> Understand course schedules and evaluation methods</li>
              <li><strong>Important Dates:</strong> Mark exams and assignment deadlines on calendar</li>
              <li><strong>Learning Goals:</strong> Set clear short/long-term goals</li>
              <li><strong>Priority Setting:</strong> Classify by importance and urgency</li>
              <li><strong>Buffer Time:</strong> Plan for unexpected situations</li>
            </StepList>
            
            <SubsectionTitle>📊 Weekly/Daily Scheduling</SubsectionTitle>
            <ContentText>
              <strong>Effective Time Distribution:</strong><br/>
              • Morning: Difficult subjects when concentration is high<br/>
              • Afternoon: Memorization-focused learning<br/>
              • Evening: Review and organization<br/><br/>
              <strong>Break Management:</strong><br/>
              • 50 minutes study + 10 minutes break<br/>
              • 1-2 complete rest days per week<br/>
              • Relieve stress through hobbies
            </ContentText>
            
            <WarningBox>
              <div className="warning-title">⚠️ Precautions</div>
              <div className="warning-content">
                • Be careful of burnout from excessive studying<br/>
                • Maintain healthy lifestyle (adequate sleep, regular meals)<br/>
                • Use counseling services for stress management<br/>
                • Actively seek help for cultural adjustment difficulties
              </div>
            </WarningBox>
          </GuideContent>

          {/* Cultural Adaptation */}
          <GuideContent>
            <SectionTitle>🌏 Cultural Adaptation and Networking</SectionTitle>
            
            <SubsectionTitle>🎭 Understanding Korean University Culture</SubsectionTitle>
            <ContentText>
              <strong>Senior-Junior Relationships:</strong> Hierarchy based on age and year<br/>
              <strong>Group Activities:</strong> Emphasis on MT, club activities<br/>
              <strong>Dining Culture:</strong> Meals with professors and seniors<br/>
              <strong>Nunchi:</strong> Reading the atmosphere and acting appropriately
            </ContentText>
            
            <SubsectionTitle>🤝 Networking Strategies</SubsectionTitle>
            <StepList>
              <li><strong>Join Clubs:</strong> Connect with students sharing similar interests</li>
              <li><strong>Study Groups:</strong> Combine academics and socializing</li>
              <li><strong>International Student Association:</strong> Share information with other international students</li>
              <li><strong>Mentor-Mentee:</strong> Get advice and help from seniors</li>
              <li><strong>Exchange Student Programs:</strong> Build global networks</li>
            </StepList>
            
            <ContactInfo>
              <div className="contact-title">📞 Learning Support Contacts</div>
              <div className="contact-item">Academic Affairs: University Academic Office</div>
              <div className="contact-item">International Office: Support for foreign students</div>
              <div className="contact-item">Learning Counseling Center: Academic counseling</div>
              <div className="contact-item">Psychological Counseling Center: Adjustment and stress counseling</div>
            </ContactInfo>
            
            <InfoBox>
              <div className="info-title">🎯 Final Advice for Successful Study in Korea</div>
              <div className="info-content">
                • Take on new challenges with a proactive attitude<br/>
                • Don't fear mistakes, keep trying<br/>
                • Build genuine friendships with Korean students<br/>
                • Maintain your cultural identity while embracing Korean culture<br/>
                • Don't hesitate to ask for help when facing difficulties
              </div>
            </InfoBox>
          </GuideContent>
        </>
      )}

      {id !== '1' && id !== '2' && id !== '3' && id !== '4' && (
        <GuideContent>
          <SectionTitle>📖 Guide Content</SectionTitle>
          <ContentText>
            This guide provides comprehensive information about {guide.title.toLowerCase()}. 
            More detailed content will be added soon to help you navigate this topic effectively.
          </ContentText>
        </GuideContent>
      )}

      {id === '6' && (
        <>
          {/* Health Insurance Guide */}
          <GuideContent>
            <SectionTitle>🏥 Health Insurance in Korea</SectionTitle>
            <ContentText>
              Health insurance is mandatory for all international students in Korea. Understanding the Korean National Health Insurance System (NHIS) and temporary coverage options is essential for your health and legal status.
            </ContentText>
            
            <SubsectionTitle>🇰🇷 Korean National Health Insurance (NHIS)</SubsectionTitle>
            <ContentText>
              <strong>Mandatory Enrollment:</strong> All international students with D-2 and D-4 visas are automatically enrolled in NHIS upon alien registration.<br/>
              <strong>Coverage Start Date:</strong> From your alien registration date (first entry) or re-entry date (subsequent entries)
            </ContentText>
            
            <InfoBox>
              <div className="info-title">📋 NHIS Enrollment by Visa Type</div>
              <div className="info-content">
                • <strong>D-2 Student Visa:</strong> Automatic enrollment from alien registration date<br/>
                • <strong>D-4 Korean Language:</strong> 6 months after entry date<br/>
                • <strong>F-4 Overseas Korean:</strong> From school entrance date<br/>
                • No action required - NHIS processes enrollment automatically
              </div>
            </InfoBox>
            
            <SubsectionTitle>💰 Insurance Fees and Payment</SubsectionTitle>
            <ContentText>
              <strong>Monthly Premium (2024-2025):</strong> Approximately 76,390 KRW (~$60 USD)<br/>
              <strong>Student Discount:</strong> 50% reduction available for eligible students
            </ContentText>
            
            <StepList>
              <li><strong>Eligibility for Discount:</strong> No income tax paid in previous year, household income below 3.6 million KRW, property tax base below 135 million KRW</li>
              <li><strong>Payment Due:</strong> By the 25th of each month (prepayment for next month)</li>
              <li><strong>Billing:</strong> Mailed to your registered address from the 10th of each month</li>
              <li><strong>Payment Methods:</strong> Bank transfer, convenience stores, online, NHIS office</li>
            </StepList>
            
            <SubsectionTitle>🏥 Coverage and Benefits</SubsectionTitle>
            <ContentText>
              International students receive the same benefits as Korean citizens:
            </ContentText>
            <StepList>
              <li><strong>Inpatient Care:</strong> 80% coverage (you pay 20%)</li>
              <li><strong>Outpatient Care:</strong> 30-70% coverage depending on facility type</li>
              <li><strong>Dental Care:</strong> Covered for basic treatments</li>
              <li><strong>Traditional Korean Medicine:</strong> Covered</li>
              <li><strong>Health Checkups:</strong> Free biannual checkups based on birth year</li>
              <li><strong>Pregnancy/Childbirth:</strong> Comprehensive coverage</li>
            </StepList>
            
            <SubsectionTitle>⏰ Temporary Insurance (First 3 Months)</SubsectionTitle>
            <ContentText>
              <strong>Coverage Gap:</strong> NHIS enrollment takes 6-8 weeks after arrival, creating a coverage gap.<br/>
              <strong>Requirement:</strong> You must have private health insurance for the first 2-3 months in Korea.
            </ContentText>
            
            <WarningBox>
              <div className="warning-title">⚠️ Critical Insurance Requirements</div>
              <div className="warning-content">
                • Bring proof of temporary health insurance before arrival<br/>
                • Coverage must be valid from arrival date until NHIS activation<br/>
                • Minimum coverage: 1 billion KRW for medical expenses<br/>
                • Failure to provide proof may result in admission rescission
              </div>
            </WarningBox>
            
            <SubsectionTitle>📱 Managing Your NHIS Account</SubsectionTitle>
            <StepList>
              <li><strong>NHIS Card:</strong> Automatically mailed to your registered address</li>
              <li><strong>Electronic Billing:</strong> Set up email/SMS billing by calling 033-811-2000</li>
              <li><strong>Automatic Payment:</strong> Link to Korean bank account for convenience</li>
              <li><strong>Address Changes:</strong> Report to nearest NHIS center immediately</li>
              <li><strong>Family Coverage:</strong> Add spouse and children under 19 at NHIS office</li>
            </StepList>
            
            <SubsectionTitle>🚫 Consequences of Non-Payment</SubsectionTitle>
            <ContentText>
              <strong>Health Benefits:</strong> Suspended until arrears are paid<br/>
              <strong>Visa Extension:</strong> Blocked if overdue amount exceeds 500,000 KRW<br/>
              <strong>Legal Status:</strong> May affect your ability to maintain student status
            </ContentText>
            
            <SubsectionTitle>🔄 Insurance Exemption (Rare Cases)</SubsectionTitle>
            <ContentText>
              You may apply for NHIS exemption if you have equivalent foreign insurance coverage, but this requires:
            </ContentText>
            <StepList>
              <li>Minimum 1 billion KRW medical coverage</li>
              <li>Coverage for common diseases and injuries</li>
              <li>Valid for your entire stay in Korea</li>
              <li>Application at NHIS Center for Foreign Residents</li>
              <li>Korean translation of insurance policy required</li>
            </StepList>
            
            <ContactInfo>
              <div className="contact-title">📞 NHIS Contact Information</div>
              <div className="contact-item">NHIS Hotline: 033-811-2000 (English, Chinese, Vietnamese, Uzbek)</div>
              <div className="contact-item">General Inquiry: 1577-1000 (Press 7 for foreign languages)</div>
              <div className="contact-item">NHIS Website: nhis.or.kr/english</div>
              <div className="contact-item">Hi Korea Portal: hikorea.go.kr</div>
            </ContactInfo>
            
            <InfoBox>
              <div className="info-title">💡 Insurance Success Tips</div>
              <div className="info-content">
                • Purchase temporary insurance before arriving in Korea<br/>
                • Set up automatic payment to avoid late fees<br/>
                • Keep your NHIS card with you at all times<br/>
                • Register for electronic billing for faster communication<br/>
                • Report address changes immediately to avoid billing issues<br/>
                • Use health checkups - they're free and comprehensive
              </div>
            </InfoBox>
          </GuideContent>
         </>
       )}

       {id === '5' && (
         <>
           {/* Visa Tips Guide */}
           <GuideContent>
             <SectionTitle>📋 Visa Information for Korea</SectionTitle>
             <ContentText>
               Understanding Korean visa requirements is crucial for international students. Different visa types serve different purposes, and it's essential to obtain the correct visa for your stay in Korea.
             </ContentText>
             
             <SubsectionTitle>🎓 Student Visas (D-2 and D-4)</SubsectionTitle>
             <ContentText>
               <strong>D-2 Student Visa:</strong> For degree-seeking students (Bachelor's, Master's, PhD)<br/>
               <strong>D-4 Korean Language Trainee:</strong> For Korean language course students<br/><br/>
               <strong>Required Documents:</strong>
             </ContentText>
             <StepList>
               <li>Valid passport (minimum 6 months validity)</li>
               <li>Completed visa application form</li>
               <li>Certificate of Admission from Korean university</li>
               <li>Financial proof (bank statements, scholarship letters)</li>
               <li>Academic transcripts and diplomas</li>
               <li>Health certificate and tuberculosis test results</li>
               <li>Passport photos (3.5cm x 4.5cm)</li>
             </StepList>
             
             <InfoBox>
               <div className="info-title">💡 Student Visa Tips</div>
               <div className="info-content">
                 • Apply at Korean embassy/consulate in your home country<br/>
                 • Processing time: 5-10 business days<br/>
                 • D-2 visa allows part-time work (up to 20 hours/week with permit)<br/>
                 • Cannot change from tourist visa (C-3) to student visa within Korea
               </div>
             </InfoBox>
             
             <SubsectionTitle>🏢 Work Visas (E-1 to E-7)</SubsectionTitle>
             <ContentText>
               Korea offers various work visa categories for different professions:
             </ContentText>
             <StepList>
               <li><strong>E-1 Professor:</strong> University-level teaching and research</li>
               <li><strong>E-2 Foreign Language Instructor:</strong> English/foreign language teaching</li>
               <li><strong>E-3 Researcher:</strong> Research work in specialized fields</li>
               <li><strong>E-4 Technical Instructor:</strong> Technology and natural science experts</li>
               <li><strong>E-5 Professional:</strong> Licensed professionals (lawyers, doctors, architects)</li>
               <li><strong>E-6 Arts and Entertainment:</strong> Artists, athletes, entertainers</li>
               <li><strong>E-7 Special Ability:</strong> Specialized workers with employment contracts</li>
             </StepList>
             
             <SubsectionTitle>🌍 Tourist and Short-term Visas</SubsectionTitle>
             <ContentText>
               <strong>Visa-Free Entry:</strong> Many countries have visa-free agreements with Korea for stays up to 90 days<br/>
               <strong>C-3 Short-term Visit:</strong> For tourism, business, family visits (90 days maximum)
             </ContentText>
             
             <WarningBox>
               <div className="warning-title">⚠️ Important Visa Warnings</div>
               <div className="warning-content">
                 • Never work on a tourist visa - this is illegal<br/>
                 • Cannot change visa status without leaving Korea (except specific cases)<br/>
                 • Overstaying your visa results in fines and entry bans<br/>
                 • Always carry your passport and Alien Registration Card
               </div>
             </WarningBox>
             
             <SubsectionTitle>🔄 Visa Extensions and Changes</SubsectionTitle>
             <StepList>
               <li><strong>Extension Applications:</strong> Apply 2 months before expiration</li>
               <li><strong>Required Documents:</strong> Application form, passport, financial proof, reason for extension</li>
               <li><strong>Processing Location:</strong> Immigration office in your area</li>
               <li><strong>Fees:</strong> Vary by visa type (typically 30,000-100,000 KRW)</li>
             </StepList>
             
             <SubsectionTitle>📱 K-ETA (Korea Electronic Travel Authorization)</SubsectionTitle>
             <ContentText>
               For visa-free countries, K-ETA may be required for entry. As of 2024, K-ETA requirements are temporarily waived for US citizens until December 31, 2024, but check current requirements before travel.
             </ContentText>
             
             <ContactInfo>
               <div className="contact-title">📞 Visa and Immigration Contacts</div>
               <div className="contact-item">Korea Immigration Service: 1345 (Korean, English, Chinese, Japanese)</div>
               <div className="contact-item">Hi Korea (Immigration Portal): hikorea.go.kr</div>
               <div className="contact-item">Korea Visa Portal: visa.go.kr</div>
               <div className="contact-item">Nearest Immigration Office: Find location on hikorea.go.kr</div>
             </ContactInfo>
             
             <InfoBox>
               <div className="info-title">🎯 Visa Success Tips</div>
               <div className="info-content">
                 • Start visa application process early (2-3 months before travel)<br/>
                 • Ensure all documents are properly translated and notarized<br/>
                 • Keep copies of all visa documents<br/>
                 • Register at immigration office within 90 days of arrival<br/>
                 • Maintain valid visa status throughout your stay
               </div>
             </InfoBox>
           </GuideContent>
         </>
       )}
 
     </Container>
  );
}

export default GuideDetail;
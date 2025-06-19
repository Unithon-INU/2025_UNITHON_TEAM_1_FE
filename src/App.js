import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import styled from 'styled-components';
import { AuthProvider } from './contexts/AuthContext';

// Import components
import BottomNavigation from './components/BottomNavigation';
import Home from './pages/Home';
import Community from './pages/Community';
import CommunityPost from './pages/CommunityPost';
import CommunityPostDetail from './pages/CommunityPostDetail';
import Clubs from './pages/Clubs';
import ClubsPost from './pages/ClubsPost';
import Jobs from './pages/Jobs';
import JobsPostDetail from './pages/JobsPostDetail';
import MyPage from './pages/MyPage';
import PrivacySecurity from './pages/PrivacySecurity';
import Login from './pages/Login';
import Register from './pages/Register';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2196F3',
    },
    secondary: {
      main: '#FF9800',
    },
    background: {
      default: '#F5F5F5',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
});

const AppContainer = styled.div`
  min-height: 100vh;
  background-color: #F5F5F5;
  padding-bottom: 80px; /* Space for bottom navigation */
`;

const ContentContainer = styled.div`
  max-width: 414px;
  margin: 0 auto;
  background-color: white;
  min-height: calc(100vh - 80px);
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
`;

function App() {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router basename="/2025_UNITHON_TEAM_1_FE">
          <AppContainer>
            <ContentContainer>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/community" element={<Community />} />
                <Route path="/community/post" element={<CommunityPost />} />
                <Route path="/community/post/:id" element={<CommunityPostDetail />} />
                <Route path="/clubs" element={<Clubs />} />
                <Route path="/clubs/:id" element={<ClubsPost />} />
                <Route path="/jobs" element={<Jobs />} />
                <Route path="/jobs/:id" element={<JobsPostDetail />} />
                <Route path="/mypage" element={<MyPage />} />
                <Route path="/privacy-security" element={<PrivacySecurity />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
              </Routes>
            </ContentContainer>
            <BottomNavigation />
          </AppContainer>
        </Router>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;

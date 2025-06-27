import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from '../contexts/AuthContext';
import {
  Notifications as NotificationsIcon,
  Close as CloseIcon,
} from '@mui/icons-material';

const Container = styled.div`
  padding: 20px;
  background-color: white;
  min-height: 100vh;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
  position: relative;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  color: #333;
  margin: 0;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

const LogoImage = styled.img`
  width: 40px;
  height: auto;
  z-index: 1;
`;

const NotificationButton = styled.button`
  background: none;
  border: none;
  padding: 8px;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #f5f5f5;
  }
`;

const NotificationBadge = styled.div`
  position: absolute;
  top: 4px;
  right: 4px;
  width: 12px;
  height: 12px;
  background-color: #f44336;
  border-radius: 50%;
  border: 2px solid white;
`;

const NotificationModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1001; // Changed from 1000 to 1001
`;

const NotificationContent = styled.div`
  background: white;
  border-radius: 12px;
  width: 90%;
  max-width: 500px;
  max-height: 80vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const NotificationHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid #e0e0e0;
`;

const NotificationTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin: 0;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  padding: 8px;
  cursor: pointer;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background-color: #f5f5f5;
  }
`;

const NotificationList = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 0;
`;

const NotificationItem = styled.div`
  padding: 16px 20px;
  border-bottom: 1px solid #f0f0f0;
  cursor: pointer;
  background-color: ${props => props.isRead ? 'white' : '#f8f9fa'};
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #f5f5f5;
  }
  
  &:last-child {
    border-bottom: none;
  }
`;

const NotificationSender = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #333;
  margin-bottom: 4px;
`;

const NotificationMessage = styled.div`
  font-size: 14px;
  color: #666;
  margin-bottom: 8px;
`;

const NotificationTime = styled.div`
  font-size: 12px;
  color: #999;
`;

const EmptyNotifications = styled.div`
  padding: 40px 20px;
  text-align: center;
  color: #999;
  font-size: 14px;
`;

const MarkAllReadButton = styled.button`
  background: #2196f3;
  color: white;
  border: none;
  padding: 12px 20px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  
  &:hover {
    background: #1976d2;
  }
  
  &:disabled {
    background: #e0e0e0;
    cursor: not-allowed;
  }
`;

const SectionTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin: 30px 0 16px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ViewAllButton = styled.button`
  background: none;
  border: none;
  color: #2196F3;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  
  &:hover {
    text-decoration: underline;
  }
`;

const PostCard = styled.div`
  display: flex;
  margin-bottom: 16px;
  cursor: pointer;
  
  &:hover {
    opacity: 0.8;
  }
`;

const PostImage = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 8px;
  background: ${props => props.color || '#E3F2FD'};
  margin-right: 16px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 600;
  color: #333;
`;

const PostContent = styled.div`
  flex: 1;
`;

const PostTitle = styled.h3`
  font-size: 16px;
  font-weight: 500;
  color: #333;
  margin: 0 0 8px 0;
  line-height: 1.4;
`;

const PostMeta = styled.p`
  font-size: 14px;
  color: #757575;
  margin: 0;
`;

const CategoryTag = styled.span`
  display: inline-block;
  background: #E3F2FD;
  color: #1976D2;
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
  margin-right: 8px;
`;

const LikeCount = styled.span`
  color: #757575;
  font-weight: 400;
`;

const ClubCard = styled.div`
  display: flex;
  margin-bottom: 16px;
  cursor: pointer;
  
  &:hover {
    opacity: 0.8;
  }
`;

const ClubImage = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 8px;
  background: ${props => props.color || '#E8F5E8'};
  margin-right: 16px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ClubContent = styled.div`
  flex: 1;
`;

const ClubName = styled.h3`
  font-size: 16px;
  font-weight: 500;
  color: #333;
  margin: 0 0 4px 0;
`;

const ClubDescription = styled.p`
  font-size: 14px;
  color: #757575;
  margin: 0;
`;

const LoadingText = styled.div`
  text-align: center;
  color: #757575;
  padding: 20px;
`;

const Home = () => {
  const navigate = useNavigate();
  const { user, token, isLoggedIn } = useAuth();
  const [topPosts, setTopPosts] = useState([]);
  const [topClubs, setTopClubs] = useState([]);
  const [topJobs, setTopJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [hasUnreadNotifications, setHasUnreadNotifications] = useState(false);
  const [notificationLoading, setNotificationLoading] = useState(false);

  // Helper function to get avatar color
  const getAvatarColor = (nickname) => {
    const colors = ['#FF6B6B', '#F3E5F5', '#E8F5E8', '#FFF3E0', '#E3F2FD'];
    return colors[nickname.length % colors.length];
  };

  // Helper function to format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor((now - date) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${diffInHours} hours ago`;
    if (diffInHours < 48) return '1 day ago';
    return `${Math.floor(diffInHours / 24)} days ago`;
  };

  // Helper function to get total like count
  const getTotalLikeCount = (post) => {
    const allPostLikes = JSON.parse(localStorage.getItem('allPostLikes') || '{}');
    const localLikes = allPostLikes[post.id.toString()] || 0;
    return post.likeCount + localLikes;
  };

  // Fetch notification summary
  const fetchNotificationSummary = async () => {
    if (!isLoggedIn || !token) return;
    
    try {
      const response = await fetch('https://unithon1.shop/api/notifications/summary', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });
      
      if (response.ok) {
        const data = await response.json();
        setHasUnreadNotifications(data.hasUnread);
      }
    } catch (error) {
      console.error('Error fetching notification summary:', error);
    }
  };

  // Fetch notifications
  const fetchNotifications = async () => {
    if (!isLoggedIn || !token) return;
    
    try {
      setNotificationLoading(true);
      const response = await fetch('https://unithon1.shop/api/notifications', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });
      
      if (response.ok) {
        const data = await response.json();
        setNotifications(data);
      }
    } catch (error) {
      console.error('Error fetching notifications:', error);
    } finally {
      setNotificationLoading(false);
    }
  };

  // Mark notification as read
  const markNotificationAsRead = async (notificationId) => {
    if (!isLoggedIn || !token) return;
    
    try {
      const response = await fetch(`https://unithon1.shop/api/notifications/${notificationId}/read`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });
      
      if (response.ok) {
        // Update local state
        setNotifications(prev => 
          prev.map(notif => 
            notif.id === notificationId 
              ? { ...notif, isRead: true }
              : notif
          )
        );
        // Refresh summary
        fetchNotificationSummary();
      }
    } catch (error) {
      console.error('Error marking notification as read:', error);
    }
  };

  // Mark all notifications as read
  const markAllNotificationsAsRead = async () => {
    if (!isLoggedIn || !token) return;
    
    try {
      const response = await fetch('https://unithon1.shop/api/notifications/read-all', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });
      
      if (response.ok) {
        // Update local state
        setNotifications(prev => 
          prev.map(notif => ({ ...notif, isRead: true }))
        );
        setHasUnreadNotifications(false);
      }
    } catch (error) {
      console.error('Error marking all notifications as read:', error);
    }
  };

  // Handle notification click
  const handleNotificationClick = async (notification) => {
    // Mark as read if not already read
    if (!notification.isRead) {
      await markNotificationAsRead(notification.id);
    }
    
    // Navigate to the post
    if (notification.postId) {
      setShowNotifications(false);
      navigate(`/community/post/${notification.postId}`);
    }
  };

  // Handle notification button click
  const handleNotificationButtonClick = () => {
    if (!isLoggedIn) {
      alert('Please log in to view notifications');
      navigate('/login');
      return;
    }
    
    setShowNotifications(true);
    fetchNotifications();
    
    // Remove red indicator when opening notifications
    if (hasUnreadNotifications) {
      setHasUnreadNotifications(false);
    }
  };

  // Fetch notification summary on component mount and periodically
  useEffect(() => {
    if (isLoggedIn) {
      fetchNotificationSummary();
      
      // Poll for new notifications every 30 seconds
      const interval = setInterval(fetchNotificationSummary, 30000);
      return () => clearInterval(interval);
    }
  }, [isLoggedIn, token]);

  // Fetch top 3 most liked posts
  useEffect(() => {
    const fetchTopPosts = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://unithon1.shop/api/posts/top', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        
        if (!response.ok) {
          throw new Error('Failed to fetch top posts');
        }
        
        const data = await response.json();
        setTopPosts(data);
      } catch (error) {
        console.error('Error fetching top posts:', error);
        setTopPosts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchTopPosts();
  }, []);

  // Set top 3 clubs from the clubs list
  useEffect(() => {
    const clubs = [
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
      }
    ];
    
    setTopClubs(clubs);
  }, []);

  // Set top 3 jobs from the jobs list
  useEffect(() => {
    const jobs = [
      {
        id: 1,
        title: 'Solder Paste Technology Developer',
        company: '엠케이전자',
        location: 'Eumseong-gun, Chungcheongbuk-do',
        schedule: 'Temporary',
        logo: 'https://dw42ybivffkam.cloudfront.net/0d0725c0-6762-42a5-9955-ede5e6e849c3.jpeg?format=auto&width=1920&quality=100',           // add company logo URL here
        color: '',          // add a color hex code here
        category: 'R&D'
      },
      {
        id: 2,
        title: 'Recruitment for Samji Electronics Signal Processing Team',
        company: '삼지전자',
        location: 'Hwaseong-si, Gyeonggi-do',
        schedule: 'Full Time',
        logo: 'https://dw42ybivffkam.cloudfront.net/8d2d9b78-d325-4d5f-af08-0270e53b7b63.png?format=auto&width=1920&quality=100',           // add company logo URL here
        color: '',          // add a color hex code here
        category: 'Etc'
      },
      {
        id: 3,
        title: 'Recruiting new and experienced embedded developers (foreigners welcome to apply)',
        company: '주식회사 스템온',
        location: 'Seongnam-si, Gyeonggi-do',
        schedule: 'Full Time',
        logo: 'https://dw42ybivffkam.cloudfront.net/6f12a921-6b4c-4784-a182-723fd71abb90.png?format=auto&width=1920&quality=100',           // add company logo URL here
        color: '',          // add a color hex code here
        category: 'IT'
      },
    ];
    
    
    setTopJobs(jobs);
  }, []);

  return (
    <Container>
      <Header>
        <LogoImage src="https://unithon1-bucket.s3.ap-northeast-2.amazonaws.com/UniBus_logo.png" alt="UniBus Logo" />
        <Title>Home</Title>
        {isLoggedIn && (
          <NotificationButton onClick={handleNotificationButtonClick}>
            <NotificationsIcon style={{ fontSize: '24px', color: '#666' }} />
            {hasUnreadNotifications && <NotificationBadge />}
          </NotificationButton>
        )}
      </Header>

      {/* Notification Modal */}
      {showNotifications && (
        <NotificationModal onClick={() => setShowNotifications(false)}>
          <NotificationContent onClick={(e) => e.stopPropagation()}>
            <NotificationHeader>
              <NotificationTitle>Notifications</NotificationTitle>
              <CloseButton onClick={() => setShowNotifications(false)}>
                <CloseIcon />
              </CloseButton>
            </NotificationHeader>
            
            <NotificationList>
              {notificationLoading ? (
                <LoadingText>Loading notifications...</LoadingText>
              ) : notifications.length > 0 ? (
                notifications.map(notification => (
                  <NotificationItem
                    key={notification.id}
                    isRead={notification.isRead}
                    onClick={() => handleNotificationClick(notification)}
                  >
                    <NotificationSender>{notification.senderNickname}</NotificationSender>
                    <NotificationMessage>{notification.message}</NotificationMessage>
                    <NotificationTime>{formatDate(notification.createdAt)}</NotificationTime>
                  </NotificationItem>
                ))
              ) : (
                <EmptyNotifications>
                  No notifications yet
                </EmptyNotifications>
              )}
            </NotificationList>
            
            {notifications.some(n => !n.isRead) && (
              <MarkAllReadButton onClick={markAllNotificationsAsRead}>
                Mark All as Read
              </MarkAllReadButton>
            )}
          </NotificationContent>
        </NotificationModal>
      )}

      <SectionTitle>
        Board
        <ViewAllButton onClick={() => navigate('/community')}>
          View All
        </ViewAllButton>
      </SectionTitle>
      
      {loading ? (
        <LoadingText>Loading popular posts...</LoadingText>
      ) : topPosts.length > 0 ? (
        topPosts.map(post => (
          <PostCard key={post.id} onClick={() => navigate(`/community/post/${post.id}`)}>
            <PostImage color={getAvatarColor(post.nickname)}>
              {post.nickname.charAt(0).toUpperCase()}
            </PostImage>
            <PostContent>
              <PostTitle>{post.title}</PostTitle>
              <PostMeta>
                <CategoryTag>{post.category}</CategoryTag>
                <LikeCount>♡ {getTotalLikeCount(post)}</LikeCount> • {post.commentCount} comments • {formatDate(post.createdAt)}
              </PostMeta>
            </PostContent>
          </PostCard>
        ))
      ) : (
        <LoadingText>No popular posts available</LoadingText>
      )}

      <SectionTitle>
        Clubs
        <ViewAllButton onClick={() => navigate('/clubs')}>
          View All
        </ViewAllButton>
      </SectionTitle>
      {topClubs.map(club => (
        <ClubCard key={club.id} onClick={() => navigate('/clubs')}>
          <ClubImage color={club.color}>
            <span style={{ fontSize: '24px' }}>{club.logo}</span>
          </ClubImage>
          <ClubContent>
            <ClubName>{club.name}</ClubName>
            <ClubDescription>{club.description}</ClubDescription>
          </ClubContent>
        </ClubCard>
      ))}

      <SectionTitle>
        Jobs
        <ViewAllButton onClick={() => navigate('/jobs')}>
          View All
        </ViewAllButton>
      </SectionTitle>
      {topJobs.map(job => (
        <ClubCard key={job.id} onClick={() => navigate('/jobs')}>
          <ClubImage color={job.color}>
            {job.logo.startsWith('http') ? (
              <img src={job.logo} alt={job.company} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }} />
            ) : (
              <span style={{ fontSize: '24px' }}>{job.logo}</span>
            )}
          </ClubImage>
          <ClubContent>
            <ClubName>{job.title}</ClubName>
            <ClubDescription>{job.company} • {job.location}</ClubDescription>
          </ClubContent>
        </ClubCard>
      ))}
    </Container>
  );
};

export default Home;
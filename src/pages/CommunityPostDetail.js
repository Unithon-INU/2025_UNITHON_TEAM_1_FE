import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from '../contexts/AuthContext';
import {
  ArrowBack as ArrowBackIcon,
  FavoriteBorder as FavoriteBorderIcon,
  Favorite as FavoriteIcon,
  ChatBubbleOutline as CommentIcon,
  Share as ShareIcon,
  Send as SendIcon,
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

const Content = styled.div`
  padding: 20px;
`;

const PostHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Avatar = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: ${props => props.color || '#E3F2FD'};
  margin-right: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 600;
  color: #333;
`;

const PostInfo = styled.div`
  flex: 1;
`;

const Username = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin-bottom: 4px;
`;

const PostTime = styled.div`
  font-size: 14px;
  color: #757575;
`;

const CategoryTag = styled.div`
  display: inline-block;
  background: #E3F2FD;
  color: #1976D2;
  padding: 4px 12px;
  border-radius: 16px;
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 16px;
`;

const PostTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: #333;
  margin: 0 0 16px 0;
  line-height: 1.3;
`;

const PostContent = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #666;
  margin: 0 0 24px 0;
`;

const PostActions = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 16px 0;
  border-top: 1px solid #F0F0F0;
  border-bottom: 1px solid #F0F0F0;
  margin-bottom: 24px;
`;

const ActionButton = styled.button`
  background: none;
  border: none;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: ${props => props.active ? '#F44336' : '#757575'};
  cursor: pointer;
  padding: 8px 12px;
  border-radius: 8px;
  transition: all 0.3s ease;
  
  &:hover {
    background: #F5F5F5;
    color: ${props => props.active ? '#F44336' : '#333'};
  }
`;

const CommentsSection = styled.div`
  margin-top: 24px;
`;

const SectionTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin: 0 0 16px 0;
`;

const CommentCard = styled.div`
  background: #F8F9FA;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 12px;
`;

const CommentHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const CommentAvatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${props => props.color || '#E3F2FD'};
  margin-right: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 600;
  color: #333;
`;

const CommentInfo = styled.div`
  flex: 1;
`;

const CommentUsername = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #333;
`;

const CommentTime = styled.div`
  font-size: 12px;
  color: #757575;
`;

const CommentText = styled.p`
  font-size: 14px;
  line-height: 1.5;
  color: #666;
  margin: 0;
`;

const CommentInput = styled.div`
  position: fixed;
  bottom: 80px;
  left: 0;
  right: 0;
  background: white;
  border-top: 1px solid #E0E0E0;
  padding: 16px 20px;
  display: flex;
  align-items: center;
  gap: 12px;
  z-index: 1001;
`;

const Input = styled.input`
  flex: 1;
  padding: 12px 16px;
  border: 1px solid #E0E0E0;
  border-radius: 24px;
  font-size: 14px;
  background: #F8F9FA;
  
  &:focus {
    outline: none;
    border-color: #2196F3;
    background: white;
  }
  
  &::placeholder {
    color: #BDBDBD;
  }
`;

const SendButton = styled.button`
  background: #2196F3;
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.3s ease;
  
  &:hover {
    background: #1976D2;
  }
  
  &:disabled {
    background: #E0E0E0;
    cursor: not-allowed;
  }
`;

const LoginPromptComment = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px 20px;
  background: #F5F5F5;
  border-top: 1px solid #E0E0E0;
  gap: 12px;
`;

const LoginText = styled.span`
  color: #757575;
  font-size: 14px;
`;

const LoginLink = styled.button`
  background: #2196F3;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  
  &:hover {
    background: #1976D2;
  }
`;

const CommunityPostDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { isLoggedIn } = useAuth();
  const [isLiked, setIsLiked] = useState(false);
  const [comment, setComment] = useState('');
  const [likes, setLikes] = useState(15);

  // Sample post data - in real app, this would be fetched based on the ID
  const postData = {
    1: {
      id: 1,
      username: 'Sarah Kim',
      avatar: 'SK',
      avatarColor: '#E3F2FD',
      time: '2 hours ago',
      category: 'Jobs',
      title: 'How to find a part-time job in Seoul?',
      content: `I'm an international student looking for part-time work opportunities in Seoul. I've been searching for a while but haven't had much luck. \n\nDoes anyone have recommendations for:
• Job search websites specifically for international students
• Types of jobs that are foreigner-friendly
• Tips for the application process
• Any companies known to hire international students

I'm particularly interested in English teaching, tutoring, or customer service roles. My Korean is intermediate level.

Any advice would be greatly appreciated! 🙏`,
      likes: 15,
      comments: [
        {
          id: 1,
          username: 'Mike Johnson',
          avatar: 'MJ',
          avatarColor: '#F3E5F5',
          time: '1 hour ago',
          text: 'I found my part-time job through Alba Heaven (알바천국). They have an English version and many positions for international students!'
        },
        {
          id: 2,
          username: 'Emma Chen',
          avatar: 'EC',
          avatarColor: '#E8F5E8',
          time: '45 minutes ago',
          text: 'Try checking with your university\'s career center. They often have partnerships with local businesses looking for international students.'
        }
      ]
    },
    2: {
      id: 2,
      username: 'Mike Johnson',
      avatar: 'MJ',
      avatarColor: '#F3E5F5',
      time: '1 day ago',
      category: 'Study',
      title: 'Best places to study on campus?',
      content: `The main library is always packed, especially during exam season. I'm looking for alternative quiet study spots on campus where I can focus better.\n\nI've tried:
• 24-hour study rooms (too crowded)
• Cafeteria (too noisy)
• Empty classrooms (sometimes locked)

Any hidden gems you'd recommend? Preferably somewhere with:
• Good WiFi
• Comfortable seating
• Not too many distractions
• Available during evening hours

Thanks in advance for any suggestions!`,
      likes: 8,
      comments: [
        {
          id: 1,
          username: 'David Park',
          avatar: 'DP',
          avatarColor: '#FFF3E0',
          time: '18 hours ago',
          text: 'The graduate study lounge on the 5th floor of the engineering building is usually quiet and has great WiFi!'
        }
      ]
    }
  };

  const post = postData[id] || postData[1];

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(prev => isLiked ? prev - 1 : prev + 1);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.content,
        url: window.location.href
      });
    }
  };

  // Similar updates for comment usernames - fetch from API
  const handleSendComment = async () => {
  if (comment.trim()) {
    try {
      // Get current user nickname
      const userResponse = await fetch('http://43.203.125.32:8080/api/members');
      let currentUserNickname = 'User';
      
      if (userResponse.ok) {
        const userData = await userResponse.json();
        if (userData && userData.length > 0) {
          currentUserNickname = userData[0].nickname;
        }
      }

      // Handle comment submission with nickname
      console.log('Sending comment:', {
        text: comment,
        username: currentUserNickname,
        time: 'Just now'
      });
      
      setComment('');
    } catch (error) {
      console.error('Failed to send comment:', error);
    }
  }
};

  return (
    <Container>
      <Header>
        <BackButton onClick={() => navigate(-1)}>
          <ArrowBackIcon />
        </BackButton>
        <Title>Post</Title>
      </Header>

      <Content>
        <PostHeader>
          <Avatar color={post.avatarColor}>
            {post.avatar}
          </Avatar>
          <PostInfo>
            <Username>{post.username}</Username>
            <PostTime>{post.time}</PostTime>
          </PostInfo>
        </PostHeader>

        <CategoryTag>{post.category}</CategoryTag>
        <PostTitle>{post.title}</PostTitle>
        <PostContent>{post.content}</PostContent>

        <PostActions>
          <ActionButton active={isLiked} onClick={handleLike}>
            {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
            {likes}
          </ActionButton>
          <ActionButton>
            <CommentIcon />
            {post.comments.length}
          </ActionButton>
          <ActionButton onClick={handleShare}>
            <ShareIcon />
            Share
          </ActionButton>
        </PostActions>

        <CommentsSection>
          <SectionTitle>Comments ({post.comments.length})</SectionTitle>
          {post.comments.map(comment => (
            <CommentCard key={comment.id}>
              <CommentHeader>
                <CommentAvatar color={comment.avatarColor}>
                  {comment.avatar}
                </CommentAvatar>
                <CommentInfo>
                  <CommentUsername>{comment.username}</CommentUsername>
                  <CommentTime>{comment.time}</CommentTime>
                </CommentInfo>
              </CommentHeader>
              <CommentText>{comment.text}</CommentText>
            </CommentCard>
          ))}
        </CommentsSection>
      </Content>

      {isLoggedIn ? (
        <CommentInput>
          <Input
            placeholder="Write a comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendComment()}
          />
          <SendButton 
            onClick={handleSendComment}
            disabled={!comment.trim()}
          >
            <SendIcon fontSize="small" />
          </SendButton>
        </CommentInput>
      ) : (
        <LoginPromptComment>
          <LoginText>Please log in to write a comment</LoginText>
          <LoginLink onClick={() => navigate('/login')}>
            Log In
          </LoginLink>
        </LoginPromptComment>
      )}
    </Container>
  );
};

export default CommunityPostDetail;
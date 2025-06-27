import React, { useState, useEffect } from 'react';
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
  
  /* Heart animation styles */
  .heart-icon {
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    transform-origin: center;
  }
  
  &.liked .heart-icon {
    animation: heartPulse 0.6s ease-in-out;
    color: #F44336;
  }
  
  @keyframes heartPulse {
    0% {
      transform: scale(1);
    }
    15% {
      transform: scale(1.3);
    }
    30% {
      transform: scale(1.1);
    }
    50% {
      transform: scale(1.4);
    }
    70% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
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

const CommentInputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 20px;
  border-top: 1px solid #E0E0E0;
  background-color: white;
  position: sticky;
  bottom: 0;
`;

const CommentInput = styled.input`
  flex: 1;
  padding: 12px 16px;
  border: 1px solid #E0E0E0;
  border-radius: 24px;
  font-size: 14px;
  outline: none;
  
  &:focus {
    border-color: #2196F3;
  }
  
  &::placeholder {
    color: #999;
  }
`;

const CommentButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #2196F3;
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  
  &:hover {
    background: #1976D2;
    transform: scale(1.05);
  }
  
  &:disabled {
    background: #E0E0E0;
    cursor: not-allowed;
    transform: none;
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
  const { isLoggedIn, token } = useAuth();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isLiked, setIsLiked] = useState(false);
  const [comment, setComment] = useState('');
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);
  const [commentLoading, setCommentLoading] = useState(false);
  
  // Add edit state management
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({
    category: '',
    title: '',
    content: ''
  });

  // Fetch individual post from backend
  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://unithon1.shop/api/posts/${id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        
        if (!response.ok) {
          throw new Error('Failed to fetch post');
        }
        
        const data = await response.json();
        setPost(data);
        setLikes(data.likeCount);
        
        // Fetch like status if user is logged in
        if (isLoggedIn && token) {
          await fetchLikeStatus();
        }
      } catch (error) {
        console.error('Error fetching post:', error);
        setError('Failed to load post');
      } finally {
        setLoading(false);
      }
    };
  
    if (id) {
      fetchPost();
    }
  }, [id, isLoggedIn, token]);

  // Fetch like status from backend
  const fetchLikeStatus = async () => {
    if (!isLoggedIn || !token) return;
    
    try {
      const response = await fetch(`https://unithon1.shop/api/posts/${id}/likes`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });
      
      if (response.ok) {
        const data = await response.json();
        setIsLiked(data.isLiked || false);
        setLikes(data.totalLikes || data.likeCount || 0);
      }
    } catch (error) {
      console.error('Error fetching like status:', error);
    }
  };

  // Handle like functionality with new backend API
  const handleLike = async () => {
    if (!isLoggedIn) {
      alert('Please log in to like posts');
      navigate('/login');
      return;
    }
  
    try {
      const response = await fetch(`https://unithon1.shop/api/posts/${id}/likes`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });
      
      if (!response.ok) {
        throw new Error('Failed to toggle like');
      }
      
      // Refresh like status after successful toggle
      await fetchLikeStatus();
      
      // Also update the post object for consistency
      setPost(prev => ({
        ...prev,
        likeCount: likes
      }));
      
    } catch (error) {
      console.error('Error handling like:', error);
      alert('Failed to update like status. Please try again.');
    }
  };

  // Fetch comments
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch(`https://unithon1.shop/api/posts/${id}/comments`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        
        if (response.ok) {
          const data = await response.json();
          setComments(data);
        }
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };

    if (id) {
      fetchComments();
    }
  }, [id]);

  // Handle comment submission
  const handleCommentSubmit = async () => {
    if (!isLoggedIn) {
      alert('Please log in to comment');
      navigate('/login');
      return;
    }

    if (!comment.trim()) {
      alert('Please enter a comment');
      return;
    }

    try {
      setCommentLoading(true);
      const response = await fetch(`https://unithon1.shop/api/posts/${id}/comments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
          content: comment.trim()
        })
      });

      if (!response.ok) {
        throw new Error('Failed to post comment');
      }

      const newComment = await response.json();
      setComments(prev => [newComment, ...prev]);
      setComment('');
      
      // Update post comment count
      setPost(prev => ({
        ...prev,
        commentCount: prev.commentCount + 1
      }));
    } catch (error) {
      console.error('Error posting comment:', error);
      alert('Failed to post comment. Please try again.');
    } finally {
      setCommentLoading(false);
    }
  };

  // Delete post function
  const handleDeletePost = async () => {
    if (!window.confirm('Are you sure you want to delete this post?')) {
      return;
    }
    
    try {
      const response = await fetch(`https://unithon1.shop/api/posts/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, // Add this line
        },
      });
      
      if (!response.ok) {
        throw new Error('Failed to delete post');
      }
      
      alert('Post deleted successfully');
      navigate('/community');
    } catch (error) {
      console.error('Error deleting post:', error);
      alert('Failed to delete post. Please try again.');
    }
  };

  // Updated Edit post function
  const handleEditPost = () => {
    if (post) {
      setEditForm({
        category: post.category || '',
        title: post.title || '',
        content: post.content || ''
      });
      setIsEditing(true);
    }
  };

  // New function to handle edit form submission
  const handleUpdatePost = async () => {
    if (!editForm.title.trim() || !editForm.content.trim()) {
      alert('Please fill in all required fields');
      return;
    }

    try {
      const response = await fetch(`https://unithon1.shop/api/posts/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
          category: editForm.category,
          title: editForm.title,
          content: editForm.content
        })
      });

      if (!response.ok) {
        throw new Error('Failed to update post');
      }

      const updatedPost = await response.json();
      setPost(updatedPost);
      setIsEditing(false);
      alert('Post updated successfully');
    } catch (error) {
      console.error('Error updating post:', error);
      alert('Failed to update post. Please try again.');
    }
  };

  // Function to cancel editing
  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditForm({ category: '', title: '', content: '' });
  };

  // Function to handle form input changes
  const handleEditFormChange = (field, value) => {
    setEditForm(prev => ({
      ...prev,
      [field]: value
    }));
  };

  if (loading) {
    return (
      <Container>
        <Header>
          <BackButton onClick={() => navigate('/community')}>
            <ArrowBackIcon />
          </BackButton>
          <Title>Post</Title>
        </Header>
        <div style={{ padding: '20px', textAlign: 'center' }}>Loading post...</div>
      </Container>
    );
  }

  if (error || !post) {
    return (
      <Container>
        <Header>
          <BackButton onClick={() => navigate('/community')}>
            <ArrowBackIcon />
          </BackButton>
          <Title>Post</Title>
        </Header>
        <div style={{ padding: '20px', textAlign: 'center', color: 'red' }}>
          {error || 'Post not found'}
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <Header>
        <BackButton onClick={() => navigate('/community')}>
          <ArrowBackIcon />
        </BackButton>
        <Title>Post</Title>
        {isLoggedIn && (
          <div style={{ display: 'flex', gap: '8px' }}>
            <button onClick={handleEditPost} style={{ padding: '4px 8px', fontSize: '12px' }}>
              Edit
            </button>
            <button 
              onClick={handleDeletePost} 
              style={{ padding: '4px 8px', fontSize: '12px', background: '#f44336', color: 'white', border: 'none', borderRadius: '4px' }}
            >
              Delete
            </button>
          </div>
        )}
      </Header>

      <Content>
        <PostHeader>
          <Avatar color={getAvatarColor(post.nickname)}>
            {post.nickname.charAt(0).toUpperCase()}
          </Avatar>
          <PostInfo>
            <Username>{post.nickname}</Username>
            <PostTime>{formatDate(post.createdAt)}</PostTime>
          </PostInfo>
        </PostHeader>

        <CategoryTag>{post.category}</CategoryTag>
        <PostTitle>{post.title}</PostTitle>
        <PostContent>{post.content}</PostContent>

        <PostActions>
          <ActionButton 
            onClick={handleLike} 
            active={isLiked}
            className={isLiked ? 'liked' : ''}
          >
            {isLiked ? (
              <FavoriteIcon className="heart-icon" style={{ color: '#F44336' }} />
            ) : (
              <FavoriteBorderIcon className="heart-icon" />
            )}
            {likes}
          </ActionButton>
          <ActionButton>
            <CommentIcon />
            {post.commentCount}
          </ActionButton>
          <ActionButton>
            <ShareIcon />
          </ActionButton>
        </PostActions>

        <CommentsSection>
          <SectionTitle>Comments ({comments.length})</SectionTitle>
          
          {/* Display comments */}
          {comments.map(comment => (
            <CommentCard key={comment.id}>
              <CommentHeader>
                <CommentAvatar color={getAvatarColor(comment.nickname)}>
                  {comment.nickname.charAt(0).toUpperCase()}
                </CommentAvatar>
                <CommentInfo>
                  <CommentUsername>{comment.nickname}</CommentUsername>
                  <CommentTime>{formatDate(comment.createdAt)}</CommentTime>
                </CommentInfo>
              </CommentHeader>
              <CommentText>{comment.content}</CommentText>
            </CommentCard>
          ))}
          
          {comments.length === 0 && (
            <div style={{ textAlign: 'center', color: '#757575', padding: '20px' }}>
              No comments yet. Be the first to comment!
            </div>
          )}
        </CommentsSection>
      </Content>

      {/* Comment input */}
      {isLoggedIn ? (
        <CommentInputContainer>
          <CommentInput
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Write a comment..."
            onKeyPress={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleCommentSubmit();
              }
            }}
          />
          <CommentButton 
            onClick={handleCommentSubmit}
            disabled={commentLoading || !comment.trim()}
          >
            <SendIcon />
          </CommentButton>
        </CommentInputContainer>
      ) : (
        <LoginPromptComment>
          <LoginText>Please log in to comment</LoginText>
          <LoginLink onClick={() => navigate('/login')}>
            Log In
          </LoginLink>
        </LoginPromptComment>
      )}
    </Container>
  );
};

// Helper functions (same as in Community.js)
const getAvatarColor = (nickname) => {
  const colors = ['#FF6B6B', '#F3E5F5', '#E8F5E8', '#FFF3E0', '#E3F2FD'];
  return colors[nickname.length % colors.length];
};

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const now = new Date();
  const diffInHours = Math.floor((now - date) / (1000 * 60 * 60));
  
  if (diffInHours < 1) return 'Just now';
  if (diffInHours < 24) return `${diffInHours} hours ago`;
  if (diffInHours < 48) return '1 day ago';
  return `${Math.floor(diffInHours / 24)} days ago`;
};
export default CommunityPostDetail;
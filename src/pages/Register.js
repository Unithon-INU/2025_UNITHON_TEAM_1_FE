import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  Visibility as VisibilityIcon,
  VisibilityOff as VisibilityOffIcon,
  CheckCircle as CheckIcon,
  Cancel as CancelIcon,
} from '@mui/icons-material';

const Container = styled.div`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const RegisterCard = styled.div`
  background: white;
  border-radius: 20px;
  padding: 40px 30px;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  max-height: 90vh;
  overflow-y: auto;
`;

const Logo = styled.div`
  text-align: center;
  margin-bottom: 30px;
`;

const LogoImage = styled.img`
  width: 120px;
  height: auto;
  margin-bottom: 10px;
`;

const LogoText = styled.h1`
  font-size: 32px;
  font-weight: 700;
  color: #333;
  margin: 0;
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Subtitle = styled.p`
  font-size: 16px;
  color: #666;
  margin: 8px 0 0 0;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const InputGroup = styled.div`
  position: relative;
`;

const Label = styled.label`
  font-size: 14px;
  font-weight: 600;
  color: #333;
  margin-bottom: 6px;
  display: block;
`;

const Input = styled.input.withConfig({
  shouldForwardProp: (prop) => !['error', 'success'].includes(prop),
})`
  width: 100%;
  padding: 14px;
  border: 2px solid ${props => 
    props.error ? '#F44336' : 
    props.success ? '#4CAF50' : '#E0E0E0'
  };
  border-radius: 12px;
  font-size: 16px;
  transition: border-color 0.3s ease;
  box-sizing: border-box;
  
  &:focus {
    outline: none;
    border-color: ${props => 
      props.error ? '#F44336' : 
      props.success ? '#4CAF50' : '#667eea'
    };
  }
  
  &::placeholder {
    color: #BDBDBD;
  }
`;

const PasswordInput = styled(Input)`
  padding-right: 50px;
`;

const PasswordToggle = styled.button`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  color: #666;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ValidationIcon = styled.div`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ErrorMessage = styled.div`
  font-size: 12px;
  color: #F44336;
  margin-top: 4px;
`;

const PasswordRequirements = styled.div`
  margin-top: 8px;
  font-size: 12px;
`;

const Requirement = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'met'
})`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 4px;
  color: ${props => props.met ? '#4CAF50' : '#666'};
`;

const Select = styled.select`
  width: 100%;
  padding: 14px;
  border: 2px solid #E0E0E0;
  border-radius: 12px;
  font-size: 16px;
  background: white;
  transition: border-color 0.3s ease;
  box-sizing: border-box;
  
  &:focus {
    outline: none;
    border-color: #667eea;
  }
`;

const CheckboxGroup = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin: 10px 0;
`;

const Checkbox = styled.input`
  margin: 0;
  transform: scale(1.2);
`;

const CheckboxLabel = styled.label`
  font-size: 14px;
  color: #666;
  line-height: 1.4;
  cursor: pointer;
  
  a {
    color: #667eea;
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const RegisterButton = styled.button`
  width: 100%;
  padding: 16px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  margin-top: 10px;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(102, 126, 234, 0.3);
  }
  
  &:disabled {
    background: #E0E0E0;
    color: #999;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

const Divider = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
  
  &::before,
  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: #E0E0E0;
  }
  
  span {
    padding: 0 20px;
    font-size: 14px;
    color: #666;
  }
`;

const LoginPrompt = styled.div`
  text-align: center;
  margin-top: 20px;
  font-size: 14px;
  color: #666;
`;

const LoginLink = styled(Link)`
  color: #667eea;
  text-decoration: none;
  font-weight: 600;
  
  &:hover {
    text-decoration: underline;
  }
`;

// Remove the GoogleButton styled component
// Remove the Divider styled component

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nickname: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  // Remove the universities and countries arrays
  // const universities = [...]; // Remove this
  // const countries = [...]; // Remove this

  const passwordRequirements = [
    { text: 'At least 8 characters', met: formData.password.length >= 8 },
  ];

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear specific error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Validation includes nickname - MOVED INSIDE validateForm function
    if (!formData.nickname.trim()) newErrors.nickname = 'Nickname is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    if (!formData.agreeToTerms) newErrors.agreeToTerms = 'You must agree to the terms and conditions';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);

    try {
      // API call sends nickname to backend - MOVED INSIDE handleSubmit function
      const response = await fetch('https://unithon1.shop/api/members/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nickname: formData.nickname,  // ✅ Correctly sending nickname
          email: formData.email,
          password: formData.password,
          confirmPassword: formData.confirmPassword
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Server error response:', errorData);
        
        // Handle specific error cases
        if (response.status === 409) {
          // Email already exists
          alert('This email is already registered. Please use a different email or try logging in.');
          setErrors({ email: 'This email is already registered' });
        } else {
          // Other errors
          const errorMessage = errorData.message || `HTTP error! status: ${response.status}`;
          alert(`Registration failed: ${errorMessage}`);
          setErrors({ general: 'Registration failed. Please try again.' });
        }
        return;
      }

      const data = await response.json();
      console.log('Registration successful:', data);
      alert('Registration successful! You can now log in.');
      navigate('/login');
    } catch (err) {
      console.error('Registration error:', err);
      alert('Registration failed. Please check your connection and try again.');
      setErrors({ general: 'Registration failed. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <RegisterCard>
        <Logo>
          <LogoImage src="/assets/images/logo.png" alt="UniBus Logo" />
          <LogoText>UniBus</LogoText>
          <Subtitle>Create your account for Incheon National University.</Subtitle>
        </Logo>

        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <Label htmlFor="nickname">Nickname</Label>
            <Input
              id="nickname"
              name="nickname"
              type="text"
              placeholder="Enter your nickname"
              value={formData.nickname}
              onChange={handleInputChange}
              error={!!errors.nickname}
            />
            {errors.nickname && <ErrorMessage>{errors.nickname}</ErrorMessage>}
          </InputGroup>

          {/* Remove the firstName and lastName InputGroups */}

          <InputGroup>
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleInputChange}
              error={!!errors.email}
              success={formData.email && validateEmail(formData.email)}
            />
            {formData.email && (
              <ValidationIcon>
                {validateEmail(formData.email) ? (
                  <CheckIcon style={{ color: '#4CAF50', fontSize: 20 }} />
                ) : (
                  <CancelIcon style={{ color: '#F44336', fontSize: 20 }} />
                )}
              </ValidationIcon>
            )}
            {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
          </InputGroup>

          {/* Remove the university and country InputGroups */}

          {/* Keep the password fields and rest of the form as they are */}
          <InputGroup>
            <Label htmlFor="password">Password</Label>
            <PasswordInput
              id="password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Create a password"
              value={formData.password}
              onChange={handleInputChange}
              error={!!errors.password}
            />
            <PasswordToggle
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </PasswordToggle>
            {formData.password && (
              <PasswordRequirements>
                {passwordRequirements.map((req, index) => (
                  <Requirement key={index} met={req.met}>
                    {req.met ? (
                      <CheckIcon style={{ fontSize: 14 }} />
                    ) : (
                      <CancelIcon style={{ fontSize: 14 }} />
                    )}
                    {req.text}
                  </Requirement>
                ))}
              </PasswordRequirements>
            )}
            {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
          </InputGroup>

          <InputGroup>
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <PasswordInput
              id="confirmPassword"
              name="confirmPassword"
              type={showConfirmPassword ? 'text' : 'password'}
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              error={!!errors.confirmPassword}
              success={formData.confirmPassword && formData.password === formData.confirmPassword}
            />
            <PasswordToggle
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </PasswordToggle>
            {formData.confirmPassword && (
              <ValidationIcon>
                {formData.password === formData.confirmPassword ? (
                  <CheckIcon style={{ color: '#4CAF50', fontSize: 20 }} />
                ) : (
                  <CancelIcon style={{ color: '#F44336', fontSize: 20 }} />
                )}
              </ValidationIcon>
            )}
            {errors.confirmPassword && <ErrorMessage>{errors.confirmPassword}</ErrorMessage>}
          </InputGroup>

          <CheckboxGroup>
            <Checkbox
              id="agreeToTerms"
              name="agreeToTerms"
              type="checkbox"
              checked={formData.agreeToTerms}
              onChange={handleInputChange}
            />
            <CheckboxLabel htmlFor="agreeToTerms">
              I agree to the <Link to="/terms-of-service" style={{color: '#667eea', textDecoration: 'underline'}}>Terms of Service</Link> and <Link to="/privacy-policy" style={{color: '#667eea', textDecoration: 'underline'}}>Privacy Policy</Link>
            </CheckboxLabel>
          </CheckboxGroup>
          {errors.agreeToTerms && <ErrorMessage>{errors.agreeToTerms}</ErrorMessage>}

          <RegisterButton type="submit" disabled={isLoading}>
            {isLoading ? 'Creating Account...' : 'Create Account'}
          </RegisterButton>
        </Form>

        {/* Remove the Divider and GoogleButton */}

        <LoginPrompt>
          Already have an account?{' '}
          <LoginLink to="/login">Sign in here</LoginLink>
        </LoginPrompt>
      </RegisterCard>
    </Container>
  );
};

export default Register;
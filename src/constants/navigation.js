import {
  Home as HomeIcon,
  Forum as CommunityIcon,
  Groups as ClubsIcon,
  Work as JobsIcon,
  Person as PersonIcon,
} from '@mui/icons-material';

// 네비게이션 아이템 설정
export const NAVIGATION_ITEMS = [
  {
    id: 'home',
    path: '/',
    icon: HomeIcon,
    label: 'Home',
    requireAuth: false,
    roles: ['guest', 'user', 'admin']
  },
  {
    id: 'community',
    path: '/community',
    icon: CommunityIcon,
    label: 'Community',
    requireAuth: false,
    roles: ['guest', 'user', 'admin']
  },
  {
    id: 'clubs',
    path: '/clubs',
    icon: ClubsIcon,
    label: 'Clubs',
    requireAuth: false,
    roles: ['guest', 'user', 'admin']
  },
  {
    id: 'jobs',
    path: '/jobs',
    icon: JobsIcon,
    label: 'Jobs',
    requireAuth: false,
    roles: ['guest', 'user', 'admin']
  },
  {
    id: 'mypage',
    path: '/mypage',
    icon: PersonIcon,
    label: 'My Page',
    requireAuth: false,  // Changed from true to false
    roles: ['guest', 'user', 'admin']  // Added 'guest' role
  },
];

// 네비게이션 스타일 상수
export const NAV_CONSTANTS = {
  HEIGHT: 80,
  MAX_WIDTH: 414,
  Z_INDEX: 1000,
  COLORS: {
    ACTIVE: '#2196F3',
    INACTIVE: '#757575',
    BACKGROUND: 'white',
    BORDER: '#E0E0E0'
  },
  TRANSITIONS: {
    COLOR: 'color 0.3s ease',
    TRANSFORM: 'transform 0.2s ease'
  }
};
import React, { useMemo, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from '../contexts/AuthContext';
import { NAVIGATION_ITEMS, NAV_CONSTANTS } from '../constants/navigation';

// 스타일 컴포넌트 개선
const NavContainer = styled.nav`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: ${NAV_CONSTANTS.MAX_WIDTH}px;
  height: ${NAV_CONSTANTS.HEIGHT}px;
  background-color: ${NAV_CONSTANTS.COLORS.BACKGROUND};
  border-top: 1px solid ${NAV_CONSTANTS.COLORS.BORDER};
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: ${NAV_CONSTANTS.Z_INDEX};
  box-shadow: 0 -2px 10px rgba(0,0,0,0.1);
  
  /* 접근성 개선 */
  &:focus-within {
    outline: 2px solid ${NAV_CONSTANTS.COLORS.ACTIVE};
    outline-offset: -2px;
  }
`;

const NavItem = styled.button.withConfig({
  shouldForwardProp: (prop) => !['active', 'disabled'].includes(prop),
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  padding: 8px 12px;
  border-radius: 8px;
  color: ${props => {
    if (props.disabled) return '#BDBDBD';
    return props.active ? NAV_CONSTANTS.COLORS.ACTIVE : NAV_CONSTANTS.COLORS.INACTIVE;
  }};
  transition: ${NAV_CONSTANTS.TRANSITIONS.COLOR}, ${NAV_CONSTANTS.TRANSITIONS.TRANSFORM};
  opacity: ${props => props.disabled ? 0.5 : 1};
  min-width: 60px;
  
  &:hover:not(:disabled) {
    color: ${NAV_CONSTANTS.COLORS.ACTIVE};
    transform: translateY(-2px);
  }
  
  &:focus {
    outline: 2px solid ${NAV_CONSTANTS.COLORS.ACTIVE};
    outline-offset: 2px;
  }
  
  &:active:not(:disabled) {
    transform: translateY(0);
  }
  
  /* 접근성: 고대비 모드 지원 */
  @media (prefers-contrast: high) {
    border: 1px solid currentColor;
  }
`;

const NavIcon = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'active',
})`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2px;
  
  /* 아이콘 크기 반응형 */
  svg {
    font-size: ${props => props.active ? '26px' : '24px'};
    transition: font-size 0.2s ease;
  }
`;

const NavLabel = styled.span.withConfig({
  shouldForwardProp: (prop) => prop !== 'active',
})`
  font-size: 11px;
  margin-top: 2px;
  font-weight: ${props => props.active ? '600' : '400'};
  text-align: center;
  line-height: 1.2;
  
  /* 텍스트 오버플로우 처리 */
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

// 네비게이션 아이템 컴포넌트 분리
const NavigationItem = React.memo(({ item, isActive, isDisabled, onClick }) => {
  const Icon = item.icon;
  
  const handleClick = useCallback(() => {
    if (!isDisabled && onClick) {
      onClick(item.path);
    }
  }, [isDisabled, onClick, item.path]);

  const handleKeyDown = useCallback((event) => {
    if ((event.key === 'Enter' || event.key === ' ') && !isDisabled) {
      event.preventDefault();
      handleClick();
    }
  }, [handleClick, isDisabled]);

  return (
    <NavItem
      active={isActive}
      disabled={isDisabled}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={`Navigate to ${item.label}`}
      aria-current={isActive ? 'page' : undefined}
      tabIndex={isDisabled ? -1 : 0}
      role="tab"
    >
      <NavIcon active={isActive}>
        <Icon />
      </NavIcon>
      <NavLabel active={isActive}>{item.label}</NavLabel>
    </NavItem>
  );
});

NavigationItem.displayName = 'NavigationItem';

const BottomNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  // Remove useAuth if not needed elsewhere
  // const { isLoggedIn, user } = useAuth();

  // Remove the hasPermission function entirely

  // 표시할 네비게이션 아이템 필터링 (메모화)
  const visibleNavItems = useMemo(() => {
    return NAVIGATION_ITEMS; // Show all navigation items
  }, []);

  // 네비게이션 핸들러 (메모화)
  const handleNavigation = useCallback((path) => {
    // 현재 경로와 같으면 네비게이션하지 않음
    if (location.pathname === path) {
      return;
    }
    
    // 부드러운 전환을 위한 지연
    requestAnimationFrame(() => {
      navigate(path);
    });
  }, [navigate, location.pathname]);

  // 현재 활성 경로 확인 (메모화)
  const isActiveRoute = useCallback((itemPath) => {
    // 정확한 경로 매칭
    if (itemPath === '/') {
      return location.pathname === '/';
    }
    
    // 하위 경로 포함 매칭
    return location.pathname.startsWith(itemPath);
  }, [location.pathname]);

  // 키보드 네비게이션 처리
  const handleKeyNavigation = useCallback((event) => {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
      
      const currentIndex = visibleNavItems.findIndex(item => 
        isActiveRoute(item.path)
      );
      
      let nextIndex;
      if (event.key === 'ArrowLeft') {
        nextIndex = currentIndex > 0 ? currentIndex - 1 : visibleNavItems.length - 1;
      } else {
        nextIndex = currentIndex < visibleNavItems.length - 1 ? currentIndex + 1 : 0;
      }
      
      const nextItem = visibleNavItems[nextIndex];
      if (nextItem) { // Remove hasPermission check
        handleNavigation(nextItem.path);
      }
    }
  }, [visibleNavItems, isActiveRoute, handleNavigation]);

  return (
    <NavContainer
      role="tablist"
      aria-label="Main navigation"
      onKeyDown={handleKeyNavigation}
    >
      {visibleNavItems.map((item) => {
        const isActive = isActiveRoute(item.path);
        // Always set disabled to false
        const isDisabled = false;
        
        return (
          <NavigationItem
            key={item.id}
            item={item}
            isActive={isActive}
            isDisabled={isDisabled}
            onClick={handleNavigation}
          />
        );
      })}
    </NavContainer>
  );
};

export default React.memo(BottomNavigation);
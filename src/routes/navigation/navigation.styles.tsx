import styled from 'styled-components';

export const NavigationHeader = styled.header`
  align-items: center;
  background-color: rgb(12, 17, 66);
  color: white;
  display: flex;
  height: 100px;
  justify-content: center;
  width: 100%;

  .Nav--logo-container {
    padding: 10px 0;
  }

  @media (max-width: 768px) {
    height: 66px;
  }
`;

export const NavContainer = styled.nav`
    display: flex;
    max-width: 1280px;
    margin: 0 20px;
    width: 100%;
  `;

export const NavLinksContainer = styled.ul`
  align-items: center;
  display: flex;
  flex: 1;
  height: 100%;
  justify-content: flex-end;

  li {
    margin-left: 20px;
  }

  .Nav--link {
    color: white;
    cursor: pointer;
    display: inline-block;
    font-size: 16px;
    font-weight: 400;
    padding: 10px 0px;
    position: relative;
    text-decoration: none;
    white-space: nowrap;

    &::after {
      content: '';
      position: absolute;
      width: 100%;
      transform: scaleX(0);
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: white;

      @media (max-width: 768px) {
        top: 38px;
      }
    }

    &:focus {
      color: white;
    }

    &:hover {
      color: rgb(109, 112, 142);
    }
    
    &.active::after {
      transform: scaleX(1);
    }

    &.active:focus {
      color: white;
    }
  }
`;

import styled from 'styled-components';

export const AppStyle = styled.div`
  * {
    font-family: sans-serif;
  }

  h2,
  h3 {
    margin-bottom: 12px;
  }

  section {
    margin-bottom: 40px;
  }
`;

export const MainContainer = styled.main`
  align-items: center;
  display: flex;
  flex-flow: column;
  justify-content: center;
  margin: 0 auto;
  max-width: 768px;
  padding: 40px 20px;
  width: 100%;
`;

export const ButtonPrimary = styled.button`
  cursor: pointer;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  text-decoration: none;
  color: rgb(12, 17, 66);
  margin: 20px 0;
  padding: 12px 24px;
  background: rgb(43, 212, 219);
  border: none;
  border-radius: 8px;

  &:hover {
    background: rgb(107, 225, 230);
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

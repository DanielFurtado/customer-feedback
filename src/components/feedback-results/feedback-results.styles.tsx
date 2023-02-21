import styled from 'styled-components';

export const FeedbackResultsStyled = styled.div`
  width: 100%;
`;

export const FeedbackResultsControl = styled.div `
  align-items: flex-start;
  display: flex; 
  justify-content: space-between;

  @media (max-width: 768px) {
    align-items: flex-start;
    display: flex; 
    flex-direction: column-reverse;
    justify-content: space-between;
  }

  button {
    margin-top: 0;
  }
`;   

import styled from 'styled-components';

export const FeedbackFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 20px;
  width: 500px;

  label {
    display: block;
    font-weight: 500;
    line-height: 40px;
    margin-top: 4px;
  }

  input,
  textarea {
    border: 1px solid rgb(12, 17, 66);
    border-radius: 4px;
    padding: 6px 10px;
    font-size: 16px;
    width: 100%;
  }

  textarea {
    min-height: 140px;
    resize: none;
  }

  input:focus,
  textarea:focus {
    border: 1px solid #86d2ed;
    outline: 2px solid #86d2ed;
  }

  .input-error {
    border-color: #ff3333;
  }

  .error {
    color: #ff3333;
    margin-top: 4px;
  }
`;

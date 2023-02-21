import styled from 'styled-components';

export const FeedbackFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;

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
    resize: none;
    height: inherit;

    @media (max-width: 768px) {
      min-height: 120px;
    }
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

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export const FormSection = styled.div`
  flex: 1;

  &:first-child {
    margin-right: 20px;

    @media (max-width: 768px) {
      margin-right: 0;
    }
  }
`;

export const FormGroupComment = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  height: 100%;
`;

export const FormButtonWrapper = styled.div`
  text-align: right;
`;

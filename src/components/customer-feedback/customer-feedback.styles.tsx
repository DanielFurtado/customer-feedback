import styled from 'styled-components';

export const CustomerEmail = styled.div`
  margin-top: 15px;
  color: #808080;
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CustomerComments = styled.div`
  hyphens: auto;
  margin: 10px 0 15px 0;
  word-break: break-all;
`;

export const CustomerSeparator = styled.div`
  display: flex;
  justify-content: center;

  hr {
    color: #ccc;
    width: 50%;
  }
`;
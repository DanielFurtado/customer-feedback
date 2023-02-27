import styled from 'styled-components';

export const CustomerName = styled.div`
  font-weight: 600;
  margin-top: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CustomerEmail = styled.div`
  margin-top: 5px;
  color: #808080;
  font-weight: 600;
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CustomerComments = styled.div`
  hyphens: auto;
  margin: 10px 0 20px 0;
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
import styled from 'styled-components';

export const StarRatingWrapper = styled.div`
  display: flex;
`;

export const Star = styled.div`
  background: transparent;
  border: none;
  font-size: 18px;
  outline: none;
  padding: 2px;

  &:first-child {
    padding-left: 0;
  }

  &.on {
    color: #22a77d;
  }

  &.off {
    color: #ccc;
  }
`;

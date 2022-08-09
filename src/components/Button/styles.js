import styled from "styled-components"

export const Container = styled.button`
  /* max-width: fit-content; */
  width: 100%;
  height: 56px;

  background-color: ${({ theme }) => theme.COLORS.BLUE_300};

  color: ${({ theme }) => theme.COLORS.GRAY_900};
  font-weight: 500;
  font-size: 16px;

  border: 0;
  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 8px;

  padding: 16px 32px;

  &:disabled {
    opacity: 0.5;
  }

  /* > svg {
    margin-right: 8px;
  } */
`

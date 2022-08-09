import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  background-color: ${(props) => props.theme.COLORS.BACKGROUND_700};

  border-radius: 10px;

  padding: 0 12px;

  > input {
    height: 56px;
    width: 100%;

    font-size: 16px;
    color: ${(props) => props.theme.COLORS.WHITE};
    background-color: transparent;
    border: none;

    padding: 12px;

    &::placeholder {
      color: ${(props) => props.theme.COLORS.GRAY_300};
    }
  }
  > svg {
    color: ${(props) => props.theme.COLORS.GRAY_500};
  }
`

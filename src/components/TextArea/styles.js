import styled from "styled-components"

export const Container = styled.textarea`
  width: 100%;
  height: 220px;

  background-color: ${(props) => props.theme.COLORS.BACKGROUND_700};
  color: ${(props) => props.theme.COLORS.WHITE};

  border: none;
  border-radius: 10px;
  resize: none;

  padding: 19px 16px;

  &::placeholder {
    color: ${(props) => props.theme.COLORS.GRAY_300};
  }
`

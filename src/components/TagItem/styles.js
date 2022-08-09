import styled from "styled-components"

export const Container = styled.div`
  height: 36px;
  display: flex;
  align-items: center;

  background-color: ${(props) =>
    props.isNew ? "transparent" : props.theme.COLORS.BACKGROUND_700};

  border-radius: 10px;
  border: ${(props) =>
    props.isNew ? `2px dashed ${props.theme.COLORS.GRAY_500}` : "none"};

  padding: 0 8px;

  > button {
    height: 20px;
    border: none;
    background: none;
    padding-left: 8px;
    > svg {
      color: ${(props) => props.theme.COLORS.BLUE_300};
      width: 20px;
      height: 20px;
    }
  }
  > input {
    width: 120px;
    height: 36px;

    border: none;
    border-radius: 10px;
    background-color: transparent;

    color: ${(props) =>
      props.isNew ? props.theme.COLORS.GRAY_500 : props.theme.COLORS.WHITE};

    font-size: 16px;

    padding-left: 8px;
  }
  > span {
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    color: ${(props) => props.theme.COLORS.WHITE};
  }
`

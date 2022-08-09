import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  align-items: flex-start;

  gap: 6px;
  > button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    outline: none;
    padding: 0;
    margin: 0;
  }
  > button > svg {
    color: ${(props) => props.theme.COLORS.BLUE_300};
    width: 36px;
    height: 36px;
  }
`

import styled from "styled-components"

export const Container = styled.span`
  background-color: ${(props) => props.theme.COLORS.GRAY_900};
  border-radius: 8px;

  min-width: fit-content;
  height: 24px;

  padding: 5px 16px;
  margin-right: 8px;

  font-family: "Roboto", sans-serif;
  font-size: 12px;
  line-height: 14px;
  font-weight: 400;
  text-align: center;
  color: ${(props) => props.theme.COLORS.GRAY_200};
`

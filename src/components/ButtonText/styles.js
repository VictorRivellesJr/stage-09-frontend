import styled from "styled-components"

export const Container = styled.button`
  border: none;
  background: none;

  font-family: "Roboto Slab", sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: ${(props) => props.theme.COLORS.GRAY_500};

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 8px;
`

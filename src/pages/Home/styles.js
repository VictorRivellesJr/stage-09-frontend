import styled from "styled-components"
import { Link } from "react-router-dom"

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas: "header" "content";

  > main {
    grid-area: content;

    width: 100%;
    height: 100%;

    padding: 0 123px;
  }
`
export const Title = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 50px;
  margin-bottom: 40px;

  > h1 {
    font-size: 32px;
    font-weight: 400;
  }
`
export const CardBox = styled.div`
  width: 100%;
  max-height: 65vh;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  gap: 24px;

  padding: 2px 16px 2px 2px;

  overflow-y: auto;
`
export const Button = styled(Link)`
  width: fit-content;

  background-color: ${(props) => props.theme.COLORS.BLUE_300};
  color: ${(props) => props.theme.COLORS.BACKGROUND_800};

  font-size: 16px;

  border-radius: 8px;
  border: none;

  padding: 12px 32px;

  display: flex;
  align-items: center;

  gap: 8px;

  > svg {
    width: 16px;
    height: 16px;
  }
`

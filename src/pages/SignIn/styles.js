import styled from "styled-components"
import backgroundImg from "../../assets/Picture05.png"

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`
export const Form = styled.form`
  padding: 0 163px 0 134px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;

  > h1 {
    font-size: 48px;
    font-weight: 700;
    color: ${(props) => props.theme.COLORS.BLUE_300};
  }
  > p {
    font-size: 14px;
    color: ${(props) => props.theme.COLORS.GRAY_300};
    align-self: flex-start;
  }
  > h2 {
    font-size: 24px;
    color: ${(props) => props.theme.COLORS.GRAY_100};
    margin: 48px 0;
    align-self: flex-start;
  }
  > div {
    margin-bottom: 8px;
  }
  > button {
    margin-top: 16px;
  }
  > a {
    color: ${(props) => props.theme.COLORS.BLUE_300};
    font-size: 16px;
    margin-top: 42px;
  }
`
export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`

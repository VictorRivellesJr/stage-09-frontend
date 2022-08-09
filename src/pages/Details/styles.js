import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas: "header" "content";

  > main {
    grid-area: content;

    width: 100%;

    padding: 0 123px;
    margin-top: 40px;

    > p {
      font-size: 16px;
      color: ${(props) => props.theme.COLORS.GRAY_100};
      text-align: justify;
      text-justify: inter-word;

      overflow-y: auto;
      max-height: 45vh;
    }

    > button {
      font-size: 16px;
      color: ${(props) => props.theme.COLORS.BLUE_300};

      margin-top: 40px;
    }
    > a {
      font-size: 16px;
      color: ${(props) => props.theme.COLORS.BLUE_300};

      display: flex;
      align-items: center;

      gap: 8px;
    }
  }
`
export const Title = styled.div`
  width: 100%;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  gap: 19px;

  margin: 24px 0;

  > h1 {
    font-size: 36px;
    font-weight: 500;
  }
`
export const Tags = styled.div`
  display: flex;
  align-items: flex-start;

  margin: 40px 0;
`
export const Author = styled.div`
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: ${(props) => props.theme.COLORS.GRAY_100};

  display: flex;
  align-items: center;

  gap: 8px;

  > img {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: 1px solid ${(props) => props.theme.COLORS.BORDER_700};
  }
  > svg {
    color: ${(props) => props.theme.COLORS.BLUE_300};
  }
`

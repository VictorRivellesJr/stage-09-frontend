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
    height: 100%;

    padding: 40px 123px 0;

    > a {
      font-size: 16px;
      color: ${(props) => props.theme.COLORS.BLUE_300};

      display: flex;
      align-items: center;

      gap: 8px;
    }
    > h1 {
      margin-top: 24px;
    }
  }
`
export const Form = styled.form`
  width: 100%;
  max-height: 62vh;

  margin-top: 40px;
  padding: 2px 10px 0 2px;
  overflow-y: auto;

  > header {
    display: flex;
    flex-direction: row;

    gap: 40px;

    margin-bottom: 40px;
    > div:nth-child(2) {
      max-width: 15%;
    }
    > div:nth-child(3) {
      max-width: 25%;
    }
  }
  > textarea {
    margin-bottom: 40px;
  }
  > h2 {
    color: ${(props) => props.theme.COLORS.GRAY_600};
    font-size: 20px;
    font-weight: 400;

    margin-bottom: 24px;
  }
`
export const Tags = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 24px;

  background-color: ${(props) => props.theme.COLORS.BACKGROUND_900};

  padding: 16px;
  margin-bottom: 40px;
  border-radius: 10px;
`
export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  gap: 40px;

  > button:nth-child(1) {
    background-color: ${(props) => props.theme.COLORS.BACKGROUND_900};
    color: ${(props) => props.theme.COLORS.BLUE_300};
  }
`
export const RatingInput = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

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
  > button:hover {
    background-color: ${(props) => props.theme.COLORS.BACKGROUND_800};
    > svg {
      color: ${(props) => props.theme.COLORS.WHITE};
    }
  }
`

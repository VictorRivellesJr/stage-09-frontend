import styled from "styled-components"

export const Container = styled.div`
  width: 100%;

  > header {
    width: 100%;
    height: 144px;

    background: rgba(66, 211, 255, 0.05);

    display: flex;
    align-items: center;

    padding: 0 144px;

    > a {
      font-size: 16px;
      color: ${(props) => props.theme.COLORS.BLUE_300};

      display: flex;
      align-items: center;

      gap: 8px;
    }
  }
`
export const Form = styled.form`
  max-width: 340px;
  margin: 64px auto 0;

  > div {
    margin-bottom: 8px;
  }
  > div:nth-child(2) {
    margin-bottom: 24px;
  }
  > div:nth-child(4) {
    margin-bottom: 24px;
  }
`
export const Avatar = styled.div`
  position: relative;
  margin: -94px auto 32px;

  width: 186px;
  height: 186px;

  > img {
    width: 186px;
    height: 186px;
    border-radius: 50%;
  }
  > label {
    width: 48px;
    height: 48px;

    background-color: ${(props) => props.theme.COLORS.BLUE_300};
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 7px;
    right: 7px;

    cursor: pointer;

    > input {
      display: none;
    }
    > svg {
      width: 20px;
      height: 20px;
      color: ${(props) => props.theme.COLORS.BACKGROUND_800};
    }
  }
`

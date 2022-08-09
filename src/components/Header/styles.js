import styled from "styled-components"

export const Container = styled.header`
  grid-area: header;

  height: 106px;
  width: 100%;

  border-bottom: 1px solid ${(props) => props.theme.COLORS.BORDER_700};

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 123px;
  gap: 64px;

  > a {
    font-size: 24px;
    font-weight: 700;
    color: ${(props) => props.theme.COLORS.BLUE_300};
  }
  > div > input {
    font-size: 14px;
  }
`
export const Profile = styled.div`
  display: flex;
  align-items: center;

  min-width: fit-content;

  > a > img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    border: 1px solid ${(props) => props.theme.COLORS.BORDER_700};
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-right: 9px;

    > a {
      color: ${(props) => props.theme.COLORS.WHITE};
      font-size: 14px;
      font-weight: 700;
    }
  }
`

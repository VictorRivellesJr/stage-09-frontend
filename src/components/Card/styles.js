import styled from "styled-components"

export const Container = styled.button`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  padding: 32px;
  gap: 15px;

  border: none;
  border-radius: 16px;

  background: rgba(66, 211, 255, 0.05);

  > h1 {
    font-size: 24px;
    font-weight: 700;
    color: ${(props) => props.theme.COLORS.GRAY_100};

    > span {
      margin-left: 8px;
      font-size: 22px;
      color: ${(props) => props.theme.COLORS.GRAY_600};
    }
  }

  > p {
    display: -webkit-box;
    -webkit-box-orient: vertical;

    font-size: 16px;
    color: ${(props) => props.theme.COLORS.GRAY_600};

    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
  }
`
export const Tags = styled.div`
  display: flex;
  align-items: flex-start;
`

import styled from "styled-components";
export const ContactStyle = styled.div`
  .contacts {
    h2 {
      margin-bottom: 28px;
    }
    .info {
      p {
        font-size: 50px;
        font-weight: 300;
        color: ${(props) => props.theme.white};
        text-align: center;
        @media screen and (max-width: 376px) {
          font-size: 22px;
        }
      }
    }
    .social {
      &-list {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        grid-column-gap: 35px;
        margin-top: 53px;
        margin-bottom: 214px;
        @media screen and (min-width: 1200px) and (max-width: 1512px) {
          grid-column-gap: 71px;
        }
        @media screen and (max-width: 992px) {
          grid-template-columns: repeat(3, 1fr);
          grid-row-gap: 20px;
        }
        @media screen and (max-width: 376px) {
          grid-column-gap: 40px;
          grid-row-gap: 13px;
        }
      }
      &--item {
        text-align: center;
        span {
          font-size: 30px;
          font-weight: 300;
          color: ${(props) => props.theme.gray3};
          @media screen and (max-width: 376px) {
            font-size: 17px;
          }
        }
      }
    }
  }
`;

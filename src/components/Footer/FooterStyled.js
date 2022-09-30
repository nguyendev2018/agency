import styled from "styled-components";
export const FooterStyles = styled.div`
  .footer {
    background-color: white;
    padding: 16px 0px;
    @media screen and (min-width: 1200px) and (max-width: 1512px) {
      padding: 32px 0px;
    }
    @media screen and (max-width: 376px) {
      background-color: black;
    }
    &-box {
      display: flex;
      justify-content: space-between;
      @media screen and (max-width: 992px) {
        flex-direction: column-reverse;
      }
    }
    .footer-left {
      @media screen and (max-width: 992px) {
        text-align: center;
      }
    }
    .footer-right {
      @media screen and (max-width: 992px) {
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
        margin-bottom: 20px;
      }
      @media screen and (max-width: 376px) {
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
        margin-bottom: 20px;
      }
    }
    span {
      font-size: 20px;
      font-weight: 400;
      @media screen and (max-width: 376px) {
        color: white;
      }
      &.text-right {
        margin-left: 56px;
        @media screen and (max-width: 992px) {
          margin-left: 0;
        }
      }
    }
  }
`;

import styled from "styled-components";
export const BannerStyled = styled.div`
  .banner {
    background: ${(props) => props.theme.black};
    text-align: center;
    padding-top: 115px;
    padding-bottom: 120px;
    @media screen and (min-width: 1200px) and (max-width: 1512px) {
      padding-top: 230px;
      padding-bottom: 240px;
    }
    @media screen and (max-width: 376px) {
      padding-top: 60px;
      padding-bottom: 150px;
    }
    h1 {
      @media screen and (min-width: 1200px) and (max-width: 1512px) {
        max-width: 1190px;
        font-size: 163px;
        line-height: 133.66px;
      }
      @media screen and (max-width: 376px) {
        max-width: 332px;
        font-size: 50px;
        line-height: 46px;
      }
    }

    &-description {
      max-width: 550px;
      width: 100%;
      margin: 0 auto;
      margin-top: 28px;
      font-size: 16px;
      font-weight: 400;
      line-height: 20px;
      color: ${(props) => props.theme.gray};
      @media screen and (min-width: 1200px) and (max-width: 1512px) {
        max-width: 1100px;
        font-size: 32px;
        line-height: 40px;
        margin-top: 56px;
      }
      @media screen and (max-width: 376px) {
        max-width: 293px;
        font-size: 15px;
        line-height: 18px;
        margin-top: 33px;
      }
    }
  }
`;

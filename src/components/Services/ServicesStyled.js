import styled from "styled-components";
const ServicesStyled = styled.div`
  .services {
    &-list {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 40px;
      margin-top: 50px;
      margin-bottom: 123px;
      @media screen and(min-width :1200px) and (max-width: 1512px) {
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 78px;
        grid-row-gap: 60px;
        margin-top: 100px;
        margin-bottom: 246px;
      }
      @media screen and (max-width: 1200px) {
        grid-template-columns: repeat(2, 1fr);
      }
      @media screen and (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
      }
      @media screen and(max-width: 375px) {
      }
    }
    &--item {
      background: white;
      padding-top: 30px;

      &__header {
        padding-right: 22px;
        padding-left: 22px;
        padding-bottom: 37px;
        h3.title {
          font-weight: 600;
          font-size: 23px;
          @media screen and (min-width: 1200px) and (max-width: 1512px) {
            font-size: 36px;
          }
        }
        .desc {
          color: ${(props) => props.theme.black};
          font-weight: 400;
          font-size: 13px;
          line-height: 17px;
          margin-top: 9px;
          margin-bottom: 17px;
          @media screen and (min-width: 1200px) and (max-width: 1512px) {
            font-size: 20px;
            line-height: 24px;
            margin-top: 10px;
            margin-bottom: 10px;
          }
          @media screen and (max-width: 376px) {
            font-size: 10px;
          }
        }
        .box-arrow {
          font-weight: 600;
          font-size: 13px;
          padding-bottom: 40px;
          color: ${(props) => props.theme.black};
          @media screen and (min-width: 1200px) and (max-width: 1512px) {
            font-size: 20px;
            padding-bottom: 74px;
          }
          &:hover {
            text-decoration: none;
          }
          .icon-arrow {
            margin-left: 5px;
          }
        }
      }
      &__bottom {
        padding-left: 22px;
        padding-top: 7px;
        padding-bottom: 7px;
        background-color: ${(props) => props.theme.green};
        @media screen and (min-width: 1200px) and (max-width: 1512px) {
          padding-top: 14px;
          padding-bottom: 14px;
        }
        span {
          font-size: 14px;
          font-weight: 600;
          color: white;
          @media screen and (min-width: 1200px) and (max-width: 1512px) {
            font-size: 20px;
          }
        }
      }
    }
  }
`;

export default ServicesStyled;

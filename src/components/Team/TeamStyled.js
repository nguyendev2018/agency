import styled from "styled-components";
const TeamStyled = styled.div`
  .teams {
    .desc-title {
      font-size: 24px;
      line-height: 30px;
      margin-top: 52px;
      text-align: center;
      color: ${(props) => props.theme.gray};
      @media screen and (max-width: 376px) {
        font-size: 13px;
        line-height: 16px;
        margin-top: 14px;
      }
    }
    &-list {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      margin-top: 38px;
      margin-bottom: 158px;
      @media screen and (max-width: 1512px) {
        margin-top: 76px;
        margin-bottom: 31px;
      }
      @media screen and (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
      }
      @media screen and (max-width: 376px) {
        grid-template-columns: repeat(1, 1fr);
        margin-top: 50px;
        margin-bottom: 147px;
      }
    }
    &--item {
      overflow: hidden;
      cursor: pointer;
      position: relative;
      &:nth-child(even) .box {
        right: 0;
      }
      &:hover .box {
        bottom: 0;
      }
      .box {
        width: 100%;
        background: white;
        padding-top: 12px;
        padding-bottom: 20px;
        padding-right: 17px;
        padding-left: 17px;
        position: absolute;
        bottom: -100%;
        transition: cubic-bezier(0.445, 0.05, 0.55, 0.95) 0.4s;
        @media screen and (max-width: 376px) {
          width: 236px;
        }
        h3 {
          font-weight: 700;
          font-size: 32px;
          color: ${(props) => props.theme.black};
          @media screen and (max-width: 376px) {
            font-size: 21px;
          }
        }
        span {
          font-weight: 600;
          font-size: 20px;
          color: ${(props) => props.theme.gray2};

          margin-top: 5px;
          @media screen and (max-width: 376px) {
            font-size: 13px;
          }
        }
      }
    }
  }
`;

export default TeamStyled;

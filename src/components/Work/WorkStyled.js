import styled from "styled-components";
export const WorkStyled = styled.div`
  .work {
    &-list {
      margin-top: 48px;
      margin-bottom: 190px;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      @media screen and (min-width: 1200px) and (max-width: 1512px) {
        margin-top: 96px;
        margin-bottom: 380px;
        grid-template-columns: repeat(2, 1fr);
      }
      @media screen and (max-width: 1200px) {
        grid-template-columns: repeat(3, 1fr);
      }
      @media screen and (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
      }
      @media screen and (max-width: 376px) {
        margin-top: 55px;
        margin-bottom: 182px;
        grid-template-columns: repeat(1, 1fr);
      }
    }
    &--item {
      position: relative;
      cursor: pointer;
      height: 378px;
      overflow: hidden;
      &::nth-child(even) {
        height: 500px;
      }
      @media screen and (min-width: 1200px) and (max-width: 1512px) {
        height: 756px;
      }
      &:nth-child(even) {
        @media screen and (max-width: 376px) {
          .box {
            right: 0;
          }
        }
      }
      @media screen and (max-width: 376px) {
        height: 375px;
        padding-bottom: 30px;
        &:last-child {
          margin-bottom: 0;
        }
      }

      .box {
        position: absolute;
        bottom: -100%;
        background: ${(props) => props.theme.white};
        padding: 18px 24px;
        line-height: 12px;
        cursor: pointer;
        transition: 0.4s;
        @media screen and (min-width: 1200px) and (max-width: 1512px) {
          padding: 35px 68px;
          line-height: 24px;
        }
        @media screen and (max-width: 376px) {
          padding: 14px 18px;
          max-width: 228px;
          line-height: 7px;
          &::before {
            content: "";
            position: absolute;
            bottom: -14px;
            right: 0;
            width: 81px;
            height: 5px;
            background: ${(props) => props.theme.white};
            z-index: 99;
          }
        }
        h3 {
          font-size: 23px;
          font-weight: 700;
          @media screen and (min-width: 1200px) and (max-width: 1512px) {
            font-size: 45px;
          }
          @media screen and (max-width: 376px) {
            font-size: 11px;
          }
        }
        &-text {
          font-size: 14px;
          font-weight: 300;
          margin-top: 12px;
          margin-bottom: 17px;
          @media screen and (min-width: 1200px) and (max-width: 1512px) {
            font-size: 20px;
            margin-top: 15px;
            margin-bottom: 33px;
          }
          @media screen and (max-width: 376px) {
            font-size: 6px;
            margin-top: 5px;
            margin-bottom: 0;
          }
        }
        &-arrow {
          color: ${(props) => props.theme.black};
          font-weight: 500;
          font-size: 14px;
          @media screen and (min-width: 1200px) and (max-width: 1512px) {
            font-size: 20px;
          }
          &:hover {
            text-decoration: none;
          }
          .icon-arrow {
            margin-left: 10px;
          }
          @media screen and (max-width: 376px) {
            display: none;
          }
        }
      }
      &:hover .box {
        bottom: 0;
        @media screen and (max-width: 991px) {
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
        }
        @media screen and (max-width: 376px) {
          height: auto;
          justify-content: flex-start;
          align-items: flex-start;
          bottom: 30px;
        }
      }
    }
  }
`;

import styled from "styled-components";
export const MenuStyled = styled.div`
  .navbar-brand {
    font-size: 24px;
    font-weight: 600;
    text-transform: uppercase;
    color: white;
    &:hover {
      color: white;
    }
  }
  .navbar-nav {
    @media screen and (max-width: 991px) {
      align-items: center;
    }
    .nav-item {
      margin-left: 44px;
      @media screen and(max-width: 768px) {
        font-size: 20px;
      }
      &:first-child {
        margin-left: 0;
      }

      .nav-link {
        font-weight: 400;
        color: white;
        font-size: 20px;
        text-transform: uppercase;
      }
    }
  }
`;

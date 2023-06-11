import styled from "styled-components";

export const HeadButton = styled.button`
  text-decoration: none;
  max-width: auto;
  font-size: 13px;
  font-weight: 550;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto,
    "Helvetica Neue", sans-serif;
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.white};
  border: none;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;

  &:hover,
  &:active {
    box-shadow: 0 1rem 1rem 0 rgb(132 144 255 / 5%);
    background-color: ${(props) =>
      props.variant == "active" ? "rgb(188 179 179 / 25%)" : "white"};
    border-radius: ${(props) => (props.variant == "active" ? "1rem" : "0")};
    padding-left: ${(props) => (props.variant == "active" ? "1rem" : "0")};
    padding-right: ${(props) => (props.variant == "active" ? "1rem" : "0")};
    transform: scale(0.96);
  }

  a {
    text-decoration: none;
    font-size: 1.8rem;
  }
`;

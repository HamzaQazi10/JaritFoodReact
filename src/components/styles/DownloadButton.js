import styled from "styled-components";

export const DownloadButton = styled.button`
  margin-top: 3rem;
  text-decoration: none;
  //max-width: auto;
  color: white;
  background-color: ${({ theme }) => theme.colors.orange};
  padding: 1rem 4rem;
  border: none;

  //border-radius: 10rem;
  border-radius: 50px;
  //margin: 0.2rem 0rem;
  //text-transform: uppercase;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  //box-shadow: ${({ theme }) => theme.colors.shadowSupport};
  &:hover,
  &:active {
    box-shadow: 0 2rem 2rem 0 rgb(132 144 255 / 30%);
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    background-color: black;
    border: 1px solid black;
    color: white;
    transform: scale(1.02);
  }

  a {
    text-decoration: none;
    color: rgb(255 255 255);
    font-size: 1.8rem;
  }
`;

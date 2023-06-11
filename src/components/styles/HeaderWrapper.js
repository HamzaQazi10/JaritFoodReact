import styled from "styled-components";

export const HeaderWrapper = styled.div`
  background-color: #d1d1d1;
  /*   color: ${(props) =>
    props.variant == true ? "black" : `${({ theme }) => theme.colors.grey}`}; */
  #hero {
    position: relative;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: rgb(247, 247, 247);
  }

  #hero_content {
    position: absolute;
  }
  .heading-h1 {
    margin-top: 1rem;
    font-size: 25px;
    color: #232323;
    font-weight: 600;
    font-family: "Montserrat", sans-serif;
    line-height: "36px";
  }
  #hero_content h1 {
    color: #fff;
    font-size: 2.8rem;
    // text-shadow: 2px 2px 2px #000;
  }
  #hero_content h2 {
    color: #fff;
    font-size: 2rem;
    margin-top: 1rem;
    margin-bottom: 4rem;
    //text-shadow: 2px 2px 2px #000;
  }
  #hero_content a {
    color: #fff;
    padding: 3px 20px 3px 20px;
    border: 1px solid orange;
    background-color: rgba(0, 0, 0, 0.6);
    text-decoration: none;
    border-radius: 25px;
  }
  #hero_content a:hover {
    color: #ca1616;
  }
  #header {
    display: block;
    position: fixed;
    top: 0;
    width: 100vw;
    height: 70px;
    line-height: 70px;
  }
  .Logo {
    margin: 0 6rem;
  }
  #navbar h1 {
    color: orange;
    font-size: 1.8rem;
    text-shadow: 2px 2px 2px #000;
  }

  #navbar {
    display: flex;
    justify-content: space-around;
    background-color: rgb(247, 247, 247);

    //background: transparent;
    background: ${(props) => (props.variant == true ? "white" : "transparent")};
    width: 100vw;
    position: fixed;
    top: 0;
    z-index: 10;
  }
  #navbar ul {
    display: flex;
    margin-top: 2rem;
  }
  #navbar ul li {
    list-style: none;
    padding: 3px 25px 1px 25px;
  }
  #navbar ul li:hover,
  #phone a:hover {
    cursor: pointer;
  }
  #navbar ul li a {
    //text-decoration: none;
    color: #232323;
    font-size: 14px;
    font-weight: 500;
    font-family: "Raleway", sans-serif;
    text-transform: capitalize;
    font-style: normal;
    line-height: 20px;
  }
  #navbar ul li a:hover {
    color: #f15927;
  }

  .bar {
    display: none;
  }
  .text1 {
    color: black;
  }

  @media (max-width: 640px) {
    .modal-container {
      top: 16%;
    }
    .modal-flex {
      transform: translate(-50%, 15%);
    }

    .cancelBtn {
      top: 22%;
    }
  }
`;

import styled from "styled-components"

export const NavbarWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: right;
  background: darkgray;
  position: fixed;
  buttom: 10vh;
  
  left: ${props => (props.open ? "40%" : "-100%")};
  width: 100%;
  height: 70vh;
  transition: right 0.3s linear;

  @media only screen and (min-width: 624px) {
    flex-direction: row;
    position: initial;
    height: auto;
    justify-content: center;
    background: white;
  }

  a {
    padding: 0.5rem 0.8rem;
    color: grey;
    text-decoration: none;
  }
`
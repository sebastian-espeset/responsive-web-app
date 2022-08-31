import {React, useState} from 'react';
import { StyledNavbar, 
        StyledLogoContainer, 
        StyledLogo, 
        LinksContainer, 
        NavbarInner, 
        LinksInnerContainer, 
        Link,
        OpenLink,
        LinksHamburgerButton,
        FindButtonLink,
        LoginButton,
        OpenFindButtonLink,
        OpenLoginButtonLink,
        NavbarMobileContainer 
      } from './styles/Navbar.style';

// Font for beam logo: Sofia Rouch Script
import logo from './assets/logo.png'

export default function Navbar() {
  const [openNav, setOpenNav]=useState(false);
  const [loginButtonClick, setLoginButtonClick]=useState(false);
  const [findButtonClick, setFindButtonClick]=useState(false);
  const [openLoginButtonClick, setOpenLoginButtonClick]=useState(false);
  const [openFindButtonClick, setOpenFindButtonClick]=useState(false);

  return (
    <StyledNavbar openNav = {openNav}>
      <NavbarInner>
        <StyledLogoContainer>
          <StyledLogo src={logo} alt="beam dental logo" data-testid='logo-test-id'/>
        </StyledLogoContainer>
        <LinksContainer>
          <LinksInnerContainer>
            <Link>Explore</Link>
            <Link>Company</Link>
            <Link>Resources</Link>

            {/* Would like to make a button component, would refactor nicely */}
            <FindButtonLink findButtonClick={findButtonClick} onClick={()=>{
              setFindButtonClick((val)=>!findButtonClick)
            }}>Find a dentist</FindButtonLink>

            <LoginButton loginButtonClick={loginButtonClick} onClick={()=>{
              setLoginButtonClick((val)=>!loginButtonClick)
            }}>Login</LoginButton>
            <LinksHamburgerButton 
            onClick={()=>{
              setOpenNav((val)=>!val)
            }}> 
            {openNav ? <>  &#10005;</>:<> &#8801;</> }
            </LinksHamburgerButton>
          </LinksInnerContainer>
        </LinksContainer>
      </NavbarInner>
      {openNav && (
        <NavbarMobileContainer>
          <OpenLink>Explore</OpenLink>
            <OpenLink>Company</OpenLink>
            <OpenLink>Resources</OpenLink>
            <OpenFindButtonLink openFindButtonClick={openFindButtonClick} onClick={()=>{
              setOpenFindButtonClick((val)=>!openFindButtonClick)
            }}>Find a dentist</OpenFindButtonLink>
            <OpenLoginButtonLink openLoginButtonClick={openLoginButtonClick} onClick={()=>{
              setOpenLoginButtonClick((val)=>!openLoginButtonClick)
            }}>Login</OpenLoginButtonLink>
        </NavbarMobileContainer>
      )}
    </StyledNavbar>
  )
}


        

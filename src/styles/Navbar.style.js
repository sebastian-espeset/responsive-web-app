import styled from "styled-components";
// IMPROVEMENTS: Sticky/static navbar,on mobile options are disappearing (and fix buttons)
export const StyledNavbar= styled.nav`
    width: 98%;
    // styled components is rad. We pass props (opening the nav bar on mobile) here to determine styling
    height: ${(props)=>(props.openNav ? "100vh": "80px")};
    background:white;
    display: flex;
    flex-direction:column;
    padding:5px;
    font-family:'Roboto-light';
    font-weight:700;
    @media (min-width:700px){
        height:80px;
        width:100%;
    }
`
export const NavbarInner= styled.div`
    width: 100%;
    height: 80px;
    display: flex;
`
export const StyledLogoContainer= styled.div`
    flex: 30%;
    display: flex;
    justify-content: flex-start;
    padding-right: 50px;
`
export const StyledLogo = styled.img`
    margin:10px;
    max-width:180px;
    height:auto;
`
export const LinksContainer= styled.div`
    flex: 70%;
    display: flex;
    align-items: center;
    justify-content:flex-end;
    padding-left: 5%;
`
export const LinksInnerContainer=styled.div`
    display:flex;
    width:50%;
    justify-content:space-between ;
`
// note that links will be non-functional as of yet
export const Link = styled.a`
    text-decoration: none;
    margin: 10px;
    
    @media(max-width: 700px) {
        display:none;
    }
`
export const OpenLink = styled.a`
    color: black;
    font-size: large;
    text-decoration: none;
    margin: 10px;
`
export const FindButtonLink = styled.button`
    box-sizing: border-box;
    width: 177px;
    height: 38px;
    left: 952px;
    top: 27px;
    border-radius: 100px;
    border-width:0.5px ;
    border-color:#058ED3 ;
    font-family:'Roboto';
    font-weight:700;
    font-size:16px;
    line-height:18.75px;
    background-image: ${(props)=>(props.findButtonClick ? "linear-gradient(to right,#03C6EE,#058ED3);color:white" : "white")};
    @media(max-width: 700px) {
        display:none;
    }
`
export const LoginButton = styled.button`
    /* background-image: linear-gradient(to right,white,#00BEE7); */
    background-image: ${(props)=>(props.loginButtonClick ? "white" : "linear-gradient(to right,#03C6EE,#058ED3);color:white;")};
    box-sizing: border-box;
    width: 177px;
    height: 38px;
    left: 952px;
    top: 27px;
    border-radius: 100px;
    border-width:0.5px ;
    border-color:#058ED3 ;
    font-family:'Roboto';
    font-weight:700;
    font-size:16px;
    line-height:18.75px;
    @media(max-width: 700px) {
        display:none;
    }
`
export const OpenLoginButtonLink = styled.button`
    background-image: ${(props)=>(props.openLoginButtonClick ? "white" : "linear-gradient(to right,#03C6EE,#058ED3);")};
    font-size: large;
    text-decoration: none;
    margin: 10px;
    border:none;
    border-radius:12px;
`
export const OpenFindButtonLink = styled.button`
    background-image: ${(props)=>(props.openFindButtonClick ? "white" : "linear-gradient(to right,#03C6EE,#058ED3)")};
    font-size: large;
    text-decoration: none;
    margin: 10px;
    border:none;
    border-radius:12px;
`

export const LinksHamburgerButton=styled.button`
    width: 70px;
    height: 50px;
    background: none;
    border: none;
    color: black;
    font-size: 45px;
    cursor: pointer;

    //media query for mobile
    @media(min-width: 700px) {
        display:none;
    }
`
export const NavbarMobileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media (min-width: 700px) {
    display: none;
  }
`
        


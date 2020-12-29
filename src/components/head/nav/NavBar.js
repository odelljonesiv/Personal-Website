import styled from 'styled-components';

//primary color.
const theme_blue = '9, 25, 46, 100';

//primary styling of nav bar. floating nav.
const Nav_Styled = styled.div`
display: center;
text-align: center;
position: fixed;
width: 100vw;
max-width: 100vmax;
padding-top: 1vw;
color: white;
background-color: rgba(235, 235, 235, .85);
`
//styling of header title and welcome message.
const Nav_Heading_Styled = styled.h1`
@media (max-width: 570px) {
    font-size: 3.9vw;
}
font-size: 3vh;
font-family: 'Roboto', sans-serif;
color: rgba(${theme_blue});
font-weight: 900;
`
//styling of links from header.
const Nav_List_Styled = styled.ul`
display: inline-flex;
padding: 0;
padding-bottom: 2vh;
`
//styling of individual links from nav.
const Nav_List_Items_Styled = styled.li`
@media (max-width: 570px) {
    font-size: 5.4vw;
    padding: 1.8vw;
}
margin: 0 1rem;
font-family: 'Roboto', sans-serif;
margin-top: 1rem;
font-size: 2.25vh;
list-style: none;
background-color: rgba(${theme_blue});
padding: .55vw;
border-radius: 15px;
filter: drop-shadow(0px 2px 4px #000000);
`
//styling for page links.
const Nav_List_Anchor_Styled = styled.a`
  &:link{
    color: white;
    text-decoration: none;  
  }
  &:visited{
      color: white;
  }
  &:hover{
    color: rgb(200,200,200);
  }
  &:active{
    color: rgb(200,200,200);
  }
`
//structure of Nav function.
function Nav(){
    return(
        <Nav_Styled>
            <Nav_Heading_Styled>Odell Jones | Computer Science Portfolio</Nav_Heading_Styled>
            <Nav_List_Styled>
            <Nav_List_Anchor_Styled href= "#home"><Nav_List_Items_Styled>Home</Nav_List_Items_Styled></Nav_List_Anchor_Styled>
            <Nav_List_Anchor_Styled href= "#experience"><Nav_List_Items_Styled>Experience</Nav_List_Items_Styled></Nav_List_Anchor_Styled>
            <Nav_List_Anchor_Styled href= "#projects"><Nav_List_Items_Styled>Projects</Nav_List_Items_Styled></Nav_List_Anchor_Styled>
            </Nav_List_Styled>
        </Nav_Styled>
     );
}
export default Nav;
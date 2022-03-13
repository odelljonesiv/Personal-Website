import styled from 'styled-components';
import backgroundImg from '../../../images/conifer.jpg';

//primary color.
const theme_blue = '9, 25, 46, 100';

//primary style of experience page.
const Projects_Styled = styled.div`
  background-image: url(${backgroundImg});
  margin: 0;
  height: 100vh;
  max-width: 100vmax;
  background-size:cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: space-around;  
`
//style of main body of text.
const Projects_Section_Styled = styled.section`
  align-self: center;
  text-align: center;
  color: white;
  top: 5vw;
  padding: 1vw;
  @media (max-width: 1024px) {
      font-size: 4.0vw;
      width: 80vw;
  }
  font-size: 2.5vh;
  font-family: 'Roboto', sans-serif;
  width: 45vw;
  max-width: 100vw;
  border-radius:10px;
  background-color: rgba(${theme_blue});
  box-shadow: 0px 0px 15px 2px #000000;
`
//names of projects.
const Projects_SubHeading_Styled = styled.h2`
  @media (max-width: 1024px) {
      font-size: 5.0vw;
      padding-bottom: 2vw;
      width: 80vw;
  }
font-size: 1.25vw;
padding: .5vw;
`
//Links to GitHub.
const Project_List_Anchor_Styled = styled.a`
  &:link{
    color: rgb(160,160,200);
    text-decoration: none;  
  }
  &:visited{
      color:  rgb(160,180,250);
  }
  &:hover{
    color: rgb(200,200,200);
  }
  &:active{
    color: rgb(200,200,200);
  }
`

//main experience function of page.
function Projects(){
    return(
        <Projects_Styled id = "projects">
            <Projects_Section_Styled>
            <h1>Technical Projects | GitHub Links</h1><br/>

            <Project_List_Anchor_Styled href= "https://github.com/odelljonesiv/Personal-Website" target="_blank">
            <Projects_SubHeading_Styled>Personal Website</Projects_SubHeading_Styled>
            </Project_List_Anchor_Styled>
            <p>HTML, JavaScript, CSS</p>
            <br/>

            <Project_List_Anchor_Styled href= "https://github.com/odelljonesiv/Baltimore-Data-Tool/tree/master" target="_blank">
            <Projects_SubHeading_Styled>Baltimore Data Interface</Projects_SubHeading_Styled>
            </Project_List_Anchor_Styled>
            <p>Python</p>
            <br/>

            <Project_List_Anchor_Styled href= "https://github.com/shoeferg13/tldr-extension" target="_blank"> 
            <Projects_SubHeading_Styled>Text Summarization Chrome Extension</Projects_SubHeading_Styled>
            </Project_List_Anchor_Styled>
            <p>HTML, JavaScript, Firebase API, Deep AI</p>
            <br/>

            <Project_List_Anchor_Styled href = "">
            <Projects_SubHeading_Styled>Orangutan Orchard documentation</Projects_SubHeading_Styled>
            </Project_List_Anchor_Styled>
            <p>C++</p>

            </Projects_Section_Styled>
        </Projects_Styled>
    )
}
export default Projects;
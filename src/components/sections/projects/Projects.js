import styled from 'styled-components';
import backgroundImg from '../../../images/conifer.jpg';

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
`;

const Projects_Section_Styled = styled.section`
    align-self: center;
    text-align: center;
    color: white;
    top: 5vw;
    padding: 1vw;
    @media (max-width: 400px) {
        font-size: 4.0vw;
    }
    font-size: 2.5vh;
    font-family: 'Roboto', sans-serif;
    width: 45vw;
    max-width: 100vw;
    border-radius:10px;
    background-color: rgba(${theme_blue});
    box-shadow: 0px 0px 15px 2px #000000;
`;

const Projects_SubHeading_Styled = styled.h2`
font-size: 1.25vw;
padding: .5vw;

`

//main experience function of page.
function Projects(){
    return(
        <Projects_Styled id = "projects">
            <Projects_Section_Styled>
            <h1>Technical Projects | Linked</h1><br/>
            <Projects_SubHeading_Styled>Personal Website</Projects_SubHeading_Styled>
            <p>HTML, JavaScript, CSS</p>
            <br/>
            <Projects_SubHeading_Styled>Baltimore Data Interface</Projects_SubHeading_Styled>
            <p>Python</p>
            <br/>
            <Projects_SubHeading_Styled>Text Summarization Chrome Extension</Projects_SubHeading_Styled>
            <p>HTML, JavaScript, Firebase API, Deep AI</p>
            <br/>
            <Projects_SubHeading_Styled>Mock Banking Database</Projects_SubHeading_Styled>
            <p>C++</p>
            </Projects_Section_Styled>
        </Projects_Styled>
    )
}
export default Projects;
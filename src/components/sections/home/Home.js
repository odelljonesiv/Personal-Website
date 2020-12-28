//import statememts and media.
import styled from 'styled-components';
import backgroundImg from '../../../images/tree.jpg';
import profileImg from '../../../images/Resume.jpg';

//color style.
const theme_blue = '9, 25, 46, 100';
// style for the home background.
const Home_Styled = styled.div`
    background-image: url(${backgroundImg}); 
    margin: 0;
    height: 100vh;
    max-width: 100vmax;
    background-size:cover;
    background-repeat: no-repeat; 
    display: flex;
    justify-content: space-around; 
`;
//style for text containers. Media query for phone display.
const Home_Section_Styled = styled.section`
    align-self: center;
    text-align: left;
    color: white;
    top: 5vw;
    @media (max-width: 400px) {
        font-size: 4.0vw;
    }
    
    font-size: 2.5vh;
    font-family: 'Roboto', sans-serif;
    font-weight: 100;
    width: 45vw;
    max-width: 100vw;
    border-radius:10px;
    background-color: rgba(9, 25, 46, .90);
    box-shadow: 0px 0px 10px 3px #000000;
`;
//style for paragraphs and other text.
const Home_Section_text_Styled = styled.p`
padding: 2vw;

`;
//style for profile picture.
const Home_Section_ProfileImage_Styled = styled.img`
min-width: 25vw;
max-width: 45vw;
min-height: 30vh;
max-height: 48vh;
border-radius:50%;
align-self: center;
/* box-shadow: 2px 2px 10px 4px #000000; */
`;
//contains all components of home page.
function Home(){
    return(
        <Home_Styled id = "home">  
            <Home_Section_Styled>
                <Home_Section_text_Styled>
                Hello! My name is Odell Jones and I am an undergraduate computer science major
                at the University of Illinois at Chicago. This is my interactive portfolio where 
                you can find and view all of my work experience and projects. you may find completed 
                documentation for all of my projects including the source for this website on my GitHub.
                Feel free to take a look around.
                </Home_Section_text_Styled>
            </Home_Section_Styled>
            <Home_Section_ProfileImage_Styled src={profileImg}/>          
        </Home_Styled>
        
    )
}
export default Home;

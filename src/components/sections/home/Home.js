//import statememts and media.
import styled from 'styled-components';
import backgroundImg from '../../../images/tree.jpg';
import profileImg from '../../../images/Resume.jpg';

// style for the home background.
const Home_Styled = styled.div`
    background-image: url(${backgroundImg}); 
    margin: 0;
    height: 100vh;
    max-width: 100vmax;
    background-size:cover;
    background-repeat: no-repeat; 
    display: flex;

    @media (max-width: 1024px) {
        flex-flow: column-reverse;
        font-size: 4.0vw;
    }
    
    justify-content: space-around; 
`

//style for text containers. Media query for phone display.
const Home_Section_Styled = styled.section`
    align-self: center;
    text-align: left;
    color: white;
    top: 5vw;

    @media (max-width: 1024px) {
        align-self: center;
        width: 80vw;
        margin-bottom: 15vw;
        font-size: 4.0vw;
    }

    @media (max-width: 400px) {
        font-size: 5vw;
    }

    font-size: 2.5vh;
    font-family: 'Roboto', sans-serif;
    font-weight: 100;
    width: 45vw;
    max-width: 100vw;
    border-radius:10px;
    background-color: rgba(9, 25, 46, .90);
    box-shadow: 0px 0px 10px 3px #000000;
`

//style for paragraphs and other text.
    const Home_Section_text_Styled = styled.p`
    padding: 2vw;
`

//style for profile picture.
const Home_Section_ProfileImage_Styled = styled.img`
    @media (max-width: 1024px) {
        align-self: center;
        margin-top: 20vw;
    }
    min-width: 25vw;
    max-width: 45vw;
    min-height: 30vh;
    max-height: 48vh;
    border-radius:50%;
    align-self: center;
`

//contains all components of home page.
function Home(){
    return(
        <Home_Styled id = "home">  
            <Home_Section_Styled>
                <Home_Section_text_Styled>
                Hello! My name is Odell Jones and I am an undergraduate Engineering Management major
                at the University of Illinois at Chicago. This is my interactive portfolio where 
                you can find and view all of my work. you may also find completed 
                documentation for all of my personal projects, including the source for this website on my GitHub.
                </Home_Section_text_Styled>
            </Home_Section_Styled>
            <Home_Section_ProfileImage_Styled src={profileImg}/>          
        </Home_Styled>
        
    )
}
export default Home;

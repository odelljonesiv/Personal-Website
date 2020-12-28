import styled from 'styled-components';
import backgroundImg from '../../../images/colors.jpg';
const theme_blue = '9, 25, 46, 100';
//primary style of experience page.
const Experience_Styled = styled.div`
    background-image: url(${backgroundImg});
    margin: 0;
    height: 100vh;
    max-width: 100vmax;
    background-size:cover;
    background-repeat: no-repeat;
    display: flex;
    justify-content: space-around;  
`;

const Experience_Section_Styled = styled.section`
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
    box-shadow: 0px 0px 15px 3px #000000;
`;

const Experience_SubHeading_Styled = styled.h2`
font-size: 1.25vw;
`
const Experience_Paragraph_Styled = styled.p`
line-height: 4.0vh;
text-align: left;
`
//main experience function of page.
function Experience(){
    return(
        <Experience_Styled id = "experience">
            <Experience_Section_Styled>
            <h1>Professional Experience</h1><br/>
            <Experience_SubHeading_Styled>Undergraduate Research Internship - 
                University Of Illinois at Chicago | Chicago, IL | 
                October 2020 - Present
            </Experience_SubHeading_Styled>
            <br/>
            <Experience_Paragraph_Styled>
                Currently working in a research lab where I am learning to produce
                data analyses for machine learning methods in low powered applications.
                One of my tasks involved writing a Python program to format a new 
                unique dataset for testing a  pre-trained TF model, and measuring the performance of the new dataset.
                 I am able to work with TensorFlow, Python, and Google Colab frequently.

            </Experience_Paragraph_Styled>
            <br/>
            <Experience_SubHeading_Styled>Business Technology Internship - CSL Behring | Bradley, IL | May 2018</Experience_SubHeading_Styled>
            <br/>
            <Experience_Paragraph_Styled>
                I shadowed several professionals maintaining large scale production IT infrastructure, and
                observed the functioning of: MES, SAP, and LMS tools in a pharmaceutical application.
                I also participated in four meetings with data engineers concerning global data migration projects.
            </Experience_Paragraph_Styled>
            </Experience_Section_Styled>
        </Experience_Styled>
    )
}
export default Experience;
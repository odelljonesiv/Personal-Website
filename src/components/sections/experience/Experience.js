import styled from 'styled-components';
import backgroundImg from '../../../images/colors.jpg';

//primary color.
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
`
//styling for main body of text.
const Experience_Section_Styled = styled.section`
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
    box-shadow: 0px 0px 15px 3px #000000;
`
//styling for names of jobs.
const Experience_SubHeading_Styled = styled.h2`
@media (max-width: 1024px) {
    font-size: 2vh;
    }
font-size: 1.25vw;
`
//styling for paragraph font.
const Experience_Paragraph_Styled = styled.p`
line-height: 4.0vh;
@media (max-width: 1024px) {
    line-height: 5vw;
    font-size: 4.3vw;
    }
text-align: left;
`
//main experience function of page.
function Experience(){
    return(
        <Experience_Styled id = "experience">
            <Experience_Section_Styled>
            <h1>Professional Experience</h1><br/>
            <Experience_SubHeading_Styled>
                Data Engineering Intern - Orangutan Orchard 
            </Experience_SubHeading_Styled>
            <br/>
            <Experience_Paragraph_Styled>
                • Developing weather station data pipeline for collection of various meteorological attributes including rainfall, wind direction & speed, UV, temperature, pressure, and humidity.
                • Data is collected in near-real time (10 second increments) and piped into a data lake on GCP (Google Cloud Storage).
            </Experience_Paragraph_Styled>
            <br/>
            <Experience_SubHeading_Styled>
                Data Analytics and Policy Intern - Chicago Transit Authority
            </Experience_SubHeading_Styled>
            <br/>
            <Experience_Paragraph_Styled>
                • Creating and maintaining responsive Power BI reports compiling data from over 7,000 employees.
                • Building and maintaining internal ETL pipelines using Amazon Redshift, Oracle DB, and Python.
            </Experience_Paragraph_Styled>
            </Experience_Section_Styled>
        </Experience_Styled>
    )
}
export default Experience;
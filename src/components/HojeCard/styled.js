import styled from "styled-components";

export const CardContainer = styled.div`
    display: flex;
    min-height: 94px;
    justify-content: space-between;
    background-color: #FFFFFF;
    border-radius: 5px;
    /* background-color: red; */
    padding: 13px 13px 12px 15px;
`

export const MainContainer = styled.div`
    padding-right: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* background-color: yellow; */

    & > p {
        font-family: 'Lexend Deca', sans-serif;
        font-size: 20px;
        line-height: 25px;
        color: #666666;
        /* background-color: blue; */
    }
`

export const SubtitlesContainer = styled.div`
    margin-top: 12px;
    display: flex;
    flex-direction: column;
    /* background-color: green; */

    & p {
        font-family: 'Lexend Deca', sans-serif;
        font-size: 13px;
        line-height: 16px;
        color: #666666;
    }

    & p:first-child span {
        color: ${props => props.done ? "#8FC549" : "#666666" }
    }

    & p:last-child span {
        color: ${props => props.done && (props.highestSequence = props.currentSequence) ? "#8FC549" : "#666666" } !important
    }
`

export const ImageBackground = styled.div`
    width: 69px;
    min-width: 69px;
    height: 69px;
    min-height: 69px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    background-color: ${props => props.done ? "#8FC549" : "#EBEBEB"};

    & img {
        color: #FFFFFF;
        width: 35px;
    }
`
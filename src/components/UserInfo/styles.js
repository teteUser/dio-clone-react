import styled from 'styled-components';

export const Container = styled.div`
    display:flex;
    flex-direction: row;
    margin-bottom: 24px;
` 

export const UserPicture = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 22px;
    border: 3px solid #FFFFFF;
    margin-right: 12px;
    background-color: #AAF;
`

export const NameText = styled.div`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    color: #FFFFFF;
` 

export const Progress = styled.div`
    width: 180px;
    height: 10px;
    background-color: #FFFFFF;
    border-radius: 10px;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: ${({percentual}) => percentual}%;
        height: 10px;
        border-radius: 10px;
        background-color: #23DD7A;
    }
` 
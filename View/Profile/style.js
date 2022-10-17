import styled from "styled-components";

export const Container = styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding-top: 30px;
`
export const Header = styled.View`  
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 180px;
    background-color: #f4f;
    align-items: center;
    top: -60px;
    justify-content: center;
    `

export const ProfileView = styled.View`
    width: 100%;
    height: 100px;
    top: -140px;
    position: relative;
    border-radius: 100px;
    align-items: center;
`

export const Body = styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    padding-top:80px;

    `

export const ProfilePicture = styled.Image`
    width: 150px;
    height: 150px;
    border-radius: 100px;
    border-width: 3px;
    border-color: #FF5757;
`

export const UserName = styled.Text`
    font-size: 16px;
    color: #FF5757;
    margin-top: 10px;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-weight: bold;
`
export const Bio = styled.Text`
    font-size: 12px;
    color: #000;
    width: 80%;
    margin-top: 10px;
    text-align: center;
`

export const RankingPosition = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 70%;
    height: 50px;
    margin-top: 10px;
    align-items: center;
    justify-content: center;
`
export const RankingText = styled.Text`
    font-size: 14px;    
    color: #FFF;
    text-align: center;
    font-weight: bold;
` 
export const ScrollBody = styled.ScrollView`
    width: 100%; 
`
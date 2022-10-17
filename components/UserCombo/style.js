import styled from "styled-components/native";

export const Button = styled.TouchableOpacity`
    margin-bottom: 10px;
    margin-top: 35px;
    margin-right: 15px;
    margin-left: 15px;
`;

export const UserCombos = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 100%;


`

export const ProfilePic = styled.Image`
    height: 100%;
    width: 100%;
    border-radius: 60px;
    border-width: 2px;
    border-color: #ff5757;
    position: relative;
    margin-right: 10px;

`

export const RankingInfo = styled.View`
    width: 40px;
    height: 25px;
    border-radius: 15px;
    margin-left: -25px;
    margin-top: 45px;
    justify-content: center;
    align-items: center;
    display: flex;
    text-align: center;
`

export const RankingPos = styled.Text`
    font-size: 12px;
    color: #fff;
    width: 40px;
    text-align: center;
    justify-content: center;
    align-items: center;
    display: flex;
`
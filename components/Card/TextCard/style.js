import styled from 'styled-components/native';

export const Card = styled.View`
    width: 85%;
    flex-direction: row;
    display: flex;
    padding: 5px;
    border-radius: 8px;
    border: 1px solid #ff5757;
    margin-bottom: 20px;
`

export const CardTitle = styled.Text`
    font-size: 14px;
    font-weight: bold;
    color: #ff5757;
    margin-bottom: 5px;
    padding-top: 10px;
`

export const CardText = styled.Text`
    font-size: 12px;
    color: #0f0f0f;
    margin-bottom: 35px;
    padding-top: 10px;
`

export const CardLeft = styled.View`
    width: 90px;
    height: 100%;
    align-items: center;
    justify-content: flex-start;
`

export const CardRight = styled.View`
    width: 70%;
    height: 100%;
    align-items: flex-start;
    justify-content: flex-start;
`
export const CardImage = styled.Image`
    width: 54px;
    height: 54px;
    margin: 12px;
    align-items: center;
    justify-content: center;
`
export const CardButtons = styled.TouchableOpacity`
    flex-direction: row;
    display: flex;
    justify-content: space-between;
    text-align: center;
    align-self: center;
    width: 90%;
    position: absolute;
    bottom: 10px;
    
`
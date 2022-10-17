import styled from "styled-components/native";

export const Container = styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`

export const Logo = styled.Image`
    width: 40%;
`

export const Title = styled.Text`
    font-size: 24px;
    color: #fff;
`

export const FormGroup = styled.View`
    margin-top: 20px;
    width: 70%;
    align-items: center;
    justify-content: center;
`
export const ForgotPassword = styled.TouchableOpacity`
    margin-top: 10px;
    width: 100%;
    align-items: flex-end;
    justify-content: flex-end;
`

export const ForgotPasswordText = styled.Text`
    font-size: 14px;
    color: #fff;
    text-align: center;
`
export const SignUp = styled.Text`
    font-size: 14px;
    color: #fff;
    text-align: center;
`

export const Error = styled.View`
    width: 100%;
    margin-top: 0px;
`
export const ErrorText = styled.Text`
    font-size: 14px;
    color: #fff;
    font-weight: bold;
    text-align: center;
`

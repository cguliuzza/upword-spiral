import React from 'react'
import CustomButton from '../CustomButton/CustomButton'

const onSignInFacebook = () => {
    console.warn("Facebook button works")
}
const onSignInGoogle = () => {
    console.warn("Google button works")
}
const onSignInApple = () => {
    console.warn("Apple button works")
}

const SocialSignInButtons = () => {
    return (
        <>
            <CustomButton text='Sign In with Facebook' onPress={onSignInFacebook} bgroundColor='#E7EAF4' fgroundColor='#4765A9' />
            <CustomButton text='Sign In with Google' onPress={onSignInGoogle} bgroundColor='#FAE9EA' fgroundColor='#DD4D44' />
            <CustomButton text='Sign In with Apple' onPress={onSignInApple} bgroundColor='#e3e3e3' fgroundColor='#363636' />
        </>
    )
}

export default SocialSignInButtons

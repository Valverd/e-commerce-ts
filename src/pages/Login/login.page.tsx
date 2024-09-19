import { BsGoogle } from 'react-icons/bs'
import { FiLogIn } from 'react-icons/fi'
import CustomButton from '../../components/Custom-Button/custom-button.component'
import { Header } from '../../components/Header/header.component'
import {
  LoginContainer,
  LoginContent,
  LoginHeadLine,
  LoginInputContainer,
  LoginSubtitle
} from './login.styles'

const Login = () => {
  return (
    <>
      <Header />

      <LoginContainer>
        <LoginContent>
          <LoginHeadLine>Entre com a sua conta</LoginHeadLine>
          <CustomButton startIcon={<BsGoogle size={18} />}>
            Entrar com o Google
          </CustomButton>
          <LoginSubtitle>ou entre com seu e-mail</LoginSubtitle>

          <LoginInputContainer>
            <CustomButton startIcon={<FiLogIn size={18}/>}>LogIn</CustomButton>
          </LoginInputContainer>
          <LoginInputContainer>{/* Button */}</LoginInputContainer>
        </LoginContent>
      </LoginContainer>
    </>
  )
}

export default Login

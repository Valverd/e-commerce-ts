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
import { CustomInputContainer } from '../../components/Custom-Input/custom-input-styles'

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
            <p>E-mail</p>
            <CustomInputContainer placeholder='Digite seu e-mail'></CustomInputContainer>
          </LoginInputContainer>

          <LoginInputContainer>
            <p>Senha</p>
            <CustomInputContainer placeholder='Digite sua senha'></CustomInputContainer>
          </LoginInputContainer>

          <LoginInputContainer>
            <CustomButton startIcon={<FiLogIn size={18} />}>LogIn</CustomButton>
          </LoginInputContainer>
        </LoginContent>
      </LoginContainer>
    </>
  )
}

export default Login

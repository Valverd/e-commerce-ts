import {
  HeaderContainer,
  HeaderTitle,
  HeaderItems,
  HeaderItem
} from './header.styles'
import { BsCart } from 'react-icons/bs'

export const Header = () => {
  return (
    <HeaderContainer className='header-container'>
      <HeaderTitle className='header-title'>CLUB CLOTHING</HeaderTitle>
      <HeaderItems className='header-items'>
        <HeaderItem className='header-item'>Explorar</HeaderItem>
        <HeaderItem className='header-item'>Login</HeaderItem>
        <HeaderItem className='header-item'>Criar Conta</HeaderItem>
        <HeaderItem className='header-item'>
          <BsCart size={20} />
          <p style={{ marginLeft: 5 }}>5</p>
        </HeaderItem>
      </HeaderItems>
    </HeaderContainer>
  )
}

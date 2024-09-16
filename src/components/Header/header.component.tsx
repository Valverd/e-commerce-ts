import './header.styles.css'
import { BsCart } from 'react-icons/bs'

export const Header = () => {
  return (
    <div className='header-container'>
      <h2 className='header-title'>CLUB CLOTHING</h2>
      <div className='header-items'>
        <div className='header-item'>Explorar</div>
        <div className='header-item'>Login</div>
        <div className='header-item'>Criar Conta</div>
        <div className='header-item'>
          <BsCart size={20} />
          <p style={{marginLeft: 5}}>5</p>
        </div>
      </div>
    </div>
  )
}

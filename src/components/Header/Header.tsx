import React from 'react'
import { Link } from 'react-router-dom'
import { HeaderDiv, ContentDiv, Menu } from './Style'
import Container from '../../hoc/Container/Container'
import { LogoIcon } from '../Icons/Icons'
import Button from '../UI/Button/Button'

const Header = () => {
  const loginHandler = () => {}

  return (
    <HeaderDiv>
      <Container>
        <ContentDiv>
          <Link to="/">
            <LogoIcon />
          </Link>

          <Menu>
            <li>
              <Link to="/">Кейсы</Link>
            </li>
            <li>
              <Link to="/faq">Инструкция</Link>
            </li>
            <li>
              <Link to="/withdraws">Выводы</Link>
            </li>
          </Menu>

          <Button onClick={loginHandler}>Войти</Button>
        </ContentDiv>
      </Container>
    </HeaderDiv>
  )
}

export default Header

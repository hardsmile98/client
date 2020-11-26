import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../../hoc/Container/Container'
import { FooterDiv, ContentDiv, Menu, Copyrights } from './Style'

const Footer = () => {
  return (
    <FooterDiv>
      <Container>
        <ContentDiv>
          <Menu>
            <li>
              <Link to="/">Кейсы</Link>
            </li>
            <li>
              <Link to="/terms">Пользовательское соглашение</Link>
            </li>
          </Menu>

          <Copyrights>
            <p>Copyright © case.ru. Все права защищены.</p>
            <p>
              Авторизуясь на сайте вы принимаете пользовательское соглашение
            </p>
          </Copyrights>
        </ContentDiv>
      </Container>
    </FooterDiv>
  )
}

export default Footer

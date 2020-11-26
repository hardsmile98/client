import styled from 'styled-components'

export const FooterDiv = styled.footer`
  padding-bottom: 15px;
`
export const ContentDiv = styled.div`
  padding: 25px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.15);
  background-color: #1b1926;
`
export const Menu = styled.ul`
  display: flex;
  align-items: center;
  & li:not(:last-child) {
    margin-right: 25px;
  }
  & li a {
    display: inline-block;
    font-weight: 600;
  }
`

export const Copyrights = styled.ul`
  margin-top: 10px;
  color: #504c65;
  font-size: 12px;
`

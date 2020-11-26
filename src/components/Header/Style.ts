import styled from 'styled-components'

export const HeaderDiv = styled.header`
  padding-top: 25px;
`

export const ContentDiv = styled.div`
  padding: 0 25px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.15);
  background-color: #1b1926;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`

export const Menu = styled.ul`
  display: flex;
  align-items: center;
  & li {
    cursor: pointer;
    position: relative;
  }
  & li a {
    display: inline-block;
    padding: 30px 20px;
    font-weight: 600;
  }
  & li:after {
    content: ' ';
    display: none;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    box-shadow: 0 0 5px #f50163;
    background-color: #f50163;
  }

  & li:hover:after {
    display: block;
  }
`

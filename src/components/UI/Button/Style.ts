import styled from 'styled-components'

export const Bth = styled.button`
  box-shadow: 0 10px 40px rgba(245, 1, 99, 0.25), 0 0 20px rgba(245, 1, 99, 0.5);
  border-top: 2px solid #fe3a89;
  background: #f50163;
  border-bottom: 2px solid #b30148;
  text-shadow: 0 2px 0 #c2014e;
  color: #fff;
  font-weight: 600;
  padding: 12px 40px;
  text-decoration: none;
  display: inline-block;
  transition: all 0.25s ease-in-out 0s;
  &:hover {
    box-shadow: 0 10px 40px rgba(245, 1, 99, 0.3),
      0 0 20px rgba(245, 1, 99, 0.7);
    background: #fe1170;
  }
`

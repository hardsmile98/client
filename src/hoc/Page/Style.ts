import styled from 'styled-components'

export const MainDiv = styled.main`
  padding: 25px 0;
`

export const GridDiv = styled.div`
  display: flex;
  align-items: flex-start;
`

export const LeftDiv = styled.div`
  width: 200px;
  min-width: 200px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.15);
  background-color: #1b1926;
`

export const ContentDiv = styled.div`
  margin: 0 25px;
  width: calc(100% - 200px - 300px - 25px * 2);
  max-width: calc(100% - 200px - 300px - 25px * 2);
`

export const RightDiv = styled.div`
  width: 300px;
  min-width: 300px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.15);
  background-color: #1b1926;
`

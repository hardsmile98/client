import styled from 'styled-components'

export const StatisticDiv = styled.div`
  display: flex;
  align-items: center;
`

export const ElementDiv = styled.div`
  max-width: 100%;
  min-width: calc(100% / 3 - 25px * 2 / 3);
  padding: 15px 20px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.15);
  background-color: #1b1926;
  display: flex;
  align-items: center;
  &:not(:last-child) {
    margin-right: 25px;
  }
`

export const ContentDiv = styled.div`
  flex: 1 1 auto;
  margin-right: 15px;
`

export const NumberDiv = styled.div`
  font-size: 18px;
  font-weight: 600;
`
export const TitleDiv = styled.div`
  font-size: 10px;
  text-transform: uppercase;
  text-shadow: 0 0 15px #f50163;
  color: #f50163;
`

export const IconDiv = styled.div`
  width: 40px;
  height: 40px;
  border: 2px solid #1f1d2c;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`

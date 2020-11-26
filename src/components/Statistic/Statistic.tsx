import React from 'react'
import {
  StatisticDiv,
  ElementDiv,
  ContentDiv,
  NumberDiv,
  TitleDiv,
  IconDiv,
} from './Style'
import { OnlineIcon, UsersIcon, BoxesIcon } from '../Icons/Icons'

const Statistic: React.FC = () => {
  return (
    <StatisticDiv>
      <ElementDiv>
        <ContentDiv>
          <NumberDiv>50</NumberDiv>
          <TitleDiv>Онлайн</TitleDiv>
        </ContentDiv>

        <IconDiv>
          <OnlineIcon />
        </IconDiv>
      </ElementDiv>

      <ElementDiv>
        <ContentDiv>
          <NumberDiv>104482</NumberDiv>
          <TitleDiv>Пользователей</TitleDiv>
        </ContentDiv>

        <IconDiv>
          <UsersIcon />
        </IconDiv>
      </ElementDiv>

      <ElementDiv>
        <ContentDiv>
          <NumberDiv>57371</NumberDiv>
          <TitleDiv>Открыто кейсов</TitleDiv>
        </ContentDiv>

        <IconDiv>
          <BoxesIcon />
        </IconDiv>
      </ElementDiv>
    </StatisticDiv>
  )
}

export default Statistic

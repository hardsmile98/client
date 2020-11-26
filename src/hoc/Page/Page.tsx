import React, { Fragment } from 'react'
import { MainDiv, GridDiv, LeftDiv, RightDiv, ContentDiv } from './Style'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Container from '../Container/Container'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import RightSidebar from '../../components/RightSidebar/RightSidebar'

const Page: React.FC = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <MainDiv>
        <Container>
          <GridDiv>
            <LeftDiv>
              <LeftSidebar />
            </LeftDiv>

            <ContentDiv>{children}</ContentDiv>

            <RightDiv>
              <RightSidebar />
            </RightDiv>
          </GridDiv>
        </Container>
      </MainDiv>
      <Footer />
    </Fragment>
  )
}

export default Page

import React from 'react'
import {
  ActiveFilters,
  Header,
  HeaderTitle,
  HeaderWrapper,
  HeaderItem,
  Container,
  AnimatedLoading
} from './index.style'
import { withRouter } from 'react-router-dom'

const Navbar = ({ filters, openFilter, history }) => {
  return (
    <React.Fragment>
      <Header className="bg-black">
        <HeaderTitle
          className="bg-gray-800 text-white rounded cursor-pointer"
          onClick={() => history.push('/')}
        >
          <Container>
            <AnimatedLoading
              src={`${process.env.PUBLIC_URL}/pokeball-icon.svg`}
              alt={'Loading Pokeball'}
            />
            Wardex
          </Container>
        </HeaderTitle>
        <HeaderWrapper>
          <HeaderItem
            className="bg-yellow-300 rounded"
            onClick={() => history.push('/compare')}
          >
            COMPARE
          </HeaderItem>
          <HeaderItem className="bg-yellow-300 rounded" onClick={openFilter}>
            FILTER
          </HeaderItem>
        </HeaderWrapper>
      </Header>
      {filters && filters.length > 0 && (
        <ActiveFilters className="font-bold text-3xl">
          Filter : {filters.join(', ')}
        </ActiveFilters>
      )}
    </React.Fragment>
  )
}

export default withRouter(Navbar)

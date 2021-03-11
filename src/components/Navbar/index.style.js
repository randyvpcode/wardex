import styled, { keyframes } from 'styled-components'

const ActiveFilters = styled.p`
  margin: 8px 5%;
  text-align: center;
  font-size: 1.2em;
  line-height: 1.5em;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  /* margin: auto 5%; */
`

const HeaderTitle = styled.h3`
  font-weight: bold;
  font-size: 1.4em;
  padding: 10px;
  margin-left: 5px;
`

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: right;
`

const HeaderItem = styled.button`
  font-family: Muli;
  margin: 5px;
  border: 0px;
  padding: 10px;
  font-size: 1em;
  cursor: pointer;
  font-weight: 800;
`

const Container = styled.div`
  display: flex;
`

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const AnimatedLoading = styled.img`
  height: 36px;
  width: 36px;
  margin: auto;
  transition: all 0.35s ease-in-out;
  animation: ${rotate} 1s linear infinite;
  opacity: 0.6;
  margin-right: 5px;
`

export { ActiveFilters, Header, HeaderTitle, HeaderWrapper, HeaderItem, Container, AnimatedLoading }

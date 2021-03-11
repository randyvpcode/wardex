import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  top: ${(props) => (props.show ? '0px' : '-2500px')};
  left: 0px;
  z-index: 999;
  height: 100%;
  width: 100%;
  text-align: center;
  line-height: 2em;
  transition: all 0.4s ease-in-out;
`

const CloseButton = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  font-size: 2em;
  cursor: pointer;
`

const TypeListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding-left: 0px;
`

const Type = styled.li`
  width: 30%;
  font-size: 0.9em;
  &:nth-child(even) {
    margin-right: 20%;
  }
  &:nth-child(odd) {
    margin-left: 20%;
  }
  display: inline-block;
  transition: all 0.35 ease-in-out;
  text-align: center;
  cursor: pointer;
  ${(props) =>
    props.check &&
    `
    &:after {
      content: " ✔️";
    }
  `};
`

const SuggestionSentence = styled.p`
  font-size: 1em;
  margin-bottom: 8px;
`

const WrapperActionButton = styled.div`
  display: flex;
  margin: 2px;
`

const ActionButton = styled(Link)`
  border-radius: 8px;
  padding: 6px 24px;
  text-decoration: none;
  margin: 2px;
  cursor: pointer;
`

export {
  Container,
  CloseButton,
  TypeListContainer,
  Type,
  SuggestionSentence,
  WrapperActionButton,
  ActionButton,
}

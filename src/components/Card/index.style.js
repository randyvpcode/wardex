import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Card = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: stretch;
  flex-wrap: wrap;
  width: 200px;
  padding: 16px;
  margin: 16px 16px 16px 16px;
  border: 2px solid gainsboro;
  border-radius: 8px;
  color: black;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: rotate(0.5deg);
  }
`

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  min-height: 180px;
`

const Image = styled.img`
  max-height: 180px;
`

const Name = styled.h3`
  font-weight: bold;
  font-size: 1.4em;
`

const Classification = styled.p`
  font-size: 0.7em;
  margin: 2px auto;
`

const Types = styled.p`
  margin: 0px auto 0px auto;
  font-size: 0.8em;
`

export { Card, ImageContainer, Image, Name, Classification, Types }

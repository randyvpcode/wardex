import styled from 'styled-components'

const Container = styled.div`
  min-height: 200px;
  max-width: 930px;
  justify-content: space-around;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`

const ComparePageTitle = styled.h2`
  font-size: 1.4em;
  margin-top: 10px;
`

const Name = styled.h1`
  font-size: 1.8em;
  font-weight: bold;
  margin: 16px auto 12px auto;
  text-align: center;
`

const Classification = styled.p`
  color: slategray;
  margin: 8px auto;
  text-align: center;
`

const FlexContent = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`

const PokemonImage = styled.div`
  display: flex;
  border: 2px solid gainsboro;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  padding: 16px;
  margin: 16px;
  min-width: 40%;
  @media (max-width: 768px) {
    width: 80%;
  }
`

const Statistic = styled.div`
  border: 2px solid gainsboro;
  border-radius: 8px;
  padding: 16px;
  margin: 16px;
  min-width: 40%;
  @media (max-width: 768px) {
    width: 80%;
  }
`

const Title = styled.p`
  font-size: 0.8em;
  color: slategray;
  margin: 12px auto 8px auto;
  text-align: left;
`

const Text = styled.p`
  line-height: 1.4em;
`

export {
  Container,
  ComparePageTitle,
  Name,
  Classification,
  FlexContent,
  PokemonImage,
  Statistic,
  Title,
  Text
}

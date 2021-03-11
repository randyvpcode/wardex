import React from 'react'
import Evolutions from './Evolutions'
import {
  Container,
  Name,
  Classification,
  FlexContent,
  PokemonImage,
  Statistic,
  Title,
  Text,
} from './index.style'

export default function Detail({ data }) {
  const {
    name,
    classification,
    image,
    evolutions,
    weight,
    height,
    types,
    attacks,
    resistant,
    weaknesses,
  } = data

  return (
    <Container
      initial={{ x: -2000, opacity: 0.5 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.75, ease: 'easeOut' }}
    >
      <Name>{name}</Name>
      <Classification>{classification}</Classification>
      <FlexContent>
        <PokemonImage>
          <img src={image} width="100%" alt={name} />
        </PokemonImage>
        <Statistic>
          <Title>Weight</Title>
          <Text>{`${weight.minimum} - ${weight.maximum}`}</Text>
          <Title>Height</Title>
          <Text>{`${height.minimum} - ${height.maximum}`}</Text>
          <Title>Types</Title>
          <Text>{types.join(', ')}</Text>
          <Title>Fast attacks</Title>
          <Text>
            {attacks &&
              attacks.fast.map((i) => `${i.name} (${i.type})`).join(', ')}
          </Text>
          <Title>Special attacks</Title>
          <Text>
            {attacks &&
              attacks.special.map((i) => `${i.name} (${i.type})`).join(', ')}
          </Text>
          <Title>Resistant</Title>
          <Text>{resistant.join(', ')}</Text>
          <Title>Weaknesses</Title>
          <Text>{weaknesses.join(', ')}</Text>
        </Statistic>
      </FlexContent>
      {Array.isArray(evolutions) && <Evolutions evolutions={evolutions} />}
    </Container>
  )
}

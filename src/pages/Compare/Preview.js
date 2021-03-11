import React from 'react';
import {
  Name,
  Classification,
  FlexContent,
  PokemonImage,
  Statistic,
  Title,
  Text
} from './index.style'

export default function Preview({ data }) {
  return (
    <React.Fragment>
      <Name>{data.resultFirst.name}</Name>
      <Classification>{data.resultFirst.classification}</Classification>
      <FlexContent>
        <PokemonImage>
          <img src={data.resultFirst.image} width="100%" alt={data.resultFirst.name} />
        </PokemonImage>
        <Statistic>
          <Title>Weight</Title>
          <Text>{`${data.resultFirst.weight && data.resultFirst.weight.minimum} - ${data.resultFirst.weight && data.resultFirst.weight.maximum}`}</Text>
          <Title>Height</Title>
          <Text>{`${data.resultFirst.height && data.resultFirst.height.minimum} - ${data.resultFirst.height && data.resultFirst.height.maximum}`}</Text>
          <Title>Types</Title>
          <Text>{data.resultFirst.types && data.resultFirst.types.join(', ')}</Text>
          <Title>Fast attacks</Title>
          <Text>
            {data.resultFirst.attacks &&
              data.resultFirst.attacks.fast.map((i) => `${i.name} (${i.type})`).join(', ')}
          </Text>
          <Title>Special attacks</Title>
          <Text>
            {data.resultFirst.attacks &&
              data.resultFirst.attacks.special.map((i) => `${i.name} (${i.type})`).join(', ')}
          </Text>
          <Title>Resistant</Title>
          <Text>{data.resultFirst.resistant && data.resultFirst.resistant.join(', ')}</Text>
          <Title>Weaknesses</Title>
          <Text>{data.resultFirst.weaknesses && data.resultFirst.weaknesses.join(', ')}</Text>
        </Statistic>
      </FlexContent>
      <Name>{data.resultSecond.name}</Name>
      <Classification>{data.resultSecond.classification}</Classification>
      <FlexContent>
        <PokemonImage>
          <img src={data.resultSecond.image} width="100%" alt={data.resultSecond.name} />
        </PokemonImage>
        <Statistic>
          <Title>Weight</Title>
          <Text>{`${data.resultSecond.weight && data.resultSecond.weight.minimum} - ${data.resultSecond.weight && data.resultSecond.weight.maximum}`}</Text>
          <Title>Height</Title>
          <Text>{`${data.resultSecond.height && data.resultSecond.height.minimum} - ${data.resultSecond.height && data.resultSecond.height.maximum}`}</Text>
          <Title>Types</Title>
          <Text>{data.resultSecond.types && data.resultSecond.types.join(', ')}</Text>
          <Title>Fast attacks</Title>
          <Text>
            {data.resultSecond.attacks &&
              data.resultSecond.attacks.fast.map((i) => `${i.name} (${i.type})`).join(', ')}
          </Text>
          <Title>Special attacks</Title>
          <Text>
            {data.resultSecond.attacks &&
              data.resultSecond.attacks.special.map((i) => `${i.name} (${i.type})`).join(', ')}
          </Text>
          <Title>Resistant</Title>
          <Text>{data.resultSecond.resistant && data.resultSecond.resistant.join(', ')}</Text>
          <Title>Weaknesses</Title>
          <Text>{data.resultSecond.weaknesses && data.resultSecond.weaknesses.join(', ')}</Text>
        </Statistic>
      </FlexContent>
    </React.Fragment>
  )
}
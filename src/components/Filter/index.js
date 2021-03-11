import React, { useState } from 'react'
import { POKEMON_TYPES } from '../../utils/globals'
import {
  Container,
  CloseButton,
  TypeListContainer,
  Type,
  SuggestionSentence,
  ActionButton,
  WrapperActionButton,
} from './index.style'

export default function ({ display, onClose, filters }) {
  const [selectedFilters, selectFilter] = useState(filters)
  const handleSetFilter = (type) => {
    if (selectedFilters.includes(type)) {
      selectFilter(selectedFilters.filter((item) => item !== type))
    } else {
      selectFilter([...selectedFilters, type])
    }
  }

  const filterSelected = selectedFilters.length > 0
  const filterUrl = filterSelected
    ? `/filter/${selectedFilters.join('&')}`
    : `/`

  const handleClickFilter = () => {
    if (!filterSelected) {
      window.alert('Please select pokemon types to filter !')
    } else {
      onClose()
    }
  }

  const handleClickClear = () => {
    selectFilter([])
  }

  return (
    <Container show={display} className="bg-yellow-300 text-gray-600">
      <CloseButton onClick={onClose}>&#120;</CloseButton>
      <SuggestionSentence className="font-bold">
        Select pokemon types to filter
      </SuggestionSentence>
      <TypeListContainer>
        {POKEMON_TYPES.map((type) => (
          <Type
            key={type}
            onClick={() => handleSetFilter(type)}
            check={selectedFilters.includes(type)}
            className="text-gray-600 border-gray-600 border-2 mt-1 rounded active:text-gray-800"
          >
            {type}
          </Type>
        ))}
      </TypeListContainer>
      <WrapperActionButton>
        <ActionButton
          className="text-yellow-300 bg-gray-600"
          to={filterUrl}
          onClick={handleClickFilter}
        >
          Filter
        </ActionButton>
        <ActionButton
          className="text-yellow-300 bg-gray-600"
          to="/"
          onClick={handleClickClear}
        >
          Clear
        </ActionButton>
      </WrapperActionButton>
    </Container>
  )
}

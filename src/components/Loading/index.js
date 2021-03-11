import React from 'react'
import { Container, AnimatedLoading } from './index.style'

export default function Loading({ isFullscreen }) {
  return (
    <Container
      fullScreen={isFullscreen}
      initial={{ scale: 0, opacity: 0.5 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
    >
      <AnimatedLoading
        src={`${process.env.PUBLIC_URL}/pokeball-icon.svg`}
        alt={'Loading Pokeball'}
      />
    </Container>
  )
}

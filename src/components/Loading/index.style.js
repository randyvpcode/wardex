import styled, { keyframes, css } from 'styled-components'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const Container = styled.div`
  width: 100%;
  height: 96px;
  text-align: center;
  ${(props) =>
    props.fullScreen
      ? css`
          margin: 250px auto 16px auto;
        `
      : css`
          margin: 16px auto;
        `}
`

const AnimatedLoading = styled.img`
  height: 96px;
  width: 96px;
  margin: auto;
  transition: all 0.35s ease-in-out;
  animation: ${rotate} 1s linear infinite;
  opacity: 0.6;
`

export { Container, AnimatedLoading }

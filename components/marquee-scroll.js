import { useRef } from 'react'
import { useLenis } from '@studio-freight/react-lenis'
import { useRect, useWindowSize } from 'hooks'
import { styled } from 'styled-components'

function truncate(value, decimals) {
  return parseFloat(value.toFixed(decimals))
}

const StyledMarquee = styled.div`
  display: flex;
  overflow: hidden;
  will-change: transform;
`
const StyledInner = styled.div`
  display: flex;
  white-space: nowrap;
  transform: translate3d(var(--marquee-progress), 0, 0);
`

export default function MarqueeScroll({ children, repeat = 2 }) {
  const el = useRef()

  const [setRef, rect] = useRect()
  const { height: windowHeight } = useWindowSize()

  useLenis(
    ({ scroll }) => {
      if (!rect.top) return
      const scrollY = scroll

      const progress = -truncate((scrollY * 0.1) % 100, 3)

      const top = rect.top - scrollY

      const inView = top + rect.height > 0 && top < windowHeight

      if (inView) {
        el.current.style.setProperty('--marquee-progress', progress + '%')
      }
    },
    [rect, windowHeight]
  )

  return (
    <div
      ref={(node) => {
        el.current = node
        setRef(node)
      }}
    >
      <StyledMarquee>
        {new Array(repeat).fill(children).map((_, i) => (
          <StyledInner key={i}>{children}</StyledInner>
        ))}
      </StyledMarquee>
    </div>
  )
}

/**
 * @file CustomLink.js
 * @desc A custom link component with styled anchor tags and Next.js Link integration.
 */

import React, { useCallback, useRef } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { gsap } from 'gsap'
import { useIsomorphicLayoutEffect } from 'react-use'
import { media } from 'styles'

const StyledLink = styled.a`
  font-family: var(--font-text);
  display: inline-flex;
  flex-direction: column;
  font-size: 1.3vw;
  font-weight: 500;
  line-height: 1.3;
  text-decoration: none;
  color: ${(props) => props.color || 'var(--black)'};
  cursor: pointer;
  position: relative;
  overflow: hidden;

  ${media.desktop`font-size: 18px;`}
`
const StyledSpan = styled.div`
  position: absolute;
`

/**
 * CustomLink component.
 * @component
 * @param {object} props - Component props.
 * @param {string} [props.href] - The URL to navigate when the link is clicked.
 * @param {string} [props.to] - The URL to navigate when the link is clicked (for Next.js Link component).
 * @param {string} [props.target] - The target attribute for the anchor tag.
 * @param {string} [props.color] - The color of the link.
 * @param {React.ReactNode} props.children - The content of the link.
 * @returns {React.ReactElement} CustomLink component.
 */
const CustomLink = ({ href, target, children, color, ...rest }) => {
  let line1 = useRef(null)
  let line2 = useRef(null)
  const tl = useRef()

  useIsomorphicLayoutEffect(() => {
    tl.current = gsap
      .timeline()
      .set(line2, { yPercent: -100 })
      .to(line1, { yPercent: 100, duration: 0.5, ease: 'power3.inOut' }, 0)
      .to(line2, { yPercent: 0, duration: 0.5, ease: 'power3.inOut' }, 0)
  }, [])

  const handleMouseEnter = useCallback(() => {
    tl.current.reverse()
  })
  const handleMouseLeave = useCallback(() => {
    tl.current.play()
  })

  const linkProps = {
    href,
    target: target || '_blank',
    rel: target ? undefined : 'noopener noreferrer',
    color,
    ...rest,
  }

  if (href) {
    return (
      <Link href={href} passHref legacyBehavior>
        <StyledLink
          {...linkProps}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div ref={(el) => (line1 = el)}>{children}</div>
          <StyledSpan ref={(el) => (line2 = el)}>{children}</StyledSpan>
        </StyledLink>
      </Link>
    )
  }

  return <StyledLink>{children}</StyledLink>
}

export default CustomLink

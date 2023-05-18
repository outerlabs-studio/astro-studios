/**
 * @file CustomButton.js
 * @desc A custom button component with various styles and animations.
 */

import React, { useRef, useCallback } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'
import styled, { css } from 'styled-components'
import { useIsTouchDevice } from 'hooks'

const ButtonWrapper = styled.div`
  position: relative;
  width: fit-content;
`

const ButtonStyle = css`
  font-family: var(--font-text);
  font-size: 18px;
  font-weight: 500;
  line-height: 1;
  text-decoration: none;
  padding: 0.75rem 2rem;
  background-color: var(--orange);
  color: var(--white);
  border-radius: 35px;

  &:disabled {
    background-color: var(--black);
  }
`

const StyledButton = styled.a`
  ${ButtonStyle};
`

const ButtonButton = styled.button`
  ${ButtonStyle};
`

/**
 * CustomButton component.
 * @component
 * @param {object} props - Component props.
 * @param {string} [props.href] - The URL to navigate when the button is clicked.
 * @param {string} [props.to] - The URL to navigate when the button is clicked (for Next.js Link component).
 * @param {string} [props.target] - The target attribute for the anchor tag.
 * @param {React.ReactNode} props.children - The content of the button.
 * @returns {React.ReactElement} CustomButton component.
 */
const CustomButton = (props) => {
  const { href, to, target, children, ...rest } = props
  const isTouchDevice = useIsTouchDevice()
  const movingContainerRef = useRef(null)

  /**
   * Mouse move event handler.
   * @param {MouseEvent} e - The mouse event.
   */
  const handleMouseMove = useCallback(
    (e) => {
      if (isTouchDevice) return
      const bounds = movingContainerRef.current.getBoundingClientRect()

      gsap.to(movingContainerRef.current, {
        x: (e.clientX - bounds.left - 30) / 4,
        y:
          (e.clientY - bounds.top - movingContainerRef.current.clientHeight) /
          4,
        scale: 1.1,
        duration: 1,
        ease: 'expo.out',
      })
    },
    [isTouchDevice]
  )

  const handleMouseExit = useCallback(() => {
    gsap.to(movingContainerRef.current, {
      x: 0,
      y: 0,
      scale: 1,
      duration: 1,
      ease: 'expo.out',
    })
  }, [])

  const ButtonComponent = href ? (
    <StyledButton
      href={href}
      target={target || '_blank'}
      rel={!target ? 'noopener noreferrer' : undefined}
      {...rest}
    >
      {children}
    </StyledButton>
  ) : to ? (
    <Link href={to} passHref>
      <StyledButton {...rest}>{children}</StyledButton>
    </Link>
  ) : (
    <ButtonButton {...rest}>{children}</ButtonButton>
  )

  return (
    <ButtonWrapper
      ref={movingContainerRef}
      onMouseLeave={handleMouseExit}
      onMouseMove={handleMouseMove}
    >
      {ButtonComponent}
    </ButtonWrapper>
  )
}

export default CustomButton

/**
 * @file CustomLink.js
 * @desc A custom link component with styled anchor tags and Next.js Link integration.
 */

import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const StyledLink = styled.a`
  font-family: var(--font-text);
  font-size: 18px;
  font-weight: 500;
  line-height: 130%;
  text-decoration: none;
  color: ${(props) => props.color || 'var(--black)'};
  cursor: pointer;
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
  if (href) {
    return (
      <Link href={href} passHref legacyBehavior>
        <StyledLink color={color} {...rest}>
          {children}
        </StyledLink>
      </Link>
    )
  }

  const linkProps = {
    href,
    target: target || '_blank',
    rel: target ? undefined : 'noopener noreferrer',
    color,
    ...rest,
  }

  return <StyledLink {...linkProps}>{children}</StyledLink>
}

export default CustomLink

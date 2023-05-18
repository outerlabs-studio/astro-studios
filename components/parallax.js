// https://github.com/studio-freight/compono/blob/main/src/parallax/index.js
import { useEffect, useRef, cloneElement } from 'react'
import { gsap } from 'gsap'
import { useWindowSize } from 'hooks'

/**
 * Parallax Component
 *
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - The content to be rendered as children
 * @param {number} [props.speed=1] - The speed of the parallax effect
 * @param {string} [props.id='parallax'] - The ID of the parallax element
 * @param {string} [props.position] - The position of the parallax element
 * @param {React.RefObject} [props.trigger] - The trigger element for the parallax effect
 * @returns {React.ReactNode} - Rendered component
 */
export default function Parallax({
  children,
  speed = 1,
  id = 'parallax',
  position,
  trigger = useRef(),
}) {
  const target = useRef()
  const timeline = useRef()
  const { width: windowWidth } = useWindowSize()

  useEffect(() => {
    const y = windowWidth * speed * 0.1
    const mm = gsap.matchMedia()

    timeline.current = gsap
      .timeline({
        scrollTrigger: {
          id,
          trigger: position === 'top' ? document.body : trigger.current,
          scrub: true,
          start: position === 'top' ? 'top top' : 'top bottom',
          end: position === 'top' ? '+=100%' : 'bottom top',
        },
      })
      .fromTo(
        target.current,
        { y: position === 'top' ? 0 : -y },
        { y: y, ease: 'none' }
      )

    mm.add(
      {
        reduceMotion: '(prefers-reduced-motion: reduce)',
      },
      (context) => {
        const { reduceMotion } = context.conditions

        if (reduceMotion) {
          timeline?.current?.from(target.current, { y: 0 })
          timeline?.current?.kill()
        }
      }
    )

    return () => {
      timeline?.current?.kill()
    }
  }, [id, speed, position, windowWidth, target])

  return <div>{cloneElement(children, { ref: target })}</div>
}

import React from "react"

export const LandingHeroBeamSvg = props => (
  <svg
    width={128}
    height={256}
    viewBox="0 0 128 256"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <image
      className="invisible dark:visible"
      href="/heroAnimation/landing-hero-connection-ray.png"
      width={128}
      height={256}
      x={0}
      y={0}
    />
    <image
      className="visible dark:invisible"
      href="/heroAnimation/landing-hero-connection-ray-light.png"
      width={128}
      height={256}
      x={0}
      y={0}
    />
  </svg>
)

export const LandingHeroBeamGlowSvg = props => (
  <svg
    width={128}
    height={256}
    viewBox="0 0 128 256"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <image
      className="invisible dark:visible"
      href="/heroAnimation/landing-hero-connection-glow.png"
      width={128}
      height={256}
      x={0}
      y={0}
    />
    <image
      className="visible dark:invisible"
      href="/heroAnimation/landing-hero-connection-glow-light.png"
      width={128}
      height={256}
      x={0}
      y={0}
    />
  </svg>
)

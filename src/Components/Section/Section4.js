import gsap from "gsap";
import React, { useLayoutEffect } from "react";
import { useRef } from "react";
import styled, { keyframes } from "styled-components";

const Section = styled.section`
  width: 100vw;
  height: 200vh;
  position: relative;

  display: flex;
  justify-content: space-around;
  flex-direction: column;

  background-color: var(--dark);
  color: var(--white);
`;

const MainTitle = styled.h1`
  font-size: var(--fontBig);
  font-family: var(--fontL);
  background-image: linear-gradient(-45deg, var(--gradient));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Section4 = () => {
  const container = useRef(null);
  const textOne = useRef(null);
  const textTwo = useRef(null);

  useLayoutEffect(() => {
    let t1 = gsap
      .timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top+=200 top",
          end: "bottom top",
          scrub: true,
          markers: true,
        },
      })
      .fromTo(textOne.current, { x: 0 }, { x: "70%" })
      .fromTo(textTwo.current, { x: 0 }, { x: "-70%" });

    return () => {
      if (t1) t1.kill();
    };
  });

  return (
    <Section ref={container}>
      <MainTitle ref={textOne}>Serveu Essentials</MainTitle>
    </Section>
  );
};

export default Section4;

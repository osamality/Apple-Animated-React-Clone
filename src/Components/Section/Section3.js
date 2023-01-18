import gsap from "gsap";
import React, { useLayoutEffect } from "react";
import { useRef } from "react";
import styled, { keyframes } from "styled-components";
import backgroundVideo from "../../assets/video/Ink - 21536.mp4";

const Section = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  background-color: var(--white);
  overflow: hidden;
`;

const TextContainer = styled.div`
  width: 100%;
  height: 100vh;
  z-index: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: var(--dark);

  span {
    font-size: var(--fontxxxl);
    width: 50%;
    font-weight: 600;
    text-transform: capitalize;
    margin-left: 1ex;
  }
`;

const TextContainer2 = styled.div`
  width: 100%;
  height: 80vh;
  z-index: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  color: var(--dark);

  span {
    font-size: var(--fontxxl);
    width: 40%;
    font-weight: 600;
    text-transform: capitalize;
  }
`;

const Section3 = () => {
  const container = useRef(null);
  const textOne = useRef(null);
  const textTwo = useRef(null);

  useLayoutEffect(() => {
    let t1 = gsap
      .timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top-=700 top",
          end: "bottom top",
          scrub: true,
          markers: true
        },
      })
      .fromTo(textOne.current, { x: 0 }, { x: "10%" })
      .fromTo(textTwo.current, { x: 0 }, { x: "-10%" });

    return () => {
      if (t1) t1.kill();
    };
  });

  return (
    <Section ref={container}>
      <TextContainer ref={textOne}>
        <span>ServeU facilities </span>
      </TextContainer>
      <TextContainer2 ref={textTwo}>
        <span>facilities Management </span>
      </TextContainer2>
    </Section>
  );
};

export default Section3;

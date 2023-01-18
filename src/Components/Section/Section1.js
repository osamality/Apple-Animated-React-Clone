import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useLayoutEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import backgroundVideo from "../../assets/video/Ink - 21536.mp4";

const Section = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextContainer = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: var(--primary);
  color: var(--white);
`;

const moveUp = keyframes`
100%{
  transform: translateY(0);
}
`;

const Text = styled.p`
  width: 50%;
  font-size: var(--fontlg);
  position: relative;
  height: var(--fontmd);
  overflow: hidden;

  span {
    position: absolute;
    transform: translateY(3rem);
    animation-name: ${moveUp};
    animation-duration: 2.5s;
    animation-timing-function: ease;
    animation-fill-mode: forwards;
    animation-delay: ${(props) => props.delay};
    font-family: var(--fontL);
    background-image: linear-gradient(-45deg, var(--gradient));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const VideoContainer = styled.div`
  width: 100vw;
  min-height: 100vh;

  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;

  video {
    width: 100%;
    height: 100vh;
    object-fit: cover;
    object-position: bottom;
  }
`;

const Section1 = () => {
  gsap.registerPlugin(ScrollTrigger);
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    let Elem = sectionRef.current;

    let trigger = ScrollTrigger.create({
      trigger: Elem,
      start: "top top",
      pin: true,
      pinSpacing: false,
    });

    return () => {
      if (trigger) trigger.kill();
    };
  }, []);

  return (
    <Section ref={sectionRef}>
      {/* <VideoContainer>
        <video src={backgroundVideo} typeof="video/mp4" autoPlay muted loop />
      </VideoContainer> */}
      <TextContainer>
        <Text delay="0s">
          {" "}
          <span>
            &#8220; ServeU and facilities management solutions, to supply
            everything
          </span>{" "}
        </Text>
        <Text delay="0.4s">
          {" "}
          <span>
            &nbsp;&nbsp;&nbsp;you need for a safe, clean and productive working
            environment.
          </span>{" "}
        </Text>
        <Text delay="0.8s">
          {" "}
          <span>
            &nbsp;&nbsp;&nbsp;ServeU prides itself in understanding a complex
            maintenance
          </span>{" "}
        </Text>
        <Text delay="1.2s">
          {" "}
          <span>
            &nbsp;&nbsp;&nbsp;industry. From our extensive hard and soft
            services to cleaning
          </span>{" "}
        </Text>
        <Text delay="1.6s">
          {" "}
          <span>
            &nbsp;&nbsp;&nbsp;services, we are your one source for comprehensive
            facility
          </span>{" "}
        </Text>
        <Text delay="2s">
          {" "}
          <span>
            &nbsp;&nbsp;&nbsp;management services and cost savings. &#8220;
          </span>{" "}
        </Text>
      </TextContainer>
    </Section>
  );
};

export default Section1;

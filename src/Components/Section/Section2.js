import React from "react";
import styled, { keyframes } from "styled-components";
import backgroundVideo from "../../assets/video/Ink - 21536.mp4";

const Section = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;

  display: flex;

  background-color: var(--dark);
  overflow: hidden;
`;

const Title = styled.h1`
  position: absolute;
  top: 2em;
  left: 2em;

  font-size: var(--fontlg);
  font-family: var(--fontL);
  color: var(--greyLight);
`;

const TextContainer = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-image: linear-gradient(45deg, var(--gradient));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  z-index: 1;

  span {
    font-size: var(--fontxxxl);
    text-transform: uppercase;
    font-weight: 600;
    padding: 2rem;
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

const Section2 = () => {
  return (
    <Section>
      <VideoContainer>
        <video src={backgroundVideo} typeof="video/mp4" autoPlay muted loop />
      </VideoContainer>
      <Title>Facility management Solutions</Title>
      <TextContainer>
        <span>ServeU</span>
        <span>facilities </span>
      </TextContainer>
    </Section>
  );
};

export default Section2;

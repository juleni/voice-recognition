import React from "react";
import styled from "styled-components";

export default function PicturesNufko() {
  return (
    <Container>
      <Wrap>
        <img src="/pictures/nufko/nufko_01.jpg" />
      </Wrap>
      <Wrap>
        <img src="/pictures/nufko/nufko_02.jpg" />
      </Wrap>
      <Wrap>
        <img src="/pictures/nufko/nufko_03.jpg" />
      </Wrap>
      <Wrap>
        <img src="/pictures/nufko/nufko_04.jpg" />
      </Wrap>
      <Wrap>
        <img src="/pictures/nufko/nufko_05.jpg" />
      </Wrap>
      <Wrap>
        <img src="/pictures/nufko/nufko_06.jpg" />
      </Wrap>
    </Container>
  );
}

const Container = styled.div`
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 30px;
  display: grid;
  padding: 30px 0px 26px;
  grid-gap: 25px;
  grid-template-columns: repeat(5, minmax(0, 1fr));
`;

const Wrap = styled.div`
  border-radius: 10px;
  cursor: pointer;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  // make viewer bigger on hover and change its border color
  &:hover {
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
  }
`;

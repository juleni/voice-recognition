import React from "react";
import styled from "styled-components";

export default function Header() {
  return (
    <div>
      <Container>Voice Recognition</Container>
    </div>
  );
}

const Container = styled.div`
  display: flex;
  margin-top: 20px;
`;

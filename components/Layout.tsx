import React, { ReactNode } from "react";
import styled from "@emotion/styled";

interface Props {
  children: ReactNode;
}

function Layout({ children }: Props) {
  return (
    <Base>
      <Container>{children}</Container>
    </Base>
  );
}

export default Layout;

const Base = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  padding-top: 100px;
`;

const Container = styled.article`
  width: 500px;
  display: flex;
  flex-direction: column;
`;

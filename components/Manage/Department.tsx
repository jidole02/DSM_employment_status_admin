import styled from "@emotion/styled";
import { useState } from "react";
import Arrow from "./../../assets/arrow";

export default function Department() {
  const [showList, setShowList] = useState(false);
  return (
    <Wrapper>
      <NameContainer onClick={() => setShowList(!showList)}>
        <Name isShow={showList}>소프트웨어 개발과</Name>
        <Arrow isShow={showList} />
      </NameContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  border-bottom: 1px solid #dedede;
  padding-bottom: 20px;
`;

const NameContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 15px;
  * {
    transition: 0.3s;
  }
  & svg {
    transform: translateY(1px);
  }
`;

const Name = styled.h1<{ isShow: boolean }>`
  font-size: 16px;
  color: ${({ isShow }) => (isShow ? "var(--main)" : "var(--text)")};
`;

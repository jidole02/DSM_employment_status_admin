import styled from "@emotion/styled";
import { useState } from "react";
import Arrow from "./../../assets/arrow";
import Student from "./Student";

export default function Department() {
  const [showList, setShowList] = useState(false);
  return (
    <Wrapper>
      <NameContainer onClick={() => setShowList(!showList)}>
        <Name isShow={showList}>소프트웨어 개발과</Name>
        <Arrow isShow={showList} />
      </NameContainer>
      <StudnetWrapper>
        <Student />
        <Student />
        <Student />
        <Student />
        <Student />
        <Student />
      </StudnetWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  border-bottom: 1px solid #dedede;
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

const StudnetWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
  padding-right: 30px;
  padding-bottom: 20px;
  max-height: 200px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--main);
    border-radius: 24px;
  }
  ::-webkit-scrollbar-track {
    background-color: rgb(240, 240, 240);
    border-radius: 24px;
    overflow: hidden;
  }
`;

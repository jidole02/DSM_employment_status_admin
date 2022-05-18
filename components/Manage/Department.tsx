import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import Arrow from "./../../assets/arrow";
import Student from "./Student";
import axios from "axios";
import { StudentInfor } from "./studentInfor";

interface Props {
  name: string;
  index: number;
}

export default function Department({ name, index }: Props) {
  const [showList, setShowList] = useState(false);
  const [students, setStudents] = useState<StudentInfor[]>([]);
  const department_id = index + 2;

  useEffect(() => {
    axios
      .get(`http://3.35.90.39:8080/v1/student/department/${department_id}`)
      .then((res) => {
        setStudents(res.data);
      });
  }, []);
  return (
    <Wrapper>
      <NameContainer onClick={() => setShowList(!showList)}>
        <Name isShow={showList}>{name}</Name>
        <Arrow isShow={showList} />
      </NameContainer>
      <StudnetWrapper isShow={showList}>
        {students.map((_, index) => (
          <Student student={_} key={index} />
        ))}
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
  width: 150px;
`;

const StudnetWrapper = styled.div<{ isShow: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
  padding-right: 30px;
  overflow-y: scroll;
  height: ${({ isShow }) => (isShow ? "200px" : "0px")};
  padding-bottom: ${({ isShow }) => (isShow ? "20px" : "0px")};
  transition: 0.3s;
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

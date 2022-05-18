import styled from "@emotion/styled";
import { StudentInfor } from "./studentInfor";

interface Props {
  student: StudentInfor;
}

export default function Student({ student }: Props) {
  return (
    <Wrapper>
      <div className="student-name">
        <h3>
          {student.student_number}
          {student.name}
        </h3>
      </div>
      <div
        style={
          student.is_found_job ? { color: "#2997ff", fontWeight: "bold" } : {}
        }
      >
        {student.is_found_job ? "취업 확정" : "취업 미정"}
      </div>
      <div>
        <button>상태 변경</button>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 130px 100px 1fr;
  align-items: center;
  div {
    :nth-of-type(2) {
      font-size: 16px;
      color: var(--fail);
    }
    :nth-of-type(3) {
      display: flex;
      justify-content: flex-end;
      button {
        font-size: 14px;
        color: var(--white);
        padding: 5px 15px;
        border-radius: 5px;
        background-color: var(--main);
      }
    }
  }
  .studnet-name {
    & h3 {
      color: var(--text);
      font-size: 18px;
    }
  }
`;

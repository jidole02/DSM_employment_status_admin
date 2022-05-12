import styled from "@emotion/styled";

export default function Student() {
  return (
    <Wrapper>
      <div className="student-name">
        <h3>3117정지원</h3>
      </div>
      <div>취업 미정</div>
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

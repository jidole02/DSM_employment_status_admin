import React, { Fragment } from "react";
import * as common from "@/styles/common";
import styled from "@emotion/styled";

function Certification() {
  return (
    <Fragment>
      <Title>인증하기</Title>
      <Description>관리자 증명을 위해 비밀번호를 입력해주세요.</Description>
      <PswInput placeholder="비밀번호를 입력하세요" />
      <SubmitButton>인증하기</SubmitButton>
    </Fragment>
  );
}

export default Certification;

const Title = styled(common.Title)``;

const Description = styled(common.Description)`
  margin-top: 5px;
`;

const PswInput = styled(common.Input)`
  margin-top: 30px;
`;

const SubmitButton = styled(common.Button)`
  margin-top: 20px;
`;

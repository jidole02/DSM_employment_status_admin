import React, { ChangeEvent, Fragment, KeyboardEvent, useRef } from "react";
import * as common from "@/styles/common";
import styled from "@emotion/styled";
import { ADMIN_PASSWORD } from "@/constant/admin";
import { useRouter } from "next/router";

function Certification() {
  const pswInputRef = useRef<HTMLInputElement>(null);
  const admin_psw = ADMIN_PASSWORD;
  const router = useRouter();

  const certificate = () => {
    const input_psw = pswInputRef.current?.value as string;
    if (input_psw === admin_psw) {
      alert("ok");
    } else {
      alert("no");
    }
  };

  const certificateWithInput = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.keyCode === 13) certificate();
  };
  return (
    <Fragment>
      <Title>인증하기</Title>
      <Description>관리자 증명을 위해 비밀번호를 입력해주세요.</Description>
      <PswInput
        placeholder="비밀번호를 입력하세요"
        ref={pswInputRef}
        type="password"
        onKeyDown={certificateWithInput}
      />
      <SubmitButton onClick={certificate}>인증하기</SubmitButton>
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

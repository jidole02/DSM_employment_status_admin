import React, { useEffect } from "react";
import * as common from "@/styles/common";
import styled from "@emotion/styled";
import { useRecoilValue } from "recoil";
import { isLoginState } from "./../../recoil/admin";
import { useRouter } from "next/router";
import Department from "./Department";

function Manage() {
  const isLogin = useRecoilValue(isLoginState);
  const router = useRouter();

  const checkUserLoginState = () => {
    if (isLogin === false) {
      alert("로그인 해주세요");
      router.push("/");
    }
  };

  useEffect(checkUserLoginState, []);
  return (
    <Wrapper>
      <Title>DSM 취업률 관리</Title>
      <Description> 변경하기 버튼을 눌러 저장해주세요</Description>
      <DepartmentContainer>
        <Department />
        <Department />
        <Department />
        <Department />
      </DepartmentContainer>
      <SaveButton>변경하기</SaveButton>
    </Wrapper>
  );
}

export default Manage;

const Wrapper = styled.div`
  width: 100%;
  padding-bottom: 100px;
`;

const Title = styled(common.Title)``;

const Description = styled(common.Description)`
  margin-top: 5px;
`;

const DepartmentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 40px;
`;

const SaveButton = styled.button`
  width: 100%;
  height: 50px;
  border-radius: 5px;
  background-color: var(--main);
  color: var(--white);
  font-size: 16px;
  font-weight: bold;
  margin-top: 30px;
`;

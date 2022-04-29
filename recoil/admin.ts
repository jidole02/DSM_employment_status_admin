import { atom } from "recoil";

export const isLoginState = atom<boolean>({
  key: "ADMIN/isLoginState",
  default: false,
});

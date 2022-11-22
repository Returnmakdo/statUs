import { atom } from "recoil";

// group 초대 요청 모달
export const inviteModalAtom = atom({
  key: "inviteModal",
  default: false,
});

// header 프로필 클릭 시 나오는 모달
export const headerMenuAtom = atom({
  key: "headerMenuAtom",
  default: false,
});

// header 알림 버튼 클릭 시 나오는 모달
export const headerAlertAtom = atom({
  key: "headerAlertAtom",
  default: false,
});

export const PostFormModalAtom = atom({
  key: "PostFormModalAtom",
  default: false,
});

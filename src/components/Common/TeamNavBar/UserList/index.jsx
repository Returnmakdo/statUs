import React, { useCallback, useEffect, useState } from "react";
import { useMutation } from "react-query";
import { Link, useParams } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { queryClient } from "../../../..";
import { editGroupUserState } from "../../../../apis/groupUserApi";
import ArrowSvg from "../../../../assets/svg/ArrowSvg";
import PlusSvg from "../../../../assets/svg/PlusSvg";
import useSocket from "../../../../hooks/useSocket";
import { inviteModalAtom } from "../../../../recoil/modalAtoms";
import { groupUserAtom, groupUserListAtom } from "../../../../recoil/userAtoms";
import IconList from "../IconList";
import UserItem from "../UserItem";
import { AddUserBtn, ToggleUsers, UserItems, Wrapper } from "./styles";

const UserList = () => {
  const { groupId } = useParams();
  const [isFocus, setIsFocus] = useState(true);
  const [status, setStatus] = useState(0);
  const groupUser = useRecoilValue(groupUserAtom);
  const groupUserList = useRecoilValue(groupUserListAtom);
  const setIsInviteModal = useSetRecoilState(inviteModalAtom);
  //const [socket] = useSocket(groupId);

  // 나의 상태와 메시지를 변경하는 함수
  const { mutate: editStatusFn } = useMutation(editGroupUserState, {
    onSuccess: () => {
      queryClient.invalidateQueries(["groupUser", groupId]);
    },
  });

  // 유저 상태와 메시지를 바꾸는 함수
  const changeStatus = useCallback(
    async (num) => {
      if (status > 0) {
        const payload = {
          id: groupId,
          body: { status: 0, statusMessage: null },
        };
        editStatusFn(payload);
      }
      setStatus((prev) => (prev === 0 ? num : 0));
    },
    [status, groupId, editStatusFn]
  );

  // 마운트 되었을 때 나의 상태와 메시지를 저장하는 함수
  useEffect(() => {
    if (groupUser) {
      setStatus(groupUser.status);
    }
  }, [groupUser]);

  // useEffect(() => {
  //   socket?.on("onlineList", (data) => {});
  //   return () => {
  //     socket.off("onlineList");
  //   };
  // }, [socket]);

  return (
    <Wrapper>
      <ToggleUsers onClick={() => setIsFocus((prev) => !prev)}>
        <span>
          <ArrowSvg isActive={isFocus} />
        </span>
        <strong>다이렉트 메세지</strong>
      </ToggleUsers>
      {groupUser && (
        <UserItems>
          <UserItem user={groupUser} isMe={true} status={status} />
          <IconList
            user={groupUser}
            changeStatus={changeStatus}
            status={status}
            groupId={groupId}
            editStatusFn={editStatusFn}
          />
          {isFocus && (
            <>
              {groupUserList &&
                groupUser &&
                groupUserList
                  .filter((user) => user.groupUserId !== groupUser.groupUserId)
                  .map((user) => (
                    <Link
                      to={`/groups/${groupId}/chats/${user.groupUserId}`}
                      key={user?.groupUserId}
                    >
                      <UserItem user={user} />
                    </Link>
                  ))}
            </>
          )}
          <AddUserBtn onClick={() => setIsInviteModal(true)}>
            <PlusSvg />
            <span>팀원 추가하기</span>
          </AddUserBtn>
        </UserItems>
      )}
    </Wrapper>
  );
};

export default UserList;
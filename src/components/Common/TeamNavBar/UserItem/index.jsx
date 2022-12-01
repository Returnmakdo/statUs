import React, { useState } from "react";

import { getIcon } from "../../../../utils/getIcon";
import { handleImgError } from "../../../../utils/handleImgError";
import { Icon, UserContainer, UserImg, UserStatusModal } from "./styles";

const UserItem = ({ user, isMe = false, status }) => {
  const [isHover, setIsHover] = useState(false);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  const onHover = (e) => {
    setMouseX(e.pageX);
    setMouseY(e.pageY);
    setIsHover(true);
  };
  const onLeave = () => {
    setIsHover(false);
  };

  return (
    <>
      <UserContainer onMouseEnter={onHover} onMouseLeave={onLeave}>
        <UserImg>
          <img
            src={user.groupAvatarImg}
            alt={user.groupUserNickname}
            onError={handleImgError}
          />
          {user?.isLoggedIn ? <div /> : null}
        </UserImg>
        <span>
          {user.groupUserNickname}
          {isMe && <strong>나</strong>}
        </span>
        <Icon>{getIcon(isMe ? status : user?.status)}</Icon>
        {isHover && user?.statusMessage && (
          <UserStatusModal style={{ left: mouseX + 20, top: mouseY - 20 }}>
            {user?.statusMessage}
          </UserStatusModal>
        )}
      </UserContainer>
    </>
  );
};

export default UserItem;
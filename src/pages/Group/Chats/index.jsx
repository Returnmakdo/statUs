import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Scrollbars from "react-custom-scrollbars-2";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import ChatBox from "../../../components/Chats/ChatBox";
import ChatForm from "../../../components/Chats/ChatForm";
import useSocket from "../../../hooks/useSocket";
import { groupUserAtom } from "../../../recoil/userAtoms";
import { FlexCenterBox } from "../../../shared/Styles/flex";
import { handleImgError } from "../../../utils/handleImgError";
import makeSection from "../../../utils/makeSection";
import { chatUserAtom } from "../../../recoil/userAtoms";
import { useChatApis } from "../../../apis/chatApis";
//import { groupAtom } from "../../../recoil/groupAtoms";
//import { queryClient } from "../../..";

const Chat = () => {
  const { groupId, roomId } = useParams();
  const [chats, setChats] = useState([]);
  const otherUser = useRecoilValue(chatUserAtom);
  const me = useRecoilValue(groupUserAtom);
  //const group = useRecoilValue(groupAtom);
  const scrollRef = useRef(null);
  //const navigate = useNavigate();
  const [socket] = useSocket(groupId);
  const [pages, setPages] = useState(0);

  const {
    data: chatsData,
    fetchNextPage,
    hasNextPage,
  } = useChatApis.ReadChats(roomId);

  // 채팅방에 데이터가 없는지 확인 (없으면 true)
  const isEmpty = useMemo(() => chats && chats[0]?.length === 0, [chats]);

  // 스크롤을 올려도 가져올 데이터가 없다면 true
  const isReachingEnd = useMemo(
    () => isEmpty || (chats && chats[chats.length - 1]?.length < 15) || false,
    [chats, isEmpty]
  );

  // 채팅 날짜별로 데이터를 묶어주는 함수
  const chatSections = useMemo(() => {
    if (!chats) return;
    return makeSection(chats ? chats.flat().reverse() : []);
  }, [chats]);

  // 스크롤 이벤트  ( 스크롤이 가장 위로 도달하였을 때 데이터를 불러오는 함수 )
  const onScroll = useCallback(
    (values) => {
      if (values.scrollTop === 0 && !isReachingEnd && hasNextPage) {
        fetchNextPage();
        setPages((prev) => prev + 1);
        //   setSize((prevSize) => prevSize + 1).then(() => {
        //     // 스크롤 위치 유지
        //     const current = scrollRef?.current;
        //     if (current) {
        //       current.scrollTop(current.getScrollHeight() - values.scrollHeight);
        //     }
      }
    },
    [isReachingEnd, fetchNextPage, hasNextPage]
  );

  // useEffect(() => {
  //   const current = scrollRef?.current;
  //   if (current) {
  //     console.log(current.getScrollHeight());
  //     console.log(values.scrollHeight);
  //     current.scrollTop(current.getScrollHeight() - values.scrollHeight);
  //   }
  // });

  // 채팅방에 처음 입장했을 때 스크롤 밑으로 보내기
  useEffect(() => {
    setTimeout(() => {
      scrollRef.current?.scrollToBottom();
    }, 100);
  }, []);

  // 채팅방에 입장했을 때 소켓으로 입장 이벤트 보내기
  useEffect(() => {
    if (roomId && me) {
      socket.emit("joinRoom", { roomId, groupUserId: me?.groupUserId });
    }
  }, [groupId, socket, roomId, me]);

  // 채팅방에 입장했을 때 시간 저장
  useEffect(() => {
    localStorage.setItem(
      `${groupId}-${me?.groupUserId}-${otherUser?.groupUserId}`,
      //new Date()
      new Date().getTime().toString()
    );
  }, [groupId, roomId, me, otherUser]);

  // 스크롤을 올릴 때 state에 데이터 추가 (무한스크롤)
  useEffect(() => {
    if (
      chatsData &&
      chatsData.pages.length > 0 &&
      chatsData?.pages[pages]?.data
    )
      setChats((prev) => [...prev, chatsData?.pages[pages]?.data]);
  }, [chatsData, pages]);

  // 메세지를 받을 때 마다 실행
  useEffect(() => {
    socket.on("message", (data) => {
      // 채팅방 접속 시간 갱신
      localStorage.setItem(
        `${groupId}-${me?.groupUserId}-${otherUser?.groupUserId}`,
        new Date().getTime().toString()
      );
      // 내가 보낸 메시지가 아니라면 state에 추가
      if (data.groupUserId !== me?.groupUserId) {
        setChats((prev) => [data, ...prev]);
      }
    });
  }, [socket, groupId, me, otherUser]);

  // 채팅방을 나갔을 때 실행 소켓의 이벤트에 대한 연결을 off
  useEffect(() => {
    return () => {
      // socket.emit("leaveRoom", { roomId, groupUserId: me.groupUserId + "" });
      // socket.off("leaveRoom");
      socket.off("message");
      socket.off("joinRoom");
    };
  }, [socket, me, roomId]);

  return (
    <Wrapper as="main">
      <Header>
        <img
          src={otherUser?.groupAvatarImg}
          alt={otherUser?.groupUserNickname}
          onError={handleImgError}
        />
        <h3>{otherUser?.groupUserNickname}</h3>
      </Header>
      <ChatList>
        <Scrollbars autoHide ref={scrollRef} onScrollFrame={onScroll}>
          {chatSections &&
            Object.entries(chatSections)?.map(([date, chats]) => {
              return (
                <DaySection key={date}>
                  <DayHeader>
                    <button>{date}</button>
                  </DayHeader>
                  {chats?.map((chat, idx) => (
                    <ChatBox
                      key={chat?.message + idx}
                      isMe={chat?.groupUserId === me?.groupUserId}
                      otherUser={otherUser}
                      chat={chat}
                    />
                  ))}
                </DaySection>
              );
            })}
        </Scrollbars>
      </ChatList>
      <ChatForm
        setChats={setChats}
        groupUserId={me?.groupUserId}
        otherUserId={otherUser?.groupUserId}
        roomId={roomId}
        groupId={groupId}
        scrollRef={scrollRef}
      />
    </Wrapper>
  );
};

export default Chat;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.boardColor.white};
`;
export const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.color.white};
  padding: 0.5rem 1rem;
  img {
    width: 2.4rem;
    height: 2.4rem;
    margin-right: 8px;
    object-fit: cover;
    border-radius: 50%;
  }
  h3 {
    font-weight: 500;
    font-size: 1.1rem;
  }
`;
export const ChatList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.boardColor.yellowGray};
  height: 100%;
  //padding: 3rem 0 0.7rem 0;
`;

export const DaySection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 28px;
  margin-top: 3rem;
`;

export const DayHeader = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  width: 100%;
  //position: sticky;
  top: 14px;
  border-top: 1px solid ${(props) => props.theme.color.gray};
  & button {
    ${FlexCenterBox};
    position: relative;
    top: -15px;
    z-index: 2;
    height: 28px;
    padding: 10px;
    color: ${(props) => props.theme.color.gray};
    font-size: 14px;
    line-height: 27px;
    background: ${(props) => props.theme.boardColor.yellowGray};
    border: 1px solid ${(props) => props.theme.color.gray};
    border-radius: 24px;
    outline: none;
  }
`;

// useEffect(() => {
//   (async () => await queryClient.invalidateQueries(["group", groupId]))();
//   if (group && !group.roomIds.includes(+roomId)) {
//     navigate(-1);
//   }
// }, [group, roomId, navigate, groupId]);

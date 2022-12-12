# GitHub ReadMe

---

# 항해 99 9기 4조 실전 프로젝트 - Status!

![브로셔](https://user-images.githubusercontent.com/86880916/206968459-29afd585-0182-40a0-baeb-624c45adce27.png)

---

### 📖 프로젝트 소개

> [statUs] 원활한 팀 업무와 팀 내 커뮤니케이션을 도와주는 서비스
>
> 팀의 일정을 확인한다!
> 누가 어떤 일정이 있는지 확인한다!
> 팀원이 어떤 상태인지 보여준다!

---

### 🗓️ 프로젝트 운영 기간

- 개발 기간: 2022년 11월 11일 ~ 2022년 12월 16일
- 운영 기간: 2022년 12월 07일 ~ 2022년 12월 15일

---

### 👥 프론트엔드 팀원 소개

👨🏻‍💻 한세준: [https://github.com/hansejun](https://github.com/hansejun)

👨🏻‍💻 안치영: [https://github.com/Returnmakdo](https://github.com/Returnmakdo)

---

### 💚 **주요 기능**

- ## **회원가입 및 로그인** <br>

  - 이메일 인증을 통한 회원가입
  - 카카오 로그인을 통한 간편한 회원가입 및 로그인 기능
  - 로그인 시 가장 최근에 접속한 그룹 페이지로 이동

- **캘린더 및 상태등록** <br>

  - 상태에 대한 색상을 등록하여 일정 작성 ex) 휴가중, 연차, 출장 등...
  - 작성한 회원이 아닐 시 수정 불가
  - 드래그앤드롭을 통한 일정 수정
    <br><br>
    <img src="https://user-images.githubusercontent.com/86880916/207003947-b7e3d38b-98ba-454d-ab3d-c4145e578d81.gif" width="80%"  >

- **게시판** <br>

  - 자유게시판과 공지게시판으로 나누어 보여줌
  - 자유게시판에 게시글을 등록하여 공지게시판으로 이동 가능
  - 좋아요 및 댓글 작성 가능
  - 작성한 글은 요약된 정보로 보여지며 클릭을 통해 상세 게시글 모달을 확인 가능
  - 상세 게시글 모달에서는 게시글에 대한 전체 정보가 보여지며 이미지 클릭을 통해 상세 이미지를 슬라이드로 확인 가능
    <br><br>
    <img src="https://user-images.githubusercontent.com/86880916/207004487-dbe8b405-36b8-437f-ba31-df96dc546937.gif" width="80%"  >
    <img src="https://user-images.githubusercontent.com/86880916/207005646-dbc2c0b1-abec-4179-a933-da0be2b7872f.gif" width="80%">

- **그룹 회원 상태** <br>

  - 속한 그룹내에서 상태메시지와 상태 아이콘 등록 가능
  - 상태 아이콘은 유저의 오른쪽에 표시되며 마우스를 올려놓을 시에 해당 유저의 상태 메시지 확인 가능
  - 해당 그룹의 접속하고 있는 유저들을 실시간으로 표시
    <br><br>
    <img src="https://user-images.githubusercontent.com/86880916/207005834-2d2914be-6813-4d06-94c4-602e509f5e04.gif" width="80%">

- **그룹 생성 및 초대** <br>

  - 그룹에서 유저 초대 가능
  - 오른쪽 상단의 알림 아이콘을 클릭하면 받은 초대 목록을 보여줌
  - 초대 수락시에 해당 그룹으로 이동
    <br><br>
    <img src="https://user-images.githubusercontent.com/86880916/207005907-78edce7f-c10e-433b-a574-59eb99db9de8.gif" width="80%">
    <img src="https://user-images.githubusercontent.com/86880916/207006002-e4cf1c35-322a-4fad-9988-321a5325b688.gif" width="80%">

- **실시간 채팅** <br>
  - 그룹내의 유저와 실시간 1대1 채팅
  - 상대방이 메시지를 읽지 않았을 경우 상대방의 화면에서 읽지 않은 메시지 수 표시
    <br><br>
    <img src="https://user-images.githubusercontent.com/86880916/207006068-77bb8920-8ed6-4149-8635-363c3fc25d6e.gif" width="80%">

---

### ✅ **담당 작업**

👷🏻‍♂️ 한세준

- 레이아웃: 레이아웃, 글로벌 스타일, 애니메이션 효과
- 그룹 구현: 그룹 생성/수정/삭제, 그룹 초대
- 그룹 유저 : 상태 메시지 및 상태 아이콘, 프로필 변경
- 소켓 : 실시간 채팅 / 안읽은 메시지 알림 / 실시간 접속 유저 표시
- 필요한 util 함수 제작 : token 디코드, 쿠키 여부, 시간 관련 함수

👷🏻‍♂️ 안치영

- 로그인, 회원가입 : 유효성 검증, 이메일을 통한 인증 확인, 소셜로그인
- 캘린더 구현 : 상태 생성/수정/삭제, 일정 생성/수정/삭제, 드래그앤드롭
- 게시판 구현 : 게시글 생성/수정/삭제, 댓글 생성/수정/삭제, 좋아요. 상세페이지, 상세 이미지, 이미지 슬라이드
- 예외처리 : 예외에 대한 alert 작업
- 배포 : Vercel을 통한 배포

---

### 💬 기술적 의사결정

<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=black"/>&nbsp;
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black"/>&nbsp;
<img src="https://img.shields.io/badge/styled-components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"/>&nbsp;
<img src="https://img.shields.io/badge/-react--query-red?style=for-the-badge&logo=React Query&logoColor=white">&nbsp;
<img src="https://img.shields.io/badge/-Recoil-blueviolet?style=for-the-badge&logo=Recoil&logoColor=white">
<br>

<img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white"/>&nbsp;
<img src="https://img.shields.io/badge/Socket.io-010101?style=for-the-badge&logo=Socket.io&logoColor=white"/>&nbsp;
<img src="https://img.shields.io/badge/-Vercel-black?style=for-the-badge&logo=vercel&logoColor=white">

| 사용 기술           | 기술 결정 이유                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Socket.io`         | webSocket의 경우 브라우저 별로 지원 버전이 다르거나 지원하지 않는 경우도 있어서 일관된 서비스를 제공하기 위해서 socket.io를 적용하였습니다.                                                                                                                                                                                                                                                                                                                 |
| `React-Query`       | 서버 데이터를 캐싱하고 데이터 패칭 시, 로딩 및 에러처리가 쉽게 가능하고 별도의 설정없이 즉시 사용이 가능하며, 여러번의 요청이 있을 시 중복을 제거해주는 등의 기능을 가지고 있습니다.<br><br>장점으로는 데이터가 오래되었다고 판단하면 자동으로 데이터를 최신화하며, 비동기 과정을 선언적으로 관리할 수 있고, 추가적으로 Redux-Thunk를 사용할 시 불필요한 BoilerPlate코드가 반복되는 것에 비해 불필요한 코드가 매우줄기 때문에 React-Query를 선택하였습니다. |
| `Recoil`            | 상태 관리 라이브러리로 React의 useState 훅과 비슷하게 동작하여 직관적이면서 간단한 구조를 가지고 있습니다.<br><br> 대규모 상태를 관리해야하는 프로젝트라면 redux를 사용하는 것이 적합하다는 생각이 들지만 현재 프로젝트 규모에서는 대규모 데이터를 다루는 것도 아니고, Redux에 비해 상대적으로 적은 코드를 사용하는 recoil을 선택하였습니다.                                                                                                                |
| `Axios`             | response timeout (fetch에는 없는 기능) 처리 방법이 존재<br>Promise 기반으로 만들어졌기 때문에 데이터를 다루기 편리합니다.<br>브라우저 호환이 fetch보다 뛰어나기 때문에 웹 앱을 염두한 곰곰 서비스에 적합하다고 생각했습니다.                                                                                                                                                                                                                                |
| `Styled components` | CSS를 컴포넌트 단위로 쪼갤수 있어 사용 빈도가 높은 CSS를 재사용할 수 있고, CSS SCSS와 달리 전역적인 관리를 하지 않아도 되기 때문에 유지 보수에 용이하다는 장점때문에 선택하였습니다.                                                                                                                                                                                                                                                                        |
| `Vercel`            | FrontEnd 호스팅 사이트로서 복잡한 절차없이 GitHub 레포지토리를 이용하여 빠른 배포가 가능 하다는 장점이 있어 선택하였습니다.                                                                                                                                                                                                                                                                                                                                 |

---

### ❌ 트러블 슈팅

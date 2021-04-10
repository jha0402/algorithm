// 5. 채팅서버에 사용되는 객체를 작성하세요.

// 요구사항

// - 객체는 최소 사용자,대화방, 방장이 존재 하여야 합니다.

// - 사용자는 각 방에 1개만 참여할 수 있으며 각 방을 개설한 사용자는 방장이 된다.

// -  방장은 방을 공개하거나 비공개 할수 있으며 비공개 방은 비밀번호를 입력해야만 입장이 가능하다.

// -  사용자는 대화방을 개설/종료 또는 참여/나가기를 할수 있어야 한다.

// -  방장은 사용자들을 내보내거나 대화를 못하게 할수 있다.

//유저
{
	users: [{ userId: number, name: string, password: string, email: string }];
}

//방장
{
	masterUsers: [{ masterUserId: number, userId: number, chatroomId: number }];
}

// 유저 대화방 조인 테이블, 유저 내보내기, 대화 못하게 하기 기능, 대화방 종료 시 delete whole data, 대화방 나가기 시 해당 userId delete
{
	usersChatroomsJoin: [
		{
			userChatroomId: number,
			userId: [number],
			chatroomId: number,
			mutedUsers: [number],
			kickedUsers: [number],
		},
	];
}

//대화방, 비공개 설정 가능
{
	chatrooms: [{ chatroomId: number, isPrivate: string || null }];
}

//메세지
{
	messages: [
		{ messageId: number, userId: number, chatroomId: number, text: string },
	];
}

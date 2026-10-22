// 더덕생채 학원식 실기연습 — 대사 데이터 (_build/items.py에서 생성, 손으로 고치지 말 것)
window.ITEM={"name": "더덕생채", "time": 20};
window.SRC={"C04": {"t": "「더덕생채」 문제지 수험자 유의사항 1)", "k": "off"}, "C21": {"t": "「더덕생채」 문제지 수험자 유의사항 7)", "k": "off"}, "E00": {"t": "「더덕생채」 문제지 시험시간", "k": "off"}, "E01": {"t": "큐넷 한식조리기능사 2026 공개과제 「더덕생채」 요구사항 가", "k": "off"}, "E02": {"t": "큐넷 한식조리기능사 2026 공개과제 「더덕생채」 요구사항 나", "k": "off"}, "G04": {"t": "큐넷 위생 세부기준 9 손/손톱 (일부 감점)", "k": "off"}, "G08": {"t": "큐넷 위생 세부기준 11 부정 방지 (조리기구에 성명 등: 전체 0점)", "k": "off"}, "G13": {"t": "큐넷 위생 세부기준 6 위생화 (일부 감점)", "k": "off"}, "H08": {"t": "현장 기억(잡랩 소장, 약 5년 전): 한 번 내면 끝", "k": "field"}, "S_Y95": {"t": "청춘23 블로그 한식조리기능사 연습 후기 · https://young23.linkwe.kr/95 (조회 2026-10-23)", "k": "zop"}, "U01": {"t": "맛보기 위반: 감점될 수 있음 (점수 공개 자료 없음)", "k": "none"}, "U05": {"t": "접시 정리 상태: 감점될 수 있음 (점수 공개 자료 없음)", "k": "none"}, "Z01": {"t": "ZOP LAB 연습 순서: 더덕생채", "k": "zop"}, "Z02": {"t": "ZOP LAB 팁: 더덕생채 흔한 실수", "k": "zop"}, "Z22": {"t": "ZOP LAB 팁: 제출 전 확인 순서", "k": "zop"}};
window.SCENES=[
{
"id": "0",
"part": "실습 전, 학원 휴게 공간",
"title": "노트 복습",
"type": "talk",
"bgDim": true,
"screen": "학원 휴게 공간. 조피가 노트를 펼쳐 놓고 있다. 노트에는 \"더덕생채 20분\"이라고 크게 적혀 있다.",
"svg": "<rect x=\"16\" y=\"8\" width=\"88\" height=\"62\" rx=\"4\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"34\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"14\" fill=\"#1f2a24\">더덕생채 20분</text><text x=\"60\" y=\"54\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"11\" fill=\"#b6533a\">두들겨 찢기</text>",
"lines": [
[
"z",
"(중얼중얼) 더덕생채… 20분. 두들겨 찢기.",
"thinking"
],
[
"t",
"조피 씨, 오늘도 학원식 실기연습이에요. 시험처럼 해 보고, 끝나면 같이 봐요. 틀려도 괜찮아요. 연습은 틀리라고 있는 거예요.",
"smile"
],
[
"t",
"'문제지'는 큐넷(국가자격시험 안내 사이트)이 미리 공개해 둔 문제지예요. 제가 \"문제지한테 물어볼까요?\" 하면 거기 적힌 문장을 같이 본다는 뜻이에요.",
"show"
],
[
"n",
"당신은 선생님 옆에서 같이 보는 '체크 눈'이에요. 고칠 점이 보이면 「이의 있음!」, 괜찮으면 「괜찮아요」."
]
],
"src": [
"E00",
"E01"
]
},
{
"id": "G08",
"part": "시작 전",
"title": "칼에 이름표",
"type": "judge",
"fix": true,
"screen": "조피 칼 손잡이에 이름 스티커가 붙어 있다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">칼에 이름표</text>",
"setup": [
[
"z",
"잃어버릴까 봐 붙였어요.",
"neutral"
]
],
"explain": [
[
"t",
"위생 세부기준 부정 방지 항목에 조리기구에 소속이나 성명이 있으면 전체 0점으로 적혀 있어요. 복장은 테이프로 가릴 수 있지만 조리도구는 테이프로 가리는 것도 안 된다고 적혀 있어요.",
"show"
]
],
"src": [
"G08"
],
"retry": "조피가 집에서 스티커를 떼어 오기로 노트에 적는다."
},
{
"id": "G13",
"part": "시작 전",
"title": "편한 슬리퍼",
"type": "judge",
"fix": true,
"screen": "조피가 뒤꿈치가 뚫린 슬리퍼를 신고 있다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">편한 슬리퍼</text>",
"setup": [
[
"z",
"오래 서 있으니까 편한 게 최고죠.",
"happy"
]
],
"explain": [
[
"t",
"편한 것도 안전 안에서요. 위생 세부기준에 위생화는 굽이 높지 않고 발가락·발등·발뒤꿈치가 덮여야 하며, 부적합하면 일부 감점으로 적혀 있어요.",
"show"
]
],
"src": [
"G13"
],
"retry": "조피가 운동화 형태의 작업화로 갈아 신는다."
},
{
"id": "M01",
"part": "공개 후기 실수",
"title": "고추장 넣기",
"type": "judge",
"fix": true,
"screen": "조피가 더덕생채 양념에 고추장을 넣으려 한다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">고추장 넣기</text>",
"setup": [
[
"z",
"급하니까 일단 이렇게!",
"oops"
]
],
"explain": [
[
"t",
"더덕생채 양념엔 고추장이 안 들어간다는 메모가 있어요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Y95"
],
"retry": "조피가 메모대로 다시 한다.",
"startTimer": true
},
{
"id": "M02",
"part": "공개 후기 실수",
"title": "고춧가루 한꺼번에",
"type": "judge",
"fix": true,
"screen": "조피가 고춧가루를 양념에 섞어 한 번에 버무린다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">고춧가루 한꺼번에</text>",
"setup": [
[
"z",
"어… 이렇게 하면 되는 거죠?",
"oops"
]
],
"explain": [
[
"t",
"물들이기를 따로 안 해서 고춧가루 덩어리가 보인다고 지적받은 후기가 있어요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Y95"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "M03",
"part": "공개 후기 실수",
"title": "세게 두드리기",
"type": "judge",
"fix": true,
"screen": "조피가 밀대로 더덕을 쾅쾅 내리친다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">세게 두드리기</text>",
"setup": [
[
"z",
"이 정도면 괜찮겠죠?",
"oops"
]
],
"explain": [
[
"t",
"살살 두드리거나 밀어야 부서지지 않는다는 팁이에요. 부서지면 길이가 짧아져요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Y95"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "S1",
"part": "조리 1",
"title": "칼로 채",
"type": "judge",
"fix": true,
"screen": "조피가 더덕을 칼로 곱게 채 썰고 있다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">더덕생채</text><text x=\"60\" y=\"50\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">칼로 채</text>",
"setup": [
[
"z",
"칼질 연습도 되고 좋잖아요.",
"happy"
]
],
"explain": [
[
"t",
"칼질은 다른 품목에서 해요. 문제지에 \"더덕은 5cm로 썰어 두들겨 편 후 찢어서 쓴맛을 제거\"하라고 적혀 있어요.",
"show"
]
],
"src": [
"E01"
],
"retry": "조피가 방망이로 더덕을 두들겨 편 뒤 가늘게 찢는다."
},
{
"id": "M04",
"part": "공개 후기 실수",
"title": "덜 절이기",
"type": "judge",
"fix": true,
"screen": "조피가 더덕을 소금물에 잠깐만 담갔다 뺀다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">덜 절이기</text>",
"setup": [
[
"z",
"시간 아끼려고요!",
"oops"
]
],
"explain": [
[
"t",
"쪼개서 소금물에 잘 절여야 부서지지 않고 찢어진다는 메모가 있어요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Y95"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "M05",
"part": "공개 후기 실수",
"title": "굵게 찢기",
"type": "judge",
"fix": true,
"screen": "조피가 더덕을 손으로 굵직하게 찢는다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">굵게 찢기</text>",
"setup": [
[
"z",
"다들 이렇게 하지 않나요?",
"oops"
]
],
"explain": [
[
"t",
"꼬치로 가늘게, 보슬보슬한 느낌으로 찢으라는 메모가 있어요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Y95"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "M06",
"part": "공개 후기 실수",
"title": "물기 그대로 밀기",
"type": "judge",
"fix": true,
"screen": "조피가 절인 더덕을 물기째 밀대로 민다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">물기 그대로 밀기</text>",
"setup": [
[
"z",
"손에 익은 대로 할게요.",
"oops"
]
],
"explain": [
[
"t",
"건져서 물기를 빼고 면포 위에서 밀라는 메모가 있어요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Y95"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "S2",
"part": "조리 2",
"title": "쓴맛 그냥",
"type": "judge",
"fix": true,
"screen": "조피가 찢은 더덕을 바로 양념에 넣는다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">더덕생채</text><text x=\"60\" y=\"50\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">쓴맛 그냥</text>",
"setup": [
[
"z",
"더덕 향이 좋아서요.",
"neutral"
]
],
"explain": [
[
"t",
"향은 남기고 쓴맛은 빼요. 같은 문장에 쓴맛을 제거하라고 적혀 있어요. 우리 학원식 팁: 소금물에 담갔다가 물기를 빼요. 공식 아님이에요.",
"show",
"zop"
]
],
"src": [
"E01",
"Z01"
],
"retry": "조피가 더덕을 소금물에 담갔다가 물기를 뺀다."
},
{
"id": "M07",
"part": "공개 후기 실수",
"title": "체 안 친 고춧가루",
"type": "judge",
"fix": true,
"screen": "조피가 고춧가루를 그대로 쓴다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">체 안 친 고춧가</text><text x=\"60\" y=\"50\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">루</text>",
"setup": [
[
"z",
"급하니까 일단 이렇게!",
"oops"
]
],
"explain": [
[
"t",
"고춧가루는 체에 내려 고운 가루로 쓰라는 메모가 있어요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Y95"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "M08",
"part": "공개 후기 실수",
"title": "미리 버무림",
"type": "judge",
"fix": true,
"screen": "조피가 일찍 양념을 다 버무려 둔다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">미리 버무림</text>",
"setup": [
[
"z",
"어… 이렇게 하면 되는 거죠?",
"oops"
]
],
"explain": [
[
"t",
"제출 직전에 버무리라는 팁이에요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Y95"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "M09",
"part": "공개 후기 실수",
"title": "납작 담기",
"type": "judge",
"fix": true,
"screen": "조피가 접시에 넓게 펴 담는다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">납작 담기</text>",
"setup": [
[
"z",
"이 정도면 괜찮겠죠?",
"oops"
]
],
"explain": [
[
"t",
"위로 높게 쌓아 담으라는 메모가 있어요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Y95"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "S3",
"part": "조리 3",
"title": "양념 얼룩",
"type": "judge",
"fix": true,
"screen": "양념이 한쪽에 뭉쳐 더덕 색이 얼룩덜룩하다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">더덕생채</text><text x=\"60\" y=\"50\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">양념 얼룩</text>",
"setup": [
[
"z",
"얼룩도 개성…",
"oops"
]
],
"explain": [
[
"t",
"개성보다 고른 색이에요. 우리 학원식 팁: 고춧가루로 먼저 버무려 색을 들이고 나머지 양념을 넣어요. 그리고 \"고춧가루로 양념하고, 전량 제출\"이에요.",
"show",
"zop"
]
],
"src": [
"Z02",
"E02"
],
"retry": "조피가 고춧가루로 먼저 버무리고 전량 담는다."
},
{
"id": "R1",
"part": "요구사항 확인",
"title": "요구사항 가 확인",
"type": "judge",
"fix": false,
"screen": "조피가 손을 멈추고 문제지 요구사항 가를 다시 짚는다: \"더덕은 5cm로 썰어 두들겨 편 후 찢어서 쓴맛을 제거…\"",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">요구사항 가 확인</text>",
"setup": [
[
"z",
"여기까지 문제지랑 맞는지 볼게요.",
"thinking"
]
],
"explain": [
[
"t",
"좋아요! 쉬운 말로 하면 짧은 발췌 · 전체 문장은 큐넷 원문. 중간중간 문제지와 맞춰 보는 습관이 제일 든든해요. 전체 문장은 큐넷 원문으로 확인해요.",
"smile"
]
],
"src": [
"E01"
]
},
{
"id": "R2",
"part": "요구사항 확인",
"title": "요구사항 나 확인",
"type": "judge",
"fix": false,
"screen": "조피가 손을 멈추고 문제지 요구사항 나를 다시 짚는다: \"고춧가루로 양념하고, 전량 제출…\"",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">요구사항 나 확인</text>",
"setup": [
[
"z",
"여기까지 문제지랑 맞는지 볼게요.",
"thinking"
]
],
"explain": [
[
"t",
"좋아요! 쉬운 말로 하면 짧은 발췌 · 전체 문장은 큐넷 원문. 중간중간 문제지와 맞춰 보는 습관이 제일 든든해요. 전체 문장은 큐넷 원문으로 확인해요.",
"smile"
]
],
"src": [
"E02"
]
},
{
"id": "G04",
"part": "조리 중",
"title": "손가락 밴드",
"type": "judge",
"fix": false,
"screen": "조피 손가락에 작은 상처가 있어 밴드를 붙이고 위생장갑을 꼈다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">손가락 밴드</text>",
"setup": [
[
"z",
"상처는 가려야죠.",
"thinking"
]
],
"explain": [
[
"t",
"좋아요! 위생 세부기준에 상처가 있으면 밴드, 위생장갑 착용 등 적합한 조치를 하라고 적혀 있어요. 손톱은 짧게, 매니큐어는 안 돼요.",
"smile"
]
],
"src": [
"G04"
]
},
{
"id": "S4",
"part": "조리 4 · 간",
"title": "살짝 맛만",
"type": "judge",
"fix": true,
"screen": "조피가 양념을 숟가락으로 떠서 입으로 가져간다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">양념 한 숟갈</text><text x=\"60\" y=\"50\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">맛보기?</text>",
"setup": [
[
"z",
"간이 맞나 살짝만…",
"thinking"
]
],
"explain": [
[
"t",
"숟가락 내려놓아요! 문제지 유의사항에 위생과 숙련된 기능평가를 위해 조리 작업 시 맛을 보지 않는다고 적혀 있어요.",
"show"
],
[
"t",
"얼마나 깎이는지는 공개되지 않았어요. 집에서 계량으로 간을 익혀 두는 연습을 해요.",
"smile"
]
],
"retry": "조피가 숟가락을 내려놓고 양념 양을 눈으로 확인한다.",
"src": [
"C04",
"U01"
]
},
{
"id": "SZ",
"part": "제출 전",
"title": "내기 전에 멈추기",
"type": "judge",
"fix": true,
"stopTimer": true,
"screen": "접시에 다 담았다. 그런데 접시 가장자리에 양념 자국이 묻어 있다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">더덕생채</text><text x=\"60\" y=\"50\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">완성</text>",
"setup": [
[
"z",
"다 됐어요! 바로 보여 드릴게요.",
"happy"
]
],
"explain": [
[
"t",
"잠깐만요, 접시 가장자리에 양념이 소풍 나왔네요. 학원에선 제가 보고 돌려줄 수 있어요. 그런데 시험 보고 온 사람들 얘기로는 실제 시험에선 한 번 내면 끝이래요.",
"wait",
"field"
],
[
"t",
"그래서 내기 전에 딱 멈추고 세 가지만 봐요.\n① 5cm, 두들겨 찢기\n② 쓴맛 제거\n③ 고춧가루 양념, 전량",
"show"
],
[
"t",
"문제지에 '작품의 평가'(완성된 음식의 모습을 보는 항목)가 15점이라고 적혀 있어요. 접시가 지저분하면 얼마나 깎이는지는 공개되지 않았어요. 이 세 가지 순서는 우리 학원식 팁이에요.",
"smile",
"zop"
]
],
"retry": "조피가 위생타올로 접시 가장자리를 닦고, 하나씩 손가락으로 세어 본다. \"…이제 진짜 드릴게요.\"",
"src": [
"H08",
"E01",
"C21",
"U05",
"Z22"
]
}
];
window.FEEDBACK={"intro": "자, 오늘 더덕생채 연습 돌아볼게요.", "good": ["찢는 방법으로 바꿨어요.", "쓴맛을 뺐어요.", "색을 고르게 들였어요."], "fix": ["더덕생채는 찢기.", "소금물 담그기.", "고춧가루 먼저."], "zopi": "더덕 두들기니까 스트레스가 풀려요.", "teacher": "세게 말고 고르게요! 오늘 결 예쁘게 찢었어요.", "closing": "이 연습은 학원식 연습일 뿐 공식 채점이 아닙니다. 실제 기준은 큐넷 공개과제와 시험장 안내를 따르세요.", "small": "한국산업인력공단과 관계없습니다. 조리 순서와 팁은 ZOP LAB 연습용이고, 현장 이야기는 개인 경험(약 5년 전)이라 공식이 아닙니다. 공개과제 원문: 큐넷 → 자료실 → 공개문제 「한식조리기능사」.", "plan": "① 껍질 벗겨 5cm 로 자르고 반 가르기. → ② 방망이로 두드려 편 뒤 가늘게 찢기. → ③ 소금물에 담갔다가 물기 제거. → ④ 고춧가루로 먼저 버무리고 설탕·식초·소금·파·마늘·깨로 양념. → ⑤ 전량 담기."};

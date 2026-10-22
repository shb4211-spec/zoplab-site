// 콩나물밥 학원식 실기연습 — 대사 데이터 (_build/items.py에서 생성, 손으로 고치지 말 것)
window.ITEM={"name": "콩나물밥", "time": 30};
window.SRC={"C04": {"t": "「콩나물밥」 문제지 수험자 유의사항 1)", "k": "off"}, "C21": {"t": "「콩나물밥」 문제지 수험자 유의사항 7)", "k": "off"}, "E00": {"t": "「콩나물밥」 문제지 시험시간", "k": "off"}, "E01": {"t": "큐넷 한식조리기능사 2026 공개과제 「콩나물밥」 요구사항 가", "k": "off"}, "E02": {"t": "큐넷 한식조리기능사 2026 공개과제 「콩나물밥」 요구사항 나", "k": "off"}, "H08": {"t": "현장 기억(잡랩 소장, 약 5년 전): 한 번 내면 끝", "k": "field"}, "U01": {"t": "맛보기 위반: 감점될 수 있음 (점수 공개 자료 없음)", "k": "none"}, "U05": {"t": "접시 정리 상태: 감점될 수 있음 (점수 공개 자료 없음)", "k": "none"}, "Z01": {"t": "ZOP LAB 연습 순서: 콩나물밥", "k": "zop"}, "Z02": {"t": "ZOP LAB 팁: 콩나물밥 흔한 실수", "k": "zop"}, "Z22": {"t": "ZOP LAB 팁: 제출 전 확인 순서", "k": "zop"}};
window.SCENES=[
{
"id": "0",
"part": "실습 전, 학원 휴게 공간",
"title": "노트 복습",
"type": "talk",
"bgDim": true,
"screen": "학원 휴게 공간. 조피가 노트를 펼쳐 놓고 있다. 노트에는 \"콩나물밥 30분\"이라고 크게 적혀 있다.",
"svg": "<rect x=\"16\" y=\"8\" width=\"88\" height=\"62\" rx=\"4\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"34\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"14\" fill=\"#1f2a24\">콩나물밥 30분</text><text x=\"60\" y=\"54\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"11\" fill=\"#b6533a\">뚜껑 열지 않기</text>",
"lines": [
[
"z",
"(중얼중얼) 콩나물밥… 30분. 뚜껑 열지 않기.",
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
"당신은 선생님 옆에서 같이 보는 '체크 눈'이에요. 고칠 점이 보이면 「이의 있음!」, 괜찮으면 「괜찮아요」. (복장 체크는 북어구이 판에서 했으니 건너뛰어요.)"
]
],
"src": [
"E00",
"E01"
]
},
{
"id": "S1",
"part": "조리 1",
"title": "꼬리째 넣기",
"type": "judge",
"fix": true,
"screen": "조피가 씻은 콩나물을 꼬리째 쌀 위에 올린다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">콩나물밥</text><text x=\"60\" y=\"50\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">꼬리째 넣기</text>",
"setup": [
[
"z",
"꼬리도 콩나물인데요 뭐.",
"neutral"
]
],
"explain": [
[
"t",
"꼬리도 가족이지만 오늘은 집에 두고 와요. 문제지에 \"콩나물은 꼬리를 다듬고 소고기는 채썰어 간장양념\"을 하라고 적혀 있어요.",
"show"
]
],
"src": [
"E01"
],
"retry": "조피가 콩나물 꼬리를 하나씩 떼어 낸다.",
"startTimer": true
},
{
"id": "S2",
"part": "조리 2",
"title": "궁금해서 한 번만",
"type": "judge",
"fix": true,
"screen": "밥이 끓는 중. 조피가 뚜껑을 들어 안을 들여다본다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">콩나물밥</text><text x=\"60\" y=\"50\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">궁금해서 한 번</text>",
"setup": [
[
"z",
"잘 되고 있나 한 번만…",
"thinking"
]
],
"explain": [
[
"t",
"궁금한 마음은 알지만 뚜껑은 꾹 참아요. 우리 학원식 팁으로는 중간에 뚜껑을 자주 열면 콩나물 비린내가 남기 쉬워요.",
"show",
"zop"
],
[
"t",
"끓으면 불을 줄이고 뚜껑을 열지 않고 익힌 뒤 뜸 들여요. 공식 아님 · ZOP LAB 연습 순서예요.",
"smile",
"zop"
]
],
"src": [
"Z01",
"Z02"
],
"retry": "조피가 뚜껑을 덮고 불을 줄인 뒤 타이머만 본다."
},
{
"id": "S3",
"part": "조리 3",
"title": "예쁜 데만 한 공기",
"type": "judge",
"fix": true,
"screen": "조피가 밥을 예쁘게 한 공기만 뜨고 남은 밥은 냄비에 둔다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">콩나물밥</text><text x=\"60\" y=\"50\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">예쁜 데만 한 </text>",
"setup": [
[
"z",
"제일 잘된 부분만 드릴게요.",
"happy"
]
],
"explain": [
[
"t",
"잘된 부분만 고르는 건 반칙이에요. 문제지에 \"밥을 지어 전량 제출\"하라고 적혀 있어요. 지은 밥을 전부 내요.",
"show"
]
],
"src": [
"E02"
],
"retry": "조피가 고루 섞어 냄비 밥을 전부 담는다."
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
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">콩나물밥</text><text x=\"60\" y=\"50\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">완성</text>",
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
"그래서 내기 전에 딱 멈추고 세 가지만 봐요.\n① 콩나물 꼬리 다듬었는지\n② 고기는 채 썰어 간장양념\n③ 밥 전량 담기",
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
window.FEEDBACK={"intro": "자, 오늘 콩나물밥 연습 돌아볼게요.", "good": ["꼬리를 다듬었어요.", "뚜껑을 참았어요.", "밥을 전량 담았어요."], "fix": ["꼬리 다듬기는 씻을 때 같이.", "뚜껑은 뜸 끝날 때까지.", "전량은 냄비 바닥까지."], "zopi": "뚜껑 참는 게 제일 어려웠어요.", "teacher": "참는 것도 기술이에요. 오늘 밥처럼 잘 뜸 들였어요!", "closing": "이 연습은 학원식 연습일 뿐 공식 채점이 아닙니다. 실제 기준은 큐넷 공개과제와 시험장 안내를 따르세요.", "small": "한국산업인력공단과 관계없습니다. 조리 순서와 팁은 ZOP LAB 연습용이고, 현장 이야기는 개인 경험(약 5년 전)이라 공식이 아닙니다. 공개과제 원문: 큐넷 → 자료실 → 공개문제 「한식조리기능사」.", "plan": "① 쌀은 체에 밭쳐 물기를 뺀다. → ② 콩나물 꼬리를 떼고 씻는다. → ③ 고기 채 → 간장 양념. → ④ 냄비에 쌀 → 콩나물 → 고기 순으로 얹고 물을 붓는다. → ⑤ 끓으면 불을 줄이고, 뚜껑을 열지 않고 익힌 뒤 뜸. → ⑥ 고루 섞어 전량 담기."};

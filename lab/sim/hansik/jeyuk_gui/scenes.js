// 제육구이 학원식 실기연습 — 대사 데이터 (_build/items.py에서 생성, 손으로 고치지 말 것)
window.ITEM={"name": "제육구이", "time": 30};
window.SRC={"C03": {"t": "「제육구이」 문제지 수험자 유의사항 6)-바)", "k": "off"}, "C07": {"t": "「제육구이」 문제지 수험자 유의사항 6)-라)·사)", "k": "off"}, "C20": {"t": "큐넷 수험자 지참준비물(한식조리기능사, 2026)", "k": "off"}, "C21": {"t": "「제육구이」 문제지 수험자 유의사항 7)", "k": "off"}, "E00": {"t": "「제육구이」 문제지 시험시간", "k": "off"}, "E01": {"t": "큐넷 한식조리기능사 2026 공개과제 「제육구이」 요구사항 가", "k": "off"}, "E02": {"t": "「제육구이」 요구사항 나", "k": "off"}, "E03": {"t": "「제육구이」 요구사항 다", "k": "off"}, "H05": {"t": "현장 기억(잡랩 소장, 약 5년 전): 석쇠를 못 빌리는 경우", "k": "field"}, "H08": {"t": "현장 기억(잡랩 소장, 약 5년 전): 한 번 내면 끝", "k": "field"}, "U05": {"t": "접시 정리 상태: 감점될 수 있음 (점수 공개 자료 없음)", "k": "none"}, "Z01": {"t": "ZOP LAB 연습 순서: 제육구이", "k": "zop"}, "Z02": {"t": "ZOP LAB 팁: 제육구이 흔한 실수", "k": "zop"}, "Z22": {"t": "ZOP LAB 팁: 제출 전 확인 순서", "k": "zop"}};
window.SCENES=[
{
"id": "0",
"part": "실습 전, 학원 휴게 공간",
"title": "노트 복습",
"type": "talk",
"bgDim": true,
"screen": "학원 휴게 공간. 조피가 노트를 펼쳐 놓고 있다. 노트에는 \"제육구이 30분\"이라고 크게 적혀 있다.",
"svg": "<rect x=\"16\" y=\"8\" width=\"88\" height=\"62\" rx=\"4\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"34\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"14\" fill=\"#1f2a24\">제육구이 30분</text><text x=\"60\" y=\"54\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"11\" fill=\"#b6533a\">석쇠! 전량!</text>",
"lines": [
[
"z",
"(중얼중얼) 제육구이… 30분. 석쇠! 전량!.",
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
"E02"
]
},
{
"id": "S0",
"part": "실습 전 기물 점검",
"title": "석쇠가 없다",
"type": "judge",
"fix": true,
"screen": "조피가 가방을 연다. 칼, 도마… 석쇠 자리가 비어 있다.",
"svg": "<rect x=\"20\" y=\"16\" width=\"80\" height=\"50\" rx=\"6\" fill=\"#f3efe4\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"40\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"13\" fill=\"#1f2a24\">가방 속</text><text x=\"60\" y=\"58\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"11\" fill=\"#b6533a\">석쇠 자리가 비어 있음</text>",
"setup": [
[
"z",
"석쇠는… 옆 사람한테 빌리면 되죠, 뭐.",
"neutral"
]
],
"explain": [
[
"t",
"빌리면 된다는 건 계획이 아니라 소원이에요. 문제지한테 물어볼까요? 문제지에 석쇠로 구우라고 적혀 있어요. 그리고 요구사항의 조리기구(석쇠 등)로 만들지 않으면, 문제지 공통 유의사항에 실격 항목으로 적혀 있어요.",
"show"
],
[
"t",
"시험 보고 온 사람들 얘기로는 석쇠를 못 빌리는 경우가 많았대요. 집에서 연습할 때부터 기물 목록을 쓰고, 석쇠는 꼭 챙겨요.",
"wait",
"field"
]
],
"retry": "조피가 노트 맨 위에 \"석쇠 ✔✔✔\"라고 적는다.",
"src": [
"E02",
"C07",
"C20",
"H05"
]
},
{
"id": "S1",
"part": "조리 1 · 썰기",
"title": "조금 크게 썰기",
"type": "judge",
"fix": false,
"startTimer": true,
"screen": "조피가 돼지고기 기름과 힘줄을 정리하고, 완성 크기보다 살짝 크게 썰어 칼등으로 두드린다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">돼지고기</text><text x=\"60\" y=\"50\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">살짝 크게 썰어 두드림</text>",
"setup": [
[
"z",
"구우면 줄어드니까 살짝 크게!",
"thinking"
]
],
"explain": [
[
"t",
"좋아요! 문제지엔 '완성된' 제육이 0.4cm × 4cm × 5cm라고 적혀 있어요. 구운 뒤 크기예요. 그래서 살짝 크게 썰어 두는 건 우리 학원식 팁이에요.",
"smile",
"zop"
]
],
"src": [
"E01",
"Z01"
]
},
{
"id": "S2",
"part": "조리 2 · 불",
"title": "센 불에 양념",
"type": "judge",
"fix": true,
"screen": "양념 바른 고기를 센 불 위 석쇠에 올렸다. 연기가 나고 가장자리가 검게 변한다.",
"svg": "<rect x=\"14\" y=\"44\" width=\"92\" height=\"22\" rx=\"3\" fill=\"none\" stroke=\"#1f2a24\" stroke-width=\"3\"/><path d=\"M30,44v22M46,44v22M62,44v22M78,44v22M94,44v22\" stroke=\"#1f2a24\" stroke-width=\"1.5\"/><rect x=\"30\" y=\"38\" width=\"60\" height=\"12\" rx=\"5\" fill=\"#2b2b2b\" stroke=\"#1f2a24\" stroke-width=\"2.5\"/><text x=\"60\" y=\"26\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"13\" fill=\"#1f2a24\">지글… 까맣게</text>",
"setup": [
[
"z",
"센 불이면 빨리 끝나겠죠!",
"happy"
]
],
"explain": [
[
"t",
"고기보다 양념이 먼저 출근했어요. 문제지 공통 유의사항에 작품 특성에서 벗어날 정도로 타거나 안 익으면 실격 항목이라고 적혀 있어요.",
"show"
],
[
"t",
"우리 학원식 팁: 고추장 양념은 잘 타요. 석쇠를 달구고 기름을 바른 뒤, 약한 불에서 뒤집어 가며 구워요.",
"smile",
"zop"
]
],
"retry": "조피가 불을 줄이고 새 고기를 올려 자주 뒤집는다.",
"src": [
"C03",
"Z01",
"Z02"
]
},
{
"id": "S3",
"part": "조리 3 · 도구",
"title": "팬에 마무리",
"type": "judge",
"fix": true,
"screen": "석쇠에 고기가 붙자, 조피가 팬을 꺼내 고기를 옮긴다.",
"svg": "<circle cx=\"52\" cy=\"44\" r=\"28\" fill=\"#555\" stroke=\"#1f2a24\" stroke-width=\"3\"/><path d=\"M80,44h32\" stroke=\"#1f2a24\" stroke-width=\"7\" stroke-linecap=\"round\"/><text x=\"52\" y=\"48\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#fff\">제육</text>",
"setup": [
[
"z",
"팬이 편하니까 마무리만 팬으로…",
"neutral"
]
],
"explain": [
[
"t",
"팬은 오늘 휴가예요. 문제지에 \"고추장 양념하여 석쇠에 구우시오\"라고 적혀 있어요. 공통 유의사항엔 요구사항의 조리기구(석쇠 등)로 만들지 않으면 실격 항목이라고 적혀 있어요.",
"show"
]
],
"retry": "조피가 팬을 내려놓고 석쇠에 기름을 다시 발라 굽는다.",
"src": [
"E02",
"C07"
]
},
{
"id": "S4",
"part": "조리 4 · 담기",
"title": "예쁜 것만 담기",
"type": "judge",
"fix": true,
"screen": "조피가 잘 구워진 몇 조각만 고르고, 나머지는 따로 덜어 둔다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">예쁜 제육 몇 점</text><text x=\"60\" y=\"50\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">(나머지는 옆에)</text>",
"setup": [
[
"z",
"예쁜 애들만 무대에 올릴게요.",
"happy"
]
],
"explain": [
[
"t",
"오디션은 다음에 해요. 문제지에 \"제육구이는 전량 제출하시오\"라고 적혀 있어요. 구운 건 다 내요.",
"show"
]
],
"retry": "조피가 덜어 둔 제육도 다 접시에 담는다.",
"src": [
"E03"
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
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">제육구이</text><text x=\"60\" y=\"50\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">전량</text>",
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
"그래서 내기 전에 딱 멈추고 세 가지만 봐요.\n① 전량 담았는지\n② 속까지 익었는지, 타지 않았는지\n③ 접시 가장자리 양념 닦기",
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
"E03",
"C03",
"C21",
"U05",
"Z22"
]
}
];
window.FEEDBACK={"intro": "자, 오늘 제육구이 '눈식평' 들어갑니다.", "good": ["구우면 줄어드는 걸 생각해 살짝 크게 썰었어요.", "불을 줄이고 자주 뒤집었어요.", "전량을 다 담았어요."], "fix": ["석쇠는 기물 목록 맨 위에. 세 번 체크해요.", "고추장 양념은 약한 불. 집에서도 불 세기부터 연습해요.", "석쇠에 기름 바르기를 순서에 넣어요."], "zopi": "불은 약하게, 마음은 강하게!", "teacher": "좋은 말이에요. 오늘 제육처럼 잘 익었어요!", "closing": "이 연습은 학원식 연습일 뿐 공식 채점이 아닙니다. 실제 기준은 큐넷 공개과제와 시험장 안내를 따르세요.", "small": "한국산업인력공단과 관계없습니다. 조리 순서와 팁은 ZOP LAB 연습용이고, 현장 이야기는 개인 경험(약 5년 전)이라 공식이 아닙니다. 공개과제 원문: 큐넷 → 자료실 → 공개문제 「한식조리기능사」.", "plan": "① 기름·힘줄 정리, 살짝 크게 썰어 두드리기 → ② 고추장 양념장 → ③ 고기에 양념 고루 바르기 → ④ 석쇠 달구고 기름 발라 약한 불에서 뒤집어 굽기 → ⑤ 익었는지 보고 전량 담기"};

// 더덕구이 학원식 실기연습 — 대사 데이터 (_build/items.py에서 생성, 손으로 고치지 말 것)
window.ITEM={"name": "더덕구이", "time": 30};
window.SRC={"C03": {"t": "「더덕구이」 문제지 수험자 유의사항 6)-바)", "k": "off"}, "C07": {"t": "「더덕구이」 문제지 수험자 유의사항 6)-라)·사)", "k": "off"}, "C08": {"t": "「더덕구이」 문제지 수험자 유의사항 6)-자)", "k": "off"}, "C20": {"t": "큐넷 수험자 지참준비물(한식조리기능사, 2026)", "k": "off"}, "C21": {"t": "「더덕구이」 문제지 수험자 유의사항 7)", "k": "off"}, "E00": {"t": "「더덕구이」 문제지 시험시간", "k": "off"}, "E01": {"t": "큐넷 한식조리기능사 2026 공개과제 「더덕구이」 요구사항 가", "k": "off"}, "E02": {"t": "「더덕구이」 요구사항 나", "k": "off"}, "E03": {"t": "「더덕구이」 요구사항 다", "k": "off"}, "G01": {"t": "「더덕구이」 문제지 수험자 유의사항 3) 지급재료 확인", "k": "off"}, "G02": {"t": "큐넷 수험자 지참준비물(한식, 2026) 칼 비고: 체칼·필러 사용 불가 / 문제지 유의사항 6)-아)", "k": "off"}, "G12": {"t": "「더덕구이」 문제지 수험자 유의사항 6)-나) / 위생 세부기준 5 마스크", "k": "off"}, "H05": {"t": "현장 기억(잡랩 소장, 약 5년 전): 석쇠를 못 빌리는 경우", "k": "field"}, "H08": {"t": "현장 기억(잡랩 소장, 약 5년 전): 한 번 내면 끝", "k": "field"}, "S_Y104": {"t": "청춘23 블로그 한식조리기능사 연습 후기 · https://young23.linkwe.kr/104 (조회 2026-10-23)", "k": "zop"}, "U05": {"t": "접시 정리 상태: 감점될 수 있음 (점수 공개 자료 없음)", "k": "none"}, "Z01": {"t": "ZOP LAB 연습 순서: 더덕구이", "k": "zop"}, "Z02": {"t": "ZOP LAB 팁: 더덕구이 흔한 실수", "k": "zop"}, "Z22": {"t": "ZOP LAB 팁: 제출 전 확인 순서", "k": "zop"}};
window.SCENES=[
{
"id": "0",
"part": "실습 전, 학원 휴게 공간",
"title": "노트 복습",
"type": "talk",
"bgDim": true,
"screen": "학원 휴게 공간. 조피가 노트를 펼쳐 놓고 있다. 노트에는 \"더덕구이 30분\"이라고 크게 적혀 있다.",
"svg": "<rect x=\"16\" y=\"8\" width=\"88\" height=\"62\" rx=\"4\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"34\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"14\" fill=\"#1f2a24\">더덕구이 30분</text><text x=\"60\" y=\"54\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"11\" fill=\"#b6533a\">유장 먼저, 고추장 나중</text>",
"lines": [
[
"z",
"(중얼중얼) 더덕구이… 30분. 유장 먼저, 고추장 나중.",
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
"E02"
]
},
{
"id": "G01",
"part": "시작 전",
"title": "재료 확인은 지금",
"type": "judge",
"fix": true,
"screen": "시작 신호 전. 조피가 지급재료를 보지도 않고 칼부터 꺼낸다. 받은 재료: 통더덕 · 진간장 · 대파 · 마늘 · 고추장 · 흰설탕 · 깨소금 · 참기름 · 소금 · 식용유",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">재료 확인은 지금</text>",
"setup": [
[
"z",
"재료는 쓰면서 보면 되죠.",
"neutral"
]
],
"explain": [
[
"t",
"재료는 지금 봐요. 문제지 유의사항에 지급재료는 시험 전에 확인하고, 이상이 있으면 그때 조치를 받으며 시험 중에는 교환이나 추가 지급을 하지 않는다고 적혀 있어요.",
"show"
]
],
"src": [
"G01"
],
"retry": "조피가 재료 이름을 하나씩 짚으며 확인한다."
},
{
"id": "G02",
"part": "시작 전",
"title": "편한 도구 하나",
"type": "judge",
"fix": true,
"screen": "조피가 가방에서 채칼을 꺼내 도마 옆에 둔다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">편한 도구 하나</text>",
"setup": [
[
"z",
"이거 하나면 채 썰기 끝!",
"happy"
]
],
"explain": [
[
"t",
"편하지만 오늘은 안 돼요. 큐넷 지참준비물 목록 칼 항목 비고에 체칼, 필러 등은 기능평가에 영향을 미쳐 사용할 수 없다고 적혀 있어요.",
"show"
],
[
"t",
"문제지 유의사항에도 지참준비물 이외의 조리기술에 영향을 줄 수 있는 기구를 쓰면 실격 항목이라고 적혀 있어요.",
"wait"
]
],
"src": [
"G02"
],
"retry": "조피가 채칼을 가방에 다시 넣는다."
},
{
"id": "G12",
"part": "시작 전",
"title": "마스크 살짝 내리기",
"type": "judge",
"fix": true,
"screen": "더워서 조피가 마스크를 턱 아래로 내린다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">마스크 살짝 내리</text><text x=\"60\" y=\"50\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">기</text>",
"setup": [
[
"z",
"잠깐 숨 좀 쉬고요.",
"oops"
]
],
"explain": [
[
"t",
"답답한 건 알지만 올려요. 문제지 유의사항에 위생복, 위생모, 앞치마, 마스크를 착용하지 않으면 실격 항목이라고 적혀 있어요.",
"show"
]
],
"src": [
"G12"
],
"retry": "조피가 마스크를 코까지 올린다."
},
{
"id": "M02",
"part": "공개 후기 실수",
"title": "굵은 채로 두드리기",
"type": "judge",
"fix": true,
"screen": "조피가 굵은 더덕을 통째로 밀대로 민다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">굵은 채로 두드리</text><text x=\"60\" y=\"50\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">기</text>",
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
"굵은 건 반으로 갈라 안쪽에 칼집을 넣어야 안 부서진다는 팁이에요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Y104"
],
"retry": "조피가 메모대로 다시 한다.",
"startTimer": true
},
{
"id": "M03",
"part": "공개 후기 실수",
"title": "덜 절이기",
"type": "judge",
"fix": true,
"screen": "조피가 더덕을 소금물에 잠깐 담갔다 바로 민다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">덜 절이기</text>",
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
"충분히 절여야 두드릴 때 안 부서진다는 메모가 있어요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Y104"
],
"retry": "조피가 메모대로 다시 한다."
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
"id": "M04",
"part": "공개 후기 실수",
"title": "초벌 부족",
"type": "judge",
"fix": true,
"screen": "조피가 초벌을 아주 짧게 하고 양념을 바른다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">초벌 부족</text>",
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
"초벌을 충분히 해야 양념이 잘 배고 안 탄다는 팁이에요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Y104"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "M05",
"part": "공개 후기 실수",
"title": "오래 굽기",
"type": "judge",
"fix": true,
"screen": "조피가 익히려고 더덕을 한참 굽는다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">오래 굽기</text>",
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
"더덕은 오래 익히는 것보다 안 태우는 게 더 중요하다는 메모가 있어요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Y104"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "S1",
"part": "조리 1 · 손질",
"title": "껍질 벗기기",
"type": "judge",
"fix": false,
"screen": "조피가 더덕 껍질을 벗기고, 반 갈라 방망이로 살살 두드려 편다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">껍질 벗긴 더덕</text><text x=\"60\" y=\"50\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">살살 두드림</text>",
"setup": [
[
"z",
"세게 치면 부서지니까 살살…",
"thinking"
]
],
"explain": [
[
"t",
"좋아요! 문제지에 더덕은 껍질을 벗겨 쓰라고 적혀 있어요. 두드리다 부서지는 건 우리 학원식 팁에서 자주 보는 실수라, 살살 하는 게 맞아요.",
"smile",
"zop"
]
],
"src": [
"E01",
"Z02"
]
},
{
"id": "M06",
"part": "공개 후기 실수",
"title": "윤기 없는 양념",
"type": "judge",
"fix": true,
"screen": "조피 양념이 칙칙하고 들쭉날쭉하다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">윤기 없는 양념</text>",
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
"윤기 없는 양념과 반듯하지 못한 모양으로 피드백받은 후기가 있어요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Y104"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "M07",
"part": "공개 후기 실수",
"title": "가장자리 탐",
"type": "judge",
"fix": true,
"screen": "조피가 더덕을 띄엄띄엄 놓아 끝이 탄다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">가장자리 탐</text>",
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
"가장자리를 겹쳐 올려야 끝이 덜 탄다는 메모가 있어요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Y104"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "S2",
"part": "조리 2 · 초벌",
"title": "바로 고추장",
"type": "judge",
"fix": true,
"screen": "조피가 손질한 더덕에 바로 고추장 양념을 바르고 석쇠에 올린다.",
"svg": "<rect x=\"14\" y=\"44\" width=\"92\" height=\"22\" rx=\"3\" fill=\"none\" stroke=\"#1f2a24\" stroke-width=\"3\"/><path d=\"M30,44v22M46,44v22M62,44v22M78,44v22M94,44v22\" stroke=\"#1f2a24\" stroke-width=\"1.5\"/><rect x=\"30\" y=\"38\" width=\"60\" height=\"12\" rx=\"5\" fill=\"#b7552e\" stroke=\"#1f2a24\" stroke-width=\"2.5\"/><text x=\"60\" y=\"26\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"13\" fill=\"#1f2a24\">고추장 바로</text>",
"setup": [
[
"z",
"어차피 고추장 바를 거, 한 번에!",
"happy"
]
],
"explain": [
[
"t",
"순서를 건너뛰면 더덕이 놀라요. 문제지에 \"유장으로 초벌구이 하고, 고추장 양념으로 석쇠에 구우시오\"라고 적혀 있어요.",
"show"
],
[
"t",
"'유장'은 간장과 참기름을 섞은 기름 양념이고, '초벌구이'는 양념하기 전에 먼저 살짝 굽는 거예요. 초벌 없이 바로 바르면 겉만 타고 속은 뻣뻣해지기 쉬워요. 이건 우리 학원식 팁이에요.",
"smile",
"zop"
]
],
"retry": "조피가 유장을 먼저 발라 살짝 굽고, 그다음 고추장 양념을 바른다.",
"src": [
"E02",
"Z01",
"Z02"
]
},
{
"id": "M08",
"part": "공개 후기 실수",
"title": "껍질 벗기다 시간 다 씀",
"type": "judge",
"fix": true,
"screen": "조피가 껍질 벗기기에 한참 걸린다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">껍질 벗기다 시간</text><text x=\"60\" y=\"50\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\"> 다 씀</text>",
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
"껍질 벗기기에서 시간이 밀린 후기가 있어요. 손에 익게 연습해요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Y104"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "M09",
"part": "공개 후기 실수",
"title": "세게 두드리기",
"type": "judge",
"fix": true,
"screen": "조피가 급해서 밀대로 대충 쾅쾅 친다.",
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
"급한 마음에 펴기를 제대로 못했다는 후기가 있어요. 면포 덮고 살살 밀어요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Y104"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "S3",
"part": "조리 3 · 양념",
"title": "양념 두껍게",
"type": "judge",
"fix": true,
"screen": "고추장 양념을 두툼하게 바른 더덕이 석쇠 위에서 까맣게 변해 간다.",
"svg": "<rect x=\"14\" y=\"44\" width=\"92\" height=\"22\" rx=\"3\" fill=\"none\" stroke=\"#1f2a24\" stroke-width=\"3\"/><path d=\"M30,44v22M46,44v22M62,44v22M78,44v22M94,44v22\" stroke=\"#1f2a24\" stroke-width=\"1.5\"/><rect x=\"30\" y=\"38\" width=\"60\" height=\"12\" rx=\"5\" fill=\"#2b2b2b\" stroke=\"#1f2a24\" stroke-width=\"2.5\"/><text x=\"60\" y=\"26\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"13\" fill=\"#1f2a24\">양념 두툼… 까맣게</text>",
"setup": [
[
"z",
"양념 많이 바르면 더 맛있어 보이죠!",
"happy"
]
],
"explain": [
[
"t",
"양념이 너무 열정적이에요. 문제지 공통 유의사항에 작품 특성에서 벗어날 정도로 타면 실격 항목이라고 적혀 있어요.",
"show"
],
[
"t",
"우리 학원식 팁: 양념은 얇게 바르고 약한 불에서 타지 않게 구워요.",
"smile",
"zop"
]
],
"retry": "조피가 새 더덕에 양념을 얇게 바르고 불을 줄인다.",
"src": [
"C03",
"Z01",
"Z02"
]
},
{
"id": "M10",
"part": "공개 후기 실수",
"title": "껍질 쪽이 위로",
"type": "judge",
"fix": true,
"screen": "조피가 더덕 안쪽이 바닥으로 가게 담는다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">껍질 쪽이 위로</text>",
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
"껍질 쪽은 아래, 안쪽이 보이게 담으라는 메모가 있어요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Y104"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "R1",
"part": "요구사항 확인",
"title": "요구사항 가 확인",
"type": "judge",
"fix": false,
"screen": "조피가 손을 멈추고 문제지 요구사항 가를 다시 짚는다: \"더덕은 껍질을 벗겨 사용하시오.\"",
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
"좋아요! 쉬운 말로 하면 껍질 벗기고 쓴다. 중간중간 문제지와 맞춰 보는 습관이 제일 든든해요. 전체 문장은 큐넷 원문으로 확인해요.",
"smile"
]
],
"src": [
"E01"
]
},
{
"id": "S4",
"part": "조리 4 · 불",
"title": "불 하나 더",
"type": "judge",
"fix": true,
"screen": "석쇠 옆 화구에 조피가 냄비를 올리고 불을 하나 더 켠다.",
"svg": "<rect x=\"14\" y=\"44\" width=\"92\" height=\"22\" rx=\"3\" fill=\"none\" stroke=\"#1f2a24\" stroke-width=\"3\"/><path d=\"M30,44v22M46,44v22M62,44v22M78,44v22M94,44v22\" stroke=\"#1f2a24\" stroke-width=\"1.5\"/><path d=\"M40,72 q-6,-9 0,-18 q6,9 0,18z M84,72 q-6,-9 0,-18 q6,9 0,18z\" fill=\"#e8873a\" stroke=\"#1f2a24\" stroke-width=\"2\"/>",
"setup": [
[
"z",
"소금물은 옆 불에서 같이…",
"thinking"
]
],
"explain": [
[
"t",
"불 두 개는 욕심 두 개예요. 문제지 공통 유의사항에 가스레인지 화구를 2개 이상(2개 포함) 쓰면 실격 항목이라고 적혀 있어요.",
"show"
],
[
"t",
"학원 실습대엔 화구가 2개 있어도, 집에서도 불 하나로 순서를 짜 보세요.",
"smile"
]
],
"retry": "조피가 두 번째 불을 끄고, 석쇠 하나로 순서대로 굽는다.",
"src": [
"C08"
]
},
{
"id": "R2",
"part": "요구사항 확인",
"title": "요구사항 나 확인",
"type": "judge",
"fix": false,
"screen": "조피가 손을 멈추고 문제지 요구사항 나를 다시 짚는다: \"유장으로 초벌구이 하고, 고추장 양념으로 석쇠에 구우시오.\"",
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
"좋아요! 쉬운 말로 하면 먼저 기름 양념(유장)으로 살짝 굽고, 그다음 고추장 양념, 도구는 석쇠. 중간중간 문제지와 맞춰 보는 습관이 제일 든든해요. 전체 문장은 큐넷 원문으로 확인해요.",
"smile"
]
],
"src": [
"E02"
]
},
{
"id": "R3",
"part": "요구사항 확인",
"title": "요구사항 다 확인",
"type": "judge",
"fix": false,
"screen": "조피가 손을 멈추고 문제지 요구사항 다를 다시 짚는다: \"완성품은 전량 제출하시오.\"",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">요구사항 다 확인</text>",
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
"좋아요! 쉬운 말로 하면 다 낸다. 중간중간 문제지와 맞춰 보는 습관이 제일 든든해요. 전체 문장은 큐넷 원문으로 확인해요.",
"smile"
]
],
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
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">더덕구이</text><text x=\"60\" y=\"50\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">전량</text>",
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
"그래서 내기 전에 딱 멈추고 세 가지만 봐요.\n① 전량 담았는지\n② 껍질 벗겼는지, 타지 않았는지\n③ 접시 가장자리 양념 닦기",
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
window.FEEDBACK={"intro": "자, 오늘 더덕구이 '눈식평' 들어갑니다.", "good": ["껍질 벗기고 살살 두드렸어요.", "유장 → 고추장 순서로 다시 했어요.", "양념을 얇게, 불을 약하게 바꿨어요."], "fix": ["석쇠는 기물 목록 맨 위에.", "\"초벌 먼저\"를 순서표 첫 줄에.", "화구는 하나. 집에서도 불 하나로 연습해요."], "zopi": "더덕도 저도 두드리면 펴지네요.", "teacher": "살살 두드려야 안 부서져요. 오늘 둘 다 잘 펴졌어요!", "closing": "이 연습은 학원식 연습일 뿐 공식 채점이 아닙니다. 실제 기준은 큐넷 공개과제와 시험장 안내를 따르세요.", "small": "한국산업인력공단과 관계없습니다. 조리 순서와 팁은 ZOP LAB 연습용이고, 현장 이야기는 개인 경험(약 5년 전)이라 공식이 아닙니다. 공개과제 원문: 큐넷 → 자료실 → 공개문제 「한식조리기능사」.", "plan": "① 껍질 벗기고 반 갈라 두드려 펴기 → ② 소금물에 잠시 담갔다 물기 빼기 → ③ 유장 발라 석쇠에 초벌 → ④ 고추장 양념장 → ⑤ 얇게 발라 다시 굽기 → ⑥ 전량 담기"};

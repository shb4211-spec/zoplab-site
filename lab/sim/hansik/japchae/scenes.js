// 잡채 학원식 실기연습 — 대사 데이터 (_build/items.py에서 생성, 손으로 고치지 말 것)
window.ITEM={"name": "잡채", "time": 35};
window.SRC={"C04": {"t": "「잡채」 문제지 수험자 유의사항 1)", "k": "off"}, "C21": {"t": "「잡채」 문제지 수험자 유의사항 7)", "k": "off"}, "E00": {"t": "「잡채」 문제지 시험시간", "k": "off"}, "E01": {"t": "큐넷 한식조리기능사 2026 공개과제 「잡채」 요구사항 가", "k": "off"}, "E02": {"t": "큐넷 한식조리기능사 2026 공개과제 「잡채」 요구사항 나", "k": "off"}, "E03": {"t": "큐넷 한식조리기능사 2026 공개과제 「잡채」 요구사항 다", "k": "off"}, "E04": {"t": "큐넷 한식조리기능사 2026 공개과제 「잡채」 요구사항 라", "k": "off"}, "G02": {"t": "큐넷 수험자 지참준비물(한식, 2026) 칼 비고: 체칼·필러 사용 불가 / 문제지 유의사항 6)-아)", "k": "off"}, "G06": {"t": "큐넷 위생 세부기준 3 위생모 (빈틈으로 머리카락 보임: 전체 0점)", "k": "off"}, "G12": {"t": "「잡채」 문제지 수험자 유의사항 6)-나) / 위생 세부기준 5 마스크", "k": "off"}, "H08": {"t": "현장 기억(잡랩 소장, 약 5년 전): 한 번 내면 끝", "k": "field"}, "S_Y103": {"t": "청춘23 블로그 한식조리기능사 연습 후기 · https://young23.linkwe.kr/103 (조회 2026-10-23)", "k": "zop"}, "U01": {"t": "맛보기 위반: 감점될 수 있음 (점수 공개 자료 없음)", "k": "none"}, "U05": {"t": "접시 정리 상태: 감점될 수 있음 (점수 공개 자료 없음)", "k": "none"}, "Z01": {"t": "ZOP LAB 연습 순서: 잡채", "k": "zop"}, "Z02": {"t": "ZOP LAB 팁: 잡채 흔한 실수", "k": "zop"}, "Z22": {"t": "ZOP LAB 팁: 제출 전 확인 순서", "k": "zop"}};
window.SCENES=[
{
"id": "0",
"part": "실습 전, 학원 휴게 공간",
"title": "노트 복습",
"type": "talk",
"bgDim": true,
"screen": "학원 휴게 공간. 조피가 노트를 펼쳐 놓고 있다. 노트에는 \"잡채 35분\"이라고 크게 적혀 있다.",
"svg": "<rect x=\"16\" y=\"8\" width=\"88\" height=\"62\" rx=\"4\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"34\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"14\" fill=\"#1f2a24\">잡채 35분</text><text x=\"60\" y=\"54\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"11\" fill=\"#b6533a\">연한 색부터 볶기</text>",
"lines": [
[
"z",
"(중얼중얼) 잡채… 35분. 연한 색부터 볶기.",
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
"id": "G06",
"part": "시작 전",
"title": "삐져나온 머리카락",
"type": "judge",
"fix": true,
"screen": "조피 위생모 옆으로 머리카락이 삐져나와 있다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">삐져나온 머리카락</text>",
"setup": [
[
"z",
"이 정도는 괜찮죠?",
"neutral"
]
],
"explain": [
[
"t",
"큐넷 위생 세부기준에 위생모에 빈틈이 있어 머리카락이 보이면 위생 점수 전체 0점으로 적혀 있어요.",
"show"
]
],
"src": [
"G06"
],
"retry": "조피가 머리카락을 위생모 안으로 넣는다."
},
{
"id": "M01",
"part": "공개 후기 실수",
"title": "당면 늦게 불리기",
"type": "judge",
"fix": true,
"screen": "조피가 당면을 맨 마지막에 꺼낸다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">당면 늦게 불리기</text>",
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
"당면은 시작하자마자 물에 담가 두라는 팁이에요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Y103"
],
"retry": "조피가 메모대로 다시 한다.",
"startTimer": true
},
{
"id": "M02",
"part": "공개 후기 실수",
"title": "덜 익은 당면",
"type": "judge",
"fix": true,
"screen": "조피가 당면을 잠깐 삶고 건진다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">덜 익은 당면</text>",
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
"손으로 끊어 끊어지면 익은 거라는 메모가 있어요. 덜 익으면 실격 위험이라는 정리도 있어요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Y103"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "M03",
"part": "공개 후기 실수",
"title": "유장 생략",
"type": "judge",
"fix": true,
"screen": "조피가 삶은 당면을 바로 볶는다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">유장 생략</text>",
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
"당면은 유장 처리 후 볶으라는 요구사항과 메모가 있어요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Y103"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "S1",
"part": "조리 1",
"title": "한꺼번에 볶기",
"type": "judge",
"fix": true,
"screen": "조피가 썬 재료를 팬에 한꺼번에 쏟는다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">잡채</text><text x=\"60\" y=\"50\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">한꺼번에 볶기</text>",
"setup": [
[
"z",
"한 번에 볶으면 빠르죠!",
"happy"
]
],
"explain": [
[
"t",
"빠르지만 색이 섞여요. 우리 학원식 팁: 팬 하나로 연한 색부터 하나씩 볶아요. 공식 아님 · ZOP LAB 연습 순서예요.",
"show",
"zop"
]
],
"src": [
"Z01",
"Z02"
],
"retry": "조피가 재료를 하나씩 따로 볶는다."
},
{
"id": "M04",
"part": "공개 후기 실수",
"title": "진한 재료부터",
"type": "judge",
"fix": true,
"screen": "조피가 소고기부터 볶기 시작한다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">진한 재료부터</text>",
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
"하얀 재료부터 볶으면 팬이 깨끗하게 유지된다는 팁이에요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Y103"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "M05",
"part": "공개 후기 실수",
"title": "뜨거울 때 섞기",
"type": "judge",
"fix": true,
"screen": "조피가 볶은 재료를 뜨거운 채로 바로 섞는다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">뜨거울 때 섞기</text>",
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
"식은 다음 버무리면 색이 선명하다는 메모가 있어요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Y103"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "M06",
"part": "공개 후기 실수",
"title": "양념 한 번에",
"type": "judge",
"fix": true,
"screen": "조피가 표고·목이·고기를 한 그릇에 같이 양념한다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">양념 한 번에</text>",
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
"양념은 같아도 재료별로 따로 하라는 메모가 있어요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Y103"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "S2",
"part": "조리 2",
"title": "지단도 같은 굵기",
"type": "judge",
"fix": true,
"screen": "조피가 지단을 채소와 똑같이 썰고 있다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">잡채</text><text x=\"60\" y=\"50\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">지단도 같은 굵</text>",
"setup": [
[
"z",
"다 똑같이 맞추면 깔끔하죠.",
"happy"
]
],
"explain": [
[
"t",
"지단은 더 가늘어요. 채소와 고기는 \"소고기, 양파, 오이, 당근, 도라지, 표고버섯은 0.3cm x 0.3cm x 6cm\"이고, 지단은 \"황·백지단은 0.2cm x 0.2cm x 4cm\"예요.",
"show"
]
],
"src": [
"E01",
"E04"
],
"retry": "조피가 지단을 더 가늘고 짧게 다시 썬다."
},
{
"id": "M07",
"part": "공개 후기 실수",
"title": "고기 결 반대",
"type": "judge",
"fix": true,
"screen": "조피가 잡채 고기를 결 반대로 썬다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">고기 결 반대</text>",
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
"고기 채는 결대로, 육회만 예외라는 메모가 있어요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Y103"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "M08",
"part": "공개 후기 실수",
"title": "채소 과다",
"type": "judge",
"fix": true,
"screen": "조피가 당면보다 채소가 훨씬 많게 담는다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">채소 과다</text>",
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
"당면이 적으니 채소가 많으면 과감히 덜어 균형을 맞추라는 메모가 있어요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Y103"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "M09",
"part": "공개 후기 실수",
"title": "고명 무너짐",
"type": "judge",
"fix": true,
"screen": "조피 지단 고명이 한쪽으로 쏟아진다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">고명 무너짐</text>",
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
"지단 고명이 중앙에 잘 자리 잡게 올리라는 피드백이에요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Y103"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "S3",
"part": "조리 3",
"title": "목이도 칼로",
"type": "judge",
"fix": true,
"screen": "조피가 목이버섯을 칼로 채 썬다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">잡채</text><text x=\"60\" y=\"50\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">목이도 칼로</text>",
"setup": [
[
"z",
"버섯은 다 채죠.",
"neutral"
]
],
"explain": [
[
"t",
"목이는 손이 편해요. 문제지에 \"숙주는 데치고 목이버섯은 찢어서\" 쓰라고 적혀 있어요.",
"show"
]
],
"src": [
"E02"
],
"retry": "조피가 목이를 손으로 찢는다."
},
{
"id": "M10",
"part": "공개 후기 실수",
"title": "시간 초과",
"type": "judge",
"fix": true,
"screen": "조피가 썰기에 시간을 다 써 버렸다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">시간 초과</text>",
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
"손질 재료가 많아 시간이 초과된 후기가 있어요. 썰기 속도 연습이 답이래요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Y103"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "M11",
"part": "공개 후기 실수",
"title": "오이 너무 가늘게",
"type": "judge",
"fix": true,
"screen": "조피가 오이를 아주 가늘게 채 썬다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">오이 너무 가늘게</text>",
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
"오이를 너무 가늘게 썰지 말라는 메모가 있어요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Y103"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "R1",
"part": "요구사항 확인",
"title": "요구사항 가 확인",
"type": "judge",
"fix": false,
"screen": "조피가 손을 멈추고 문제지 요구사항 가를 다시 짚는다: \"소고기, 양파, 오이, 당근, 도라지, 표고버섯은 0.3cm x 0.3cm x 6cm…\"",
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
"id": "R2",
"part": "요구사항 확인",
"title": "요구사항 나 확인",
"type": "judge",
"fix": false,
"screen": "조피가 손을 멈추고 문제지 요구사항 나를 다시 짚는다: \"숙주는 데치고 목이버섯은 찢어서…\"",
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
"id": "R3",
"part": "요구사항 확인",
"title": "요구사항 다 확인",
"type": "judge",
"fix": false,
"screen": "조피가 손을 멈추고 문제지 요구사항 다를 다시 짚는다: \"당면은 삶아서 유장처리하여 볶으시오…\"",
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
"좋아요! 쉬운 말로 하면 짧은 발췌 · 전체 문장은 큐넷 원문. 중간중간 문제지와 맞춰 보는 습관이 제일 든든해요. 전체 문장은 큐넷 원문으로 확인해요.",
"smile"
]
],
"src": [
"E03"
]
},
{
"id": "R4",
"part": "요구사항 확인",
"title": "요구사항 라 확인",
"type": "judge",
"fix": false,
"screen": "조피가 손을 멈추고 문제지 요구사항 라를 다시 짚는다: \"황·백지단은 0.2cm x 0.2cm x 4cm…\"",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">요구사항 라 확인</text>",
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
"E04"
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
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">잡채</text><text x=\"60\" y=\"50\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">완성</text>",
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
"그래서 내기 전에 딱 멈추고 세 가지만 봐요.\n① 채소·고기 0.3cm x 0.3cm x 6cm, 지단 0.2cm x 0.2cm x 4cm\n② 숙주 데치고 목이 찢기\n③ 당면 삶아 유장처리 후 볶기",
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
window.FEEDBACK={"intro": "자, 오늘 잡채 연습 돌아볼게요.", "good": ["따로따로 볶았어요.", "지단 굵기를 바꿨어요.", "목이를 찢었어요."], "fix": ["볶는 순서표 만들기.", "지단은 따로.", "목이는 손으로."], "zopi": "재료가 많아서 팬이 쉴 틈이 없어요.", "teacher": "팬이 바쁘면 손도 늘어요. 오늘 색 고왔어요!", "closing": "이 연습은 학원식 연습일 뿐 공식 채점이 아닙니다. 실제 기준은 큐넷 공개과제와 시험장 안내를 따르세요.", "small": "한국산업인력공단과 관계없습니다. 조리 순서와 팁은 ZOP LAB 연습용이고, 현장 이야기는 개인 경험(약 5년 전)이라 공식이 아닙니다. 공개과제 원문: 큐넷 → 자료실 → 공개문제 「한식조리기능사」.", "plan": "① 당면 물에 불리기 시작, 표고·목이 손질. → ② 채소·고기 규격대로 썰기, 오이는 절여 물기 짜기, 도라지는 소금으로 쓴맛 빼기. → ③ 지단 부쳐 0.2×0.2×4 채. → ④ 팬 하나로 연한 색부터: 양파 → 도라지 → 오이 → 당근 → 목이 → 표고 → 고기. → ⑤ 숙주 데치기, 당면 삶아 간장·설탕·참기름으로 버무려 볶기. → ⑥ 전부 섞어 담고 지단 고명."};

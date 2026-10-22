// 도라지생채 학원식 실기연습 — 대사 데이터 (_build/items.py에서 생성, 손으로 고치지 말 것)
window.ITEM={"name": "도라지생채", "time": 15};
window.SRC={"C06b": {"t": "「도라지생채」 문제지 수험자 유의사항 4)", "k": "off"}, "C08": {"t": "「도라지생채」 문제지 수험자 유의사항 6)-자)", "k": "off"}, "C21": {"t": "「도라지생채」 문제지 수험자 유의사항 7)", "k": "off"}, "E00": {"t": "「도라지생채」 문제지 시험시간", "k": "off"}, "E01": {"t": "큐넷 한식조리기능사 2026 공개과제 「도라지생채」 요구사항 가", "k": "off"}, "E02": {"t": "큐넷 한식조리기능사 2026 공개과제 「도라지생채」 요구사항 나", "k": "off"}, "G01": {"t": "「도라지생채」 문제지 수험자 유의사항 3) 지급재료 확인", "k": "off"}, "G02": {"t": "큐넷 수험자 지참준비물(한식, 2026) 칼 비고: 체칼·필러 사용 불가 / 문제지 유의사항 6)-아)", "k": "off"}, "G12": {"t": "「도라지생채」 문제지 수험자 유의사항 6)-나) / 위생 세부기준 5 마스크", "k": "off"}, "H08": {"t": "현장 기억(잡랩 소장, 약 5년 전): 한 번 내면 끝", "k": "field"}, "S_Y84": {"t": "청춘23 블로그 한식조리기능사 연습 후기 · https://young23.linkwe.kr/84 (조회 2026-10-23)", "k": "zop"}, "S_Z18": {"t": "요리공작소(Cooking Factory) 블로그 품목 정리 (원문 확인) · https://zlwmzksnakak.tistory.com/18 (조회 2026-10-23)", "k": "zop"}, "U05": {"t": "접시 정리 상태: 감점될 수 있음 (점수 공개 자료 없음)", "k": "none"}, "Z01": {"t": "ZOP LAB 연습 순서: 도라지생채", "k": "zop"}, "Z02": {"t": "ZOP LAB 팁: 도라지생채 흔한 실수", "k": "zop"}, "Z22": {"t": "ZOP LAB 팁: 제출 전 확인 순서", "k": "zop"}};
window.SCENES=[
{
"id": "0",
"part": "실습 전, 학원 휴게 공간",
"title": "노트 복습",
"type": "talk",
"bgDim": true,
"screen": "학원 휴게 공간. 조피가 노트를 펼쳐 놓고 있다. 노트에는 \"도라지생채 15분\"이라고 크게 적혀 있다.",
"svg": "<rect x=\"16\" y=\"8\" width=\"88\" height=\"62\" rx=\"4\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"34\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"14\" fill=\"#1f2a24\">도라지생채 15분</text><text x=\"60\" y=\"54\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"11\" fill=\"#b6533a\">0.3cm x 0.3cm x 6cm</text>",
"lines": [
[
"z",
"(중얼중얼) 도라지생채… 15분. 0.3cm x 0.3cm x 6cm.",
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
"id": "G01",
"part": "시작 전",
"title": "재료 확인은 지금",
"type": "judge",
"fix": true,
"screen": "시작 신호 전. 조피가 지급재료를 보지도 않고 칼부터 꺼낸다. 받은 재료: 통도라지 · 소금 · 고추장 · 흰설탕 · 식초 · 대파 · 마늘 · 깨소금 · 고춧가루",
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
"id": "M01",
"part": "공개 후기 실수",
"title": "뾰족한 끝",
"type": "judge",
"fix": true,
"screen": "조피가 도라지 끝을 뾰족한 채로 둔다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">뾰족한 끝</text>",
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
"길이를 일정하게 맞추고 끝이 뾰족하지 않게 다듬으라는 피드백이 있어요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Y84"
],
"retry": "조피가 메모대로 다시 한다.",
"startTimer": true
},
{
"id": "M02",
"part": "공개 후기 실수",
"title": "물 듬뿍 절이기",
"type": "judge",
"fix": true,
"screen": "조피가 채 썬 도라지를 물에 흠뻑 잠기게 붓는다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">물 듬뿍 절이기</text>",
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
"소금으로 주무른 뒤 물은 살짝 잠길 만큼만 넣어 쓴맛을 빼는 방법이 소개돼 있어요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Y84"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "M03",
"part": "공개 후기 실수",
"title": "주황빛 양념",
"type": "judge",
"fix": true,
"screen": "조피 양념 색이 무생채처럼 연한 주황색이다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">주황빛 양념</text>",
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
"도라지생채는 진한 빨강으로! 색이 옅다고 지적받은 후기가 있어요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Y84"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "M06",
"part": "공개 후기 실수",
"title": "미리 무치기",
"type": "judge",
"fix": true,
"screen": "조피가 도라지를 일찍 무쳐 놓는다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">미리 무치기</text>",
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
"물이 생기고 식초 맛이 빠지니 제출 직전에 무치라는 후기가 있어요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Y84"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "S1",
"part": "조리 1",
"title": "쓴맛 그대로",
"type": "judge",
"fix": true,
"screen": "조피가 채 썬 도라지를 바로 양념에 넣는다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">도라지생채</text><text x=\"60\" y=\"50\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">쓴맛 그대로</text>",
"setup": [
[
"z",
"도라지는 원래 쌉싸름하잖아요.",
"neutral"
]
],
"explain": [
[
"t",
"쌉싸름도 정도가 있어요. 우리 학원식 팁: 소금으로 주물러 헹구고 물기를 짜요. 너무 주무르면 흐물흐물해지니 적당히요. 공식 아님 · ZOP LAB 연습 순서예요.",
"show",
"zop"
]
],
"src": [
"Z01",
"Z02"
],
"retry": "조피가 도라지를 소금으로 주물러 헹구고 물기를 짠다."
},
{
"id": "M07",
"part": "공개 후기 실수",
"title": "양념 한 번에",
"type": "judge",
"fix": true,
"screen": "조피가 양념을 한꺼번에 부어 무친다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">양념 한 번에</text>",
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
"양념은 조금씩 넣어 가며 무치는 걸로 연습한 사례예요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Y84"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "M08",
"part": "공개 후기 실수",
"title": "긁어서 껍질",
"type": "judge",
"fix": true,
"screen": "조피가 칼로 도라지 껍질을 긁고 있다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">긁어서 껍질</text>",
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
"칼로 찍어 돌려 벗기는 방법이 소개돼 있어요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Y84"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "M09",
"part": "공개 후기 실수",
"title": "검은 점 무시",
"type": "judge",
"fix": true,
"screen": "조피가 도라지 윗부분을 잘라 보지도 않고 바로 씻는다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">검은 점 무시</text>",
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
"윗부분을 잘라 검은 점(썩은 곳)이 있는지 보고, 있으면 교체를 요청하라는 메모가 있어요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Z18"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "M10",
"part": "공개 후기 실수",
"title": "파란 부분까지",
"type": "judge",
"fix": true,
"screen": "조피가 대파 초록 부분까지 다져 넣는다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">파란 부분까지</text>",
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
"파는 흰 부분만! 녹색이 들어가면 도라지보다 파가 돋보인다는 메모가 있어요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Z18"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "S2",
"part": "조리 2",
"title": "고춧가루만",
"type": "judge",
"fix": true,
"screen": "조피가 고춧가루로만 양념을 만든다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">도라지생채</text><text x=\"60\" y=\"50\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">고춧가루만</text>",
"setup": [
[
"z",
"깔끔하게 고춧가루만!",
"happy"
]
],
"explain": [
[
"t",
"깔끔함보다 문제지가 먼저예요. 문제지에 \"고추장과 고춧가루 양념으로 무쳐\" 내라고 적혀 있어요. 무생채와 헷갈리기 쉬워요.",
"show"
]
],
"src": [
"E02"
],
"retry": "조피가 양념에 고추장을 더한다."
},
{
"id": "M11",
"part": "공개 후기 실수",
"title": "여러 장 겹쳐 채",
"type": "judge",
"fix": true,
"screen": "조피가 휘어진 도라지 편을 잔뜩 겹쳐 한 번에 채 썬다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">여러 장 겹쳐 채</text>",
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
"도라지는 휘기 쉬워 처음엔 두세 장만 겹쳐 썰라는 팁이에요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Z18"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "M12",
"part": "공개 후기 실수",
"title": "규격 밖도 그대로",
"type": "judge",
"fix": true,
"screen": "조피가 길이가 안 맞는 토막도 채에 섞는다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">규격 밖도 그대로</text>",
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
"길이가 안 맞는 부분은 버리라는 메모가 있어요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Z18"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "M13",
"part": "공개 후기 실수",
"title": "되직한 양념",
"type": "judge",
"fix": true,
"screen": "조피 양념장이 초고추장처럼 뻑뻑하다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">되직한 양념</text>",
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
"너무 되직하지 않게, 되면 식초를 더하는 식으로 농도를 맞추라는 메모가 있어요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Z18"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "M14",
"part": "공개 후기 실수",
"title": "양념 덩어리",
"type": "judge",
"fix": true,
"screen": "조피 생채에 양념 뭉친 곳이 보인다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">양념 덩어리</text>",
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
"양념 덩어리가 안 보이게 고루 섞으라는 체크 포인트가 있어요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Z18"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "S3",
"part": "조리 3",
"title": "채 굵기 제각각",
"type": "judge",
"fix": true,
"screen": "도마 위 도라지채가 굵은 것, 가는 것 섞여 있다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">도라지생채</text><text x=\"60\" y=\"50\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">채 굵기 제각각</text>",
"setup": [
[
"z",
"맛은 똑같아요!",
"oops"
]
],
"explain": [
[
"t",
"맛은 같아도 모양은 보여요. 문제지에 \"도라지는 0.3cm x 0.3cm x 6cm\"로 썰라고 적혀 있어요.",
"show"
]
],
"src": [
"E01",
"C06b"
],
"retry": "조피가 굵은 채를 다시 가늘게 썬다."
},
{
"id": "M15",
"part": "공개 후기 실수",
"title": "살살 헹구기",
"type": "judge",
"fix": true,
"screen": "조피가 절인 도라지를 물에 한 번 담갔다 뺀다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">살살 헹구기</text>",
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
"짠맛·쓴맛이 빠지게 찬물에서 쥐어 가며 헹구라는 메모가 있어요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Z18"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "M16",
"part": "공개 후기 실수",
"title": "양이 적음",
"type": "judge",
"fix": true,
"screen": "조피가 다듬다 많이 버려 생채가 한 줌뿐이다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">양이 적음</text>",
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
"수량이 정해지진 않았지만 남들보다 적지 않게 최대한 살려 쓰라는 메모가 있어요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Z18"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "R1",
"part": "요구사항 확인",
"title": "요구사항 가 확인",
"type": "judge",
"fix": false,
"screen": "조피가 손을 멈추고 문제지 요구사항 가를 다시 짚는다: \"도라지는 0.3cm x 0.3cm x 6cm…\"",
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
"screen": "조피가 손을 멈추고 문제지 요구사항 나를 다시 짚는다: \"…고추장과 고춧가루 양념으로 무쳐…\"",
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
"id": "S4",
"part": "조리 4 · 불",
"title": "불 하나 더",
"type": "judge",
"fix": true,
"screen": "조피가 두 번째 화구를 켜려고 한다.",
"svg": "<circle cx=\"52\" cy=\"44\" r=\"28\" fill=\"#555\" stroke=\"#1f2a24\" stroke-width=\"3\"/><path d=\"M80,44h32\" stroke=\"#1f2a24\" stroke-width=\"7\" stroke-linecap=\"round\"/><text x=\"52\" y=\"48\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#fff\">도라지생</text><path d=\"M100,66 q-6,-9 0,-18 q6,9 0,18z\" fill=\"#e8873a\" stroke=\"#1f2a24\" stroke-width=\"2\"/>",
"setup": [
[
"z",
"두 개 켜면 두 배 빠르겠다!",
"happy"
]
],
"explain": [
[
"t",
"불도 두 배, 걱정도 두 배예요. 문제지 공통 유의사항에 가스레인지 화구를 2개 이상(2개 포함) 쓰면 실격 항목이라고 적혀 있어요.",
"show"
],
[
"t",
"불 하나로 순서를 짜는 연습을 해요.",
"smile"
]
],
"retry": "조피가 두 번째 불을 끄고 순서를 다시 짠다.",
"src": [
"C08"
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
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">도라지생채</text><text x=\"60\" y=\"50\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">완성</text>",
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
"그래서 내기 전에 딱 멈추고 세 가지만 봐요.\n① 0.3cm x 0.3cm x 6cm 정도\n② 고추장+고춧가루 양념\n③ 물기 짜고 제출 직전 무치기",
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
window.FEEDBACK={"intro": "자, 오늘 도라지생채 연습 돌아볼게요.", "good": ["쓴맛을 뺐어요.", "양념을 바로잡았어요.", "채 굵기를 맞췄어요."], "fix": ["소금 주무르기는 적당히.", "도라지는 고추장+고춧가루, 무는 고춧가루.", "채 굵기 연습."], "zopi": "15분이라 손이 떨렸어요.", "teacher": "떨려도 칼은 천천히. 오늘 채 고왔어요!", "closing": "이 연습은 학원식 연습일 뿐 공식 채점이 아닙니다. 실제 기준은 큐넷 공개과제와 시험장 안내를 따르세요.", "small": "한국산업인력공단과 관계없습니다. 조리 순서와 팁은 ZOP LAB 연습용이고, 현장 이야기는 개인 경험(약 5년 전)이라 공식이 아닙니다. 공개과제 원문: 큐넷 → 자료실 → 공개문제 「한식조리기능사」.", "plan": "① 통도라지 껍질 돌려 벗기기. → ② 0.3cm 굵기, 6cm 길이로 채. → ③ 소금으로 주물러 헹구고 물기 짜기. → ④ 고추장·고춧가루·설탕·식초·파·마늘·깨로 양념장. → ⑤ 제출 직전 무쳐 담기."};

// 비빔밥 학원식 실기연습 — 대사 데이터 (_build/items.py에서 생성, 손으로 고치지 말 것)
window.ITEM={"name": "비빔밥", "time": 50};
window.SRC={"C03": {"t": "「비빔밥」 문제지 수험자 유의사항 6)-바)", "k": "off"}, "C08": {"t": "「비빔밥」 문제지 수험자 유의사항 6)-자)", "k": "off"}, "C21": {"t": "「비빔밥」 문제지 수험자 유의사항 7)", "k": "off"}, "E00": {"t": "「비빔밥」 문제지 시험시간", "k": "off"}, "E01": {"t": "큐넷 한식조리기능사 2026 공개과제 「비빔밥」 요구사항 가", "k": "off"}, "E02": {"t": "큐넷 한식조리기능사 2026 공개과제 「비빔밥」 요구사항 나", "k": "off"}, "E03": {"t": "큐넷 한식조리기능사 2026 공개과제 「비빔밥」 요구사항 다", "k": "off"}, "E04": {"t": "큐넷 한식조리기능사 2026 공개과제 「비빔밥」 요구사항 라", "k": "off"}, "E05": {"t": "큐넷 한식조리기능사 2026 공개과제 「비빔밥」 요구사항 마", "k": "off"}, "E06": {"t": "큐넷 한식조리기능사 2026 공개과제 「비빔밥」 요구사항 바", "k": "off"}, "G07": {"t": "큐넷 위생 세부기준 기타 안내: 칼·도마 구분 사용은 세척으로 대신 가능", "k": "off"}, "G09": {"t": "큐넷 위생 세부기준 기타 안내: 눈금 표시 조리기구 허용(2022년부터)", "k": "off"}, "G10": {"t": "큐넷 위생 세부기준 기타 안내: 안전사고 시 즉시 감독위원에게", "k": "off"}, "H08": {"t": "현장 기억(잡랩 소장, 약 5년 전): 한 번 내면 끝", "k": "field"}, "S_HC66": {"t": "homecofe 블로그 실기 연습 후기 · https://homecofe.tistory.com/66 (조회 2026-10-23)", "k": "zop"}, "S_Y113": {"t": "청춘23 블로그 한식조리기능사 연습 후기 · https://young23.linkwe.kr/113 (조회 2026-10-23)", "k": "zop"}, "U05": {"t": "접시 정리 상태: 감점될 수 있음 (점수 공개 자료 없음)", "k": "none"}, "Z01": {"t": "ZOP LAB 연습 순서: 비빔밥", "k": "zop"}, "Z02": {"t": "ZOP LAB 팁: 비빔밥 흔한 실수", "k": "zop"}, "Z22": {"t": "ZOP LAB 팁: 제출 전 확인 순서", "k": "zop"}};
window.SCENES=[
{
"id": "0",
"part": "실습 전, 학원 휴게 공간",
"title": "노트 복습",
"type": "talk",
"bgDim": true,
"screen": "학원 휴게 공간. 조피가 노트를 펼쳐 놓고 있다. 노트에는 \"비빔밥 50분\"이라고 크게 적혀 있다.",
"svg": "<rect x=\"16\" y=\"8\" width=\"88\" height=\"62\" rx=\"4\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"34\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"14\" fill=\"#1f2a24\">비빔밥 50분</text><text x=\"60\" y=\"54\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"11\" fill=\"#b6533a\">밥부터 올리기</text>",
"lines": [
[
"z",
"(중얼중얼) 비빔밥… 50분. 밥부터 올리기.",
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
"id": "M01",
"part": "공개 후기 실수",
"title": "약고추장 태움",
"type": "judge",
"fix": true,
"screen": "조피가 약고추장을 불에 올려 두고 다른 과제를 한다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">약고추장 태움</text>",
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
"약고추장을 태워 피드백 받은 후기가 있어요. 볶을 땐 자리를 지켜요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Y113"
],
"retry": "조피가 메모대로 다시 한다.",
"startTimer": true
},
{
"id": "M02",
"part": "공개 후기 실수",
"title": "참기름 깜빡",
"type": "judge",
"fix": true,
"screen": "조피가 약고추장에 참기름을 빼먹는다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">참기름 깜빡</text>",
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
"볶은 뒤 참기름을 깜빡한 후기가 있어요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Y113"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "M03",
"part": "공개 후기 실수",
"title": "다시마 과튀김",
"type": "judge",
"fix": true,
"screen": "조피가 다시마를 몇 번이나 다시 튀긴다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">다시마 과튀김</text>",
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
"너무 오래 튀긴 걸 바로 알아봤다는 후기가 있어요. 고온에서 오래 튀기면 쓴맛도 나요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Y113"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "M04",
"part": "공개 후기 실수",
"title": "다시마 젖음",
"type": "judge",
"fix": true,
"screen": "조피가 다시마를 젖은 도마 옆에 둔다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">다시마 젖음</text>",
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
"다시마는 젖지 않게 따로 보관하라는 메모가 있어요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Y113"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "S1",
"part": "조리 1",
"title": "청포묵도 똑같이",
"type": "judge",
"fix": true,
"screen": "조피가 청포묵을 채소와 똑같이 가늘게 채 썰고 있다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">비빔밥</text><text x=\"60\" y=\"50\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">청포묵도 똑같이</text>",
"setup": [
[
"z",
"다 0.3cm로 맞추면 깔끔하죠!",
"happy"
]
],
"explain": [
[
"t",
"깔끔한 건 좋은데 청포묵은 혼자 굵어요. 문제지한테 물어볼까요? 채소와 소고기, 지단은 \"채소, 소고기, 황·백지단의 크기는 0.3cm x 0.3cm x 5cm\"이고, 청포묵은 따로 \"청포묵의 크기는 0.5cm x 0.5cm x 5cm\"라고 적혀 있어요.",
"show"
],
[
"t",
"그리고 우리 학원식 팁으로는 청포묵을 채 썬 뒤 데쳐서 소금·참기름으로 밑간해요. 안 데치면 뻣뻣하고 하얗게 굳기 쉬워요.",
"smile",
"zop"
]
],
"src": [
"E01",
"E03",
"Z02"
],
"retry": "조피가 청포묵을 조금 더 굵게 다시 썰어 끓는 물에 데친다."
},
{
"id": "M05",
"part": "공개 후기 실수",
"title": "재료 개수 빠짐",
"type": "judge",
"fix": true,
"screen": "조피 밥 위 재료가 하나 빠져 있다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">재료 개수 빠짐</text>",
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
"밥 위 재료 개수를 꼭 다시 세라는 팁이에요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Y113"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "M06",
"part": "공개 후기 실수",
"title": "흰 재료끼리",
"type": "judge",
"fix": true,
"screen": "조피가 도라지와 청포묵을 나란히 놓는다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">흰 재료끼리</text>",
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
"하얀 재료끼리는 띄워 배치하라는 메모가 있어요. 같은 색끼리 마주 보게 하는 방법도 소개돼 있어요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Y113"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "M07",
"part": "공개 후기 실수",
"title": "밥 안 보임",
"type": "judge",
"fix": true,
"screen": "조피가 재료로 밥을 가장자리까지 다 덮는다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">밥 안 보임</text>",
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
"가장자리 바깥쪽에 밥이 보이게 올리라는 메모가 있어요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Y113"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "M08",
"part": "공개 후기 실수",
"title": "튀각 가운데",
"type": "judge",
"fix": true,
"screen": "조피가 다시마튀각을 약고추장 위 한가운데 올린다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">튀각 가운데</text>",
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
"튀각은 약고추장 한쪽에 올려 고추장 색이 보이게 하라는 팁이에요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Y113"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "S2",
"part": "조리 2",
"title": "밥은 나중에",
"type": "judge",
"fix": true,
"screen": "조피가 나물부터 볶고 있다. 불린 쌀은 아직 그릇에 그대로다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">비빔밥</text><text x=\"60\" y=\"50\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">밥은 나중에</text>",
"setup": [
[
"z",
"나물이 주인공이니까 나물부터!",
"happy"
]
],
"explain": [
[
"t",
"주인공은 밥이 받쳐 줘야 서요. 밥이 늦으면 설익기 쉽고, 문제지 공통 유의사항에 익지 않은 조리작품은 실격 항목이라고 적혀 있어요.",
"wait"
],
[
"t",
"우리 학원식 순서는 밥부터 불에 올리고, 뜸 들이는 동안 다른 작업을 하는 거예요. 공식 아님 · ZOP LAB 연습 순서예요.",
"smile",
"zop"
]
],
"src": [
"C03",
"Z01"
],
"retry": "조피가 쌀을 먼저 불에 올리고 나물 손질로 돌아간다."
},
{
"id": "M09",
"part": "공개 후기 실수",
"title": "뚜껑 열기",
"type": "judge",
"fix": true,
"screen": "조피가 뜸 들이는 중 뚜껑을 연다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">뚜껑 열기</text>",
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
"뜸 들이기 전까지 뚜껑을 열지 말라는 메모가 있어요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Y113"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "M10",
"part": "공개 후기 실수",
"title": "묵 안 데침",
"type": "judge",
"fix": true,
"screen": "조피가 청포묵을 생으로 담으려 한다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">묵 안 데침</text>",
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
"청포묵은 투명해질 때까지 데치라는 메모가 있어요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Y113"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "M11",
"part": "공개 후기 실수",
"title": "호박 간 부족",
"type": "judge",
"fix": true,
"screen": "조피가 호박을 절이지 않고 바로 볶는다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">호박 간 부족</text>",
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
"호박·도라지 간이 덜 돼 자리 잡히지 않았다는 후기가 있어요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_HC66"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "R1",
"part": "요구사항 확인",
"title": "요구사항 가 확인",
"type": "judge",
"fix": false,
"screen": "조피가 손을 멈추고 문제지 요구사항 가를 다시 짚는다: \"채소, 소고기, 황·백지단의 크기는 0.3cm x 0.3cm x 5cm…\"",
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
"id": "S3",
"part": "조리 3",
"title": "고추장은 옆에",
"type": "judge",
"fix": true,
"screen": "완성 그릇 옆 종지에 볶은 고추장을 따로 담아 두었다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">비빔밥</text><text x=\"60\" y=\"50\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">고추장은 옆에</text>",
"setup": [
[
"z",
"고추장은 취향껏 넣어 드시라고요.",
"thinking"
]
],
"explain": [
[
"t",
"배려는 고마운데 문제지는 자리를 정해 줬어요. \"볶은 고추장은 완성된 밥 위에 얹어내시오\"라고 적혀 있어요. 소고기는 \"소고기는 고추장 볶음과 고명에 사용\"하라고 되어 있어서 고추장에도 들어가요.",
"show"
]
],
"src": [
"E06",
"E04"
],
"retry": "조피가 고추장을 밥 위 가운데에 얹는다."
},
{
"id": "R2",
"part": "요구사항 확인",
"title": "요구사항 나 확인",
"type": "judge",
"fix": false,
"screen": "조피가 손을 멈추고 문제지 요구사항 나를 다시 짚는다: \"호박은 돌려깎기하여 0.3cm x 0.3cm x 5cm…\"",
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
"screen": "조피가 손을 멈추고 문제지 요구사항 다를 다시 짚는다: \"청포묵의 크기는 0.5cm x 0.5cm x 5cm…\"",
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
"screen": "조피가 손을 멈추고 문제지 요구사항 라를 다시 짚는다: \"소고기는 고추장 볶음과 고명에 사용…\"",
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
"id": "R5",
"part": "요구사항 확인",
"title": "요구사항 마 확인",
"type": "judge",
"fix": false,
"screen": "조피가 손을 멈추고 문제지 요구사항 마를 다시 짚는다: \"…색 맞추어 돌려 담으시오…\"",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">요구사항 마 확인</text>",
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
"E05"
]
},
{
"id": "S4",
"part": "조리 4 · 불",
"title": "불 하나 더",
"type": "judge",
"fix": true,
"screen": "조피가 두 번째 화구를 켜려고 한다.",
"svg": "<circle cx=\"52\" cy=\"44\" r=\"28\" fill=\"#555\" stroke=\"#1f2a24\" stroke-width=\"3\"/><path d=\"M80,44h32\" stroke=\"#1f2a24\" stroke-width=\"7\" stroke-linecap=\"round\"/><text x=\"52\" y=\"48\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#fff\">비빔밥</text><path d=\"M100,66 q-6,-9 0,-18 q6,9 0,18z\" fill=\"#e8873a\" stroke=\"#1f2a24\" stroke-width=\"2\"/>",
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
"id": "R6",
"part": "요구사항 확인",
"title": "요구사항 바 확인",
"type": "judge",
"fix": false,
"screen": "조피가 손을 멈추고 문제지 요구사항 바를 다시 짚는다: \"볶은 고추장은 완성된 밥 위에 얹어내시오…\"",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">요구사항 바 확인</text>",
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
"E06"
]
},
{
"id": "G07",
"part": "조리 중",
"title": "같은 도마 쓰기",
"type": "judge",
"fix": false,
"screen": "조피가 고기를 썬 도마와 칼을 깨끗이 씻은 뒤 채소를 썬다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">같은 도마 쓰기</text>",
"setup": [
[
"z",
"씻고 쓰면 되죠?",
"thinking"
]
],
"explain": [
[
"t",
"맞아요. 위생 세부기준 기타 안내에 교차오염 방지를 위한 칼·도마 구분 사용은 세척으로 대신할 수 있다고 적혀 있어요.",
"smile"
]
],
"src": [
"G07"
]
},
{
"id": "G09",
"part": "조리 중",
"title": "눈금 있는 도구",
"type": "judge",
"fix": false,
"screen": "조피가 눈금이 있는 계량컵을 쓰고 있다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">눈금 있는 도구</text>",
"setup": [
[
"z",
"이거 써도 되나요?",
"thinking"
]
],
"explain": [
[
"t",
"눈금 표시된 조리기구는 2022년부터 허용돼서 실격이 아니라고 안내돼 있어요. 다만 재료 썰기에서 눈금에 기대 크기를 재면 채점에 반영된다고 적혀 있어요.",
"smile"
]
],
"src": [
"G09"
]
},
{
"id": "G10",
"part": "조리 중",
"title": "베인 걸 숨기기",
"type": "judge",
"fix": true,
"screen": "조피가 칼에 손을 살짝 베고는 몰래 계속 썬다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">베인 걸 숨기기</text>",
"setup": [
[
"z",
"티 안 나게 그냥 할게요…",
"oops"
]
],
"explain": [
[
"t",
"숨기지 말아요. 위생 세부기준 기타 안내에 자상·화상 같은 안전사고가 나면 즉시 감독위원에게 알리고 조치를 받으라고 적혀 있어요.",
"wait"
]
],
"src": [
"G10"
],
"retry": "조피가 손을 들고 알린 뒤 밴드를 붙인다."
},
{
"id": "SZ",
"part": "제출 전",
"title": "내기 전에 멈추기",
"type": "judge",
"fix": true,
"stopTimer": true,
"screen": "접시에 다 담았다. 그런데 접시 가장자리에 양념 자국이 묻어 있다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">비빔밥</text><text x=\"60\" y=\"50\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">완성</text>",
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
"그래서 내기 전에 딱 멈추고 세 가지만 봐요.\n① 채소·소고기·지단 0.3cm 채, 청포묵만 0.5cm\n② 재료를 색 맞춰 돌려 담았는지\n③ 볶은 고추장은 밥 위에",
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
window.FEEDBACK={"intro": "자, 오늘 비빔밥 연습 돌아볼게요.", "good": ["청포묵 굵기를 따로 맞췄어요.", "밥을 먼저 올리는 순서를 잡았어요.", "고추장 자리를 바로잡았어요."], "fix": ["청포묵은 혼자 0.5cm. 노트에 따로 적기.", "밥 → 나물 순서를 순서표 맨 위에.", "고추장은 밥 위. 담는 그림을 한 번 그려 보기."], "zopi": "50분이 길 줄 알았는데 재료가 많아서 빠듯하네요.", "teacher": "재료가 많을수록 순서가 실력이에요. 오늘 순서 감 잡았어요!", "closing": "이 연습은 학원식 연습일 뿐 공식 채점이 아닙니다. 실제 기준은 큐넷 공개과제와 시험장 안내를 따르세요.", "small": "한국산업인력공단과 관계없습니다. 조리 순서와 팁은 ZOP LAB 연습용이고, 현장 이야기는 개인 경험(약 5년 전)이라 공식이 아닙니다. 공개과제 원문: 큐넷 → 자료실 → 공개문제 「한식조리기능사」.", "plan": "① 불린 쌀로 밥부터 불에 올린다. 뜸 들이는 동안 불을 다른 작업에 쓴다. → ② 도라지는 소금으로 주물러 쓴맛을 빼고, 호박은 돌려깎기 후 채 썰어 살짝 절인다. → ③ 지단은 황·백 따로 부쳐 채, 청포묵은 채 썰어 데친 뒤 소금·참기름으로 밑간. → ④ 팬 하나로 연한 색 → 진한 색 순서로 볶기: 도라지 → 호박 → 고사리 → 고기채. → ⑤ 다진 고기에 고추장·설탕·물·참기름을 넣어 윤기 나게 볶은 고추장을 만든다. → ⑥ 다시마를 기름에 튀겨 튀각으로 부순다. → ⑦ 그릇에 밥 → 재료 돌려 담기 → 볶은 고추장 → 튀각 순서로 마무리."};

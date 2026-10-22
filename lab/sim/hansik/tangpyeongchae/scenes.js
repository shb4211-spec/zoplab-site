// 탕평채 학원식 실기연습 — 대사 데이터 (_build/items.py에서 생성, 손으로 고치지 말 것)
window.ITEM={"name": "탕평채", "time": 35};
window.SRC={"C08": {"t": "「탕평채」 문제지 수험자 유의사항 6)-자)", "k": "off"}, "C21": {"t": "「탕평채」 문제지 수험자 유의사항 7)", "k": "off"}, "E00": {"t": "「탕평채」 문제지 시험시간", "k": "off"}, "E01": {"t": "큐넷 한식조리기능사 2026 공개과제 「탕평채」 요구사항 가", "k": "off"}, "E03": {"t": "큐넷 한식조리기능사 2026 공개과제 「탕평채」 요구사항 다", "k": "off"}, "E05": {"t": "「탕평채」 문제지 지급재료목록", "k": "off"}, "H08": {"t": "현장 기억(잡랩 소장, 약 5년 전): 한 번 내면 끝", "k": "field"}, "U05": {"t": "접시 정리 상태: 감점될 수 있음 (점수 공개 자료 없음)", "k": "none"}, "Z02": {"t": "ZOP LAB 팁: 탕평채 흔한 실수", "k": "zop"}, "Z22": {"t": "ZOP LAB 팁: 제출 전 확인 순서", "k": "zop"}};
window.SCENES=[
{
"id": "0",
"part": "실습 전, 학원 휴게 공간",
"title": "노트 복습",
"type": "talk",
"bgDim": true,
"screen": "학원 휴게 공간. 조피가 노트를 펼쳐 놓고 있다. 노트에는 \"탕평채 35분\"이라고 크게 적혀 있다.",
"svg": "<rect x=\"16\" y=\"8\" width=\"88\" height=\"62\" rx=\"4\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"34\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"14\" fill=\"#1f2a24\">탕평채 35분</text><text x=\"60\" y=\"54\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"11\" fill=\"#b6533a\">묵은 데쳐서</text>",
"lines": [
[
"z",
"(중얼중얼) 탕평채… 35분. 묵은 데쳐서.",
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
"title": "묵 그대로",
"type": "judge",
"fix": true,
"screen": "조피가 청포묵을 썰어 데치지 않고 바로 무친다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">탕평채</text><text x=\"60\" y=\"50\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">묵 그대로</text>",
"setup": [
[
"z",
"묵은 이미 익은 거잖아요.",
"neutral"
]
],
"explain": [
[
"t",
"익은 건 맞지만 문제지는 한 번 더 원해요. 문제지에 \"청포묵은 0.4cm x 0.4cm x 6cm로 썰어 데쳐서\" 쓰라고 적혀 있어요.",
"show"
],
[
"t",
"우리 학원식 팁: 안 데치면 뻣뻣하고, 너무 오래 데치면 흐물흐물해지기 쉬워요. 공식 아님이에요.",
"smile",
"zop"
]
],
"src": [
"E01",
"Z02"
],
"retry": "조피가 묵을 끓는 물에 살짝 데친다.",
"startTimer": true
},
{
"id": "S2",
"part": "조리 2",
"title": "숙주 통째로",
"type": "judge",
"fix": true,
"screen": "조피가 숙주를 머리와 꼬리째 데친다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">탕평채</text><text x=\"60\" y=\"50\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">숙주 통째로</text>",
"setup": [
[
"z",
"숙주는 통째가 귀엽죠.",
"happy"
]
],
"explain": [
[
"t",
"귀여움은 오늘 정리해요. 문제지에 \"거두절미한 숙주\"라고 적혀 있어요. '거두절미'는 머리와 꼬리를 떼는 거예요.",
"show"
]
],
"src": [
"E03"
],
"retry": "조피가 숙주 머리와 꼬리를 뗀다."
},
{
"id": "S3",
"part": "조리 3",
"title": "김 그냥 부수기",
"type": "judge",
"fix": true,
"screen": "조피가 김을 굽지 않고 손으로 부숴 미리 올려 둔다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">탕평채</text><text x=\"60\" y=\"50\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">김 그냥 부수기</text>",
"setup": [
[
"z",
"부수면 다 같은 김이죠.",
"neutral"
]
],
"explain": [
[
"t",
"굽느냐 안 굽느냐가 달라요. 문제지에 \"김은 구워 부셔서 고명\"으로 얹으라고 적혀 있어요. 우리 학원식 팁: 일찍 올리면 눅눅해지니 마지막에요.",
"show",
"zop"
]
],
"src": [
"E05",
"Z02"
],
"retry": "조피가 김을 구워 부수고 마지막에 올린다."
},
{
"id": "S4",
"part": "조리 4 · 불",
"title": "불 하나 더",
"type": "judge",
"fix": true,
"screen": "조피가 두 번째 화구를 켜려고 한다.",
"svg": "<circle cx=\"52\" cy=\"44\" r=\"28\" fill=\"#555\" stroke=\"#1f2a24\" stroke-width=\"3\"/><path d=\"M80,44h32\" stroke=\"#1f2a24\" stroke-width=\"7\" stroke-linecap=\"round\"/><text x=\"52\" y=\"48\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#fff\">탕평채</text><path d=\"M100,66 q-6,-9 0,-18 q6,9 0,18z\" fill=\"#e8873a\" stroke=\"#1f2a24\" stroke-width=\"2\"/>",
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
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">탕평채</text><text x=\"60\" y=\"50\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">완성</text>",
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
"그래서 내기 전에 딱 멈추고 세 가지만 봐요.\n① 묵 0.4cm x 0.4cm x 6cm, 데침\n② 부재료 4~5cm, 숙주 거두절미\n③ 초간장으로 무치고 구운 김 고명",
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
window.FEEDBACK={"intro": "자, 오늘 탕평채 연습 돌아볼게요.", "good": ["묵을 데쳤어요.", "숙주를 다듬었어요.", "김을 구웠어요."], "fix": ["묵은 살짝 데치기.", "거두절미.", "김은 굽고 마지막에."], "zopi": "탕평채 이름이 멋있어요.", "teacher": "이름처럼 고르게 어우러졌어요!", "closing": "이 연습은 학원식 연습일 뿐 공식 채점이 아닙니다. 실제 기준은 큐넷 공개과제와 시험장 안내를 따르세요.", "small": "한국산업인력공단과 관계없습니다. 조리 순서와 팁은 ZOP LAB 연습용이고, 현장 이야기는 개인 경험(약 5년 전)이라 공식이 아닙니다. 공개과제 원문: 큐넷 → 자료실 → 공개문제 「한식조리기능사」.", "plan": "① 숙주 거두절미, 미나리 줄기 4~5cm. → ② 청포묵 채 썰어 데친 뒤 소금·참기름 밑간. → ③ 숙주·미나리 데치기, 고기는 채 썰어 양념해 볶기. → ④ 지단 부쳐 4cm 채, 김 굽기. → ⑤ 초간장(간장·식초·설탕)으로 전부 무쳐 담기. → ⑥ 지단·부순 김 올리기."};

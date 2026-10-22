// 오이소박이 학원식 실기연습 — 대사 데이터 (_build/items.py에서 생성, 손으로 고치지 말 것)
window.ITEM={"name": "오이소박이", "time": 20};
window.SRC={"C08": {"t": "「오이소박이」 문제지 수험자 유의사항 6)-자)", "k": "off"}, "C21": {"t": "「오이소박이」 문제지 수험자 유의사항 7)", "k": "off"}, "E00": {"t": "「오이소박이」 문제지 시험시간", "k": "off"}, "E01": {"t": "큐넷 한식조리기능사 2026 공개과제 「오이소박이」 요구사항 가", "k": "off"}, "E02": {"t": "큐넷 한식조리기능사 2026 공개과제 「오이소박이」 요구사항 나", "k": "off"}, "E04": {"t": "큐넷 한식조리기능사 2026 공개과제 「오이소박이」 요구사항 라", "k": "off"}, "H08": {"t": "현장 기억(잡랩 소장, 약 5년 전): 한 번 내면 끝", "k": "field"}, "U05": {"t": "접시 정리 상태: 감점될 수 있음 (점수 공개 자료 없음)", "k": "none"}, "Z01": {"t": "ZOP LAB 연습 순서: 오이소박이", "k": "zop"}, "Z22": {"t": "ZOP LAB 팁: 제출 전 확인 순서", "k": "zop"}};
window.SCENES=[
{
"id": "0",
"part": "실습 전, 학원 휴게 공간",
"title": "노트 복습",
"type": "talk",
"bgDim": true,
"screen": "학원 휴게 공간. 조피가 노트를 펼쳐 놓고 있다. 노트에는 \"오이소박이 20분\"이라고 크게 적혀 있다.",
"svg": "<rect x=\"16\" y=\"8\" width=\"88\" height=\"62\" rx=\"4\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"34\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"14\" fill=\"#1f2a24\">오이소박이 20분</text><text x=\"60\" y=\"54\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"11\" fill=\"#b6533a\">양쪽 끝 1cm 남기기</text>",
"lines": [
[
"z",
"(중얼중얼) 오이소박이… 20분. 양쪽 끝 1cm 남기기.",
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
"title": "칼집 끝까지",
"type": "judge",
"fix": true,
"screen": "조피가 오이에 칼집을 끝까지 넣어 오이가 갈라진다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">오이소박이</text><text x=\"60\" y=\"50\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">칼집 끝까지</text>",
"setup": [
[
"z",
"깊게 넣어야 소가 잘 들어가죠.",
"happy"
]
],
"explain": [
[
"t",
"들어가긴 하는데 오이가 둘로 갈라져요. 문제지에 칼집을 넣을 때 \"양쪽 끝이 1cm 남도록 하고, 절여\" 쓰라고 적혀 있어요.",
"show"
]
],
"src": [
"E02"
],
"retry": "조피가 새 토막에 양쪽 끝을 남기고 칼집을 넣는다.",
"startTimer": true
},
{
"id": "S2",
"part": "조리 2",
"title": "안 절이고",
"type": "judge",
"fix": true,
"screen": "조피가 칼집 낸 오이에 바로 소를 넣다가 오이가 뚝 부러진다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">오이소박이</text><text x=\"60\" y=\"50\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">안 절이고</text>",
"setup": [
[
"z",
"아앗, 부러졌어요.",
"oops"
]
],
"explain": [
[
"t",
"오이가 아직 뻣뻣해서 그래요. 같은 문장에 절여 쓰라고 적혀 있어요. 우리 학원식 팁: 소금물에 절여 부드럽게 한 뒤 물기를 닦고 소를 채워요. 공식 아님이에요.",
"show",
"zop"
]
],
"src": [
"E02",
"Z01"
],
"retry": "조피가 오이를 소금물에 절였다가 물기를 닦는다."
},
{
"id": "S3",
"part": "조리 3",
"title": "국물 생략",
"type": "judge",
"fix": true,
"screen": "조피가 소박이만 그릇에 담고 양념 그릇은 씻으려 한다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">오이소박이</text><text x=\"60\" y=\"50\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">국물 생략</text>",
"setup": [
[
"z",
"그릇은 깨끗하게!",
"happy"
]
],
"explain": [
[
"t",
"깨끗함은 잠깐 미뤄요. 문제지에 \"그릇에 묻은 양념을 이용하여 국물\"을 만들어 부으라고 적혀 있어요.",
"show"
]
],
"src": [
"E04"
],
"retry": "조피가 양념 그릇에 물을 조금 부어 국물을 만들어 붓는다."
},
{
"id": "S4",
"part": "조리 4 · 불",
"title": "불 하나 더",
"type": "judge",
"fix": true,
"screen": "조피가 두 번째 화구를 켜려고 한다.",
"svg": "<circle cx=\"52\" cy=\"44\" r=\"28\" fill=\"#555\" stroke=\"#1f2a24\" stroke-width=\"3\"/><path d=\"M80,44h32\" stroke=\"#1f2a24\" stroke-width=\"7\" stroke-linecap=\"round\"/><text x=\"52\" y=\"48\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#fff\">오이소박</text><path d=\"M100,66 q-6,-9 0,-18 q6,9 0,18z\" fill=\"#e8873a\" stroke=\"#1f2a24\" stroke-width=\"2\"/>",
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
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">오이소박이</text><text x=\"60\" y=\"50\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">완성</text>",
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
"그래서 내기 전에 딱 멈추고 세 가지만 봐요.\n① 6cm 3토막, 양쪽 끝 1cm 남긴 칼집\n② 부추 1cm, 새우젓 다지기\n③ 그릇 양념으로 국물 붓기",
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
window.FEEDBACK={"intro": "자, 오늘 오이소박이 연습 돌아볼게요.", "good": ["칼집 끝을 남겼어요.", "오이를 절였어요.", "국물을 만들었어요."], "fix": ["양쪽 1cm.", "절이기 먼저.", "국물은 그릇 양념으로."], "zopi": "오이가 부러질 때 마음도 부러졌어요.", "teacher": "다음 오이는 안 부러질 거예요. 오늘 소 넣기 좋았어요!", "closing": "이 연습은 학원식 연습일 뿐 공식 채점이 아닙니다. 실제 기준은 큐넷 공개과제와 시험장 안내를 따르세요.", "small": "한국산업인력공단과 관계없습니다. 조리 순서와 팁은 ZOP LAB 연습용이고, 현장 이야기는 개인 경험(약 5년 전)이라 공식이 아닙니다. 공개과제 원문: 큐넷 → 자료실 → 공개문제 「한식조리기능사」.", "plan": "① 오이를 소금으로 문질러 씻고 6cm 3 토막. → ② 끝 1cm 남기고 3~4 갈래 칼집 → 소금물에 절이기. → ③ 부추 1cm, 파·마늘·생강·새우젓 다지기 → 고춧가루와 소 버무리기. → ④ 절인 오이 물기 닦고 칼집 사이에 소 채우기. → ⑤ 그릇 양념에 물을 조금 부어 국물 → 위에 붓기."};

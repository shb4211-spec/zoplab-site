// 생선찌개 학원식 실기연습 — 대사 데이터 (_build/items.py에서 생성, 손으로 고치지 말 것)
window.ITEM={"name": "생선찌개", "time": 30};
window.SRC={"C04": {"t": "「생선찌개」 문제지 수험자 유의사항 1)", "k": "off"}, "C21": {"t": "「생선찌개」 문제지 수험자 유의사항 7)", "k": "off"}, "E00": {"t": "「생선찌개」 문제지 시험시간", "k": "off"}, "E01": {"t": "큐넷 한식조리기능사 2026 공개과제 「생선찌개」 요구사항 가", "k": "off"}, "E05": {"t": "큐넷 한식조리기능사 2026 공개과제 「생선찌개」 요구사항 마", "k": "off"}, "E06": {"t": "큐넷 한식조리기능사 2026 공개과제 「생선찌개」 요구사항 바", "k": "off"}, "H08": {"t": "현장 기억(잡랩 소장, 약 5년 전): 한 번 내면 끝", "k": "field"}, "U01": {"t": "맛보기 위반: 감점될 수 있음 (점수 공개 자료 없음)", "k": "none"}, "U05": {"t": "접시 정리 상태: 감점될 수 있음 (점수 공개 자료 없음)", "k": "none"}, "Z01": {"t": "ZOP LAB 연습 순서: 생선찌개", "k": "zop"}, "Z02": {"t": "ZOP LAB 팁: 생선찌개 흔한 실수", "k": "zop"}, "Z22": {"t": "ZOP LAB 팁: 제출 전 확인 순서", "k": "zop"}};
window.SCENES=[
{
"id": "0",
"part": "실습 전, 학원 휴게 공간",
"title": "노트 복습",
"type": "talk",
"bgDim": true,
"screen": "학원 휴게 공간. 조피가 노트를 펼쳐 놓고 있다. 노트에는 \"생선찌개 30분\"이라고 크게 적혀 있다.",
"svg": "<rect x=\"16\" y=\"8\" width=\"88\" height=\"62\" rx=\"4\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"34\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"14\" fill=\"#1f2a24\">생선찌개 30분</text><text x=\"60\" y=\"54\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"11\" fill=\"#b6533a\">생선 넣고 젓지 않기</text>",
"lines": [
[
"z",
"(중얼중얼) 생선찌개… 30분. 생선 넣고 젓지 않기.",
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
"title": "국자로 휘휘",
"type": "judge",
"fix": true,
"screen": "생선을 넣은 찌개를 조피가 국자로 휘휘 젓는다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">생선찌개</text><text x=\"60\" y=\"50\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">국자로 휘휘</text>",
"setup": [
[
"z",
"골고루 익으라고 저어요.",
"thinking"
]
],
"explain": [
[
"t",
"마음은 고르지만 생선살은 서운해요. 문제지에 \"생선살이 부서지지 않도록\" 하라고 적혀 있어요.",
"show"
],
[
"t",
"우리 학원식 팁: 생선을 넣은 뒤엔 젓지 말고 거품만 걷어요. 공식 아님 · ZOP LAB 연습 순서예요.",
"smile",
"zop"
]
],
"src": [
"E05",
"Z01"
],
"retry": "조피가 국자를 내려놓고 거품만 살살 걷는다.",
"startTimer": true
},
{
"id": "S2",
"part": "조리 2",
"title": "쑥갓 먼저",
"type": "judge",
"fix": true,
"screen": "끓기 시작하자마자 조피가 쑥갓을 넣는다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">생선찌개</text><text x=\"60\" y=\"50\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">쑥갓 먼저</text>",
"setup": [
[
"z",
"초록색이 있어야 예쁘죠!",
"happy"
]
],
"explain": [
[
"t",
"예쁜 건 마지막에 올려요. 우리 학원식 팁: 쑥갓을 일찍 넣으면 누렇게 되고 숨이 죽기 쉬워요. 불 끄기 직전에 올려요. 공식 아님이에요.",
"show",
"zop"
]
],
"src": [
"Z02"
],
"retry": "조피가 쑥갓을 건져 두었다가 불 끄기 직전에 올린다."
},
{
"id": "S3",
"part": "조리 3",
"title": "머리는 빼고",
"type": "judge",
"fix": true,
"screen": "조피가 생선 몸통만 그릇에 담고 머리는 냄비에 남긴다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">생선찌개</text><text x=\"60\" y=\"50\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">머리는 빼고</text>",
"setup": [
[
"z",
"머리는 좀 무서워서요.",
"oops"
]
],
"explain": [
[
"t",
"무서워도 같이 가요. 문제지에 \"생선머리를 포함하여 전량 제출\"하라고 적혀 있어요.",
"show"
]
],
"src": [
"E06"
],
"retry": "조피가 머리까지 그릇에 담는다."
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
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">생선찌개</text><text x=\"60\" y=\"50\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">완성</text>",
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
"그래서 내기 전에 딱 멈추고 세 가지만 봐요.\n① 생선 4~5cm 토막, 머리 포함 전량\n② 무·두부 2.5cm x 3.5cm x 0.8cm, 쑥갓·파 4cm\n③ 생선살 부서지지 않았는지",
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
window.FEEDBACK={"intro": "자, 오늘 생선찌개 연습 돌아볼게요.", "good": ["생선 넣은 뒤 젓지 않았어요.", "쑥갓 타이밍을 바꿨어요.", "머리까지 담았어요."], "fix": ["생선은 무가 반쯤 익은 뒤에.", "쑥갓은 마지막.", "전량은 머리까지."], "zopi": "생선 머리랑 눈 마주쳤어요.", "teacher": "눈 마주치면 친구예요. 오늘 찌개 국물 좋았어요!", "closing": "이 연습은 학원식 연습일 뿐 공식 채점이 아닙니다. 실제 기준은 큐넷 공개과제와 시험장 안내를 따르세요.", "small": "한국산업인력공단과 관계없습니다. 조리 순서와 팁은 ZOP LAB 연습용이고, 현장 이야기는 개인 경험(약 5년 전)이라 공식이 아닙니다. 공개과제 원문: 큐넷 → 자료실 → 공개문제 「한식조리기능사」.", "plan": "① 동태 비늘·지느러미·내장 정리 후 토막. → ② 무·두부·호박·고추·쑥갓·파를 규격대로 썬다. → ③ 물에 고추장을 풀고 무를 먼저 끓인다. → ④ 무가 반쯤 익으면 생선을 넣고 젓지 않는다(거품만 걷기). → ⑤ 두부·호박 → 고추·파·다진 마늘·생강 → 고춧가루로 색 맞추기. → ⑥ 불을 끄기 직전 쑥갓을 올리고 머리까지 담는다."};

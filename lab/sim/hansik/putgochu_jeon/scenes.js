// 풋고추전 학원식 실기연습 — 대사 데이터 (_build/items.py에서 생성, 손으로 고치지 말 것)
window.ITEM={"name": "풋고추전", "time": 25};
window.SRC={"C04": {"t": "「풋고추전」 문제지 수험자 유의사항 1)", "k": "off"}, "C07": {"t": "「풋고추전」 문제지 수험자 유의사항 6)-라)·사)", "k": "off"}, "C21": {"t": "「풋고추전」 문제지 수험자 유의사항 7)", "k": "off"}, "E00": {"t": "「풋고추전」 문제지 시험시간", "k": "off"}, "E01": {"t": "큐넷 한식조리기능사 2026 공개과제 「풋고추전」 요구사항 가", "k": "off"}, "E02": {"t": "큐넷 한식조리기능사 2026 공개과제 「풋고추전」 요구사항 나", "k": "off"}, "H08": {"t": "현장 기억(잡랩 소장, 약 5년 전): 한 번 내면 끝", "k": "field"}, "U01": {"t": "맛보기 위반: 감점될 수 있음 (점수 공개 자료 없음)", "k": "none"}, "U05": {"t": "접시 정리 상태: 감점될 수 있음 (점수 공개 자료 없음)", "k": "none"}, "Z01": {"t": "ZOP LAB 연습 순서: 풋고추전", "k": "zop"}, "Z02": {"t": "ZOP LAB 팁: 풋고추전 흔한 실수", "k": "zop"}, "Z22": {"t": "ZOP LAB 팁: 제출 전 확인 순서", "k": "zop"}};
window.SCENES=[
{
"id": "0",
"part": "실습 전, 학원 휴게 공간",
"title": "노트 복습",
"type": "talk",
"bgDim": true,
"screen": "학원 휴게 공간. 조피가 노트를 펼쳐 놓고 있다. 노트에는 \"풋고추전 25분\"이라고 크게 적혀 있다.",
"svg": "<rect x=\"16\" y=\"8\" width=\"88\" height=\"62\" rx=\"4\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"34\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"14\" fill=\"#1f2a24\">풋고추전 25분</text><text x=\"60\" y=\"54\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"11\" fill=\"#b6533a\">8개, 5cm</text>",
"lines": [
[
"z",
"(중얼중얼) 풋고추전… 25분. 8개, 5cm.",
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
"title": "데치기 생략",
"type": "judge",
"fix": true,
"screen": "조피가 자른 풋고추를 데치지 않고 바로 소를 채운다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">풋고추전</text><text x=\"60\" y=\"50\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">데치기 생략</text>",
"setup": [
[
"z",
"생으로 해야 아삭하잖아요.",
"happy"
]
],
"explain": [
[
"t",
"아삭함은 아쉽지만 문제지가 먼저예요. 문제지에 \"풋고추는 잘라 데쳐서 사용하며, 완성된 풋고추전은 8개\"라고 적혀 있어요.",
"show"
],
[
"t",
"우리 학원식 팁: 너무 오래 데치면 색이 누레지기 쉬우니 살짝 데쳐 찬물에 헹궈요. 공식 아님이에요.",
"smile",
"zop"
]
],
"src": [
"E02",
"Z02"
],
"retry": "조피가 끓는 소금물에 고추를 살짝 데쳐 찬물에 헹군다.",
"startTimer": true
},
{
"id": "S2",
"part": "조리 2",
"title": "소를 듬뿍",
"type": "judge",
"fix": true,
"screen": "조피가 고추 안에 소를 수북하게 채운다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">풋고추전</text><text x=\"60\" y=\"50\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">소를 듬뿍</text>",
"setup": [
[
"z",
"속이 꽉 차야 맛있죠!",
"happy"
]
],
"explain": [
[
"t",
"꽉 찬 건 좋은데 지지면 부풀어 떨어지기 쉬워요. 우리 학원식 팁: 고추 안쪽에 밀가루를 바르고 소를 평평하게 채워요. 공식 아님 · ZOP LAB 연습 순서예요.",
"show",
"zop"
]
],
"src": [
"Z01",
"Z02"
],
"retry": "조피가 소를 덜어 내고 평평하게 편다."
},
{
"id": "S3",
"part": "조리 3",
"title": "일곱 개면 충분",
"type": "judge",
"fix": true,
"screen": "하나가 찢어졌다. 조피가 남은 일곱 개만 담는다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">풋고추전</text><text x=\"60\" y=\"50\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">일곱 개면 충분</text>",
"setup": [
[
"z",
"일곱도 행운의 숫자인데…",
"oops"
]
],
"explain": [
[
"t",
"행운보다 개수예요. \"완성된 풋고추전은 8개\"라고 적혀 있고, 문제지 공통 유의사항에 수량이 안 맞으면 실격 항목이라고 적혀 있어요.",
"show"
]
],
"src": [
"E02",
"C07"
],
"retry": "조피가 다음 판엔 손질할 때 여유분까지 챙기기로 한다."
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
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">풋고추전</text><text x=\"60\" y=\"50\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">완성</text>",
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
"그래서 내기 전에 딱 멈추고 세 가지만 봐요.\n① 5cm, 데친 고추\n② 8개\n③ 소가 떨어지지 않았는지",
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
window.FEEDBACK={"intro": "자, 오늘 풋고추전 연습 돌아볼게요.", "good": ["고추를 데쳤어요.", "소를 평평하게 채웠어요.", "개수를 세었어요."], "fix": ["데치기는 살짝.", "소는 평평하게.", "개수는 손질 단계에서 확보."], "zopi": "고추가 배불러서 터졌어요.", "teacher": "고추도 과식은 안 돼요. 오늘 손이 많이 늘었어요!", "closing": "이 연습은 학원식 연습일 뿐 공식 채점이 아닙니다. 실제 기준은 큐넷 공개과제와 시험장 안내를 따르세요.", "small": "한국산업인력공단과 관계없습니다. 조리 순서와 팁은 ZOP LAB 연습용이고, 현장 이야기는 개인 경험(약 5년 전)이라 공식이 아닙니다. 공개과제 원문: 큐넷 → 자료실 → 공개문제 「한식조리기능사」.", "plan": "① 고추를 5cm 로 잘라 반 갈라 씨 빼기(8 쪽 확보). → ② 끓는 소금물에 살짝 데쳐 찬물에 헹구기. → ③ 고기 다지고 두부 짜서 소 양념. → ④ 고추 안쪽에 밀가루 → 소 채우기 → 소 면에 밀가루·달걀물. → ⑤ 소 면부터 팬에 지지고, 고추 면은 잠깐만. → ⑥ 8 개 담기."};

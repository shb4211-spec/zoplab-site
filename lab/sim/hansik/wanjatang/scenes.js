// 완자탕 학원식 실기연습 — 대사 데이터 (_build/items.py에서 생성, 손으로 고치지 말 것)
window.ITEM={"name": "완자탕", "time": 30};
window.SRC={"C07": {"t": "「완자탕」 문제지 수험자 유의사항 6)-라)·사)", "k": "off"}, "C08": {"t": "「완자탕」 문제지 수험자 유의사항 6)-자)", "k": "off"}, "C21": {"t": "「완자탕」 문제지 수험자 유의사항 7)", "k": "off"}, "E00": {"t": "「완자탕」 문제지 시험시간", "k": "off"}, "E01": {"t": "큐넷 한식조리기능사 2026 공개과제 「완자탕」 요구사항 가", "k": "off"}, "E02": {"t": "큐넷 한식조리기능사 2026 공개과제 「완자탕」 요구사항 나", "k": "off"}, "E03": {"t": "큐넷 한식조리기능사 2026 공개과제 「완자탕」 요구사항 다", "k": "off"}, "H08": {"t": "현장 기억(잡랩 소장, 약 5년 전): 한 번 내면 끝", "k": "field"}, "U05": {"t": "접시 정리 상태: 감점될 수 있음 (점수 공개 자료 없음)", "k": "none"}, "Z02": {"t": "ZOP LAB 팁: 완자탕 흔한 실수", "k": "zop"}, "Z22": {"t": "ZOP LAB 팁: 제출 전 확인 순서", "k": "zop"}};
window.SCENES=[
{
"id": "0",
"part": "실습 전, 학원 휴게 공간",
"title": "노트 복습",
"type": "talk",
"bgDim": true,
"screen": "학원 휴게 공간. 조피가 노트를 펼쳐 놓고 있다. 노트에는 \"완자탕 30분\"이라고 크게 적혀 있다.",
"svg": "<rect x=\"16\" y=\"8\" width=\"88\" height=\"62\" rx=\"4\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"34\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"14\" fill=\"#1f2a24\">완자탕 30분</text><text x=\"60\" y=\"54\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"11\" fill=\"#b6533a\">완자 지름 3cm, 6개</text>",
"lines": [
[
"z",
"(중얼중얼) 완자탕… 30분. 완자 지름 3cm, 6개.",
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
"title": "완자 크기 제각각",
"type": "judge",
"fix": true,
"screen": "조피가 빚은 완자가 큰 것, 작은 것 섞여 있다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">완자탕</text><text x=\"60\" y=\"50\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">완자 크기 제각</text>",
"setup": [
[
"z",
"큰 건 큰 대로 귀엽잖아요.",
"happy"
]
],
"explain": [
[
"t",
"귀여움보다 고른 크기가 먼저예요. 문제지에 \"완자는 지름 3cm로 6개를 만들고, 국 국물의 양은 200mL 이상\"이라고 적혀 있어요. 개수와 국물 양까지 한 줄에 있어요.",
"show"
]
],
"src": [
"E01",
"C07"
],
"retry": "조피가 완자를 다시 굴려 크기를 맞추고 여섯 개를 센다.",
"startTimer": true
},
{
"id": "S2",
"part": "조리 2",
"title": "달걀을 다 지단으로",
"type": "judge",
"fix": true,
"screen": "조피가 달걀을 전부 풀어 지단을 부치고 있다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">완자탕</text><text x=\"60\" y=\"50\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">달걀을 다 지단</text>",
"setup": [
[
"z",
"지단 넉넉하게 부쳐 둘게요.",
"happy"
]
],
"explain": [
[
"t",
"넉넉함이 오늘은 함정이에요. 문제지에 \"달걀은 지단과 완자용으로 사용\"하라고 적혀 있어요. 완자에 입힐 달걀물을 남겨 둬요.",
"show"
],
[
"t",
"고명은 \"황·백지단(마름모꼴)을 각 2개씩 띄우시오\"예요.",
"smile"
]
],
"src": [
"E02",
"E03"
],
"retry": "조피가 달걀 일부를 완자용으로 덜어 둔다."
},
{
"id": "S3",
"part": "조리 3",
"title": "국물이 뿌옇다",
"type": "judge",
"fix": true,
"screen": "완자를 넣고 끓이는데 거품이 그대로 떠 있고 국물이 탁하다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">완자탕</text><text x=\"60\" y=\"50\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">국물이 뿌옇다</text>",
"setup": [
[
"z",
"거품도 맛이에요!",
"neutral"
]
],
"explain": [
[
"t",
"거품은 맛이 아니라 손님이에요. 우리 학원식 팁: 완자 옷을 두껍게 입히거나 거품을 안 걷으면 국물이 탁해지기 쉬워요. 공식 아님이에요.",
"show",
"zop"
]
],
"src": [
"Z02"
],
"retry": "조피가 국자로 거품을 걷어 낸다."
},
{
"id": "S4",
"part": "조리 4 · 불",
"title": "불 하나 더",
"type": "judge",
"fix": true,
"screen": "조피가 두 번째 화구를 켜려고 한다.",
"svg": "<circle cx=\"52\" cy=\"44\" r=\"28\" fill=\"#555\" stroke=\"#1f2a24\" stroke-width=\"3\"/><path d=\"M80,44h32\" stroke=\"#1f2a24\" stroke-width=\"7\" stroke-linecap=\"round\"/><text x=\"52\" y=\"48\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#fff\">완자탕</text><path d=\"M100,66 q-6,-9 0,-18 q6,9 0,18z\" fill=\"#e8873a\" stroke=\"#1f2a24\" stroke-width=\"2\"/>",
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
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">완자탕</text><text x=\"60\" y=\"50\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">완성</text>",
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
"그래서 내기 전에 딱 멈추고 세 가지만 봐요.\n① 완자 6개, 크기 고르게\n② 국물 200mL 이상\n③ 황·백지단 마름모 각 2개",
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
window.FEEDBACK={"intro": "자, 오늘 완자탕 연습 돌아볼게요.", "good": ["완자 크기를 맞췄어요.", "달걀을 나눠 썼어요.", "거품을 걷었어요."], "fix": ["완자는 빚을 때부터 크기 맞추기.", "달걀은 쓰임새 두 가지.", "국물 양은 담고 나서 한 번 더 보기."], "zopi": "완자 굴리기, 은근히 재밌어요.", "teacher": "재밌을 때 손이 늘어요. 오늘 완자 동글동글 좋았어요!", "closing": "이 연습은 학원식 연습일 뿐 공식 채점이 아닙니다. 실제 기준은 큐넷 공개과제와 시험장 안내를 따르세요.", "small": "한국산업인력공단과 관계없습니다. 조리 순서와 팁은 ZOP LAB 연습용이고, 현장 이야기는 개인 경험(약 5년 전)이라 공식이 아닙니다. 공개과제 원문: 큐넷 → 자료실 → 공개문제 「한식조리기능사」.", "plan": "① 사태로 육수를 올린다(끓는 동안 도마 작업). → ② 살코기 다지고 두부 물기 짜서 섞어 양념 → 3cm 완자 빚기. → ③ 달걀 일부로 황·백지단 부쳐 마름모 썰기. → ④ 완자에 밀가루 → 남은 달걀물 입혀 팬에 굴려 익힌다. → ⑤ 육수를 걸러 국간장·소금으로 간 → 완자 넣어 한소끔. → ⑥ 그릇에 담고 지단을 띄운다."};

// 화양적 학원식 실기연습 — 대사 데이터 (_build/items.py에서 생성, 손으로 고치지 말 것)
window.ITEM={"name": "화양적", "time": 35};
window.SRC={"C04": {"t": "「화양적」 문제지 수험자 유의사항 1)", "k": "off"}, "C06b": {"t": "「화양적」 문제지 수험자 유의사항 4)", "k": "off"}, "C21": {"t": "「화양적」 문제지 수험자 유의사항 7)", "k": "off"}, "E00": {"t": "「화양적」 문제지 시험시간", "k": "off"}, "E01": {"t": "큐넷 한식조리기능사 2026 공개과제 「화양적」 요구사항 가", "k": "off"}, "E02": {"t": "「화양적」 요구사항 나", "k": "off"}, "E03": {"t": "「화양적」 요구사항 다", "k": "off"}, "H08": {"t": "현장 기억(잡랩 소장, 약 5년 전): 한 번 내면 끝", "k": "field"}, "U01": {"t": "맛보기 위반: 감점될 수 있음 (점수 공개 자료 없음)", "k": "none"}, "U05": {"t": "접시 정리 상태: 감점될 수 있음 (점수 공개 자료 없음)", "k": "none"}, "Z01": {"t": "ZOP LAB 연습 순서: 화양적", "k": "zop"}, "Z02": {"t": "ZOP LAB 팁: 화양적 흔한 실수", "k": "zop"}, "Z22": {"t": "ZOP LAB 팁: 제출 전 확인 순서", "k": "zop"}};
window.SCENES=[
{
"id": "0",
"part": "실습 전, 학원 휴게 공간",
"title": "노트 복습",
"type": "talk",
"bgDim": true,
"screen": "학원 휴게 공간. 조피가 노트를 펼쳐 놓고 있다. 노트에는 \"화양적 35분\"이라고 크게 적혀 있다.",
"svg": "<rect x=\"16\" y=\"8\" width=\"88\" height=\"62\" rx=\"4\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"34\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"14\" fill=\"#1f2a24\">화양적 35분</text><text x=\"60\" y=\"54\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"11\" fill=\"#b6533a\">노른자만!</text>",
"lines": [
[
"z",
"(중얼중얼) 화양적… 35분. 노른자만!.",
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
"id": "S1",
"part": "조리 1 · 지단",
"title": "흰자도 아까우니까",
"type": "judge",
"fix": true,
"startTimer": true,
"screen": "조피가 노른자 지단을 부친 뒤, 남은 흰자로도 지단을 부쳐 꼬치 재료 옆에 둔다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">노른자 지단</text><text x=\"60\" y=\"50\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">+ 흰자 지단?</text>",
"setup": [
[
"z",
"흰자도 아까우니까 같이 끼우면 색이 예쁘겠다!",
"happy"
]
],
"explain": [
[
"t",
"알뜰한 마음은 칭찬 한 바구니예요. 그런데 문제지한테 물어볼까요? 문제지에 \"달걀노른자로 지단을 만들어 사용하시오\"라고 적혀 있어요.",
"show"
],
[
"t",
"그리고 바로 밑에 흰자 지단을 쓰면 실격으로 처리된다고 적혀 있어요. 화양적은 노른자만 기억해요.",
"wait"
]
],
"retry": "조피가 흰자 지단을 옆으로 치우고 노른자 지단만 꼬치 재료로 쓴다.",
"src": [
"E02"
]
},
{
"id": "S2",
"part": "조리 2 · 데치기",
"title": "도라지·당근 데치기",
"type": "judge",
"fix": false,
"screen": "조피가 도라지와 당근을 같은 길이로 썰어 끓는 물에 살짝 데친다.",
"svg": "<circle cx=\"52\" cy=\"44\" r=\"28\" fill=\"#555\" stroke=\"#1f2a24\" stroke-width=\"3\"/><path d=\"M80,44h32\" stroke=\"#1f2a24\" stroke-width=\"7\" stroke-linecap=\"round\"/><text x=\"52\" y=\"48\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#fff\">도라지 · 당근</text>",
"setup": [
[
"z",
"살짝 데쳐야 꼬치에 끼울 때 안 부러지더라고요.",
"thinking"
]
],
"explain": [
[
"t",
"좋아요! 우리 학원식 팁이에요. 덜 데치면 꼬치에 끼울 때 부러지기 쉬워요. 공식 아님 · ZOP LAB 연습 순서예요.",
"smile",
"zop"
]
],
"src": [
"Z01",
"Z02"
]
},
{
"id": "S3",
"part": "조리 3 · 꼬치",
"title": "길이가 들쭉날쭉",
"type": "judge",
"fix": true,
"screen": "꼬치에 끼운 재료 끝이 들쭉날쭉하다. 하나는 길고 하나는 짧다.",
"svg": "<path d=\"M10,40h100\" stroke=\"#8a6a3a\" stroke-width=\"3\"/><rect x=\"20\" y=\"20\" width=\"12\" height=\"34\" rx=\"2\" fill=\"#8b4a2b\" stroke=\"#1f2a24\" stroke-width=\"2\"/><rect x=\"36\" y=\"26\" width=\"12\" height=\"42\" rx=\"2\" fill=\"#e07a2e\" stroke=\"#1f2a24\" stroke-width=\"2\"/><rect x=\"52\" y=\"20\" width=\"12\" height=\"50\" rx=\"2\" fill=\"#5a8a3a\" stroke=\"#1f2a24\" stroke-width=\"2\"/><rect x=\"68\" y=\"26\" width=\"12\" height=\"34\" rx=\"2\" fill=\"#e8c547\" stroke=\"#1f2a24\" stroke-width=\"2\"/><rect x=\"84\" y=\"20\" width=\"12\" height=\"42\" rx=\"2\" fill=\"#6b4a3a\" stroke=\"#1f2a24\" stroke-width=\"2\"/><rect x=\"100\" y=\"26\" width=\"12\" height=\"50\" rx=\"2\" fill=\"#f0eadc\" stroke=\"#1f2a24\" stroke-width=\"2\"/>",
"setup": [
[
"z",
"맛은 똑같으니까 길이는 괜찮겠죠?",
"neutral"
]
],
"explain": [
[
"t",
"재료들이 키 재기를 하네요. 문제지에 화양적은 0.6cm × 6cm × 6cm로 만들라고 적혀 있어요. 꼬치 하나가 두께 0.6cm, 가로세로 6cm 정도의 네모예요.",
"show"
],
[
"t",
"문제지에 규격은 '정도'의 뜻이라고 적혀 있어요. 그래도 끝을 가지런히 맞추는 연습은 꼭 해요. 끝이 고르지 않은 건 우리 학원식 팁에서 자주 보는 실수예요.",
"smile",
"zop"
]
],
"retry": "조피가 꼬치 양 끝을 칼로 가지런히 다듬는다.",
"src": [
"E01",
"C06b",
"Z02"
]
},
{
"id": "S4",
"part": "조리 4 · 마무리",
"title": "잣가루 잊음",
"type": "judge",
"fix": true,
"screen": "꼬치 2개를 접시에 올렸다. 잣은 도마 구석에 그대로 있다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">화양적 2꼬치</text><text x=\"60\" y=\"50\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">(잣가루 없음)</text>",
"setup": [
[
"z",
"2꼬치 완성! 끝!",
"happy"
]
],
"explain": [
[
"t",
"잣이 도마 구석에서 손 흔들고 있어요. 문제지에 2꼬치를 만들고 잣가루를 고명으로 얹으라고 적혀 있어요. '고명'은 음식 위에 올리는 장식이에요.",
"show"
],
[
"t",
"잣가루는 종이 위에서 곱게 다져 기름을 빼면 덜 뭉쳐요. 우리 학원식 팁이에요.",
"smile",
"zop"
]
],
"retry": "조피가 잣을 종이 위에서 다져 꼬치 위에 솔솔 뿌린다.",
"src": [
"E03",
"Z01"
]
},
{
"id": "S5",
"part": "조리 5 · 맛",
"title": "고기 간 보기",
"type": "judge",
"fix": true,
"screen": "조피가 양념한 고기를 한 점 집어 입으로 가져가려 한다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">양념 고기 한 점</text>",
"setup": [
[
"z",
"간이 맞는지 살짝만…",
"thinking"
]
],
"explain": [
[
"t",
"입은 잠깐 쉬게 해 줘요. 문제지 공통 유의사항에 조리작업 중에는 맛을 보지 않는다고 적혀 있어요. 맛을 보면 얼마나 깎이는지는 공개되지 않았어요.",
"show"
],
[
"t",
"대신 집에서 양념 배합을 정해 두고 연습해요.",
"smile"
]
],
"retry": "조피가 고기를 내려놓고 정해 둔 배합대로 양념한다.",
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
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">화양적 2꼬치</text><text x=\"60\" y=\"50\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">잣가루</text>",
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
"그래서 내기 전에 딱 멈추고 세 가지만 봐요.\n① 수량: 꼬치 2개\n② 노른자 지단만 썼는지, 잣가루 올렸는지\n③ 꼬치 끝 가지런히, 접시 가장자리 닦기",
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
"E02",
"E03",
"C21",
"U05",
"Z22"
]
}
];
window.FEEDBACK={"intro": "자, 오늘 화양적 '눈식평' 들어갑니다.", "good": ["도라지·당근을 살짝 데쳐서 안 부러지게 끼웠어요.", "꼬치 끝을 다시 가지런히 다듬었어요.", "잣가루까지 챙겨서 마무리했어요."], "fix": ["화양적 지단은 노른자만. 다음 연습 땐 흰자를 처음부터 따로 치워 둬요.", "고명은 마지막 체크 목록에 적어 둬요.", "맛보기 대신 양념 배합을 노트에 정해 두고 연습해요."], "zopi": "알뜰함은 집에서만 쓸게요. 흰자는 내일 아침 계란국으로!", "teacher": "좋아요, 노른자는 꼬치에, 흰자는 아침밥에. 오늘 꼬치처럼 잘 꿰었어요!", "closing": "이 연습은 학원식 연습일 뿐 공식 채점이 아닙니다. 실제 기준은 큐넷 공개과제와 시험장 안내를 따르세요.", "small": "한국산업인력공단과 관계없습니다. 조리 순서와 팁은 ZOP LAB 연습용이고, 현장 이야기는 개인 경험(약 5년 전)이라 공식이 아닙니다. 공개과제 원문: 큐넷 → 자료실 → 공개문제 「한식조리기능사」.", "plan": "① 노른자 지단 부쳐 식히기 → ② 도라지·당근 데치기, 오이 절이기 → ③ 고기·표고 양념해 익히기 → ④ 색 맞춰 꼬치 끼우고 끝 다듬기 → ⑤ 2꼬치 담고 잣가루"};

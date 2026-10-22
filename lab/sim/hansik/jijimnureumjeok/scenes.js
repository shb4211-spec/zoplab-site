// 지짐누름적 학원식 실기연습 — 대사 데이터 (_build/items.py에서 생성, 손으로 고치지 말 것)
window.ITEM={"name": "지짐누름적", "time": 35};
window.SRC={"C05": {"t": "「지짐누름적」 문제지 수험자 유의사항 2)", "k": "off"}, "C07": {"t": "「지짐누름적」 문제지 수험자 유의사항 6)-라)·사)", "k": "off"}, "C21": {"t": "「지짐누름적」 문제지 수험자 유의사항 7)", "k": "off"}, "E00": {"t": "「지짐누름적」 문제지 시험시간", "k": "off"}, "E01": {"t": "큐넷 한식조리기능사 2026 공개과제 「지짐누름적」 요구사항 가", "k": "off"}, "E02": {"t": "「지짐누름적」 요구사항 나", "k": "off"}, "E05": {"t": "「지짐누름적」 문제지 지급재료목록", "k": "off"}, "H08": {"t": "현장 기억(잡랩 소장, 약 5년 전): 한 번 내면 끝", "k": "field"}, "U05": {"t": "접시 정리 상태: 감점될 수 있음 (점수 공개 자료 없음)", "k": "none"}, "Z01": {"t": "ZOP LAB 연습 순서: 지짐누름적", "k": "zop"}, "Z02": {"t": "ZOP LAB 팁: 지짐누름적 흔한 실수", "k": "zop"}, "Z22": {"t": "ZOP LAB 팁: 제출 전 확인 순서", "k": "zop"}};
window.SCENES=[
{
"id": "0",
"part": "실습 전, 학원 휴게 공간",
"title": "노트 복습",
"type": "talk",
"bgDim": true,
"screen": "학원 휴게 공간. 조피가 노트를 펼쳐 놓고 있다. 노트에는 \"지짐누름적 35분\"이라고 크게 적혀 있다.",
"svg": "<rect x=\"16\" y=\"8\" width=\"88\" height=\"62\" rx=\"4\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"34\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"14\" fill=\"#1f2a24\">지짐누름적 35분</text><text x=\"60\" y=\"54\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"11\" fill=\"#b6533a\">꼬치 빼서 내기</text>",
"lines": [
[
"z",
"(중얼중얼) 지짐누름적… 35분. 꼬치 빼서 내기.",
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
"part": "조리 1 · 썰기",
"title": "재료 길이 맞추기",
"type": "judge",
"fix": false,
"startTimer": true,
"screen": "조피가 고기, 표고, 당근, 도라지, 쪽파를 비슷한 길이로 나란히 놓고 칼로 끝을 맞춘다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">고기 · 표고 · 당근</text><text x=\"60\" y=\"50\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">도라지 · 쪽파 (길이 맞춤)</text>",
"setup": [
[
"z",
"다들 키 맞춰 줄 서세요~",
"thinking"
]
],
"explain": [
[
"t",
"좋아요! 문제지에 각 재료는 0.6cm × 1cm × 6cm로 하라고 적혀 있어요. 길이를 먼저 맞춰 두면 꼬치에 끼울 때 편해요.",
"smile"
]
],
"src": [
"E01"
]
},
{
"id": "S2",
"part": "조리 2 · 반입",
"title": "집에서 가져온 부침가루",
"type": "judge",
"fix": true,
"screen": "조피 가방에서 작은 부침가루 봉지가 나온다.",
"svg": "<rect x=\"38\" y=\"14\" width=\"44\" height=\"54\" rx=\"4\" fill=\"#f4d58d\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"46\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"13\" fill=\"#1f2a24\">부침가루</text>",
"setup": [
[
"z",
"이게 더 바삭하던데, 몰래 조금만…",
"oops"
]
],
"explain": [
[
"t",
"바삭함은 마음속에만 넣어 둬요. 문제지 공통 유의사항에 지참준비물 말고 다른 재료는 시험장에 가져올 수 없고, 지급재료 말고 다른 재료를 쓰면 실격 항목이라고 적혀 있어요.",
"show"
],
[
"t",
"이 품목 지급재료엔 밀가루와 달걀이 있어요. 그걸로 연습해요.",
"smile"
]
],
"retry": "조피가 부침가루를 가방에 다시 넣고, 지급된 밀가루를 꺼낸다.",
"src": [
"C05",
"C07",
"E05"
]
},
{
"id": "S3",
"part": "조리 3 · 지지기",
"title": "달걀물이 두껍게",
"type": "judge",
"fix": true,
"screen": "꼬치에 밀가루를 묻히고 달걀물을 듬뿍 부었다. 재료 색이 하나도 안 보인다.",
"svg": "<circle cx=\"52\" cy=\"44\" r=\"28\" fill=\"#555\" stroke=\"#1f2a24\" stroke-width=\"3\"/><path d=\"M80,44h32\" stroke=\"#1f2a24\" stroke-width=\"7\" stroke-linecap=\"round\"/><text x=\"52\" y=\"48\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#fff\">노란 덩어리</text>",
"setup": [
[
"z",
"달걀 이불 두껍게 덮어 주면 따뜻하겠죠?",
"happy"
]
],
"explain": [
[
"t",
"이불이 너무 두꺼워서 재료들이 숨을 못 쉬어요. 달걀물이 두껍게 뭉쳐서 재료 색이 안 보이는 건 우리 학원식 팁에서 자주 보는 실수예요.",
"wait",
"zop"
],
[
"t",
"공식 아님 · ZOP LAB 연습 순서: 밀가루를 얇게 묻히고, 달걀물을 입혀 팬에 앞뒤로 지져요.",
"smile",
"zop"
]
],
"retry": "조피가 새 꼬치에 밀가루를 얇게 묻히고 달걀물을 얇게 입혀 지진다.",
"src": [
"Z01",
"Z02"
]
},
{
"id": "S4",
"part": "조리 4 · 꼬치",
"title": "꼬치째로 담기",
"type": "judge",
"fix": true,
"screen": "다 지진 누름적을 꼬치째 접시에 올렸다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">누름적 2개</text><text x=\"60\" y=\"50\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">(꼬치 꽂힌 채)</text>",
"setup": [
[
"z",
"꼬치가 있어야 적 같잖아요!",
"happy"
]
],
"explain": [
[
"t",
"꼬치가 아직 퇴근을 안 했네요. 문제지에 \"꼬치는 빼서 제출하시오\"라고 적혀 있어요. 화양적이랑 헷갈리기 쉬워요.",
"show"
],
[
"t",
"우리 학원식 팁: 한 김 식힌 뒤 꼬치를 돌려 가며 빼면 재료가 덜 흩어져요.",
"smile",
"zop"
]
],
"retry": "조피가 누름적을 잠깐 식힌 뒤 꼬치를 살살 돌려 뺀다.",
"src": [
"E02",
"Z02"
]
},
{
"id": "S5",
"part": "조리 5 · 수량",
"title": "하나가 부서졌다",
"type": "judge",
"fix": true,
"screen": "꼬치를 빼다가 하나가 흩어졌다. 접시엔 멀쩡한 누름적 1개만 있다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">누름적 1개</text><text x=\"60\" y=\"50\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">+ 흩어진 조각</text>",
"setup": [
[
"z",
"하나는 잘 됐으니까, 하나만 내도…",
"oops"
]
],
"explain": [
[
"t",
"하나는 외로워요. 문제지에 누름적 수량은 2개를 제출하라고 적혀 있어요. 그리고 공통 유의사항에 요구사항대로 수량이 안 되면 실격 항목이라고 적혀 있어요.",
"show"
],
[
"t",
"집에서는 재료를 조금 넉넉히 준비해 두는 연습 대신, 꼬치 빼는 손을 여러 번 연습해요.",
"smile"
]
],
"retry": "조피가 남은 재료로 하나를 다시 끼워 지지고, 식힌 뒤 꼬치를 뺀다. 2개.",
"src": [
"E02",
"C07"
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
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">지짐누름적 2개</text><text x=\"60\" y=\"50\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">꼬치 없음</text>",
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
"그래서 내기 전에 딱 멈추고 세 가지만 봐요.\n① 수량: 누름적 2개\n② 꼬치 뺐는지\n③ 재료 색이 보이게, 접시 가장자리 닦기",
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
"C21",
"U05",
"Z22"
]
}
];
window.FEEDBACK={"intro": "자, 오늘 지짐누름적 '눈식평' 들어갑니다.", "good": ["재료 길이를 먼저 맞춰 두었어요.", "달걀물을 얇게 다시 입혔어요.", "식힌 뒤 꼬치를 돌려 뺐어요."], "fix": ["지급재료만 쓰기. 가방엔 지참준비물만 넣어요.", "\"꼬치는 빼서\" — 화양적과 다른 점을 노트에 적어 둬요.", "수량 2개. 꼬치 빼는 손을 여러 번 연습해요."], "zopi": "화양적은 꼬치째, 누름적은 꼬치 빼고. 이제 안 헷갈려요!", "teacher": "꼬치처럼 머릿속에 쏙 꿰었네요. 오늘 잘 눌러 담았어요!", "closing": "이 연습은 학원식 연습일 뿐 공식 채점이 아닙니다. 실제 기준은 큐넷 공개과제와 시험장 안내를 따르세요.", "small": "한국산업인력공단과 관계없습니다. 조리 순서와 팁은 ZOP LAB 연습용이고, 현장 이야기는 개인 경험(약 5년 전)이라 공식이 아닙니다. 공개과제 원문: 큐넷 → 자료실 → 공개문제 「한식조리기능사」.", "plan": "① 재료 길이 맞춰 썰기 → ② 고기·표고 양념, 당근·도라지 데치기 → ③ 재료 익혀 색 맞춰 꼬치에 끼우기 → ④ 밀가루·달걀물 입혀 지지기 → ⑤ 식혀서 꼬치 빼고 2개 담기"};

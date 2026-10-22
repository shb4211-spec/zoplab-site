// 섭산적 학원식 실기연습 — 대사 데이터 (_build/items.py에서 생성, 손으로 고치지 말 것)
window.ITEM={"name": "섭산적", "time": 30};
window.SRC={"C07": {"t": "「섭산적」 문제지 수험자 유의사항 6)-라)·사)", "k": "off"}, "C20": {"t": "큐넷 수험자 지참준비물(한식조리기능사, 2026)", "k": "off"}, "C21": {"t": "「섭산적」 문제지 수험자 유의사항 7)", "k": "off"}, "E00": {"t": "「섭산적」 문제지 시험시간", "k": "off"}, "E01": {"t": "큐넷 한식조리기능사 2026 공개과제 「섭산적」 요구사항 가", "k": "off"}, "E02": {"t": "「섭산적」 요구사항 나", "k": "off"}, "E03": {"t": "「섭산적」 요구사항 다", "k": "off"}, "E04": {"t": "「섭산적」 요구사항 라", "k": "off"}, "H05": {"t": "현장 기억(잡랩 소장, 약 5년 전): 석쇠를 못 빌리는 경우", "k": "field"}, "H08": {"t": "현장 기억(잡랩 소장, 약 5년 전): 한 번 내면 끝", "k": "field"}, "U05": {"t": "접시 정리 상태: 감점될 수 있음 (점수 공개 자료 없음)", "k": "none"}, "Z01": {"t": "ZOP LAB 연습 순서: 섭산적", "k": "zop"}, "Z02": {"t": "ZOP LAB 팁: 섭산적 흔한 실수", "k": "zop"}, "Z22": {"t": "ZOP LAB 팁: 제출 전 확인 순서", "k": "zop"}};
window.SCENES=[
{
"id": "0",
"part": "실습 전, 학원 휴게 공간",
"title": "노트 복습",
"type": "talk",
"bgDim": true,
"screen": "학원 휴게 공간. 조피가 노트를 펼쳐 놓고 있다. 노트에는 \"섭산적 30분\"이라고 크게 적혀 있다.",
"svg": "<rect x=\"16\" y=\"8\" width=\"88\" height=\"62\" rx=\"4\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"34\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"14\" fill=\"#1f2a24\">섭산적 30분</text><text x=\"60\" y=\"54\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"11\" fill=\"#b6533a\">고기3:두부1, 9개 이상</text>",
"lines": [
[
"z",
"(중얼중얼) 섭산적… 30분. 고기3:두부1, 9개 이상.",
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
"E03"
]
},
{
"id": "S0",
"part": "실습 전 기물 점검",
"title": "석쇠가 없다",
"type": "judge",
"fix": true,
"screen": "조피가 가방을 연다. 칼, 도마… 석쇠 자리가 비어 있다.",
"svg": "<rect x=\"20\" y=\"16\" width=\"80\" height=\"50\" rx=\"6\" fill=\"#f3efe4\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"40\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"13\" fill=\"#1f2a24\">가방 속</text><text x=\"60\" y=\"58\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"11\" fill=\"#b6533a\">석쇠 자리가 비어 있음</text>",
"setup": [
[
"z",
"석쇠는… 옆 사람한테 빌리면 되죠, 뭐.",
"neutral"
]
],
"explain": [
[
"t",
"빌리면 된다는 건 계획이 아니라 소원이에요. 문제지한테 물어볼까요? 문제지에 석쇠로 구우라고 적혀 있어요. 그리고 요구사항의 조리기구(석쇠 등)로 만들지 않으면, 문제지 공통 유의사항에 실격 항목으로 적혀 있어요.",
"show"
],
[
"t",
"시험 보고 온 사람들 얘기로는 석쇠를 못 빌리는 경우가 많았대요. 집에서 연습할 때부터 기물 목록을 쓰고, 석쇠는 꼭 챙겨요.",
"wait",
"field"
]
],
"retry": "조피가 노트 맨 위에 \"석쇠 ✔✔✔\"라고 적는다.",
"src": [
"E02",
"C07",
"C20",
"H05"
]
},
{
"id": "S1",
"part": "조리 1 · 반죽",
"title": "두부 물기",
"type": "judge",
"fix": false,
"startTimer": true,
"screen": "조피가 두부를 면포로 꼭 짜서 으깨고, 다진 고기와 섞는다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">다진 고기 3</text><text x=\"60\" y=\"50\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">두부 1 (물기 꼭)</text>",
"setup": [
[
"z",
"두부는 물기 꼭 짜고, 고기랑 3 대 1!",
"thinking"
]
],
"explain": [
[
"t",
"좋아요! 문제지에 고기와 두부 비율을 3:1로 하라고 적혀 있어요. 두부 물기를 꼭 짜는 건 우리 학원식 팁이에요.",
"smile",
"zop"
]
],
"src": [
"E01",
"Z01"
]
},
{
"id": "S2",
"part": "조리 2 · 치대기",
"title": "대충 섞고 굽기",
"type": "judge",
"fix": true,
"screen": "반죽을 몇 번만 섞고 반대기를 지어 석쇠에 올렸다. 굽는 중에 쩍 갈라진다.",
"svg": "<rect x=\"14\" y=\"44\" width=\"92\" height=\"22\" rx=\"3\" fill=\"none\" stroke=\"#1f2a24\" stroke-width=\"3\"/><path d=\"M30,44v22M46,44v22M62,44v22M78,44v22M94,44v22\" stroke=\"#1f2a24\" stroke-width=\"1.5\"/><rect x=\"30\" y=\"38\" width=\"60\" height=\"12\" rx=\"5\" fill=\"#b7552e\" stroke=\"#1f2a24\" stroke-width=\"2.5\"/><text x=\"60\" y=\"26\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"13\" fill=\"#1f2a24\">쩍 갈라짐</text>",
"setup": [
[
"z",
"섞이기만 하면 되는 거 아니었어요?",
"oops"
]
],
"explain": [
[
"t",
"반죽이 아직 서로 낯을 가려요. 우리 학원식 팁: 끈기가 나게 충분히 치대야 굽다가 덜 갈라져요.",
"show",
"zop"
],
[
"t",
"'반대기'는 반죽을 넓적하게 펴 놓은 거예요. 문제지에 크게 반대기를 지어 석쇠에 구우라고 적혀 있어요.",
"smile"
]
],
"retry": "조피가 반죽을 끈기 나게 치댄 뒤, 고르게 펴서 다시 굽는다.",
"src": [
"E02",
"Z02"
]
},
{
"id": "S3",
"part": "조리 3 · 두께",
"title": "두께가 제각각",
"type": "judge",
"fix": true,
"screen": "반대기가 한쪽은 두껍고 한쪽은 얇다.",
"svg": "<path d=\"M14,58 L106,58 L106,30 L14,50 Z\" fill=\"#8b4a2b\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"74\" text-anchor=\"middle\" font-size=\"9\" fill=\"#555\">한쪽만 두꺼움</text>",
"setup": [
[
"z",
"가운데만 잘 되면 괜찮겠죠?",
"neutral"
]
],
"explain": [
[
"t",
"반대기가 언덕이 됐어요. 문제지에 완성된 섭산적은 0.7cm × 2cm × 2cm라고 적혀 있어요. 두께가 고르지 않으면 썬 조각 두께도 제각각이 되기 쉬워요. 이건 우리 학원식 팁이에요.",
"show",
"zop"
]
],
"retry": "조피가 기름 바른 도마 위에서 반대기를 고르게 다시 편다.",
"src": [
"E03",
"Z02"
]
},
{
"id": "S4",
"part": "조리 4 · 수량",
"title": "여덟 개",
"type": "judge",
"fix": true,
"screen": "구운 반대기를 썰어 세어 보니 8개다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">섭산적</text><text x=\"60\" y=\"50\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">8개</text>",
"setup": [
[
"z",
"팔은 행운의 숫자라던데요!",
"happy"
]
],
"explain": [
[
"t",
"행운은 아홉부터래요. 문제지에 완성된 섭산적을 9개 이상 제출하라고 적혀 있어요. 공통 유의사항에 수량이 안 맞으면 실격 항목이라고 적혀 있어요.",
"show"
],
[
"t",
"우리 학원식 팁: 식힌 뒤 가장자리를 다듬고 썰어요. 썰기 전에 몇 개 나올지 먼저 금을 그어 봐요.",
"smile",
"zop"
]
],
"retry": "조피가 가장자리를 덜 잘라 내고 다시 나눠, 9개를 맞춘다.",
"src": [
"E03",
"C07",
"Z01"
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
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">섭산적 9개</text><text x=\"60\" y=\"50\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">잣가루</text>",
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
"그래서 내기 전에 딱 멈추고 세 가지만 봐요.\n① 수량: 9개 이상\n② 잣가루 올렸는지, 타지 않았는지\n③ 접시 가장자리 닦기",
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
"E03",
"E04",
"C21",
"U05",
"Z22"
]
}
];
window.FEEDBACK={"intro": "자, 오늘 섭산적 '눈식평' 들어갑니다.", "good": ["두부 물기를 꼭 짜고 3:1로 섞었어요.", "반죽을 다시 끈기 나게 치댔어요.", "썰기 전에 9개 이상 나오게 다시 나눴어요."], "fix": ["석쇠는 기물 목록 맨 위에.", "반대기 두께는 고르게. 집에서 도마 위에 펴는 연습.", "수량은 9개 이상. 썰기 전에 금부터."], "zopi": "아홉 개, 이제 손가락 아홉 개로 셀게요.", "teacher": "열 개 있으니 한 개는 남겨 둬요. 오늘 잘 다졌어요!", "closing": "이 연습은 학원식 연습일 뿐 공식 채점이 아닙니다. 실제 기준은 큐넷 공개과제와 시험장 안내를 따르세요.", "small": "한국산업인력공단과 관계없습니다. 조리 순서와 팁은 ZOP LAB 연습용이고, 현장 이야기는 개인 경험(약 5년 전)이라 공식이 아닙니다. 공개과제 원문: 큐넷 → 자료실 → 공개문제 「한식조리기능사」.", "plan": "① 고기 곱게 다지고 두부 물기 짜서 으깨기 → ② 3:1로 섞어 양념하고 끈기 나게 치대기 → ③ 기름 바른 도마에 고르게 반대기 펴기 → ④ 달군 석쇠에 앞뒤 굽기 → ⑤ 식혀 가장자리 다듬고 9개 이상 썰기 → 잣가루"};

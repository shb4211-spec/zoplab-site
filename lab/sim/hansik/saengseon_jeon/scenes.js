// 생선전 학원식 실기연습 — 대사 데이터 (_build/items.py에서 생성, 손으로 고치지 말 것)
window.ITEM={"name": "생선전", "time": 25};
window.SRC={"C08": {"t": "「생선전」 문제지 수험자 유의사항 6)-자)", "k": "off"}, "C21": {"t": "「생선전」 문제지 수험자 유의사항 7)", "k": "off"}, "E00": {"t": "「생선전」 문제지 시험시간", "k": "off"}, "E01": {"t": "큐넷 한식조리기능사 2026 공개과제 「생선전」 요구사항 가", "k": "off"}, "E03": {"t": "큐넷 한식조리기능사 2026 공개과제 「생선전」 요구사항 다", "k": "off"}, "E04": {"t": "큐넷 한식조리기능사 2026 공개과제 「생선전」 요구사항 라", "k": "off"}, "H08": {"t": "현장 기억(잡랩 소장, 약 5년 전): 한 번 내면 끝", "k": "field"}, "U05": {"t": "접시 정리 상태: 감점될 수 있음 (점수 공개 자료 없음)", "k": "none"}, "Z01": {"t": "ZOP LAB 연습 순서: 생선전", "k": "zop"}, "Z02": {"t": "ZOP LAB 팁: 생선전 흔한 실수", "k": "zop"}, "Z22": {"t": "ZOP LAB 팁: 제출 전 확인 순서", "k": "zop"}};
window.SCENES=[
{
"id": "0",
"part": "실습 전, 학원 휴게 공간",
"title": "노트 복습",
"type": "talk",
"bgDim": true,
"screen": "학원 휴게 공간. 조피가 노트를 펼쳐 놓고 있다. 노트에는 \"생선전 25분\"이라고 크게 적혀 있다.",
"svg": "<rect x=\"16\" y=\"8\" width=\"88\" height=\"62\" rx=\"4\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"34\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"14\" fill=\"#1f2a24\">생선전 25분</text><text x=\"60\" y=\"54\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"11\" fill=\"#b6533a\">8개, 포 넉넉히</text>",
"lines": [
[
"z",
"(중얼중얼) 생선전… 25분. 8개, 포 넉넉히.",
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
"title": "노른자만 쓸까",
"type": "judge",
"fix": true,
"screen": "조피가 흰자를 덜어 내고 노른자만 풀고 있다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">생선전</text><text x=\"60\" y=\"50\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">노른자만 쓸까</text>",
"setup": [
[
"z",
"노른자가 색이 예쁘니까요.",
"happy"
]
],
"explain": [
[
"t",
"색 욕심은 잠시 내려놔요. 문제지에 \"달걀은 흰자, 노른자를 혼합하여 사용\"하라고 적혀 있어요. 화양적이랑 헷갈리기 쉬워요.",
"show"
]
],
"src": [
"E03"
],
"retry": "조피가 흰자를 다시 넣고 고루 섞는다.",
"startTimer": true
},
{
"id": "S2",
"part": "조리 2",
"title": "껍질째 포",
"type": "judge",
"fix": true,
"screen": "조피가 껍질이 붙은 채로 생선살을 썰고 있다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">생선전</text><text x=\"60\" y=\"50\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">껍질째 포</text>",
"setup": [
[
"z",
"껍질이 있어야 안 부서지잖아요.",
"thinking"
]
],
"explain": [
[
"t",
"일리는 있지만 문제지가 먼저예요. \"생선은 세장 뜨기하여 껍질을 벗겨 포를 뜨시오\"라고 적혀 있어요.",
"show"
],
[
"t",
"우리 학원식 팁: 뼈와 껍질이 남으면 지저분해 보여요. 공식 아님이에요.",
"smile",
"zop"
]
],
"src": [
"E01",
"Z02"
],
"retry": "조피가 껍질을 벗기고 다시 포를 뜬다."
},
{
"id": "S3",
"part": "조리 3",
"title": "포가 모자라",
"type": "judge",
"fix": true,
"screen": "포를 다 떠 보니 일곱 장이다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">생선전</text><text x=\"60\" y=\"50\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">포가 모자라</text>",
"setup": [
[
"z",
"하나쯤은 괜찮겠죠…",
"oops"
]
],
"explain": [
[
"t",
"하나가 크게 남아요. \"생선전은 8개 제출\"이라고 적혀 있어요. 우리 학원식 팁: 포를 뜰 때 규격보다 약간 크게, 8장 이상 확보해요. 공식 아님 · ZOP LAB 연습 순서예요.",
"show",
"zop"
]
],
"src": [
"E04",
"Z01"
],
"retry": "조피가 다음 판엔 포 뜨기 전에 장수를 먼저 계산한다."
},
{
"id": "S4",
"part": "조리 4 · 불",
"title": "불 하나 더",
"type": "judge",
"fix": true,
"screen": "조피가 두 번째 화구를 켜려고 한다.",
"svg": "<circle cx=\"52\" cy=\"44\" r=\"28\" fill=\"#555\" stroke=\"#1f2a24\" stroke-width=\"3\"/><path d=\"M80,44h32\" stroke=\"#1f2a24\" stroke-width=\"7\" stroke-linecap=\"round\"/><text x=\"52\" y=\"48\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#fff\">생선전</text><path d=\"M100,66 q-6,-9 0,-18 q6,9 0,18z\" fill=\"#e8873a\" stroke=\"#1f2a24\" stroke-width=\"2\"/>",
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
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">생선전</text><text x=\"60\" y=\"50\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">완성</text>",
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
"그래서 내기 전에 딱 멈추고 세 가지만 봐요.\n① 세장 뜨기, 껍질 벗김\n② 0.5cm x 5cm x 4cm 정도, 8개\n③ 흰자·노른자 섞은 달걀물",
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
window.FEEDBACK={"intro": "자, 오늘 생선전 연습 돌아볼게요.", "good": ["달걀을 섞어 썼어요.", "껍질을 벗겼어요.", "포 장수를 계산했어요."], "fix": ["전은 섞은 달걀, 화양적은 노른자. 비교표 만들기.", "세장 뜨기 연습.", "포는 8장 이상."], "zopi": "동태랑 씨름했어요.", "teacher": "씨름은 이긴 거 같아요. 오늘 포 뜨기 늘었어요!", "closing": "이 연습은 학원식 연습일 뿐 공식 채점이 아닙니다. 실제 기준은 큐넷 공개과제와 시험장 안내를 따르세요.", "small": "한국산업인력공단과 관계없습니다. 조리 순서와 팁은 ZOP LAB 연습용이고, 현장 이야기는 개인 경험(약 5년 전)이라 공식이 아닙니다. 공개과제 원문: 큐넷 → 자료실 → 공개문제 「한식조리기능사」.", "plan": "① 동태 비늘·지느러미·머리·내장 정리 후 세 장 뜨기. → ② 껍질 벗기고 규격보다 약간 크게 포 뜨기(8 장 이상). → ③ 소금·흰후춧가루로 밑간 후 물기 닦기. → ④ 밀가루 → 섞은 달걀물 → 팬에 약한 불로 노릇하게. → ⑤ 8 개 담기."};

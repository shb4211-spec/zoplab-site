// 미나리강회 학원식 실기연습 — 대사 데이터 (_build/items.py에서 생성, 손으로 고치지 말 것)
window.ITEM={"name": "미나리강회", "time": 35};
window.SRC={"C08": {"t": "「미나리강회」 문제지 수험자 유의사항 6)-자)", "k": "off"}, "C21": {"t": "「미나리강회」 문제지 수험자 유의사항 7)", "k": "off"}, "E00": {"t": "「미나리강회」 문제지 시험시간", "k": "off"}, "E01": {"t": "큐넷 한식조리기능사 2026 공개과제 「미나리강회」 요구사항 가", "k": "off"}, "E02": {"t": "큐넷 한식조리기능사 2026 공개과제 「미나리강회」 요구사항 나", "k": "off"}, "E03": {"t": "큐넷 한식조리기능사 2026 공개과제 「미나리강회」 요구사항 다", "k": "off"}, "E04": {"t": "큐넷 한식조리기능사 2026 공개과제 「미나리강회」 요구사항 라", "k": "off"}, "G03": {"t": "큐넷 위생상태 및 안전관리 세부기준 10 폐기물 처리 (일부 감점)", "k": "off"}, "G11": {"t": "「미나리강회」 문제지 수험자 유의사항 6)-다) 두 과제 시간 내 제출", "k": "off"}, "G14": {"t": "「미나리강회」 문제지 수험자 유의사항 6)-가) 포기 의사 표현", "k": "off"}, "H08": {"t": "현장 기억(잡랩 소장, 약 5년 전): 한 번 내면 끝", "k": "field"}, "S_Y99": {"t": "청춘23 블로그 한식조리기능사 연습 후기 · https://young23.linkwe.kr/99 (조회 2026-10-23)", "k": "zop"}, "U05": {"t": "접시 정리 상태: 감점될 수 있음 (점수 공개 자료 없음)", "k": "none"}, "Z01": {"t": "ZOP LAB 연습 순서: 미나리강회", "k": "zop"}, "Z02": {"t": "ZOP LAB 팁: 미나리강회 흔한 실수", "k": "zop"}, "Z22": {"t": "ZOP LAB 팁: 제출 전 확인 순서", "k": "zop"}};
window.SCENES=[
{
"id": "0",
"part": "실습 전, 학원 휴게 공간",
"title": "노트 복습",
"type": "talk",
"bgDim": true,
"screen": "학원 휴게 공간. 조피가 노트를 펼쳐 놓고 있다. 노트에는 \"미나리강회 35분\"이라고 크게 적혀 있다.",
"svg": "<rect x=\"16\" y=\"8\" width=\"88\" height=\"62\" rx=\"4\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"34\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"14\" fill=\"#1f2a24\">미나리강회 35분</text><text x=\"60\" y=\"54\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"11\" fill=\"#b6533a\">8개, 폭 1.5cm</text>",
"lines": [
[
"z",
"(중얼중얼) 미나리강회… 35분. 8개, 폭 1.5cm.",
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
"id": "M02",
"part": "공개 후기 실수",
"title": "강회 폭이 좁음",
"type": "judge",
"fix": true,
"screen": "조피 강회 폭이 눈에 띄게 좁다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">강회 폭이 좁음</text>",
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
"폭이 요구보다 작다는 피드백을 받은 후기가 있어요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Y99"
],
"retry": "조피가 메모대로 다시 한다.",
"startTimer": true
},
{
"id": "M03",
"part": "공개 후기 실수",
"title": "얇은 지단",
"type": "judge",
"fix": true,
"screen": "조피가 지단을 평소처럼 얇게 부친다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">얇은 지단</text>",
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
"지단이 얇다는 피드백이 있었어요. 살짝 두툼하게 부쳐요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Y99"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "M04",
"part": "공개 후기 실수",
"title": "미나리 겹쳐 감기",
"type": "judge",
"fix": true,
"screen": "조피가 미나리를 같은 자리에 겹겹이 감는다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">미나리 겹쳐 감기</text>",
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
"감은 부분이 겹치지 않게, 감은 폭도 8개 모두 같게 하라는 메모가 있어요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Y99"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "S1",
"part": "조리 1",
"title": "미나리 푹",
"type": "judge",
"fix": true,
"screen": "조피가 미나리를 끓는 물에 오래 담가 둔다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">미나리강회</text><text x=\"60\" y=\"50\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">미나리 푹</text>",
"setup": [
[
"z",
"푹 익어야 잘 감기죠.",
"thinking"
]
],
"explain": [
[
"t",
"너무 익으면 감다가 끊어지기 쉬워요. 덜 데치면 뻣뻣하고요. 우리 학원식 팁: 줄기만 살짝 데쳐 찬물에 헹궈요. 공식 아님이에요.",
"show",
"zop"
]
],
"src": [
"Z02"
],
"retry": "조피가 새 미나리를 살짝만 데쳐 찬물에 헹군다."
},
{
"id": "M05",
"part": "공개 후기 실수",
"title": "끝 고정 안 함",
"type": "judge",
"fix": true,
"screen": "조피가 미나리 끝을 그냥 늘어뜨려 둔다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">끝 고정 안 함</text>",
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
"끝을 틈에 끼워 던져도 안 풀릴 만큼 고정하라는 팁이에요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Y99"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "M06",
"part": "공개 후기 실수",
"title": "뜨거운 편육 썰기",
"type": "judge",
"fix": true,
"screen": "조피가 삶은 고기를 바로 썬다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">뜨거운 편육 썰기</text>",
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
"편육은 식힌 다음 썰어야 부서지지 않는다는 메모가 있어요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Y99"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "M07",
"part": "공개 후기 실수",
"title": "홍고추 물기",
"type": "judge",
"fix": true,
"screen": "조피가 홍고추를 물기째 썬다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">홍고추 물기</text>",
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
"홍고추는 반드시 물기를 빼고 썰라는 메모가 있어요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Y99"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "S2",
"part": "조리 2",
"title": "뜨거운 편육 썰기",
"type": "judge",
"fix": true,
"screen": "조피가 막 건진 고기를 바로 썰자 부서진다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">미나리강회</text><text x=\"60\" y=\"50\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">뜨거운 편육 썰</text>",
"setup": [
[
"z",
"시간이 없어서 바로…",
"oops"
]
],
"explain": [
[
"t",
"급할수록 고기는 식혀요. 우리 학원식 순서는 소고기를 덩어리째 제일 먼저 삶아 두는 거예요. 덜 식으면 썰 때 부서지기 쉬워요. 공식 아님 · ZOP LAB 연습 순서예요.",
"show",
"zop"
]
],
"src": [
"Z01",
"Z02"
],
"retry": "조피가 다음 판엔 고기 삶기를 맨 앞에 둔다."
},
{
"id": "M08",
"part": "공개 후기 실수",
"title": "미나리 여분 버림",
"type": "judge",
"fix": true,
"screen": "조피가 짧은 미나리 조각을 다 버린다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">미나리 여분 버림</text>",
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
"감다 끊기면 덧대야 하니 짧은 것도 남겨 두라는 메모가 있어요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Y99"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "M10",
"part": "공개 후기 실수",
"title": "겉면 안쪽으로",
"type": "judge",
"fix": true,
"screen": "조피가 미나리 안쪽 면이 보이게 감는다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">겉면 안쪽으로</text>",
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
"미나리 겉면이 바깥을 보게 감으라는 메모가 있어요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Y99"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "R1",
"part": "요구사항 확인",
"title": "요구사항 가 확인",
"type": "judge",
"fix": false,
"screen": "조피가 손을 멈추고 문제지 요구사항 가를 다시 짚는다: \"강회의 폭은 1.5cm, 길이는 5cm…\"",
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
"title": "초고추장 깜빡",
"type": "judge",
"fix": true,
"screen": "조피가 강회 여덟 개만 접시에 담고 내려 한다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">미나리강회</text><text x=\"60\" y=\"50\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">초고추장 깜빡</text>",
"setup": [
[
"z",
"여덟 개 맞아요!",
"happy"
]
],
"explain": [
[
"t",
"개수는 맞는데 친구가 빠졌어요. 문제지에 \"강회는 8개 만들어 초고추장과 함께 제출\"하라고 적혀 있어요.",
"show"
]
],
"src": [
"E04"
],
"retry": "조피가 초고추장을 곁들인다."
},
{
"id": "R2",
"part": "요구사항 확인",
"title": "요구사항 나 확인",
"type": "judge",
"fix": false,
"screen": "조피가 손을 멈추고 문제지 요구사항 나를 다시 짚는다: \"붉은 고추의 폭은 0.5cm, 길이는 4cm…\"",
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
"screen": "조피가 손을 멈추고 문제지 요구사항 다를 다시 짚는다: \"달걀은 황·백지단으로 사용…\"",
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
"screen": "조피가 손을 멈추고 문제지 요구사항 라를 다시 짚는다: \"강회는 8개 만들어 초고추장과 함께 제출…\"",
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
"id": "S4",
"part": "조리 4 · 불",
"title": "불 하나 더",
"type": "judge",
"fix": true,
"screen": "조피가 두 번째 화구를 켜려고 한다.",
"svg": "<circle cx=\"52\" cy=\"44\" r=\"28\" fill=\"#555\" stroke=\"#1f2a24\" stroke-width=\"3\"/><path d=\"M80,44h32\" stroke=\"#1f2a24\" stroke-width=\"7\" stroke-linecap=\"round\"/><text x=\"52\" y=\"48\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#fff\">미나리강</text><path d=\"M100,66 q-6,-9 0,-18 q6,9 0,18z\" fill=\"#e8873a\" stroke=\"#1f2a24\" stroke-width=\"2\"/>",
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
"id": "G03",
"part": "정리",
"title": "쓰레기는 아무 데나",
"type": "judge",
"fix": true,
"screen": "조피가 다듬고 남은 껍질을 개수대 옆에 쌓아 둔다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">쓰레기는 아무 데</text><text x=\"60\" y=\"50\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">나</text>",
"setup": [
[
"z",
"이따 한꺼번에 버릴게요.",
"neutral"
]
],
"explain": [
[
"t",
"쓰레기도 자리가 있어요. 위생 세부기준에 일반쓰레기, 음식물쓰레기, 폐식용유는 시험위원이 지시하는 장소에 처리하고, 안 지키면 일부 감점으로 적혀 있어요.",
"show"
]
],
"src": [
"G03"
],
"retry": "조피가 지시된 통에 나눠 버린다."
},
{
"id": "G11",
"part": "시간 관리",
"title": "한 품목에 올인",
"type": "judge",
"fix": true,
"screen": "조피가 미나리강회에만 매달려 다른 과제는 손도 못 댔다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">한 품목에 올인</text>",
"setup": [
[
"z",
"이거 하나라도 완벽하게!",
"thinking"
]
],
"explain": [
[
"t",
"완벽은 좋지만 실제 시험은 두 과제예요. 문제지 유의사항에 시험시간 내에 과제 두 가지를 제출하지 못하면 실격 항목이라고 적혀 있어요.",
"show"
],
[
"t",
"두 과제를 한 시간 안에 어떻게 섞어 진행하는지는 시험장 안내를 따르고, 집에서는 두 품목 순서표를 같이 짜 봐요. (두 과제 시간 운영 방식은 확인 필요)",
"smile"
]
],
"src": [
"G11"
],
"retry": "조피가 두 품목 순서표를 나란히 적는다."
},
{
"id": "G14",
"part": "시간 관리",
"title": "망했다, 그만할래요",
"type": "judge",
"fix": true,
"screen": "실수가 겹치자 조피가 \"저 그냥 포기할래요\"라고 말한다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">망했다, 그만할래</text><text x=\"60\" y=\"50\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">요</text>",
"setup": [
[
"z",
"이번 판은 망했어요…",
"oops"
]
],
"explain": [
[
"t",
"말 한마디가 크게 남아요. 문제지 유의사항에 시험 도중 포기 의사를 표현하면 실격 항목이라고 적혀 있어요. 실수해도 끝까지 내는 연습을 해요.",
"show"
]
],
"src": [
"G14"
],
"retry": "조피가 숨을 고르고 다음 단계로 간다."
},
{
"id": "SZ",
"part": "제출 전",
"title": "내기 전에 멈추기",
"type": "judge",
"fix": true,
"stopTimer": true,
"screen": "접시에 다 담았다. 그런데 접시 가장자리에 양념 자국이 묻어 있다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">미나리강회</text><text x=\"60\" y=\"50\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">완성</text>",
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
"그래서 내기 전에 딱 멈추고 세 가지만 봐요.\n① 폭 1.5cm, 길이 5cm 정도\n② 붉은 고추 폭 0.5cm, 길이 4cm\n③ 8개, 초고추장",
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
window.FEEDBACK={"intro": "자, 오늘 미나리강회 연습 돌아볼게요.", "good": ["미나리를 살짝 데쳤어요.", "고기 삶기 순서를 바꿨어요.", "초고추장을 챙겼어요."], "fix": ["데치기는 살짝.", "고기는 제일 먼저.", "곁들임 확인."], "zopi": "미나리 감기, 리본 묶는 것 같아요.", "teacher": "리본은 끝이 안 풀리게! 오늘 모양 단정했어요.", "closing": "이 연습은 학원식 연습일 뿐 공식 채점이 아닙니다. 실제 기준은 큐넷 공개과제와 시험장 안내를 따르세요.", "small": "한국산업인력공단과 관계없습니다. 조리 순서와 팁은 ZOP LAB 연습용이고, 현장 이야기는 개인 경험(약 5년 전)이라 공식이 아닙니다. 공개과제 원문: 큐넷 → 자료실 → 공개문제 「한식조리기능사」.", "plan": "① 소고기를 덩어리째 먼저 삶기(가장 오래 걸림). → ② 미나리 줄기를 살짝 데쳐 찬물에 헹구기. → ③ 지단을 두툼하게 부쳐 같은 폭으로 썰고, 홍고추도 규격대로. → ④ 편육 식혀 1.5×5cm 로 썰기. → ⑤ 편육 → 백지단 → 황지단 → 홍고추를 겹쳐 미나리로 감기. → ⑥ 8 개 담고 초고추장 곁들이기."};

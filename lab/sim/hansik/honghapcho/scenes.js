// 홍합초 학원식 실기연습 — 대사 데이터 (_build/items.py에서 생성, 손으로 고치지 말 것)
window.ITEM={"name": "홍합초", "time": 20};
window.SRC={"C08": {"t": "「홍합초」 문제지 수험자 유의사항 6)-자)", "k": "off"}, "C21": {"t": "「홍합초」 문제지 수험자 유의사항 7)", "k": "off"}, "E00": {"t": "「홍합초」 문제지 시험시간", "k": "off"}, "E01": {"t": "큐넷 한식조리기능사 2026 공개과제 「홍합초」 요구사항 가", "k": "off"}, "E02": {"t": "큐넷 한식조리기능사 2026 공개과제 「홍합초」 요구사항 나", "k": "off"}, "E03": {"t": "큐넷 한식조리기능사 2026 공개과제 「홍합초」 요구사항 다", "k": "off"}, "G03": {"t": "큐넷 위생상태 및 안전관리 세부기준 10 폐기물 처리 (일부 감점)", "k": "off"}, "G09": {"t": "큐넷 위생 세부기준 기타 안내: 눈금 표시 조리기구 허용(2022년부터)", "k": "off"}, "G10": {"t": "큐넷 위생 세부기준 기타 안내: 안전사고 시 즉시 감독위원에게", "k": "off"}, "H08": {"t": "현장 기억(잡랩 소장, 약 5년 전): 한 번 내면 끝", "k": "field"}, "S_Y107": {"t": "청춘23 블로그 한식조리기능사 연습 후기 · https://young23.linkwe.kr/107 (조회 2026-10-23)", "k": "zop"}, "U05": {"t": "접시 정리 상태: 감점될 수 있음 (점수 공개 자료 없음)", "k": "none"}, "Z01": {"t": "ZOP LAB 연습 순서: 홍합초", "k": "zop"}, "Z02": {"t": "ZOP LAB 팁: 홍합초 흔한 실수", "k": "zop"}, "Z22": {"t": "ZOP LAB 팁: 제출 전 확인 순서", "k": "zop"}};
window.SCENES=[
{
"id": "0",
"part": "실습 전, 학원 휴게 공간",
"title": "노트 복습",
"type": "talk",
"bgDim": true,
"screen": "학원 휴게 공간. 조피가 노트를 펼쳐 놓고 있다. 노트에는 \"홍합초 20분\"이라고 크게 적혀 있다.",
"svg": "<rect x=\"16\" y=\"8\" width=\"88\" height=\"62\" rx=\"4\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"34\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"14\" fill=\"#1f2a24\">홍합초 20분</text><text x=\"60\" y=\"54\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"11\" fill=\"#b6533a\">홍합 오래 조리지 않기</text>",
"lines": [
[
"z",
"(중얼중얼) 홍합초… 20분. 홍합 오래 조리지 않기.",
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
"id": "M01",
"part": "공개 후기 실수",
"title": "파·마늘 다지기",
"type": "judge",
"fix": true,
"screen": "조피가 홍합초 마늘과 생강을 다진다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">파·마늘 다지기</text>",
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
"마늘·생강은 편, 파는 토막! 다지면 안 된다는 메모가 있어요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Y107"
],
"retry": "조피가 메모대로 다시 한다.",
"startTimer": true
},
{
"id": "M02",
"part": "공개 후기 실수",
"title": "소금물에 데치기",
"type": "judge",
"fix": true,
"screen": "조피가 데칠 물에 소금을 넣으려 한다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">소금물에 데치기</text>",
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
"홍합초엔 소금이 지급되지 않는다는 메모가 있어요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Y107"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "M03",
"part": "공개 후기 실수",
"title": "오래 데치기",
"type": "judge",
"fix": true,
"screen": "조피가 홍합을 오래 삶는다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">오래 데치기</text>",
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
"홍합은 깨끗하게 하려는 과정이니 살짝만 데치라는 팁이에요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Y107"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "S1",
"part": "조리 1",
"title": "수염 그대로",
"type": "judge",
"fix": true,
"screen": "조피가 홍합 수염을 떼지 않고 바로 데친다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">홍합초</text><text x=\"60\" y=\"50\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">수염 그대로</text>",
"setup": [
[
"z",
"수염도 멋이죠.",
"neutral"
]
],
"explain": [
[
"t",
"홍합 수염은 멋이 아니에요. 우리 학원식 팁: 수염을 떼고 씻은 뒤 끓는 물에 살짝 데쳐요. 공식 아님 · ZOP LAB 연습 순서예요.",
"show",
"zop"
]
],
"src": [
"Z01",
"Z02"
],
"retry": "조피가 수염을 하나씩 떼어 낸다."
},
{
"id": "M04",
"part": "공개 후기 실수",
"title": "털 그대로",
"type": "judge",
"fix": true,
"screen": "조피가 홍합 안쪽 털을 그대로 둔다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">털 그대로</text>",
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
"안쪽 털을 가위로 잘라 내라는 메모가 있어요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Y107"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "M05",
"part": "공개 후기 실수",
"title": "국물 다 졸임",
"type": "judge",
"fix": true,
"screen": "조피가 국물이 하나도 없을 때까지 졸인다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">국물 다 졸임</text>",
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
"마지막에 끼얹어야 하니 국물을 다 졸이면 안 된다는 메모가 있어요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Y107"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "M06",
"part": "공개 후기 실수",
"title": "색 연함",
"type": "judge",
"fix": true,
"screen": "조피 홍합초 색이 연하고 윤기가 약하다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">색 연함</text>",
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
"색이 연하고 윤기가 약했다는 후기가 있어요. 끼얹으며 더 조려요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Y107"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "S2",
"part": "조리 2",
"title": "푹 조리기",
"type": "judge",
"fix": true,
"screen": "조피가 홍합을 조림장에 넣고 한참 끓인다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">홍합초</text><text x=\"60\" y=\"50\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">푹 조리기</text>",
"setup": [
[
"z",
"오래 조려야 맛이 배죠.",
"thinking"
]
],
"explain": [
[
"t",
"오래 두면 질기고 쪼그라들기 쉬워요. 우리 학원식 팁: 국물을 끼얹어 가며 윤기 나게 짧게 조려요. 공식 아님이에요.",
"show",
"zop"
]
],
"src": [
"Z02"
],
"retry": "조피가 불을 줄이고 국물을 끼얹으며 짧게 조린다."
},
{
"id": "M07",
"part": "공개 후기 실수",
"title": "참기름 먼저",
"type": "judge",
"fix": true,
"screen": "조피가 처음부터 참기름을 넣고 조린다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">참기름 먼저</text>",
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
"후추와 참기름은 마지막에 넣으라는 메모가 있어요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Y107"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "M08",
"part": "공개 후기 실수",
"title": "잣 젖음",
"type": "judge",
"fix": true,
"screen": "조피가 잣을 물기 있는 곳에 둔다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">잣 젖음</text>",
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
"잣은 물에 젖지 않게 따로 두라는 메모가 있어요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Y107"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "M09",
"part": "공개 후기 실수",
"title": "부재료 숨김",
"type": "judge",
"fix": true,
"screen": "조피가 파·마늘·생강을 홍합 아래로 묻는다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">부재료 숨김</text>",
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
"그릇 한쪽에 부재료가 잘 보이게 담으라는 메모가 있어요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Y107"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "S3",
"part": "조리 3",
"title": "몇 개만 담기",
"type": "judge",
"fix": true,
"screen": "조피가 크고 예쁜 홍합만 골라 담는다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">홍합초</text><text x=\"60\" y=\"50\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">몇 개만 담기</text>",
"setup": [
[
"z",
"예쁜 애들만 무대에!",
"happy"
]
],
"explain": [
[
"t",
"무대는 모두의 것이에요. 문제지에 \"홍합은 데쳐서 전량 사용하고, 촉촉하게 보이도록 국물을 끼얹어\" 내라고 적혀 있어요. 위에는 잣가루예요.",
"show"
]
],
"src": [
"E02",
"E03"
],
"retry": "조피가 남은 홍합까지 담고 국물을 끼얹은 뒤 잣가루를 올린다."
},
{
"id": "R1",
"part": "요구사항 확인",
"title": "요구사항 가 확인",
"type": "judge",
"fix": false,
"screen": "조피가 손을 멈추고 문제지 요구사항 가를 다시 짚는다: \"마늘과 생강은 편으로, 파는 2cm…\"",
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
"id": "R2",
"part": "요구사항 확인",
"title": "요구사항 나 확인",
"type": "judge",
"fix": false,
"screen": "조피가 손을 멈추고 문제지 요구사항 나를 다시 짚는다: \"홍합은 데쳐서 전량 사용하고, 촉촉하게 보이도록 국물을 끼얹어…\"",
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
"screen": "조피가 손을 멈추고 문제지 요구사항 다를 다시 짚는다: \"잣가루를 고명으로…\"",
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
"id": "S4",
"part": "조리 4 · 불",
"title": "불 하나 더",
"type": "judge",
"fix": true,
"screen": "조피가 두 번째 화구를 켜려고 한다.",
"svg": "<circle cx=\"52\" cy=\"44\" r=\"28\" fill=\"#555\" stroke=\"#1f2a24\" stroke-width=\"3\"/><path d=\"M80,44h32\" stroke=\"#1f2a24\" stroke-width=\"7\" stroke-linecap=\"round\"/><text x=\"52\" y=\"48\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#fff\">홍합초</text><path d=\"M100,66 q-6,-9 0,-18 q6,9 0,18z\" fill=\"#e8873a\" stroke=\"#1f2a24\" stroke-width=\"2\"/>",
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
"id": "G09",
"part": "조리 중",
"title": "눈금 있는 도구",
"type": "judge",
"fix": false,
"screen": "조피가 눈금이 있는 계량컵을 쓰고 있다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">눈금 있는 도구</text>",
"setup": [
[
"z",
"이거 써도 되나요?",
"thinking"
]
],
"explain": [
[
"t",
"눈금 표시된 조리기구는 2022년부터 허용돼서 실격이 아니라고 안내돼 있어요. 다만 재료 썰기에서 눈금에 기대 크기를 재면 채점에 반영된다고 적혀 있어요.",
"smile"
]
],
"src": [
"G09"
]
},
{
"id": "G10",
"part": "조리 중",
"title": "베인 걸 숨기기",
"type": "judge",
"fix": true,
"screen": "조피가 칼에 손을 살짝 베고는 몰래 계속 썬다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">베인 걸 숨기기</text>",
"setup": [
[
"z",
"티 안 나게 그냥 할게요…",
"oops"
]
],
"explain": [
[
"t",
"숨기지 말아요. 위생 세부기준 기타 안내에 자상·화상 같은 안전사고가 나면 즉시 감독위원에게 알리고 조치를 받으라고 적혀 있어요.",
"wait"
]
],
"src": [
"G10"
],
"retry": "조피가 손을 들고 알린 뒤 밴드를 붙인다."
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
"id": "SZ",
"part": "제출 전",
"title": "내기 전에 멈추기",
"type": "judge",
"fix": true,
"stopTimer": true,
"screen": "접시에 다 담았다. 그런데 접시 가장자리에 양념 자국이 묻어 있다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">홍합초</text><text x=\"60\" y=\"50\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">완성</text>",
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
"그래서 내기 전에 딱 멈추고 세 가지만 봐요.\n① 마늘·생강 편, 파 2cm\n② 홍합 전량, 국물 끼얹기\n③ 잣가루",
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
window.FEEDBACK={"intro": "자, 오늘 홍합초 연습 돌아볼게요.", "good": ["수염을 뗐어요.", "짧게 조렸어요.", "전량 담았어요."], "fix": ["수염 떼기는 첫 단계.", "조림은 짧게.", "전량과 잣가루."], "zopi": "홍합 수염 뗄 때 미안했어요.", "teacher": "홍합도 이해할 거예요. 오늘 윤기 좋았어요!", "closing": "이 연습은 학원식 연습일 뿐 공식 채점이 아닙니다. 실제 기준은 큐넷 공개과제와 시험장 안내를 따르세요.", "small": "한국산업인력공단과 관계없습니다. 조리 순서와 팁은 ZOP LAB 연습용이고, 현장 이야기는 개인 경험(약 5년 전)이라 공식이 아닙니다. 공개과제 원문: 큐넷 → 자료실 → 공개문제 「한식조리기능사」.", "plan": "① 홍합 수염 떼고 씻기 → 끓는 물에 살짝 데치기. → ② 마늘·생강 편, 파 2cm. → ③ 간장·설탕·물로 조림장을 끓이고 홍합·마늘·생강 넣기. → ④ 국물을 끼얹어 가며 윤기 나게 조리고 파 넣기 → 참기름·후추. → ⑤ 담고 국물 끼얹기 → 잣가루."};

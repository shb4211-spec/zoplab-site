// 오이소박이 학원식 실기연습 — 대사 데이터 (_build/items.py에서 생성, 손으로 고치지 말 것)
window.ITEM={"name": "오이소박이", "time": 20};
window.SRC={"C04": {"t": "「오이소박이」 문제지 수험자 유의사항 1)", "k": "off"}, "C08": {"t": "「오이소박이」 문제지 수험자 유의사항 6)-자)", "k": "off"}, "C21": {"t": "「오이소박이」 문제지 수험자 유의사항 7)", "k": "off"}, "E00": {"t": "「오이소박이」 문제지 시험시간", "k": "off"}, "E01": {"t": "큐넷 한식조리기능사 2026 공개과제 「오이소박이」 요구사항 가", "k": "off"}, "E02": {"t": "큐넷 한식조리기능사 2026 공개과제 「오이소박이」 요구사항 나", "k": "off"}, "E03": {"t": "큐넷 한식조리기능사 2026 공개과제 「오이소박이」 요구사항 다", "k": "off"}, "E04": {"t": "큐넷 한식조리기능사 2026 공개과제 「오이소박이」 요구사항 라", "k": "off"}, "G01": {"t": "「오이소박이」 문제지 수험자 유의사항 3) 지급재료 확인", "k": "off"}, "G14": {"t": "「오이소박이」 문제지 수험자 유의사항 6)-가) 포기 의사 표현", "k": "off"}, "H08": {"t": "현장 기억(잡랩 소장, 약 5년 전): 한 번 내면 끝", "k": "field"}, "S_LHOI": {"t": "lovelyhyodo 실습 후기 (검색 본문 발췌 확인) · https://lovelyhyodo.com/entry/%EC%84%9C%ED%88%B0-%EB%82%98%EC%9D%98-%EC%86%90%EA%B8%B8-%EB%91%90-%EB%B2%88%EC%A7%B8-%EC%8B%A4%EC%8A%B5%EC%9D%98-%EA%B8%B0%EC%96%B5 (조회 2026-10-23)", "k": "zop"}, "S_TR6854542": {"t": "만개의레시피 실기동영상 레시피 설명 · https://www.10000recipe.com/recipe/6854542 (조회 2026-10-23)", "k": "zop"}, "U01": {"t": "맛보기 위반: 감점될 수 있음 (점수 공개 자료 없음)", "k": "none"}, "U05": {"t": "접시 정리 상태: 감점될 수 있음 (점수 공개 자료 없음)", "k": "none"}, "Z01": {"t": "ZOP LAB 연습 순서: 오이소박이", "k": "zop"}, "Z22": {"t": "ZOP LAB 팁: 제출 전 확인 순서", "k": "zop"}};
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
"당신은 선생님 옆에서 같이 보는 '체크 눈'이에요. 고칠 점이 보이면 「이의 있음!」, 괜찮으면 「괜찮아요」."
]
],
"src": [
"E00",
"E01"
]
},
{
"id": "G01",
"part": "시작 전",
"title": "재료 확인은 지금",
"type": "judge",
"fix": true,
"screen": "시작 신호 전. 조피가 지급재료를 보지도 않고 칼부터 꺼낸다. 받은 재료: 오이 · 부추 · 새우젓 · 고춧가루 · 대파 · 마늘 · 생강 · 소금",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">재료 확인은 지금</text>",
"setup": [
[
"z",
"재료는 쓰면서 보면 되죠.",
"neutral"
]
],
"explain": [
[
"t",
"재료는 지금 봐요. 문제지 유의사항에 지급재료는 시험 전에 확인하고, 이상이 있으면 그때 조치를 받으며 시험 중에는 교환이나 추가 지급을 하지 않는다고 적혀 있어요.",
"show"
]
],
"src": [
"G01"
],
"retry": "조피가 재료 이름을 하나씩 짚으며 확인한다."
},
{
"id": "M02",
"part": "공개 후기 실수",
"title": "십자 안 맞음",
"type": "judge",
"fix": true,
"screen": "조피 칼집이 한쪽으로 쏠려 있다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">십자 안 맞음</text>",
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
"잘라 봤을 때 열십자 모양이 나오게 네 군데 칼집을 내라는 메모가 있어요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_TR6854542"
],
"retry": "조피가 메모대로 다시 한다.",
"startTimer": true
},
{
"id": "M03",
"part": "공개 후기 실수",
"title": "뜨거운 물 절임",
"type": "judge",
"fix": true,
"screen": "조피가 빨리 절이려고 뜨거운 물을 붓는다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">뜨거운 물 절임</text>",
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
"뜨거운 물은 안 되고 미지근하거나 찬물로 절이라는 메모가 있어요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_TR6854542"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "M04",
"part": "공개 후기 실수",
"title": "덜 절임",
"type": "judge",
"fix": true,
"screen": "조피가 절이자마자 소를 넣으려 한다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">덜 절임</text>",
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
"위아래를 눌러 가운데가 살짝 벌어지면 잘 절여진 거라는 메모가 있어요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_TR6854542"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "M05",
"part": "공개 후기 실수",
"title": "부추 먼저 섞기",
"type": "judge",
"fix": true,
"screen": "조피가 부추를 양념에 처음부터 섞어 둔다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">부추 먼저 섞기</text>",
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
"부추를 일찍 섞으면 풋내가 나고 물이 생기니 넣기 직전에 가볍게 섞으라는 팁이에요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_TR6854542"
],
"retry": "조피가 메모대로 다시 한다."
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
"retry": "조피가 새 토막에 양쪽 끝을 남기고 칼집을 넣는다."
},
{
"id": "M06",
"part": "공개 후기 실수",
"title": "바닥 양념",
"type": "judge",
"fix": true,
"screen": "조피 오이 바닥에 양념이 덕지덕지 묻어 있다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">바닥 양념</text>",
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
"바닥에 닿는 부분의 양념은 닦으라는 메모가 있어요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_TR6854542"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "M07",
"part": "공개 후기 실수",
"title": "한쪽만 소",
"type": "judge",
"fix": true,
"screen": "조피가 칼집 한두 곳에만 소를 넣는다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">한쪽만 소</text>",
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
"네 군데 모두 소를 채우라는 메모가 있어요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_TR6854542"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "M09",
"part": "공개 후기 실수",
"title": "안 헹굼",
"type": "judge",
"fix": true,
"screen": "조피가 절인 오이를 헹구지 않고 소를 넣는다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">안 헹굼</text>",
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
"절인 오이는 찬물에 헹군 뒤 소를 넣는 순서로 소개돼 있어요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_TR6854542"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "M10",
"part": "공개 후기 실수",
"title": "세게 밀어 넣기",
"type": "judge",
"fix": true,
"screen": "조피가 소를 힘주어 꾹꾹 밀어 넣는다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">세게 밀어 넣기</text>",
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
"힘을 주면 오이가 쉽게 터지니 천천히 고르게 넣으라는 실습 후기가 있어요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_LHOI"
],
"retry": "조피가 메모대로 다시 한다."
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
"id": "M11",
"part": "공개 후기 실수",
"title": "한쪽으로 몰린 소",
"type": "judge",
"fix": true,
"screen": "조피 오이 한쪽 칼집에만 소가 몰려 있다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">한쪽으로 몰린 소</text>",
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
"소가 한쪽으로 치우치지 않게 균일하게 넣으라는 메모가 있어요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_LHOI"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "M12",
"part": "공개 후기 실수",
"title": "칼 미끄러짐",
"type": "judge",
"fix": true,
"screen": "조피가 오이를 세운 채 칼집을 서둘러 낸다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">칼 미끄러짐</text>",
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
"칼이 미끄러지지 않게, 손을 다치지 않게 조심하라는 실습 메모가 있어요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_LHOI"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "R1",
"part": "요구사항 확인",
"title": "요구사항 가 확인",
"type": "judge",
"fix": false,
"screen": "조피가 손을 멈추고 문제지 요구사항 가를 다시 짚는다: \"오이는 6cm길이로 3토막…\"",
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
"screen": "조피가 손을 멈추고 문제지 요구사항 나를 다시 짚는다: \"…양쪽 끝이 1cm 남도록 하고, 절여…\"",
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
"id": "R3",
"part": "요구사항 확인",
"title": "요구사항 다 확인",
"type": "judge",
"fix": false,
"screen": "조피가 손을 멈추고 문제지 요구사항 다를 다시 짚는다: \"…부추는 1cm 길이로…\"",
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
"screen": "조피가 손을 멈추고 문제지 요구사항 라를 다시 짚는다: \"그릇에 묻은 양념을 이용하여 국물…\"",
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
"id": "GC04",
"part": "조리 중",
"title": "살짝 맛만",
"type": "judge",
"fix": true,
"screen": "조피가 양념을 숟가락으로 떠서 입으로 가져간다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">살짝 맛만</text>",
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
"숟가락 내려놓아요! 문제지 유의사항에 위생과 숙련된 기능평가를 위해 조리 작업 시 맛을 보지 않는다고 적혀 있어요. 얼마나 깎이는지는 공개되지 않았어요.",
"show"
]
],
"src": [
"C04",
"U01"
],
"retry": "조피가 숟가락을 내려놓는다."
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

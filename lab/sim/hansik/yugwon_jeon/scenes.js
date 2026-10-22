// 육원전 학원식 실기연습 — 대사 데이터 (_build/items.py에서 생성, 손으로 고치지 말 것)
window.ITEM={"name": "육원전", "time": 20};
window.SRC={"C03": {"t": "「육원전」 문제지 수험자 유의사항 6)-바)", "k": "off"}, "C08": {"t": "「육원전」 문제지 수험자 유의사항 6)-자)", "k": "off"}, "C21": {"t": "「육원전」 문제지 수험자 유의사항 7)", "k": "off"}, "E00": {"t": "「육원전」 문제지 시험시간", "k": "off"}, "E01": {"t": "큐넷 한식조리기능사 2026 공개과제 「육원전」 요구사항 가", "k": "off"}, "E02": {"t": "큐넷 한식조리기능사 2026 공개과제 「육원전」 요구사항 나", "k": "off"}, "E03": {"t": "큐넷 한식조리기능사 2026 공개과제 「육원전」 요구사항 다", "k": "off"}, "G05": {"t": "큐넷 위생 세부기준 7 장신구 (일부 감점)", "k": "off"}, "G06": {"t": "큐넷 위생 세부기준 3 위생모 (빈틈으로 머리카락 보임: 전체 0점)", "k": "off"}, "G08": {"t": "큐넷 위생 세부기준 11 부정 방지 (조리기구에 성명 등: 전체 0점)", "k": "off"}, "H08": {"t": "현장 기억(잡랩 소장, 약 5년 전): 한 번 내면 끝", "k": "field"}, "S_Y102": {"t": "청춘23 블로그 한식조리기능사 연습 후기 · https://young23.linkwe.kr/102 (조회 2026-10-23)", "k": "zop"}, "U05": {"t": "접시 정리 상태: 감점될 수 있음 (점수 공개 자료 없음)", "k": "none"}, "Z01": {"t": "ZOP LAB 연습 순서: 육원전", "k": "zop"}, "Z02": {"t": "ZOP LAB 팁: 육원전 흔한 실수", "k": "zop"}, "Z22": {"t": "ZOP LAB 팁: 제출 전 확인 순서", "k": "zop"}};
window.SCENES=[
{
"id": "0",
"part": "실습 전, 학원 휴게 공간",
"title": "노트 복습",
"type": "talk",
"bgDim": true,
"screen": "학원 휴게 공간. 조피가 노트를 펼쳐 놓고 있다. 노트에는 \"육원전 20분\"이라고 크게 적혀 있다.",
"svg": "<rect x=\"16\" y=\"8\" width=\"88\" height=\"62\" rx=\"4\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"34\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"14\" fill=\"#1f2a24\">육원전 20분</text><text x=\"60\" y=\"54\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"11\" fill=\"#b6533a\">지름 4cm, 6개</text>",
"lines": [
[
"z",
"(중얼중얼) 육원전… 20분. 지름 4cm, 6개.",
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
"id": "G06",
"part": "시작 전",
"title": "삐져나온 머리카락",
"type": "judge",
"fix": true,
"screen": "조피 위생모 옆으로 머리카락이 삐져나와 있다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">삐져나온 머리카락</text>",
"setup": [
[
"z",
"이 정도는 괜찮죠?",
"neutral"
]
],
"explain": [
[
"t",
"큐넷 위생 세부기준에 위생모에 빈틈이 있어 머리카락이 보이면 위생 점수 전체 0점으로 적혀 있어요.",
"show"
]
],
"src": [
"G06"
],
"retry": "조피가 머리카락을 위생모 안으로 넣는다."
},
{
"id": "G05",
"part": "시작 전",
"title": "반지 그대로",
"type": "judge",
"fix": true,
"screen": "조피 손가락에 반지가 끼워져 있다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">반지 그대로</text>",
"setup": [
[
"z",
"소중한 거라 빼기 싫어요.",
"oops"
]
],
"explain": [
[
"t",
"소중하면 가방에 고이 넣어요. 위생 세부기준에 장신구는 일체 착용 금지(위생모 고정용 머리핀만 허용)이고, 안 지키면 일부 감점으로 적혀 있어요.",
"show"
]
],
"src": [
"G05"
],
"retry": "조피가 반지를 빼서 가방에 넣는다."
},
{
"id": "G08",
"part": "시작 전",
"title": "칼에 이름표",
"type": "judge",
"fix": true,
"screen": "조피 칼 손잡이에 이름 스티커가 붙어 있다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">칼에 이름표</text>",
"setup": [
[
"z",
"잃어버릴까 봐 붙였어요.",
"neutral"
]
],
"explain": [
[
"t",
"위생 세부기준 부정 방지 항목에 조리기구에 소속이나 성명이 있으면 전체 0점으로 적혀 있어요. 복장은 테이프로 가릴 수 있지만 조리도구는 테이프로 가리는 것도 안 된다고 적혀 있어요.",
"show"
]
],
"src": [
"G08"
],
"retry": "조피가 집에서 스티커를 떼어 오기로 노트에 적는다."
},
{
"id": "M01",
"part": "공개 후기 실수",
"title": "완성 크기로 빚기",
"type": "judge",
"fix": true,
"screen": "조피가 완자를 딱 요구 크기로 빚는다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">완성 크기로 빚기</text>",
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
"지지는 순간 크기가 확 줄고 두꺼워졌다는 후기가 있어요. 얇고 넓게 빚어요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Y102"
],
"retry": "조피가 메모대로 다시 한다.",
"startTimer": true
},
{
"id": "M02",
"part": "공개 후기 실수",
"title": "수량보다 크기",
"type": "judge",
"fix": true,
"screen": "조피가 크기를 맞추다 개수가 5개뿐이다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">수량보다 크기</text>",
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
"크기 상관없이 먼저 6개로 나누라는 메모가 있어요. 수량이 우선이에요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Y102"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "M03",
"part": "공개 후기 실수",
"title": "덜 익힘",
"type": "judge",
"fix": true,
"screen": "조피가 겉만 노릇해지자 꺼낸다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">덜 익힘</text>",
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
"익지 않으면 실격이라는 메모가 있어요. 약불로 속까지 익혀요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Y102"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "S1",
"part": "조리 1",
"title": "볼록한 완자",
"type": "judge",
"fix": true,
"screen": "조피가 반죽을 동글동글 공처럼 빚고 있다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">육원전</text><text x=\"60\" y=\"50\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">볼록한 완자</text>",
"setup": [
[
"z",
"동그래야 육원전이죠.",
"happy"
]
],
"explain": [
[
"t",
"동그라미는 맞는데 납작해야 해요. 문제지에 \"육원전은 지름 4cm, 두께 0.7cm\"가 되도록 하라고 적혀 있어요.",
"show"
],
[
"t",
"우리 학원식 팁: 익으면 가운데가 부풀기 쉬우니 가운데를 살짝 눌러 빚어요. 공식 아님이에요.",
"smile",
"zop"
]
],
"src": [
"E01",
"Z02"
],
"retry": "조피가 반죽을 동글납작하게 누른다."
},
{
"id": "M04",
"part": "공개 후기 실수",
"title": "오버쿡",
"type": "judge",
"fix": true,
"screen": "조피가 육원전을 진갈색이 되도록 지진다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">오버쿡</text>",
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
"오버쿡을 조심하라는 후기가 있어요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Y102"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "M05",
"part": "공개 후기 실수",
"title": "두부 물기 그대로",
"type": "judge",
"fix": true,
"screen": "조피가 두부를 짜지 않고 섞는다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">두부 물기 그대로</text>",
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
"두부는 젖은 면포로 꼭 짜서 으깨라는 메모가 있어요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Y102"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "M06",
"part": "공개 후기 실수",
"title": "밀가루 두껍게",
"type": "judge",
"fix": true,
"screen": "조피가 밀가루를 듬뿍 묻힌 채 달걀물에 넣는다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">밀가루 두껍게</text>",
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
"밀가루는 앞뒤로 묻히고 살짝 털라는 메모가 있어요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Y102"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "S2",
"part": "조리 2",
"title": "센 불로 빨리",
"type": "judge",
"fix": true,
"screen": "조피가 센 불에 육원전을 올려 겉이 금방 진해진다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">육원전</text><text x=\"60\" y=\"50\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">센 불로 빨리</text>",
"setup": [
[
"z",
"빨리 익히면 시간 절약!",
"happy"
]
],
"explain": [
[
"t",
"겉만 빨리 익어요. 우리 학원식 팁: 약한 불에서 충분히 익혀야 속이 덜 익지 않아요. 문제지 공통 유의사항에 익지 않은 조리작품은 실격 항목이라고 적혀 있어요.",
"wait",
"zop"
]
],
"src": [
"Z02",
"C03"
],
"retry": "조피가 불을 줄이고 천천히 앞뒤를 지진다."
},
{
"id": "M07",
"part": "공개 후기 실수",
"title": "옆면 무시",
"type": "judge",
"fix": true,
"screen": "조피가 육원전 앞뒤만 지진다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">옆면 무시</text>",
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
"옆면부터 지지라는 방식이 소개돼 있어요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Y102"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "M08",
"part": "공개 후기 실수",
"title": "굵게 다진 고기",
"type": "judge",
"fix": true,
"screen": "조피가 고기를 대충 다진다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">굵게 다진 고기</text>",
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
"두부와 고기를 곱게 다지라는 팁이에요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Y102"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "R1",
"part": "요구사항 확인",
"title": "요구사항 가 확인",
"type": "judge",
"fix": false,
"screen": "조피가 손을 멈추고 문제지 요구사항 가를 다시 짚는다: \"육원전은 지름 4cm, 두께 0.7cm…\"",
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
"title": "반죽 다 쓰기",
"type": "judge",
"fix": false,
"screen": "조피가 반죽으로 여섯 개 넘게 빚어 두고 고른 여섯 개를 고른다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">육원전</text><text x=\"60\" y=\"50\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">반죽 다 쓰기</text>",
"setup": [
[
"z",
"크기 비슷한 걸로 여섯 개 골라 낼게요.",
"thinking"
]
],
"explain": [
[
"t",
"좋아요! \"육원전은 6개를 제출\"이에요. 여유 있게 빚어 두고 고른 걸 내는 건 우리 학원식 팁이에요. 공식 아님 · ZOP LAB 연습 순서예요.",
"smile",
"zop"
]
],
"src": [
"E03",
"Z01"
]
},
{
"id": "R2",
"part": "요구사항 확인",
"title": "요구사항 나 확인",
"type": "judge",
"fix": false,
"screen": "조피가 손을 멈추고 문제지 요구사항 나를 다시 짚는다: \"달걀은 흰자, 노른자를 혼합하여 사용…\"",
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
"screen": "조피가 손을 멈추고 문제지 요구사항 다를 다시 짚는다: \"육원전은 6개를 제출…\"",
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
"svg": "<circle cx=\"52\" cy=\"44\" r=\"28\" fill=\"#555\" stroke=\"#1f2a24\" stroke-width=\"3\"/><path d=\"M80,44h32\" stroke=\"#1f2a24\" stroke-width=\"7\" stroke-linecap=\"round\"/><text x=\"52\" y=\"48\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#fff\">육원전</text><path d=\"M100,66 q-6,-9 0,-18 q6,9 0,18z\" fill=\"#e8873a\" stroke=\"#1f2a24\" stroke-width=\"2\"/>",
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
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">육원전</text><text x=\"60\" y=\"50\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">완성</text>",
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
"그래서 내기 전에 딱 멈추고 세 가지만 봐요.\n① 지름 4cm, 두께 0.7cm 정도\n② 6개\n③ 속까지 익었는지",
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
window.FEEDBACK={"intro": "자, 오늘 육원전 연습 돌아볼게요.", "good": ["납작하게 빚었어요.", "불을 줄였어요.", "여유분을 빚어 골랐어요."], "fix": ["가운데 살짝 누르기.", "약한 불.", "크기 비교는 접시에 나란히."], "zopi": "육원전 동전 같아요.", "teacher": "동전처럼 고르게, 딱 좋아요!", "closing": "이 연습은 학원식 연습일 뿐 공식 채점이 아닙니다. 실제 기준은 큐넷 공개과제와 시험장 안내를 따르세요.", "small": "한국산업인력공단과 관계없습니다. 조리 순서와 팁은 ZOP LAB 연습용이고, 현장 이야기는 개인 경험(약 5년 전)이라 공식이 아닙니다. 공개과제 원문: 큐넷 → 자료실 → 공개문제 「한식조리기능사」.", "plan": "① 고기 곱게 다지고 두부 짜서 으깨기. → ② 양념해 끈기 나게 치대기. → ③ 완성 지름 4cm·두께 0.7cm 를 목표로 동글납작하게 6 개 이상 빚기(익으면 줄 수 있으니 연습 때 크기 확인). → ④ 밀가루 → 섞은 달걀물 → 약한 불에 앞뒤 지지기. → ⑤ 6 개 담기."};

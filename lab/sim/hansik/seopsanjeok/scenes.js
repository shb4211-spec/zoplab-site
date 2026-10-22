// 섭산적 학원식 실기연습 — 대사 데이터 (_build/items.py에서 생성, 손으로 고치지 말 것)
window.ITEM={"name": "섭산적", "time": 30};
window.SRC={"C07": {"t": "「섭산적」 문제지 수험자 유의사항 6)-라)·사)", "k": "off"}, "C20": {"t": "큐넷 수험자 지참준비물(한식조리기능사, 2026)", "k": "off"}, "C21": {"t": "「섭산적」 문제지 수험자 유의사항 7)", "k": "off"}, "E00": {"t": "「섭산적」 문제지 시험시간", "k": "off"}, "E01": {"t": "큐넷 한식조리기능사 2026 공개과제 「섭산적」 요구사항 가", "k": "off"}, "E02": {"t": "「섭산적」 요구사항 나", "k": "off"}, "E03": {"t": "「섭산적」 요구사항 다", "k": "off"}, "E04": {"t": "「섭산적」 요구사항 라", "k": "off"}, "G04": {"t": "큐넷 위생 세부기준 9 손/손톱 (일부 감점)", "k": "off"}, "G08": {"t": "큐넷 위생 세부기준 11 부정 방지 (조리기구에 성명 등: 전체 0점)", "k": "off"}, "G13": {"t": "큐넷 위생 세부기준 6 위생화 (일부 감점)", "k": "off"}, "H05": {"t": "현장 기억(잡랩 소장, 약 5년 전): 석쇠를 못 빌리는 경우", "k": "field"}, "H08": {"t": "현장 기억(잡랩 소장, 약 5년 전): 한 번 내면 끝", "k": "field"}, "S_Y91": {"t": "청춘23 블로그 한식조리기능사 연습 후기 · https://young23.linkwe.kr/91 (조회 2026-10-23)", "k": "zop"}, "U05": {"t": "접시 정리 상태: 감점될 수 있음 (점수 공개 자료 없음)", "k": "none"}, "Z01": {"t": "ZOP LAB 연습 순서: 섭산적", "k": "zop"}, "Z02": {"t": "ZOP LAB 팁: 섭산적 흔한 실수", "k": "zop"}, "Z22": {"t": "ZOP LAB 팁: 제출 전 확인 순서", "k": "zop"}};
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
"당신은 선생님 옆에서 같이 보는 '체크 눈'이에요. 고칠 점이 보이면 「이의 있음!」, 괜찮으면 「괜찮아요」."
]
],
"src": [
"E00",
"E03"
]
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
"id": "G13",
"part": "시작 전",
"title": "편한 슬리퍼",
"type": "judge",
"fix": true,
"screen": "조피가 뒤꿈치가 뚫린 슬리퍼를 신고 있다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">편한 슬리퍼</text>",
"setup": [
[
"z",
"오래 서 있으니까 편한 게 최고죠.",
"happy"
]
],
"explain": [
[
"t",
"편한 것도 안전 안에서요. 위생 세부기준에 위생화는 굽이 높지 않고 발가락·발등·발뒤꿈치가 덮여야 하며, 부적합하면 일부 감점으로 적혀 있어요.",
"show"
]
],
"src": [
"G13"
],
"retry": "조피가 운동화 형태의 작업화로 갈아 신는다."
},
{
"id": "M01",
"part": "공개 후기 실수",
"title": "석쇠 윗면 놓침",
"type": "judge",
"fix": true,
"screen": "조피가 석쇠 위쪽을 덮듯 놓쳐 덜 익은 반대기 위로 떨어뜨렸다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">석쇠 윗면 놓침</text>",
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
"석쇠 위쪽이 반대기 위로 떨어져 모양이 망가진 후기가 있어요. 위쪽을 덮지 않고 손등에 걸쳐 굽는 방법이 소개돼 있어요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Y91"
],
"retry": "조피가 메모대로 다시 한다.",
"startTimer": true
},
{
"id": "M02",
"part": "공개 후기 실수",
"title": "크게 썰기",
"type": "judge",
"fix": true,
"screen": "조피가 섭산적을 큼직하게 썬다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">크게 썰기</text>",
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
"처음에 너무 크게 썰어 다시 작게 자르다 모양이 망가진 사례예요. 크기를 미리 가늠해요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Y91"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "M03",
"part": "공개 후기 실수",
"title": "젖은 도마에 잣",
"type": "judge",
"fix": true,
"screen": "조피가 물기 있는 도마 위에서 잣을 다진다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">젖은 도마에 잣</text>",
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
"물기 때문에 잣가루가 보슬보슬하지 않고 덩어리진 후기가 있어요. 마른 곳에서 해요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Y91"
],
"retry": "조피가 메모대로 다시 한다."
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
"id": "M04",
"part": "공개 후기 실수",
"title": "뜨거울 때 썰기",
"type": "judge",
"fix": true,
"screen": "조피가 구운 반대기를 바로 썬다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">뜨거울 때 썰기</text>",
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
"식히는 시간을 꼭 확보해야 썰 때 부서지지 않는다는 팁이에요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Y91"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "M05",
"part": "공개 후기 실수",
"title": "두부 듬뿍",
"type": "judge",
"fix": true,
"screen": "조피가 두부를 많이 넣어 반죽을 늘린다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">두부 듬뿍</text>",
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
"두부는 조금만, 물기는 최대한 빼라는 메모가 있어요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Y91"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "M07",
"part": "공개 후기 실수",
"title": "갈라진 가장자리",
"type": "judge",
"fix": true,
"screen": "조피 반대기 가장자리가 쩍쩍 갈라져 있다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">갈라진 가장자리</text>",
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
"가장자리가 갈라지지 않게 모양을 잡으라는 메모가 있어요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Y91"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "S1",
"part": "조리 1 · 반죽",
"title": "두부 물기",
"type": "judge",
"fix": false,
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
"id": "M08",
"part": "공개 후기 실수",
"title": "수량보다 크기",
"type": "judge",
"fix": true,
"screen": "조피가 크기 맞추느라 개수가 모자라게 썰었다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">수량보다 크기</text>",
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
"크기보다 수량이 먼저라는 메모가 있어요. 개수부터 확보해요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Y91"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "M09",
"part": "공개 후기 실수",
"title": "석쇠 코팅 생략",
"type": "judge",
"fix": true,
"screen": "조피가 차가운 석쇠에 기름 없이 반대기를 올린다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">석쇠 코팅 생략</text>",
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
"석쇠를 미리 달구고 기름을 발라 두라는 메모가 있어요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Y91"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "R1",
"part": "요구사항 확인",
"title": "요구사항 가 확인",
"type": "judge",
"fix": false,
"screen": "조피가 손을 멈추고 문제지 요구사항 가를 다시 짚는다: \"고기와 두부의 비율을 3:1 로 하시오.\"",
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
"좋아요! 쉬운 말로 하면 고기 3, 두부 1. 중간중간 문제지와 맞춰 보는 습관이 제일 든든해요. 전체 문장은 큐넷 원문으로 확인해요.",
"smile"
]
],
"src": [
"E01"
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
"id": "R2",
"part": "요구사항 확인",
"title": "요구사항 나 확인",
"type": "judge",
"fix": false,
"screen": "조피가 손을 멈추고 문제지 요구사항 나를 다시 짚는다: \"다져서 양념한 소고기는 크게 반대기를 지어 석쇠에 구우시오.\"",
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
"좋아요! 쉬운 말로 하면 넓적하게 펴서('반대기') 석쇠에. 중간중간 문제지와 맞춰 보는 습관이 제일 든든해요. 전체 문장은 큐넷 원문으로 확인해요.",
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
"screen": "조피가 손을 멈추고 문제지 요구사항 다를 다시 짚는다: \"완성된 섭산적은 0.7cm x 2cm x 2cm로 9개 이상 제출하시오.\"",
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
"좋아요! 쉬운 말로 하면 두께 0.7cm, 2cm 네모, 9개 이상. 중간중간 문제지와 맞춰 보는 습관이 제일 든든해요. 전체 문장은 큐넷 원문으로 확인해요.",
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
"screen": "조피가 손을 멈추고 문제지 요구사항 라를 다시 짚는다: \"잣가루를 고명으로 얹으시오.\"",
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
"좋아요! 쉬운 말로 하면 위에 잣가루. 중간중간 문제지와 맞춰 보는 습관이 제일 든든해요. 전체 문장은 큐넷 원문으로 확인해요.",
"smile"
]
],
"src": [
"E04"
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
"id": "G04",
"part": "조리 중",
"title": "손가락 밴드",
"type": "judge",
"fix": false,
"screen": "조피 손가락에 작은 상처가 있어 밴드를 붙이고 위생장갑을 꼈다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">손가락 밴드</text>",
"setup": [
[
"z",
"상처는 가려야죠.",
"thinking"
]
],
"explain": [
[
"t",
"좋아요! 위생 세부기준에 상처가 있으면 밴드, 위생장갑 착용 등 적합한 조치를 하라고 적혀 있어요. 손톱은 짧게, 매니큐어는 안 돼요.",
"smile"
]
],
"src": [
"G04"
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

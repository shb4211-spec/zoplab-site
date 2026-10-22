// 생선양념구이 학원식 실기연습 — 대사 데이터 (_build/items.py에서 생성, 손으로 고치지 말 것)
window.ITEM={"name": "생선양념구이", "time": 30};
window.SRC={"C07": {"t": "「생선양념구이」 문제지 수험자 유의사항 6)-라)·사)", "k": "off"}, "C20": {"t": "큐넷 수험자 지참준비물(한식조리기능사, 2026)", "k": "off"}, "C21": {"t": "「생선양념구이」 문제지 수험자 유의사항 7)", "k": "off"}, "E00": {"t": "「생선양념구이」 문제지 시험시간", "k": "off"}, "E01": {"t": "큐넷 한식조리기능사 2026 공개과제 「생선양념구이」 요구사항 가", "k": "off"}, "E02": {"t": "「생선양념구이」 요구사항 나", "k": "off"}, "E03": {"t": "「생선양념구이」 요구사항 다", "k": "off"}, "G05": {"t": "큐넷 위생 세부기준 7 장신구 (일부 감점)", "k": "off"}, "G06": {"t": "큐넷 위생 세부기준 3 위생모 (빈틈으로 머리카락 보임: 전체 0점)", "k": "off"}, "G12": {"t": "「생선양념구이」 문제지 수험자 유의사항 6)-나) / 위생 세부기준 5 마스크", "k": "off"}, "H05": {"t": "현장 기억(잡랩 소장, 약 5년 전): 석쇠를 못 빌리는 경우", "k": "field"}, "H08": {"t": "현장 기억(잡랩 소장, 약 5년 전): 한 번 내면 끝", "k": "field"}, "I11": {"t": "「배 앞쪽」 = 생선 배가 접시 앞쪽(보는 사람 쪽, 사진으로 보면 아래쪽), 등지느러미가 위(뒤)쪽으로 담는 것이 학원 레시피·합격자 후기의 일반적 해석 (공식 풀이 아님). 출처: 1percenthome.tistory.com/196 「배가 앞쪽으로 오도록」 / young23.linkwe.kr/101 「배가 아래쪽(등이 위쪽)」 / 만개의레시피 6890198 「배가 아래로」", "k": "interp"}, "S_Y101": {"t": "청춘23 블로그 한식조리기능사 연습 후기 · https://young23.linkwe.kr/101 (조회 2026-10-23)", "k": "zop"}, "U05": {"t": "접시 정리 상태: 감점될 수 있음 (점수 공개 자료 없음)", "k": "none"}, "Z01": {"t": "ZOP LAB 연습 순서: 생선양념구이", "k": "zop"}, "Z02": {"t": "ZOP LAB 팁: 생선양념구이 흔한 실수", "k": "zop"}, "Z22": {"t": "ZOP LAB 팁: 제출 전 확인 순서", "k": "zop"}};
window.SCENES=[
{
"id": "0",
"part": "실습 전, 학원 휴게 공간",
"title": "노트 복습",
"type": "talk",
"bgDim": true,
"screen": "학원 휴게 공간. 조피가 노트를 펼쳐 놓고 있다. 노트에는 \"생선양념구이 30분\"이라고 크게 적혀 있다.",
"svg": "<rect x=\"16\" y=\"8\" width=\"88\" height=\"62\" rx=\"4\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"34\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"14\" fill=\"#1f2a24\">생선양념구이 30분</text><text x=\"60\" y=\"54\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"11\" fill=\"#b6533a\">머리 왼쪽, 배 앞쪽</text>",
"lines": [
[
"z",
"(중얼중얼) 생선양념구이… 30분. 머리 왼쪽, 배 앞쪽.",
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
"id": "G12",
"part": "시작 전",
"title": "마스크 살짝 내리기",
"type": "judge",
"fix": true,
"screen": "더워서 조피가 마스크를 턱 아래로 내린다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">마스크 살짝 내리</text><text x=\"60\" y=\"50\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">기</text>",
"setup": [
[
"z",
"잠깐 숨 좀 쉬고요.",
"oops"
]
],
"explain": [
[
"t",
"답답한 건 알지만 올려요. 문제지 유의사항에 위생복, 위생모, 앞치마, 마스크를 착용하지 않으면 실격 항목이라고 적혀 있어요.",
"show"
]
],
"src": [
"G12"
],
"retry": "조피가 마스크를 코까지 올린다."
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
"id": "M01",
"part": "공개 후기 실수",
"title": "양쪽 같은 칼집",
"type": "judge",
"fix": true,
"screen": "조피가 생선 앞뒤 같은 자리에 칼집을 넣는다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">양쪽 같은 칼집</text>",
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
"양쪽 칼집이 등 쪽에서 만나 생선이 잘린 것처럼 된 후기가 있어요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Y101"
],
"retry": "조피가 메모대로 다시 한다.",
"startTimer": true
},
{
"id": "M02",
"part": "공개 후기 실수",
"title": "진한 양념",
"type": "judge",
"fix": true,
"screen": "조피가 양념을 두껍게 펴 바른다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">진한 양념</text>",
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
"양념 색이 너무 진하다는 피드백이 꽤 많았다는 후기예요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Y101"
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
"id": "M03",
"part": "공개 후기 실수",
"title": "억지로 떼기",
"type": "judge",
"fix": true,
"screen": "조피가 석쇠에 붙은 생선을 억지로 잡아뗀다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">억지로 떼기</text>",
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
"억지로 떼지 말고 식힌 뒤 칼로 살살 떼라는 팁이에요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Y101"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "M04",
"part": "공개 후기 실수",
"title": "석쇠 기름 조금",
"type": "judge",
"fix": true,
"screen": "조피가 석쇠에 기름을 살짝만 바른다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">석쇠 기름 조금</text>",
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
"석쇠에 기름을 충분히 발라야 안 붙는다는 메모가 있어요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Y101"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "S1",
"part": "조리 1 · 손질",
"title": "배를 갈라 내장 빼기",
"type": "judge",
"fix": true,
"screen": "조피가 조기 배에 칼을 넣어 길게 가르려 한다.",
"svg": "<ellipse cx=\"58\" cy=\"42\" rx=\"40\" ry=\"14\" fill=\"#c9b27a\" stroke=\"#1f2a24\" stroke-width=\"3\"/><path d=\"M98,42 l14,-10 v20z\" fill=\"#c9b27a\" stroke=\"#1f2a24\" stroke-width=\"3\"/><path d=\"M40,52 h40\" stroke=\"#b6533a\" stroke-width=\"3\" stroke-dasharray=\"4 3\"/>",
"setup": [
[
"z",
"배를 쫙 가르면 내장이 쏙!",
"happy"
]
],
"explain": [
[
"t",
"조기가 수술은 원하지 않았어요. 문제지에 생선은 머리와 꼬리를 포함해 통째로 쓰고, 내장은 아가미 쪽으로 빼라고 적혀 있어요.",
"show"
],
[
"t",
"'아가미'는 머리 옆 숨 쉬는 곳이에요. 배를 가르지 말고 그쪽으로 꺼내요. 배를 가르는 건 우리 학원식 팁에서 자주 보는 실수예요.",
"smile",
"zop"
]
],
"retry": "조피가 칼을 내려놓고 아가미 쪽으로 내장을 살살 꺼낸다.",
"src": [
"E01",
"Z02"
]
},
{
"id": "M06",
"part": "공개 후기 실수",
"title": "제출 쪽 아가미 손상",
"type": "judge",
"fix": true,
"screen": "조피가 왼쪽 머리를 벌려 아가미를 뺀다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">제출 쪽 아가미 </text><text x=\"60\" y=\"50\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">손상</text>",
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
"내보낼 쪽 머리는 두고 반대쪽에서 아가미를 찾으라는 메모가 있어요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Y101"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "M07",
"part": "공개 후기 실수",
"title": "내장 빼다 터짐",
"type": "judge",
"fix": true,
"screen": "조피가 젓가락을 세게 돌려 배가 터진다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">내장 빼다 터짐</text>",
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
"살이 터지지 않게 살살 돌려 빼라는 메모가 있어요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Y101"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "S2",
"part": "조리 2 · 초벌",
"title": "칼집, 유장, 초벌",
"type": "judge",
"fix": false,
"screen": "조피가 생선 앞뒤에 칼집을 넣고, 유장을 발라 석쇠에서 먼저 살짝 굽는다.",
"svg": "<rect x=\"14\" y=\"44\" width=\"92\" height=\"22\" rx=\"3\" fill=\"none\" stroke=\"#1f2a24\" stroke-width=\"3\"/><path d=\"M30,44v22M46,44v22M62,44v22M78,44v22M94,44v22\" stroke=\"#1f2a24\" stroke-width=\"1.5\"/><rect x=\"30\" y=\"38\" width=\"60\" height=\"12\" rx=\"5\" fill=\"#c9b27a\" stroke=\"#1f2a24\" stroke-width=\"2.5\"/><text x=\"60\" y=\"26\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"13\" fill=\"#1f2a24\">유장 초벌</text>",
"setup": [
[
"z",
"칼집 넣고, 유장 먼저, 고추장은 나중!",
"thinking"
]
],
"explain": [
[
"t",
"좋아요! 문제지에 칼집 넣은 생선은 유장으로 초벌구이하고 고추장 양념으로 석쇠에 구우라고 적혀 있어요. '유장'은 간장과 참기름 섞은 기름 양념, '초벌구이'는 먼저 살짝 굽는 거예요.",
"smile"
]
],
"src": [
"E02"
]
},
{
"id": "M08",
"part": "공개 후기 실수",
"title": "지느러미 자르다 살까지",
"type": "judge",
"fix": true,
"screen": "조피가 가위로 지느러미를 자르다 살을 벤다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">지느러미 자르다 </text><text x=\"60\" y=\"50\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">살까지</text>",
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
"살이 잘리지 않게 조심하라는 메모가 있어요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Y101"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "M09",
"part": "공개 후기 실수",
"title": "초벌 대충",
"type": "judge",
"fix": true,
"screen": "조피가 초벌을 살짝만 하고 양념을 바른다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">초벌 대충</text>",
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
"초벌에서 거의 익혀야 양념 뒤에 안 탄다는 팁이에요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Y101"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "S3",
"part": "조리 3 · 석쇠",
"title": "껍질이 쩍",
"type": "judge",
"fix": true,
"screen": "차가운 석쇠에 생선을 올렸더니 뒤집을 때 껍질이 석쇠에 붙어 찢어진다.",
"svg": "<rect x=\"14\" y=\"44\" width=\"92\" height=\"22\" rx=\"3\" fill=\"none\" stroke=\"#1f2a24\" stroke-width=\"3\"/><path d=\"M30,44v22M46,44v22M62,44v22M78,44v22M94,44v22\" stroke=\"#1f2a24\" stroke-width=\"1.5\"/><rect x=\"30\" y=\"38\" width=\"60\" height=\"12\" rx=\"5\" fill=\"#8a7a5a\" stroke=\"#1f2a24\" stroke-width=\"2.5\"/><text x=\"60\" y=\"26\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"13\" fill=\"#1f2a24\">껍질 쩍…</text>",
"setup": [
[
"z",
"아앗, 껍질이 석쇠랑 친해졌어요.",
"oops"
]
],
"explain": [
[
"t",
"둘이 너무 친해졌네요. 우리 학원식 팁: 석쇠를 충분히 달구고 기름을 바른 뒤 올려요. 그래야 껍질이 덜 붙어요.",
"show",
"zop"
],
[
"t",
"공식 아님 · ZOP LAB 연습 순서예요. 집에서도 석쇠 달구기를 순서표에 넣어요.",
"smile",
"zop"
]
],
"retry": "조피가 석쇠를 달구고 기름을 바른 뒤 다시 올린다.",
"src": [
"Z01",
"Z02"
]
},
{
"id": "M10",
"part": "공개 후기 실수",
"title": "양념 가스레인지로",
"type": "judge",
"fix": true,
"screen": "조피가 석쇠 위에서 양념을 바르다 화구에 뚝뚝 흘린다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">양념 가스레인지로</text>",
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
"석쇠 위에서 바를 거면 아래에 받침을 두라는 메모가 있어요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Y101"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "R1",
"part": "요구사항 확인",
"title": "요구사항 가 확인",
"type": "judge",
"fix": false,
"screen": "조피가 손을 멈추고 문제지 요구사항 가를 다시 짚는다: \"생선은 머리와 꼬리를 포함하여 통째로 사용하고 내장은 아가미쪽으로 제거하시오.\"",
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
"좋아요! 쉬운 말로 하면 머리·꼬리 그대로, 배를 가르지 말고 아가미 쪽으로 내장 빼기. 중간중간 문제지와 맞춰 보는 습관이 제일 든든해요. 전체 문장은 큐넷 원문으로 확인해요.",
"smile"
]
],
"src": [
"E01"
]
},
{
"id": "S4",
"part": "조리 4 · 담기",
"title": "머리 방향",
"type": "judge",
"fix": true,
"screen": "접시에 담은 생선 머리가 오른쪽을 보고 있다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><ellipse cx=\"56\" cy=\"44\" rx=\"34\" ry=\"11\" fill=\"#b7552e\" stroke=\"#1f2a24\" stroke-width=\"2.5\"/><path d=\"M22,44 l-12,-9 v18z\" fill=\"#b7552e\" stroke=\"#1f2a24\" stroke-width=\"2.5\"/><circle cx=\"82\" cy=\"41\" r=\"2.5\" fill=\"#1f2a24\"/><text x=\"60\" y=\"72\" text-anchor=\"middle\" font-size=\"9\" fill=\"#555\">머리가 오른쪽</text>",
"setup": [
[
"z",
"오른쪽이 더 잘생겨 보여서요.",
"happy"
]
],
"explain": [
[
"t",
"잘생긴 쪽은 문제지가 정했어요. 문제지에 \"머리 왼쪽, 배 앞쪽 방향으로 담아내시오\"라고 적혀 있어요. 학원 교재와 합격 후기에서는 보통 머리는 왼쪽, 배는 접시 앞쪽(보는 사람 쪽), 등은 뒤쪽으로 담는다고 풀어요. 이건 일반적인 해석이고 공식 풀이는 아니에요.",
"show",
"interp"
]
],
"retry": "조피가 생선을 돌려 머리를 왼쪽으로, 배를 앞쪽으로 놓는다.",
"src": [
"E03",
"I11"
]
},
{
"id": "R2",
"part": "요구사항 확인",
"title": "요구사항 나 확인",
"type": "judge",
"fix": false,
"screen": "조피가 손을 멈추고 문제지 요구사항 나를 다시 짚는다: \"칼집 넣은 생선은 유장으로 초벌구이하고, 고추장양념으로 석쇠에 구우시오.\"",
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
"좋아요! 쉬운 말로 하면 칼집 → 유장 초벌 → 고추장 양념, 석쇠. 중간중간 문제지와 맞춰 보는 습관이 제일 든든해요. 전체 문장은 큐넷 원문으로 확인해요.",
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
"screen": "조피가 손을 멈추고 문제지 요구사항 다를 다시 짚는다: \"생선구이는 머리 왼쪽, 배 앞쪽 방향으로 담아내시오.\"",
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
"좋아요! 쉬운 말로 하면 머리는 왼쪽, 배는 나를 보게. 중간중간 문제지와 맞춰 보는 습관이 제일 든든해요. 전체 문장은 큐넷 원문으로 확인해요.",
"smile"
]
],
"src": [
"E03"
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
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">생선양념구이</text><text x=\"60\" y=\"50\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">머리 왼쪽</text>",
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
"그래서 내기 전에 딱 멈추고 세 가지만 봐요.\n① 생선 한 마리 통째로(머리·꼬리 있음)\n② 머리 왼쪽, 배 앞쪽, 타지 않았는지\n③ 접시 가장자리 양념 닦기",
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
"E03",
"C21",
"U05",
"Z22"
]
}
];
window.FEEDBACK={"intro": "자, 오늘 생선양념구이 '눈식평' 들어갑니다.", "good": ["칼집 → 유장 초벌 → 고추장 순서를 지켰어요.", "아가미 쪽으로 내장을 다시 뺐어요.", "머리 방향을 바로잡았어요."], "fix": ["석쇠는 기물 목록 맨 위에.", "내장은 아가미 쪽. 손질 순서를 노트에 적어요.", "석쇠 달구고 기름 바르기를 순서표에."], "zopi": "머리 왼쪽, 배 앞쪽. 거울 보면서 외울게요.", "teacher": "거울은 반대로 보이니까 조심해요! 오늘 생선처럼 잘 뒤집었어요!", "closing": "이 연습은 학원식 연습일 뿐 공식 채점이 아닙니다. 실제 기준은 큐넷 공개과제와 시험장 안내를 따르세요.", "small": "한국산업인력공단과 관계없습니다. 조리 순서와 팁은 ZOP LAB 연습용이고, 현장 이야기는 개인 경험(약 5년 전)이라 공식이 아닙니다. 공개과제 원문: 큐넷 → 자료실 → 공개문제 「한식조리기능사」.", "plan": "① 비늘·지느러미 다듬고 아가미 쪽으로 내장 빼기 → ② 칼집 넣고 소금 살짝 뿌렸다 물기 닦기 → ③ 석쇠 달구고 기름, 유장 발라 초벌 → ④ 고추장 양념 얇게 발라 약한 불에 굽기 → ⑤ 머리 왼쪽·배 앞쪽으로 담기"};

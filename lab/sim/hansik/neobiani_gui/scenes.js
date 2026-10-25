// 너비아니구이 학원식 실기연습 — 대사 데이터 (_build/items.py에서 생성, 손으로 고치지 말 것)
window.ITEM={"name": "너비아니구이", "time": 25};
window.SRC={"C04": {"t": "「너비아니구이」 문제지 수험자 유의사항 1)", "k": "off"}, "C07": {"t": "「너비아니구이」 문제지 수험자 유의사항 6)-라)·사)", "k": "off"}, "C20": {"t": "큐넷 수험자 지참준비물(한식조리기능사, 2026)", "k": "off"}, "C21": {"t": "「너비아니구이」 문제지 수험자 유의사항 7)", "k": "off"}, "E00": {"t": "「너비아니구이」 문제지 시험시간", "k": "off"}, "E01": {"t": "큐넷 한식조리기능사 2026 공개과제 「너비아니구이」 요구사항 가", "k": "off"}, "E02": {"t": "「너비아니구이」 요구사항 나", "k": "off"}, "E03": {"t": "「너비아니구이」 요구사항 다", "k": "off"}, "E05": {"t": "「너비아니구이」 문제지 지급재료목록", "k": "off"}, "G11": {"t": "「너비아니구이」 문제지 수험자 유의사항 6)-다) 두 과제 시간 내 제출", "k": "off"}, "G14": {"t": "「너비아니구이」 문제지 수험자 유의사항 6)-가) 포기 의사 표현", "k": "off"}, "H05": {"t": "현장 기억(잡랩 소장, 약 5년 전): 석쇠를 못 빌리는 경우", "k": "field"}, "H08": {"t": "현장 기억(잡랩 소장, 약 5년 전): 한 번 내면 끝", "k": "field"}, "S_Y111": {"t": "청춘23 블로그 한식조리기능사 연습 후기 · https://young23.linkwe.kr/111 (조회 2026-10-23)", "k": "zop"}, "U01": {"t": "맛보기 위반: 감점될 수 있음 (점수 공개 자료 없음)", "k": "none"}, "U05": {"t": "접시 정리 상태: 감점될 수 있음 (점수 공개 자료 없음)", "k": "none"}, "Z01": {"t": "ZOP LAB 연습 순서: 너비아니구이", "k": "zop"}, "Z02": {"t": "ZOP LAB 팁: 너비아니구이 흔한 실수", "k": "zop"}, "Z22": {"t": "ZOP LAB 팁: 제출 전 확인 순서", "k": "zop"}};
window.SCENES=[
{
"id": "0",
"part": "실습 전, 학원 휴게 공간",
"title": "노트 복습",
"type": "talk",
"bgDim": true,
"screen": "학원 휴게 공간. 조피가 노트를 펼쳐 놓고 있다. 노트에는 \"너비아니구이 25분\"이라고 크게 적혀 있다.",
"svg": "<rect x=\"16\" y=\"8\" width=\"88\" height=\"62\" rx=\"4\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"34\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"14\" fill=\"#1f2a24\">너비아니구이 25분</text><text x=\"60\" y=\"54\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"11\" fill=\"#b6533a\">6쪽 + 잣가루</text>",
"lines": [
[
"z",
"(중얼중얼) 너비아니구이… 25분. 6쪽 + 잣가루.",
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
"E02"
]
},
{
"id": "M02",
"part": "공개 후기 실수",
"title": "계속 센 불",
"type": "judge",
"fix": true,
"screen": "조피가 시간에 쫓겨 센 불로만 굽는다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">계속 센 불</text>",
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
"센 불로만 구워 가장자리가 탄 후기가 있어요. 처음만 세게, 이후 약불로 익혀요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Y111"
],
"retry": "조피가 메모대로 다시 한다.",
"startTimer": true
},
{
"id": "M03",
"part": "공개 후기 실수",
"title": "크기 제각각",
"type": "judge",
"fix": true,
"screen": "조피 너비아니 모양이 들쭉날쭉하다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">크기 제각각</text>",
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
"크기가 제각각이라는 후기가 있어요. 연육 후 다시 재단해요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Y111"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "M04",
"part": "공개 후기 실수",
"title": "덜 익힘",
"type": "judge",
"fix": true,
"screen": "조피가 겉만 익은 고기를 내리려 한다.",
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
"너비아니는 완전히 익혀 내야 한다는 메모가 있어요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Y111"
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
"id": "M05",
"part": "공개 후기 실수",
"title": "결대로 썰기",
"type": "judge",
"fix": true,
"screen": "조피가 고기를 결 방향으로 썬다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">결대로 썰기</text>",
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
"너비아니는 결 반대로 썬다는 메모가 있어요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Y111"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "M06",
"part": "공개 후기 실수",
"title": "딱 맞게 썰기",
"type": "judge",
"fix": true,
"screen": "조피가 고기를 완성 크기 그대로 썬다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">딱 맞게 썰기</text>",
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
"소고기는 구우면 작아지니 크게 썰라는 팁이에요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Y111"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "M07",
"part": "공개 후기 실수",
"title": "젖은 도마 잣가루",
"type": "judge",
"fix": true,
"screen": "조피가 고기 썬 젖은 도마에서 잣을 다진다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">젖은 도마 잣가루</text>",
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
"도마가 말랐을 때 잣가루를 먼저 만들어 두라는 메모가 있어요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Y111"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "S1",
"part": "조리 1 · 썰기",
"title": "결 방향",
"type": "judge",
"fix": true,
"screen": "조피가 고기 결(고기 속 줄무늬) 방향을 따라 길게 썰고 있다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">고기 결 따라</text><text x=\"60\" y=\"50\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">길게 썲</text>",
"setup": [
[
"z",
"줄무늬 따라 썰면 예쁘게 나오겠죠?",
"thinking"
]
],
"explain": [
[
"t",
"줄무늬 따라가다 길을 잃었어요. 우리 학원식 팁: 결 방향으로 썰면 구운 뒤 오그라들고 모양이 틀어지기 쉬워요. 결 반대로, 완성 크기보다 살짝 크게 썰어 칼등으로 두드려요.",
"show",
"zop"
],
[
"t",
"문제지엔 완성된 너비아니가 0.5cm × 4cm × 5cm라고 적혀 있어요.",
"smile"
]
],
"retry": "조피가 고기를 돌려 결 반대로 썰고, 칼등으로 톡톡 두드린다.",
"src": [
"E01",
"Z01",
"Z02"
]
},
{
"id": "M08",
"part": "공개 후기 실수",
"title": "힘줄 그대로",
"type": "judge",
"fix": true,
"screen": "조피가 힘줄을 끊지 않는다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">힘줄 그대로</text>",
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
"칼끝을 세워 힘줄을 끊으라는 메모가 있어요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Y111"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "M09",
"part": "공개 후기 실수",
"title": "바로 굽기",
"type": "judge",
"fix": true,
"screen": "조피가 양념 바르자마자 석쇠에 올린다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">바로 굽기</text>",
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
"배즙과 양념장에 충분히 재운 뒤 구우라는 팁이에요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Y111"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "M10",
"part": "공개 후기 실수",
"title": "띄엄띄엄 올리기",
"type": "judge",
"fix": true,
"screen": "조피가 고기를 석쇠에 띄워 올린다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">띄엄띄엄 올리기</text>",
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
"끝을 살짝 겹쳐 올려야 가장자리가 덜 탄다는 메모가 있어요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Y111"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "S2",
"part": "조리 2 · 양념",
"title": "배즙 양념",
"type": "judge",
"fix": false,
"screen": "조피가 배를 갈아 즙을 내고 간장, 설탕, 파, 마늘, 참기름과 섞는다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">배즙 + 간장 양념</text>",
"setup": [
[
"z",
"배는 지급재료에 있으니까 써도 되죠.",
"thinking"
]
],
"explain": [
[
"t",
"맞아요, 배는 이 품목 지급재료목록에 있어요. 배즙 양념은 우리 학원식 연습 순서예요. 공식 아님 · ZOP LAB 연습 순서.",
"smile",
"zop"
]
],
"src": [
"E05",
"Z01"
]
},
{
"id": "R1",
"part": "요구사항 확인",
"title": "요구사항 가 확인",
"type": "judge",
"fix": false,
"screen": "조피가 손을 멈추고 문제지 요구사항 가를 다시 짚는다: \"완성된 너비아니는 0.5cm x 4cm x 5cm로 하시오.\"",
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
"좋아요! 쉬운 말로 하면 다 구운 뒤 두께 0.5cm, 4cm × 5cm 정도. 중간중간 문제지와 맞춰 보는 습관이 제일 든든해요. 전체 문장은 큐넷 원문으로 확인해요.",
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
"screen": "조피가 손을 멈추고 문제지 요구사항 나를 다시 짚는다: \"석쇠를 사용하여 굽고, 6쪽 제출하시오.\"",
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
"좋아요! 쉬운 말로 하면 석쇠로 굽고 6쪽. 중간중간 문제지와 맞춰 보는 습관이 제일 든든해요. 전체 문장은 큐넷 원문으로 확인해요.",
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
"screen": "조피가 손을 멈추고 문제지 요구사항 다를 다시 짚는다: \"잣가루를 고명으로 얹으시오.\"",
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
"좋아요! 쉬운 말로 하면 위에 잣가루. 중간중간 문제지와 맞춰 보는 습관이 제일 든든해요. 전체 문장은 큐넷 원문으로 확인해요.",
"smile"
]
],
"src": [
"E03"
]
},
{
"id": "S3",
"part": "조리 3 · 수량",
"title": "다섯 쪽",
"type": "judge",
"fix": true,
"screen": "석쇠에서 다 구웠다. 접시에 세어 보니 5쪽이다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">너비아니</text><text x=\"60\" y=\"50\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">5쪽</text>",
"setup": [
[
"z",
"다섯이면 손가락 수랑 같고 좋네요!",
"happy"
]
],
"explain": [
[
"t",
"손가락은 다섯인데 문제지는 여섯을 좋아해요. 문제지에 \"석쇠를 사용하여 굽고, 6쪽 제출하시오\"라고 적혀 있어요. 공통 유의사항에 수량이 안 맞으면 실격 항목이라고 적혀 있어요.",
"show"
],
[
"t",
"썰 때부터 6쪽이 나오게 나눠 두는 연습을 해요.",
"smile"
]
],
"retry": "조피가 남은 고기로 한 쪽을 더 구워 6쪽을 맞춘다.",
"src": [
"E02",
"C07"
]
},
{
"id": "G11",
"part": "시간 관리",
"title": "한 품목에 올인",
"type": "judge",
"fix": true,
"screen": "조피가 너비아니구이에만 매달려 다른 과제는 손도 못 댔다.",
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
"part": "조리 4 · 고명",
"title": "뭉친 잣가루",
"type": "judge",
"fix": true,
"screen": "잣을 대충 다져 올렸더니 기름이 배어 덩어리로 뭉쳐 있다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">너비아니 6쪽</text><text x=\"60\" y=\"50\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">잣 덩어리 뭉침</text>",
"setup": [
[
"z",
"잣은 올렸어요! 좀 뭉쳤지만.",
"neutral"
]
],
"explain": [
[
"t",
"잣들이 단체 사진 찍는 중이네요. 문제지에 잣가루를 고명으로 얹으라고 적혀 있어요. '고명'은 음식 위에 올리는 장식이에요.",
"show"
],
[
"t",
"우리 학원식 팁: 잣은 종이 위에서 곱게 다져 기름을 빼면 보송한 가루가 돼요.",
"smile",
"zop"
]
],
"retry": "조피가 잣을 종이에 올려 다시 곱게 다지고 솔솔 뿌린다.",
"src": [
"E03",
"Z01",
"Z02"
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
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">너비아니 6쪽</text><text x=\"60\" y=\"50\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">잣가루</text>",
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
"그래서 내기 전에 딱 멈추고 세 가지만 봐요.\n① 수량: 6쪽\n② 잣가루 올렸는지, 타지 않았는지\n③ 접시 가장자리 양념 닦기",
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
window.FEEDBACK={"intro": "자, 오늘 너비아니구이 '눈식평' 들어갑니다.", "good": ["배즙 양념을 지급재료로 만들었어요.", "결 반대로 다시 썰었어요.", "잣가루를 보송하게 다시 만들었어요."], "fix": ["석쇠는 기물 목록 맨 위에.", "썰 때부터 6쪽 나누기 연습.", "잣은 종이 위에서 다져 기름 빼기."], "zopi": "6쪽, 잣가루, 석쇠. 손가락 세 개로 외울게요!", "teacher": "손가락은 다섯인데 세 개만 쓰니 더 쉽네요. 오늘 잘 구웠어요!", "closing": "이 연습은 학원식 연습일 뿐 공식 채점이 아닙니다. 실제 기준은 큐넷 공개과제와 시험장 안내를 따르세요.", "small": "한국산업인력공단과 관계없습니다. 조리 순서와 팁은 ZOP LAB 연습용이고, 현장 이야기는 개인 경험(약 5년 전)이라 공식이 아닙니다. 공개과제 원문: 큐넷 → 자료실 → 공개문제 「한식조리기능사」.", "plan": "① 핏물 닦고 결 반대로 살짝 크게 썰어 두드리기 → ② 배즙 간장 양념장 → ③ 고기 재우기 → ④ 잣 다져 기름 빼기 → ⑤ 달군 석쇠에 타지 않게 굽기 → ⑥ 6쪽 담고 잣가루"};

// 무생채 학원식 실기연습 — 대사 데이터 (_build/items.py에서 생성, 손으로 고치지 말 것)
window.ITEM={"name": "무생채", "time": 15};
window.SRC={"C06b": {"t": "「무생채」 문제지 수험자 유의사항 4)", "k": "off"}, "C08": {"t": "「무생채」 문제지 수험자 유의사항 6)-자)", "k": "off"}, "C21": {"t": "「무생채」 문제지 수험자 유의사항 7)", "k": "off"}, "E00": {"t": "「무생채」 문제지 시험시간", "k": "off"}, "E01": {"t": "큐넷 한식조리기능사 2026 공개과제 「무생채」 요구사항 가", "k": "off"}, "E02": {"t": "큐넷 한식조리기능사 2026 공개과제 「무생채」 요구사항 나", "k": "off"}, "E03": {"t": "큐넷 한식조리기능사 2026 공개과제 「무생채」 요구사항 다", "k": "off"}, "G05": {"t": "큐넷 위생 세부기준 7 장신구 (일부 감점)", "k": "off"}, "G06": {"t": "큐넷 위생 세부기준 3 위생모 (빈틈으로 머리카락 보임: 전체 0점)", "k": "off"}, "G12": {"t": "「무생채」 문제지 수험자 유의사항 6)-나) / 위생 세부기준 5 마스크", "k": "off"}, "H08": {"t": "현장 기억(잡랩 소장, 약 5년 전): 한 번 내면 끝", "k": "field"}, "S_HC66": {"t": "homecofe 블로그 실기 연습 후기 · https://homecofe.tistory.com/66 (조회 2026-10-23)", "k": "zop"}, "S_TR7010161": {"t": "만개의레시피 실기 레시피 설명 (검색 본문 발췌 확인) · https://www.10000recipe.com/recipe/7010161 (조회 2026-10-23)", "k": "zop"}, "S_Y83": {"t": "청춘23 블로그 한식조리기능사 연습 후기 · https://young23.linkwe.kr/83 (조회 2026-10-23)", "k": "zop"}, "U05": {"t": "접시 정리 상태: 감점될 수 있음 (점수 공개 자료 없음)", "k": "none"}, "Z01": {"t": "ZOP LAB 연습 순서: 무생채", "k": "zop"}, "Z02": {"t": "ZOP LAB 팁: 무생채 흔한 실수", "k": "zop"}, "Z22": {"t": "ZOP LAB 팁: 제출 전 확인 순서", "k": "zop"}};
window.SCENES=[
{
"id": "0",
"part": "실습 전, 학원 휴게 공간",
"title": "노트 복습",
"type": "talk",
"bgDim": true,
"screen": "학원 휴게 공간. 조피가 노트를 펼쳐 놓고 있다. 노트에는 \"무생채 15분\"이라고 크게 적혀 있다.",
"svg": "<rect x=\"16\" y=\"8\" width=\"88\" height=\"62\" rx=\"4\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"34\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"14\" fill=\"#1f2a24\">무생채 15분</text><text x=\"60\" y=\"54\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"11\" fill=\"#b6533a\">70g 이상</text>",
"lines": [
[
"z",
"(중얼중얼) 무생채… 15분. 70g 이상.",
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
"id": "M03",
"part": "공개 후기 실수",
"title": "굵은 채",
"type": "judge",
"fix": true,
"screen": "조피 무채가 눈에 띄게 굵다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">굵은 채</text>",
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
"채가 굵다는 지적을 받은 후기가 있어요. 두께를 고르게 가늘게 맞춰요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Y83"
],
"retry": "조피가 메모대로 다시 한다.",
"startTimer": true
},
{
"id": "M04",
"part": "공개 후기 실수",
"title": "뭉친 고춧가루",
"type": "judge",
"fix": true,
"screen": "조피가 고운 고춧가루를 체에 내리지 않고 바로 뿌린다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">뭉친 고춧가루</text>",
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
"고운 고춧가루는 체에 내려 쓰라는 메모가 있어요. 뭉치면 얼룩이 남아요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Y83"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "M05",
"part": "공개 후기 실수",
"title": "파 심까지 다지기",
"type": "judge",
"fix": true,
"screen": "조피가 대파를 통째로 다진다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">파 심까지 다지기</text>",
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
"파는 흰 부분을 세로로 갈라 가운데 심을 빼고 겉만 다지는 걸로 연습한 사례예요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Y83"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "S1",
"part": "조리 1",
"title": "일찍 무치기",
"type": "judge",
"fix": true,
"screen": "시작하자마자 조피가 무채를 양념에 무쳐 둔다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">무생채</text><text x=\"60\" y=\"50\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">일찍 무치기</text>",
"setup": [
[
"z",
"먼저 끝내 놓으면 마음 편하죠.",
"happy"
]
],
"explain": [
[
"t",
"마음은 편해도 접시가 축축해져요. 우리 학원식 팁: 일찍 무치면 물이 흥건해지기 쉬워요. 고춧가루로 먼저 색을 들이고, 나머지 양념은 제출 직전에 무쳐요. 공식 아님이에요.",
"show",
"zop"
]
],
"src": [
"Z01",
"Z02"
],
"retry": "조피가 다음 판엔 무치기를 맨 마지막에 한다."
},
{
"id": "M06",
"part": "공개 후기 실수",
"title": "납작하게 담기",
"type": "judge",
"fix": true,
"screen": "조피가 무생채를 접시에 넓게 펴 담는다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">납작하게 담기</text>",
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
"물이 나오면 가라앉으니 소복하게 높이 쌓아 담으라는 팁이 있어요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Y83"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "M07",
"part": "공개 후기 실수",
"title": "6cm 못 나오는 무",
"type": "judge",
"fix": true,
"screen": "조피가 무 길이를 확인하지 않고 바로 썬다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">6cm 못 나오는</text><text x=\"60\" y=\"50\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\"> 무</text>",
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
"시작 전에 가장 긴 길이가 나오는지, 상한 데는 없는지 먼저 보라는 메모가 있어요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Y83"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "M08",
"part": "공개 후기 실수",
"title": "껍질 벗기고 모자람",
"type": "judge",
"fix": true,
"screen": "조피가 무를 두껍게 깎아 양이 줄었다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">껍질 벗기고 모자</text><text x=\"60\" y=\"50\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">람</text>",
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
"껍질을 벗기면 제출량이 모자랄 수 있다는 후기가 있어요. 얇게 손질해요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_HC66"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "S2",
"part": "조리 2",
"title": "굵은 채",
"type": "judge",
"fix": true,
"screen": "조피의 무채가 굵직굵직하다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">무생채</text><text x=\"60\" y=\"50\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">굵은 채</text>",
"setup": [
[
"z",
"굵어야 아삭하죠!",
"happy"
]
],
"explain": [
[
"t",
"아삭함은 칼질로 보여 줘요. 문제지에 \"무는 0.2cm x 0.2cm x 6cm\"로 썰라고 적혀 있어요. 생채 중에서도 가는 편이에요.",
"show"
]
],
"src": [
"E01",
"C06b"
],
"retry": "조피가 편을 얇게 썰어 겹쳐 다시 채 썬다."
},
{
"id": "M09",
"part": "공개 후기 실수",
"title": "색이 너무 연함",
"type": "judge",
"fix": true,
"screen": "조피 무생채 색이 거의 하얗다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">색이 너무 연함</text>",
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
"색이 너무 연하다는 피드백 사례가 있어요. 처음 색 들이기를 충분히 해요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_HC66"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "M10",
"part": "공개 후기 실수",
"title": "한꺼번에 채",
"type": "judge",
"fix": true,
"screen": "조피가 무 편을 잔뜩 포개 한 번에 채 썬다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">한꺼번에 채</text>",
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
"크기를 맞추려면 한꺼번에 말고 조금씩 나눠 썰라는 후기 팁이에요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_TR7010161"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "M11",
"part": "공개 후기 실수",
"title": "식초 듬뿍",
"type": "judge",
"fix": true,
"screen": "조피가 식초를 넉넉히 붓는다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">식초 듬뿍</text>",
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
"물이 생기지 않게 식초를 조금 적게 넣으라는 수험 후기 팁이 있어요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_TR7010161"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "S3",
"part": "조리 3",
"title": "조금만 담기",
"type": "judge",
"fix": true,
"screen": "조피가 접시에 무생채를 조금만 예쁘게 올린다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">무생채</text><text x=\"60\" y=\"50\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">조금만 담기</text>",
"setup": [
[
"z",
"적게 담아야 고급스러워요.",
"thinking"
]
],
"explain": [
[
"t",
"고급보다 양이에요. 문제지에 \"무생채는 70g 이상\" 내라고 적혀 있어요.",
"show"
]
],
"src": [
"E03"
],
"retry": "조피가 무생채를 넉넉히 더 담는다."
},
{
"id": "M12",
"part": "공개 후기 실수",
"title": "깨 통째",
"type": "judge",
"fix": true,
"screen": "조피가 통깨를 그대로 넣는다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">깨 통째</text>",
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
"깨는 손으로 비벼 깨소금으로 만들어 넣으라는 팁이에요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_TR7010161"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "M13",
"part": "공개 후기 실수",
"title": "순서 안 정리",
"type": "judge",
"fix": true,
"screen": "조피가 재료를 받자마자 무작정 칼부터 든다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">순서 안 정리</text>",
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
"재료를 보고 과제를 파악해 머릿속으로 순서를 정리하라는 후기 팁이 있어요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_TR7010161"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "R1",
"part": "요구사항 확인",
"title": "요구사항 가 확인",
"type": "judge",
"fix": false,
"screen": "조피가 손을 멈추고 문제지 요구사항 가를 다시 짚는다: \"무는 0.2cm x 0.2cm x 6cm…\"",
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
"id": "S4",
"part": "조리 4 · 불",
"title": "불 하나 더",
"type": "judge",
"fix": true,
"screen": "조피가 두 번째 화구를 켜려고 한다.",
"svg": "<circle cx=\"52\" cy=\"44\" r=\"28\" fill=\"#555\" stroke=\"#1f2a24\" stroke-width=\"3\"/><path d=\"M80,44h32\" stroke=\"#1f2a24\" stroke-width=\"7\" stroke-linecap=\"round\"/><text x=\"52\" y=\"48\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#fff\">무생채</text><path d=\"M100,66 q-6,-9 0,-18 q6,9 0,18z\" fill=\"#e8873a\" stroke=\"#1f2a24\" stroke-width=\"2\"/>",
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
"id": "R2",
"part": "요구사항 확인",
"title": "요구사항 나 확인",
"type": "judge",
"fix": false,
"screen": "조피가 손을 멈추고 문제지 요구사항 나를 다시 짚는다: \"생채는 고춧가루를 사용…\"",
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
"screen": "조피가 손을 멈추고 문제지 요구사항 다를 다시 짚는다: \"무생채는 70g 이상…\"",
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
"id": "SZ",
"part": "제출 전",
"title": "내기 전에 멈추기",
"type": "judge",
"fix": true,
"stopTimer": true,
"screen": "접시에 다 담았다. 그런데 접시 가장자리에 양념 자국이 묻어 있다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">무생채</text><text x=\"60\" y=\"50\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">완성</text>",
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
"그래서 내기 전에 딱 멈추고 세 가지만 봐요.\n① 0.2cm x 0.2cm x 6cm 정도\n② 고춧가루 사용\n③ 70g 이상",
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
window.FEEDBACK={"intro": "자, 오늘 무생채 연습 돌아볼게요.", "good": ["무치는 때를 늦췄어요.", "채를 가늘게 다시 썰었어요.", "양을 넉넉히 담았어요."], "fix": ["무치기는 마지막.", "0.2cm 채 연습.", "양은 70g 이상."], "zopi": "무채 썰다가 팔이 저려요.", "teacher": "저린 만큼 늘어요. 오늘 채 가늘었어요!", "closing": "이 연습은 학원식 연습일 뿐 공식 채점이 아닙니다. 실제 기준은 큐넷 공개과제와 시험장 안내를 따르세요.", "small": "한국산업인력공단과 관계없습니다. 조리 순서와 팁은 ZOP LAB 연습용이고, 현장 이야기는 개인 경험(약 5년 전)이라 공식이 아닙니다. 공개과제 원문: 큐넷 → 자료실 → 공개문제 「한식조리기능사」.", "plan": "① 무를 6cm 길이로 잘라 얇게 편 썰기. → ② 편을 겹쳐 0.2cm 굵기로 채. → ③ 고춧가루로 먼저 버무려 색 들이기. → ④ 소금·설탕·식초·파·마늘·생강·깨로 무치기(제출 직전). → ⑤ 70g 이상 담기."};

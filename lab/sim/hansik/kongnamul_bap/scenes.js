// 콩나물밥 학원식 실기연습 — 대사 데이터 (_build/items.py에서 생성, 손으로 고치지 말 것)
window.ITEM={"name": "콩나물밥", "time": 30};
window.SRC={"C04": {"t": "「콩나물밥」 문제지 수험자 유의사항 1)", "k": "off"}, "C21": {"t": "「콩나물밥」 문제지 수험자 유의사항 7)", "k": "off"}, "E00": {"t": "「콩나물밥」 문제지 시험시간", "k": "off"}, "E01": {"t": "큐넷 한식조리기능사 2026 공개과제 「콩나물밥」 요구사항 가", "k": "off"}, "E02": {"t": "큐넷 한식조리기능사 2026 공개과제 「콩나물밥」 요구사항 나", "k": "off"}, "G03": {"t": "큐넷 위생상태 및 안전관리 세부기준 10 폐기물 처리 (일부 감점)", "k": "off"}, "G11": {"t": "「콩나물밥」 문제지 수험자 유의사항 6)-다) 두 과제 시간 내 제출", "k": "off"}, "G14": {"t": "「콩나물밥」 문제지 수험자 유의사항 6)-가) 포기 의사 표현", "k": "off"}, "H08": {"t": "현장 기억(잡랩 소장, 약 5년 전): 한 번 내면 끝", "k": "field"}, "S_Y85": {"t": "청춘23 블로그 한식조리기능사 연습 후기 · https://young23.linkwe.kr/85 (조회 2026-10-23)", "k": "zop"}, "U01": {"t": "맛보기 위반: 감점될 수 있음 (점수 공개 자료 없음)", "k": "none"}, "U05": {"t": "접시 정리 상태: 감점될 수 있음 (점수 공개 자료 없음)", "k": "none"}, "Z01": {"t": "ZOP LAB 연습 순서: 콩나물밥", "k": "zop"}, "Z02": {"t": "ZOP LAB 팁: 콩나물밥 흔한 실수", "k": "zop"}, "Z22": {"t": "ZOP LAB 팁: 제출 전 확인 순서", "k": "zop"}};
window.SCENES=[
{
"id": "0",
"part": "실습 전, 학원 휴게 공간",
"title": "노트 복습",
"type": "talk",
"bgDim": true,
"screen": "학원 휴게 공간. 조피가 노트를 펼쳐 놓고 있다. 노트에는 \"콩나물밥 30분\"이라고 크게 적혀 있다.",
"svg": "<rect x=\"16\" y=\"8\" width=\"88\" height=\"62\" rx=\"4\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"34\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"14\" fill=\"#1f2a24\">콩나물밥 30분</text><text x=\"60\" y=\"54\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"11\" fill=\"#b6533a\">뚜껑 열지 않기</text>",
"lines": [
[
"z",
"(중얼중얼) 콩나물밥… 30분. 뚜껑 열지 않기.",
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
"title": "콩나물 머리 떼기",
"type": "judge",
"fix": true,
"screen": "조피가 콩나물 머리까지 떼어 낸다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">콩나물 머리 떼기</text>",
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
"꼬리는 다듬되 머리는 떼면 안 된다는 메모가 있어요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Y85"
],
"retry": "조피가 메모대로 다시 한다.",
"startTimer": true
},
{
"id": "M02",
"part": "공개 후기 실수",
"title": "굵은 고기채",
"type": "judge",
"fix": true,
"screen": "조피 소고기채가 콩나물보다 훨씬 굵다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">굵은 고기채</text>",
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
"고기채가 두껍다는 비교 후기가 있어요. 결대로 최대한 가늘고 길게! 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Y85"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "M03",
"part": "공개 후기 실수",
"title": "설탕·깨 넣기",
"type": "judge",
"fix": true,
"screen": "조피가 고기 양념에 설탕과 깨를 넣으려 한다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">설탕·깨 넣기</text>",
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
"콩나물밥 고기 양념엔 설탕·소금·깨가 없다는 메모가 있어요. 지급재료에 없는 걸 쓴 사례도 정리돼 있어요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Y85"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "S1",
"part": "조리 1",
"title": "꼬리째 넣기",
"type": "judge",
"fix": true,
"screen": "조피가 씻은 콩나물을 꼬리째 쌀 위에 올린다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">콩나물밥</text><text x=\"60\" y=\"50\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">꼬리째 넣기</text>",
"setup": [
[
"z",
"꼬리도 콩나물인데요 뭐.",
"neutral"
]
],
"explain": [
[
"t",
"꼬리도 가족이지만 오늘은 집에 두고 와요. 문제지에 \"콩나물은 꼬리를 다듬고 소고기는 채썰어 간장양념\"을 하라고 적혀 있어요.",
"show"
]
],
"src": [
"E01"
],
"retry": "조피가 콩나물 꼬리를 하나씩 떼어 낸다."
},
{
"id": "M04",
"part": "공개 후기 실수",
"title": "고기 뭉쳐 올리기",
"type": "judge",
"fix": true,
"screen": "조피가 양념한 고기를 한 덩어리로 얹는다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">고기 뭉쳐 올리기</text>",
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
"가닥가닥 떼어 펴서 올리라는 메모가 있어요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Y85"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "M06",
"part": "공개 후기 실수",
"title": "타닥 소리 무시",
"type": "judge",
"fix": true,
"screen": "냄비에서 타닥타닥 소리가 나는데 조피가 다른 일을 한다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">타닥 소리 무시</text>",
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
"그 소리는 탈 징후라 바로 불을 끄라는 팁이에요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Y85"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "M07",
"part": "공개 후기 실수",
"title": "끓을 때 자리 비움",
"type": "judge",
"fix": true,
"screen": "조피가 센 불에 올려 두고 다른 재료를 썬다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">끓을 때 자리 비</text><text x=\"60\" y=\"50\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">움</text>",
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
"양이 적어 금방 끓으니 김 날 때까지 지켜보라는 메모가 있어요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Y85"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "S2",
"part": "조리 2",
"title": "궁금해서 한 번만",
"type": "judge",
"fix": true,
"screen": "밥이 끓는 중. 조피가 뚜껑을 들어 안을 들여다본다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">콩나물밥</text><text x=\"60\" y=\"50\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">궁금해서 한 번</text>",
"setup": [
[
"z",
"잘 되고 있나 한 번만…",
"thinking"
]
],
"explain": [
[
"t",
"궁금한 마음은 알지만 뚜껑은 꾹 참아요. 우리 학원식 팁으로는 중간에 뚜껑을 자주 열면 콩나물 비린내가 남기 쉬워요.",
"show",
"zop"
],
[
"t",
"끓으면 불을 줄이고 뚜껑을 열지 않고 익힌 뒤 뜸 들여요. 공식 아님 · ZOP LAB 연습 순서예요.",
"smile",
"zop"
]
],
"src": [
"Z01",
"Z02"
],
"retry": "조피가 뚜껑을 덮고 불을 줄인 뒤 타이머만 본다."
},
{
"id": "M08",
"part": "공개 후기 실수",
"title": "고기 숨겨 담기",
"type": "judge",
"fix": true,
"screen": "조피가 밥을 담고 고기를 아래에 묻는다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">고기 숨겨 담기</text>",
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
"소고기는 길이가 보이게 펼쳐 담으라는 메모가 있어요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Y85"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "R1",
"part": "요구사항 확인",
"title": "요구사항 가 확인",
"type": "judge",
"fix": false,
"screen": "조피가 손을 멈추고 문제지 요구사항 가를 다시 짚는다: \"콩나물은 꼬리를 다듬고 소고기는 채썰어 간장양념…\"",
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
"screen": "조피가 손을 멈추고 문제지 요구사항 나를 다시 짚는다: \"밥을 지어 전량 제출…\"",
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
"title": "예쁜 데만 한 공기",
"type": "judge",
"fix": true,
"screen": "조피가 밥을 예쁘게 한 공기만 뜨고 남은 밥은 냄비에 둔다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">콩나물밥</text><text x=\"60\" y=\"50\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">예쁜 데만 한 </text>",
"setup": [
[
"z",
"제일 잘된 부분만 드릴게요.",
"happy"
]
],
"explain": [
[
"t",
"잘된 부분만 고르는 건 반칙이에요. 문제지에 \"밥을 지어 전량 제출\"하라고 적혀 있어요. 지은 밥을 전부 내요.",
"show"
]
],
"src": [
"E02"
],
"retry": "조피가 고루 섞어 냄비 밥을 전부 담는다."
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
"screen": "조피가 콩나물밥에만 매달려 다른 과제는 손도 못 댔다.",
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
"id": "S4",
"part": "조리 4 · 간",
"title": "살짝 맛만",
"type": "judge",
"fix": true,
"screen": "조피가 양념을 숟가락으로 떠서 입으로 가져간다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">양념 한 숟갈</text><text x=\"60\" y=\"50\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">맛보기?</text>",
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
"숟가락 내려놓아요! 문제지 유의사항에 위생과 숙련된 기능평가를 위해 조리 작업 시 맛을 보지 않는다고 적혀 있어요.",
"show"
],
[
"t",
"얼마나 깎이는지는 공개되지 않았어요. 집에서 계량으로 간을 익혀 두는 연습을 해요.",
"smile"
]
],
"retry": "조피가 숟가락을 내려놓고 양념 양을 눈으로 확인한다.",
"src": [
"C04",
"U01"
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
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">콩나물밥</text><text x=\"60\" y=\"50\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">완성</text>",
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
"그래서 내기 전에 딱 멈추고 세 가지만 봐요.\n① 콩나물 꼬리 다듬었는지\n② 고기는 채 썰어 간장양념\n③ 밥 전량 담기",
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
window.FEEDBACK={"intro": "자, 오늘 콩나물밥 연습 돌아볼게요.", "good": ["꼬리를 다듬었어요.", "뚜껑을 참았어요.", "밥을 전량 담았어요."], "fix": ["꼬리 다듬기는 씻을 때 같이.", "뚜껑은 뜸 끝날 때까지.", "전량은 냄비 바닥까지."], "zopi": "뚜껑 참는 게 제일 어려웠어요.", "teacher": "참는 것도 기술이에요. 오늘 밥처럼 잘 뜸 들였어요!", "closing": "이 연습은 학원식 연습일 뿐 공식 채점이 아닙니다. 실제 기준은 큐넷 공개과제와 시험장 안내를 따르세요.", "small": "한국산업인력공단과 관계없습니다. 조리 순서와 팁은 ZOP LAB 연습용이고, 현장 이야기는 개인 경험(약 5년 전)이라 공식이 아닙니다. 공개과제 원문: 큐넷 → 자료실 → 공개문제 「한식조리기능사」.", "plan": "① 쌀은 체에 밭쳐 물기를 뺀다. → ② 콩나물 꼬리를 떼고 씻는다. → ③ 고기 채 → 간장 양념. → ④ 냄비에 쌀 → 콩나물 → 고기 순으로 얹고 물을 붓는다. → ⑤ 끓으면 불을 줄이고, 뚜껑을 열지 않고 익힌 뒤 뜸. → ⑥ 고루 섞어 전량 담기."};

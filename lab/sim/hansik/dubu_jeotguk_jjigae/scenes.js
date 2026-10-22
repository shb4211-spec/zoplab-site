// 두부젓국찌개 학원식 실기연습 — 대사 데이터 (_build/items.py에서 생성, 손으로 고치지 말 것)
window.ITEM={"name": "두부젓국찌개", "time": 20};
window.SRC={"C04": {"t": "「두부젓국찌개」 문제지 수험자 유의사항 1)", "k": "off"}, "C21": {"t": "「두부젓국찌개」 문제지 수험자 유의사항 7)", "k": "off"}, "E00": {"t": "「두부젓국찌개」 문제지 시험시간", "k": "off"}, "E01": {"t": "큐넷 한식조리기능사 2026 공개과제 「두부젓국찌개」 요구사항 가", "k": "off"}, "E02": {"t": "큐넷 한식조리기능사 2026 공개과제 「두부젓국찌개」 요구사항 나", "k": "off"}, "E03": {"t": "큐넷 한식조리기능사 2026 공개과제 「두부젓국찌개」 요구사항 다", "k": "off"}, "E04": {"t": "큐넷 한식조리기능사 2026 공개과제 「두부젓국찌개」 요구사항 라", "k": "off"}, "G04": {"t": "큐넷 위생 세부기준 9 손/손톱 (일부 감점)", "k": "off"}, "G07": {"t": "큐넷 위생 세부기준 기타 안내: 칼·도마 구분 사용은 세척으로 대신 가능", "k": "off"}, "G09": {"t": "큐넷 위생 세부기준 기타 안내: 눈금 표시 조리기구 허용(2022년부터)", "k": "off"}, "H08": {"t": "현장 기억(잡랩 소장, 약 5년 전): 한 번 내면 끝", "k": "field"}, "S_Y112": {"t": "청춘23 블로그 한식조리기능사 연습 후기 · https://young23.linkwe.kr/112 (조회 2026-10-23)", "k": "zop"}, "S_Z11": {"t": "요리공작소(Cooking Factory) 블로그 품목 정리 (원문 확인) · https://zlwmzksnakak.tistory.com/11 (조회 2026-10-23)", "k": "zop"}, "U01": {"t": "맛보기 위반: 감점될 수 있음 (점수 공개 자료 없음)", "k": "none"}, "U05": {"t": "접시 정리 상태: 감점될 수 있음 (점수 공개 자료 없음)", "k": "none"}, "Z01": {"t": "ZOP LAB 연습 순서: 두부젓국찌개", "k": "zop"}, "Z02": {"t": "ZOP LAB 팁: 두부젓국찌개 흔한 실수", "k": "zop"}, "Z22": {"t": "ZOP LAB 팁: 제출 전 확인 순서", "k": "zop"}};
window.SCENES=[
{
"id": "0",
"part": "실습 전, 학원 휴게 공간",
"title": "노트 복습",
"type": "talk",
"bgDim": true,
"screen": "학원 휴게 공간. 조피가 노트를 펼쳐 놓고 있다. 노트에는 \"두부젓국찌개 20분\"이라고 크게 적혀 있다.",
"svg": "<rect x=\"16\" y=\"8\" width=\"88\" height=\"62\" rx=\"4\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"34\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"14\" fill=\"#1f2a24\">두부젓국찌개 20분</text><text x=\"60\" y=\"54\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"11\" fill=\"#b6533a\">국물은 맑게</text>",
"lines": [
[
"z",
"(중얼중얼) 두부젓국찌개… 20분. 국물은 맑게.",
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
"title": "두부 안 헹굼",
"type": "judge",
"fix": true,
"screen": "조피가 썬 두부를 바로 냄비에 넣는다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">두부 안 헹굼</text>",
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
"두부를 썬 뒤 물에 헹궈야 국물이 탁해지지 않는다는 팁이에요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Y112"
],
"retry": "조피가 메모대로 다시 한다.",
"startTimer": true
},
{
"id": "M02",
"part": "공개 후기 실수",
"title": "휘젓기",
"type": "judge",
"fix": true,
"screen": "조피가 찌개를 국자로 휘젓는다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">휘젓기</text>",
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
"휘젓지 말고 최대한 맑게 끓이라는 팁이에요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Y112"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "M03",
"part": "공개 후기 실수",
"title": "센 불 유지",
"type": "judge",
"fix": true,
"screen": "조피가 재료를 넣은 뒤에도 센 불이다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">센 불 유지</text>",
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
"재료를 넣은 뒤엔 약불로 줄이라는 메모가 있어요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Y112"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "M04",
"part": "공개 후기 실수",
"title": "새우젓 통째",
"type": "judge",
"fix": true,
"screen": "조피가 새우젓을 건더기째 넣는다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">새우젓 통째</text>",
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
"새우젓은 다져서 면포에 걸러 국물만 쓰는 방법이 소개돼 있어요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Y112"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "S1",
"part": "조리 1",
"title": "간장으로 간",
"type": "judge",
"fix": true,
"screen": "조피가 국간장을 들고 찌개에 부으려 한다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">두부젓국찌개</text><text x=\"60\" y=\"50\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">간장으로 간</text>",
"setup": [
[
"z",
"간은 역시 간장이죠.",
"happy"
]
],
"explain": [
[
"t",
"오늘은 간장이 쉬는 날이에요. 문제지에 \"소금과 다진 새우젓의 국물로 간하고, 국물을 맑게\" 하라고 적혀 있어요.",
"show"
]
],
"src": [
"E03"
],
"retry": "조피가 간장을 내려놓고 다진 새우젓 국물을 짠다."
},
{
"id": "M05",
"part": "공개 후기 실수",
"title": "굴 그냥 씻기",
"type": "judge",
"fix": true,
"screen": "조피가 굴을 맹물에 박박 문지른다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">굴 그냥 씻기</text>",
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
"굴은 소금물에 흔들어 씻으라는 메모가 있어요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Y112"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "M06",
"part": "공개 후기 실수",
"title": "참기름 깜빡",
"type": "judge",
"fix": true,
"screen": "조피가 참기름 없이 담으려 한다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">참기름 깜빡</text>",
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
"마지막에 참기름 몇 방울을 꼭 넣으라는 팁이에요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Y112"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "M07",
"part": "공개 후기 실수",
"title": "통째 부어 담기",
"type": "judge",
"fix": true,
"screen": "조피가 냄비째 기울여 그릇에 쏟는다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">통째 부어 담기</text>",
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
"통째 부어 모양이 정리 안 된 후기가 있어요. 재료가 보이게 정리해 담아요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Y112"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "M08",
"part": "공개 후기 실수",
"title": "대파 쓰기",
"type": "judge",
"fix": true,
"screen": "조피가 대파를 다지려 한다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">대파 쓰기</text>",
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
"두부젓국찌개엔 대파가 아니라 실파를 쓴다는 메모가 있어요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Y112"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "S2",
"part": "조리 2",
"title": "굴을 처음부터",
"type": "judge",
"fix": true,
"screen": "물이 끓기도 전에 조피가 굴을 넣는다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">두부젓국찌개</text><text x=\"60\" y=\"50\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">굴을 처음부터</text>",
"setup": [
[
"z",
"오래 끓여야 우러나죠!",
"thinking"
]
],
"explain": [
[
"t",
"굴은 오래 끓이면 오그라들어요. 우리 학원식 팁: 두부와 간을 먼저 하고, 굴과 마늘은 짧게 끓이며 거품을 걷어요. 공식 아님 · ZOP LAB 연습 순서예요.",
"show",
"zop"
]
],
"src": [
"Z01",
"Z02"
],
"retry": "조피가 굴을 건져 두었다가 나중에 넣는다."
},
{
"id": "M10",
"part": "공개 후기 실수",
"title": "굴 박박 문지르기",
"type": "judge",
"fix": true,
"screen": "조피가 굴을 힘주어 비벼 씻는다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">굴 박박 문지르기</text>",
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
"힘을 너무 주면 굴이 터지니 가볍게 흔들어 씻으라는 메모가 있어요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Z11"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "M11",
"part": "공개 후기 실수",
"title": "홍고추 어슷썰기",
"type": "judge",
"fix": true,
"screen": "조피가 홍고추를 어슷하게 썬다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">홍고추 어슷썰기</text>",
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
"의외로 어슷하게 써는 실수가 가끔 있다는 메모가 있어요. 요구 규격대로 썰어요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Z11"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "M12",
"part": "공개 후기 실수",
"title": "끓는 중 참기름",
"type": "judge",
"fix": true,
"screen": "조피가 불 켠 채 참기름을 듬뿍 넣는다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">끓는 중 참기름</text>",
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
"향이 날아가니 불을 끄고 소량만, 많으면 국물이 탁해 보인다는 메모가 있어요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Z11"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "M13",
"part": "공개 후기 실수",
"title": "톱질로 두부 썰기",
"type": "judge",
"fix": true,
"screen": "조피가 두부를 칼로 톱질하듯 썬다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">톱질로 두부 썰기</text>",
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
"누르지 말고 수직으로 자르라는 메모가 있어요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Z11"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "S3",
"part": "조리 3",
"title": "국물이 쫄았네",
"type": "judge",
"fix": true,
"screen": "다 끓이고 보니 그릇에 국물이 바닥에만 깔려 있다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">두부젓국찌개</text><text x=\"60\" y=\"50\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">국물이 쫄았네</text>",
"setup": [
[
"z",
"건더기가 많으니까 괜찮겠죠?",
"oops"
]
],
"explain": [
[
"t",
"건더기 많은 건 좋지만 국물도 몫이 있어요. 문제지에 \"찌개의 국물은 200mL 이상\"이라고 적혀 있어요.",
"show"
]
],
"src": [
"E04"
],
"retry": "조피가 다음 판엔 물 양을 노트에 적는다."
},
{
"id": "M14",
"part": "공개 후기 실수",
"title": "참기름 병째",
"type": "judge",
"fix": true,
"screen": "조피가 참기름 병을 기울여 바로 붓는다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">참기름 병째</text>",
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
"시험장에서 참기름을 엎지르는 경우가 있으니 계량스푼으로 덜어 쓰라는 메모가 있어요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Z11"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "R1",
"part": "요구사항 확인",
"title": "요구사항 가 확인",
"type": "judge",
"fix": false,
"screen": "조피가 손을 멈추고 문제지 요구사항 가를 다시 짚는다: \"두부는 2cm x 3cm x 1cm…\"",
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
"screen": "조피가 손을 멈추고 문제지 요구사항 나를 다시 짚는다: \"홍고추는 0.5cm x 3cm, 실파는 3cm…\"",
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
"screen": "조피가 손을 멈추고 문제지 요구사항 다를 다시 짚는다: \"소금과 다진 새우젓의 국물로 간하고, 국물을 맑게…\"",
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
"id": "R4",
"part": "요구사항 확인",
"title": "요구사항 라 확인",
"type": "judge",
"fix": false,
"screen": "조피가 손을 멈추고 문제지 요구사항 라를 다시 짚는다: \"찌개의 국물은 200mL 이상…\"",
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
"id": "G07",
"part": "조리 중",
"title": "같은 도마 쓰기",
"type": "judge",
"fix": false,
"screen": "조피가 고기를 썬 도마와 칼을 깨끗이 씻은 뒤 채소를 썬다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">같은 도마 쓰기</text>",
"setup": [
[
"z",
"씻고 쓰면 되죠?",
"thinking"
]
],
"explain": [
[
"t",
"맞아요. 위생 세부기준 기타 안내에 교차오염 방지를 위한 칼·도마 구분 사용은 세척으로 대신할 수 있다고 적혀 있어요.",
"smile"
]
],
"src": [
"G07"
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
"id": "SZ",
"part": "제출 전",
"title": "내기 전에 멈추기",
"type": "judge",
"fix": true,
"stopTimer": true,
"screen": "접시에 다 담았다. 그런데 접시 가장자리에 양념 자국이 묻어 있다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">두부젓국찌개</text><text x=\"60\" y=\"50\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">완성</text>",
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
"그래서 내기 전에 딱 멈추고 세 가지만 봐요.\n① 두부 2cm x 3cm x 1cm, 홍고추·실파 규격\n② 국물 맑게, 새우젓 국물·소금으로 간\n③ 국물 200mL 이상",
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
window.FEEDBACK={"intro": "자, 오늘 두부젓국찌개 연습 돌아볼게요.", "good": ["새우젓 국물로 간했어요.", "굴 넣는 때를 늦췄어요.", "국물 양을 확인했어요."], "fix": ["간은 소금과 새우젓 국물.", "굴은 짧게.", "국물 양은 담고 나서 확인."], "zopi": "20분이 진짜 빨리 가요.", "teacher": "짧은 품목일수록 순서표가 힘이에요. 오늘 국물 맑았어요!", "closing": "이 연습은 학원식 연습일 뿐 공식 채점이 아닙니다. 실제 기준은 큐넷 공개과제와 시험장 안내를 따르세요.", "small": "한국산업인력공단과 관계없습니다. 조리 순서와 팁은 ZOP LAB 연습용이고, 현장 이야기는 개인 경험(약 5년 전)이라 공식이 아닙니다. 공개과제 원문: 큐넷 → 자료실 → 공개문제 「한식조리기능사」.", "plan": "① 굴 씻기, 새우젓 다져 국물만 꼭 짜 두기. → ② 두부·홍고추·실파 썰기. → ③ 물이 끓으면 두부 → 새우젓 국물·소금으로 간. → ④ 굴·마늘을 넣고 짧게 끓이며 거품 걷기. → ⑤ 홍고추·실파 넣고 불 끄기 → 참기름 약간."};

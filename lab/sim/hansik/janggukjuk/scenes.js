// 장국죽 학원식 실기연습 — 대사 데이터 (_build/items.py에서 생성, 손으로 고치지 말 것)
window.ITEM={"name": "장국죽", "time": 30};
window.SRC={"C04": {"t": "「장국죽」 문제지 수험자 유의사항 1)", "k": "off"}, "C08": {"t": "「장국죽」 문제지 수험자 유의사항 6)-자)", "k": "off"}, "C21": {"t": "「장국죽」 문제지 수험자 유의사항 7)", "k": "off"}, "E00": {"t": "「장국죽」 문제지 시험시간", "k": "off"}, "E01": {"t": "큐넷 한식조리기능사 2026 공개과제 「장국죽」 요구사항 가", "k": "off"}, "E02": {"t": "큐넷 한식조리기능사 2026 공개과제 「장국죽」 요구사항 나", "k": "off"}, "G01": {"t": "「장국죽」 문제지 수험자 유의사항 3) 지급재료 확인", "k": "off"}, "G02": {"t": "큐넷 수험자 지참준비물(한식, 2026) 칼 비고: 체칼·필러 사용 불가 / 문제지 유의사항 6)-아)", "k": "off"}, "H08": {"t": "현장 기억(잡랩 소장, 약 5년 전): 한 번 내면 끝", "k": "field"}, "S_Y87": {"t": "청춘23 블로그 한식조리기능사 연습 후기 · https://young23.linkwe.kr/87 (조회 2026-10-23)", "k": "zop"}, "S_Z25": {"t": "요리공작소(Cooking Factory) 블로그 품목 정리 (원문 확인) · https://zlwmzksnakak.tistory.com/25 (조회 2026-10-23)", "k": "zop"}, "U01": {"t": "맛보기 위반: 감점될 수 있음 (점수 공개 자료 없음)", "k": "none"}, "U05": {"t": "접시 정리 상태: 감점될 수 있음 (점수 공개 자료 없음)", "k": "none"}, "Z01": {"t": "ZOP LAB 연습 순서: 장국죽", "k": "zop"}, "Z02": {"t": "ZOP LAB 팁: 장국죽 흔한 실수", "k": "zop"}, "Z22": {"t": "ZOP LAB 팁: 제출 전 확인 순서", "k": "zop"}};
window.SCENES=[
{
"id": "0",
"part": "실습 전, 학원 휴게 공간",
"title": "노트 복습",
"type": "talk",
"bgDim": true,
"screen": "학원 휴게 공간. 조피가 노트를 펼쳐 놓고 있다. 노트에는 \"장국죽 30분\"이라고 크게 적혀 있다.",
"svg": "<rect x=\"16\" y=\"8\" width=\"88\" height=\"62\" rx=\"4\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"34\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"14\" fill=\"#1f2a24\">장국죽 30분</text><text x=\"60\" y=\"54\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"11\" fill=\"#b6533a\">쌀은 반 정도로</text>",
"lines": [
[
"z",
"(중얼중얼) 장국죽… 30분. 쌀은 반 정도로.",
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
"screen": "시작 신호 전. 조피가 지급재료를 보지도 않고 칼부터 꺼낸다. 받은 재료: 쌀 · 소고기 · 건표고버섯 · 대파 · 마늘 · 진간장 · 깨소금 · 검은후춧가루 · 참기름 · 국간장",
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
"id": "G02",
"part": "시작 전",
"title": "편한 도구 하나",
"type": "judge",
"fix": true,
"screen": "조피가 가방에서 채칼을 꺼내 도마 옆에 둔다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">편한 도구 하나</text>",
"setup": [
[
"z",
"이거 하나면 채 썰기 끝!",
"happy"
]
],
"explain": [
[
"t",
"편하지만 오늘은 안 돼요. 큐넷 지참준비물 목록 칼 항목 비고에 체칼, 필러 등은 기능평가에 영향을 미쳐 사용할 수 없다고 적혀 있어요.",
"show"
],
[
"t",
"문제지 유의사항에도 지참준비물 이외의 조리기술에 영향을 줄 수 있는 기구를 쓰면 실격 항목이라고 적혀 있어요.",
"wait"
]
],
"src": [
"G02"
],
"retry": "조피가 채칼을 가방에 다시 넣는다."
},
{
"id": "M01",
"part": "공개 후기 실수",
"title": "고기·버섯 함께 재움",
"type": "judge",
"fix": true,
"screen": "조피가 다진 고기와 표고를 한 그릇에 같이 양념한다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">고기·버섯 함께 </text><text x=\"60\" y=\"50\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">재움</text>",
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
"양념장은 하나로 만들되 재우는 건 따로따로 하라는 메모가 있어요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Y87"
],
"retry": "조피가 메모대로 다시 한다.",
"startTimer": true
},
{
"id": "M02",
"part": "공개 후기 실수",
"title": "설탕 넣기",
"type": "judge",
"fix": true,
"screen": "조피가 양념에 설탕을 넣으려 한다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">설탕 넣기</text>",
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
"장국죽 양념엔 설탕을 넣지 않는다는 메모가 있어요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Y87"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "M03",
"part": "공개 후기 실수",
"title": "소금 간",
"type": "judge",
"fix": true,
"screen": "조피가 마지막에 소금으로 간을 한다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">소금 간</text>",
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
"소금 간은 하지 않고 색은 국간장으로 맞춘다는 메모가 있어요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Y87"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "M04",
"part": "공개 후기 실수",
"title": "색 연함",
"type": "judge",
"fix": true,
"screen": "조피 죽이 거의 하얗다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">색 연함</text>",
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
"색이 안 나서 피드백을 받은 사례가 많았다는 후기예요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Y87"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "S1",
"part": "조리 1",
"title": "곱게 곱게",
"type": "judge",
"fix": true,
"screen": "조피가 불린 쌀을 가루가 될 때까지 곱게 빻고 있다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">장국죽</text><text x=\"60\" y=\"50\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">곱게 곱게</text>",
"setup": [
[
"z",
"곱게 빻을수록 부드럽겠죠?",
"happy"
]
],
"explain": [
[
"t",
"부드러움도 정도가 있어요. 문제지에 \"불린 쌀을 반정도로 싸라기를 만들어 죽을 쑤시오\"라고 적혀 있어요. '싸라기'는 부서진 쌀알이에요.",
"show"
],
[
"t",
"우리 학원식 팁: 너무 곱게 부수면 풀처럼 되고, 덜 부수면 통쌀처럼 보여요. 공식 아님이에요.",
"smile",
"zop"
]
],
"src": [
"E01",
"Z02"
],
"retry": "조피가 새 쌀을 방망이로 반쯤만 부순다."
},
{
"id": "M05",
"part": "공개 후기 실수",
"title": "국간장 한 번에",
"type": "judge",
"fix": true,
"screen": "조피가 국간장을 한 번에 다 붓는다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">국간장 한 번에</text>",
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
"이미 색이 났으면 넣는 시늉만 하라는 메모가 있어요. 한 번에 넣어 짜고 검어진 사례도 정리돼 있어요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Y87"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "M06",
"part": "공개 후기 실수",
"title": "고기 뭉침",
"type": "judge",
"fix": true,
"screen": "조피 냄비 속 고기가 덩어리져 있다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">고기 뭉침</text>",
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
"뭉치지 않게 흩뜨려 볶으라는 팁이에요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Y87"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "M07",
"part": "공개 후기 실수",
"title": "볶다 태움",
"type": "judge",
"fix": true,
"screen": "조피가 센 불에서 고기와 버섯을 볶는다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">볶다 태움</text>",
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
"버섯과 고기를 볶을 때 태우지 말라는 팁이에요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Y87"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "M08",
"part": "공개 후기 실수",
"title": "미리 완성",
"type": "judge",
"fix": true,
"screen": "조피가 다른 과제가 남았는데 죽을 끝까지 졸여 그릇에 담아 둔다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">미리 완성</text>",
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
"잠시 멈췄다가 제출 직전 농도를 맞춰 담으라는 팁이에요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Y87"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "S2",
"part": "조리 2",
"title": "표고는 다지기?",
"type": "judge",
"fix": true,
"screen": "조피가 고기와 표고를 한꺼번에 곱게 다진다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">장국죽</text><text x=\"60\" y=\"50\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">표고는 다지기?</text>",
"setup": [
[
"z",
"둘 다 다지면 한 번에 끝!",
"happy"
]
],
"explain": [
[
"t",
"한 번에 끝나면 좋겠지만 표고는 모양이 따로 있어요. 문제지에 \"소고기는 다지고 불린 표고는 3cm의 길이로 채\"를 썰라고 적혀 있어요.",
"show"
]
],
"src": [
"E02"
],
"retry": "조피가 표고를 3cm 길이로 채 썬다."
},
{
"id": "M09",
"part": "공개 후기 실수",
"title": "쇠 주걱",
"type": "judge",
"fix": true,
"screen": "조피가 스테인리스 숟가락으로 죽을 젓는다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">쇠 주걱</text>",
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
"나무나 실리콘 주걱을 쓰라는 메모가 있어요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Y87"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "M10",
"part": "공개 후기 실수",
"title": "거품 방치",
"type": "judge",
"fix": true,
"screen": "조피가 처음 끓어오른 거품을 그대로 둔다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">거품 방치</text>",
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
"한 번 끓어오르면 거품을 걷으라는 메모가 있어요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Y87"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "M12",
"part": "공개 후기 실수",
"title": "쌀 말려 두기",
"type": "judge",
"fix": true,
"screen": "조피가 불린 쌀을 체에 받쳐 한참 말려 둔다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">쌀 말려 두기</text>",
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
"쌀이 마르면 잘 안 빻아지니 빻기 전까지 물에 담가 두라는 메모가 있어요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Z25"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "M13",
"part": "공개 후기 실수",
"title": "계량 안 함",
"type": "judge",
"fix": true,
"screen": "조피가 쌀 부피를 재지 않고 물을 대충 붓는다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">계량 안 함</text>",
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
"물을 쌀 부피 기준으로 넣으니 쌀 부피부터 재라는 메모가 있어요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Z25"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "S3",
"part": "조리 3",
"title": "저으면서 쑤기",
"type": "judge",
"fix": false,
"screen": "물을 붓고 끓자 조피가 불을 줄이고 바닥을 저어 가며 쑨다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">장국죽</text><text x=\"60\" y=\"50\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">저으면서 쑤기</text>",
"setup": [
[
"z",
"바닥에 눌지 않게 계속 저을게요.",
"thinking"
]
],
"explain": [
[
"t",
"좋아요! 우리 학원식 팁이에요. 바닥이 눌면 탄 냄새와 검은 점이 생기기 쉬워요. 공식 아님 · ZOP LAB 연습 순서예요.",
"smile",
"zop"
]
],
"src": [
"Z01",
"Z02"
]
},
{
"id": "M14",
"part": "공개 후기 실수",
"title": "쌀 오래 볶기",
"type": "judge",
"fix": true,
"screen": "조피가 쌀을 센 불에서 오래 볶는다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">쌀 오래 볶기</text>",
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
"오래 볶으면 바닥에 빨리 눌어붙으니 약불에서 살짝만 볶으라는 메모가 있어요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Z25"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "M15",
"part": "공개 후기 실수",
"title": "파 초록 심",
"type": "judge",
"fix": true,
"screen": "조피가 대파 초록 심까지 다져 넣는다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">파 초록 심</text>",
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
"초록 심은 죽을 지저분해 보이게 하니 흰 부분만 쓰라는 메모가 있어요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Z25"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "M16",
"part": "공개 후기 실수",
"title": "쌀알 안 퍼짐",
"type": "judge",
"fix": true,
"screen": "조피가 농도만 보고 바로 간을 한다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">쌀알 안 퍼짐</text>",
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
"농도는 맞아도 쌀알이 안 퍼졌으면 물을 더 넣어 더 끓이라는 메모가 있어요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Z25"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "R1",
"part": "요구사항 확인",
"title": "요구사항 가 확인",
"type": "judge",
"fix": false,
"screen": "조피가 손을 멈추고 문제지 요구사항 가를 다시 짚는다: \"불린 쌀을 반정도로 싸라기를 만들어 죽을 쑤시오…\"",
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
"svg": "<circle cx=\"52\" cy=\"44\" r=\"28\" fill=\"#555\" stroke=\"#1f2a24\" stroke-width=\"3\"/><path d=\"M80,44h32\" stroke=\"#1f2a24\" stroke-width=\"7\" stroke-linecap=\"round\"/><text x=\"52\" y=\"48\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#fff\">장국죽</text><path d=\"M100,66 q-6,-9 0,-18 q6,9 0,18z\" fill=\"#e8873a\" stroke=\"#1f2a24\" stroke-width=\"2\"/>",
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
"screen": "조피가 손을 멈추고 문제지 요구사항 나를 다시 짚는다: \"소고기는 다지고 불린 표고는 3cm의 길이로 채…\"",
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
"id": "SZ",
"part": "제출 전",
"title": "내기 전에 멈추기",
"type": "judge",
"fix": true,
"stopTimer": true,
"screen": "접시에 다 담았다. 그런데 접시 가장자리에 양념 자국이 묻어 있다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">장국죽</text><text x=\"60\" y=\"50\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">완성</text>",
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
"그래서 내기 전에 딱 멈추고 세 가지만 봐요.\n① 쌀은 반 정도 싸라기\n② 고기는 다지고 표고는 3cm 채\n③ 담기 직전 농도 확인",
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
window.FEEDBACK={"intro": "자, 오늘 장국죽 연습 돌아볼게요.", "good": ["쌀을 반쯤만 부쉈어요.", "표고 모양을 맞췄어요.", "저어 가며 눌지 않게 했어요."], "fix": ["싸라기 크기를 눈에 익히기.", "고기와 표고는 손질이 달라요.", "농도는 담기 직전에 한 번 더."], "zopi": "죽은 젓는 팔이 제일 바빠요.", "teacher": "팔은 바빠도 마음은 느긋하게. 오늘 죽 농도 좋았어요!", "closing": "이 연습은 학원식 연습일 뿐 공식 채점이 아닙니다. 실제 기준은 큐넷 공개과제와 시험장 안내를 따르세요.", "small": "한국산업인력공단과 관계없습니다. 조리 순서와 팁은 ZOP LAB 연습용이고, 현장 이야기는 개인 경험(약 5년 전)이라 공식이 아닙니다. 공개과제 원문: 큐넷 → 자료실 → 공개문제 「한식조리기능사」.", "plan": "① 쌀 물기를 빼고 방망이·칼등으로 반쯤 부순다. → ② 고기 다지기, 표고 3cm 채 → 각각 양념. → ③ 냄비에 참기름 두르고 고기·표고 → 쌀 순으로 볶기. → ④ 물을 붓고 끓으면 불을 줄여 저어 가며 쑤기. → ⑤ 국간장으로 색·간 → 농도 확인 후 담기."};

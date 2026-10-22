// 배추김치 학원식 실기연습 — 대사 데이터 (_build/items.py에서 생성, 손으로 고치지 말 것)
window.ITEM={"name": "배추김치", "time": 35};
window.SRC={"C04": {"t": "「배추김치」 문제지 수험자 유의사항 1)", "k": "off"}, "C21": {"t": "「배추김치」 문제지 수험자 유의사항 7)", "k": "off"}, "E00": {"t": "「배추김치」 문제지 시험시간", "k": "off"}, "E01": {"t": "큐넷 한식조리기능사 2026 공개과제 「배추김치」 요구사항 가", "k": "off"}, "E02": {"t": "큐넷 한식조리기능사 2026 공개과제 「배추김치」 요구사항 나", "k": "off"}, "E06": {"t": "큐넷 한식조리기능사 2026 공개과제 「배추김치」 요구사항 바", "k": "off"}, "H08": {"t": "현장 기억(잡랩 소장, 약 5년 전): 한 번 내면 끝", "k": "field"}, "U01": {"t": "맛보기 위반: 감점될 수 있음 (점수 공개 자료 없음)", "k": "none"}, "U05": {"t": "접시 정리 상태: 감점될 수 있음 (점수 공개 자료 없음)", "k": "none"}, "Z01": {"t": "ZOP LAB 연습 순서: 배추김치", "k": "zop"}, "Z02": {"t": "ZOP LAB 팁: 배추김치 흔한 실수", "k": "zop"}, "Z22": {"t": "ZOP LAB 팁: 제출 전 확인 순서", "k": "zop"}};
window.SCENES=[
{
"id": "0",
"part": "실습 전, 학원 휴게 공간",
"title": "노트 복습",
"type": "talk",
"bgDim": true,
"screen": "학원 휴게 공간. 조피가 노트를 펼쳐 놓고 있다. 노트에는 \"배추김치 35분\"이라고 크게 적혀 있다.",
"svg": "<rect x=\"16\" y=\"8\" width=\"88\" height=\"62\" rx=\"4\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"34\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"14\" fill=\"#1f2a24\">배추김치 35분</text><text x=\"60\" y=\"54\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"11\" fill=\"#b6533a\">찹쌀풀부터 식히기</text>",
"lines": [
[
"z",
"(중얼중얼) 배추김치… 35분. 찹쌀풀부터 식히기.",
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
"당신은 선생님 옆에서 같이 보는 '체크 눈'이에요. 고칠 점이 보이면 「이의 있음!」, 괜찮으면 「괜찮아요」. (복장 체크는 북어구이 판에서 했으니 건너뛰어요.)"
]
],
"src": [
"E00",
"E01"
]
},
{
"id": "S1",
"part": "조리 1",
"title": "뜨거운 풀",
"type": "judge",
"fix": true,
"screen": "조피가 막 쑨 찹쌀풀을 바로 양념에 붓는다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">배추김치</text><text x=\"60\" y=\"50\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">뜨거운 풀</text>",
"setup": [
[
"z",
"따끈할 때 섞으면 잘 섞이죠.",
"happy"
]
],
"explain": [
[
"t",
"따끈하면 채소가 숨이 죽어요. 문제지에 \"찹쌀가루로 찹쌀풀을 쑤어 식혀\" 쓰라고 적혀 있어요.",
"show"
],
[
"t",
"우리 학원식 순서는 찹쌀풀을 제일 먼저 쑤어 넓은 그릇에 펼쳐 식히는 거예요. 공식 아님 · ZOP LAB 연습 순서예요.",
"smile",
"zop"
]
],
"src": [
"E02",
"Z01"
],
"retry": "조피가 풀을 넓은 그릇에 펼쳐 식힌다.",
"startTimer": true
},
{
"id": "S2",
"part": "조리 2",
"title": "소가 한쪽에",
"type": "judge",
"fix": true,
"screen": "조피가 배추 겉잎 쪽에만 소를 몰아 넣는다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">배추김치</text><text x=\"60\" y=\"50\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">소가 한쪽에</text>",
"setup": [
[
"z",
"잘 보이는 데 넣었어요.",
"neutral"
]
],
"explain": [
[
"t",
"안쪽 잎도 기다려요. 문제지에 \"소를 배춧잎 사이사이에 고르게\" 채우라고 적혀 있어요. 우리 학원식 팁: 줄기 쪽까지 꼼꼼히요.",
"show",
"zop"
]
],
"src": [
"E06",
"Z02"
],
"retry": "조피가 잎을 한 장씩 들추며 소를 고르게 넣는다."
},
{
"id": "S3",
"part": "조리 3",
"title": "그냥 담기",
"type": "judge",
"fix": true,
"screen": "조피가 소를 넣은 배추를 펼친 채 접시에 놓는다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">배추김치</text><text x=\"60\" y=\"50\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">그냥 담기</text>",
"setup": [
[
"z",
"속이 보여야 맛있어 보이죠.",
"happy"
]
],
"explain": [
[
"t",
"속은 감싸 줘요. 문제지에 반을 접어 \"바깥잎으로 전체를 싸서\" 담으라고 적혀 있어요.",
"show"
]
],
"src": [
"E06"
],
"retry": "조피가 반을 접어 바깥잎으로 감싼다."
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
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">배추김치</text><text x=\"60\" y=\"50\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">완성</text>",
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
"그래서 내기 전에 딱 멈추고 세 가지만 봐요.\n① 찹쌀풀 식혀 사용, 무 0.3cm x 0.3cm x 5cm\n② 실파·갓·미나리·대파 4cm\n③ 소 고르게, 바깥잎으로 싸기",
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
window.FEEDBACK={"intro": "자, 오늘 배추김치 연습 돌아볼게요.", "good": ["풀을 식혔어요.", "소를 고르게 넣었어요.", "바깥잎으로 감쌌어요."], "fix": ["풀은 맨 처음.", "줄기 쪽까지.", "마무리는 감싸기."], "zopi": "김치 담그니까 할머니 생각나요.", "teacher": "그 마음이 맛이에요. 오늘 김치 단정했어요!", "closing": "이 연습은 학원식 연습일 뿐 공식 채점이 아닙니다. 실제 기준은 큐넷 공개과제와 시험장 안내를 따르세요.", "small": "한국산업인력공단과 관계없습니다. 조리 순서와 팁은 ZOP LAB 연습용이고, 현장 이야기는 개인 경험(약 5년 전)이라 공식이 아닙니다. 공개과제 원문: 큐넷 → 자료실 → 공개문제 「한식조리기능사」.", "plan": "① 찹쌀풀부터 쑤어 넓은 그릇에 펼쳐 식히기(가장 먼저). → ② 배추 씻어 뒤집어 물기 빼기. → ③ 무채 썰어 고춧가루로 버무려 색 들이기. → ④ 실파·갓·미나리·대파 4cm, 마늘·생강·새우젓 다지기. → ⑤ 풀·액젓·설탕 등으로 양념 → 무채와 채소 섞어 소 완성. → ⑥ 잎 사이사이 소 넣기 → 반 접어 바깥잎으로 싸서 담기."};

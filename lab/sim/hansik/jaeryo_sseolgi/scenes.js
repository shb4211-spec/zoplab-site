// 재료썰기 학원식 실기연습 — 대사 데이터 (_build/items.py에서 생성, 손으로 고치지 말 것)
window.ITEM={"name": "재료썰기", "time": 25};
window.SRC={"C06b": {"t": "「재료썰기」 문제지 수험자 유의사항 4)", "k": "off"}, "C08": {"t": "「재료썰기」 문제지 수험자 유의사항 6)-자)", "k": "off"}, "C21": {"t": "「재료썰기」 문제지 수험자 유의사항 7)", "k": "off"}, "E00": {"t": "「재료썰기」 문제지 시험시간", "k": "off"}, "E01": {"t": "큐넷 한식조리기능사 2026 공개과제 「재료썰기」 요구사항 가", "k": "off"}, "E02": {"t": "「재료썰기」 요구사항 나", "k": "off"}, "E03": {"t": "「재료썰기」 요구사항 다", "k": "off"}, "E04": {"t": "「재료썰기」 요구사항 라", "k": "off"}, "G01": {"t": "「재료썰기」 문제지 수험자 유의사항 3) 지급재료 확인", "k": "off"}, "G02": {"t": "큐넷 수험자 지참준비물(한식, 2026) 칼 비고: 체칼·필러 사용 불가 / 문제지 유의사항 6)-아)", "k": "off"}, "G12": {"t": "「재료썰기」 문제지 수험자 유의사항 6)-나) / 위생 세부기준 5 마스크", "k": "off"}, "H08": {"t": "현장 기억(잡랩 소장, 약 5년 전): 한 번 내면 끝", "k": "field"}, "I10": {"t": "「각 10개」 = 흰자(백) 지단 마름모 10개 + 노른자(황) 지단 마름모 10개로 읽는 것이 학원 레시피·합격자 후기의 일반적 해석 (공식 풀이 아님). 출처: 만개의레시피 6898932 「황백지단은 마름모꼴 1.5cm 각각 10개」 / zlwmzksnakak.tistory.com/6 「마름모 꼴로 각각 10개씩」 / richdobby.tistory.com/23 「각각 10개 이상」(‘이상’으로 적은 곳도 있음)", "k": "interp"}, "S_Y82": {"t": "청춘23 블로그 한식조리기능사 연습 후기 · https://young23.linkwe.kr/82 (조회 2026-10-23)", "k": "zop"}, "U05": {"t": "접시 정리 상태: 감점될 수 있음 (점수 공개 자료 없음)", "k": "none"}, "Z01": {"t": "ZOP LAB 연습 순서: 재료썰기", "k": "zop"}, "Z02": {"t": "ZOP LAB 팁: 재료썰기 흔한 실수", "k": "zop"}, "Z22": {"t": "ZOP LAB 팁: 제출 전 확인 순서", "k": "zop"}};
window.SCENES=[
{
"id": "0",
"part": "실습 전, 학원 휴게 공간",
"title": "노트 복습",
"type": "talk",
"bgDim": true,
"screen": "학원 휴게 공간. 조피가 노트를 펼쳐 놓고 있다. 노트에는 \"재료썰기 25분\"이라고 크게 적혀 있다.",
"svg": "<rect x=\"16\" y=\"8\" width=\"88\" height=\"62\" rx=\"4\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"34\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"14\" fill=\"#1f2a24\">재료썰기 25분</text><text x=\"60\" y=\"54\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"11\" fill=\"#b6533a\">돌려깎기 잊지 말기</text>",
"lines": [
[
"z",
"(중얼중얼) 재료썰기… 25분. 돌려깎기 잊지 말기.",
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
"id": "G01",
"part": "시작 전",
"title": "재료 확인은 지금",
"type": "judge",
"fix": true,
"screen": "시작 신호 전. 조피가 지급재료를 보지도 않고 칼부터 꺼낸다. 받은 재료: 무 · 오이 · 당근 · 달걀 · 식용유 · 소금",
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
"id": "M01",
"part": "공개 후기 실수",
"title": "달걀은 씻고 따로",
"type": "judge",
"fix": true,
"screen": "조피가 씻은 달걀을 채소 그릇에 같이 담아 둔다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">달걀은 씻고 따로</text>",
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
"달걀도 씻되, 씻자마자 채소와 다른 그릇에 따로 두는 걸로 연습해요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Y82"
],
"retry": "조피가 메모대로 다시 한다.",
"startTimer": true
},
{
"id": "M03",
"part": "공개 후기 실수",
"title": "길이부터 안 맞추기",
"type": "judge",
"fix": true,
"screen": "조피가 무를 두께부터 썰기 시작한다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">길이부터 안 맞추</text><text x=\"60\" y=\"50\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">기</text>",
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
"가장 긴 길이를 먼저 재단해 모양을 잡고, 그다음 두께와 폭을 맞추는 순서로 연습해요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Y82"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "M04",
"part": "공개 후기 실수",
"title": "돌려 깎다 끊김",
"type": "judge",
"fix": true,
"screen": "조피가 오이를 돌려 깎다가 껍질이 자꾸 끊긴다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">돌려 깎다 끊김</text>",
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
"칼을 세우고 아주 작게 지그재그로 움직이며 끊기지 않게 깎는 연습이 필요하다는 후기가 있어요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Y82"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "S1",
"part": "조리 1 · 지단",
"title": "노른자 따로, 흰자 따로",
"type": "judge",
"fix": false,
"screen": "조피가 달걀 흰자와 노른자를 나눠 그릇 두 개에 담고, 알끈(노른자에 붙은 하얀 끈)을 걷어 낸다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">흰자 그릇 · 노른자 그릇</text><text x=\"60\" y=\"50\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">알끈 걷음</text>",
"setup": [
[
"z",
"흰자랑 노른자, 사이좋게 따로따로.",
"thinking"
]
],
"explain": [
[
"t",
"좋아요! 문제지에 흰자와 노른자를 나눠서 알끈과 거품을 없애고 지단을 부치라고 적혀 있어요. '지단'은 달걀을 얇게 부친 거예요.",
"smile"
],
[
"t",
"그리고 지단은 마름모 모양으로 10개씩 썰고, 나머지는 채 썰어요. 학원 교재와 합격 후기에서는 보통 흰자 지단 10개, 노른자 지단 10개, 합쳐서 20개로 읽어요. 이건 일반적인 해석이고 공식 풀이는 아니에요.",
"show",
"interp"
]
],
"src": [
"E03",
"I10"
]
},
{
"id": "M05",
"part": "공개 후기 실수",
"title": "흰자 한 번에 다",
"type": "judge",
"fix": true,
"screen": "조피가 흰자를 팬에 한꺼번에 다 붓는다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">흰자 한 번에 다</text>",
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
"흰자는 양이 많아 실패하기 쉬우니 나눠서 부치라는 메모가 있어요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Y82"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "M06",
"part": "공개 후기 실수",
"title": "센 불 지단",
"type": "judge",
"fix": true,
"screen": "조피가 지단 불을 세게 올린다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">센 불 지단</text>",
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
"지단은 약불에서 가장자리를 보며 천천히 익히는 게 핵심이라는 후기예요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Y82"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "M07",
"part": "공개 후기 실수",
"title": "노른자 마르게 방치",
"type": "judge",
"fix": true,
"screen": "조피가 분리한 노른자를 뚜껑 없이 오래 둔다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">노른자 마르게 방</text><text x=\"60\" y=\"50\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">치</text>",
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
"나중에 부칠 거면 노른자 표면이 마르지 않게 그릇을 겹쳐 두는 방법이 소개돼 있어요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Y82"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "S2",
"part": "조리 2 · 오이",
"title": "오이를 통째로 채",
"type": "judge",
"fix": true,
"screen": "조피가 오이를 껍질째 세워 놓고 가운데 씨까지 한꺼번에 채 썰려고 한다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">오이 통째로</text><text x=\"60\" y=\"50\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">씨까지 숭덩숭덩</text>",
"setup": [
[
"z",
"오이는 그냥 채 썰면 빠르겠다!",
"happy"
]
],
"explain": [
[
"t",
"빠른 건 좋은데 오이가 길을 잘못 들었어요. 문제지한테 물어볼까요? 문제지에 \"오이는 돌려깍기하여 채썰기\"라고 적혀 있어요.",
"show"
],
[
"t",
"'돌려깎기'는 오이를 돌리면서 껍질 쪽 살을 얇고 길게 깎아 내는 거예요. 씨 부분은 안 써요. 그리고 문제지에 재료별 써는 방법이 틀리면 실격 처리된다고 적혀 있어요.",
"wait"
]
],
"retry": "조피가 오이를 5cm 정도로 토막 내 돌려 깎은 뒤, 겹쳐서 채 썬다.",
"src": [
"E02",
"E01",
"Z02"
]
},
{
"id": "M08",
"part": "공개 후기 실수",
"title": "덜 식은 지단 썰기",
"type": "judge",
"fix": true,
"screen": "조피가 막 부친 뜨거운 지단을 바로 썬다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">덜 식은 지단 썰</text><text x=\"60\" y=\"50\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">기</text>",
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
"다 익혀 식힌 다음 썰어야 잘 썰린다는 메모가 있어요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Y82"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "M09",
"part": "공개 후기 실수",
"title": "들쭉날쭉 길이",
"type": "judge",
"fix": true,
"screen": "조피 접시의 채 길이가 재료마다 다르다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">들쭉날쭉 길이</text>",
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
"길이를 정확히 못 맞추더라도 전체 재료 길이를 통일하는 게 더 중요하다는 학원 피드백이 있어요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Y82"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "M10",
"part": "공개 후기 실수",
"title": "백지단이 적어요",
"type": "judge",
"fix": true,
"screen": "조피 접시에 흰자 지단이 아주 조금만 올라가 있다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">백지단이 적어요</text>",
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
"재료를 최대한 다 써서 풍성하게 담으라는 피드백 사례가 있어요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Y82"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "S3",
"part": "조리 3 · 당근",
"title": "당근을 채로",
"type": "judge",
"fix": true,
"screen": "조피가 당근을 무처럼 가늘게 채 썰고 있다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">당근 채</text><text x=\"60\" y=\"50\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">(가늘고 길게)</text>",
"setup": [
[
"z",
"무도 채, 당근도 채. 통일감 있죠?",
"happy"
]
],
"explain": [
[
"t",
"통일감은 패션에서만 챙겨요. 문제지에 당근은 '골패썰기'라고 적혀 있어요. 골패는 납작한 직사각형 모양이에요.",
"show"
],
[
"t",
"크기는 문제지에 0.2cm × 1.5cm × 5cm라고 적혀 있어요. 채썰기는 0.2cm × 0.2cm × 5cm예요. 문제지에 규격은 '정도'의 뜻이라고 적혀 있으니, 자로 재는 연습보다 눈에 익히는 연습을 해요.",
"smile"
]
],
"retry": "조피가 당근을 1.5cm 폭 기둥으로 만든 뒤 얇게 썬다.",
"src": [
"E02",
"E04",
"C06b"
]
},
{
"id": "M11",
"part": "공개 후기 실수",
"title": "마름모 숨기기",
"type": "judge",
"fix": true,
"screen": "조피가 마름모 지단을 채 아래에 깔아 버렸다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">마름모 숨기기</text>",
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
"마름모 지단은 잘 보이는 위쪽에 두라는 메모가 있어요. 공개된 연습 후기에서 실제로 나온 실수를 옮긴 ZOP LAB 연습 메모예요(공식 아님).",
"show",
"zop"
]
],
"src": [
"S_Y82"
],
"retry": "조피가 메모대로 다시 한다."
},
{
"id": "R1",
"part": "요구사항 확인",
"title": "요구사항 가 확인",
"type": "judge",
"fix": false,
"screen": "조피가 손을 멈추고 문제지 요구사항 가를 다시 짚는다: \"무, 오이, 당근, 달걀지단을 썰기 하여 전량 제출하시오.\"",
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
"좋아요! 쉬운 말로 하면 썬 것을 하나도 빼지 말고 다 낸다. 중간중간 문제지와 맞춰 보는 습관이 제일 든든해요. 전체 문장은 큐넷 원문으로 확인해요.",
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
"title": "요구사항 가 단서 확인",
"type": "judge",
"fix": false,
"screen": "조피가 손을 멈추고 문제지 요구사항 가 단서를 다시 짚는다: \"(단, 재료별 써는 방법이 틀렸을 경우 실격 처리됩니다.)\"",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">요구사항 가 단서</text><text x=\"60\" y=\"50\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\"> 확인</text>",
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
"좋아요! 쉬운 말로 하면 재료마다 써는 방법이 정해져 있다. 중간중간 문제지와 맞춰 보는 습관이 제일 든든해요. 전체 문장은 큐넷 원문으로 확인해요.",
"smile"
]
],
"src": [
"E01"
]
},
{
"id": "S4",
"part": "조리 4 · 남은 재료",
"title": "남은 무는 버릴까",
"type": "judge",
"fix": true,
"screen": "시간이 빠듯하다. 조피가 덜 썬 무 조각을 음식물 통으로 옮긴다.",
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">덜 썬 무</text><text x=\"60\" y=\"50\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">→ 버리는 통?</text>",
"setup": [
[
"z",
"이건 안 썰었으니까… 없던 걸로.",
"oops"
]
],
"explain": [
[
"t",
"무가 서운해하겠어요. 문제지에 \"전량 제출하시오\"라고 적혀 있어요. '전량'은 받은 걸 전부라는 뜻이에요.",
"show"
],
[
"t",
"우리 학원식 연습 순서에서는 지단을 먼저 부쳐 식히는 동안 채소를 썰어요. 공식 아님 · ZOP LAB 연습 순서예요. 집에서는 타이머 켜고 순서만 여러 번 돌려 봐요.",
"smile",
"zop"
]
],
"retry": "조피가 무를 다시 도마에 올려 끝까지 채 썬다.",
"src": [
"E01",
"Z01"
]
},
{
"id": "R3",
"part": "요구사항 확인",
"title": "요구사항 나 확인",
"type": "judge",
"fix": false,
"screen": "조피가 손을 멈추고 문제지 요구사항 나를 다시 짚는다: \"무는 채썰기, 오이는 돌려깍기하여 채썰기, 당근은 골패썰기를 하시오.\"",
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
"좋아요! 쉬운 말로 하면 오이는 껍질 쪽을 돌려 깎아 쓴다('돌려깎기'), 당근은 납작한 직사각형('골패'). 중간중간 문제지와 맞춰 보는 습관이 제일 든든해요. 전체 문장은 큐넷 원문으로 확인해요.",
"smile"
]
],
"src": [
"E02"
]
},
{
"id": "R4",
"part": "요구사항 확인",
"title": "요구사항 다 확인",
"type": "judge",
"fix": false,
"screen": "조피가 손을 멈추고 문제지 요구사항 다를 다시 짚는다: \"…지단을 부쳐 완자(마름모꼴)모양으로 각 10개를 썰고, 나머지는 채썰기를 하시오.\"",
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
"좋아요! 쉬운 말로 하면 지단은 마름모 10개씩, 남은 건 채. 중간중간 문제지와 맞춰 보는 습관이 제일 든든해요. 전체 문장은 큐넷 원문으로 확인해요.",
"smile"
]
],
"src": [
"E03"
]
},
{
"id": "R5",
"part": "요구사항 확인",
"title": "요구사항 라 확인",
"type": "judge",
"fix": false,
"screen": "조피가 손을 멈추고 문제지 요구사항 라를 다시 짚는다: \"1) 채썰기 - 0.2 cm x 0.2 cm x 5 cm 2) 골패썰기 - 0.2 cm x 1.5 cm x 5 cm 3) 마름모형 썰기 – 한 면의 길이가 1.5 cm\"",
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
"좋아요! 쉬운 말로 하면 크기는 이 숫자 '정도'(C06b). 중간중간 문제지와 맞춰 보는 습관이 제일 든든해요. 전체 문장은 큐넷 원문으로 확인해요.",
"smile"
]
],
"src": [
"E04"
]
},
{
"id": "S5",
"part": "조리 5 · 불",
"title": "불 하나 더",
"type": "judge",
"fix": true,
"screen": "지단을 부치는 화구 옆에서, 조피가 두 번째 화구를 켜려고 한다.",
"svg": "<circle cx=\"52\" cy=\"44\" r=\"28\" fill=\"#555\" stroke=\"#1f2a24\" stroke-width=\"3\"/><path d=\"M80,44h32\" stroke=\"#1f2a24\" stroke-width=\"7\" stroke-linecap=\"round\"/><text x=\"52\" y=\"48\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#fff\">지단</text><path d=\"M100,66 q-6,-9 0,-18 q6,9 0,18z\" fill=\"#e8873a\" stroke=\"#1f2a24\" stroke-width=\"2\"/>",
"setup": [
[
"z",
"흰자, 노른자 동시에 부치면 두 배 빠르다!",
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
"학원 실습대엔 화구가 2개 있어도, 집에서도 불 하나로 순서를 짜 보세요.",
"smile"
]
],
"retry": "조피가 두 번째 불을 끄고, 흰자를 먼저 부친 뒤 노른자를 부친다.",
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
"svg": "<ellipse cx=\"60\" cy=\"44\" rx=\"54\" ry=\"30\" fill=\"#fff\" stroke=\"#1f2a24\" stroke-width=\"3\"/><text x=\"60\" y=\"36\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">무 · 오이 · 당근</text><text x=\"60\" y=\"50\" text-anchor=\"middle\" font-family=\"Gaegu\" font-weight=\"700\" font-size=\"12\" fill=\"#1f2a24\">지단 마름모 · 지단 채</text>",
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
"그래서 내기 전에 딱 멈추고 세 가지만 봐요.\n① 전량: 무·오이·당근·지단 다 담았는지\n② 지단 마름모 10개씩, 나머지는 채\n③ 종류별로 가지런히, 접시 가장자리 닦기",
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
window.FEEDBACK={"intro": "자, 오늘 재료썰기 '칼질평' 들어갑니다.", "good": ["흰자와 노른자를 나누고 알끈을 걷었어요.", "재료마다 써는 방법을 다시 맞췄어요.", "남은 재료를 버리지 않고 끝까지 썰었어요."], "fix": ["오이는 돌려깎기. 다음 연습 땐 오이부터 손에 익혀요.", "당근은 골패. 재료마다 써는 법을 노트에 한 줄씩 적어 둬요.", "화구는 하나. 지단 순서를 정해서 연습해요."], "zopi": "칼보다 순서가 더 어렵네요. 집에서 순서표부터 써 볼게요.", "teacher": "칼질은 손이, 순서는 머리가 기억해요. 오늘 둘 다 한 칸씩 올라갔어요!", "closing": "이 연습은 학원식 연습일 뿐 공식 채점이 아닙니다. 실제 기준은 큐넷 공개과제와 시험장 안내를 따르세요.", "small": "한국산업인력공단과 관계없습니다. 조리 순서와 팁은 ZOP LAB 연습용이고, 현장 이야기는 개인 경험(약 5년 전)이라 공식이 아닙니다. 공개과제 원문: 큐넷 → 자료실 → 공개문제 「한식조리기능사」.", "plan": "① 달걀 나눠서 지단 부쳐 식히기 → ② 무 채 → ③ 오이 돌려깎기 채 → ④ 당근 골패 → ⑤ 지단 마름모·채 → ⑥ 종류별로 담기"};

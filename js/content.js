/* 旅行英语 —— 内容库（12 个场景：对话/句子/单词/贴士/听写）
   注意：本文件是纯 JSON 格式数据，tools/gen_audio.py 会直接解析它生成音频。
   音频 id 规则：对话=场景id-d序号，句子=句子id，单词=单词id，例句=单词id-x */

const CONTENT = {
"version": 1,
"scenes": [
{
"id": "checkin",
"icon": "🛄",
"name": "值机托运",
"lesson": {
"title": "值机与行李托运",
"intro": "你在机场值机柜台托运行李，行李箱超重了一点。",
"objective": { "q": "行李超重，需要付多少钱？", "options": ["25 美元", "75 美元", "150 美元", "不用付钱"], "answer": 1 },
"dialogue": [
{ "who": "S", "en": "Good morning. May I see your passport, please?", "zh": "早上好，请出示您的护照。" },
{ "who": "T", "en": "Sure. Here you are.", "zh": "好的，给您。" },
{ "who": "S", "en": "Are you checking any bags today?", "zh": "今天有要托运的行李吗？" },
{ "who": "T", "en": "Yes, one bag. Is it within the weight limit?", "zh": "有一件。在限重以内吗？" },
{ "who": "S", "en": "Let me see... It's twenty-four kilos. The limit is twenty-three, so it's a little overweight.", "zh": "我看看……二十四公斤。限重二十三公斤，稍微超重了一点。" },
{ "who": "T", "en": "Oh no. How much extra do I need to pay?", "zh": "糟糕，那我要多付多少钱？" },
{ "who": "S", "en": "The overweight fee is seventy-five dollars.", "zh": "超重费是七十五美元。" },
{ "who": "T", "en": "Hmm... Could I take a few things out instead?", "zh": "嗯……那我能拿出几样东西吗？" },
{ "who": "S", "en": "Of course. You can repack over there, and then come back to me.", "zh": "当然可以。您可以去那边重新整理，然后再来找我。" },
{ "who": "T", "en": "Great, thank you. I'll be right back.", "zh": "太好了，谢谢。我马上回来。" },
{ "who": "S", "en": "No problem. Take your time.", "zh": "不客气，您慢慢来。" }
],
"tips": [
{ "t": "口语小贴士", "txt": "May I see your passport? 是机场最常用的句式，May I see… 比 Give me… 礼貌得多，任何场合都能用。" },
{ "t": "连读弱读", "txt": "Could I take a few things out? 里的 could 在口语里弱读成 /kəd/，几乎听不到 l 的音。听到 kəd 开头就是 Could I…" }
],
"dictation": [
{ "line": 4, "blank": "kilos" },
{ "line": 6, "blank": "seventy-five" }
]
},
"sentences": [
{ "id": "checkin-s1", "en": "I'd like to check in, please.", "zh": "我想办理登机手续。" },
{ "id": "checkin-s2", "en": "May I see your passport, please?", "zh": "请出示您的护照。" },
{ "id": "checkin-s3", "en": "Is the flight on time?", "zh": "航班准点吗？" },
{ "id": "checkin-s4", "en": "Which terminal is it?", "zh": "在哪个航站楼？" },
{ "id": "checkin-s5", "en": "Where is the check-in counter?", "zh": "值机柜台在哪里？" },
{ "id": "checkin-s6", "en": "I have one bag to check.", "zh": "我有一件行李要托运。" },
{ "id": "checkin-s7", "en": "Is this bag within the weight limit?", "zh": "这件行李在限重内吗？" },
{ "id": "checkin-s8", "en": "Could I get a window seat?", "zh": "能给我靠窗的座位吗？" },
{ "id": "checkin-s9", "en": "What time is boarding?", "zh": "几点开始登机？" },
{ "id": "checkin-s10", "en": "Where is the security check?", "zh": "安检在哪里？" }
],
"words": [
{ "id": "checkin-w1", "en": "passport", "ipa": "/ˈpæspɔːrt/", "zh": "护照", "emoji": "🛂", "ex": "May I see your passport, please?", "exZh": "请出示您的护照。" },
{ "id": "checkin-w2", "en": "boarding pass", "ipa": "/ˈbɔːrdɪŋ pæs/", "zh": "登机牌", "emoji": "🎫", "ex": "Here is your boarding pass.", "exZh": "这是您的登机牌。" },
{ "id": "checkin-w3", "en": "gate", "ipa": "/ɡeɪt/", "zh": "登机口", "emoji": "🚪", "ex": "Your flight leaves from gate B12.", "exZh": "您的航班从 B12 登机口出发。" },
{ "id": "checkin-w4", "en": "terminal", "ipa": "/ˈtɜːrmɪnl/", "zh": "航站楼", "emoji": "🏢", "ex": "Which terminal is it?", "exZh": "在哪个航站楼？" },
{ "id": "checkin-w5", "en": "luggage", "ipa": "/ˈlʌɡɪdʒ/", "zh": "行李", "emoji": "🧳", "ex": "Is this your luggage?", "exZh": "这是您的行李吗？" },
{ "id": "checkin-w6", "en": "baggage", "ipa": "/ˈbæɡɪdʒ/", "zh": "托运行李", "emoji": "🧳", "ex": "I'd like to check my baggage.", "exZh": "我想托运我的行李。" },
{ "id": "checkin-w7", "en": "carry-on", "ipa": "/ˈkæri ɑːn/", "zh": "随身行李", "emoji": "🎒", "ex": "You can take one carry-on.", "exZh": "您可以带一件随身行李。" },
{ "id": "checkin-w8", "en": "window seat", "ipa": "/ˈwɪndoʊ siːt/", "zh": "靠窗座位", "emoji": "🪟", "ex": "Could I get a window seat?", "exZh": "能给我靠窗的座位吗？" },
{ "id": "checkin-w9", "en": "aisle seat", "ipa": "/aɪl siːt/", "zh": "靠过道座位", "emoji": "💺", "ex": "I prefer an aisle seat.", "exZh": "我更喜欢靠过道的座位。" },
{ "id": "checkin-w10", "en": "overweight", "ipa": "/ˌoʊvərˈweɪt/", "zh": "超重", "emoji": "⚖️", "ex": "Your bag is overweight.", "exZh": "您的行李超重了。" },
{ "id": "checkin-w11", "en": "flight", "ipa": "/flaɪt/", "zh": "航班", "emoji": "✈️", "ex": "Is the flight on time?", "exZh": "航班准点吗？" },
{ "id": "checkin-w12", "en": "departure", "ipa": "/dɪˈpɑːrtʃər/", "zh": "出发", "emoji": "🛫", "ex": "What's the departure time?", "exZh": "几点出发？" },
{ "id": "checkin-w13", "en": "delay", "ipa": "/dɪˈleɪ/", "zh": "延误", "emoji": "⏳", "ex": "The flight is delayed by one hour.", "exZh": "航班延误一小时。" },
{ "id": "checkin-w14", "en": "security check", "ipa": "/sɪˈkjʊrəti tʃek/", "zh": "安检", "emoji": "🔍", "ex": "Go through security check first.", "exZh": "先过安检。" },
{ "id": "checkin-w15", "en": "check in", "ipa": "/tʃek ɪn/", "zh": "办理登机", "emoji": "🛄", "ex": "Where can I check in?", "exZh": "在哪里办理登机手续？" },
{ "id": "checkin-w16", "en": "scale", "ipa": "/skeɪl/", "zh": "秤", "emoji": "⚖️", "ex": "Please put your bag on the scale.", "exZh": "请把行李放在秤上。" }
]
},
{
"id": "plane",
"icon": "✈️",
"name": "飞机上",
"lesson": {
"title": "在飞机上",
"intro": "飞机上，你想喝点东西，还觉得有点冷。",
"objective": { "q": "还有多久落地？", "options": ["一个半小时", "三个小时", "大约五个小时", "刚起飞没多久"], "answer": 2 },
"dialogue": [
{ "who": "S", "en": "Would you like something to drink?", "zh": "您想喝点什么吗？" },
{ "who": "T", "en": "Yes, please. What do you have?", "zh": "好的，你们有什么？" },
{ "who": "S", "en": "We have water, juice, coffee, and tea.", "zh": "我们有水、果汁、咖啡和茶。" },
{ "who": "T", "en": "I'll have an orange juice, please.", "zh": "请给我一杯橙汁。" },
{ "who": "S", "en": "Here you go. Can I get you anything else?", "zh": "给您。还需要别的吗？" },
{ "who": "T", "en": "Um, could I also have a blanket? It's a little cold.", "zh": "嗯，能再给我一条毛毯吗？有点冷。" },
{ "who": "S", "en": "Sure, I'll bring you one in a minute.", "zh": "当然，我马上给您拿一条。" },
{ "who": "T", "en": "Thanks. Oh, and how much longer is the flight?", "zh": "谢谢。对了，还要飞多久？" },
{ "who": "S", "en": "About five more hours.", "zh": "大约还要五个小时。" },
{ "who": "T", "en": "Okay, thank you.", "zh": "好的，谢谢。" },
{ "who": "S", "en": "You're welcome. Enjoy your flight.", "zh": "不客气。祝您旅途愉快。" }
],
"tips": [
{ "t": "口语小贴士", "txt": "Would you like something to drink? 是服务人员最常用的问句，回答 Yes, please. 或 No, thank you. 就行。" },
{ "t": "口语小贴士", "txt": "Um 是英语里最常见的犹豫词，和中文的“嗯”一样自然。卡壳的时候用 Um… 反而显得地道。" }
],
"dictation": [
{ "line": 1, "blank": "have" },
{ "line": 6, "blank": "minute" }
]
},
"sentences": [
{ "id": "plane-s1", "en": "Could I have a blanket, please?", "zh": "能给我一条毛毯吗？" },
{ "id": "plane-s2", "en": "What drinks do you have?", "zh": "你们有什么饮料？" },
{ "id": "plane-s3", "en": "I'd like an orange juice, please.", "zh": "请给我一杯橙汁。" },
{ "id": "plane-s4", "en": "How much longer is the flight?", "zh": "还要飞多久？" },
{ "id": "plane-s5", "en": "Could you help me with my seat belt?", "zh": "能帮我弄一下安全带吗？" },
{ "id": "plane-s6", "en": "Is there Wi-Fi on board?", "zh": "飞机上有无线网吗？" },
{ "id": "plane-s7", "en": "Can I buy duty-free items?", "zh": "能买免税商品吗？" },
{ "id": "plane-s8", "en": "Please put your seat back up.", "zh": "请把座椅靠背调直。" },
{ "id": "plane-s9", "en": "Where is the lavatory?", "zh": "洗手间在哪里？" },
{ "id": "plane-s10", "en": "What time do we land?", "zh": "我们几点降落？" }
],
"words": [
{ "id": "plane-w1", "en": "flight attendant", "ipa": "/flaɪt əˈtendənt/", "zh": "空乘人员", "emoji": "👩‍✈️", "ex": "Ask the flight attendant for help.", "exZh": "向空乘求助。" },
{ "id": "plane-w2", "en": "blanket", "ipa": "/ˈblæŋkɪt/", "zh": "毛毯", "emoji": "🛏️", "ex": "Could I have a blanket, please?", "exZh": "请给我一条毛毯。" },
{ "id": "plane-w3", "en": "seat belt", "ipa": "/siːt belt/", "zh": "安全带", "emoji": "🔗", "ex": "Please fasten your seat belt.", "exZh": "请系好安全带。" },
{ "id": "plane-w4", "en": "tray table", "ipa": "/treɪ ˈteɪbl/", "zh": "小桌板", "emoji": "🍽️", "ex": "You can use the tray table.", "exZh": "您可以使用小桌板。" },
{ "id": "plane-w5", "en": "lavatory", "ipa": "/ˈlævətɔːri/", "zh": "洗手间", "emoji": "🚻", "ex": "Where is the lavatory?", "exZh": "洗手间在哪里？" },
{ "id": "plane-w6", "en": "turbulence", "ipa": "/ˈtɜːrbjələns/", "zh": "气流颠簸", "emoji": "🌀", "ex": "We're hitting some turbulence.", "exZh": "我们遇到了一点颠簸。" },
{ "id": "plane-w7", "en": "landing", "ipa": "/ˈlændɪŋ/", "zh": "降落", "emoji": "🛬", "ex": "We are landing soon.", "exZh": "我们很快就要降落了。" },
{ "id": "plane-w8", "en": "takeoff", "ipa": "/ˈteɪkɔːf/", "zh": "起飞", "emoji": "🛫", "ex": "Fasten your seat belt for takeoff.", "exZh": "起飞时请系好安全带。" },
{ "id": "plane-w9", "en": "boarding", "ipa": "/ˈbɔːrdɪŋ/", "zh": "登机", "emoji": "🚶", "ex": "Boarding starts in ten minutes.", "exZh": "十分钟后开始登机。" },
{ "id": "plane-w10", "en": "window shade", "ipa": "/ˈwɪndoʊ ʃeɪd/", "zh": "遮光板", "emoji": "🪟", "ex": "Could you close the window shade?", "exZh": "能放下遮光板吗？" },
{ "id": "plane-w11", "en": "headphones", "ipa": "/ˈhedfoʊnz/", "zh": "耳机", "emoji": "🎧", "ex": "Headphones are two dollars.", "exZh": "耳机两美元。" },
{ "id": "plane-w12", "en": "aisle", "ipa": "/aɪl/", "zh": "过道", "emoji": "🚶", "ex": "Please keep the aisle clear.", "exZh": "请保持过道畅通。" },
{ "id": "plane-w13", "en": "captain", "ipa": "/ˈkæptɪn/", "zh": "机长", "emoji": "👨‍✈️", "ex": "This is your captain speaking.", "exZh": "我是本机机长。" },
{ "id": "plane-w14", "en": "oxygen mask", "ipa": "/ˈɑːksɪdʒən mæsk/", "zh": "氧气面罩", "emoji": "😷", "ex": "Oxygen masks will drop automatically.", "exZh": "氧气面罩会自动落下。" },
{ "id": "plane-w15", "en": "duty-free", "ipa": "/ˌduːti ˈfriː/", "zh": "免税", "emoji": "🛍️", "ex": "Can I buy duty-free items?", "exZh": "能买免税商品吗？" },
{ "id": "plane-w16", "en": "landing card", "ipa": "/ˈlændɪŋ kɑːrd/", "zh": "入境卡", "emoji": "📝", "ex": "Fill in the landing card before arrival.", "exZh": "到达前请填写入境卡。" }
]
},
{
"id": "immigration",
"icon": "🛂",
"name": "入境海关",
"lesson": {
"title": "入境海关问答",
"intro": "你到达国外机场，正在过入境检查。",
"objective": { "q": "这位旅客要待多久？", "options": ["两天", "两周", "两个月", "住一晚就走"], "answer": 1 },
"dialogue": [
{ "who": "S", "en": "Good afternoon. May I see your passport?", "zh": "下午好，请出示您的护照。" },
{ "who": "T", "en": "Here it is.", "zh": "给您。" },
{ "who": "S", "en": "What's the purpose of your visit?", "zh": "您此行的目的是什么？" },
{ "who": "T", "en": "Tourism. I'm here on vacation.", "zh": "旅游，我是来度假的。" },
{ "who": "S", "en": "How long will you be staying?", "zh": "您要待多久？" },
{ "who": "T", "en": "About two weeks.", "zh": "大约两周。" },
{ "who": "S", "en": "Where will you be staying?", "zh": "您会住在哪里？" },
{ "who": "T", "en": "At the Grand Hotel downtown.", "zh": "住在市中心的大酒店。" },
{ "who": "S", "en": "Do you have a return ticket?", "zh": "您有返程票吗？" },
{ "who": "T", "en": "Yes, here's my itinerary.", "zh": "有，这是我的行程单。" },
{ "who": "S", "en": "Okay. Enjoy your stay.", "zh": "好的，祝您玩得愉快。" },
{ "who": "T", "en": "Thank you.", "zh": "谢谢。" }
],
"tips": [
{ "t": "口语小贴士", "txt": "What's the purpose of your visit? 是海关必问题。回答用完整短句 I'm here on vacation. 比只说一个词 Vacation 更稳。" },
{ "t": "口语小贴士", "txt": "海关问句全是特殊疑问句：目的、时长、住址、返程票。听懂这四个问题，入境就过关了。" }
],
"dictation": [
{ "line": 2, "blank": "purpose" },
{ "line": 5, "blank": "weeks" }
]
},
"sentences": [
{ "id": "immigration-s1", "en": "I'm here on vacation.", "zh": "我是来度假的。" },
{ "id": "immigration-s2", "en": "I'll be staying for two weeks.", "zh": "我要待两周。" },
{ "id": "immigration-s3", "en": "I have a return ticket.", "zh": "我有返程票。" },
{ "id": "immigration-s4", "en": "What's the purpose of your visit?", "zh": "您此行的目的是什么？" },
{ "id": "immigration-s5", "en": "Where will you be staying?", "zh": "您会住在哪里？" },
{ "id": "immigration-s6", "en": "Here is my itinerary.", "zh": "这是我的行程单。" },
{ "id": "immigration-s7", "en": "I have nothing to declare.", "zh": "我没有要申报的东西。" },
{ "id": "immigration-s8", "en": "Do you have anything to declare?", "zh": "您有要申报的东西吗？" },
{ "id": "immigration-s9", "en": "May I see your passport?", "zh": "请出示您的护照。" },
{ "id": "immigration-s10", "en": "Enjoy your stay.", "zh": "祝您玩得愉快。" }
],
"words": [
{ "id": "immigration-w1", "en": "immigration", "ipa": "/ˌɪmɪˈɡreɪʃn/", "zh": "入境检查", "emoji": "🛃", "ex": "Go through immigration first.", "exZh": "先办理入境检查。" },
{ "id": "immigration-w2", "en": "customs", "ipa": "/ˈkʌstəmz/", "zh": "海关", "emoji": "🛃", "ex": "Nothing to declare at customs.", "exZh": "在海关没有要申报的。" },
{ "id": "immigration-w3", "en": "purpose", "ipa": "/ˈpɜːrpəs/", "zh": "目的", "emoji": "🎯", "ex": "What's the purpose of your visit?", "exZh": "您此行的目的是什么？" },
{ "id": "immigration-w4", "en": "vacation", "ipa": "/veɪˈkeɪʃn/", "zh": "度假", "emoji": "🏖️", "ex": "I'm here on vacation.", "exZh": "我是来度假的。" },
{ "id": "immigration-w5", "en": "business", "ipa": "/ˈbɪznəs/", "zh": "商务出差", "emoji": "💼", "ex": "I'm here on business.", "exZh": "我是来出差的。" },
{ "id": "immigration-w6", "en": "stay", "ipa": "/steɪ/", "zh": "停留", "emoji": "🛏️", "ex": "How long will you be staying?", "exZh": "您要待多久？" },
{ "id": "immigration-w7", "en": "return ticket", "ipa": "/rɪˈtɜːrn ˈtɪkɪt/", "zh": "返程票", "emoji": "🎫", "ex": "Do you have a return ticket?", "exZh": "您有返程票吗？" },
{ "id": "immigration-w8", "en": "itinerary", "ipa": "/aɪˈtɪnəreri/", "zh": "行程单", "emoji": "📋", "ex": "Here is my itinerary.", "exZh": "这是我的行程单。" },
{ "id": "immigration-w9", "en": "declare", "ipa": "/dɪˈkler/", "zh": "申报", "emoji": "📣", "ex": "Do you have anything to declare?", "exZh": "您有要申报的物品吗？" },
{ "id": "immigration-w10", "en": "officer", "ipa": "/ˈɔːfɪsər/", "zh": "官员", "emoji": "👮", "ex": "The officer asked to see my passport.", "exZh": "官员要求看我的护照。" },
{ "id": "immigration-w11", "en": "visa", "ipa": "/ˈviːzə/", "zh": "签证", "emoji": "📑", "ex": "I have a tourist visa.", "exZh": "我有旅游签证。" },
{ "id": "immigration-w12", "en": "address", "ipa": "/əˈdres/", "zh": "地址", "emoji": "📍", "ex": "Where will you be staying?", "exZh": "您会住在哪里？" },
{ "id": "immigration-w13", "en": "fingerprint", "ipa": "/ˈfɪŋɡərprɪnt/", "zh": "指纹", "emoji": "☝️", "ex": "Please scan your fingerprints.", "exZh": "请录入指纹。" },
{ "id": "immigration-w14", "en": "reservation", "ipa": "/ˌrezərˈveɪʃn/", "zh": "预订", "emoji": "📅", "ex": "Here's my hotel reservation.", "exZh": "这是我的酒店预订。" },
{ "id": "immigration-w15", "en": "form", "ipa": "/fɔːrm/", "zh": "表格", "emoji": "📝", "ex": "Fill in this arrival form.", "exZh": "请填写这张入境表。" },
{ "id": "immigration-w16", "en": "baggage claim", "ipa": "/ˈbæɡɪdʒ kleɪm/", "zh": "行李提取处", "emoji": "🧳", "ex": "Where is the baggage claim?", "exZh": "行李提取处在哪里？" }
]
},
{
"id": "transport",
"icon": "🚇",
"name": "打车地铁",
"lesson": {
"title": "打车还是坐地铁",
"intro": "你要从机场去市中心的酒店。",
"objective": { "q": "坐地铁去市中心要多少钱？", "options": ["30 美元", "3 美元", "免费", "13 美元"], "answer": 1 },
"dialogue": [
{ "who": "T", "en": "Hi, how much is a taxi to the Grand Hotel downtown?", "zh": "你好，打车到市中心的大酒店多少钱？" },
{ "who": "S", "en": "It's about thirty dollars. But the metro is only three dollars.", "zh": "大约三十美元。不过地铁只要三美元。" },
{ "who": "T", "en": "How long does the metro take?", "zh": "坐地铁要多久？" },
{ "who": "S", "en": "About forty minutes. The taxi takes twenty-five.", "zh": "大约四十分钟，打车二十五分钟。" },
{ "who": "T", "en": "I'll take the metro. Which line goes downtown?", "zh": "那我坐地铁。哪条线路到市中心？" },
{ "who": "S", "en": "Take the red line to Central Station, then change to the blue line.", "zh": "坐红线到中央车站，然后换乘蓝线。" },
{ "who": "T", "en": "How many stops is that?", "zh": "一共几站？" },
{ "who": "S", "en": "Six stops in total. You'll see the hotel right outside the station.", "zh": "一共六站。出站就能看到酒店。" },
{ "who": "T", "en": "Perfect. Where can I buy a ticket?", "zh": "太好了。在哪里买票？" },
{ "who": "S", "en": "At the machine over there. You can pay by card.", "zh": "那边机器上就能买，可以刷卡。" },
{ "who": "T", "en": "Great, thanks a lot!", "zh": "太好了，多谢！" }
],
"tips": [
{ "t": "口语小贴士", "txt": "I'll take the metro. 口语里经常把 I will 缩成 I'll。take + 交通工具 表示选择坐什么。" },
{ "t": "口语小贴士", "txt": "Which line goes downtown? 是问地铁线路的标准句式。change to the blue line 就是换乘蓝线。" }
],
"dictation": [
{ "line": 0, "blank": "downtown" },
{ "line": 5, "blank": "Central" }
]
},
"sentences": [
{ "id": "transport-s1", "en": "How much is a taxi to downtown?", "zh": "打车到市中心多少钱？" },
{ "id": "transport-s2", "en": "Which line goes downtown?", "zh": "哪条线路到市中心？" },
{ "id": "transport-s3", "en": "Where can I buy a ticket?", "zh": "在哪里买票？" },
{ "id": "transport-s4", "en": "You need to transfer at Central Station.", "zh": "您需要在中央车站换乘。" },
{ "id": "transport-s5", "en": "How many stops is it?", "zh": "一共几站？" },
{ "id": "transport-s6", "en": "Could you call me a taxi?", "zh": "能帮我叫辆出租车吗？" },
{ "id": "transport-s7", "en": "Take me to this address, please.", "zh": "请送我到这个地址。" },
{ "id": "transport-s8", "en": "How long does the metro take?", "zh": "坐地铁要多久？" },
{ "id": "transport-s9", "en": "Where is the nearest subway station?", "zh": "最近的地铁站在哪里？" },
{ "id": "transport-s10", "en": "Can I pay by card?", "zh": "能刷卡吗？" }
],
"words": [
{ "id": "transport-w1", "en": "taxi", "ipa": "/ˈtæksi/", "zh": "出租车", "emoji": "🚕", "ex": "Could you call me a taxi?", "exZh": "能帮我叫辆出租车吗？" },
{ "id": "transport-w2", "en": "metro", "ipa": "/ˈmetroʊ/", "zh": "地铁", "emoji": "🚇", "ex": "Take the metro to downtown.", "exZh": "坐地铁去市中心。" },
{ "id": "transport-w3", "en": "subway", "ipa": "/ˈsʌbweɪ/", "zh": "地铁（美）", "emoji": "🚇", "ex": "The subway runs until midnight.", "exZh": "地铁运营到午夜。" },
{ "id": "transport-w4", "en": "station", "ipa": "/ˈsteɪʃn/", "zh": "车站", "emoji": "🚉", "ex": "Get off at Central Station.", "exZh": "在中央车站下车。" },
{ "id": "transport-w5", "en": "line", "ipa": "/laɪn/", "zh": "线路", "emoji": "〰️", "ex": "Take the red line.", "exZh": "坐红线。" },
{ "id": "transport-w6", "en": "transfer", "ipa": "/trænsˈfɜːr/", "zh": "换乘", "emoji": "🔁", "ex": "You need to transfer at Central.", "exZh": "您需要在中央站换乘。" },
{ "id": "transport-w7", "en": "fare", "ipa": "/fer/", "zh": "票价", "emoji": "💵", "ex": "How much is the fare?", "exZh": "票价多少？" },
{ "id": "transport-w8", "en": "ticket", "ipa": "/ˈtɪkɪt/", "zh": "车票", "emoji": "🎟️", "ex": "Buy a ticket at the machine.", "exZh": "在机器上买票。" },
{ "id": "transport-w9", "en": "platform", "ipa": "/ˈplætfɔːrm/", "zh": "站台", "emoji": "🛤️", "ex": "The train leaves from platform 3.", "exZh": "列车从 3 号站台出发。" },
{ "id": "transport-w10", "en": "stop", "ipa": "/stɑːp/", "zh": "站", "emoji": "🚏", "ex": "It's six stops from here.", "exZh": "从这里过去六站。" },
{ "id": "transport-w11", "en": "downtown", "ipa": "/ˌdaʊnˈtaʊn/", "zh": "市中心", "emoji": "🏙️", "ex": "I'm going downtown.", "exZh": "我要去市中心。" },
{ "id": "transport-w12", "en": "one-way", "ipa": "/ˌwʌn ˈweɪ/", "zh": "单程", "emoji": "➡️", "ex": "A one-way ticket, please.", "exZh": "请给我一张单程票。" },
{ "id": "transport-w13", "en": "round trip", "ipa": "/ˌraʊnd ˈtrɪp/", "zh": "往返", "emoji": "🔁", "ex": "A round-trip ticket costs five dollars.", "exZh": "往返票五美元。" },
{ "id": "transport-w14", "en": "card", "ipa": "/kɑːrd/", "zh": "卡", "emoji": "💳", "ex": "Can I pay by card?", "exZh": "能刷卡吗？" },
{ "id": "transport-w15", "en": "ride", "ipa": "/raɪd/", "zh": "车程", "emoji": "🚗", "ex": "It's a short ride from here.", "exZh": "从这里车程很短。" },
{ "id": "transport-w16", "en": "bus", "ipa": "/bʌs/", "zh": "公交车", "emoji": "🚌", "ex": "Which bus goes downtown?", "exZh": "哪路公交车去市中心？" }
]
},
{
"id": "hotel",
"icon": "🏨",
"name": "酒店入住",
"lesson": {
"title": "酒店入住",
"intro": "晚上你到达酒店前台，办理入住。",
"objective": { "q": "这位旅客的房间号是多少？", "options": ["812", "821", "128", "12 楼"], "answer": 0 },
"dialogue": [
{ "who": "S", "en": "Good evening. Welcome to the Grand Hotel. Do you have a reservation?", "zh": "晚上好，欢迎光临大酒店。您有预订吗？" },
{ "who": "T", "en": "Yes, under the name Liu.", "zh": "有，用刘的名字订的。" },
{ "who": "S", "en": "Let me check... Yes, one double room for five nights. Is that correct?", "zh": "我查一下……是的，一间双人房住五晚，对吗？" },
{ "who": "T", "en": "That's right.", "zh": "没错。" },
{ "who": "S", "en": "May I see your passport, please? ... Thank you. Your room is 812 on the eighth floor.", "zh": "请出示护照……谢谢。您的房间是八楼的 812。" },
{ "who": "T", "en": "What time is breakfast?", "zh": "早餐几点？" },
{ "who": "S", "en": "From six thirty to ten. Breakfast is included.", "zh": "六点半到十点，早餐含在房费里。" },
{ "who": "T", "en": "Great. And what's the Wi-Fi password?", "zh": "太好了。无线网密码是多少？" },
{ "who": "S", "en": "It's printed on the card in your room. The elevator is on your left.", "zh": "房间里的卡片上印着。电梯在您左手边。" },
{ "who": "T", "en": "One more thing — do you have a hair dryer in the room?", "zh": "还有一件事——房间里有吹风机吗？" },
{ "who": "S", "en": "Yes, in the bathroom cabinet.", "zh": "有，在浴室的柜子里。" },
{ "who": "T", "en": "Thank you very much.", "zh": "非常感谢。" },
{ "who": "S", "en": "You're welcome. Enjoy your stay.", "zh": "不客气，祝您入住愉快。" }
],
"tips": [
{ "t": "口语小贴士", "txt": "under the name Liu 是报预订名字的说法——under the name + 姓氏。前台问 Do you have a reservation? 就答这句。" },
{ "t": "连读弱读", "txt": "What's the Wi-Fi password? 里 What's the 连起来读 /wʌts ðə/，the 弱读成 ðə，不读长音。" }
],
"dictation": [
{ "line": 6, "blank": "thirty" },
{ "line": 8, "blank": "printed" }
]
},
"sentences": [
{ "id": "hotel-s1", "en": "I have a reservation under Liu.", "zh": "我用刘的名字订了房。" },
{ "id": "hotel-s2", "en": "What time is check-out?", "zh": "几点退房？" },
{ "id": "hotel-s3", "en": "Is breakfast included?", "zh": "含早餐吗？" },
{ "id": "hotel-s4", "en": "What's the Wi-Fi password?", "zh": "无线网密码是多少？" },
{ "id": "hotel-s5", "en": "Could I get a wake-up call at seven?", "zh": "能七点叫醒我吗？" },
{ "id": "hotel-s6", "en": "Is there a hair dryer in the room?", "zh": "房间里有吹风机吗？" },
{ "id": "hotel-s7", "en": "Could you store my luggage?", "zh": "能寄存我的行李吗？" },
{ "id": "hotel-s8", "en": "The air conditioner is too cold.", "zh": "空调太冷了。" },
{ "id": "hotel-s9", "en": "Here is your key card.", "zh": "这是您的房卡。" },
{ "id": "hotel-s10", "en": "Could I get an extra towel?", "zh": "能多给我一条毛巾吗？" }
],
"words": [
{ "id": "hotel-w1", "en": "reservation", "ipa": "/ˌrezərˈveɪʃn/", "zh": "预订", "emoji": "📅", "ex": "I have a reservation under Liu.", "exZh": "我用刘的名字订了房。" },
{ "id": "hotel-w2", "en": "front desk", "ipa": "/ˌfrʌnt ˈdesk/", "zh": "前台", "emoji": "🛎️", "ex": "Ask at the front desk.", "exZh": "去前台问。" },
{ "id": "hotel-w3", "en": "double room", "ipa": "/ˈdʌbl ruːm/", "zh": "双人房", "emoji": "🛏️", "ex": "One double room for five nights.", "exZh": "一间双人房住五晚。" },
{ "id": "hotel-w4", "en": "single room", "ipa": "/ˈsɪŋɡl ruːm/", "zh": "单人房", "emoji": "🛏️", "ex": "Do you have a single room?", "exZh": "有单人房吗？" },
{ "id": "hotel-w5", "en": "check out", "ipa": "/tʃek aʊt/", "zh": "退房", "emoji": "🧳", "ex": "What time is check-out?", "exZh": "几点退房？" },
{ "id": "hotel-w6", "en": "breakfast", "ipa": "/ˈbrekfəst/", "zh": "早餐", "emoji": "🍳", "ex": "Is breakfast included?", "exZh": "含早餐吗？" },
{ "id": "hotel-w7", "en": "Wi-Fi", "ipa": "/ˈwaɪ faɪ/", "zh": "无线网", "emoji": "📶", "ex": "What's the Wi-Fi password?", "exZh": "无线网密码是多少？" },
{ "id": "hotel-w8", "en": "hair dryer", "ipa": "/her ˈdraɪər/", "zh": "吹风机", "emoji": "💨", "ex": "Is there a hair dryer in the room?", "exZh": "房间里有吹风机吗？" },
{ "id": "hotel-w9", "en": "elevator", "ipa": "/ˈelɪveɪtər/", "zh": "电梯", "emoji": "🛗", "ex": "The elevator is on your left.", "exZh": "电梯在您左手边。" },
{ "id": "hotel-w10", "en": "floor", "ipa": "/flɔːr/", "zh": "楼层", "emoji": "🏢", "ex": "My room is on the eighth floor.", "exZh": "我的房间在八楼。" },
{ "id": "hotel-w11", "en": "key card", "ipa": "/kiː kɑːrd/", "zh": "房卡", "emoji": "🔑", "ex": "Here is your key card.", "exZh": "这是您的房卡。" },
{ "id": "hotel-w12", "en": "luggage storage", "ipa": "/ˈlʌɡɪdʒ ˈstɔːrɪdʒ/", "zh": "行李寄存", "emoji": "🧳", "ex": "Can you store my luggage?", "exZh": "能寄存我的行李吗？" },
{ "id": "hotel-w13", "en": "housekeeping", "ipa": "/ˈhaʊskiːpɪŋ/", "zh": "客房服务", "emoji": "🧹", "ex": "I need housekeeping, please.", "exZh": "请安排客房服务。" },
{ "id": "hotel-w14", "en": "wake-up call", "ipa": "/ˈweɪk ʌp kɔːl/", "zh": "叫醒服务", "emoji": "⏰", "ex": "Could I get a wake-up call at seven?", "exZh": "能七点叫醒我吗？" },
{ "id": "hotel-w15", "en": "deposit", "ipa": "/dɪˈpɑːzɪt/", "zh": "押金", "emoji": "💰", "ex": "Is there a deposit?", "exZh": "要押金吗？" },
{ "id": "hotel-w16", "en": "air conditioner", "ipa": "/er kənˈdɪʃənər/", "zh": "空调", "emoji": "❄️", "ex": "The air conditioner is too cold.", "exZh": "空调太冷了。" }
]
},
{
"id": "restaurant",
"icon": "🍽️",
"name": "餐厅点餐",
"lesson": {
"title": "餐厅点餐",
"intro": "你在餐厅坐下，准备点晚餐。",
"objective": { "q": "今天的特价菜多少钱？", "options": ["42 美元", "24 美元", "免费试吃", "菜单上没有"], "answer": 1 },
"dialogue": [
{ "who": "S", "en": "Good evening. Here are your menus. Can I get you something to drink?", "zh": "晚上好，这是菜单。想先喝点什么吗？" },
{ "who": "T", "en": "Yes, two glasses of water, please.", "zh": "好的，请来两杯水。" },
{ "who": "S", "en": "Sure. Are you ready to order?", "zh": "好的，可以点餐了吗？" },
{ "who": "T", "en": "Um, what's today's special?", "zh": "嗯，今天的特价菜是什么？" },
{ "who": "S", "en": "It's grilled salmon with vegetables, twenty-four dollars.", "zh": "是烤三文鱼配蔬菜，二十四美元。" },
{ "who": "T", "en": "Sounds good. I'll have that.", "zh": "听起来不错，我就要这个。" },
{ "who": "S", "en": "Excellent choice. Anything else?", "zh": "好选择。还要别的吗？" },
{ "who": "T", "en": "Could I get the salad without onions? I'm allergic.", "zh": "沙拉能不放洋葱吗？我过敏。" },
{ "who": "S", "en": "No problem. I'll tell the kitchen.", "zh": "没问题，我会告诉厨房。" },
{ "who": "T", "en": "Thanks. Oh, and could we have the check together?", "zh": "谢谢。对了，我们俩的账单能一起结吗？" },
{ "who": "S", "en": "Sure. I'll bring it when you're ready.", "zh": "当然，您准备好了我就拿来。" },
{ "who": "T", "en": "Thank you.", "zh": "谢谢。" }
],
"tips": [
{ "t": "口语小贴士", "txt": "Could I get…? 是点餐最万能的句型，比 I want… 礼貌得多。Could I get the salad without onions? 就是点菜提要求的标准说法。" },
{ "t": "口语小贴士", "txt": "结账说 the check（美）或 the bill（英）。Could we have the check, please? 是美国人最常用的结账句式。" }
],
"dictation": [
{ "line": 4, "blank": "salmon" },
{ "line": 7, "blank": "onions" }
]
},
"sentences": [
{ "id": "restaurant-s1", "en": "What's today's special?", "zh": "今天的特价菜是什么？" },
{ "id": "restaurant-s2", "en": "Are you ready to order?", "zh": "可以点餐了吗？" },
{ "id": "restaurant-s3", "en": "I'll have the grilled salmon.", "zh": "我要烤三文鱼。" },
{ "id": "restaurant-s4", "en": "Could I get this without onions?", "zh": "这道菜能不放洋葱吗？" },
{ "id": "restaurant-s5", "en": "Could we have the check, please?", "zh": "请给我们结账。" },
{ "id": "restaurant-s6", "en": "I'm allergic to nuts.", "zh": "我对坚果过敏。" },
{ "id": "restaurant-s7", "en": "Do you have vegetarian options?", "zh": "有素食可选吗？" },
{ "id": "restaurant-s8", "en": "I'd like my steak medium.", "zh": "我的牛排要五分熟。" },
{ "id": "restaurant-s9", "en": "Could I get this to go?", "zh": "这个能打包吗？" },
{ "id": "restaurant-s10", "en": "Is this dish spicy?", "zh": "这道菜辣吗？" }
],
"words": [
{ "id": "restaurant-w1", "en": "menu", "ipa": "/ˈmenjuː/", "zh": "菜单", "emoji": "📖", "ex": "Here are your menus.", "exZh": "这是您的菜单。" },
{ "id": "restaurant-w2", "en": "order", "ipa": "/ˈɔːrdər/", "zh": "点餐", "emoji": "📝", "ex": "Are you ready to order?", "exZh": "可以点餐了吗？" },
{ "id": "restaurant-w3", "en": "special", "ipa": "/ˈspeʃl/", "zh": "特价菜", "emoji": "⭐", "ex": "What's today's special?", "exZh": "今天的特价菜是什么？" },
{ "id": "restaurant-w4", "en": "appetizer", "ipa": "/ˈæpɪtaɪzər/", "zh": "前菜", "emoji": "🥗", "ex": "Would you like an appetizer?", "exZh": "要来份前菜吗？" },
{ "id": "restaurant-w5", "en": "main course", "ipa": "/meɪn kɔːrs/", "zh": "主菜", "emoji": "🍽️", "ex": "What's your main course?", "exZh": "您的主菜是什么？" },
{ "id": "restaurant-w6", "en": "dessert", "ipa": "/dɪˈzɜːrt/", "zh": "甜点", "emoji": "🍰", "ex": "Any dessert?", "exZh": "要甜点吗？" },
{ "id": "restaurant-w7", "en": "check", "ipa": "/tʃek/", "zh": "账单", "emoji": "🧾", "ex": "Could we have the check, please?", "exZh": "请给我们结账。" },
{ "id": "restaurant-w8", "en": "tip", "ipa": "/tɪp/", "zh": "小费", "emoji": "💰", "ex": "A fifteen percent tip is common here.", "exZh": "这里一般给百分之十五的小费。" },
{ "id": "restaurant-w9", "en": "allergy", "ipa": "/ˈælərdʒi/", "zh": "过敏", "emoji": "🤧", "ex": "I'm allergic to nuts.", "exZh": "我对坚果过敏。" },
{ "id": "restaurant-w10", "en": "vegetarian", "ipa": "/ˌvedʒəˈteriən/", "zh": "素食", "emoji": "🥦", "ex": "Do you have vegetarian options?", "exZh": "有素食可选吗？" },
{ "id": "restaurant-w11", "en": "medium", "ipa": "/ˈmiːdiəm/", "zh": "五分熟", "emoji": "🥩", "ex": "I'd like my steak medium.", "exZh": "我的牛排要五分熟。" },
{ "id": "restaurant-w12", "en": "refill", "ipa": "/ˌriːˈfɪl/", "zh": "续杯", "emoji": "☕", "ex": "Free refills, please.", "exZh": "请免费续杯。" },
{ "id": "restaurant-w13", "en": "takeout", "ipa": "/ˈteɪkaʊt/", "zh": "打包外带", "emoji": "🥡", "ex": "Could I get this to go?", "exZh": "这个能打包吗？" },
{ "id": "restaurant-w14", "en": "spicy", "ipa": "/ˈspaɪsi/", "zh": "辣的", "emoji": "🌶️", "ex": "Is this dish spicy?", "exZh": "这道菜辣吗？" },
{ "id": "restaurant-w15", "en": "fork", "ipa": "/fɔːrk/", "zh": "叉子", "emoji": "🍴", "ex": "Could I have a fork?", "exZh": "能给我一把叉子吗？" },
{ "id": "restaurant-w16", "en": "napkin", "ipa": "/ˈnæpkɪn/", "zh": "餐巾纸", "emoji": "🧻", "ex": "Could you bring some napkins?", "exZh": "能拿点餐巾纸吗？" }
]
},
{
"id": "shopping",
"icon": "🛍️",
"name": "购物退税",
"lesson": {
"title": "购物与砍价",
"intro": "你在纪念品商店看中了一条围巾。",
"objective": { "q": "围巾最后多少钱成交？", "options": ["45 美元", "40 美元", "35 美元", "没买成"], "answer": 1 },
"dialogue": [
{ "who": "T", "en": "Excuse me, how much is this scarf?", "zh": "请问这条围巾多少钱？" },
{ "who": "S", "en": "It's forty-five dollars.", "zh": "四十五美元。" },
{ "who": "T", "en": "Forty-five? That's a little pricey. Is there any discount?", "zh": "四十五？有点贵。有折扣吗？" },
{ "who": "S", "en": "Hmm, I can do forty. That's my best price.", "zh": "嗯，四十美元可以给您，这是最低价了。" },
{ "who": "T", "en": "Okay, deal. Can I pay by credit card?", "zh": "好，成交。能刷信用卡吗？" },
{ "who": "S", "en": "Sure. And since you're a tourist, you can get a tax refund.", "zh": "当然。您是游客，还能办退税。" },
{ "who": "T", "en": "Oh, how does that work?", "zh": "哦，退税怎么办理？" },
{ "who": "S", "en": "Show your passport, and I'll give you the refund form.", "zh": "出示护照，我给您退税单。" },
{ "who": "T", "en": "Great. Where do I get the money back?", "zh": "太好了。在哪里拿回钱？" },
{ "who": "S", "en": "At the airport, before you leave the country.", "zh": "在机场，离境之前办理。" },
{ "who": "T", "en": "Perfect. Thank you so much.", "zh": "太好了，非常感谢。" },
{ "who": "S", "en": "You're welcome. Have a great trip!", "zh": "不客气，祝您旅途愉快！" }
],
"tips": [
{ "t": "口语小贴士", "txt": "砍价时店员常说 I can do forty. —— can do + 价格 表示“可以给你这个价”。That's my best price. 就是“这是最低价了”。" },
{ "t": "口语小贴士", "txt": "tax refund 退税：购物时出示护照拿退税单（refund form），离境前在机场退钱，游客必会的词。" }
],
"dictation": [
{ "line": 1, "blank": "forty-five" },
{ "line": 3, "blank": "forty" }
]
},
"sentences": [
{ "id": "shopping-s1", "en": "How much is this scarf?", "zh": "这条围巾多少钱？" },
{ "id": "shopping-s2", "en": "Is there any discount?", "zh": "有折扣吗？" },
{ "id": "shopping-s3", "en": "Can I try this on?", "zh": "我能试试吗？" },
{ "id": "shopping-s4", "en": "Do you have this in a larger size?", "zh": "这个有大一号的吗？" },
{ "id": "shopping-s5", "en": "Can I pay by credit card?", "zh": "能刷信用卡吗？" },
{ "id": "shopping-s6", "en": "Could I have a receipt, please?", "zh": "请给我小票。" },
{ "id": "shopping-s7", "en": "How does the tax refund work?", "zh": "退税怎么办理？" },
{ "id": "shopping-s8", "en": "Could you give me a better price?", "zh": "能再便宜点吗？" },
{ "id": "shopping-s9", "en": "I'm just looking, thanks.", "zh": "我就随便看看，谢谢。" },
{ "id": "shopping-s10", "en": "Where is the fitting room?", "zh": "试衣间在哪里？" }
],
"words": [
{ "id": "shopping-w1", "en": "price", "ipa": "/praɪs/", "zh": "价格", "emoji": "💲", "ex": "How much is this scarf?", "exZh": "这条围巾多少钱？" },
{ "id": "shopping-w2", "en": "discount", "ipa": "/ˈdɪskaʊnt/", "zh": "折扣", "emoji": "🏷️", "ex": "Is there any discount?", "exZh": "有折扣吗？" },
{ "id": "shopping-w3", "en": "expensive", "ipa": "/ɪkˈspensɪv/", "zh": "贵的", "emoji": "💸", "ex": "That's a little expensive.", "exZh": "有点贵。" },
{ "id": "shopping-w4", "en": "cheap", "ipa": "/tʃiːp/", "zh": "便宜", "emoji": "🪙", "ex": "Is there a cheaper one?", "exZh": "有便宜点的吗？" },
{ "id": "shopping-w5", "en": "size", "ipa": "/saɪz/", "zh": "尺码", "emoji": "📏", "ex": "Do you have this in a larger size?", "exZh": "这个有大一号的吗？" },
{ "id": "shopping-w6", "en": "try on", "ipa": "/traɪ ɑːn/", "zh": "试穿", "emoji": "👗", "ex": "Can I try this on?", "exZh": "我能试试吗？" },
{ "id": "shopping-w7", "en": "fitting room", "ipa": "/ˈfɪtɪŋ ruːm/", "zh": "试衣间", "emoji": "🚪", "ex": "Where is the fitting room?", "exZh": "试衣间在哪里？" },
{ "id": "shopping-w8", "en": "cash", "ipa": "/kæʃ/", "zh": "现金", "emoji": "💵", "ex": "Do you take cash or card?", "exZh": "收现金还是刷卡？" },
{ "id": "shopping-w9", "en": "credit card", "ipa": "/ˈkredɪt kɑːrd/", "zh": "信用卡", "emoji": "💳", "ex": "Can I pay by credit card?", "exZh": "能刷信用卡吗？" },
{ "id": "shopping-w10", "en": "receipt", "ipa": "/rɪˈsiːt/", "zh": "小票", "emoji": "🧾", "ex": "Could I have a receipt, please?", "exZh": "请给我小票。" },
{ "id": "shopping-w11", "en": "refund", "ipa": "/ˈriːfʌnd/", "zh": "退款", "emoji": "↩️", "ex": "I'd like a refund, please.", "exZh": "我想退款。" },
{ "id": "shopping-w12", "en": "exchange", "ipa": "/ɪksˈtʃeɪndʒ/", "zh": "换货", "emoji": "🔄", "ex": "Can I exchange it for a different color?", "exZh": "能换个颜色吗？" },
{ "id": "shopping-w13", "en": "tax refund", "ipa": "/tæks ˈriːfʌnd/", "zh": "退税", "emoji": "💰", "ex": "How does the tax refund work?", "exZh": "退税怎么办理？" },
{ "id": "shopping-w14", "en": "duty-free shop", "ipa": "/ˌduːti ˈfriː ʃɑːp/", "zh": "免税店", "emoji": "🛍️", "ex": "Is there a duty-free shop here?", "exZh": "这里有免税店吗？" },
{ "id": "shopping-w15", "en": "souvenir", "ipa": "/ˌsuːvəˈnɪr/", "zh": "纪念品", "emoji": "🎁", "ex": "I'm looking for souvenirs.", "exZh": "我在找纪念品。" },
{ "id": "shopping-w16", "en": "bargain", "ipa": "/ˈbɑːrɡən/", "zh": "砍价", "emoji": "🤝", "ex": "Can you give me a better price?", "exZh": "能再便宜点吗？" }
]
},
{
"id": "directions",
"icon": "🧭",
"name": "问路",
"lesson": {
"title": "问路",
"intro": "你走在街上，想找去博物馆的路。",
"objective": { "q": "步行到博物馆要多久？", "options": ["两分钟", "大约十分钟", "半小时", "要坐公交车"], "answer": 1 },
"dialogue": [
{ "who": "T", "en": "Excuse me, could you tell me how to get to the museum?", "zh": "打扰一下，能告诉我怎么去博物馆吗？" },
{ "who": "S", "en": "Sure. Go straight for two blocks, then turn left at the bank.", "zh": "当然。直走两个街区，然后在银行那里左转。" },
{ "who": "T", "en": "Is it far from here?", "zh": "离这里远吗？" },
{ "who": "S", "en": "About ten minutes on foot. It's right next to the park.", "zh": "步行大约十分钟，就在公园旁边。" },
{ "who": "T", "en": "Great. Is there a bus if it rains?", "zh": "太好了。要是下雨有公交车吗？" },
{ "who": "S", "en": "Yes, bus number five stops right in front of it.", "zh": "有，五路公交车正好停在它门口。" },
{ "who": "T", "en": "How often does it run?", "zh": "多久一班？" },
{ "who": "S", "en": "Every fifteen minutes.", "zh": "每十五分钟一班。" },
{ "who": "T", "en": "Thank you so much.", "zh": "非常感谢。" },
{ "who": "S", "en": "No problem. Have a nice day!", "zh": "不客气，祝您今天愉快！" }
],
"tips": [
{ "t": "口语小贴士", "txt": "Excuse me, could you tell me how to get to…? 是问路的万能开场。block 是“街区”，不是“楼”——两个街区大约走两分钟。" },
{ "t": "口语小贴士", "txt": "指路高频词：go straight（直走）、turn left/right（左转/右转）、next to（旁边）、across from（对面）、on foot（步行）。" }
],
"dictation": [
{ "line": 0, "blank": "museum" },
{ "line": 3, "blank": "minutes" }
]
},
"sentences": [
{ "id": "directions-s1", "en": "Could you tell me how to get to the museum?", "zh": "能告诉我怎么去博物馆吗？" },
{ "id": "directions-s2", "en": "Go straight for two blocks.", "zh": "直走两个街区。" },
{ "id": "directions-s3", "en": "Turn left at the bank.", "zh": "在银行那里左转。" },
{ "id": "directions-s4", "en": "Is it far from here?", "zh": "离这里远吗？" },
{ "id": "directions-s5", "en": "About ten minutes on foot.", "zh": "步行大约十分钟。" },
{ "id": "directions-s6", "en": "It's next to the park.", "zh": "在公园旁边。" },
{ "id": "directions-s7", "en": "I think I'm lost.", "zh": "我想我迷路了。" },
{ "id": "directions-s8", "en": "Could you show me on the map?", "zh": "能在地图上指给我看吗？" },
{ "id": "directions-s9", "en": "Which bus goes there?", "zh": "哪路公交车到那里？" },
{ "id": "directions-s10", "en": "Where is the nearest subway station?", "zh": "最近的地铁站在哪里？" }
],
"words": [
{ "id": "directions-w1", "en": "straight", "ipa": "/streɪt/", "zh": "直走", "emoji": "⬆️", "ex": "Go straight for two blocks.", "exZh": "直走两个街区。" },
{ "id": "directions-w2", "en": "turn left", "ipa": "/tɜːrn left/", "zh": "左转", "emoji": "⬅️", "ex": "Turn left at the bank.", "exZh": "在银行那里左转。" },
{ "id": "directions-w3", "en": "turn right", "ipa": "/tɜːrn raɪt/", "zh": "右转", "emoji": "➡️", "ex": "Turn right at the traffic light.", "exZh": "在红绿灯右转。" },
{ "id": "directions-w4", "en": "block", "ipa": "/blɑːk/", "zh": "街区", "emoji": "🏘️", "ex": "It's two blocks away.", "exZh": "离这里两个街区。" },
{ "id": "directions-w5", "en": "corner", "ipa": "/ˈkɔːrnər/", "zh": "拐角", "emoji": "📐", "ex": "It's on the corner.", "exZh": "就在拐角处。" },
{ "id": "directions-w6", "en": "across from", "ipa": "/əˈkrɔːs frəm/", "zh": "对面", "emoji": "↔️", "ex": "It's across from the park.", "exZh": "在公园对面。" },
{ "id": "directions-w7", "en": "next to", "ipa": "/nekst tuː/", "zh": "旁边", "emoji": "↔️", "ex": "It's next to the museum.", "exZh": "在博物馆旁边。" },
{ "id": "directions-w8", "en": "far", "ipa": "/fɑːr/", "zh": "远", "emoji": "📏", "ex": "Is it far from here?", "exZh": "离这里远吗？" },
{ "id": "directions-w9", "en": "on foot", "ipa": "/ɑːn fʊt/", "zh": "步行", "emoji": "🚶", "ex": "About ten minutes on foot.", "exZh": "步行大约十分钟。" },
{ "id": "directions-w10", "en": "bus stop", "ipa": "/bʌs stɑːp/", "zh": "公交站", "emoji": "🚏", "ex": "Where is the bus stop?", "exZh": "公交站在哪里？" },
{ "id": "directions-w11", "en": "traffic light", "ipa": "/ˈtræfɪk laɪt/", "zh": "红绿灯", "emoji": "🚦", "ex": "Turn left at the traffic light.", "exZh": "在红绿灯左转。" },
{ "id": "directions-w12", "en": "map", "ipa": "/mæp/", "zh": "地图", "emoji": "🗺️", "ex": "Can you show me on the map?", "exZh": "能在地图上指给我看吗？" },
{ "id": "directions-w13", "en": "lost", "ipa": "/lɔːst/", "zh": "迷路", "emoji": "🧭", "ex": "I think I'm lost.", "exZh": "我想我迷路了。" },
{ "id": "directions-w14", "en": "address", "ipa": "/əˈdres/", "zh": "地址", "emoji": "📍", "ex": "What's the address?", "exZh": "地址是什么？" },
{ "id": "directions-w15", "en": "entrance", "ipa": "/ˈentrəns/", "zh": "入口", "emoji": "🚪", "ex": "Where is the entrance?", "exZh": "入口在哪里？" },
{ "id": "directions-w16", "en": "cross", "ipa": "/krɔːs/", "zh": "过马路", "emoji": "🚸", "ex": "Cross the street and go straight.", "exZh": "过马路然后直走。" }
]
},
{
"id": "carrental",
"icon": "🚗",
"name": "租车加油",
"lesson": {
"title": "租车与加油",
"intro": "你在租车公司柜台，准备租一辆车。",
"objective": { "q": "租车每天多少钱？", "options": ["42 美元含保险", "24 美元不含保险", "42 欧元", "按里程收费"], "answer": 0 },
"dialogue": [
{ "who": "T", "en": "Hi, I'd like to rent a car for three days.", "zh": "你好，我想租三天车。" },
{ "who": "S", "en": "Sure. What size would you like?", "zh": "好的，您想要多大的车？" },
{ "who": "T", "en": "A compact car, automatic, please.", "zh": "请给我一辆小型自动挡车。" },
{ "who": "S", "en": "That's forty-two dollars a day, including insurance.", "zh": "每天四十二美元，含保险。" },
{ "who": "T", "en": "Does it include unlimited mileage?", "zh": "里程不限吗？" },
{ "who": "S", "en": "Yes. You just need your passport, driver's license, and a credit card.", "zh": "不限。您只需要护照、驾照和一张信用卡。" },
{ "who": "T", "en": "Here they are. What time should I return it?", "zh": "都在这了。我该几点还车？" },
{ "who": "S", "en": "By six p.m. on your last day. There's a late fee after that.", "zh": "最后一天下午六点前。超时要收逾期费。" },
{ "who": "T", "en": "One question — how does the fuel work?", "zh": "问一下——油费怎么算？" },
{ "who": "S", "en": "It's full-to-full: you pick it up full and return it full.", "zh": "满油取、满油还：取车时是满油，还车时加满就行。" },
{ "who": "T", "en": "Got it. Where's the nearest gas station?", "zh": "明白了。最近的加油站在哪里？" },
{ "who": "S", "en": "Right across the street.", "zh": "就在街对面。" },
{ "who": "T", "en": "Perfect, thanks!", "zh": "太好了，谢谢！" }
],
"tips": [
{ "t": "口语小贴士", "txt": "full-to-full 指“满油取、满油还”，租车必懂的加油规则。加油站加油说 Fill it up, please. 加普通汽油说 Regular, please." },
{ "t": "口语小贴士", "txt": "compact car 小型车、automatic 自动挡、unlimited mileage 不限里程——租车三件套词，说清楚这三样就不会租错车。" }
],
"dictation": [
{ "line": 0, "blank": "rent" },
{ "line": 3, "blank": "forty-two" }
]
},
"sentences": [
{ "id": "carrental-s1", "en": "I'd like to rent a car for three days.", "zh": "我想租三天车。" },
{ "id": "carrental-s2", "en": "A compact car, automatic, please.", "zh": "请给我一辆小型自动挡车。" },
{ "id": "carrental-s3", "en": "Does the price include insurance?", "zh": "价格含保险吗？" },
{ "id": "carrental-s4", "en": "Is the mileage unlimited?", "zh": "里程不限吗？" },
{ "id": "carrental-s5", "en": "What time should I return the car?", "zh": "我该几点还车？" },
{ "id": "carrental-s6", "en": "Where is the nearest gas station?", "zh": "最近的加油站在哪里？" },
{ "id": "carrental-s7", "en": "Fill it up, please.", "zh": "请加满。" },
{ "id": "carrental-s8", "en": "Regular, please.", "zh": "请加普通汽油。" },
{ "id": "carrental-s9", "en": "I have a flat tire.", "zh": "我的轮胎没气了。" },
{ "id": "carrental-s10", "en": "Does the car have GPS?", "zh": "车上有导航吗？" }
],
"words": [
{ "id": "carrental-w1", "en": "rent", "ipa": "/rent/", "zh": "租用", "emoji": "🚗", "ex": "I'd like to rent a car.", "exZh": "我想租一辆车。" },
{ "id": "carrental-w2", "en": "compact car", "ipa": "/ˈkɑːmpækt kɑːr/", "zh": "小型车", "emoji": "🚙", "ex": "A compact car, please.", "exZh": "请给我一辆小型车。" },
{ "id": "carrental-w3", "en": "automatic", "ipa": "/ˌɔːtəˈmætɪk/", "zh": "自动挡", "emoji": "⚙️", "ex": "An automatic, please.", "exZh": "请给我自动挡。" },
{ "id": "carrental-w4", "en": "insurance", "ipa": "/ɪnˈʃʊrəns/", "zh": "保险", "emoji": "🛡️", "ex": "Does it include insurance?", "exZh": "含保险吗？" },
{ "id": "carrental-w5", "en": "mileage", "ipa": "/ˈmaɪlɪdʒ/", "zh": "里程", "emoji": "🛣️", "ex": "Is mileage unlimited?", "exZh": "里程不限吗？" },
{ "id": "carrental-w6", "en": "driver's license", "ipa": "/ˈdraɪvərz ˈlaɪsns/", "zh": "驾照", "emoji": "🪪", "ex": "Here's my driver's license.", "exZh": "这是我的驾照。" },
{ "id": "carrental-w7", "en": "fuel", "ipa": "/ˈfjuːəl/", "zh": "油", "emoji": "⛽", "ex": "How does the fuel work?", "exZh": "油怎么算？" },
{ "id": "carrental-w8", "en": "gas station", "ipa": "/ɡæs ˈsteɪʃn/", "zh": "加油站", "emoji": "⛽", "ex": "Where's the nearest gas station?", "exZh": "最近的加油站在哪里？" },
{ "id": "carrental-w9", "en": "fill up", "ipa": "/fɪl ʌp/", "zh": "加满", "emoji": "⛽", "ex": "Fill it up, please.", "exZh": "请加满。" },
{ "id": "carrental-w10", "en": "regular", "ipa": "/ˈreɡjələr/", "zh": "普通汽油", "emoji": "⛽", "ex": "Regular, please.", "exZh": "请加普通汽油。" },
{ "id": "carrental-w11", "en": "tire", "ipa": "/ˈtaɪər/", "zh": "轮胎", "emoji": "🛞", "ex": "I have a flat tire.", "exZh": "我的轮胎瘪了。" },
{ "id": "carrental-w12", "en": "trunk", "ipa": "/trʌŋk/", "zh": "后备箱", "emoji": "🚗", "ex": "The trunk won't open.", "exZh": "后备箱打不开。" },
{ "id": "carrental-w13", "en": "return", "ipa": "/rɪˈtɜːrn/", "zh": "还车", "emoji": "↩️", "ex": "What time should I return the car?", "exZh": "我该几点还车？" },
{ "id": "carrental-w14", "en": "late fee", "ipa": "/leɪt fiː/", "zh": "逾期费", "emoji": "⏰", "ex": "There's a late fee after six.", "exZh": "六点后还车有逾期费。" },
{ "id": "carrental-w15", "en": "GPS", "ipa": "/ˌdʒiː piː ˈes/", "zh": "导航", "emoji": "🧭", "ex": "Does the car have GPS?", "exZh": "车上有导航吗？" },
{ "id": "carrental-w16", "en": "highway", "ipa": "/ˈhaɪweɪ/", "zh": "高速", "emoji": "🛣️", "ex": "Take the highway to the airport.", "exZh": "走高速去机场。" }
]
},
{
"id": "pharmacy",
"icon": "💊",
"name": "药店看病",
"lesson": {
"title": "药店买药",
"intro": "你感冒了，走进一家药店。",
"objective": { "q": "这种感冒药多少钱？", "options": ["20 美元", "12 美元", "需要处方才能买", "买一送一"], "answer": 1 },
"dialogue": [
{ "who": "T", "en": "Hi, I have a bad headache and a sore throat.", "zh": "你好，我头疼得厉害，嗓子也疼。" },
{ "who": "S", "en": "How long have you had it?", "zh": "多久了？" },
{ "who": "T", "en": "Since last night. I might have a fever too.", "zh": "从昨晚开始，可能还有点发烧。" },
{ "who": "S", "en": "Let me check... A little. Do you have any allergies?", "zh": "我看看……有一点。您对什么过敏吗？" },
{ "who": "T", "en": "No, none.", "zh": "没有，不过敏。" },
{ "who": "S", "en": "Okay. I'd suggest this cold medicine, twice a day after meals.", "zh": "好，我建议您吃这种感冒药，一天两次，饭后服用。" },
{ "who": "T", "en": "How much is it?", "zh": "多少钱？" },
{ "who": "S", "en": "Twelve dollars.", "zh": "十二美元。" },
{ "who": "T", "en": "Do I need a prescription?", "zh": "需要处方吗？" },
{ "who": "S", "en": "No, this one is over-the-counter.", "zh": "不用，这个是非处方药。" },
{ "who": "T", "en": "Great, I'll take it. Anything else I should do?", "zh": "好的，我买了。还有什么要注意的吗？" },
{ "who": "S", "en": "Drink lots of water and get some rest.", "zh": "多喝水，好好休息。" },
{ "who": "T", "en": "Thank you so much.", "zh": "非常感谢。" },
{ "who": "S", "en": "Hope you feel better soon!", "zh": "祝您早日康复！" }
],
"tips": [
{ "t": "口语小贴士", "txt": "over-the-counter 指不用处方就能买的药。处方药才需要 prescription。买药必问：Do I need a prescription?" },
{ "t": "口语小贴士", "txt": "吃药的剂量说法：twice a day（一天两次）、after meals（饭后）、before bed（睡前）。看药瓶说明常用。" }
],
"dictation": [
{ "line": 0, "blank": "headache" },
{ "line": 7, "blank": "Twelve" }
]
},
"sentences": [
{ "id": "pharmacy-s1", "en": "I have a bad headache.", "zh": "我头疼得厉害。" },
{ "id": "pharmacy-s2", "en": "I have a sore throat.", "zh": "我嗓子疼。" },
{ "id": "pharmacy-s3", "en": "I might have a fever.", "zh": "我可能发烧了。" },
{ "id": "pharmacy-s4", "en": "Do you have any allergies?", "zh": "您对什么过敏吗？" },
{ "id": "pharmacy-s5", "en": "Take this medicine twice a day.", "zh": "这个药一天吃两次。" },
{ "id": "pharmacy-s6", "en": "Do I need a prescription?", "zh": "需要处方吗？" },
{ "id": "pharmacy-s7", "en": "This one is over-the-counter.", "zh": "这个是非处方药。" },
{ "id": "pharmacy-s8", "en": "How long have you had it?", "zh": "症状持续多久了？" },
{ "id": "pharmacy-s9", "en": "Drink lots of water and get some rest.", "zh": "多喝水、多休息。" },
{ "id": "pharmacy-s10", "en": "I need to see a doctor.", "zh": "我需要看医生。" }
],
"words": [
{ "id": "pharmacy-w1", "en": "headache", "ipa": "/ˈhedeɪk/", "zh": "头疼", "emoji": "🤕", "ex": "I have a bad headache.", "exZh": "我头疼得厉害。" },
{ "id": "pharmacy-w2", "en": "sore throat", "ipa": "/sɔːr θroʊt/", "zh": "嗓子疼", "emoji": "🗣️", "ex": "I have a sore throat.", "exZh": "我嗓子疼。" },
{ "id": "pharmacy-w3", "en": "fever", "ipa": "/ˈfiːvər/", "zh": "发烧", "emoji": "🌡️", "ex": "I might have a fever.", "exZh": "我可能发烧了。" },
{ "id": "pharmacy-w4", "en": "cough", "ipa": "/kɔːf/", "zh": "咳嗽", "emoji": "😮‍💨", "ex": "I've been coughing all night.", "exZh": "我咳了一整晚。" },
{ "id": "pharmacy-w5", "en": "runny nose", "ipa": "/ˈrʌni noʊz/", "zh": "流鼻涕", "emoji": "🤧", "ex": "I have a runny nose.", "exZh": "我流鼻涕。" },
{ "id": "pharmacy-w6", "en": "allergy", "ipa": "/ˈælərdʒi/", "zh": "过敏", "emoji": "🤧", "ex": "Do you have any allergies?", "exZh": "您对什么过敏吗？" },
{ "id": "pharmacy-w7", "en": "medicine", "ipa": "/ˈmedɪsn/", "zh": "药", "emoji": "💊", "ex": "Take this medicine twice a day.", "exZh": "这个药一天吃两次。" },
{ "id": "pharmacy-w8", "en": "painkiller", "ipa": "/ˈpeɪnkɪlər/", "zh": "止痛药", "emoji": "💊", "ex": "Do you have any painkillers?", "exZh": "有止痛药吗？" },
{ "id": "pharmacy-w9", "en": "prescription", "ipa": "/prɪˈskrɪpʃn/", "zh": "处方", "emoji": "📋", "ex": "Do I need a prescription?", "exZh": "需要处方吗？" },
{ "id": "pharmacy-w10", "en": "over-the-counter", "ipa": "/ˌoʊvər ðə ˈkaʊntər/", "zh": "非处方药", "emoji": "✅", "ex": "This one is over-the-counter.", "exZh": "这个是非处方药。" },
{ "id": "pharmacy-w11", "en": "pharmacy", "ipa": "/ˈfɑːrməsi/", "zh": "药店", "emoji": "💊", "ex": "Where is the nearest pharmacy?", "exZh": "最近的药店在哪里？" },
{ "id": "pharmacy-w12", "en": "doctor", "ipa": "/ˈdɑːktər/", "zh": "医生", "emoji": "🧑‍⚕️", "ex": "I need to see a doctor.", "exZh": "我需要看医生。" },
{ "id": "pharmacy-w13", "en": "hospital", "ipa": "/ˈhɑːspɪtl/", "zh": "医院", "emoji": "🏥", "ex": "Is there a hospital nearby?", "exZh": "附近有医院吗？" },
{ "id": "pharmacy-w14", "en": "insurance card", "ipa": "/ɪnˈʃʊrəns kɑːrd/", "zh": "医保卡", "emoji": "🪪", "ex": "Do you have insurance?", "exZh": "您有保险吗？" },
{ "id": "pharmacy-w15", "en": "symptom", "ipa": "/ˈsɪmptəm/", "zh": "症状", "emoji": "🤒", "ex": "What are your symptoms?", "exZh": "您有什么症状？" },
{ "id": "pharmacy-w16", "en": "dosage", "ipa": "/ˈdoʊsɪdʒ/", "zh": "剂量", "emoji": "⚗️", "ex": "The dosage is twice a day.", "exZh": "剂量是一天两次。" }
]
},
{
"id": "emergency",
"icon": "🚨",
"name": "紧急求助",
"lesson": {
"title": "紧急求助",
"intro": "你发现钱包不见了，可能是地铁上被偷了。",
"objective": { "q": "警察建议的第一步是什么？", "options": ["马上报警", "联系大使馆", "给银行打电话冻结卡", "去地铁失物招领处"], "answer": 2 },
"dialogue": [
{ "who": "T", "en": "Help! My wallet is gone. I think someone took it on the subway!", "zh": "救命！我的钱包不见了，可能是地铁上被偷了！" },
{ "who": "S", "en": "Calm down, ma'am. When did you notice?", "zh": "冷静一下，女士。您什么时候发现的？" },
{ "who": "T", "en": "Just now, when I got off. It had my passport and cards.", "zh": "刚下车时发现的。里面有我的护照和银行卡。" },
{ "who": "S", "en": "Okay. I need to file a police report. Do you have any ID on you?", "zh": "好的，我需要做一份报案记录。您身上还有证件吗？" },
{ "who": "T", "en": "No, it was all in the wallet. What should I do first?", "zh": "没有，都在钱包里。我该先做什么？" },
{ "who": "S", "en": "First, call your bank to freeze your cards. Then we'll contact your embassy.", "zh": "先给银行打电话冻结银行卡，然后我们联系您的大使馆。" },
{ "who": "T", "en": "Could you help me call? My phone has no signal here.", "zh": "能帮我打吗？我的手机这里没信号。" },
{ "who": "S", "en": "Of course. Here, use this phone. And don't worry — we'll sort this out.", "zh": "当然，用这部电话。别担心，我们会处理好的。" },
{ "who": "T", "en": "Thank you so much. I really appreciate it.", "zh": "太感谢了，真的很感激。" }
],
"tips": [
{ "t": "口语小贴士", "txt": "丢钱包三步：freeze your cards（冻结银行卡）→ file a police report（报案）→ contact your embassy（联系大使馆）。报警电话美国是 911。" },
{ "t": "口语小贴士", "txt": "I think someone took it. 的 someone took it 是被偷的说法。东西丢了可以说 I lost my…，被偷了说 My… was stolen." }
],
"dictation": [
{ "line": 0, "blank": "wallet" },
{ "line": 5, "blank": "freeze" }
]
},
"sentences": [
{ "id": "emergency-s1", "en": "Help! My wallet is gone!", "zh": "救命！我的钱包不见了！" },
{ "id": "emergency-s2", "en": "My passport was stolen.", "zh": "我的护照被偷了。" },
{ "id": "emergency-s3", "en": "I'd like to file a police report.", "zh": "我要报案。" },
{ "id": "emergency-s4", "en": "Where is the police station?", "zh": "警察局在哪里？" },
{ "id": "emergency-s5", "en": "Please call an ambulance.", "zh": "请叫救护车。" },
{ "id": "emergency-s6", "en": "My phone has no signal.", "zh": "我的手机没信号。" },
{ "id": "emergency-s7", "en": "Could you help me call my bank?", "zh": "能帮我给银行打电话吗？" },
{ "id": "emergency-s8", "en": "Where is the embassy?", "zh": "大使馆在哪里？" },
{ "id": "emergency-s9", "en": "It's an emergency!", "zh": "这是紧急情况！" },
{ "id": "emergency-s10", "en": "Calm down, we'll sort this out.", "zh": "别慌，我们会处理好的。" }
],
"words": [
{ "id": "emergency-w1", "en": "help", "ipa": "/help/", "zh": "救命", "emoji": "🆘", "ex": "Help! My wallet is gone!", "exZh": "救命！我的钱包不见了！" },
{ "id": "emergency-w2", "en": "emergency", "ipa": "/ɪˈmɜːrdʒənsi/", "zh": "紧急情况", "emoji": "🚨", "ex": "It's an emergency!", "exZh": "这是紧急情况！" },
{ "id": "emergency-w3", "en": "police", "ipa": "/pəˈliːs/", "zh": "警察", "emoji": "👮", "ex": "Where is the police station?", "exZh": "警察局在哪里？" },
{ "id": "emergency-w4", "en": "stolen", "ipa": "/ˈstoʊlən/", "zh": "被偷的", "emoji": "🥷", "ex": "My bag was stolen.", "exZh": "我的包被偷了。" },
{ "id": "emergency-w5", "en": "lost", "ipa": "/lɔːst/", "zh": "丢失的", "emoji": "😰", "ex": "I lost my passport.", "exZh": "我的护照丢了。" },
{ "id": "emergency-w6", "en": "report", "ipa": "/rɪˈpɔːrt/", "zh": "报案", "emoji": "📋", "ex": "I'd like to file a report.", "exZh": "我要报案。" },
{ "id": "emergency-w7", "en": "embassy", "ipa": "/ˈembəsi/", "zh": "大使馆", "emoji": "🏛️", "ex": "Contact the embassy.", "exZh": "联系大使馆。" },
{ "id": "emergency-w8", "en": "wallet", "ipa": "/ˈwɑːlɪt/", "zh": "钱包", "emoji": "👛", "ex": "My wallet is gone.", "exZh": "我的钱包不见了。" },
{ "id": "emergency-w9", "en": "freeze", "ipa": "/friːz/", "zh": "冻结", "emoji": "❄️", "ex": "Freeze your credit cards.", "exZh": "冻结您的信用卡。" },
{ "id": "emergency-w10", "en": "signal", "ipa": "/ˈsɪɡnəl/", "zh": "信号", "emoji": "📶", "ex": "My phone has no signal.", "exZh": "我的手机没信号。" },
{ "id": "emergency-w11", "en": "ambulance", "ipa": "/ˈæmbjələns/", "zh": "救护车", "emoji": "🚑", "ex": "Call an ambulance!", "exZh": "叫救护车！" },
{ "id": "emergency-w12", "en": "accident", "ipa": "/ˈæksɪdənt/", "zh": "事故", "emoji": "💥", "ex": "There's been an accident.", "exZh": "出事故了。" },
{ "id": "emergency-w13", "en": "emergency exit", "ipa": "/ɪˈmɜːrdʒənsi ˈeksɪt/", "zh": "紧急出口", "emoji": "🚨", "ex": "Where is the emergency exit?", "exZh": "紧急出口在哪里？" },
{ "id": "emergency-w14", "en": "dial", "ipa": "/ˈdaɪəl/", "zh": "拨打", "emoji": "☎️", "ex": "Dial nine one one.", "exZh": "拨打九一一。" },
{ "id": "emergency-w15", "en": "police station", "ipa": "/pəˈliːs ˈsteɪʃn/", "zh": "警察局", "emoji": "🚔", "ex": "I need to go to the police station.", "exZh": "我要去警察局。" },
{ "id": "emergency-w16", "en": "calm down", "ipa": "/kɑːm daʊn/", "zh": "冷静", "emoji": "🧘", "ex": "Calm down, please.", "exZh": "请冷静。" }
]
},
{
"id": "smalltalk",
"icon": "💬",
"name": "闲聊",
"lesson": {
"title": "和当地人闲聊",
"intro": "在公园里，一位当地人跟你搭话。",
"objective": { "q": "当地人推荐尝试什么？", "options": ["河边的烧烤", "市中心的面条", "博物馆的咖啡", "山顶的日落"], "answer": 0 },
"dialogue": [
{ "who": "S", "en": "Nice day, isn't it?", "zh": "天气真好，不是吗？" },
{ "who": "T", "en": "Beautiful! I love this city.", "zh": "太美了！我很喜欢这座城市。" },
{ "who": "S", "en": "Where are you from?", "zh": "您从哪里来？" },
{ "who": "T", "en": "China. I'm here on vacation. How about you?", "zh": "中国。我是来度假的，您呢？" },
{ "who": "S", "en": "I live here. First time visiting?", "zh": "我就住这里。您是第一次来吗？" },
{ "who": "T", "en": "Yes, first time. It's been wonderful so far.", "zh": "是的，第一次。到目前为止一切都特别棒。" },
{ "who": "S", "en": "Have you tried the local food yet?", "zh": "您尝过当地美食了吗？" },
{ "who": "T", "en": "A little. I loved the noodles. What else should I try?", "zh": "尝了一点。我爱上了面条。还有什么该试试的？" },
{ "who": "S", "en": "You have to try the barbecue by the river. It's amazing.", "zh": "您一定要试试河边的烧烤，太棒了。" },
{ "who": "T", "en": "I'll check it out tomorrow. Thanks for the tip!", "zh": "我明天就去。谢谢推荐！" },
{ "who": "S", "en": "No problem. Enjoy the rest of your trip!", "zh": "不客气，祝您接下来的旅程愉快！" }
],
"tips": [
{ "t": "口语小贴士", "txt": "Nice day, isn't it? 是英美人最经典的搭话开场。这种反义疑问句不用认真回答，微笑点头说 Beautiful! 就好。" },
{ "t": "口语小贴士", "txt": "被问 Where are you from? 就答 I'm from China. 反抛一句 How about you? 让对话继续，是最自然的社交技巧。" }
],
"dictation": [
{ "line": 2, "blank": "from" },
{ "line": 8, "blank": "barbecue" }
]
},
"sentences": [
{ "id": "smalltalk-s1", "en": "Where are you from?", "zh": "您从哪里来？" },
{ "id": "smalltalk-s2", "en": "I'm from China.", "zh": "我来自中国。" },
{ "id": "smalltalk-s3", "en": "Nice day, isn't it?", "zh": "天气真好，不是吗？" },
{ "id": "smalltalk-s4", "en": "I'm here on vacation.", "zh": "我是来度假的。" },
{ "id": "smalltalk-s5", "en": "What do you recommend?", "zh": "您推荐什么？" },
{ "id": "smalltalk-s6", "en": "The food is delicious.", "zh": "食物太好吃了。" },
{ "id": "smalltalk-s7", "en": "What is this city famous for?", "zh": "这座城市以什么闻名？" },
{ "id": "smalltalk-s8", "en": "Could you take a photo for us?", "zh": "能帮我们拍张照吗？" },
{ "id": "smalltalk-s9", "en": "People here are so friendly.", "zh": "这里的人真友好。" },
{ "id": "smalltalk-s10", "en": "Have a great day!", "zh": "祝您今天愉快！" }
],
"words": [
{ "id": "smalltalk-w1", "en": "hometown", "ipa": "/ˈhoʊmtaʊn/", "zh": "家乡", "emoji": "🏡", "ex": "Where are you from?", "exZh": "您从哪里来？" },
{ "id": "smalltalk-w2", "en": "trip", "ipa": "/trɪp/", "zh": "旅行", "emoji": "🧳", "ex": "How's your trip going?", "exZh": "您的旅行怎么样？" },
{ "id": "smalltalk-w3", "en": "local food", "ipa": "/ˈloʊkl fuːd/", "zh": "当地美食", "emoji": "🍜", "ex": "Try the local food.", "exZh": "尝尝当地美食。" },
{ "id": "smalltalk-w4", "en": "recommend", "ipa": "/ˌrekəˈmend/", "zh": "推荐", "emoji": "👍", "ex": "What do you recommend?", "exZh": "您推荐什么？" },
{ "id": "smalltalk-w5", "en": "weather", "ipa": "/ˈweðər/", "zh": "天气", "emoji": "☀️", "ex": "Nice day, isn't it?", "exZh": "天气真好，不是吗？" },
{ "id": "smalltalk-w6", "en": "delicious", "ipa": "/dɪˈlɪʃəs/", "zh": "美味的", "emoji": "😋", "ex": "The noodles were delicious.", "exZh": "面条太好吃了。" },
{ "id": "smalltalk-w7", "en": "famous", "ipa": "/ˈfeɪməs/", "zh": "有名的", "emoji": "⭐", "ex": "What is this city famous for?", "exZh": "这座城市以什么闻名？" },
{ "id": "smalltalk-w8", "en": "sights", "ipa": "/saɪts/", "zh": "景点", "emoji": "🏞️", "ex": "What sights should I see?", "exZh": "我该看哪些景点？" },
{ "id": "smalltalk-w9", "en": "museum", "ipa": "/mjuˈziːəm/", "zh": "博物馆", "emoji": "🏛️", "ex": "The museum is free on Sundays.", "exZh": "博物馆周日免费。" },
{ "id": "smalltalk-w10", "en": "beach", "ipa": "/biːtʃ/", "zh": "海滩", "emoji": "🏖️", "ex": "The beach is beautiful.", "exZh": "海滩很美。" },
{ "id": "smalltalk-w11", "en": "nightlife", "ipa": "/ˈnaɪtlaɪf/", "zh": "夜生活", "emoji": "🌃", "ex": "How's the nightlife here?", "exZh": "这里的夜生活怎么样？" },
{ "id": "smalltalk-w12", "en": "friendly", "ipa": "/ˈfrendli/", "zh": "友好的", "emoji": "🤝", "ex": "People here are so friendly.", "exZh": "这里的人真友好。" },
{ "id": "smalltalk-w13", "en": "language", "ipa": "/ˈlæŋɡwɪdʒ/", "zh": "语言", "emoji": "🗣️", "ex": "My English is not very good.", "exZh": "我的英语不太好。" },
{ "id": "smalltalk-w14", "en": "learn", "ipa": "/lɜːrn/", "zh": "学习", "emoji": "📚", "ex": "I'm still learning English.", "exZh": "我还在学英语。" },
{ "id": "smalltalk-w15", "en": "vacation", "ipa": "/veɪˈkeɪʃn/", "zh": "假期", "emoji": "🏖️", "ex": "I'm on vacation.", "exZh": "我在度假。" },
{ "id": "smalltalk-w16", "en": "photo", "ipa": "/ˈfoʊtoʊ/", "zh": "照片", "emoji": "📸", "ex": "Could you take a photo for us?", "exZh": "能帮我们拍张照吗？" }
]
}
]
};

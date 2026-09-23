/* ============================================================
   语法知识点 A1：讲义 + 练习 合体
   每条 = 一段讲义（core/rows/egs/note）+ 一组针对这条的题（items）
   格式同前：q 题干（___ 为空）a 正确答案 opts 选项 why 讲解
   ============================================================ */
window.CONTENT_TOPICS_A = [

{id:'T1', lv:'A1', t:'sein 和 haben 现在时', s:'Präsens: sein / haben',
 core:'这两个词是德语所有句子的地基，而且是<strong>强变化</strong>——不能套规则，只能背。先把这两行刻进脑子。',
 rows:[
  ['sein 是','ich bin · du bist · er/sie/es ist','wir sind · ihr seid · sie/Sie sind'],
  ['haben 有','ich habe · du hast · er/sie/es hat','wir haben · ihr habt · sie/Sie haben']
 ],
 egs:[['Ich bin Student.','我是学生。'],['Sie hat zwei Kinder.','她有两个孩子。']],
 note:'两个最容易错的点：<strong>er/sie/es 是 ist，不加 -t</strong>；<strong>ihr 配 seid</strong>（和 sind 只差一个字母）。',
 items:[
  {q:'Ich ___ Student.', a:'bin', opts:['bin','bist','ist'], why:'ich 配 bin。这几乎是德语第一句话。'},
  {q:'Du ___ aus China.', a:'bist', opts:['bin','bist','seid'], why:'du 配 bist。'},
  {q:'Er ___ Lehrer.', a:'ist', opts:['ist','bist','sind'], why:'er/sie/es 都配 ist，不加 -t。'},
  {q:'Wir ___ aus Deutschland.', a:'sind', opts:['sind','seid','ist'], why:'wir 配 sind。'},
  {q:'Ihr ___ müde.', a:'seid', opts:['sind','seid','bist'], why:'ihr（你们）配 seid——最容易忽略的一个。'},
  {q:'Ich ___ einen Bruder.', a:'habe', opts:['habe','hat','haben'], why:'ich 配 habe。'},
  {q:'Sie (她) ___ Zeit.', a:'hat', opts:['hat','habe','habt'], why:'sie（她）配 hat。'},
  {q:'Wir ___ zwei Kinder.', a:'haben', opts:['haben','habt','hat'], why:'wir 配 haben。'}
 ]},

{id:'T2', lv:'A1', t:'规则动词现在时', s:'Regelmäßige Verben',
 core:'规则动词的词尾像模板一样固定。去掉词尾 <strong>-en</strong> 得到词干，再加这六种词尾。',
 rows:[
  ['词尾模板','-e · -st · -t · -en · -t · -en','ich mache · du machst · er macht · wir machen · ihr macht · sie machen'],
  ['词干以 -t/-d 结尾','中间要垫一个 e','arbeiten → du arbeitest · er arbeitet']
 ],
 egs:[['Ich lerne Deutsch.','我在学德语。'],['Er arbeitet in Berlin.','他在柏林工作。']],
 note:'垫 e 的原因是<strong>读不出来</strong>——arbeit + st 没法念，所以变成 arbeitest。同理 du findest、du wartest。',
 items:[
  {q:'Ich ___ Deutsch. (lernen)', a:'lerne', opts:['lerne','lernst','lernt'], why:'ich 加 -e。'},
  {q:'Du ___ in Berlin. (wohnen)', a:'wohnst', opts:['wohne','wohnst','wohnt'], why:'du 加 -st。'},
  {q:'Er ___ in einem Büro. (arbeiten)', a:'arbeitet', opts:['arbeite','arbeitest','arbeitet'], why:'词干以 -t 结尾，垫 e 再接词尾：arbeit + e + t。'},
  {q:'Wir ___ nach Hamburg. (fahren)', a:'fahren', opts:['fahre','fahrt','fahren'], why:'wir 加 -en，和原形相同。'},
  {q:'Ihr ___ gern Musik. (hören)', a:'hört', opts:['höre','hört','hören'], why:'ihr 加 -t。'},
  {q:'Du ___ gut. (kochen)', a:'kochst', opts:['kochst','kocht','koche'], why:'du 加 -st。'},
  {q:'Ich ___ einen Brief. (schreiben)', a:'schreibe', opts:['schreibe','schreibst','schreibt'], why:'ich 加 -e。'},
  {q:'Sie (他们) ___ Brot. (kaufen)', a:'kaufen', opts:['kauft','kaufen','kaufst'], why:'sie（他们）加 -en。'}
 ]},

{id:'T3', lv:'A1', t:'名词性别不用背，看词尾', s:'Genus erkennen',
 core:'德语名词的 der/die/das <strong>不是随机的</strong>。看到这些词尾，直接判，命中率九成以上。',
 rows:[
  ['-ung / -heit / -keit / -schaft / -tion / -tät','die','die Wohnung 公寓 · die Freiheit 自由 · die Zeitung 报纸'],
  ['-er / -ling / -ist / -ismus（做某事的人）','der','der Lehrer 老师 · der Frühling 春天 · der Journalist 记者'],
  ['-chen / -lein（小称）','das','das Mädchen 女孩 · das Brötchen 小面包'],
  ['-ment / -um / -ma','das','das Dokument 文件 · das Zentrum 中心 · das Thema 主题']
 ],
 egs:[['Die Zeitung ist neu.','这份报纸是新的。'],['Das Mädchen spielt im Garten.','那个女孩在花园里玩。']],
 note:'最容易翻车的一条：<strong>das Mädchen（女孩）是中性</strong>——因为 -chen 永远中性，跟人本身是男是女无关。同理 das Fräulein。',
 items:[
  {q:'___ Wohnung ist groß.', a:'Die', opts:['Die','Der','Das'], why:'-ung 结尾 → 阴性，用 die。'},
  {q:'___ Zeitung liegt auf dem Tisch.', a:'Die', opts:['Die','Der','Das'], why:'-ung 结尾 → 阴性。'},
  {q:'___ Lehrer kommt gleich.', a:'Der', opts:['Der','Die','Das'], why:'-er 表示做某事的人 → 阳性。'},
  {q:'___ Mädchen spielt im Garten.', a:'Das', opts:['Das','Der','Die'], why:'-chen 是小称 → 中性。这也是最容易错的一条。'},
  {q:'___ Dokument ist wichtig.', a:'Das', opts:['Das','Der','Die'], why:'-ment 结尾 → 中性。'},
  {q:'___ Freiheit ist wichtig.', a:'Die', opts:['Die','Der','Das'], why:'-heit 结尾 → 阴性。'},
  {q:'___ Journalist schreibt einen Artikel.', a:'Der', opts:['Der','Die','Das'], why:'-ist 表示人 → 阳性。'},
  {q:'___ Zentrum der Stadt ist schön.', a:'Das', opts:['Das','Der','Die'], why:'-um 结尾 → 中性。'},
  {q:'___ Möglichkeit gibt es nicht.', a:'Die', opts:['Die','Der','Das'], why:'-keit 结尾 → 阴性。'},
  {q:'___ Frühling ist da.', a:'Der', opts:['Der','Die','Das'], why:'-ling 结尾 → 阳性。'}
 ]},

{id:'T4', lv:'A1', t:'名词复数：五种变法 + 一条铁律', s:'Plural',
 core:'德语复数就五种结局。背不下来的时候，至少记住那条<strong>铁律</strong>——它能覆盖一大批词。',
 rows:[
  ['-e','der Tisch → die Tische','阳性多'],
  ['-en / -n','die Frau → die Frauen','阴性多'],
  ['-er','das Kind → die Kinder','中性多，常加变音'],
  ['-s','das Auto → die Autos','外来词'],
  ['不变','der Lehrer → die Lehrer','-er/-en 结尾的名词']
 ],
 egs:[['Die Wohnungen sind teuer.','这些公寓很贵。'],['Die Kinder spielen draußen.','孩子们在外面玩。']],
 note:'<strong>铁律</strong>：以 -ung / -heit / -keit / -schaft 结尾的阴性名词，复数<strong>一律加 -en</strong>，没有例外。这一条就能覆盖你日常遇到的一大批词。',
 items:[
  {q:'die Wohnung → die ___', a:'Wohnungen', opts:['Wohnungen','Wohnunge','Wohnungs'], why:'铁律：-ung 结尾一律加 -en。'},
  {q:'die Zeitung → die ___', a:'Zeitungen', opts:['Zeitungen','Zeitunge','Zeitungs'], why:'同样，-ung → -en。'},
  {q:'die Möglichkeit → die ___', a:'Möglichkeiten', opts:['Möglichkeiten','Möglichkeite','Möglichkeits'], why:'-keit 结尾 → -en。'},
  {q:'das Kind → die ___', a:'Kinder', opts:['Kinder','Kinden','Kinds'], why:'中性常用 -er。'},
  {q:'das Auto → die ___', a:'Autos', opts:['Autos','Autoen','Autoe'], why:'外来词用 -s。'},
  {q:'der Tisch → die ___', a:'Tische', opts:['Tische','Tischen','Tischer'], why:'阳性常用 -e。'},
  {q:'die Frau → die ___', a:'Frauen', opts:['Frauen','Fraus','Fraue'], why:'阴性常用 -en。'},
  {q:'der Lehrer → die ___', a:'Lehrer', opts:['Lehrer','Lehrere','Lehreren'], why:'-er 结尾的名词复数不变。'},
  {q:'die Freiheit → die ___', a:'Freiheiten', opts:['Freiheiten','Freiheite','Freiheits'], why:'-heit 结尾 → -en。'},
  {q:'das Haus → die ___', a:'Häuser', opts:['Häuser','Hausen','Hause'], why:'中性常加变音再接 -er。'}
 ]},

{id:'T5', lv:'A1', t:'第一格：谁在做', s:'Nominativ',
 core:'第一格就是<strong>主语</strong>——「谁在做」。定冠词：der（阳）/ die（阴）/ das（中）/ die（复数）。',
 rows:[
  ['der','阳性','der Mann 男人 · der Tisch 桌子'],
  ['die','阴性','die Frau 女人 · die Wohnung 公寓'],
  ['das','中性','das Kind 孩子 · das Buch 书'],
  ['die','复数（不分性别）','die Kinder 孩子们']
 ],
 egs:[['Der Mann liest ein Buch.','那个男人在读书。'],['Die Kinder sind müde.','孩子们累了。']],
 note:'复数<strong>一律用 die</strong>，不管这些名词原本是阳是阴是中。这是第一格里唯一的「偷懒」点。',
 items:[
  {q:'___ Mann liest ein Buch.', a:'Der', opts:['Der','Den','Dem'], why:'Mann 阳性，做主语用第一格 der。'},
  {q:'___ Frau arbeitet hier.', a:'Die', opts:['Die','Der','Das'], why:'Frau 阴性，第一格 die。'},
  {q:'___ Kind spielt im Garten.', a:'Das', opts:['Das','Der','Die'], why:'Kind 中性，第一格 das。'},
  {q:'___ Kinder sind müde.', a:'Die', opts:['Die','Der','Das'], why:'复数一律 die，不分性别。'},
  {q:'___ Tisch ist neu.', a:'Der', opts:['Der','Die','Das'], why:'Tisch 是阳性（der Tisch）。'},
  {q:'___ Wohnung ist groß.', a:'Die', opts:['Die','Der','Das'], why:'Wohnung 是阴性。'},
  {q:'___ Buch ist interessant.', a:'Das', opts:['Das','Der','Die'], why:'Buch 是中性。'},
  {q:'___ Wasser ist kalt.', a:'Das', opts:['Das','Der','Die'], why:'Wasser 是中性。'}
 ]},

{id:'T6', lv:'A1', t:'第四格：只有阳性会变 der→den', s:'Akkusativ',
 core:'这是整个格系统最大的简化：从第一格到第四格，<strong>只有阳性单数会变</strong>，其他全部原样。',
 rows:[
  ['der Mann','→ den Mann','阳性：变'],
  ['die Frau','→ die Frau','阴性：不变'],
  ['das Kind','→ das Kind','中性：不变'],
  ['die Kinder','→ die Kinder','复数：不变'],
  ['ein / mein','→ einen / meinen','只有阳性的不定冠词、物主代词要变']
 ],
 egs:[['Ich sehe den Mann.','我看见那个男人。'],['Ich sehe die Frau und das Kind.','我看见那个女人和孩子。']],
 note:'做第四格题时你只需要判断一件事：<strong>这个词是阳性的吗？</strong>是就 der→den、ein→einen、mein→meinen；不是就别动。支配第四格的常见动词：sehen、kaufen、haben、lesen、essen、trinken、brauchen、suchen。',
 items:[
  {q:'Ich sehe ___ Mann.', a:'den', opts:['der','den','dem'], why:'sehen 支配第四格，阳性 der → den。'},
  {q:'Ich kaufe ___ Brot.', a:'das', opts:['das','dem','den'], why:'Brot 中性，第四格不变。'},
  {q:'Er liest ___ Zeitung.', a:'die', opts:['die','der','den'], why:'Zeitung 阴性，第四格不变。'},
  {q:'Wir haben ___ Hund.', a:'einen', opts:['ein','einen','einem'], why:'不定冠词阳性第四格：ein → einen。'},
  {q:'Sie sucht ___ Schlüssel.', a:'den', opts:['der','den','dem'], why:'suchen 支配第四格，der Schlüssel → den。'},
  {q:'Ich trinke ___ Kaffee.', a:'einen', opts:['ein','eine','einen'], why:'Kaffee 阳性，第四格 einen。'},
  {q:'Ich brauche ___ Fahrkarte.', a:'eine', opts:['ein','eine','einen'], why:'Fahrkarte 阴性，第四格不变，仍是 eine。'},
  {q:'Er isst ___ Apfel.', a:'einen', opts:['ein','einen','einem'], why:'Apfel 阳性，第四格 einen。'},
  {q:'Ich habe ___ Bruder.', a:'einen', opts:['ein','einen','einem'], why:'阳性第四格 → einen。'},
  {q:'Ich liebe ___ Familie.', a:'meine', opts:['mein','meine','meinen'], why:'Familie 阴性，第四格不变 → meine。'}
 ]},

{id:'T7', lv:'A1', t:'第三格：给谁、对谁', s:'Dativ',
 core:'第三格是「<strong>给谁</strong>、对谁」。和第四格不同，第三格里<strong>三种性别全都要变</strong>。',
 rows:[
  ['der → dem','阳性','Ich helfe dem Mann.'],
  ['die → der','阴性','Ich helfe der Frau.'],
  ['das → dem','中性','Ich helfe dem Kind.'],
  ['die (复数) → den','复数，名词还要加 -n','Ich helfe den Kindern.']
 ],
 egs:[['Ich helfe dem Mann.','我帮那个男人。'],['Ich danke der Frau.','我感谢那位女士。']],
 note:'<strong>动词决定配几格，必须连着记</strong>：helfen 帮、danken 感谢、gefallen 使喜欢、gehören 属于——这几个都硬性配第三格，没有例外。复数额外要记得给名词加 -n。',
 items:[
  {q:'Ich helfe ___ Mann.', a:'dem', opts:['der','den','dem'], why:'helfen 支配第三格，阳性 der → dem。'},
  {q:'Ich danke ___ Frau.', a:'der', opts:['die','der','dem'], why:'danken 支配第三格，阴性 die → der。'},
  {q:'Das Buch gehört ___ Kind.', a:'dem', opts:['das','dem','den'], why:'gehören 支配第三格，中性 das → dem。'},
  {q:'Ich helfe ___ Kindern.', a:'den', opts:['die','den','der'], why:'复数第三格 → den，名词还要加 -n：den Kindern。'},
  {q:'Der Film gefällt ___ Frau.', a:'der', opts:['die','der','dem'], why:'gefallen 支配第三格，阴性 → der。'},
  {q:'Ich danke ___ Lehrer.', a:'dem', opts:['der','den','dem'], why:'阳性第三格 → dem。'},
  {q:'Das gehört ___ Familie.', a:'der', opts:['die','der','dem'], why:'阴性第三格 → der。'},
  {q:'Ich helfe ___ Studenten.', a:'dem', opts:['der','den','dem'], why:'阳性第三格 → dem。（单数 Student）'}
 ]},

{id:'T8', lv:'A1', t:'物主代词：跟 ein 走就对了', s:'Possessivartikel',
 core:'mein / dein / sein / ihr / unser / euer 的词尾<strong>和 ein 完全一样</strong>。学一套等于学八套。',
 rows:[
  ['我 / 你 / 他 / 她','mein · dein · sein · ihr',''],
  ['我们 / 你们 / 他们 / 您','unser · euer · ihr · Ihr','尊称 Ihr 永远大写'],
  ['词尾','mein / meine / meinen / meinem','跟 ein / eine / einen / einem 完全同步']
 ],
 egs:[['Das ist mein Bruder.','这是我弟弟。'],['Ich liebe meine Familie.','我爱我的家人。'],['Er sucht seinen Schlüssel.','他在找他的钥匙。']],
 note:'两个坑：<strong>「她的」和「他们的」都是 ihr</strong>，靠上下文区分；<strong>「您的」是 Ihr</strong>，永远大写。另外 euer 后面加词尾时会掉一个 e：eure、euren。',
 items:[
  {q:'Das ist ___ Bruder. (我)', a:'mein', opts:['mein','meine','meinen'], why:'Bruder 阳性第一格 → mein。'},
  {q:'Das ist ___ Schwester. (我)', a:'meine', opts:['mein','meine','meinen'], why:'Schwester 阴性 → meine。'},
  {q:'Wie heißt ___ Frau? (你)', a:'deine', opts:['dein','deine','deinen'], why:'Frau 阴性 → deine。'},
  {q:'Ich liebe ___ Familie. (我)', a:'meine', opts:['mein','meine','meinen'], why:'Familie 阴性，第四格不变 → meine。'},
  {q:'Er sucht ___ Schlüssel. (他)', a:'seinen', opts:['sein','seinen','seinem'], why:'Schlüssel 阳性第四格 → seinen。'},
  {q:'___ Vater arbeitet hier. (她)', a:'Ihr', opts:['Ihr','Ihre','Sein'], why:'「她的」是 ihr，Vater 阳性第一格 → Ihr（句首大写）。'},
  {q:'Wie ist ___ Nummer? (您)', a:'Ihre', opts:['Ihr','Ihre','deine'], why:'尊称物主代词 Ihr 永远大写；Nummer 阴性 → Ihre。'},
  {q:'Wir lieben ___ Stadt. (我们)', a:'unsere', opts:['unser','unsere','unseren'], why:'Stadt 阴性 → unsere。'}
 ]},

{id:'T9', lv:'A1', t:'否定：kein 还是 nicht', s:'Negation',
 core:'一句话判断：<strong>否定名词用 kein，否定其他一切用 nicht。</strong>',
 rows:[
  ['kein','后面跟名词，且该名词前面是 ein 或没有冠词','Ich habe kein Geld. 我没钱'],
  ['nicht','否定动词、形容词、整句','Ich verstehe nicht. 我不明白'],
  ['kein 的变格','kein / keine / keinen / keinem','完全跟 ein 一样']
 ],
 egs:[['Das ist kein Problem.','这不是问题。'],['Das Wetter ist nicht gut.','天气不好。']],
 note:'判断口诀：先看<strong>要否定的那个词是不是名词</strong>。是名词、而且前面是 ein 或没冠词 → kein；其余全部 nicht。所以 <strong>keinen</strong> 出现在阳性第四格（Ich habe keinen Bruder）。',
 items:[
  {q:'Das ist ___ Problem.', a:'kein', opts:['nicht','kein','keine'], why:'否定名词 Problem，原本是 ein Problem → kein。'},
  {q:'Ich habe ___ Zeit.', a:'keine', opts:['nicht','kein','keine'], why:'Zeit 阴性 → keine。'},
  {q:'Ich verstehe ___.', a:'nicht', opts:['nicht','kein','keine'], why:'否定动词 verstehen → nicht。'},
  {q:'Er hat ___ Geld.', a:'kein', opts:['nicht','kein','keine'], why:'Geld 中性 → kein。'},
  {q:'Das Wetter ist ___ gut.', a:'nicht', opts:['nicht','kein','keine'], why:'否定形容词 gut → nicht。'},
  {q:'Sie hat ___ Bruder.', a:'keinen', opts:['kein','keinen','keinem'], why:'Bruder 阳性第四格 → keinen。'},
  {q:'Ich komme ___.', a:'nicht', opts:['nicht','kein','keine'], why:'否定动词 kommen → nicht。'},
  {q:'Wir haben ___ Auto.', a:'kein', opts:['nicht','kein','keine'], why:'Auto 中性 → kein。'},
  {q:'Ich habe ___ Lust.', a:'keine', opts:['nicht','kein','keine'], why:'Lust 阴性 → keine。'},
  {q:'Er ist ___ müde.', a:'nicht', opts:['nicht','kein','keine'], why:'否定形容词 müde → nicht。'}
 ]},

{id:'T10', lv:'A1', t:'陈述句：动词坐第二把交椅', s:'Wortstellung im Aussagesatz',
 core:'德语主句里，<strong>变位动词永远在第二个位置</strong>。不管谁开头，这个位置不动。',
 rows:[
  ['主语开头','主语 + 动词 + …','Ich fahre heute nach Berlin.'],
  ['别的成分开头','该成分 + <strong>动词</strong> + 主语 + …','Heute fahre ich nach Berlin.（倒装）'],
  ['两个动作','情态动词占第二位，主要动词去末尾','Ich muss heute arbeiten.']
 ],
 egs:[['Am Montag haben wir einen Termin.','周一我们有个约。'],['Nach der Arbeit gehe ich einkaufen.','下班后我去买东西。']],
 note:'中文习惯「时间 + 主语 + 动词」，德语是「时间 + <strong>动词</strong> + 主语」。所以句首只要不是主语，动词和主语就要<strong>换位置</strong>——这是语法要求，不是可选项。',
 items:[
  {q:'Heute ___ ich nach Berlin.', a:'fahre', opts:['fahre','ich fahre','fahren'], why:'Heute 占第一位，动词必须第二位，主语后移。'},
  {q:'Ich ___ heute nach Berlin.', a:'fahre', opts:['fahre','fahren','fahre ich'], why:'主语开头时动词紧随其后。'},
  {q:'Am Montag ___ wir einen Termin.', a:'haben', opts:['haben','wir haben','hat'], why:'时间状语开头 → 动词第二位。'},
  {q:'Nach der Arbeit ___ ich müde.', a:'bin', opts:['bin','ich bin','ist'], why:'介词短语开头 → 动词第二位。'},
  {q:'Morgen ___ er nach Köln.', a:'fährt', opts:['fährt','er fährt','fahren'], why:'时间词开头 → 动词第二位，主语后移。'},
  {q:'Ich ___ heute keine Zeit.', a:'habe', opts:['habe','haben','habe ich'], why:'主语开头，动词紧随。'},
  {q:'In Berlin ___ viele Menschen.', a:'wohnen', opts:['wohnen','Menschen wohnen','wohnt'], why:'地点开头 → 动词第二位。'},
  {q:'Ich ___ Deutsch lernen.', a:'muss', opts:['muss','müssen','lerne'], why:'情态动词占第二位，主要动词 lernen 去末尾。'}
 ]},

{id:'T11', lv:'A1', t:'疑问句：两种问法', s:'Fragen',
 core:'德语只有两种疑问句，都是<strong>靠动词的位置</strong>来区分。',
 rows:[
  ['一般疑问句（是/否）','动词提到<strong>最前面</strong>','Sprechen Sie Deutsch?'],
  ['特殊疑问句（W 词）','W 词第一，<strong>动词仍第二</strong>','Wo wohnen Sie?'],
  ['常用 W 词','wer 谁 · was 什么 · wo 哪里 · wann 何时 · wie 怎样 · warum 为什么','']
 ],
 egs:[['Kommen Sie aus China?','您来自中国吗？'],['Wann beginnt der Kurs?','课程什么时候开始？']],
 note:'注意一般疑问句：动词提到最前面后，<strong>主语紧跟在动词后面</strong>。这是唯一一个动词不在第二位的主句情况——因为它被挤到了第一位。',
 items:[
  {q:'___ du gern Musik?', a:'Hörst', opts:['Hörst','Du hörst','Hören'], why:'一般疑问句，动词提到最前面。'},
  {q:'Wo ___ du?', a:'wohnst', opts:['wohnst','du wohnst','wohnen'], why:'特殊疑问句：W 词第一，动词仍第二。'},
  {q:'___ Sie Deutsch?', a:'Sprechen', opts:['Sprechen','Sie sprechen','Spricht'], why:'一般疑问句，动词提前。'},
  {q:'Wann ___ der Kurs?', a:'beginnt', opts:['beginnt','beginnt der','beginnen'], why:'W 词开头，动词第二位。'},
  {q:'___ du Zeit?', a:'Hast', opts:['Hast','Du hast','Hat'], why:'一般疑问句，动词最前面。'},
  {q:'Warum ___ du nicht?', a:'kommst', opts:['kommst','du kommst','kommen'], why:'W 词第一，动词第二。'},
  {q:'___ er aus Deutschland?', a:'Kommt', opts:['Kommt','Er kommt','Kommen'], why:'一般疑问句。'},
  {q:'Wie ___ Sie?', a:'heißen', opts:['heißen','Sie heißen','heißt'], why:'W 词第一，动词第二。'}
 ]},

{id:'T12', lv:'A1', t:'情态动词：ich 和 er 长得一样', s:'Modalverben',
 core:'情态动词有两个特点。一是单数第一、三人称<strong>同形，都不加 -t</strong>；二是它占住第二位，把主要动词<strong>赶到句子末尾</strong>。',
 rows:[
  ['können 能','ich kann / er kann','（不是 kannt）'],
  ['müssen 必须','ich muss / er muss',''],
  ['wollen 想','ich will / er will',''],
  ['dürfen 被允许','ich darf / er darf',''],
  ['möchten 想要（礼貌）','ich möchte / er möchte','点单万能词']
 ],
 egs:[['Ich kann Deutsch sprechen.','我会说德语。'],['Er muss heute arbeiten.','他今天必须工作。']],
 note:'第二个特点比第一个更要紧：情态动词占住第二位后，<strong>主要动词用原形、放到句子最末尾</strong>。所以是「Er muss heute <strong>arbeiten</strong>」，不是「arbeitet」。',
 items:[
  {q:'Ich ___ Deutsch sprechen.', a:'kann', opts:['kann','kannst','könnt'], why:'ich 和 er 都用 kann。'},
  {q:'Du ___ mehr schlafen.', a:'musst', opts:['muss','musst','müsst'], why:'du 用 musst。'},
  {q:'Er ___ heute arbeiten.', a:'muss', opts:['muss','musst','müssen'], why:'第三人称单数用 muss，不加 -t。'},
  {q:'Wir ___ nach Berlin fahren.', a:'wollen', opts:['wollt','wollen','will'], why:'wir 用 wollen。'},
  {q:'Ich ___ einen Kaffee.', a:'möchte', opts:['möchte','mag','möchtest'], why:'möchten 是礼貌的「想要」，点单万能句。'},
  {q:'Hier ___ man nicht rauchen.', a:'darf', opts:['darf','darfst','dürft'], why:'dürfen 是「被允许」；man 泛指「人们」，配 darf。'},
  {q:'Was ___ ich tun?', a:'soll', opts:['soll','sollst','sollen'], why:'sollen 是「应该」。'},
  {q:'Ich ___ jetzt gehen.', a:'muss', opts:['muss','musst','müssen'], why:'注意语序：情态动词第二位，主要动词 gehen 在末尾。'}
 ]},

{id:'T13', lv:'A1', t:'介词配格（一）：第三格口诀', s:'Präpositionen mit Dativ',
 core:'有一批介词<strong>死配第三格</strong>，没有例外。念成一串背下来，比理解原理快得多。',
 rows:[
  ['口诀','mit · nach · bei · aus · von · zu · seit',''],
  ['mit','和…一起、用（工具）','Ich fahre mit dem Bus. 我坐公交'],
  ['nach','去（城市/国家）、在…之后','nach Berlin · nach der Arbeit'],
  ['bei','在…那里（人）','bei meinen Eltern 在我父母家'],
  ['aus','来自','aus China 来自中国'],
  ['von','从…、…的','von Berlin bis München'],
  ['zu','去（人/机构）','zum Arzt 去看医生'],
  ['seit','自从','seit einem Jahr 一年以来']
 ],
 egs:[['Ich fahre mit dem Fahrrad.','我骑自行车。'],['Sie kommt aus der Schweiz.','她来自瑞士。']],
 note:'第三格里<strong>三种性别全都要变</strong>：der→dem、die→der、das→dem、复数→den（名词加 -n）。所以 mit <strong>dem</strong> Bus、bei <strong>der</strong> Arbeit、zu <strong>dem</strong> Arzt。',
 items:[
  {q:'Ich fahre mit ___ Bus.', a:'dem', opts:['der','den','dem'], why:'mit 固定第三格，Bus 阳性 → dem。'},
  {q:'Sie kommt aus ___ Schweiz.', a:'der', opts:['die','der','dem'], why:'aus 固定第三格，Schweiz 阴性 → der。'},
  {q:'Ich gehe zu ___ Arzt.', a:'dem', opts:['der','dem','den'], why:'zu 固定第三格，Arzt 阳性 → dem。'},
  {q:'Nach ___ Arbeit gehe ich nach Hause.', a:'der', opts:['die','der','dem'], why:'nach 固定第三格，Arbeit 阴性 → der。'},
  {q:'Ich wohne bei ___ Eltern.', a:'den', opts:['die','den','der'], why:'bei 带第三格；复数 → den，名词加 -n：den Eltern。'},
  {q:'Ich lerne seit ___ Jahr Deutsch.', a:'einem', opts:['ein','einem','einen'], why:'seit 固定第三格，Jahr 中性 → einem。'},
  {q:'Ich fahre mit ___ Fahrrad.', a:'dem', opts:['das','dem','den'], why:'mit 第三格，Fahrrad 中性 → dem。'},
  {q:'Er kommt von ___ Bahnhof.', a:'dem', opts:['der','dem','den'], why:'von 第三格，Bahnhof 阳性 → dem。'}
 ]},

{id:'T14', lv:'A1', t:'介词配格（二）：第四格口诀', s:'Präpositionen mit Akkusativ',
 core:'另一批介词<strong>死配第四格</strong>。数量比第三格那批少，记住这五个就够了。',
 rows:[
  ['口诀','für · ohne · gegen · um · durch','"为了不带对抗绕过去"'],
  ['für','为了、给','für dich 给你'],
  ['ohne','没有','ohne Zucker 不加糖'],
  ['gegen','反对、对抗、大约（时间）','gegen mich 反对我'],
  ['um','围绕、在（几点）','um acht 在八点'],
  ['durch','穿过、通过','durch die Stadt 穿过城市']
 ],
 egs:[['Das ist für meine Mutter.','这是给我妈妈的。'],['Ich trinke Kaffee ohne Zucker.','我喝咖啡不加糖。']],
 note:'第四格里<strong>只有阳性会变</strong>：für <strong>den</strong> Mann，但 für <strong>die</strong> Frau、für <strong>das</strong> Kind 都不变。所以这批介词的重点只有一半：遇到阳性才要动。',
 items:[
  {q:'Das Geschenk ist für ___ Mutter.', a:'die', opts:['die','der','dem'], why:'für 固定第四格，Mutter 阴性 → 不变，die。'},
  {q:'Wir fahren durch ___ Stadt.', a:'die', opts:['die','der','dem'], why:'durch 第四格，Stadt 阴性 → die。'},
  {q:'Er kommt ohne ___ Frau.', a:'seine', opts:['sein','seine','seinem'], why:'ohne 第四格；Frau 阴性，物主代词加 -e → seine。'},
  {q:'Der Zug fährt um ___ Uhr.', a:'acht', opts:['acht','achte','achten'], why:'um 表示钟点，直接接数字，不加冠词。'},
  {q:'Das ist ein Geschenk für ___ Bruder.', a:'meinen', opts:['mein','meinen','meinem'], why:'für 第四格，Bruder 阳性 → meinen。'},
  {q:'Er kämpft gegen ___ Wind.', a:'den', opts:['der','den','dem'], why:'gegen 第四格，Wind 阳性 → den。'},
  {q:'Ich gehe durch ___ Park.', a:'den', opts:['der','den','dem'], why:'durch 第四格，Park 阳性 → den。'},
  {q:'Das ist für ___ Kind.', a:'das', opts:['das','dem','den'], why:'für 第四格，Kind 中性 → 不变，das。'}
 ]},

{id:'T15', lv:'A1', t:'介词配格（三）：双向介词一个判断', s:'Wechselpräpositionen',
 core:'第三类介词带几格<strong>不固定</strong>——取决于一个判断：<strong>有移动方向吗？有就第四格，没有就第三格。</strong>',
 rows:[
  ['九个双向介词','in · an · auf · über · unter · vor · hinter · neben · zwischen',''],
  ['去哪里（有方向）','第四格','Ich gehe in die Stadt.'],
  ['在哪里（无方向）','第三格','Ich bin in der Stadt.'],
  ['三组典型动词','legen/liegen 放/躺 · stellen/stehen 竖放/立 · hängen/hängen 挂/挂着','及物的配四格，不及物的配三格']
 ],
 egs:[['Ich lege das Buch auf den Tisch.','我把书放到桌上。（放上去 → 四格）'],['Das Buch liegt auf dem Tisch.','书在桌上。（在那儿 → 三格）']],
 note:'这一条不要背表格，<strong>每次问自己一句「有动作方向吗」</strong>就行。德语把「放」和「在」拆成两个不同的动词，正是为了配合这个区分——搞混这两个是外国人最明显的破绽之一。',
 items:[
  {q:'Ich gehe in ___ Stadt.', a:'die', opts:['die','der','dem'], why:'in + 去哪里 → 第四格，Stadt 阴性 → die。'},
  {q:'Ich bin in ___ Stadt.', a:'der', opts:['die','der','dem'], why:'in + 在哪里 → 第三格，Stadt 阴性 → der。'},
  {q:'Das Buch liegt auf ___ Tisch.', a:'dem', opts:['den','dem','der'], why:'auf + 在哪里（静态）→ 第三格，Tisch 阳性 → dem。'},
  {q:'Ich lege das Buch auf ___ Tisch.', a:'den', opts:['den','dem','der'], why:'auf + 放上去（有方向）→ 第四格，Tisch 阳性 → den。'},
  {q:'Die Katze sitzt unter ___ Tisch.', a:'dem', opts:['den','dem','der'], why:'sitzen 是静态 → 第三格。'},
  {q:'Die Katze läuft unter ___ Tisch.', a:'den', opts:['den','dem','der'], why:'laufen 有方向 → 第四格。'},
  {q:'Ich hänge das Bild an ___ Wand.', a:'die', opts:['die','der','dem'], why:'挂上去有方向 → 第四格，Wand 阴性 → die。'},
  {q:'Das Bild hängt an ___ Wand.', a:'der', opts:['die','der','dem'], why:'挂着是静态 → 第三格，Wand 阴性 → der。'}
 ]}
];

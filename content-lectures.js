/* ============================================================
   语法讲义（邪修版）
   一条一个「捷径」，不是教科书。格式：
     core  一句话核心（必须能一眼记住）
     rows  可选小表 [词尾/情况, 结果, 例子]
     egs   可选例句 [[德语, 中文]]
     note  可选提醒/例外
   ============================================================ */
window.CONTENT_LECTURES = [

{id:'L1', lv:'A1', t:'名词性别不用背，看词尾', s:'Genus erkennen', core:'德语名词的 der/die/das 不是随机的。看到这些词尾，直接判，命中率九成以上。',
 rows:[
  ['-ung / -heit / -keit / -schaft / -tion / -tät','die','die Wohnung 公寓 · die Freiheit 自由 · die Zeitung 报纸'],
  ['-er / -ling / -ist / -ismus（做某事的人）','der','der Lehrer 老师 · der Frühling 春天 · der Journalist 记者'],
  ['-chen / -lein（小称）','das','das Mädchen 女孩 · das Brötchen 小面包'],
  ['-ment / -um / -ma','das','das Dokument 文件 · das Zentrum 中心 · das Thema 主题']
 ],
 egs:[['Die Zeitung ist neu.','这份报纸是新的。'],['Das Mädchen spielt im Garten.','那个女孩在花园里玩。']],
 note:'最容易翻车的一条：das Mädchen（女孩）是<strong>中性</strong>——因为 -chen 永远中性，跟人本身是男是女无关。同理 das Fräulein。'},

{id:'L2', lv:'A1', t:'三个格，一句话说清', s:'Die drei Fälle', core:'别背表格。就问自己三句话：谁在做（第一格）？动作直接落在谁身上（第四格）？给谁做的（第三格）？',
 rows:[
  ['第一格 Nominativ','谁在做 → 主语','Der Mann liest. 男人在读书'],
  ['第四格 Akkusativ','动作直接落在谁身上 → 直接宾语','Ich sehe den Mann. 我看见那个男人'],
  ['第三格 Dativ','给谁 / 对谁 → 间接宾语','Ich helfe dem Mann. 我帮那个男人']
 ],
 note:'中文没有格，所以你不需要理解它，只需要会问那三句话。动词决定了后面接几格——所以动词要连着格一起记，比如 <strong>helfen 永远配第三格</strong>，没有例外。'},

{id:'L3', lv:'A1', t:'只有阳性会变：der → den', s:'Der Kern des Akkusativs', core:'这是整个德语格系统最大的简化：从第一格到第四格，<strong>只有阳性单数会变</strong>，其他全部原样。',
 rows:[
  ['der Mann','→ den Mann','阳性：变'],
  ['die Frau','→ die Frau','阴性：不变'],
  ['das Kind','→ das Kind','中性：不变'],
  ['die Kinder','→ die Kinder','复数：不变']
 ],
 egs:[['Ich sehe den Mann.','我看见那个男人。'],['Ich sehe die Frau / das Kind.','我看见那个女人／那个孩子。']],
 note:'所以做第四格题时，你只需要做一个判断：<strong>这个词是阳性的吗？</strong>是就 der→den、ein→einen、mein→meinen；不是就别动。'},

{id:'L4', lv:'A1', t:'介词带几格：两个口诀 + 一个判断', s:'Präpositionen', core:'介词分三类。前两类死记口诀，第三类用一个判断解决。',
 rows:[
  ['第三格口诀','mit · nach · bei · aus · von · zu · seit','嘴上一串念下来'],
  ['第四格口诀','für · ohne · gegen · um · durch','"为了不带对抗绕过去"'],
  ['双向介词','in · an · auf · über · unter · vor · hinter · neben · zwischen','去哪里→四格／在哪里→三格']
 ],
 egs:[['Ich fahre mit dem Bus.','我坐公交。（mit 永远三格）'],['Ich lege das Buch auf den Tisch.','我把书放到桌上。（放上去→四格）'],['Das Buch liegt auf dem Tisch.','书在桌上。（在那儿→三格）']],
 note:'双向介词只有这一个判断：<strong>有移动方向吗？有就四格，没有就三格。</strong>legen/liegen、stellen/stehen、hängen 这几对动词就是专门考这个的。'},

{id:'L5', lv:'A1', t:'动词永远坐第二把交椅', s:'Wortstellung', core:'德语主句里，变位动词永远在第二个位置。<strong>不管谁开头，这个位置不动。</strong>',
 rows:[
  ['Ich fahre heute nach Berlin.','主语开头 → 动词第二','我今天去柏林'],
  ['Heute fahre ich nach Berlin.','时间开头 → 动词仍第二，主语被挤到后面','今天我（倒装）去柏林']
 ],
 egs:[['Am Montag haben wir einen Termin.','周一我们有个约。'],['Nach der Arbeit gehe ich einkaufen.','下班后我去买东西。']],
 note:'中文习惯「时间+主语+动词」，德语是「时间+<strong>动词</strong>+主语」。所以只要句首不是主语，动词和主语就要<strong>换位置</strong>——这叫倒装，不是可选项，是语法要求。'},

{id:'L6', lv:'A1', t:'从句：动词滚到最后', s:'Nebensatz', core:'见到 <strong>dass / weil / wenn / obwohl / ob</strong>，从句里的动词就搬家到<strong>整句最末尾</strong>。',
 rows:[
  ['主句','Ich bleibe zu Hause, ...','我待在家'],
  ['+ weil','..., weil es regnet.','因为下雨（动词 regnet 到末尾）']
 ],
 egs:[['Ich weiß, dass er morgen kommt.','我知道他明天来。'],['Ich lerne Deutsch, weil ich in Berlin arbeiten will.','我学德语，因为我想在柏林工作。']],
 note:'这是德语和中文差别最大的地方，也是中国学生最容易错的地方。记住一个画面：<strong>从句像是被「倒过来」说的</strong>，动词收尾。从句和主句之间永远有逗号。'},

{id:'L7', lv:'A1', t:'情态动词：ich 和 er 长得一样', s:'Modalverben', core:'情态动词的单数第一人称和第三人称<strong>同形，而且都不加 -t</strong>。',
 rows:[
  ['können','ich kann / er kann','（不是 kannt）'],
  ['müssen','ich muss / er muss',''],
  ['wollen','ich will / er will',''],
  ['dürfen','ich darf / er darf','']
 ],
 egs:[['Ich kann Deutsch sprechen.','我会说德语。'],['Er muss heute arbeiten.','他今天必须工作。']],
 note:'第二个更要紧的点：情态动词占住第二位后，<strong>主要动词被赶到句子最末尾，用原形</strong>。所以是「Er muss heute <strong>arbeiten</strong>」，不是「Er muss heute arbeitet」。'},

{id:'L8', lv:'A1', t:'否定：kein 还是 nicht', s:'Negation', core:'一句话判断：<strong>否定名词用 kein，否定其他一切用 nicht。</strong>',
 rows:[
  ['kein','后面跟名词，且那个名词前面是 ein 或者没有冠词','Ich habe kein Geld. / Das ist kein Problem.'],
  ['nicht','否定动词、形容词、整句','Ich verstehe nicht. / Das ist nicht gut.']
 ],
 note:'kein 像 ein 一样变：kein / keine / keinen / keinem。所以 <strong>keinen</strong> 用于阳性第四格（Ich habe keinen Bruder）。'},

{id:'L9', lv:'A1', t:'完成时：默认 haben，只有一种情况用 sein', s:'Perfekt: haben oder sein', core:'拿不准就用 <strong>haben</strong>。只有「移动」或「状态改变」的动词用 sein。',
 rows:[
  ['配 sein 的动词','表示移动或状态变化','gehen 走 · kommen 来 · fahren 乘车 · fliegen 飞 · aufstehen 起床 · einschlafen 入睡 · sterben 死'],
  ['必须记住的三个例外','不动但也配 sein','sein 是 · bleiben 停留 · werden 变成'],
  ['其他全部','配 haben','essen · trinken · lesen · kaufen · machen · arbeiten …']
 ],
 egs:[['Ich habe Deutsch gelernt.','我学了德语。'],['Wir sind nach Berlin gefahren.','我们去了柏林。']],
 note:'背一个小故事串住 sein 家族：<strong>「来了、走了、飞了、起来了、睡着了、死了、留下了、变了」</strong>——全是位置或状态发生变化的。'},

{id:'L10', lv:'A1', t:'复数：五种变法 + 一条铁律', s:'Plural', core:'德语复数就五种结局，背不下来的话，至少记住那条铁律。',
 rows:[
  ['-e','der Tisch → die Tische','常见，阳性多'],
  ['-en / -n','die Frau → die Frauen','阴性多'],
  ['-er','das Kind → die Kinder','中性多（常加变音）'],
  ['-s','das Auto → die Autos','外来词'],
  ['不变','der Lehrer → die Lehrer','-er/-en 结尾的阳阴名词']
 ],
 note:'<strong>铁律</strong>：以 -ung / -heit / -keit / -schaft 结尾的阴性名词，复数一律加 -en，没有例外（die Wohnung → die Wohnungen）。这一条就能覆盖你日常遇到的一大批词。'},

{id:'L11', lv:'A2', t:'形容词词尾：默认 -en，只有三处例外', s:'Adjektivendungen', core:'这是德语最臭名昭著的表。但用「默认值 + 例外」的思路，你只需要记三行。',
 rows:[
  ['默认情况','-en','几乎所有复数、所有第三格、所有第二格、阳性第四格'],
  ['例外一：定冠词 + 单数','-e','der alte Mann / die alte Frau / das alte Haus'],
  ['例外二：不定冠词 + 阳性主格','-er','ein alter Mann'],
  ['例外三：不定冠词 + 中性主格/第四格','-es','ein altes Haus']
 ],
 egs:[['Der alte Mann wartet.','那位老人在等。'],['Ein alter Mann wartet.','一位老人在等。'],['Ich sehe den alten Mann.','我看见那位老人。']],
 note:'背后的逻辑只有一句：<strong>冠词已经把性别说清楚了，形容词就偷懒用 -e/-en；冠词没说清楚的（ein 看不出阳性还是中性），形容词就自己扛起 -er/-es。</strong>理解这句，你就不用背表了。'},

{id:'L12', lv:'A2', t:'可分动词：前缀飞到句尾', s:'Trennbare Verben', core:'主句里，可分动词的<strong>前缀永远被甩到句子最末尾</strong>。',
 rows:[
  ['aufstehen','Ich stehe um sieben auf.','我七点起床'],
  ['einkaufen','Wir kaufen heute ein.','我们今天购物'],
  ['anrufen','Ich rufe dich später an.','我晚点打给你'],
  ['zumachen','Mach bitte die Tür zu!','请把门关上！']
 ],
 note:'怎么判断能不能分？<strong>看前缀重不重读。</strong>重读的能分（AUFstehen、EINkaufen）；不重读的不能分（beSUchen、verSTEHen、erZÄHlen）——这类加 ge 时也不加 ge-。'},

{id:'L13', lv:'A2', t:'命令式：三步造出来', s:'Imperativ', core:'对谁说，就按那个人的规则改，不需要额外记新形式。',
 rows:[
  ['对 du（熟人）','去掉 -st，去掉 du','du machst → <strong>Mach!</strong> · du kommst → <strong>Komm!</strong>'],
  ['对 ihr（一群人）','去掉 -t，保留 ihr 位置去掉','ihr macht → <strong>Macht!</strong>'],
  ['对 Sie（尊称）','动词原形 + Sie，语序倒过来','<strong>Machen Sie!</strong> · <strong>Kommen Sie!</strong>']
 ],
 note:'对 du 的命令式里，<strong>词干元音 e→i/ie 的动词保留变化</strong>：du nimmst → <strong>Nimm!</strong>（不是 Nehm!）、du liest → <strong>Lies!</strong>。'},

{id:'L14', lv:'A2', t:'被动语态：werden + 过去分词', s:'Passiv', core:'公式就一个：<strong>werden + 过去分词</strong>。过去时换成 wurde，其余不变。',
 rows:[
  ['现在时','Das Haus <strong>wird</strong> gebaut.','这房子在建'],
  ['过去时','Das Haus <strong>wurde</strong> gebaut.','这房子（当时）在建'],
  ['带情态动词','Das Haus <strong>muss</strong> gebaut <strong>werden</strong>.','这房子必须建']
 ],
 note:'口语里德国人更爱用 <strong>man</strong> 代替被动：不用说「Das wird gemacht」，直接说「<strong>Man macht das</strong>」，意思一样还省事。但考试和书面语要能看懂被动。'},

{id:'L15', lv:'A2', t:'比较级：-er，最高级 am -sten', s:'Komparativ und Superlativ', core:'和英语几乎一样，只是词尾不同。',
 rows:[
  ['原级','schnell 快',''],
  ['比较级','schnell<strong>er</strong> 更快','+ als = 比…（schneller als du）'],
  ['最高级','am schnell<strong>sten</strong> 最快',''],
  ['常用不规则','gut → besser → am besten','viel → mehr → am meisten · gern → lieber → am liebsten']
 ],
 note:'「gern 的比较级」特别好用：「Ich trinke gern Tee」是「我喜欢喝茶」，「Ich trinke <strong>lieber</strong> Kaffee」就是「我更爱喝咖啡」——点单时显得地道。'},

{id:'L16', lv:'B1', t:'虚拟式 II：客气话的万能公式', s:'Konjunktiv II', core:'把「我想要」说得客气，把「如果…就…」说得非现实，全靠这几个词。',
 rows:[
  ['würde + 原形','最万能，任何动词都能用','Ich würde gern mitkommen. 我很乐意一起来'],
  ['hätte','haben 的虚拟式','Ich hätte gern einen Kaffee. 我想要杯咖啡'],
  ['wäre','sein 的虚拟式','Das wäre schön. 那就太好了'],
  ['könnte','können 的虚拟式','Könnten Sie mir helfen? 您能帮我吗']
 ],
 egs:[['Wenn ich Zeit hätte, käme ich mit.','如果我有时间，我就一起来了。'],['Könnten Sie das wiederholen?','您能重复一遍吗？']],
 note:'最实用的一条：<strong>把 Können 换成 Könnten，礼貌程度立刻上一个台阶。</strong>德国人问路、点单、提要求，几乎都用 Könnten。'},

{id:'L17', lv:'B1', t:'关系从句：性别跟名词，格看成分', s:'Relativsatz', core:'两个判断：关系代词的<strong>性别和单复数跟着前面那个名词</strong>，<strong>格看它在从句里干什么活儿</strong>。',
 rows:[
  ['做主语','第一格','Der Mann, <strong>der</strong> dort steht, ...'],
  ['做第四格宾语','第四格','Die Frau, <strong>die</strong> ich traf, ...'],
  ['做第三格宾语','第三格','Der Freund, <strong>dem</strong> ich helfe, ...']
 ],
 note:'别忘了从句的老规矩：<strong>动词去末尾</strong>。「Der Mann, der dort <strong>steht</strong>」——steht 在最后。'},

{id:'L18', lv:'B1', t:'连接词分三类，语序各不同', s:'Konnektoren', core:'这是德语写作和口语的分水岭。拿到一个连接词，先问：<strong>它占不占句首位置？</strong>',
 rows:[
  ['不占位置','und · aber · oder · denn','语序完全不变'],
  ['占第一位','deshalb · trotzdem · dann · also','动词紧随其后，主语后移'],
  ['引导从句','weil · obwohl · dass · wenn','动词滚到从句末尾']
 ],
 egs:[['Es regnet, deshalb bleibe ich zu Hause.','下雨，所以我待在家。'],['Ich bleibe zu Hause, weil es regnet.','我待在家，因为下雨。']],
 note:'同一个意思，用 deshalb 和用 weil，句子结构完全相反：<strong>deshalb 后面动词紧跟，weil 后面动词垫底。</strong>记住这一对，这一类就通了。'},

{id:'L19', lv:'B1', t:'带 zu 的不定式：zu 插在中间', s:'Infinitiv mit zu', core:'很多动词后面接「zu + 原形」。可分动词的话，<strong>zu 插在前缀和词干中间</strong>。',
 rows:[
  ['普通动词','zu + 原形','Ich habe Lust, ins Kino <strong>zu gehen</strong>.'],
  ['可分动词','zu 插进中间','Ich versuche, früher <strong>aufzustehen</strong>.'],
  ['常见搭配','Lust haben / Zeit haben / versuchen / vergessen / bitten','全是 + zu + 不定式']
 ],
 note:'对比一下就很清楚：<strong>情态动词不带 zu</strong>（Ich muss gehen），<strong>普通动词要带 zu</strong>（Ich versuche zu gehen）。这是德语的一个硬规矩。'},

{id:'L20', lv:'B1', t:'第二格口语能绕就绕', s:'Genitiv', core:'第二格书面气重，口语里德国人几乎都用 <strong>von + 第三格</strong>代替。',
 rows:[
  ['书面 / 第二格','das Auto <strong>des</strong> Mannes','那个男人的车'],
  ['口语 / von + 三格','das Auto <strong>von dem</strong> Mann','意思完全一样'],
  ['人名最省事','<strong>Christinas</strong> Auto','克里斯蒂娜的车（直接加 s）']
 ],
 note:'但「wegen / trotz / während」这几个介词后面<strong>必须</strong>用第二格（wegen des Wetters），这个躲不掉，考试也常考。'},

{id:'L21', lv:'A1', t:'一个动作，两种动词：legen/liegen 这类', s:'Positionsverben', core:'德语把「放」和「在」拆成两个不同的动词，这是中文里没有的区分，但用起来特别准。',
 rows:[
  ['legen（放，及物）','我把书放到桌上','Ich <strong>lege</strong> das Buch auf den Tisch.（四格）'],
  ['liegen（躺着，不及物）','书在桌上','Das Buch <strong>liegt</strong> auf dem Tisch.（三格）'],
  ['stellen / stehen','竖着放 / 竖着立','Ich stelle die Flasche hin. / Die Flasche steht.'],
  ['hängen / hängen','挂（及物）/ 挂着','Ich hänge das Bild auf. / Das Bild hängt.']
 ],
 note:'规律：<strong>及物的那个配第四格（有动作、有对象），不及物的那个配第三格。</strong>搞混这两个是外国人最明显的破绽之一。'},

{id:'L22', lv:'A2', t:'物主代词：跟 ein 走就对了', s:'Possessivartikel', core:'mein/dein/sein/ihr/unser/euer 的词尾<strong>和 ein 一模一样</strong>。学一套等于学八套。',
 rows:[
  ['我 / 你 / 他 / 她','mein / dein / sein / ihr',''],
  ['我们 / 你们 / 他们 / 您','unser / euer / ihr / Ihr','尊称 Ihr 永远大写'],
  ['词尾规则','mein / meine / meinen / meinem','跟 ein / eine / einen / einem 完全同步']
 ],
 egs:[['Das ist mein Bruder.','这是我弟弟。'],['Ich liebe meine Familie.','我爱我的家人。'],['Er sucht seinen Schlüssel.','他在找他的钥匙。']],
 note:'一个坑：「她的」和「他们的」都是 <strong>ihr</strong>，靠动词和上下文区分；「您的」是 <strong>Ihr</strong>，永远大写。'},

{id:'L23', lv:'B1', t:'别逐字翻译中文', s:'Nicht wörtlich übersetzen', core:'很多错句不是语法不会，是<strong>把中文的词一个个搬过去</strong>。这些是最高频的翻车点。',
 rows:[
  ['我很热','Ich bin heiß ✗ → Mir ist warm ✓','德语用第三格说感受'],
  ['我有兴趣','Ich habe Interesse ✓','这个和中文一致'],
  ['我喜欢','Ich mag / Ich finde ... gut','没有「喜欢」这个动词，用 mag 或 gern'],
  ['我同意你','Ich stimme dir zu ✓','zu 在末尾（可分动词）'],
  ['这对我来说很难','Das ist schwer für mich ✓','用 für + 第四格']
 ],
 note:'另一个重灾区：<strong>「是」不要滥用</strong>。中文「我是学生」是 Ich bin Student；但「我觉得累」不能说 Ich bin müde 之外的 Ich bin 累。德语说感受多用 <strong>Mir ist ...</strong> 或 <strong>Ich habe ...</strong>。'},

{id:'L24', lv:'A2', t:'反身动词：动作弹回自己', s:'Reflexive Verben', core:'动作回到自己身上时，要加一个「反身代词」，而且它<strong>像人称代词一样跟着变</strong>。',
 rows:[
  ['第四格反身','mich / dich / sich / uns / euch / sich','Ich freue <strong>mich</strong>. 我很高兴'],
  ['第三格反身','mir / dir / sich / uns / euch / sich','Ich wasche <strong>mir</strong> die Hände. 我洗手'],
  ['高频反身动词','sich freuen / sich interessieren für / sich treffen / sich erholen / sich beeilen','']
 ],
 note:'怎么判断用第四格还是第三格反身代词？<strong>句子里已经有第四格宾语了，反身代词就用第三格</strong>。Ich wasche mich（没别的宾语→四格）；Ich wasche mir die Hände（die Hände 是四格→反身用三格）。'}
];

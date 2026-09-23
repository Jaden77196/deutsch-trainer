/* ============================================================
   语法知识点 A2 / B1：讲义 + 练习 合体
   ============================================================ */
window.CONTENT_TOPICS_B = [

{id:'T16', lv:'A2', t:'完成时：默认 haben，只有一种情况用 sein', s:'Perfekt: haben oder sein',
 core:'口语里说过去几乎都用完成时。拿不准就用 <strong>haben</strong>——只有「移动」或「状态改变」的动词才用 sein。',
 rows:[
  ['配 sein','表示移动或状态变化','gehen 走 · kommen 来 · fahren 乘车 · fliegen 飞 · aufstehen 起床 · einschlafen 入睡 · sterben 死'],
  ['必须记住的三个例外','不移动但也配 sein','sein 是 · bleiben 停留 · werden 变成'],
  ['其他全部','配 haben','essen · trinken · lesen · kaufen · machen · arbeiten …'],
  ['公式','haben/sein 占第二位 + 过去分词在末尾','Ich habe Deutsch gelernt.']
 ],
 egs:[['Ich habe Deutsch gelernt.','我学了德语。'],['Wir sind nach Berlin gefahren.','我们去了柏林。']],
 note:'背一个小故事串住 sein 家族：<strong>「来了、走了、飞了、起来了、睡着了、死了、留下了、变了」</strong>——全是位置或状态发生变化的。',
 items:[
  {q:'Ich ___ gestern Deutsch gelernt.', a:'habe', opts:['habe','bin','hatte'], why:'lernen 配 haben。'},
  {q:'Wir ___ nach Berlin gefahren.', a:'sind', opts:['haben','sind','waren'], why:'fahren 表示移动 → sein。'},
  {q:'Er ___ einen Kaffee getrunken.', a:'hat', opts:['hat','ist','hatte'], why:'trinken 配 haben。'},
  {q:'Sie ___ um sieben aufgestanden.', a:'ist', opts:['hat','ist','sind'], why:'aufstehen 是状态改变 → sein。'},
  {q:'Ich ___ das Buch gelesen.', a:'habe', opts:['habe','bin','hatte'], why:'lesen 配 haben。'},
  {q:'___ du schon gegessen?', a:'Hast', opts:['Hast','Bist','Hattest'], why:'essen 配 haben；一般疑问句动词提前。'},
  {q:'Wir ___ gestern zu Hause geblieben.', a:'sind', opts:['haben','sind','waren'], why:'bleiben 是必须单独记的例外，配 sein。'},
  {q:'Er ___ mir geholfen.', a:'hat', opts:['hat','ist','hatte'], why:'helfen 配 haben。'}
 ]},

{id:'T17', lv:'A2', t:'过去分词怎么造', s:'Partizip II',
 core:'规则动词：<strong>ge + 词干 + t</strong>。强变化动词要单独背，多数是 <strong>ge + 词干 + en</strong>，而且词干元音会变。',
 rows:[
  ['规则','ge + 词干 + t','machen → gemacht · kaufen → gekauft'],
  ['强变化','ge + 词干(变音) + en','sprechen → gesprochen · trinken → getrunken'],
  ['前缀 be-/ver-/er- 不可分','<strong>不加 ge</strong>','besuchen → besucht · verstehen → verstanden'],
  ['可分动词','ge 插在<strong>前缀和词干中间</strong>','aufstehen → aufgestanden · einkaufen → eingekauft']
 ],
 egs:[['Ich habe das Museum besucht.','我参观了博物馆。'],['Er ist um sieben aufgestanden.','他七点起床的。']],
 note:'最容易错的是<strong>可分动词</strong>：ge 不是加在最前面，而是<strong>插进前缀后面</strong>——auf<strong>ge</strong>standen，不是 geaufstanden。',
 items:[
  {q:'machen → Ich habe das ___.', a:'gemacht', opts:['gemacht','gemachtet','machen'], why:'规则：ge + mach + t。'},
  {q:'sprechen → Er hat Deutsch ___.', a:'gesprochen', opts:['gesprecht','gesprochen','gesprechen'], why:'强变化，元音 e → o，词尾 -en。'},
  {q:'besuchen → Wir haben Museen ___.', a:'besucht', opts:['gebesucht','besucht','besuchen'], why:'be- 前缀不可分，不加 ge。'},
  {q:'verstehen → Ich habe das ___.', a:'verstanden', opts:['geverstanden','verstanden','verstehte'], why:'ver- 前缀不可分，不加 ge。'},
  {q:'fahren → Wir sind nach Köln ___.', a:'gefahren', opts:['gefahrt','gefahren','gefuhren'], why:'强变化，词尾 -en。'},
  {q:'essen → Ich habe Reis ___.', a:'gegessen', opts:['geesst','gegessen','gegesset'], why:'强变化：essen → gegessen。'},
  {q:'trinken → Er hat Wasser ___.', a:'getrunken', opts:['getrinkt','getrunken','getrankt'], why:'强变化：trinken → getrunken。'},
  {q:'aufstehen → Ich bin früh ___.', a:'aufgestanden', opts:['geaufstanden','aufgestanden','aufstehen'], why:'可分动词：ge 插在前缀 auf 后面。'}
 ]},

{id:'T18', lv:'A2', t:'过去时：war / hatte / 情态动词', s:'Präteritum',
 core:'口语里一般动词用完成时，但有三类词例外，说过去时更自然：<strong>sein、haben、所有情态动词</strong>。',
 rows:[
  ['sein','war · warst · war · waren · wart · waren','Ich war müde.'],
  ['haben','hatte · hattest · hatte · hatten · hattet · hatten','Ich hatte Zeit.'],
  ['können','konnte','注意丢掉变音'],
  ['müssen','musste',''],
  ['wollen','wollte',''],
  ['dürfen','durfte','']
 ],
 egs:[['Ich war gestern zu Hause.','我昨天在家。'],['Er konnte nicht kommen.','他没法来。']],
 note:'情态动词的过去时有个小陷阱：<strong>变音全丢</strong>。können → konnte（不是 könnte），müssen → musste（不是 müsste）。带变音的 <strong>könnte / müsste 是虚拟式</strong>，是另一个意思。',
 items:[
  {q:'Ich ___ gestern müde.', a:'war', opts:['war','ist','hatte'], why:'sein 的过去时：war / warst / war / waren / wart / waren。'},
  {q:'Wir ___ damals in Berlin.', a:'waren', opts:['waren','sind','hatten'], why:'wir 用 waren。'},
  {q:'Ich ___ keine Zeit.', a:'hatte', opts:['hatte','war','habe'], why:'haben 的过去时：hatte / hattest / hatte / hatten / hattet / hatten。'},
  {q:'Er ___ nicht kommen.', a:'konnte', opts:['konnte','kann','könnte'], why:'können 的过去时是 konnte，丢掉变音。'},
  {q:'Ich ___ gestern arbeiten.', a:'musste', opts:['musste','muss','müsste'], why:'müssen 的过去时是 musste。'},
  {q:'Sie ___ nach Hause gehen.', a:'wollte', opts:['wollte','will','wolltest'], why:'wollen 的过去时是 wollte。'},
  {q:'Als Kind ___ ich nicht schwimmen.', a:'konnte', opts:['konnte','kann','könnte'], why:'说过去的能力，用 konnte。'},
  {q:'Wir ___ viel Spaß.', a:'hatten', opts:['hatten','waren','haben'], why:'「我们有乐趣」用 haben 的过去时 hatten。'}
 ]},

{id:'T19', lv:'A2', t:'可分动词：前缀飞到句尾', s:'Trennbare Verben',
 core:'主句里，可分动词的<strong>前缀永远被甩到句子最末尾</strong>。',
 rows:[
  ['aufstehen','Ich stehe um sieben <strong>auf</strong>.','我七点起床'],
  ['einkaufen','Wir kaufen heute <strong>ein</strong>.','我们今天购物'],
  ['anrufen','Ich rufe dich später <strong>an</strong>.','我晚点打给你'],
  ['zumachen','Mach bitte die Tür <strong>zu</strong>!','请把门关上']
 ],
 egs:[['Der Zug fährt um acht ab.','火车八点出发。'],['Ich mache den Fernseher an.','我打开电视。']],
 note:'怎么判断能不能分？<strong>看前缀重不重读。</strong>重读的能分（<strong>AUF</strong>stehen、<strong>EIN</strong>kaufen）；不重读的不能分（be<strong>SU</strong>chen、ver<strong>STE</strong>hen）——这类加 ge 时也不加 ge-。',
 items:[
  {q:'Ich ___ um sieben ___. (aufstehen)', a:'stehe / auf', opts:['stehe / auf','aufstehe / —','stehe / an'], why:'可分，前缀 auf 飞到句尾。'},
  {q:'Er ___ den Fernseher ___. (anmachen)', a:'macht / an', opts:['macht / an','anmacht / —','macht / auf'], why:'可分，an 到句尾。'},
  {q:'Wir ___ heute ___. (einkaufen)', a:'kaufen / ein', opts:['kaufen / ein','einkaufen / —','kaufen / aus'], why:'可分。'},
  {q:'Bitte ___ Sie das Fenster ___. (zumachen)', a:'machen / zu', opts:['machen / zu','zumachen / —','machen / ab'], why:'可分。'},
  {q:'Ich ___ meine Freundin ___. (anrufen)', a:'rufe / an', opts:['rufe / an','anrufe / —','rufe / auf'], why:'可分。'},
  {q:'Der Zug ___ um acht ___. (abfahren)', a:'fährt / ab', opts:['fährt / ab','abfährt / —','fährt / an'], why:'可分。'},
  {q:'___ du bitte ___? (mitkommen)', a:'Kommst / mit', opts:['Kommst / mit','Mitkommst / —','Kommst / an'], why:'一般疑问句动词提前，前缀仍在句尾。'},
  {q:'Ich ___ heute nicht ___. (mitkommen)', a:'komme / mit', opts:['komme / mit','mitkomme / —','komme / an'], why:'前缀 mit 始终在末尾。'}
 ]},

{id:'T20', lv:'A2', t:'从句：动词滚到最后', s:'Nebensatz',
 core:'见到 <strong>dass / weil / wenn / obwohl / ob</strong>，从句里的动词就搬家到<strong>整句最末尾</strong>。',
 rows:[
  ['dass 那','Ich weiß, dass er morgen <strong>kommt</strong>.','我知道他明天来'],
  ['weil 因为','Ich bleibe zu Hause, weil es <strong>regnet</strong>.','我待在家，因为下雨'],
  ['wenn 如果/当','Wenn du Zeit <strong>hast</strong>, komm vorbei.','你有空就过来'],
  ['obwohl 虽然','Er arbeitet, obwohl er müde <strong>ist</strong>.','他虽然累还在工作'],
  ['带情态动词时','情态动词在末尾，主要动词在它前面','weil sie arbeiten <strong>will</strong>']
 ],
 egs:[['Ich weiß, dass er morgen kommt.','我知道他明天来。'],['Sie lernt Deutsch, weil sie in Berlin arbeiten will.','她学德语，因为她想在柏林工作。']],
 note:'这是德语和中文差别最大的地方。记住一个画面：<strong>从句像是被「倒过来」说的</strong>，动词收尾。从句和主句之间永远有逗号。',
 items:[
  {q:'Ich weiß, dass er morgen ___.', a:'kommt', opts:['kommt','kommen','er kommt'], why:'dass 从句，动词到末尾。'},
  {q:'Ich bleibe zu Hause, weil ich krank ___.', a:'bin', opts:['bin','ist','bin ich'], why:'weil 从句，动词 bin 到末尾。'},
  {q:'___, kommst du zu mir? (如果)', a:'Wenn du Zeit hast', opts:['Wenn du Zeit hast','Wenn hast du Zeit','Wenn du hast Zeit'], why:'wenn 从句里动词 hast 到末尾。'},
  {q:'Er sagt, dass er keine Zeit ___.', a:'hat', opts:['hat','haben','hat er'], why:'dass 从句，hat 到末尾。'},
  {q:'Sie lernt Deutsch, weil sie in Berlin ___ will.', a:'arbeiten', opts:['arbeitet','arbeiten','arbeitet sie'], why:'情态动词在末尾，主要动词在它前面。'},
  {q:'Ich weiß nicht, ob er ___.', a:'kommt', opts:['kommt','kommen','er kommt'], why:'ob（是否）引导的从句也是动词到末尾。'},
  {q:'___, gehe ich nicht zur Arbeit. (因为下雨)', a:'Weil es regnet', opts:['Weil es regnet','Weil regnet es','Weil es regnen'], why:'weil 从句动词 regnet 到末尾。'},
  {q:'Er arbeitet viel, obwohl er müde ___.', a:'ist', opts:['ist','ist er','sein'], why:'obwohl 从句，动词到末尾。'}
 ]},

{id:'T21', lv:'A2', t:'形容词词尾：默认 -en，只有三处例外', s:'Adjektivendungen',
 core:'这是德语最臭名昭著的表。但用「<strong>默认值 + 例外</strong>」的思路，你只需要记三行。',
 rows:[
  ['默认 → -en','几乎所有复数、所有第三格、所有第二格、阳性第四格','die alten Männer · mit dem alten Mann · den alten Mann'],
  ['例外一 → -e','定冠词 + 单数','der alte Mann · die alte Frau · das alte Haus'],
  ['例外二 → -er','不定冠词 + 阳性主格','ein alter Mann'],
  ['例外三 → -es','不定冠词 + 中性主格/第四格','ein altes Haus']
 ],
 egs:[['Der alte Mann wartet.','那位老人在等。'],['Ein alter Mann wartet.','一位老人在等。'],['Ich sehe den alten Mann.','我看见那位老人。']],
 note:'背后的逻辑只有一句：<strong>冠词已经把性别说清楚了，形容词就偷懒用 -e/-en；冠词没说清楚的（ein 看不出阳性还是中性），形容词就自己扛起 -er/-es。</strong>理解这句，就不用背表了。',
 items:[
  {q:'Der ___ Mann ist mein Nachbar. (alt)', a:'alte', opts:['alt','alte','alten'], why:'定冠词 + 单数 → -e。'},
  {q:'Die ___ Frau ist Lehrerin. (jung)', a:'junge', opts:['jung','junge','jungen'], why:'定冠词 + 单数 → -e。'},
  {q:'Das ___ Kind spielt. (klein)', a:'kleine', opts:['klein','kleine','kleines'], why:'定冠词 + 单数 → -e。'},
  {q:'Ein ___ Mann wartet. (alt)', a:'alter', opts:['alt','alter','altes'], why:'ein 看不出性别 → 形容词自己扛 -er。'},
  {q:'Ein ___ Kind spielt. (klein)', a:'kleines', opts:['klein','kleine','kleines'], why:'ein 看不出中性 → 形容词自己扛 -es。'},
  {q:'Ich sehe den ___ Mann. (alt)', a:'alten', opts:['alte','alten','altem'], why:'阳性第四格属于「默认」→ -en。'},
  {q:'Ich habe eine ___ Wohnung. (groß)', a:'große', opts:['groß','große','großen'], why:'eine 已显示阴性 → 形容词用 -e。'},
  {q:'Die ___ Männer arbeiten. (alt)', a:'alten', opts:['alte','alten','alter'], why:'复数属于「默认」→ -en。'}
 ]},

{id:'T22', lv:'A2', t:'命令式：三步造出来', s:'Imperativ',
 core:'对谁说，就按那个人的规则改。<strong>不需要额外记新形式</strong>——都是现有形式的删减。',
 rows:[
  ['对 du（熟人）','去掉 -st，去掉 du','du machst → <strong>Mach!</strong> · du kommst → <strong>Komm!</strong>'],
  ['对 ihr（一群人）','去掉 -t','ihr macht → <strong>Macht!</strong>'],
  ['对 Sie（尊称）','动词原形 + Sie，语序倒过来','<strong>Machen Sie!</strong> · <strong>Kommen Sie!</strong>'],
  ['提建议（我们）','动词 + wir','<strong>Gehen wir!</strong> 我们去吧']
 ],
 egs:[['Mach die Tür zu!','把门关上！'],['Kommen Sie bitte herein.','请您进来。']],
 note:'对 du 的命令式里，<strong>词干元音 e→i/ie 的动词保留变化</strong>：du nimmst → <strong>Nimm!</strong>（不是 Nehm!）、du liest → <strong>Lies!</strong>、du gibst → <strong>Gib!</strong>',
 items:[
  {q:'___ die Tür zu! (du zumachen)', a:'Mach', opts:['Mach','Machst','Machen'], why:'对 du：去掉 -st，去掉 du → Mach!（加语气词 bitte 更礼貌）'},
  {q:'___ mir bitte! (du helfen)', a:'Hilf', opts:['Hilf','Helf','Hilfst'], why:'e→i 的动词保留变化：du hilfst → Hilf!'},
  {q:'___ Sie bitte herein! (kommen)', a:'Kommen', opts:['Kommen','Komm','Kommst'], why:'对 Sie：动词原形 + Sie。'},
  {q:'___ das Buch! (du lesen)', a:'Lies', opts:['Lies','Les','Liest'], why:'e→ie 的动词保留变化：du liest → Lies!'},
  {q:'___ bitte langsamer! (ihr sprechen)', a:'Sprecht', opts:['Sprecht','Sprich','Sprechen'], why:'对 ihr：去掉 -t → Sprecht!'},
  {q:'___ wir nach Hause! (gehen)', a:'Gehen', opts:['Gehen','Geht','Geh'], why:'提建议用 动词 + wir。'},
  {q:'___ mir das Buch! (du geben)', a:'Gib', opts:['Gib','Geb','Gibst'], why:'e→i：du gibst → Gib!'},
  {q:'___ Sie mir bitte! (helfen)', a:'Helfen', opts:['Helfen','Hilf','Helfen Sie mir'], why:'对 Sie 用原形 + Sie，不用变音。'}
 ]},

{id:'T23', lv:'A2', t:'比较级与最高级', s:'Komparativ und Superlativ',
 core:'和英语几乎一样，只是词尾不同：比较级加 <strong>-er</strong>，最高级 <strong>am -sten</strong>。',
 rows:[
  ['原级','schnell 快','so schnell wie 和…一样快'],
  ['比较级','schnell<strong>er</strong> 更快','schneller <strong>als</strong> du 比你快'],
  ['最高级','am schnell<strong>sten</strong> 最快',''],
  ['常用不规则','gut → besser → am besten','viel → mehr → am meisten · gern → lieber → am liebsten']
 ],
 egs:[['Der Zug ist schneller als der Bus.','火车比公交快。'],['Ich trinke lieber Kaffee.','我更爱喝咖啡。']],
 note:'<strong>als 是「比」，wie 是「和…一样」</strong>，别混。「gern 的比较级」特别好用：Ich trinke gern Tee（我喜欢喝茶）→ Ich trinke <strong>lieber</strong> Kaffee（我更爱喝咖啡）。',
 items:[
  {q:'Der Zug ist ___ als der Bus. (schnell)', a:'schneller', opts:['schnell','schneller','am schnellsten'], why:'比较级加 -er。'},
  {q:'Er ist ___ als ich. (groß)', a:'größer', opts:['großer','größer','am größten'], why:'单音节形容词常加变音：groß → größer。'},
  {q:'Das ist ___ Film, den ich kenne. (gut)', a:'der beste', opts:['der gute','der bessere','der beste'], why:'gut 的最高级是不规则的 beste。'},
  {q:'Ich trinke ___ Tee als Kaffee. (gern)', a:'lieber', opts:['gerner','lieber','am liebsten'], why:'gern 的比较级是 lieber。'},
  {q:'Sie ist ___ als ihre Schwester. (alt)', a:'älter', opts:['alter','älter','am ältesten'], why:'alt → älter，加变音。'},
  {q:'Berlin ist ___ als München. (groß)', a:'größer', opts:['großer','größer','größte'], why:'比较级 -er + 变音。'},
  {q:'Am ___ gehe ich schwimmen. (gern)', a:'liebsten', opts:['gernsten','liebsten','meisten'], why:'gern 的最高级是 am liebsten。'},
  {q:'Das ist genauso ___ wie das andere. (teuer)', a:'teuer', opts:['teuer','teurer','am teuersten'], why:'「和…一样」用 so ... wie，中间用原级。'}
 ]},

{id:'T24', lv:'A2', t:'反身动词：动作弹回自己', s:'Reflexive Verben',
 core:'动作回到自己身上时，要加一个「反身代词」，它<strong>像人称代词一样跟着人称变</strong>。',
 rows:[
  ['第四格反身','mich · dich · sich · uns · euch · sich','Ich freue <strong>mich</strong>. 我很高兴'],
  ['第三格反身','mir · dir · sich · uns · euch · sich','Ich wasche <strong>mir</strong> die Hände. 我洗手'],
  ['高频反身动词','sich freuen 高兴 · sich interessieren für 对…感兴趣 · sich treffen 见面 · sich erholen 休养 · sich beeilen 赶紧','']
 ],
 egs:[['Ich freue mich auf den Urlaub.','我期待假期。'],['Beeilt euch!','你们快点！']],
 note:'怎么判断用第四格还是第三格反身代词？<strong>句子里已经有第四格宾语了，反身代词就用第三格。</strong>Ich wasche mich（没别的宾语 → 四格）；Ich wasche <strong>mir</strong> die Hände（die Hände 是四格 → 反身用三格）。',
 items:[
  {q:'Ich freue ___ auf den Urlaub.', a:'mich', opts:['mich','mir','sich'], why:'ich 的反身代词是 mich（第四格）。'},
  {q:'Wie fühlst du ___?', a:'dich', opts:['dich','dir','sich'], why:'du 配 dich。'},
  {q:'Er interessiert ___ für Musik.', a:'sich', opts:['sich','ihm','ihn'], why:'er/sie/es 的反身代词都是 sich。'},
  {q:'Wir treffen ___ um acht.', a:'uns', opts:['uns','euch','sich'], why:'wir 配 uns。'},
  {q:'Beeilt ___ bitte!', a:'euch', opts:['euch','uns','sich'], why:'ihr 配 euch。'},
  {q:'Ich muss ___ noch duschen.', a:'mich', opts:['mich','mir','sich'], why:'sich duschen，ich 用 mich。'},
  {q:'Ich wasche ___ die Hände.', a:'mir', opts:['mich','mir','sich'], why:'die Hände 已经是第四格宾语 → 反身代词用第三格 mir。'},
  {q:'Sie (复数) freuen ___ auf das Fest.', a:'sich', opts:['sich','sie','ihnen'], why:'第三人称复数反身代词仍是 sich。'}
 ]},

{id:'T25', lv:'A2', t:'人称代词的三格和四格', s:'Personalpronomen',
 core:'人称代词也有格的变化。<strong>只有 er 和 du/ich 变化明显</strong>，其他多数第二、三格长得像。',
 rows:[
  ['第一格','ich · du · er · sie · es · wir · ihr · sie · Sie','谁在做'],
  ['第四格','mich · dich · <strong>ihn</strong> · sie · es · uns · euch · sie · Sie','动作落在谁身上'],
  ['第三格','mir · dir · <strong>ihm</strong> · <strong>ihr</strong> · ihm · uns · euch · <strong>ihnen</strong> · Ihnen','给谁']
 ],
 egs:[['Ich sehe ihn.','我看见他。'],['Ich helfe ihm.','我帮他。']],
 note:'最容易混的两组：<strong>er → ihn（四格）/ ihm（三格）</strong>；<strong>sie（她）→ sie（四格）/ ihr（三格）</strong>。另外复数「他们」的第三格是 <strong>ihnen</strong>，别和 ihr 搞混。',
 items:[
  {q:'Ich sehe ___. (er)', a:'ihn', opts:['er','ihn','ihm'], why:'er 的第四格是 ihn。'},
  {q:'Ich helfe ___. (er)', a:'ihm', opts:['ihn','ihm','ihr'], why:'helfen 配第三格 → ihm。'},
  {q:'Ich sehe ___. (sie 她)', a:'sie', opts:['sie','ihr','ihn'], why:'sie（她）第四格不变，仍是 sie。'},
  {q:'Ich danke ___. (sie 她)', a:'ihr', opts:['sie','ihr','ihm'], why:'danken 配第三格，sie（她）→ ihr。'},
  {q:'Kannst du ___ helfen? (ich)', a:'mir', opts:['mich','mir','ich'], why:'helfen 配第三格 → mir。'},
  {q:'Ich rufe ___ morgen an. (du)', a:'dich', opts:['du','dich','dir'], why:'anrufen 支配第四格 → dich。'},
  {q:'Ich gebe ___ das Buch. (sie 复数)', a:'ihnen', opts:['sie','ihnen','ihr'], why:'复数「他们」的第三格是 ihnen。'},
  {q:'Ich sehe ___. (wir)', a:'uns', opts:['wir','uns','euch'], why:'wir 的第四格是 uns（和第三格同形）。'}
 ]},

{id:'T26', lv:'A2', t:'时间介词：am / im / um / vor / nach / seit', s:'Zeitpräpositionen',
 core:'说时间用哪个介词，<strong>看后面跟的是什么类型的时间词</strong>，规则很死。',
 rows:[
  ['am','+ 星期、日期、一天中的时段','am Montag · am 3. Mai · am Abend'],
  ['im','+ 月份、季节、年份','im Mai · im Sommer · im Jahr 2026'],
  ['um','+ 钟点','um acht Uhr'],
  ['vor','+ 第三格，在…之前','vor dem Essen 饭前'],
  ['nach','+ 第三格，在…之后','nach der Arbeit 下班后'],
  ['seit','+ 第三格，自从','seit einer Woche 一周以来']
 ],
 egs:[['Am Montag habe ich frei.','周一我休息。'],['Nach der Arbeit gehe ich einkaufen.','下班后我去买东西。']],
 note:'三个最容易错的：<strong>am Abend 但 in der Nacht</strong>（夜晚用 in）；<strong>im Jahr 2026 但 2026 单独说时不用介词</strong>；<strong>seit 后面必须是第三格</strong>，而且它只能配现在还持续的事。',
 items:[
  {q:'___ Montag habe ich frei.', a:'Am', opts:['Am','Im','Um'], why:'星期前用 am。'},
  {q:'___ Sommer fahren wir ans Meer.', a:'Im', opts:['Am','Im','Um'], why:'季节前用 im。'},
  {q:'Der Kurs beginnt ___ acht Uhr.', a:'um', opts:['am','im','um'], why:'钟点前用 um。'},
  {q:'___ der Arbeit gehe ich nach Hause.', a:'Nach', opts:['Vor','Nach','Seit'], why:'nach + 第三格 = 之后。'},
  {q:'Ich lerne ___ einem Jahr Deutsch.', a:'seit', opts:['vor','nach','seit'], why:'seit + 第三格 = 自从（持续至今）。'},
  {q:'___ dem Essen trinken wir Kaffee.', a:'Nach', opts:['Nach','Seit','Um'], why:'饭后 → nach dem Essen。'},
  {q:'___ Mai ist es warm.', a:'Im', opts:['Am','Im','Um'], why:'月份前用 im。'},
  {q:'___ Abend sehe ich fern.', a:'Am', opts:['Am','Im','Um'], why:'一天中的时段用 am（但 in der Nacht 是例外）。'}
 ]},

{id:'T27', lv:'B1', t:'虚拟式 II：客气话的万能公式', s:'Konjunktiv II',
 core:'两个用途：让请求<strong>变客气</strong>，说<strong>非现实的假设</strong>。靠几个固定词就能全部搞定。',
 rows:[
  ['würde + 原形','最万能，任何动词都能用','Ich würde gern mitkommen. 我很乐意一起来'],
  ['hätte','haben 的虚拟式','Ich hätte gern einen Kaffee. 我想要杯咖啡'],
  ['wäre','sein 的虚拟式','Das wäre schön. 那就太好了'],
  ['könnte','können 的虚拟式','Könnten Sie mir helfen? 您能帮我吗'],
  ['非现实假设','wenn + 虚拟式','Wenn ich Zeit hätte, käme ich mit. 如果我有时间就来了']
 ],
 egs:[['Könnten Sie das wiederholen?','您能重复一遍吗？'],['An deiner Stelle würde ich mehr lernen.','我要是你就多学点。']],
 note:'最实用的一条：<strong>把 Können 换成 Könnten，礼貌程度立刻上一个台阶。</strong>德国人问路、点单、提要求几乎都用 Könnten。注意它和过去时 konnte 只差一个变音，意思完全不同。',
 items:[
  {q:'___ Sie mir bitte helfen?', a:'Könnten', opts:['Können','Könnten','Konnten'], why:'Könnten 比 Können 客气得多。'},
  {q:'Ich ___ gern ein Zimmer reservieren.', a:'würde', opts:['werde','würde','wurde'], why:'würde + 不定式是最常用的委婉表达。'},
  {q:'Wenn ich Zeit ___, käme ich mit.', a:'hätte', opts:['hatte','hätte','habe'], why:'hätte 是 haben 的虚拟式。'},
  {q:'Wenn ich reich ___, würde ich reisen.', a:'wäre', opts:['war','wäre','bin'], why:'wäre 是 sein 的虚拟式。'},
  {q:'Ich ___ lieber Tee als Kaffee.', a:'hätte', opts:['habe','hätte','hatte'], why:'hätte gern / hätte lieber 是表达偏好的黄金句型。'},
  {q:'An deiner Stelle ___ ich mehr lernen.', a:'würde', opts:['werde','würde','wurde'], why:'「如果我是你」用 würde。'},
  {q:'___ es möglich, dass Sie später kommen?', a:'Wäre', opts:['War','Wäre','Ist'], why:'Wäre es möglich... 是礼貌询问「有可能……吗」。'},
  {q:'___ Sie mir den Weg zeigen?', a:'Könnten', opts:['Können','Könnten','Konnten'], why:'问路时用 Könnten 礼貌很多。'}
 ]},

{id:'T28', lv:'B1', t:'连接词分三类，语序各不同', s:'Konnektoren',
 core:'拿到一个连接词，先问：<strong>它占不占句首的位置？</strong>三类词的语序完全不同。',
 rows:[
  ['不占位置','und · aber · oder · denn','语序完全不变'],
  ['占第一位','deshalb 所以 · trotzdem 尽管如此 · dann 然后 · also 因此','动词紧随其后，主语后移'],
  ['引导从句','weil 因为 · obwohl 虽然 · dass 那 · wenn 如果','动词滚到从句末尾']
 ],
 egs:[['Es regnet, deshalb bleibe ich zu Hause.','下雨，所以我待在家。'],['Ich bleibe zu Hause, weil es regnet.','我待在家，因为下雨。']],
 note:'同一个意思，用 deshalb 和用 weil，句子结构完全相反：<strong>deshalb 后面动词紧跟，weil 后面动词垫底。</strong>记住这一对，这一类就通了。',
 items:[
  {q:'Es regnet, ___ ich bleibe zu Hause.', a:'deshalb', opts:['deshalb','weil','und'], why:'deshalb 占第一位，后面紧跟动词，主语后移。'},
  {q:'Ich bleibe zu Hause, ___ es regnet.', a:'weil', opts:['deshalb','weil','aber'], why:'weil 引导从句，动词 regnet 去末尾。'},
  {q:'Es regnet, ___ gehe ich spazieren.', a:'trotzdem', opts:['trotzdem','weil','deshalb'], why:'trotzdem 表让步，占第一位，动词第二位。'},
  {q:'Ich mag Tee, ___ ich trinke lieber Kaffee.', a:'aber', opts:['aber','deshalb','weil'], why:'aber 是并列连词，不占位置。'},
  {q:'Er ist müde, ___ er arbeitet weiter.', a:'obwohl', opts:['obwohl','deshalb','und'], why:'obwohl 引导从句，动词去末尾。'},
  {q:'Zuerst esse ich, ___ gehe ich zur Arbeit.', a:'dann', opts:['dann','weil','obwohl'], why:'dann 占第一位，动词紧随其后。'},
  {q:'Ich lerne Deutsch, ___ ich in Berlin arbeiten will.', a:'weil', opts:['weil','deshalb','aber'], why:'表原因的从句用 weil，动词到末尾。'},
  {q:'Er hat viel gelernt, ___ hat er die Prüfung bestanden.', a:'deshalb', opts:['deshalb','obwohl','aber'], why:'前因后果用 deshalb，并引起主谓倒装。'}
 ]},

{id:'T29', lv:'B1', t:'关系从句：性别跟名词，格看成分', s:'Relativsatz',
 core:'两个判断：关系代词的<strong>性别和单复数跟着前面那个名词</strong>，<strong>格看它在从句里干什么活儿</strong>。',
 rows:[
  ['做主语','第一格','Der Mann, <strong>der</strong> dort steht, … 站在那儿的男人'],
  ['做第四格宾语','第四格','Die Frau, <strong>die</strong> ich traf, … 我遇到的那位女士'],
  ['做第三格宾语','第三格','Der Freund, <strong>dem</strong> ich helfe, … 我帮的那位朋友'],
  ['带介词','介词决定格','Die Stadt, in <strong>der</strong> ich wohne, … 我住的城市']
 ],
 egs:[['Das Buch, das ich lese, ist spannend.','我在读的这本书很精彩。'],['Der Kollege, mit dem ich arbeite, ist nett.','跟我共事的同事人很好。']],
 note:'别忘了从句的老规矩：<strong>动词去末尾</strong>。「Der Mann, der dort <strong>steht</strong>」——steht 在最末尾。上面例子里逗号后的部分整个是修饰语，插在句子中间。',
 items:[
  {q:'Der Mann, ___ dort steht, ist mein Chef.', a:'der', opts:['der','den','dem'], why:'Mann 阳性，在从句里做主语 → 第一格 der。'},
  {q:'Die Frau, ___ ich gestern traf, ist Ärztin.', a:'die', opts:['die','der','den'], why:'Frau 阴性，做第四格宾语 → die（阴性四格同形）。'},
  {q:'Das Buch, ___ ich lese, ist spannend.', a:'das', opts:['das','den','dem'], why:'Buch 中性，第四格 → das。'},
  {q:'Der Freund, ___ ich helfe, wohnt hier.', a:'dem', opts:['der','den','dem'], why:'helfen 支配第三格 → 阳性第三格 dem。'},
  {q:'Die Stadt, in ___ ich wohne, ist schön.', a:'der', opts:['die','der','dem'], why:'in + 在哪里 → 第三格，Stadt 阴性 → der。'},
  {q:'Der Kollege, mit ___ ich arbeite, ist nett.', a:'dem', opts:['der','den','dem'], why:'mit 固定第三格 → dem。'},
  {q:'Die Kinder, ___ im Garten spielen, sind laut.', a:'die', opts:['die','den','der'], why:'复数第一格 → die。'},
  {q:'Das Haus, ___ wir gekauft haben, ist alt.', a:'das', opts:['das','dem','den'], why:'中性第四格 → das。'}
 ]},

{id:'T30', lv:'B1', t:'被动语态：werden + 过去分词', s:'Passiv',
 core:'公式只有一个：<strong>werden + 过去分词</strong>。过去时换成 wurde，其余不变。',
 rows:[
  ['现在时','Das Haus <strong>wird</strong> gebaut.','这房子在建'],
  ['过去时','Das Haus <strong>wurde</strong> gebaut.','这房子（当时）在建'],
  ['带情态动词','Das Haus <strong>muss</strong> gebaut <strong>werden</strong>.','这房子必须建'],
  ['施动者用 von','Das wurde <strong>von</strong> meinem Vater repariert.','这是我爸修的']
 ],
 egs:[['Hier wird Deutsch gesprochen.','这里说德语。'],['Die Briefe werden jeden Tag gebracht.','信件每天送来。']],
 note:'口语里德国人更爱用 <strong>man</strong> 代替被动：不用「Das wird gemacht」，直接说「<strong>Man macht das</strong>」，意思一样还省事。但书面语和考试要能看懂被动。',
 items:[
  {q:'Das Haus ___ 1990 gebaut.', a:'wurde', opts:['wurde','wird','ward'], why:'过去时的被动：wurde + 过去分词。'},
  {q:'Die Briefe ___ jeden Tag gebracht.', a:'werden', opts:['werden','wird','wurden'], why:'复数主语用 werden（现在时被动）。'},
  {q:'Das Auto ___ von meinem Vater repariert.', a:'wurde', opts:['wurde','wird','war'], why:'被动 + von 引出施动者。'},
  {q:'Hier ___ Deutsch gesprochen.', a:'wird', opts:['wird','werden','wurde'], why:'单数主语，现在时被动 → wird。'},
  {q:'Die Prüfung ___ nächste Woche geschrieben.', a:'wird', opts:['wird','werden','wurde'], why:'将来发生的被动，用现在时被动表达即可。'},
  {q:'Das Problem ___ schnell gelöst.', a:'wurde', opts:['wurde','wird','war'], why:'已完成的被动动作 → wurde。'},
  {q:'In Deutschland ___ viel Bier getrunken.', a:'wird', opts:['wird','werden','wurde'], why:'Bier 不可数，视为单数 → wird。'},
  {q:'Die Kinder ___ von der Lehrerin betreut.', a:'werden', opts:['werden','wird','wurden'], why:'复数主语 + 现在时 → werden。'}
 ]},

{id:'T31', lv:'B1', t:'带 zu 的不定式：zu 插在中间', s:'Infinitiv mit zu',
 core:'很多动词后面接「<strong>zu + 原形</strong>」。可分动词的话，<strong>zu 插在前缀和词干中间</strong>。',
 rows:[
  ['普通动词','zu + 原形','Ich habe Lust, ins Kino <strong>zu gehen</strong>.'],
  ['可分动词','zu 插进中间','Ich versuche, früher <strong>aufzustehen</strong>.'],
  ['常见搭配','Lust haben 有兴趣 · Zeit haben 有时间 · versuchen 尝试 · vergessen 忘记 · bitten 请求','全都 + zu + 不定式'],
  ['对比','情态动词<strong>不带</strong> zu','Ich muss gehen.（不是 zu gehen）']
 ],
 egs:[['Ich habe keine Zeit zu kommen.','我没时间来。'],['Er hat vergessen, mich anzurufen.','他忘了给我打电话。']],
 note:'一个硬规矩：<strong>情态动词不带 zu</strong>（Ich muss gehen），<strong>普通动词要带 zu</strong>（Ich versuche zu gehen）。可分动词就把 zu 塞进去：an<strong>zu</strong>rufen、auf<strong>zu</strong>stehen。',
 items:[
  {q:'Ich habe Lust, ins Kino ___.', a:'zu gehen', opts:['zu gehen','gehen zu','zu gegangen'], why:'Lust haben + zu + 不定式。'},
  {q:'Es ist wichtig, jeden Tag ___.', a:'zu üben', opts:['zu üben','üben zu','geübt'], why:'Es ist wichtig + zu + 不定式。'},
  {q:'Ich versuche, früher ___.', a:'aufzustehen', opts:['aufzustehen','zu aufstehen','aufstehen zu'], why:'可分动词：zu 插在 auf 和 stehen 中间。'},
  {q:'Er hat vergessen, mich ___.', a:'anzurufen', opts:['anzurufen','zu anrufen','anrufen zu'], why:'可分动词 anrufen → anzurufen。'},
  {q:'Ich freue mich darauf, dich ___.', a:'zu sehen', opts:['zu sehen','sehen zu','gesehen'], why:'sich freuen auf + zu + 不定式。'},
  {q:'Sie hat keine Zeit, ___.', a:'zu kommen', opts:['zu kommen','kommen zu','gekommen'], why:'Zeit haben + zu + 不定式。'},
  {q:'Ich muss jetzt ___.', a:'gehen', opts:['zu gehen','gehen','gegangen'], why:'情态动词不带 zu。'},
  {q:'Ich bitte dich, mir ___.', a:'zu helfen', opts:['zu helfen','helfen zu','geholfen'], why:'bitten + zu + 不定式。'}
 ]},

{id:'T32', lv:'B1', t:'第二格：口语能绕就绕', s:'Genitiv',
 core:'第二格表示「谁的」，书面气重。<strong>口语里德国人几乎都用 von + 第三格代替。</strong>',
 rows:[
  ['书面 / 第二格','das Auto <strong>des</strong> Mannes','那个男人的车（阳性名词还要加 -es）'],
  ['口语 / von + 三格','das Auto <strong>von dem</strong> Mann','意思完全一样'],
  ['人名最省事','<strong>Christinas</strong> Auto','克里斯蒂娜的车（直接加 s）'],
  ['阴性中性','die Farbe <strong>der</strong> Wand · die Tür <strong>des</strong> Hauses','']
 ],
 egs:[['Das ist das Auto meines Vaters.','这是我爸爸的车。'],['Wegen des Wetters bleiben wir hier.','因为天气我们留在这儿。']],
 note:'有几个介词后面<strong>必须</strong>用第二格，躲不掉，考试也常考：<strong>wegen 因为、trotz 尽管、während 在…期间</strong>。其他场合你用 von 绕过去，德国人完全听得懂。',
 items:[
  {q:'Das ist das Auto ___ Mannes.', a:'des', opts:['des','dem','der'], why:'Mannes 是阳性第二格，冠词 des，名词加 -es。'},
  {q:'Die Farbe ___ Wand ist weiß.', a:'der', opts:['der','die','des'], why:'Wand 阴性，第二格用 der。'},
  {q:'Die Tür ___ Hauses ist offen.', a:'des', opts:['des','dem','der'], why:'Haus 中性，第二格 des。'},
  {q:'Das ist die Tasche ___ Frau.', a:'der', opts:['der','die','des'], why:'Frau 阴性，第二格 der（名词不加 -s）。'},
  {q:'Wegen ___ Wetters bleiben wir hier.', a:'des', opts:['des','dem','der'], why:'wegen 支配第二格，Wetter 中性 → des。'},
  {q:'Die Meinung ___ Leute ist wichtig.', a:'der', opts:['der','die','den'], why:'复数第二格用 der。'},
  {q:'Trotz ___ Regens gingen wir spazieren.', a:'des', opts:['des','dem','den'], why:'trotz 支配第二格。'},
  {q:'Das Ende ___ Films war traurig.', a:'des', opts:['des','dem','der'], why:'Film 阳性第二格 → des。'}
 ]},

{id:'T33', lv:'B1', t:'别逐字翻译中文', s:'Nicht wörtlich übersetzen',
 core:'很多错句不是语法不会，是<strong>把中文的词一个个搬过去</strong>。这些是最高频的翻车点。',
 rows:[
  ['我很热','Ich bin heiß ✗','Mir ist warm ✓（德语用第三格说感受）'],
  ['我喜欢','没有「喜欢」这个动词','Ich mag … / Ich … gern ✓'],
  ['我同意你','','Ich stimme dir zu ✓（zu 在末尾，可分动词）'],
  ['这对我很难','','Das ist schwer für mich ✓（für + 第四格）'],
  ['我有兴趣','','Ich habe Interesse an … ✓（不是 Interesse 单独用）']
 ],
 egs:[['Mir ist kalt.','我冷。（不是 Ich bin kalt）'],['Ich stimme dir zu.','我同意你。']],
 note:'另一个重灾区：<strong>「是」不要滥用</strong>。中文「我很累」是 Ich bin müde，但中文「我饿了」不能说 Ich bin hungrig 之外的 Ich habe Hunger——<strong>德语说身体感受多用 Mir ist … 或 Ich habe …</strong>，而不是 Ich bin …。',
 items:[
  {q:'「我很热」→ ___', a:'Mir ist warm.', opts:['Ich bin warm.','Mir ist warm.','Ich habe warm.'], why:'德语说身体感受用第三格：Mir ist warm / kalt / schlecht。'},
  {q:'「我饿了」→ ___', a:'Ich habe Hunger.', opts:['Ich bin Hunger.','Ich habe Hunger.','Mir ist Hunger.'], why:'饥饿、口渴、恐惧这类用 haben：Hunger / Durst / Angst haben。'},
  {q:'「我同意你」→ ___', a:'Ich stimme dir zu.', opts:['Ich stimme dir.', 'Ich stimme dir zu.','Ich bin einverstanden dich.'], why:'zustimmen 是可分动词，zu 必须在末尾。'},
  {q:'「我喜欢喝茶」→ ___', a:'Ich trinke gern Tee.', opts:['Ich mag trinken Tee.','Ich trinke gern Tee.','Ich bin gern Tee.'], why:'德语没有单独的「喜欢」动词，用 gern 或 mögen。'},
  {q:'「这对我来说很难」→ ___', a:'Das ist schwer für mich.', opts:['Das ist schwer zu mich.','Das ist schwer für mich.','Das ist schwer an mich.'], why:'「对某人来说」用 für + 第四格。'},
  {q:'「我冷」→ ___', a:'Mir ist kalt.', opts:['Ich bin kalt.','Mir ist kalt.','Ich habe kalt.'], why:'说「我冷」用 Mir ist kalt；Ich bin kalt 意思是「我这个人很冷淡」。'},
  {q:'「我对音乐感兴趣」→ ___', a:'Ich interessiere mich für Musik.', opts:['Ich bin interessiert Musik.','Ich interessiere mich für Musik.','Ich habe Interesse Musik.'], why:'sich interessieren für + 第四格。'},
  {q:'「这取决于天气」→ ___', a:'Das hängt vom Wetter ab.', opts:['Das kommt vom Wetter.', 'Das hängt vom Wetter ab.','Das ist vom Wetter.'], why:'abhängen von，可分动词前缀 ab 在末尾。'}
 ]}
];

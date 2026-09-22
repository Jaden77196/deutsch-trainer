/* ============================================================
   语法专项训练
   格式：{id, lv, t, why, items:[{q, a, opts, why}]}
     q    题干，用 ___ 表示空
     a    正确答案
     opts 选项（一般 3–4 个）
     why  讲解——语法题的价值就在这句
   ============================================================ */
window.CONTENT_GRAMMAR = [

{id:'g-sein', lv:'A1', t:'sein 和 haben 的现在时', s:'Präsens: sein / haben',
 why:'这两个动词是所有句子的地基，但它们是强变化，必须背熟：sein = bin / bist / ist / sind / seid / sind；haben = habe / hast / hat / haben / habt / haben。',
 items:[
  {q:'Ich ___ Student.', a:'bin', opts:['bin','bist','ist'], why:'ich 配 bin。这几乎是德语第一句话。'},
  {q:'Du ___ aus China.', a:'bist', opts:['bin','bist','seid'], why:'du 配 bist。'},
  {q:'Er ___ Lehrer.', a:'ist', opts:['ist','bist','sind'], why:'er / sie / es 都配 ist。'},
  {q:'Wir ___ aus Deutschland.', a:'sind', opts:['sind','seid','ist'], why:'wir 配 sind。'},
  {q:'Ihr ___ müde.', a:'seid', opts:['sind','seid','bist'], why:'ihr（你们）配 seid——这是最容易被忽略的一个，它和不规则的 sind 只差一个字母。'},
  {q:'Ich ___ einen Bruder.', a:'habe', opts:['habe','hat','haben'], why:'ich 配 habe。'},
  {q:'Sie ___ Zeit.', a:'hat', opts:['hat','habe','habt'], why:'sie（她）配 hat。'},
  {q:'Wir ___ zwei Kinder.', a:'haben', opts:['haben','habt','hat'], why:'wir 配 haben。'}
 ]},

{id:'g-regverb', lv:'A1', t:'规则动词现在时', s:'Regelmäßige Verben',
 why:'规则动词的词尾像模板一样固定：-e, -st, -t, -en, -t, -en。去掉词尾 -en 得到词干，再加这些词尾。',
 items:[
  {q:'Ich ___ Deutsch. (lernen)', a:'lerne', opts:['lerne','lernst','lernt'], why:'ich 加 -e。'},
  {q:'Du ___ in Berlin. (wohnen)', a:'wohnst', opts:['wohne','wohnst','wohnt'], why:'du 加 -st。'},
  {q:'Er ___ in einem Büro. (arbeiten)', a:'arbeitet', opts:['arbeite','arbeitest','arbeitet'], why:'词干以 -t 结尾时要加一个 e 再接词尾，否则读不出来：arbeit + e + t。'},
  {q:'Wir ___ nach Hamburg. (fahren)', a:'fahren', opts:['fahre','fahrt','fahren'], why:'wir 加 -en，和原形相同。'},
  {q:'Ihr ___ gern Musik. (hören)', a:'hört', opts:['höre','hört','hören'], why:'ihr 加 -t。'},
  {q:'Sie (复数) ___ Brot. (kaufen)', a:'kaufen', opts:['kauft','kaufen','kaufst'], why:'sie（他们）加 -en。'},
  {q:'Du ___ gut. (kochen)', a:'kochst', opts:['kochst','kocht','koche'], why:'du 加 -st。'},
  {q:'Ich ___ einen Brief. (schreiben)', a:'schreibe', opts:['schreibe','schreibst','schreibt'], why:'ich 加 -e。'}
 ]},

{id:'g-nom', lv:'A1', t:'第一格：主语用格', s:'Nominativ',
 why:'第一格就是「谁在做」，做主语。定冠词：der（阳）/ die（阴）/ das（中）/ die（复数）。德语名词的性别是天生的，必须和单词一起记。',
 items:[
  {q:'___ Mann liest ein Buch.', a:'Der', opts:['Der','Den','Dem'], why:'Mann 是阳性，做主语用第一格，所以 der。'},
  {q:'___ Frau arbeitet hier.', a:'Die', opts:['Die','Der','Das'], why:'Frau 是阴性，第一格用 die。'},
  {q:'___ Kind spielt im Garten.', a:'Das', opts:['Das','Der','Die'], why:'Kind 是中性，第一格用 das。'},
  {q:'___ Kinder sind müde.', a:'Die', opts:['Die','Der','Das'], why:'复数一律用 die，不分性别。'},
  {q:'___ Tisch ist neu.', a:'Der', opts:['Der','Die','Das'], why:'Tisch 是阳性（der Tisch）。'},
  {q:'___ Wohnung ist groß.', a:'Die', opts:['Die','Der','Das'], why:'Wohnung 是阴性（die Wohnung）。'},
  {q:'___ Buch ist interessant.', a:'Das', opts:['Das','Der','Die'], why:'Buch 是中性（das Buch）。'},
  {q:'___ Wasser ist kalt.', a:'Das', opts:['Das','Der','Die'], why:'Wasser 是中性（das Wasser）。'}
 ]},

{id:'g-akk', lv:'A1', t:'第四格：宾语用格', s:'Akkusativ',
 why:'第四格是「动作直接落在谁身上」。只有阳性冠词会变：der → den。阴性 die、中性 das、复数 die 都不变。支配第四格的常见动词：sehen、kaufen、haben、lesen、essen、trinken、brauchen、suchen。',
 items:[
  {q:'Ich sehe ___ Mann.', a:'den', opts:['der','den','dem'], why:'sehen 支配第四格，阳性 der 变 den。'},
  {q:'Ich kaufe ___ Brot.', a:'das', opts:['das','dem','den'], why:'Brot 是中性，第四格不变，还是 das。'},
  {q:'Er liest ___ Zeitung.', a:'die', opts:['die','der','den'], why:'Zeitung 是阴性，第四格不变，还是 die。'},
  {q:'Wir haben ___ Hund.', a:'einen', opts:['ein','einen','einem'], why:'不定冠词阳性在第四格是 einen（ein → einen）。'},
  {q:'Sie sucht ___ Schlüssel.', a:'den', opts:['der','den','dem'], why:'suchen 支配第四格，der Schlüssel → den Schlüssel。'},
  {q:'Ich trinke ___ Kaffee.', a:'einen', opts:['ein','eine','einen'], why:'Kaffee 是阳性，第四格用 einen。'},
  {q:'Ich brauche ___ Fahrkarte.', a:'eine', opts:['ein','eine','einen'], why:'Fahrkarte 是阴性，第四格用 eine。'},
  {q:'Er isst ___ Apfel.', a:'einen', opts:['ein','einen','einem'], why:'Apfel 是阳性，第四格用 einen。'}
 ]},

{id:'g-dat', lv:'A1', t:'第三格：间接宾语', s:'Dativ',
 why:'第三格是「给谁、对谁」。变化：der → dem，die → der，das → dem，复数 → den（名词还要加 -n）。支配第三格的常见动词：helfen、danken、gefallen、gehören。还有一批介词固定带第三格：mit、nach、bei、aus、von、zu、seit。',
 items:[
  {q:'Ich helfe ___ Mann.', a:'dem', opts:['der','den','dem'], why:'helfen 支配第三格，阳性 der 变 dem。'},
  {q:'Ich danke ___ Frau.', a:'der', opts:['die','der','dem'], why:'danken 支配第三格，阴性 die 变 der。'},
  {q:'Ich fahre mit ___ Bus.', a:'dem', opts:['der','den','dem'], why:'mit 固定带第三格，Bus 是阳性 → dem。'},
  {q:'Sie kommt aus ___ Schweiz.', a:'der', opts:['die','der','dem'], why:'aus 固定带第三格，Schweiz 是阴性 → der。'},
  {q:'Das Buch gehört ___ Kind.', a:'dem', opts:['das','dem','den'], why:'gehören 支配第三格，Kind 是中性 → dem。'},
  {q:'Ich gehe zu ___ Arzt.', a:'dem', opts:['der','dem','den'], why:'zu 固定带第三格，Arzt 是阳性 → dem。'},
  {q:'Nach ___ Arbeit gehe ich nach Hause.', a:'der', opts:['die','der','dem'], why:'nach 固定带第三格，Arbeit 是阴性 → der。'},
  {q:'Ich wohne bei ___ Eltern.', a:'den', opts:['die','den','der'], why:'bei 带第三格；复数在第三格是 den，名词还要加 -n：den Eltern。'}
 ]},

{id:'g-modal', lv:'A1', t:'情态动词现在时', s:'Modalverben',
 why:'情态动词有两个特点：一是单数第一、三人称同形（ich kann / er kann，都不加 -t）；二是它会占住句子的第二个位置，把主要动词挤到句子最末尾，用原形。',
 items:[
  {q:'Ich ___ Deutsch sprechen.', a:'kann', opts:['kann','kannst','könnt'], why:'ich 和 er 都用 kann。können 是「会、能」。'},
  {q:'Du ___ mehr schlafen.', a:'musst', opts:['muss','musst','müsst'], why:'du 用 musst。müssen 是「必须」。'},
  {q:'Er ___ heute arbeiten.', a:'muss', opts:['muss','musst','müssen'], why:'第三人称单数用 muss，不加 -t。'},
  {q:'Wir ___ nach Berlin fahren.', a:'wollen', opts:['wollt','wollen','will'], why:'wollen 是「想要」。wir 用 wollen。'},
  {q:'Ich ___ einen Kaffee.', a:'möchte', opts:['möchte','mag','möchtest'], why:'möchten 是礼貌的「想要」，点单万能句。ich 用 möchte。'},
  {q:'Hier ___ man nicht rauchen.', a:'darf', opts:['darf','darfst','dürft'], why:'dürfen 是「被允许」。man 是泛指「人们」，配 darf。'},
  {q:'Was ___ ich tun?', a:'soll', opts:['soll','sollst','sollen'], why:'sollen 是「应该」。'},
  {q:'Ich ___ jetzt gehen.', a:'muss', opts:['muss','musst','müssen'], why:'注意语序：情态动词在第二位，主要动词 gehen 被推到句尾。'}
 ]},

{id:'g-wortstellung', lv:'A1', t:'语序：动词占第二位', s:'Wortstellung',
 why:'德语主句的铁律：变位动词永远在第二个位置。如果时间、地点等被提到句首，主谓就要倒过来（动词仍是第二，主语挪到动词后面）。这一点和中文直觉完全不同。',
 items:[
  {q:'Heute ___ ich nach Berlin.', a:'fahre', opts:['fahre','ich fahre','fahren'], why:'Heute 占第一位，动词必须占第二位，主语 ich 被挤到动词后面。'},
  {q:'Ich ___ heute nach Berlin.', a:'fahre', opts:['fahre','fahren','fahre ich'], why:'主语开头时，动词紧随其后。'},
  {q:'Am Montag ___ wir einen Termin.', a:'haben', opts:['haben','wir haben','hat'], why:'时间状语开头 → 动词第二位，主语后移。'},
  {q:'___ du gern Musik?', a:'Hörst', opts:['Hörst','Du hörst','Hören'], why:'一般疑问句：动词提到最前面，没有疑问词。'},
  {q:'Wo ___ du?', a:'wohnst', opts:['wohnst','du wohnst','wohnen'], why:'特殊疑问句：疑问词占第一位，动词仍占第二位。'},
  {q:'Ich glaube, dass er morgen ___.', a:'kommt', opts:['kommt','kommen','er kommt'], why:'dass 引导的从句里，动词要挪到最末尾。'},
  {q:'Nach der Arbeit ___ ich müde.', a:'bin', opts:['bin','ich bin','ist'], why:'介词短语开头 → 动词第二位。'},
  {q:'___ Sie Deutsch?', a:'Sprechen', opts:['Sprechen','Sie sprechen','Spricht'], why:'一般疑问句，动词提前。'}
 ]},

{id:'g-negation', lv:'A1', t:'否定：nicht 还是 kein', s:'Negation',
 why:'nicht 否定动词、形容词、整句；kein 只否定名词，而且当那个名词前面是 ein 或者没有冠词时用。kein 要像 ein 一样变格：kein / keine / keinen / keinem。',
 items:[
  {q:'Das ist ___ Problem.', a:'kein', opts:['nicht','kein','keine'], why:'否定名词 Problem，且原本是 ein Problem，所以用 kein。'},
  {q:'Ich habe ___ Zeit.', a:'keine', opts:['nicht','kein','keine'], why:'Zeit 是阴性，kein 变成 keine。'},
  {q:'Ich verstehe ___.', a:'nicht', opts:['nicht','kein','keine'], why:'否定的是动词 verstehen，用 nicht。'},
  {q:'Er hat ___ Geld.', a:'kein', opts:['nicht','kein','keine'], why:'Geld 是中性，kein 不变形。'},
  {q:'Das Wetter ist ___ gut.', a:'nicht', opts:['nicht','kein','keine'], why:'否定形容词 gut，用 nicht。'},
  {q:'Sie hat ___ Bruder.', a:'keinen', opts:['kein','keinen','keinem'], why:'Bruder 是阳性，且这里是第四格宾语，所以 keinen。'},
  {q:'Ich komme ___.', a:'nicht', opts:['nicht','kein','keine'], why:'否定动词 kommen，用 nicht。'},
  {q:'Wir haben ___ Auto.', a:'kein', opts:['nicht','kein','keine'], why:'Auto 是中性，用 kein。'}
 ]},

{id:'g-possessiv', lv:'A1', t:'物主代词', s:'Possessivartikel',
 why:'我的 mein、你的 dein、他的 sein、她的 ihr、我们的 unser、你们的 euer、他们的 ihr、您的 Ihr。它们后面的词尾和 ein 完全一样，所以学一套就够：mein / meine / meinen / meinem。',
 items:[
  {q:'Das ist ___ Bruder. (我)', a:'mein', opts:['mein','meine','meinen'], why:'Bruder 是阳性第一格，用 mein。'},
  {q:'Das ist ___ Schwester. (我)', a:'meine', opts:['mein','meine','meinen'], why:'Schwester 是阴性，用 meine。'},
  {q:'Wie heißt ___ Frau? (你)', a:'deine', opts:['dein','deine','deinen'], why:'Frau 是阴性，dein 加 -e 变 deine。'},
  {q:'Ich liebe ___ Familie. (我)', a:'meine', opts:['mein','meine','meinen'], why:'Familie 是阴性，第四格也不变，仍是 meine。'},
  {q:'Er sucht ___ Schlüssel. (他)', a:'seinen', opts:['sein','seinen','seinem'], why:'Schlüssel 是阳性，做第四格宾语 → seinen。'},
  {q:'___ Vater arbeitet hier. (她)', a:'Ihr', opts:['Ihr','Ihre','Sein'], why:'「她的」是 ihr，Vater 阳性第一格 → Ihr（句首大写）。'},
  {q:'Wie ist ___ Nummer? (您)', a:'Ihre', opts:['Ihr','Ihre','deine'], why:'尊称「您」的物主代词是 Ihr，要大写；Nummer 阴性 → Ihre。'},
  {q:'Wir lieben ___ Stadt. (我们)', a:'unsere', opts:['unser','unsere','unseren'], why:'Stadt 是阴性 → unsere。'}
 ]},

{id:'g-perfekt', lv:'A2', t:'完成时：说过去的事', s:'Perfekt',
 why:'口语里说过去，几乎都用完成时。公式：haben 或 sein + 过去分词，两个部分分别占句子的第二位和末尾。绝大多数动词配 haben；表示移动或状态改变的动词（gehen、fahren、kommen、aufstehen）配 sein。',
 items:[
  {q:'Ich ___ gestern Deutsch gelernt.', a:'habe', opts:['habe','bin','hatte'], why:'lernen 配 haben。'},
  {q:'Wir ___ nach Berlin gefahren.', a:'sind', opts:['haben','sind','waren'], why:'fahren 表示移动，配 sein。'},
  {q:'Er ___ einen Kaffee getrunken.', a:'hat', opts:['hat','ist','hatte'], why:'trinken 配 haben。'},
  {q:'Sie ___ um sieben aufgestanden.', a:'ist', opts:['hat','ist','sind'], why:'aufstehen 表示状态改变，配 sein。'},
  {q:'Ich ___ das Buch gelesen.', a:'habe', opts:['habe','bin','hatte'], why:'lesen 配 haben。'},
  {q:'___ du schon gegessen?', a:'Hast', opts:['Hast','Bist','Hattest'], why:'essen 配 haben；一般疑问句动词提到句首。'},
  {q:'Wir ___ gestern zu Hause geblieben.', a:'sind', opts:['haben','sind','waren'], why:'bleiben 表示位置状态持续，配 sein（这是个要单独记的）。'},
  {q:'Er ___ mir geholfen.', a:'hat', opts:['hat','ist','hatte'], why:'helfen 配 haben。'}
 ]},

{id:'g-partizip', lv:'A2', t:'过去分词怎么造', s:'Partizip II',
 why:'规则动词：ge + 词干 + t，比如 machen → gemacht。强变化动词要单独背，多数是 ge + 词干 + en，而且词干里的元音会变，比如 sprechen → gesprochen。前缀不可分的动词（be-、ver-、er-）不加 ge：besuchen → besucht。',
 items:[
  {q:'machen → Ich habe das ___.', a:'gemacht', opts:['gemacht','gemachtet','machen'], why:'规则：ge + mach + t。'},
  {q:'sprechen → Er hat Deutsch ___.', a:'gesprochen', opts:['gesprecht','gesprochen','gesprechen'], why:'强变化，元音 e → o，词尾 -en。'},
  {q:'kaufen → Ich habe Brot ___.', a:'gekauft', opts:['gekauft','gekaufen','kaufte'], why:'规则：ge + kauf + t。'},
  {q:'besuchen → Wir haben Museen ___.', a:'besucht', opts:['gebesucht','besucht','besuchen'], why:'be- 前缀不可分，不加 ge。'},
  {q:'verstehen → Ich habe das ___.', a:'verstanden', opts:['geverstanden','verstanden','verstehte'], why:'ver- 前缀不可分，不加 ge。'},
  {q:'fahren → Wir sind nach Köln ___.', a:'gefahren', opts:['gefahrt','gefahren','gefuhren'], why:'强变化，a → a，词尾 -en。'},
  {q:'essen → Ich habe Reis ___.', a:'gegessen', opts:['geesst','gegessen','gegesset'], why:'强变化：essen → gegessen。'},
  {q:'trinken → Er hat Wasser ___.', a:'getrunken', opts:['getrinkt','getrunken','getrankt'], why:'强变化：trinken → getrunken。'}
 ]},

{id:'g-praeteritum', lv:'A2', t:'过去时：war / hatte / 情态动词', s:'Präteritum',
 why:'口语里一般动词用完成时，但三个词例外，说过去时更自然：sein → war，haben → hatte，以及所有情态动词（können → konnte，müssen → musste）。它们不加 ge，直接变。',
 items:[
  {q:'Ich ___ gestern müde.', a:'war', opts:['war','ist','hatte'], why:'sein 的过去时：war / warst / war / waren / wart / waren。'},
  {q:'Wir ___ damals in Berlin.', a:'waren', opts:['waren','sind','hatten'], why:'wir 用 waren。'},
  {q:'Ich ___ keine Zeit.', a:'hatte', opts:['hatte','war','habe'], why:'haben 的过去时：hatte / hattest / hatte / hatten / hattet / hatten。'},
  {q:'Er ___ nicht kommen.', a:'konnte', opts:['konnte','kann','könnte'], why:'können 的过去时是 konnte，注意丢掉变音。'},
  {q:'Ich ___ gestern arbeiten.', a:'musste', opts:['musste','muss','müsste'], why:'müssen 的过去时是 musste。'},
  {q:'Sie ___ nach Hause gehen.', a:'wollte', opts:['wollte','will','wolltest'], why:'wollen 的过去时是 wollte。'},
  {q:'Als Kind ___ ich nicht schwimmen.', a:'konnte', opts:['konnte','kann','könnte'], why:'说过去的能力，用 konnte。'},
  {q:'Wir ___ viel Spaß.', a:'hatten', opts:['hatten','waren','haben'], why:'「我们有乐趣」用 haben 的过去时 hatten。'}
 ]},

{id:'g-trennbar', lv:'A2', t:'可分动词', s:'Trennbare Verben',
 why:'德语有一大类动词带前缀，主句里前缀会「飞」到句子最末尾：aufstehen → Ich stehe um sieben auf。常见的有 auf-、an-、aus-、ein-、mit-、zu-、ab-。要判断能不能分，看前缀是不是重读——重读就能分。',
 items:[
  {q:'Ich ___ um sieben ___. (aufstehen)', a:'stehe / auf', opts:['stehe / auf','aufstehe / —','stehe / an'], why:'aufstehen 可分，前缀 auf 飞到句尾。'},
  {q:'Er ___ den Fernseher ___. (anmachen)', a:'macht / an', opts:['macht / an','anmacht / —','macht / auf'], why:'anmachen 可分，an 到句尾。'},
  {q:'Wir ___ heute ___. (einkaufen)', a:'kaufen / ein', opts:['kaufen / ein','einkaufen / —','kaufen / aus'], why:'einkaufen 可分。'},
  {q:'Bitte ___ Sie das Fenster ___. (zumachen)', a:'machen / zu', opts:['machen / zu','zumachen / —','machen / ab'], why:'zumachen 可分。'},
  {q:'Ich ___ meine Freundin ___. (anrufen)', a:'rufe / an', opts:['rufe / an','anrufe / —','rufe / auf'], why:'anrufen 可分，an 到句尾。'},
  {q:'Der Zug ___ um acht ___. (abfahren)', a:'fährt / ab', opts:['fährt / ab','abfährt / —','fährt / an'], why:'abfahren 可分。'},
  {q:'___ du bitte ___? (mitkommen)', a:'Kommst / mit', opts:['Kommst / mit','Mitkommst / —','Kommst / an'], why:'一般疑问句里动词提前，前缀仍在句尾。'},
  {q:'Ich ___ heute nicht ___. (mitkommen)', a:'komme / mit', opts:['komme / mit','mitkomme / —','komme / an'], why:'前缀 mit 始终在末尾。'}
 ]},

{id:'g-praeposition', lv:'A2', t:'介词配格', s:'Präpositionen',
 why:'介词分三类。固定第三格：mit、nach、bei、aus、von、zu、seit。固定第四格：für、ohne、gegen、um、durch。还有一类「双向介词」：in、an、auf、über、unter、vor、hinter、neben、zwischen——表示「去哪里」用第四格，表示「在哪里」用第三格。',
 items:[
  {q:'Ich fahre mit ___ Fahrrad.', a:'dem', opts:['das','dem','den'], why:'mit 固定第三格，Fahrrad 中性 → dem。'},
  {q:'Das Geschenk ist für ___ Mutter.', a:'die', opts:['die','der','dem'], why:'für 固定第四格，Mutter 阴性 → die（第四格不变）。'},
  {q:'Ich gehe in ___ Stadt.', a:'die', opts:['die','der','dem'], why:'in + 去哪里 → 第四格，Stadt 阴性 → die。'},
  {q:'Ich bin in ___ Stadt.', a:'der', opts:['die','der','dem'], why:'in + 在哪里 → 第三格，Stadt 阴性 → der。'},
  {q:'Das Buch liegt auf ___ Tisch.', a:'dem', opts:['den','dem','der'], why:'auf + 在哪里（静态）→ 第三格，Tisch 阳性 → dem。'},
  {q:'Ich lege das Buch auf ___ Tisch.', a:'den', opts:['den','dem','der'], why:'auf + 放上去（动态方向）→ 第四格，Tisch 阳性 → den。'},
  {q:'Wir fahren durch ___ Stadt.', a:'die', opts:['die','der','dem'], why:'durch 固定第四格，Stadt 阴性 → die。'},
  {q:'Seit ___ Jahr lerne ich Deutsch.', a:'einem', opts:['ein','einem','einen'], why:'seit 固定第三格，Jahr 中性 → einem。'}
 ]},

{id:'g-adjektiv', lv:'A2', t:'形容词词尾', s:'Adjektivendungen',
 why:'形容词放在名词前要加词尾，规则取决于前面有没有冠词。定冠词后（der/die/das）：-e 或 -en，因为冠词已经把性别说清楚了。不定冠词后（ein/kein/物主代词）：要补上冠词没说的信息，所以阳性和中性第一格用 -er/-es。',
 items:[
  {q:'Der ___ Mann ist mein Nachbar. (alt)', a:'alte', opts:['alt','alte','alten'], why:'定冠词后第一格单数：加 -e。'},
  {q:'Die ___ Frau ist Lehrerin. (jung)', a:'junge', opts:['jung','junge','jungen'], why:'定冠词后阴性第一格：加 -e。'},
  {q:'Das ___ Kind spielt. (klein)', a:'kleine', opts:['klein','kleine','kleines'], why:'定冠词后中性第一格：加 -e。'},
  {q:'Ein ___ Mann wartet. (alt)', a:'alter', opts:['alt','alter','altes'], why:'不定冠词后阳性第一格：ein 没显示性别，形容词要加 -er。'},
  {q:'Ein ___ Kind spielt. (klein)', a:'kleines', opts:['klein','kleine','kleines'], why:'不定冠词后中性第一格：加 -es。'},
  {q:'Ich kaufe ein ___ Auto. (neu)', a:'neues', opts:['neu','neue','neues'], why:'中性第一/第四格同形 → neues。'},
  {q:'Ich sehe den ___ Mann. (alt)', a:'alten', opts:['alte','alten','altem'], why:'定冠词后第四格阳性：加 -en。'},
  {q:'Ich habe eine ___ Wohnung. (groß)', a:'große', opts:['groß','große','großen'], why:'不定冠词后阴性：eine 已显示阴性，形容词加 -e。'}
 ]},

{id:'g-nebensatz', lv:'A2', t:'从句：动词去末尾', s:'Nebensätze',
 why:'这是德语和中文差别最大的地方。dass（那）、weil（因为）、wenn（如果/当）、obwohl（虽然）引导的从句里，变位动词要挪到整个从句的最末尾。主句和从句之间用逗号隔开。',
 items:[
  {q:'Ich weiß, dass er morgen ___.', a:'kommt', opts:['kommt','kommen','er kommt'], why:'dass 从句，动词到末尾。'},
  {q:'Ich bleibe zu Hause, weil ich krank ___.', a:'bin', opts:['bin','ist','bin ich'], why:'weil 从句，动词 bin 到末尾。'},
  {q:'___, kommst du zu mir? (如果)', a:'Wenn du Zeit hast', opts:['Wenn du Zeit hast','Wenn hast du Zeit','Wenn du hast Zeit'], why:'wenn 从句里动词 hast 到末尾。'},
  {q:'Er sagt, dass er keine Zeit ___.', a:'hat', opts:['hat','haben','hat er'], why:'dass 从句，hat 到末尾。'},
  {q:'Sie lernt Deutsch, weil sie in Berlin ___ will.', a:'arbeiten', opts:['arbeitet','arbeiten','arbeitet sie'], why:'从句里有情态动词时，情态动词在末尾，主要动词在它前面。'},
  {q:'Ich weiß nicht, ob er ___.', a:'kommt', opts:['kommt','kommen','er kommt'], why:'ob（是否）引导的从句也是动词到末尾。'},
  {q:'___, gehe ich nicht zur Arbeit. (因为下雨)', a:'Weil es regnet', opts:['Weil es regnet','Weil regnet es','Weil es regnen'], why:'weil 从句动词 regnet 到末尾。'},
  {q:'Er arbeitet viel, obwohl er müde ___.', a:'ist', opts:['ist','ist er','sein'], why:'obwohl 从句，动词到末尾。'}
 ]},

{id:'g-reflexiv', lv:'A2', t:'反身动词', s:'Reflexivverben',
 why:'反身动词的动作回到自己身上，要配反身代词：mich / dich / sich / uns / euch / sich。常见的有 sich freuen（高兴）、sich interessieren für（对……感兴趣）、sich treffen（见面）、sich waschen（洗）。',
 items:[
  {q:'Ich freue ___ auf den Urlaub.', a:'mich', opts:['mich','mir','sich'], why:'ich 的反身代词是 mich（第四格）。'},
  {q:'Wie fühlst du ___?', a:'dich', opts:['dich','dir','sich'], why:'du 配 dich。'},
  {q:'Er interessiert ___ für Musik.', a:'sich', opts:['sich','ihm','ihn'], why:'er/sie/es 的反身代词都是 sich。'},
  {q:'Wir treffen ___ um acht.', a:'uns', opts:['uns','euch','sich'], why:'wir 配 uns。'},
  {q:'Beeilt ___ bitte!', a:'euch', opts:['euch','uns','sich'], why:'ihr 配 euch。'},
  {q:'Ich muss ___ noch duschen.', a:'mich', opts:['mich','mir','sich'], why:'sich duschen 反身，ich 用 mich。'},
  {q:'Sie (复数) freuen ___ auf das Fest.', a:'sich', opts:['sich','sie','ihnen'], why:'第三人称复数反身代词仍是 sich。'},
  {q:'Ich habe ___ erkältet.', a:'mich', opts:['mich','mir','sich'], why:'sich erkälten（感冒），ich 用 mich。'}
 ]},

{id:'g-konjunktiv2', lv:'B1', t:'虚拟式 II：礼貌与假设', s:'Konjunktiv II',
 why:'Konjunktiv II 有两个核心用法：一是让请求变得客气（Könnten Sie...? 比 Können Sie...? 委婉得多），二是说「如果……就……」的非现实假设。常见形式：könnte、hätte、wäre、würde、müsste。',
 items:[
  {q:'___ Sie mir bitte helfen?', a:'Könnten', opts:['Können','Könnten','Konnten'], why:'Könnten 比 Können 客气得多，是德语礼貌请求的标准说法。'},
  {q:'Ich ___ gern ein Zimmer reservieren.', a:'würde', opts:['werde','würde','wurde'], why:'würde + 不定式 是最常用的委婉表达。'},
  {q:'Wenn ich Zeit ___, käme ich mit.', a:'hätte', opts:['hatte','hätte','habe'], why:'hätte 是 haben 的虚拟式，表示「假如我有」。'},
  {q:'Wenn ich reich ___, würde ich reisen.', a:'wäre', opts:['war','wäre','bin'], why:'wäre 是 sein 的虚拟式。'},
  {q:'___ Sie mir den Weg zeigen?', a:'Könnten', opts:['Können','Könnten','Konnten'], why:'问路时用 Könnten 会礼貌很多。'},
  {q:'Ich ___ lieber Tee als Kaffee.', a:'hätte', opts:['habe','hätte','hatte'], why:'hätte gern / hätte lieber 是点单和表达偏好的黄金句型。'},
  {q:'An deiner Stelle ___ ich mehr lernen.', a:'würde', opts:['werde','würde','wurde'], why:'「如果我是你」用 würde。'},
  {q:'___ es möglich, dass Sie später kommen?', a:'Wäre', opts:['War','Wäre','Ist'], why:'Wäre es möglich... 是礼貌询问「有可能……吗」。'}
 ]},

{id:'g-passiv', lv:'B1', t:'被动语态', s:'Passiv',
 why:'被动语态把重点从「谁做的」移到「发生了什么」。公式：werden + 过去分词。施动者用 von 引出。口语里更常用 man 代替被动，但读懂被动是 B1 的硬要求。',
 items:[
  {q:'Das Haus ___ 1990 gebaut.', a:'wurde', opts:['wurde','ward','wird'], why:'过去时的被动：wurde + 过去分词。'},
  {q:'Die Briefe ___ jeden Tag gebracht.', a:'werden', opts:['werden','wird','wurden'], why:'复数主语用 werden（现在时被动）。'},
  {q:'Das Auto ___ von meinem Vater repariert.', a:'wurde', opts:['wurde','wird','war'], why:'被动 + von 引出施动者。'},
  {q:'Hier ___ Deutsch gesprochen.', a:'wird', opts:['wird','werden','wurde'], why:'单数主语，现在时被动 → wird。'},
  {q:'Die Prüfung ___ nächste Woche geschrieben.', a:'wird', opts:['wird','werden','wurde'], why:'将来发生的被动，用现在时被动表达即可。'},
  {q:'Das Problem ___ schnell gelöst.', a:'wurde', opts:['wurde','wird','war'], why:'说已完成的被动动作 → wurde。'},
  {q:'In Deutschland ___ viel Bier getrunken.', a:'wird', opts:['wird','werden','wurde'], why:'Bier 是不可数，视为单数 → wird。'},
  {q:'Die Kinder ___ von der Lehrerin betreut.', a:'werden', opts:['werden','wird','wurden'], why:'复数主语 + 现在时 → werden。'}
 ]},

{id:'g-relativsatz', lv:'B1', t:'关系从句', s:'Relativsatz',
 why:'关系从句用来修饰前面的名词，由关系代词引导，而关系代词的性别和数要跟着前面的名词走，格则由它在从句里做什么成分决定。从句里的动词照例去末尾。',
 items:[
  {q:'Der Mann, ___ dort steht, ist mein Chef.', a:'der', opts:['der','den','dem'], why:'Mann 是阳性，且在从句里做主语 → 第一格 der。'},
  {q:'Die Frau, ___ ich gestern traf, ist Ärztin.', a:'die', opts:['die','der','den'], why:'Frau 阴性，在从句里做第四格宾语 → die（阴性第四格同形）。'},
  {q:'Das Buch, ___ ich lese, ist spannend.', a:'das', opts:['das','den','dem'], why:'Buch 中性，第四格 → das。'},
  {q:'Der Freund, ___ ich helfe, wohnt hier.', a:'dem', opts:['der','den','dem'], why:'helfen 支配第三格 → 阳性第三格 dem。'},
  {q:'Die Stadt, in ___ ich wohne, ist schön.', a:'der', opts:['die','der','dem'], why:'in + 在哪里 → 第三格，Stadt 阴性 → der。'},
  {q:'Der Kollege, mit ___ ich arbeite, ist nett.', a:'dem', opts:['der','den','dem'], why:'mit 固定第三格 → dem。'},
  {q:'Die Kinder, ___ im Garten spielen, sind laut.', a:'die', opts:['die','den','der'], why:'复数第一格 → die。'},
  {q:'Das Haus, ___ wir gekauft haben, ist alt.', a:'das', opts:['das','dem','den'], why:'中性第四格 → das。'}
 ]},

{id:'g-konnektor', lv:'B1', t:'连词与语序', s:'Konnektoren',
 why:'这是德语写作和口语的关键分水岭。三类词对语序的影响完全不同：und/aber/oder 不占位置；deshalb/trotzdem/dann 占第一位，所以动词要紧接着占第二位；weil/obwohl 引导从句，动词去末尾。',
 items:[
  {q:'Es regnet, ___ ich bleibe zu Hause.', a:'deshalb', opts:['deshalb','weil','und'], why:'deshalb（所以）占第一位，后面紧跟动词，主语后移。'},
  {q:'Ich bleibe zu Hause, ___ es regnet.', a:'weil', opts:['deshalb','weil','aber'], why:'weil 引导从句，动词 regnet 去末尾。'},
  {q:'Es regnet, ___ gehe ich spazieren.', a:'trotzdem', opts:['trotzdem','weil','deshalb'], why:'trotzdem（尽管如此）表示让步，占第一位，动词第二位。'},
  {q:'Ich mag Tee, ___ ich trinke lieber Kaffee.', a:'aber', opts:['aber','deshalb','weil'], why:'aber 是并列连词，不占位置，语序不变。'},
  {q:'Er ist müde, ___ er arbeitet weiter.', a:'obwohl', opts:['obwohl','deshalb','und'], why:'obwohl（虽然）引导从句，动词去末尾。'},
  {q:'Zuerst esse ich, ___ gehe ich zur Arbeit.', a:'dann', opts:['dann','weil','obwohl'], why:'dann（然后）占第一位，动词紧随其后。'},
  {q:'Ich lerne Deutsch, ___ ich in Berlin arbeiten will.', a:'weil', opts:['weil','deshalb','aber'], why:'表原因的从句用 weil，动词到末尾。'},
  {q:'Er hat viel gelernt, ___ hat er die Prüfung bestanden.', a:'deshalb', opts:['deshalb','obwohl','aber'], why:'前因后果，用 deshalb 并引起主谓倒装。'}
 ]},

{id:'g-genitiv', lv:'B1', t:'第二格与所属', s:'Genitiv',
 why:'第二格表示「谁的」，书面色彩较重。阳性、中性的冠词变 des，名词还要加 -s 或 -es：das Auto des Mannes。口语里更常说 von + 第三格，但看懂第二格是 B1 必须的。',
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

{id:'g-infinitivzu', lv:'B1', t:'带 zu 的不定式', s:'Infinitiv mit zu',
 why:'很多动词和表达后面接「zu + 动词原形」，zu 放在动词原形前面，可分动词的 zu 插在前缀和词干之间：aufzustehen。常见搭配：Ich habe Lust, ... zu ...；Es ist wichtig, ... zu ...；Ich versuche, ... zu ...。',
 items:[
  {q:'Ich habe Lust, ins Kino ___.', a:'zu gehen', opts:['zu gehen','gehen zu','zu gegangen'], why:'Lust haben + zu + 不定式。'},
  {q:'Es ist wichtig, jeden Tag ___.', a:'zu üben', opts:['zu üben','üben zu','geübt'], why:'Es ist wichtig + zu + 不定式。'},
  {q:'Ich versuche, früher ___.', a:'aufzustehen', opts:['aufzustehen','zu aufstehen','aufstehen zu'], why:'可分动词：zu 插在 auf 和 stehen 中间。'},
  {q:'Er hat vergessen, mich ___.', a:'anzurufen', opts:['anzurufen','zu anrufen','anrufen zu'], why:'可分动词 anrufen → anzurufen。'},
  {q:'Ich freue mich darauf, dich ___.', a:'zu sehen', opts:['zu sehen','sehen zu','gesehen'], why:'sich freuen auf + zu + 不定式。'},
  {q:'Sie hat keine Zeit, ___.', a:'zu kommen', opts:['zu kommen','kommen zu','gekommen'], why:'Zeit haben + zu + 不定式。'},
  {q:'Es ist schwer, Deutsch ___.', a:'zu lernen', opts:['zu lernen','lernen zu','gelernt'], why:'简单不定式加 zu。'},
  {q:'Ich bitte dich, mir ___.', a:'zu helfen', opts:['zu helfen','helfen zu','geholfen'], why:'bitten + zu + 不定式。'}
 ]}
];

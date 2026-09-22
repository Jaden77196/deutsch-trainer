/* ============================================================
   阅读理解
   after 表示学完第几组后解锁（组序号从 0 开始）
   ============================================================ */
window.CONTENT_READINGS = [
{id:'r1', after:2, t:'Ich heiße Anna', zh:'我叫安娜',
 de:['Hallo! Ich heiße Anna Müller. Ich komme aus Deutschland. Ich wohne in Berlin. Ich bin Studentin. Ich lerne Chinesisch. Guten Tag!'],
 tr:'你好！我叫安娜·穆勒。我来自德国。我住在柏林。我是大学生。我在学中文。你好！',
 qs:[
  {q:'安娜从哪里来？', de:'Woher kommt Anna?', o:['中国','德国','柏林'], a:1},
  {q:'安娜住在哪里？', de:'Wo wohnt Anna?', o:['柏林','慕尼黑','科隆'], a:0},
  {q:'安娜在做什么？', de:'Was macht Anna?', o:['工作','学中文','做饭'], a:1}
 ]},
{id:'r2', after:6, t:'Meine Familie', zh:'我的家庭',
 de:['Meine Familie ist nicht groß. Ich habe einen Vater, eine Mutter und eine Schwester.',
     'Mein Vater arbeitet in einem Büro. Meine Mutter ist Lehrerin.',
     'Meine Schwester heißt Lena und ist zwölf Jahre alt. Wir wohnen in Hamburg.',
     'Am Wochenende essen wir zusammen.'],
 tr:'我的家庭不大。我有爸爸、妈妈和一个姐姐。我爸爸在办公室工作。我妈妈是老师。我姐姐叫蕾娜，十二岁。我们住在汉堡。周末我们一起吃饭。',
 qs:[
  {q:'这个人有几个兄弟姐妹？', de:'Wie viele Geschwister?', o:['一个姐妹','一个兄弟','两个姐妹'], a:0},
  {q:'妈妈做什么工作？', de:'Was ist die Mutter von Beruf?', o:['老师','医生','职员'], a:0},
  {q:'蕾娜多大？', de:'Wie alt ist Lena?', o:['十岁','十二岁','二十岁'], a:1}
 ]},
{id:'r3', after:9, t:'Im Restaurant', zh:'在餐厅',
 de:['Am Abend gehen wir ins Restaurant. Der Kellner bringt die Speisekarte.',
     'Ich bestelle eine Suppe und ein Bier. Mein Freund möchte Fleisch mit Reis.',
     'Das Essen ist lecker. Am Ende bezahlen wir. Die Rechnung ist 32 Euro.'],
 tr:'晚上我们去餐厅。服务员拿来菜单。我点了一份汤和一杯啤酒。我朋友想要肉配米饭。饭菜很好吃。最后我们结账，账单是32欧元。',
 qs:[
  {q:'这个人点了什么？', de:'Was bestellt die Person?', o:['汤和啤酒','肉和米饭','面包和牛奶'], a:0},
  {q:'朋友想吃什么？', de:'Was möchte der Freund?', o:['汤','肉配米饭','只有啤酒'], a:1},
  {q:'这顿饭多少钱？', de:'Wie viel kostet das Essen?', o:['23欧元','32欧元','42欧元'], a:1}
 ]},
{id:'r4', after:12, t:'Eine Reise nach München', zh:'慕尼黑之行',
 de:['Morgen fahre ich nach München. Der Zug fährt um acht Uhr vom Bahnhof ab.',
     'Die Fahrt dauert vier Stunden. In München besuche ich einen Freund.',
     'Wir gehen auf den Markt und trinken Kaffee. Am Abend fahre ich mit dem Bus zum Hotel.'],
 tr:'明天我去慕尼黑。火车八点从火车站出发。车程四小时。在慕尼黑我拜访一个朋友。我们去市场喝咖啡。晚上我坐公交车去酒店。',
 qs:[
  {q:'火车几点出发？', de:'Wann fährt der Zug ab?', o:['七点','八点','十点'], a:1},
  {q:'车程多长？', de:'Wie lange dauert die Fahrt?', o:['两小时','四小时','八小时'], a:1},
  {q:'这个人怎么去酒店？', de:'Wie fährt die Person zum Hotel?', o:['坐公交','坐火车','坐飞机'], a:0}
 ]},
{id:'r5', after:17, t:'Im Geschäft und im Hotel', zh:'在商店和酒店',
 de:['Ich brauche ein neues Hemd. Ich gehe in ein Geschäft in der Stadt.',
     'Das Hemd kostet 25 Euro, aber die Größe ist zu klein. Ich probiere eine andere Größe an.',
     'Dann gehe ich zum Hotel. Ich habe ein Zimmer reserviert. Der Schlüssel liegt an der Rezeption.',
     'Das Zimmer ist klein, aber bequem.'],
 tr:'我需要一件新衬衫。我去城里的一家商店。衬衫25欧元，但尺码太小。我试了另一个尺码。然后我去酒店。我预订了一个房间。钥匙在前台。房间不大，但很舒服。',
 qs:[
  {q:'这个人需要什么？', de:'Was braucht die Person?', o:['一件衬衫','一双鞋','一个包'], a:0},
  {q:'为什么不买第一件？', de:'Warum kauft sie das erste Hemd nicht?', o:['太贵','尺码太小','颜色不好'], a:1},
  {q:'钥匙在哪里？', de:'Wo ist der Schlüssel?', o:['在前台','在房间里','在商店'], a:0}
 ]},
{id:'r6', after:25, t:'Ein Tag im Winter', zh:'冬日的一天',
 de:['Es ist Winter und sehr kalt. Heute ist Montag. Ich stehe um sieben Uhr auf.',
     'Ich frühstücke mit Brot und Milch. Draußen liegt Schnee und der Wind ist stark.',
     'Ich bin müde, denn ich schlafe nur sechs Stunden. Mein Kopf tut weh.',
     'Ich gehe nicht zur Arbeit. Ich bleibe zu Hause und trinke Tee.'],
 tr:'现在是冬天，非常冷。今天是星期一。我七点起床。我早餐吃面包喝牛奶。外面有积雪，风很大。我很累，因为我只睡了六小时。我头疼。我不去上班，待在家里喝茶。',
 qs:[
  {q:'今天是星期几？', de:'Welcher Tag ist heute?', o:['星期一','星期二','星期天'], a:0},
  {q:'早餐吃什么？', de:'Was isst die Person zum Frühstück?', o:['面包和牛奶','鸡蛋和茶','汤和米饭'], a:0},
  {q:'为什么不去上班？', de:'Warum geht sie nicht zur Arbeit?', o:['下雪','她累而且头疼','交通不便'], a:1}
 ]},

/* ===== A2 ===== */
{id:'r7', after:34, t:'Ein Umzug nach Berlin', zh:'搬去柏林',
 de:['Letzten Monat bin ich nach Berlin umgezogen. Die neue Wohnung liegt in einem ruhigen Stadtteil.',
     'Die Miete ist höher als vorher, aber die Wohnung hat einen Balkon und einen Aufzug.',
     'Am Anfang war mir die Stadt fremd. Ich kannte niemanden und musste mich erst anpassen.',
     'Inzwischen habe ich nette Nachbarn kennengelernt. Wir treffen uns manchmal im Hof und unterhalten uns.',
     'Ich habe mich an das Leben hier gewöhnt. Berlin gefällt mir immer besser.'],
 tr:'上个月我搬到了柏林。新公寓在一个安静的城区。租金比以前高，但公寓有阳台和电梯。一开始这座城市对我很陌生。我谁也不认识，得先适应。这期间我认识了不错的邻居。我们有时在院子里见面聊天。我已经习惯了这里的生活。柏林越来越让我喜欢。',
 qs:[
  {q:'新公寓在哪里？', de:'Wo liegt die neue Wohnung?', o:['市中心','一个安静的城区','火车站附近'], a:1},
  {q:'公寓的租金怎么样？', de:'Wie ist die Miete?', o:['比以前高','比以前低','一样'], a:0},
  {q:'作者刚到柏林时感觉如何？', de:'Wie war es am Anfang?', o:['很熟悉','很陌生','很无聊'], a:1},
  {q:'作者和邻居做什么？', de:'Was macht der Autor mit den Nachbarn?', o:['一起工作','偶尔在院子里聊天','一起去旅行'], a:1}
 ]},
{id:'r8', after:40, t:'Umwelt im Alltag', zh:'日常中的环保',
 de:['Viele Menschen wollen die Umwelt schützen, aber im Alltag ist das nicht immer einfach.',
     'In Deutschland trennt man den Müll: Papier, Plastik, Glas und Restmüll kommen in verschiedene Tonnen.',
     'Manche Leute kaufen keine Plastiktüten mehr, sondern nehmen eigene Taschen mit.',
     'Auch beim Strom kann man sparen. Wer das Licht ausschaltet, wenn er den Raum verlässt, verbraucht weniger Energie.',
     'Kleine Gewohnheiten machen einen Unterschied. Wenn viele mitmachen, hat das großen Einfluss auf das Klima.'],
 tr:'很多人都想保护环境，但日常生活中并不总是容易。在德国人们做垃圾分类：纸、塑料、玻璃和其余垃圾放进不同的桶。有些人不买塑料袋了，而是自带袋子。用电也能节省。离开房间时关灯，就能少耗能源。小习惯也会带来改变。如果很多人一起做，对气候就有很大影响。',
 qs:[
  {q:'德国的垃圾怎么处理？', de:'Wie wird der Müll behandelt?', o:['全部一起扔','分类投放','只回收纸'], a:1},
  {q:'有些人购物时怎么做？', de:'Was machen manche beim Einkaufen?', o:['自带袋子','买更多塑料袋','不购物'], a:0},
  {q:'怎样节省电？', de:'Wie spart man Strom?', o:['离开房间时关灯','多开灯','用更多电器'], a:0},
  {q:'作者认为小习惯有用吗？', de:'Was denkt der Autor über kleine Gewohnheiten?', o:['没用','很有影响','只对个人有用'], a:1}
 ]},
{id:'r9', after:46, t:'Ein Bewerbungsgespräch', zh:'一次面试',
 de:['Frau Weber hat sich um eine Stelle beworben und ist zum Vorstellungsgespräch eingeladen worden.',
     'Der Chef fragt: „Warum möchten Sie bei uns arbeiten?" Sie antwortet: „Ihre Firma hat einen guten Ruf, und ich möchte mich weiterentwickeln."',
     'Dann fragt er nach ihrer Erfahrung. Sie erklärt, dass sie drei Jahre in einem ähnlichen Bereich gearbeitet hat.',
     'Am Ende fragt sie selbst: „Welche Möglichkeiten gibt es für eine Fortbildung?"',
     'Der Chef ist zufrieden. Zwei Tage später bekommt sie die Zusage und unterschreibt den Vertrag.'],
 tr:'韦伯女士申请了一个职位，被邀请去面试。上司问：「您为什么想在我们这里工作？」她回答：「贵公司声誉很好，我想继续发展。」然后他问她的经验。她解释说自己在类似领域工作了三年。最后她自己也问：「有哪些进修的机会？」上司很满意。两天后她收到了录用通知，签了合同。',
 qs:[
  {q:'韦伯女士为什么想去这家公司？', de:'Warum will Frau Weber dort arbeiten?', o:['工资高','公司声誉好','离家近'], a:1},
  {q:'她有多少年相关经验？', de:'Wie viel Erfahrung hat sie?', o:['一年','三年','十年'], a:1},
  {q:'她最后问了什么？', de:'Was fragt sie am Ende?', o:['进修的机会','工资多少','休假多久'], a:0},
  {q:'面试结果如何？', de:'Wie war das Ergebnis?', o:['她得到了职位','她被拒绝','她还在等'], a:0}
 ]},

/* ===== B1 ===== */
{id:'r10', after:55, t:'Stadt oder Land?', zh:'城市还是乡村？',
 de:['Die Frage, ob man lieber in der Stadt oder auf dem Land lebt, wird oft diskutiert. Beide Seiten haben Vorteile und Nachteile.',
     'In der Stadt gibt es mehr Arbeitsplätze, bessere Verkehrsmittel und ein größeres kulturelles Angebot. Wer Karriere machen will, ist hier oft im Vorteil.',
     'Allerdings sind die Mieten hoch, es ist laut, und viele Menschen fühlen sich einsam, obwohl sie von Leuten umgeben sind.',
     'Auf dem Land ist das Leben ruhiger und günstiger. Die Natur ist nah, und die Nachbarn kennen sich.',
     'Der Nachteil: Wer dort wohnt, braucht meistens ein Auto, und die Auswahl an Jobs ist begrenzt.',
     'Meiner Meinung nach kommt es darauf an, was einem wichtiger ist. Ich persönlich würde die Stadt vorziehen, solange ich jung bin.',
     'Später möchte ich vielleicht aufs Land ziehen. Man muss sich nicht für immer entscheiden.'],
 tr:'「更愿意住在城市还是乡村」这个问题经常被讨论。两边各有优劣。城市里工作机会更多、交通更好、文化生活更丰富。想发展事业的人在这里往往更有优势。不过租金高、嘈杂，而且很多人尽管被人群包围，却感到孤独。乡村生活更安静、更便宜。自然就在身边，邻居之间彼此认识。缺点是：住在那里通常需要一辆车，工作选择也有限。在我看来，这取决于什么对你更重要。就我个人而言，趁年轻我会更愿意选城市。以后也许我会搬到乡下去。人不必永远做出决定。',
 qs:[
  {q:'城市有哪些优势？', de:'Welche Vorteile hat die Stadt?', o:['更多工作机会和交通','更便宜','更安静'], a:0},
  {q:'城市生活的缺点是什么？', de:'Welche Nachteile hat die Stadt?', o:['租金高而且嘈杂','没有工作','自然太近'], a:0},
  {q:'住在乡下通常需要什么？', de:'Was braucht man auf dem Land meistens?', o:['一辆车','地铁','很多钱'], a:0},
  {q:'作者个人的倾向是什么？', de:'Was bevorzugt der Autor persönlich?', o:['年轻时选城市','一直住乡下','都不喜欢'], a:0}
 ]}
];

import type { MultiLang } from 'src/i18n/utils';

export type Coach = {
    img: string;
    name: MultiLang<string>;
    role: MultiLang<string>;
    text: MultiLang<string>;
};

export const coaches: Coach[] = [
    {
        img: '/images/about/coaches/orbanattila.jpg',
        name: {
            hu: 'Orbán Attila',
            en: 'Attila Orbán',
        },
        role: {
            hu: 'alapító, szakmai vezető',
            en: 'Founder, professional manager',
        },
        text: {
            hu: 'Korábbi nemzeti jégkorong válogatott hátvédje vagyok. EBEL, MOL liga és Erste liga játékos, sport pedagógus, edző, mentor és tehetségek felkutatója, illetve az utánpótlás nevelés elkötelezett szakembere vagyok.',
            en: 'I am a former national hockey team quarterback. I am an EBEL, MOL league and Erste league player, sports teacher, coach, mentor and talent scout, as well as a dedicated specialist in youth education.',
        },
    },
    {
        img: '/images/about/coaches/kercsoarpad.jpg',
        name: {
            hu: 'Kercsó Árpád',
            en: 'Árpád Kercsó',
        },
        role: {
            hu: 'mester edző',
            en: 'master coach',
        },
        text: {
            hu: '„Árpi bá”-t nem kell bemutatni a hoki szerető embereknek. A Magyar Jégkorong Hírességek csarnokának tagja, legendás munkásságának köszönhető többek közt a „Szapporói csoda” megalapozása, korábbi utánpótlás és felnőtt válogatott szövetségi kapitány. Számos játékos büszkeségünk edzője, mentora, felfedezője. Orbán Attilát egy óvodai toborzáson találta meg, majd éveken keresztül edzője volt.',
            en: 'Master coach "Uncle Árpi" does not have to be introduced to hockey lovers. He is a member of the Hungarian Ice Hockey Hall of Fame thanks to his legendary work, among others, the foundation of "Szapporo Miracle", former youth and adult national team head coach. He is the proud coach, mentor and discoverer of numerous players. He met Attila Orbán at a kindergarten recruitment event and then coached him for years.',
        },
    },
    {
        img: '/images/about/coaches/fischermiklos.jpg',
        name: {
            hu: 'Dr. Fischer Miklós',
            en: 'Dr Miklós Fischer',
        },
        role: {
            hu: 'sport szakpszichológus, egyetemi docens',
            en: 'sports psychologist, university associate professor',
        },
        text: {
            hu: 'Az Ifj.Ocskay Gábor Jégkorong Akadémia sportpszichológusa vagyok. Számos világ- és olimpiai bajnokunk mentális felkészítője, több nyári és téli olimpián segítettem a magyar csapatot. A Testnevelési Egyetem sportpszichológia-módszertan tanára, a posztgraduális egyetemi képzés egyik megalapítója vagyok. Erősségem az egyéni és csapatszintű pszichés felkészítés, hibajavítás, készségfejlesztés angolul, németül és oroszul is.',
            en: 'I am a sports psychologist at the Gábor Ocskay Jr. Hockey Academy. I am the mental trainer of many of our world and Olympic champions, I assisted the Hungarian team at several summer and winter Olympics. I am a lecturer of sports psychology methodology at the Hungarian University of Sports Science and one of the founders of the postgraduate university course. Individual and team psychological preparation, technical error correction, skill development in English, German and Russian are my strengths.',
        },
    },
    {
        img: '/images/about/coaches/vertesnatan.jpg',
        name: {
            hu: 'Vértes Nátán',
            en: 'Nátan Vértes',
        },
        role: {
            hu: 'játékos edző',
            en: 'player coach',
        },
        text: {
            hu: 'Az Ifjúsági Téli Olimpián jégkorong sportban képviseltem Magyarországot. A Magyar Jégkorong válogatottal két U20-as Világbajnokságot nyertem, egyszer bronzérmes lettem. Az Egyesült államokban töltöttem 3 évet, az amerikai egyetemi bajnokságban, az NCAA-ben is jégre léptem. A 2022/23-as szezonban a Felnőtt Magyar Válogatottban is bemutatkozhattam, jelenleg az Osztrák bajnokságban szereplő Hydro Fehérvár AV19 jégkorongozója vagyok.',
            en: 'I represented Hungary in ice hockey at the Youth Winter Olympics. I won two U20 World Championships with the Hungarian national ice hockey team and was bronze medalist once. I spent 3 years in the United States and I also played in the American University Championship, the NCAA. In the 2022/23 season, I played for the Hungarian national team for the first time and I am currently a hockey player for Hydro Fehérvár AV19 in the Austrian championship.',
        },
    },
    {
        img: '/images/about/coaches/molnarbalazs.jpg',
        name: {
            hu: 'Molnár Balázs',
            en: 'Balázs Molnár',
        },
        role: {
            hu: 'alapító és ügyvezető igazgató, EasyGo to USA LLC.',
            en: 'Founder and Managing Director, EasyGo to USA LLC.',
        },
        text: {
            hu: 'Orbán Attila professzionális és szakmai sport múltja biztosíték nekünk arra, hogy megfelelő iránymutatást kapjanak a fiatal tehetséges jégkorongozók sport karrierjük kiválasztásában. Attila többszörös felnőtt válogatott játékosként nemzetközi tapasztalatokra is szert tett, mely tudást magas minőségben kamatoztatja a toborzásban és a legtehetségesebb játékosok kiválasztásában Magyarországon és Európa szerte. Attila fő feladata a játékos toborzás, jégkorong statisztikák elemzése és értelmezése, legújabb toborzó trendek követése, hazai és nemzetközi jégkorong tornák szervezése és szakmai felügyelete, hazai és európai jégkorong klubokkal való kapcsolattartás és partnerkapcsolati háló bővítése a megfelelő szakmai stábbal.',
            en: "Attila Orbán's professional and professional sports history ensures that young talented hockey players receive appropriate guidance in choosing their sports career. Attila has also gained international experience as an adult player with multiple caps, which he makes good use of at a high level in recruiting and selecting the most talented players in Hungary and across Europe. Attila's tasks include recruiting players, analysis and interpretation of hockey statistics, following the latest recruiting trends, organization and professional supervision of national and international hockey tournaments, maintaining contact with national and European hockey clubs and expanding the network of partnerships with the appropriate professional staff.",
        },
    },
    {
        img: '/images/about/coaches/repasipetra.jpg',
        name: {
            hu: 'Répási Petra',
            en: 'Petra Répási',
        },
        role: {
            hu: 'Atlétikai edző',
            en: 'Athletic trainer',
        },
        text: {
            hu: 'Jelenleg is profi szinten atletizálok. 10 éve tagja vagyok a felnőtt válogatottnak. Számos világversenyen vettem részt, és értem el nemzetközi és hazai szinten sikereket. 12x Felnőtt Magyar Bajnok vagyok, valamint Junior Európa Bajnokságon 4. Helyezést és U23 Európa Bajnokságon 8. helyezést értem el. Jelenleg főként erőnléti, és mozgás koordinációs, atletikus edzéseket tartok. Célom hogy az eddig szerzett tudásomat, tapasztalatomat átadjam a fiatal utánpótlás korú sportolóknak, és versenyszituációban a tudásuknak megfelelően legmagasabb szinten teljesítsenek.',
            en: 'I am currently still playing at a professional level. I have been a member of the national team for 10 years. I participated in numerous world tournaments and achieved results at a national and international level. I am 12-time Hungarian Champion, was 4th at the Junior European Championship and 8th at the U23 European Championship. I currently mostly hold fitness and movement coordination, athletic trainings. My goal is to pass on the knowledge and experience I have gathered so far to young youth plyers, so that they can perform at the highest level according to their skills in a competition context.',
        },
    },
    {
        img: '/images/about/coaches/szaboandras.jpg',
        name: {
            hu: 'Szabó András',
            en: 'András Szabó',
        },
        role: {
            hu: 'Mentál Coach',
            en: 'Mental Coach',
        },
        text: {
            hu: 'Az elmúlt nyolc év során az emberi viselkedés, a csoportok kialakulása, működése és az egyén ebben betöltött szerepe került érdeklődésem középpontjába. Ennek eredményeként egyéni és csoportos coachingot tanultam a Széchenyi Egyetemen illetve a Watson Coach Iskolában, illetve viselkedés-, pozitív-, kognitív pszichológia kurzusokat végezetem a Doane University és a Cambridge-i Egyetem online képzései keretében. Emellett saját önfejlesztési folyamatom eredményeként pszichodráma asszisztensi, majd vezetői képzéseken vettem részt. Tanulmányaim során olyan neves magyar szakemberektől tanulhattam, mint Dr. Daubner Béla és Dr. Fadgyas Ildikó, akik a pszichodráma alapjait fektették le Magyarországon. Jelenleg az Aden University Pszichológia karán folytatom a tanulmányaimat. Coaching folyamataim során támogattam klienseimet abban, hogy feloldják elakadásaikat és új utakat nyissanak. Jelenleg több önismereti csoport munkáját támogatom társvezetőként, erősítve a résztvevők értékrendjét, segítve őket nehézségeik leküzdésében és nem utolsó sorban elősegítve a csoportmunkába való beilleszkedésüket. A mindennapi munkámban jelentősen érződik a mentális coaching szükségessége, mind az egyéni fejlődés, mind a csapat integritása szempontjából.',
            en: "Over the last eight years, I have been interested in human behaviour, the formation and functioning of groups and the role of the individual in them. As a result, I have studied individual and group coaching at Széchenyi University and the Watson Coach School, and I have completed courses in behavioural, positive and cognitive psychology at Doane University and Cambridge University at the Doane University and the University of Cambridge. In addition, as a result of my own self-development process, I have attended training courses as a psychodrama assistant and then as a manager. During my studies, I was able to learn from renowned Hungarian professionals such as Dr. Béla Daubner and Dr. Ildikó Fadgyas, who are experts in psychodrama and psychodrama. the foundations of psychodrama in Hungary. Currently I am continuing my studies at the Faculty of Psychology at Aden University. During my coaching processes I have supported my clients to unblock their blockages and open new paths. I am currently working on several self-awareness groups, strengthening the participants' values, helping them to overcome their difficulties and, last but not least, helping them to develop their own personal skills. last but not least, facilitating their integration into the group work. The need for mental coaching is strongly felt in my daily work, both for individual development and for the integrity of the team of the team.",
        },
    },
    {
        img: '/images/about/coaches/kovacsalex.jpg',
        name: {
            hu: 'Kovács Alex',
            en: 'Alex Kovács',
        },
        role: {
            hu: 'játékos edző',
            en: 'player coach',
        },
        text: {
            hu: 'Többszörös Magyar utánpótlás bajnok vagyok. Egyszeres EBJL bajnok és kétszeres EBYSL bajnoki címet is szereztem. U20 WJC D1B bronzérem, U20 WJC D1B arany érem büszke birtokosa vagyok. A 2020-2021 szezonban 26 meccsen léptem jégre a Fehérvár AV19 EBEL csapatában. Ugyanebben a szezonban az Erste ligában 18 meccsen 11 pontot szereztem 2021-2022 szezonban az UTE játékosaként 32 meccsen 20 pontot szereztem. 2022 nyara óta játékos edzőként dolgozom az IcehockeyPRO57 szakmai csapatában.',
            en: 'I am a multi-time Hungarian youth champion. I am also one-time EBJL champion and two-time EBYSL champion. I am the proud holder of a U20 WJC D1B bronze medal and U20 WJC D1B gold medal. In the 2020-2021 season, I took to the ice in 26 games for the Fehérvár AV19 EBEL team. In the same season, I reached 11 points in 18 games in the Erste League. In the 2021-2022 season, as a UTE player, I reached 20 points in 32 games. I have been working as a player coach in the professional team of IcehockeyPRO57 since the summer of 2022.',
        },
    },
    {
        img: '/images/about/coaches/dezsibence.jpeg',
        name: {
            hu: 'Dézsi Bence',
            en: 'Bence Dézsi',
        },
        role: {
            hu: 'játékos edző',
            en: 'player coach',
        },
        text: {
            hu: 'Szegeden kezdtem jégkorongos pályafutásom majd 14 éves koromban kerültem a székesfehérvári akadémiára ahol többszöros utánpótlás magyar bajnok lettem illetve EBJL és EBYSL bajnok valamint itt mutatkoztam be az Erste Ligába ahol jelenleg is játszom, az utánpotlás válogatottal 4 világbajnokságon jártam, a div 1/b világbajnokságokon bronzérmet majd aranyérmet ünnepelhettem U20 ban, ezután a felnőtt válogatottban is bemutatkoztam.',
            en: 'I started my hockey career in Szeged and at the age of 14 I joined the Székesfehérvár academy where I became a multiple Hungarian junior champion, EBJL and EBYSL champion and where I also debuted in the Erste League where I am currently playing, With the national team I played in 4 world championships, won bronze and gold medals in the div 1/b world championships in the U20, and then I also played for the adult national team.',
        },
    },
    {
        img: '/images/about/coaches/szelesmartin.jpg',
        name: {
            hu: 'Szeles Martin',
            en: 'Martin Szeles',
        },
        role: {
            hu: 'kapusedző',
            en: 'goalkeeper coach',
        },
        text: {
            hu: '19 éve jégkorongozom és az Ifj.Ocskay Gábor jégkorong akadémián nőttem fel. Utánpótlás éveim alatt, minden évben lehetőségem volt a csapattal a bajnoki címért/címekért küzdeni, amit szerencsére nagy arányban sikerült is megnyernünk. Fehérváron indult a Profi karrierem, amire 2017-ben, 18 évesen kaptam meg a lehetőséget a Fehérvári Titánok csapatában. 4 évet játszottam itt az Erste Ligában. Rengeteget volt szerencsém edzeni a Hydro Fehérvár csapatával és több mérkőzésre is eljutottam velük. A 2022/23-as szezonra egy éves szerződést kötöttem az Uni Győri Eto HC csapatával. Nyáron volt szerencsém csatlakozni a IcehockeyPRO57 táborához, ahol nagyon élveztem a közös munkát, mind az edzőkkel, mind a tehetséges gyerekekkel egyaránt. Remélem sok fiatal kapusnak tudok segíteni abban, hogy minél többet fejlődjenek és minél nagyobb sikereket érjenek el!',
            en: 'I have been playing ice hockey for 19 years and I grew up at the Gábor Ocskay Ice Hockey Academy. During my junior years, every year I had the opportunity to contend for the championship title/titles with the team, which fortunately we managed to win most seasons. My professional career began in Fehérvár, for which I got the opportunity in 2017 at the age of 18 in the Fehérvár Titans team. I played for that team in the Erste Liga for 4 years. I had the luck to train a great deal with the Hydro Fehérvár team and played several matches with them. I signed a one-year contract with Uni Győri Eto HC for the 2022/23 season. In summer, I had the opportunity to join the IcehockeyPRO57 camp, where I really enjoyed working together with both the coaches and the talented kids. I hope I can help many young goalkeepers to develop as much as they can and achieve as much success as they possibly can.',
        },
    },
    {
        img: '/images/about/coaches/kornakkerdaniel.jpg',
        name: {
            hu: 'Kornakker Dániel',
            en: 'Daniel Kornakker',
        },
        role: {
            hu: 'kapusedző',
            en: 'goalkeeper coach',
        },
        text: {
            hu: 'Többszörös utánpótlás Magyar és EBYL bajnok vagyok. Ebel ezüstérmes. 2x Magyar kupa győztes. Aktív karrierem alatt több kiváló kapusedzőtől tanulhattam és szereztem tapasztalatot, melyet célom határozottan és jókedvűen átadni a gyerekeknek.',
            en: 'I am a multiple junior Hungarian and EBYL champion. Ebel silver medalist. 2x Hungarian Cup winner. During my active career I have learned and gained experience from several excellent goalkeeping coaches, which I aim to pass on to the children in a determined and cheerful manner.',
        },
    },
    {
        img: '/images/about/coaches/vagojacint.jpg',
        name: {
            hu: 'Vágó Jácint',
            en: 'Jácint Vágó',
        },
        role: {
            hu: 'műkorcsolya oktató, szakedző',
            en: 'figure skating instructor, coach',
        },
        text: {
            hu: '2,5 évesen kezdődött a pályafutásom a városligeti műjégpályán. Öt éves koromtól már heti rendszerességgel jártam edzésekre és a nyaraim nagy részét is korcsolya edzőtáborokban töltöttem 12 éven keresztül. Magyar műkorcsolya szövetség válogatott kerettagként sikerült többszörös magyar bajnoki címet elérnem, de hazai és nemzetközi kupaversenyeken is értem el első és különböző dobogós, egyéb helyezéseket. 15 éven keresztül a műkorcsolyázás a mindennapjaim része volt. Jelenleg szabadidőmben különböző egyesületeknél szívesen adom át megszerzett tudásom, tapasztalatom a korcsolyázni vágyóknak, legyen szó kedvtelésből vagy profi célokat kitűző sportolókról. Vallom, hogy a magabiztos korcsolya tudás minden jeges sport nélkülözhetetlen alapja.',
            en: 'My career started at the age of 2.5 on Városliget ice rink. From the age of five, I went to training sessions on a weekly basis and spent most of my summers in skating training camps for 12 years. As a national skater of the Hungarian National Skating Federation, I won multiple Hungarian championship titles and I also won gold and other medals in national and international competitions. For 15 years, figure skating was part of my day-to- day life. At the moment, in my spare time, I am happy to pass on my acquired knowledge and experience to those who wish to skate, whether for fun or with professional ambitions. I believe that confident skating skills are an essential basis for all ice sports.',
        },
    },
    {
        img: '/images/about/coaches/baloghkata.jpg',
        name: {
            hu: 'Balogh Kata',
            en: 'Kata Balogh',
        },
        role: {
            hu: 'jógaoktató',
            en: 'yoga instructor',
        },
        text: {
            hu: 'Színházi táncos, kaszkadőr, légtornász, de leginkább jógaoktató vagyok. Célom, hogy segítsek az embereknek a testi-lelki harmónia megteremtésében a jóga és a meditáció-relaxáció által. A jóga energikussá teszi a testet és helyreállítja a mentális egészséget is, ami elengedhetetlen a sportolók kiemelkedő teljesítéséhez.',
            en: 'I am a theater dancer, stuntwoman, aerialist, but mostly a yoga instructor. My goal is to help people create physical-spiritual harmony through yoga and meditation-relaxation. Yoga energizes the body and restores mental health, which is essential for athletes to perform at their best.',
        },
    },
    {
        img: '/images/about/coaches/vargabarbi.jpg',
        name: {
            hu: 'Varga Anna Barbara',
            en: 'Anna Barbara Varga',
        },
        role: {
            hu: 'mentálhigiénés terapeuta',
            en: 'Mental health therapist',
        },
        text: {
            hu: 'Tanár, mentálhigiénés szakember, egyéni és párterapeuta vagyok. Szakterületem a mentális egészség kialakítása: az önismeret, önkép, önbizalom harmonikus, stabil alapokra helyezése, abból egy nyugodt, koncentrált, sikeres gyermek, kamasz, majd fiatal felnőtt kinevelése. Változatos feladatokkal, egyéni és csoportos játékokkal erősítem mindazokat a készségeket, adottságokat, melyekkel mind a sportban, mind a tanulásban eredményesebbek tudnak lenni a fiatalok. Húsz éves tapasztalattal a hátam mögött segítek a kiegyensúlyozott, magabiztos működést kialakítani, az elakadásokat, bizonytalanságokat felszámolni.',
            en: 'I am a teacher, mental health specialist, individual and couple therapist. The mental health development is my area of expertise - placing self- knowledge, self-image, and self-confidence on a harmonious, stable basis, and from there, raising a calm, focused, successful child, adolescent, and then young adult. Through various activities, individual and group games, I strengthen all the skills and abilities that young people can use to be more successful both in sports and in their studies. With twenty years of experience behind me, I help create a balanced, confident mode of operation, eliminate blockages and uncertainties.',
        },
    },
];

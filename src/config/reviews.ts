import type { MultiLang } from 'src/i18n/utils';

export type Review = {
    text: MultiLang<string>;
    author: MultiLang<string>;
};

export const reviews: Review[] = [
    {
        text: {
            hu: '12 év hokiszülői múlttal, Svédország és Amerika fiataljainak a jégkorongjába is "testközelből" betekintve, az a véleményem, hogy Attila profi mentalitású, felkészült ember, aki megtervezi, előkészíti és magas szinten el is végzi a munkáját. Ahhoz, hogy a srácok közelítsék, vagy elérjék a nemzetközi szintet, nagy szükség van arra, amit tőle kapnak. A fiunk, Levi elég egyértelműen fogalmazott vele kapcsolatban már az első találkozásuk után: "ő egy jó edző. Ilyen fáradt már régen voltam". Biztos vagyok benne, hogy Attila jégkoronggal kapcsolatos minden tevékenysége sikeres és magas színvonalú lesz, és bízom abban, hogy a jövőben több lehetősége lesz Levinek az edzésein részt venni.',
            en: 'With 12 years of experience as a hockey parent and "personal insight" into youth hockey in Sweden and America, in my opinion Attila is a well- prepared person with a professional attitude who plans, prepares and performs his work at a high level. In order for the guys to approach or reach the international level, what they get from him is very necessary. Our son, Levi, was quite straightforward after their first meeting and said: "he\'s a good coach. I haven\'t been so tired for a long time". I am sure that all of Attila\'s activities in the field of hockey will be successful and of a high standard and I trust that Levi will have more opportunities to visit his training sessions in the future.',
        },
        author: {
            hu: 'Birta Tamás',
            en: 'Tamás Birta',
        },
    },
    {
        text: {
            hu: 'Attila nemcsak kiváló pedagógus, de céltudatos edző is. Kihozza gyermekemből a benne rejlő képességeket. Edzései a komoly hokis nemzeteknél is az értékes szakmai tréningek közé tartoznának. Megfelelően motivál, és folyamatosan fejlődik nála a kisfiam. Ami külön érték az edzéseken, hogy átadja játékoséveiben szerzett tapasztalatait is tanítványainak. Mivel Attila imádja a jégkorongot, szívesen oktatja lányainkat is.',
            en: 'Attila is not only an excellent teacher, but also an ambitious coach. It brings out the potential in my child. His training sessions would be just as valuable professional training sessions in serious hockey nations. He motivates properly, my son is constantly developing with him. What is special during his trainings is that he passes on the experience he gathered during his professional years to the kids. Seeing Attila loves hockey, he also likes to teach our girls.',
        },
        author: {
            hu: 'Czabafy Bence',
            en: 'Bence Czabafy',
        },
    },
    {
        text: {
            hu: 'Kisfiam 9 éves korában egyik napról a másikra közölte, hogy ő a foci helyett inkább jéghokizni szeretne. Így korcsolya tudás nélkül márciusban kezdtünk edzésre járni. A hokisuliból 2 hét után az U8-ba, onnan 1 hónap múlva az U10-be, majd a májusi korosztály váltással az U12-es mezőnybe került. Beni minden akarata és igyekezete ellenére, a lemaradása nyilvánvaló volt és jött a nyári időszak. Olyan edzőt kerestem, aki Benivel differenciálva, kissebb csoportban tudott foglalkozni. Attilát az egyik edző ajánlotta, bár mikor láttam Attila hokis karrierjét, őszintén szólva egy kicsit félve emeltem fel a telefont. Tartottam attól, hogy Beni szintje kevés lesz ezekre a profi edzéskre. Hát nem így volt! Orbi egy empatikus, szuper komminukációjú edző. Azonnal megtalálja a hangot a gyerekekkel, kivállóan differenciál, katonás fegyelemmel és egyben atyáskodóan motivál és varázslatos módon tudja a fejlődni akaró gyerekeket a profik szintjére hozni. Az edzések hangulata szuper! Kisfiam igazi rajongója és ha tehetné minden edzésen ott lenne!',
            en: "At the age of 9, my son suddenly declared that he would rather play ice hockey than soccer. So, we began attending training sessions in March despite lacking any skating skills. Within two weeks, he moved from U8 straight out of hockey school to U10, and a month later, he advanced to U12 after moving up one age group in May. Despite Beni's determination and effort, he clearly lagged behind as the summer season approached. I sought a coach who could work with Beni at his own pace, in a smaller group. One of the coaches recommended Attila. Though apprehensive about Attila's hockey career, I was pleasantly surprised. Attila is an empathetic and highly communicative coach. He quickly establishes rapport with children, identifies their specific needs, motivates them with firm yet fatherly discipline, and remarkably brings those children who aspire to improve to a professional level. The training sessions' atmosphere is superb. My son is a true fan of Attila and would attend every session if he could.",
        },
        author: {
            hu: 'Egy Hokis Szülő',
            en: 'A Hockey Parent',
        },
    },
    {
        text: {
            hu: 'Attila játékos múltja miatt olyan tudást is át tud adni, ami egy profi karrier kezdetén hasznos lehet. Tetszik a türelme a gyerekekhez, előélete alapján nem erre számít az ember.',
            en: "Thanks to Attila's player history, he's capable of passing on knowledge that could be beneficial at the beginning of a professional career. I find his patience towards children impressive, which is not what you would typically expect based on his history.",
        },
        author: {
            hu: 'Karsai Ferenc',
            en: 'Ferenc Karsai',
        },
    },
    {
        text: {
            hu: 'Fiam az első Orbi edzése után sírva fakadt. Vett már részt sok hoki edzésen, kapott már terhelést korábban is, de ez valami más volt. A fáradtság, a rengeteg új feladat, a „nagyok” sebessége, egyszerűen ezt hozták ki belőle. Megpróbáltuk, de nem való még neki ez a szint - gondoltam, és megnyugtattam, többet nem jövünk. Hogy is gondolhattam, hogy 1 év hokizás után egy ilyen összetett, magas színvonalú edzésen, ennyi tehetséges játékos között majd jól érzi magát amúgy is érzékeny (egyke) gyermekem. Meglepett, amikor hazaérve higgadtan közölte: legközelebb is megyünk. Nem bánja, ha ő a legkisebb, ha ő a leglassabb, ott akar lenni „Orbi mesteredzésein” és úgy akar hokizni, mint a többiek.',
            en: `My son cried after his first Orbi training session. He had participated in many hockey training sessions and had been tested before, but this experience was different. Fatigue, numerous new activities, and the speed of the "big guys" simply brought out the best in him. I thought to myself, "We tried, but this may not be the right level for him yet," and reassured him that we wouldn't go again. How could I have imagined that after a year of playing hockey in such a complex, high-quality training environment, surrounded by so many talented players, my sensitive (only) child would feel at ease? He surprised me when, calmly, upon returning home, he said, "We will go again next time." He doesn't mind being the smallest or the slowest; he wants to participate in Orbi's master training sessions and play hockey like the others.`,
        },
        author: {
            hu: 'Pálfy Levente',
            en: 'Levente Pálfy',
        },
    },
    {
        text: {
            hu: 'Peti másfél éve jár Orbán Attilához, Orbihoz külön edzésre, legalább egyszer egy héten. Hogy mit tanul? Hokizni; jeges és száraz edzések, bottechnika, lövő edzés, koritechnika és taktikai edzés. És azt is megtanulja, hogy milyen egy jégkorongozó. Nemcsak edzés, de nevelés is, jégkorongozóvá nevelés, hogy hogyan viselkedjen a pályán, az öltözőben és azon kívül, mit egyen általában, a meccsek és az edzések előtt, közben és után, és mi mindenre kell még odafigyelnie. Hogy legyen elszánt és bátor, hogy ne féljen a kihívásoktól, hogy okosan vállaljon kockázatot, és legyen kitartó. Hogy az edzésmunka mellett figyeljen oda a tanulásra is; nemcsak a rengeteg edzésmunka táplálja a tehetséget, hanem a tanulás, az iskolai munka is. Mi, a szülei azt is látjuk, hogy egyre nyitottabb gyerek, hogy több az önbizalma a pályán és a pályán kívül is; hogy a csapattársai szeretik és tisztelik, és az osztálytársai is. Szerintem jó úton jár ahhoz, hogy talán egyszer még akár jégkorongozó is lehessen.',
            en: 'Peti has been going to Attila Orbán’s trainings for a year and a half, to special training sessions at least once a week. And what is he learning? To play hockey, has on-ice and off-ice trainings, stick technique, shooting training, skating technique and tactical training. And he also learns what it&#39;s like to be a hockey player. Not only training, but also education, education to become a hockey player, how to behave on the rink, in the locker room and outside, what to eat in general before, during and after matches and training, and all the things you need to pay attention to. To be determined and brave, to not be afraid of challenges, to take risks wisely and to be persistent. To focus on studies alongside training. Talent is not only nurtured by a lot of training, but also by studying and doing schoolwork. We, his parents, also see that he is an increasingly open child, that he has more self-confidence both on and off the rink; to be loved and respected by his teammates and classmates. I think he is well on his way to possibly even becoming a hockey player one day.',
        },
        author: {
            hu: 'Dr. Lassán Péter',
            en: 'Dr Péter Lassán',
        },
    },
    {
        text: {
            hu: 'Attila nagyon komplexen foglalkozik a gyerekek fejlesztésével, azok tudás-, és fizikai fejlettségi szintjére szabottan. A jó hangulatú, pörgős edzéseken minden alkalommal olyan praktikus tanácsokat, tippeket ad át, ami aranyat ér. Minden feladat, gyakorlat esetén tisztán, érthetően elmagyarázza, hogy azt miért csinálják, miben fog segíteni a pályán, a meccseken. Jó pedagógiai érzékkel igyekszik átadni azt az életszemléletet is, ami őt sikeressé tette. És ami a lényeg, a fiam szeret az edzéseire járni, mert jól érzi magát, keményen kell dolgoznia, és érzi, hogy az fejlesztően hat rá.',
            en: "Attila engages in the development of children in a highly complex way, tailored to their level of skills and stage of physical development. He always provides practical advice and invaluable tips during the dynamic and enjoyable training sessions he conducts. He explains clearly, in an easy-to-follow manner, why they are doing each activity and how it will benefit them on the rink and during matches. He strives to instill in children the attitude towards life that made him so successful, with a keen sense for children's needs. Most importantly, my son loves attending his training sessions because he enjoys himself, works hard, and feels the beneficial impact on his development.",
        },
        author: {
            hu: 'Szabadfalvi Péter',
            en: 'Péter Szabadfalvi',
        },
    },
];

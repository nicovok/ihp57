import type { MultiLang } from 'src/i18n/utils';

type Service = {
    lead: MultiLang<string>;
    text: MultiLang<string>;
};

const services: Service[] = [
    {
        lead: {
            hu: 'Mentorprogramunk',
            en: 'Our mentor program',
        },
        text: {
            hu: 'A jégkorong, mint komplex sport, számos kihívást és kitartást igényel a játékosoktól a fejlődés érdekében. Mentorprogramunk segítségével nyomon követjük a játékosok fejlődését, biztosítva számukra a megfelelő lehetőségeket a csapatokba való bekerüléshez és a draftokon való bemutatkozáshoz. Továbbá kiemelt figyelmet fordítunk arra, hogy tehetségeinket külföldi jégkorong akadémiákra és szakosított kollégiumokba juttassuk el. Célunk az, hogy mentorprogramunk résztvevői, függetlenül koruktól, elérjék a jégkorong legmagasabb szintjét.',
            en: 'Ice hockey is a complex sport, in which development requires, among others, a lot of diligence on the part of the players. In addition, within the framework of our mentor program we track the development curve of players and also provide players the opportunity to demonstrate their talent at drafts. We send our talents to foreign academies and colleges specializing in ice hockey. Our goal is for the players participating in our mentoring program to reach the highest possible level in hockey regardless of age group.',
        },
    },
    {
        lead: {
            hu: 'Tehetséggondozás',
            en: 'Fostering talent',
        },
        text: {
            hu: 'Személyre szabott, a jégkorong minden apró szükséges részére kiterjedő edzéstervet készítünk a játékosaink számára. Az edzéseken az egyéni készségeket figyelembe véve tovább erősítjük a játékosok erős oldalait, a fejlődéshez szükséges területeket támogatjuk a leghatékonyabb képzéssel. Rendszeres edzéssel és lelkiismeretes hozzáállással a játékosok nálunk ki tudják hozni magukból a bennük rejlő legmagasabb elérhető eredményt, mi biztosítjuk hozzá a világszínvonalú edzés programot.',
            en: 'We devise a personalized training plan for our players that covers every single detail of hockey. Focusing on individual skills, we further develop the strengths of the players during training sessions and support the areas necessary for development with the most effective training. With regular training and a conscientious approach, our players can bring out the best in themselves, while we provide a world-class training program.',
        },
    },
    {
        lead: {
            hu: 'Családi tanácsadás',
            en: 'Family counseling',
        },
        text: {
            hu: 'A fiatal tehetségek életében a család, iskola és sport között kell megtalálni a nyugodt és boldog összhangot. Ezek mellett számos apró és nagyobb döntést kell meghozni a játékosnak és családjának ahhoz, hogy a karriere is megfelelő irányba haladjon. Mi abban tudunk segíteni, hogy sikeres profi játékosainknak életpályájából merítkezve, különböző döntések példájával megmutassuk, milyen lehetőségekből áll egy-egy döntés alternatívája. Élsportolói szintet elérve a család támogatása katalizátora lehet az eredményeknek, részese lehet a sikernek!',
            en: 'A calm and happy harmony needs to be found between family, school and sports in the lives of young talents. In addition, the player and their family have to make many small and big decisions in order for their career to head in the right direction. We can help you draw on the careers of our successful professional players and show you what alternatives each decision consists of through the example of a variety of decisions. Having reached the level of an elite athlete, the support of the family can be a catalyst for results, it is a true part of success',
        },
    },
    {
        lead: {
            hu: 'Szponzori és pénzügyi tervezés',
            en: 'Sponsorship and financial planning',
        },
        text: {
            hu: 'A sok munka és szakmai kihívás mellett a rendezett, tervezhető anyagi háttér is elősegíti az eredmények elérését. A tehetséges sportolókat nemcsak a csapatok ajánlatai találják meg, hanem szponzori és pénzügyi lehetőségek is. Ezekben segítünk eligazodni, igyekszünk biztos és kiszámítható karrier állomásokat kitűzni játékosaink számára.',
            en: 'In addition to a great deal of work and professional challenges, the organized, planable financial background also helps achieve results. Talented athletes not only land offers from teams, but also find sponsorship and financial opportunities. We help you navigate these, strive to set steady and predictable career milestones for our players.',
        },
    },
    {
        lead: {
            hu: 'Sport pszichológiai fejlesztés',
            en: 'Sports psychological development',
        },
        text: {
            hu: 'Talán ezen a területen tapasztalható a legnagyobb minőségi korszakváltás a sportban. Számos mentális kihívás éri a játékosokat, melyet már nem lehet csak fizikális és technikai edzésekkel megoldani, szükség van sport pszichológiai támogatásra. Játékosainknak megadjuk a legmagasabb szintű konzultációkra és sportra szakosodott szakemberekkel az együtt gondolkozásra a lehetőséget.',
            en: 'It is perhaps in this particular area that it is possible to experience the most significant shift in sport. Players face numerous mental challenges, which cannot be solved by physical and technical training alone. Sports psychological support is also needed. We offer consultations at the highest level for our players, as well as the opportunity to sit down and think together with specialists specializing in sports.',
        },
    },
];

export { services };

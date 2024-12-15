import type { MultiLang } from "src/i18n/utils";

type Product = {
  name: MultiLang<string>;
  img: string;
  sizes?: string; // Sizes separated with comas
  description?: string; // As HTML
};

export const getProductSlug = (productsId: number) =>
  products[productsId].name.en.toLowerCase().replace(/\s+/g, "-");

export const getProductFromSlug = (slug: string) =>
  products.find((_, id) => getProductSlug(id) == slug);

export const products: Product[] = [
  {
    name: { hu: "Fekete Mez", en: "Black Jersey" },
    img: "/images/products/jersey-black.png",
    sizes: "",
    description: `
      <ul>
        <li>100% poliészter</li>
        <li>Gyorsan száradó könnyű anyag</li>
        <li>Környakas, nyakpánttal</li>
        <li>Raglán ujjak külső varrással</li>
        <li>Dupla tűzésű kivitel a nyakon, a mandzsettákon és a szegélyen</li>
        <li>STANDARD 100 by OEKO-TEX® N° CQ 1007/7, IFTH tanúsítvánnyal</li>
      </ul>
    `,
  },
  {
    name: { hu: "Piros Mez", en: "Red Jersey" },
    img: "/images/products/jersey-red.png",
    description: `
      <ul>
        <li>100% poliészter</li>
        <li>Gyorsan száradó könnyű anyag</li>
        <li>Környakas, nyakpánttal</li>
        <li>Raglán ujjak külső varrással</li>
        <li>Dupla tűzésű kivitel a nyakon, a mandzsettákon és a szegélyen</li>
        <li>STANDARD 100 by OEKO-TEX® N° CQ 1007/7, IFTH tanúsítvánnyal</li>
      </ul>
    `,
  },
  {
    name: { hu: "Fekete Pulcsi", en: "Black Hoodie" },
    img: "/images/products/hoodie-black.png",
    sizes: "XS,S,M,L,XL",
    description: `
      <table class="[&>*]:p-2 divide divide divide-neutral-600">
        <tr>
          <th></th>
          <th>XS</th>
          <th>S</th>
          <th>M</th>
          <th>L</th>
          <th>XL</th>
        </tr>
        <tr>
          <td>Testhossz</td>
          <td>50.17</td>
          <td>50.17</td>
          <td>53.98</td>
          <td>57.15</td>
          <td>60.96</td>
        </tr>
        <tr>
          <td>Mellbőség</td>
          <td>40.64</td>
          <td>40.64</td>
          <td>43.18</td>
          <td>45.72</td>
          <td>48.26</td>
        </tr>
        <tr>
          <td>Ujjhossz</td>
          <td>59.69</td>
          <td>59.69</td>
          <td>67.31</td>
          <td>70.49</td>
          <td>76.84</td>
        </tr>
      </table>
    `,
  },
  {
    name: { hu: "Piros Pulcsi", en: "Red Hoodie" },
    img: "/images/products/hoodie-red.png",
  },
  {
    name: { hu: "Fekete Hosszúujjú Póló", en: "Black Long Sleeve T-Shirt" },
    img: "/images/products/sweater-black.png",
  },
  {
    name: { hu: "Piros Hosszúujjú Póló", en: "Red Long Sleeve T-Shirt" },
    img: "/images/products/sweater-red.png",
  },
  {
    name: { hu: "Fehér Póló", en: "White T-Shirt" },
    img: "/images/products/tshirt-white.png",
    sizes: "6/8,8/10,10/12,12/14,XS,S,M,L,XL,2XL,3XL",
    description: `
      PÓLÓ TULAJDONSÁGAI:

      <ul class="p-5 list-disc">
        <li>100% poliészter</li>
        <li>Gyorsan száradó könnyű anyag</li>
        <li>Környakas, nyakpánttal</li>
        <li>Raglán ujjak külső varrással</li>
        <li>Dupla tűzésű kivitel a nyakon, a mandzsettákon és a szegélyen</li>
        <li>STANDARD 100 by OEKO-TEX® N° CQ 1007/7, IFTH tanúsítvánnyal</li>
      </ul>

      <table class="[&>*]:p-2 divide divide divide-neutral-600">
        <tr>
          <th>Felnőtt</th>
          <th>XS</th>
          <th>S</th>
          <th>M</th>
          <th>L</th>
          <th>XL</th>
          <th>2XL</th>
          <th>3XL</th>
        </tr>
        <tr>
          <td>Testhossz</td>
          <td>68.20</td>
          <td>70.30</td>
          <td>72.40</td>
          <td>74.50</td>
          <td>76.60</td>
          <td>79.50</td>
          <td>82.40</td>
        </tr>
        <tr>
          <td>Mellbőség</td>
          <td>45.50</td>
          <td>48.50</td>
          <td>51.50</td>
          <td>54.50</td>
          <td>57.50</td>
          <td>61.50</td>
          <td>65.50</td>
        </tr>
        <tr>
          <td>Ujjhossz</td>
          <td>34.20</td>
          <td>36.10</td>
          <td>38</td>
          <td>39.90</td>
          <td>41.80</td>
          <td>44.25</td>
          <td>46.70</td>
        </tr>
      </table>

      <table class="[&>*]:p-2 divide divide divide-neutral-600">
        <tr>
          <th>Gyermek</th>
          <th>6/8</th>
          <th>8/10</th>
          <th>10/12</th>
          <th>12/14	</th>
        </tr>
        <tr>
          <td>Testhossz</td>
          <td>53</th>
          <td>58</th>
          <td>63</th>
          <td>68</th>
        </tr>
        <tr>
          <td>Mellbőség</td>
          <td>37</th>
          <td>40</th>
          <td>43</th>
          <td>46</th>
        </tr>
        <tr>
          <td>Ujjhossz</td>
          <td>25.45</th>
          <td>27.25</th>
          <td>29.05</th>
          <td>30.85</th>
        </tr>
      </table>
    `,
  },
  {
    name: { hu: "Fekete Póló", en: "Black T-Shirt" },
    img: "/images/products/tshirt-black.png",
    sizes: "6/8,8/10,10/12,12/14,XS,S,M,L,XL,2XL,3XL",
    description: `
      PÓLÓ TULAJDONSÁGAI:

      <ul class="p-5 list-disc">
        <li>100% poliészter</li>
        <li>Gyorsan száradó könnyű anyag</li>
        <li>Környakas, nyakpánttal</li>
        <li>Raglán ujjak külső varrással</li>
        <li>Dupla tűzésű kivitel a nyakon, a mandzsettákon és a szegélyen</li>
        <li>STANDARD 100 by OEKO-TEX® N° CQ 1007/7, IFTH tanúsítvánnyal</li>
      </ul>

      <table class="[&>*]:p-2 divide divide divide-neutral-600">
        <tr>
          <th>Felnőtt</th>
          <th>XS</th>
          <th>S</th>
          <th>M</th>
          <th>L</th>
          <th>XL</th>
          <th>2XL</th>
          <th>3XL</th>
        </tr>
        <tr>
          <td>Testhossz</td>
          <td>68.20</td>
          <td>70.30</td>
          <td>72.40</td>
          <td>74.50</td>
          <td>76.60</td>
          <td>79.50</td>
          <td>82.40</td>
        </tr>
        <tr>
          <td>Mellbőség</td>
          <td>45.50</td>
          <td>48.50</td>
          <td>51.50</td>
          <td>54.50</td>
          <td>57.50</td>
          <td>61.50</td>
          <td>65.50</td>
        </tr>
        <tr>
          <td>Ujjhossz</td>
          <td>34.20</td>
          <td>36.10</td>
          <td>38</td>
          <td>39.90</td>
          <td>41.80</td>
          <td>44.25</td>
          <td>46.70</td>
        </tr>
      </table>

      <table class="[&>*]:p-2 divide divide divide-neutral-600">
        <tr>
          <th>Gyermek</th>
          <th>6/8</th>
          <th>8/10</th>
          <th>10/12</th>
          <th>12/14	</th>
        </tr>
        <tr>
          <td>Testhossz</td>
          <td>53</th>
          <td>58</th>
          <td>63</th>
          <td>68</th>
        </tr>
        <tr>
          <td>Mellbőség</td>
          <td>37</th>
          <td>40</th>
          <td>43</th>
          <td>46</th>
        </tr>
        <tr>
          <td>Ujjhossz</td>
          <td>25.45</th>
          <td>27.25</th>
          <td>29.05</th>
          <td>30.85</th>
        </tr>
      </table>
    `,
  },
  {
    name: { hu: "Piros Póló", en: "Red T-Shirt" },
    img: "/images/products/tshirt-red.png",
    sizes: "6/8,8/10,10/12,12/14,XS,S,M,L,XL,2XL,3XL",
    description: `
      PÓLÓ TULAJDONSÁGAI:

      <ul class="p-5 list-disc">
        <li>100% poliészter</li>
        <li>Gyorsan száradó könnyű anyag</li>
        <li>Környakas, nyakpánttal</li>
        <li>Raglán ujjak külső varrással</li>
        <li>Dupla tűzésű kivitel a nyakon, a mandzsettákon és a szegélyen</li>
        <li>STANDARD 100 by OEKO-TEX® N° CQ 1007/7, IFTH tanúsítvánnyal</li>
      </ul>

      <table class="[&>*]:p-2 divide divide divide-neutral-600">
        <tr>
          <th>Felnőtt</th>
          <th>XS</th>
          <th>S</th>
          <th>M</th>
          <th>L</th>
          <th>XL</th>
          <th>2XL</th>
          <th>3XL</th>
        </tr>
        <tr>
          <td>Testhossz</td>
          <td>68.20</td>
          <td>70.30</td>
          <td>72.40</td>
          <td>74.50</td>
          <td>76.60</td>
          <td>79.50</td>
          <td>82.40</td>
        </tr>
        <tr>
          <td>Mellbőség</td>
          <td>45.50</td>
          <td>48.50</td>
          <td>51.50</td>
          <td>54.50</td>
          <td>57.50</td>
          <td>61.50</td>
          <td>65.50</td>
        </tr>
        <tr>
          <td>Ujjhossz</td>
          <td>34.20</td>
          <td>36.10</td>
          <td>38</td>
          <td>39.90</td>
          <td>41.80</td>
          <td>44.25</td>
          <td>46.70</td>
        </tr>
      </table>

      <table class="[&>*]:p-2 divide divide divide-neutral-600">
        <tr>
          <th>Gyermek</th>
          <th>6/8</th>
          <th>8/10</th>
          <th>10/12</th>
          <th>12/14	</th>
        </tr>
        <tr>
          <td>Testhossz</td>
          <td>53</th>
          <td>58</th>
          <td>63</th>
          <td>68</th>
        </tr>
        <tr>
          <td>Mellbőség</td>
          <td>37</th>
          <td>40</th>
          <td>43</th>
          <td>46</th>
        </tr>
        <tr>
          <td>Ujjhossz</td>
          <td>25.45</th>
          <td>27.25</th>
          <td>29.05</th>
          <td>30.85</th>
        </tr>
      </table>
    `,
  },
  {
    name: { hu: "Sárga Póló", en: "Yellow T-Shirt" },
    img: "/images/products/tshirt-yellow.png",
    sizes: "6/8,8/10,10/12,12/14,XS,S,M,L,XL,2XL,3XL",
    description: `
      PÓLÓ TULAJDONSÁGAI:

      <ul class="p-5 list-disc">
        <li>100% poliészter</li>
        <li>Gyorsan száradó könnyű anyag</li>
        <li>Környakas, nyakpánttal</li>
        <li>Raglán ujjak külső varrással</li>
        <li>Dupla tűzésű kivitel a nyakon, a mandzsettákon és a szegélyen</li>
        <li>STANDARD 100 by OEKO-TEX® N° CQ 1007/7, IFTH tanúsítvánnyal</li>
      </ul>

      <table class="[&>*]:p-2 divide divide divide-neutral-600">
        <tr>
          <th>Felnőtt</th>
          <th>XS</th>
          <th>S</th>
          <th>M</th>
          <th>L</th>
          <th>XL</th>
          <th>2XL</th>
          <th>3XL</th>
        </tr>
        <tr>
          <td>Testhossz</td>
          <td>68.20</td>
          <td>70.30</td>
          <td>72.40</td>
          <td>74.50</td>
          <td>76.60</td>
          <td>79.50</td>
          <td>82.40</td>
        </tr>
        <tr>
          <td>Mellbőség</td>
          <td>45.50</td>
          <td>48.50</td>
          <td>51.50</td>
          <td>54.50</td>
          <td>57.50</td>
          <td>61.50</td>
          <td>65.50</td>
        </tr>
        <tr>
          <td>Ujjhossz</td>
          <td>34.20</td>
          <td>36.10</td>
          <td>38</td>
          <td>39.90</td>
          <td>41.80</td>
          <td>44.25</td>
          <td>46.70</td>
        </tr>
      </table>

      <table class="[&>*]:p-2 divide divide divide-neutral-600">
        <tr>
          <th>Gyermek</th>
          <th>6/8</th>
          <th>8/10</th>
          <th>10/12</th>
          <th>12/14	</th>
        </tr>
        <tr>
          <td>Testhossz</td>
          <td>53</th>
          <td>58</th>
          <td>63</th>
          <td>68</th>
        </tr>
        <tr>
          <td>Mellbőség</td>
          <td>37</th>
          <td>40</th>
          <td>43</th>
          <td>46</th>
        </tr>
        <tr>
          <td>Ujjhossz</td>
          <td>25.45</th>
          <td>27.25</th>
          <td>29.05</th>
          <td>30.85</th>
        </tr>
      </table>
    `,
  },
  {
    name: { hu: "Rövidnadrág", en: "Short" },
    img: "/images/products/short.png",
    sizes: "XS,S,M,L,XL,2XL,3XL,6/8,8/10,10/12,12/14",
    description: `
      <ul>
        <li>100% poliészter</li>
        <li>Könnyű szövet</li>
        <li>Elasztikus derékpánt húzózsinórral</li>
        <li>Külső varrások a paneleken</li>
        <li>Dupla tűzésű kivitel a szegélyen</li>
      </ul>

      <table>
        <tr>
          <th>Felnőtt</th>
          <th>XS</th>
          <th>S</th>
          <th>M</th>
          <th>L</th>
          <th>XL</th>
          <th>2XL</th>
          <th>3XL</th>
        </tr>
        <tr>
          <td>Derékbőség</td>
          <td>32</td>
          <td>34</td>
          <td>36</td>
          <td>38</td>
          <td>41</td>
          <td>45</td>
          <td>49</td>
        </tr>
        <tr>
          <td>Külső Szárhossz</td>
          <td>46.00</td>
          <td>48.00</td>
          <td>49.00</td>
          <td>50.00</td>
          <td>52.00</td>
          <td>53.00</td>
          <td>55.00</td>
        </tr>
        <tr>
          <td>Csípőbőség</td>
          <td>45.95</td>
          <td>49</td>
          <td>52.05</td>
          <td>55.05</td>
          <td>58.10</td>
          <td>62.15</td>
          <td>66.20</td>
        </tr>
      </table>

      <table>
        <tr>
          <th>Gyermek</th>
          <th>6/8</th>
          <th>8/10</th>
          <th>10/12</th>
          <th>12/14	</th>
        </tr>
        <tr>
          <td>Derékbőség</td>
          <td>28</td>
          <td>29</td>
          <td>30</td>
          <td>31</td>
        </tr>
        <tr>
          <td>Külső Szárhossz</td>
          <td>33</td>
          <td>37</td>
          <td>41</td>
          <td>45</td>
        </tr>
        <tr>
          <td>Csípőbőség</td>
          <td>37.80</td>
          <td>39.80</td>
          <td>41.85</td>
          <td>43.90</td>
        </tr>
      </table>
    `,
  },
  {
    name: { hu: "Melegítő Nadrág", en: "Sweatpants" },
    img: "/images/products/sweatpants-black.png",
    sizes: "XS,S,M,L,XL,2XL,3XL,4XL",
    description: `
      <ul>
        <li>80% organikus pamut / 20% használat utáni újrahasznosított poliészter</li>
        <li>Oxford Grey 75% organikus pamut / 25% használat utáni újrahasznosított poliészter</li>
        <li>French terry LST (alacsony zsugorodású terry)</li>
        <li>2 oldalzseb és 1 rávarrt hátsó zseb</li>
        <li>Elasztikus 1x1 bordázott derékpánt hozzáillő lapos húzózsinórral és fém zsinórvéggel</li>
        <li>Anyag: Pamut/Poliészter, Organikus pamut, Újrahasznosított poliészter</li>
        <li>Szabás: Zsebes</li>
        <li>Részletek: 300-349 g/m2</li>
      </ul>
    `,
  },
  {
    name: { hu: "Zokni", en: "Socks" },
    img: "/images/products/socks.png",
  },
  {
    name: { hu: "Fekete Törölköző", en: "Towel Black" },
    img: "/images/products/towel-black.png",
  },
  {
    name: { hu: "Piros Törölköző", en: "Red Towel" },
    img: "/images/products/towel-red.png",
  },
  {
    name: { hu: "Hátizsák", en: "Backpack" },
    img: "/images/products/backpack.png",
    description: `
      <ul>
        <li>Sporthátizsák 600D poliészterből és Ripstop 300D anyagból.</li>
        <li>Nagy fő rekesz és alul cipőtartó rekesz szellőző lyukakkal.</li>
        <li>Oldalzsebek, párnázott lélegző hátrész és állítható vállpántok.</li>
      </ul>

      <table>
        <tr>
          <td>Hosszúság</td>
          <td>50</td>
        </tr>
        <tr>
          <td>Szélesség</td>
          <td>27</td>
        </tr>
        <tr>
          <td>Mélység</td>
          <td>21</td>
        </tr>
      </table>
    `,
  },
  {
    name: { hu: "Fekete Tornazsák", en: "Black Rawstring Bag" },
    img: "/images/products/rawstring-black.png",
  },
  {
    name: { hu: "Piros Tornazsák", en: "Red Rawstring Bag" },
    img: "/images/products/rawstring-red.png",
  },
  {
    name: { hu: "Prémium Tornazsák", en: "Premium Rawstring Bag" },
    img: "/images/products/rawstring.png",
  },
  {
    name: { hu: "Kabát", en: "Jacket" },
    img: "/images/products/jacket.png",
    sizes: "XS,S,M,L,XL,2XL,3XL,4XL",
    description: `
      <ul>
        <li>Külső: 100% poliészter PVC bevonattal (vízlepergető) - 200 g/m²</li>
        <li>Belső párnázás: 100% poliészter – 350 g/m²</li>
        <li>Bélés: 100% poliészter – 60 g/m²</li>
        <li>2 cipzáras oldalzseb</li>
        <li>1 belső zseb</li>
        <li>Bordázott nyak és mandzsetták</li>
        <li>Fényvisszaverő szalag a vállakon és az oldalán</li>
        <li>Bélelt kapucni</li>
        <li>1 cipzár a mellkason és 1 cipzáras hozzáférés a dekorációs szegélyen</li>
      </ul>

      <table class="size-table">
        <tr>
          <th></th>
          <th>XS</th>
          <th>S</th>
          <th>M</th>
          <th>L</th>
          <th>XL</th>
          <th>2XL</th>
          <th>3XL</th>
          <th>4XL</th>
        </tr>
        <tr>
          <td>Testhossz</td>
          <td>88</td>
          <td>90</td>
          <td>92</td>
          <td>94</td>
          <td>96</td>
          <td>98</td>
          <td>100.75</td>
          <td>102.75</td>
        </tr>
        <tr>
          <td>Mellbőség</td>
          <td>55</td>
          <td>58</td>
          <td>61</td>
          <td>64</td>
          <td>67</td>
          <td>70</td>
          <td>74</td>
          <td>77</td>
        </tr>
        <tr>
          <td>Ujjhossz</td>
          <td>64</td>
          <td>66</td>
          <td>68</td>
          <td>70</td>
          <td>72</td>
          <td>74</td>
          <td>76.25</td>
          <td>78.25</td>
        </tr>
      </table>
    `,
  },
  {
    name: { hu: "Téli Sapka", en: "Beanie" },
    img: "/images/products/beanie.png",
    description: `
      <p>Sima és bojtos elején hímzett oroszlánnal ellátva.</p>

      <ul>
        <li>Anyaga: 100% puha tapintásaú akril</li>
        <li>Anyagvastagság: 340 gr</li>
      </ul>

      <p>A Snowstar® Beanie 100%-ban puha tapintású akrilból készült, ami kiváló melegséget és kényelmet biztosít. Dupla rétegű kötéssel rendelkezik.</p>
      <p>A kéttónusú pom-pom még egyedibbé teszi a sapkát.</p>
    `,
  },
  {
    name: { hu: "Téli Sapka 2", en: "Beanie 2" },
    img: "/images/products/beanie2.png",
  },
  {
    name: { hu: "Téli Sapka 3", en: "Beanie 3" },
    img: "/images/products/beanie3.png",
  },
  {
    name: { hu: "Bögre", en: "Mug" },
    img: "/images/products/mug.png",
  },
  {
    name: { hu: "Baseball Sapka", en: "Baseball Hat" },
    img: "/images/products/baseball.png",
  },
  {
    name: { hu: "Babzsák", en: "Beanbag" },
    img: "/images/products/beanbag.png",
  },
];

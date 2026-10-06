export type Lang = "vi" | "en";

export type Copy = { vi: string; en: string };

export const company = {
  name: "Công ty TNHH Xuất Nhập Khẩu Hoàng Minh Cashew",
  short: "Hoàng Minh Cashew",
  address:
    "Số 595, đường Thống Nhất, khu phố Phước Vĩnh, Phường Phước Bình, TP Đồng Nai, Việt Nam",
  address2: "Đường DT741, Tổ 1, Ấp Thuận Hòa 1, xã Thuận Lợi, Đồng Nai",
  phone: "0974 99 11 77",
  phoneRaw: "0974991177",
  email: "cuongloanbd@gmail.com",
  founded: "03/06/2021",
};

export const nav: {
  href: string;
  label: Copy;
  children?: { href: string; label: Copy }[];
}[] = [
  { href: "/", label: { vi: "Trang chủ", en: "Home" } },
  {
    href: "/gioi-thieu",
    label: { vi: "Giới thiệu", en: "About" },
    children: [
      { href: "/gioi-thieu", label: { vi: "Giới thiệu công ty", en: "Company introduction" } },
      { href: "/gioi-thieu/thu-ngo", label: { vi: "Thư ngỏ", en: "Open letter" } },
    ],
  },
  { href: "/linh-vuc-hoat-dong", label: { vi: "Lĩnh vực hoạt động", en: "Business" } },
  {
    href: "/san-pham",
    label: { vi: "Sản phẩm", en: "Products" },
    children: [
      { href: "/san-pham/hat-dieu-ws", label: { vi: "Hạt Điều WS", en: "WS Cashew" } },
      { href: "/san-pham/hat-dieu-ww240", label: { vi: "Hạt Điều WW240", en: "WW240 Cashew" } },
      { href: "/san-pham/hat-dieu-ww210", label: { vi: "Hạt Điều WW210", en: "WW210 Cashew" } },
      { href: "/san-pham/hat-dieu-ww180", label: { vi: "Hạt Điều WW180", en: "WW180 Cashew" } },
    ],
  },
  { href: "/thi-truong", label: { vi: "Thị trường", en: "Markets" } },
  { href: "/chung-nhan", label: { vi: "Chứng nhận", en: "Certificates" } },
  { href: "/su-kien", label: { vi: "Sự kiện", en: "News" } },
  { href: "/lien-he", label: { vi: "Liên hệ", en: "Contact" } },
];

const intro = {
  vi: "Công ty TNHH Xuất Nhập Khẩu Hoàng Minh Cashew được thành lập vào ngày 03/06/2021, hoạt động trong lĩnh vực gia công, sản xuất và xuất khẩu hạt điều. Với tầm nhìn trở thành một trong những doanh nghiệp hàng đầu trong ngành hạt điều Việt Nam, Hoàng Minh Cashew cam kết cung cấp các sản phẩm chất lượng cao, đáp ứng tiêu chuẩn xuất khẩu sang nhiều thị trường quốc tế. Công ty tập trung vào việc kiểm soát chất lượng nghiêm ngặt từ khâu thu mua nguyên liệu, gia công chế biến đến đóng gói, đảm bảo sản phẩm đạt tiêu chuẩn vệ sinh an toàn thực phẩm. Ngoài ra, Hoàng Minh Cashew còn chú trọng đến việc tối ưu hóa quy trình sản xuất để nâng cao năng suất và giảm thiểu tác động đến môi trường. Với đội ngũ nhân sự giàu kinh nghiệm và hệ thống nhà xưởng hiện đại, công ty đã và đang khẳng định vị thế trong ngành hạt điều xuất khẩu, tạo dựng được sự tin tưởng từ khách hàng trong và ngoài nước.",
  en: "Hoang Minh Cashew Import Export Co., Ltd. was established on 3 June 2021. The company processes, manufactures, and exports cashew kernels. Hoang Minh Cashew aims to be one of Vietnam’s leading cashew businesses and supplies products that meet export standards in many international markets. Quality is controlled from raw-material purchasing through processing and packing, so the kernels meet food-safety requirements. The company also works to improve productivity and reduce environmental impact. With an experienced team and a modern factory, Hoang Minh Cashew has built trust with customers in Vietnam and abroad.",
};

const certIntro = {
  vi: "Với mục tiêu mang đến những sản phẩm an toàn, chất lượng, Hoàng Minh Cashew đã đạt được các chứng nhận quan trọng trong ngành thực phẩm, bao gồm:",
  en: "To deliver safe, high-quality products, Hoang Minh Cashew holds these important food-industry certificates:",
};

export const certificates: { title: string; body: Copy }[] = [
  {
    title: "BRC",
    body: {
      vi: "BRC (British Retail Consortium) – Tiêu chuẩn toàn cầu về an toàn thực phẩm, đảm bảo sản phẩm đáp ứng yêu cầu của các nhà bán lẻ lớn trên thế giới.",
      en: "BRC (British Retail Consortium) is a global food-safety standard. It shows the product meets the requirements of major retailers worldwide.",
    },
  },
  {
    title: "HACCP",
    body: {
      vi: "HACCP (Hazard Analysis and Critical Control Points) – Hệ thống quản lý an toàn thực phẩm giúp kiểm soát các mối nguy trong quá trình sản xuất.",
      en: "HACCP (Hazard Analysis and Critical Control Points) is a food-safety system that controls hazards during production.",
    },
  },
  {
    title: "FDA",
    body: {
      vi: "FDA (Food and Drug Administration – Hoa Kỳ) – Được cấp phép xuất khẩu vào thị trường Mỹ, đáp ứng các tiêu chuẩn nghiêm ngặt về vệ sinh và an toàn thực phẩm.",
      en: "FDA (U.S. Food and Drug Administration) registration allows export to the United States under strict hygiene and food-safety rules.",
    },
  },
];

export const commitments: Copy[] = [
  {
    vi: "Quy trình sản xuất hiện đại: Hoàng Minh Cashew áp dụng công nghệ tiên tiến và quy trình kiểm soát chất lượng nghiêm ngặt từ khâu chọn lựa nguyên liệu, gia công, chế biến đến đóng gói.",
    en: "Modern production: Hoang Minh Cashew uses advanced technology and strict quality control from raw-material selection through processing and packing.",
  },
  {
    vi: "Cam kết bền vững: Không ngừng nâng cao chất lượng sản phẩm, tối ưu hóa quy trình sản xuất và đảm bảo trách nhiệm với môi trường.",
    en: "Sustainability: the company keeps improving product quality, refining the process, and taking responsibility for the environment.",
  },
];

export const certClose = {
  vi: "Với nền tảng vững chắc và những chứng nhận quốc tế, Công ty TNHH XNK Hoàng Minh Cashew cam kết mang đến sản phẩm hạt điều đạt chuẩn chất lượng toàn cầu, góp phần nâng tầm giá trị hạt điều Việt Nam trên thị trường quốc tế.",
  en: "With that foundation and international certificates, Hoang Minh Cashew supplies cashew that meets global quality standards and raises the value of Vietnamese cashew on the world market.",
};

export const markets: { region: Copy; detail: Copy }[] = [
  {
    region: { vi: "Châu Âu", en: "Europe" },
    detail: {
      vi: "Hà Lan, Ba Lan, Đức, Hy Lạp, Pháp, Ý – những thị trường tiêu thụ hạt điều lớn với yêu cầu nghiêm ngặt về chất lượng và an toàn thực phẩm.",
      en: "The Netherlands, Poland, Germany, Greece, France, and Italy. These are large cashew markets with strict quality and food-safety requirements.",
    },
  },
  {
    region: { vi: "Trung Đông", en: "Middle East" },
    detail: {
      vi: "Thổ Nhĩ Kỳ, Các Tiểu vương quốc Ả Rập Thống nhất (UAE), Ả Rập Xê Út, Algeria, Libya… – khu vực có nhu cầu tiêu thụ hạt điều ngày càng tăng, đặc biệt là phân khúc hạt điều cao cấp.",
      en: "Turkey, the United Arab Emirates, Saudi Arabia, Algeria, Libya, and others. Demand is growing, especially for premium kernels.",
    },
  },
  {
    region: { vi: "Châu Mỹ", en: "Americas" },
    detail: {
      vi: "Mỹ, Canada – thị trường khắt khe, đòi hỏi tiêu chuẩn FDA và các chứng nhận an toàn thực phẩm cao cấp.",
      en: "The United States and Canada. These markets require FDA standards and advanced food-safety certificates.",
    },
  },
  {
    region: { vi: "Châu Á – Thái Bình Dương", en: "Asia-Pacific" },
    detail: {
      vi: "Thái Lan, Singapore, Australia, Trung Quốc, Hong Kong… – những thị trường năng động với sức tiêu thụ hạt điều mạnh mẽ, đặc biệt là trong ngành thực phẩm chế biến và bán lẻ.",
      en: "Thailand, Singapore, Australia, China, Hong Kong, and others. These active markets consume cashew strongly in processing and retail.",
    },
  },
];

export const marketIntro = {
  vi: "Từ khi thành lập, Hoàng Minh Cashew đã nhanh chóng chiếm lĩnh nhiều thị trường quan trọng trên toàn cầu, đặc biệt là các khu vực đòi hỏi tiêu chuẩn chất lượng cao như:",
  en: "Since it was founded, Hoang Minh Cashew has entered important markets around the world, especially regions that demand high quality standards:",
};

const nutrition = {
  vi: "Hạt điều rất bổ dưỡng và là nguồn cung cấp protein và các khoáng chất thiết yếu, bao gồm: đồng, canxi, magiê, sắt, phốt pho, kali và kẽm. Chứa 0% cholesterol. Hoàn hảo để làm thức ăn cao cấp cho mọi người. Trong hạt điều có chứa rất nhiều vitamin và khoáng chất, chất chống oxy hóa như vitamin E, K, B6 và khoáng chất đồng, photpho, kẽm, magie, sắt và selen giúp duy trì tốt các chức năng của cơ thể.",
  en: "Cashew is nutritious. It supplies protein and essential minerals including copper, calcium, magnesium, iron, phosphorus, potassium, and zinc. It contains 0% cholesterol and suits premium food use. The kernel also provides vitamins E, K, and B6, plus copper, phosphorus, zinc, magnesium, iron, and selenium.",
};

const processSteps: Copy[] = [
  {
    vi: "Xử lý nhiệt: Hấp hạt điều bằng hơi nóng, dầu nóng hoặc hơi nước để vỏ cứng mềm hơn, rồi làm nguội khoảng 12 giờ trước khi chẻ lấy nhân.",
    en: "Heat treatment: steam, hot oil, or vapor softens the hard shell. The nuts cool for about 12 hours before shelling.",
  },
  {
    vi: "Chẻ vỏ thu nhân: Công nhân có tay nghề tách vỏ ngoài để lấy nhân, hạn chế vỡ hạt. Sau bước này có vỏ điều thô, vỏ lụa và nhân điều thô.",
    en: "Shelling: skilled workers remove the outer shell and keep the kernel whole. This step yields raw shell, testa, and raw kernel.",
  },
  {
    vi: "Phân loại và chấm điểm: Nhân trắng được chia thành nguyên hạt và hạt vỡ. Nguyên hạt có nhiều cấp kích thước; hạt vỡ có các cấp riêng.",
    en: "Grading: white kernels are sorted into wholes and brokens. Wholes are graded by size, and brokens have their own grades.",
  },
];

const benefits = {
  vi: "Ăn hạt điều thường xuyên có thể hỗ trợ tim mạch, giảm nguy cơ tiểu đường, hỗ trợ xương và răng, giảm nguy cơ thiếu máu, và tăng cường hệ miễn dịch.",
  en: "Regular cashew consumption can support heart health, help manage diabetes risk, support bones and teeth, reduce anemia risk, and strengthen immunity.",
};

export type Product = {
  slug: string;
  name: Copy;
  grade: string;
  tone: "gold" | "cream" | "green" | "split";
  summary: Copy;
  detail: Copy;
  specs: { label: Copy; value: Copy }[];
};

const sharedSpecs = [
  { label: { vi: "Độ ẩm", en: "Moisture" }, value: { vi: "Tối đa 5%", en: "Maximum 5%" } },
  { label: { vi: "Bị hỏng", en: "Damaged" }, value: { vi: "Tối đa 10%", en: "Maximum 10%" } },
  { label: { vi: "Khiếm khuyết", en: "Defects" }, value: { vi: "Tối đa 8%", en: "Maximum 8%" } },
  {
    label: { vi: "Đóng gói", en: "Packing" },
    value: { vi: "22,68 kg mỗi túi / 700 túi mỗi cont 20ft", en: "22.68 kg per bag / 700 bags per 20ft container" },
  },
];

export const products: Product[] = [
  {
    slug: "hat-dieu-ws",
    name: { vi: "Hạt Điều WS", en: "WS Cashew" },
    grade: "WS",
    tone: "split",
    summary: {
      vi: "Nhân trắng vỡ đôi, dùng cho chế biến và thực phẩm cao cấp.",
      en: "White splits for processing and premium food.",
    },
    detail: {
      vi: "Hạt Điều WS là nhân trắng bị tách đôi. Sản phẩm vẫn giữ giá trị dinh dưỡng của hạt điều nguyên hạt và thường dùng để rang, tẩm vị hoặc chế biến thực phẩm.",
      en: "WS cashew is a white kernel split into halves. It keeps the nutrition of a whole kernel and is commonly roasted, seasoned, or used in food processing.",
    },
    specs: [
      { label: { vi: "Màu sắc", en: "Color" }, value: { vi: "Trắng, hạt vỡ đôi", en: "White splits" } },
      { label: { vi: "Dạng hạt", en: "Form" }, value: { vi: "Nhân vỡ đôi", en: "Split kernels" } },
      ...sharedSpecs,
    ],
  },
  {
    slug: "hat-dieu-ww240",
    name: { vi: "Hạt Điều WW240", en: "WW240 Cashew" },
    grade: "WW240",
    tone: "cream",
    summary: {
      vi: "Nhân trắng nguyên hạt, cỡ phổ biến cho xuất khẩu và chế biến.",
      en: "Whole white kernels, a common export and processing size.",
    },
    detail: {
      vi: "Hạt điều nhân trắng WW240 là nhân nguyên hạt màu trắng ngà. Cỡ này được dùng rộng rãi cho hạt điều rang muối, mật ong, tỏi ớt và các sản phẩm đóng gói bán lẻ.",
      en: "WW240 is an ivory whole white kernel. This size is widely used for salted, honey, and chili-garlic roasts, and for retail packing.",
    },
    specs: [
      { label: { vi: "Màu sắc", en: "Color" }, value: { vi: "Trắng nguyên hạt", en: "Whole white" } },
      { label: { vi: "Số hạt / pound", en: "Nuts per pound" }, value: { vi: "220–240", en: "220–240" } },
      { label: { vi: "Số hạt / kg", en: "Nuts per kg" }, value: { vi: "485–530", en: "485–530" } },
      ...sharedSpecs,
    ],
  },
  {
    slug: "hat-dieu-ww210",
    name: { vi: "Hạt Điều WW210", en: "WW210 Cashew" },
    grade: "WW210",
    tone: "gold",
    summary: {
      vi: "Nhân trắng nguyên hạt cỡ lớn, phù hợp thực phẩm cao cấp.",
      en: "Large whole white kernels for premium food.",
    },
    detail: {
      vi: "Hạt điều nhân trắng WW210 là nhân nguyên hạt, to và đều. Hạt lớn thường được chọn cho các sản phẩm nguyên hạt cao cấp như rang muối, mật ong, tỏi ớt và wasabi.",
      en: "WW210 is a large, even whole white kernel. Larger kernels are used for premium whole-nut products such as salted, honey, chili-garlic, and wasabi roasts.",
    },
    specs: [
      { label: { vi: "Màu sắc", en: "Color" }, value: { vi: "Trắng nguyên hạt", en: "Whole white" } },
      { label: { vi: "Số hạt / pound", en: "Nuts per pound" }, value: { vi: "200–210", en: "200–210" } },
      { label: { vi: "Số hạt / kg", en: "Nuts per kg" }, value: { vi: "395–465", en: "395–465" } },
      ...sharedSpecs,
    ],
  },
  {
    slug: "hat-dieu-ww180",
    name: { vi: "Hạt Điều WW180", en: "WW180 Cashew" },
    grade: "WW180",
    tone: "green",
    summary: {
      vi: "Cấp nguyên hạt lớn nhất, thường được gọi là King of Cashew.",
      en: "The largest whole grade, often called the King of Cashew.",
    },
    detail: {
      vi: "Hạt điều nhân trắng WW180 có khoảng 140 đến 180 hạt mỗi pound (265–395 hạt/kg). Đây là cấp nguyên hạt cao cấp nhất, thường được gọi là King of Cashew, dùng cho hạt điều sấy, mật ong, rang muối, tỏi ớt, wasabi và các sản phẩm cần nhân nguyên hạt lớn.",
      en: "WW180 white wholes count about 140 to 180 nuts per pound (265–395 per kg). This is the top whole grade, often called the King of Cashew, used for dried, honey, salted, chili-garlic, wasabi, and other products that need a large whole kernel.",
    },
    specs: [
      { label: { vi: "Màu sắc", en: "Color" }, value: { vi: "Trắng nguyên hạt", en: "Whole white" } },
      { label: { vi: "Số hạt / pound", en: "Nuts per pound" }, value: { vi: "140–180", en: "140–180" } },
      { label: { vi: "Số hạt / kg", en: "Nuts per kg" }, value: { vi: "265–395", en: "265–395" } },
      {
        label: { vi: "Hạt nhỏ hơn cấp", en: "Lower size grade" },
        value: { vi: "Tối đa 10%", en: "Maximum 10%" },
      },
      ...sharedSpecs,
    ],
  },
];

export const productShared = { nutrition, processSteps, benefits };

export const dryingSteps: Copy[] = [
  {
    vi: "Thu hoạch và chọn lọc: Hạt điều thô được loại những hạt xấu, không đạt tiêu chuẩn.",
    en: "Harvest and selection: poor raw nuts that miss the standard are removed.",
  },
  {
    vi: "Lọc sàng: Hạt được làm sạch bụi bẩn và tạp chất để bảo đảm vệ sinh an toàn thực phẩm.",
    en: "Screening: dust and foreign matter are cleaned off for food safety.",
  },
  {
    vi: "Phơi hạt: Hạt được trải trên giàn hoặc bạt dưới nắng, khoảng 4 đến 8 giờ mỗi ngày tùy thời tiết và độ ẩm.",
    en: "Sun drying: nuts are spread on racks or tarps for about 4 to 8 hours a day, depending on weather and moisture.",
  },
  {
    vi: "Lật trở: Hạt được đảo định kỳ để khô đều và không bị nóng cục bộ.",
    en: "Turning: nuts are turned regularly so they dry evenly and do not overheat in one spot.",
  },
  {
    vi: "Kiểm tra chất lượng: Sau khi phơi, kiểm tra độ ẩm, độ giòn và màu sắc trước khi bóc vỏ và phân loại.",
    en: "Quality check: moisture, crispness, and color are checked before shelling and grading.",
  },
];

export const business = {
  title: { vi: "Quy trình xử lý hạt điều thô", en: "Raw cashew processing" },
  lead: {
    vi: "Nguyên liệu hạt điều thô được thu hoạch từ các vùng trồng nổi tiếng của Việt Nam, Campuchia và một số nước trồng điều khác. Hạt được chọn từ nhà cung cấp uy tín. Đội ngũ có kinh nghiệm phơi khô và bóc tách để lấy nhân điều tốt nhất.",
    en: "Raw cashew comes from well-known growing regions in Vietnam, Cambodia, and other producing countries. Nuts are bought from trusted suppliers. An experienced team dries and shells them to produce the best kernels.",
  },
  close: {
    vi: "Công ty cam kết sản phẩm đạt tiêu chuẩn quốc tế. Đầu tư vào công nghệ và quy trình chế biến giúp đáp ứng thị trường trong nước và xuất khẩu sang các thị trường khó tính.",
    en: "The company commits to international standards. Investment in technology and processing serves both the domestic market and demanding export markets.",
  },
};

export const articles: {
  slug: string;
  date: string;
  title: Copy;
  excerpt: Copy;
  paragraphs: Copy[];
}[] = [
  {
    slug: "hat-dieu-phu-thuy",
    date: "2026-04-20",
    title: {
      vi: "Hạt điều Phú Thủy – Ngon miệng, giàu dinh dưỡng, an toàn cho sức khỏe",
      en: "Phu Thuy cashew – good taste, nutrition, and food safety",
    },
    excerpt: {
      vi: "Với hương vị hấp dẫn, giá trị dinh dưỡng vượt trội và quy trình chế biến an toàn, hạt điều đáp ứng cả người tiêu dùng Việt Nam và tiêu chuẩn xuất khẩu.",
      en: "With a strong flavor, high nutrition, and a safe process, the cashew serves Vietnamese consumers and export standards.",
    },
    paragraphs: [
      {
        vi: "Lựa chọn hạt điều sạch là chăm sóc sức khỏe bằng nguồn dinh dưỡng an toàn. Hành trình bắt đầu từ vùng điều Bình Phước: cơ sở tại huyện Đồng Phú hoạt động sản xuất từ năm 2019, và đến năm 2022 đầu tư thêm nhà máy khép kín.",
        en: "Choosing clean cashew means choosing a safe source of nutrition. The original article follows cashew from Binh Phuoc: a Dong Phu base started production in 2019, and a closed-process factory was added in 2022.",
      },
      {
        vi: "Nguyên liệu được thu hoạch từ vùng trồng uy tín tại Bình Phước, loại bỏ hạt hư và sâu mọt. Sau phân loại hạt thô, nhà máy bắn màu, sàng kích thước, hấp sấy đến độ ẩm khoảng 4,5%–5% để hạt giòn và thơm. Hạt còn được hun trùng để khử vi khuẩn.",
        en: "Raw nuts are harvested from trusted farms in Binh Phuoc, and damaged or infested nuts are removed. After grading, the factory color-sorts, screens by size, and dries to about 4.5%–5% moisture for a crisp, fragrant kernel. Fumigation reduces harmful bacteria.",
      },
      {
        vi: "Trước khi đóng gói, hạt đi qua máy X-ray, máy dò kim loại và hút chân không để vừa an toàn vừa bảo quản được lâu. Hạt điều cung cấp protein, đồng, canxi, magiê, sắt, phốt pho, kali, kẽm, vitamin E, K, B6, và không chứa cholesterol.",
        en: "Before packing, kernels pass X-ray, metal detection, and vacuum sealing so they stay safe and keep longer. Cashew provides protein, copper, calcium, magnesium, iron, phosphorus, potassium, zinc, and vitamins E, K, and B6, with no cholesterol.",
      },
    ],
  },
  {
    slug: "tac-dung-hat-dieu",
    date: "2026-04-20",
    title: {
      vi: "Tác dụng của hạt điều – 8 lợi ích tốt cho sức khỏe bạn cần biết",
      en: "Cashew benefits – 8 health benefits worth knowing",
    },
    excerpt: {
      vi: "Hạt điều thơm ngon và giàu protein, chất xơ, vitamin và khoáng chất. Bài viết nêu 8 lợi ích thường được nhắc tới.",
      en: "Cashew is fragrant and rich in protein, fiber, vitamins, and minerals. The article lists eight commonly cited benefits.",
    },
    paragraphs: [
      {
        vi: "Theo dữ liệu USDA, 28g hạt điều cung cấp khoảng 157 calo, 8,56g carbohydrate, 1,68g đường, 0,9g chất xơ và 5,17g protein. Hạt còn có chất béo không bão hòa và ít đường.",
        en: "USDA data cited on the source page: 28g of cashew provides about 157 kcal, 8.56g carbohydrate, 1.68g sugar, 0.9g fiber, and 5.17g protein, plus unsaturated fat and little sugar.",
      },
      {
        vi: "Tám lợi ích được nêu: hỗ trợ phòng ngừa ung thư nhờ chất chống oxy hóa; tăng miễn dịch nhờ kẽm; tốt cho tim mạch vì giảm LDL và triglyceride; ít đường nên hỗ trợ người quan tâm đến tiểu đường; vitamin E giúp da và tóc; phốt pho, vitamin K và canxi hỗ trợ răng và xương; protein và chất xơ tạo no khi ăn kiêng; magie hỗ trợ cơ, huyết áp và giấc ngủ.",
        en: "Eight benefits are listed: antioxidant support; immunity from zinc; heart health by helping lower LDL and triglycerides; low sugar for people watching diabetes risk; vitamin E for skin and hair; phosphorus, vitamin K, and calcium for teeth and bones; protein and fiber for satiety; and magnesium for muscle, blood pressure, and sleep.",
      },
      {
        vi: "Gợi ý dùng khoảng 28–30g mỗi ngày, chia 2–3 lần, không nên quá 100g. Nên ăn buổi sáng hoặc bữa phụ, hạn chế ăn sát giờ ngủ. Người tiểu đường nên ăn vừa phải và ưu tiên hạt không rang muối hoặc rang đường.",
        en: "A suggested serving is about 28–30g a day, split into two or three times, and not more than 100g. Morning or a snack is better than eating just before sleep. People with diabetes should keep portions moderate and prefer unsalted, unsweetened kernels.",
      },
    ],
  },
  {
    slug: "cach-chon-hat-dieu",
    date: "2026-04-20",
    title: {
      vi: "Cách lựa chọn hạt điều ngon? Gợi ý địa chỉ cung cấp uy tín tại Đồng Nai",
      en: "How to choose good cashew, and a trusted supplier in Dong Nai",
    },
    excerpt: {
      vi: "Hạt điều ngon thì đều hạt, khô ráo, thơm nhẹ và giòn. Bài viết gợi ý cách nhìn, ngửi, nếm và chọn nơi bán.",
      en: "Good cashew is even, dry, lightly fragrant, and crisp. The article explains how to look, smell, taste, and choose a seller.",
    },
    paragraphs: [
      {
        vi: "Hạt ngon thường đồng đều, cong tự nhiên, không gãy vụn, bề mặt khô, không bóng dầu. Màu vàng sáng hoặc vàng nhạt. Nâu đậm hoặc đốm đen có thể là cháy hoặc ẩm mốc. Mùi hôi dầu, ẩm mốc hoặc chua là dấu hiệu không nên dùng.",
        en: "A good kernel is even, naturally curved, not shattered, and dry rather than oily. The color is bright or pale gold. Dark brown or black spots can mean scorching or mold. A rancid, musty, or sour smell means it should not be eaten.",
      },
      {
        vi: "Khi ăn, hạt chuẩn giòn, béo bùi, không dai và không cứng quá. Nên ưu tiên hạt ít gia vị, không chất bảo quản lạ. Nhà cung cấp uy tín cần nguồn nguyên liệu rõ, quy trình được kiểm soát, giấy phép và đóng gói sạch.",
        en: "When eaten, a proper kernel is crisp and naturally rich, not tough or overly hard. Lightly seasoned nuts without unknown preservatives are preferable. A trusted supplier has a clear raw-material source, a controlled process, licenses, and clean packing.",
      },
      {
        vi: "Phần cuối bài giới thiệu nguồn cung tại Đồng Nai, có hun trùng, kiểm tra X-ray và hút chân không. Hạt bảo quản kín ở nơi khô mát khoảng 6–12 tháng. Công ty nhận đơn số lượng lớn. Giá được mô tả là phù hợp chất lượng, không chặt chém.",
        en: "The article then points to a Dong Nai supplier using fumigation, X-ray inspection, and vacuum packing. Sealed kernels keep about 6–12 months in a cool, dry place. Bulk orders are accepted, and the price is described as fair for the quality.",
      },
    ],
  },
];

export const packaging = [
  {
    slug: "dong-tin",
    name: { vi: "Đóng tin", en: "Tin packing" },
    body: { vi: "Nội dung đang cập nhật.", en: "Content is being updated." },
  },
  {
    slug: "dong-pe",
    name: { vi: "Đóng PE", en: "PE packing" },
    body: { vi: "Nội dung đang cập nhật.", en: "Content is being updated." },
  },
];

export const policies: { slug: string; title: Copy; body: Copy }[] = [
  {
    slug: "bao-mat",
    title: { vi: "Chính sách bảo mật", en: "Privacy policy" },
    body: { vi: "Nội dung đang cập nhật.", en: "Content is being updated." },
  },
  {
    slug: "doi-tra",
    title: { vi: "Chính sách hoàn, đổi, trả", en: "Returns and exchanges" },
    body: { vi: "Nội dung đang cập nhật.", en: "Content is being updated." },
  },
];

export const ui = {
  seeMore: { vi: "Xem thêm", en: "Read more" },
  quickView: { vi: "Xem nhanh", en: "Quick view" },
  contactPrice: { vi: "Giá bán: Liên hệ", en: "Price: on request" },
  kernels: { vi: "Hạt điều nhân", en: "Cashew kernels" },
  kernelTag: { vi: "Hạt Điều Hoàng Minh Cashew – chất lượng trong từng sản phẩm", en: "Hoang Minh Cashew – quality in every product" },
  packingTitle: { vi: "Bao bì đóng gói", en: "Packing" },
  certTitle: { vi: "Chứng nhận tiêu chuẩn", en: "Certificates" },
  newsletter: { vi: "Đăng ký nhận tin", en: "Newsletter" },
  newsletterHint: {
    vi: "Để lại email để nhận thông tin sản phẩm và thị trường.",
    en: "Leave your email for product and market updates.",
  },
  send: { vi: "Gửi", en: "Send" },
  sent: { vi: "Đã ghi nhận. Chúng tôi sẽ liên hệ lại.", en: "Received. We will get back to you." },
  name: { vi: "Họ và tên", en: "Name" },
  phone: { vi: "Điện thoại", en: "Phone" },
  message: { vi: "Nội dung", en: "Message" },
  hotline: { vi: "Hotline", en: "Hotline" },
  orderAdvice: { vi: "Tư vấn đặt hàng", en: "Order advice" },
  address: { vi: "Địa chỉ", en: "Address" },
  updated: { vi: "Nội dung đang cập nhật.", en: "Content is being updated." },
  process: { vi: "Quy trình sản xuất", en: "Production process" },
  nutritionTitle: { vi: "Dinh dưỡng", en: "Nutrition" },
  specs: { vi: "Thông số", en: "Specifications" },
  related: { vi: "Sản phẩm khác", en: "Other products" },
  backNews: { vi: "Tất cả sự kiện", en: "All news" },
  founded: { vi: "Thành lập", en: "Founded" },
  marketsTitle: { vi: "Thị trường xuất khẩu", en: "Export markets" },
  aboutTitle: { vi: "Giới thiệu về Công ty TNHH Xuất Nhập Khẩu Hoàng Minh Cashew", en: "About Hoang Minh Cashew Import Export Co., Ltd." },
  letterTitle: { vi: "Thư ngỏ", en: "Open letter" },
  drying: { vi: "Quy trình phơi khô hạt điều", en: "Cashew drying process" },
  placeholder: { vi: "Ảnh minh họa", en: "Illustration" },
};

export { intro, certIntro };

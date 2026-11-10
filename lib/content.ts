export type Lang = "vi" | "en";

export type Copy = { vi: string; en: string };

export const company = {
  name: {
    vi: "Công ty TNHH Xuất Nhập Khẩu Hoàng Minh Cashew",
    en: "Hoang Minh Cashew Import Export Co., Ltd.",
  },
  short: { vi: "Hoàng Minh Cashew", en: "Hoang Minh Cashew" },
  address: {
    vi: "Số 595, đường Thống Nhất, khu phố Phước Vĩnh, Phường Phước Bình, TP Đồng Nai, Việt Nam",
    en: "595 Thong Nhat, Phuoc Vinh Quarter, Phuoc Binh Ward, Dong Nai, Vietnam",
  },
  address2: "Đường DT741, Tổ 1, Ấp Thuận Hòa 1, xã Thuận Lợi, Đồng Nai",
  phone: "+84 388 133 333",
  phoneRaw: "+84388133333",
  email: "minhhoangcashew@gmail.com",
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
    ],
  },
  { href: "/quy-trinh-san-xuat", label: { vi: "Quy trình sản xuất", en: "Production process" } },
  {
    href: "/san-pham",
    label: { vi: "Sản phẩm", en: "Products" },
    children: [
      { href: "/san-pham/hat-dieu-ww180", label: { vi: "Hạt điều WW180", en: "WW180" } },
      { href: "/san-pham/hat-dieu-ww240", label: { vi: "Hạt điều WW240", en: "WW240" } },
      { href: "/san-pham/hat-dieu-ww320", label: { vi: "Hạt điều WW320", en: "WW320" } },
      { href: "/san-pham/hat-dieu-ww450", label: { vi: "Hạt điều WW450", en: "WW450" } },
      { href: "/san-pham/hat-dieu-ws", label: { vi: "Hạt điều WS", en: "WS" } },
      { href: "/san-pham/hat-dieu-lp", label: { vi: "Hạt điều LP", en: "LP" } },
      { href: "/san-pham/hat-dieu-sp", label: { vi: "Hạt điều SP", en: "SP" } },
      { href: "/san-pham/hat-dieu-bb", label: { vi: "Hạt điều BB", en: "BB" } },
      { href: "/san-pham/hat-dieu-lbw", label: { vi: "Hạt điều LBW", en: "LBW" } },
      { href: "/san-pham/hat-dieu-sw", label: { vi: "Hạt điều SW", en: "SW" } },
      { href: "/san-pham/hat-dieu-sk1", label: { vi: "Hạt điều SK1", en: "SK1" } },
      { href: "/san-pham/hat-dieu-rang", label: { vi: "Hạt điều rang", en: "Roasted cashew" } },
    ],
  },
  { href: "/thi-truong", label: { vi: "Thị trường", en: "Markets" } },
  { href: "/chung-nhan", label: { vi: "Chứng nhận", en: "Certificates" } },
  { href: "/lien-he", label: { vi: "Liên hệ", en: "Contact" } },
];

const intro = {
  vi: "Công ty TNHH Xuất Nhập Khẩu Hoàng Minh Cashew chuyên chế biến và xuất khẩu hạt điều. Với nhiều năm kinh nghiệm và cam kết theo tiêu chuẩn quốc tế, công ty cung cấp hạt điều cho các thị trường trên thế giới, đặt trọng tâm vào chất lượng, phát triển bền vững và sự hài lòng của khách hàng. Nhà máy rộng 3.000 m², dùng dây chuyền công nghệ để làm ra sản phẩm tươi, không chất bảo quản. Công suất cung ứng từ 500 đến 750 tấn mỗi tháng. Công nhân được đào tạo vận hành máy, kiểm soát chất lượng và tuân thủ an toàn, vệ sinh thực phẩm.",
  en: "Hoang Minh Cashew Import Export Co., Ltd. processes and exports cashew. With years of experience and a commitment to international standards, the company supplies cashew to markets around the world, with a focus on quality, sustainability, and customer satisfaction. The factory covers 3,000 m² and uses technology lines to produce fresh products with no preservatives. Supply capacity is 500 to 750 tons a month. Workers are trained in machine operation, quality control, and food-safety and hygiene standards.",
};

const certIntro = {
  vi: "Với mục tiêu mang đến những sản phẩm an toàn, chất lượng, Hoàng Minh Cashew đã đạt được các chứng nhận quan trọng trong ngành thực phẩm, bao gồm:",
  en: "To deliver safe, high-quality products, Hoang Minh Cashew holds these important food-industry certificates:",
};

export const certificates: { title: string; image?: string; body: Copy }[] = [
  {
    title: "BRCGS",
    image: "/certificates/brcgs.png",
    body: {
      vi: "Nhà máy đạt chứng nhận BRCGS Global Standard Food Safety Issue 9, hạng A, số chứng nhận VN26/00000492, mã nhà máy 10025068. Phạm vi gồm phân loại, tách vỏ, sấy, làm nguội, phân màu, hun trùng và hút chân không nhân hạt điều.",
      en: "The factory holds BRCGS Global Standard Food Safety Issue 9, grade A, certificate VN26/00000492, site code 10025068. The scope covers grading, shelling, drying, cooling, colour sorting, fumigation, and vacuum packing of cashew kernels.",
    },
  },
  {
    title: "BRCGS Report",
    image: "/certificates/brcgs-report.png",
    body: {
      vi: "Báo cáo đánh giá BRCGS của SGS, mã VN/HO/963347. Kết quả Certificated, hạng A.",
      en: "The SGS BRCGS audit report, reference VN/HO/963347. The result is Certificated, grade A.",
    },
  },
  {
    title: "FDA",
    image: "/certificates/fda.png",
    body: {
      vi: "Cơ sở đã đăng ký với FDA Hoa Kỳ, số đăng ký 10386741114, trạng thái VALID. Đăng ký này cho phép nhà máy sản xuất, đóng gói và lưu trữ thực phẩm để xuất khẩu vào thị trường Mỹ.",
      en: "The facility is registered with the U.S. FDA, registration number 10386741114, status VALID. The registration covers manufacturing, packing, and holding food for export to the United States.",
    },
  },
];

export const commitments: Copy[] = [
  {
    vi: "Nhà máy dùng dây chuyền công nghệ để sản xuất hạt điều tươi, không chất bảo quản.",
    en: "The factory uses technology lines to produce fresh cashew with no preservatives.",
  },
  {
    vi: "Công nhân được đào tạo vận hành máy, kiểm soát chất lượng, và tuân thủ an toàn cùng vệ sinh thực phẩm.",
    en: "Workers are trained in machine operation, quality control, and compliance with safety and food-hygiene standards.",
  },
];

export const certClose = {
  vi: "Với các chứng nhận này và quy trình được kiểm soát từ lúc nhận điều thô đến lúc xuất kho, Hoàng Minh Cashew cung cấp hạt điều cho khách hàng quốc tế.",
  en: "With these certificates and a controlled process from raw-nut receipt to dispatch, Hoang Minh Cashew supplies cashew to international buyers.",
};

export const factoryFacts: { label: Copy; value: Copy }[] = [
  {
    label: { vi: "Diện tích nhà máy", en: "Factory area" },
    value: { vi: "3.000 m²", en: "3,000 m²" },
  },
  {
    label: { vi: "Công suất cung ứng", en: "Supply capacity" },
    value: { vi: "500–750 tấn/tháng", en: "500–750 tons/month" },
  },
  {
    label: { vi: "Sản phẩm", en: "Products" },
    value: { vi: "Tươi, không chất bảo quản", en: "Fresh, no preservatives" },
  },
];

export const markets: { region: Copy; detail: Copy }[] = [
  {
    region: { vi: "Châu Mỹ", en: "Americas" },
    detail: {
      vi: "Hoa Kỳ và Canada.",
      en: "The United States and Canada.",
    },
  },
  {
    region: { vi: "Châu Âu", en: "Europe" },
    detail: {
      vi: "Hà Lan, Nga, Ba Lan, Anh, Hy Lạp, Đức và Tây Ban Nha.",
      en: "The Netherlands, Russia, Poland, the United Kingdom, Greece, Germany, and Spain.",
    },
  },
  {
    region: { vi: "Trung Đông", en: "Middle East" },
    detail: {
      vi: "Thổ Nhĩ Kỳ, Các Tiểu vương quốc Ả Rập Thống nhất (UAE) và Liban.",
      en: "Turkey, the United Arab Emirates, and Lebanon.",
    },
  },
  {
    region: { vi: "Châu Á", en: "Asia" },
    detail: {
      vi: "Hồng Kông và Thái Lan.",
      en: "Hong Kong and Thailand.",
    },
  },
];

export const marketIntro = {
  vi: "Hoàng Minh Cashew xuất khẩu sang Hoa Kỳ, Canada, Hà Lan, Nga, Ba Lan, Anh, Hy Lạp, Đức, Tây Ban Nha, Thổ Nhĩ Kỳ, UAE, Liban, Hồng Kông và Thái Lan.",
  en: "Hoang Minh Cashew exports to the United States, Canada, the Netherlands, Russia, Poland, the United Kingdom, Greece, Germany, Spain, Turkey, the UAE, Lebanon, Hong Kong, and Thailand.",
};

const nutrition = {
  vi: "Hạt điều cung cấp protein và các khoáng chất như đồng, canxi, magiê, sắt, phốt pho, kali và kẽm. Nhân điều không chứa cholesterol, và có vitamin E, K, B6 cùng selen.",
  en: "Cashew supplies protein and minerals such as copper, calcium, magnesium, iron, phosphorus, potassium, and zinc. The kernel contains no cholesterol, and it provides vitamins E, K, and B6, plus selenium.",
};

const benefits = {
  vi: "Hạt điều thường được dùng như thực phẩm bổ dưỡng trong ăn uống hằng ngày và trong chế biến.",
  en: "Cashew is widely used as a nutritious food, both for everyday eating and for processing.",
};

const packingSpec: Copy = {
  vi: "Túi PE, bơm nitơ và CO2, hút chân không, hàn nhiệt, đóng thùng carton và dán nhãn",
  en: "PE bag, nitrogen and CO2, vacuum heat seal, carton, and label",
};

export type Product = {
  slug: string;
  name: Copy;
  grade: string;
  image: string;
  tone: "gold" | "cream" | "green" | "split";
  summary: Copy;
  detail: Copy;
  specs: { label: Copy; value: Copy }[];
};

function specs(form: Copy, appearance: Copy): Product["specs"] {
  return [
    { label: { vi: "Dạng hạt", en: "Form" }, value: form },
    { label: { vi: "Màu sắc", en: "Appearance" }, value: appearance },
    { label: { vi: "Đóng gói", en: "Packing" }, value: packingSpec },
  ];
}

export const products: Product[] = [
  {
    slug: "hat-dieu-ww180",
    name: { vi: "Hạt điều WW180", en: "WW180 Cashew" },
    grade: "WW180",
    image: "/products/ww180.png",
    tone: "cream",
    summary: {
      vi: "Nhân trắng nguyên hạt, cỡ lớn nhất trong nhóm WW.",
      en: "Whole white kernels, the largest WW grade.",
    },
    detail: {
      vi: "WW180 là nhân trắng nguyên hạt cỡ lớn, đứng đầu các cấp WW180, WW240, WW320 và WW450. Dùng khi khách cần nhân lớn và đều.",
      en: "WW180 is a large whole white kernel, the leading grade among WW180, WW240, WW320, and WW450. It is for buyers who need a large, even kernel.",
    },
    specs: specs(
      { vi: "Nhân trắng nguyên hạt", en: "Whole white kernels" },
      { vi: "Trắng ngà", en: "Ivory white" },
    ),
  },
  {
    slug: "hat-dieu-ww240",
    name: { vi: "Hạt điều WW240", en: "WW240 Cashew" },
    grade: "WW240",
    image: "/products/ww240.png",
    tone: "cream",
    summary: {
      vi: "Nhân trắng nguyên hạt, cỡ nhỏ hơn WW180.",
      en: "Whole white kernels, a size below WW180.",
    },
    detail: {
      vi: "WW240 là nhân trắng nguyên hạt, cỡ nằm giữa WW180 và WW320.",
      en: "WW240 is a whole white kernel, sized between WW180 and WW320.",
    },
    specs: specs(
      { vi: "Nhân trắng nguyên hạt", en: "Whole white kernels" },
      { vi: "Trắng ngà", en: "Ivory white" },
    ),
  },
  {
    slug: "hat-dieu-ww320",
    name: { vi: "Hạt điều WW320", en: "WW320 Cashew" },
    grade: "WW320",
    image: "/products/ww320.png",
    tone: "gold",
    summary: {
      vi: "Nhân trắng nguyên hạt, cỡ thương mại nhỏ hơn WW240.",
      en: "Whole white kernels, a commercial size below WW240.",
    },
    detail: {
      vi: "WW320 là nhân trắng nguyên hạt, nhỏ hơn WW240 và lớn hơn WW450.",
      en: "WW320 is a whole white kernel, smaller than WW240 and larger than WW450.",
    },
    specs: specs(
      { vi: "Nhân trắng nguyên hạt", en: "Whole white kernels" },
      { vi: "Trắng ngà", en: "Ivory white" },
    ),
  },
  {
    slug: "hat-dieu-ww450",
    name: { vi: "Hạt điều WW450", en: "WW450 Cashew" },
    grade: "WW450",
    image: "/products/ww450.png",
    tone: "gold",
    summary: {
      vi: "Nhân trắng nguyên hạt, cỡ nhỏ nhất trong nhóm WW.",
      en: "Whole white kernels, the smallest WW grade.",
    },
    detail: {
      vi: "WW450 là nhân trắng nguyên hạt cỡ nhỏ trong nhóm WW180, WW240, WW320 và WW450. Hạt vẫn nguyên, dùng cho ăn trực tiếp và chế biến.",
      en: "WW450 is the small whole-white grade among WW180, WW240, WW320, and WW450. The kernels stay whole, for snacking and processing.",
    },
    specs: specs(
      { vi: "Nhân trắng nguyên hạt", en: "Whole white kernels" },
      { vi: "Trắng ngà", en: "Ivory white" },
    ),
  },
  {
    slug: "hat-dieu-ws",
    name: { vi: "Hạt điều WS", en: "WS Cashew" },
    grade: "WS",
    image: "/products/ws.png",
    tone: "split",
    summary: {
      vi: "Nhân trắng vỡ đôi.",
      en: "White splits.",
    },
    detail: {
      vi: "WS là nhân trắng bị tách thành hai mảnh dọc. Hạt giữ màu trắng ngà và thường dùng để rang, tẩm vị hoặc chế biến.",
      en: "WS kernels are white halves split lengthwise. They keep an ivory color and are used for roasting, seasoning, or processing.",
    },
    specs: specs(
      { vi: "Nhân trắng vỡ đôi", en: "White splits" },
      { vi: "Trắng ngà", en: "Ivory white" },
    ),
  },
  {
    slug: "hat-dieu-lp",
    name: { vi: "Hạt điều LP", en: "LP Cashew" },
    grade: "LP",
    image: "/products/lp.png",
    tone: "split",
    summary: {
      vi: "Mảnh lớn, màu trắng ngà.",
      en: "Large ivory pieces.",
    },
    detail: {
      vi: "LP là mảnh nhân lớn, vỡ không đều, màu trắng ngà. Cấp này dùng cho chế biến, bánh kẹo và các sản phẩm cần mảnh hạt to.",
      en: "LP is large, irregular ivory pieces. This grade is used in processing, confectionery, and products that need a large piece.",
    },
    specs: specs(
      { vi: "Mảnh lớn", en: "Large pieces" },
      { vi: "Trắng ngà", en: "Ivory" },
    ),
  },
  {
    slug: "hat-dieu-sp",
    name: { vi: "Hạt điều SP", en: "SP Cashew" },
    grade: "SP",
    image: "/products/sp.png",
    tone: "green",
    summary: {
      vi: "Mảnh nhỏ, màu trắng ngà.",
      en: "Small ivory pieces.",
    },
    detail: {
      vi: "SP là mảnh nhân nhỏ, vụn hơn LP và to hơn BB. Dùng làm nguyên liệu chế biến và bánh.",
      en: "SP is small pieces, finer than LP and larger than BB. It is used as an ingredient in processing and bakery.",
    },
    specs: specs(
      { vi: "Mảnh nhỏ", en: "Small pieces" },
      { vi: "Trắng ngà", en: "Ivory" },
    ),
  },
  {
    slug: "hat-dieu-bb",
    name: { vi: "Hạt điều BB", en: "BB Cashew" },
    grade: "BB",
    image: "/products/bb.png",
    tone: "green",
    summary: {
      vi: "Mảnh vụn rất nhỏ.",
      en: "Very fine pieces, baby bits.",
    },
    detail: {
      vi: "BB là mảnh vụn nhỏ nhất, dạng hạt vụn trắng ngà. Dùng làm nguyên liệu, rắc bề mặt và chế biến.",
      en: "BB is the finest piece grade, ivory baby bits. It is used as an ingredient, a topping, and in processing.",
    },
    specs: specs(
      { vi: "Mảnh vụn", en: "Baby bits" },
      { vi: "Trắng ngà", en: "Ivory" },
    ),
  },
  {
    slug: "hat-dieu-lbw",
    name: { vi: "Hạt điều LBW", en: "LBW Cashew" },
    grade: "LBW",
    image: "/products/lbw.png",
    tone: "gold",
    summary: {
      vi: "Nhân nguyên hạt màu ngà, có thể có vết nhẹ.",
      en: "Ivory whole kernels that may show a light blemish.",
    },
    detail: {
      vi: "LBW là nhân nguyên hạt màu ngà kem, bề mặt có thể có chấm hoặc vết nhẹ, khác với nhân trắng WW.",
      en: "LBW is a cream-ivory whole kernel. The surface may show light spots or blemish, unlike the white WW grades.",
    },
    specs: specs(
      { vi: "Nhân nguyên hạt", en: "Whole kernels" },
      { vi: "Ngà kem, có thể có vết nhẹ", en: "Cream ivory, may show a light blemish" },
    ),
  },
  {
    slug: "hat-dieu-sw",
    name: { vi: "Hạt điều SW", en: "SW Cashew" },
    grade: "SW",
    image: "/products/sw.png",
    tone: "gold",
    summary: {
      vi: "Nhân nguyên hạt cháy nhẹ, màu vàng.",
      en: "Lightly scorched whole kernels, golden in color.",
    },
    detail: {
      vi: "SW là nhân nguyên hạt màu vàng đều, cháy nhẹ so với nhân trắng. Hạt vẫn nguyên vẹn.",
      en: "SW kernels are evenly golden wholes, lightly scorched compared with white kernels. The nuts stay whole.",
    },
    specs: specs(
      { vi: "Nhân nguyên hạt cháy nhẹ", en: "Scorched wholes" },
      { vi: "Vàng", en: "Golden" },
    ),
  },
  {
    slug: "hat-dieu-sk1",
    name: { vi: "Hạt điều SK1", en: "SK1 Cashew" },
    grade: "SK1",
    image: "/products/sk1.png",
    tone: "split",
    summary: {
      vi: "Nhân nguyên hạt màu kem, có chấm sẫm.",
      en: "Cream whole kernels with darker spots.",
    },
    detail: {
      vi: "SK1 là nhân nguyên hạt màu kem đến vàng nhạt. Một số hạt có chấm sẫm hoặc đầu hạt đậm hơn cấp nhân trắng và SW.",
      en: "SK1 kernels are cream to pale gold wholes. Some nuts show dark spots or a darker tip compared with white grades and SW.",
    },
    specs: specs(
      { vi: "Nhân nguyên hạt", en: "Whole kernels" },
      { vi: "Kem đến vàng, có chấm sẫm", en: "Cream to gold, with dark spots" },
    ),
  },
  {
    slug: "hat-dieu-rang",
    name: { vi: "Hạt điều rang", en: "Roasted Cashew" },
    grade: "Roasted",
    image: "/products/roasted.png",
    tone: "green",
    summary: {
      vi: "Nhân đã rang, màu nâu, dùng ăn liền.",
      en: "Roasted kernels, brown, ready to eat.",
    },
    detail: {
      vi: "Hạt điều rang là nhân đã qua rang, màu nâu, còn lớp vỏ lụa xém ở một số hạt. Sản phẩm dùng để ăn trực tiếp.",
      en: "Roasted cashew is a kernel roasted to a brown color, with some toasted skin still on the nuts. It is for direct eating.",
    },
    specs: specs(
      { vi: "Nhân rang", en: "Roasted kernels" },
      { vi: "Nâu", en: "Brown" },
    ),
  },
];

const processSteps: Copy[] = [
  {
    vi: "Tiếp nhận điều thô và kiểm tra vật lý, tạp chất, độ ẩm. Lô không đạt thì trả hàng. Nguyên liệu đạt được sàng size A cồ (A+), A, B và bể.",
    en: "Raw cashew is received and checked for physical condition, impurities, and moisture. A failed lot is rejected. Passed nuts are graded into size A+, A, B, and broken.",
  },
  {
    vi: "Hấp 20–40 phút ở 100°C, áp suất 0,1–0,4 kg/cm². Tách vỏ cứng bằng máy và bằng tay.",
    en: "Steam for 20–40 minutes at 100°C and 0.1–0.4 kg/cm². The hard shell is removed by machine and by hand.",
  },
  {
    vi: "Sấy 65–80°C trong 20–24 giờ, hồi ẩm 12–24 giờ đến độ ẩm khoảng 4%, rồi bóc vỏ lụa.",
    en: "Dry at 65–80°C for 20–24 hours, condition for 12–24 hours to about 4% moisture, then peel the testa.",
  },
  {
    vi: "Bắn màu để loại lỗi và phân cỡ. QC kiểm tra vật lý; không đạt thì bắn màu lại. Sau đó cân và hun trùng bằng phosphine trong 7 ngày, thông thoáng 2 ngày.",
    en: "Color sorting removes defects and sizes the kernels. QC checks them physically, and a failed lot is color-sorted again. The lot is then weighed and fumigated with phosphine for 7 days, then ventilated for 2 days.",
  },
  {
    vi: "Trộn hàng, sàng rung để loại tạp chất, bụi và hạt dưới size, rồi qua nam châm, hút tạp chất và lựa tay. QC kiểm tra lại vật lý và độ ẩm; không đạt thì phân loại lại.",
    en: "The lot is mixed, vibrate-sieved to remove impurities, dust, and undersize kernels, then passed over a magnet, suction, and hand sorting. QC checks physical condition and moisture again; a failed lot is sorted again.",
  },
  {
    vi: "Máy X-ray (CCP1) loại gốm, kính, cao su và thép. Máy dò kim loại (CCP2) loại sắt, kim loại không từ và thép không gỉ.",
    en: "X-ray (CCP1) removes ceramic, glass, rubber, and steel. The metal detector (CCP2) removes iron, non-ferrous metal, and stainless steel.",
  },
  {
    vi: "Cho vào bao PE, bơm nitơ và CO2, hút chân không, hàn nhiệt, đóng thùng carton, dán nhãn, rồi lưu kho cách tường 20 cm trước khi xuất.",
    en: "Kernels go into a PE bag with nitrogen and CO2, are vacuumed and heat-sealed, packed in a labeled carton, and stored 20 cm from the wall before export.",
  },
];

export const productShared = { nutrition, processSteps, benefits };

export const packingProcess: {
  lead: Copy;
  close: Copy;
  preparationTitle: Copy;
  lineTitle: Copy;
  chapters: { title: Copy; body: Copy }[];
  steps: { image: string; title: Copy; body: Copy }[];
} = {
  lead: {
    vi: "Điều thô đi qua kiểm tra, hấp, tách vỏ, sấy, phân loại và hun trùng trước khi lên dây chuyền đóng gói. Lô không đạt được trả hàng, bắn màu lại, hoặc phân loại lại.",
    en: "Raw cashew passes inspection, steaming, shelling, drying, grading, and fumigation before it reaches the packing line. A failed lot is returned, color-sorted again, or sorted again.",
  },
  close: {
    vi: "Hai điểm kiểm soát cuối là CCP1 trên máy X-ray và CCP2 trên máy dò kim loại. Thành phẩm được hút chân không trong bao PE có nitơ và CO2, đóng thùng, dán nhãn, rồi xếp kho cách tường 20 cm. Quy cách thùng theo hợp đồng, vui lòng liên hệ trước khi đóng hàng.",
    en: "The last two control points are CCP1 on the X-ray and CCP2 on the metal detector. Finished kernels are vacuum-packed in a PE bag with nitrogen and CO2, cartoned, labeled, and stored 20 cm from the wall. For a carton spec on a contract, contact us before the lot is packed.",
  },
  preparationTitle: {
    vi: "Từ điều thô đến nhân trắng",
    en: "From raw nut to white kernel",
  },
  lineTitle: {
    vi: "Trên dây chuyền đóng gói",
    en: "On the packing line",
  },
  chapters: [
    {
      title: { vi: "Tiếp nhận và sàng size", en: "Receiving and sizing" },
      body: {
        vi: "Nhà máy nhận điều thô và ghi nhận từng lô trước khi kiểm tra. QC xem ngoại quan, tạp chất và độ ẩm. Lô không đạt được trả lại, không đưa vào hấp. Lô đạt được sàng thành size A cồ (A+), A, B và bể. Mỗi cỡ đi riêng để hấp và chẻ cho đều.",
        en: "The factory receives raw cashew in shell and logs each lot before inspection. QC checks appearance, impurities, and moisture. A lot that fails is returned and is not steamed. Passed nuts are graded into size A+ (large A), A, B, and broken. Each size stays separate so steaming and shelling stay even.",
      },
    },
    {
      title: { vi: "Hấp và tách vỏ", en: "Steaming and shelling" },
      body: {
        vi: "Điều thô được hấp 20–40 phút ở 100°C, áp suất 0,1–0,4 kg/cm² để vỏ cứng mềm ra. Vỏ được tách bằng máy và bằng tay, rồi đưa riêng, không đi theo nhân sang công đoạn sấy.",
        en: "Raw nuts are steamed for 20–40 minutes at 100°C and 0.1–0.4 kg/cm² so the hard shell softens. The shell is removed by machine and by hand, then taken out on its own. It does not follow the kernel into drying.",
      },
    },
    {
      title: { vi: "Sấy, hồi ẩm và bóc vỏ lụa", en: "Drying, conditioning, and peeling" },
      body: {
        vi: "Nhân còn vỏ lụa được sấy ở 65–80°C trong 20–24 giờ. Sau đó hồi ẩm 12–24 giờ đến khoảng 4% để hạt bớt giòn và ít vỡ khi bóc. Vỏ lụa được loại riêng. Nhân trắng đi tiếp sang bắn màu.",
        en: "Kernels still in the testa are dried at 65–80°C for 20–24 hours, then conditioned for 12–24 hours to about 4% moisture so the nut is less brittle and breaks less when peeled. The testa is removed on its own. The white kernel continues to color sorting.",
      },
    },
    {
      title: { vi: "Bắn màu, cân và hun trùng", en: "Color sorting, weighing, and fumigation" },
      body: {
        vi: "Máy bắn màu loại hạt lỗi, hạt khác màu và phân cỡ theo từng grade. QC kiểm tra lại ngoại quan. Lô không đạt được bắn màu lại, chưa cân và chưa hun. Lô đạt được cân, hun phosphine 7 ngày, thông thoáng 2 ngày, rồi trộn để màu và cỡ đồng đều trước khi lên dây chuyền.",
        en: "A color sorter removes defective and off-color kernels and sizes the nuts into finished grades. QC checks appearance again. A failed lot goes back through the sorter. It is not weighed or fumigated yet. A passed lot is weighed, fumigated with phosphine for 7 days, ventilated for 2 days, then mixed so color and size are even before it reaches the line.",
      },
    },
  ],
  steps: [
    {
      image: "/process/02-line.jpg",
      title: { vi: "Sàng rung", en: "Vibrate-sieve" },
      body: {
        vi: "Máy sàng rung loại tạp chất, bụi và hạt dưới size. Hạt đạt đi trên băng tải trong phòng kín, lên hệ thống máy inox để vào bước lựa và kiểm tra.",
        en: "A vibration sieve removes impurities, dust, and undersize kernels. Passed nuts travel on a conveyor inside the closed room, up into the stainless-steel line for sorting and inspection.",
      },
    },
    {
      image: "/process/01-select.jpg",
      title: { vi: "Nam châm, hút tạp chất và lựa tay", en: "Magnet, suction, and hand sorting" },
      body: {
        vi: "Hạt đi qua nam châm và hệ hút để tách dị vật từ tính, bụi và tạp chất. Trên băng chuyền, từng hạt được nhìn và nhặt bằng tay. Công nhân đội lưới tóc, khẩu trang và găng. Hạt vỡ, xỉn màu hoặc không đạt được tách riêng. QC kiểm tra lại vật lý và độ ẩm sau bước này. Lô không đạt quay lại phân loại, không đưa qua máy dò.",
        en: "Kernels pass a magnet and a suction system to remove magnetic matter, dust, and impurities. On the belt, every nut is looked at and picked by hand. Selectors wear hairnets, masks, and gloves. Broken, dull, or off-spec kernels are taken out. QC then checks physical condition and moisture again. A failed lot goes back to sorting and does not go through the detectors.",
      },
    },
    {
      image: "/process/03-xray.jpg",
      title: { vi: "Máy dò tạp chất và kim loại", en: "Foreign-body and metal detection" },
      body: {
        vi: "Máy X-ray là điểm kiểm soát CCP1. Máy đọc từng hạt và loại gốm, kính, cao su và thép. Ngay sau đó, máy dò kim loại (CCP2) loại sắt, kim loại không từ và thép không gỉ. Lô không đạt thì không vào bao.",
        en: "The X-ray is control point CCP1. It reads each kernel and removes ceramic, glass, rubber, and steel. Immediately after, the metal detector (CCP2) removes iron, non-ferrous metal, and stainless steel. A failed lot is not bagged.",
      },
    },
    {
      image: "/process/04-fill.jpg",
      title: { vi: "Bao PE, nitơ và CO2", en: "PE bag, nitrogen, and CO2" },
      body: {
        vi: "Hạt từ phễu chảy vào bao PE. Công nhân canh miệng bao cho đúng dòng và đúng khối lượng. Bao được bơm nitơ và CO2 trước khi hút chân không.",
        en: "Kernels drop from the hopper into a PE bag. An operator watches the mouth of the bag so the flow and the weight stay right. Nitrogen and CO2 are added before the bag is vacuumed.",
      },
    },
    {
      image: "/process/05-pack.jpg",
      title: { vi: "Hút chân không và hàn nhiệt", en: "Vacuum and heat-seal" },
      body: {
        vi: "Bao PE được hút chặt và hàn nhiệt thành khối. Khối hạt đều, đúng dạng hàng xuất, để thùng đầy và chắc trên đường đi.",
        en: "The PE bag is drawn tight and heat-sealed into a block. An even block is the export form. It fills the carton and keeps it firm in transit.",
      },
    },
    {
      image: "/process/06-seal.jpg",
      title: { vi: "Đóng thùng, dán nhãn và lưu kho", en: "Carton, label, and storage" },
      body: {
        vi: "Từng thùng carton được đóng nắp và dán nhãn lô. Nhãn ghi loại hạt để đối chiếu đúng kiện khi nhận hàng. Thùng đạt được xếp cuối chuyền, lưu kho cách tường 20 cm để hàng không tựa tường và dễ kiểm tra trước khi xuất.",
        en: "Each carton is closed and labeled with the lot. The label shows the grade so the carton can be matched on arrival. Accepted cartons are stacked at the end of the line and stored 20 cm from the wall, so the goods stay off the wall and can be checked before export.",
      },
    },
  ],
};

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
  kernelTag: {
    vi: "Hạt Điều Hoàng Minh Cashew – chất lượng trong từng sản phẩm",
    en: "Hoang Minh Cashew – quality in every product",
  },
  packingTitle: { vi: "Quy trình sản xuất", en: "Production process" },
  seeProcess: { vi: "Xem quy trình sản xuất", en: "See the production process" },
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
  hotline: { vi: "Điện thoại", en: "Phone" },
  orderAdvice: { vi: "Tư vấn đặt hàng", en: "Order advice" },
  address: { vi: "Địa chỉ", en: "Address" },
  website: { vi: "Website", en: "Website" },
  updated: { vi: "Nội dung đang cập nhật.", en: "Content is being updated." },
  process: { vi: "Quy trình sản xuất", en: "Production process" },
  nutritionTitle: { vi: "Dinh dưỡng", en: "Nutrition" },
  specs: { vi: "Thông số", en: "Specifications" },
  related: { vi: "Sản phẩm khác", en: "Other products" },
  marketsTitle: { vi: "Thị trường xuất khẩu", en: "Export markets" },
  aboutTitle: {
    vi: "Giới thiệu về Công ty TNHH Xuất Nhập Khẩu Hoàng Minh Cashew",
    en: "About Hoang Minh Cashew Import Export Co., Ltd.",
  },
  factoryTitle: { vi: "Nhà máy", en: "Factory" },
  placeholder: { vi: "Ảnh minh họa", en: "Illustration" },
};

export { intro, certIntro };

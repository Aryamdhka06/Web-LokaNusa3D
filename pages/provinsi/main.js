/* ════════════════════════════════════════
   Lokanusa 3D — province.js
   Province Data · Dynamic Renderer
   Particle Engine · Nav · Modals · Upload
   QR Generator · Reveal Animations
════════════════════════════════════════ */

'use strict';


/* ─────────────────────────────────────────
   1. DATABASE PROVINSI
───────────────────────────────────────── */

const provinceDatabase = {

  "aceh": {
    name:      "Aceh",
    tagline:   "Serambi Mekkah Nusantara — tanah para ulama, pejuang, dan warisan budaya megah yang telah hidup selama berabad-abad di ujung barat Indonesia.",
    history:   "🏛 Sejarah 800+ Tahun",
    region:    "🌿 23 Kabupaten / Kota",
    culture:   "🎭 100+ Seni Tradisi",
    arObjects: "4 Objek 3D Tersedia",

    house: {
      name:      "Rumoh Aceh",
      origin:    "Aceh, Indonesia",
      desc:      "Rumoh Aceh adalah rumah tradisional masyarakat Aceh yang dibangun di atas tiang-tiang kayu tinggi sebagai perlindungan dari banjir dan binatang liar. Arsitekturnya memadukan unsur Islam, alam, dan filosofi kehidupan masyarakat Aceh. Setiap ukiran, arah bangunan, dan jumlah anak tangga memiliki makna spiritual yang mendalam.",
      metaLoc:   "Provinsi Aceh",
      metaStyle: "Arsitektur Islami",
      img:       "/assets/provinsi/aceh/rumohAceh.jpg",
    },
    weapon: {
      name:      "Rencong",
      origin:    "Warisan Budaya Aceh, Indonesia",
      desc:      "Rencong adalah senjata tradisional khas Aceh yang menjadi simbol keberanian, kehormatan, dan semangat perjuangan rakyat Aceh. Bentuknya yang melengkung menyerupai huruf Arab dipercaya mencerminkan nilai-nilai Islam yang kuat dalam kehidupan masyarakat Aceh.",
      metaLoc:   "Identitas Budaya Aceh",
      metaStyle: "Pusaka Kehormatan",
      img:       "/assets/provinsi/aceh/rencong.webp",
    },
    food: {
      name:      "Mie Aceh",
      origin:    "Aceh, Indonesia",
      desc:      "Mie Aceh adalah kuliner legendaris bercita rasa rempah kuat dengan perpaduan mie tebal, kari khas, dan berbagai pilihan lauk seperti daging, seafood, atau kepiting. Aroma rempah Timur Tengah, India, dan Nusantara berpadu menjadi identitas kuliner Aceh yang mendunia.",
      metaLoc:   "Rempah Pilihan",
      metaStyle: "Cita Rasa Khas",
      img:       "/assets/provinsi/aceh/mieaceh.jpg",
    },
    cloth: {
      name:      "Ulee Balang",
      origin:    "Aceh, Indonesia",
      desc:      "Ulee Balang adalah pakaian adat kebesaran masyarakat Aceh yang dahulu dikenakan oleh keluarga kerajaan dan bangsawan. Dominasi warna hitam dipadukan sulaman benang emas melambangkan kewibawaan, kehormatan, dan kejayaan Kesultanan Aceh.",
      metaLoc:   "Sulaman Emas",
      metaStyle: "Warisan Kesultanan",
      img:       "/assets/provinsi/aceh/ulee.jpg",
    },
  },

  "jawa-tengah": {
    name:      "Jawa Tengah",
    tagline:   "Jantung Budaya Jawa — tanah keraton, batik, dan kesenian adiluhung yang menjadi jiwa peradaban Nusantara selama ribuan tahun.",
    history:   "🏛 Sejarah 1.000+ Tahun",
    region:    "🌿 35 Kabupaten / Kota",
    culture:   "🎭 200+ Seni Tradisi",
    arObjects: "4 Objek 3D Tersedia",

    house: {
      name:      "Rumah Joglo",
      origin:    "Jawa Tengah, Indonesia",
      desc:      "Rumah Joglo adalah arsitektur rumah adat Jawa Tengah yang paling ikonik, ditandai oleh atap bertumpuk yang menjulang tinggi disebut tajug. Soko guru — empat pilar utama penopang atap — menjadi pusat filosofi kosmologi Jawa yang mencerminkan keseimbangan antara manusia, alam, dan Tuhan.",
      metaLoc:   "Provinsi Jawa Tengah",
      metaStyle: "Arsitektur Jawa Klasik",
      img:       "assets/provinsi/jawatengah/joglo.jpg",
    },
    weapon: {
      name:      "Keris Jawa",
      origin:    "Warisan Budaya Jawa, Indonesia",
      desc:      "Keris Jawa adalah senjata pusaka bertuah yang telah diakui UNESCO sebagai Warisan Budaya Tak Benda Dunia sejak 2005. Bilahnya yang berlekuk-lekuk (luk) mengandung filosofi spiritual mendalam, dan setiap keris dipercaya memiliki kekuatan gaib sesuai pamor dan dapur tempaannya.",
      metaLoc:   "Warisan UNESCO",
      metaStyle: "Pusaka Spiritual Jawa",
      img:       "assets/provinsi/jawatengah/keris.jpg",
    },
    food: {
      name:      "Gudeg",
      origin:    "Jawa Tengah, Indonesia",
      desc:      "Gudeg adalah masakan khas Jawa Tengah berbahan dasar nangka muda yang dimasak berjam-jam dengan santan, gula jawa, dan rempah pilihan hingga berwarna cokelat kemerahan dan bercita rasa manis gurih. Sajian ini menjadi ikon kuliner Yogyakarta dan Solo yang mendunia.",
      metaLoc:   "Cita Rasa Manis Gurih",
      metaStyle: "Kuliner Keraton",
      img:       "assets/provinsi/jawatengah/gudeg.jpg",
    },
    cloth: {
      name:      "Kebaya Jawa",
      origin:    "Jawa Tengah, Indonesia",
      desc:      "Kebaya Jawa adalah pakaian tradisional perempuan Jawa yang anggun dan penuh filosofi, dipadukan dengan kain batik bermotif parang atau truntum. Busana ini dikenakan pada upacara adat, pernikahan, dan acara kebesaran sebagai lambang kehalusan budi dan keanggunan wanita Jawa.",
      metaLoc:   "Motif Batik Klasik",
      metaStyle: "Simbol Keanggunan Jawa",
      img:       "assets/provinsi/jawatengah/kebaya.jpg",
    },
  },

  "bali": {
    name:      "Bali",
    tagline:   "Pulau Dewata — surga seni, spiritual, dan budaya Hindu-Bali yang memukau dunia dengan upacara sakral, tari magis, dan keindahan alam yang tak tertandingi.",
    history:   "🏛 Sejarah 2.000+ Tahun",
    region:    "🌿 9 Kabupaten / Kota",
    culture:   "🎭 300+ Seni Tradisi",
    arObjects: "4 Objek 3D Tersedia",

    house: {
      name:      "Rumah Adat Bali",
      origin:    "Bali, Indonesia",
      desc:      "Rumah adat Bali dirancang berdasarkan konsep Tri Mandala — pembagian ruang menjadi tiga zona sakral yang mencerminkan kosmologi Hindu Bali. Setiap pekarangan memiliki pura keluarga (sanggah), bale-bale untuk aktivitas sehari-hari, dan area dapur yang tertata sesuai arah mata angin suci.",
      metaLoc:   "Provinsi Bali",
      metaStyle: "Arsitektur Hindu-Bali",
      img:       "assets/provinsi/bali/rumah-bali.jpg",
    },
    weapon: {
      name:      "Tombak Bali",
      origin:    "Warisan Budaya Bali, Indonesia",
      desc:      "Tombak Bali adalah senjata tradisional yang digunakan dalam upacara adat dan tari perang sakral seperti Tari Baris. Tombak ini dihiasi ukiran emas dan permata, serta dianggap memiliki kekuatan spiritual pelindung bagi pemegangnya dalam ritual keagamaan Hindu Bali.",
      metaLoc:   "Ritual Sakral Bali",
      metaStyle: "Pusaka Upacara",
      img:       "assets/provinsi/bali/tombak-bali.jpg",
    },
    food: {
      name:      "Babi Guling",
      origin:    "Bali, Indonesia",
      desc:      "Babi Guling adalah hidangan seremonial Bali yang kini menjadi kuliner ikonik dunia. Seekor babi utuh diisi bumbu base genep — campuran 20+ rempah khas Bali — lalu dipanggang berputar di atas bara api selama berjam-jam hingga kulitnya renyah keemasan dan dagingnya meresap sempurna.",
      metaLoc:   "Rempah Base Genep",
      metaStyle: "Kuliner Seremonial",
      img:       "assets/provinsi/bali/babi-guling.jpg",
    },
    cloth: {
      name:      "Pakaian Adat Bali",
      origin:    "Bali, Indonesia",
      desc:      "Pakaian adat Bali untuk pria terdiri dari udeng (ikat kepala), saput poleng, dan kamen, sedangkan wanita mengenakan kebaya dengan kamen dan selendang. Setiap warna dan motif kain memiliki makna spiritual tersendiri dalam kepercayaan Hindu Bali.",
      metaLoc:   "Motif Sakral Bali",
      metaStyle: "Busana Ritual Hindu",
      img:       "assets/provinsi/bali/pakaian-bali.jpg",
    },
  },

  "bengkulu": {
    name:      "Bengkulu",
    tagline:   "Bumi Rafflesia — tanah pusaka tempat mekarnya bunga raksasa, jejak sejarah benteng perkasa, dan semangat 'Tabut' yang terus terjaga.",
    history:   "🏛 Sejarah 300+ Tahun",
    region:    "🌿 10 Kabupaten / Kota",
    culture:   "🎭 50+ Seni Tradisi",
    arObjects: "4 Objek 3D Tersedia",

    house: {
      name:      "Rumah Bubungan Lima",
      origin:    "Bengkulu, Indonesia",
      desc:      "Rumah Bubungan Lima adalah rumah adat tipe panggung yang dirancang untuk beradaptasi dengan kondisi geografis Bengkulu yang rawan gempa. Memiliki atap yang tinggi menonjol dan ditopang oleh tiang-tiang kayu besar, rumah ini mencerminkan status sosial dan nilai gotong royong masyarakat setempat.",
      metaLoc:   "Provinsi Bengkulu",
      metaStyle: "Arsitektur Vernakular",
      img:       "assets/provinsi/bengkulu/rumah-bubungan-lima.jpg",
    },
    weapon: {
      name:      "Keris Bengkulu",
      origin:    "Warisan Budaya Bengkulu, Indonesia",
      desc:      "Keris Bengkulu memiliki ciri khas pada hulu dan sarung yang sering kali mencerminkan pengaruh budaya Melayu dan pesisir. Sebagai senjata tajam sekaligus benda pusaka, keris ini melambangkan keberanian, perlindungan diri, dan kehormatan bagi pemiliknya dalam upacara adat.",
      metaLoc:   "Identitas Budaya Bengkulu",
      metaStyle: "Pusaka Keagungan",
      img:       "assets/provinsi/bengkulu/keris-bengkulu.jpg",
    },
    food: {
      name:      "Pendap",
      origin:    "Bengkulu, Indonesia",
      desc:      "Pendap adalah kuliner khas berbahan dasar ikan yang dibumbui rempah kekayaan nusantara, parutan kelapa, dan dibungkus daun talas berlapis-lapis. Proses perebusan yang lama menghasilkan cita rasa gurih pedas yang meresap, hingga menjadi hidangan favorit yang telah ada sejak zaman kolonial.",
      metaLoc:   "Olahan Ikan Tradisional",
      metaStyle: "Cita Rasa Autentik",
      img:       "assets/provinsi/bengkulu/pendap.jpg",
    },
    cloth: {
      name:      "Rejang Lebong",
      origin:    "Bengkulu, Indonesia",
      desc:      "Pakaian adat Rejang Lebong terdiri dari kain sutra atau beludru yang dihiasi dengan logam mulia dan motif khas. Dilengkapi dengan 'Siger' (mahkota) bagi wanita dan detar bagi pria, busana ini melambangkan kemegahan, kesantunan, dan kekayaan tradisi suku tertua di Bengkulu.",
      metaLoc:   "Kain Beludru & Logam",
      metaStyle: "Busana Kebesaran",
      img:       "assets/provinsi/bengkulu/rejang-lebong.jpg",
    },
  },

  "riau": {
    name:      "Riau",
    tagline:   "The Homeland of Melayu — pusat peradaban Melayu yang luhur, negeri minyak di atas dan di bawah bumi, serta gerbang budaya di Selat Malaka.",
    history:   "🏛 Warisan Kesultanan Siak",
    region:    "🌿 12 Kabupaten / Kota",
    culture:   "🎭 80+ Seni Tradisi",
    arObjects: "4 Objek 3D Tersedia",

    house: {
      name:      "Rumah Selaso Jatuh Kembar",
      origin:    "Riau, Indonesia",
      desc:      "Rumah adat ini memiliki ciri khas berupa selasar (selaso) yang lebih rendah dari ruang tengah. Bukan sekadar tempat tinggal, bangunan ini berfungsi sebagai balai pertemuan adat. Atapnya dihiasi ukiran 'Selembayung' yang melambangkan hubungan manusia dengan Tuhan, sesama, dan alam sekitar.",
      metaLoc:   "Provinsi Riau",
      metaStyle: "Arsitektur Melayu Tradisional",
      img:       "assets/provinsi/riau/selaso-jatuh-kembar.jpg",
    },
    weapon: {
      name:      "Pedang Jenawi",
      origin:    "Warisan Budaya Riau, Indonesia",
      desc:      "Pedang Jenawi adalah senjata tradisional kebanggaan masyarakat Melayu Riau yang dahulu digunakan oleh para panglima perang kesultanan. Dengan bilah panjang lurus dan ujung yang runcing, pedang ini mencerminkan keberanian, ketangkasan, dan status tinggi pemegangnya dalam membela kehormatan negeri.",
      metaLoc:   "Identitas Panglima Melayu",
      metaStyle: "Pusaka Perjuangan",
      img:       "assets/provinsi/riau/pedang-jenawi.jpg",
    },
    food: {
      name:      "Gulai Belacan",
      origin:    "Riau, Indonesia",
      desc:      "Gulai Belacan adalah hidangan ikonik Riau yang berbahan dasar udang segar yang dimasak dengan kuah santan kental yang diperkaya oleh aroma terasi (belacan) khas. Perpaduan rasa pedas, gurih, dan sedikit asam menjadikannya representasi sempurna dari kekayaan hasil laut dan rempah pesisir Sumatra.",
      metaLoc:   "Kekayaan Laut & Rempah",
      metaStyle: "Cita Rasa Pesisir",
      img:       "assets/provinsi/riau/gulai-belacan.jpg",
    },
    cloth: {
      name:      "Indragiri / Teluk Belanga",
      origin:    "Riau, Indonesia",
      desc:      "Pakaian adat Riau, khususnya Teluk Belanga untuk pria dan Kebaya Laboh untuk wanita, memancarkan kesantunan khas Melayu. Dipadukan dengan kain songket yang dililitkan di pinggang, busana ini melambangkan kerendahan hati, ketaatan pada norma agama, serta kemuliaan budi pekerti.",
      metaLoc:   "Tenunan Songket",
      metaStyle: "Kesantunan Melayu",
      img:       "assets/provinsi/riau/teluk-belanga.jpg",
    },
  },

  "sumatera-utara": {
    name:      "Sumatera Utara",
    tagline:   "The Land of Diverse Culture — harmoni di antara pegunungan Bukit Barisan, kemegahan Danau Toba, dan kekayaan tradisi yang melegenda.",
    history:   "🏛 Warisan Multi-Etnis",
    region:    "🌿 33 Kabupaten / Kota",
    culture:   "🎭 150+ Seni Tradisi",
    arObjects: "4 Objek 3D Tersedia",

    house: {
      name:      "Rumah Bolon",
      origin:    "Sumatera Utara, Indonesia",
      desc:      "Rumah Bolon adalah rumah tradisional suku Batak yang berbentuk panggung dengan atap melengkung menyerupai tanduk kerbau. Bangunan megah tanpa paku ini merupakan simbol status sosial dan pusat kehidupan masyarakat adat. Setiap bagiannya sarat akan ukiran 'Gorga' yang mengandung doa dan nilai filosofis mendalam.",
      metaLoc:   "Provinsi Sumatera Utara",
      metaStyle: "Arsitektur Vernakular Batak",
      img:       "/assets/provinsi/sumut/bolon.jpg",
    },
    weapon: {
      name:      "Piso Gaja Dompak",
      origin:    "Warisan Budaya Batak, Indonesia",
      desc:      "Piso Gaja Dompak adalah senjata pusaka yang memiliki ukiran gajah pada gagangnya. Senjata ini bukan untuk berperang secara umum, melainkan benda magis yang dianggap memiliki kekuatan spiritual tinggi dan hanya dimiliki oleh para pemimpin atau raja-raja Batak sebagai simbol kekuasaan dan kebijaksanaan.",
      metaLoc:   "Pusaka Kerajaan Batak",
      metaStyle: "Senjata Magis & Kekuasaan",
      img:       "/assets/provinsi/sumut/piso.jpg",
    },
    food: {
      name:      "Arsik",
      origin:    "Toba, Sumatera Utara",
      desc:      "Arsik adalah hidangan ikan mas yang dimasak dengan bumbu kuning khas menggunakan andaliman (merica Batak) dan asam cikala. Perpaduan rasa 'getir' yang unik dari andaliman menciptakan cita rasa autentik yang tidak ditemukan di daerah lain, menjadikannya sajian wajib dalam upacara adat.",
      metaLoc:   "Rempah Andaliman",
      metaStyle: "Cita Rasa Toba",
      img:       "/assets/provinsi/sumut/arsik.jpg",
    },
    cloth: {
      name:      "Kain Ulos",
      origin:    "Sumatera Utara, Indonesia",
      desc:      "Ulos adalah kain tenun tradisional yang merupakan jiwa dari identitas masyarakat Sumatera Utara. Setiap motif dan warnanya memiliki makna berbeda untuk kelahiran, pernikahan, hingga duka cita. Ulos tidak hanya sekadar pakaian, tapi juga simbol restu, kasih sayang, dan persatuan dalam struktur kekerabatan.",
      metaLoc:   "Tenunan Tradisional",
      metaStyle: "Simbol Kasih Sayang",
      img:       "/assets/provinsi/sumut/ulos.jpg",
    },
  },

  "sumatera-barat": {
    name:      "Sumatera Barat",
    tagline:   "Ranah Minang Nan Elok — negeri berlandaskan falsafah 'Adat Basandi Syarak, Syarak Basandi Kitabullah' di balik kemegahan Marapi dan Singgalang.",
    history:   "🏛 Warisan Kerajaan Pagaruyung",
    region:    "🌿 19 Kabupaten / Kota",
    culture:   "🎭 120+ Seni Tradisi",
    arObjects: "4 Objek 3D Tersedia",

    house: {
      name:      "Rumah Gadang",
      origin:    "Sumatera Barat, Indonesia",
      desc:      "Rumah Gadang memiliki ciri khas atap 'Gonjong' yang meruncing tajam seperti tanduk kerbau, melambangkan kemenangan dan hubungan manusia dengan Tuhan. Bangunan ini dirancang tahan gempa dan berfungsi sebagai pusat kehidupan komunal keluarga besar yang menganut sistem kekerabatan matrilineal.",
      metaLoc:   "Provinsi Sumatera Barat",
      metaStyle: "Arsitektur Rumah Gadang",
      img:       "/assets/provinsi/sumbar/gadang.jpg",
    },
    weapon: {
      name:      "Kerambit",
      origin:    "Warisan Budaya Minangkabau, Indonesia",
      desc:      "Kerambit adalah pisau genggam kecil berbentuk melengkung yang terinspirasi dari cakar harimau. Senjata yang kini mendunia melalui bela diri Silat ini dirancang untuk pertarungan jarak pendek, melambangkan kecerdikan, kecepatan, dan ketangguhan para pendekar Minang.",
      metaLoc:   "Identitas Pendekar Silat",
      metaStyle: "Senjata Tajam Melengkung",
      img:       "/assets/provinsi/sumbar/kerambit.jpg",
    },
    food: {
      name:      "Rendang",
      origin:    "Minangkabau, Sumatera Barat",
      desc:      "Rendang adalah mahakarya kuliner berbahan daging yang dimasak perlahan dalam santan dan rempah melimpah hingga menghitam dan kering. Melambangkan kesabaran dan ketekunan, Rendang telah diakui secara global sebagai salah satu makanan terenak di dunia.",
      metaLoc:   "Olahan Rempah Lambat",
      metaStyle: "Cita Rasa Juara Dunia",
      img:       "/assets/provinsi/sumbar/rendang.jpg",
    },
    cloth: {
      name:      "Bundo Kanduang",
      origin:    "Sumatera Barat, Indonesia",
      desc:      "Pakaian adat Bundo Kanduang dicirikan oleh penutup kepala 'Tingkuluak' yang menyerupai tanduk kerbau atau atap Rumah Gadang. Busana ini melambangkan kehormatan, keagungan, dan peran sentral perempuan sebagai pemegang soko guru dalam adat Minangkabau.",
      metaLoc:   "Sulaman Benang Emas",
      metaStyle: "Busana Kehormatan Ibu",
      img:       "/assets/provinsi/sumbar/bunka.jpg",
    },
  },

  "kepulauan-riau": {
    name:      "Kepulauan Riau",
    tagline:   "Segantang Lada — untaian ribuan pulau di gerbang maritim dunia, tempat bahasa Melayu bertahta dan sejarah kejayaan bahari terpatri.",
    history:   "🏛 Warisan Kesultanan Lingga",
    region:    "🌿 7 Kabupaten / Kota",
    culture:   "🎭 60+ Seni Tradisi",
    arObjects: "4 Objek 3D Tersedia",

    house: {
      name:      "Rumah Belah Bubung",
      origin:    "Kepulauan Riau, Indonesia",
      desc:      "Rumah Belah Bubung adalah rumah panggung kayu khas masyarakat pesisir Kepri. Nama ini diambil dari bentuk atapnya yang seolah terbelah. Arsitekturnya yang tinggi memungkinkan sirkulasi udara yang baik dan perlindungan dari pasang surut air laut, mencerminkan adaptasi cerdas masyarakat kepulauan.",
      metaLoc:   "Provinsi Kepulauan Riau",
      metaStyle: "Arsitektur Melayu Bahari",
      img:       "assets/provinsi/kepri/rumah-belah-bubung.jpg",
    },
    weapon: {
      name:      "Badik Tumbuk Lada",
      origin:    "Warisan Budaya Kepri, Indonesia",
      desc:      "Badik Tumbuk Lada adalah senjata tikam tradisional yang juga berfungsi sebagai kelengkapan pakaian adat. Dengan ukuran yang relatif kecil namun sangat mematikan, senjata ini melambangkan ketangkasan, keberanian, dan perlindungan diri bagi kaum pria dalam budaya Melayu Kepulauan.",
      metaLoc:   "Identitas Kehormatan Melayu",
      metaStyle: "Pusaka Tikam Khas",
      img:       "assets/provinsi/kepri/tumbuk-lada.jpg",
    },
    food: {
      name:      "Gonggong",
      origin:    "Kepulauan Riau, Indonesia",
      desc:      "Gonggong adalah biota laut sejenis siput yang menjadi ikon kuliner Kepulauan Riau. Disajikan dengan cara direbus dan dinikmati bersama sambal khusus, hidangan ini menawarkan cita rasa gurih dan tekstur kenyal yang unik, merepresentasikan kekayaan hasil laut dari perairan Selat Malaka.",
      metaLoc:   "Hasil Laut Eksotis",
      metaStyle: "Cita Rasa Bahari",
      img:       "assets/provinsi/kepri/gonggong.jpg",
    },
    cloth: {
      name:      "Kebaya Labuh",
      origin:    "Kepulauan Riau, Indonesia",
      desc:      "Kebaya Labuh adalah pakaian adat wanita Kepri yang menjuntai hingga ke lutut. Bentuknya yang longgar mencerminkan nilai kesantunan dan pengaruh ajaran Islam yang kuat. Biasanya dipadukan dengan kain songket atau batik bermotif khas seperti Pucuk Rebung, melambangkan keanggunan perempuan Melayu.",
      metaLoc:   "Tenunan Songket & Satin",
      metaStyle: "Keanggunan Tradisional",
      img:       "assets/provinsi/kepri/kebaya-labuh.jpg",
    },
  },

  // ── Tambahkan provinsi lain di bawah ini mengikuti struktur yang sama ──

};


/* ─────────────────────────────────────────
   2. AMBIL SLUG DARI URL
───────────────────────────────────────── */

function getProvinceSlug() {
  const params = new URLSearchParams(window.location.search);
  const slug   = params.get('provinsi') || 'aceh';
  return provinceDatabase[slug] ? slug : 'aceh';
}


/* ─────────────────────────────────────────
   3. HELPER: SET TEXT & SRC
───────────────────────────────────────── */

function setText(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
}

function setSrc(id, src, alt) {
  const el = document.getElementById(id);
  if (!el) return;
  el.src = src;
  if (alt) el.alt = alt;
}


/* ─────────────────────────────────────────
   4. ISI CARD PER KATEGORI
───────────────────────────────────────── */

const CATEGORY_MAP = {
  rumah:   'house',
  senjata: 'weapon',
  makanan: 'food',
  pakaian: 'cloth',
};

function populateCard(cat, data) {
  setText(`title-${cat}`,      data.name);
  setText(`origin-${cat}`,     data.origin);
  setText(`desc-${cat}`,       data.desc);
  setText(`meta-${cat}-loc`,   data.metaLoc);
  setText(`meta-${cat}-style`, data.metaStyle);
  setSrc(`img-${cat}`,         data.img, data.name);

  const btnQR = document.getElementById(`btn-qr-${cat}`);
  if (btnQR) btnQR.onclick = () => openQRModal(cat, data.name);

  const btnAR = document.getElementById(`btn-ar-${cat}`);
  if (btnAR) btnAR.onclick = () => openARModal(cat, data.name);
}


/* ─────────────────────────────────────────
   5. ISI SEMUA ELEMEN HALAMAN
───────────────────────────────────────── */

function populatePage(slug) {
  const p = provinceDatabase[slug];
  if (!p) return;

  document.title = `Lokanusa 3D — ${p.name}`;
  setText('page-title',            `Lokanusa 3D — ${p.name}`);
  setText('breadcrumb-province',   p.name);
  setText('hero-province-name',    p.name);
  setText('hero-province-desc',    p.tagline);
  setText('hero-tag-history',      p.history);
  setText('hero-tag-region',       p.region);
  setText('hero-tag-culture',      p.culture);
  setText('hero-ar-objects',       p.arObjects);
  setText('section-province-name', p.name);
  setText('footer-province',       `${p.name}, Indonesia`);

  for (const [cat, key] of Object.entries(CATEGORY_MAP)) {
    populateCard(cat, p[key]);
  }
}


/* ─────────────────────────────────────────
   6. PARTICLE CANVAS ENGINE
───────────────────────────────────────── */

(function initParticles() {
  const canvas = document.getElementById('particleCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let W, H, particles = [], mouse = { x: null, y: null };
  const COUNT    = 80;
  const MAX_DIST = 120;
  const GOLD     = '201,168,76';
  const TEAL     = '30,200,176';
  const BLUE     = '58,142,246';
  const COLORS   = [GOLD, TEAL, BLUE];

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function rand(min, max) { return Math.random() * (max - min) + min; }

  function createParticle() {
    const color = COLORS[Math.floor(Math.random() * COLORS.length)];
    return {
      x: rand(0, W), y: rand(0, H),
      vx: rand(-0.3, 0.3), vy: rand(-0.3, 0.3),
      r: rand(0.8, 2.2), color,
      alpha: rand(0.2, 0.7),
    };
  }

  function initParticlePool() {
    particles = Array.from({ length: COUNT }, createParticle);
  }

  function drawLine(p1, p2, dist) {
    const alpha = (1 - dist / MAX_DIST) * 0.18;
    ctx.beginPath();
    ctx.moveTo(p1.x, p1.y);
    ctx.lineTo(p2.x, p2.y);
    ctx.strokeStyle = `rgba(${p1.color},${alpha})`;
    ctx.lineWidth = 0.6;
    ctx.stroke();
  }

  function tick() {
    ctx.clearRect(0, 0, W, H);

    particles.forEach((p, i) => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
      if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;

      if (mouse.x !== null) {
        const dx = p.x - mouse.x, dy = p.y - mouse.y;
        const d  = Math.sqrt(dx * dx + dy * dy);
        if (d < 100) { p.x += (dx / d) * 0.8; p.y += (dy / d) * 0.8; }
      }

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${p.color},${p.alpha})`;
      ctx.fill();

      for (let j = i + 1; j < particles.length; j++) {
        const q  = particles[j];
        const dx = p.x - q.x, dy = p.y - q.y;
        const d  = Math.sqrt(dx * dx + dy * dy);
        if (d < MAX_DIST) drawLine(p, q, d);
      }
    });

    requestAnimationFrame(tick);
  }

  window.addEventListener('resize', () => { resize(); initParticlePool(); });
  window.addEventListener('mousemove', e => { mouse.x = e.clientX; mouse.y = e.clientY; });
  window.addEventListener('mouseleave', () => { mouse.x = null; mouse.y = null; });

  resize();
  initParticlePool();
  tick();
})();


/* ─────────────────────────────────────────
   7. NAVBAR
───────────────────────────────────────── */

(function initNav() {
  const navbar    = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.querySelector('.nav-links');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', isOpen);
    });
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
    document.addEventListener('click', e => {
      if (!navbar.contains(e.target)) {
        navLinks.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  const sections = document.querySelectorAll('section[id], header[id]');
  const links    = document.querySelectorAll('.nav-links a');

  function setActiveLink() {
    let current = '';
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
    });
    links.forEach(a => {
      const href = a.getAttribute('href')?.replace('#', '');
      a.classList.toggle('active', href === current);
    });
  }
  window.addEventListener('scroll', setActiveLink, { passive: true });
})();


/* ─────────────────────────────────────────
   8. SCROLL REVEAL ANIMATION
───────────────────────────────────────── */

(function initReveal() {
  const revealEls = document.querySelectorAll('.reveal');
  if (!revealEls.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  revealEls.forEach(el => observer.observe(el));
})();


/* ─────────────────────────────────────────
   9. AR MODAL
───────────────────────────────────────── */

function openARModal(category, name) {
  const modal     = document.getElementById('arModal');
  const nameLabel = document.getElementById('ar-modal-name');
  if (nameLabel) nameLabel.textContent = name || '—';
  if (modal) {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
    trapFocus(modal);
  }
}

function closeARModal() {
  const modal = document.getElementById('arModal');
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
}


/* ─────────────────────────────────────────
   10. QR MODAL + QR CODE GENERATOR
───────────────────────────────────────── */

function generateQRPattern(slug) {
  const SIZE = 21;
  const CELL = 200 / SIZE;

  let seed = 0;
  for (let i = 0; i < slug.length; i++) seed = (seed * 31 + slug.charCodeAt(i)) >>> 0;
  function seededRand() {
    seed ^= seed << 13; seed ^= seed >> 17; seed ^= seed << 5;
    return (seed >>> 0) / 0xFFFFFFFF;
  }

  const grid = Array.from({ length: SIZE }, () => Array(SIZE).fill(0));
  for (let r = 0; r < SIZE; r++)
    for (let c = 0; c < SIZE; c++)
      grid[r][c] = seededRand() > 0.5 ? 1 : 0;

  function drawFinder(r0, c0) {
    for (let dr = 0; dr < 7; dr++)
      for (let dc = 0; dc < 7; dc++) {
        const onOuter = dr === 0 || dr === 6 || dc === 0 || dc === 6;
        const onInner = dr >= 2 && dr <= 4 && dc >= 2 && dc <= 4;
        grid[r0 + dr][c0 + dc] = (onOuter || onInner) ? 1 : 0;
      }
  }

  drawFinder(0, 0);
  drawFinder(0, SIZE - 7);
  drawFinder(SIZE - 7, 0);

  for (let i = 8; i < SIZE - 8; i++) {
    grid[6][i] = i % 2 === 0 ? 1 : 0;
    grid[i][6] = i % 2 === 0 ? 1 : 0;
  }

  let rects = '';
  for (let r = 0; r < SIZE; r++)
    for (let c = 0; c < SIZE; c++)
      if (grid[r][c]) {
        const x  = c * CELL, y = r * CELL;
        const rx = CELL > 6 ? 1.5 : 0.5;
        rects += `<rect x="${x.toFixed(1)}" y="${y.toFixed(1)}" width="${CELL.toFixed(1)}" height="${CELL.toFixed(1)}" rx="${rx}" fill="#111"/>`;
      }
  return rects;
}

function openQRModal(category, name) {
  const modal  = document.getElementById('qrModal');
  const nameEl = document.getElementById('qr-object-name');
  const slugEl = document.getElementById('qr-slug');
  const svgEl  = document.getElementById('qr-svg');
  const slug   = (name || category).toLowerCase().replace(/\s+/g, '-');

  if (nameEl) nameEl.textContent = name || '—';
  if (slugEl) slugEl.textContent = slug;
  if (svgEl)  svgEl.innerHTML    = generateQRPattern(slug);

  if (modal) {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
    trapFocus(modal);
  }
}

function closeQRModal() {
  const modal = document.getElementById('qrModal');
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
}


/* ─────────────────────────────────────────
   11. MODAL — Keyboard & backdrop close
───────────────────────────────────────── */

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { closeARModal(); closeQRModal(); }
});

document.querySelectorAll('.modal-overlay').forEach(overlay => {
  overlay.addEventListener('click', e => {
    if (e.target === overlay) { closeARModal(); closeQRModal(); }
  });
});

function trapFocus(el) {
  const focusable = el.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  const first = focusable[0], last = focusable[focusable.length - 1];
  if (first) first.focus();

  el._trapHandler = function (e) {
    if (e.key !== 'Tab') return;
    if (e.shiftKey) {
      if (document.activeElement === first) { e.preventDefault(); last.focus(); }
    } else {
      if (document.activeElement === last)  { e.preventDefault(); first.focus(); }
    }
  };
  el.addEventListener('keydown', el._trapHandler);
}

['arModal', 'qrModal'].forEach(id => {
  const el = document.getElementById(id);
  if (!el) return;
  const observer = new MutationObserver(() => {
    if (!el.classList.contains('open') && el._trapHandler)
      el.removeEventListener('keydown', el._trapHandler);
  });
  observer.observe(el, { attributes: true, attributeFilter: ['class'] });
});


/* ─────────────────────────────────────────
   12. CULTURE CARD — Keyboard Enter/Space
───────────────────────────────────────── */

document.querySelectorAll('.culture-card').forEach(card => {
  card.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      const arBtn = card.querySelector('.btn-ar');
      if (arBtn) arBtn.click();
    }
  });
});


/* ─────────────────────────────────────────
   13. SMOOTH SCROLL
───────────────────────────────────────── */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});


/* ─────────────────────────────────────────
   14. DOWNLOAD QR BUTTON
───────────────────────────────────────── */

(function initDownloadQR() {
  const btn = document.querySelector('.btn-download-qr');
  if (!btn) return;

  btn.addEventListener('click', () => {
    const svgEl  = document.getElementById('qr-svg');
    const slugEl = document.getElementById('qr-slug');
    if (!svgEl) return;

    const slug    = slugEl ? slugEl.textContent : 'lokanusa-qr';
    const svgData = new XMLSerializer().serializeToString(svgEl);
    const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
    const url     = URL.createObjectURL(svgBlob);
    const a       = document.createElement('a');
    a.href = url; a.download = `lokanusa-qr-${slug}.svg`;
    document.body.appendChild(a); a.click();
    document.body.removeChild(a); URL.revokeObjectURL(url);
  });
})();


/* ─────────────────────────────────────────
   15. HERO — Launch AR button (stub)
───────────────────────────────────────── */

(function initHeroAR() {
  const launchBtn = document.querySelector('.btn-launch-ar');
  if (!launchBtn) return;

  launchBtn.addEventListener('click', () => {
    const original = launchBtn.textContent;
    launchBtn.textContent = '⏳ Menghubungkan ke kamera…';
    launchBtn.disabled = true;
    setTimeout(() => {
      launchBtn.textContent = '✅ Kamera siap! (Demo Mode)';
      setTimeout(() => {
        launchBtn.textContent = original;
        launchBtn.disabled    = false;
      }, 2000);
    }, 1800);
  });
})();


/* ─────────────────────────────────────────
   16. CARD TILT — 3D on hover
───────────────────────────────────────── */

(function initCardTilt() {
  if (window.matchMedia('(hover: none)').matches) return;

  document.querySelectorAll('.culture-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const cx   = rect.left + rect.width  / 2;
      const cy   = rect.top  + rect.height / 2;
      const dx   = (e.clientX - cx) / (rect.width  / 2);
      const dy   = (e.clientY - cy) / (rect.height / 2);
      card.style.transform  = `translateY(-8px) scale(1.01) rotateX(${-dy * 5}deg) rotateY(${dx * 5}deg)`;
      card.style.transition = 'transform 0.08s ease';
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform  = '';
      card.style.transition = 'transform 0.35s cubic-bezier(.4,0,.2,1)';
    });
  });
})();


/* ─────────────────────────────────────────
   17. SCROLL WHEEL — hide on scroll
───────────────────────────────────────── */

(function initScrollWheel() {
  const indicator = document.querySelector('.scroll-indicator');
  if (!indicator) return;
  window.addEventListener('scroll', () => {
    indicator.style.opacity    = window.scrollY > 100 ? '0' : '1';
    indicator.style.transition = 'opacity 0.4s ease';
  }, { passive: true });
})();


/* ─────────────────────────────────────────
   INIT — jalankan setelah DOM siap
───────────────────────────────────────── */

document.addEventListener('DOMContentLoaded', () => {
  const slug = getProvinceSlug();
  populatePage(slug);
});
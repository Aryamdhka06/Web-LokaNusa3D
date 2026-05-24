/* ════════════════════════════════════════
   Lokanusa 3D — province.js
   Province Data · Dynamic Renderer
   Particle Engine · Nav · Modals · Upload
   QR Generator · Reveal Animations
════════════════════════════════════════ */

'use strict';


/* ─────────────────────────────────────────
   AR LINKS
───────────────────────────────────────── */

const arLinks = {
  "aceh": {
    house:   "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=Aceh/Alat%20musik.glb",
    weapon:  "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=Aceh/Rumah%20adat.glb",
    food:    "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=Aceh/Makanan.glb",
    cloth:   "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=Aceh/Pakaian%20adat.glb",
  },
  "bali": {
    house:   "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=Bali/Rumah%20adat%20.glb",
    weapon:  "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=Bali/Senjata%20bali.glb",
    food:    "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=Bali/Makanan%20bali%20.glb",
    cloth:   "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=Bali/Pakaian%20bali.glb",
  },
  "kep-bangka-belitung": {
    house:   "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=BangkaBelitung/rumahadat.glb",
    music:  "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=BangkaBelitung/Alat%20musik.glb",
    food:    "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=BangkaBelitung/Makanan%20khas.glb",
    cloth:   "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=BangkaBelitung/pakaian%20adat.glb",
  },
  "banten": {
  house:  "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=Banten/Rumah%20adat.glb",
  weapon: "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=Banten/Senjata%20tradisional.glb",
  music:  "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=Banten/Alat%20musik.glb",
  cloth:  "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=Banten/pakaian%20adat.glb",
},
  "bengkulu": {
    house:   "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=Bengkulu/rumah%20adat.glb",
    weapon:  "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=Bengkulu/senjata%20tradisional.glb",
    food:    "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=Bengkulu/Makanan%20khas.glb",
    cloth:   "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=Bengkulu/Pakaian%20adat.glb",
  },

  "di-yogyakarta": {
    house:   "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=D.I.Yogyakarta/Rumah%20jogja.glb",
    weapon:  "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=D.I.Yogyakarta/Senjata%20jogja.glb",
    food:    "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=D.I.Yogyakarta/Makanan%20jogja.glb",
    cloth:   "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=D.I.Yogyakarta/Pakaian%20jojga.glb",
  },

  "dki-jakarta": {
    house:   "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=DKI%20Jakarta/Rumah%20adat.glb",
    weapon:  "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=DKI%20Jakarta/Senjata%20tradisional.glb",
    food:    "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=DKI%20Jakarta/Makanan%20khas.glb",
    cloth:   "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=DKI%20Jakarta/Pakaian%20adat.glb",
  },

  "gorontalo": {
  house:  "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=Gorontalo/rumah%20adat.glb",
  music:  "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=Gorontalo/alat%20musik.glb",
  food:   "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=Gorontalo/makanan.glb",
  cloth:  "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=Gorontalo/baju%20adat.glb",
},

  "jambi": {
    house:   "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=Jambi/rumahjambi.glb",
    weapon:  "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=Jambi/Senjata.glb",
    food:    "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=Jambi/Makanan.glb",
    cloth:   "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=Jambi/Pakaian.glb",
  },

  "jawa-barat": {
    house:   "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=Jawa%20Barat/Rumah%20adat.glb",
    weapon:  "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=Jawa%20Barat/Senjata%20tradisional.glb",
    food:    "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=Jawa%20Barat/Makanan%20khas.glb",
    cloth:   "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=Jawa%20Barat/pakaian%20adat.glb",
  },

  "jawa-tengah": {
    house:   "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=Jawa%20Tengah/Rumah%20semarang.glb",
    weapon:  "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=Jawa%20Tengah/Senjata%20semarang.glb",
    food:    "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=Jawa%20Tengah/Makanan%20semarang.glb",
    cloth:   "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=Jawa%20Tengah/Pakaian%20semarang.glb",
  },

  "jawa-timur": {
    house:   "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=Jawa%20Timur/Rumah%20surabaya.glb",
    weapon:  "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=Jawa%20Timur/Senjata%20surabaya.glb",
    food:    "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=Jawa%20Timur/Rawon%20surabaya.glb",
    cloth:   "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=Jawa%20Timur/Pakaian%20surabaya.glb",
  },

  "kalimantan-barat": {
  house:  "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=Kalimantan%20Barat/Meshy_AI_Red_Stilt_House_0519083956_texture.glb",
  music:  "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=Kalimantan%20Barat/Meshy_AI_Geometric_Djembe_0519082212_texture.glb",
  food:   "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=Kalimantan%20Barat/Meshy_AI_Bamboo_leaf_wrapped_z_0519082836_texture.glb",
  cloth:  "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=Kalimantan%20Barat/Meshy_AI_Twin_Feathered_Headdr_0519083437_texture.glb",
},

  "kalimantan-selatan": {
    house:   "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=Kalimantan%20Selatan/Meshy_AI_Redshield_Warrior_0518082048_texture.glb",
    weapon:  "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=Kalimantan%20Selatan/Meshy_AI_Redshield_Warrior_0518080953_texture.glb",
    food:    "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=Kalimantan%20Selatan/Meshy_AI_Thai_style_Chicken_No_0518073411_texture.glb",
    cloth:   "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=Kalimantan%20Selatan/Meshy_AI_Golden_Royal_Wedding__0518072457_texture.glb",
  },

  "kalimantan-tengah": {
    house:   "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=Kalimantan%20Tengah/Meshy_AI_Rumah_Betang_Kalimant_0518084231_texture.glb",
    weapon:  "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=Kalimantan%20Tengah/Meshy_AI_Redshield_Warrior_0518080953_texture.glb",
    food:    "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=Kalimantan%20Tengah/Meshy_AI_Yellow_Curry_with_Bam_0518083714_texture.glb",
    cloth:   "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=Kalimantan%20Tengah/Meshy_AI_Girl_in_Traditional_E_0518083100_texture.glb",
  },

  "kalimantan-timur": {
    house:   "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=Kalimantan%20Timur/Meshy_AI_Stilt_House_with_Gabl_0519043841_texture.glb",
    weapon:  "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=Kalimantan%20Timur/Meshy_AI_Ornate_Pipa_0519033500_texture.glb",
    food:    "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=Kalimantan%20Timur/Meshy_AI_Golden_Noodle_Soup_wi_0519034150_texture.glb",
    cloth:   "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=Kalimantan%20Timur/Meshy_AI_Gold_Threaded_Boy_0519034604_texture.glb",
  },

  "kalimantan-utara": {
  house:   "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=Kalimantan%20Utara/Meshy_AI_Emerald_Roofed_House__0518122746_texture.glb",
  music:  "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=Kalimantan%20Utara/Meshy_AI_Ornate_Drum_on_a_Carv_0518132429_texture.glb",
  food:    "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=Kalimantan%20Utara/Meshy_AI_Crystal_Golem_0518140903_texture.glb",
  cloth:   "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=Kalimantan%20Utara/Meshy_AI_Crystal_Golem_0518141553_texture.glb",
},

  "kepulauan-riau": {
    house:   "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=Kepulauan%20Riau/Rumah%20Adat.glb",
    weapon:  "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=Kepulauan%20Riau/Senjata%20Tradisional.glb",
    food:    "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=Kepulauan%20Riau/Makanan%20Khas.glb",
    cloth:   "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=Kepulauan%20Riau/pakaian%20adat.glb",
  },
  "maluku-utara": {
  house:  "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=Maluku%20Utara/Meshy_AI_Thatched_Stilt_House_0521053709_texture.glb",
  dance:  "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=Maluku%20Utara/Meshy_AI_Red_Scarf_Warrior_0521054058_texture.glb",
  music:  "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=Maluku%20Utara/Meshy_AI_Decorated_Djembe_Drum_0521054716_texture.glb",
  cloth:  "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=Maluku%20Utara/Meshy_AI_Traditional_Couple_in_0521055316_texture.glb",
},

  "sumatera-utara": {
  house:  "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=Sumatra%20Utara/Rumah%20adat.glb",
  music:  "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=Sumatra%20Utara/Alat%20musik.glb",  // ← ganti dari weapon
  dance:  "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=Sumatra%20Utara/Tarian.glb",        // ← ganti dari food
  cloth:  "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=Sumatra%20Utara/Pakaian%20adat.glb",
},

  "papua": {
    house:   "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=Papua/Rumah%20papua.glb",
    weapon:  "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=Papua/Senjata%20papuan.glb",
    food:    "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=Papua/Makanan%20papua.glb",
    cloth:   "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=Papua/Pakaian%20papua.glb",
  },

  "papua-pegunungan": {
    house:   "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=Papua%20%20Pegunungan/Rumah%20Papua%20Pegunungan.glb",
    weapon:  "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=Papua%20%20Pegunungan/Senjata%20Papua%20Pegunungan.glb",
    food:    "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=Papua%20%20Pegunungan/Makanan%20Papua%20Pegunungan%20.glb",
    cloth:   "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=Papua%20%20Pegunungan/Pakaian%20Papua%20Pegunungan.glb",
  },

  "papua-barat": {
    house:   "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=Papua%20Barat/Meshy_AI_Bamboo_Stilt_House_0521050819_texture.glb",
    weapon:  "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=Papua%20Barat/Meshy_AI_Stone_Age_Weapons_0521051332_texture.glb",
    food:    "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=Papua%20Barat/Meshy_AI_Claypot_Congee_with_G_0521052236_texture.glb",
    cloth:   "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=Papua%20Barat/Meshy_AI_Island_Warriors_in_Gr_0521053357_texture.glb",
  },
 "lampung": {
  house:      "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=Lampung/rumah%20adat.glb",
  tradition:  "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=Lampung/Tradisi.glb",
  music:      "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=Lampung/Alat%20musik.glb",
  cloth:      "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=Lampung/pakaian%20adat.glb",
},

  "maluku": {
  house:  "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=Maluku/rumah%20adat.glb",
  music:  "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=Maluku/alat%20musik.glb",
  food:   "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=Maluku/makanan.glb",
  cloth:  "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=Maluku/baju%20adat.glb",
},

  "ntb": {
    house:   "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=NTB/Rumah%20NTB.glb",
    weapon:  "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=NTB/Senjata%20NTB.glb",
    food:    "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=NTB/Makanan%20NTB.glb",
    cloth:   "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=NTB/Pakaian%20NTB.glb",
  },

  "ntt": {
    house:   "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=NTT/Rumah%20NTT.glb",
    weapon:  "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=NTT/Senjata%20NTT.glb",
    food:    "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=NTT/Makanan%20NTT.glb",
    cloth:   "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=NTT/Pakaian%20NTT.glb",
  },

  "riau": {
    house:   "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=Riau/Rumah%20adat.glb",
    weapon:  "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=Riau/Senjata%20Tradisional%20.glb",
    food:    "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=Riau/Makanan%20Khas.glb",
    cloth:   "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=Riau/Pakaian%20Adat.glb",
  },

   "sulawesi-barat": {
  house:  "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=Sulawesi%20Barat/rumah%20adat_.glb",
  music:  "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=Sulawesi%20Barat/alat%20musik.glb",
  food:   "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=Sulawesi%20Barat/makanan_.glb",
  cloth:  "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=Sulawesi%20Barat/baju%20adat.glb",
},

  "sulawesi-selatan": {
  house:  "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=Sulawesi%20Selatan/rumah.glb",
  music:  "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=Sulawesi%20Selatan/alat%20musik_.glb",
  food:   "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=Sulawesi%20Selatan/makanan_.glb",
  cloth:  "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=Sulawesi%20Selatan/baju%20adat_.glb",
},

  "sulawesi-tengah": {
  house:  "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=Sulawesi%20Tengah/rumah%20adat.glb",
  music:  "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=Sulawesi%20Tengah/alat%20musik.glb",
  food:   "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=Sulawesi%20Tengah/makanan.glb",
  cloth:  "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=Sulawesi%20Tengah/baju%20adat_.glb",
},

  "sulawesi-tenggara": {
  house:  "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=Sulawesi%20Tenggara/rumah%20adat_.glb",
  music:  "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=Sulawesi%20Tenggara/alat%20musik.glb",
  food:   "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=Sulawesi%20Tenggara/makanan_.glb",
  cloth:  "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=Sulawesi%20Tenggara/Baju%20adat.glb",
},

  "sulawesi-utara": {
    house:   "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=Sulawesi%20Utara/Meshy_AI_Orange_Stilt_House_0519030213_texture.glb",
    weapon:  "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=Sulawesi%20Utara/Meshy_AI_Crossed_Swords_on_Red_0519030846_texture.glb",
    food:    "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=Sulawesi%20Utara/Meshy_AI_Shredded_Meat_Congee__0519031720_texture.glb",
    cloth:   "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=Sulawesi%20Utara/Meshy_AI_Crimson_Feathered_War_0519032511_texture.glb",
  },

  "sumatera-barat": {
    house:   "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=Sumatera%20Barat/rumahsumbar.glb",
    weapon:  "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=Sumatera%20Barat/Senjata.glb",
    food:    "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=Sumatera%20Barat/Makanan.glb",
    cloth:   "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=Sumatera%20Barat/Pakaian%20adat.glb",
  },

  "sumatera-selatan": {
    house:   "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=Sumatera%20Selatan/Rumah%20Adat.glb",
    weapon:  "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=Sumatera%20Selatan/Senjata.glb",
    food:    "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=Sumatera%20Selatan/makanan%20Khas.glb",
    cloth:   "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=Sumatera%20Selatan/Pakaian%20Adat.glb",
  },

  "papua-barat-daya": {
    house:   "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=Papua%20Barat%20Daya/Rumah.glb",
    weapon:  "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=Papua%20Barat%20Daya/Senjata%20papua%20barat%20daya.glb",
    food:    "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=Papua%20Barat%20Daya/Makanan%20papua%20barat%20daya.glb",
    cloth:   "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=Papua%20Barat%20Daya/Pakaian%20adat.glb",
  },

  "papua-selatan": {
  house:  "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=papua%20selatan/rumah%20adat.glb",
  music:  "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=papua%20selatan/musik.glb",
  food:   "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=papua%20selatan/Makanan.glb",
  cloth:  "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=papua%20selatan/baju%20adat.glb",
},

  "papua-tengah": {
    house:   "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=papua%20tengah/rumah%20adat.glb",
    weapon:  "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=papua%20tengah/alat%20musik.glb",
    food:    "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=papua%20tengah/makanan.glb",
    cloth:   "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=papua%20tengah/baju%20adat.glb",
  },
};

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
    },
    weapon: {
      name:      "Rencong",
      origin:    "Warisan Budaya Aceh, Indonesia",
      desc:      "Rencong adalah senjata tradisional khas Aceh yang menjadi simbol keberanian, kehormatan, dan semangat perjuangan rakyat Aceh. Bentuknya yang melengkung menyerupai huruf Arab dipercaya mencerminkan nilai-nilai Islam yang kuat dalam kehidupan masyarakat Aceh.",
      metaLoc:   "Identitas Budaya Aceh",
      metaStyle: "Pusaka Kehormatan",
    },
    food: {
      name:      "Mie Aceh",
      origin:    "Aceh, Indonesia",
      desc:      "Mie Aceh adalah kuliner legendaris bercita rasa rempah kuat dengan perpaduan mie tebal, kari khas, dan berbagai pilihan lauk seperti daging, seafood, atau kepiting. Aroma rempah Timur Tengah, India, dan Nusantara berpadu menjadi identitas kuliner Aceh yang mendunia.",
      metaLoc:   "Rempah Pilihan",
      metaStyle: "Cita Rasa Khas",
    },
    cloth: {
      name:      "Ulee Balang",
      origin:    "Aceh, Indonesia",
      desc:      "Ulee Balang adalah pakaian adat kebesaran masyarakat Aceh yang dahulu dikenakan oleh keluarga kerajaan dan bangsawan. Dominasi warna hitam dipadukan sulaman benang emas melambangkan kewibawaan, kehormatan, dan kejayaan Kesultanan Aceh.",
      metaLoc:   "Sulaman Emas",
      metaStyle: "Warisan Kesultanan",
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
      img:       "../../assets/provinsi/jawatengah/joglo.jpg",
    },
    weapon: {
      name:      "Keris Jawa",
      origin:    "Warisan Budaya Jawa, Indonesia",
      desc:      "Keris Jawa adalah senjata pusaka bertuah yang telah diakui UNESCO sebagai Warisan Budaya Tak Benda Dunia sejak 2005. Bilahnya yang berlekuk-lekuk (luk) mengandung filosofi spiritual mendalam, dan setiap keris dipercaya memiliki kekuatan gaib sesuai pamor dan dapur tempaannya.",
      metaLoc:   "Warisan UNESCO",
      metaStyle: "Pusaka Spiritual Jawa",
      img:       "../../assets/provinsi/jawatengah/keris.jpg",
    },
    food: {
      name:      "Gudeg",
      origin:    "Jawa Tengah, Indonesia",
      desc:      "Gudeg adalah masakan khas Jawa Tengah berbahan dasar nangka muda yang dimasak berjam-jam dengan santan, gula jawa, dan rempah pilihan hingga berwarna cokelat kemerahan dan bercita rasa manis gurih. Sajian ini menjadi ikon kuliner Yogyakarta dan Solo yang mendunia.",
      metaLoc:   "Cita Rasa Manis Gurih",
      metaStyle: "Kuliner Keraton",
      img:       "../../assets/provinsi/jawatengah/gudeg.jpg",
    },
    cloth: {
      name:      "Kebaya Jawa",
      origin:    "Jawa Tengah, Indonesia",
      desc:      "Kebaya Jawa adalah pakaian tradisional perempuan Jawa yang anggun dan penuh filosofi, dipadukan dengan kain batik bermotif parang atau truntum. Busana ini dikenakan pada upacara adat, pernikahan, dan acara kebesaran sebagai lambang kehalusan budi dan keanggunan wanita Jawa.",
      metaLoc:   "Motif Batik Klasik",
      metaStyle: "Simbol Keanggunan Jawa",
      img:       "../../assets/provinsi/jawatengah/kebaya.jpg",
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
      arLink:    "https://aryamdhka06.github.io/arloka/ar/viewer.html?model=Bali/Makanan%20bali%20.glb",
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
      img:       "../../assets/provinsi/riau/Rumah Adat.png",
    },
    weapon: {
      name:      "Pedang Jenawi",
      origin:    "Warisan Budaya Riau, Indonesia",
      desc:      "Pedang Jenawi adalah senjata tradisional kebanggaan masyarakat Melayu Riau yang dahulu digunakan oleh para panglima perang kesultanan. Dengan bilah panjang lurus dan ujung yang runcing, pedang ini mencerminkan keberanian, ketangkasan, dan status tinggi pemegangnya dalam membela kehormatan negeri.",
      metaLoc:   "Identitas Panglima Melayu",
      metaStyle: "Pusaka Perjuangan",
      img:       "../../assets/provinsi/riau/senjata.png",
    },
    food: {
      name:      "Gulai Belacan",
      origin:    "Riau, Indonesia",
      desc:      "Gulai Belacan adalah hidangan ikonik Riau yang berbahan dasar udang segar yang dimasak dengan kuah santan kental yang diperkaya oleh aroma terasi (belacan) khas. Perpaduan rasa pedas, gurih, dan sedikit asam menjadikannya representasi sempurna dari kekayaan hasil laut dan rempah pesisir Sumatra.",
      metaLoc:   "Kekayaan Laut & Rempah",
      metaStyle: "Cita Rasa Pesisir",
      img:       "../../assets/provinsi/riau/makanan.png",
    },
    cloth: {
      name:      "Indragiri / Teluk Belanga",
      origin:    "Riau, Indonesia",
      desc:      "Pakaian adat Riau, khususnya Teluk Belanga untuk pria dan Kebaya Laboh untuk wanita, memancarkan kesantunan khas Melayu. Dipadukan dengan kain songket yang dililitkan di pinggang, busana ini melambangkan kerendahan hati, ketaatan pada norma agama, serta kemuliaan budi pekerti.",
      metaLoc:   "Tenunan Songket",
      metaStyle: "Kesantunan Melayu",
      img:       "../../assets/provinsi/riau/indragiri.png",
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
    music: {                              // ← ganti dari weapon
    name:      "Gordang Sambilan",
    origin:    "Sumatera Utara, Indonesia",
    desc:      "Gordang Sambilan adalah alat musik tradisional Batak Mandailing berupa sembilan gendang besar yang dimainkan bersama dalam upacara adat. Bunyinya yang menggelegar melambangkan keagungan dan kekuatan spiritual masyarakat Batak.",
    metaLoc:   "Musik Tradisional Batak",
    metaStyle: "Alat Musik Pukul",
  },
     dance: {                              // ← ganti dari food
    name:      "Tor-Tor",
    origin:    "Sumatera Utara, Indonesia",
    desc:      "Tor-Tor adalah tarian sakral suku Batak yang diiringi gondang sabangunan. Setiap gerakan tangannya mengandung makna doa dan komunikasi dengan leluhur, dipertunjukkan dalam upacara adat, pernikahan, dan penyambutan tamu kehormatan.",
    metaLoc:   "Tari Sakral Batak",
    metaStyle: "Tarian Upacara Adat",
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

  "jambi": {
    name:      "Jambi",
    tagline:   "Bumi Sepucuk Jambi Sembilan Lurah — negeri warisan Melayu kuno yang kaya akan sejarah kerajaan, adat istiadat, dan budaya di tepian Sungai Batanghari.",
    history:   "🏛 Sejarah Kerajaan Melayu Kuno",
    region:    "🌿 11 Kabupaten / Kota",
    culture:   "🎭 Tradisi Melayu Jambi",
    arObjects: "4 Objek 3D Tersedia",

    house: {
      name:      "Rumah Kajang Leko",
      origin:    "Jambi, Indonesia",
      desc:      "Rumah Kajang Leko adalah rumah adat masyarakat Jambi yang terkenal dengan bentuk atap melengkung (Gajah Mabuk) dan struktur rumah panggung dari kayu. Bangunan ini melambangkan kebersamaan, tata krama, dan kehidupan masyarakat Melayu Jambi yang menjunjung tinggi adat istiadat.",
      metaLoc:   "Provinsi Jambi",
      metaStyle: "Arsitektur Melayu Jambi",
      img:       "assets/provinsi/jambi/kajang-leko.jpg",
    },
    weapon: {
      name:      "Keris Siginjai",
      origin:    "Warisan Budaya Jambi, Indonesia",
      desc:      "Keris Siginjai merupakan senjata tradisional khas Jambi yang menjadi simbol keberanian, kehormatan, dan kebesaran. Selama ratusan tahun, keris ini menjadi lambang kekuasaan para Sultan Jambi dan pusaka yang sangat disakralkan dalam adat Melayu Jambi.",
      metaLoc:   "Identitas Budaya Jambi",
      metaStyle: "Pusaka Kehormatan",
      img:       "assets/provinsi/jambi/keris-siginjai.jpg",
    },
    food: {
      name:      "Tempoyak Ikan Patin",
      origin:    "Jambi, Indonesia",
      desc:      "Tempoyak adalah masakan khas Jambi yang terbuat dari fermentasi durian. Perpaduan rasa asam dan gurih yang unik, biasanya dimasak bersama ikan patin segar dari Sungai Batanghari, menciptakan identitas kuliner yang sangat kuat di masyarakat Jambi.",
      metaLoc:   "Kuliner Tradisional",
      metaStyle: "Fermentasi Khas Melayu",
      img:       "assets/provinsi/jambi/tempoyak.jpg",
    },
    cloth: {
      name:      "Baju Kurung Tanggung",
      origin:    "Jambi, Indonesia",
      desc:      "Baju Kurung Tanggung adalah pakaian adat khas Jambi yang disebut 'tanggung' karena panjang lengannya yang tidak sampai ke pergelangan tangan. Busana ini biasanya terbuat dari kain beludru dengan hiasan sulaman benang emas yang melambangkan kemewahan dan kehormatan.",
      metaLoc:   "Warisan Budaya Melayu",
      metaStyle: "Busana Adat Jambi",
      img:       "assets/provinsi/jambi/baju-kurung-tanggung.jpg",
    },
  },

  "sumatera-selatan": {
    name:      "Sumatera Selatan",
    tagline:   "Bumi Sriwijaya — pusat peradaban maritim Melayu kuno yang kaya akan sejarah, budaya, sungai, dan warisan tradisi megah di jantung Sumatera.",
    history:   "🏛 Sejarah Kerajaan Sriwijaya",
    region:    "🌿 17 Kabupaten / Kota",
    culture:   "🎭 100+ Warisan Budaya",
    arObjects: "4 Objek 3D Tersedia",

    house: {
      name:      "Rumah Limas",
      origin:    "Sumatera Selatan, Indonesia",
      desc:      "Rumah Limas adalah rumah adat khas Sumatera Selatan yang terkenal dengan bentuk atap bertingkat dan lantai berundak yang disebut Bengkilas. Rumah ini melambangkan tingkatan sosial, kehormatan keluarga, serta filosofi kehidupan masyarakat Palembang yang menjunjung adat dan keharmonisan.",
      metaLoc:   "Provinsi Sumatera Selatan",
      metaStyle: "Arsitektur Melayu Palembang",
      img:       "assets/provinsi/sumsel/rumah-limas.jpg",
    },
    weapon: {
      name:      "Tombak Trisula",
      origin:    "Warisan Budaya Sumatera Selatan, Indonesia",
      desc:      "Tombak Trisula merupakan senjata tradisional khas Sumatera Selatan yang melambangkan keberanian dan kekuatan para pejuang. Bentuk ujungnya yang bercabang tiga menjadi simbol kewibawaan serta keteguhan dalam mempertahankan kehormatan Bumi Sriwijaya.",
      metaLoc:   "Identitas Budaya Palembang",
      metaStyle: "Pusaka Tradisional",
      img:       "assets/provinsi/sumsel/tombak-trisula.jpg",
    },
    food: {
      name:      "Pempek",
      origin:    "Palembang, Sumatera Selatan",
      desc:      "Pempek adalah mahakarya kuliner Sumatera Selatan yang terbuat dari olahan ikan dan sagu. Disajikan dengan kuah 'cuko' yang memiliki perpaduan rasa asam, manis, dan pedas, pempek telah menjadi ikon kuliner Nusantara yang diakui secara internasional.",
      metaLoc:   "Kuliner Khas Palembang",
      metaStyle: "Cita Rasa Legendaris",
      img:       "assets/provinsi/sumsel/pempek.jpg",
    },
    cloth: {
      name:      "Aesan Gede",
      origin:    "Sumatera Selatan, Indonesia",
      desc:      "Aesan Gede adalah pakaian adat kebesaran masyarakat Palembang yang mencerminkan kemegahan Kerajaan Sriwijaya. Didominasi warna merah dan emas dengan hiasan songket Palembang yang mewah, busana ini melambangkan kemakmuran dan keagungan budaya luhur.",
      metaLoc:   "Warisan Kesultanan Palembang",
      metaStyle: "Busana Adat Kerajaan",
      img:       "assets/provinsi/sumsel/aesan-gede.jpg",
    },
  },

  "kep-bangka-belitung": {
    name:      "Bangka Belitung",
    tagline:   "Negeri Serumpun Sebalai — surga pulau timah dan pasir putih, tempat budaya Melayu dan Tionghoa berpadu harmonis di Laut Bangka yang memukau.",
    history:   "🏛 Sejarah 300+ Tahun",
    region:    "🌿 7 Kabupaten / Kota",
    culture:   "🎭 40+ Seni Tradisi",
    arObjects: "4 Objek 3D Tersedia",

    house: {
      name:      "Rumah Rakit",
      origin:    "Bangka Belitung, Indonesia",
      desc:      "Rumah Rakit adalah hunian tradisional khas masyarakat pesisir Bangka Belitung yang dibangun mengapung di atas air, bertumpu pada susunan bambu atau kayu gelondongan. Arsitekturnya mencerminkan ketergantungan masyarakat pada laut sebagai sumber kehidupan, sekaligus simbol adaptasi budaya dengan alam perairan.",
      metaLoc:   "Provinsi Bangka Belitung",
      metaStyle: "Arsitektur Pesisir Melayu",
      img:       "assets/provinsi/bangka-belitung/rumah-rakit.jpg",
    },
    music: {
  name:      "Gitar Dambus",
  origin:    "Bangka Belitung, Indonesia",
  desc:      "Gitar Dambus adalah alat musik tradisional khas Bangka Belitung yang dimainkan dengan cara dipetik. Instrumen ini memiliki bentuk menyerupai gitar namun dengan suara yang lebih lembut dan khas, sering dimainkan dalam upacara adat, pertunjukan seni, dan perayaan budaya Melayu sebagai pengiring tari dan nyanyian daerah.",
  metaLoc:   "Alat Musik Melayu Bangka",
  metaStyle: "Instrumen Petik Tradisional",
},
    food: {
      name:      "Mie Koba",
      origin:    "Bangka Belitung, Indonesia",
      desc:      "Mie Koba adalah kuliner ikonik yang menggunakan kaldu ikan tenggiri segar yang gurih, disajikan dengan mie kuning, telur rebus, dan perasan jeruk kunci. Sajian ini menyimpan cita rasa autentik laut Bangka yang telah melegenda di kalangan nelayan dan masyarakat pesisir.",
      metaLoc:   "Ikan Pilihan Lokal",
      metaStyle: "Cita Rasa Pesisir",
      img:       "assets/provinsi/bangka-belitung/mie-koba.jpg",
    },
    cloth: {
      name:      "Paksian",
      origin:    "Bangka Belitung, Indonesia",
      desc:      "Paksian adalah pakaian adat pengantin yang menampilkan perpaduan megah antara budaya Melayu dan Tionghoa. Didominasi warna merah dan hiasan mahkota yang menjulang, busana ini melambangkan kemewahan, kebahagiaan, dan keharmonisan akulturasi budaya di Bumi Serumpun Sebalai.",
      metaLoc:   "Perpaduan Melayu-Tionghoa",
      metaStyle: "Warisan Adat Pengantin",
      img:       "assets/provinsi/bangka-belitung/paksian.jpg",
    },
  },

  "bengkulu": {
    name:      "Bengkulu",
    tagline:   "Bumi Rafflesia — tanah bunga terbesar di dunia, jejak sejarah kolonial yang gagah, dan kekayaan budaya Melayu pesisir yang terjaga di pantai barat Sumatera.",
    history:   "🏛 Sejarah 350+ Tahun",
    region:    "🌿 10 Kabupaten / Kota",
    culture:   "🎭 50+ Seni Tradisi",
    arObjects: "4 Objek 3D Tersedia",

    house: {
      name:      "Rumah Bubungan Lima",
      origin:    "Bengkulu, Indonesia",
      desc:      "Rumah Bubungan Lima adalah rumah adat tradisional masyarakat Bengkulu yang dicirikan oleh atapnya yang menjulang dengan lima sudut kemiringan simetris, melambangkan keseimbangan dan harmoni dalam kehidupan. Dibangun di atas tiang-tiang kayu pilihan dengan kolong yang tinggi, setiap elemen bangunannya mengandung filosofi adat Melayu Bengkulu tentang kebersamaan, kesopanan, dan penghormatan kepada leluhur.",
      metaLoc:   "Provinsi Bengkulu",
      metaStyle: "Arsitektur Melayu Pesisir",
      img:       "/assets/provinsi/bengkulu/bubunganLima.jpg",
    },
    weapon: {
      name:      "Keris Bengkulu",
      origin:    "Warisan Budaya Bengkulu, Indonesia",
      desc:      "Keris Bengkulu adalah senjata pusaka tradisional yang memiliki keunikan pada bilahnya yang berlekuk khas dan pamor besi yang menawan, berbeda dari keris daerah lain di Nusantara. Diwariskan lintas generasi sebagai lambang keberanian, perlindungan spiritual, dan martabat keluarga adat, keris ini kerap hadir dalam upacara pernikahan dan prosesi adat Bengkulu sebagai simbol restu leluhur.",
      metaLoc:   "Identitas Budaya Bengkulu",
      metaStyle: "Pusaka Spiritual Melayu",
      img:       "/assets/provinsi/bengkulu/kerisBengkulu.jpg",
    },
    food: {
      name:      "Pendap",
      origin:    "Bengkulu, Indonesia",
      desc:      "Pendap adalah kuliner tradisional khas Bengkulu berupa ikan segar yang dibumbui rempah pilihan — jahe, kelapa parut, cabai, dan aneka rempah lokal — kemudian dibungkus rapat daun talas dan dikukus hingga matang sempurna. Proses masak yang perlahan menghasilkan cita rasa yang meresap dalam, gurih, dan aromatik, menjadikan Pendap sebagai warisan kuliner Bengkulu yang paling dirindukan dan sulit ditiru.",
      metaLoc:   "Rempah Lokal Bengkulu",
      metaStyle: "Kuliner Warisan Leluhur",
      img:       "/assets/provinsi/bengkulu/pendap.jpg",
    },
    cloth: {
      name:      "Besurek",
      origin:    "Bengkulu, Indonesia",
      desc:      "Besurek adalah kain batik tradisional khas Bengkulu yang dihiasi motif aksara Arab gundul dan ragam hias flora khas daerah, termasuk motif bunga Rafflesia yang ikonik. Kata 'besurek' berarti 'bersurat' — mencerminkan perpaduan nilai Islam dan kearifan lokal dalam setiap helai kainnya. Dikenakan dalam upacara adat, pernikahan, dan penyambutan tamu kehormatan sebagai kebanggaan identitas budaya Bengkulu.",
      metaLoc:   "Motif Aksara Arab & Rafflesia",
      metaStyle: "Warisan Batik Islami",
      img:       "/assets/provinsi/bengkulu/besurek.jpg",
    },
  },

  "lampung": {
    name:      "Lampung",
    tagline:   "Sang Bumi Ruwa Jurai — gerbang Sumatera yang kaya akan tradisi megalitik, kain tapis emas, dan keanggunan gajah Sumatera di tanah yang subur dan penuh semangat.",
    history:   "🏛 Sejarah 400+ Tahun",
    region:    "🌿 15 Kabupaten / Kota",
    culture:   "🎭 60+ Seni Tradisi",
    arObjects: "4 Objek 3D Tersedia",

    house: {
      name:      "Nuwo Sesat",
      origin:    "Lampung, Indonesia",
      desc:      "Nuwo Sesat adalah rumah adat besar masyarakat Lampung yang berfungsi sebagai balai pertemuan para pemuka adat dan pusat musyawarah marga. Dibangun di atas tiang kayu yang kokoh dengan atap berbentuk limas bersusun, bangunan ini dihiasi ukiran dan ornamen khas Lampung yang sarat nilai filosofi tentang kebersamaan, kepemimpinan, dan kehormatan adat Pepadun maupun Saibatin.",
      metaLoc:   "Provinsi Lampung",
      metaStyle: "Arsitektur Adat Melayu Lampung",
      img:       "/assets/provinsi/lampung/nuwoSesat.jpg",
    },
     tradition: {
    name:      "Tradisi Pernikahan Adat Saibatin",
    origin:    "Lampung, Indonesia",
    desc:      "Tradisi pernikahan adat Suku Saibatin menggunakan tandu adat sebagai simbol kehormatan bagi pengantin. Tradisi ini mencerminkan kebersamaan, gotong royong, dan penghormatan terhadap budaya Lampung.",
    metaLoc:   "Tradisi Adat Lampung",
    metaStyle: "Upacara Pernikahan",
  },
  music: {
    name:      "Gambus Lampung",
    origin:    "Lampung, Indonesia",
    desc:      "Gambus Lampung adalah alat musik petik tradisional khas Lampung yang dimainkan sebagai pengiring lagu-lagu daerah dan upacara adat. Suaranya yang merdu mencerminkan kekayaan seni budaya Melayu Lampung yang telah diwariskan turun-temurun.",
    metaLoc:   "Alat Musik Tradisional",
    metaStyle: "Instrumen Petik Melayu",
  },
    cloth: {
      name:      "Tapis Lampung",
      origin:    "Lampung, Indonesia",
      desc:      "Tapis Lampung adalah kain tenun tradisional yang dihasilkan dari perpaduan benang katun dan sulaman benang emas atau perak bermotif geometris, flora, dan fauna khas Lampung. Dikenakan dalam upacara adat dan prosesi pernikahan, setiap helai Tapis merupakan karya seni tangan yang membutuhkan ketelitian dan waktu berbulan-bulan, menjadikannya simbol keagungan dan identitas budaya Lampung yang paling dikenal dunia.",
      metaLoc:   "Sulaman Benang Emas",
      metaStyle: "Warisan Tenun Adat",
      img:       "/assets/provinsi/lampung/tapis.jpg",
    },
  },

  "dki-jakarta": {
    name:      "DKI Jakarta",
    tagline:   "Kota Sejuta Cerita — ibu kota Nusantara yang memadukan denyut modernitas, semangat Betawi yang hangat, dan warisan sejarah panjang sebagai pusat peradaban dan perjuangan bangsa Indonesia.",
    history:   "🏛 Sejarah 500+ Tahun",
    region:    "🌿 5 Kota / 1 Kabupaten",
    culture:   "🎭 80+ Seni Tradisi",
    arObjects: "4 Objek 3D Tersedia",

    house: {
      name:      "Rumah Kebaya",
      origin:    "DKI Jakarta, Indonesia",
      desc:      "Rumah Kebaya adalah rumah adat tradisional masyarakat Betawi yang mendapat namanya dari bentuk atap pelana yang berlipat menyerupai kebaya bila dilihat dari samping. Dibangun dengan serambi lebar sebagai ruang menyambut tamu — cerminan budaya Betawi yang terbuka dan ramah — rumah ini memadukan pengaruh arsitektur Melayu, Arab, Tionghoa, dan Belanda yang berpadu harmonis sebagai bukti nyata Jakarta sebagai kota pertemuan peradaban.",
      metaLoc:   "Provinsi DKI Jakarta",
      metaStyle: "Arsitektur Betawi Multikultural",
      img:       "/assets/provinsi/dki_jakarta/rumahKebaya.jpg",
    },
    weapon: {
      name:      "Golok Betawi",
      origin:    "Warisan Budaya Betawi, Jakarta, Indonesia",
      desc:      "Golok Betawi adalah senjata tradisional khas masyarakat Betawi berupa pisau besar bermata satu dengan bilah tebal dan gagang yang kokoh, kerap dihiasi ukiran motif khas Betawi. Lebih dari sekadar senjata, Golok Betawi adalah simbol kejantanan, kehormatan, dan semangat jawara Betawi yang gagah berani — selalu hadir dalam seni bela diri Beksi dan prosesi budaya Betawi hingga kini.",
      metaLoc:   "Identitas Budaya Betawi",
      metaStyle: "Senjata Jawara Betawi",
      img:       "/assets/provinsi/dki_jakarta/golokBetawi.jpg",
    },
    food: {
      name:      "Kerak Telor",
      origin:    "Jakarta, Indonesia",
      desc:      "Kerak Telor adalah kuliner tradisional Betawi yang telah melegenda sejak zaman Batavia — perpaduan nasi ketan putih, telur ayam atau bebek, ebi, dan kelapa sangrai yang dimasak di atas bara api dengan teknik unik dibalik tanpa wajan. Gurih, renyah, dan beraroma smoky yang khas menjadikan Kerak Telor sebagai ikon kuliner Jakarta yang paling dirindukan, terutama saat perayaan Ulang Tahun Kota Jakarta setiap tahunnya.",
      metaLoc:   "Kuliner Ikonik Betawi",
      metaStyle: "Cita Rasa Legendaris Jakarta",
      img:       "/assets/provinsi/dki_jakarta/kerakTelor.jpg",
    },
    cloth: {
      name:      "Dandanan Care Haji",
      origin:    "Jakarta, Indonesia",
      desc:      "Dandanan Care Haji adalah busana adat pengantin Betawi yang paling prestisius, mencerminkan pengaruh kuat budaya Islam dalam kehidupan masyarakat Betawi Jakarta. Sang pengantin pria mengenakan jubah gamis dan sorban layaknya busana haji, sementara pengantin wanita tampil anggun dengan baju kurung berwarna cerah berhiaskan payet dan aksesori emas berlimpah — melambangkan doa, kemewahan, dan keberkahan dalam mahligai rumah tangga.",
      metaLoc:   "Busana Pengantin Betawi",
      metaStyle: "Warisan Adat Islami Betawi",
      img:       "/assets/provinsi/dki_jakarta/dandananCareHaji.jpg",
    },
  },

  "banten": {
    name:      "Banten",
    tagline:   "Tanah Jawara dan Ulama — warisan kejayaan Kesultanan Banten yang agung, tempat tradisi debus yang memukau, ilmu silat yang tangguh, dan semangat Islam yang mengakar kuat di ujung barat Pulau Jawa.",
    history:   "🏛 Sejarah 500+ Tahun",
    region:    "🌿 8 Kabupaten / Kota",
    culture:   "🎭 50+ Seni Tradisi",
    arObjects: "4 Objek 3D Tersedia",

    house: {
      name:      "Rumah Baduy (Sulang Nyanda)",
      origin:    "Banten, Indonesia",
      desc:      "Rumah Baduy adalah hunian tradisional masyarakat adat Baduy yang dibangun sepenuhnya dari bahan alam tanpa menggunakan paku logam. Mengikuti aturan adat 'pikukuh', rumah ini mencerminkan komitmen mendalam masyarakat Baduy dalam menjaga keselarasan hidup dengan alam semesta secara turun-temurun.",
      metaLoc:   "Provinsi Banten",
      metaStyle: "Arsitektur Adat Baduy",
      img:       "assets/provinsi/banten/rumah-baduy.jpg",
    },
    weapon: {
      name:      "Golok Ciomas",
      origin:    "Warisan Budaya Banten, Indonesia",
      desc:      "Golok Ciomas adalah senjata pusaka legendaris yang hanya ditempa di Desa Ciomas menggunakan teknik tradisional berabad-abad. Dipercaya memiliki kekuatan magis dan hanya ditempa pada waktu tertentu, setiap bilahnya dianggap memiliki 'jiwa' yang melambangkan kewibawaan para jawara dan pendekar Banten.",
      metaLoc:   "Identitas Budaya Banten",
      metaStyle: "Pusaka Legendaris Jawara",
      img:       "assets/provinsi/banten/golok-ciomas.jpg",
    },
    music: {
    name:      "Angklung Buhun",
    origin:    "Banten, Indonesia",
    desc:      "Angklung Buhun adalah alat musik tradisional khas masyarakat Baduy di Banten yang terbuat dari bambu pilihan. Dimainkan dalam upacara adat Seren Taun sebagai ungkapan syukur atas hasil panen, instrumen ini mencerminkan keharmonisan masyarakat Baduy dengan alam dan nilai-nilai leluhur yang dijaga secara turun-temurun.",
    metaLoc:   "Alat Musik Tradisional Baduy",
    metaStyle: "Instrumen Bambu Sakral",
  },
    cloth: {
      name:      "Pangsi Banten",
      origin:    "Banten, Indonesia",
      desc:      "Pangsi Banten adalah busana tradisional berupa setelan baju dan celana longgar yang menjadi identitas para jawara dan pendekar. Warna hitamnya melambangkan keteguhan hati, keberanian, dan kemandirian, mencerminkan semangat pejuang yang mengakar kuat di masyarakat Banten.",
      metaLoc:   "Busana Para Jawara Banten",
      metaStyle: "Warisan Adat Pendekar",
      img:       "assets/provinsi/banten/pangsi-banten.jpg",
    },
  },

  "jawa-barat": {
    name:      "Jawa Barat",
    tagline:   "Tatar Sunda yang Agung — tanah para seniman, pujangga, dan pejuang berbalut alam pegunungan hijau yang subur, tempat budaya Sunda mengalir indah bagai lantunan kecapi suling di senja hari.",
    history:   "🏛 Sejarah 1.500+ Tahun",
    region:    "🌿 27 Kabupaten / Kota",
    culture:   "🎭 100+ Seni Tradisi",
    arObjects: "4 Objek 3D Tersedia",

    house: {
      name:      "Imah Julang Ngapak",
      origin:    "Jawa Barat, Indonesia",
      desc:      "Imah Julang Ngapak adalah rumah adat tradisional masyarakat Sunda yang memiliki ciri khas atap berbentuk dua sisi miring lebar menyerupai sayap burung yang sedang mengembang — itulah arti dari 'julang ngapak' dalam bahasa Sunda. Dibangun dari bahan alam seperti bambu, kayu, dan ijuk, rumah ini mencerminkan filosofi hidup masyarakat Sunda yang selaras dengan alam, rendah hati, dan penuh kearifan lokal yang telah teruji selama berabad-abad.",
      metaLoc:   "Provinsi Jawa Barat",
      metaStyle: "Arsitektur Tradisional Sunda",
      img:       "/assets/provinsi/jawa_barat/julangNgapak.jpg",
    },
    weapon: {
      name:      "Kujang",
      origin:    "Warisan Budaya Sunda, Jawa Barat, Indonesia",
      desc:      "Kujang adalah senjata pusaka paling sakral dan ikonik milik masyarakat Sunda, dengan bentuk bilah berlubang dan lekukan unik yang tidak ditemukan pada senjata tradisional mana pun di Nusantara. Dipercaya telah ada sejak zaman Kerajaan Sunda, Kujang bukan sekadar senjata melainkan simbol kekuatan, kesuburan, dan perlindungan — kini diabadikan sebagai lambang Provinsi Jawa Barat dan kebanggaan seluruh urang Sunda.",
      metaLoc:   "Identitas Budaya Sunda",
      metaStyle: "Pusaka Sakral Tanah Sunda",
      img:       "/assets/provinsi/jawa_barat/kujang.jpg",
    },
    food: {
      name:      "Nasi Timbel",
      origin:    "Jawa Barat, Indonesia",
      desc:      "Nasi Timbel adalah sajian nasi putih pulen yang dibungkus daun pisang hangat hingga harum dan disajikan lengkap dengan lauk khas Sunda — ayam goreng, ikan asin, tahu tempe goreng, sambal terasi, lalapan segar, dan sayur asem yang menyegarkan. Kesederhanaan penyajiannya justru menjadi kekuatan terbesar Nasi Timbel sebagai simbol kehangatan, keakraban, dan filosofi hidup masyarakat Sunda yang selalu bersyukur dengan alam.",
      metaLoc:   "Cita Rasa Asli Sunda",
      metaStyle: "Kuliner Tradisional Sunda",
      img:       "/assets/provinsi/jawa_barat/nasiTimbel.jpg",
    },
    cloth: {
      name:      "Kebaya Sunda",
      origin:    "Jawa Barat, Indonesia",
      desc:      "Kebaya Sunda adalah busana adat perempuan Sunda yang terkenal dengan potongannya yang anggun, ramping, dan berwarna cerah — berbeda dari kebaya daerah lain dengan ciri khas kerah dan bordiran bunga yang lembut dan menawan. Dipadukan dengan kain batik atau tenun Sunda bermotif lereng dan kujang, Kebaya Sunda memancarkan kelembutan, keeleganan, dan kebanggaan perempuan Sunda yang telah menjadi ikon kecantikan budaya Nusantara.",
      metaLoc:   "Keanggunan Perempuan Sunda",
      metaStyle: "Busana Adat Sunda",
      img:       "/assets/provinsi/jawa_barat/kebayaSunda.jpg",
    },
  },

  "jawa-barat": {
    name:      "Jawa Barat",
    tagline:   "Tatar Sunda yang Agung — tanah para seniman, pujangga, dan pejuang berbalut alam pegunungan hijau yang subur, tempat budaya Sunda mengalir indah bagai lantunan kecapi suling di senja hari.",
    history:   "🏛 Sejarah 1.500+ Tahun",
    region:    "🌿 27 Kabupaten / Kota",
    culture:   "🎭 100+ Seni Tradisi",
    arObjects: "4 Objek 3D Tersedia",

    house: {
      name:      "Imah Julang Ngapak",
      origin:    "Jawa Barat, Indonesia",
      desc:      "Imah Julang Ngapak adalah rumah adat tradisional masyarakat Sunda yang memiliki ciri khas atap berbentuk dua sisi miring lebar menyerupai sayap burung yang sedang mengembang — itulah arti dari 'julang ngapak' dalam bahasa Sunda. Dibangun dari bahan alam seperti bambu, kayu, dan ijuk, rumah ini mencerminkan filosofi hidup masyarakat Sunda yang selaras dengan alam, rendah hati, dan penuh kearifan lokal yang telah teruji selama berabad-abad.",
      metaLoc:   "Provinsi Jawa Barat",
      metaStyle: "Arsitektur Tradisional Sunda",
      img:       "/assets/provinsi/jawa_barat/julangNgapak.jpg",
    },
    weapon: {
      name:      "Kujang",
      origin:    "Warisan Budaya Sunda, Jawa Barat, Indonesia",
      desc:      "Kujang adalah senjata pusaka paling sakral dan ikonik milik masyarakat Sunda, dengan bentuk bilah berlubang dan lekukan unik yang tidak ditemukan pada senjata tradisional mana pun di Nusantara. Dipercaya telah ada sejak zaman Kerajaan Sunda, Kujang bukan sekadar senjata melainkan simbol kekuatan, kesuburan, dan perlindungan — kini diabadikan sebagai lambang Provinsi Jawa Barat dan kebanggaan seluruh urang Sunda.",
      metaLoc:   "Identitas Budaya Sunda",
      metaStyle: "Pusaka Sakral Tanah Sunda",
      img:       "/assets/provinsi/jawa_barat/kujang.jpg",
    },
    food: {
      name:      "Nasi Timbel",
      origin:    "Jawa Barat, Indonesia",
      desc:      "Nasi Timbel adalah sajian nasi putih pulen yang dibungkus daun pisang hangat hingga harum dan disajikan lengkap dengan lauk khas Sunda — ayam goreng, ikan asin, tahu tempe goreng, sambal terasi, lalapan segar, dan sayur asem yang menyegarkan. Kesederhanaan penyajiannya justru menjadi kekuatan terbesar Nasi Timbel sebagai simbol kehangatan, keakraban, dan filosofi hidup masyarakat Sunda yang selalu bersyukur dengan alam.",
      metaLoc:   "Cita Rasa Asli Sunda",
      metaStyle: "Kuliner Tradisional Sunda",
      img:       "/assets/provinsi/jawa_barat/nasiTimbel.jpg",
    },
    cloth: {
      name:      "Kebaya Sunda",
      origin:    "Jawa Barat, Indonesia",
      desc:      "Kebaya Sunda adalah busana adat perempuan Sunda yang terkenal dengan potongannya yang anggun, ramping, dan berwarna cerah — berbeda dari kebaya daerah lain dengan ciri khas kerah dan bordiran bunga yang lembut dan menawan. Dipadukan dengan kain batik atau tenun Sunda bermotif lereng dan kujang, Kebaya Sunda memancarkan kelembutan, keeleganan, dan kebanggaan perempuan Sunda yang telah menjadi ikon kecantikan budaya Nusantara.",
      metaLoc:   "Keanggunan Perempuan Sunda",
      metaStyle: "Busana Adat Sunda",
      img:       "/assets/provinsi/jawa_barat/kebayaSunda.jpg",
    },
  },

  "jawa-timur": {
    name:      "Jawa Timur",
    tagline:   "The Land of Glory — gerbang kejayaan Majapahit, tanah para pahlawan yang berani, dan kemegahan alam dari kawah Bromo hingga puncak Semeru.",
    history:   "🏛 Warisan Imperium Majapahit",
    region:    "🌿 38 Kabupaten / Kota",
    culture:   "🎭 100+ Seni Tradisi",
    arObjects: "4 Objek 3D Tersedia",

    house: {
      name:      "Rumah Joglo Situbondo",
      origin:    "Jawa Timur, Indonesia",
      desc:      "Rumah Joglo Situbondo memiliki ciri khas atap tajug yang menjulang tinggi, mencerminkan akulturasi budaya Jawa dan pengaruh pesisir. Struktur bangunannya didominasi kayu jati berkualitas tinggi dengan filosofi 'Soko Guru' sebagai penopang utama, melambangkan kekuatan fondasi keluarga dan hubungan harmonis antara manusia dengan Sang Pencipta.",
      metaLoc:   "Provinsi Jawa Timur",
      metaStyle: "Arsitektur Joglo Jawa Timuran",
      img:       "assets/provinsi/jatim/joglo-situbondo.jpg",
    },
    weapon: {
      name:      "Clurit",
      origin:    "Warisan Budaya Madura, Jawa Timur",
      desc:      "Clurit adalah senjata tradisional khas masyarakat Madura yang memiliki bentuk melengkung menyerupai sabit. Lebih dari sekadar alat pertanian, Clurit merupakan simbol harga diri, keberanian, dan kejantanan. Dalam tradisi 'Carok', senjata ini menjadi manifestasi pertahanan kehormatan yang sangat sakral bagi pemiliknya.",
      metaLoc:   "Identitas Satria Madura",
      metaStyle: "Senjata Tajam Melengkung",
      img:       "assets/provinsi/jatim/clurit.jpg",
    },
    food: {
      name:      "Rawon",
      origin:    "Jawa Timur, Indonesia",
      desc:      "Rawon adalah sup daging legendaris dengan kuah hitam pekat yang berasal dari bumbu kluwek. Perpaduan rempah yang kaya menghasilkan cita rasa gurih yang mendalam dan aroma yang kuat. Hidangan ini merupakan salah satu kuliner tertua di Jawa yang tetap menjadi identitas utama kelezatan masakan Jawa Timur.",
      metaLoc:   "Olahan Rempah Kluwek",
      metaStyle: "Cita Rasa Klasik Jawa",
      img:       "assets/provinsi/jatim/rawon.jpg",
    },
    cloth: {
      name:      "Pesa'an",
      origin:    "Madura, Jawa Timur",
      desc:      "Pesa'an adalah pakaian adat khas Madura yang terdiri dari kaos garis-garis merah putih dan baju luar hitam longgar. Motif garis tersebut melambangkan semangat yang tegas dan pemberani, sementara bentuknya yang longgar mencerminkan karakter masyarakat Jawa Timur yang terbuka, jujur, dan menjunjung tinggi kebebasan.",
      metaLoc:   "Busana Khas Madura",
      metaStyle: "Simbol Ketegasan & Keberanian",
      img:       "assets/provinsi/jatim/pesaan.jpg",
    },
  },

  "ntb": {
    name:      "Nusa Tenggara Barat",
    tagline:   "The Land of Thousand Mosques — harmoni keindahan alam Rinjani, pesona bahari Mandalika, dan ketangguhan budaya Sasak, Samawa, serta Mbojo.",
    history:   "🏛 Warisan Kerajaan Selaparang & Bima",
    region:    "🌿 10 Kabupaten / Kota",
    culture:   "🎭 70+ Seni Tradisi",
    arObjects: "4 Objek 3D Tersedia",

    house: {
      name:      "Rumah Bale Tani",
      origin:    "Lombok, Nusa Tenggara Barat",
      desc:      "Bale Tani adalah rumah tradisional suku Sasak yang lantainya terbuat dari campuran tanah liat dan kotoran kerbau untuk menjaga suhu dan kekokohan. Atapnya yang rendah mengharuskan tamu menunduk saat masuk, melambangkan rasa hormat dan kerendahan hati terhadap tuan rumah serta alam semesta.",
      metaLoc:   "Provinsi NTB",
      metaStyle: "Arsitektur Vernakular Sasak",
      img:       "assets/provinsi/ntb/bale-tani.jpg",
    },
    weapon: {
      name:      "Tulup",
      origin:    "Warisan Budaya Sasak, Nusa Tenggara Barat",
      desc:      "Tulup adalah senjata tiup tradisional yang digunakan oleh suku Sasak untuk berburu. Terbuat dari bambu kecil pilihan, senjata ini memerlukan ketepatan dan kontrol napas yang tinggi. Tulup mencerminkan kearifan lokal masyarakat NTB dalam memanfaatkan hasil alam untuk kelangsungan hidup secara efisien.",
      metaLoc:   "Identitas Pemburu Sasak",
      metaStyle: "Senjata Tiup Tradisional",
      img:       "assets/provinsi/ntb/tulup.jpg",
    },
    food: {
      name:      "Ayam Taliwang",
      origin:    "Lombok, Nusa Tenggara Barat",
      desc:      "Ayam Taliwang adalah kuliner ikonik berbahan dasar ayam kampung muda yang dibakar dengan bumbu cabai kering, bawang merah, putih, dan terasi pilihan. Cita rasanya yang sangat pedas dan aromatik menjadi simbol keberanian dan gairah masyarakat Lombok dalam mengolah rempah lokal.",
      metaLoc:   "Olahan Rempah Pedas",
      metaStyle: "Cita Rasa Lombok",
      img:       "assets/provinsi/ntb/ayam-taliwang.jpg",
    },
    cloth: {
      name:      "Lambung",
      origin:    "Nusa Tenggara Barat",
      desc:      "Lambung adalah pakaian adat wanita suku Sasak yang digunakan untuk menyambut tamu atau upacara adat 'Mendakin'. Terdiri dari kebaya hitam tanpa kerah dan kain songket khas (Sukerare), busana ini melambangkan kesederhanaan, ketulusan, dan keanggunan perempuan di Nusa Tenggara Barat.",
      metaLoc:   "Tenunan Songket Sasak",
      metaStyle: "Busana Tradisional Wanita",
      img:       "assets/provinsi/ntb/lambung.jpg",
    },
  },

  "ntt": {
    name:      "Nusa Tenggara Timur",
    tagline:   "The Land of Exotic Islands — bentang alam purba Komodo, keajaiban tiga warna Kelimutu, dan gema musik Sasando di antara ribuan gugusan pulau.",
    history:   "🏛 Warisan Tradisi Megalitik",
    region:    "🌿 22 Kabupaten / Kota",
    culture:   "🎭 90+ Seni Tradisi",
    arObjects: "4 Objek 3D Tersedia",

    house: {
      name:      "Mbaru Niang",
      origin:    "Wae Rebo, Nusa Tenggara Timur",
      desc:      "Mbaru Niang adalah rumah adat berbentuk kerucut yang memiliki lima tingkat di desa Wae Rebo. Arsitekturnya yang unik melambangkan persatuan masyarakat dan perlindungan dari alam pegunungan. Setiap tingkatnya memiliki fungsi spesifik, mulai dari tempat tinggal hingga penyimpanan benih tanaman dan persembahan.",
      metaLoc:   "Provinsi NTT",
      metaStyle: "Arsitektur Vernakular Manggarai",
      img:       "assets/provinsi/ntt/mbaru-niang.jpg",
    },
    weapon: {
      name:      "Sundu",
      origin:    "Warisan Budaya Sumba, Nusa Tenggara Timur",
      desc:      "Sundu adalah senjata tajam tradisional sejenis keris khas masyarakat Sumba. Memiliki bilah lurus dan gagang yang unik, Sundu dianggap sebagai benda keramat yang melambangkan status sosial, keberanian, dan kejantanan para pria Sumba, terutama saat digunakan dalam upacara adat dan ritual Pasola.",
      metaLoc:   "Identitas Satria Sumba",
      metaStyle: "Pusaka Tikam Tradisional",
      img:       "assets/provinsi/ntt/sundu.jpg",
    },
    food: {
      name:      "Se'i",
      origin:    "Kupang, Nusa Tenggara Timur",
      desc:      "Se'i adalah daging asap khas NTT yang dimasak menggunakan kayu kosambi untuk memberikan aroma asap yang khas dan mendalam. Teknik pengasapan tradisional ini membuat daging tahan lama dan memiliki tekstur lembut dengan cita rasa gurih alami, menjadi ikon kuliner paling populer dari tanah Timor.",
      metaLoc:   "Olahan Daging Asap",
      metaStyle: "Cita Rasa Autentik Timor",
      img:       "assets/provinsi/ntt/sei.jpg",
    },
    cloth: {
      name:      "Kain Tenun Ikat",
      origin:    "Nusa Tenggara Timur",
      desc:      "Tenun Ikat NTT adalah mahakarya seni tekstil yang dibuat dengan teknik manual yang rumit dan pewarna alami. Setiap motif menceritakan silsilah keluarga, status sosial, dan kepercayaan suku-suku di NTT. Kain ini bukan sekadar pakaian, melainkan identitas sakral yang menghubungkan manusia dengan leluhur.",
      metaLoc:   "Wastra Tradisional NTT",
      metaStyle: "Simbol Identitas Suku",
      img:       "assets/provinsi/ntt/tenun-ikat.jpg",
    },
  },

  "kalimantan-barat": {
  name:      "Kalimantan Barat",
  tagline:   "Bumi Khatulistiwa — tanah pertemuan budaya Melayu dan Dayak yang kaya akan tradisi, alam luas, dan kearifan lokal yang hidup di sepanjang garis ekuator.",
  history:   "🏛 Sejarah Kerajaan & Kesultanan",
  region:    "🌿 14 Kabupaten / Kota",
  culture:   "🎭 100+ Seni Tradisi",
  arObjects: "4 Objek 3D Tersedia",

  house: {
    name:      "Rumah Radakng",
    origin:    "Kalimantan Barat, Indonesia",
    desc:      "Rumah Radakng adalah rumah panjang khas suku Dayak di Kalimantan Barat yang dapat dihuni oleh banyak keluarga dalam satu bangunan. Rumah ini dibangun tinggi dengan tiang kayu kuat sebagai bentuk adaptasi terhadap alam. Selain sebagai tempat tinggal, rumah ini menjadi simbol kebersamaan, gotong royong, dan identitas sosial masyarakat Dayak.",
    metaLoc:   "Provinsi Kalimantan Barat",
    metaStyle: "Arsitektur Dayak",
    img:       "/assets/provinsi/kalimantanbarat/radakng.jpg",
  },
   music: {
    name:      "Sape",
    origin:    "Kalimantan Barat, Indonesia",
    desc:      "Sape adalah alat musik petik tradisional khas suku Dayak yang terbuat dari kayu pilihan. Dimainkan dalam upacara adat, penyambutan tamu, dan ritual penyembuhan, suara Sape yang merdu dan syahdu mampu membawa pendengarnya merasakan kedekatan spiritual dengan alam dan leluhur masyarakat Dayak Kalimantan.",
    metaLoc:   "Alat Musik Suku Dayak",
    metaStyle: "Instrumen Petik Tradisional",
  },
  food: {
    name:      "Pengkang",
    origin:    "Kalimantan Barat, Indonesia",
    desc:      "Pengkang adalah jajanan tradisional khas Kalimantan Barat berupa ketan yang diisi ebi (udang kering) lalu dibungkus daun pisang berbentuk segitiga dan dibakar di atas bara api. Cita rasanya yang gurih dengan aroma daun pisang bakar menjadikan Pengkang sebagai kuliner ikonik yang wajib dicicipi di Pontianak.",
    metaLoc:   "Kuliner Khas Pontianak",
    metaStyle: "Jajanan Tradisional",
  },
  cloth: {
    name:      "King Baba & King Bibinge",
    origin:    "Kalimantan Barat, Indonesia",
    desc:      "King Baba (laki-laki) dan King Bibinge (perempuan) adalah pakaian adat suku Dayak di Kalimantan Barat yang terbuat dari kulit kayu dan dihiasi manik-manik khas. Busana ini mencerminkan kedekatan masyarakat Dayak dengan alam serta nilai estetika dan spiritual dalam kehidupan mereka.",
    metaLoc:   "Busana Dayak",
    metaStyle: "Etnik Tradisional",
    img:       "/assets/provinsi/kalimantanbarat/kingbaba.jpg",
  },
},

"kalimantan-tengah": {
  name:      "Kalimantan Tengah",
  tagline:   "Jantung Borneo — hamparan hutan tropis luas yang menjadi rumah budaya Dayak dengan tradisi leluhur yang kuat dan menyatu dengan alam.",
  history:   "🏛 Warisan Budaya Dayak Ngaju",
  region:    "🌿 14 Kabupaten / Kota",
  culture:   "🎭 80+ Seni Tradisi",
  arObjects: "4 Objek 3D Tersedia",

  house: {
    name:      "Rumah Betang",
    origin:    "Kalimantan Tengah, Indonesia",
    desc:      "Rumah Betang adalah rumah adat khas suku Dayak di Kalimantan Tengah yang berbentuk panjang dan dihuni oleh banyak keluarga. Rumah ini mencerminkan nilai kebersamaan, toleransi, dan kehidupan sosial masyarakat Dayak yang hidup berdampingan dalam satu atap dengan penuh harmoni.",
    metaLoc:   "Provinsi Kalimantan Tengah",
    metaStyle: "Arsitektur Dayak",
    img:       "/assets/provinsi/kalimantantengah/betang.jpg",
  },
  weapon: {
    name:      "Mandau",
    origin:    "Warisan Budaya Dayak, Kalimantan",
    desc:      "Mandau merupakan senjata tradisional khas suku Dayak yang melambangkan keberanian, kehormatan, dan kekuatan spiritual. Selain sebagai alat pertahanan diri, Mandau juga memiliki nilai sakral dan sering digunakan dalam upacara adat.",
    metaLoc:   "Identitas Suku Dayak",
    metaStyle: "Senjata Sakral",
    img:       "/assets/provinsi/kalimantantengah/mandau.jpg",
  },
  food: {
    name:      "Juhu Singkah",
    origin:    "Kalimantan Tengah, Indonesia",
    desc:      "Juhu Singkah adalah makanan khas Kalimantan Tengah berbahan utama rotan muda yang dimasak dengan santan dan bumbu khas Dayak. Rasanya gurih dengan sentuhan sedikit pahit yang unik, mencerminkan kekayaan alam dan tradisi kuliner lokal.",
    metaLoc:   "Kuliner Dayak",
    metaStyle: "Cita Rasa Tradisional",
    img:       "/assets/provinsi/kalimantantengah/juhusingkah.jpg",
  },
  cloth: {
    name:      "Sangkarut",
    origin:    "Kalimantan Tengah, Indonesia",
    desc:      "Sangkarut adalah pakaian adat laki-laki suku Dayak Ngaju yang dihiasi motif khas dan ornamen tradisional. Busana ini biasanya digunakan dalam upacara adat dan tarian, melambangkan keberanian, kehormatan, serta identitas budaya masyarakat Dayak.",
    metaLoc:   "Busana Dayak",
    metaStyle: "Etnik Tradisional",
    img:       "/assets/provinsi/kalimantantengah/sangkarut.jpg",
  },
},

"kalimantan-selatan": {
  name:      "Kalimantan Selatan",
  tagline:   "Bumi Lambung Mangkurat — pusat budaya Banjar yang kaya tradisi sungai, perdagangan, dan warisan Islam yang kuat di tepian Kalimantan.",
  history:   "🏛 Jejak Kesultanan Banjar",
  region:    "🌿 13 Kabupaten / Kota",
  culture:   "🎭 70+ Seni Tradisi",
  arObjects: "4 Objek 3D Tersedia",

  house: {
    name:      "Rumah Bubungan Tinggi",
    origin:    "Kalimantan Selatan, Indonesia",
    desc:      "Rumah Bubungan Tinggi adalah rumah adat khas suku Banjar yang memiliki atap tinggi menjulang sebagai simbol status sosial dan kebesaran. Arsitekturnya mencerminkan filosofi kehidupan masyarakat Banjar yang menjunjung tinggi adat, kehormatan, dan nilai religius.",
    metaLoc:   "Provinsi Kalimantan Selatan",
    metaStyle: "Arsitektur Banjar",
    img:       "/assets/provinsi/kalimantanselatan/bubungan.jpg",
  },
  weapon: {
    name:      "Mandau",
    origin:    "Warisan Budaya Kalimantan",
    desc:      "Mandau juga dikenal di wilayah Kalimantan Selatan sebagai bagian dari pengaruh budaya Dayak. Senjata ini melambangkan keberanian, kekuatan, dan kehormatan, serta memiliki nilai simbolik dalam tradisi masyarakat setempat.",
    metaLoc:   "Identitas Budaya Kalimantan",
    metaStyle: "Senjata Tradisional",
    img:       "/assets/provinsi/kalimantanselatan/mandau.jpg",
  },
  food: {
    name:      "Soto Banjar",
    origin:    "Kalimantan Selatan, Indonesia",
    desc:      "Soto Banjar adalah kuliner khas yang terkenal dengan kuah bening berempah seperti kayu manis, cengkeh, dan pala. Disajikan dengan ayam, ketupat, dan perkedel, hidangan ini mencerminkan kekayaan rasa serta pengaruh budaya Melayu dan Timur Tengah.",
    metaLoc:   "Kuliner Banjar",
    metaStyle: "Rempah Tradisional",
    img:       "/assets/provinsi/kalimantanselatan/sotobanjar.jpg",
  },
  cloth: {
    name:      "Bagajah Gamuling Baular Lulut",
    origin:    "Kalimantan Selatan, Indonesia",
    desc:      "Bagajah Gamuling Baular Lulut adalah pakaian adat pengantin khas Banjar yang mewah dengan dominasi warna kuning keemasan. Busana ini melambangkan kemakmuran, kebahagiaan, dan kehormatan dalam kehidupan berumah tangga masyarakat Banjar.",
    metaLoc:   "Busana Banjar",
    metaStyle: "Adat Pengantin",
    img:       "/assets/provinsi/kalimantanselatan/bagajah.jpg",
  },
},

"kalimantan-timur": {
  name:      "Kalimantan Timur",
  tagline:   "Gerbang Nusantara — tanah kaya sumber daya dan budaya, tempat tradisi Dayak dan Kutai berpadu dengan perkembangan modern di jantung Pulau Kalimantan.",
  history:   "🏛 Jejak Kerajaan Kutai Tertua",
  region:    "🌿 10 Kabupaten / Kota",
  culture:   "🎭 80+ Seni Tradisi",
  arObjects: "4 Objek 3D Tersedia",

  house: {
    name:      "Rumah Lamin",
    origin:    "Kalimantan Timur, Indonesia",
    desc:      "Rumah Lamin adalah rumah adat suku Dayak di Kalimantan Timur yang berbentuk panjang dan dihuni oleh banyak keluarga. Rumah ini dihiasi ukiran khas berwarna cerah yang sarat makna filosofis. Selain sebagai tempat tinggal, Rumah Lamin juga berfungsi sebagai pusat kegiatan adat dan simbol persatuan masyarakat Dayak.",
    metaLoc:   "Provinsi Kalimantan Timur",
    metaStyle: "Arsitektur Dayak",
    img:       "/assets/provinsi/kalimantantimur/lamin.jpg",
  },
  music: {
    name:      "Sape",
    origin:    "Kalimantan Timur, Indonesia",
    desc:      "Sape adalah alat musik petik tradisional khas suku Dayak Kalimantan Timur yang diukir dari satu batang kayu utuh. Dimainkan dalam upacara adat, ritual penyembuhan, dan penyambutan tamu kehormatan, melodi Sape yang mengalun lembut mencerminkan kedalaman spiritual dan kekayaan budaya masyarakat Dayak di tanah Borneo.",
    metaLoc:   "Alat Musik Suku Dayak",
    metaStyle: "Instrumen Petik Tradisional",
  },
  food: {
    name:      "Ayam Cincane",
    origin:    "Kalimantan Timur, Indonesia",
    desc:      "Ayam Cincane adalah kuliner khas Kalimantan Timur yang terkenal dengan warna merah menggoda dan cita rasa gurih manis dari bumbu rempah. Hidangan ini biasanya disajikan dalam acara adat atau penyambutan tamu penting sebagai simbol penghormatan.",
    metaLoc:   "Kuliner Tradisional",
    metaStyle: "Hidangan Kehormatan",
    img:       "/assets/provinsi/kalimantantimur/ayamcincane.jpg",
  },
  cloth: {
    name:      "Ta’a & Sapei Sapaq",
    origin:    "Kalimantan Timur, Indonesia",
    desc:      "Ta’a (perempuan) dan Sapei Sapaq (laki-laki) merupakan pakaian adat suku Dayak di Kalimantan Timur yang dihiasi manik-manik berwarna cerah dengan motif khas. Busana ini mencerminkan identitas budaya, status sosial, serta keindahan estetika masyarakat Dayak.",
    metaLoc:   "Busana Dayak",
    metaStyle: "Etnik Tradisional",
    img:       "/assets/provinsi/kalimantantimur/taa.jpg",
  },
},

"kalimantan-utara": {
  name:      "Kalimantan Utara",
  tagline:   "Gerbang Perbatasan Nusantara — wilayah muda yang kaya akan budaya Dayak dan pesisir, menjadi penghubung Indonesia dengan dunia di utara Borneo.",
  history:   "🏛 Warisan Kesultanan Bulungan",
  region:    "🌿 5 Kabupaten / Kota",
  culture:   "🎭 60+ Seni Tradisi",
  arObjects: "4 Objek 3D Tersedia",

  house: {
    name:      "Rumah Baloy",
    origin:    "Kalimantan Utara, Indonesia",
    desc:      "Rumah Baloy adalah rumah adat suku Tidung di Kalimantan Utara yang berfungsi sebagai pusat kegiatan adat dan pemerintahan tradisional. Arsitekturnya mencerminkan struktur sosial masyarakat serta nilai musyawarah dalam pengambilan keputusan.",
    metaLoc:   "Provinsi Kalimantan Utara",
    metaStyle: "Arsitektur Tidung",
    img:       "/assets/provinsi/kalimantanutara/baloy.jpg",
  },
  music: {
  name:      "Babun",
  origin:    "Kalimantan Utara, Indonesia",
  desc:      "Babun adalah alat musik pukul tradisional khas Kalimantan Utara berupa gendang dua sisi yang terbuat dari kayu dan kulit hewan. Dimainkan dalam upacara adat, penyambutan tamu, dan perayaan budaya masyarakat Tidung dan Dayak, irama Babun yang bertalu-talu mencerminkan semangat kebersamaan dan kekuatan budaya di wilayah perbatasan utara Borneo.",
  metaLoc:   "Alat Musik Tradisional",
  metaStyle: "Instrumen Pukul Khas",
},
  food: {
    name:      "Kepiting Soka",
    origin:    "Kalimantan Utara, Indonesia",
    desc:      "Kepiting Soka adalah kuliner khas Kalimantan Utara yang terkenal karena dapat dimakan bersama cangkangnya yang lunak. Hidangan ini biasanya dimasak dengan berbagai bumbu seperti saus tiram atau lada hitam, mencerminkan kekayaan hasil laut daerah pesisir.",
    metaLoc:   "Kuliner Pesisir",
    metaStyle: "Hidangan Laut",
    img:       "/assets/provinsi/kalimantanutara/kepitingsoka.jpg",
  },
  cloth: {
    name:      "Ta’a & Sapei Sapaq",
    origin:    "Kalimantan Utara, Indonesia",
    desc:      "Ta’a (perempuan) dan Sapei Sapaq (laki-laki) juga digunakan oleh sebagian masyarakat Dayak di Kalimantan Utara. Busana ini dihiasi manik-manik khas dengan motif tradisional yang melambangkan identitas budaya, keindahan, dan status sosial.",
    metaLoc:   "Busana Dayak",
    metaStyle: "Etnik Tradisional",
    img:       "/assets/provinsi/kalimantanutara/taa.jpg",
  },
},

"sulawesi-utara": {
  name:      "Sulawesi Utara",
  tagline:   "Bumi Nyiur Melambai — tanah pesisir yang indah dengan kekayaan budaya Minahasa dan tradisi maritim yang kuat di ujung utara Sulawesi.",
  history:   "🏛 Warisan Budaya Minahasa",
  region:    "🌿 15 Kabupaten / Kota",
  culture:   "🎭 80+ Seni Tradisi",
  arObjects: "4 Objek 3D Tersedia",

  house: {
    name:      "Rumah Walewangko",
    origin:    "Sulawesi Utara, Indonesia",
    desc:      "Rumah Walewangko adalah rumah adat masyarakat Minahasa yang dibangun dengan struktur panggung untuk menyesuaikan dengan kondisi alam. Rumah ini mencerminkan nilai kebersamaan, keterbukaan, dan keharmonisan dalam kehidupan sosial masyarakat Minahasa.",
    metaLoc:   "Provinsi Sulawesi Utara",
    metaStyle: "Arsitektur Minahasa",
    img:       "/assets/provinsi/sulawesiutara/walewangko.jpg",
  },
  weapon: {
    name:      "Sabel",
    origin:    "Sulawesi Utara, Indonesia",
    desc:      "Sabel adalah senjata tradisional yang digunakan oleh masyarakat Minahasa pada masa lalu. Senjata ini melambangkan keberanian dan semangat juang dalam mempertahankan wilayah serta kehormatan masyarakat.",
    metaLoc:   "Identitas Budaya Minahasa",
    metaStyle: "Senjata Tradisional",
    img:       "/assets/provinsi/sulawesiutara/sabel.jpg",
  },
  food: {
    name:      "Tinutuan",
    origin:    "Manado, Sulawesi Utara",
    desc:      "Tinutuan atau bubur Manado adalah makanan khas Sulawesi Utara yang kaya akan sayuran seperti bayam, jagung, dan labu. Hidangan ini terkenal sehat dan mencerminkan pola makan masyarakat yang memanfaatkan kekayaan alam lokal.",
    metaLoc:   "Kuliner Minahasa",
    metaStyle: "Makanan Sehat Tradisional",
    img:       "/assets/provinsi/sulawesiutara/tinutuan.jpg",
  },
  cloth: {
    name:      "Pakaian Adat Minahasa",
    origin:    "Sulawesi Utara, Indonesia",
    desc:      "Pakaian adat Minahasa biasanya dikenakan dalam upacara adat dan perayaan budaya. Busana ini menampilkan warna cerah dengan desain sederhana namun elegan, mencerminkan karakter masyarakat Minahasa yang terbuka dan dinamis.",
    metaLoc:   "Busana Minahasa",
    metaStyle: "Etnik Tradisional",
    img:       "/assets/provinsi/sulawesiutara/minahasa.jpg",
  },
},

"sulawesi-tenggara": {
    name:      "Sulawesi Tenggara",
    tagline:   "Negeri Anoa — tanah budaya maritim, tradisi kerajaan Buton dan Tolaki, serta keajaiban bawah laut Wakatobi di tenggara Pulau Sulawesi.",
    history:   "🏛 Warisan Kerajaan & Kesultanan",
    region:    "🌿 17 Kabupaten / Kota",
    culture:   "🎭 Ragam Tradisi Daerah",
    arObjects: "4 Objek 3D Tersedia",

     house: {
    name:      "Banua Tada",
    origin:    "Sulawesi Tenggara, Indonesia",
    desc:      "Banua Tada adalah rumah adat khas Kesultanan Buton di Sulawesi Tenggara yang berarti 'rumah segi empat'. Dibangun di atas tiang-tiang kayu kokoh dengan struktur panggung yang megah, setiap elemen bangunannya mencerminkan nilai-nilai Islam, stratifikasi sosial, dan kearifan lokal masyarakat Buton yang telah diwariskan turun-temurun sejak zaman kesultanan.",
    metaLoc:   "Provinsi Sulawesi Tenggara",
    metaStyle: "Arsitektur Adat Kesultanan Buton",
  },
  music: {
    name:      "Ganda",
    origin:    "Sulawesi Tenggara, Indonesia",
    desc:      "Ganda adalah alat musik pukul tradisional khas Sulawesi Tenggara berupa gendang dua sisi yang terbuat dari kayu dan kulit hewan. Dimainkan dalam upacara adat, perayaan budaya, dan pertunjukan seni masyarakat Tolaki dan Buton, irama Ganda yang dinamis dan bersemangat mencerminkan kegembiraan serta kekayaan tradisi budaya di tanah Sulawesi Tenggara.",
    metaLoc:   "Alat Musik Tradisional",
    metaStyle: "Instrumen Pukul Khas",
  },
    food: {
      name:      "Sinonggi",
      origin:    "Sulawesi Tenggara, Indonesia",
      desc:      "Sinonggi adalah kuliner pokok suku Tolaki yang terbuat dari sari pati sagu murni. Disajikan dengan tekstur kenyal dan disiram kuah ikan palumara yang segar atau sayur mosonggi, hidangan ini mencerminkan kearifan lokal dalam mengolah sumber daya alam non-beras menjadi sajian berkelas.",
      metaLoc:   "Kuliner Pokok Sagu",
      metaStyle: "Cita Rasa Autentik",
      img:       "assets/provinsi/sultra/sinonggi.jpg",
    },
    cloth: {
      name:      "Babu Nggawi",
      origin:    "Sulawesi Tenggara, Indonesia",
      desc:      "Babu Nggawi adalah pakaian adat perempuan suku Tolaki yang terdiri dari atasan (Babu) dan bawahan kain sarung (Rantai). Busana ini biasanya didominasi warna cerah dengan hiasan logam mulia, melambangkan keanggunan, status sosial, dan ketaatan pada norma adat masyarakat Sultra.",
      metaLoc:   "Busana Adat Tolaki",
      metaStyle: "Pakaian Tradisional Wanita",
      img:       "assets/provinsi/sultra/babu-nggawi.jpg",
    },
  },

  "sulawesi-tengah": {
    name:      "Sulawesi Tengah",
    tagline:   "Jantung Pulau Sulawesi — negeri pegunungan, teluk indah, dan keberagaman budaya yang hidup di tanah Kaili dan sekitarnya.",
    history:   "🏛 Warisan Budaya Sulawesi",
    region:    "🌿 13 Kabupaten / Kota",
    culture:   "🎭 Beragam Suku dan Tradisi",
    arObjects: "4 Objek 3D Tersedia",

    house: {
      name:      "Souraja (Banua Oge)",
      origin:    "Palu, Sulawesi Tengah",
      desc:      "Souraja atau Banua Oge adalah rumah kediaman keluarga bangsawan suku Kaili. Struktur panggungnya yang megah dibangun menggunakan kayu jati dan kayu besi tanpa paku, mencerminkan strata sosial yang tinggi serta adaptasi arsitektur terhadap iklim tropis di pesisir Teluk Palu.",
      metaLoc:   "Provinsi Sulawesi Tengah",
      metaStyle: "Arsitektur Adat Kaili",
      img:       "assets/provinsi/sulteng/souraja.jpg",
    },
     music: {
    name:      "Gimba",
    origin:    "Sulawesi Tengah, Indonesia",
    desc:      "Gimba adalah alat musik pukul tradisional khas Sulawesi Tengah berupa gendang panjang yang terbuat dari kayu dan kulit hewan. Dimainkan dalam upacara adat, ritual penyembuhan, dan perayaan budaya masyarakat Kaili, irama Gimba yang menghentak dan bersemangat mencerminkan kekuatan spiritual serta kebersamaan masyarakat di jantung Pulau Sulawesi.",
    metaLoc:   "Alat Musik Tradisional Kaili",
    metaStyle: "Instrumen Pukul Khas",
  },
    food: {
      name:      "Kaledo",
      origin:    "Palu, Sulawesi Tengah",
      desc:      "Kaledo (Kaki Lembu Donggala) adalah sup tulang kaki sapi yang dimasak hingga sumsumnya bisa dinikmati. Kuah beningnya memiliki perpaduan rasa asam pedas yang segar dari penggunaan asam jawa muda dan cabai rawit, biasanya disajikan dengan ubi atau singkong rebus.",
      metaLoc:   "Kuliner Khas Palu",
      metaStyle: "Cita Rasa Gurih & Asam",
      img:       "assets/provinsi/sulteng/kaledo.jpg",
    },
    cloth: {
      name:      "Nggembe",
      origin:    "Sulawesi Tengah, Indonesia",
      desc:      "Nggembe adalah busana adat perempuan suku Kaili yang berbentuk baju terusan longgar dengan kerah bulat dan lengan pendek. Sering dipadukan dengan sarung Donggala, pakaian ini mencerminkan kesederhanaan namun tetap memancarkan keanggunan perempuan Sulawesi Tengah.",
      metaLoc:   "Busana Adat Sulawesi Tengah",
      metaStyle: "Pakaian Tradisional Wanita",
      img:       "assets/provinsi/sulteng/nggembe.jpg",
    },
  },

  "sulawesi-selatan": {
    name:      "Sulawesi Selatan",
    tagline:   "Tanah Bugis, Makassar, dan Toraja — negeri maritim dengan budaya megah, tradisi leluhur yang sakral, dan semangat pelaut tangguh Nusantara.",
    history:   "🏛 Warisan Kerajaan Bugis-Makassar",
    region:    "🌿 24 Kabupaten / Kota",
    culture:   "🎭 Ragam Tradisi dan Adat",
    arObjects: "4 Objek 3D Tersedia",

    house: {
  name:      "Balla Lompoa",
  origin:    "Sulawesi Selatan, Indonesia",
  desc:      "Balla Lompoa yang berarti 'Rumah Besar' adalah istana adat kerajaan Gowa yang kini berfungsi sebagai museum bersejarah. Dibangun dengan arsitektur panggung khas Bugis-Makassar menggunakan kayu pilihan tanpa paku, bangunan megah ini mencerminkan kejayaan Kerajaan Gowa dan keagungan peradaban Sulawesi Selatan yang telah berlangsung selama berabad-abad.",
  metaLoc:   "Provinsi Sulawesi Selatan",
  metaStyle: "Arsitektur Istana Gowa",
},
     music: {
    name:      "Keso-Keso",
    origin:    "Sulawesi Selatan, Indonesia",
    desc:      "Keso-Keso adalah alat musik gesek tradisional khas Sulawesi Selatan yang terbuat dari kayu dan senar dari serat alami. Dimainkan sebagai pengiring lagu-lagu daerah dan upacara adat Bugis-Makassar, suara Keso-Keso yang merdu dan mengalun lembut mencerminkan kehalusan rasa dan kedalaman budaya masyarakat Sulawesi Selatan yang kaya akan tradisi seni.",
    metaLoc:   "Alat Musik Tradisional Bugis",
    metaStyle: "Instrumen Gesek Khas",
  },
    food: {
      name:      "Coto Makassar",
      origin:    "Makassar, Sulawesi Selatan",
      desc:      "Coto Makassar adalah sup daging sapi yang dimasak dengan air cucian beras dan 40 jenis rempah (Rempah Patangpulo). Keunikan rasa gurihnya berasal dari perpaduan kacang tanah sangrai dan bumbu tradisional, biasanya dinikmati bersama ketupat atau buras.",
      metaLoc:   "Kuliner Khas Makassar",
      metaStyle: "Cita Rasa Rempah Legendaris",
      img:       "assets/provinsi/sulsel/coto-makassar.jpg",
    },
    cloth: {
      name:      "Baju Bodo",
      origin:    "Sulawesi Selatan, Indonesia",
      desc:      "Baju Bodo adalah pakaian adat perempuan Bugis-Makassar yang dianggap sebagai salah satu busana tertua di dunia. Berbentuk segi empat dengan lengan pendek, warna pada Baju Bodo secara tradisional menunjukkan status sosial dan tingkat usia pemakainya.",
      metaLoc:   "Busana Adat Bugis",
      metaStyle: "Pakaian Tradisional Tertua",
      img:       "assets/provinsi/sulsel/baju-bodo.jpg",
    },
  },

  "sulawesi-barat": {
    name:      "Sulawesi Barat",
    tagline:   "Tanah Mandar — negeri para pelaut ulung, rumah bagi tradisi Sayyang Pattuqduq, dan keindahan bahari yang memesona di barat Pulau Sulawesi.",
    history:   "🏛 Warisan Budaya Mandar",
    region:    "🌿 6 Kabupaten",
    culture:   "🎭 Tradisi Bahari dan Adat",
    arObjects: "4 Objek 3D Tersedia",

    house: {
      name:      "Rumah Boyang",
      origin:    "Sulawesi Barat, Indonesia",
      desc:      "Rumah Boyang adalah hunian panggung khas suku Mandar yang ditopang oleh tiang-tiang kayu besar tanpa ditanam di tanah (untuk meredam gempa). Bagian atapnya yang bertingkat mencerminkan status sosial penghuninya, sementara struktur terbukanya melambangkan keterbukaan dan keramah-tamahan masyarakat Mandar.",
      metaLoc:   "Provinsi Sulawesi Barat",
      metaStyle: "Arsitektur Vernakular Mandar",
      img:       "assets/provinsi/sulbar/rumah-boyang.jpg",
    },
     music: {
    name:      "Kecapi Mandar",
    origin:    "Sulawesi Barat, Indonesia",
    desc:      "Kecapi Mandar adalah alat musik petik tradisional khas suku Mandar di Sulawesi Barat yang terbuat dari kayu pilihan dengan senar dari nilon atau kawat. Dimainkan sebagai pengiring lagu-lagu daerah dan upacara adat, melodi Kecapi Mandar yang lembut dan syahdu mencerminkan kehalusan budi dan kekayaan seni budaya masyarakat pesisir Mandar.",
    metaLoc:   "Alat Musik Tradisional Mandar",
    metaStyle: "Instrumen Petik Khas",
  },
    food: {
      name:      "Jepa",
      origin:    "Sulawesi Barat, Indonesia",
      desc:      "Jepa adalah makanan pokok tradisional suku Mandar berbentuk lingkaran tipis berbahan dasar sagu atau parutan singkong yang dimasak di atas piringan tanah liat. Memiliki aroma khas hasil pembakaran, Jepa sangat nikmat disantap bersama ikan terbang (Tuing-tuing) asap atau Bau Piapi.",
      metaLoc:   "Kuliner Tradisional Mandar",
      metaStyle: "Cita Rasa Pesisir",
      img:       "assets/provinsi/sulbar/jepa.jpg",
    },
    cloth: {
      name:      "Pattuqduq Towaine",
      origin:    "Sulawesi Barat, Indonesia",
      desc:      "Pattuqduq Towaine adalah busana adat perempuan Mandar yang dikenakan saat menari atau prosesi Sayyang Pattuqduq. Busana ini terdiri dari baju pokko dengan beragam perhiasan logam (Patu), yang memancarkan kemegahan serta martabat perempuan dalam struktur adat Mandar.",
      metaLoc:   "Busana Adat Mandar",
      metaStyle: "Pakaian Tradisional Wanita",
      img:       "assets/provinsi/sulbar/pattuqduq-towaine.jpg",
    },
  },

  "gorontalo": {
    name:      "Gorontalo",
    tagline:   "Bumi Hulontalo — serambi Madinah yang memadukan kemuliaan adat dan ketaatan agama dalam harmoni budaya di pesisir utara Sulawesi.",
    history:   "🏛 Warisan Lima Pohala'a",
    region:    "🌿 6 Kabupaten / Kota",
    culture:   "🎭 Puluhan Tradisi Daerah",
    arObjects: "4 Objek 3D Tersedia",

    house: {
      name:      "Rumah Dulohupa",
      origin:    "Gorontalo, Indonesia",
      desc:      "Dulohupa adalah rumah adat berbentuk panggung yang berfungsi sebagai balai musyawarah atau 'Yiladia Dulohupa'. Arsitekturnya yang megah dengan pilar-pilar kayu besar melambangkan persatuan, keadilan, dan kedaulatan rakyat dalam memutuskan perkara adat maupun pemerintahan bagi masyarakat Gorontalo.",
      metaLoc:   "Provinsi Gorontalo",
      metaStyle: "Arsitektur Musyawarah Adat",
      img:       "assets/provinsi/gorontalo/rumah-dulohupa.jpg",
    },
    music: {
    name:      "Polopalo",
    origin:    "Gorontalo, Indonesia",
    desc:      "Polopalo adalah alat musik pukul tradisional khas Gorontalo yang terbuat dari bambu pilihan. Dimainkan dengan cara dipukul menggunakan telapak tangan, instrumen ini menghasilkan bunyi yang khas dan merdu. Polopalo sering dimainkan dalam upacara adat, perayaan budaya, dan pertunjukan seni sebagai simbol kegembiraan dan kekayaan tradisi masyarakat Gorontalo.",
    metaLoc:   "Alat Musik Tradisional",
    metaStyle: "Instrumen Bambu Khas",
  },
    food: {
      name:      "Binte Biluhuta",
      origin:    "Gorontalo, Indonesia",
      desc:      "Binte Biluhuta (Milu Siram) adalah sup jagung khas Gorontalo yang diracik dengan ikan cakalang, udang, kelapa parut, dan perasan jeruk nipis. Hidangan ini mencerminkan kearifan lokal dalam mengolah hasil bumi dan laut, menciptakan cita rasa gurih, pedas, dan asam yang menyegarkan.",
      metaLoc:   "Kuliner Ikonik Jagung",
      metaStyle: "Cita Rasa Pesisir",
      img:       "assets/provinsi/gorontalo/binte-biluhuta.jpg",
    },
    cloth: {
      name:      "Biliu",
      origin:    "Gorontalo, Indonesia",
      desc:      "Biliu adalah busana adat pengantin perempuan yang terdiri dari sarung, blus, dan hiasan kepala (Paya) yang sarat makna. Warna-warna pakaian ini (seperti kuning, hijau, atau ungu) melambangkan tingkat kesucian, keagungan, dan ketaatan seorang perempuan dalam menjaga kehormatan keluarga.",
      metaLoc:   "Busana Adat Pengantin",
      metaStyle: "Pakaian Tradisional Wanita",
      img:       "assets/provinsi/gorontalo/biliu.jpg",
    },
  },

  "maluku": {
    name:      "Maluku",
    tagline:   "Kepulauan Rempah Nusantara — negeri laut, budaya Pela Gandong, dan pusat perdagangan cengkih-pala dunia di timur Indonesia.",
    history:   "🏛 Warisan Kepulauan Rempah",
    region:    "🌿 11 Kabupaten / Kota",
    culture:   "🎭 Tradisi Bahari dan Adat",
    arObjects: "4 Objek 3D Tersedia",

    house: {
      name:      "Rumah Baileo",
      origin:    "Maluku, Indonesia",
      desc:      "Baileo adalah rumah adat Maluku yang berfungsi sebagai tempat musyawarah adat dan penyimpanan benda-benda suci. Bangunannya dibuat tanpa dinding dan memiliki lantai yang tinggi, melambangkan keterbukaan masyarakat serta posisi roh leluhur yang dihormati.",
      metaLoc:   "Provinsi Maluku",
      metaStyle: "Arsitektur Balai Adat",
      img:       "assets/provinsi/maluku/rumah-baileo.jpg",
    },
  music: {
    name:      "Tifa",
    origin:    "Maluku, Indonesia",
    desc:      "Tifa adalah alat musik pukul tradisional khas Maluku berupa gendang panjang berbentuk silinder yang terbuat dari kayu dan kulit hewan. Dimainkan dalam upacara adat, tarian perang, dan perayaan budaya, irama Tifa yang menghentak dan bersemangat mencerminkan semangat juang, kebersamaan, dan kekayaan budaya bahari masyarakat Kepulauan Maluku.",
    metaLoc:   "Alat Musik Tradisional Maluku",
    metaStyle: "Instrumen Pukul Khas",
  },
    food: {
      name:      "Papeda",
      origin:    "Maluku, Indonesia",
      desc:      "Papeda adalah bubur sagu khas Indonesia Timur dengan tekstur kenyal dan bening. Disajikan secara tradisional menggunakan alat penggulung kayu (Gata-gata), hidangan ini biasanya dinikmati bersama ikan kuah kuning yang kaya akan rempah kunyit dan asam.",
      metaLoc:   "Kuliner Pokok Sagu",
      metaStyle: "Cita Rasa Bahari",
      img:       "assets/provinsi/maluku/papeda.jpg",
    },
    cloth: {
      name:      "Baju Cele",
      origin:    "Maluku, Indonesia",
      desc:      "Baju Cele memiliki ciri khas motif kotak-kotak kecil berwarna merah atau hitam yang dipadukan dengan sarung tenun. Pakaian ini sering dikenakan bersama kain kebaya atau kain kanji, mencerminkan kesederhanaan namun tetap memancarkan kewibawaan budaya Maluku.",
      metaLoc:   "Busana Adat Maluku",
      metaStyle: "Pakaian Tradisional",
      img:       "assets/provinsi/maluku/baju-cele.jpg",
    },
  },

  "maluku-utara": {
    name:       "Maluku Utara",
    tagline:    "Negeri Rempah Nusantara — tanah Moloku Kie Raha yang kaya sejarah kesultanan, budaya maritim, dan warisan rempah dunia dari timur Indonesia.",
    history:    "🏛 Sejarah Kesultanan Berabad-abad",
    region:     "🌿 10 Kabupaten / Kota",
    culture:    "🎭 100+ Tradisi Budaya",
    arObjects:  "4 Objek 3D Tersedia",

    house: {
      name:       "Rumah Sasadu",
      origin:     "Halmahera Barat, Maluku Utara",
      desc:       "Sasadu adalah rumah adat suku Sahu yang memiliki struktur panggung terbuka tanpa dinding dan pintu. Atapnya yang rendah melambangkan kepatuhan pada adat, sementara ketiadaan dinding mencerminkan keterbukaan, transparansi, dan semangat demokrasi masyarakat dalam musyawarah adat.",
      metaLoc:    "Provinsi Maluku Utara",
      metaStyle:  "Arsitektur Tradisional Sahu",
      img:        "assets/provinsi/maluku-utara/rumah-sasadu.jpg",
    },
    dance: {
    name:      "Tarian Cakalele",
    origin:    "Maluku Utara, Indonesia",
    desc:      "Cakalele adalah tarian perang tradisional khas Maluku Utara yang dibawakan dengan penuh semangat dan keberanian. Ditarikan oleh para penari yang mengenakan pakaian adat lengkap dengan parang dan salawaku, tarian ini mencerminkan jiwa ksatria, keberanian, dan semangat juang masyarakat Maluku Utara dalam mempertahankan kehormatan dan kedaulatan tanah leluhur.",
    metaLoc:   "Tarian Tradisional Maluku Utara",
    metaStyle: "Tari Perang Sakral",
  },
   music: {
    name:      "Tifa",
    origin:    "Maluku Utara, Indonesia",
    desc:      "Tifa Maluku Utara adalah alat musik pukul tradisional berupa gendang silinder yang terbuat dari kayu pilihan dan kulit hewan. Dimainkan sebagai pengiring tarian adat dan upacara kesultanan Ternate dan Tidore, irama Tifa yang bertalu-talu mencerminkan semangat kebersamaan dan kejayaan peradaban rempah di Kepulauan Maluku Utara.",
    metaLoc:   "Alat Musik Tradisional",
    metaStyle: "Instrumen Pukul Khas",
  },
    cloth: {
      name:       "Baju Cele",
      origin:     "Maluku Utara, Indonesia",
      desc:       "Baju Cele Maluku Utara memiliki ciri khas kain merah bermotif kotak-kotak perak atau emas. Di wilayah kesultanan, pakaian ini sering dipadukan dengan kebaya putih dan aksesoris khas yang menunjukkan pengaruh percampuran budaya lokal dengan sentuhan kolonial sejarah perdagangan rempah.",
      metaLoc:    "Warisan Budaya Kepulauan",
      metaStyle:  "Busana Tradisional",
      img:        "assets/provinsi/maluku-utara/baju-cele.jpg",
    },
  },

   "papua": {
    name:       "Papua",
    tagline:    "Bumi Cenderawasih — tanah pegunungan megah, hutan tropis luas, dan warisan budaya suku-suku asli yang kaya akan nilai leluhur Nusantara timur.",
    history:    "🏛 Sejarah Ribuan Tahun",
    region:     "🌿 29 Kabupaten / Kota",
    culture:    "🎭 250+ Tradisi Suku",
    arObjects:  "4 Objek 3D Tersedia",

    house: {
      name:       "Honai",
      origin:     "Papua, Indonesia",
      desc:       "Honai adalah rumah adat tradisional masyarakat pegunungan Papua yang berbentuk bundar dengan atap jerami tebal. Rumah ini dirancang untuk menahan udara dingin pegunungan serta menjadi simbol kebersamaan dan kehidupan komunal masyarakat Papua. Honai juga memiliki nilai filosofis tentang persatuan keluarga dan penghormatan terhadap adat leluhur.",
      metaLoc:    "Provinsi Papua",
      metaStyle:  "Arsitektur Tradisional Papua",
      img:        "/assets/provinsi/papua/honai.jpg",
    },

    weapon: {
      name:       "Busur dan Panah",
      origin:     "Warisan Budaya Papua, Indonesia",
      desc:       "Busur dan panah merupakan senjata tradisional khas Papua yang digunakan sejak zaman dahulu untuk berburu dan melindungi diri. Senjata ini mencerminkan keterampilan, ketangkasan, dan hubungan erat masyarakat Papua dengan alam sekitarnya.",
      metaLoc:    "Identitas Budaya Papua",
      metaStyle:  "Senjata Tradisional",
      img:        "/assets/provinsi/papua/panah.jpg",
    },

    food: {
      name:       "Papeda",
      origin:     "Papua, Indonesia",
      desc:       "Papeda adalah makanan khas Papua yang terbuat dari sagu dan memiliki tekstur kenyal seperti lem. Biasanya disajikan bersama ikan kuah kuning berbumbu rempah khas. Papeda menjadi simbol ketahanan pangan masyarakat Papua yang memanfaatkan kekayaan alam lokal secara turun-temurun.",
      metaLoc:    "Kuliner Khas Papua",
      metaStyle:  "Makanan Tradisional",
      img:        "/assets/provinsi/papua/papeda.jpg",
    },

    cloth: {
      name:       "Koteka",
      origin:     "Papua, Indonesia",
      desc:       "Koteka adalah pakaian adat tradisional masyarakat Papua yang terbuat dari kulit labu air kering. Selain berfungsi sebagai pakaian tradisional, koteka juga menjadi simbol identitas budaya dan kehidupan masyarakat adat Papua yang masih menjaga tradisi leluhur hingga kini.",
      metaLoc:    "Warisan Budaya Papua",
      metaStyle:  "Pakaian Tradisional",
      img:        "/assets/provinsi/papua/koteka.jpg",
    },

  },

  "papua-pegunungan": {
    name:      "Papua Pegunungan",
    tagline:   "Jantung budaya dan pegunungan Papua — tanah suku-suku adat yang kaya tradisi, alam megah, dan warisan leluhur yang hidup di tengah pegunungan tinggi Indonesia timur.",
    history:   "🏛 Warisan Budaya Leluhur",
    region:    "🌿 8 Kabupaten",
    culture:   "🎭 250+ Tradisi Adat",
    arObjects: "4 Objek 3D Tersedia",

    house: {
      name:      "Honai",
      origin:    "Papua Pegunungan, Indonesia",
      desc:      "Honai adalah rumah adat masyarakat Papua Pegunungan yang berbentuk bundar dengan atap jerami tebal dan dinding kayu sederhana. Rumah ini dirancang untuk menahan suhu dingin pegunungan sekaligus menjadi pusat kehidupan keluarga dan musyawarah adat masyarakat Papua.",
      metaLoc:   "Provinsi Papua Pegunungan",
      metaStyle: "Arsitektur Tradisional Papua",
      img:       "/assets/provinsi/papuapegunungan/honai.jpg",
    },

    weapon: {
      name:      "Busur dan Panah",
      origin:    "Warisan Budaya Papua Pegunungan, Indonesia",
      desc:      "Busur dan panah merupakan senjata tradisional masyarakat Papua Pegunungan yang digunakan sejak dahulu untuk berburu dan melindungi wilayah adat. Senjata ini melambangkan keberanian, ketangkasan, serta kedekatan masyarakat Papua dengan alam pegunungan.",
      metaLoc:   "Identitas Budaya Papua",
      metaStyle: "Senjata Tradisional",
      img:       "/assets/provinsi/papuapegunungan/busur.jpg",
    },

    food: {
      name:      "Papeda",
      origin:    "Papua Pegunungan, Indonesia",
      desc:      "Papeda adalah makanan khas Papua berbahan dasar sagu yang memiliki tekstur kenyal dan biasanya disajikan bersama kuah ikan berbumbu rempah. Hidangan ini menjadi simbol kearifan lokal masyarakat Papua dalam memanfaatkan hasil alam sebagai sumber pangan utama.",
      metaLoc:   "Kuliner Tradisional Papua",
      metaStyle: "Pangan Berbasis Sagu",
      img:       "/assets/provinsi/papuapegunungan/papeda.jpg",
    },

    cloth: {
      name:      "Koteka dan Rok Rumbai",
      origin:    "Papua Pegunungan, Indonesia",
      desc:      "Koteka dan rok rumbai merupakan pakaian adat tradisional masyarakat Papua Pegunungan yang dibuat dari bahan alami seperti labu hutan dan serat tumbuhan. Pakaian adat ini mencerminkan identitas budaya, kesederhanaan hidup, dan hubungan erat masyarakat Papua dengan alam.",
      metaLoc:   "Warisan Budaya Papua",
      metaStyle: "Busana Tradisional Adat",
      img:       "/assets/provinsi/papuapegunungan/koteka.jpg",
    },
  },

  "papua-barat": {
    name:       "Papua Barat",
    tagline:    "Surga Timur Nusantara — tanah eksotis dengan kekayaan alam, budaya suku-suku asli, dan panorama laut yang memukau dunia.",
    history:    "🏛 Sejarah & Budaya Papua",
    region:     "🌿 13 Kabupaten / Kota",
    culture:    "🎭 Puluhan Suku Tradisional",
    arObjects:  "4 Objek 3D Tersedia",

    house: {
      name:       "Rumah Kaki Seribu",
      origin:     "Papua Barat, Indonesia",
      desc:       "Rumah Kaki Seribu merupakan rumah adat masyarakat Arfak di Papua Barat yang dibangun dengan banyak tiang penyangga dari kayu. Bentuknya yang tinggi berfungsi melindungi penghuni dari udara dingin pegunungan dan binatang liar. Rumah ini mencerminkan nilai kebersamaan, keharmonisan dengan alam, serta identitas budaya masyarakat Papua Barat.",
      metaLoc:    "Provinsi Papua Barat",
      metaStyle:  "Arsitektur Tradisional Pegunungan",
      img:        "/assets/provinsi/papuaBarat/rumahKakiSeribu.jpg",
    },

    weapon: {
      name:       "Busur dan Panah Papua",
      origin:     "Warisan Budaya Papua Barat, Indonesia",
      desc:       "Busur dan panah merupakan senjata tradisional masyarakat Papua Barat yang digunakan untuk berburu dan mempertahankan diri sejak zaman dahulu. Senjata ini dibuat dari kayu pilihan dan tali rotan yang kuat, melambangkan ketangkasan, keberanian, dan kemampuan bertahan hidup masyarakat adat Papua.",
      metaLoc:    "Identitas Budaya Papua",
      metaStyle:  "Senjata Tradisional",
      img:        "/assets/provinsi/papuaBarat/busurPanah.jpg",
    },

    food: {
      name:       "Papeda",
      origin:     "Papua Barat, Indonesia",
      desc:       "Papeda adalah makanan khas Papua Barat yang terbuat dari sagu dan memiliki tekstur kenyal seperti gel. Papeda biasanya disajikan bersama ikan kuah kuning yang kaya rempah. Makanan ini menjadi simbol kehidupan masyarakat Papua yang sangat bergantung pada hasil alam dan hutan sagu.",
      metaLoc:    "Kuliner Khas Papua",
      metaStyle:  "Olahan Sagu Tradisional",
      img:        "/assets/provinsi/papuaBarat/papeda.jpg",
    },

    cloth: {
      name:       "Pakaian Adat Ewer",
      origin:     "Papua Barat, Indonesia",
      desc:       "Pakaian adat Ewer merupakan busana tradisional masyarakat Papua Barat yang terbuat dari serat tumbuhan alami seperti kulit kayu dan rumput hutan. Busana ini mencerminkan kedekatan masyarakat Papua dengan alam serta nilai kesederhanaan dan kekayaan budaya lokal yang diwariskan turun-temurun.",
      metaLoc:    "Warisan Budaya Papua",
      metaStyle:  "Busana Tradisional Alam",
      img:        "/assets/provinsi/papuaBarat/ewer.jpg",
    },
  },

  "papua-barat-daya": {
    name:      "Papua Barat Daya",
    tagline:   "The Guardian of Raja Ampat — gerbang surga bahari dunia, tanah para pengawal samudra, dan kekayaan tradisi yang hidup di kepala burung Pulau Papua.",
    history:   "🏛 Pemekaran & Kejayaan Maritim",
    region:    "🌿 6 Kabupaten / Kota",
    culture:   "🎭 Seni Budaya Pesisir & Kepulauan",
    arObjects: "4 Objek 3D Tersedia",

    house: {
      name:      "Rumah Kaki Seribu",
      origin:    "Papua Barat Daya, Indonesia",
      desc:      "Rumah Kaki Seribu adalah hunian tradisional yang ditopang oleh ratusan tiang kayu kecil agar tahan terhadap angin kencang dan gangguan hewan liar. Struktur ini mencerminkan kearifan lokal masyarakat Pegunungan Arfak dalam beradaptasi dengan lingkungan alam yang ekstrem namun tetap menjaga kehangatan keluarga.",
      metaLoc:   "Provinsi Papua Barat Daya",
      metaStyle: "Arsitektur Vernakular Papua",
      img:       "assets/provinsi/papua-bd/rumah-kaki-seribu.jpg",
    },
    weapon: {
      name:      "Parang dan Busur",
      origin:    "Warisan Budaya Papua, Indonesia",
      desc:      "Senjata tradisional masyarakat Papua Barat Daya terdiri dari busur kayu dengan anak panah bambu serta parang besi. Selain sebagai alat berburu di hutan hujan yang lebat, senjata ini merupakan simbol perlindungan diri, martabat suku, dan kesiapan dalam menjaga kedaulatan tanah adat.",
      metaLoc:   "Identitas Pemburu Papua",
      metaStyle: "Senjata Tradisional Hutan",
      img:       "assets/provinsi/papua-bd/busur-panah.jpg",
    },
    food: {
      name:      "Udang Selingkuh",
      origin:    "Papua Barat Daya, Indonesia",
      desc:      "Udang Selingkuh adalah kuliner unik khas wilayah kepala burung Papua yang memiliki tubuh udang namun capit yang besar menyerupai kepiting. Tekstur dagingnya yang padat dan manis biasanya diolah dengan bumbu saus tiram atau asam manis, menjadi hidangan laut premium yang sangat diburu wisatawan.",
      metaLoc:   "Kuliner Khas Papua",
      metaStyle: "Cita Rasa Bahari Eksotis",
      img:       "assets/provinsi/papua-bd/udang-selingkuh.jpg",
    },
    cloth: {
      name:      "Baju Kurung dan Kain Rumput",
      origin:    "Papua Barat Daya, Indonesia",
      desc:      "Busana tradisional di wilayah pesisir Papua Barat Daya seringkali memadukan baju kurung sederhana dengan kain rumput yang dianyam secara manual. Hiasan kepala dari bulu burung cenderawasih atau kasuari sering ditambahkan untuk menunjukkan status kehormatan dan keagungan budaya setempat.",
      metaLoc:   "Busana Pesisir Papua",
      metaStyle: "Wastra Serat Alam",
      img:       "assets/provinsi/papua-bd/kain-rumput.jpg",
    },
  },

  "papua-selatan": {
    name:       "Papua Selatan",
    tagline:    "Anim Ha — tanah rawa luas nan eksotis, rumah bagi sang ukir legendaris Asmat dan penjaga tradisi luhur di ujung selatan Papua.",
    history:    "🏛 Sejarah & Budaya Papua",
    region:     "🌿 4 Kabupaten",
    culture:    "🎭 Puluhan Tradisi Suku Asli",
    arObjects:  "4 Objek 3D Tersedia",

    house: {
      name:       "Rumah Jew",
      origin:     "Papua Selatan, Indonesia",
      desc:       "Rumah Jew adalah rumah bujang tradisional suku Asmat yang menjadi pusat kehidupan sosial, politik, dan religi. Dibangun menggunakan kayu besi dan atap nipah, rumah ini merupakan tempat sakral untuk merencanakan upacara adat, menyimpan patung ukiran leluhur, serta mewariskan nilai-nilai kepemimpinan kepada pemuda.",
      metaLoc:    "Provinsi Papua Selatan",
      metaStyle:  "Arsitektur Tradisional Asmat",
      img:        "assets/provinsi/papua-selatan/rumah-jew.jpg",
    },
    music: {
    name:      "Tifa",
    origin:    "Papua Selatan, Indonesia",
    desc:      "Tifa adalah alat musik pukul tradisional khas Papua Selatan berupa gendang silinder yang terbuat dari kayu pilihan dan kulit hewan. Dimainkan dalam upacara adat, ritual suku Asmat dan Marind, serta perayaan budaya, irama Tifa yang menghentak mencerminkan semangat kebersamaan, kekuatan spiritual, dan kekayaan tradisi masyarakat adat di tanah Papua Selatan.",
    metaLoc:   "Alat Musik Tradisional Papua",
    metaStyle: "Instrumen Pukul Khas",
  },
    food: {
      name:       "Sagu Sep",
      origin:     "Merauke, Papua Selatan",
      desc:       "Sagu Sep adalah makanan khas suku Marind yang terbuat dari campuran sagu, kelapa parut, dan daging (biasanya ikan atau daging buruan). Diolah dengan cara dibakar di atas batu panas dan ditutup daun pisang, menghasilkan tekstur padat yang kaya nutrisi sebagai simbol ketahanan pangan lokal.",
      metaLoc:    "Kuliner Tradisional Merauke",
      metaStyle:  "Olahan Sagu Bakar",
      img:        "assets/provinsi/papua-selatan/sagu-sep.jpg",
    },
    cloth: {
      name:       "Rok Rumbai dan Noken",
      origin:     "Papua Selatan, Indonesia",
      desc:       "Busana adat Papua Selatan menggunakan serat sagu atau kulit kayu yang diolah menjadi rok rumbai. Penampilan sering dilengkapi dengan noken yang dianyam halus serta hiasan kepala dari bulu burung atau taring babi, melambangkan strata sosial dan kedekatan spiritual masyarakat dengan ekosistem hutan.",
      metaLoc:    "Busana Adat Suku Papua",
      metaStyle:  "Pakaian Serat Alam",
      img:        "assets/provinsi/papua-selatan/rok-rumbai.jpg",
    },
  },

   "papua-tengah": {
    name:       "Papua Tengah",
    tagline:    "Jantung Pegunungan Papua — tanah budaya luhur, alam megah, dan kehidupan masyarakat adat yang menjaga tradisi turun-temurun di tengah bentang pegunungan Indonesia timur.",
    history:    "🏛 Sejarah & Budaya Papua",
    region:     "🌿 8 Kabupaten",
    culture:    "🎭 100+ Tradisi Suku Asli",
    arObjects:  "4 Objek 3D Tersedia",

    house: {
      name:       "Honai",
      origin:     "Papua Tengah, Indonesia",
      desc:       "Honai adalah rumah adat khas masyarakat pegunungan Papua yang dibangun menggunakan kayu, jerami, dan atap berbentuk kerucut untuk menahan udara dingin pegunungan. Rumah ini menjadi simbol persatuan keluarga, perlindungan, serta kearifan lokal masyarakat Papua dalam hidup berdampingan dengan alam.",
      metaLoc:    "Provinsi Papua Tengah",
      metaStyle:  "Arsitektur Tradisional Papua",
      img:        "/assets/provinsi/papua_tengah/honai.jpg",
    },

    weapon: {
      name:       "Busur dan Panah",
      origin:     "Warisan Budaya Papua Tengah, Indonesia",
      desc:       "Busur dan panah merupakan senjata tradisional masyarakat Papua Tengah yang sejak dahulu digunakan untuk berburu dan mempertahankan diri. Senjata ini melambangkan keberanian, keterampilan, dan hubungan erat masyarakat adat Papua dengan alam sekitar.",
      metaLoc:    "Identitas Budaya Papua",
      metaStyle:  "Senjata Tradisional",
      img:        "/assets/provinsi/papua_tengah/busurpanah.jpg",
    },

    food: {
      name:       "Papeda",
      origin:     "Papua Tengah, Indonesia",
      desc:       "Papeda adalah makanan tradisional berbahan dasar sagu yang memiliki tekstur kenyal dan biasanya disajikan bersama ikan kuah kuning. Kuliner ini menjadi simbol ketahanan pangan masyarakat Papua dan mencerminkan kekayaan sumber daya alam hutan sagu di tanah Papua.",
      metaLoc:    "Kuliner Khas Papua",
      metaStyle:  "Warisan Kuliner Tradisional",
      img:        "/assets/provinsi/papua_tengah/papeda.jpg",
    },

    cloth: {
      name:       "Koteka dan Rok Rumbai",
      origin:     "Papua Tengah, Indonesia",
      desc:       "Koteka dan rok rumbai merupakan pakaian adat tradisional masyarakat Papua Tengah yang digunakan dalam kehidupan sehari-hari maupun upacara adat. Busana ini mencerminkan identitas budaya, kesederhanaan hidup, serta hubungan spiritual masyarakat Papua dengan alam dan leluhur mereka.",
      metaLoc:    "Budaya Pegunungan Papua",
      metaStyle:  "Busana Tradisional Papua",
      img:        "/assets/provinsi/papua_tengah/koteka.jpg",
    },
  },

  "di-yogyakarta": {
    name:       "Daerah Istimewa Yogyakarta",
    tagline:    "Jantung Budaya Jawa — tanah kesultanan yang agung, perpaduan harmonis antara tradisi leluhur, seni adiluhung, dan keramahtamahan masyarakat yang menjaga warisan filosofi Mataram Islam.",
    history:    "🏛 Sejarah & Budaya Jawa",
    region:     "🌿 4 Kabupaten & 1 Kota",
    culture:    "🎭 150+ Tradisi & Seni Warisan",
    arObjects:  "4 Objek 3D Tersedia",

    house: {
      name:       "Joglo Yogyakarta",
      origin:     "D.I. Yogyakarta, Indonesia",
      desc:       "Joglo Yogyakarta adalah rumah adat tradisional dengan ciri khas atap tajug yang menjulang tinggi, disangga oleh empat tiang utama (soko guru). Arsitektur ini bukan sekadar tempat tinggal, melainkan simbol status sosial, cerminan nilai religius, serta perwujudan ketenangan hidup masyarakat Jawa.",
      metaLoc:    "Provinsi D.I. Yogyakarta",
      metaStyle:  "Arsitektur Tradisional Jawa",
      img:        "/assets/provinsi/yogyakarta/joglo.jpg",
    },

    weapon: {
      name:       "Keris Yogyakarta",
      origin:     "Warisan Budaya D.I. Yogyakarta, Indonesia",
      desc:       "Keris Yogyakarta merupakan senjata tradisional sekaligus benda seni spiritual yang memiliki bentuk bilah khas (lurus atau berluk) serta warangka gaya gagrak Yogyakarta. Senjata ini melambangkan ksatriaan, kehormatan, dan tuntunan hidup bagi pemiliknya.",
      metaLoc:    "Identitas Budaya Jawa",
      metaStyle:  "Senjata Tradisional & Pusaka",
      img:        "/assets/provinsi/yogyakarta/keris.jpg",
    },

    food: {
      name:       "Gudeg",
      origin:     "D.I. Yogyakarta, Indonesia",
      desc:       "Gudeg adalah kuliner tradisional berbahan dasar nangka muda (gori) yang dimasak lama dengan santan, gula jawa, dan bumbu rempah hingga berwarna cokelat khas. Hidangan manis-gurih ini mencerminkan kesabaran, ketelitian, dan filosofi kelembutan masyarakat Yogyakarta.",
      metaLoc:    "Kuliner Khas Yogyakarta",
      metaStyle:  "Warisan Kuliner Tradisional",
      img:        "/assets/provinsi/yogyakarta/gudeg.jpg",
    },

    cloth: {
      name:       "Kebaya Kesatrian dan Surjan",
      origin:     "D.I. Yogyakarta, Indonesia",
      desc:       "Kebaya Kesatrian dan Surjan (termasuk kain batik motif khas Yogyakarta seperti Parang atau Grompol) merupakan pakaian adat yang melambangkan kesopanan, keanggunan, dan keteguhan iman. Busana ini mencerminkan tata krama luhur serta identitas budaya Kasultanan Yogyakarta.",
      metaLoc:    "Budaya Mataram Jawa",
      metaStyle:  "Busana Tradisional Yogyakarta",
      img:        "/assets/provinsi/yogyakarta/surjan_kebaya.jpg",
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

// Pemetaan default (slot HTML → key data provinsi)
const CATEGORY_MAP_DEFAULT = {
  rumah:   'house',
  senjata: 'weapon',
  makanan: 'food',
  pakaian: 'cloth',
};

// Override per provinsi — isi sesuai kebutuhan
// Key = slot HTML card, Value = key di provinceDatabase & arLinks
const CATEGORY_MAP_OVERRIDE = {
    'sumatera-utara': {
    senjata: 'music',   // slot card senjata → pakai data music
    makanan: 'dance',   // slot card makanan → pakai data dance
  },
   'kep-bangka-belitung': {
    senjata: 'music',
  },
  'lampung': {
    senjata: 'tradition',
    makanan: 'music',
  },
  'banten':              { makanan: 'music' },
  'kalimantan-barat':    { senjata: 'music' },
  'kalimantan-timur':    { senjata: 'music' },
  'kalimantan-utara':    { senjata: 'music' },
  'gorontalo':           { senjata: 'music' },
  'sulawesi-tengah':     { senjata: 'music' },
  'sulawesi-barat':      { senjata: 'music' },
  'sulawesi-selatan':    { senjata: 'music' },
  'sulawesi-tenggara':   { senjata: 'music' },
  'maluku':              { senjata: 'music' },
  'maluku-utara':        { senjata: 'dance', makanan: 'music' },
  'papua-selatan':       { senjata: 'music' },
  // Contoh:
  // 'aceh': {
  //   senjata: 'dance',   // card senjata → tampilkan tarian
  //   makanan: 'music',   // card makanan → tampilkan alat musik
  // },
};

// Konfigurasi tampilan label & ikon badge per key
const CATEGORY_DISPLAY = {
  house:     { label: 'Rumah Adat',          icon: '🏠', badgeClass: 'badge-gold'   },
  weapon:    { label: 'Senjata Tradisional', icon: '⚔️', badgeClass: 'badge-blue'   },
  food:      { label: 'Makanan Tradisional', icon: '🍛', badgeClass: 'badge-teal'   },
  cloth:     { label: 'Pakaian Tradisional', icon: '👘', badgeClass: 'badge-rose'   },
  dance:     { label: 'Tarian Tradisional',  icon: '💃', badgeClass: 'badge-purple' },
  music:     { label: 'Alat Musik',          icon: '🎵', badgeClass: 'badge-teal'   },
  tradition: { label: 'Tradisi Daerah',      icon: '🎎', badgeClass: 'badge-purple' },
};
  // tambahkan kategori baru di sini sesuai kebutuhan


function getCategoryMap(slug) {
  const override = CATEGORY_MAP_OVERRIDE[slug] || {};
  return { ...CATEGORY_MAP_DEFAULT, ...override };
}

function updateCardBadge(cat, dataKey) {
  const display = CATEGORY_DISPLAY[dataKey];
  if (!display) return;

  // Update badge label & ikon
  const card  = document.querySelector(`[data-category="${cat}"]`);
  if (!card) return;

  const badge = card.querySelector('.card-category-badge');
  if (badge) {
    // Hapus semua badge class lama, pasang yang baru
    badge.className = `card-category-badge ${display.badgeClass}`;
    badge.innerHTML = `<span>${display.icon}</span> ${display.label}`;
  }
}

function populateCard(cat, data, slug, dataKey) {
  if (!data) return;

  setText(`title-${cat}`,      data.name);
  setText(`origin-${cat}`,     data.origin);
  setText(`desc-${cat}`,       data.desc);
  setText(`meta-${cat}-loc`,   data.metaLoc);
  setText(`meta-${cat}-style`, data.metaStyle);

  setSrc(`img-${cat}`, getImgPath(slug, cat), data.name);

  // Update badge sesuai kategori aktual
  updateCardBadge(cat, dataKey);

  const btnAR = document.getElementById(`btn-ar-${cat}`);
  if (btnAR) {
    const link = arLinks[slug]?.[dataKey];
    btnAR.onclick = () => link
      ? window.open(link, '_blank')
      : alert('Link AR belum tersedia');
  }
}

function getImgPath(slug, category) {
  const catMap = {
    rumah:   'rumah',
    senjata: 'senjata',
    makanan: 'makanan',
    pakaian: 'pakaian',
    dance:   'tarian',
    music:   'musik',
    // tambahkan sesuai folder aset kamu
  };
  return `/assets/provinsi/${slug}/${catMap[category] || category}`;
}

function setSrc(id, src, alt) {
  const el = document.getElementById(id);
  if (!el) return;
  el.alt = alt || '';

  if (src && /\.(jpg|png|webp|jpeg)$/i.test(src)) {
    el.src = src;
    el.onerror = null;
    return;
  }

  el.src = src + '.jpg';
  el.onerror = function () {
    el.onerror = null;
    el.src = src + '.png';
  };
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

  const catMap = getCategoryMap(slug);
  for (const [cat, dataKey] of Object.entries(catMap)) {
    populateCard(cat, p[dataKey], slug, dataKey);
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


/* ─────────────────────────────────────────
   11. MODAL — Keyboard & backdrop close
───────────────────────────────────────── */

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { closeARModal(); closeQRModal(); }
});

document.querySelectorAll('.modal-overlay').forEach(overlay => {
  overlay.addEventListener('click', e => {
    if (e.target === overlay) { closeARModal(); }
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

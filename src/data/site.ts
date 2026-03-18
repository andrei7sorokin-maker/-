export type Lang = "ru" | "ee" | "en";

export const languages: Record<Lang, { label: string; path: string }> = {
  ru: { label: "RU", path: "/" },
  ee: { label: "EE", path: "/ee/" },
  en: { label: "EN", path: "/en/" }
};

export const ui = {
  ru: {
    brand: "Forest Echo Estonia",
    navCabins: "Домики",
    navAbout: "О нас",
    navServices: "Услуги",
    navBooking: "Бронирование",
    regionLabel: "Регионы Эстонии",
    cabinsTitle: "Выберите формат домика",
    cabinsLead:
      "10 домиков распределены по лесным локациям Эстонии: от спокойных озер на севере до тихих рек юга страны.",
    from: "от",
    perNight: "за ночь",
    guests: "гостей",
    bookNow: "Оставить заявку",
    bookingTitle: "Форма бронирования",
    bookingIntro:
      "Заполните форму, и мы подготовим предложение по свободным домикам и датам.",
    name: "Имя",
    email: "Email",
    phone: "Телефон",
    arrival: "Дата заезда",
    departure: "Дата выезда",
    guestsCount: "Количество гостей",
    cabinType: "Тип домика",
    message: "Комментарий",
    send: "Отправить заявку",
    formHint:
      "После отправки откроется ваш почтовый клиент с уже подготовленной заявкой.",
    success:
      "Заявка подготовлена. Если почтовое приложение не открылось, напишите на stay@forestecho.ee.",
    footer:
      "Лесные домики у воды по всей Эстонии для спокойного отдыха на русском, эстонском и английском."
  },
  ee: {
    brand: "Forest Echo Estonia",
    navCabins: "Majakesed",
    navAbout: "Meist",
    navServices: "Teenused",
    navBooking: "Broneerimine",
    regionLabel: "Eesti piirkonnad",
    cabinsTitle: "Vali sobiv majakese formaat",
    cabinsLead:
      "10 majakest asuvad üle Eesti metsastes paikades: rahulikest põhjapoolsetest järvedest kuni Lõuna-Eesti vaiksete jõgedeni.",
    from: "alates",
    perNight: "öö kohta",
    guests: "külalist",
    bookNow: "Saada päring",
    bookingTitle: "Broneerimisvorm",
    bookingIntro:
      "Täida vorm ja me saadame pakkumise vabade majakeste ning kuupäevadega.",
    name: "Nimi",
    email: "E-post",
    phone: "Telefon",
    arrival: "Saabumise kuupäev",
    departure: "Lahkumise kuupäev",
    guestsCount: "Külaliste arv",
    cabinType: "Majakese tüüp",
    message: "Kommentaar",
    send: "Saada päring",
    formHint:
      "Pärast saatmist avaneb e-posti rakendus ettevalmistatud broneerimissooviga.",
    success:
      "Päring on valmis. Kui e-posti rakendus ei avanenud, kirjuta aadressile stay@forestecho.ee.",
    footer:
      "Metsamajakesed vee ääres üle Eesti rahulikuks puhkuseks eesti, vene ja inglise keeles."
  },
  en: {
    brand: "Forest Echo Estonia",
    navCabins: "Cabins",
    navAbout: "About",
    navServices: "Stay",
    navBooking: "Booking",
    regionLabel: "Regions of Estonia",
    cabinsTitle: "Choose your cabin size",
    cabinsLead:
      "10 cabins are spread across forest locations in Estonia, from northern lakes to quiet southern rivers.",
    from: "from",
    perNight: "per night",
    guests: "guests",
    bookNow: "Send request",
    bookingTitle: "Booking form",
    bookingIntro:
      "Fill in the form and we will reply with suitable cabins and available dates.",
    name: "Name",
    email: "Email",
    phone: "Phone",
    arrival: "Arrival date",
    departure: "Departure date",
    guestsCount: "Number of guests",
    cabinType: "Cabin type",
    message: "Comment",
    send: "Send request",
    formHint:
      "After submitting, your mail app will open with a prepared booking request.",
    success:
      "Your request is ready. If your mail app did not open, write to stay@forestecho.ee.",
    footer:
      "Forest cabins by the water across Estonia for peaceful stays in Russian, Estonian, and English."
  }
} as const;

export const cabinTypes = [
  { id: "2", price: 80 },
  { id: "4", price: 100 },
  { id: "6", price: 120 },
  { id: "8", price: 160 }
] as const;

export const cabins = [
  {
    slug: "lake-haze",
    sleeps: 2,
    price: 80,
    region: "Lahemaa",
    image:
      "https://images.pexels.com/photos/24973254/pexels-photo-24973254.jpeg?auto=compress&cs=tinysrgb&w=1200",
    title: { ru: "Lake Haze", ee: "Lake Haze", en: "Lake Haze" },
    text: {
      ru: "Домик у небольшого озера с террасой и утренним туманом над водой.",
      ee: "Majake väikese järve ääres terrassi ja hommikuse udulooriga.",
      en: "A small lakeside cabin with a deck and mist above the water."
    },
    features: ["Lakefront", "Deck", "Fireplace"]
  },
  {
    slug: "pine-mirror",
    sleeps: 2,
    price: 80,
    region: "Harjumaa",
    image:
      "https://images.pexels.com/photos/10530007/pexels-photo-10530007.jpeg?auto=compress&cs=tinysrgb&w=1200",
    title: { ru: "Pine Mirror", ee: "Pine Mirror", en: "Pine Mirror" },
    text: {
      ru: "Небольшой романтический домик среди сосен рядом с лесным прудом.",
      ee: "Väike romantiline majake mändide vahel metsatiigi kõrval.",
      en: "A romantic small cabin among pines near a quiet forest pond."
    },
    features: ["Forest pond", "Sauna", "Quiet zone"]
  },
  {
    slug: "river-nest",
    sleeps: 4,
    price: 100,
    region: "Jogevamaa",
    image:
      "https://images.pexels.com/photos/8389011/pexels-photo-8389011.jpeg?auto=compress&cs=tinysrgb&w=1200",
    title: { ru: "River Nest", ee: "River Nest", en: "River Nest" },
    text: {
      ru: "Семейный домик у спокойной реки с местом для костра и гриля.",
      ee: "Peremajake rahuliku jõe ääres lõkke- ja grillialaga.",
      en: "A family cabin by a gentle river with a fire pit and grill area."
    },
    features: ["Riverbank", "Grill", "Family stay"]
  },
  {
    slug: "juniper-bank",
    sleeps: 4,
    price: 100,
    region: "Saaremaa",
    image:
      "https://images.pexels.com/photos/24973254/pexels-photo-24973254.jpeg?auto=compress&cs=tinysrgb&w=1200",
    title: { ru: "Juniper Bank", ee: "Juniper Bank", en: "Juniper Bank" },
    text: {
      ru: "Домик на острове с видом на воду, можжевельники и долгие закаты.",
      ee: "Saarte majake vaate, kadakate ja pikkade päikeseloojangutega.",
      en: "An island cabin with water views, junipers, and long sunsets."
    },
    features: ["Island", "Water view", "Sunset deck"]
  },
  {
    slug: "misty-shore",
    sleeps: 4,
    price: 100,
    region: "Parnumaa",
    image:
      "https://images.pexels.com/photos/10530007/pexels-photo-10530007.jpeg?auto=compress&cs=tinysrgb&w=1200",
    title: { ru: "Misty Shore", ee: "Misty Shore", en: "Misty Shore" },
    text: {
      ru: "Уютный домик у лесного водоема, где вода и тростник видны прямо с кровати.",
      ee: "Hubane majake metsase veekogu ääres vaatega otse voodist.",
      en: "A cozy cabin beside a forest waterline with reeds and reflections."
    },
    features: ["Wetland edge", "Panorama windows", "Birdsong"]
  },
  {
    slug: "silent-rapids",
    sleeps: 6,
    price: 120,
    region: "Tartumaa",
    image:
      "https://images.pexels.com/photos/8389011/pexels-photo-8389011.jpeg?auto=compress&cs=tinysrgb&w=1200",
    title: { ru: "Silent Rapids", ee: "Silent Rapids", en: "Silent Rapids" },
    text: {
      ru: "Просторный домик для компании рядом с речным поворотом и сосновой тропой.",
      ee: "Ruumikas majake seltskonnale jõesängi kurvi ja männiraja kõrval.",
      en: "A spacious group cabin by a river bend and a pine trail."
    },
    features: ["Large sauna", "River trail", "Outdoor dining"]
  },
  {
    slug: "amber-pines",
    sleeps: 6,
    price: 120,
    region: "Vorumaa",
    image:
      "https://images.pexels.com/photos/24973254/pexels-photo-24973254.jpeg?auto=compress&cs=tinysrgb&w=1200",
    title: { ru: "Amber Pines", ee: "Amber Pines", en: "Amber Pines" },
    text: {
      ru: "Домик среди высоких сосен возле озера, хорошо подходит для семейного отдыха.",
      ee: "Majake kõrgete mändide vahel järve lähedal perereisideks.",
      en: "A pine-framed cabin near a lake, ideal for family stays."
    },
    features: ["Lake path", "Fireplace", "Family table"]
  },
  {
    slug: "heather-water",
    sleeps: 6,
    price: 120,
    region: "Ida-Virumaa",
    image:
      "https://images.pexels.com/photos/10530007/pexels-photo-10530007.jpeg?auto=compress&cs=tinysrgb&w=1200",
    title: { ru: "Heather Water", ee: "Heather Water", en: "Heather Water" },
    text: {
      ru: "Домик у воды в северо-восточной Эстонии с открытой террасой и закатным светом.",
      ee: "Veekoguäärne majake Kirde-Eestis avatud terrassi ja õhtuse valgusega.",
      en: "A waterside cabin in north-eastern Estonia with an open deck."
    },
    features: ["Open deck", "Quiet shoreline", "Group stay"]
  },
  {
    slug: "northern-drift",
    sleeps: 8,
    price: 160,
    region: "Laanemaa",
    image:
      "https://images.pexels.com/photos/8389011/pexels-photo-8389011.jpeg?auto=compress&cs=tinysrgb&w=1200",
    title: { ru: "Northern Drift", ee: "Northern Drift", en: "Northern Drift" },
    text: {
      ru: "Большой домик для компании у воды с длинным общим столом и баней.",
      ee: "Suur majake seltskonnale vee ääres pika ühislaua ja saunaga.",
      en: "A large waterside cabin for groups with a long dining table and sauna."
    },
    features: ["8 guests", "Sauna", "Long deck"]
  },
  {
    slug: "deep-forest-house",
    sleeps: 8,
    price: 160,
    region: "Polvamaa",
    image:
      "https://images.pexels.com/photos/24973254/pexels-photo-24973254.jpeg?auto=compress&cs=tinysrgb&w=1200",
    title: {
      ru: "Deep Forest House",
      ee: "Deep Forest House",
      en: "Deep Forest House"
    },
    text: {
      ru: "Самый просторный домик в глубине леса возле озера для большой семьи или друзей.",
      ee: "Kõige avaram majake sügavas metsas järve ääres suurele perele või sõpradele.",
      en: "Our most spacious cabin deep in the forest by a lake for big groups."
    },
    features: ["Big group", "Lake access", "Forest privacy"]
  }
] as const;

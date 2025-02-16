const imgUrl = [
  {
    id: "1",
    name: "Luke Skywalker",
    img: "https://static.wikia.nocookie.net/starwars/images/1/17/LukeSkywalker-Insider217.png",
  },
  {
    id: "2",
    name: "C-3PO",
    img: "https://static.wikia.nocookie.net/starwars/images/5/51/C-3PO_EP3.png",
  },
  {
    id: "3",
    name: "R2-D2",
    img: "https://static.wikia.nocookie.net/starwars/images/6/6d/R2D2-Chronicles.png",
  },
  {
    id: "4",
    name: "Darth Vader",
    img: "https://static.wikia.nocookie.net/starwars/images/9/94/Vaderrotj.jpg",
  },
  {
    id: "5",
    name: "Leia Organa",
    img: "https://static.wikia.nocookie.net/starwars/images/9/9b/Princessleiaheadwithgun.jpg",
  },
  {
    id: "6",
    name: "Owen Lars",
    img: "https://static.wikia.nocookie.net/starwars/images/e/eb/OwenCardTrader.png",
  },
  {
    id: "7",
    name: "Beru Whitesun lars",
    img: "https://static.wikia.nocookie.net/starwars/images/7/76/Beru_headshot2.jpg",
  },
  {
    id: "8",
    name: "R5-D4",
    img: "https://static.wikia.nocookie.net/starwars/images/2/2c/R5d4.jpg",
  },
  {
    id: "9",
    name: "Biggs Darklighter",
    img: "https://static.wikia.nocookie.net/starwars/images/0/00/BiggsHS-ANH.png",
  },
  {
    id: "10",
    name: "Obi-Wan Kenobi",
    img: "https://static.wikia.nocookie.net/starwars/images/4/4e/ObiWanHS-SWE.jpg",
  },
  {
    id: "11",
    name: "Anakin Skywalker",
    img: "https://static.wikia.nocookie.net/starwars/images/6/6f/Anakin_Skywalker_RotS.png",
  },
  {
    id: "12",
    name: "Wilhuff Tarkin",
    img: "https://static.wikia.nocookie.net/starwars/images/c/c1/Tarkininfobox.jpg",
  },
  {
    id: "13",
    name: "Chewbacca",
    img: "https://static.wikia.nocookie.net/starwars/images/4/48/Chewbacca_TLJ.png",
  },
  {
    id: "14",
    name: "Han Solo",
    img: "https://static.wikia.nocookie.net/starwars/images/0/01/Hansoloprofile.jpg",
  },
  {
    id: "15",
    name: "Greedo",
    img: "https://static.wikia.nocookie.net/starwars/images/f/f9/Greedo-SWBC32.png",
  },
  {
    id: "16",
    name: "Jabba Desilijic Tiure",
    img: "https://static.wikia.nocookie.net/starwars/images/4/4b/Jabba-SWI143.png",
  },
  {
    id: "18",
    name: "Wedge Antilles",
    img: "https://static.wikia.nocookie.net/starwars/images/7/7e/WedgesEntireHead-ROTJ.png",
  },
  {
    id: "19",
    name: "Jek Tono Porkins",
    img: "https://static.wikia.nocookie.net/starwars/images/5/53/Porkins.jpg",
  },
  {
    id: "20",
    name: "Yoda",
    img: "https://static.wikia.nocookie.net/starwars/images/d/d6/Yoda_SWSB.png",
  },
  {
    id: "21",
    name: "Palpatine",
    img: "https://static.wikia.nocookie.net/starwars/images/d/d8/Emperor_Sidious.png",
  },
  {
    id: "22",
    name: "Boba Fett",
    img: "https://static.wikia.nocookie.net/starwars/images/5/5e/BobaFettMain2.png",
  },
  {
    id: "23",
    name: "IG-88",
    img: "https://static.wikia.nocookie.net/starwars/images/f/fe/IG-88B-TESB40.png",
  },
  {
    id: "24",
    name: "Bossk",
    img: "https://static.wikia.nocookie.net/starwars/images/1/1d/Bossk.png",
  },
  {
    id: "25",
    name: "Lando Calrissian",
    img: "https://static.wikia.nocookie.net/starwars/images/7/7d/Lando_WoSW.jpg",
  },
  {
    id: "26",
    name: "Lobot",
    img: "https://starwars-visualguide.com/assets/img/characters/26.jpg",
  },
  {
    id: "27",
    name: "Ackbar",
    img: "https://starwars-visualguide.com/assets/img/characters/27.jpg",
  },
  {
    id: "28",
    name: "Mon Mothma",
    img: "https://starwars-visualguide.com/assets/img/characters/28.jpg",
  },
  {
    id: "29",
    name: "Arvel Crynyd",
    img: "https://starwars-visualguide.com/assets/img/characters/29.jpg",
  },
  {
    id: "30",
    name: "Wicket Systri Warrick",
    img: "https://starwars-visualguide.com/assets/img/characters/30.jpg",
  },
  {
    id: "31",
    name: "Nien Nunb",
    img: "https://starwars-visualguide.com/assets/img/characters/31.jpg",
  },
  {
    id: "32",
    name: "Qui-Gon Jinn",
    img: "https://starwars-visualguide.com/assets/img/characters/32.jpg",
  },
  {
    id: "33",
    name: "Nute Gunray",
    img: "https://starwars-visualguide.com/assets/img/characters/33.jpg",
  },
  {
    id: "34",
    name: "Finis Valorum",
    img: "https://starwars-visualguide.com/assets/img/characters/34.jpg",
  },
  {
    id: "35",
    name: "Padmé Amidala",
    img: "https://starwars-visualguide.com/assets/img/characters/35.jpg",
  },
  {
    id: "36",
    name: "Jar Jar Binks",
    img: "https://starwars-visualguide.com/assets/img/characters/36.jpg",
  },
  {
    id: "37",
    name: "Roos Tarpals",
    img: "https://starwars-visualguide.com/assets/img/characters/37.jpg",
  },
  {
    id: "38",
    name: "Rugor Nass",
    img: "https://starwars-visualguide.com/assets/img/characters/38.jpg",
  },
  {
    id: "39",
    name: "Ric Olié",
    img: "https://starwars-visualguide.com/assets/img/characters/39.jpg",
  },
  {
    id: "40",
    name: "Watto",
    img: "https://starwars-visualguide.com/assets/img/characters/40.jpg",
  },
  {
    id: "41",
    name: "Sebulba",
    img: "https://starwars-visualguide.com/assets/img/characters/41.jpg",
  },
  {
    id: "42",
    name: "Quarsh Panaka",
    img: "https://starwars-visualguide.com/assets/img/characters/42.jpg",
  },
  {
    id: "43",
    name: "Shmi Skywalker",
    img: "https://starwars-visualguide.com/assets/img/characters/43.jpg",
  },
  {
    id: "44",
    name: "Darth Maul",
    img: "https://starwars-visualguide.com/assets/img/characters/44.jpg",
  },
  {
    id: "45",
    name: "Bib Fortuna",
    img: "https://starwars-visualguide.com/assets/img/characters/45.jpg",
  },
  {
    id: "46",
    name: "Ayla Secura",
    img: "https://starwars-visualguide.com/assets/img/characters/46.jpg",
  },
  {
    id: "47",
    name: "Ratts Tyerel",
    img: "https://starwars-visualguide.com/assets/img/characters/47.jpg",
  },
  {
    id: "48",
    name: "Dud Bolt",
    img: "https://starwars-visualguide.com/assets/img/characters/48.jpg",
  },
  {
    id: "49",
    name: "Gasgano",
    img: "https://starwars-visualguide.com/assets/img/characters/49.jpg",
  },
  {
    id: "50",
    name: "Ben Quadinaros",
    img: "https://starwars-visualguide.com/assets/img/characters/50.jpg",
  },
  {
    id: "51",
    name: "Mace Windu",
    img: "https://starwars-visualguide.com/assets/img/characters/51.jpg",
  },
  {
    id: "52",
    name: "Ki-Adi-Mundi",
    img: "https://starwars-visualguide.com/assets/img/characters/52.jpg",
  },
  {
    id: "53",
    name: "Kit Fisto",
    img: "https://starwars-visualguide.com/assets/img/characters/53.jpg",
  },
  {
    id: "54",
    name: "Eeth Koth",
    img: "https://starwars-visualguide.com/assets/img/characters/54.jpg",
  },
  {
    id: "55",
    name: "Adi Gallia",
    img: "https://starwars-visualguide.com/assets/img/characters/55.jpg",
  },
  {
    id: "56",
    name: "Saesee Tiin",
    img: "https://starwars-visualguide.com/assets/img/characters/56.jpg",
  },
  {
    id: "57",
    name: "Yarael Poof",
    img: "https://starwars-visualguide.com/assets/img/characters/57.jpg",
  },
  {
    id: "58",
    name: "Plo Koon",
    img: "https://starwars-visualguide.com/assets/img/characters/58.jpg",
  },
  {
    id: "59",
    name: "Mas Amedda",
    img: "https://starwars-visualguide.com/assets/img/characters/59.jpg",
  },
  {
    id: "60",
    name: "Gregar Typho",
    img: "https://starwars-visualguide.com/assets/img/characters/60.jpg",
  },
  {
    id: "61",
    name: "Cordé",
    img: "https://starwars-visualguide.com/assets/img/characters/61.jpg",
  },
  {
    id: "62",
    name: "Cliegg Lars",
    img: "https://starwars-visualguide.com/assets/img/characters/62.jpg",
  },
  {
    id: "63",
    name: "Poggle the Lesser",
    img: "https://starwars-visualguide.com/assets/img/characters/63.jpg",
  },
  {
    id: "64",
    name: "Luminara Unduli",
    img: "https://starwars-visualguide.com/assets/img/characters/64.jpg",
  },
  {
    id: "65",
    name: "Barriss Offee",
    img: "https://starwars-visualguide.com/assets/img/characters/65.jpg",
  },
  {
    id: "66",
    name: "Dormé",
    img: "https://starwars-visualguide.com/assets/img/characters/66.jpg",
  },
  {
    id: "67",
    name: "Dooku",
    img: "https://starwars-visualguide.com/assets/img/characters/67.jpg",
  },
  {
    id: "68",
    name: "Bail Prestor Organa",
    img: "https://starwars-visualguide.com/assets/img/characters/68.jpg",
  },
  {
    id: "69",
    name: "Jango Fett",
    img: "https://starwars-visualguide.com/assets/img/characters/69.jpg",
  },
  {
    id: "70",
    name: "Zam Wesell",
    img: "https://starwars-visualguide.com/assets/img/characters/70.jpg",
  },
  {
    id: "71",
    name: "Dexter Jettster",
    img: "https://starwars-visualguide.com/assets/img/characters/71.jpg",
  },
  {
    id: "72",
    name: "Lama Su",
    img: "https://starwars-visualguide.com/assets/img/characters/72.jpg",
  },
  {
    id: "73",
    name: "Taun We",
    img: "https://starwars-visualguide.com/assets/img/characters/73.jpg",
  },
  {
    id: "74",
    name: "Jocasta Nu",
    img: "https://starwars-visualguide.com/assets/img/characters/74.jpg",
  },
  {
    id: "75",
    name: "R4-P17",
    img: "https://starwars-visualguide.com/assets/img/characters/75.jpg",
  },
  {
    id: "76",
    name: "Wat Tambor",
    img: "https://starwars-visualguide.com/assets/img/characters/76.jpg",
  },
  {
    id: "77",
    name: "San Hill",
    img: "https://starwars-visualguide.com/assets/img/characters/77.jpg",
  },
  {
    id: "78",
    name: "Shaak Ti",
    img: "https://starwars-visualguide.com/assets/img/characters/78.jpg",
  },
  {
    id: "79",
    name: "Grievous",
    img: "https://starwars-visualguide.com/assets/img/characters/79.jpg",
  },
  {
    id: "80",
    name: "Tarfful",
    img: "https://starwars-visualguide.com/assets/img/characters/80.jpg",
  },
  {
    id: "81",
    name: "Raymus Antilles",
    img: "https://starwars-visualguide.com/assets/img/characters/81.jpg",
  },
  {
    id: "82",
    name: "Sly Moore",
    img: "https://starwars-visualguide.com/assets/img/characters/82.jpg",
  },
  {
    id: "83",
    name: "Tion Medon",
    img: "https://starwars-visualguide.com/assets/img/characters/83.jpg",
  },
];

export default imgUrl;

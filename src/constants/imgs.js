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
    img: "https://static.wikia.nocookie.net/starwars/images/e/e0/Lobot_SWSB.png",
  },
  {
    id: "27",
    name: "Ackbar",
    img: "https://static.wikia.nocookie.net/starwars/images/2/29/Admiral_Ackbar_RH.png",
  },
  {
    id: "28",
    name: "Mon Mothma",
    img: "https://static.wikia.nocookie.net/starwars/images/e/e3/MonMothma19BBY-SWE.png",
  },
  {
    id: "29",
    name: "Arvel Crynyd",
    img: "https://static.wikia.nocookie.net/starwars/images/d/de/Arvel-crynyd.jpg",
  },
  {
    id: "30",
    name: "Wicket Systri Warrick",
    img: "https://static.wikia.nocookie.net/starwars/images/4/4f/Wicket_RotJ.png",
  },
  {
    id: "31",
    name: "Nien Nunb",
    img: "https://static.wikia.nocookie.net/starwars/images/4/46/NienNunbHS-SWE.png",
  },
  {
    id: "32",
    name: "Qui-Gon Jinn",
    img: "https://static.wikia.nocookie.net/starwars/images/f/f6/Qui-Gon_Jinn_Headshot_TPM.jpg",
  },
  {
    id: "33",
    name: "Nute Gunray",
    img: "https://static.wikia.nocookie.net/starwars/images/7/7c/NuteGunrayEpIII-SWCTP.png",
  },
  {
    id: "34",
    name: "Finis Valorum",
    img: "https://static.wikia.nocookie.net/starwars/images/8/8d/FinisValorum-FF56.png",
  },
  {
    id: "35",
    name: "Padmé Amidala",
    img: "https://static.wikia.nocookie.net/starwars/images/b/b2/Padmegreenscrshot.jpg",
  },
  {
    id: "36",
    name: "Jar Jar Binks",
    img: "https://static.wikia.nocookie.net/starwars/images/e/ed/Binks22BBY.png",
  },
  {
    id: "37",
    name: "Roos Tarpals",
    img: "https://static.wikia.nocookie.net/starwars/images/c/c8/Tarpals-FFp47.png",
  },
  {
    id: "38",
    name: "Rugor Nass",
    img: "https://static.wikia.nocookie.net/starwars/images/f/f0/Bossnass.png",
  },
  {
    id: "39",
    name: "Ric Olié",
    img: "https://static.wikia.nocookie.net/starwars/images/2/2f/RicOlie-BMF47.png",
  },
  {
    id: "40",
    name: "Watto",
    img: "https://static.wikia.nocookie.net/starwars/images/e/eb/WattoHS.jpg",
  },
  {
    id: "41",
    name: "Sebulba",
    img: "https://static.wikia.nocookie.net/starwars/images/4/44/Sebulba-SWISE2010.png",
  },
  {
    id: "42",
    name: "Quarsh Panaka",
    img: "https://static.wikia.nocookie.net/starwars/images/a/a3/MoffPanaka-FFp34.png",
  },
  {
    id: "43",
    name: "Shmi Skywalker",
    img: "https://static.wikia.nocookie.net/starwars/images/1/17/Shmi_FF.png",
  },
  {
    id: "44",
    name: "Darth Maul",
    img: "https://static.wikia.nocookie.net/starwars/images/5/50/Darth_Maul_profile.png",
  },
  {
    id: "45",
    name: "Bib Fortuna",
    img: "https://static.wikia.nocookie.net/starwars/images/1/12/BibFortuna-CEUEEd.png",
  },
  {
    id: "46",
    name: "Ayla Secura",
    img: "https://static.wikia.nocookie.net/starwars/images/7/73/AaylaSecura-F102.png",
  },
  {
    id: "47",
    name: "Ratts Tyerel",
    img: "https://static.wikia.nocookie.net/starwars/images/a/a5/RattsHS-SWE.png",
  },
  {
    id: "48",
    name: "Dud Bolt",
    img: "https://static.wikia.nocookie.net/starwars/images/b/b0/Dud_Bolt.jpg",
  },
  {
    id: "49",
    name: "Gasgano",
    img: "https://static.wikia.nocookie.net/starwars/images/a/a4/GasganoHS-SWE.png",
  },
  {
    id: "50",
    name: "Ben Quadinaros",
    img: "https://static.wikia.nocookie.net/starwars/images/0/02/BenQuadinarosHS-SWE.png",
  },
  {
    id: "51",
    name: "Mace Windu",
    img: "https://static.wikia.nocookie.net/starwars/images/4/41/Mace_Windu_SWI38.png",
  },
  {
    id: "52",
    name: "Ki-Adi-Mundi",
    img: "https://static.wikia.nocookie.net/starwars/images/9/9e/KiAdiMundi.jpg",
  },
  {
    id: "53",
    name: "Kit Fisto",
    img: "https://static.wikia.nocookie.net/starwars/images/2/25/KitFisto-USWNE.png",
  },
  {
    id: "54",
    name: "Eeth Koth",
    img: "https://static.wikia.nocookie.net/starwars/images/4/4e/EethKothCardTrader.png",
  },
  {
    id: "55",
    name: "Adi Gallia",
    img: "https://static.wikia.nocookie.net/starwars/images/f/f2/AdiGallia2-SWE.png",
  },
  {
    id: "56",
    name: "Saesee Tiin",
    img: "https://static.wikia.nocookie.net/starwars/images/e/e9/SaeseeTiin-AA.png",
  },
  {
    id: "57",
    name: "Yarael Poof",
    img: "https://static.wikia.nocookie.net/starwars/images/9/96/Yarael_Poof.png",
  },
  {
    id: "58",
    name: "Plo Koon",
    img: "https://static.wikia.nocookie.net/starwars/images/c/c4/Plo_Koon_TPM.png",
  },
  {
    id: "59",
    name: "Mas Amedda",
    img: "https://static.wikia.nocookie.net/starwars/images/1/14/MasAmedda-BTAHE3.png",
  },
  {
    id: "60",
    name: "Gregar Typho",
    img: "https://static.wikia.nocookie.net/starwars/images/6/6f/GregarTypho-FF103.png",
  },
  {
    id: "61",
    name: "Cordé",
    img: "https://static.wikia.nocookie.net/starwars/images/9/95/Corde-SWCTP.png",
  },
  {
    id: "62",
    name: "Cliegg Lars",
    img: "https://static.wikia.nocookie.net/starwars/images/c/c1/ClieggLars-FF72.png",
  },
  {
    id: "63",
    name: "Poggle the Lesser",
    img: "https://static.wikia.nocookie.net/starwars/images/9/93/Poggle_the_lesser_-_sw_card_trader.png",
  },
  {
    id: "64",
    name: "Luminara Unduli",
    img: "https://static.wikia.nocookie.net/starwars/images/9/91/LuminaraUnduli-Encyclopedia.png",
  },
  {
    id: "65",
    name: "Barriss Offee",
    img: "https://static.wikia.nocookie.net/starwars/images/8/85/BarrissOffee-SWGooglePlus.png",
  },
  {
    id: "66",
    name: "Dormé",
    img: "https://static.wikia.nocookie.net/starwars/images/9/93/Dorme-CGSWG.png",
  },
  {
    id: "67",
    name: "Dooku",
    img: "https://static.wikia.nocookie.net/starwars/images/f/fa/DookuHS-SWILotS.png",
  },
  {
    id: "68",
    name: "Bail Prestor Organa",
    img: "https://static.wikia.nocookie.net/starwars/images/5/50/Bail_Organa_Mug.jpg",
  },
  {
    id: "69",
    name: "Jango Fett",
    img: "https://static.wikia.nocookie.net/starwars/images/1/1c/JangoFett-OffPix.png",
  },
  {
    id: "70",
    name: "Zam Wesell",
    img: "https://static.wikia.nocookie.net/starwars/images/9/9a/ZamWesell-FF.png",
  },
  {
    id: "71",
    name: "Dexter Jettster",
    img: "https://static.wikia.nocookie.net/starwars/images/d/d2/DexterJettster-FF54.png",
  },
  {
    id: "72",
    name: "Lama Su",
    img: "https://static.wikia.nocookie.net/starwars/images/7/73/Lama_Su.jpg",
  },
  {
    id: "73",
    name: "Taun We",
    img: "https://static.wikia.nocookie.net/starwars/images/9/9c/TaunWe.jpg",
  },
  {
    id: "74",
    name: "Jocasta Nu",
    img: "https://static.wikia.nocookie.net/starwars/images/1/17/JocastaNu-Db.png",
  },
  {
    id: "75",
    name: "R4-P17",
    img: "https://static.wikia.nocookie.net/starwars/images/5/52/R4-P17_USWNE.png",
  },
  {
    id: "76",
    name: "Wat Tambor",
    img: "https://static.wikia.nocookie.net/starwars/images/8/88/WatTambor-FF95.png",
  },
  {
    id: "77",
    name: "San Hill",
    img: "https://static.wikia.nocookie.net/starwars/images/6/63/SanHill-BaseSeries5.png",
  },
  {
    id: "78",
    name: "Shaak Ti",
    img: "https://static.wikia.nocookie.net/starwars/images/1/11/ShaakTi-OP.png",
  },
  {
    id: "79",
    name: "Grievous",
    img: "https://static.wikia.nocookie.net/starwars/images/c/ca/Grievoushead-OP.png",
  },
  {
    id: "80",
    name: "Tarfful",
    img: "https://static.wikia.nocookie.net/starwars/images/8/81/Tarfful-WiaW2015.png",
  },
  {
    id: "81",
    name: "Raymus Antilles",
    img: "https://static.wikia.nocookie.net/starwars/images/8/82/RaymusAntilles-FFp46.png",
  },
  {
    id: "82",
    name: "Sly Moore",
    img: "https://static.wikia.nocookie.net/starwars/images/b/b7/SlyMooreStare-OP.png",
  },
  {
    id: "83",
    name: "Tion Medon",
    img: "https://static.wikia.nocookie.net/starwars/images/c/c0/TionMedon-SS.png",
  },
];

export default imgUrl;
//https://starwars.fandom.com/wiki/Main_Page

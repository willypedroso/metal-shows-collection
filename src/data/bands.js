const bands = [
    {
        name: "Accept",
        path: "/accept",
        genre: "Heavy Metal",
        shows: [
            {
                band: "Accept",
                title: "Japan - 1985",
                url: "rGTc2brOkos"
            },
            {
                band: "Accept",
                title: "Wacken - 2014",
                url: "rCGX9nmnfFU"
            }
        ]
    },
    {
        name: "Angra",
        path: "/angra",
        genre: "Power Metal",
        shows: [
            {
                band: "Angra",
                title: "Monsters of Rock - 1994",
                url: "KPMKrW4jMI4"
            },
            {
                band: "Angra",
                title: "Rock Hard Festival - 1999",
                url: "06qXgQgicxY"
            },
            {
                band: "Angra",
                title: "São Paulo - 2001",
                url: "qqunX1rX_JM"
            }
        ]
    },
    {
        name: "Anthrax",
        path: "/anthrax",
        genre: "Thrash Metal",
        shows: [
            {
                band: "Anthrax",
                title: "Hammersmith - 1987",
                url: "h482wa1eHbE"
            },
            {
                band: "Anthrax",
                title: "Wacken - 2019",
                url: "QcGXJ7ZgvPk"
            },
            {
                band: "Anthrax",
                title: "Rockpalast - 2019",
                url: "J5XPIbU21io"
            }
        ]
    },
    {
        name: "Black Sabbath",
        path: "/blacksabbath",
        genre: "Heavy Metal Doom Metal",
        shows: [
            {
                band: "Black Sabbath",
                title: "Paris - 1970",
                url: "Xqjify__PWw"
            },
            {
                band: "Black Sabbath",
                title: "Hammersmith - 1978",
                url: "L6U5-CSc_7c"
            },
            {
                band: "Black Sabbath",
                title: "Donington - 2005",
                url: "D9yawWUIit0"
            },
            {
                band: "Black Sabbath",
                title: "London - 1999",
                url: "pSsuUYDYR-k"
            },
            {
                band: "Black Sabbath",
                title: "Philadelphia - 2013",
                url: "yHPNEr3CWuA"
            },
            {
                band: "Black Sabbath",
                title: "Moscow - 2016",
                url: "79yEJVk7CDE"
            }
        ]
    },
    {
        name: "Candlemass",
        path: "/candlemass",
        genre: "Doom Metal",
        shows: [
            {
                band: "Candlemass",
                title: "Fryshuset - 1990",
                url: "LIFZUPl6V0c"
            },
            {
                band: "Candlemass",
                title: "Rockpalast - 2017",
                url: "aLCSGZEjMSM"
            }
        ]
    },
    {
        name: "Cannibal Corpse",
        path: "/cannibalcorpse",
        genre: "Death Metal",
        shows: [
            {
                band: "Cannibal Corpse",
                title: "Houston - 1994",
                url: "lVVQp_-VHI4"
            },
            {
                band: "Cannibal Corpse",
                title: "Bloodstock - 2018",
                url: "AKAGz4IFYxk"
            }
        ]
    },
    {
        name: "Death",
        path: "/death",
        genre: "Death Metal",
        shows: [
            {
                band: "Death",
                title: "Philadelphia - 1988",
                url: "ArTErc-YAXs"
            },
            {
                band: "Death",
                title: "Eindhoven - 1998",
                url: "s8noWn0FqPs"
            },
        ]
    },
    {
        name: "Exodus",
        path: "/exodus",
        genre: "Thrash Metal",
        shows: [
            {
                band: "Exodus",
                title: "Wacken - 2008",
                url: "ioFC_idP_GQ"
            }
        ]
    },
    {
        name: "Helloween",
        path: "/helloween",
        genre: "Heavy Metal Power Metal",
        shows: [
            {
                band: "Helloween",
                title: "Köln - 1992",
                url: "vILAdjGmfaU"
            },
            {
                band: "Helloween",
                title: "Rock in Rio - 2019",
                url: "knXNvxAsddo"
            }
        ]
    },
    {
        name: "Iron Maiden",
        path: "/ironmaiden",
        genre: "Heavy Metal",
        shows: [
            {
                band: "Iron Maiden",
                title: "Hammersmith - 1982",
                url: "WR_zgCFkVBQ"
            },
            {
                band: "Iron Maiden",
                title: "Rock in Rio - 2001",
                url: "BXPxPV-CSBk"
            },
            {
                band: "Iron Maiden",
                title: "Rock am Ring - 2014",
                url: "qVcKRF5y7s0"
            }
        ]
    },
    {
        name: "Judas Priest",
        path: "/judaspriest",
        genre: "Heavy Metal",
        shows: [
            {
                band: "Judas Priest",
                title: "US Festival - 1983",
                url: "LyKa_tc3Xr4"
            },
            {
                band: "Judas Priest",
                title: "Rock in Rio - 1991",
                url: "i7crsfJllWo"
            },
            {
                band: "Judas Priest",
                title: "California - 1991",
                url: "K_UUD_Tc144"
            }
        ]
    },
    {
        name: "King Diamond",
        path: "/kingdiamond",
        genre: "Heavy Metal",
        shows: [
            {
                band: "King Diamond",
                title: "San Francisco - 1987",
                url: "AU-P4ksJnYk"
            }
        ]
    },
    {
        name: "Kreator",
        path: "/kreator",
        genre: "Thrash Metal",
        shows: [
            {
                band: "Kreator",
                title: "Dynamo - 1988",
                url: "t0D6yMiB_JY"
            },
            {
                band: "Kreator",
                title: "East Berlin - 1990",
                url: "3CuPIz5r0uU"
            },
            {
                band: "Kreator",
                title: "Chile - 2018",
                url: "4Ogmlw4oFo4"
            },
        ]
    },
    {
        name: "Krisiun",
        path: "/krisiun",
        genre: "Death Metal",
        shows: [
            {
                band: "Krisiun",
                title: "Rock in Rio - 2013",
                url: "yYr5W7-wlBY"
            },
            {
                band: "Krisiun",
                title: "Rockfun - 2020",
                url: "PQ6UlYOxh6M"
            },
            {
                band: "Krisiun",
                title: "Kiss Club - 2020",
                url: "QjVIhbJFulw"
            }
        ]
    },
    {
        name: "Korzus",
        path: "/korzus",
        genre: "Thrash Metal",
        shows: [
            {
                band: "Korzus",
                title: "The Marquee Club - 1992",
                url: "u7bR6sbsDDw"
            }
        ]
    },
    {
        name: "Megadeth",
        path: "/megadeth",
        genre: "Thrash Metal",
        shows: [
            {
                band: "Megadeth",
                title: "Italy - 1992",
                url: "hL-MRKUtv0M"
            },
            {
                band: "Megadeth",
                title: "Woodstock - 1999",
                url: "klNLUYhW-KI"
            }
        ]
    },
    {
        name: "Mercyful Fate",
        path: "/mercyfulfate",
        genre: "Heavy Metal",
        shows: [
            {
                band: "Mercyful Fate",
                title: "São Paulo - 1996",
                url: "Wziq6f6jgGc"
            }
        ]
    },
    {
        name: "Metallica",
        path: "/metallica",
        genre: "Thrash Metal",
        shows: [
            {
                band: "Metallica",
                title: "Metal Hammer Fest - 1985",
                url: "-Olhlc19ZeQ"
            },
            {
                band: "Metallica",
                title: "Seattle - 1989",
                url: "1DshNu26z4A"
            },
            {
                band: "Metallica",
                title: "Moscow - 1991",
                url: "C0xcvOEXqrk"
            },
            {
                band: "Metallica",
                title: "Mexico City - 1993",
                url: "cNcV30ulSXs"
            },
            {
                band: "Metallica",
                title: "Rio de Janeiro - 2011",
                url: "_zg7OpXIwAw"
            },
            {
                band: "Metallica",
                title: "Berlin - 2019",
                url: "s_hYeCZo2Nw"
            }
        ]
    },
    {
        name: "Morbid Angel",
        path: "/morbidangel",
        genre: "Death Metal",
        shows: [
            {
                band: "Morbid Angel",
                title: "Nottingham - 1989",
                url: "rTVtEgBp-dI"
            },
            {
                band: "Morbid Angel",
                title: "Roskilde Festival - 2004",
                url: "Lk_HLpznSVU"
            }
        ]
    },
    {
        name: "Motörhead",
        path: "/motorhead",
        genre: "Heavy Metal Speed Metal",
        shows: [
            {
                band: "Motörhead",
                title: "Hammersmith - 1985",
                url: "GeXGW1yXgDg"
            },
            {
                band: "Motörhead",
                title: "Buenos Aires - 1995",
                url: "Jbrok4WrVY0"
            },
            {
                band: "Motörhead",
                title: "Wacken - 2006",
                url: "8wP5WFZmB3A"
            }
        ]
    },
    {
        name: "Obituary",
        path: "/obituary",
        genre: "Death Metal",
        shows: [
            {
                band: "Obituary",
                title: "Tilburg - 1990",
                url: "UTsKWvMnwr0"
            },
            {
                band: "Obituary",
                title: "Bloodstock - 2017",
                url: "heHrSkccb3E"
            }
        ]
    },
    {
        name: "Overkill",
        path: "/overkill",
        genre: "Thrash Metal",
        shows: [
            {
                band: "Overkill",
                title: "Overhausen - 2016",
                url: "FHG_x9rvzZ4"
            }
        ]
    },
    {
        name: "Pantera",
        path: "/pantera",
        genre: "Thrash Metal",
        shows: [
            {
                band: "Pantera",
                title: "Monsters of Rock - 1992",
                url: "lVXmvEN6py4"
            }
        ]
    },
    {
        name: "Pentagram",
        path: "/pentagram",
        genre: "Doom Metal",
        shows: [
            {
                band: "Pentagram",
                title: "Rock Hard Festival - 2015",
                url: "nCouZT0_Fgc"
            },
            {
                band: "Pentagram",
                title: "Free & Easy Festival - 2022",
                url: "h8vQHLlrdmY"
            },
        ]
    },
    {
        name: "Running Wild",
        path: "/runningwild",
        genre: "Heavy Metal Power Metal Speed Metal",
        shows: [
            {
                band: "Running Wild",
                title: "Bochum - 1985",
                url: "suhLVpXUsqc"
            }
        ]
    },
    {
        name: "Sarcófago",
        path: "/sarcofago",
        genre: "Black Metal Thrash Metal Death Metal",
        shows: [
            {
                band: "Sarcófago",
                title: "Belo Horizonte - 1991",
                url: "kQcqvrTmhoo"
            }
        ]   
    },
    {
        name: "Saxon",
        path: "/saxon",
        genre: "Heavy Metal",
        shows: [
            {
                band: "Saxon",
                title: "Köln - 1990",
                url: "EEssypV6cR8"
            }
        ]   
    },
    {
        name: "Sepultura",
        path: "/sepultura",
        genre: "Thrash Metal Death Metal",
        shows: [
            {
                band: "Sepultura",
                title: "Monsters of Rock - 1994",
                url: "guwkHprgXhA"
            },
            {
                band: "Sepultura",
                title: "PinkPop - 1996",
                url: "CBwgf8NRFhI"
            }
        ]
    },
    {
        name: "Slayer",
        path: "/slayer",
        genre: "Thrash Metal Speed Metal",
        shows: [
            {
                band: "Slayer",
                title: "Donington - 1992",
                url: "MYOnUghrV9Q"
            },
            {
                band: "Slayer",
                title: "Hammersmith - 2008",
                url: "-fNmYAl4qLA"
            }
        ]
    },
    {
        name: "Sodom",
        path: "/sodom",
        genre: "Thrash Metal",
        shows: [
            {
                band: "Sodom",
                title: "Braunschweig - 1988",
                url: "FmWRkb_x5po"
            },
            {
                band: "Sodom",
                title: "Rockpalast - 2018",
                url: "DN8LM3WE5Eg"
            }
        ]
    },
    {
        name: "Tankard",
        path: "/tankard",
        genre: "Thrash Metal",
        shows: [
            {
                band: "Tankard",
                title: "Braunschweig - 1988",
                url: "sVDmMmtcW24"
            }
        ]
    },
    {
        name: "Torture Squad",
        path: "/torturesquad",
        genre: "Thrash Metal Death Metal",
        shows: [
            {
                band: "Torture Squad",
                title: "Led Slay - 2003",
                url: "4BaVp-MItpY"
            },
            {
                band: "Torture Squad",
                title: "Showlivre - 2018",
                url: "6FdZaKkWIag"
            }
        ]
    },
    {
        name: "Venom",
        path: "/venom",
        genre: "Heavy Metal Black Metal",
        shows: [
            {
                band: "Venom",
                title: "Hammersmith - 1985",
                url: "jtwRLpYcVsA"
            },
            {
                band: "Venom",
                title: "Dynamo Open Air - 1996",
                url: "9JtJ8GdNXLc"
            }
        ]
    },
];

export default bands;
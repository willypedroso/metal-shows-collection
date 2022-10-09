const bands = [
    {
        name: "Anthrax",
        path: "/anthrax",
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
            }]
    },
    {
        name: "Black Sabbath",
        path: "/blacksabbath",
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
                title: "Moscow - 2016",
                url: "79yEJVk7CDE"
            }
        ]
    },
    {
        name: "Cannibal Corpse",
        path: "/cannibalcorpse",
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
        name: "Helloween",
        path: "/helloween",
        shows: [
            {
                band: "Helloween",
                title: "Köln - 1992",
                url: "vILAdjGmfaU"
            }
        ]
    },
    {
        name: "Iron Maiden",
        path: "/ironmaiden",
        shows: [
            {
                band: "Iron Maiden",
                title: "Hammersmith - 1982",
                url: "ZfU_zLWsh6I"
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
        shows: [
            {
                band: "Judas Priest",
                title: "US Festival - 1983",
                url: "VIko-mZ2tUU"
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
        name: "Kreator",
        path: "/kreator",
        shows: [
            {
                band: "Kreator",
                title: "East Berlin - 1990",
                url: "3CuPIz5r0uU"
            }
        ]
    },
    {
        name: "Krisiun",
        path: "/krisiun",
        shows: [
            {
                band: "Krisiun",
                title: "Rockfun - 2020",
                url: "PQ6UlYOxh6M"
            },
            {
                band: "Krisiun",
                title: "Kiss Club - 2020",
                url: "QjVIhbJFulw"
            },
            {
                band: "Krisiun",
                title: "Rock in Rio - 2013",
                url: "yYr5W7-wlBY"
            }
        ]
    },
    {
        name: "Metallica",
        path: "/metallica",
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
        name: "Motörhead",
        path: "/motorhead",
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
        shows: [
            {
                band: "Obituary",
                title: "Bloodstock - 2017",
                url: "heHrSkccb3E"
            }
        ]
    },
    {
        name: "Running Wild",
        path: "/runningwild",
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
        shows: [
            {
                band: "Sarcófago",
                title: "Belo Horizonte - 1991",
                url: "kQcqvrTmhoo"
            }
        ]   
    },
    {
        name: "Sepultura",
        path: "/sepultura",
        shows: [
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
        shows: [
            {
                band: "Slayer",
                title: "Donington - 1992",
                url: "MYOnUghrV9Q"
            }
        ]
    },
    {
        name: "Venom",
        path: "/venom",
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
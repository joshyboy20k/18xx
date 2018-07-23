const game = {
  // Generic Game Info
  info: {
    title: "Harzbahn 1873",
    abbrev: "1873",
    subtitle: "Mining and Railways in the Harz Mountains",
    designer: "Klaus Kiermeier",
    background: "brown",
    titleSize: 108,
    subTitleSize: 28,
    width: 150
  },

  // Extra Tokens
  tokens: ["Round"],

  // Need an IPO sheet
  ipo: false,

  players: [
    {
      number: 2,
      capital: "2100M"
    },
    {
      number: 3,
      capital: "1400M"
    },
    {
      number: 4,
      capital: "1050M"
    },
    {
      number: 5,
      capital: "840M"
    }
  ],

  // Railway Companies
  companies: [
    {
      name: "Pennsylvania",
      abbrev: "PRR",
      tokens: ["Free", "$40", "$100", "$100"],
      color: "darkGreen",
      shares: [
        {
          quantity: 1,
          label: "President Share",
          percent: 20,
          shares: 2
        },
        {
          quantity: 8,
          percent: 10,
          shares: 1
        }
      ]
    },
    {
      name: "New York Central",
      abbrev: "NYC",
      tokens: ["Free", "$40", "$100", "$100"],
      color: "black",
      shares: [
        {
          quantity: 1,
          label: "President Share",
          percent: 20,
          shares: 2
        },
        {
          quantity: 8,
          percent: 10,
          shares: 1
        }
      ]
    },
    {
      name: "Canadian Pacific",
      abbrev: "CPR",
      tokens: ["Free", "$40", "$100", "$100"],
      color: "red",
      shares: [
        {
          quantity: 1,
          label: "President Share",
          percent: 20,
          shares: 2
        },
        {
          quantity: 8,
          percent: 10,
          shares: 1
        }
      ]
    },
    {
      name: "Baltimore & Ohio",
      abbrev: "B&O",
      tokens: ["Free", "$40", "$100"],
      color: "blue",
      shares: [
        {
          quantity: 1,
          label: "President Share",
          percent: 20,
          shares: 2
        },
        {
          quantity: 8,
          percent: 10,
          shares: 1
        }
      ]
    },
    {
      name: "Chesapeake & Ohio",
      abbrev: "C&O",
      tokens: ["Free", "$40", "$100"],
      color: "cyan",
      shares: [
        {
          quantity: 1,
          label: "President Share",
          percent: 20,
          shares: 2
        },
        {
          quantity: 8,
          percent: 10,
          shares: 1
        }
      ]
    },
    {
      name: "Erie",
      abbrev: "ERIE",
      tokens: ["Free", "$40", "$100"],
      color: "yellow",
      shares: [
        {
          quantity: 1,
          label: "President Share",
          percent: 20,
          shares: 2
        },
        {
          quantity: 8,
          percent: 10,
          shares: 1
        }
      ]
    },
    {
      name: "New York, New Haven & Hartford",
      abbrev: "NYNH",
      tokens: ["Free", "$40"],
      color: "orange",
      shares: [
        {
          quantity: 1,
          label: "President Share",
          percent: 20,
          shares: 2
        },
        {
          quantity: 8,
          percent: 10,
          shares: 1
        }
      ]
    },
    {
      name: "Boston & Maine",
      abbrev: "B&M",
      tokens: ["Free", "$40"],
      color: "maroon",
      shares: [
        {
          quantity: 1,
          label: "President Share",
          percent: 20,
          shares: 2
        },
        {
          quantity: 8,
          percent: 10,
          shares: 1
        }
      ]
    }
  ],

  trains: [
    {
      name: "2",
      quantity: 6,
      price: "$80",
      color: "yellow",
      info: [
        {
          color: "green",
          note: "Rusted by 4"
        }
      ]
    },
    {
      name: "3",
      quantity: 5,
      price: "$180",
      color: "green",
      info: [
        {
          color: "brown",
          note: "Rusted by 6"
        }
      ]
    },
    {
      name: "4",
      quantity: 4,
      price: "$300",
      color: "green",
      info: [
        {
          color: "brown",
          note: "Rusted by D"
        }
      ]
    },
    {
      name: "5",
      quantity: 3,
      price: "$450",
      color: "brown",
      info: [
        {
          color: "yellow",
          note: "Permanent"
        }
      ]
    },
    {
      name: "6",
      quantity: 2,
      price: "$630",
      color: "brown",
      info: [
        {
          color: "yellow",
          note: "Permanent"
        }
      ]
    },
    {
      name: "D",
      quantity: 6,
      price: "$1100",
      color: "brown",
      description: "Cost $800 when trading in a 4T, 5T or 6T",
      info: [
        {
          color: "yellow",
          note: "Permanent"
        }
      ]
    }
  ],

  privates: [
    {
      name: "Schuylkill Valley",
      price: "$20",
      revenue: "$5",
      description: ""
    },
    {
      name: "Champlain & St.Lawrence",
      price: "$40",
      revenue: "$10",
      description:
        "A corporation owning the C&StL may lay a tile on the C&StL's hex even if this hex is not connected to the corporations's railhead. This free tile placement is in addition to the corporation's normal tile placement - for this turn only the corporation may play two tiles. The tile played on the C&StL hex does not have to connect to any existing adjacent track."
    },
    {
      name: "Delaware & Hudson",
      price: "$70",
      revenue: "$15",
      description:
        "A corporation owning the Delaware & Hudson may establish a railhead on the D&H hex by laying a station tile and a token. The station does not have to be connected to the remainder of the corporation's route. The tile laid is the owning corporation's one tile placement for the turn. Removal of the mountain costs $120 as usual but there is no charge for laying the token. Placing the token is not required, but if placed in a future turn, it must be paid for. Other corporations may place a tile here subject to the ordinary rules."
    },
    {
      name: "Mohawk & Hudson",
      price: "$110",
      revenue: "$20",
      description:
        "A player owning the M&H may exhange it for a 10% share of the NYC provided he does not already hold 60% of the NYC stock and there is NYC stock available in the Bank or the Pool. The exchange may be made during the player's turn of a stock round or between the turns of other players or corporations in either stock or operating rounds. This action closes the M&H."
    },
    {
      name: "Camden & Amboy",
      price: "$160",
      revenue: "$25",
      description:
        "The initial purchaser of the C&A immediately receives a 10% share of PRR stock without further payment. This action does not close the C&A. The PRR corporation will not be running at this point, but the stock may be retained or sold subject to the ordinary rules of the game."
    },
    {
      name: "Baltimore & Ohio",
      price: "$220",
      revenue: "$30",
      description:
        "The owner of the B&O private company immediately receives the President's certificate of the B&O corporation without further payment. The B&O private company may not be sold to any corporation, and does not exchange hands if the owning player loses the Presidency of the B&O corporation. When the B&O corporation purchases its first train the private company is closed down."
    }
  ],

  phases: [
    {
      name: "2",
      limit: "4",
      number: "6",
      tiles: "yellow"
    },
    {
      name: "3",
      limit: "4",
      number: "5",
      tiles: "green",
      notes: "Private companies may be purchased"
    },
    {
      name: "4",
      rust: "2",
      limit: "3",
      number: "4",
      tiles: "green"
    },
    {
      name: "5",
      limit: "2",
      number: "3",
      tiles: "brown",
      notes: "Private companies are closed"
    },
    {
      name: "6",
      limit: "2",
      number: "2",
      rust: "3",
      tiles: "brown",
      notes: "D Trains may be purchased"
    },
    {
      name: "D",
      limit: "2",
      number: "6",
      rust: "4",
      tiles: "brown"
    }
  ],

  pools: [
    {
      name: "Market",
      notes: [
        {
          color: "orange",
          note: "Shares in the market pay dividends to the company"
        },
        {
          color: "brown",
          icon: "exclamation",
          note: "No more than 50% of a company may be in the market"
        },
        {
          color: "red",
          icon: "times",
          note: "No stock sales during first stock round"
        }
      ]
    }
  ],

  rounds: [
    {
      name: "OR3",
      color: "brown"
    },
    {
      name: "OR2",
      color: "green"
    },
    {
      name: "OR1",
      color: "yellow"
    },
    {
      name: "SR",
      color: "gray"
    }
  ],

  turns: [
    {
      name: "Stock Round",
      steps: [
        "Sell any number of shares",
        "Buy one share",
        "Sell any number of shares"
      ],
      ordered: true
    },
    {
      name: "Operating Round",
      steps: [
        "Lay or upgrade track",
        "Purchase a station",
        "Run trains",
        "Pay dividends or withhold revenue",
        "Purchase trains"
      ],
      ordered: true
    }
  ],

  stock: {
    type: "1D",
    market: [
      50,
      70,
      85,
      100,
      110,
      120,
      130,
      140,
      150,
      160,
      170,
      180,
      190,
      200,
      220,
      240,
      260,
      280,
      300,
      330,
      360,
      390,
      420,
      450,
      490,
      530,
      570,
      610,
      650,
      700,
      750,
      800,
      850,
      900,
      950,
      1000
    ]
  },

  tiles: {
    // Yellow
    "75": 4,
    "76": 7,
    "956": 10,
    "77": 2,
    "78": 10,
    "79": 4,
    // Green
    "100": 4,
    "101": 1,
    "957": 2,
    "958": 2,
    "959": 1,
    "960": 2,
    "961": 2,
    "962": 6,
    "963": 6,
    "964": 1,
    "965": 1,
    "966": 1,
    "967": 1,
    "968": 2,
    "969": 2,
    "970": 1,
    "971": 2,
    "972": 3,
    "973": 1,
    "974": 1,
    // Brown
    "975": 4,
    "976": 6,
    "977": 5,
    "978": 2,
    "979": 2,
    "980": 2,
    "985": 2,
    "986": 1,
    "987": 2,
    // Gray
    "988": 3,
    "989": 2,
    "990": 1
  },

  map: {
    print: "landscape",
    hexes: [
      {
        color: "plain",
        hexes: ["C18"]
      },
      {
        color: "gray",
        cities: [
          {
            size: 2,
            companies: [
              {
                label: "NWE",
                color: "darkGreen"
              },
              {
                label: "WBE",
                color: "gray"
              }
            ],
            name: {
              name: "Wernigerode"
            }
          }
        ],
        track: [
          {
            side: 1
          },
          {
            side: 4
          },
          {
            side: 5,
            gauge: "narrow"
          },
          {
            side: 6,
            gauge: "narrow"
          }
        ],
        offBoardRevenue: {
          percent: 0.5,
          revenues: [
            {
              color: "yellow",
              cost: "60"
            },
            {
              color: "green",
              cost: "80"
            },
            {
              color: "brown",
              cost: "120"
            },
            {
              color: "gray",
              cost: "150"
            }
          ]
        },
        hexes: ["B9"]
      },
      {
        color: "gray",
        cities: [
          {
            size: 2,
            name: {
              name: "Derenburg"
            }
          }
        ],
        track: [
          {
            side: 4,
            gauge: "narrow"
          },
          {
            side: 5,
            gauge: "narrow"
          }
        ],
        offBoardRevenue: {
          percent: 0.5,
          revenues: [
            {
              color: "yellow",
              cost: "30"
            },
            {
              color: "green",
              cost: "70"
            },
            {
              color: "brown",
              cost: "60"
            },
            {
              color: "gray",
              cost: "60"
            }
          ]
        },
        hexes: ["B13"]
      },
      {
        color: "plain",
        mountain: {
          size: "small",
          cost: "50M"
        },
        hexes: ["B15"]
      },
      {
        color: "plain",
        track: [
          {
            type: "gentle",
            side: 4,
            gauge: "line"
          }
        ],
        hexes: ["B17"]
      },
      {
        color: "green",
        track: [
          {
            side: 1,
            gauge: "narrow"
          },
          {
            side: 2
          },
          {
            side: 5
          }
        ],
        cities: [
          {
            companies: [
              {
                label: "HBE",
                color: "red"
              }
            ],
            name: {
              name: "Halberstadt",
              offset: 66.67
            }
          }
        ],
        values: [
          {
            value: 60,
            angle: 240,
            percent: 0.8
          }
        ],
        labels: [
          {
            label: "HQG",
            angle: 30,
            percent: 0.667
          }
        ],
        hexes: ["B19"]
      },
      {
        color: "gray",
        cities: [
          {
            name: {
              name: "Brocken",
              reverse: true,
              offset: 33.33
            }
          }
        ],
        track: [
          {
            side: 5,
            gauge: "narrow"
          }
        ],
        offBoardRevenue: {
          angle: 180,
          percent: 0.5,
          revenues: [
            {
              color: "yellow",
              cost: "50"
            },
            {
              color: "green",
              cost: "80"
            },
            {
              color: "brown",
              cost: "120"
            },
            {
              color: "gray",
              cost: "150"
            }
          ]
        },
        hexes: ["C4"]
      },
      {
        color: "gray",
        values: [
          {
            value: 0,
            angle: 90,
            percent: 0.667
          }
        ],
        centerTowns: [
          {
            name: {
              name: "Knaupsholz"
            }
          }
        ],
        track: [
          {
            side: 6,
            gauge: "narrow"
          }
        ],
        hexes: ["C6"]
      },
      {
        color: "plain",
        mountain: {
          size: "medium",
          cost: "150M",
          angle: 300,
          percent: 0.5
        },
        track: [
          {
            type: "straight",
            side: 3,
            gauge: "line"
          }
        ],
        borders: [
          {
            side: 5,
            color: "red"
          }
        ],
        hexes: ["C8"]
      },
      {
        color: "brown",
        track: [
          {
            type: "gentle",
            side: 2,
            gauge: "line"
          }
        ],
        borders: [
          {
            side: 6,
            color: "red"
          },
          {
            side: 5,
            color: "mountain"
          }
        ],
        hexes: ["C10"]
      },
      {
        color: "brown",
        centerTowns: [
          {
            name: {
              name: "Benzingerode"
            }
          }
        ],
        track: [
          {
            type: "straight",
            gauge: "line"
          }
        ],
        borders: [
          {
            side: 5,
            color: "mountain"
          },
          {
            side: 6,
            color: "mountain"
          }
        ],
        hexes: ["C12"]
      },
      {
        color: "brown",
        centerTowns: [
          {
            angle: 30,
            percent: 0.28,
            name: {
              name: "Heimburg",
              rotation: 30
            }
          }
        ],
        track: [
          {
            side: 5,
            type: "gentle",
            gauge: "line"
          }
        ],
        borders: [
          {
            side: 5,
            color: "red"
          },
          {
            side: 6,
            color: "mountain"
          }
        ],
        hexes: ["C14"]
      },
      {
        color: "green",
        values: [
          {
            value: 30,
            angle: 90,
            percent: 0.667
          }
        ],
        cities: [
          {
            name: {
              name: "Langenstein",
              reverse: true,
              offset: 66.67
            }
          }
        ],
        borders: [
          {
            side: 6,
            color: "red"
          }
        ],
        track: [
          {
            gauge: "narrow",
            side: 2
          },
          {
            gauge: "narrow",
            side: 3
          },
          {
            gauge: "narrow",
            side: 6
          }
        ],
        hexes: ["C16"]
      },
      {
        color: "gray",
        track: [
          {
            type: "straight",
            side: 2
          }
        ],
        hexes: ["C20"]
      },
      {
        color: "plain",
        centerTowns: [
          {
            name: {
              name: "Schierke",
              reverse: true
            },
            angle: 150,
            percent: 0.5
          }
        ],
        borders: [
          {
            side: 6,
            color: "mountain"
          }
        ],
        mountain: {
          size: "medium",
          cost: "150M",
          angle: 300,
          percent: 0.5
        },
        hexes: ["D5"]
      },
      {
        color: "plain",
        centerTowns: [
          {
            name: {
              name: "Drei Annen Hohne",
              rotation: -60
            }
          }
        ],
        track: [
          {
            side: 3,
            type: "straight",
            gauge: "line"
          }
        ],
        mountain: {
          size: "medium",
          cost: "150M",
          angle: 300,
          percent: 0.5
        },
        borders: [
          {
            side: 4,
            color: "red"
          }
        ],
        hexes: ["D7"]
      },
      {
        color: "yellow",
        mountain: {
          cost: "50",
          angle: 180,
          border: true,
          percent: 0.7
        },
        cities: [
          {
            name: {
              name: "Elbingerode",
              reverse: true,
              offset: 33.33
            }
          }
        ],
        values: [
          {
            angle: 270,
            percent: 0.6,
            value: 30
          }
        ],
        track: [
          {
            side: 5,
            gauge: "narrow"
          }
        ],
        borders: [
          {
            side: 1,
            color: "red"
          },
          {
            side: 2,
            color: "red"
          },
          {
            side: 3,
            color: "red"
          },
          {
            side: 5,
            color: "red"
          },
          {
            side: 6,
            color: "red"
          },
          {
            side: 4,
            color: "mountain"
          }
        ],
        hexes: ["D9"]
      },
      {
        color: "plain",
        centerTowns: [
          {
            name: {
              name: "Hüttenrode",
              reverse: true
            },
            angle: 150,
            percent: 0.5
          }
        ],
        mountain: {
          size: "medium",
          cost: "100M",
          angle: 300,
          percent: 0.5
        },
        borders: [
          {
            side: 1,
            color: "mountain"
          },
          {
            side: 2,
            color: "mountain"
          },
          {
            side: 3,
            color: "mountain"
          }
        ],
        hexes: ["D11"]
      },
      {
        copy: "D11",
        centerTowns: [
          {
            name: {
              name: "Braunesurnpf"
            }
          }
        ],
        mountain: {
          cost: "150M"
        },
        borders: [
          {
            side: 4,
            color: "red"
          },
          {
            side: 2,
            color: "mountain"
          },
          {
            side: 3,
            color: "mountain"
          }
        ],
        hexes: ["D13"]
      },
      {
        color: "yellow",
        values: [
          {
            value: 40,
            percent: 0.75
          }
        ],
        labels: [
          {
            label: "B",
            angle: 180,
            percent: 0.667
          }
        ],
        track: [
          {
            side: 1,
            gauge: "narrow"
          },
          {
            side: 2,
            gauge: "line"
          },
          {
            side: 3,
            gauge: "narrow"
          },
          {
            side: 5,
            gauge: "narrow"
          }
        ],
        cities: [
          {
            size: 2,
            companies: [
              {
                color: "gray",
                label: "WBE"
              },
              {
                color: "red",
                label: "HBE"
              }
            ],
            name: {
              name: "Blankenburg",
              reverse: true,
              offset: 40
            }
          }
        ],
        borders: [
          {
            side: 1,
            color: "red"
          },
          {
            side: 2,
            color: "red"
          },
          {
            side: 3,
            color: "red"
          },
          {
            side: 4,
            color: "red"
          },
          {
            side: 5,
            color: "red"
          },
          {
            side: 6,
            color: "red"
          }
        ],
        hexes: ["D15"]
      },
      {
        color: "plain",
        centerTowns: [
          {
            name: {
              name: "Westerhausen"
            }
          }
        ],
        borders: [
          {
            side: 1,
            color: "red"
          }
        ],
        hexes: ["D17"]
      },
      {
        color: "plain",
        borders: [
          {
            side: 5,
            color: "red"
          }
        ],
        hexes: ["D19"]
      },
      {
        color: "gray",
        track: [
          {
            type: "gentle",
            side: 6
          }
        ],
        borders: [
          {
            side: 6,
            color: "red"
          }
        ],
        hexes: ["D21"]
      },
      {
        color: "yellow",
        borders: [
          {
            side: 3,
            color: "mountain"
          },
          {
            side: 1,
            color: "red"
          },
          {
            side: 2,
            color: "red"
          },
          {
            side: 4,
            color: "red"
          },
          {
            side: 5,
            color: "red"
          },
          {
            side: 6,
            color: "red"
          }
        ],
        values: [
          {
            value: 30,
            angle: 60,
            percent: 0.7
          }
        ],
        mountain: {
          cost: "50",
          size: "small",
          border: true,
          angle: 300,
          percent: 0.667
        },
        cities: [
          {
            name: {
              name: "Braunlage / Wurmberg"
            },
            companies: [
              {
                label: "SHE",
                color: "yellow"
              }
            ]
          }
        ],
        track: [
          {
            side: 6,
            gauge: "narrow"
          }
        ],
        hexes: ["E4"]
      },
      {
        color: "plain",
        centerTowns: [
          {
            name: {
              name: "Elend",
              rotation: -60
            }
          }
        ],
        track: [
          {
            side: 3,
            type: "straight",
            gauge: "line"
          }
        ],
        mountain: {
          size: "small",
          cost: "50M",
          angle: 300,
          percent: 0.5
        },
        borders: [
          {
            side: 1,
            color: "red"
          }
        ],
        hexes: ["E6"]
      },
      {
        color: "plain",
        centerTowns: [
          {
            name: {
              name: "Kõnigshütte",
              reverse: true
            },
            angle: 150,
            percent: 0.5
          }
        ],
        borders: [
          {
            side: 3,
            color: "red"
          },
          {
            side: 4,
            color: "mountain"
          }
        ],
        mountain: {
          size: "medium",
          cost: "100M",
          angle: 300,
          percent: 0.5
        },
        hexes: ["E8"]
      },
      {
        color: "plain",
        centerTowns: [
          {
            name: {
              name: "Rübeland",
              reverse: true
            },
            angle: 150,
            percent: 0.5
          }
        ],
        borders: [
          {
            side: 2,
            color: "red"
          },
          {
            side: 5,
            color: "red"
          },
          {
            side: 1,
            color: "mountain"
          },
          {
            side: 4,
            color: "mountain"
          }
        ],
        mountain: {
          size: "medium",
          cost: "100M",
          angle: 300,
          percent: 0.5
        },
        hexes: ["E10"]
      },
      {
        color: "plain",
        borders: [
          {
            side: 6,
            color: "red"
          },
          {
            side: 1,
            color: "mountain"
          }
        ],
        mountain: {
          size: "medium",
          cost: "100M"
        },
        hexes: ["E12"]
      },
      {
        color: "plain",
        borders: [
          {
            side: 3,
            color: "red"
          },
          {
            side: 5,
            color: "red"
          }
        ],
        mountain: {
          size: "medium",
          cost: "150M"
        },
        hexes: ["E14"]
      },
      {
        color: "plain",
        centerTowns: [
          {
            name: {
              name: "Timmenrode",
              reverse: true
            },
            angle: 150,
            percent: 0.5
          }
        ],
        borders: [
          {
            side: 2,
            color: "red"
          },
          {
            side: 6,
            color: "red"
          }
        ],
        mountain: {
          size: "small",
          cost: "50M",
          angle: 300,
          percent: 0.5
        },
        hexes: ["E16"]
      },
      {
        color: "gray",
        cities: [
          {
            size: 2,
            name: {
              name: "Weddersleben",
              reverse: true
            }
          }
        ],
        values: [
          {
            value: 30,
            angle: 210,
            percent: 0.725
          }
        ],
        borders: [
          {
            side: 4,
            color: "red"
          }
        ],
        track: [
          {
            side: 1,
            gauge: "narrow"
          },
          {
            side: 2,
            gauge: "narrow"
          },
          {
            side: 4,
            gauge: "narrow"
          }
        ],
        hexes: ["E18"]
      },
      {
        color: "green",
        values: [
          {
            value: 60,
            angle: 300,
            percent: 0.75
          }
        ],
        borders: [
          {
            side: 1,
            color: "red"
          },
          {
            side: 2,
            color: "red"
          },
          {
            side: 3,
            color: "red"
          },
          {
            side: 4,
            color: "red"
          },
          {
            side: 5,
            color: "red"
          },
          {
            side: 6,
            color: "red"
          }
        ],
        labels: [
          {
            label: "HQG",
            angle: 150,
            percent: 0.65
          }
        ],
        cities: [
          {
            companies: [
              {
                label: "QLB",
                color: "orange"
              }
            ],
            name: {
              name: "Quedlinburg",
              reverse: true,
              offset: 66.67
            }
          }
        ],
        track: [
          {
            side: 3
          },
          {
            side: 6
          },
          {
            side: 1,
            gauge: "narrow"
          }
        ],
        hexes: ["E20"]
      },
      {
        color: "plain",
        centerTowns: [
          {
            name: {
              name: "Brunnenbachsmühle",
              rotation: -60
            }
          }
        ],
        track: [
          {
            side: 3,
            type: "straight",
            gauge: "line"
          }
        ],
        mountain: {
          size: "medium",
          cost: "150M",
          angle: 300,
          percent: 0.5
        },
        borders: [
          {
            side: 3,
            color: "red"
          },
          {
            side: 5,
            color: "red"
          }
        ],
        hexes: ["F3"]
      },
      {
        color: "green",
        values: [
          {
            value: 20,
            angle: 150,
            percent: 0.667
          }
        ],
        mountain: {
          angle: 5,
          percent: 0.6,
          border: true,
          size: "small",
          cost: "50"
        },
        cities: [
          {
            angle: 90,
            percent: 0.5,
            name: {
              name: "Sorge",
              reverse: true
            }
          },
          {
            angle: 210,
            percent: 0.6
          }
        ],
        borders: [
          {
            side: 2,
            color: "red"
          },
          {
            side: 5,
            color: "red"
          },
          {
            side: 6,
            color: "mountain"
          }
        ],
        track: [
          {
            side: 1,
            type: "straight",
            gauge: "narrow",
            cross: "over"
          },
          {
            side: 3,
            type: "gentle",
            gauge: "narrow",
            cross: "under"
          }
        ],
        hexes: ["F5"]
      },
      {
        color: "green",
        values: [
          {
            value: 20,
            angle: -30,
            percent: 0.1
          }
        ],
        mountain: {
          angle: -30,
          percent: 0.6,
          size: "small",
          border: true,
          cost: "50"
        },
        borders: [
          {
            side: 6,
            color: "red"
          }
        ],
        cities: [
          {
            angle: 90,
            percent: 0.6
          },
          {
            angle: 210,
            percent: 0.6,
            name: {
              name: "Tanne",
              reverse: true,
              offset: 60
            }
          }
        ],
        track: [
          {
            type: "stop",
            gauge: "narrow",
            side: 1
          },
          {
            type: "stop",
            gauge: "narrow",
            side: 3
          }
        ],
        hexes: ["F7"]
      },
      {
        color: "plain",
        centerTowns: [
          {
            name: {
              name: "Trautenstein",
              reverse: true
            },
            angle: 150,
            percent: 0.5
          }
        ],
        borders: [
          {
            side: 4,
            color: "red"
          }
        ],
        mountain: {
          size: "medium",
          cost: "100M",
          angle: 300,
          percent: 0.5
        },
        hexes: ["F9"]
      },
      {
        color: "yellow",
        cities: [
          {
            name: {
              name: "Hasselfeld",
              reverse: true,
              offset: 33.33
            }
          }
        ],
        track: [
          {
            side: 5,
            gauge: "narrow"
          }
        ],
        borders: [
          {
            side: 1,
            color: "red"
          },
          {
            side: 2,
            color: "red"
          },
          {
            side: 3,
            color: "red"
          },
          {
            side: 4,
            color: "red"
          },
          {
            side: 5,
            color: "red"
          },
          {
            side: 6,
            color: "red"
          }
        ],
        values: [
          {
            value: 30,
            angle: 270,
            percent: 0.625
          }
        ],
        mountain: {
          angle: 180,
          percent: 0.75,
          cost: "50",
          size: "small",
          border: true
        },
        hexes: ["F11"]
      },
      {
        color: "gray",
        borders: [
          {
            side: 1,
            color: "red"
          },
          {
            side: 4,
            color: "red"
          }
        ],
        hexes: ["F13"]
      },
      {
        color: "gray",
        cities: [
          {
            name: {
              name: "Thale",
              offset: 40
            }
          }
        ],
        track: [
          {
            side: 3,
            gauge: "narrow"
          },
          {
            side: 4
          }
        ],
        borders: [
          {
            side: 1,
            color: "red"
          },
          {
            side: 2,
            color: "red"
          },
          {
            side: 3,
            color: "red"
          },
          {
            side: 4,
            color: "red"
          },
          {
            side: 5,
            color: "red"
          },
          {
            side: 6,
            color: "red"
          }
        ],
        offBoardRevenue: {
          percent: 0.5,
          revenues: [
            {
              color: "yellow",
              cost: "30"
            },
            {
              color: "green",
              cost: "40"
            },
            {
              color: "brown",
              cost: "60"
            },
            {
              color: "gray",
              cost: "70"
            }
          ]
        },
        hexes: ["F15"]
      },
      {
        color: "gray",
        borders: [
          {
            side: 1,
            color: "red"
          }
        ],
        track: [
          {
            side: 1,
            type: "straight"
          }
        ],
        hexes: ["F17"]
      },
      {
        color: "gray",
        borders: [
          {
            side: 3,
            color: "red"
          }
        ],
        track: [
          {
            side: 1,
            type: "gentle"
          },
          {
            side: 3,
            type: "gentle"
          }
        ],
        hexes: ["F19"]
      },
      {
        color: "plain",
        centerTowns: [
          {
            name: {
              name: "Wieda",
              rotation: -60
            }
          }
        ],
        track: [
          {
            side: 3,
            type: "straight",
            gauge: "line"
          }
        ],
        mountain: {
          size: "medium",
          cost: "150M",
          angle: 300,
          percent: 0.5
        },
        borders: [
          {
            side: 4,
            color: "mountain"
          },
          {
            side: 5,
            color: "mountain"
          }
        ],
        hexes: ["G2"]
      },
      {
        color: "yellow",
        cities: [
          {
            name: {
              name: "Zorge"
            },
            companies: [
              {
                label: "KEZ",
                color: "maroon"
              }
            ]
          }
        ],
        values: [
          {
            value: 30,
            angle: 90,
            percent: 0.667
          }
        ],
        mountain: {
          cost: "50M",
          size: "small",
          angle: 300,
          percent: 0.6
        },
        track: [
          {
            side: 6,
            gauge: "narrow"
          }
        ],
        borders: [
          {
            side: 2,
            color: "red"
          },
          {
            side: 4,
            color: "red"
          },
          {
            side: 5,
            color: "red"
          },
          {
            side: 6,
            color: "red"
          },
          {
            side: 1,
            color: "mountain"
          },
          {
            side: 3,
            color: "mountain"
          }
        ],
        hexes: ["G4"]
      },
      {
        color: "green",
        values: [
          {
            value: 40,
            angle: 60,
            percent: 0.667
          }
        ],
        track: [
          {
            side: 2,
            gauge: "narrow"
          },
          {
            side: 5,
            gauge: "narrow"
          }
        ],
        cities: [
          {
            companies: [
              {
                label: "NWE",
                color: "darkGreen"
              }
            ],
            name: {
              name: "Benneckenstein",
              offset: 66.67
            }
          }
        ],
        borders: [
          {
            side: 1,
            color: "red"
          },
          {
            side: 2,
            color: "red"
          },
          {
            side: 3,
            color: "red"
          },
          {
            side: 4,
            color: "red"
          },
          {
            side: 5,
            color: "red"
          },
          {
            side: 6,
            color: "red"
          }
        ],
        hexes: ["G6"]
      },
      {
        color: "plain",
        mountain: {
          cost: "100M",
          size: "medium"
        },
        borders: [
          {
            side: 1,
            color: "red"
          }
        ],
        hexes: ["G8"]
      },
      {
        color: "plain",
        mountain: {
          cost: "150M",
          size: "medium"
        },
        borders: [
          {
            side: 3,
            color: "red"
          }
        ],
        hexes: ["G10"]
      },
      {
        color: "plain",
        centerTowns: [
          {
            name: {
              name: "Stiege",
              reverse: true
            },
            angle: 150,
            percent: 0.5
          }
        ],
        borders: [
          {
            side: 2,
            color: "red"
          },
          {
            side: 5,
            color: "red"
          }
        ],
        mountain: {
          size: "size",
          cost: "50M",
          angle: 300,
          percent: 0.5
        },
        hexes: ["G12"]
      },
      {
        color: "plain",
        centerTowns: [
          {
            name: {
              name: "Allrode",
              reverse: true
            },
            angle: 150,
            percent: 0.5
          }
        ],
        borders: [
          {
            side: 3,
            color: "red"
          },
          {
            side: 6,
            color: "red"
          }
        ],
        mountain: {
          size: "size",
          cost: "50M",
          angle: 300,
          percent: 0.5
        },
        hexes: ["G14"]
      },
      {
        color: "plain",
        centerTowns: [
          {
            name: {
              name: "Friedrichsbrunn",
              reverse: true
            },
            angle: 150,
            percent: 0.5
          }
        ],
        borders: [
          {
            side: 2,
            color: "red"
          }
        ],
        mountain: {
          size: "medium",
          cost: "100M",
          angle: 300,
          percent: 0.5
        },
        hexes: ["G16"]
      },
      {
        color: "plain",
        borders: [
          {
            side: 4,
            color: "red"
          }
        ],
        mountain: {
          size: "medium",
          cost: "150M"
        },
        hexes: ["G18"]
      },
      {
        color: "green",
        values: [
          {
            value: 60,
            angle: 90,
            percent: 0.625
          }
        ],
        borders: [
          {
            side: 1,
            color: "red"
          },
          {
            side: 2,
            color: "red"
          },
          {
            side: 3,
            color: "red"
          },
          {
            side: 4,
            color: "red"
          },
          {
            side: 5,
            color: "red"
          },
          {
            side: 6,
            color: "red"
          }
        ],
        labels: [
          {
            label: "HQG",
            angle: 195,
            percent: 0.7
          }
        ],
        cities: [
          {
            companies: [
              {
                label: "GHE",
                color: "blue"
              }
            ],
            name: {
              name: "Gernrode",
              offset: 66.67
            }
          }
        ],
        track: [
          {
            side: 2
          },
          {
            side: 5
          },
          {
            side: 6,
            gauge: "narrow"
          }
        ],
        hexes: ["G20"]
      },
      {
        color: "gray",
        track: [
          {
            type: "gentle",
            side: 3,
            gauge: "narrow"
          }
        ],
        hexes: ["H1"]
      },
      {
        color: "plain",
        borders: [
          {
            side: 3,
            color: "red"
          },
          {
            side: 5,
            color: "red"
          },
          {
            side: 6,
            color: "red"
          },
          {
            side: 2,
            color: "mountain"
          }
        ],
        mountain: {
          size: "medium",
          cost: "100M",
          angle: 90,
          percent: 0.3333
        },
        track: [
          {
            type: "gentle",
            side: 3,
            gauge: "line"
          }
        ],
        hexes: ["H3"]
      },
      {
        color: "plain",
        mountain: {
          size: "medium",
          cost: "150M"
        },
        borders: [
          {
            side: 2,
            color: "red"
          },
          {
            side: 3,
            color: "red"
          },
          {
            side: 6,
            color: "red"
          }
        ],
        hexes: ["H5"]
      },
      {
        color: "plain",
        borders: [
          {
            side: 2,
            color: "red"
          },
          {
            side: 5,
            color: "mountain"
          }
        ],
        mountain: {
          size: "medium",
          cost: "100M",
          angle: 60,
          percent: 0.3333
        },
        track: [
          {
            type: "gentle",
            side: 2,
            gauge: "line"
          }
        ],
        hexes: ["H7"]
      },
      {
        color: "gray",
        values: [
          {
            value: 30,
            angle: -30,
            percent: 0.725
          }
        ],
        cities: [
          {
            size: 2,
            name: {
              name: "Eisfelder Talmühle"
            }
          }
        ],
        track: [
          {
            side: 1,
            gauge: "narrow"
          },
          {
            side: 4,
            gauge: "narrow"
          },
          {
            side: 6,
            gauge: "narrow"
          }
        ],
        hexes: ["H9"]
      },
      {
        color: "plain",
        mountain: {
          size: "medium",
          cost: "100M"
        },
        borders: [
          {
            side: 4,
            color: "red"
          }
        ],
        hexes: ["H11"]
      },
      {
        color: "green",
        track: [
          {
            side: 2,
            gauge: "narrow"
          },
          {
            side: 5,
            gauge: "narrow"
          }
        ],
        cities: [
          {
            name: {
              name: "Güntersberge",
              reverse: true,
              offset: 33.33
            }
          }
        ],
        mountain: {
          cost: "50",
          size: "small",
          angle: 240,
          percent: 0.7,
          border: true
        },
        values: [
          {
            value: 40,
            angle: 60,
            percent: 0.775
          }
        ],
        borders: [
          {
            side: 1,
            color: "red"
          },
          {
            side: 2,
            color: "red"
          },
          {
            side: 3,
            color: "red"
          },
          {
            side: 4,
            color: "red"
          },
          {
            side: 5,
            color: "red"
          },
          {
            side: 6,
            color: "red"
          }
        ],
        hexes: ["H13"]
      },
      {
        color: "plain",
        mountain: {
          size: "medium",
          cost: "150M"
        },
        borders: [
          {
            side: 1,
            color: "red"
          }
        ],
        hexes: ["H15"]
      },
      {
        color: "green",
        cities: [
          {
            name: {
              name: "Alexisbad",
              offset: 40
            }
          }
        ],
        borders: [
          {
            side: 5,
            color: "red"
          }
        ],
        mountain: {
          cost: "100",
          size: "small",
          border: true,
          angle: 230,
          percent: 0.75
        },
        values: [
          {
            value: 40,
            angle: -60,
            percent: 0.775
          }
        ],
        track: [
          {
            side: 4,
            gauge: "narrow"
          },
          {
            side: 5,
            gauge: "narrow"
          },
          {
            side: 6,
            gauge: "narrow"
          }
        ],
        hexes: ["H17"]
      },
      {
        color: "plain",
        mountain: {
          angle: -30,
          percent: 0.3333,
          size: "medium",
          cost: "150M"
        },
        borders: [
          {
            side: 3,
            color: "red"
          },
          {
            side: 6,
            color: "red"
          }
        ],
        track: [
          {
            type: "gentle",
            side: 1,
            gauge: "line"
          }
        ],
        hexes: ["H19"]
      },
      {
        color: "gray",
        track: [
          {
            side: 2,
            gauge: "narrow"
          },
          {
            side: 1
          },
          {
            side: 4
          }
        ],
        offBoardRevenue: {
          angle: 180,
          percent: 0.5,
          revenues: [
            {
              color: "yellow",
              cost: "40"
            },
            {
              color: "green",
              cost: "50"
            },
            {
              color: "brown",
              cost: "80"
            },
            {
              color: "gray",
              cost: "120"
            }
          ]
        },
        cities: [
          {
            name: {
              name: "Walkenried",
              reverse: true
            },
            companies: [
              {
                label: "SHE",
                color: "yellow"
              }
            ]
          }
        ],
        borders: [
          {
            side: 1,
            color: "red"
          },
          {
            side: 2,
            color: "red"
          },
          {
            side: 3,
            color: "red"
          },
          {
            side: 4,
            color: "red"
          },
          {
            side: 5,
            color: "red"
          },
          {
            side: 6,
            color: "red"
          }
        ],
        hexes: ["I2"]
      },
      {
        color: "gray",
        track: [
          {
            side: 2,
            gauge: "narrow"
          },
          {
            side: 1
          },
          {
            side: 5
          }
        ],
        offBoardRevenue: {
          angle: 180,
          percent: 0.5,
          revenues: [
            {
              color: "yellow",
              cost: "40"
            },
            {
              color: "green",
              cost: "50"
            },
            {
              color: "brown",
              cost: "80"
            },
            {
              color: "gray",
              cost: "120"
            }
          ]
        },
        cities: [
          {
            name: {
              name: "Ellrich",
              reverse: true,
              offset: 42.5
            },
            companies: [
              {
                label: "KEZ",
                color: "maroon"
              }
            ]
          }
        ],
        borders: [
          {
            side: 1,
            color: "red"
          },
          {
            side: 2,
            color: "red"
          },
          {
            side: 3,
            color: "red"
          },
          {
            side: 4,
            color: "red"
          },
          {
            side: 5,
            color: "red"
          },
          {
            side: 6,
            color: "red"
          }
        ],
        hexes: ["I4"]
      },
      {
        color: "plain",
        borders: [
          {
            side: 6,
            color: "red"
          },
          {
            side: 2,
            color: "mountain"
          }
        ],
        centerTowns: [
          {
            name: {
              name: "Netzkater",
              rotation: -60
            }
          }
        ],
        track: [
          {
            side: 3,
            type: "straight",
            gauge: "line"
          }
        ],
        mountain: {
          size: "medium",
          cost: "150M",
          angle: 300,
          percent: 0.5
        },
        hexes: ["I8"]
      },
      {
        color: "plain",
        mountain: {
          cost: "150M",
          size: "medium"
        },
        borders: [
          {
            side: 3,
            color: "red"
          }
        ],
        hexes: ["I12"]
      },
      {
        color: "plain",
        centerTowns: [
          {
            name: {
              name: "Lindenberg",
              reverse: true
            },
            angle: 150,
            percent: 0.5
          }
        ],
        mountain: {
          size: "small",
          cost: "50M",
          angle: 300,
          percent: 0.5
        },
        borders: [
          {
            side: 2,
            color: "red"
          }
        ],
        hexes: ["I14"]
      },
      {
        color: "plain",
        centerTowns: [
          {
            name: {
              name: "Silberhütte",
              reverse: true
            },
            angle: 150,
            percent: 0.5
          }
        ],
        mountain: {
          size: "medium",
          cost: "100M",
          angle: 300,
          percent: 0.5
        },
        borders: [
          {
            side: 4,
            color: "red"
          }
        ],
        hexes: ["I16"]
      },
      {
        color: "gray",
        track: [
          {
            side: 2,
            gauge: "narrow"
          }
        ],
        offBoardRevenue: {
          angle: 180,
          percent: 0.5,
          revenues: [
            {
              color: "yellow",
              cost: "30"
            },
            {
              color: "green",
              cost: "40"
            },
            {
              color: "brown",
              cost: "60"
            },
            {
              color: "gray",
              cost: "70"
            }
          ]
        },
        cities: [
          {
            name: {
              name: "Harzgerode",
              reverse: true
            },
            companies: [
              {
                label: "GHE",
                color: "blue"
              }
            ]
          }
        ],
        borders: [
          {
            side: 1,
            color: "red"
          },
          {
            side: 2,
            color: "red"
          },
          {
            side: 3,
            color: "red"
          },
          {
            side: 4,
            color: "red"
          },
          {
            side: 5,
            color: "red"
          },
          {
            side: 6,
            color: "red"
          }
        ],
        hexes: ["I18"]
      },
      {
        color: "gray",
        borders: [
          {
            side: 2,
            color: "red"
          },
          {
            side: 4,
            color: "red"
          }
        ],
        track: [
          {
            side: 2,
            type: "gentle"
          }
        ],
        hexes: ["J5"]
      },
      {
        color: "gray",
        track: [
          {
            side: 3,
            gauge: "narrow"
          },
          {
            side: 1
          },
          {
            side: 4
          }
        ],
        offBoardRevenue: {
          angle: 180,
          percent: 0.5,
          revenues: [
            {
              color: "yellow",
              cost: "60"
            },
            {
              color: "green",
              cost: "80"
            },
            {
              color: "brown",
              cost: "120"
            },
            {
              color: "gray",
              cost: "180"
            }
          ]
        },
        cities: [
          {
            name: {
              name: "Nordhaussen",
              reverse: true
            },
            companies: [
              {
                label: "NWE",
                color: "darkGreen"
              }
            ]
          }
        ],
        borders: [
          {
            side: 1,
            color: "red"
          },
          {
            side: 2,
            color: "red"
          },
          {
            side: 3,
            color: "red"
          },
          {
            side: 4,
            color: "red"
          },
          {
            side: 5,
            color: "red"
          },
          {
            side: 6,
            color: "red"
          }
        ],
        hexes: ["J7"]
      }
    ]
  }
};

export default game;

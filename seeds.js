const spots = [
  {
    name: "Cortegaca",
    type: ["beach"]
  },
  {
    name: "Costa Nova",
    type: ["beach"]
  },
  {
    name: "Esmoriz",
    type: ["beach"]
  },
  {
    name: "Espinho",
    type: ["beach"]
  },
  {
    name: "Figueira da Foz - Buarcos",
    type: ["point"]
  },
  {
    name: "Figueira da Foz - Cabedelo",
    type: ["beach"]
  },
  {
    name: "Figueira da Foz - Gala",
    type: ["beach", "reef"]
  },
  {
    name: "Furadouro",
    type: ["beach"]
  },
  {
    name: "Maceda",
    type: ["beach"]
  },
  {
    name: "Murtinheira",
    type: ["beach"]
  },
  {
    name: "Nazare",
    type: ["beach"]
  },
  {
    name: "Pedrogao",
    type: ["beach"]
  },
  {
    name: "Praia da Barra",
    type: ["sandbar", "beach", "beach"]
  },
  {
    name: "Praia da Leirosa",
    type: ["beach"]
  },
  {
    name: "Praia da Tocha",
    type: ["beach"]
  },
  {
    name: "Praia da Torreira",
    type: ["beach"]
  },
  {
    name: "Praia da Vagueira",
    type: ["beach"]
  },
  {
    name: "Praia da Vieira",
    type: ["beach"]
  },
  {
    name: "Praia de Mira",
    type: ["beach"]
  },
  {
    name: "Praia do Norte",
    type: ["reef"]
  },
  {
    name: "Praia do Osso da Baleia",
    type: ["beach"]
  },
  {
    name: "Praia Paredes",
    type: ["beach"]
  },
  {
    name: "Sao Jacinto",
    type: ["sandbar", "beach", "beach"]
  },
  {
    name: "Sao Pedro de Moel",
    type: ["beach"]
  },
  {
    name: "Silvalde",
    type: ["beach"]
  },
  {
    name: "A Ver o Mar",
    type: ["reef"]
  },
  {
    name: "Afife",
    type: ["beach"]
  },
  {
    name: "Agucadoura",
    type: ["sandbar", "beach", "beach"]
  },
  {
    name: "Azurara",
    type: ["beach"]
  },
  {
    name: "Barra do Douro",
    type: ["river", "beach", "beach"]
  },
  {
    name: "Canidelo",
    type: ["point"]
  },
  {
    name: "Cavalos de Fao",
    type: ["reef"]
  },
  {
    name: "Esposende",
    type: ["river", "beach"]
  },
  {
    name: "Kings Rock",
    type: ["reef"]
  },
  {
    name: "Leca",
    type: ["beach"]
  },
  {
    name: "Luz",
    type: ["reef"]
  },
  {
    name: "Matosinhos",
    type: ["beach", "reef"]
  },
  {
    name: "Mindelo",
    type: ["beach"]
  },
  {
    name: "Miramar",
    type: ["beach", "reef"]
  },
  {
    name: "Moledo",
    type: ["sandbar", "beach"]
  },
  {
    name: "Ofir",
    type: ["sandbar", "beach"]
  },
  {
    name: "Povoa do Varzim",
    type: ["beach", "reef"]
  },
  {
    name: "Praia da Amorosa",
    type: ["beach", "reef"]
  },
  {
    name: "Praia do Aterro",
    type: ["sandbar", "beach"]
  },
  {
    name: "Praia do Rock",
    type: ["sandbar", "beach"]
  },
  {
    name: "Sacor",
    type: ["beach", "reef"]
  },
  {
    name: "Viana do Castelo",
    type: ["river", "beach"]
  },
  {
    name: "Vila do Conde",
    type: ["beach"]
  },
  {
    name: "Vila Praia de Ancora",
    type: ["river", "beach"]
  },
  {
    name: "Backdoor",
    type: ["reef"]
  },
  {
    name: "Cave",
    type: ["reef"]
  },
  {
    name: "Coxos",
    type: ["reef"]
  },
  {
    name: "Crazy Left",
    type: ["reef"]
  },
  {
    name: "Foz do Lizandro",
    type: ["river", "beach"]
  },
  {
    name: "Furnas",
    type: ["reef"]
  },
  {
    name: "Limipicos",
    type: ["reef"]
  },
  {
    name: "Malhadinha",
    type: ["reef"]
  },
  {
    name: "Pedra Branca",
    type: ["reef"]
  },
  {
    name: "Pontinha",
    type: ["reef"]
  },
  {
    name: "Praia do Norte",
    type: ["beach", "reef"]
  },
  {
    name: "Praia do Peixe",
    type: ["beach"]
  },
  {
    name: "Praia do Sul",
    type: ["beach", "reef"]
  },
  {
    name: "Reef",
    type: ["reef"]
  },
  {
    name: "Ribeira D'ilhas",
    type: ["reef"]
  },
  {
    name: "Sao Juliao",
    type: ["beach"]
  },
  {
    name: "Sao Lourenço",
    type: ["reef"]
  },
  {
    name: "The Reef",
    type: ["reef"]
  },
  {
    name: "Adraga",
    type: ["beach", "reef"]
  },
  {
    name: "Azarujinha",
    type: ["reef"]
  },
  {
    name: "Bafureira",
    type: ["reef"]
  },
  {
    name: "Bica",
    type: ["reef", "point"]
  },
  {
    name: "Bicas",
    type: ["reef"]
  },
  {
    name: "Bolina",
    type: ["reef", "point"]
  },
  {
    name: "Carcavelos",
    type: ["reef"]
  },
  {
    name: "Caxias",
    type: ["point"]
  },
  {
    name: "Costa da Caparica",
    type: ["beach"]
  },
  {
    name: "Cresmina",
    type: ["beach"]
  },
  {
    name: "Fonte da Telha",
    type: ["beach"]
  },
  {
    name: "Lagoa de Albufeira",
    type: ["beach"]
  },
  {
    name: "Monte Estoril",
    type: ["reef"]
  },
  {
    name: "Paco D 'arcos",
    type: ["point"]
  },
  {
    name: "Parede",
    type: ["point"]
  },
  {
    name: "Poca",
    type: ["reef"]
  },
  {
    name: "Praia da Foz Cabo Espichel Sesimbra",
    type: ["reef"]
  },
  {
    name: "Praia da Rainha",
    type: ["beach"]
  },
  {
    name: "Praia da Saude",
    type: ["beach"]
  },
  {
    name: "Praia das Macas",
    type: ["beach"]
  },
  {
    name: "Praia do Castello",
    type: ["beach"]
  },
  {
    name: "Praia do Guincho",
    type: ["beach"]
  },
  {
    name: "Praia do Magoito",
    type: ["reef"]
  },
  {
    name: "Praia do Meco",
    type: ["beach"]
  },
  {
    name: "Praia do Tamariz",
    type: ["reef"]
  },
  {
    name: "Praia Grande",
    type: ["beach"]
  },
  {
    name: "Praia Pequena",
    type: ["beach"]
  },
  {
    name: "Santo Amaro",
    type: ["point"]
  },
  {
    name: "Sao Joao",
    type: ["beach"]
  },
  {
    name: "Sao Pedro",
    type: ["point"]
  },
  {
    name: "Torre",
    type: ["beach"]
  },
  {
    name: "Almagreira",
    type: ["beach"]
  },
  {
    name: "Baia",
    type: ["reef"]
  },
  {
    name: "Baleal Reef",
    type: ["beach"]
  },
  {
    name: "Baleal Sul",
    type: ["beach"]
  },
  {
    name: "Belgas",
    type: ["beach"]
  },
  {
    name: "Cantinho",
    type: ["point"]
  },
  {
    name: "Consolacao Lefts",
    type: ["reef"]
  },
  {
    name: "Consolacao Rights",
    type: ["point"]
  },
  {
    name: "Ferrel",
    type: ["beach"]
  },
  {
    name: "Foz do Arelho",
    type: ["beach"]
  },
  {
    name: "Lagide",
    type: ["beach", "reef"]
  },
  {
    name: "Mini Pipe",
    type: ["reef"]
  },
  {
    name: "Molho Leste",
    type: ["sandbar", "beach"]
  },
  {
    name: "Porto Batel",
    type: ["point"]
  },
  {
    name: "Praia Azul",
    type: ["beach"]
  },
  {
    name: "Praia da Areia Branca",
    type: ["river", "beach"]
  },
  {
    name: "Praia do Baleal",
    type: ["beach"]
  },
  {
    names: "Praia do Cerro",
    type: ["beach"]
  },

  {
    name: "Santa Cruz",
    type: ["beach"]
  },
  {
    name: "Supertubos",
    type: ["beach", "reef"]
  },
  {
    name: "Aberta A Nova",
    type: ["beach"]
  },
  {
    name: "Almograve",
    type: ["reef"]
  },
  {
    name: "Burrinho",
    type: ["reef"]
  },
  {
    name: "Cabo de Sines",
    type: ["beach"]
  },
  {
    name: "Carvalhal",
    type: ["beach"]
  },
  {
    name: "Cogumelo",
    type: ["beach"]
  },
  {
    name: "Comporta",
    type: ["beach"]
  },
  {
    name: "Malhão",
    type: ["beach"]
  },
  {
    name: "Melides",
    type: ["beach"]
  },
  {
    name: "Porto Covo",
    type: ["reef"]
  },
  {
    name: "Praia do Pego",
    type: ["beach"]
  },
  {
    name: "Praia dos Aivados",
    type: ["beach"]
  },
  {
    name: "Sanguessuga",
    type: ["reef"]
  },
  {
    name: "Sao Torpes",
    type: ["sandbar", "beach"]
  },
  {
    name: "Troia",
    type: ["beach"]
  },
  {
    name: "Vila Nova de Milfontes",
    type: ["reef"]
  },
  {
    name: "Zambujeira do Mar",
    type: ["beach"]
  },
  {
    name: "Albufeira",
    type: ["beach"]
  },
  {
    name: "Alfagar",
    type: ["reef"]
  },
  {
    name: "Alvor",
    type: ["beach"]
  },
  {
    name: "Amoreira",
    type: ["beach", "point"]
  },
  {
    name: "Arrifana",
    type: ["beach", "reef"]
  },
  {
    name: "Barranco da Belharucas",
    type: ["sandbar", "beach"]
  },
  {
    name: "Beliche",
    type: ["beach", "point"]
  },
  {
    name: "Burgau",
    type: ["beach"]
  },
  {
    name: "Carrapateira",
    type: ["river", "beach"]
  },
  {
    name: "Carriagem",
    type: ["reef"]
  },
  {
    name: "Castelejo",
    type: ["beach", "reef"]
  },
  {
    name: "Cordama",
    type: ["beach"]
  },
  {
    name: "Figueiros",
    type: ["beach"]
  },
  {
    name: "Forte Novo",
    type: ["beach"]
  },
  {
    name: "Ilha de Faro",
    type: ["beach"]
  },
  {
    name: "Ilha de Tavira",
    type: ["beach"]
  },
  {
    name: "Ilha Deserta",
    type: ["beach"]
  },
  {
    name: "Ilha do Farol",
    type: ["beach"]
  },
  {
    name: "Ingrina",
    type: ["reef"]
  },
  {
    name: "Julias",
    type: ["beach"]
  },
  {
    name: "Lage do Pescador",
    type: ["reef"]
  },
  {
    name: "Luz",
    type: ["beach"]
  },
  {
    name: "Mareta",
    type: ["beach"]
  },
  {
    name: "Martinhal",
    type: ["beach"]
  },
  {
    name: "Meia Praia",
    type: ["beach"]
  },
  {
    name: "Monte Clerigo",
    type: ["river", "beach"]
  },
  {
    name: "Ponta Ruiva",
    type: ["reef"]
  },
  {
    name: "Praia da Rocha",
    type: ["beach"]
  },
  {
    name: "Praia de Altura",
    type: ["beach"]
  },
  {
    name: "Praia de Faro",
    type: ["beach"]
  },
  {
    name: "Praia de Odeceixe",
    type: ["beach"]
  },
  {
    name: "Praia do Amado",
    type: ["beach"]
  },
  {
    name: "Praia do Bordeira",
    type: ["sandbar", "beach"]
  },
  {
    name: "Praia do Cabeco",
    type: ["beach"]
  },
  {
    name: "Rocha Negra",
    type: ["reef"]
  },
  {
    name: "Salema",
    type: ["sandbar", "beach"]
  },
  {
    name: "Tonel",
    type: ["beach", "point"]
  },
  {
    name: "Vale do Lobo",
    type: ["beach"]
  },
  {
    name: "Vale Figueira",
    type: ["beach"]
  },
  {
    name: "Vila Real de Santo Antonio",
    type: ["beach"]
  },
  {
    name: "Zavial",
    type: ["point"]
  }
];

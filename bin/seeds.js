// const mongoose = require("mongoose");
// const axios = require("axios");
// const spotsOwn = [
//   {
//     name: "Cortegaca",
//     type: ["beach"],
//     region: "Beira"
//   },
//   {
//     name: "Costa Nova",
//     type: ["beach"],
//     region: "Beira"
//   },
//   {
//     name: "Esmoriz",
//     type: ["beach"],
//     region: "Beira"
//   },
//   {
//     name: "Espinho",
//     type: ["beach"],
//     region: "Beira"
//   },
//   {
//     name: "Figueira da Foz - Buarcos",
//     type: ["point"],
//     region: "Beira"
//   },
//   {
//     name: "Figueira da Foz - Cabedelo",
//     type: ["beach"],
//     region: "Beira"
//   },
//   {
//     name: "Figueira da Foz - Gala",
//     type: ["beach", "reef"],
//     region: "Beira"
//   },
//   {
//     name: "Furadouro",
//     type: ["beach"],
//     region: "Beira"
//   },
//   {
//     name: "Maceda",
//     type: ["beach"],
//     region: "Beira"
//   },
//   {
//     name: "Murtinheira",
//     type: ["beach"],
//     region: "Beira"
//   },
//   {
//     name: "Nazare",
//     type: ["beach"],
//     region: "Beira"
//   },
//   {
//     name: "Pedrogao",
//     type: ["beach"],
//     region: "Beira"
//   },
//   {
//     name: "Praia da Barra",
//     type: ["sandbar", "beach", "beach"],
//     region: "Beira"
//   },
//   {
//     name: "Praia da Leirosa",
//     type: ["beach"],
//     region: "Beira"
//   },
//   {
//     name: "Praia da Tocha",
//     type: ["beach"],
//     region: "Beira"
//   },
//   {
//     name: "Praia da Torreira",
//     type: ["beach"],
//     region: "Beira"
//   },
//   {
//     name: "Praia da Vagueira",
//     type: ["beach"],
//     region: "Beira"
//   },
//   {
//     name: "Praia da Vieira",
//     type: ["beach"],
//     region: "Beira"
//   },
//   {
//     name: "Praia de Mira",
//     type: ["beach"],
//     region: "Beira"
//   },
//   {
//     name: "Praia do Norte",
//     type: ["reef"],
//     region: "Beira"
//   },
//   {
//     name: "Praia do Osso da Baleia",
//     type: ["beach"],
//     region: "Beira"
//   },
//   {
//     name: "Praia Paredes",
//     type: ["beach"],
//     region: "Beira"
//   },
//   {
//     name: "Sao Jacinto",
//     type: ["sandbar", "beach", "beach"]
//   },
//   {
//     name: "Sao Pedro de Moel",
//     type: ["beach"],
//     region: "Beira"
//   },
//   {
//     name: "Silvalde",
//     type: ["beach"],
//     region: "Beira"
//   },
//   {
//     name: "A Ver o Mar",
//     type: ["reef"],
//     region: "Douro and Minho"
//   },
//   {
//     name: "Afife",
//     type: ["beach"],
//     region: "Douro and Minho"
//   },
//   {
//     name: "Agucadoura",
//     type: ["sandbar", "beach", "beach"],
//     region: "Douro and Minho"
//   },
//   {
//     name: "Azurara",
//     type: ["beach"],
//     region: "Douro and Minho"
//   },
//   {
//     name: "Barra do Douro",
//     type: ["river", "beach", "beach"],
//     region: "Douro and Minho"
//   },
//   {
//     name: "Canidelo",
//     type: ["point"],
//     region: "Douro and Minho"
//   },
//   {
//     name: "Cavalos de Fao",
//     type: ["reef"],
//     region: "Douro and Minho"
//   },
//   {
//     name: "Esposende",
//     type: ["river", "beach"],
//     region: "Douro and Minho"
//   },
//   {
//     name: "Kings Rock",
//     type: ["reef"],
//     region: "Douro and Minho"
//   },
//   {
//     name: "Leca",
//     type: ["beach"],
//     region: "Douro and Minho"
//   },
//   {
//     name: "Luz",
//     type: ["reef"],
//     region: "Douro and Minho"
//   },
//   {
//     name: "Matosinhos",
//     type: ["beach", "reef"],
//     region: "Douro and Minho"
//   },
//   {
//     name: "Mindelo",
//     type: ["beach"],
//     region: "Douro and Minho"
//   },
//   {
//     name: "Miramar",
//     type: ["beach", "reef"],
//     region: "Douro and Minho"
//   },
//   {
//     name: "Moledo",
//     type: ["sandbar", "beach"],
//     region: "Douro and Minho"
//   },
//   {
//     name: "Ofir",
//     type: ["sandbar", "beach"],
//     region: "Douro and Minho"
//   },
//   {
//     name: "Povoa do Varzim",
//     type: ["beach", "reef"],
//     region: "Douro and Minho"
//   },
//   {
//     name: "Praia da Amorosa",
//     type: ["beach", "reef"],
//     region: "Douro and Minho"
//   },
//   {
//     name: "Praia do Aterro",
//     type: ["sandbar", "beach"],
//     region: "Douro and Minho"
//   },
//   {
//     name: "Praia do Rock",
//     type: ["sandbar", "beach"],
//     region: "Douro and Minho"
//   },
//   {
//     name: "Sacor",
//     type: ["beach", "reef"],
//     region: "Douro and Minho"
//   },
//   {
//     name: "Viana do Castelo",
//     type: ["river", "beach"],
//     region: "Douro and Minho"
//   },
//   {
//     name: "Vila do Conde",
//     type: ["beach"],
//     region: "Douro and Minho"
//   },
//   {
//     name: "Vila Praia de Ancora",
//     type: ["river", "beach"],
//     region: "Douro and Minho"
//   },
//   {
//     name: "Backdoor",
//     type: ["reef"],
//     region: "Ericeira"
//   },
//   {
//     name: "Cave",
//     type: ["reef"],
//     region: "Ericeira"
//   },
//   {
//     name: "Coxos",
//     type: ["reef"],
//     region: "Ericeira"
//   },
//   {
//     name: "Crazy Left",
//     type: ["reef"],
//     region: "Ericeira"
//   },
//   {
//     name: "Foz do Lizandro",
//     type: ["river", "beach"],
//     region: "Ericeira"
//   },
//   {
//     name: "Furnas",
//     type: ["reef"],
//     region: "Ericeira"
//   },
//   {
//     name: "Limipicos",
//     type: ["reef"],
//     region: "Ericeira"
//   },
//   {
//     name: "Malhadinha",
//     type: ["reef"],
//     region: "Ericeira"
//   },
//   {
//     name: "Pedra Branca",
//     type: ["reef"],
//     region: "Ericeira"
//   },
//   {
//     name: "Pontinha",
//     type: ["reef"],
//     region: "Ericeira"
//   },
//   {
//     name: "Praia do Norte",
//     type: ["beach", "reef"],
//     region: "Ericeira"
//   },
//   {
//     name: "Praia do Peixe",
//     type: ["beach"],
//     region: "Ericeira"
//   },
//   {
//     name: "Praia do Sul",
//     type: ["beach", "reef"],
//     region: "Ericeira"
//   },
//   {
//     name: "Reef",
//     type: ["reef"],
//     region: "Ericeira"
//   },
//   {
//     name: "Ribeira de ilhas",
//     type: ["reef"],
//     region: "Ericeira"
//   },
//   {
//     name: "Sao Juliao",
//     type: ["beach"],
//     region: "Ericeira"
//   },
//   {
//     name: "Sao Lourenço",
//     type: ["reef"],
//     region: "Ericeira"
//   },
//   {
//     name: "The Reef",
//     type: ["reef"],
//     region: "Ericeira"
//   },
//   {
//     name: "Adraga",
//     type: ["beach", "reef"]
//   },
//   {
//     name: "Azarujinha",
//     type: ["reef"],
//     region: "Lisboa"
//   },
//   {
//     name: "Bafureira",
//     type: ["reef"],
//     region: "Lisboa"
//   },
//   {
//     name: "Bica",
//     type: ["reef", "point"],
//     region: "Lisboa"
//   },
//   {
//     name: "Bicas",
//     type: ["reef"],
//     region: "Lisboa"
//   },
//   {
//     name: "Bolina",
//     type: ["reef", "point"],
//     region: "Lisboa"
//   },
//   {
//     name: "Carcavelos",
//     type: ["reef"],
//     region: "Lisboa"
//   },
//   {
//     name: "Caxias",
//     type: ["point"]
//   },
//   {
//     name: "Costa da Caparica",
//     type: ["beach"],
//     region: "Lisboa"
//   },
//   {
//     name: "Cresmina",
//     type: ["beach"],
//     region: "Lisboa"
//   },
//   {
//     name: "Fonte da Telha",
//     type: ["beach"],
//     region: "Lisboa"
//   },
//   {
//     name: "Lagoa de Albufeira",
//     type: ["beach"],
//     region: "Lisboa"
//   },
//   {
//     name: "Monte Estoril",
//     type: ["reef"]
//   },
//   {
//     name: "Paco D 'arcos",
//     type: ["point"],
//     region: "Lisboa"
//   },
//   {
//     name: "Parede",
//     type: ["point"],
//     region: "Lisboa"
//   },
//   {
//     name: "Poca",
//     type: ["reef"],
//     region: "Lisboa"
//   },
//   {
//     name: "Praia da Foz Cabo Espichel Sesimbra",
//     type: ["reef"],
//     region: "Lisboa"
//   },
//   {
//     name: "Praia da Rainha",
//     type: ["beach"],
//     region: "Lisboa"
//   },
//   {
//     name: "Praia da Saude",
//     type: ["beach"],
//     region: "Lisboa"
//   },
//   {
//     name: "Praia das Macas",
//     type: ["beach"],
//     region: "Lisboa"
//   },
//   {
//     name: "Praia do Castello",
//     type: ["beach"],
//     region: "Lisboa"
//   },
//   {
//     name: "Praia do Guincho",
//     type: ["beach"],
//     region: "Lisboa"
//   },
//   {
//     name: "Praia do Magoito",
//     type: ["reef"],
//     region: "Lisboa"
//   },
//   {
//     name: "Praia do Meco",
//     type: ["beach"],
//     region: "Lisboa"
//   },
//   {
//     name: "Praia do Tamariz",
//     type: ["reef"],
//     region: "Lisboa"
//   },
//   {
//     name: "Praia Grande",
//     type: ["beach"],
//     region: "Lisboa"
//   },
//   {
//     name: "Praia Pequena",
//     type: ["beach"],
//     region: "Lisboa"
//   },
//   {
//     name: "Santo Amaro",
//     type: ["point"],
//     region: "Lisboa"
//   },
//   {
//     name: "Sao Joao",
//     type: ["beach"],
//     region: "Lisboa"
//   },
//   {
//     name: "Sao Pedro",
//     type: ["point"],
//     region: "Lisboa"
//   },
//   {
//     name: "Torre",
//     type: ["beach"],
//     region: "Lisboa"
//   },
//   {
//     name: "Almagreira",
//     type: ["beach"],
//     region: "Peniche"
//   },
//   {
//     name: "Baia",
//     type: ["reef"],
//     region: "Peniche"
//   },
//   {
//     name: "Baleal Reef",
//     type: ["beach"],
//     region: "Peniche"
//   },
//   {
//     name: "Baleal Sul",
//     type: ["beach"],
//     region: "Peniche"
//   },
//   {
//     name: "Belgas",
//     type: ["beach"],
//     region: "Peniche"
//   },
//   {
//     name: "Cantinho",
//     type: ["point"],
//     region: "Peniche"
//   },
//   {
//     name: "Consolacao Lefts",
//     type: ["reef"],
//     region: "Peniche"
//   },
//   {
//     name: "Consolacao Rights",
//     type: ["point"],
//     region: "Peniche"
//   },
//   {
//     name: "Ferrel",
//     type: ["beach"],
//     region: "Peniche"
//   },
//   {
//     name: "Foz do Arelho",
//     type: ["beach"],
//     region: "Peniche"
//   },
//   {
//     name: "Lagide",
//     type: ["beach", "reef"],
//     region: "Peniche"
//   },
//   {
//     name: "Mini Pipe",
//     type: ["reef"],
//     region: "Peniche"
//   },
//   {
//     name: "Molho Leste",
//     type: ["sandbar", "beach"],
//     region: "Peniche"
//   },
//   {
//     name: "Porto Batel",
//     type: ["point"],
//     region: "Peniche"
//   },
//   {
//     name: "Praia Azul",
//     type: ["beach"],
//     region: "Peniche"
//   },
//   {
//     name: "Praia da Areia Branca",
//     type: ["river", "beach"],
//     region: "Peniche"
//   },
//   {
//     name: "Praia do Baleal",
//     type: ["beach"],
//     region: "Peniche"
//   },
//   {
//     name: "Praia do Cerro",
//     type: ["beach"],
//     region: "Peniche"
//   },

//   {
//     name: "Santa Cruz",
//     type: ["beach"],
//     region: "Peniche"
//   },
//   {
//     name: "Supertubos",
//     type: ["beach", "reef"],
//     region: "Peniche"
//   },
//   {
//     name: "Aberta A Nova",
//     type: ["beach"],
//     region: "Alentejo"
//   },
//   {
//     name: "Almograve",
//     type: ["reef"],
//     region: "Alentejo"
//   },
//   {
//     name: "Burrinho",
//     type: ["reef"],
//     region: "Alentejo"
//   },
//   {
//     name: "Cabo de Sines",
//     type: ["beach"],
//     region: "Alentejo"
//   },
//   {
//     name: "Carvalhal",
//     type: ["beach"],
//     region: "Alentejo"
//   },
//   {
//     name: "Cogumelo",
//     type: ["beach"],
//     region: "Alentejo"
//   },
//   {
//     name: "Comporta",
//     type: ["beach"],
//     region: "Alentejo"
//   },
//   {
//     name: "Malhão",
//     type: ["beach"],
//     region: "Alentejo"
//   },
//   {
//     name: "Melides",
//     type: ["beach"],
//     region: "Alentejo"
//   },
//   {
//     name: "Porto Covo",
//     type: ["reef"],
//     region: "Alentejo"
//   },
//   {
//     name: "Praia do Pego",
//     type: ["beach"],
//     region: "Alentejo"
//   },
//   {
//     name: "Praia dos Aivados",
//     type: ["beach"],
//     region: "Alentejo"
//   },
//   {
//     name: "Sanguessuga",
//     type: ["reef"],
//     region: "Alentejo"
//   },
//   {
//     name: "Sao Torpes",
//     type: ["sandbar", "beach"],
//     region: "Alentejo"
//   },
//   {
//     name: "Troia",
//     type: ["beach"],
//     region: "Alentejo"
//   },
//   {
//     name: "Vila Nova de Milfontes",
//     type: ["reef"],
//     region: "Alentejo"
//   },
//   {
//     name: "Zambujeira do Mar",
//     type: ["beach"],
//     region: "Alentejo"
//   },
//   {
//     name: "Albufeira",
//     type: ["beach"],
//     region: "Algarve"
//   },
//   {
//     name: "Alfagar",
//     type: ["reef"],
//     region: "Algarve"
//   },
//   {
//     name: "Alvor",
//     type: ["beach"],
//     region: "Algarve"
//   },
//   {
//     name: "Amoreira",
//     type: ["beach", "point"],
//     region: "Algarve"
//   },
//   {
//     name: "Arrifana",
//     type: ["beach", "reef"],
//     region: "Algarve"
//   },
//   {
//     name: "Barranco da Belharucas",
//     type: ["sandbar", "beach"],
//     region: "Algarve"
//   },
//   {
//     name: "Beliche",
//     type: ["beach", "point"],
//     region: "Algarve"
//   },
//   {
//     name: "Burgau",
//     type: ["beach"],
//     region: "Algarve"
//   },
//   {
//     name: "Carrapateira",
//     type: ["river", "beach"],
//     region: "Algarve"
//   },
//   {
//     name: "Carriagem",
//     type: ["reef"],
//     region: "Algarve"
//   },
//   {
//     name: "Castelejo",
//     type: ["beach", "reef"],
//     region: "Algarve"
//   },
//   {
//     name: "Cordama",
//     type: ["beach"],
//     region: "Algarve"
//   },
//   {
//     name: "Figueiros",
//     type: ["beach"],
//     region: "Algarve"
//   },
//   {
//     name: "Forte Novo",
//     type: ["beach"],
//     region: "Algarve"
//   },
//   {
//     name: "Ilha de Faro",
//     type: ["beach"],
//     region: "Algarve"
//   },
//   {
//     name: "Ilha de Tavira",
//     type: ["beach"],
//     region: "Algarve"
//   },
//   {
//     name: "Ilha Deserta",
//     type: ["beach"],
//     region: "Algarve"
//   },
//   {
//     name: "Ilha do Farol",
//     type: ["beach"],
//     region: "Algarve"
//   },
//   {
//     name: "Ingrina",
//     type: ["reef"],
//     region: "Algarve"
//   },
//   {
//     name: "Julias",
//     type: ["beach"],
//     region: "Algarve"
//   },
//   {
//     name: "Lage do Pescador",
//     type: ["reef"],
//     region: "Algarve"
//   },
//   {
//     name: "Luz",
//     type: ["beach"],
//     region: "Algarve"
//   },
//   {
//     name: "Mareta",
//     type: ["beach"],
//     region: "Algarve"
//   },
//   {
//     name: "Martinhal",
//     type: ["beach"],
//     region: "Algarve"
//   },
//   {
//     name: "Meia Praia",
//     type: ["beach"],
//     region: "Algarve"
//   },
//   {
//     name: "Monte Clerigo",
//     type: ["river", "beach"],
//     region: "Algarve"
//   },
//   {
//     name: "Ponta Ruiva",
//     type: ["reef"],
//     region: "Algarve"
//   },
//   {
//     name: "Praia da Rocha",
//     type: ["beach"],
//     region: "Algarve"
//   },
//   {
//     name: "Praia de Altura",
//     type: ["beach"],
//     region: "Algarve"
//   },
//   {
//     name: "Praia de Faro",
//     type: ["beach"],
//     region: "Algarve"
//   },
//   {
//     name: "Praia de Odeceixe",
//     type: ["beach"],
//     region: "Algarve"
//   },
//   {
//     name: "Praia do Amado",
//     type: ["beach"],
//     region: "Algarve"
//   },
//   {
//     name: "Praia do Bordeira",
//     type: ["sandbar", "beach"],
//     region: "Algarve"
//   },
//   {
//     name: "Praia do Cabeco",
//     type: ["beach"],
//     region: "Algarve"
//   },
//   {
//     name: "Rocha Negra",
//     type: ["reef"],
//     region: "Algarve"
//   },
//   {
//     name: "Salema",
//     type: ["sandbar", "beach"],
//     region: "Algarve"
//   },
//   {
//     name: "Tonel",
//     type: ["beach", "point"],
//     region: "Algarve"
//   },
//   {
//     name: "Vale do Lobo",
//     type: ["beach"],
//     region: "Algarve"
//   },
//   {
//     name: "Vale Figueira",
//     type: ["beach"],
//     region: "Algarve"
//   },
//   {
//     name: "Vila Real de Santo Antonio",
//     type: ["beach"],
//     region: "Algarve"
//   },
//   {
//     name: "Zavial",
//     type: ["point"],
//     region: "Algarve"
//   }
// ];

// const subregions = [
//   "58581a836630e24c44879093",
//   "58581a836630e24c44879094",
//   "58581a836630e24c44879112",
//   "58581a836630e24c4487908e",
//   "58581a836630e24c4487900f"
// ];

// const mapOfPromises = subregions.map(el =>
//   axios.get(
//     `https://services.surfline.com//kbyg/regions/overview?subregionId=${el}`
//   )
// );

// mongoose.connect("mongodb://localhost:27017/Break-Point", () => {
//   console.log("Connected to DB");
// });

// const Spot = require("../models/Spot");

// Promise.all([...mapOfPromises])
//   .then(res => {
//     const spotsAPI = res.map(el => el.data.data.spots).flat(); // FLATTENS THE ARRAYS OF THE SPOTS TO HAVE ONE GIANT ARRAY WITH ALL NECESSARYY DATA
//     const combinedSpots = spotsAPI.reduce((acc, val) => {
//       const spotsChecked = {};

//       const spot = spotsOwn.find(el => {
//         return el.name.toUpperCase().includes(val.name.toUpperCase());
//       });
//       if (spot) {
//         spotsChecked.name = spot.name;
//         spotsChecked.region = spot.region;
//         spotsChecked.type = spot.type;
//         spotsChecked.id = val._id;
//       } else {
//         spotsChecked.name = val.name;
//         spotsChecked.type = ["beach"];
//         // spotsChecked.region = "";
//         spotsChecked.id = val._id;
//       }

//       return [...acc, spotsChecked];
//     }, []);

//     console.log(combinedSpots.length);
//     return combinedSpots;
//   })
//   .then(spots => {
//     return Spot.create(spots);
//   })
//   .then(() => {
//     mongoose.connection.close();
//   });

// Spot.collection.drop();

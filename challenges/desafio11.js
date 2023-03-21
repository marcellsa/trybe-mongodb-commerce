db.produtos.find(
  { nome: { $nin: [/big mac/i, /mcchicken/i] } },
  { _id: 0, nome: 1, curtidas: 1, vendidos: 1 }, 
);
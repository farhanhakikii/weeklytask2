import React from 'react';
import bnw from './brave.png'
import cr from './crazyRich.png'
import edu from './educated.png'
import hm from './handmaid.png'
import './bootstrap.css'

let arrBooks = [
{
image: <img src={hm} height="350px" width="250px"/>,
author: "Margaret Atwood",
title: "The handmaid's tale",
review: 4,
desc: `This novel can be interpreted as a double narrative, Offred's tale and the handmaids' tales. The night...`,
price: 18.99,
discount: 60,
stock: 7,
},
{
image: <img src={cr} height="350px" width="250px"/>,
author: "Kevin Kwan",
title: "Crazy rich asians",
review: 5,
desc: `The outrageously funny debut novel about three super-rich, pedigreed Chinese families and the gossip...`,
price: 24.12,
discount: 80,
stock: 0,
},
{
image: <img src={bnw} height="350px" width="250px"/>,
author: "Aldous Huxley",
title: "Brave new world",
review: 3,
desc: `Dystopian novel written in 1931 by English author Aldous Huxley, and published in 1932. Largely set in...`,
price: 18.99,
discount: 60,
stock: 3,
},
{
image:<img src={edu} height="350px" width="250px"/>,
author: "Tara Westover",
title: "Educated",
review: 4.5,
desc: `It is a tale of fierce family loyalty and of the grief that comes with severing the closest of ties. With...`,
price: 34.21,
discount: 0,
stock: 3,
},
];

function App() {
  return (
      <div>
        {arrBooks.map(val => {
          return (
            <div className="container">
              <div className="row">
                <div className="col-6">
                  <div className="row">
                    <div className="col-6">
                      <p>{val.image}</p>
                    </div>
                    <div className="col-6">
                      <div className="d-flex flex-column">
                        <p>{val.author}</p>
                        <h3>{val.title}</h3>
                        <p>{val.review} / 5 Review</p>
                        <p>{val.desc}</p>
                        {
                        val.discount > 0 ?
                        <div className="d-flex flex-row" style={{justifyContent: "space-around"}}>
                        <p><strong>${(val.price-val.price*val.discount/100).toFixed(2)}</strong></p>
                        <p className="text-muted" style={{textDecorationLine: "line-through"}}>${val.price}</p>
                        </div> : <p><strong>${val.price}</strong></p>
                        }
                        {
                        val.stock > 0 ?
                        <button className="btn btn-outline-primary">Buy</button> :
                        <button className="btn btn-secondary" disabled>Buy</button>
                        }
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
                  )
          })}
    </div>
  );
}

export default App;

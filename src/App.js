import React, { useState } from "react";
import Heading from "./Components/Heading";
import Recipies from "./Components/Recipies";
import ShopList from "./Components/ShopList";

import { recipies, stores } from "./data/data";

function App() {
  const [shop, setShop] = useState(null);

  const findStore = (recipie) => {
    let ingr = recipie.ingredients;
    let ans = [];
    let StoreName = [];
    for (let i = 0; i < ingr.length; i++) {
      let name = ingr[i].name;
      let store = null;
      let minPrice = Number.MAX_SAFE_INTEGER;

      for (let j = 0; j < stores.length; j++) {
        let price;
        let discPrice;
        for (let k = 0; k < stores[j].items.length; k++) {
          if (stores[j].items[k].name === name) {
            price = stores[j].items[k].price;
            discPrice =
              (stores[j].items[k].price * stores[j].items[k].discount) / 100;

            break;
          }
        }
        if (price < minPrice) {
          store = stores[j];
          store.minPrice = store = {
            storeName: stores[j].title,
            items: [
              {
                ingradientName: name,
                price,
                discPrice,
              },
            ],
          };
        }
      }

      if (StoreName.indexOf(store.storeName) === -1) {
        StoreName.push(store.storeName);
        ans.push(store);
      } else {
        for (let t = 0; t < ans.length; t++) {
          if (ans[t].storeName === store.storeName) {
            ans[t].items.push(store.items[0]);
            break;
          }
        }
      }
    }

    setShop(ans);
    console.log(ans);
  };

  return (
    <div className="container">
      
      <Heading />
      <div className="container px-4 py-5" id="custom-cards">
        <h2 className="pb-2 border-bottom">Custom Recipies</h2>

        {shop && (
          <ShopList shop={shop} />
        )}

        <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
          {recipies.map((recipie, index) => (
            <Recipies
              key={index}
              id={index}
              recipie={recipie}
              findStore={findStore}
            />
          ))}
        </div>
      </div>
      
    </div>
  );
}

export default App;

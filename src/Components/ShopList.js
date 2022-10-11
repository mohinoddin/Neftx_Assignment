import React from 'react'

function ShopList({shop}) {
    return (
        <div>
            <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Store Name</th>
                <th scope="col">items</th>
              </tr>
            </thead>
            <tbody>
              {shop.map((item, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{item.storeName}</td>
                  <td>{item.items.map((x) => x.ingradientName).join(", ")}</td>
                </tr>
              ))}
            </tbody>
            </table>
        </div>
    )
}

export default ShopList

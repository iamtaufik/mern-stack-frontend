import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ButtonLink from './ButtonLink';

interface ProductItem {
  name: string;
  price: string;
  description?: string;
}

const Table = () => {
  const [products, setProducts] = useState([]);
  const getData = async () => {
    const result = await axios.get('https://mern-stack-backend-umber.vercel.app/v1/api/product');

    setProducts(result.data.data);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="overflow-x-auto shadow shadow-md mt-4 p-4 border border-zinc-800">
      <table className="table table-zebra w-full">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Price</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product: ProductItem, index) => {
            return (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td className="flex gap-4 justify-center">
                  <ButtonLink link="/detail" text="Detail" class="btn btn-info" />
                  <ButtonLink link="/update" text="Update" class="btn btn-warning" />
                  <button className="btn btn-error">Delete</button>
                  {/* <ButtonLink link='/delete' text='Delete'/> */}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

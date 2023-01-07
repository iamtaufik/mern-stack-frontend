import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ErorNotify } from '../features/ToastNotify';

const DetailProduct = () => {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  const getData = async (id: any) => {
    setLoading(true);
    try {
      const { data } = await axios.get(`https://mern-stack-backend-umber.vercel.app/v1/api/product/${id}`);
      setProductName(data.data.name);
      setProductPrice(data.data.price);
      setProductDescription(data.data.description);
      setLoading(false);
    } catch (error: any) {
      ErorNotify(error.message);
    }
  };

  useEffect(() => {
    getData(id);
  }, []);

  return (
    <>
      {loading ? (
        <>
          <h1 className="text-center text-base">Loading</h1>
        </>
      ) : (
        <form className="flex justify-center">
          <div className="w-full max-w-md p-4 shadow-md border border-zinc-800 flex justify-center gap-4 items-center flex-col">
            <div className="form-control w-full max-w-md">
              <label className="label">
                <span className="label-text">Name Product:</span>
              </label>
              <input placeholder="Type Here" value={productName} className="input input-bordered w-full max-w-md " disabled />
            </div>
            <div className="form-control w-full max-w-md">
              <label className="label">
                <span className="label-text">Price Product:</span>
              </label>
              <input placeholder="Type Here" value={productPrice} className="input input-bordered w-full max-w-md " disabled />
            </div>
            <div className="form-control w-full max-w-md">
              <label className="label">
                <span className="label-text">Description:</span>
              </label>
              <input placeholder="Type Here" value={productDescription} className="input input-bordered w-full max-w-md " disabled />
            </div>
          </div>
        </form>
      )}
    </>
  );
};

export default DetailProduct;

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Form from '../components/Form';
import { ErorNotify, SuccessNotify } from '../features/ToastNotify';

const UpdateProduct = () => {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

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

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await axios.put(`https://mern-stack-backend-umber.vercel.app/v1/api/product/${id}`, {
        name: productName,
        price: productPrice,
        description: productDescription,
      });
      SuccessNotify('Data succesfully added!');
      navigate('/');
    } catch (error: any) {
      console.log(error.message);
      ErorNotify(error.message);
      navigate('/');
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
        <form className="flex justify-center" onSubmit={handleSubmit}>
          <div className="w-full max-w-md p-4 shadow-md border border-zinc-800 flex justify-center gap-4 items-center flex-col">
            <div className="form-control w-full max-w-md">
              <label className="label">
                <span className="label-text">Name Product:</span>
              </label>
              <Form placeholder="Type Here" value={productName} onChange={(e) => setProductName(e)} />
            </div>
            <div className="form-control w-full max-w-md">
              <label className="label">
                <span className="label-text">Price Product:</span>
              </label>
              <Form type="number" placeholder="Type Here" value={productPrice} onChange={(e) => setProductPrice(e)} />
            </div>
            <div className="form-control w-full max-w-md">
              <label className="label">
                <span className="label-text">Description:</span>
              </label>
              <Form placeholder="Type Here" value={productDescription} onChange={(e) => setProductDescription(e)} />
            </div>
            <div className="flex justify-end w-full max-w-md">
              <button type="submit" className="btn btn-success">
                Submit
              </button>
            </div>
          </div>
        </form>
      )}
    </>
  );
};

export default UpdateProduct;

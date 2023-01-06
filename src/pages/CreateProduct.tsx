import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Form from '../components/Form';
import { ErorNotify, SuccessNotify } from '../features/ToastNotify';

const CreateProduct = () => {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const navigate = useNavigate();
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await axios.post('https://mern-stack-backend-umber.vercel.app/v1/api/product', {
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

  return (
    <form className="flex justify-center" onSubmit={handleSubmit}>
      <div className="w-full max-w-md p-4 shadow shadow-md border border-zinc-800 flex justify-center gap-4 items-center flex-col">
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
  );
};

export default CreateProduct;

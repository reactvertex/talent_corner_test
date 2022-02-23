import { useCallback, useEffect, useState } from "react";
import CardList from "../CardList";
import {ProductListComponent} from './styleComponents';
import  InputBox  from '../InputBox';
import { useNavigate } from "react-router-dom";

function ProductList() {
  const [data, setData] = useState([
    { product: "Bakery and Bread", like: false, id: "1" },
    { product: "Meat and Sea Food", like: false, id: "2" },
    { product: "Pasta and Rice", id: "3", like: true },
    { product: "Frozen Food", like: true, id: "4" },
  ]);
  const [searchedResult,setSearchedResult] = useState("");
  const navigate = useNavigate()

  const handleSearch = (event) => {
    setSearchedResult(event.target.value.toLowerCase());
  };

  const handleLike = useCallback(
    (id) => {
      const temData = data.map((product) => {
        if (product.id === id) {
          product.like = !product.like;
        }
        return product;
      });
      setData([...temData]);
      filterFunction();
    },
    [data]
  );

  const filterFunction = () => {
    const likeData = data.filter((product) => product.like === true);
    const disLikeData = data.filter((product) => product.like === false);
    setData([...likeData, ...disLikeData]);
  };

  useEffect(() => {
      if(localStorage.getItem('email')){
        filterFunction();
      }else{
        navigate('/login')
      }
  }, []);

  return (
    <ProductListComponent >
      <InputBox 
          name=''
          type='text'
          InputBoxClassName='productSeachBox' 
          handleChange={handleSearch}
          placeHolder='Search Product' 
         />
        <div className="mt-5">
      {data.filter((product)=>{
        if(searchedResult===""){
          return true
        }
        else if(product.product.toLowerCase().includes(searchedResult)){
          return true;
        }
      }).map((data) => {
        return (
          <CardList
            handleLike={handleLike}
            key={data.id}
            id={data.id}
            product={data.product}
            likeStatus={data.like}
          />
        );
      })}
      </div>
    </ProductListComponent>
  );
}

export default ProductList;

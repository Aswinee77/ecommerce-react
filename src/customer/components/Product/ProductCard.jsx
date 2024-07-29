import React from "react"
import  "./ProductCard.css"
import { useNavigate } from "react-router-dom"
const ProductCard = ({ product }) =>{
  const navigate = useNavigate();
return(
  
   <div onClick={()=>navigate(`/product/${5}`)} className="productCard w-[15rem] m-3 transition-all cursor-pointer">
        <div className="h-[20rem]">
          <img className="h-full w-full object-cover object-left-top" src={product.imageUrl}
           alt="women's top"></img>
        </div>
        <div className="textPart bg-white p-3" >
            <div>
              <p className="font-bold opacity-60 mr-36">SEL VIA</p>
              <span> Striped V-Neck Top For Women </span>
            </div>
            <div className="flex items-center space-x-3">
              <p className="font-semibold ">1999</p>
              <p className="line-through opacity-50 ">12345</p>
              <p className="font-semibold text-green-600">60%</p>
            </div>
        </div>
    </div>
  )
}

export default ProductCard;
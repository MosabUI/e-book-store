import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { Rating } from "./Rating";

 const ProductCard = ({product}) => {
    const { cartList, addToCart, removeFromCart } = useCart();
    const [inCart, setInCart] = useState(false);
    const {id, name, overview, poster, price, rating, best_seller} = product;

    useEffect(() => {
        const productInCart = cartList.find(item => item.id === product.id);

        if(productInCart){
            setInCart(true);
        } else {
            setInCart(false);
        }

    }, [cartList, product.id]);
  return (
    <div className="m-3 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 ">
        <Link to={`/products/${id}`} className="relative" >
            { best_seller && <span className="absolute top-4 left-2 px-2 bg-orange-500 bg-opacity-90 text-white rounded">Best Seller</span> }
            <img className="rounded-t-lg w-full h-64" src={poster} alt={name} />
        </Link>
        <div className="p-5">
            <Link to={`/products/${id}`}>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white h-[80px]">{name}</h5>
            </Link>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{overview}</p>
            
            <div className="flex items-center my-2">
                <Rating rating={rating} />
            </div>

            <p className="flex justify-between items-center mt-12">
                <span style={{fontSize:"20px"}} className=" dark:text-gray-200">
                    <span>$</span><span>{price}</span>
                </span>
                <div >
                    { !inCart && <button onClick={() => addToCart(product)} className={`inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg w-[133px]  hover:bg-blue-800 ${product.in_stock ? "" : "cursor-not-allowed bg-yellow-600 w-[155px] hover:bg-yellow-700"}`} disabled={ product.in_stock ? "" : "disabled" }>{product.in_stock ? "Add to cart" : "Coming soon"}<i className="ml-1 bi bi-plus" style={{fontSize:"20px"}}></i></button> }  
                    { inCart && <button onClick={() => removeFromCart(product)} className={`inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg  w-[133px] hover:bg-red-800 ${product.in_stock ? "" : "cursor-not-allowed"}`} disabled={ product.in_stock ? "" : "disabled" }>Remove Item <i className="ml-1 bi bi-trash " style={{fontSize:"20px"}}></i></button> } 
                 </div>
            </p>
        </div>
    </div>
  )
}

export default ProductCard
import { useEffect, useState } from 'react'
import ProductCard from "../../components/ProductCard"
import { getFeaturedList } from '../../services/productService'
import { toast } from "react-toastify";

 const FeaturedProducts = () => {
  
  const [products,setProducts] = useState([])

  useEffect(()=>{
   const fetchData = async ()=>{

    try {
      const data = await getFeaturedList()
      setProducts(data)
      
    } catch (error) {
      toast.error(error.message)
    }

  
  }
    fetchData()
  },[])

  return (
    <section className="my-20 max-w-full">
        <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-5 underline underline-offset-8">Featured eBooks</h1>    
        <div className="flex flex-wrap justify-center lg:flex-row">
        {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            )) }   
        </div>
    </section>
  )
}
export default FeaturedProducts
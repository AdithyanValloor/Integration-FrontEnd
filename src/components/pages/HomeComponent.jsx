
import { useEffect, useState } from "react";
import ProductCard from "../ProductCard";
import axios from "axios";

const backendURL = import.meta.env.VITE_BACKEND_URL

function HomeComponent() {

  const [products, setProducts] = useState([])

  useEffect(()=>{  
    async function FetchData () {
      try {
        const response = await axios.get(`${backendURL}`)
        setProducts(response.data)
        return console.log(response.data[0]);
      } catch (error) {
        
      }
    }
    FetchData()
  },[])
  
  return (
    <>
      <div className="bg-white min-h-screen p-6 text-white flex justify-center">
        <div className="w-full max-w-6xl">
          <h1 className="text-2xl font-bold mb-4 text-center">Trending</h1>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeComponent;

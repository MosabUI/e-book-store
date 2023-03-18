import logo from "../assets/logo.png"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { Search } from "./Search"
import DropdownLoggedOut from "./DropdownLoggedOut"
import DropdownLoggedIn from "./DropdownLoggedIn"
import { useCart } from "../context/CartContext"

const Header = () => {
  const [show,setShow]=useState(false)
  const [open,setOpen]=useState(false)

 const [darkMode,setDarkMode]=useState(JSON.parse(localStorage.getItem("dark")) || false)
 const token = JSON.parse(sessionStorage.getItem("token"))
 const {cartList} = useCart()

 useEffect(()=>{
  localStorage.setItem("dark",JSON.stringify(darkMode))
  if(darkMode){
    document.documentElement.classList.add("dark")
  }else{
    document.documentElement.classList.remove("dark")
  }
 },[darkMode])
  return (
    <>
    <header>      
      <nav className="bg-white dark:bg-gray-900 w-full">
          <div className="border-b w-full border-slate-200 dark:border-b-0 flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-3">
                  <Link to="./" className="flex items-center">
                    <img src={logo} alt="logo" className="mr-3 w-10 h-10" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">E-Books</span>
                  </Link>
                  
                  <div className="flex items-center relative">
                    <span onClick={()=>setDarkMode(!darkMode)} className={`cursor-pointer text-xl text-gray-700 ${darkMode?"bi bi-sun":"bi bi-moon"} dark:text-white mr-5 `}></span>
                    <span onClick={()=>setShow(!show)} className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-search"></span>
                    <Link to="/cart" className="text-gray-700 dark:text-white mr-5">
                      <span className="text-2xl bi bi-cart-fill relative">
                        <span className="text-white text-sm absolute -top-1 left-2.5 bg-rose-500 px-1 rounded-full ">{cartList.length}</span>
                      </span>                    
                    </Link>
                    <span  onClick={()=>setOpen(!open)} className="bi bi-person-circle cursor-pointer text-2xl text-gray-700 dark:text-white"></span>
                   {open && (token ? <DropdownLoggedIn setOpen={setOpen}/> : <DropdownLoggedOut setOpen={setOpen}  /> ) }
              </div>
          </div>
      </nav>
      
    </header>
      {show &&<Search/>}
    </>
  )
}



export default Header

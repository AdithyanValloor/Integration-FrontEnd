import React, { useState } from 'react'
import {ChevronDown, Heart, Menu, Search, ShoppingCart, User2Icon, X} from 'lucide-react'
import { NavLink } from 'react-router-dom'

function Header() {
  
  const [showCategory, setShowCategory] = useState(false)
  const [showSearch, setShowSearch] = useState(false)
  const [showHam, setShowHam] = useState(false)

  const handleHam = () => setShowHam((prev) => !prev)

  const handleClick = () => setShowSearch((prev) => !prev)

  return (
    <header>
      <nav className='h-16 flex flex-row items-center justify-center lg:justify-normal bg-neutral-100 shadow-lg relative'>
        <button className='absolute left-5 lg:hidden' onClick={handleHam}>
          <Menu/>
        </button>
        
        <NavLink to="/" className="absolute font-silkscreen text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mx-4 font-extralight transition-opacity duration-250 cursor-pointer hover:opacity-70">
          Virtumart
        </NavLink>

        <ul className='hidden lg:flex font-poppins gap-8 text-xl ml-auto mr-auto h-full items-center font-light'>
            <li>
              <NavLink className={'h-full flex items-center hover:text-cyan-500 transition-all duration-200'} to='/products'>
                Products
              </NavLink>
            </li>
        </ul>
        <div className='flex gap-3 mx-5 h-full absolute right-0'>
          <div className='hidden lg:flex items-center relative w-10'>
            <button className={`hover:text-cyan-500 hover:scale-110 transition-all duration-200 absolute right-0 z-10 ${showSearch && ' bg-slate-800 text-white rounded-full p-1'}`} onClick={handleClick}>
              <Search strokeWidth={1}/>
            </button>
            <div><input className={`absolute -right-1 transform -translate-y-1/2 rounded-full shadow-md h-10 pl-2 focus:outline-none transition-all duration-300 ${showSearch ? 'w-72 opacity-100 px-3' : 'w-0 opacity-0 overflow-hidden px-0'}`} placeholder='Search for products'type="text" /></div>
          </div>
          <button className=' hover:text-cyan-500 hover:scale-110 transition-all duration-200 relative'>
            <ShoppingCart strokeWidth={1}/>
            <h5 className='text-[9px] bg-black text-white w-3.5 h-3.5 rounded-full absolute top-3 left-4'>0</h5>
          </button>
          <button className=' hover:text-cyan-500 hover:scale-110 transition-all duration-200 relative'>
            <Heart strokeWidth={1}/>
            <h5 className='text-[9px] bg-black text-white w-3.5 h-3.5 rounded-full absolute top-3 left-4'>0</h5>
          </button>
          <button className=' hover:text-cyan-500 hover:scale-110 transition-all duration-200'>
            <User2Icon strokeWidth={1}/>
          </button>
        </div>
      </nav>
      <div className='z-20 bg-neutral-100  h-10 flex items-center justify-center shadow-lg lg:hidden py-6 px-5'>
        <div className='flex items-center w-full relative'>
          <input className={`rounded-full shadow-md h-10 pl-2 focus:outline-none w-full px-3 bg-neutral-100`} placeholder='Search for products'type="text" />
          <button className={`absolute hover:text-cyan-500 right-1 z-10  bg-slate-800 text-white rounded-full p-1`} onClick={handleClick}>
            <Search strokeWidth={1}/>
          </button>
        </div>
      </div>
      <div className={`shadow-md w-3/4 h-lvh bg-white z-50 absolute top-0 transform transition-all duration-300 ${showHam? 'opacity-100 translate-x-0': 'opacity-0 -translate-x-full'}`}>
          <button className='p-5 cursor-pointer' onClick={handleHam}>
            <X/>
          </button>
          
          <ul className='p-5 flex flex-col font-poppins text-xl font-light '>
      
            {['Home','All Products', 'Category'].map((item) => (
            
              <li 
                key={item} 
                className= {`cursor-pointer h-full group ${item === 'Category'? 'relative' : ''}`}
                {...(item === 'Category' ?
                  {
                    onMouseEnter: () => setShowCategory(true),
                    onMouseLeave: () => setShowCategory(false)
                  }
                  :{})
                }
              >
                <NavLink className={'h-full flex items-center hover:text-cyan-500 transition-all duration-200'} to={`/${item.toLowerCase().replace(/\s+/g, '-')}`}>
                  {item}
                  {item === 'Category'? <ChevronDown className={`absolute right-[-25px] transition-all ${showCategory?'rotate-180': 'rotate-0'}`}/>:''}
                </NavLink>
              
                {item === "Category" && (

                <div className={`w-52 z-50 bg-gray-200 shadow-[1px_1px_7px_0px_rgba(0,_0,_0,_0.5)] absolute left-0 p-1 transition-all duration-200 transform 
                  ${showCategory ? `opacity-100 translate-y-0` : `opacity-0 translate-y-3 pointer-events-none`}`}>
                  <ul>
                    <li className=' p-1 hover:text-cyan-500 transition-colors duration-200'>Electronics</li>
                    <li className=' p-1 hover:text-cyan-500 transition-colors duration-200'>Electronics</li>
                    <li className=' p-1 hover:text-cyan-500 transition-colors duration-200'>Electronics</li>
                    <li className=' p-1 hover:text-cyan-500 transition-colors duration-200'>Electronics</li>
                    
                  </ul>
                </div>
                )}

              </li>))}
          
          </ul>

      </div>
    </header>
  )
}

export default Header 
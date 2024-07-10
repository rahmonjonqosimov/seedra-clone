import React, {useEffect, useState} from 'react'

// icons
import { BiSearch } from 'react-icons/bi'

// RTK
import { ProductsSchema, useGetProductSearchQuery } from '../../../context/api/api'

// react-router-dom
import { useNavigate, useLocation } from 'react-router-dom'


const SearchProduct:React.FC = () => {

    const [value, setValue] = useState<string>('')

    const { data } = useGetProductSearchQuery({q: value})

    const navigate = useNavigate()

    const { pathname } = useLocation() 

    useEffect( () => {
        setValue( "" )
    } , [ pathname ])

    document.body.style.overflow = value.trim() ? 'hidden' : 'auto'
    
    const searchItems = data?.products?.slice( 0 , 5 )?.map((product:ProductsSchema) => ( 

        <div onClick={ ( ) => navigate( `/product/${product.id}/${product.category}` ) } className="serach_item" key={product.id}>

            <img src={product.images[0]} width={80} height={80} alt={product.title} />

            <span> { product.title } </span>

        </div>

    ))

  return (
    <>
        <div className={`search ${value.trim() && "show"}`}>
        
            <input value={value} onChange={(e) => setValue(e.target.value)} type="search" placeholder="Search" />
        
             <BiSearch  />

             {

                 value.trim() && <div className="search_items"> { searchItems } </div>

              }

       </div>

       {
          value.trim() && <div className="overlay"></div>
       }
    </>
  )
}

export default SearchProduct
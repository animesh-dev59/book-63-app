 'use client'
import { BooksContext } from '@/context/BooksProvider';
import { IBook } from '@/types/IBook';
import React, { useContext } from 'react';

const WishListButton = ({book}:{book:IBook}) => { 
  const {wishList,setWishList} =useContext(BooksContext);
  const handleWishListButton = ()=>{   
    setWishList([...wishList,book]);
    alert(`your book : ${book.bookName}`);
  }
  return (<button  
    onClick={()=>handleWishListButton()}
   className="px-6 py-3 bg-[#50B1C9] text-white font-semibold rounded-xl hover:bg-[#3fa0b8] transition duration-200">
              Wishlist
            </button>
  );
};

export default WishListButton;
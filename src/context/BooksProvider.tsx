// import React, { createContext, useState } from 'react';

// const BooksContext = createContext({})

// const BooksProvider = ({children}) => { 
//   const [readBooks, setReadBooks] = useState([]);
//   const [WishList,setWishList] =useState([])

//   return (<BooksContext.Provider value={readBooks,setReadBooks,WishList,setWishList}>
//      {children}
//      </BooksContext.Provider>
//   );
// };

// export default BooksProvider; 

'use client';
import { IBook } from '@/types/IBook';
import React, { createContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

// ১. Context-এর জন্য TypeScript Interface তৈরি করা
export interface IBooksContextType {
  readBooks: IBook[];
  setReadBooks: Dispatch<SetStateAction<IBook[]>>;
  wishList: IBook[];
  setWishList: Dispatch<SetStateAction<IBook[]>>;
}

// ২. Context তৈরি করা (প্রারম্ভিক অবস্থায় undefined রাখা ভালো)
export const BooksContext = createContext<IBooksContextType>({
  readBooks:[],
  setReadBooks:()=>{},
  wishList:[],
  setWishList:()=>{}
});

interface BooksProviderProps {
  children: ReactNode;
}

const BooksProvider = ({children}: BooksProviderProps) => { 
  // ৩. useState-এ IBook[] টাইপ ডিফাইন করা
  const [readBooks, setReadBooks] = useState<IBook[]>([]);
  const [wishList, setWishList] = useState<IBook[]>([]);

  const value: IBooksContextType = {
    readBooks,
    setReadBooks,
    wishList,
    setWishList,
  };

  return (
    <BooksContext.Provider value={value}>
      {children}
    </BooksContext.Provider>
  );
};

export default BooksProvider;
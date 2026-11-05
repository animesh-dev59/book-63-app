"use client";
import ListedTabsPages from "@/components/shared/ListedTabsPages";
import { BooksContext } from "@/context/BooksProvider";
import { IBook } from "@/types/IBook";
import React, { useContext } from "react";

const ListedBooks = () => {
  const { readBooks, wishList } = useContext(BooksContext);
  return (
    <div>

       <div className="text-center my-3"> 
        <select defaultValue="Pick a text editor" className="select select-primary">
  <option disabled={true}>Pick a text editor</option>
  <option>VScode</option>
  <option>VScode fork</option>
  <option>Another VScode fork</option>
</select>
       </div>
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-box">
        <input
          type="radio"
          name="my_tabs_6"
          className="tab"
          aria-label={`Read-books(${readBooks.length})`}
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          {  
            readBooks.length > 0 ? readBooks.map((book:IBook)=>{ 
              return <ListedTabsPages key={book.bookId} book={book}/>
            }):<p className="text-center bg-blue-400 rounded-4xl py-4 font-bold text-3xl"> no data is a Wishlist</p>

            }
        </div>

        <input
          type="radio"
          name="my_tabs_6"
          className="tab"
          aria-label={`Wishlist-books(${wishList.length})`}
          defaultChecked
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
            {  
            wishList.length > 0 ? wishList.map((book:IBook)=>{ 
              return <ListedTabsPages key={book.bookId} book={book}/>
            }):<p className="text-center bg-blue-400 rounded-4xl py-4 font-bold text-3xl"> no data is a Wishlist</p>

            }
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;

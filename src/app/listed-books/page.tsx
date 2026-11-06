"use client";
import ListedTabsPages from "@/components/shared/ListedTabsPages";
import { BooksContext } from "@/context/BooksProvider";
import { IBook } from "@/types/IBook";
import { useContext, useState } from "react";

const ListedBooks = () => {
  const { readBooks, setReadBooks, wishList, setWishList } =
    useContext(BooksContext);

  const [sortBy, setSortBy] = useState<"ra" | "pa" | "ye">("ra");
  const sortBooks = (bangladesh: IBook[]) => {
    const sortedBooks = [...bangladesh];
    if (sortBy === "ra") {
      sortedBooks.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "pa") {
      sortedBooks.sort((a, b) => b.totalPages - a.totalPages);
    } else if (sortBy === "ye") {
      sortedBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
    }
    return sortedBooks;
  };
  const sortedReadBooks = sortBooks(readBooks);
  const sortedWishlistbooks = sortBooks(wishList);
  // all data remove 
  const handleAllDataRemove = ()=>{
    setReadBooks([]);
  }
  // Read Books Delete
  const handleReadDelete = (id: number) => {
    setReadBooks((prev) => prev.filter((book) => book.bookId !== id));
  };

  // Wishlist Delete
  const handleWishlistDelete = (id: number) => {
    setWishList((prev) => prev.filter((book) => book.bookId !== id));
  };
  return (
    <div>
      <div className="text-center my-3">
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as "ra" | "pa" | "ye")}
          defaultValue="Pick a text editor"
          className="select select-primary"
        >
          <option disabled={true}>sortBy</option>
          <option value={"ra"}>rating</option>
          <option value={"pa"}>pages</option>
          <option value={"ye"}>year</option>
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
           
          {sortedReadBooks.length > 0 ? (
          <div> 
           { 
            sortedReadBooks.map((book: IBook) => {
              return (
                <ListedTabsPages
                  key={book.bookId}
                  book={book}
                  onDelete={handleReadDelete}
                />
              );
            })
           }
           <div className="text-center "> 
            <button  
            onClick={handleAllDataRemove}
             className="btn btn-error my-4 text-center ">All Data Remove</button>
           </div>
          </div>
            
          ) : ( <p className="text-center bg-blue-400 rounded-4xl py-4 font-bold text-3xl">
              no data is a ReadBooks
            </p>
          )}
        </div>

        <input
          type="radio"
          name="my_tabs_6"
          className="tab"
          aria-label={`Wishlist-books(${wishList.length})`}
          defaultChecked
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          {sortedWishlistbooks.length > 0 ? (
            sortedWishlistbooks.map((book: IBook) => {
              return (
                <ListedTabsPages
                  key={book.bookId}
                  book={book}
                  onDelete={handleWishlistDelete}
                />
              );
            })
          ) : (
            <p className="text-center bg-blue-400 rounded-4xl py-4 font-bold text-3xl">
              no data is a Wishlist
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;

"use client";
import { BooksContext } from "@/context/BooksProvider";
import { IBook } from "@/types/IBook";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const ReadButton = ({ book }: { book: IBook }) => {
  const { readBooks, setReadBooks } = useContext(BooksContext);
  // console.log(readBooks,setReadBooks,'readbooks','setReadBooks');
  const handleReadButton = () => {
    // console.log('btn clicked');
    setReadBooks([...readBooks, book]);
    toast.success(`your bookName:${book.bookName}`);
  };
  return (
    <button
      onClick={() => handleReadButton()}
      className="px-6 py-3 border border-gray-300 font-semibold text-gray-800 rounded-xl hover:bg-gray-50 transition duration-200"
    >
      Read
    </button>
  );
};

export default ReadButton;

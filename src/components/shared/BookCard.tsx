import { IBook } from "@/types/IBook";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BookCard = ({ book }: { book: IBook }) => {
  return (
    <div>
      <div className="border border-gray-200 rounded-2xl p-6 flex flex-col justify-between bg-white hover:shadow-lg transition duration-300">
        <div>
          {/* Book Image Section */}
          <div className="bg-gray-100 rounded-2xl py-8 px-6 flex justify-center items-center h-60 mb-6">
            <div className="relative w-[300] h-[200]  shadow-md rounded overflow-hidden">
              <Image
                src={book.image}
                alt={book.bookName}
                fill
                className="object-cover"
              />
            </div>
          </div>
          Tags Section
          {/* Book Title */}
          <h2 className="text-xl font-bold text-gray-800 mb-2 line-clamp-1">
            {book.bookName}
          </h2>
          {/* Author Name */}
          <p className="text-gray-600 font-medium text-sm mb-4">
            By : {book.author}
          </p>
          <hr className="border-dashed border-gray-200 mb-4" />
          {/* Category & Rating */}
          <div className="flex justify-between items-center text-sm font-medium text-gray-600 mb-6">
            <span>{book.category}</span>
            <div className="flex items-center gap-1">
              <span>{book.rating.toFixed(2)}</span>
              <span className="text-yellow-500 text-base">★</span>
            </div>
          </div>
        </div>

        {/* View Details Button */}
        <Link
          href={`/books/${book.bookId}`}
          className="w-full text-center bg-green-600 text-white font-semibold py-2.5 px-4 rounded-xl hover:bg-green-700 transition duration-200 block"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default BookCard;

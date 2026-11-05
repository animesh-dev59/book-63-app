import { IBook } from '@/types/IBook';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FiTrash2 } from 'react-icons/fi';

const ListedTabsPages = ({book}:{book:IBook}) => {
  return (
    <div className=''>
      <div className="relative border border-gray-200 rounded-2xl p-5 flex flex-col md:flex-row items-center gap-6 bg-white shadow-sm hover:shadow-md transition-all duration-300 mb-4">

      {/* Left Side: Book Image Box (Margin add kora hoyeche jate button-er sathe overlap na hoy) */}
      <div className="bg-gray-100 rounded-xl p-4 flex justify-center items-center w-full md:w-48 h-48 flex-shrink-0 mt-4 md:mt-0">
        <div className="relative w-28 h-36 rounded shadow-md overflow-hidden">
          <Image src={book.image} alt={book.bookName} fill className="object-cover" />
        </div>
      </div>

      {/* Middle & Right Content */}
      <div className="flex flex-col flex-grow w-full">
        <h2 className="text-xl font-bold text-gray-900 mb-1">{book.bookName}</h2>
        <p className="text-gray-600 font-medium text-sm mb-3">By : {book.author}</p>

        {/* Tags and Publishing Year */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">

          <div className="flex items-center gap-1 text-gray-500 text-xs md:text-sm">
            <span>📅</span>
            <span>Year of Publishing: {book.yearOfPublishing}</span>
          </div>
        </div>
        

        {/* Publisher and Pages */}
        <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-6">
          <div className="flex items-center gap-1.5">
            <span>👥</span>
            <span>Publisher: {book.publisher}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span>📄</span>
            <span>Page {book.totalPages}</span>
          </div>
        </div>

        <hr className="border-gray-100 mb-4" />

        {/* Bottom Category, Rating and View Details Button */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="bg-blue-50 text-blue-400 font-medium px-4 py-2 rounded-full text-xs">
              Category: {book.category}
            </span>
            <span className="bg-orange-50 text-orange-400 font-medium px-4 py-2 rounded-full text-xs">
              Rating: {book.rating}
            </span>
          </div>
            <button
            
          
          className=" text-gray-400 hover:text-red-500 transition-colors p-2 bg-gray-50 hover:bg-red-50 rounded-full z-10"
          title="Delete book"
        >
          <FiTrash2 className='font-bold text-5xl text-black' />
        </button>

          <Link
            href={`/books/${book.bookId}`}
            className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2.5 rounded-full text-sm transition duration-200"
          >
            View Details
          </Link> 

        </div>
      </div>
    </div> 
    </div>
  );
};

export default ListedTabsPages; 

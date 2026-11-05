import ReadButton from '@/components/bookDetails/ReadButton';
import WishListButton from '@/components/bookDetails/WishListButton';
import { IBook } from '@/types/IBook';
import Image from 'next/image';
import React from 'react';

interface IBookDetailsPagesProps{ 
  params:Promise<{
    id:string
  }>;
}
const getbooks =async()=>{ 
  const res = await fetch('http://localhost:3000/booksData.json');
  const data = await res.json();
  return data;
}

const ViewDetailsPages = async({params}:IBookDetailsPagesProps) => {
  const {id} = await params; 
  const booksData = await getbooks();

  const book = booksData.find((book:IBook)=> book.bookId === Number(id)) as IBook;

  return (
   <div>     
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        
        {/* Left Side: Book Image Card */}
        <div className="bg-gray-100 rounded-2xl p-12 flex justify-center items-center shadow-sm">
          <div className="relative w-64 h-96 shadow-lg rounded-md overflow-hidden">
            <Image
              src={book.image}
              alt={book.bookName}
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Right Side: Book Details Information */}
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{book.bookName}</h1>
          <p className="text-gray-600 font-medium mb-4">By : {book.author}</p>
          
          <hr className="border-gray-200 mb-4" />
          
          <p className="text-gray-600 font-medium mb-4">{book.category}</p>
          
          <hr className="border-gray-200 mb-4" />

          {/* Review / Description */}
          <p className="text-gray-700 text-sm leading-relaxed mb-6">
            <strong className="text-gray-900">Review: </strong>
            {book.review}
          </p>

          {/* Tags */}
          <div className="flex items-center gap-3 mb-6">
            <span className="font-bold text-gray-800 text-sm">Tag</span>
            <div className="flex flex-wrap gap-2">
              {book.tags?.map((tag: string, index: number) => (
                <span
                  key={index}
                  className="bg-green-50 text-green-600 font-medium px-3 py-1 rounded-full text-xs"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          <hr className="border-gray-200 mb-6" />

          {/* Additional Info List */}
          <div className="space-y-2 text-sm text-gray-600 mb-8">
            <div className="flex">
              <span className="w-48 font-medium">Number of Pages:</span>
              <span className="font-bold text-gray-900">{book.totalPages}</span>
            </div>
            <div className="flex">
              <span className="w-48 font-medium">Publisher:</span>
              <span className="font-bold text-gray-900">{book.publisher}</span>
            </div>
            <div className="flex">
              <span className="w-48 font-medium">Year of Publishing:</span>
              <span className="font-bold text-gray-900">{book.yearOfPublishing}</span>
            </div>
            <div className="flex">
              <span className="w-48 font-medium">Rating:</span>
              <span className="font-bold text-gray-900">{book.rating}</span>
            </div>
          </div>

          {/* Action Buttons: Read & Wishlist */}
          <div className="flex items-center gap-4">
           <ReadButton book={book}/>
            <WishListButton book={book}/>
          </div>

        </div>
      </div>
    </div>
   </div>
  );
};

export default ViewDetailsPages;
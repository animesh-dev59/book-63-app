import { IBook } from '@/types/IBook';
import React from 'react';   
import BookCard from '../shared/BookCard';

const getBooks = async () => {
  const url = process.env.Next_PUBLIC_URL || 'http://localhost:3000/';
  const res = await fetch(
    `${url}/booksData.json`
  );

  const data = await res.json();
  return data;
};

const Books = async() => { 
  const booksData = await getBooks();
  return (
    <div className='container mx-auto my-4'>
      <h3 className='text-2xl font-bold text-center '>Books</h3>
       <div className='grid gap-3 lg:grid-cols-3 md:grid-cols-4 my-4'>
        { 
        booksData.slice(0,4).map((book:IBook)=>{ 
          return <BookCard key={book.bookId} book={book}/>
        })
       }
       </div>
    </div>
  );
};

export default Books;
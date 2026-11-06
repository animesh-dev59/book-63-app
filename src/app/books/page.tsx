import BookCard from '@/components/shared/BookCard';
import { IBook } from '@/types/IBook';
import React from 'react';   
// import BookCard from '../shared/BookCard';

const getbooks =async():Promise<IBook[]>=>{ 
  const url = process.env.NEXT_PUBLIC_URL || 'http://localhost:3000/';
  const res = await fetch(`${url}/booksData.json`);
  const data = await res.json();
  return data;
}

const BooksRoutePages = async() => { 
  const booksData = await getbooks();
  return (
    <div className='container mx-auto my-4'>
      <h3 className='text-2xl font-bold text-center '> All Books</h3>
       <div className='grid gap-3 lg:grid-cols-3 md:grid-cols-4 my-4'>
        { 
        booksData.map((book:IBook)=>{ 
          return <BookCard key={book.bookId} book={book}/>
        })
       }
       </div>
    </div>
  );
};

export default BooksRoutePages;
import React, { useContext } from "react";
import { booksContext } from "./contexts/booksContext";

import { BrowserRouter , Link } from "react-router-dom";

function ChildComponent() {
  const { books, setBooks } = useContext(booksContext);
  return (
    <div
      style={{ textAlign: "left", display: "flex" }}
    >
      {books.map((book, index) => (
        <div  key={book.id} style={{ display: "flex", justifyContent: "space-between" }}>
          <div><img src={book.volumeInfo.imageLinks.thumbnail} style={{ display: 'block' }} alt="" /></div>
          <div >- {book.volumeInfo.title}</div>
          <BrowserRouter>
          <Link to={`/BookDetails/${book.id}`} style={{ textDecoration: 'none' }}>
               <span className="details">details</span>
          </Link>
          </BrowserRouter>
        </div>
      ))}
    </div>
  );
}

export default ChildComponent;

import React, { useContext , useState } from "react";
import { booksContext } from "./contexts/booksContext";
import ItemsCarousel from 'react-items-carousel';


import { BrowserRouter , Link } from "react-router-dom";

function BooksList() {
  const { books, setBooks } = useContext(booksContext);
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  return (
    <div style={{ padding: `0 ${chevronWidth}px` }}>
    <ItemsCarousel
      requestToChangeActive={setActiveItemIndex}
      activeItemIndex={activeItemIndex}
      numberOfCards={10}
      gutter={20}
      leftChevron={<button>{'<'}</button>}
      rightChevron={<button>{'>'}</button>}
      outsideChevron
      chevronWidth={chevronWidth}
    >
    <div
      style={{ textAlign: "left", display: "flex"}}
    > 
      
      {books.map((book, index) => (
        <div  key={book.id} style={{ display: "flex", justifyContent: "space-around" , flexDirection: "column" , marginLeft: '20px'}}>
          <div><img src={book.volumeInfo.imageLinks.thumbnail} style={{ width: '150px',height: '200px' }} alt="" /></div>
          <div >- {book.volumeInfo.title}</div>
          <BrowserRouter>
          <Link to={`/BookDetails/${book.id}`} style={{ textDecoration: 'none' }}>
               <span className="details">details</span>
          </Link>
          </BrowserRouter>
        </div>
      ))}
      
    </div>
    </ItemsCarousel>
    </div>
  );
}

export default BooksList;

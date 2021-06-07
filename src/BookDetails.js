import React, { useContext } from "react";
import { booksContext } from "./contexts/booksContext";
import "./BookDetails.css";
// import FeatherIcon from "feather-icons-react";

function BookDetails(props) {
  const { books, setBooks } = useContext(booksContext);

  const id = props.match.params.id;
  console.log(id)

  const displayProducts = () => {
    const book = books.find((product) => product.id === id);
    if (book) {
        return (
            <>
            <div className="product">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-5 col-lg-3">
                        <div className="parent-box">
                            <div className="box-img text-center">
                                <img src={book.volumeInfo.imageLinks.thumbnail} style={{ width: '400px'}}/>
                                <div className="button">
                                   
                                   
                                  
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-7 col-lg-6">
                        <div className="box-info">
                            <span>Free</span>
                            <div className="heading">
                                <h3>{book.volumeInfo.title}</h3>
                                <div className="evaluation">
                           
                                    <span>{book.volumeInfo.averageRating} Ratings</span>
                                </div>
                               
                            </div>
                            <ul className="list-unstyled details">
                                <li><span>Author</span>: {book.volumeInfo.authors[0]}</li>
                                <li><span>Number Of Pages</span>: {book.volumeInfo.pageCount}</li>
                                <li><span>Publication Year</span>: {book.volumeInfo.publishedDate}</li>
                            </ul>
                            <div className="about-product">
                                <div className="about-info">
                                    <h4>About Book</h4>
                                    <p>{book.volumeInfo.description}.</p>
                                </div>
                                <div className="about-info">
                                    <h4>About Author</h4>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia nemo atque porro,
                                        quod cum odio consectetur architecto veritatis vel incidunt dolore at corporis!
                                        Accusantium eum consequuntur incidunt, sed quisquam delectus.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3">
                        <div className="reviews">
                            <h4>Popular Reviews (5)</h4>
                            <div className="box-person">
                                <div className="img">
                              
                                </div>
                                <div className="info-details">
                                    <h5>Adel Ali</h5>
                                    <div className="evaluation">
                                  
                                    </div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                            </div>
                            <div className="box-person">
                                <div className="img">
                                
                                </div>
                                <div className="info-details">
                                    <h5>Esraa Mohamed</h5>
                                    <div className="evaluation">
                                  
                                    </div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                            </div>
                            <a href="#" className="more">See More..</a>
                        </div>
                        <div className="replay">
                            <h4>Reviews (7)</h4>
                            <div className="box-person">
                                <div className="img">
                                
                                </div>
                                <div className="info-details">
                                    <h5>Ola Gamal</h5>
                                    <div className="evaluation">
                            
                                    </div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    <a href="#" className="report">Report</a>
                                </div>
                            </div>
                            <div className="box-person">
                                <div className="img">
                                
                                </div>
                                <div className="info-details">
                                    <h5>Ahmed Emara</h5>
                                    <div className="evaluation ">
                                   
                                    </div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    <a href="#" className="report">Report</a>
                                </div>
                            </div>
                            <a href="#" className="more">See More..</a>
                        </div>
                        <div className="mail">
                            <h4>Invite Friends</h4>
                            <p>I Strong Recommend This Book For You!</p>
                            <form action="">
                                <input type="email" name="mail" placeholder="Your Friends" />
                                <input type="submit" value="Go" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     
    <div className="slider">
        <div className="container">
            <div className="info">
                <span>Similar Books</span><span>(5 Books)</span>
            </div>
            <div className="up">
                <div className="client active">
                    <a href="#"><img src="https://edit.org/images/cat/book-covers-big-2019101610.jpg" /></a>
                    <a href="#"><img src="https://edit.org/images/cat/book-covers-big-2019101610.jpg" /></a>
                    <a href="#"><img src="https://edit.org/images/cat/book-covers-big-2019101610.jpg" /></a>
                    <a href="#"><img src="https://edit.org/images/cat/book-covers-big-2019101610.jpg" /></a>
                    <a href="#"><img src="https://edit.org/images/cat/book-covers-big-2019101610.jpg" /></a>
                </div>
              
         
            </div>
        </div>
    </div>

    </>

    );

}
  }
return (
    <section >
      <div className="container">{displayProducts()}</div>
    </section>
  );
}


export default BookDetails;
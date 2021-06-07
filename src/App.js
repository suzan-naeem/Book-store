import { useEffect, useState } from "react";
import "./styles.css";
import { booksContext } from "./contexts/booksContext.js";

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import BooksList from "./BooksList";
import BookDetails from './BookDetails';

export default function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("https://www.googleapis.com/books/v1/volumes?q=react")
      .then((res) => res.json())
      .then((data) => setBooks(data.items))
      .catch(console.log);
  }, []);
  return (
    <booksContext.Provider value={{ books, setBooks }}>
      <div className="App">
        <h1>Books</h1>
        
        <BooksList />
        <div style={{minHeight:400}}>
        <BrowserRouter>
      <Switch>
          {/* <Route path="/" exact component={Home}/>
          <Route path="/map" component={Map}/>
          <Route path="/writer" component={Writer}/>
          <Route path="/community" component={Community}/>
          <Route path="/mystories" component={MyStories}/>
          <Route path="/addstory" component={AddStory}/> */}
          <Route path="/BooksList" component={BooksList} exact/>
          <Route path="/bookdetails/:id" component={BookDetails} exact/>
          {/* <Route path="/searchresults" component={SearchResults}/>
          <Route path="/userprofile" component={UserProfile}/>
          <Route path="/admin" component={Admin}/> */}



        </Switch>
        </BrowserRouter>

      </div>
      </div>
    </booksContext.Provider>
  );
}
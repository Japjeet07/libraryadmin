import { Route, Routes, Navigate} from "react-router-dom";
import React from "react";
import Signup from "./components/Singup";
import Login from "./components/Login";
import AddBook from "./components/AddBook";
import Books from "./components/Book/Books";
import About from "./components/About";
import BookDetail from "./components/Book/BookDetail";
import Header from "./components/Header";
import Main from "./components/Main";
function App() {
  const user = localStorage.getItem("token");

  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
         {user && <Route path="/main" exact element={<Main />} />}
          
          <Route path="/" exact element={<Login />} />
          <Route path="/add" element={<AddBook />} exact />
          <Route path="/books" element={<Books />} exact />
          <Route path="/about" element={<About />} exact />
          <Route path="/books/:id" element={<BookDetail />} exact />
          <Route path="/signup" exact element={<Signup />} />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;

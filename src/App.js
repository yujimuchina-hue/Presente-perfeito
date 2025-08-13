import React, { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";
import CalendarLove from "./components/CalendarLove";
import BookList from "./components/BookList";
import BookDetails from "./components/BookDetails";
import { books } from "./data";

function App() {
  const [selectedBook, setSelectedBook] = useState(null);

  return (
    <div style={{maxWidth: 900, margin: "0 auto", padding: 20}}>
      <WelcomeMessage />
      <CalendarLove />
      <div style={{margin: "32px 0"}}>
        {selectedBook ? (
          <BookDetails book={selectedBook} onBack={() => setSelectedBook(null)} />
        ) : (
          <BookList books={books} onSelect={setSelectedBook} />
        )}
      </div>
      <footer style={{
        marginTop: 40,
        textAlign: "center",
        color: "#7b92a8",
        fontSize: 15
      }}>
        Feito com todo meu amor para você, baixinha 💙 <br/>
        <span style={{fontSize:11}}>by Denny</span>
      </footer>
    </div>
  );
}

export default App;
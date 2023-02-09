import axios from 'axios';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header.js'
import Footer from './components/Footer/Fotter.js';
import Quiz from './Pages/Quiz/Quiz';
import Home from './Pages/Home/Home';
import Result from './Pages/Result/Result';
import {useState} from 'react';
function App() {
   const[name,setName] =useState("");
   const [questions, setQuestions] = useState("");
   const [score,setScore] = useState(0);

   const fetchQuestions = async (category = "",difficulty = "") => {
      const { data } = await axios.get(`https://opentdb.com/api.php?amount=10${
         category && `&category=${category}`
       }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
     );
   setQuestions(data.results);
     
   };
 return(
  <BrowserRouter>
  <div className="App" style={{ backgroundImage: "url(https://media.istockphoto.com/id/473423540/vector/3d-seamless-wallpaper-pattern.jpg?s=612x612&w=0&k=20&c=6NmJLue_gZaLvizdi44YcEfV55B0zKjGHF8IeUYVeDo=)" }}>
     <Header />
     <Routes>
      <Route 
      path="/Capstone-Project" exact element = {
      <Home 
      name = {name} 
      setName = {setName}
      fetchQuestions = {fetchQuestions} 
      />
      }
      />
     
      <Route path="/quiz" element={
      <Quiz
       name = {name}
       questions = {questions}
       score = {score}
       setScore = {setScore}
       setQuestions = {setQuestions}
      />} />

      <Route path="/result" element={<Result
      name={name}
       score={score}
       />
       }
       />
      </Routes>
   </div>
   <Footer/>
   </BrowserRouter>
 );
}

export default App;

import './Home.css';
import { TextField,MenuItem,Button } from '@mui/material';
import Categories from '../../Data/Categories';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import ErrorMessage from '../../components/ErrorMessage/ErrrorMessage';
import image from '../../components/Images/quiz_icon.svg';

const Home = ({ name , setName ,fetchQuestions }) => {

    const [category, setCategory] = useState("");
    const [difficulty, setDifficulty ]= useState("")
    const [error, setError ]= useState(false)

    

    let navigate = useNavigate();

    const handleSubmit = () => {
        if(!category || !difficulty || !name){
             setError(true);
             return;
        }
        else{
            setError(false)
            fetchQuestions(category,difficulty);
            navigate("/quiz");
        }
    }
    return (
        <div className="content">
        <div className='settings'>
            <span style={{fontSize: 30 }}>
                Quiz Settings
            </span>

        <div className='settings_select'>
            {error && <ErrorMessage>Please Fill all the Fileds</ErrorMessage>}
          <TextField 
          style={{marginBottom:25}} 
          label='Enter Your Name' 
          variant='outlined' 
          onChange={(e) => setName(e.target.value)}
          />

          <TextField 
          select 
          label="select Category" 
          variant='outlined' 
          style={{marginBottom:30}}
          onChange={(e) => setCategory(e.target.value)}
          value={category}
          >
          {Categories.map((cat)=> (
          <MenuItem 
          key={cat.category}  
          value={cat.value}
          >
          {cat.category}
          </MenuItem>
          ))}    
          </TextField>
          <TextField 
          select 
          label="select Difficulty" 
          variant="outlined" 
          style={{ marginBottom: 30}}
          onChange={(e) => setDifficulty(e.target.value)}
          value={difficulty}
          >
          <MenuItem key="Easy" value="easy">
                Easy
          </MenuItem>
          <MenuItem key="Medium" value="medium">
                Medium
          </MenuItem>
          <MenuItem key="Hard" value="hard">
               Hard
          </MenuItem>
          </TextField>

          <Button variant="contained" color="primary" size="large"
          onClick={handleSubmit}
          >
            Star Quiz
          </Button>

        </div>

        </div>

        <img src={image} className="banner" alt="quiz img"/>
           
        </div>
      
    );
}
 export default Home;
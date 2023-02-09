import { Button } from '@mui/material';
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import "./Result.css";

const Result = ({ name, score }) => {
    let navigate = useNavigate();

  useEffect(() => {
    if (!name) {
        navigate("/Capstone-Project");
    }
  }, [name, navigate]);

  return (
    <div className="result">
      <span className="title">Final Score : {score}</span>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        style={{ alignSelf: "center", marginTop: 20 }}
        href="/Capstone-Project"
      >
        Go to homepage
      </Button>
    </div>
  );
};

export default Result;
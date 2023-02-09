import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
    return(
        <div className='header'>
           <Link to="/Capstone-Project" className='title'>QUIZ - APP </Link>
           <hr className = "divider" />
        </div>
    )
}
export default Header;

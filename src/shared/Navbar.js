import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { LangContext } from "../Context/LangContext";



function CollapsibleExample() {


    

    const count = useSelector((state)=> state.counter)
    const {contextLang, setContextLang} = useContext(LangContext)



    return (
        <Navbar className='' collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Link className='navbar-brand m-2' to="/">Movies</Link>
                <Navbar.Toggle  />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link className='nav-link m-1 text-danger' to="/favorite">
                        { count > 0 ? <span> <i className="text-danger fa-solid fa-heart p-1"></i> {count}</span>: <i className="text-danger fa-regular fa-heart"> </i>}</Link>

                        <button className='nav-link m-1  btn btn-body border-0' onClick={() => setContextLang(contextLang == "Ar" ? "En" : "Ar")}>
                        {contextLang}</button>
                    </Nav>
                    
                    <Nav>
                        <Link className='nav-link m-1' to="/login">Login</Link>
                        <Link className='nav-link m-1 me-2' to="/register">
                            Register
                        </Link>
                    </Nav>
                </Navbar.Collapse>
        </Navbar>
    );
}

export default CollapsibleExample;
import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {Navbar,Nav,NavDropdown,Form,FormControl,Button} from 'react-bootstrap'
import languages from '../../data/languages';
import movieCategories from '../../data/movie-categories';
import Select from 'react-select';
import './Header.css';

class  Header extends Component {
    constructor(){
        super();
        this.state = {
            selectedLanguage:null,
            selectedCategory:"Movies categories"
        }
        this.myRef = React.createRef();
        this.changeLanguage = this.changeLanguage.bind(this);
        this.selectedMovieCategory = this.selectedMovieCategory.bind(this);
    }
    selectedMovieCategory(e){
        console.log("hi",e.target.value)
       
    }
    changeLanguage(selectedLanguage){
        this.setState({
            selectedLanguage
        })
        console.log("selected Language",selectedLanguage)
    }
    componentDidMount(){
       
    }
    render(){
        
        console.log("input")
        return (
            <div>
                <Navbar bg="dark" variant="dark" expand="lg">
                    <Navbar.Brand >QT-Show</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                        <Nav.Link >
                        <Link  className="nav-link" to="/home">
                        Home
                        </Link>
                            
                            </Nav.Link>
                        <Nav.Link>
                        <Link className="nav-link" to="/movies">
                        Movies
                        </Link>
                           
                        </Nav.Link>
                        <Form.Group controlId="select Seats">
     
            </Form.Group>
                        <NavDropdown  ref = {this.myRef} className="nav-link"  id="basic-nav-dropdown" >
                            {movieCategories.map((category,index)=>{
                                return <NavDropdown.Item  onClick={this.selectedMovieCategory} title={this.state.selectedCategory} key={index} value={category.value} >{category.label}</NavDropdown.Item>
                            })}
                        </NavDropdown>
                        <NavDropdown className="nav-link" title="Video Songs" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Solo</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Item Songs</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Melody</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Tragedy</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Mass Beat</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Folk</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Rap</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Duets</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Devotiional</NavDropdown.Item>
                            
                            <NavDropdown.Item href="#action/3.4">SciFi</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link >
                            <Link className="nav-link" to="/tv-shows">
                            TV Shows
                            </Link>
                          
    
                        </Nav.Link>
                        <Nav.Link > 
                        <Link className="nav-link" to="/tv-shows">
                        Events
                        </Link>
                        </Nav.Link>
                        </Nav>
                       
                        <Nav className="ml-auto">
                            <Nav.Link >
                                <Link  className="nav-link" to="/login">
                                Login
                                </Link>
                               
                            </Nav.Link>
                            <Nav.Link >
                             <Link  className="nav-link" to="/register">
                                     Register
                                </Link>
                               </Nav.Link>
                        <Select
                            className="select-language"
                            value={this.state.selectedLanguage}
                            onChange={this.changeLanguage}
                            options={languages}
                            placeholder="Select Language..."
                        />
                        
                        </Nav>
                       
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
   
}

export default Header;
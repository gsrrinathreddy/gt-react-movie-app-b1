import React,{Component} from 'react';
import {Form,Button} from 'react-bootstrap';
import Select from 'react-select';
import './LandingPage.css';
import LanguageContext from './LanguageContext';
import cities from '../../data/cities';
import languages from '../../data/languages';

class LandingPage extends Component{
    static contextType = LanguageContext;
    constructor(props){
        super(props)
        this.state = {
            selectedSeats:"",
            ticketPrice:"",
            areSeatsSelected:false,
            selectedState:""         
        }
        this.movieCategoriesRef = React.createRef();
        this.selectedSeats = this.selectedSeats.bind(this)
        this.selectTicketPrice = this.selectTicketPrice.bind(this)
        this.changeState = this.changeState.bind(this)
    }

    selectedSeats(){
        console.log("selected seats are",this.inputEl.value)
        this.setState(
            (prevState,props)=>{
                return {selectedSeats:this.inputEl.value}
            })
            this.setState(
               {
                   areSeatsSelected:true
                })
          
    }
    selectTicketPrice(){
        this.setState(
            (prevState,props)=>{
                return {ticketPrice:this.inputEl.value}
            })
    }

    changeState(selectedState){
        this.setState({
            selectedState:selectedState.state
        })
        console.log("selected stae",selectedState.state);
       
    }
    render(){
        let states = cities.map(city=>{
            return {value:`${city.state}`,label:`${city.state}`}
        })
        let disable = this.state.areSeatsSelected?"":"disabled"
        let unique = [...new Set(states)]
        console.log("state",disable)
        const areSeatsSelected = this.state.areSeatsSelected;
       console.log("Landing Page Object",this.inputEl)
        console.log("price",parseInt(this.state.ticketPrice))
        let  totalCost = this.state.selectedSeats*150;
        console.log("totalcost",totalCost)
        return(
            <div className="landing-page">
                 <Select
                            className="select-state"
                            value={this.state.selectedState}
                            onChange={this.changeState}
                            options={cities.state}
                            placeholder="Select State..."
                        />
             <Form.Group controlId="select State">
                <Form.Label>Select Seats</Form.Label>
               
            </Form.Group>
             <p>Total seats : {360 - this.state.selectedSeats}</p>
             <Form.Group controlId="select Seats">
                <Form.Label>Select Seats</Form.Label>
                <Form.Control as="select" onChange={this.selectedSeats}  ref = { el => this.inputEl=el }>
                <option value="0">select seats</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                </Form.Control>
            </Form.Group>
            {/* <Form.Group controlId="exampleForm.ControlSelect2">
                <Form.Label>Select Seats</Form.Label>
                <Form.Control as="select" onChange={this.selectTicketPrice} ref = { el => this.inputEl=el }>
                <option value="0">Select Ticket Price</option>
                <option value="200">200</option>
                <option value="150">150</option>
                <option value="100">100</option>
                </Form.Control>
            </Form.Group> */}
            <Button variant="danger" {...disable}>{this.context}</Button>
            <p>Total Cost : {totalCost}</p>
        <div>

        </div>
            </div>
        )
    }
}

export default LandingPage;
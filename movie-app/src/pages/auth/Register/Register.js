import React,{Component} from 'react';
import {Button} from 'react-bootstrap'
import './Register.css';
class Register extends Component{
    constructor(){
        super();
        this.state={
            isPassword:false,
           
        }
    }
    showPassword(){
        this.setState({isPassword:!this.state.isPassword})
    }
    render(){

        

        return(
            <div className="register">
                <form>
                    <div class="form-group">
                        <label for="exampleInputEmail1">First Name</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="First Name"/>
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Last Name</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Last Name"/>
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Mobile No</label>
                        <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Mobile No"/>
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <label for="exampleInputEmail1">Gender</label>
                    <div class="form-check">
                  
                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked/>
                        <label class="form-check-label" for="exampleRadios1">
                           Male
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
                        <label class="form-check-label" for="exampleRadios2">
                            Female
                        </label>
                    </div>    
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type={this.state.isPassword?"text":"password"} class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Confirm Password</label>
                        <input type={this.state.isPassword?"text":"password"} class="form-control" id="exampleInputPassword1" placeholder="Confirm Password"/>
                        <Button onClick={()=>this.showPassword()}>Show Password</Button>
                    </div>
                    <div class="form-group form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
            </div>

        )
    }
}

export default Register;
import React,{Component} from 'react';
import {Tabs,Tab,Form} from 'react-bootstrap'
import InputNumber from 'rc-input-number';
import './Profile.css';
class Profile extends Component{
    render(){
        return(
        <div className="profile">
             <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
            <Tab eventKey="home" title="Home">
              Hello
            </Tab>
            <Tab eventKey="profile" title="+/- Profile">
              Profilea
            </Tab>
            <Tab eventKey="contact" title="Add/Edit Contact" >
              
            </Tab>
                <Tab className="tab-container" eventKey="education" title="Add education" >
                <Form.Group controlId="exampleForm.ControlSelect2">
                    
                    <Form.Control as="select" >
                    <option>Nursery</option>
                    <option>Schooling</option>
                    <option>Intermediate</option>
                    <option>UG</option>
                    <option>PG</option>
                    </Form.Control>
                </Form.Group>
              <hr/>
              <div >
                  <div className="row">
                      <div className="col-2">
                      <label   for="exampleInputEmail1">School Name</label>  
                      </div>
                      <div className="col-10">
                      <input  type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="School Name"/>
                      </div>
                  </div>
                  <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div >
                  <div className="row">
                      <div className="col-2">
                      <label   for="exampleInputEmail1">Board Name</label>  
                      </div>
                      <div className="col-10">
                      <input  type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Board Name"/>
                      </div>
                  </div>
                 
                </div>
                <div >
                  <div className="row">
                      <div className="col-2">
                      <label   for="exampleInputEmail1">Percentage</label>  
                      </div>
                      <div className="col-10">
                      <InputNumber defaultValue={35}/>
                      </div>
                  </div>
                 
                </div>
                <div className="row">
                      <div className="col-2">
                      <label   for="exampleInputEmail1">Year of Joining</label>  
                      </div>
                      <div className="col-10">
                      <input  type="date" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="First Name"/>
                      </div>
                  </div>
                  <div className="row">
                      <div className="col-2">
                      <label   for="exampleInputEmail1">Year of Leaving</label>  
                      </div>
                      <div className="col-10">
                      <input  type="date" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="First Name"/>
                      </div>
                  </div>
            </Tab>
            <Tab eventKey="experience" title="Add experience" >
              
            </Tab>
        </Tabs>    
        </div>

       
        )
    }
}

export default Profile;
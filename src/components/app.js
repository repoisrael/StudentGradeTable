import React, {Component} from 'react';
import './assets/css/app.css';
import StudentData, {StudentDataContext} from './studentdata'; 
import HomePage from './homepage'; 
import { Route } from 'react-router-dom';
import StudentList from './studentlist'; 
import Nav from './nav'; 
import Form from './form'; 
import Modal from './modal'; 


class App extends Component{
    constructor(props){
        super(props); 
    }
    render(){
    return(
        <div> 
        <StudentData> 
            <StudentDataContext.Consumer> 
                {(context) => (
                <div>
                    {console.log('SHOW MODAL:', context.showModal)}
                    <Nav/> 
                     {/* <Route exact path='/' component={HomePage}/> 
                    <Route path='/student-list' component={StudentList}/> */}
                    {context.showModal? <Modal/> : null} 
                    <div className="container"> 
                    <div className="row"> 
                    <div className="col s12 col m9">  <StudentList/>  </div> 
                    <div className="col s12 col m3 form" > <Form/> </div> 
                    </div> 
                    </div> 
                </div> 
                )}
            </StudentDataContext.Consumer> 
        </StudentData> 
        </div> 
    )     
    }
}

export default App; 


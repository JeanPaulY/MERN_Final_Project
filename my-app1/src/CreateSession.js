const { replaceOne } = require("../backend/course.model");
import axios from 'axios';
import React, {Component, component} from 'react';


export class CreateSession extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            term: '',
            format:'',
            length: '',
        }
        this.handleName = this.handleName.bind(this)
        this.handleTerm = this.handleTerm.bind(this);
        this.handleFormat = this.handleFormat.bind(this);
        this.handleLength = this.handleLength.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

        handleName(e){
            this.setState({
                name: e.target.value
            })
        }

        handleTerm(e){
            this.setState({
                term: e.target.value
            })
        }

        handleFormat(e){
            this.setState({
                format: e.target.value
            })
        }

        handleLength(e){
            this.setState({
                length: e.target.value
            })
        }

        submitForm(e){
            e.preventDefautl();
            console.log(this.state);

            //make the call to my server
            //clear the state

            let data = {
                name : this.state.name,
                term : this.state.term,
                format : this.state.format,
                length : this.state.length
            }
            axios.post('http://localhost:3000/createSession', data)
            .then(res => {
                console.log(res.data);
            })
            this.setState({
                name:'',
                term:'',
                format:'',
                length:''
            })
        }

  render(){
    return (
      <div>
          <form onSubmit = {this.submitForm}>

              <label> Course Name </label>
              <input type='text' value ={this.state.name} onChange ={this.handleName}/>

              <label> Term </label>
              <input type='text' value ={this.state.term} onChange ={this.handleTerm}/>

              <label> Format </label>
              <input type='text' value ={this.state.format} onChange ={this.handleFormat}/>

              <label> Lentgh </label>
              <input type='text' value ={this.state.length} onChange ={this.handleLength}/>
              
              <input type='submit'/>

          </form>
      </div>
    )
  }
}

export default App;

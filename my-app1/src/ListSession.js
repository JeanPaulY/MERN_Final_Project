import React, {Component, component} from 'react';
import axios from 'axios';

export class ListSession extends Component {
    constructor(props){
        super(props);
        this.state = {
            sessions:[]
        }
        this.retrieveSessions = this.retrieveSessions.bind(this);
        }
        retrieveSessions(){
            axios.get('http://localhost:3000/retrieveSessions')
                .then(res => {
                    console.log(res.data)
                    this.setState({sessions: res.data})
                })
        }
        componentDidMount(){
            //calls DB
            this.retrieveSessions();
    }

    delete(id){
        console.log(id);
        axios.post('http://localhost:3000/delete', {id})
        .then(res => {
            console.log(res);
            this.retrieveSessions
        })
    }

    render(){
        let sessions = this.state.sessions.map(el =>(
            <tr>
                <td> {el.name} </td>
                <td><button onClick = {() => this.delete(el['_id'])}>Delete</button></td>
            </tr>
        ))
        return (
        <div>
            <h1> List Session </h1>
            <table>
                <tr>
                    <th> Course Name </th>
                </tr>
            </table>
        </div>
    )
  }
}



export default App;

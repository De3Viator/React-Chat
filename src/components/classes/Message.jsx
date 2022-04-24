import { Component } from "react";
import '../../App.css'

export class Message extends Component {
    render() {
       return  <input type="text" value={this.props.text} onChange={this.props.changeValue}/>
    }
}
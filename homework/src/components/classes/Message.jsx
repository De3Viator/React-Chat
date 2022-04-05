import { Component } from "react";
import '../../Message.css'

export class Message extends Component {
    render() {
       return  <input type="text" value={this.props.text} onChange={this.props.changeValue}/>
    }
}
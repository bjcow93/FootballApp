import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Hello from './components/myHeading'

class App extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <Hello />
        )
    }
}
ReactDOM.render(<App/>, document.getElementById("root"))
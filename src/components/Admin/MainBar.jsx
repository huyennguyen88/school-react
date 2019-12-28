import React,{Component} from 'react'
import Students from './Students'
import Teachers from './Teachers'
import Parents from './Parents'
import './MainBar.css'
import { Switch, Route } from "react-router-dom";
class MainBar extends Component{
    constructor(props)
    {
        super(props)
        this.state = {
            style:{
                left:"0px"
            }
        }
    }
    bars = () =>{
        let value = this.state.style.left === "0px"?"261px":"0px"
        this.setState({
            style:{
                left:value
            }
        })
        this.props.sideBar(value === "0px"?"-261px":"0px");
    }
    render(){
        return (
            <div className = "mainbar" style = {this.state.style}>
                <div className = "search">
                    <div className = "search-field">
                        <button className = "fas fa-bars" onClick = {this.bars}/>                        <button className = "fas fa-search"></button>
                        <input className = "input" type ="text" placeholder ="Search"></input>
                    </div>
                    <div>
                        <Switch>
                            <Route path="/Students">
                                <Students/>
                            </Route>
                            <Route path="/Parents">
                                <Parents/>
                            </Route>
                            <Route path="/Teachers">
                                <Teachers/>
                            </Route>
                            <Route path="/">
                                <div className = "body">
                                </div>
                            </Route>
                        </Switch>
                    </div>
                </div>
            </div>
        )
    }   
}

const style = {
    mainBar:{
        position: 'relative',
        float: 'right',
        left:'260px',
    }
}

export default MainBar
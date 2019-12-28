import React, { Component } from 'react';
import BigImage from '../../Homepage/BigImage';
import MenuTeacher from './MenuTeacher';
import MenuParent from './MenuParent';
import MenuStudent from './MenuStudent';
class Menu extends Component {
    render() {
        var roles = JSON.parse(localStorage.getItem('roles'))
        var menu = roles.map((r,i)=>{
            switch(r.role){
                case 1:
                    return <MenuTeacher key={1}/>
                case 2:
                    return <MenuParent key={2}/>
                case 3:
                    return <MenuStudent key={2}/>
                default: 
                    return <div>Nothing</div>
            }
        })
    
        return (
            <div className="main_menu">
                <BigImage />
                <h1 className="centered slider-info ">
                    Make education is better and better
                </h1>
                <div className="menu">
                    <h2 className='mt-5  ml-5'> Menu chính</h2>
                    <hr style={style.hr} size='30px' />
                </div>
                <div className="list-menu">
                    {
                       menu
                    }
                </div>
            </div>
        );
    }
}
var style = {
    hr: {
        border: "2px solid 	#C0C0C0",
        margin: "2% 3%"
    }

}
export default Menu;

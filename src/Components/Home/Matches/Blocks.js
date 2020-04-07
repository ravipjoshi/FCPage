import React, { Component } from 'react';
import { fbMatches } from '../../../firebase';
import { fbLooper, reverseArray } from '../../Ui/Misc'

class Blocks extends Component {
    state={
        matches :[]
    }
    componentDidMount(){
        fbMatches.limitToLast(6).once('value').then((snapshot)=>{
            const matches = fbLooper(snapshot);
            // console.log(matches);
            this.setState({
                matches: reverseArray(matches)
            })
        })
       
    }
    showMatches= () =>(
        <div>
            match
        </div>
    )
    render() {
        console.log(this.state)
        return (

            <div className="home_matches">
                {this.showMatches(this.state.matches)}
            </div>
        );
    }
}


export default Blocks;
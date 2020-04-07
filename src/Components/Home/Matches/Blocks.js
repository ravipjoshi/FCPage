import React, { Component } from 'react';
import { fbMatches } from '../../../firebase';
import { fbLooper, reverseArray } from '../../Ui/Misc'

import MatchesBlock from '../../Ui/Matches_block';
import Slide from 'react-reveal/Slide';


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
    showMatches= (matches) =>(
        matches ?
                matches.map((match)=>(
                   <Slide bottom key={match.id}> 
                        <div className="item">
                            <div className="wrapper">
                                   <MatchesBlock match={match}/>
                            </div>
                        </div>
                    </Slide>
                ))
                :null
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
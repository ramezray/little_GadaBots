import React, { Component } from 'react';


import {
    Card,
    CardTitle,
  
} from "reactstrap";


class UserBotList extends Component {
    constructor(props) {
        super(props);
        
            this.state = {
             bot: props.bot
          };
        };

    


    render() {
        
        return (
           
             <Card body>
                            <CardTitle><h4>Your GadaBot(s)</h4></CardTitle>

                            <ul>
                                {this.state.bots.map(bot => (
                                    <li className="list-group-item list-group-item-action">

                                        <div  key={bot._id}>
                                            <div className="row">
                                                <div className="col-3">
                                                    <img className="card-img-top" src={bot.checkIns[0].pic}
                                                        alt={bot.name} />
                                                </div>

                                                <div className ="col-9">
                                                    <div className="card-title"> <h1>{bot.name}</h1></div>
                                                    <p><strong>Hometown: </strong>{bot.checkIns[0].location} </p>
                                                    <p><strong>Created Date: </strong>{bot.checkIns[0].date} </p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>

                                ))}
                            </ul>


                        </Card>
           
        );
    }
}



export default  (UserBotList);
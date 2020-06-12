import React from "react";
import { Link} from "react-router-dom";
// import {Flex} from './src/components/Flex.js'
import "./EventCard.css";


class EventDetail extends React.Component {
    render() {
        return (<div className="card">
                <h2 className="name">{this.props.title}</h2>
                <img src={this.props.image}
                    alt={this.props.title} />
                    <h3 >{this.props.date}</h3>
                    <h3 >{this.props.time}</h3>
                    <h3 >{this.props.location}</h3>
                    <h3 >{this.props.description}</h3>

                 <Link  to={`/EventMain`} >
                </Link>
            </div>
        )
    }
}

export default EventDetail;
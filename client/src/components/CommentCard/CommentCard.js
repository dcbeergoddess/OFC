import React from "react";
import "../../index.css";
import { Card, Button} from 'react-bootstrap';


function CommentCard(props) {
  return (
         <>
            <Card style={{ width: '18rem', background: "#202020", color: "#FAFAD2" }}>
                <Card.Body>
                    <Card.Subtitle>{props.user}</Card.Subtitle>
                    <Card.Text>{props.comment}</Card.Text>
              </Card.Body>
              </Card> 
          </>
        )

    };

export default CommentCard;
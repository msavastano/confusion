import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap';

class DishDetail extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
           
        };
    }

    renderDish(dish) {
        if(dish != null) {
            return(
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            )
        } else {
            return(
                <div></div>
            )
        }
    }

    

    renderComments(comments) {
        if(comments != null) {
            const comms = comments.map((comment) => {
                console.log(comment)
                return(
                    <div key={comment.id}>
                        <CardText>{comment.comment}</CardText>
                        <CardText>-- {comment.author}, {comment.date}</CardText><br />
                    </div>
                )
                
            });
            return(
                <Card>
                    <CardTitle>Comments</CardTitle>
                        <CardBody>
                            {comms}
                        </CardBody>
                        
                    
                </Card>
            )
        } else {
            return(
                <div></div>
            )
        }
    }

    render() {
        
        // console.log(this.props);
        const dish = this.props.dish;
        if(dish) {
            
                
            return(
                <div className="row">
                    <div  className="col-12 col-md-5 m-1">
                        {this.renderDish(dish)}
                    </div>
                    <div  className="col-12 col-md-5 m-1">
                        {this.renderComments(dish.comments)}
                    </div>
                </div>
                
            )
                
                
            
                   
            
            
        } else {
            return(
                <div></div>
            )
        }
    }
}

export default DishDetail;
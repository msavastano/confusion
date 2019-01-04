import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap';


function RenderDish({ dish }) {
    
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

    

function RenderComments({comments}) {
        if(comments != null) {
            const comms = comments.map((comment) => {
                console.log(comment)
                return(
                    <div key={comment.id}>
                        <CardText>{comment.comment}</CardText>
                        <CardText>-- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</CardText><br />
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

    


const DishDetail = ({dish}) => {
   
        
        // console.log(this.props);
        if(dish) {
            
                
            return(
                <div className="container">
                <div className="row">
                    <div  className="col-12 col-md-5 m-1">
                        <RenderDish dish={dish} />
                    </div>
                    <div  className="col-12 col-md-5 m-1">
                        <RenderComments comments={dish.comments} />
                    </div>
                </div>
                </div>
                
            )
                
                
            
                   
            
            
        } else {
            return(
                <div></div>
            )
        }
    
}

export default DishDetail;
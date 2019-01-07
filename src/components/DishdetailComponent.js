import React, { Component } from 'react';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Button, Card, CardImg, CardBody, CardTitle, CardText, Modal, ModalHeader, ModalBody,
    Label, BreadcrumbItem, Breadcrumb, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';


const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class DishDetail extends Component {

    constructor(props) {
        super(props);
    
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            isModalOpen: false
        }
    }

    

    handleSubmit(values) {
        console.log('Current Values are: ' + JSON.stringify(values));
        alert('Current Values are: ' + JSON.stringify(values));
        // event.preventDefault();
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }
    
    RenderDish() {
        console.log(this.props.dish);
        if(this.props.dish != null) {
            return(
                <Card>
                    <CardImg width="100%" src={this.props.dish.image} alt={this.props.dish.name} />
                    <CardBody>
                        <CardTitle>{this.props.dish.name}</CardTitle>
                        <CardText>{this.props.dish.description}</CardText>
                    </CardBody>
                </Card>
            )
        } else {
            return(
                <div></div>
            )
        }
        
    }
        
    RenderComments() {
        console.log(this.props.dish);
        if(this.props.comments != null) {
            const comms = this.props.comments.map((comment) => {
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

    render(){
        // console.log(this.props);
        if(this.props.dish) {     
            return (
                <div className="container">
                    <div className="row">
                        <Breadcrumb>

                            <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{this.props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{this.props.dish.name}</h3>
                            <hr />
                        </div>                
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            {this.RenderDish()}
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            {this.RenderComments()}
                            <Button outline onClick={this.toggleModal}><span className="fa fa-pencil fa-lg"></span> Submit Comment</Button>
                        </div>
                    </div>
                    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                        <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                        <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="yourname" md={2}>Your Name</Label>
                                <Col md={10}>
                                    <Control.text model=".yourname" id="yourname" name="yourname"
                                        placeholder="Your Name"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".yourname"
                                        show="touched"
                                        messages={{
                                            required: 'Required\n',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                        />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="rating" md={2}>Rating</Label>
                                <Col md={10}>
                                    <Control.select model=".rating" name="rating"
                                        className="form-control" id="rating">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="message" md={2}>Your Feedback</Label>
                                <Col md={10}>
                                    <Control.textarea 
                                        model=".message" 
                                        id="message" name="message"
                                        rows="12"
                                        className="form-control" />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size:10, offset: 2}}>
                                    <Button type="submit" value="submit" color="primary">Submit</Button>
                                </Col>
                            </Row>
                        </LocalForm>
                        </ModalBody>
                    </Modal>
                </div>
            );
        } else {
            return(
                <div></div>
            )
        }
        
    }
}
    
    


    



export default DishDetail;
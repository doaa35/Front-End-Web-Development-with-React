import React from 'react';
import { Card,CardBody,CardImg,CardText,CardTitle,Breadcrumb, BreadcrumbItem  } from 'reactstrap';
import { Link } from 'react-router-dom'

function RenderDish({dish}){
    if(dish != null){
        return(
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg top src={dish.image} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.price} <br></br> {dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
            
        );
    }
    else {
        return(
        <div></div>
        );
    }
}



function RenderComments({comments}){
    if (comments == null) {
        return (<div></div>)
    }
    const cmts = comments.map(comment => {
        return (
            <li key={comment.id}>
                <p>{comment.comment}</p>
                <p>-- {comment.author},
                {new Intl.DateTimeFormat('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: '2-digit'
                }).format(new Date(comment.date))}
                </p>
            </li>
        )
    })
    return (
        <div>
            <h4> Comments </h4>
            <ul className='list-unstyled'>
                {cmts}
            </ul>
        </div>
    )
}

const  Details = (props) =>{

    if (props.dish == null){
        return(
            <div></div>
        )
    }

    return(
        <div className ="container">
            <div className="row" >
            <Breadcrumb>
                <BreadcrumbItem>
                    <Link to="/Menu.js">Menu</Link>
                </BreadcrumbItem> 
                <BreadcrumbItem active>
                    {props.dish.name}   
                </BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12">
                <h3>{props.dish.name}</h3>
                <hr />
            </div>  

                <RenderDish dish={props.dish} />                 
                <RenderComments comments={props.comments} />
        
            </div>
        </div>
    )
    }


export default Details
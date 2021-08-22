import React , {Component} from 'react';
import { Card,CardBody,CardImg,CardText,CardTitle } from 'reactstrap';

class Details extends Component{

    constructor(props){
        super(props);
        console.log(props)
        this.state={
            dish:this.props.dishData
        }
    }

    renderDish= dish => {
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


renderComment(comments) {
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
        <div className='col-12 col-md-5 m-1'>
            <h4> Comments </h4>
            <ul className='list-unstyled'>
                {cmts}
            </ul>
        </div>
    )
    }

render(){
    const dish=this.props.dishData
    if (dish == null){
        return(
            <div></div>
        )
    }
    return(
        <div className ="container">
            <div className ="row">
                {this.renderDish(dish)}
                {this.renderComment(dish.comments)}
            </div>
        </div>

    )
}

}

export default Details
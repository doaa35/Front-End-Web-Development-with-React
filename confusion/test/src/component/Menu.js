import React , {Component, Fragment} from 'react';
import { Card,CardImgOverlay,CardImg,CardTitle } from 'reactstrap';
import Details from './dishDetailComponent';
import Header from './header';
import Footer from './footer';

class Menu extends Component{

// constructor , super very very very important
constructor(props){
    super(props);
    this.state={
        selectedDish:null
        }
    };

    clicked(dish){
        this.setState({
            selectedDish: dish
        });
    };

render(){

    const menu=this.props.dishes.map(dish => {
        // donnot forget return
        return(
            <div  key={dish.id} className="col-12 col-md-5 mt-5 m-1">
            
            <Card onClick={() => this.clicked(dish)}>
                <CardImg width="100%" src={dish.image}/>
                <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
            </Card>
        </div>
        )
        
    });

    return(
        <Fragment>
            <Header />
            <div className="container">
                <div className="row">
                        {menu}
                </div>
                <Details className="mt-5" dishData={this.state.selectedDish} />
            </div>
            <Footer />
        </Fragment>
    );
}
}


export default Menu;

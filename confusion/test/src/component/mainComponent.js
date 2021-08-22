import React ,{Component} from 'react'
import { Switch, Route} from 'react-router';
import Home from './home';
import Menu from './Menu';
import Header from './header';
import Footer from './footer';
import Contact from './contactus';
import Details from './dishDetailComponent'
import { DISHES } from '../shared_Data/dishes'
import { COMMENTS } from '../shared_Data/comments'
import { LEADERS } from '../shared_Data/leaders'
import { PROMOTIONS } from '../shared_Data/promotions'

class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {
            dishes: DISHES,
            comments: COMMENTS,
            leaders: LEADERS,
            promotion: PROMOTIONS

        };

    }
        
    render() {

        const HomePage= () =>{
            return(
                <Home dish={this.state.dishes.filter( dish => dish.featured)[0]}
                      comment={this.state.comments.filter( comment => comment.featured)[0]}
                      leader={this.state.leaders.filter( leader => leader.featured)[0]}
                      promotion={this.state.promotion.filter( promo => promo.featured)[0]}
                
                />
            )
        }

         const DishData = ({match}) => {
            return(
                <Details 
                
                dish={this.state.dishes.filter( (dish) => dish.id === parseInt(match.params.dishId, 10))[0] } 
                comments={this.state.comments.filter( (comment) => comment.dishId === parseInt(match.params.dishId, 10)) } 
                
                
                />
            );
        };


        return (
            <div>
                <Header />
                <Switch>
                    <Route path="/home.js" component={HomePage} />
                    <Route exact path="/Menu.js" component={() => <Menu dishes={this.state.dishes}/> }/>
                    <Route path='/Menu.js/:dishId' component={DishData} />
                    <Route exact path="/contactus.js" component={Contact} />
                </Switch>
                {/* <Redirect to="/src/component/home.js" /> */}
                <Footer />
            </div> 
        );

    }

}

export default Main;
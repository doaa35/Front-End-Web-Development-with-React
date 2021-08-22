import React ,{Component} from 'react'
import { Switch, Route, Redirect } from 'react-router';
import Home from './home';
import Menu from './Menu';
import Header from './header';
import Footer from './footer';
import Details from './dishDetailComponent';
import { data } from '../shared_Data/sharedData'

class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {
            comments: data.comments,
            dishes: data
        };

    }

    render() {

        // const DishData = ({match}) => {
        //     return(
        //         <Details 
                
        //         dish={this.state.dishes.filter( (dish) => dish.id === parseInt(match.params.dishId, 10))[0] } 
        //         comments={this.state.comments.filter( (comment) => comment.dishId === parseInt(match.params.dishId, 10)) } 
                
                
        //         />
        //     );
        // };

        return (
            <div>
                <Header />
                <Switch>
                    <Route path="/home.js" component={Home} />
                    <Route exact path="/Menu.js" component={() => <Menu dishes={this.state.dishes}/> }/>
                </Switch>
                {/* <Redirect to="/src/component/home.js" /> */}
                <Footer />
            </div> 
        );

    }

}

export default Main;
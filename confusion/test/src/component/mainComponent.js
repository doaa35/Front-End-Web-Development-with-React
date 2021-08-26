import React ,{Component} from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import Home from './home';
import Menu from './Menu';
import Header from './header';
import Footer from './footer';
import Contact from './contactus';
import About from './AboutComponent';
import Details from './dishDetailComponent'
import { DISHES } from '../shared_Data/dishes'
import { COMMENTS } from '../shared_Data/comments'
import { LEADERS } from '../shared_Data/leaders'
import { PROMOTIONS } from '../shared_Data/promotions'
import { addComment, fetchDishes } from '../redux/ActionCreators';


const mapDispatchToProps = dispatch => ({
  
    addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
    fetchDishes: () => { dispatch(fetchDishes())}

  });

const mapStateToProps = state => {
    return {
      dishes: state.dishes,
      comments: state.comments,
      promotions: state.promotions,
      leaders: state.leaders
    }
  }
  

class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {

        };

    }
    componentDidMount() {
        this.props.fetchDishes();
      }
        
    render() {

        const HomePage= () =>{
            return(
                <Home 
                dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
                dishesLoading={this.props.dishes.isLoading}
                dishesErrMess={this.props.dishes.errMess}
                promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
                leader={this.props.leaders.filter((leader) => leader.featured)[0]}
                />
            )
        }
         const DishData = ({match}) => {
            return(
                <Details 
                    dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
                    isLoading={this.props.dishes.isLoading}
                    errMess={this.props.dishes.errMess}
                    comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
                    addComment={this.props.addComment}
            />
      
            );
        };


        return (
            <div>
                <Header />
                <Switch>
                    <Route path="/home.js" component={HomePage} />
                    <Route exact path="/Menu.js" component={() => <Menu dishes={this.props.dishes}/> }/>
                    <Route path='/Menu.js/:dishId' component={DishData}  />
                    <Route exact path="/contactus.js" component={Contact} />
                    <Route path="/AboutComponent.js" component={() => <About leaders={this.props.leaders} />}  />
                </Switch>
                {/* <Redirect to="/src/component/home.js" /> */}
                <Footer />
            </div> 
        );

    }

}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
import React ,{Component} from 'react'
import Home from './home';
import Menu from './Menu';
import Header from './header';
import Footer from './footer';
import Contact from './contactus';
import About from './AboutComponent';
import Details from './dishDetailComponent'
import { Switch, Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { actions } from 'react-redux-form';
import { postComment, fetchDishes, fetchComments, fetchPromos, fetchLeaders, postFeedback, } from '../redux/ActionCreators';
import { TransitionGroup, CSSTransition } from 'react-transition-group';


const mapDispatchToProps = dispatch => ({
  
    postComment: (dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment)),
    fetchDishes: () => { dispatch(fetchDishes())},
    resetFeedbackForm: () => { dispatch(actions.reset('feedback'))},
    fetchComments: () => dispatch(fetchComments()),
    fetchPromos: () => dispatch(fetchPromos()),
    fetchLeaders: () => dispatch(fetchLeaders()),
    postFeedback: (firstname, lastname, telnum, email, agree, contactType, message) => dispatch(postFeedback(firstname, lastname, telnum, email, agree, contactType, message)),


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

    }
    componentDidMount() {
        this.props.fetchDishes();
        this.props.fetchComments();
        this.props.fetchPromos();
        this.props.fetchLeaders();
      }
        
    render() {

        const HomePage= () =>{
            return(
                <Home 
                dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
                dishesLoading={this.props.dishes.isLoading}
                dishErrMess={this.props.dishes.errMess}
                promotion={this.props.promotions.promotions.filter((promo) => promo.featured)[0]}
                promoLoading={this.props.promotions.isLoading}
                promoErrMess={this.props.promotions.errMess}
                leader={this.props.leaders.leaders.filter((leader) => leader.featured)[0]}
                leaderLoading={this.props.leaders.isLoading}
                leaderErrMess={this.props.leaders.errMess}
                />
            )
        }

        const AboutUs = () => {
            return(
                <About 
                    leaders={this.props.leaders.leaders}
                    leaderLoading={this.props.leaders.isLoading}
                    leaderErrMess={this.props.leaders.errMess}
                />
            );
        };

         const DishData = ({match}) => {
            return(
                <Details 
                    dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
                    isLoading={this.props.dishes.isLoading}
                    errMess={this.props.dishes.errMess}
                    comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
                    commentsErrMess={this.props.comments.errMess}
                    postComment={this.props.postComment}          
                  />
      
            );
        };


        return (
            <div>
                <Header />
                <TransitionGroup>
                    <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
                        <Switch location={this.props.location}>
                            <Route path="/home.js" component={HomePage} />
                            <Route exact path="/Menu.js" component={() => <Menu dishes={this.props.dishes}/> }/>
                            <Route path='/Menu.js/:dishId' component={DishData}  />
                            <Route exact path="/contactus.js" component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} />} />
                            <Route path="/AboutComponent.js" component={AboutUs}  />
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
                {/* <Redirect to="/src/component/home.js" /> */}
                <Footer />
            </div> 
        );

    }

}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
import { DISHES } from '../shared_Data/dishes';
import { COMMENTS } from '../shared_Data/comments';
import { PROMOTIONS } from '../shared_Data/promotions';
import { LEADERS } from '../shared_Data/leaders';

export const initialState = {
    dishes: DISHES,
    comments: COMMENTS,
    promotions: PROMOTIONS,
    leaders: LEADERS
};

export const Reducer = (state = initialState, action) => {
    return state;
};
import { ASSIST_LIST  } from '../actions/index'

const Home = (state = [], action) => {
    switch (action.type) {
        case ASSIST_LIST:
            return action.payload;
            break;

        default:
            return state
    }
}

export default Home;
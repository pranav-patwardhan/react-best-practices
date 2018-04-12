import { connect } from 'react-redux'
import App from '../../components/App'
import { bindActionCreators } from 'redux';
import { getAllAssist } from '../actions/index'
import { push } from 'react-router-redux'

const mapStateToProps = (state, ownProps) => {
    return {
        getAllAssistsList: state.Home,
    }
}


const mapDispatchToProps = dispatch => {
    return bindActionCreators({ getAllAssist, changePage: () => push('/about-us') }, dispatch);
}

const HomeContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(App)

export default HomeContainer

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from "../redux/utils/theme/actions";
import App from "../App";

const mapStateToProps = state => {
    return {
        selectedTheme: state.theme.selectedTheme
    };
};

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators({
            changeTheme: actions.changeTheme
        }, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

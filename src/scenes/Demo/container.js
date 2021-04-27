import { connect } from 'react-redux';

import Demo from './component';

function mapStateToProps(state) {
	return {
		users: state.chat.users
	}
};

function mapDispatchToProps(dispatch) {
	return {
		fetchUsers: dispatch.chat.fetchUsers
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Demo);
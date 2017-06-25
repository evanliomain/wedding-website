import { connect } from 'react-redux';

import { lodgingTabChange } from '../actions';

import { LodgingView } from '../components/LodgingView/LodgingView';

const mapStateToProps = state => state.app.tab,
      mapDispatchToProps = dispatch => ({
        onLodgingTabChange : tab => {
          dispatch(lodgingTabChange(tab));
        }
      });

export default connect(mapStateToProps, mapDispatchToProps)(LodgingView);

import { connect } from 'react-redux';

import { lodgingTabChange } from '../actions';

import { LodgingMap } from '../components/LodgingMap/LodgingMap';

console.log('LodgingMap', LodgingMap);

const mapStateToProps    = state => state.app.tab,
      mapDispatchToProps = dispatch => ({
        onLodgingTabChange : tab => {
          dispatch(lodgingTabChange(tab));
        }
      });

export default connect(mapStateToProps, mapDispatchToProps)(LodgingMap);

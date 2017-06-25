import { connect } from 'react-redux';

import { lodgingTabChange, lodgingSelected } from '../actions';

import { LodgingView } from '../components/LodgingView/LodgingView';

const mapStateToProps = state => ({
        ...state.app.tab,
        ...state.app.lodgings,
        ...state.app.selectedLodging
      }),
      mapDispatchToProps = dispatch => ({
        onLodgingTabChange : tab => {
          dispatch(lodgingTabChange(tab));
        },
        onLodgingSelected : lodging => {
          dispatch(lodgingSelected(lodging));
        }
      });

export default connect(mapStateToProps, mapDispatchToProps)(LodgingView);

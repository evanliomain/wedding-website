import { connect } from 'react-redux';

import { lodgingTabChange, lodgingSelected, lodgingHover } from '../actions';

import { LodgingView } from '../components/LodgingView/LodgingView';

const mapStateToProps = state => ({
        ...state.app.tab,
        ...state.app.lodgings,
        ...state.app.selectedLodging,
        ...state.app.hoverLodging
      }),
      mapDispatchToProps = dispatch => ({
        onLodgingTabChange : tab => {
          dispatch(lodgingTabChange(tab));
        },
        onLodgingSelected : lodging => {
          dispatch(lodgingSelected(lodging));
        },
        onLodgingHover : lodging => {
          dispatch(lodgingHover(lodging));
        },
      });

export default connect(mapStateToProps, mapDispatchToProps)(LodgingView);

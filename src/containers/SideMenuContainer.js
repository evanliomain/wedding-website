import { connect } from 'react-redux';

import { SideMenu } from '../components/SideMenu/SideMenu';

const mapStateToProps = state => state.scroll;

export default connect(mapStateToProps)(SideMenu);

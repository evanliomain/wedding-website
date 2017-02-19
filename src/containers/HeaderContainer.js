import { connect } from 'react-redux';

import { Header } from '../components/Header/Header';

const mapStateToProps = state => state.scroll;

export default connect(mapStateToProps)(Header);

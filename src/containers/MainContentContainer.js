import { connect } from 'react-redux';

import { MainContent } from '../components/MainContent/MainContent';

const mapStateToProps = state => state.scroll;

export default connect(mapStateToProps)(MainContent);

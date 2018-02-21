import  {connect} from 'react-redux';
import Footer from '../components/Footer';

const  mapStateToProps = state => ({
  total: state.todos.length,
})

const FooterContainer = connect(
  mapStateToProps
)(Footer);

export default FooterContainer;
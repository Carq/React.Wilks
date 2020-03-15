import { connect } from 'react-redux';
import { compose } from 'redux';
import injectReducer from 'utils/injectReducer';
import reducer from './reducer';
import { WEIGHT_CHANGED } from './constants';
import WilksCalculator from './WilksCalculator';

const mapStateToProps = state => ({ wilksPoints: state.score.wilksPoints });

const mapDispatchToProps = dispatch => ({
  onWeightChange: (bodyWeight, liftedWeight) => dispatch({
    type: WEIGHT_CHANGED,
    bodyWeight,
    liftedWeight,
  }),
});

const withReducer = injectReducer({ key: 'score', reducer });
const withConnect = connect(mapStateToProps, mapDispatchToProps,);

export default compose(withReducer, withConnect)(WilksCalculator);

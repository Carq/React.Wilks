import { WEIGHT_CHANGED } from './constants';

const initialState = {
  wilksPoints: null,
};

function wilksCalculatorReducer(state = initialState, action) {
  switch (action.type) {
    case WEIGHT_CHANGED: {
      const { bodyWeight, liftedWeight } = action;
      const a = -216.0475144;
      const b = 16.2606339;
      const c = -0.002388645;
      const d = -0.00113732;
      const e = 7.01863e-6;
      const f = -1.291e-8;

      const wilksCoefficient = 500 / (a + (b * bodyWeight) + c * bodyWeight ** 2 + d * bodyWeight ** 3 + e * bodyWeight ** 4 + f * bodyWeight ** 5);
      const score = Math.round(liftedWeight * wilksCoefficient * 100) / 100;
      return {
        ...state,
        wilksPoints: score ? Number(score.toFixed(2)) : null
      };
    }
    default:
      return state;
  }
}

export default wilksCalculatorReducer;

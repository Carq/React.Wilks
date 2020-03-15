import React from 'react';
import PropTypes from 'prop-types';
import NumericInput from 'react-numeric-input';
import './style.scss';

export default class WilksCalculator extends React.Component {
  state = {
    bodyWeight: null,
    liftedWeight: null,
  };

  formatWithKg = number => `${number} kg`;

  onBodyWeightChanged = value => {
    const { onWeightChange } = this.props;
    const { liftedWeight } = this.state;

    this.setState({
      bodyWeight: value,
    });

    onWeightChange(value, liftedWeight);
  };

  onLiftedWeightChanged = value => {
    const { onWeightChange } = this.props;
    const { bodyWeight } = this.state;

    this.setState({
      liftedWeight: value,
    });

    onWeightChange(bodyWeight, value);
  };

  render() {
    const { wilksPoints } = this.props;
    const { bodyWeight, liftedWeight } = this.state;

    return (
      <div className="wilks-calculator">
        <h1>Kalkulator Wilks'a</h1>
        <div className="wilks-calculator_row">
          <div className="wilks-calculator_left-column">Waga:</div>
          <div className="wilks-calculator_right-column">
            <NumericInput
              className="input-kg"
              format={this.formatWithKg}
              max={150}
              min={1}
              mobile
              placeholder="70.5 kg"
              precision={1}
              step={1}
              type="number"
              value={bodyWeight}
              onChange={this.onBodyWeightChanged}
            />
          </div>
        </div>
        <div className="wilks-calculator_row">
          <div className="wilks-calculator_left-column">
            Podniesiony ciężar:
          </div>
          <div className="wilks-calculator_right-column">
            <NumericInput
              className="input-kg"
              format={this.formatWithKg}
              max={250}
              min={1}
              mobile
              placeholder="80.5 kg"
              precision={1}
              step={1}
              value={liftedWeight}
              onChange={this.onLiftedWeightChanged}
            />
          </div>
        </div>
        <div className="wilks-calculator_score-row">
          <div>Punkty Wilks'a:</div>
          <div className="wilks-calculator_score">{wilksPoints || '-'}</div>
        </div>
      </div>
    );
  }
}

WilksCalculator.propTypes = {
  wilksPoints: PropTypes.number,
  onWeightChange: PropTypes.func.isRequired,
};

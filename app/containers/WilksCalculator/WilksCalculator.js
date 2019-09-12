import React from 'react';
import NumericInput from 'react-numeric-input';
import './style.scss';

export default class WilksCalculator extends React.Component {
  state = {
    bodyWeight: null,
    liftedWeight: null,
  };

  formatWithKg = number => `${number} kg`;

  onBodyWeightChanged = value => {
    this.setState({
      bodyWeight: value,
    });
  };

  onLiftedWeightChanged = value => {
    this.setState({
      liftedWeight: value,
    });
  };

  render() {
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
              placeholder="70.5 kg"
              precision={1}
              step={1}
              strict
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
              placeholder="80.5 kg"
              precision={1}
              step={1}
              strict
              value={liftedWeight}
              onChange={this.onLiftedWeightChanged}
            />
          </div>
        </div>
        <div className="wilks-calculator_score-row">
          <div>Punkty Wilks'a:</div>
          <div className="wilks-calculator_score">12.4</div>
        </div>
      </div>
    );
  }
}

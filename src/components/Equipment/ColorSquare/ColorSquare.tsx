import { Component } from 'react';
import './ColorSquare.css';
import { ValidStateColor } from 'types/ValidStateColor';
import { ColorSquareSize } from 'types/ColorSquareSize';

interface ColorSquareProps {
  color: ValidStateColor;
  size: ColorSquareSize;
};

class ColorSquare extends Component<ColorSquareProps> {
  
  render() {
    return (
      <div
        className={`color-square ${this.props.color} + ${this.props.size}`}
      />
    );
  }
};

export default ColorSquare;
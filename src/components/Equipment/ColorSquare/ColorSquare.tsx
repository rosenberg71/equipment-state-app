import { Component } from 'react';

import './ColorSquare.css';
import { ValidStateColor } from 'types/ValidStateColor';

interface ColorSquareProps {
    color : ValidStateColor
};

class ColorSquare extends Component<ColorSquareProps> {
    render() {
        return (
          <div 
            className={'colorSquare ' + this.props.color} 
          />
        );
      } 
};

export default ColorSquare;
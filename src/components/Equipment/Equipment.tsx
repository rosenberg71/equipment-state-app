import { Component } from 'react'
import ColorSquare from './ColorSquare/ColorSquare'
import { ValidStateColor } from '../../types/ValidStateColor';
import './Equipment.css';
import ColorSquareSelector from './ColorSquare/ColorSquareSelector';
import { ColorSquareSize } from 'types/ColorSquareSize';

interface EquipmentComponentState {
  color: ValidStateColor,
  id: number | null,
  isLoading: boolean,
}


export default class Equipment extends Component<{}, EquipmentComponentState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      color: ValidStateColor.RED,
      id: null,
      isLoading: true,
    }
  }

  async componentDidMount() {
    try {
      console.log("Component mounted. Fetching equipment ID");
      const response = await fetch("http://localhost:3001/api/equipment/id");

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      this.setState({ id: data.id, isLoading: false });

    } catch (error) {
      // Actually handle the error
      console.log("Error:", error);
    }
  }

  onSquareClicked = (selectedColor: ValidStateColor) => {
    this.setState({ color: selectedColor });
  }

  render() {
    if (this.state.isLoading) {
      return;
    }
    return (
      <div className='equipment-container' >
        <h3>Equipment ID: {this.state.id}</h3>
        <div className='square-container'>
          <h5>Current state of equipment:</h5>
          <ColorSquare color={this.state.color} size={ColorSquareSize.LARGE}></ColorSquare>
        </div>
        <div className='square-container'>
          <ColorSquareSelector color={ValidStateColor.RED} selectColorCallback={this.onSquareClicked} />
          <ColorSquareSelector color={ValidStateColor.YELLOW} selectColorCallback={this.onSquareClicked} />
          <ColorSquareSelector color={ValidStateColor.GREEN} selectColorCallback={this.onSquareClicked} />
        </div>
      </div>
    )
  };
};

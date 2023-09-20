import { Component } from 'react'
import ColorSquare from './ColorSquare/ColorSquare'
import { ValidStateColor } from '../../types/ValidStateColor';
import './Equipment.css';
import ColorSquareSelector from './ColorSquare/ColorSquareSelector';
import { ColorSquareSize } from 'types/ColorSquareSize';
import ApiService from 'services/ApiService';

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
      const id = await ApiService.fetchEquipmentId();
      this.setState({id, isLoading: false});
    } catch (error) {
      // Actually handle the error thrown in the API service
      console.log("Error:", error);
    }
  }

  onSquareClicked = (selectedColor: ValidStateColor) => {
    this.setState({ color: selectedColor });
    this.sendStateToServer();
  }

  async sendStateToServer() {
    try {
      const response = await ApiService.sendEquipmentState(this.state.color);
      // Handle the response, if necessary
      console.log("State sent successfully!", response);
    } catch (error) {
      console.log("Error sending state:", error);
      // Handle the error, perhaps set some error state or notify the user
    }
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

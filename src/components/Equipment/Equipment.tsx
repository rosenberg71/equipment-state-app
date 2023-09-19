import { Component } from 'react'
import ColorSquare from './ColorSquare/ColorSquare'
import { ValidStateColor } from '../../types/ValidStateColor';
import './Equipment.css';

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

      // Check if the response is okay. If not, throw an error.
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Received response:", data);
      this.setState({ id: data.id, isLoading: false });
    } catch (error) {
      console.log("Error:", error);
    }
  }

  render() {
    if(this.state.isLoading){
      return;
    }
    return (
      <>
        <div>Equipment</div>
        <div className='squareContainer'>
          <ColorSquare color={ValidStateColor.RED}></ColorSquare>
          <ColorSquare color={ValidStateColor.YELLOW}></ColorSquare>
          <ColorSquare color={ValidStateColor.GREEN}></ColorSquare>
        </div>
      </>
    )
  };
};

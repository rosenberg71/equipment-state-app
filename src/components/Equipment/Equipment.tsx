import { Component } from 'react'
import ColorSquare from './ColorSquare/ColorSquare'
import { ValidStateColor } from '../../types/ValidStateColor';
import './Equipment.css';
interface EquipmentComponentState {
  color: ValidStateColor
}

export default class Equipment extends Component<{}, EquipmentComponentState>{
  constructor(props: {}) {
    super(props);
    this.state = {
      color: ValidStateColor.RED
    }
  }
  render() {
    return (
      <>
        <div>Equipment</div>
        <div className='square-container'>
          <ColorSquare color={ValidStateColor.RED}></ColorSquare>
          <ColorSquare color={ValidStateColor.YELLOW}></ColorSquare>
          <ColorSquare color={ValidStateColor.GREEN}></ColorSquare>
        </div>
      </>
    )
  }
}

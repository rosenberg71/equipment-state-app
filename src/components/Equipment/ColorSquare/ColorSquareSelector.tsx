import { Component } from "react"
import { ValidStateColor } from "types/ValidStateColor"
import ColorSquare from "./ColorSquare";
import { ColorSquareSize } from "../../../types/ColorSquareSize";

interface ColorSquareSelectorProps {
    selectColorCallback: (selectedColor: ValidStateColor) => void,
    color: ValidStateColor,
}

class ColorSquareSelector extends Component<ColorSquareSelectorProps> {

    handleClick = () => {
        this.props.selectColorCallback(this.props.color);
    }

    render() {
        return (
            <div onClick={this.handleClick}>
                <ColorSquare color={this.props.color} size={ColorSquareSize.SMALL} />
            </div>
        )
    }
}

export default ColorSquareSelector;
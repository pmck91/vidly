import React, {Component} from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";

class LikeWidget extends Component{
    render() {
        return (
            <React.Fragment>
                <span className={"clickable"} onClick={() => this.props.onLike(this.props.id)}>
                    {this.renderHeart()}
                </span>
            </React.Fragment>
        );
    }

    renderHeart() {
        return this.props.liked? <FaHeart/> : <FaRegHeart/>;
    }
}

export default LikeWidget
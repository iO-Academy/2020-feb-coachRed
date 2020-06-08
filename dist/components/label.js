"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Label = void 0;
const React = require("react");
class Label extends React.Component {
    render() {
        return (React.createElement("label", { htmlFor: this.props.for }, this.props.content));
    }
}
exports.Label = Label;

import React from "react";
import PropTypes from "prop-types";
import style from "./test.less";
import style2 from "./style2.less";

export default class HelloMessage extends React.PureComponent {
  render() {
    return <div className={`global-bar2 ${style2.foo2} ${style.foobar}`}>Hello {this.props.name}</div>;
  }
}

HelloMessage.propTypes = {
  name: PropTypes.string.isRequired,
};

import React, { Component } from "react";
import { Popover } from "antd";

class AddPopover extends Component {
  render() {
    const { content, visible, handleVisibleChange } = this.props;
    return (
      // <Tooltip title={title || ''}>
      <Popover
        content={content}
        trigger="click"
        placement="bottom"
        visible={visible}
        onVisibleChange={handleVisibleChange}
      >
        {this.props.children}
      </Popover>
      // </Tooltip>
    );
  }
}

export default AddPopover;

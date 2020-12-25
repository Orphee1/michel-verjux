import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import RichTextEditor from "react-rte";

export default class App3 extends Component {
  static propTypes = {
    onChange: PropTypes.func,
  };
  state = {
    value: RichTextEditor.createEmptyValue(),
  };
  onChange = (value) => {
    this.setState({ value });
    this.props.setText({
      ...this.props.text,
      article: value.toString("markdown"),
    });
    //     if (this.props.onChange) {
    //       this.props.onChange(value.toString("markdown"));
    //     }
  };

  render() {
    return (
      <Wrapper>
        <RichTextEditor
          value={this.state.value}
          onChange={this.onChange}
          className="editor"
        />
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  height: 45vh;
  /* background: blue; */
  width: 100%;
  .editor {
    height: 100%;
    overflow: scroll;
  }
`;

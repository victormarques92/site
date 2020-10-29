import React, { Component } from 'react';
import { Txt } from './styles';

export default class Text extends Component {
    render() {
        return (
            <Txt
                align={this.props.align}
                color={this.props.color}
                mb={this.props.mb}
                mt={this.props.mt}
                size={this.props.size}
                weight={this.props.weight}
                uppercase={this.props.uppercase}
            >
                {this.props.children}
            </Txt>
        );
    }
}

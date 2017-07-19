import React from 'react';
import ReactDOM from 'react-dom';

var PassButton = React.createClass({
    getInitialState:function () {
        return {passed:false};
    },
    handleClick:function(event){
        this.setState({passed: !this.state.passed});
    },
    render:function(){
        var text = this.state.passed?'通过':'不通过';
        return (
            <p onClick = {this.handleClick}>
                <b>{text}</b>(点我切换状态)
            </p>
        );
    }
});

ReactDOM.render(
    <PassButton />,
    document.getElementById('example')
);
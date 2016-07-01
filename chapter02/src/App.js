/**
 * 커스텀 팩토리 예제
 */
import React, {Component} from 'react';
import {render} from 'react-dom';

/**
 * 그리팅
 */
class Greeting extends Component {
    render() {
        return (<span>hi</span>);
    }
}

var dom = React.DOM;
var greeting = React.createFactory(Greeting);


render(
    dom.div({id: "greeting-container", className: "container"},
        greeting({name: "World"})
    ),
    document.getElementById('root')
);

/**
 * 인라인 스타일링 예제
 */

const style = {
    container: {
        backgroundColor: "#ddd",
        width: 900
    }
}

class Container extends Component {
    render() {
        return (
            <div style={style.container}>test</div>
        );
    }
}

render(
    <Container/>, document.getElementById('second')
);
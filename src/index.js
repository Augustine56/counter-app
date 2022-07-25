// eslint-disable-next-line no-unused-vars
import React from "react";
// eslint-disable-next-line no-unused-vars
import  ReactDOM from "react-dom";
import './index.css';

// eslint-disable-next-line no-unused-vars
class MyApp extends React.Component{
// eslint-disable-next-line no-useless-constructor
constructor (props){
    super (props);
    this.state={
        counter:0
    };
    this.increment=this.increment.bind(this)
    this.decrement=this.decrement.bind(this)
    this.reset=this.reset.bind(this)
}
increment(){
this.setState(state =>({
 counter:state.counter +=1
}));
}
decrement(){
this.setState(state => ({
 counter:state.counter -=1
}));
}
reset(){
this.setState({
 counter:0
});
}
render(){
    return(
        <div>
            <h1>Counter App</h1>
            <p>By clicking on the increment button, you will increase the integer, while clicking on the decrement button will do other wise.</p>
            <div className="btn-style">
                <button onClick={this.increment} className="btn1">Increment</button>
                <button onClick={this.decrement} className="btn2">Decrement</button>
                <button onClick={this.reset} className="btn3">Reset</button>
            </div>
            <p className="count"> <span className="txt">Count</span>: {this.state.counter}</p>

        </div>
    )
}




};
ReactDOM.render(<MyApp/>, document.getElementById('root'));
import React, {Component} from 'react';
import logo from '../assets/images/logo.svg';
import ShallowWorld from './ShallowWorld';
import '../assets/css/App.css';
let data = [];

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            homeList: []
        };
    }

    componentWillMount() {
        // this.getAll();
    }

    getAll() {

        let currentThis = this;
        this.props.getAllAssist()
            .then(function (res) {
                data = res.payload.data;
                currentThis.setState({homeList: data});
            }, function (err) {
                console.log("res", err);
                alert(err)
            })

    }
    changePage(){
        alert("herllo");
        this.props.changePage();
    }
    render() {
        console.log(this.state.homeList)
        return (
            <div className="App">
                <div>
                    <h1>Home</h1>
                    <p>Welcome home!</p>
                    <button onClick={() => this.props.changePage()}>Go to about page via redux</button>
                </div>

                <ShallowWorld name="Surj"/>
                <ShallowWorld name="Al"/>
                <button className="checkClick" onClick={() => this.getAll()}>Get Assist Data</button>
                <ul>
                    <li>{this.state.homeList.id}</li>
                    <li>{this.state.homeList.title}</li>
                    <li>{this.state.homeList.body}</li>
                </ul>
            </div>
        );
    }
}
export default App;

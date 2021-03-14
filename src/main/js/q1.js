const React = require('react');

class Q1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { result: [] }
    }

    componentDidMount(){
        fetch('/api/q1')
        .then(response=>response.json())
        .then(result=>{
            console.log(result);
            this.setState({result});
        })

    }

    render(){
        console.log(this.state.result);
        return(<>
            <h4>Food Clever Q1</h4>
            <div>TODO</div>
            <div>{JSON.stringify(this.state.result)}</div>
        </>)
    }
}
export default Q1;
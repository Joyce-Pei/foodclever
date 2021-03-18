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
            <h4>EatClever Q1</h4>
            <div>How many foods do we have in a specific food category (e.g., Beef Products, beverages, etc..)?</div>
            <br/>
            <div>Example: Below is the result for category Soup.</div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Number of foods</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.result.map(row =>
                                <tr>
                                    <td>{row.count}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
            
        </>)
    }
}
export default Q1;
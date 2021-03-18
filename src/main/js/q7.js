const React = require('react');

class Q7 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { result: [] }
    }

    componentDidMount(){
        fetch('/api/q7')
        .then(response=>response.json())
        .then(result=>{
            console.log(result);
            this.setState({result});
        })

    }

    render(){
        console.log(this.state.result);
        return(<>
            <h4>EatClever Q7</h4>
            <div>What are the differences of the range / average of different nutrition 
            (e.g. energy in calories, vitamin C, potassium, etc) in the recipes of different genders? 
            </div>
            <br/>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Gender</th>
                            <th>Name</th>
                            <th>Average Amount</th>
                            <th>Minimum Amount</th>
                            <th>Maximum Amount</th>
                            <th>Unit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.result.map(row =>
                                <tr>
                                    <td>{row.gender}</td>
                                    <td>{row.name}</td>
                                    <td>{row.averageAmount}</td>
                                    <td>{row.minimumAmount}</td>
                                    <td>{row.maximumAmount}</td>
                                    <td>{row.unitName}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </>)
    }
}
export default Q7;
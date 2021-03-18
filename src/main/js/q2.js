const React = require('react');

class Q2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { result: [] }
    }

    componentDidMount() {
        fetch('/api/q2')
            .then(response => response.json())
            .then(result => {
                console.log(result);
                this.setState({ result });
            })

    }

    render() {
        console.log(this.state.result);
        return (<>
            <h4>Eat Clever Q2</h4>
            <div>How many users use our app the past 10 days?  </div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>User Count</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.result.map(row =>
                                <tr>
                                    <td>{row.userCount}</td>
                                    
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </>)
    }
}
export default Q2;
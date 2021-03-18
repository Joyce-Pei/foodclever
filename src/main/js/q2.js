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
            <h4>Food Clever Q2</h4>
            <div>how many users use our app in specific period, such as a day, week, month...? 
                It is planned to show it somewhere in our welcome page to all users. </div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Nums Of Users</th>
                            <th>Nums Of Days</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.result.map(row =>
                                <tr>
                                    <td>{row.numsOfUsers}</td>
                                    <td>{row.numsOfDays}</td>
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
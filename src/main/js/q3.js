const React = require('react');

class Q3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { result: [] }
    }

    componentDidMount() {
        fetch('/api/q3')
            .then(response => response.json())
            .then(result => {
                console.log(result);
                this.setState({ result });
            })

    }

    render() {
        console.log(this.state.result);
        return (<>
            <h4>EatClever Q3</h4>
            <div>Top 10 users who use our app the most from their login records.</div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>UserName</th>
                            <th>LoginCount</th>
                            </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.result.map(row =>
                                <tr>
                                    <td>{row.userName}</td>
                                    <td>{row.loginCount}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </>)
    }
}
export default Q3;
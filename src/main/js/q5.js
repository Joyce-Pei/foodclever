const React = require('react');

class Q5 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { result: [] }
    }

    componentDidMount() {
        fetch('/api/q5')
            .then(response => response.json())
            .then(result => {
                console.log(result);
                this.setState({ result });
            })

    }

    render() {
        console.log(this.state.result);
        return (<>
            <h4>EatClever Q5</h4>
            <div>What are the food ratings for male users?</div>
            
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>Rating</th>
                            <th>Food</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.result.map(row =>
                                <tr>
                                    <td>{row.username}</td>
                                    <td>{row.rate}</td>
                                    <td>{row.foodDescription}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </>)
    }
}
export default Q5;
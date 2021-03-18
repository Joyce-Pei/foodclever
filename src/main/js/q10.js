const React = require('react');

class Q10 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { result: [] }
    }

    componentDidMount() {
        fetch('/api/q10')
            .then(response => response.json())
            .then(result => {
                console.log(result);
                this.setState({ result });
            })

    }

    render() {
        console.log(this.state.result);
        return (<>
            <h4>EatClever Q10</h4>
            <div>As a user to study about the habit of users, I want to know the average rating and the nutrition facts of a certain category of food that is at least 3 stars out of 5 and have the most number of comments</div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Average Rating</th>
                            <th>Name</th>
                            <th>Average Amount</th>
                            <th>Unit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.result.map(row =>
                                <tr>
                                    <td>{row.description}</td>
                                    <td>{row.averageRating}</td>
                                    <td>{row.name}</td>
                                    <td>{row.averageAmount}</td>
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
export default Q10;
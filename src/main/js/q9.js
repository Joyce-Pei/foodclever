const React = require('react');

class Q9 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { result: [] }
    }

    componentDidMount() {
        fetch('/api/q9')
            .then(response => response.json())
            .then(result => {
                console.log(result);
                this.setState({ result });
            })

    }

    render() {
        console.log(this.state.result);
        return (<>
            <h4>EatClever Q9</h4>
            <div>What are the top 10 foods ( either by food ratings, or usage frequency in recipe, or by number of user
comments) by different ages, and their corresponding Energy based on KCAL? (restaurants may want
to know which category of food is most welcome).</div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>AgeCategory</th>
                            <th>Description</th>
                            <th>CommentCount</th>
                            <th>Name</th>
                            <th>UnitName</th>
			    <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.result.map(row =>
                                <tr>
                                    <td>{row.AgeCategory}</td>
                                    <td>{row.Description}</td>
                                    <td>{row.CommentCount}</td>
                                    <td>{row.name}</td>
                                    <td>{row.UnitName}</td>
				    <td>{row.Amount}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </>)
    }
}
export default Q9;
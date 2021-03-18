const React = require('react');

class q6 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { result: [] }
    }

    componentDidMount() {
        fetch('/api/q6')
            .then(response => response.json())
            .then(result => {
                console.log(result);
                this.setState({ result });
            })

    }

    render() {
        console.log(this.state.result);
        return (<>
            <h4>Food Clever q6</h4>
            <div>Find the foods (listed by has the highest rating(rated by users) in descending order) 
                for a given criteria (e.g. calories < 300, protein > 50).</div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Food Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.result.map(row =>
                                <tr>
                                    <td>{row.foodName}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </>)
    }
}
export default q6;
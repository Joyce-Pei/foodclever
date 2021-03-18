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
            <h4>Food Clever Q6</h4>
            <div>Find the foods by ratings in descending order 
                for a given criteria (e.g. calories &lt; 300, protein &gt; 50).</div>
            <br/>
            <div>Example: below shows foods by ratings in descending order for calories &lt; 300</div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Food Description</th>
                            <th>Average Rating</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.result.map((row,i) =>
                                <tr key={i}>
                                    <td>{row.foodDescription}</td>
                                    <td>{row.averageRating}</td>
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
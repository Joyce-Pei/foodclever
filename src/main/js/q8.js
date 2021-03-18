const React = require('react');

class Q8 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { result: [{description: 'loading...'}] }
    }

    componentDidMount() {
        fetch('/api/q8')
            .then(response => response.json())
            .then(result => {
                console.log(result);
                this.setState({ result });
            });
       
    }

    render() {
        console.log(this.state.result);
        return (<>
            <h4>EatClever Q8</h4>
            <div>Among one kind of food, show users one specific product with the maximum/minimum nutrients.  Like the egg with most protein, the beer with least alcohol.  </div>
            <br/>
            <div>Example: Below is the result of food with ‘egg’ with maximum protein. </div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Name</th>
                            <th>Amount</th>
                            <th>Unitname</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.result.map((row,i) =>
                                <tr key={i}>
                                    <td>{row.description}</td>
				                    <td>{row.name}</td>
                                    <td>{row.amount}</td>
                                    <td>{row.unitname}</td>
                               </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </>)
    }
}
export default Q8;
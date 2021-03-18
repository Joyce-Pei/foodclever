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
            <h4>Eat Clever Q8</h4>
            <div>Given a particular word, e.g. egg, find the food with the word in description 
                with maximum calorie, or maximum potassium or iodine or minimum vitamin C. 
                (users to find a food suitable for them)  
            </div>
            <br/>
            <div>As an example, below is the result with the word 'apple' and showing the vitamin C.</div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.result.map((row,i) =>
                                <tr key={i}>
                                    <td>{row.description}</td>
                                   
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
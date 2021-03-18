const React = require('react');

class Q8 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { result: [] }
    }

    componentDidMount() {
        fetch('/api/q8')
            .then(response => response.json())
            .then(result => {
                console.log(result);
                this.setState({ result });
            })

    }

    render() {
        console.log(this.state.result);
        return (<>
            <h4>Food Clever Q8</h4>
            <div>Given a particular word, e.g. egg, find the food with the word in description 
                with maximum calorie, or maximum potassium or iodine or minimum vitamin C. 
                (users to find a food suitable for them)  </div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>FNF Description</th>
                            <th>Nutrient Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.result.map(row =>
                                <tr>
                                    <td>{row.FNFDescription}</td>
                                    <td>{row.nutrientName}</td>
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
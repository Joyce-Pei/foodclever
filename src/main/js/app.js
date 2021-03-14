const React = require('react');
const ReactDOM = require('react-dom');

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = { users: [] };
    }

    componentDidMount() {
        fetch('/api/recipes')
            .then(response => response.json())
            .then(users => {
                console.log(users);
                this.setState({ users: users });
            })
        // 	client({method: 'GET', path: '/api/users'}).done(response => {
        //         console.log(response.entity._embedded);
        // 		this.setState({users: response.entity._embedded});
        // 	});
    }

    render() {
        console.log(this.state.users);
        return (
            <>
                <div> Food Clever Home </div>
                <div>{JSON.stringify(this.state.users)}</div>
            </>
        )
    }
}

// tag::render[]
ReactDOM.render(
    <App />,
    document.getElementById('react')
)
// end::render[]
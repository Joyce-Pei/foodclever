const React = require('react');
const ReactDOM = require('react-dom');
const { default: Q10 } = require('./q10');
const { default: Q7 } = require('./q7');
const { default: Q9 } = require('./q9');

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = { page: null };
    }

    componentDidMount() {

    }

    render() {
        let page = this.state.page;
        if (!page) {
            return (
                <>
                    <h1> Food Clever Home </h1>
                    <p>
                        <a href='#' onClick={this.handlePageClicked.bind(this, "q7")}>
                            Q7. What is the differences of the range / average of different nutrition 
                            in the recipes of different genders?  </a>
                    </p>
                    <p>
                        <a href='#' onClick={this.handlePageClicked.bind(this, "q9")}>
                            Q9. </a>
                    </p>
                    <p>
                        <a href='#' onClick={this.handlePageClicked.bind(this, "q10")}>
                            Q10. As a user to study about the habit of users, I want to know
                            the average rating and the nutrition facts of a certain category of food
                            that is at least 3 stars out of 5 (60 out of 100)
                        and having most number of comments. </a>
                    </p>


                </>
            )
        }
        return (<>
            <a href="#" onClick={this.handlePageClicked.bind(this, null)}>Home</a>
            {
                page === "q7" ? <Q7 /> : null
            }
            {
                page === "q9" ? <Q9 /> : null
            }
            {
                page === "q10" ? <Q10 /> : null
            }

        </>
        )



    }

    handlePageClicked = (page) => {
        console.log(page);
        this.setState({ page });
    }
}

// tag::render[]
ReactDOM.render(
    <App />,
    document.getElementById('react')
)
// end::render[]
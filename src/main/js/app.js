const React = require('react');
const ReactDOM = require('react-dom');
const { default: Q10 } = require('./q10');
const { default: Q9 } = require('./q9');
const { default: Q4 } = require('./q4');
const { default: Q6 } = require('./q6');

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
                    <h1> Eat Clever Home </h1>
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
                    <p>
                        <a href='#' onClick={this.handlePageClicked.bind(this, "q4")}>
                            Q4. Which user has the most comments. </a>
                    </p>
                    <p>
                        <a href='#' onClick={this.handlePageClicked.bind(this, "q6")}>
                            Q6.  Find the foods (listed by has the highest rating(rated by users) in descending order) 
                            for a given criteria (e.g. calories < 300, protein > 50). </a>
                    </p>


                </>
            )
        }
        return (<>
            <a href="#" onClick={this.handlePageClicked.bind(this, null)}>Home</a>
            {
                page === "q9" ? <Q9 /> : null
            }
            {
                page === "q10" ? <Q10 /> : null
            }
            {
                page === "q4" ? <Q4 /> : null
            }
            {
                page === "q6" ? <Q6 /> : null
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
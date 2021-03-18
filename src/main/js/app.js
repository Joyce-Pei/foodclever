const React = require('react');
const ReactDOM = require('react-dom');
const { default: AllUsers } = require('./allUsers');
const { default: Q1 } = require('./q1');
const { default: Q2 } = require('./q2');
const { default: Q5 } = require('./q5');
const { default: Q7 } = require('./q7');
const { default: Q8 } = require('./q8');
const { default: Q9 } = require('./q9');
const { default: Q10 } = require('./q10');

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
                        <a href="#" onClick={this.handlePageClicked.bind(this, "users")}>Users</a>
                    </p>
                    <p>
                        <a href='#' onClick={this.handlePageClicked.bind(this, "q1")}>
                            Q1. how many foods do we have by specific category (e.g., Beef Products, beverages, etc..)?
                         </a>
                    </p>
                    <p>
                        <a href='#' onClick={this.handlePageClicked.bind(this, "q2")}>
                            Q2. How many users use our app the past 10 days?
                         </a>
                    </p>

                    <p>
                        <a href='#' onClick={this.handlePageClicked.bind(this, "q5")}>
                            Q5. What are the food rating for male gender?
                         </a>
                    </p>
                    <p>
                        <a href='#' onClick={this.handlePageClicked.bind(this, "q7")}>
                            Q7. What is the differences of the range / average of different nutrition
                            in the recipes of different genders?  </a>
                    </p>
                    <p>
                        <a href='#' onClick={this.handlePageClicked.bind(this, "q8")}>
                            Q8. Given a particular word, e.g. egg, find the food with the word in description
                            with maximum calorie, or maximum potassium or iodine or minimum vitamin C.
                            (users to find a food suitable for them)  </a>
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
                page === "users" ? <AllUsers /> : null
            }
            {
                page === "q1" ? <Q1 /> : null
            }
            {
                page === "q2" ? <Q2 /> : null
            }
            {
                page === "q5" ? <Q5 /> : null
            }
            {
                page === "q7" ? <Q7 /> : null
            }
            {
                page === "q8" ? <Q8 /> : null
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
const React = require('react');
const ReactDOM = require('react-dom');
const { default: AllUsers } = require('./allUsers');
const { default: Q1 } = require('./q1');
const { default: Q2 } = require('./q2');
const { default: Q3 } = require('./q3');
const { default: Q4 } = require('./q4');
const { default: Q5 } = require('./q5');
const { default: Q6 } = require('./q6');
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
                    <h1> EatClever Home </h1>
                    <p>
                        <a href="#" onClick={this.handlePageClicked.bind(this, "users")}>Users</a>
                    </p>
                    <p>
                        <a href='#' onClick={this.handlePageClicked.bind(this, "q1")}>
                            Q1. How many foods do we have in a specific food category (e.g., Beef Products, beverages, etc..)?
                         </a>
                    </p>
                    <p>
                        <a href='#' onClick={this.handlePageClicked.bind(this, "q2")}>
                            Q2. How many users using our app the past 10 days?
                         </a>
                    </p>
                    <p>
                        <a href='#' onClick={this.handlePageClicked.bind(this, "q3")}>
                            Q3. Who are the top ten active users based on their login records? </a>
                    </p>
                    <p>
                        <a href='#' onClick={this.handlePageClicked.bind(this, "q4")}>
                            Q4. Who generates the most comments? </a>
                    </p>
                    <p>
                        <a href='#' onClick={this.handlePageClicked.bind(this, "q5")}>
                            Q5. What are the food ratings for male users?
                         </a>
                    </p>
                    <p>
                        <a href='#' onClick={this.handlePageClicked.bind(this, "q6")}>
                            Q6. Find the foods by ratings in descending order for a given criteria (e.g. calories &lt; 300, protein &gt; 50). </a>
                    </p>
                    <p>
                        <a href='#' onClick={this.handlePageClicked.bind(this, "q7")}>
                            Q7. What is the differences of the range / average of different nutrition
                            in the recipes of different genders?  </a>
                    </p>

                    <p>
                        <a href='#' onClick={this.handlePageClicked.bind(this, "q8")}>
                            Q8. Among one kind of food, show users one specific product with the maximum/minimum nutrients.  Like the egg with most protein, the beer with least alcohol. 
                        </a>
                    </p>
                    <p>
                        <a href='#' onClick={this.handlePageClicked.bind(this, "q9")}>
                            Q9. What are the top 10 food ( either by food ratings, or usage frequency in recipe, or by number of user comments) by different ages,  and their corresponding nutrition facts? (restaurants may want to know which category of food is most welcome)</a>
                    </p>

                    <p>
                        <a href='#' onClick={this.handlePageClicked.bind(this, "q10")}>
                            Q10. As a user to study about the habit of users, I want to know the average rating and the nutrition facts of a certain category of food that is at least 3 stars out of 5 and have the most number of comments </a>
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
                page === "q3" ? <Q3 /> : null
            }
            {
                page === "q4" ? <Q4 /> : null
            }
            {
                page === "q5" ? <Q5 /> : null
            }
            {
                page === "q6" ? <Q6 /> : null
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
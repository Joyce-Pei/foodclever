const React = require('react');
const ReactDOM = require('react-dom');
const { default: Q10 } = require('./q10');
const { default: Q9 } = require('./q9');
const { default: Q3 } = require('./q3');

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
                        <a href='#' onClick={this.handlePageClicked.bind(this, "q3")}>
                            Q3. top 10 users who use our app the most from their login records. </a>
                    </p>
                    <p>
                        <a href='#' onClick={this.handlePageClicked.bind(this, "q9")}>
                            Q9. What are the top 10 foods ( either by food ratings, or usage frequency in recipe, 
			        or by number of user comments) by different ages, and their corresponding Energy 
				based on KCAL? (restaurants may wantto know which category of food is most welcome).</a>
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
                page === "q3" ? <Q3 /> : null
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
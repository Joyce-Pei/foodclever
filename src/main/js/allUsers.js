const React = require('react');

class AllUsers extends React.Component {
    constructor(props) {
        super(props);
        this.state = { users: null };
    }

    componentDidMount() {
        fetch('/api/users')
            .then(response => response.json())
            .then(users => {
                console.log(users);
                this.setState({ users });
            })
    }

    render() {
        let users = this.state.users;
        let updateUser = this.state.updateUser;
        let createUser = this.state.createUser;
        let newUser = this.state.newUser;
        return (<> { createUser
            ? <>
                <form onSubmit={() => { }}>

                    <div >
                        <label htmlFor="userName">User name:</label>
                        <input type="text" id="userName" name="userName" value={newUser.userName}
                            onChange={this.handleChangeNewUserName} /><br /><br />
                        <label htmlFor="firstName">First name:</label>
                        <input type="text" id="firstName" name="firstName" value={newUser.firstName}
                            onChange={this.handleChangeNewFirstName} /><br /><br />
                        <label htmlFor="lastName">Last name:</label>
                        <input type="text" id="lastName" name="lastName" value={newUser.lastName}
                            onChange={this.handleChangeNewLastName} /><br /><br />
                        <label htmlFor="userPassword">Password:</label>
                        <input type="password" id="userPassword" name="userPassword" value={newUser.userPassword}
                            onChange={this.handleChangeNewPassword} /><br /><br />
                        <label htmlFor="dob">Date of birth:</label>
                        <input type="date" id="dob" name="dob" value={newUser.dob}
                            onChange={this.handleChangeNewDob} /><br /><br />

                        <input type="radio" id="female" name="gender" value="Female" checked={newUser.gender === "Female"}
                            onClick={() => { }} onChange={this.handleChangeNewGender} />
                        <label htmlFor="female">Female</label><br />
                        <input type="radio" id="male" name="gender" value="Male" checked={newUser.gender === "Male"}
                            onClick={() => { }} onChange={this.handleChangeNewGender} />
                        <label htmlFor="male">Male</label><br />
                        <input type="radio" id="other" name="gender" value="Other" checked={newUser.gender === "Other"}
                            onClick={() => { }} onChange={this.handleChangeNewGender} />
                        <label htmlFor="other">Other</label><br />
                    </div>


                    <button type="button" onClick={this.handleCreateUser}>Save</button>
                </form>
            </>
            :
            updateUser
                ? <>
                    <h4>User to update: {updateUser}</h4><br />
                    <form onSubmit={() => { }}>{
                        users ? users.filter(u => u.userName === updateUser).map(user =>
                            <div key={user.userName}>
                                <label htmlFor="firstName">First name:</label>
                                <input type="text" id="firstName" name="firstName" value={user.firstName}
                                    onChange={this.handleChangeFirstName} /><br /><br />
                                <label htmlFor="lastName">Last name:</label>
                                <input type="text" id="lastName" name="lastName" value={user.lastName}
                                    onChange={this.handleChangeLastName} /><br /><br />
                                <label htmlFor="userPassword">Password:</label>
                                <input type="password" id="userPassword" name="userPassword" value={user.userPassword}
                                    onChange={this.handleChangePassword} /><br /><br />
                                <label htmlFor="dob">Date of birth:</label>
                                <input type="date" id="dob" name="dob" value={user.dob}
                                    onChange={this.handleChangeDob} /><br /><br />

                                <input type="radio" id="female" name="gender" value="Female" checked={user.gender === "Female"}
                                    onClick={() => { }} onChange={this.handleChangeGender} />
                                <label htmlFor="female">Female</label><br />
                                <input type="radio" id="male" name="gender" value="Male" checked={user.gender === "Male"}
                                    onClick={() => { }} onChange={this.handleChangeGender} />
                                <label htmlFor="male">Male</label><br />
                                <input type="radio" id="other" name="gender" value="Other" checked={user.gender === "Other"}
                                    onClick={() => { }} onChange={this.handleChangeGender} />
                                <label htmlFor="other">Other</label><br />
                            </div>)
                            : <></>
                    }

                        <button type="button" onClick={this.handleUpdateUser}>Update</button>
                    </form>
                </>
                : <>
                    <h4>Food Clever Users</h4>
                    <div><button type='button' onClick={this.handleCreateClicked}>Create</button></div>
                    <div>
                        <table>
                            <thead>
                                <tr>
                                    <th>Username</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Gender</th>
                                    <th>Date of Birth</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>{
                                users ? users.map(row =>
                                    <tr key={row.userName}>
                                        <td>{row.userName}</td>
                                        <td>{row.firstName}</td>
                                        <td>{row.lastName}</td>
                                        <td>{row.gender}</td>
                                        <td>{row.dob}</td>
                                        <td>
                                            <button type="button" onClick={this.handleUpdateUserClicked.bind(this, row.userName)}>Update</button>
                                            <button type="button" onClick={this.handleDeleteUserClicked.bind(this, row.userName)}>Delete</button>
                                        </td>
                                    </tr>
                                ) : <tr><td colSpan={5}>No Users</td></tr>
                            }</tbody>

                        </table>
                    </div>
                </>
        } </>)
    }

    handleCreateClicked = () => {
        this.setState({ createUser: true, newUser: { userName: '', firstName: '', lastName: '', userPassword: '', gender: 'Other', dob: '' } });
    }
    handleChangeNewDob = (event)=>{
        let newUser = this.state.newUser;
        newUser = {
            firstName: newUser.firstName,
            gender: newUser.gender,
            lastName: newUser.lastName,
            userName: newUser.userName,
            userPassword: newUser.userPassword,
            dob: event.target.value
        };
        this.setState({ newUser });
    }
    handleChangeNewGender = (event) => {
        let newUser = this.state.newUser;
        newUser = {
            firstName: newUser.firstName,
            gender: event.target.value,
            lastName: newUser.lastName,
            userName: newUser.userName,
            userPassword: newUser.userPassword,
            dob: newUser.dob
        };
        this.setState({ newUser });

    }
    handleChangeNewUserName = (event) => {
        let newUser = this.state.newUser;
        newUser = {
            firstName: newUser.firstName,
            gender: newUser.gender,
            lastName: newUser.lastName,
            userName: event.target.value,
            userPassword: newUser.userPassword,
            dob: newUser.dob
        };
        this.setState({ newUser });
    }
    handleChangeNewFirstName = (event) => {
        let newUser = this.state.newUser;
        newUser = {
            firstName: event.target.value,
            gender: newUser.gender,
            lastName: newUser.lastName,
            userName: newUser.userName,
            userPassword: newUser.userPassword,
            dob: newUser.dob
        };
        this.setState({ newUser });
    }
    handleChangeNewLastName = (event) => {
        let newUser = this.state.newUser;
        newUser = {
            firstName: newUser.firstName,
            gender: newUser.gender,
            lastName: event.target.value,
            userName: newUser.userName,
            userPassword: newUser.userPassword,
            dob: newUser.dob
        };
        this.setState({ newUser });
    }
    handleChangeNewPassword = (event) => {
        let newUser = this.state.newUser;
        newUser = {
            firstName: newUser.firstName,
            gender: newUser.gender,
            lastName: newUser.lastName,
            userName: newUser.userName,
            userPassword: event.target.value,
            dob: newUser.dob
        };
        this.setState({ newUser });
    }
    handleChangeGender = (event) => {
        console.log(event.target.value);
        let users = this.state.users;
        let i = users.findIndex(user => user.userName === this.state.updateUser);
        users[i] = {
            firstName: users[i].firstName,
            gender: event.target.value,
            lastName: users[i].lastName,
            userName: users[i].userName,
            userPassword: users[i].userPassword,
            dob: users[i].dob
        }
        console.log(users);
        this.setState({ users });
    }
    handleChangeFirstName = (event) => {
        // console.log(event.target.value);
        let users = this.state.users;
        let i = users.findIndex(user => user.userName === this.state.updateUser);
        users[i] = {
            firstName: event.target.value,
            gender: users[i].gender,
            lastName: users[i].lastName,
            userName: users[i].userName,
            userPassword: users[i].userPassword,
            dob: users[i].dob
        }
        console.log(users);
        this.setState({ users });
    }

    handleChangeLastName = (event) => {
        let users = this.state.users;
        let i = users.findIndex(user => user.userName === this.state.updateUser);
        users[i] = {
            firstName: users[i].firstName,
            gender: users[i].gender,
            lastName: event.target.value,
            userName: users[i].userName,
            userPassword: users[i].userPassword,
            dob: users[i].dob
        }
        console.log(users);
        this.setState({ users });
    }

    handleChangePassword = (event) => {
        let users = this.state.users;
        let i = users.findIndex(user => user.userName === this.state.updateUser);
        users[i] = {
            firstName: users[i].firstName,
            gender: users[i].gender,
            lastName: users[i].lastName,
            userName: users[i].userName,
            userPassword: event.target.value,
            dob: users[i].dob
        }
        console.log(users);
        this.setState({ users });
    }
    handleChangeDob = (event) => {
        let users = this.state.users;
        let i = users.findIndex(user => user.userName === this.state.updateUser);
        users[i] = {
            firstName: users[i].firstName,
            gender: users[i].gender,
            lastName: users[i].lastName,
            userName: users[i].userName,
            userPassword: users[i].userPassword,
            dob: event.target.value
        }
        console.log(users);
        this.setState({ users });
    }
    handleCreateUser = () => {
        console.log(this.state.newUser);
        let user = this.state.newUser;
        fetch('/api/user', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        })
            .then(response => response.json())
            .then(user => {
                console.log(user);
                if (user && user.status === 400) {
                    alert("Invalid User");
                } else if (user && user.userName) {
                    this.setState({ createUser: false });
                    this.componentDidMount();
                    alert("Created in DB");

                } else {
                    alert("Error");
                }
            })
            .catch(error => {
                console.log(error);

            })
    }
    handleUpdateUser = () => {
        let users = this.state.users;
        let i = users.findIndex(user => user.userName === this.state.updateUser);
        console.log(users[i]);
        fetch('/api/user', {
            method: 'PUT', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(users[i]),
        })
            .then(response => response.json())
            .then(user => {
                console.log(user);
                if (user && user.status === 400) {
                    alert("Invalid User");
                } else if (user && user.userName) {
                    this.setState({ updateUser: false });
                    alert("Updated in DB");

                } else {
                    alert("Error");
                }
            })
            .catch(error => {
                console.log(error);

            })
    }


    handleDeleteUserClicked = (userName) => {
        console.log("Delete user: " + userName);
        fetch('/api/user/' + userName, {
            method: 'DELETE', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: "",
        })
            .then(response => response.json())
            .then(result => {
                console.log(result);
                this.componentDidMount();
                alert("Deleted User: "+ userName);
            });
    }

    handleUpdateUserClicked = (userName) => {
        console.log("Update user: " + userName);
        this.setState({ updateUser: userName });
    }
}
export default AllUsers;
package neu.db.project.foodclever.user;

// import javax.persistence.Entity;
// import javax.persistence.Id;

// @Entity
public class User {
  // @Id
  private  String userName;
  private  String firstName;
  private  String lastName;
  private  String userPassword;

  
  private  Gender gender;

  public User(String userName, String firstName, String lastName, String userPassword, Gender gender) {
    this.userName = userName;
    this.firstName = firstName;
    this.lastName = lastName;
    this.userPassword = userPassword;
    this.gender = gender;
  }


  public User() {
  }


  public String getUserName() {
    return userName;
  }

  public String getFirstName() {
    return firstName;
  }

  public String getLastName() {
    return lastName;
  }

  public String getUserPassword() {
    return userPassword;
  }

  public Gender getGender() {
    return gender;
  }

  public void setUserName(String userName) {
    this.userName = userName;
  }
  public void setFirstName(String firstName) {
    this.firstName = firstName;
  }
  public void setLastName(String lastName) {
    this.lastName = lastName;
  }
  public void setUserPassword(String userPassword) {
    this.userPassword = userPassword;
  }
  public void setGender(Gender gender) {
    this.gender = gender;
  }


  @Override
  public String toString() {
    return String.format(
            "User : {userName : '%s' , firstName : '%s' , lastName : '%s' , userPassword : '%s' , gender : '%s' }",
            this.userName,
            this.firstName,
            this.lastName,
            this.userPassword,
            this.gender);
  }
}

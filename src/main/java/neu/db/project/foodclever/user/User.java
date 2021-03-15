package neu.db.project.foodclever.user;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

@Table(value = "Users")
public class User {
  @Id @Column(value="UserName")
  private  String userName;
  @Column(value="FirstName")
  private  String firstName;
  @Column(value="LastName")
  private  String lastName;
  @Column(value="UserPassword")
  private  String userPassword;
  @Column(value="Gender")
  private  Gender gender;
  @Column(value="DOB")
  private Date dob;



  // public User(String userName, String firstName, String lastName, String userPassword, Gender gender) {
  //   this.userName = userName;
  //   this.firstName = firstName;
  //   this.lastName = lastName;
  //   this.userPassword = userPassword;
  //   this.gender = gender;
  // }


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


  public Date getDob() {
    return dob;
  }


  public void setDob(Date dob) {
    this.dob = dob;
  }


  @Override
  public String toString() {
    return "User [dob=" + dob + ", firstName=" + firstName + ", gender=" + gender + ", lastName=" + lastName
        + ", userName=" + userName + ", userPassword=" + userPassword + "]";
  }



}

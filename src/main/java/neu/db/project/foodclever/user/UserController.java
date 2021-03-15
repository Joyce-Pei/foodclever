package neu.db.project.foodclever.user;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class UserController {
  private UserRepository repo;
  private JdbcTemplate jdbcTemplate;

  public UserController(UserRepository repo, JdbcTemplate jdbcTemplate) {
    this.repo = repo;
    this.jdbcTemplate = jdbcTemplate;
  }


  

  @GetMapping("/api/users")
  public Iterable<User> getAll() {
    return repo.findAll();
  }

  @GetMapping("/api/user/{username}")
  public User get(@PathVariable String username) throws InvalidUserException{
    if (username==null || username.isEmpty()){
      throw new InvalidUserException("User name cannot be null or empty");
    }
    if (repo.existsById(username)){
      return repo.findById(username).get();
    
    }
    throw new InvalidUserException(String.format("User %s does not exist", username));
  }

  @PostMapping("/api/user")
  public User create(@RequestBody User user) throws InvalidUserException{
    Logger logger = LoggerFactory.getLogger(getClass());
    if (user==null){
      logger.warn("User is null");
      throw new InvalidUserException("User is null");
    }
    if (repo.existsById(user.getUserName())){
      logger.warn("User already exists");
      throw new InvalidUserException("User already exists");
    }

    jdbcTemplate.update("INSERT INTO USERS (UserName, FirstName, LastName, UserPassword, Gender, DOB) values (?,?,?,?,?,?) ", 
    user.getUserName(), user.getFirstName(), user.getLastName(), user.getUserPassword(), user.getGender().toString(),
    user.getDob());
    return user;
  }

  @DeleteMapping("/api/user/{username}")
  public boolean delete(@PathVariable String username) throws InvalidUserException{
    if (username==null){
      throw new InvalidUserException("User is null");
    }
    if (!repo.existsById(username)){
      throw new InvalidUserException("User does not exist");
    }
    repo.deleteById(username);
    return true;
  }

  @PutMapping("/api/user")
  public User update(@RequestBody User user) throws InvalidUserException{
    if (user==null){
      throw new InvalidUserException("User is null");
    }
    if (!repo.existsById(user.getUserName())){
      throw new InvalidUserException("User does not exist");
    }
    return repo.save(user);
  }

  @ResponseStatus(value=HttpStatus.BAD_REQUEST)
  public class InvalidUserException extends RuntimeException{
    private String message;
    public InvalidUserException(String message) {
      super(message);
      this.message = message;
    }
    public String getMessage() {
      return message;
    }
    public void setMessage(String message) {
      this.message = message;
    }
      

  }


}

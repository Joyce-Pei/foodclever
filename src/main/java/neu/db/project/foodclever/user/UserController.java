package neu.db.project.foodclever.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class UserController {
  @Autowired
  JdbcTemplate jdbcTemplate;

  @GetMapping("/api/users")
  public List<User> get() {
    List<User> query = jdbcTemplate.query("SELECT * FROM USERS;", (rs, row) -> new User(rs.getString("username"), rs.getString("firstname"),
            rs.getString("lastname"), rs.getString("userpassword"), Gender.valueOf(rs.getString("gender"))));
    return query;
  }
}

package neu.db.project.foodclever.q7;

import java.util.List;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import neu.db.project.foodclever.ResourceReader;
import neu.db.project.foodclever.user.Gender;

@RestController
public class Q7Controller {
    private final JdbcTemplate jdbcTemplate;
    private final String sql;


    public Q7Controller(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
        this.sql = ResourceReader.readFileToString("classpath:q7.sql");
    }


    
    @GetMapping("/api/q7")
    public List<Q7> get(){
        return jdbcTemplate.query(sql, 
        (rs, row)->new Q7(
            Gender.valueOf(rs.getString("gender")), 
            rs.getString("name"), 
            rs.getDouble("averageAmount"),
            rs.getDouble("minimumAmount"),
            rs.getDouble("maximumAmount"),
            rs.getString("unitName")));
    }
}

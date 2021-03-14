package neu.db.project.foodclever.q10;

import java.util.List;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import neu.db.project.foodclever.ResourceReader;

@RestController
public class Q10Controller {
    private final JdbcTemplate jdbcTemplate;
    private final String sql;

    public Q10Controller(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
        this.sql = ResourceReader.readFileToString("classpath:q10.sql");
    }

    @GetMapping("/api/q10")
    public List<Q10> get(){
        return jdbcTemplate.query(sql, 
        (rs, row)->new Q10(
            rs.getString("description"), 
            rs.getString("averageRating"), 
            rs.getString("name"), 
            rs.getDouble("averageAmount"),
            rs.getString("unitname")));
    }


}

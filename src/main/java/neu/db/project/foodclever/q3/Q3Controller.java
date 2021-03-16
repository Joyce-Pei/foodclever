package neu.db.project.foodclever.q3;

import java.util.List;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import neu.db.project.foodclever.ResourceReader;

@RestController
public class Q3Controller {
    private final JdbcTemplate jdbcTemplate;
    private final String sql;

    public Q3Controller(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
        this.sql = ResourceReader.readFileToString("classpath:q3.sql");
    }

    @GetMapping("/api/q3")
    public List<Q3> get(){
        return jdbcTemplate.query(sql, 
        (rs, row)->new Q3(
            rs.getString("UserName"), 
            rs.getInt("LoginCount")));
    }


}

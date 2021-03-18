package neu.db.project.foodclever.q4;

import java.util.List;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import neu.db.project.foodclever.ResourceReader;

@RestController
public class Q4Controller {
    private final JdbcTemplate jdbcTemplate;
    private final String sql;

    public Q4Controller(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
        this.sql = ResourceReader.readFileToString("classpath:q4.sql");
    }

    @GetMapping("/api/q4")
    public List<Q4> get(){
        return jdbcTemplate.query(sql, 
        (rs, row)->new Q4(
            rs.getString("userName")));
    }


}

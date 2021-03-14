package neu.db.project.foodclever.q5;
import java.util.List;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import neu.db.project.foodclever.ResourceReader;

@RestController

public class Q5Controller {
    private final JdbcTemplate jdbcTemplate;
    private final String sql;

    public Q5Controller(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
        this.sql = ResourceReader.readFileToString("classpath:q5.sql");
    }

    @GetMapping("/api/q5")
    public List<Q5> get(){
        return jdbcTemplate.query(sql, 
        (rs, row)->new Q5(
            rs.getString("username"), 
            rs.getInt("rate")));
    }


}


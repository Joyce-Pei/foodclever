package neu.db.project.foodclever.q8;

import java.util.List;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import neu.db.project.foodclever.ResourceReader;

@RestController
public class Q8Controller {
    private final JdbcTemplate jdbcTemplate;
    private final String sql;

    public Q8Controller(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
        this.sql = ResourceReader.readFileToString("classpath:q8.sql");
    }

    @GetMapping("/api/q8")
    public List<Q8> get(){
        return jdbcTemplate.query(sql, 
        (rs, row)->new Q8(
            rs.getString("Description")));
    }


}

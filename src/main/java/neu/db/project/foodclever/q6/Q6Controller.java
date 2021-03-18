package neu.db.project.foodclever.q6;

import java.util.List;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import neu.db.project.foodclever.ResourceReader;

@RestController
public class Q6Controller {
    private final JdbcTemplate jdbcTemplate;
    private final String sql;

    public Q6Controller(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
        this.sql = ResourceReader.readFileToString("classpath:q6.sql");
    }

    @GetMapping("/api/q6")
    public List<Q6> get(){
        return jdbcTemplate.query(sql, 
        (rs, row)->new Q6(
            rs.getString("description"),
            rs.getDouble("averageRating")));
    }


}

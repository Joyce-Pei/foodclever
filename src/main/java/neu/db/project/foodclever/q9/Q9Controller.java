package neu.db.project.foodclever.q9;

import java.util.List;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import neu.db.project.foodclever.ResourceReader;

@RestController
public class Q9Controller {
    private final JdbcTemplate jdbcTemplate;
    private final String sql;

    public Q9Controller(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
        this.sql = ResourceReader.readFileToString("classpath:q9.sql");
    }

    @GetMapping("/api/q9")
    public List<Q9> get(){
        return jdbcTemplate.query(sql, 
        (rs, row)->new Q9(
            rs.getString("AgeCategory"), 
            rs.getString("Description"), 
            rs.getInt("CommentCount"), 
            rs.getString("name"),
            rs.getString("UnitName"),
            rs.getDouble("Amount")));
    }


}

package neu.db.project.foodclever.q1;

import java.util.List;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import neu.db.project.foodclever.ResourceReader;


@RestController
public class Q1Controller {
    private final JdbcTemplate jdbcTemplate;
    private final String sql;

    public Q1Controller(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
        this.sql = ResourceReader.readFileToString("classpath:q1.sql");
    }

    @GetMapping("/api/q1")
    public List<Q1> get(){
        return jdbcTemplate.query(sql, 
        (rs, row)->new Q1(
            rs.getInt(1) 
           
            ));

        

           
    }
}

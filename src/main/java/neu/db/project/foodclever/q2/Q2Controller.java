package neu.db.project.foodclever.q2;

import java.util.List;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import neu.db.project.foodclever.ResourceReader;

@RestController
public class Q2Controller {
    private final JdbcTemplate jdbcTemplate;
    private final String sql;

    public Q2Controller(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
        this.sql = ResourceReader.readFileToString("classpath:q2.sql");
    }

    @GetMapping("/api/q2")
    public List<Q2> get(){
        return jdbcTemplate.query(sql,
        (rs, row)->new Q10(
            rs.getInt(numsOfDays), 
            rs.getInt(numsOfUsers)));      
    }


}

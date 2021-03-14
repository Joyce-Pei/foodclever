package neu.db.project.foodclever.recipe;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RecipeController {
    private final RecipeRepository repo;

    @Autowired
    public RecipeController(RecipeRepository repo) {
        this.repo = repo;
    }


    @GetMapping("/api/recipes")
    public Iterable<Recipe> get(){
        return repo.findAll();
    }
}

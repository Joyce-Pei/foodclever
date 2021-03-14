package neu.db.project.foodclever;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import neu.db.project.foodclever.recipe.RecipeRepository;


@SpringBootApplication
public class FoodcleverApplication {


    public static void main(String[] args) {
		SpringApplication.run(FoodcleverApplication.class, args);
	}

}

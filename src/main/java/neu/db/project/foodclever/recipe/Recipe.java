package neu.db.project.foodclever.recipe;


import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

@Table(value = "Recipes")
public class Recipe {
    @Id
    @Column(value = "RecipeId")
    private Long recipeId;

    @Column(value = "UserName")
    private String userName;

    @Column(value = "Description")
    private String description;



    // public Recipe(int recipeId, String userName, String description) {
    //     this.recipeId = recipeId;
    //     this.userName = userName;
    //     this.description = description;
    // }


    public Recipe() {
    }

    public Long getRecipeId() {
        return this.recipeId;
    }

    public void setRecipeId(Long recipeId) {
        this.recipeId = recipeId;
    }




    public String getUserName() {
        return this.userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getDescription() {
        return this.description;
    }

    public void setDescription(String description) {
        this.description = description;
    }


}

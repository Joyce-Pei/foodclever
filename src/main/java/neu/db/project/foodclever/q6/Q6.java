package neu.db.project.foodclever.q6;

public class Q6 {
    private String foodDescription;
    private double averageRating;
    public Q6(String foodDescription, double averageRating) {
        this.foodDescription = foodDescription;
        this.averageRating = averageRating;
    }
    public String getFoodDescription() {
        return foodDescription;
    }
    public void setFoodDescription(String foodDescription) {
        this.foodDescription = foodDescription;
    }
    public double getAverageRating() {
        return averageRating;
    }
    public void setAverageRating(double averageRating) {
        this.averageRating = averageRating;
    }

    
}
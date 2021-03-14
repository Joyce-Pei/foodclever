package neu.db.project.foodclever.q10;

public class Q10 {
    private String description;
    private String averageRating;
    private String name;
    private double averageAmount;
    private String unitName;

    public Q10(String description, String averageRating, String name, double averageAmount, String unitName) {
        this.description = description;
        this.averageRating = averageRating;
        this.name = name;
        this.averageAmount = averageAmount;
        this.unitName = unitName;
    }

    public String getDescription() {
        return this.description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getAverageAmount() {
        return this.averageAmount;
    }

    public void setAverageAmount(double averageAmount) {
        this.averageAmount = averageAmount;
    }

    public String getUnitName() {
        return this.unitName;
    }

    public void setUnitName(String unitName) {
        this.unitName = unitName;
    }



    public String getAverageRating() {
        return averageRating;
    }

    public void setAverageRating(String averageRating) {
        this.averageRating = averageRating;
    }


}

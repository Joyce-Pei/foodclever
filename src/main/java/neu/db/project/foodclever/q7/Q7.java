package neu.db.project.foodclever.q7;

import neu.db.project.foodclever.user.Gender;

public class Q7 {
    private Gender gender;
    private String name;
    private double averageAmount;
    private double minimumAmount;
    private double maximumAmount;
    private String unitName;


    public Q7(Gender gender, String name, double averageAmount, double minimumAmount, double maximumAmount,
    String unitName) {
        this.gender = gender;
        this.name = name;
        this.averageAmount = averageAmount;
        this.minimumAmount = minimumAmount;
        this.maximumAmount = maximumAmount;
        this.unitName = unitName;
    }

    public Gender getGender() {
        return this.gender;
    }

    public void setGender(Gender gender) {
        this.gender = gender;
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

    public double getMinimumAmount() {
        return this.minimumAmount;
    }

    public void setMinimumAmount(double minimumAmount) {
        this.minimumAmount = minimumAmount;
    }

    public double getMaximumAmount() {
        return this.maximumAmount;
    }

    public void setMaximumAmount(double maximumAmount) {
        this.maximumAmount = maximumAmount;
    }

    public String getUnitName() {
        return unitName;
    }

    public void setUnitName(String unitName) {
        this.unitName = unitName;
    }

}

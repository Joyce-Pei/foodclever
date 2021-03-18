package neu.db.project.foodclever.q5;

public class Q5 {
    String username;
    int rate;
    String foodDescription;

    public Q5(String username, int rate, String foodDescription) {
        this.username = username;
        this.rate = rate;
        this.foodDescription = foodDescription;
    }


    public String getUsername() {
        return this.username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public int getRate() {
        return this.rate;
    }

    public void setRate(int rate) {
        this.rate = rate;
    }


    public String getFoodDescription() {
        return foodDescription;
    }


    public void setFoodDescription(String foodDescription) {
        this.foodDescription = foodDescription;
    }

}

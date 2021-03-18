package neu.db.project.foodclever.q2;

public class Q2 {
    private int numsOfUsers;
    private int numsOfDays ;

    public Q2(int numsOfUsers, int numsOfDays) {
        this.numsOfDays = numsOfDays;
        this.numsOfUsers = numsOfUsers;
    }

    public int getNumsOfUsers() {
        return this.numsOfUsers;
    }

    public void setNumsofUsers(int numsOfUsers) {
        this.numsOfUsers = numsOfUsers;
    }

    public int getNumsOfDays() {
        return this.numsOfDays;
    }

    public void setNumsofDays(int numsOfDays) {
        this.numsOfDays = numsOfDays;
    }

}

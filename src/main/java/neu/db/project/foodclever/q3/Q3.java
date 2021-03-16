package neu.db.project.foodclever.q3;

public class Q3 {
    private String UserName;
    private int LoginCount;


    public Q3(String UserName, int LoginCount) {
        this.UserName = UserName;
        this.LoginCount = LoginCount;
       
    }

    public String UserName() {
        return this.UserName;
    }

    public void setUserName(String UserName) {
        this.UserName = UserName;
    }

    public int LoginCount() {
        return this.LoginCount;
    }

    public void setLoginCount(int LoginCount) {
        this.LoginCount = LoginCount;
    }



}

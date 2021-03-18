package neu.db.project.foodclever.q9;

public class Q9 {

    private String AgeCategory;
    private String Description;
    private int CommentCount;
    private String name;
    private String UnitName;
    private double Amount;

  
    public Q9(String AgeCategory, String Description, int CommentCount, String name, String UnitName, double Amount) {
        this.AgeCategory = AgeCategory;
        this.Description = Description;
        this.CommentCount = CommentCount;
        this.name = name;
        this.UnitName = UnitName;
	this.Amount = Amount;
    }

    public String getAgeCategory() {
        return this.AgeCategory;
    }

    public void setAgeCategory(String AgeCategory) {
        this.AgeCategory = AgeCategory;
    }

   public String getDescription() {
        return this.Description;
    }

    public void setDescription(String Description) {
        this.Description = Description;
    }
    public int getCommentCount() {
        return this.CommentCount;
    }

    public void setCommentCount(int CommentCount) {
        this.CommentCount = CommentCount;
    }
    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getUnitName() {
        return this.UnitName;
    }

    public void setUnitName(String UnitName) {
        this.UnitName = UnitName;
    }

    public double getAmount() {
        return Amount;
    }

    public void setAmount(double Amount) {
        this.Amount = Amount;
    }


}

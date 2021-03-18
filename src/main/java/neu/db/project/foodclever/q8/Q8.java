package neu.db.project.foodclever.q8;

public class Q8 {
    private String description;
    private String name;
    private Double amount;
    private String unitname;

   
    public Q8(String description, String name, Double amount, String unitname) {
        this.description = description;
	this.name = name;
	this.amount = amount;
	this.unitname = unitname;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getname() {
        return name;
    }

    public void setname(String name) {
        this.name = name;
    }
    public Double getamount() {
        return amount;
    }

    public void setamount(Double amount) {
        this.amount = amount;
    }

    public String getunitname() {
        return this.unitname;
    }

    public void setunitname(String unitname) {
        this.unitname = unitname;
    }
 
}
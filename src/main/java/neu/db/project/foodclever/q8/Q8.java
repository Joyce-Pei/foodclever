package neu.db.project.foodclever.q8;

public class Q8 {
    private String FNFDescription;
    private String nutrientName;

    public Q8(String FNFDescription, String nutrientName) {
        this.FNFDescription = FNFDescription;
        this.nutrientName = nutrientName;
    }

    public String getFNFDescription() {
        return this.FNFDescription;
    }

    public void setFNFDescription(String FNFDescription) {
        this.FNFDescription = FNFDescription;
    }

    public String getNutrientName() {
        return this.nutrientName;
    }

    public void setNutrientName(String nutrientName) {
        this.nutrientName = nutrientName;
    }
}
package bitcamp.java89.ems2.domain;

public class Mento extends Member {
  private static final long serialVersionUID = 1L;
  
  protected String specialArea;
  protected String defaultArea;
  protected String career;
  
  public String getSpecialArea() {
    return specialArea;
  }
  public void setSpecialArea(String specialArea) {
    this.specialArea = specialArea;
  }
  public String getDefaultArea() {
    return defaultArea;
  }
  public void setDefaultArea(String defaultArea) {
    this.defaultArea = defaultArea;
  }
  public String getCareer() {
    return career;
  }
  public void setCareer(String career) {
    this.career = career;
  }
  
  @Override
  public String toString() {
    return "Mento [specialArea=" + specialArea + ", defaultArea=" + defaultArea + ", career=" + career + "]";
  }
}

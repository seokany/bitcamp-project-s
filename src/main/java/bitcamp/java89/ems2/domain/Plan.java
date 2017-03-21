package bitcamp.java89.ems2.domain;

public class Plan extends ContentsHeader{

  private static final long serialVersionUID = 1L;
  protected Object planMap;
  protected String planName;
  protected String planImage;
  protected String planImage2; // 임시 사용
  
  
  
  public String getPlanImage2() {
    return planImage2;
  }
  public void setPlanImage2(String planImage2) {
    this.planImage2 = planImage2;
  }
  public String getPlanName() {
    return planName;
  }
  public void setPlanName(String planName) {
    this.planName = planName;
  }
  public Object getPlanMap() {
    return planMap;
  }
  public void setPlanMap(Object planMap) {
    this.planMap = planMap;
  }
  public String getPlanImage() {
    return planImage;
  }
  public void setPlanImage(String planImage) {
    this.planImage = planImage;
  }
}
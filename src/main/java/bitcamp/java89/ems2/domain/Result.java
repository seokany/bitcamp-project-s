package bitcamp.java89.ems2.domain;

public class Result extends Mentee {
  private static final long serialVersionUID = 1L;
  
  protected int resultNo;
  protected String type;
  protected String resultResult;
  protected String eachResult;
  
  public String getEachResult() {
    return eachResult;
  }
  public void setEachResult(String eachResult) {
    this.eachResult = eachResult;
  }
  public int getResultNo() {
    return resultNo;
  }
  public void setResultNo(int resultNo) {
    this.resultNo = resultNo;
  }
  public String getType() {
    return type;
  }
  public void setType(String type) {
    this.type = type;
  }
  public String getResultResult() {
    return resultResult;
  }
  public void setResultResult(String resultResult) {
    this.resultResult = resultResult;
  }
  @Override
  public String toString() {
    return "Result [resultNo=" + resultNo + ", type=" + type + ", resultResult=" + resultResult + ", eachResult="
        + eachResult + "]";
  }
}

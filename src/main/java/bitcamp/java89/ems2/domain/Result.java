package bitcamp.java89.ems2.domain;

public class Result extends Mentee {
  private static final long serialVersionUID = 1L;
  
  protected int resultNo;
  protected String type;
  protected String resultResult;
  
  
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
  

  
}

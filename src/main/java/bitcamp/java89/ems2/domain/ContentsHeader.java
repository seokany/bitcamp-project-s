package bitcamp.java89.ems2.domain;

import java.io.Serializable;

public class ContentsHeader implements Serializable {
  private static final long serialVersionUID = 1L;
  
  protected int contentsNo;
  protected String contentsType;
  
  
  
  
  public int getContentsNo() {
    return contentsNo;
  }
  public void setContentsNo(int contentsNo) {
    this.contentsNo = contentsNo;
  }
  public String getContentsType() {
    return contentsType;
  }
  public void setContentsType(String contentsType) {
    this.contentsType = contentsType;
  }
  
  
  

  
  
  
}

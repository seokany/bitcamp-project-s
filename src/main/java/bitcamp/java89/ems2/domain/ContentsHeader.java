package bitcamp.java89.ems2.domain;

public class ContentsHeader extends Mento {
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
  @Override
  public String toString() {
    return "ContentsHeader [contentsNo=" + contentsNo + ", contentsType=" + contentsType + "]";
  }
}

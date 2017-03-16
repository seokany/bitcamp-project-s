package bitcamp.java89.ems2.domain;

import java.io.Serializable;

public class Photo implements Serializable {
  private static final long serialVersionUID = 1L;
  
  protected int photoNo;
  protected int ownerNo;
  protected String photoPath;
  
  public Photo() {
    super();
  }
  
  public Photo(String photoPath) {
    super();
    this.photoPath = photoPath;
  }
  
  public Photo(int photoNo, int ownerNo, String photoPath) {
    super();
    this.photoNo = photoNo;
    this.ownerNo = ownerNo;
    this.photoPath = photoPath;
  }
  
  public int getPhotoNo() {
    return photoNo;
  }
  public void setPhotoNo(int photoNo) {
    this.photoNo = photoNo;
  }
  public int getOwnerNo() {
    return ownerNo;
  }
  public void setOwnerNo(int ownerNo) {
    this.ownerNo = ownerNo;
  }
  public String getPhotoPath() {
    return photoPath;
  }
  public void setPhotoPath(String photoPath) {
    this.photoPath = photoPath;
  }
  
  @Override
  public String toString() {
    return "Photo [photoNo=" + photoNo + ", ownerNo=" + ownerNo + ", photoPath=" + photoPath + "]";
  }
}

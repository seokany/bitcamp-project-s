package bitcamp.java89.ems2.domain;

import java.io.Serializable;

public class Member implements Serializable {
  private static final long serialVersionUID = 1L;
  
  public static final String MENTEE = "mentee";
  public static final String MENTO = "mento";
  
  protected int memberNo;
  protected String email;
  protected String name;
  protected int age;
  protected String password;
  protected String photoPath;
  //protected Object image;
  
  
  public int getMemberNo() {
    return memberNo;
  }
  public void setMemberNo(int memberNo) {
    this.memberNo = memberNo;
  }
  public String getName() {
    return name;
  }
  public void setName(String name) {
    this.name = name;
  }
  public int getAge() {
    return age;
  }
  public void setAge(int age) {
    this.age = age;
  }
  public String getEmail() {
    return email;
  }
  public void setEmail(String email) {
    this.email = email;
  }
  public String getPassword() {
    return password;
  }
  public void setPassword(String password) {
    this.password = password;
  }
  public String getPhotoPath() {
    return photoPath;
  }
  public void setPhotoPath(String photoPath) {
    this.photoPath = photoPath;
  }
  /*public Object getImage() {
    return image;
  }
  public void setImage(Object image) {
    this.image = image;
  }*/
  
  @Override
  public String toString() {
    return "Member [memberNo=" + memberNo + ", name=" + name + ", age=" + age + ", email=" + email + ", password="
        + password + ", photoPath=" + photoPath + "]";
  }
}

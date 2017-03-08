package bitcamp.java89.ems2.domain;

import java.io.Serializable;

public class Person implements Serializable {
  private static final long serialVersionUID = 1L;
  
  protected Object personImage1;
  protected Object personImage2;
  protected String personName;
  protected String personJob;
  protected String personDescription;
  
  
  
  public Object getPersonImage1() {
    return personImage1;
  }
  public void setPersonImage1(Object personImage1) {
    this.personImage1 = personImage1;
  }
  public Object getPersonImage2() {
    return personImage2;
  }
  public void setPersonImage2(Object personImage2) {
    this.personImage2 = personImage2;
  }
  public String getPersonName() {
    return personName;
  }
  public void setPersonName(String personName) {
    this.personName = personName;
  }
  public String getPersonJob() {
    return personJob;
  }
  public void setPersonJob(String personJob) {
    this.personJob = personJob;
  }
  public String getPersonDescription() {
    return personDescription;
  }
  public void setPersonDescription(String personDescription) {
    this.personDescription = personDescription;
  }
  
  
  
  
}

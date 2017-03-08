package bitcamp.java89.ems2.domain;

import java.io.Serializable;

public class Job implements Serializable {
  private static final long serialVersionUID = 1L;
  
  protected Object jobImage; // base64로 해결.
  protected String jobName;
  protected String jobDescription;
  
  
  public Object getJobImage() {
    return jobImage;
  }
  public void setJobImage(Object jobImage) {
    this.jobImage = jobImage;
  }
  public String getJobName() {
    return jobName;
  }
  public void setJobName(String jobName) {
    this.jobName = jobName;
  }
  public String getJobDescription() {
    return jobDescription;
  }
  public void setJobDescription(String jobDescription) {
    this.jobDescription = jobDescription;
  }
  
  
  
  

  
  

  
  
  
}

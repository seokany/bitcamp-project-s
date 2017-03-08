package bitcamp.java89.ems2.domain;

import java.io.Serializable;

public class Topic implements Serializable {
  private static final long serialVersionUID = 1L;
  
  protected int topicNo;
  protected String topicName;
  
  
  
  public int getTopicNo() {
    return topicNo;
  }
  public void setTopicNo(int topicNo) {
    this.topicNo = topicNo;
  }
  public String getTopicName() {
    return topicName;
  }
  public void setTopicName(String topicName) {
    this.topicName = topicName;
  }
  
  
  
}

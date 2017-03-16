package bitcamp.java89.ems2.domain;

public class Message extends Plan{
  private static final long serialVersionUID = 1L;
  
  protected int messageNo;
  protected String message; 
  protected int writerNo;
  
  
  public int getMessageNo() {
    return messageNo;
  }
  public void setMessageNo(int messageNo) {
    this.messageNo = messageNo;
  }
  public String getMessage() {
    return message;
  }
  public void setMessage(String message) {
    this.message = message;
  }
  public int getWriterNo() {
    return writerNo;
  }
  public void setWriterNo(int writerNo) {
    this.writerNo = writerNo;
  }
  @Override
  public String toString() {
    return "Message [messageNo=" + messageNo + ", message=" + message + ", writerNo=" + writerNo + "]";
  }
}

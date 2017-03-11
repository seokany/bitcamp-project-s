package bitcamp.java89.ems2.control.json;

public class AjaxResult {
  public static final String SUCCESS = "success";
  public static final String FAIL = "fail";
  
  String status;
  Object data;
  
  public AjaxResult() {}
  
  public AjaxResult(String status, Object data) {
    this.status = status;
    this.data = data;
  }

  public String getStatus() {
    return status;
  }

  public void setStatus(String status) {
    this.status = status;
  }

  public Object getData() {
    return data;
  }

  public void setData(Object data) {
    this.data = data;
  }
}

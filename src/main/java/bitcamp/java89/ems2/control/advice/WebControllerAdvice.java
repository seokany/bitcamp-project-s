package bitcamp.java89.ems2.control.advice;

import java.text.SimpleDateFormat;
import java.util.Date;

import org.springframework.beans.propertyeditors.CustomDateEditor;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.InitBinder;

@ControllerAdvice
public class WebControllerAdvice {
  SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");

  @InitBinder
  public void initBinder(WebDataBinder binder) {
    dateFormat.setLenient(false);
    binder.registerCustomEditor(Date.class, new CustomDateEditor(dateFormat, false));
  }
  
}





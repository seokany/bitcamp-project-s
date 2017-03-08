package bitcamp.java89.ems2.control;

import java.util.ArrayList;

import javax.servlet.ServletContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.context.support.WebApplicationContextUtils;

@Controller
public class SystemInfoControl {
  @Autowired ServletContext servletContext;
  
  @RequestMapping("/system/beansInfo")
  public void beansInfo(Model model) {
    WebApplicationContext appContext = 
        WebApplicationContextUtils.getWebApplicationContext(servletContext);
    
    ArrayList<String> beanClassNames = new ArrayList<>(); 
    String[] names = appContext.getBeanDefinitionNames();
    
    for (String name : names) {
      beanClassNames.add(appContext.getBean(name).getClass().getName());
    }
    
    model.addAttribute("beanClassNames", beanClassNames);
  }
}








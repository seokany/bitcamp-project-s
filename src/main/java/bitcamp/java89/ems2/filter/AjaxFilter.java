package bitcamp.java89.ems2.filter;

import java.io.IOException;
import java.util.List;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import bitcamp.java89.ems2.domain.Manager;
import bitcamp.java89.ems2.domain.Member;
import bitcamp.java89.ems2.domain.Photo;
import bitcamp.java89.ems2.domain.Student;
import bitcamp.java89.ems2.domain.Teacher;

@WebFilter("*.json")
public class AjaxFilter implements Filter {

  @Override
  public void init(FilterConfig filterConfig) throws ServletException {}

  @Override
  public void doFilter(ServletRequest req, ServletResponse resp, FilterChain chain)
      throws IOException, ServletException {
    HttpServletResponse response = (HttpServletResponse)resp;
    response.setHeader("Access-Control-Allow-Origin", "*");

    chain.doFilter(req, resp);
  }

  @Override
  public void destroy() {}
  
  private String getPhotoPath(Member member) {
    if (member instanceof Student) {
      return ((Student)member).getPhotoPath();
      
    } else if (member instanceof Manager) {
      return ((Manager)member).getPhotoPath();
      
    } else /*if (member instanceof Teacher)*/ {
      List<Photo> photoList = ((Teacher)member).getPhotoList();
      if (photoList.size() > 0) {
        return photoList.get(0).getFilePath();
      } else {
        return null;
      }
    }
  }
}






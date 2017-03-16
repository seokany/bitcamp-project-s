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

@WebFilter("*.do")
public class AuthFilter implements Filter {

  @Override
  public void init(FilterConfig filterConfig) throws ServletException {}

  @Override
  public void doFilter(ServletRequest req, ServletResponse resp, FilterChain chain)
      throws IOException, ServletException {
    
    HttpServletRequest request = (HttpServletRequest)req;
    HttpServletResponse response = (HttpServletResponse)resp;
    
    // 세션에 사용자 정보가 저장된 경우(로그인한 경우) 멤버 정보에서 사진 정보를 뽑아서
    // ServletRequest 보관소에 저장한다.
    /*Member member = (Member)request.getSession().getAttribute("member");
    if (member != null) {
      request.setAttribute("photoPath", this.getPhotoPath(member));
    }
    */
    chain.doFilter(request, response);
  }

  @Override
  public void destroy() {}
  
  /*private String getPhotoPath(Member member) {
    if (member instanceof Student) {
      return ((Student)member).getPhotoPath();
      
    } else if (member instanceof Manager) {
      return ((Manager)member).getPhotoPath();
      
    } else if (member instanceof Teacher) {
      List<Photo> photoList = ((Teacher)member).getPhotoList();
      if (photoList.size() > 0) {
        return photoList.get(0).getFilePath();
      } else {
        return null;
      }
    }
  }*/
}






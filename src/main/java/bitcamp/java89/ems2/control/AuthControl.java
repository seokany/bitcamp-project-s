package bitcamp.java89.ems2.control;

import java.util.HashMap;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import bitcamp.java89.ems2.dao.MemberDao;
import bitcamp.java89.ems2.domain.Member;
import bitcamp.java89.ems2.service.AuthService;

@Controller
public class AuthControl {
  @Autowired MemberDao memberDao;
  @Autowired AuthService authService;
  
  @RequestMapping("/auth/login")
  public String login(String email, String password, boolean saveEmail, String userType,
      HttpServletResponse response, HttpSession session, Model model) throws Exception {
    if (saveEmail) {
      // 쿠키를 웹 브라우저에게 보낸다.
      Cookie cookie = new Cookie("email", email);
      cookie.setMaxAge(60 * 60 * 24 * 15);
      response.addCookie(cookie);
      
    } else {
      // 기존에 보낸 쿠키를 제거하라고 웹 브라우저에게 응답한다.
      Cookie cookie = new Cookie("email", "");
      cookie.setMaxAge(0);
      response.addCookie(cookie);
    }
    // 추가부분
    HashMap<String,String> paramMap = new HashMap<>();
    paramMap.put("email", email);
    paramMap.put("password", password);
    
    Member member = memberDao.getOneByEmailPassword(paramMap);
    
    //Member member = authService.getMemberInfo(email, password, userType);
    
    if (member != null) {
      session.setAttribute("member", member); // HttpSession에 저장한다.
      return "redirect:../member/list.do";
    }
      
    response.setHeader("Refresh", "2;url=loginform.do");
    model.addAttribute("title", "로그인");
    model.addAttribute("contentPage", "auth/loginfail.jsp");
    return "main";
    
  }
  
  @RequestMapping("/auth/loginform")
  public String loginform(Model model) throws Exception {
    model.addAttribute("title", "로그인");
    model.addAttribute("contentPage", "auth/loginform.jsp");
    return "main";
  }
  
  @RequestMapping("/auth/logout")
  public String logout(HttpSession session) throws Exception {
    session.invalidate(); // 기존 세션을 무효화시킨다.
    return "redirect:loginform.do";
  }
}









package bitcamp.java89.ems2.control.json;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import bitcamp.java89.ems2.dao.MentoDao;
import bitcamp.java89.ems2.domain.Member;
import bitcamp.java89.ems2.domain.Mento;
import bitcamp.java89.ems2.service.AuthService;

@RestController
public class AuthJsonControl {
  
  @Autowired AuthService authService;
  @Autowired MentoDao mentoDao;
  
  @RequestMapping("/auth/login")
  public AjaxResult login(String email, String password,
      HttpServletResponse response, HttpSession session, Model model) throws Exception {
    
    Member member = authService.getMemberInfo(email, password);
    Mento mento = authService.getMentoInfo(email, password);

    System.out.println("/auth/login :" + member);
        
    if (member == null) {
      return new AjaxResult(AjaxResult.FAIL, "이메일 또는 암호가 틀리거나, 가입된 회원이 아닙니다.");
    }
    session.setAttribute("member", member); // HttpSession에 저장한다.
    
    
    int count = authService.getOne(member.getMemberNo()); // 들어온 애가 멘토인지~ 확인.
    
    if (count == 0) { // 멘토가 아니라면
       
        return new AjaxResult(AjaxResult.SUCCESS, member);
    }
    else {
        
    return new AjaxResult(AjaxResult.SUCCESS, mento);
    }
  }

  @RequestMapping("/auth/logout")
  public AjaxResult logout(HttpSession session) throws Exception {
    session.invalidate(); // 기존 세션을 무효화시킨다.
    return new AjaxResult(AjaxResult.SUCCESS, "로그아웃 성공입니다.");
  }

  @RequestMapping("/auth/loginUser")
  public AjaxResult loginUser(HttpSession session) throws Exception {
    Member member = (Member)session.getAttribute("member");
    System.out.println("/auth/loginUser :" + member);

    if (member == null) { // 로그인이 되지 않은 상태
      return new AjaxResult(AjaxResult.FAIL, "로그인을 하지 않았습니다.");
    } 
     else {
        return new AjaxResult(AjaxResult.SUCCESS, member);
    }
  }
}









package bitcamp.java89.ems2.control.json;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import bitcamp.java89.ems2.domain.Member;
import bitcamp.java89.ems2.domain.Mentee;
import bitcamp.java89.ems2.domain.Mento;
import bitcamp.java89.ems2.service.MemberService;

//@Controller
@RestController // 이 애노테이션을 붙이면, 스프링 설정 파일에 JSON 변환기 'MappingJackson2JsonView' 객체를 등록하지 않아도 된다.
public class MemberJsonControl {
  @Autowired ServletContext sc;
  
  @Autowired MemberService memberService;


  @RequestMapping("/mentee/add")
  public AjaxResult add(Mentee mentee) throws Exception {
    memberService.addMentee(mentee);
    return new AjaxResult(AjaxResult.SUCCESS, "등록 성공입니다.");
  }
  
  @RequestMapping("/mento/add")
  public AjaxResult add(Mento mento) throws Exception {
    memberService.addMento(mento);
    return new AjaxResult(AjaxResult.SUCCESS, "등록 성공입니다.");
  }
  
  
  
  /*  
  @RequestMapping("/member/delete")
  public AjaxResult delete(int memberNo, HttpServletRequest request) throws Exception {
    int count = memberService.delete(memberNo);
    if (count == 0) {
      return new AjaxResult(AjaxResult.FAIL, "해당 번호의 학생이 없습니다.");
    }
    return new AjaxResult(AjaxResult.SUCCESS, "삭제 성공입니다.");
  }*/
  
  @RequestMapping("/mentee/update")
  public AjaxResult update(Member member, HttpSession session) throws Exception {
    System.out.println("update 메서드");
    int count = memberService.update(member);
    Member list = memberService.getOne(member.getMemberNo());
    
    if (count == 0) {
      return new AjaxResult(AjaxResult.FAIL, "해당 번호의 학생이 없습니다.");
    }
    session.setAttribute("member", list); // HttpSession에 저장한다.
    return new AjaxResult(AjaxResult.SUCCESS, list);
  }
}






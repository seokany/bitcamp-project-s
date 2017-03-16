package bitcamp.java89.ems2.control;

import java.util.List;

import javax.servlet.ServletContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import bitcamp.java89.ems2.dao.MemberDao;
import bitcamp.java89.ems2.dao.MenteeDao;
import bitcamp.java89.ems2.domain.Mentee;

@Controller
public class MenteeControl {
  @Autowired ServletContext sc;
  @Autowired MenteeDao menteeDao;
  @Autowired MemberDao memberDao;
  
  @RequestMapping("/mentee/form")
  public String form(Model model) {
    model.addAttribute("title", "멘티 입력폼");
    model.addAttribute("contentPage", "mentee/form.jsp");
    return "main";
  }
  @RequestMapping("/mentee/list")
  public String list(Model model) throws Exception {
    List<Mentee> list = menteeDao.getList();
    model.addAttribute("mentees", list);
    model.addAttribute("title", "멘티관리-목록");
    model.addAttribute("contentPage", "mentee/list.jsp");
    return "main";
  }

  @RequestMapping("/mentee/detail")
  public String detail(int menteeNo, Model model) throws Exception {
    
    Mentee mentee = menteeDao.getOneByNo(menteeNo);
    
    if (mentee == null) {
      throw new Exception("해당 멘티가 없습니다.");
    }
    
    model.addAttribute("mentee", mentee);
    model.addAttribute("title", "멘티관리-상세정보");
    model.addAttribute("contentPage", "mentee/detail.html");
    
    return "main";
  }
  
  
  @RequestMapping("/mentee/add")
  public String add(Mentee mentee) throws Exception {
    
    if (menteeDao.count(mentee.getEmail()) > 0) {
      throw new Exception("같은 사용자 아이디가 존재합니다. 등록을 취소합니다.");
    }
    
    /*if (file.getSize() > 0) { // 파일이 업로드 되었다면,
      String newFilename = MultipartUtil.generateFilename();
      file.transferTo(new File(sc.getRealPath("/upload/" + newFilename)));
      photoList.add(new Photo(newFilename));
    }*/
    
    menteeDao.insert(mentee);
    memberDao.insert(mentee);
    
    return "redirect:list.do";
  }
  
  @RequestMapping("/mentee/delete")
  public String delete(int menteeNo) throws Exception {
    if (menteeDao.countByNo(menteeNo) == 0) {
      throw new Exception("사용자를 찾지 못했습니다.");
    }
    menteeDao.delete(menteeNo);
    memberDao.delete(menteeNo);
    return "redirect:list.do";
  }
  
  
  @RequestMapping("/mentee/update")
  public String update(Mentee mentee) throws Exception {
    if (menteeDao.countByNo(mentee.getMemberNo()) == 0) {
      throw new Exception("사용자를 찾지 못했습니다.");
    }
    /*if (file.getSize() > 0) { // 파일이 업로드 되었다면,
      String newFilename = MultipartUtil.generateFilename();
      file.transferTo(new File(sc.getRealPath("/upload/" + newFilename)));
      photoList.add(new Photo(newFilename));
    }*/
    menteeDao.update(mentee);
    return "redirect:list.do";
  }
}









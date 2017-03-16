package bitcamp.java89.ems2.control;

import java.util.List;

import javax.servlet.ServletContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import bitcamp.java89.ems2.dao.MemberDao;
import bitcamp.java89.ems2.dao.MentoDao;
import bitcamp.java89.ems2.domain.Mento;

@Controller
public class MentoControl {
  @Autowired ServletContext sc;
  @Autowired MentoDao MentoDao;
  @Autowired MemberDao memberDao;
  
  @RequestMapping("/Mento/form")
  public String form(Model model) {
    model.addAttribute("title", "멘티 입력폼");
    model.addAttribute("contentPage", "Mento/form.html");
    return "main";
  }
  @RequestMapping("/Mento/list")
  public String list(Model model) throws Exception {
    List<Mento> list = MentoDao.getList();
    model.addAttribute("Mentos", list);
    model.addAttribute("title", "멘티관리-목록");
    model.addAttribute("contentPage", "Mento/list.html");
    return "main";
  }

  @RequestMapping("/Mento/detail")
  public String detail(int MentoNo, Model model) throws Exception {
    
    Mento Mento = MentoDao.getOneByNo(MentoNo);
    
    if (Mento == null) {
      throw new Exception("해당 멘티가 없습니다.");
    }
    
    model.addAttribute("Mento", Mento);
    model.addAttribute("title", "멘티관리-상세정보");
    model.addAttribute("contentPage", "Mento/detail.html");
    
    return "main";
  }
  
  
  @RequestMapping("/Mento/add")
  public String add(Mento Mento) throws Exception {
    
    if (MentoDao.count(Mento.getEmail()) > 0) {
      throw new Exception("같은 사용자 아이디가 존재합니다. 등록을 취소합니다.");
    }
    
    /*if (file.getSize() > 0) { // 파일이 업로드 되었다면,
      String newFilename = MultipartUtil.generateFilename();
      file.transferTo(new File(sc.getRealPath("/upload/" + newFilename)));
      photoList.add(new Photo(newFilename));
    }*/
    
    MentoDao.insert(Mento);
    memberDao.insert(Mento);
    
    return "redirect:list.do";
  }
  
  @RequestMapping("/Mento/delete")
  public String delete(int MentoNo) throws Exception {
    if (MentoDao.countByNo(MentoNo) == 0) {
      throw new Exception("사용자를 찾지 못했습니다.");
    }
    MentoDao.delete(MentoNo);
    memberDao.delete(MentoNo);
    return "redirect:list.do";
  }
  
  @RequestMapping("/Mento/update")
  public String update(Mento Mento) throws Exception {
    if (MentoDao.countByNo(Mento.getMemberNo()) == 0) {
      throw new Exception("사용자를 찾지 못했습니다.");
    }
    /*if (file.getSize() > 0) { // 파일이 업로드 되었다면,
      String newFilename = MultipartUtil.generateFilename();
      file.transferTo(new File(sc.getRealPath("/upload/" + newFilename)));
      photoList.add(new Photo(newFilename));
    }*/
    MentoDao.update(Mento);
    return "redirect:list.do";
  }
}









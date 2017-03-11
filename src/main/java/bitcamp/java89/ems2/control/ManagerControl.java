package bitcamp.java89.ems2.control;

import java.io.File;
import java.util.List;

import javax.servlet.ServletContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.multipart.MultipartFile;

import bitcamp.java89.ems2.domain.Manager;
import bitcamp.java89.ems2.service.ManagerService;
import bitcamp.java89.ems2.util.MultipartUtil;

@Controller
public class ManagerControl {
  @Autowired ServletContext sc;
  
  @Autowired ManagerService managerService;

  @RequestMapping("/manager/form")
  public String form(Model model) {
    model.addAttribute("title", "매니저 입력폼");
    model.addAttribute("contentPage", "manager/form.jsp");
    return "main";
  }
  
  @RequestMapping("/manager/list")
  public String list(Model model) throws Exception {
    List<Manager> list = managerService.getList();
    model.addAttribute("managers", list);
    model.addAttribute("title", "매니저관리-목록");
    model.addAttribute("contentPage", "manager/list.jsp");
    return "main";
  }
  
  @RequestMapping("/manager/add")
  public String add(Manager manager, MultipartFile photo) throws Exception {
    
    if (photo.getSize() > 0) { // 파일이 업로드 되었다면,
      String newFilename = MultipartUtil.generateFilename();
      photo.transferTo(new File(sc.getRealPath("/upload/" + newFilename)));
      manager.setPhotoPath(newFilename);
    } else {
      manager.setPhotoPath("default.png");
    }
    
    managerService.add(manager);
    
    return "redirect:list.do";
  }
  
  @RequestMapping("/manager/delete")
  public String delete(int memberNo) throws Exception {
    managerService.delete(memberNo);
    return "redirect:list.do";
  }
  
  @RequestMapping("/manager/detail")
  public String detail(int memberNo, Model model) throws Exception {
    Manager manager = managerService.getDetail(memberNo);
    
    if (manager == null) {
      throw new Exception("해당 아이디의 학생이 없습니다.");
    }
    
    model.addAttribute("manager", manager);
    model.addAttribute("title", "매니저관리-상세정보");
    model.addAttribute("contentPage", "manager/detail.jsp");
    
    return "main";
  }
  
  @RequestMapping("/manager/update")
  public String update(Manager manager, MultipartFile photo) throws Exception {
    
    if (photo.getSize() > 0) { // 파일이 업로드 되었다면,
      String newFilename = MultipartUtil.generateFilename();
      photo.transferTo(new File(sc.getRealPath("/upload/" + newFilename)));
      manager.setPhotoPath(newFilename);
    } else {
      manager.setPhotoPath("default.png");
    }
    
    managerService.update(manager);
    
    return "redirect:list.do";
  }
}

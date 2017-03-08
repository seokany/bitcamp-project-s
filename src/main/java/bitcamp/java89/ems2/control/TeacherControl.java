package bitcamp.java89.ems2.control;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.multipart.MultipartFile;

import bitcamp.java89.ems2.domain.Photo;
import bitcamp.java89.ems2.domain.Teacher;
import bitcamp.java89.ems2.service.TeacherService;
import bitcamp.java89.ems2.util.MultipartUtil;

@Controller
public class TeacherControl {
  @Autowired ServletContext sc;
  
  @Autowired TeacherService teacherService;
  
  @RequestMapping("/teacher/form")
  public String form(Model model) {
    model.addAttribute("title", "강사 입력폼");
    model.addAttribute("contentPage", "teacher/form.jsp");
    return "main";
  }
  @RequestMapping("/teacher/list")
  public String list(Model model) throws Exception {
    List<Teacher> list = teacherService.getList();
    model.addAttribute("teachers", list);
    model.addAttribute("title", "강사관리-목록");
    model.addAttribute("contentPage", "teacher/list.jsp");
    return "main";
  }

  @RequestMapping("/teacher/add")
  public String add(Teacher teacher, MultipartFile[] photo) throws Exception {
    
    ArrayList<Photo> photoList = new ArrayList<>();
    for (MultipartFile file : photo) {
      if (file.getSize() > 0) { // 파일이 업로드 되었다면,
        String newFilename = MultipartUtil.generateFilename();
        file.transferTo(new File(sc.getRealPath("/upload/" + newFilename)));
        photoList.add(new Photo(newFilename));
      }
    }
    teacher.setPhotoList(photoList);
    
    teacherService.add(teacher);
    
    return "redirect:list.do";
  }
  
  @RequestMapping("/teacher/delete")
  public String delete(int memberNo) throws Exception {
    teacherService.delete(memberNo);
    return "redirect:list.do";
  }
  
  @RequestMapping("/teacher/detail")
  public String detail(int memberNo, Model model) throws Exception {
    
    Teacher teacher = teacherService.getDetail(memberNo);
    
    if (teacher == null) {
      throw new Exception("해당 강사가 없습니다.");
    }

    model.addAttribute("teacher", teacher);
    model.addAttribute("title", "강사관리-상세정보");
    model.addAttribute("contentPage", "teacher/detail.jsp");
    
    return "main";
  }
  
  @RequestMapping("/teacher/update")
  public String update(Teacher teacher, MultipartFile[] photo) throws Exception {
    
    ArrayList<Photo> photoList = new ArrayList<>();
    for (MultipartFile file : photo) {
      if (file.getSize() > 0) { // 파일이 업로드 되었다면,
        String newFilename = MultipartUtil.generateFilename();
        file.transferTo(new File(sc.getRealPath("/upload/" + newFilename)));
        photoList.add(new Photo(newFilename));
      }
    }
    teacher.setPhotoList(photoList);
    
    teacherService.update(teacher);
    
    return "redirect:list.do";
  }
}

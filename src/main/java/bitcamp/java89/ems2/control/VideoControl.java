package bitcamp.java89.ems2.control;

import java.util.List;

import javax.servlet.ServletContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import bitcamp.java89.ems2.domain.Video;
import bitcamp.java89.ems2.service.VideoService;

@Controller
public class VideoControl {
  @Autowired ServletContext sc;
  
  @Autowired VideoService videoService;
  
  
  @RequestMapping("/video/list")
  public String list(@RequestParam(defaultValue="1") int pageNo,
      @RequestParam(defaultValue="5") int pageSize,Model model) throws Exception {
    
    
    if (pageNo < 1) {
      pageNo = 1;
    }
    
    if (pageSize < 5 || pageSize > 20) {
      pageSize = 5;
    }
    
    
    
    List<Video> list = videoService.getList(pageNo, pageSize);
    
    model.addAttribute("videos", list);
    model.addAttribute("title", "비디오관리-목록");
    model.addAttribute("contentPage", "video/list.jsp");
    return "main";
  }
  
  /*@RequestMapping("/student/detail")
  public String detail(int memberNo, Model model) throws Exception {
    Student student = studentService.getDetail(memberNo);
    
    if (student == null) {
      throw new Exception("해당 학생이 없습니다.");
    }
    
    // 페이지 컨트롤러는 모델 객체가 리턴한 값을 JSP가 사용할 수 있도록 가공하는 일을 한다.
    model.addAttribute("student", student);
    model.addAttribute("title", "학생관리-상세정보");
    model.addAttribute("contentPage", "student/detail.jsp");
    return "main";
  }
  
  @RequestMapping("/student/add")
  public String add(Student student, MultipartFile photo) throws Exception {
    
    // 페이지 컨트롤러는 입력 파라미터 값을 가공하여 모델 객체에게 전달하는 일을 한다.
    if (photo.getSize() > 0) { 
      String newFilename = MultipartUtil.generateFilename();
      photo.transferTo(new File(sc.getRealPath("/upload/" + newFilename)));
      student.setPhotoPath(newFilename);
    }
    
    studentService.add(student);

    return "redirect:list.do";
  }

  @RequestMapping("/student/delete")
  public String delete(int memberNo, HttpServletRequest request) throws Exception {
    studentService.delete(memberNo);
    return "redirect:list.do";
  }
  
  @RequestMapping("/student/update")
  public String update(Student student, MultipartFile photo) throws Exception {
    
    if (photo.getSize() > 0) { // 파일이 업로드 되었다면,
      String newFilename = MultipartUtil.generateFilename();
      photo.transferTo(new File(sc.getRealPath("/upload/" + newFilename)));
      student.setPhotoPath(newFilename);
    }
    studentService.update(student);
    
    return "redirect:list.do";
  }*/
}






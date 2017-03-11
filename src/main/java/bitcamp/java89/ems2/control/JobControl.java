//<<<<<<< HEAD
//package bitcamp.java89.ems2.control;
//
//import java.io.File;
//import java.util.List;
//
//import javax.servlet.ServletContext;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Controller;
//import org.springframework.ui.Model;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.multipart.MultipartFile;
//
//import bitcamp.java89.ems2.domain.Job;
//import bitcamp.java89.ems2.service.JobService;
//import bitcamp.java89.ems2.util.MultipartUtil;
//
//@Controller
//public class JobControl {
//  @Autowired ServletContext sc;
//  
//  @Autowired JobService jobService;
//  
//  @RequestMapping("/job/list")
//  public String list(Model model) throws Exception {
//    List<Job> list = jobService.getList();
//    model.addAttribute("jobs", list);
//    model.addAttribute("title", "직업관리-목록");
//    model.addAttribute("contentPage", "job/list.jsp");
//    return "main";
//  }
//  
//  @RequestMapping("/job/add")
//  public String add(Job job, MultipartFile photo) throws Exception {
//    
//    if (photo.getSize() > 0) { // 파일이 업로드 되었다면,
//      String newFilename = MultipartUtil.generateFilename();
//      photo.transferTo(new File(sc.getRealPath("/upload/" + newFilename)));
//      job.setJobImage(newFilename);
//    } else {
//      job.setJobImage("default.png");
//    }
//    jobService.add(job);
//    
//    return "redirect:list.do";
//  }
//  
//  @RequestMapping("/job/delete")
//  public String delete(int contentsNo) throws Exception {
//    jobService.delete(contentsNo);
//    return "redirect:list.do";
//  }
//  
//  @RequestMapping("/job/detail")
//  public String detail(int contentsNo, Model model) throws Exception {
//    Job job = jobService.getDetail(contentsNo);
//    
//    if (job == null) {
//      throw new Exception("해당 직업이 없습니다.");
//    }
//    
//    model.addAttribute("job", job);
//    model.addAttribute("title", "직업관리-상세정보");
//    model.addAttribute("contentPage", "job/detail.jsp");
//    
//    return "main";
//  }
//  
//  @RequestMapping("/job/update")
//  public String update(Job job, MultipartFile photo) throws Exception {
//    
//    if (photo.getSize() > 0) { // 파일이 업로드 되었다면,
//      String newFilename = MultipartUtil.generateFilename();
//      photo.transferTo(new File(sc.getRealPath("/upload/" + newFilename)));
//      job.setJobImage(newFilename);
//    } else {
//      job.setJobImage("default.png");
//    }
//    
//    jobService.update(job);
//    
//    return "redirect:list.do";
//  }
//}
//=======
//package bitcamp.java89.ems2.control;
//
//import java.util.List;
//
//import javax.servlet.ServletContext;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Controller;
//import org.springframework.ui.Model;
//import org.springframework.web.bind.annotation.RequestMapping;
//
//import bitcamp.java89.ems2.domain.Job;
//import bitcamp.java89.ems2.service.JobService;
//
//@Controller
//public class JobControl {
//  @Autowired ServletContext sc;
//  @Autowired JobService jobService;
//  
//  
//  @RequestMapping("/job/list")
//  public String list(Model model) throws Exception {
//    
//    
//    List<Job> list = jobService.getList();
//    
//    model.addAttribute("jobs", list);
//    model.addAttribute("title", "비디오관리-목록");
//    model.addAttribute("contentPage", "job/list.jsp");
//    return "main";
//  }
//  
//  /*@RequestMapping("/student/detail")
//  public String detail(int memberNo, Model model) throws Exception {
//    Student student = studentService.getDetail(memberNo);
//    
//    if (student == null) {
//      throw new Exception("해당 학생이 없습니다.");
//    }
//    
//    // 페이지 컨트롤러는 모델 객체가 리턴한 값을 JSP가 사용할 수 있도록 가공하는 일을 한다.
//    model.addAttribute("student", student);
//    model.addAttribute("title", "학생관리-상세정보");
//    model.addAttribute("contentPage", "student/detail.jsp");
//    return "main";
//  }
//  
//  @RequestMapping("/student/add")
//  public String add(Student student, MultipartFile photo) throws Exception {
//    
//    // 페이지 컨트롤러는 입력 파라미터 값을 가공하여 모델 객체에게 전달하는 일을 한다.
//    if (photo.getSize() > 0) { 
//      String newFilename = MultipartUtil.generateFilename();
//      photo.transferTo(new File(sc.getRealPath("/upload/" + newFilename)));
//      student.setPhotoPath(newFilename);
//    }
//    
//    studentService.add(student);
//
//    return "redirect:list.do";
//  }
//
//  @RequestMapping("/student/delete")
//  public String delete(int memberNo, HttpServletRequest request) throws Exception {
//    studentService.delete(memberNo);
//    return "redirect:list.do";
//  }
//  
//  @RequestMapping("/student/update")
//  public String update(Student student, MultipartFile photo) throws Exception {
//    
//    if (photo.getSize() > 0) { // 파일이 업로드 되었다면,
//      String newFilename = MultipartUtil.generateFilename();
//      photo.transferTo(new File(sc.getRealPath("/upload/" + newFilename)));
//      student.setPhotoPath(newFilename);
//    }
//    studentService.update(student);
//    
//    return "redirect:list.do";
//  }*/
//}
//
//
//
//
//
//>>>>>>> branch 'master' of https://github.com/luckyhguy/bitcamp-project-s.git

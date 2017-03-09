package bitcamp.java89.ems2.control;

import java.io.File;
import java.util.List;
import javax.servlet.ServletContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.multipart.MultipartFile;
import bitcamp.java89.ems2.domain.Job;
import bitcamp.java89.ems2.service.JobService;
import bitcamp.java89.ems2.util.MultipartUtil;

@Controller
public class JobControl {
  @Autowired ServletContext sc;
  
  @Autowired JobService jobService;
  
  @RequestMapping("/job/list")
  public String list(Model model) throws Exception {
    List<Job> list = jobService.getList();
    model.addAttribute("jobs", list);
    model.addAttribute("title", "직업관리-목록");
    model.addAttribute("contentPage", "job/list.jsp");
    return "main";
  }
  
  @RequestMapping("/job/add")
  public String add(Job job, MultipartFile photo) throws Exception {
    
    if (photo.getSize() > 0) { // 파일이 업로드 되었다면,
      String newFilename = MultipartUtil.generateFilename();
      photo.transferTo(new File(sc.getRealPath("/upload/" + newFilename)));
      job.setJobImage(newFilename);
    } else {
      job.setJobImage("default.png");
    }
    jobService.add(job);
    
    return "redirect:list.do";
  }
  
  @RequestMapping("/job/delete")
  public String delete(int contentsNo) throws Exception {
    jobService.delete(contentsNo);
    return "redirect:list.do";
  }
  
  @RequestMapping("/job/detail")
  public String detail(int contentsNo, Model model) throws Exception {
    Job job = jobService.getDetail(contentsNo);
    
    if (job == null) {
      throw new Exception("해당 직업이 없습니다.");
    }
    
    model.addAttribute("job", job);
    model.addAttribute("title", "직업관리-상세정보");
    model.addAttribute("contentPage", "job/detail.jsp");
    
    return "main";
  }
  
  @RequestMapping("/job/update")
  public String update(Job job, MultipartFile photo) throws Exception {
    
    if (photo.getSize() > 0) { // 파일이 업로드 되었다면,
      String newFilename = MultipartUtil.generateFilename();
      photo.transferTo(new File(sc.getRealPath("/upload/" + newFilename)));
      job.setJobImage(newFilename);
    } else {
      job.setJobImage("default.png");
    }
    
    jobService.update(job);
    
    return "redirect:list.do";
  }
}

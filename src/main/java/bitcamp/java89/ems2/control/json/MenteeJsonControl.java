package bitcamp.java89.ems2.control.json;

import java.io.File;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.multipart.MultipartFile;

import bitcamp.java89.ems2.domain.Mentee;
import bitcamp.java89.ems2.service.MenteeService;
import bitcamp.java89.ems2.util.MultipartUtil;
import net.coobird.thumbnailator.Thumbnails;
import net.coobird.thumbnailator.geometry.Positions;

public class MenteeJsonControl {
  @Autowired ServletContext sc;
  @Autowired MenteeService menteeService;
  
  @RequestMapping("/mentee/list")
  public AjaxResult list() throws Exception {
    List<Mentee> list = menteeService.getList();
    return new AjaxResult(AjaxResult.SUCCESS, list);
  }
  
  @RequestMapping("/mentee/detail")
  public AjaxResult detail(String email, String password) throws Exception {
    Mentee mentee = menteeService.getOneByEmailPassword(email, password);
    
    if (mentee == null) {
      return new AjaxResult(AjaxResult.FAIL, "해당 회원이 없습니다.");
    }
    
    return new AjaxResult(AjaxResult.SUCCESS, mentee);
  }
  
  @RequestMapping("/mentee/add")
  public AjaxResult add(Mentee mentee) throws Exception {
    menteeService.add(mentee);

    return new AjaxResult(AjaxResult.SUCCESS, "등록 성공입니다.");
  }
  
  @RequestMapping("/mentee/update")
  public AjaxResult update(Mentee mentee) throws Exception {
    int count = menteeService.update(mentee);
    
    if (count == 0) {
      return new AjaxResult(AjaxResult.FAIL, "해당 번호의 회원이 없습니다.");
    }
    
    return new AjaxResult(AjaxResult.SUCCESS, "변경 성공입니다.");
  }
  
  @RequestMapping("/mentee/delete")
  public AjaxResult delete(int menteeNo, HttpServletRequest request) throws Exception {
    int count = menteeService.delete(menteeNo);
    if (count == 0) {
      return new AjaxResult(AjaxResult.FAIL, "해당 번호의 회원이 없습니다.");
    }
    return new AjaxResult(AjaxResult.SUCCESS, "삭제 성공입니다.");
  }
  
  @RequestMapping("/mentee/updateProfile")
  public AjaxResult updateProfile(@RequestBody HashMap<String,Object> map, HttpSession session) throws Exception {
    try {
      Mentee oldMentee = (Mentee) session.getAttribute("mentee");
      oldMentee.setPhotoPath((String)map.get("photoPath"));
      session.setAttribute("mentee", oldMentee);
      menteeService.updateProfile(map);
      
      return new AjaxResult(AjaxResult.SUCCESS, oldMentee);
    } catch (Exception e) {
      e.printStackTrace();
      return new AjaxResult(AjaxResult.FAIL, "유저이미지 수정 실패입니다.");
    }
  }
  @RequestMapping("/user/profileUpload")
  public AjaxResult profileUpload(MultipartFile[] image) throws Exception {
    ArrayList<String> images = new ArrayList<>();
    
    // 페이지 컨트롤러는 입력 파라미터 값을 가공하여 모델 객체에게 전달하는 일을 한다.
    if (image != null && image.length > 0) {
      for (MultipartFile file : image) {
        if (file.getSize() > 0) {
          String newFilename = MultipartUtil.generateFilename();
          file.transferTo(new File(sc.getRealPath("/upload/profile/" + newFilename)));
          images.add(newFilename);
          
          File original = new File(sc.getRealPath("/upload/profile/" + newFilename)); 
          File thumbnail = new File(sc.getRealPath("/upload/profile/thumb/" + newFilename)); 
          if (original.exists()) { 
            thumbnail.getParentFile().mkdirs(); 
            Thumbnails.of(original).crop(Positions.CENTER).size(80, 80).outputFormat("png").toFile(thumbnail); 
          }
          return new AjaxResult(AjaxResult.SUCCESS, newFilename);
        }
      }
    }
    return new AjaxResult(AjaxResult.FAIL, "[profileUpload]이미지를 업로드하지 못했습니다.");
  }
}

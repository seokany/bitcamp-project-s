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
import bitcamp.java89.ems2.domain.Mento;
import bitcamp.java89.ems2.service.MentoService;
import bitcamp.java89.ems2.util.MultipartUtil;
import net.coobird.thumbnailator.Thumbnails;
import net.coobird.thumbnailator.geometry.Positions;

public class MentoJsonControl {
  @Autowired ServletContext sc;
  @Autowired MentoService mentoService;
  
  @RequestMapping("/mento/list")
  public AjaxResult list() throws Exception {
    List<Mento> list = mentoService.getList();
    return new AjaxResult(AjaxResult.SUCCESS, list);
  }
  
  @RequestMapping("/mento/detail")
  public AjaxResult detail(String email, String password) throws Exception {
    Mento mento = mentoService.getOneByEmailPassword(email, password);
    
    if (mento == null) {
      return new AjaxResult(AjaxResult.FAIL, "해당 회원이 없습니다.");
    }
    
    return new AjaxResult(AjaxResult.SUCCESS, mento);
  }
  
  @RequestMapping("/mento/add")
  public AjaxResult add(Mento mento) throws Exception {
    mentoService.add(mento);

    return new AjaxResult(AjaxResult.SUCCESS, "등록 성공입니다.");
  }
  
  @RequestMapping("/mento/update")
  public AjaxResult update(Mento mento) throws Exception {
    int count = mentoService.update(mento);
    
    if (count == 0) {
      return new AjaxResult(AjaxResult.FAIL, "해당 번호의 회원이 없습니다.");
    }
    
    return new AjaxResult(AjaxResult.SUCCESS, "변경 성공입니다.");
  }
  
  @RequestMapping("/mento/delete")
  public AjaxResult delete(int mentoNo, HttpServletRequest request) throws Exception {
    int count = mentoService.delete(mentoNo);
    if (count == 0) {
      return new AjaxResult(AjaxResult.FAIL, "해당 번호의 회원이 없습니다.");
    }
    return new AjaxResult(AjaxResult.SUCCESS, "삭제 성공입니다.");
  }
  
  @RequestMapping("/mento/updateProfile")
  public AjaxResult updateProfile(@RequestBody HashMap<String,Object> map, HttpSession session) throws Exception {
    try {
      Mento oldMento = (Mento) session.getAttribute("mentee");
      oldMento.setPhotoPath((String)map.get("photoPath"));
      session.setAttribute("mentee", oldMento);
      mentoService.updateProfile(map);
      
      return new AjaxResult(AjaxResult.SUCCESS, oldMento);
    } catch (Exception e) {
      e.printStackTrace();
      return new AjaxResult(AjaxResult.FAIL, "유저이미지 수정 실패입니다.");
    }
  }
  @RequestMapping("/mento/profileUpload")
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

package bitcamp.java89.ems2.control.json;

import java.util.HashMap;
import java.util.List;

import javax.servlet.ServletContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import bitcamp.java89.ems2.domain.Like;
import bitcamp.java89.ems2.service.LikeService;

//@Controller
@RestController // 이 애노테이션을 붙이면, 스프링 설정 파일에 JSON 변환기 'MappingJackson2JsonView' 객체를 등록하지 않아도 된다.
public class LikeJsonControl {
  @Autowired ServletContext sc;
  
  @Autowired LikeService likeService;
  
  @RequestMapping("/mentoLike/list")
  public AjaxResult mentoList(@RequestParam(defaultValue="1") int pageNo,
          @RequestParam(defaultValue="4") int pageSize, int sno) throws Exception {
    


    List<Like> list = likeService.mentoList(pageNo, pageSize, sno);
    int totalCount = likeService.mentoGetSize(sno);
    System.out.println("mentoCount"+totalCount);
    
    
    HashMap<String,Object> resultMap = new HashMap<>();
    resultMap.put("list", list);
    resultMap.put("totalCount", totalCount);
    
    return new AjaxResult(AjaxResult.SUCCESS, resultMap);
  }
  
  @RequestMapping("/videoLike/list")
  public AjaxResult videoList(
          @RequestParam(defaultValue="1") int pageNo,
          @RequestParam(defaultValue="15") int pageSize, @RequestParam int sno) throws Exception {
      if (pageNo < 1) {
          pageNo = 1;
        }
        
        if (pageSize < 15 || pageSize > 30) {
          pageSize = 15;
        }

      List<Like> list = likeService.videoList(pageNo, pageSize, sno);
      int totalCount = likeService.videoGetSize(sno);
      
      
      HashMap<String,Object> resultMap = new HashMap<>();
      resultMap.put("list", list);
      System.out.println("아아"+ list);
      resultMap.put("totalCount", totalCount);
      
      return new AjaxResult(AjaxResult.SUCCESS, resultMap);
  }
  
  
  
  @RequestMapping("/like/add")
  public AjaxResult likeAdd(int curNo, int sno) throws Exception {
    int count = likeService.likeAdd(curNo, sno);
    System.out.println(count);
    if (count == 0) {
      return new AjaxResult(AjaxResult.FAIL, "이미 좋아요 됐으");
    }
    return new AjaxResult(AjaxResult.SUCCESS, "삽입 성공");
  }
  
  
  @RequestMapping("/like/delete")
  public AjaxResult likeDelete(int curNo) throws Exception {
    int count = likeService.likeDelete(curNo);
    if (count == 0) {
      return new AjaxResult(AjaxResult.FAIL, "해당 번호의 학생이 없습니다.");
    }
    return new AjaxResult(AjaxResult.SUCCESS, "삭제 성공입니다.");
  }
  
  
  
 /* @RequestMapping("/like/detail")
  public AjaxResult detail(int memberNo) throws Exception {
    Like like = likeService.getDetail(memberNo);
    
    if (like == null) {
      return new AjaxResult(AjaxResult.FAIL, "해당 학생이 없습니다.");
    }
    
    return new AjaxResult(AjaxResult.SUCCESS, like);
  }
  @RequestMapping("/like/add")
  public AjaxResult add(Like like) throws Exception {
    likeService.add(like);
    return new AjaxResult(AjaxResult.SUCCESS, "등록 성공입니다.");
  }

  @RequestMapping("/like/delete")
  public AjaxResult delete(int memberNo, HttpServletRequest request) throws Exception {
    int count = likeService.delete(memberNo);
    if (count == 0) {
      return new AjaxResult(AjaxResult.FAIL, "해당 번호의 학생이 없습니다.");
    }
    return new AjaxResult(AjaxResult.SUCCESS, "삭제 성공입니다.");
  }
  
  @RequestMapping("/like/update")
  public AjaxResult update(Like like) throws Exception {

    int count = likeService.update(like);
    
    if (count == 0) {
      return new AjaxResult(AjaxResult.FAIL, "해당 번호의 학생이 없습니다.");
    }
    
    return new AjaxResult(AjaxResult.SUCCESS, "변경 성공입니다.");
  }*/
}






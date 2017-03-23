package bitcamp.java89.ems2.control.json;

import javax.servlet.ServletContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import bitcamp.java89.ems2.domain.Result;
import bitcamp.java89.ems2.service.ResultService;

//@Controller
@RestController // 이 애노테이션을 붙이면, 스프링 설정 파일에 JSON 변환기 'MappingJackson2JsonView' 객체를 등록하지 않아도 된다.
public class ResultJsonControl {
  @Autowired ServletContext sc;
  @Autowired ResultService resultService;
  
  @RequestMapping("/seeds/list")
  public AjaxResult list(int menteeNo, String type) throws Exception {
    Result result = new Result();
    result.setMemberNo(menteeNo);
    result.setType(type);
    
    Result list = resultService.getList(result);
    
    if (list == null) {
      System.out.println("해당결과없음");
      return new AjaxResult(AjaxResult.FAIL, "해당 결과가 없습니다.");
    }
    
    return new AjaxResult(AjaxResult.SUCCESS, list);
  }
  
  @RequestMapping("/seeds/hasResult")
  public AjaxResult hasResult(int memberNo) throws Exception {
    int count = resultService.hasResult(memberNo);
    System.out.println("/seeds/hasResult :" + memberNo);
    
    if (count == 0) 
      return new AjaxResult(AjaxResult.FAIL, "테스트를 수행한 이력이 없습니다.");
    return new AjaxResult(AjaxResult.SUCCESS, "테스트 수행 결과가 존재합니다.");
  }
  
  
  @RequestMapping("/seeds/add")
  public AjaxResult add(int memberNo, String type, String resultResult) throws Exception {
    Result result = new Result();
    result.setMemberNo(memberNo);
    result.setType(type);
    result.setResultResult(resultResult);
    
    
   int count = resultService.add(result);
   
   if (count == 0) {
     return new AjaxResult(AjaxResult.FAIL, "등록 실패");
   }  
   else{
     return new AjaxResult(AjaxResult.SUCCESS, "등록 성공입니다.");
   }
  }
  
  @RequestMapping("/seeds/detail")
  public AjaxResult detail(int memberNo) throws Exception {
    Result result = resultService.getDetail(memberNo);
    if (result == null) {
      return new AjaxResult(AjaxResult.FAIL, "해당 결과가 없습니다.");
    }
    return new AjaxResult(AjaxResult.SUCCESS, result);
  }
  
}






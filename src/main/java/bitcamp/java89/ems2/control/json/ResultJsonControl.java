package bitcamp.java89.ems2.control.json;

import java.util.List;

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


  @RequestMapping("/seeds/detail")
  public AjaxResult detail(int menteeNo) throws Exception {
    Result result = resultService.getDetail(menteeNo);
    
    if (result == null) {
      System.out.println("해당결과없음");
      return new AjaxResult(AjaxResult.FAIL, "해당 결과가 없습니다.");
    }
    
    return new AjaxResult(AjaxResult.SUCCESS, result);
  }
  
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
    
    System.out.println("결과있음 멘티넘버:" +menteeNo);
    return new AjaxResult(AjaxResult.SUCCESS, list);
  }
  
}






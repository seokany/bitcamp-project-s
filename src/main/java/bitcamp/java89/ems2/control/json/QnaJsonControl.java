package bitcamp.java89.ems2.control.json;

import java.util.HashMap;
import java.util.List;

import javax.servlet.ServletContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import bitcamp.java89.ems2.domain.Qna;
import bitcamp.java89.ems2.service.QnaService;

//@Controller
@RestController // 이 애노테이션을 붙이면, 스프링 설정 파일에 JSON 변환기 'MappingJackson2JsonView' 객체를 등록하지 않아도 된다.
public class QnaJsonControl {
  @Autowired ServletContext sc;
  
  @Autowired QnaService qnaService;
  
  @RequestMapping("/QnaMentee/list")
  public AjaxResult list(@RequestParam int cono) throws Exception {
   
    List<Qna> list = qnaService.getList(cono);
    
    HashMap<String, Object> resultMap = new HashMap<>();
    resultMap.put("list", list);
    
    return new AjaxResult(AjaxResult.SUCCESS, resultMap);
  }
  
  
 
}






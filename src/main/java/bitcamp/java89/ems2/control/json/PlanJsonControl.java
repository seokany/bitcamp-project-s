package bitcamp.java89.ems2.control.json;

import java.util.HashMap;
import java.util.List;

import javax.servlet.ServletContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import bitcamp.java89.ems2.domain.Plan;
import bitcamp.java89.ems2.service.PlanService;

//@Controller
@RestController // 이 애노테이션을 붙이면, 스프링 설정 파일에 JSON 변환기 'MappingJackson2JsonView' 객체를 등록하지 않아도 된다.
public class PlanJsonControl {
  @Autowired ServletContext sc;
  
  @Autowired PlanService planService;
  
  @RequestMapping("/plan/list")
  public AjaxResult list(@RequestParam(defaultValue="1") int pageNo,
      @RequestParam(defaultValue="4") int pageSize, @RequestParam int sno) throws Exception {
    
    if (pageNo < 1) {
      pageNo = 1;
    }
    
    if (pageSize < 4 || pageSize > 30) {
      pageSize = 4;
    }

    List<Plan> list = planService.getList(pageNo, pageSize, sno);
    System.out.println("뭘까"+list);
    int totalCount = planService.getSize();
    
    
    HashMap<String,Object> resultMap = new HashMap<>();
    resultMap.put("list", list);
    resultMap.put("totalCount", totalCount);
    
    return new AjaxResult(AjaxResult.SUCCESS, resultMap);
  }
  
  @RequestMapping("/planDetail/list")
  public AjaxResult detailList(@RequestParam(defaultValue="1") int pageNo,
      @RequestParam(defaultValue="4") int pageSize, @RequestParam int sno) throws Exception {
    
    if (pageNo < 1) {
      pageNo = 1;
    }
    
    if (pageSize < 4 || pageSize > 12) {
      pageSize = 4;
    }

    List<Plan> list = planService.detailList(pageNo, pageSize, sno);
    int totalCount = planService.getSize();
    System.out.println("멘토리스트"+totalCount);
    
    
    HashMap<String,Object> resultMap = new HashMap<>();
    resultMap.put("list", list);
    resultMap.put("totalCount", totalCount);
    
    return new AjaxResult(AjaxResult.SUCCESS, resultMap);
  }
  
  
  
  
  
 /* @RequestMapping("/plan/detail")
  public AjaxResult detail(int memberNo) throws Exception {
    Plan plan = planService.getDetail(memberNo);
    
    if (plan == null) {
      return new AjaxResult(AjaxResult.FAIL, "해당 학생이 없습니다.");
    }
    
    return new AjaxResult(AjaxResult.SUCCESS, plan);
  }
  @RequestMapping("/plan/add")
  public AjaxResult add(Plan plan) throws Exception {
    planService.add(plan);
    return new AjaxResult(AjaxResult.SUCCESS, "등록 성공입니다.");
  }

  @RequestMapping("/plan/delete")
  public AjaxResult delete(int memberNo, HttpServletRequest request) throws Exception {
    int count = planService.delete(memberNo);
    if (count == 0) {
      return new AjaxResult(AjaxResult.FAIL, "해당 번호의 학생이 없습니다.");
    }
    return new AjaxResult(AjaxResult.SUCCESS, "삭제 성공입니다.");
  }
  
  @RequestMapping("/plan/update")
  public AjaxResult update(Plan plan) throws Exception {

    int count = planService.update(plan);
    
    if (count == 0) {
      return new AjaxResult(AjaxResult.FAIL, "해당 번호의 학생이 없습니다.");
    }
    
    return new AjaxResult(AjaxResult.SUCCESS, "변경 성공입니다.");
  }*/
}






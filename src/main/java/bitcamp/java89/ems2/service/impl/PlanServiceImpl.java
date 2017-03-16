package bitcamp.java89.ems2.service.impl;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import bitcamp.java89.ems2.dao.ContentsHeaderDao;
import bitcamp.java89.ems2.dao.MemberDao;
import bitcamp.java89.ems2.dao.PlanDao;
import bitcamp.java89.ems2.domain.Plan;
import bitcamp.java89.ems2.service.PlanService;

@Service
public class PlanServiceImpl implements PlanService {
  @Autowired ContentsHeaderDao contentsDao;
  @Autowired PlanDao planDao;
  @Autowired MemberDao memberDao;
  
 public int getSize() throws Exception {
    return planDao.countAll();
  }
 
  public List<Plan> getList(int pageNo, int pageSize, int sno) throws Exception {

    HashMap<String,Object> paramMap = new HashMap<>();
    paramMap.put("startRowIndex", (pageNo - 1) * pageSize);
    paramMap.put("rowSize", pageSize);
    paramMap.put("sno", sno);
    
    return planDao.getList(paramMap); 
  }
  
  public List<Plan> detailList(int pageNo, int pageSize, int sno) throws Exception {

    System.out.println(pageNo + pageSize + sno);
    HashMap<String,Object> paramMap = new HashMap<>();
    paramMap.put("startRowIndex", (pageNo - 1) * pageSize);
    paramMap.put("rowSize", pageSize);
    paramMap.put("sno", sno);
    
    return planDao.detailList(paramMap); 
  }
  
  /*public Plan getDetail(int no) throws Exception {
    return planDao.getOne(no);
  }
  
  public int add(Plan plan) throws Exception {
    
    if (planDao.count(plan.getEmail()) > 0) {
      throw new Exception("같은 학생의 이메일이 존재합니다. 등록을 취소합니다.");
    }
    
    if (memberDao.count(plan.getEmail()) == 0) { 
      memberDao.insert(plan);
      
    } else {
      Member member = memberDao.getOne(plan.getEmail());
      plan.setMemberNo(member.getMemberNo());
    }
    
    return planDao.insert(plan);
  }
  
  public int delete(int no) throws Exception {
    if (planDao.countByNo(no) == 0) {
      throw new Exception("학생을 찾지 못했습니다.");
    }
    
    int count = planDao.delete(no);

    if (managerDao.countByNo(no) == 0 && teacherDao.countByNo(no) == 0) {
      memberDao.delete(no);
    }
    
    return count;
  }
  
  public int update(Plan plan) throws Exception {
    if (planDao.countByNo(plan.getMemberNo()) == 0) {
      throw new Exception("학생을 찾지 못했습니다.");
    }
    memberDao.update(plan);
    return planDao.update(plan);
  }*/
}

















package bitcamp.java89.ems2.service.impl;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import bitcamp.java89.ems2.dao.JobDao;
import bitcamp.java89.ems2.dao.MemberDao;
import bitcamp.java89.ems2.dao.VideoDao;
import bitcamp.java89.ems2.domain.Job;
import bitcamp.java89.ems2.service.JobService;

@Service
public class JobServiceImpl implements JobService {
  
  @Autowired JobDao jobDao;
  
  public List<Job> getList() throws Exception {
    return jobDao.getList();
  }
  
  public Job getDetail(int no) throws Exception {
    return jobDao.getOne(no);
  }
  
/*  public int add(Job job) throws Exception {
    
    if (jobDao.count(job.getJobName()) > 0) {
      throw new Exception("같은 직업 명이 존재합니다. 등록을 취소합니다.");
    }*/
    
   /* if (memberDao.count(manager.getEmail()) == 0) { // 강사나 매니저로 등록되지 않았다면,
      memberDao.insert(manager);
      
    } else { // 강사나 매니저로 이미 등록된 사용자라면 기존의 회원 번호를 사용한다.
      Member member = memberDao.getOne(manager.getEmail());
      manager.setMemberNo(member.getMemberNo());
    }
    
    return managerDao.insert(manager);
  }
  
  public int delete(int no) throws Exception {
    if (managerDao.countByNo(no) == 0) {
      throw new Exception("사용자를 찾지 못했습니다.");
    }
    
    int count = managerDao.delete(no);

    if (studentDao.countByNo(no) == 0 && teacherDao.countByNo(no) == 0) {
      memberDao.delete(no);
    }
    
    return count;
  }
  
  public int update(Manager manager) throws Exception {
    if (managerDao.countByNo(manager.getMemberNo()) == 0) {
      throw new Exception("사용자를 찾지 못했습니다.");
    }
    
    memberDao.update(manager);
    return managerDao.update(manager);
  }*/

  @Override
  public int update(Job job) throws Exception {
    // TODO Auto-generated method stub
    return 0;
  }

  @Override
  public int delete(int no) throws Exception {
    // TODO Auto-generated method stub
    return 0;
  }

  @Override
  public int add(Job job) throws Exception {
    // TODO Auto-generated method stub
    return 0;
  }
}

package bitcamp.java89.ems2.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import bitcamp.java89.ems2.dao.ContentsHeaderDao;
//github.com/luckyhguy/bitcamp-project-s.git
import bitcamp.java89.ems2.dao.JobDao;
import bitcamp.java89.ems2.domain.Job;
import bitcamp.java89.ems2.service.JobService;

//@Service
public class JobServiceImpl implements JobService {
  @Autowired ContentsHeaderDao contentsDao;
  @Autowired JobDao jobDao;
  
/* public int getSize() throws Exception {
    return videoDao.countAll();
  }*/
 
  public List<Job> getList() throws Exception {

    return jobDao.getList(); 
  }
  
  /*public Video getDetail(int no) throws Exception {
    return videoDao.getOne(no);
  }
  
  public int add(Video video) throws Exception {
    
    if (videoDao.count(video.getEmail()) > 0) {
      throw new Exception("같은 학생의 이메일이 존재합니다. 등록을 취소합니다.");
    }
    
    if (memberDao.count(video.getEmail()) == 0) { 
      memberDao.insert(video);
      
    } else {
      Member member = memberDao.getOne(video.getEmail());
      video.setMemberNo(member.getMemberNo());
    }
    
    return videoDao.insert(video);
  }
  
  public int delete(int no) throws Exception {
    if (videoDao.countByNo(no) == 0) {
      throw new Exception("학생을 찾지 못했습니다.");
    }
    
    int count = videoDao.delete(no);
>>>>>>> branch 'master' of https://github.com/luckyhguy/bitcamp-project-s.git

<<<<<<< HEAD
//  public Job getDetail(int no) throws Exception {
//    return jobDao.getOne(no);
//  }
//  
//  public int add(Job job) throws Exception {
//    
//    if (jobDao.count(job.getJobName()) > 0) {
//      throw new Exception("같은 직업 명이 존재합니다. 등록을 취소합니다.");
//    }
//    
//    if (memberDao.count(manager.getEmail()) == 0) { // 강사나 매니저로 등록되지 않았다면,
//      memberDao.insert(manager);
//      
//    } else { // 강사나 매니저로 이미 등록된 사용자라면 기존의 회원 번호를 사용한다.
//      Member member = memberDao.getOne(manager.getEmail());
//      manager.setMemberNo(member.getMemberNo());
//    }
//    
//    return managerDao.insert(manager);
//  }
//  
//  public int delete(int no) throws Exception {
//    if (managerDao.countByNo(no) == 0) {
//      throw new Exception("사용자를 찾지 못했습니다.");
//    }
//    
//    int count = managerDao.delete(no);
//
//    if (studentDao.countByNo(no) == 0 && teacherDao.countByNo(no) == 0) {
//      memberDao.delete(no);
//    }
//    
//    return count;
//  }
//  
//  public int update(Manager manager) throws Exception {
//    if (managerDao.countByNo(manager.getMemberNo()) == 0) {
//      throw new Exception("사용자를 찾지 못했습니다.");
//    }
//    
//    memberDao.update(manager);
//    return managerDao.update(manager);
//  }
//
//  @Override
//  public int update(Job job) throws Exception {
//    TODO Auto-generated method stub
//    return 0;
//  }
=======
    if (managerDao.countByNo(no) == 0 && teacherDao.countByNo(no) == 0) {
      memberDao.delete(no);
    }
    
    return count;
  }
  
  public int update(Video video) throws Exception {
    if (videoDao.countByNo(video.getMemberNo()) == 0) {
      throw new Exception("학생을 찾지 못했습니다.");
    }
    memberDao.update(video);
    return videoDao.update(video);
  }*/
}

















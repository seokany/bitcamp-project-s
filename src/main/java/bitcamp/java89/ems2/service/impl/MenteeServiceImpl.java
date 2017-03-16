package bitcamp.java89.ems2.service.impl;

import java.util.ArrayList;
import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import bitcamp.java89.ems2.dao.MemberDao;
import bitcamp.java89.ems2.dao.MenteeDao;
import bitcamp.java89.ems2.dao.MentoDao;
import bitcamp.java89.ems2.domain.Member;
import bitcamp.java89.ems2.domain.Mentee;
import bitcamp.java89.ems2.service.MenteeService;

@Service
public class MenteeServiceImpl implements MenteeService {
  @Autowired MemberDao memberDao;
  @Autowired MenteeDao menteeDao;
  @Autowired MentoDao mentoDao;
  
  @Override
  public ArrayList<Mentee> getList() throws Exception {
    return menteeDao.getList();
  }

  @Override
  public Mentee getOneByEmailPassword(String email, String password) throws Exception {
    HashMap<String,String> paramMap = new HashMap<>();
    paramMap.put("email", email);
    paramMap.put("password", password);
    
    Mentee mentee = menteeDao.getOneByEmailPassword(paramMap);
    
    if (mentee == null) {
      return null;
    }
    return mentee;
  }

  @Override
  public int add(Mentee mentee) throws Exception {
    if (menteeDao.countByEmail(mentee.getEmail()) != 0) {
      throw new Exception("같은 멘티의 이메일이 존재합니다. 등록을 취소합니다.");
    }
    
    if (memberDao.count(mentee.getEmail()) == 0) {
      memberDao.insert(mentee);
    } else {
      Member member = memberDao.getOne(mentee.getEmail());
      mentee.setMemberNo(member.getMemberNo());
    }
    
    return menteeDao.insert(mentee);
  }

  @Override
  public int delete(int menteeNo) throws Exception {
    if (menteeDao.countByNo(menteeNo) == 0) {
      throw new Exception("멘티를 찾지 못했습니다.");
    }
    
    int count = menteeDao.delete(menteeNo);
    memberDao.delete(menteeNo);
    
    return count;
  }
  
  @Override
  public int update(Mentee mentee) throws Exception {
    if (menteeDao.countByNo(mentee.getMemberNo()) == 0) {
      throw new Exception("멘티를 찾지 못했습니다.");
    }
    memberDao.update(mentee);
    return menteeDao.update(mentee);
  }


  @Override
  public int updateProfile(HashMap<String, Object> map) throws Exception {
    // TODO Auto-generated method stub
    return 0;
  }
  
 
}

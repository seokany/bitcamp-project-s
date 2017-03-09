package bitcamp.java89.ems2.service.impl;

import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import bitcamp.java89.ems2.dao.ManagerDao;
import bitcamp.java89.ems2.dao.MemberDao;
import bitcamp.java89.ems2.dao.StudentDao;
import bitcamp.java89.ems2.dao.TeacherDao;
import bitcamp.java89.ems2.domain.Member;
import bitcamp.java89.ems2.service.AuthService;

@Service
public class AuthServiceImpl implements AuthService {
  
  @Autowired MemberDao memberDao;
  @Autowired StudentDao studentDao;
  @Autowired ManagerDao managerDao;
  @Autowired TeacherDao teacherDao;
  
  public Member getMemberInfo(String email, String password, String userType) throws Exception {
    HashMap<String,String> paramMap = new HashMap<>();
    paramMap.put("email", email);
    paramMap.put("password", password);
    
    Member member = memberDao.getOneByEmailPassword(paramMap);
    
    if (member == null) {
      return null;
    }
    
    if (userType.equals(Member.STUDENT)) {
      return studentDao.getOne(member.getMemberNo());
      
    } else if (userType.equals(Member.TEACHER)) {
      return teacherDao.getOneWithPhoto(member.getMemberNo());
      
    } else /*if (userType.equals(Member.MANAGER))*/ {
      return managerDao.getOne(member.getMemberNo());
    }
  }
}

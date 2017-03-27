package bitcamp.java89.ems2.service.impl;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import bitcamp.java89.ems2.dao.MemberDao;
import bitcamp.java89.ems2.dao.MentoDao;
import bitcamp.java89.ems2.dao.TopicDao;
import bitcamp.java89.ems2.domain.Member;
import bitcamp.java89.ems2.domain.Mento;
import bitcamp.java89.ems2.domain.Topic;
import bitcamp.java89.ems2.service.AuthService;

@Service
public class AuthServiceImpl implements AuthService {
  
  @Autowired MemberDao memberDao;
  @Autowired MentoDao mentoDao;
  @Autowired TopicDao topicDao;
  
  public Member getMemberInfo(String email, String password) throws Exception {
    HashMap<String,String> paramMap = new HashMap<>();
    paramMap.put("email", email);
    paramMap.put("password", password);
    System.out.println(paramMap);
    
     Member member = memberDao.getOneByEmailPassword(paramMap);
    
    if (member == null) {
      return null;
    }
    return member;
  }

  @Override
  public Mento getMentoInfo(String email, String password) throws Exception {
    HashMap<String,String> paramMap = new HashMap<>();
    paramMap.put("email", email);
    paramMap.put("password", password);
    System.out.println(paramMap);
    
    Mento mento = mentoDao.getOneByEmailPassword(paramMap);
    
    if (mento == null) {
      return null;
    }
    return mento;
  }

@Override
public int getOne(int memberNo) throws Exception {
   return mentoDao.getOne(memberNo);
    
}

@Override
public List<Mento> getList(int memberNo) throws Exception {
    HashMap<String,Object> paramMap = new HashMap<>();
    paramMap.put("memberNo",memberNo);
    
    return mentoDao.getList(paramMap);
}

@Override
public Topic getResult(int memberNo) throws Exception {
 
  return topicDao.getResult(memberNo);
}

@Override
public List<String> getResultNames(int memberNo) throws Exception {
 
  return topicDao.getResultNames(memberNo);
}
}

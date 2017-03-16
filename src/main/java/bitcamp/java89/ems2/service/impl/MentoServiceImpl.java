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
import bitcamp.java89.ems2.domain.Mento;
import bitcamp.java89.ems2.service.MentoService;

@Service
public class MentoServiceImpl implements MentoService {
  @Autowired MemberDao memberDao;
  @Autowired MenteeDao menteeDao;
  @Autowired MentoDao mentoDao;
  
  @Override
  public ArrayList<Mento> getList() throws Exception {
    return mentoDao.getList();
  }

  @Override
  public Mento getOneByEmailPassword(String email, String password) throws Exception {
    HashMap<String,String> paramMap = new HashMap<>();
    paramMap.put("email", email);
    paramMap.put("password", password);
    
    Mento mento = mentoDao.getOneByEmailPassword(paramMap);
    
    if (mento == null) {
      return null;
    }
    return mento;
  }

  @Override
  public int add(Mento mento) throws Exception {
    if (mentoDao.countByEmail(mento.getEmail()) != 0) {
      throw new Exception("같은 멘토의 이메일이 존재합니다. 등록을 취소합니다.");
    }
    
    if (memberDao.count(mento.getEmail()) == 0) {
      memberDao.insert(mento);
    } else {
      Member member = memberDao.getOne(mento.getEmail());
      mento.setMemberNo(member.getMemberNo());
    }
    
    return mentoDao.insert(mento);
  }

  @Override
  public int delete(int mentoNo) throws Exception {
    if (mentoDao.countByNo(mentoNo) == 0) {
      throw new Exception("멘토를 찾지 못했습니다.");
    }
    
    int count = mentoDao.delete(mentoNo);
    memberDao.delete(mentoNo);
    
    return count;
  }
  
  @Override
  public int update(Mento mento) throws Exception {
    if (mentoDao.countByNo(mento.getMemberNo()) == 0) {
      throw new Exception("멘티를 찾지 못했습니다.");
    }
    memberDao.update(mento);
    return mentoDao.update(mento);
  }


  @Override
  public int updateProfile(HashMap<String, Object> map) throws Exception {
    // TODO Auto-generated method stub
    return 0;
  }
  
 
}

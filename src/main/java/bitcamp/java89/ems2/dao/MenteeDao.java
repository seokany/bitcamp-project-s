package bitcamp.java89.ems2.dao;

import java.util.ArrayList;
import java.util.Map;
import bitcamp.java89.ems2.domain.Mentee;

public interface MenteeDao {
  ArrayList<Mentee> getList() throws Exception;
  int countByNo(int menteeNo) throws Exception;
  int count(String email) throws Exception;
  int countByEmail(String email) throws Exception;
  int countByEmailPassword(Map<String,String> paramMap) throws Exception;
  int insert(Mentee mentee) throws Exception;
  int update(Mentee mentee) throws Exception;
  int delete(int menteeNo) throws Exception;
  Mentee getOneByNo(int menteeNo) throws Exception;
  Mentee getOne(String email) throws Exception;
  Mentee getOneByEmailPassword(Map<String,String> paramMap) throws Exception;
  
}

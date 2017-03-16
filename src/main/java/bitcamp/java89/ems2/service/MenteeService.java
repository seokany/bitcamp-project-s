package bitcamp.java89.ems2.service;

import java.util.ArrayList;
import java.util.HashMap;
import bitcamp.java89.ems2.domain.Mentee;

public interface MenteeService {
  
  ArrayList<Mentee> getList() throws Exception;
  Mentee getOneByEmailPassword(String email, String password) throws Exception;
  int add(Mentee mentee) throws Exception;
  int update(Mentee mentee) throws Exception;
  int delete(int menteeNo) throws Exception;
  int updateProfile(HashMap<String, Object> map) throws Exception;
  
}

















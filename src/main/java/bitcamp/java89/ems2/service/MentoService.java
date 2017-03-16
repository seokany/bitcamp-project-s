package bitcamp.java89.ems2.service;

import java.util.ArrayList;
import java.util.HashMap;
import bitcamp.java89.ems2.domain.Mento;

public interface MentoService {
  ArrayList<Mento> getList() throws Exception;
  Mento getOneByEmailPassword(String email, String password) throws Exception;
  int add(Mento mento) throws Exception;
  int update(Mento mento) throws Exception;
  int delete(int mentoNo) throws Exception;
  int updateProfile(HashMap<String, Object> map) throws Exception;
}

















package bitcamp.java89.ems2.dao;

import java.util.ArrayList;
import java.util.Map;
import bitcamp.java89.ems2.domain.Mento;

public interface MentoDao {
  ArrayList<Mento> getList() throws Exception;
  int countByNo(int mentoNo) throws Exception;
  int count(String email) throws Exception;
  int countByEmail(String email) throws Exception;
  int countByEmailPassword(Map<String,String> paramMap) throws Exception;
  int insert(Mento mento) throws Exception;
  int update(Mento mento) throws Exception;
  int delete(int mentoNo) throws Exception;
  Mento getOneByNo(int mentoNo) throws Exception;
  Mento getOne(String email) throws Exception;
  Mento getOneByEmailPassword(Map<String,String> paramMap) throws Exception;
}

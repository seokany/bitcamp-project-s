package bitcamp.java89.ems2.dao;

import java.util.ArrayList;
import java.util.Map;

import bitcamp.java89.ems2.domain.Member;
import bitcamp.java89.ems2.domain.Mento;

public interface MentoDao {
  
/*  ArrayList<Member> getList() throws Exception;
  int count(String email) throws Exception;
  int countByEmail(String email) throws Exception;
  int countByEmailPassword(Map<String,String> paramMap) throws Exception;
  int insert(Member member) throws Exception;
  int delete(int memberNo) throws Exception;
  Member getOneByNo(int memberNo) throws Exception;
  Member getOne(String email) throws Exception;*/
  int insert(Member member) throws Exception;
  int getOne(int memberNo) throws Exception;
  int count(String email) throws Exception;
  Mento getOneByEmailPassword(Map<String,String> paramMap) throws Exception;
  ArrayList<Mento> getList(Map<String,Object> paramMap) throws Exception;
  
}

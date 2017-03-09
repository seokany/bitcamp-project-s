package bitcamp.java89.ems2.dao;

import java.util.Map;

import bitcamp.java89.ems2.domain.Member;

public interface MemberDao {
  int count(String email) throws Exception;
  int insert(Member member) throws Exception;
  int update(Member member) throws Exception;
  int delete(int memberNo) throws Exception;
  Member getOne(String email) throws Exception;
  Member getOneByEmailPassword(Map<String,String> paramMap) throws Exception;
}

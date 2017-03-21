package bitcamp.java89.ems2.dao;

import bitcamp.java89.ems2.domain.Result;

public interface ResultDao {
  /*int countAll() throws Exception;
  ArrayList<Student> getList(Map<String,Object> paramMap) throws Exception;
  int count(String email) throws Exception;
  int countByNo(int memberNo) throws Exception;*/
  int insert(Result result) throws Exception;
  Result getOne(int no) throws Exception;
 /* int update(Student student) throws Exception;
  int delete(int memberNo) throws Exception;*/
  Result getList(Result result) throws Exception;
  Result getOneByMemberNo(int memberNo);
}

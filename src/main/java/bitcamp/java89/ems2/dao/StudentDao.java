package bitcamp.java89.ems2.dao;

import java.util.ArrayList;
import java.util.Map;

import bitcamp.java89.ems2.domain.Student;

public interface StudentDao {
  int countAll() throws Exception;
  ArrayList<Student> getList(Map<String,Object> paramMap) throws Exception;
  int count(String email) throws Exception;
  int countByNo(int memberNo) throws Exception;
  int insert(Student student) throws Exception;
  Student getOne(int memberNo) throws Exception;
  int update(Student student) throws Exception;
  int delete(int memberNo) throws Exception;
}

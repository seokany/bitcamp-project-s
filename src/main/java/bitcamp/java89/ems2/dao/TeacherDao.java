package bitcamp.java89.ems2.dao;

import java.util.ArrayList;

import bitcamp.java89.ems2.domain.Teacher;

public interface TeacherDao {
  int count(String email) throws Exception;
  int countByNo(int memberNo) throws Exception;
  ArrayList<Teacher> getList() throws Exception;
  int insert(Teacher teacher) throws Exception;
  int insertPhoto(Teacher teacher) throws Exception;
  Teacher getOneWithPhoto(int memberNo) throws Exception;
  int update(Teacher teacher) throws Exception;
  int delete(int memberNo) throws Exception;
  int deletePhoto(int memberNo) throws Exception;
}

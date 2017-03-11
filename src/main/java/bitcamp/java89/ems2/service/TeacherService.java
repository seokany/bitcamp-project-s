package bitcamp.java89.ems2.service;

import java.util.List;

import bitcamp.java89.ems2.domain.Teacher;

public interface TeacherService {
  List<Teacher> getList() throws Exception;
  Teacher getDetail(int no) throws Exception;
  int add(Teacher teacher) throws Exception;
  int delete(int no) throws Exception;
  int update(Teacher teacher) throws Exception;
}

















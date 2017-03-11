package bitcamp.java89.ems2.service;

import java.util.List;

import bitcamp.java89.ems2.domain.Person;

public interface PersonService {
  int getSize() throws Exception;
  List<Person> getList(int pageNo, int pageSize) throws Exception;
//  Person getDetail(int no) throws Exception;
//  int add(Person person) throws Exception;
//  int delete(int no) throws Exception;
//  int update(Person person) throws Exception;
}
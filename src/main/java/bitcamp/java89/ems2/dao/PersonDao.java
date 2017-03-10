package bitcamp.java89.ems2.dao;

import java.util.ArrayList;
import java.util.Map;

import bitcamp.java89.ems2.domain.Person;

public interface PersonDao {
  int countAll() throws Exception;
  ArrayList<Person> getList(Map<String,Object> paramMap) throws Exception;
  int count(String personName) throws Exception;
  int countByNo(int memberNo) throws Exception;
//  int insert(Person person) throws Exception;
//  Person getOne(int memberNo) throws Exception;
//  int update(Person person) throws Exception;
//  int delete(int memberNo) throws Exception;
}
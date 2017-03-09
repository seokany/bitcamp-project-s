package bitcamp.java89.ems2.dao;

import java.util.ArrayList;

import bitcamp.java89.ems2.domain.Job;

public interface JobDao {
  int count(String jobName) throws Exception; // ??
  int countByNo(int contentsNo) throws Exception;
  ArrayList<Job> getList() throws Exception;
  int insert(Job job) throws Exception;
  Job getOne(int contentsNo) throws Exception;
  int update(Job job) throws Exception;
  int delete(int contentsNo) throws Exception;
}

package bitcamp.java89.ems2.dao;

import java.util.ArrayList;
import java.util.Map;

import bitcamp.java89.ems2.domain.Student;

public interface VideoDao {

  ArrayList<Video> getList(Map<Video,Object> paramMap) throws Exception;
  
}

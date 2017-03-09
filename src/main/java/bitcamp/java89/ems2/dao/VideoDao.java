package bitcamp.java89.ems2.dao;

import java.util.ArrayList;
import java.util.Map;

import bitcamp.java89.ems2.domain.Video;

public interface VideoDao {
  int countAll() throws Exception;
  ArrayList<Video> getList(Map<String,Object> paramMap) throws Exception;
  int count(String email) throws Exception;
  int countByNo(int memberNo) throws Exception;
  
}

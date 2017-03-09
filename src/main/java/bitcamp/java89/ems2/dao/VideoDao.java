package bitcamp.java89.ems2.dao;

import java.util.ArrayList;
import java.util.Map;

import bitcamp.java89.ems2.domain.Video;

public interface VideoDao {
  int countAll() throws Exception;
  ArrayList<Video> getList() throws Exception;
  
}

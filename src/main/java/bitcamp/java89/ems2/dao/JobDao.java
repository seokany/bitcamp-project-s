package bitcamp.java89.ems2.dao;

import java.util.ArrayList;
import bitcamp.java89.ems2.domain.Job;

public interface JobDao {
  int countAll() throws Exception;
  ArrayList<Job> getList() throws Exception;
  
}

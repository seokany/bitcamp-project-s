package bitcamp.java89.ems2.dao;

import java.util.List;

import bitcamp.java89.ems2.domain.Topic;

public interface TopicDao {
  Topic getResult(int memberNo) throws Exception;
  List<String> getResultNames(int memberNo) throws Exception;
}

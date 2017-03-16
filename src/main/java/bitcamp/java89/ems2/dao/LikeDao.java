package bitcamp.java89.ems2.dao;

import java.util.ArrayList;
import java.util.Map;

import org.apache.ibatis.annotations.Param;

import bitcamp.java89.ems2.domain.Like;

public interface LikeDao {
    int videoCountAll(int sno) throws Exception;
    int mentoCountAll(int sno) throws Exception;
  ArrayList<Like> videoList(Map<String,Object> paramMap) throws Exception;
  ArrayList<Like> mentoList(Map<String,Object> paramMap) throws Exception;
  int likeAdd(@Param("curNo") int curNo, @Param("sno") int sno) throws Exception;
  int countByNo(int curNo) throws Exception;
  int likeDelete(int curNo) throws Exception;
  
}

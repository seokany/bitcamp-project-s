package bitcamp.java89.ems2.service;

import java.util.List;

import bitcamp.java89.ems2.domain.Like;

public interface LikeService {
    int videoGetSize(int sno) throws Exception;
    int mentoGetSize(int sno) throws Exception;
    List<Like> videoList(int pageNo, int pageSize, int sno) throws Exception;
    List<Like> mentoList(int pageNo, int pageSize, int sno) throws Exception;
  public int likeAdd(int curNo, int sno) throws Exception;
  int likeDelete(int curNo) throws Exception;
}

















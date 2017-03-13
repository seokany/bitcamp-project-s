package bitcamp.java89.ems2.service;

import java.util.List;

import bitcamp.java89.ems2.domain.Like;

public interface LikeService {
  List<Like> addList(int contentsNo, int menteeNo) throws Exception;
  public int likeAdd(int curNo, int sno) throws Exception;
  int likeDelete(int curNo) throws Exception;
}

















package bitcamp.java89.ems2.dao;

import java.util.ArrayList;

import bitcamp.java89.ems2.domain.Qna;

public interface QnaDao {

  ArrayList<Qna> getList(int cono) throws Exception;
  
}

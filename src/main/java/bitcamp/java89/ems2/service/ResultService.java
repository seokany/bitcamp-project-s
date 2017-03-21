package bitcamp.java89.ems2.service;

import bitcamp.java89.ems2.domain.Result;

public interface ResultService {
  Result getDetail(int no) throws Exception;
  Result getList(Result result) throws Exception;
  int add(Result result) throws Exception;
}
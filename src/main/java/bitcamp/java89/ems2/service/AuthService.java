package bitcamp.java89.ems2.service;

import java.util.List;

import bitcamp.java89.ems2.domain.Member;
import bitcamp.java89.ems2.domain.Mento;
import bitcamp.java89.ems2.domain.Topic;

public interface AuthService {
  Member getMemberInfo(String email, String password) throws Exception;
  Mento getMentoInfo(String email, String password) throws Exception;
  Topic getResult(int memberNo) throws Exception;
  List<String> getResultNames(int memberNo) throws Exception;
  int getOne(int memberNo) throws Exception;
  List<Mento> getList(int memberNo) throws Exception;
}

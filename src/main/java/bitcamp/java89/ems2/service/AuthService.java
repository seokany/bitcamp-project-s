package bitcamp.java89.ems2.service;

import java.util.List;

import bitcamp.java89.ems2.domain.Member;
import bitcamp.java89.ems2.domain.Mento;

public interface AuthService {
  Member getMemberInfo(String email, String password) throws Exception;
  Mento getMentoInfo(String email, String password) throws Exception;
  int getOne(int memberNo) throws Exception;
  List<Mento> getList(int memberNo) throws Exception;
}

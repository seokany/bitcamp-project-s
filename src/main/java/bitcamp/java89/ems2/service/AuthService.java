package bitcamp.java89.ems2.service;

import bitcamp.java89.ems2.domain.Member;
import bitcamp.java89.ems2.domain.Mento;

public interface AuthService {
  Member getMemberInfo(String email, String password) throws Exception;
  Mento getMentoInfo(String email, String password) throws Exception;
}

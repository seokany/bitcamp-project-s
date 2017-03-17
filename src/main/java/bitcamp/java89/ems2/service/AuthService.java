package bitcamp.java89.ems2.service;

import bitcamp.java89.ems2.domain.Member;

public interface AuthService {
  Member getMemberInfo(String email, String password) throws Exception;
}

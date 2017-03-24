package bitcamp.java89.ems2.service;

import bitcamp.java89.ems2.domain.Member;
import bitcamp.java89.ems2.domain.Mentee;
import bitcamp.java89.ems2.domain.Mento;

public interface MemberService {
  /*Student getDetail(int no) throws Exception;
  int add(Student student) throws Exception;
  int delete(int no) throws Exception;
//  int getSize() throws Exception;*/
  int hasEmail(String email) throws Exception; 
  int addMentee(Mentee mentee) throws Exception;
  int addMento(Mento mento) throws Exception;
  Member getOne(int memberNo) throws Exception;
  int update(Member member) throws Exception;
}

















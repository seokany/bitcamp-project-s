package bitcamp.java89.ems2.dao;

import java.util.List;

import bitcamp.java89.ems2.domain.Message;

public interface MessageDao {
  int menteeSendQnA(Message message) throws Exception; 
  int menteeSendMesg(Message message) throws Exception; 
  int hasQnA(Message message) throws Exception; 
  List<Message> messageList(Message message) throws Exception; 
  
}

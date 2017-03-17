package bitcamp.java89.ems2.service;

import java.util.List;

import bitcamp.java89.ems2.domain.Message;

public interface MessageService {
  int menteeSendQnA(Message message) throws Exception; 
  int menteeSendMesg(Message message) throws Exception; 
  int mentoSendMesg(Message message) throws Exception; 
  int hasQnA(Message message) throws Exception; 
  List<Message> messageList(int cono, int sno) throws Exception; 
  int menteeVisit(Message message) throws Exception;
  int mentoVisit(Message message) throws Exception;
}

















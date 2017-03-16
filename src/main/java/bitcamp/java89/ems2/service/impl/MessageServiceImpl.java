package bitcamp.java89.ems2.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import bitcamp.java89.ems2.dao.MessageDao;
import bitcamp.java89.ems2.domain.Message;
import bitcamp.java89.ems2.service.MessageService;

@Service
public class MessageServiceImpl implements MessageService {
  @Autowired MessageDao messageDao;
  
  public int menteeSendQnA(Message message) throws Exception {
    return messageDao.menteeSendQnA(message);
  }
  
  public int menteeSendMesg(Message message) throws Exception {
    return messageDao.menteeSendMesg(message);
  }
  
  public int hasQnA(Message message) throws Exception {
    return messageDao.hasQnA(message);
  }
  
  public List<Message> messageList(Message message) throws Exception {
    return messageDao.messageList(message);
  }
}

















package bitcamp.java89.ems2.service.impl;

import java.util.HashMap;
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
  
  public int mentoSendMesg(Message message) throws Exception {
    return messageDao.mentoSendMesg(message);
  }
  
  public int hasQnA(Message message) throws Exception {
    return messageDao.hasQnA(message);
  }
  
  public int menteeVisit(Message message) throws Exception {
    return messageDao.menteeVisit(message);
  }
  
  public int mentoVisit(Message message) throws Exception {
    return messageDao.mentoVisit(message);
  }
  
  public List<Message> messageList(int cono, int sno) throws Exception {
    HashMap<String,Object> paramMap = new HashMap<>();
    paramMap.put("cono", cono);
    paramMap.put("sno", sno);
    
    return messageDao.messageList(paramMap);
  }
}

















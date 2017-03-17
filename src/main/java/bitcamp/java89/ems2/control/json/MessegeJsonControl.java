package bitcamp.java89.ems2.control.json;

import java.util.HashMap;
import java.util.List;

import javax.servlet.ServletContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import bitcamp.java89.ems2.domain.Message;
import bitcamp.java89.ems2.service.MessageService;

@RestController
public class MessegeJsonControl {
  @Autowired ServletContext sc;
  @Autowired MessageService messageService;
  
  @RequestMapping("/message/list")
  public AjaxResult list(@RequestParam int cono, @RequestParam int sno, @RequestParam int mno) throws Exception {
    List<Message> list = messageService.messageList(cono, sno);
    
    Message message = new Message(); 
    message.setContentsNo(cono);
    message.setMemberNo(sno);
    
    if (sno == mno)
      messageService.menteeVisit(message);
    if (sno != mno)
      messageService.mentoVisit(message);
    
    HashMap<String,Object> resultMap = new HashMap<>(); 
    resultMap.put("list", list);
    
    return new AjaxResult(AjaxResult.SUCCESS, resultMap); 
  }
  
  @RequestMapping("/message/mentee-send")
  public AjaxResult send(@RequestParam String msge, @RequestParam int cono, @RequestParam int sno) throws Exception {
    Message message = new Message(); 
    message.setContentsNo(cono);
    message.setMemberNo(sno);
    message.setMessage(msge);
    message.setWriterNo(sno);
    
    int hasQna = messageService.hasQnA(message); 
    
    if (hasQna == 0) 
      messageService.menteeSendQnA(message);
    messageService.menteeSendMesg(message);
    return new AjaxResult(AjaxResult.SUCCESS, "success");
  }
  
  @RequestMapping("/message/mento-send")
  public AjaxResult send(@RequestParam String msge, @RequestParam int cono, @RequestParam int sno, int eno) throws Exception {
    Message message = new Message(); 
    message.setContentsNo(cono);
    message.setMemberNo(sno);
    message.setMessage(msge);
    message.setWriterNo(eno);
    
    messageService.mentoSendMesg(message);
    return new AjaxResult(AjaxResult.SUCCESS, "success");
  }
}
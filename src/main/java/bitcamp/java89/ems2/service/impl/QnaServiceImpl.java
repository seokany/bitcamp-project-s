package bitcamp.java89.ems2.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import bitcamp.java89.ems2.dao.QnaDao;
import bitcamp.java89.ems2.domain.Qna;
import bitcamp.java89.ems2.service.QnaService;

@Service
public class QnaServiceImpl implements QnaService {
  @Autowired QnaDao qnaDao;
 
  public List<Qna> getList(int cono) throws Exception {

    return qnaDao.getList(cono); 
  }
  
 
}

















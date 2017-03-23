package bitcamp.java89.ems2.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import bitcamp.java89.ems2.dao.ResultDao;
import bitcamp.java89.ems2.domain.Result;
import bitcamp.java89.ems2.service.ResultService;

@Service
public class ResultServiceImpl implements ResultService {
  
  @Autowired ResultDao resultDao;

  @Override
  public Result getDetail(int memberNo) throws Exception {
    return resultDao.getOneByMemberNo(memberNo);
  }

  @Override
  public Result getList(Result result) throws Exception {
    return resultDao.getList(result);
  }

  @Override
  public int add(Result result) throws Exception {
    return resultDao.insert(result);
  }
  
  @Override
  public int hasResult(int memberNo) throws Exception {
    return resultDao.hasResult(memberNo);
  }
  
  
  

}

















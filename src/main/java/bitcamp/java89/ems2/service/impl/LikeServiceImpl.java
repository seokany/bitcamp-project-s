package bitcamp.java89.ems2.service.impl;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import bitcamp.java89.ems2.dao.ContentsHeaderDao;
import bitcamp.java89.ems2.dao.LikeDao;
import bitcamp.java89.ems2.domain.Like;
import bitcamp.java89.ems2.service.LikeService;

@Service
public class LikeServiceImpl implements LikeService {
  @Autowired ContentsHeaderDao contentsDao;
  @Autowired LikeDao likeDao;
  
 
  public List<Like> videoList(int pageNo, int pageSize, int sno) throws Exception {

    HashMap<String,Object> paramMap = new HashMap<>();
    paramMap.put("startRowIndex", (pageNo - 1) * pageSize);
    paramMap.put("rowSize", pageSize);
    paramMap.put("sno", sno);
    System.out.println(paramMap);
    
    return likeDao.videoList(paramMap); 
  }

  
  public List<Like> mentoList(int pageNo, int pageSize, int sno) throws Exception {

      HashMap<String,Object> paramMap = new HashMap<>();
      paramMap.put("startRowIndex", (pageNo - 1) * pageSize);
      paramMap.put("rowSize", pageSize);
      paramMap.put("sno", sno);
      
      return likeDao.mentoList(paramMap); 
    }

  @Override
  public int likeAdd(int curNo, int sno) throws Exception {
    return likeDao.likeAdd(curNo, sno);
  }
  
  public int likeDelete(int curNo) throws Exception {
    if (likeDao.countByNo(curNo) == 0) {
      throw new Exception("학생을 찾지 못했습니다.");
    }
    int count = likeDao.likeDelete(curNo);
    
    return count;
  }


@Override
public int videoGetSize(int sno) throws Exception {
    return likeDao.videoCountAll(sno);
}
@Override
public int mentoGetSize(int sno) throws Exception {
    return likeDao.mentoCountAll(sno);
}

  
  /*public Video getDetail(int no) throws Exception {
    return videoDao.getOne(no);
  }
  
  public int add(Video video) throws Exception {
    
    if (videoDao.count(video.getEmail()) > 0) {
      throw new Exception("같은 학생의 이메일이 존재합니다. 등록을 취소합니다.");
    }
    
    if (memberDao.count(video.getEmail()) == 0) { 
      memberDao.insert(video);
      
    } else {
      Member member = memberDao.getOne(video.getEmail());
      video.setMemberNo(member.getMemberNo());
    }
    
    return videoDao.insert(video);
  }
  
  public int delete(int no) throws Exception {
    if (videoDao.countByNo(no) == 0) {
      throw new Exception("학생을 찾지 못했습니다.");
    }
    
    int count = videoDao.delete(no);

    if (managerDao.countByNo(no) == 0 && teacherDao.countByNo(no) == 0) {
      memberDao.delete(no);
    }
    
    return count;
  }
  
  public int update(Video video) throws Exception {
    if (videoDao.countByNo(video.getMemberNo()) == 0) {
      throw new Exception("학생을 찾지 못했습니다.");
    }
    memberDao.update(video);
    return videoDao.update(video);
  }*/
}

















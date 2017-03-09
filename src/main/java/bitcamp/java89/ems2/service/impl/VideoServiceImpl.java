package bitcamp.java89.ems2.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import bitcamp.java89.ems2.dao.ContentsDao;
import bitcamp.java89.ems2.dao.VideoDao;
import bitcamp.java89.ems2.domain.Video;
import bitcamp.java89.ems2.service.VideoService;

@Service
public class VideoServiceImpl implements VideoService {
  @Autowired ContentsDao contentsDao;
  @Autowired VideoDao videoDao;
  
/* public int getSize() throws Exception {
    return videoDao.countAll();
  }*/
 
  public List<Video> getList() throws Exception {

    return videoDao.getList(); 
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

















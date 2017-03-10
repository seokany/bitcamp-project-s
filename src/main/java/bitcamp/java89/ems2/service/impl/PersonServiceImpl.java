package bitcamp.java89.ems2.service.impl;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import bitcamp.java89.ems2.dao.PersonDao;
import bitcamp.java89.ems2.domain.Person;
import bitcamp.java89.ems2.service.PersonService;

@Service
public class PersonServiceImpl implements PersonService {
//  @Autowired ContentsDao memberDao;
  @Autowired PersonDao personDao;
  
  public int getSize() throws Exception {
    return personDao.countAll();
  }
  
  public List<Person> getList(int pageNo, int pageSize) throws Exception {
    HashMap<String,Object> paramMap = new HashMap<>();
    paramMap.put("startRowIndex", (pageNo - 1) * pageSize);
    paramMap.put("rowSize", pageSize);
    
    return personDao.getList(paramMap);
  }
  
//  public Student getDetail(int no) throws Exception {
//    return studentDao.getOne(no);
//  }
//  
//  public int add(Student student) throws Exception {
//    
//    if (studentDao.count(student.getEmail()) > 0) {
//      throw new Exception("같은 학생의 이메일이 존재합니다. 등록을 취소합니다.");
//    }
//    
//    if (memberDao.count(student.getEmail()) == 0) { 
//      memberDao.insert(student);
//      
//    } else {
//      Member member = memberDao.getOne(student.getEmail());
//      student.setMemberNo(member.getMemberNo());
//    }
//    
//    return studentDao.insert(student);
//  }
//  
//  public int delete(int no) throws Exception {
//    if (studentDao.countByNo(no) == 0) {
//      throw new Exception("학생을 찾지 못했습니다.");
//    }
//    
//    int count = studentDao.delete(no);
//
//    if (managerDao.countByNo(no) == 0 && teacherDao.countByNo(no) == 0) {
//      memberDao.delete(no);
//    }
//    
//    return count;
//  }
//  
//  public int update(Student student) throws Exception {
//    if (studentDao.countByNo(student.getMemberNo()) == 0) {
//      throw new Exception("학생을 찾지 못했습니다.");
//    }
//    memberDao.update(student);
//    return studentDao.update(student);
//  }
}
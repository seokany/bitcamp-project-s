<-- 테스트 데이터 -->

-- 멤버 데이터
	insert into membs(name,age,email,pwd) values('김지환', 15, 'user01@test.com', password('1111'));
	insert into membs(name,age,email,pwd) values('천지연', 17, 'user02@test.com', password('1111'));
	insert into membs(name,age,email,pwd) values('정은성', 14, 'json.jeong@gmail.com', password('1111'));
	insert into membs(name,age,email,pwd) values('이석환', 18, 'user03@test.com', password('1111'));
	insert into membs(name,age,email,pwd) values('이연희', 15, 'user04@test.com', password('1111'));
	insert into membs(name,age,email,pwd) values('조인성', 38, 'mento01@test.com', password('1111'));

- 멘티 데이터
	insert into mentee(sno) values(1); 
	insert into mentee(sno) values(2); 
	insert into mentee(sno) values(3); 
	insert into mentee(sno) values(4); 
	insert into mentee(sno) values(5); 

- 멘토 데이터
	insert into mento(eno, sarea) values(6, '배우'); 


- 콘텐츠헤더 데이터
	insert into contents(type) values('job');
	insert into contents(type) values('video');
	insert into contents(type) values('person');
	insert into contents(type) values('plan');
	insert into contents(type) values('video');
	insert into contents(type) values('video');
	insert into contents(type) values('video');
	insert into contents(type) values('video');
	insert into contents(type) values('video');
	insert into contents(type) values('video');


- 직업 데이터
	insert into job(cono, jbimg, jbnm, jbdsc) values(1, 'abce', '연구원', '연구한다'); 

- 영상 데이터
	insert into video(cono, kotl, entl, voimg, vodsc, spnm, sjob, simg, posted) values(5, '테스트 영상1', 'testVideo', 'teesthumb', 'desc', 'spk', 'spkjob', 'thumb',201703);
	insert into video(cono, kotl, entl, voimg, vodsc, spnm, sjob, simg, posted) values(6, '테스트 영상2', 'testVideo', 'teesthumb', 'desc', 'spk', 'spkjob', 'thumb',201703);
	insert into video(cono, kotl, entl, voimg, vodsc, spnm, sjob, simg, posted) values(7, '테스트 영상3', 'testVideo', 'teesthumb', 'desc', 'spk', 'spkjob', 'thumb',201703);
	insert into video(cono, kotl, entl, voimg, vodsc, spnm, sjob, simg, posted) values(8, '테스트 영상4', 'testVideo', 'teesthumb', 'desc', 'spk', 'spkjob', 'thumb',201703);
	insert into video(cono, kotl, entl, voimg, vodsc, spnm, sjob, simg, posted) values(9, '테스트 영상5', 'testVideo', 'teesthumb', 'desc', 'spk', 'spkjob', 'thumb',201703);
	insert into video(cono, kotl, entl, voimg, vodsc, spnm, sjob, simg, posted) values(10, '테스트 영상6', 'testVideo', 'teesthumb', 'desc', 'spk', 'spkjob', 'thumb',201703); 

- 인물 데이터
	insert into person(cono, psimg1, psimg2, psnm, psjob, psdsc) values(3, '썸네일1', '썸네일2', '인물이름', '인물직업', '인물설명'); 
	
	insert into contents(type) values('person'); 
	insert into person(cono, psimg1, psimg2, psnm, psjob, psdsc,pschl) 
    values
      (43, 
      'http://localhost:8080/bitcamp-project-s/mystuff/img/personImg/lee.jpg', 
      'http://localhost:8080/bitcamp-project-s/mystuff/img/personImg/studio/lee(세로).jpg', 
      '이연희', 
      '배우', 
      'SM엔터테인먼트소속의 여배우. 고아라에 이어 SM이 내세운 연기자로 첫사랑의 이미지를 가진 예쁜 얼굴과 큰 키, 날씬한 몸매로 외적인 면에서는 우월하다. 그러나 부족한 연기력으로 늘 비판을 받아왔다. 키가 크고 마른 체구에 운동을 정말 못하게 보이지만 의외로 운동 신경이 굉장히 뛰어난 편이다. 학교 동창생이었던 사람들의 증언을 들어보면 어지간한 남자아이들보다 축구를 잘했다고 하며, 고1 때는 반에서 체육부장을 맡기도 했다.',
      '비트대학교'
      );
  insert into person(cono, psimg1, psimg2, psnm, psjob, psdsc,pschl) 
    values
      (44, 
      'http://localhost:8080/bitcamp-project-s/mystuff/img/personImg/jobs.jpg', 
      'http://localhost:8080/bitcamp-project-s/mystuff/img/personImg/studio/jobs(세로).jpg', 
      '스티브 잡스', 
      '前 애플 사장', 
      '버락 후세인 오바마 주니어는 미국의 정치인으로 제44대 대통령이다. 케냐 출신의 아버지와 유럽계 백인 어머니 사이에서 태어난 물라토로, 2008년 미국 대통령 선거에 민주당 소속으로 출마, 미국 최초로 아프리카계 미국인이자 하와이 출신으로 대통령에 당선되었으며, 2009년 1월 20일부터 임기를 시작하였다. 2005년 1월 일리노이 주 출신 미국 상원 의원으로 재직하다가 2008년 11월 대통령 선거 이후에 의원직을 사임하였다.',
      '비트대학교'
      );
  insert into person(cono, psimg1, psimg2, psnm, psjob, psdsc,pschl) 
    values
      (45, 
      'http://localhost:8080/bitcamp-project-s/mystuff/img/personImg/jordan.jpg', 
      'http://localhost:8080/bitcamp-project-s/mystuff/img/personImg/studio/jordan(세로).jpg', 
      '조단', 
      '농구선수', 
      '조단은 대한민국의 은퇴한 국가대표 피겨 스케이팅 선수이다. 2010년 동계 올림픽 여자 싱글 부문 챔피언, 2014년 동계 올림픽 여자 싱글 부문 은메달리스트, 2009년 · 2013년 세계 선수권 챔피언이며, 대한민국 최초의 올림픽 메달리스트, 세계선수권대회 메달리스트이다. 2003년, 2004년, 2005년, 2006년, 2013년, 2014년 한국 피겨스케이팅 종합 선수권 대회 우승자이기도 하다.',
      '비트대학교'
      );
  insert into person(cono, psimg1, psimg2, psnm, psjob, psdsc,pschl) 
    values
      (46, 
      'http://localhost:8080/bitcamp-project-s/mystuff/img/personImg/bear.jpg', 
      'http://localhost:8080/bitcamp-project-s/mystuff/img/personImg/studio/bear(세로).jpg', 
      '베어', 
      '패션 모델', 
      '미란다 메이 커는 오스트레일리아의 모델이다. 커는 2007년 빅토리아 시크릿 엔젤스로 활동하면서 유명해졌다. 오스트레일리아인으로는 처음으로 빅토리아 시크릿 캠페인에 참여했으며, 오스트레일리아의 패션 체인 데이비드 존스의 대표이기도 하다. 또한 유기농 스킨케어 상품 브랜드 코라 오가닉스를 소유하고 있고 자서전 《Treasure Yourself》를 출간했다.',
      '비트대학교'
      );

- 설계도 데이터
	insert into plan(cono, eno, plmap, plimg) values(4, 6, '설계도 내용', '설계도 썸네일'); 
	insert into plan(cono, eno, plnm, plimg2) values(5, 6, '연봉 수직선상을 꿈꾸다', 'http://cfile25.uf.tistory.com/image/23506637556925C1021DCE'); 
	insert into plan(cono, eno, plnm, plimg2) values(6, 7, '사람을 위한, 사람에 의한 건축', 'http://www.issuemaker.kr/PEG/14469592276738.jpg'); 
	insert into plan(cono, eno, plnm, plimg2) values(7, 8, '번역의 즐거움', 'http://cfile232.uf.daum.net/image/120CF7284CE4E98A3CB10D'); 
	insert into plan(cono, eno, plnm, plimg2) values(8, 9, '대학로 연극 시크릿, 울어본 사람이 웃을 수 있다.', 'http://cfile10.uf.tistory.com/image/242BE538541FE62C26E41D'); 
	insert into plan(cono, eno, plnm, plimg2) values(9, 10, '재무전략, 재무설계', 'http://cfile27.uf.tistory.com/image/173223334E0AA10C1F33CA'); 
	insert into plan(cono, eno, plnm, plimg2) values(10, 11, '하늘을 보는 눈', 'https://i.ytimg.com/vi/8JW5PAcRmJo/maxresdefault.jpg'); 

- 주제 데이터
	insert into topic(tnm) values('천문학'); 
	insert into topic(tnm) values('바이오테크'); 
	insert into topic(tnm) values('재무'); 

- 콘텐츠 주제 데이터
	insert into copic(tno, cono) values(1, 1); 
	insert into copic(tno, cono) values(2, 2); 
	insert into copic(tno, cono) values(3, 3); 
	insert into copic(tno, cono) values(3, 4); 

- 검사결과 데이터
	insert into result(sno, type, rer) values(5, 'mbti', 'istp'); 

- 추천주제 데이터
	insert into snatr(tno, reno) values(1, 1); 
	insert into snatr(tno, reno) values(2, 1); 
	insert into snatr(tno, reno) values(3, 1); 



<-- SELECT query --> 

- mbti 검사 결과 기준 추천인물 select 하기
    select * 
    from person ps
      inner join contents ctt on ps.cono = ctt.cono
      inner join copic cp on ctt.cono = cp.cono
      inner join topic tp on cp.tno = tp.tno
      inner join snatr snt on tp.tno = snt.tno 
      inner join result ret on snt.reno = ret.reno 
    where ret.sno = '5';

- mbti 검사 결과 기준 추천영상 select 하기
	select * from video vd
	inner join contents ctt on vd.cono = ctt.cono
	inner join copic cp on ctt.cono = cp.cono
	inner join topic tp on cp.tno = tp.tno
	inner join snatr snt on tp.tno = snt.tno 
	inner join result ret on snt.reno = ret.reno 
	where ret.sno = '5';

- mbti 검사 결과 기준 추천직업 select 하기
	select * from job
	inner join contents ctt on job.cono = ctt.cono
	inner join copic cp on ctt.cono = cp.cono
	inner join topic tp on cp.tno = tp.tno
	inner join snatr snt on tp.tno = snt.tno 
	inner join result ret on snt.reno = ret.reno 
	where ret.sno = '5';

- mbti 검사 결과 기준 추천멘토 select 하기
	select * from plan
	inner join contents ctt on plan.cono = ctt.cono
	inner join copic cp on ctt.cono = cp.cono
	inner join topic tp on cp.tno = tp.tno
	inner join snatr snt on tp.tno = snt.tno 
	inner join result ret on snt.reno = ret.reno 
	where ret.sno = '5';



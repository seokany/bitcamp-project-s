-- 대화내용
DROP TABLE IF EXISTS MESSG RESTRICT;

-- 콘텐츠헤더
DROP TABLE IF EXISTS CONTENTS RESTRICT;

-- 주제
DROP TABLE IF EXISTS TOPIC RESTRICT;

-- 멘토
DROP TABLE IF EXISTS MENTO RESTRICT;

-- 영상
DROP TABLE IF EXISTS VIDEO RESTRICT;

-- 직업
DROP TABLE IF EXISTS JOB RESTRICT;

-- 설계도
DROP TABLE IF EXISTS PLAN RESTRICT;

-- 인물
DROP TABLE IF EXISTS PERSON RESTRICT;

-- 회원
DROP TABLE IF EXISTS MEMBS RESTRICT;

-- 학생
DROP TABLE IF EXISTS MENTEE RESTRICT;

-- 질의응답
DROP TABLE IF EXISTS QNA RESTRICT;

-- 좋아요
DROP TABLE IF EXISTS LKLST RESTRICT;

-- 적성검사결과
DROP TABLE IF EXISTS RESULT RESTRICT;

-- 콘텐츠주제
DROP TABLE IF EXISTS COPIC RESTRICT;

-- 추천주제
DROP TABLE IF EXISTS SNATR RESTRICT;

-- 대화내용
CREATE TABLE MESSG (
  msno  INTEGER  NOT NULL COMMENT '대화일련번호', -- 대화일련번호
  cono  INTEGER  NOT NULL COMMENT '설계도일련번호', -- 설계도일련번호
  sno   INTEGER  NOT NULL COMMENT '학생일련번호', -- 학생일련번호
  msge  TEXT     NOT NULL COMMENT '내용', -- 내용
  mswr  INTEGER  NOT NULL COMMENT '작성자', -- 작성자
  msdat DATETIME NOT NULL COMMENT '등록일시' -- 등록일시
)
COMMENT '대화내용';

-- 대화내용
ALTER TABLE MESSG
  ADD CONSTRAINT PK_MESSG -- 대화내용 기본키
    PRIMARY KEY (
      msno -- 대화일련번호
    );

ALTER TABLE MESSG
  MODIFY COLUMN msno INTEGER NOT NULL AUTO_INCREMENT COMMENT '대화일련번호';

-- 콘텐츠헤더
CREATE TABLE CONTENTS (
  cono INTEGER     NOT NULL COMMENT '콘텐츠일련번호', -- 콘텐츠일련번호
  type VARCHAR(10) NOT NULL COMMENT '종류' -- 종류
)
COMMENT '콘텐츠헤더';

-- 콘텐츠헤더
ALTER TABLE CONTENTS
  ADD CONSTRAINT PK_CONTENTS -- 콘텐츠헤더 기본키
    PRIMARY KEY (
      cono -- 콘텐츠일련번호
    );

ALTER TABLE CONTENTS
  MODIFY COLUMN cono INTEGER NOT NULL AUTO_INCREMENT COMMENT '콘텐츠일련번호';

-- 주제
CREATE TABLE TOPIC (
  tno INTEGER      NOT NULL COMMENT '주제번호', -- 주제번호
  tnm VARCHAR(100) NOT NULL COMMENT '주제명' -- 주제명
)
COMMENT '주제';

-- 주제
ALTER TABLE TOPIC
  ADD CONSTRAINT PK_TOPIC -- 주제 기본키
    PRIMARY KEY (
      tno -- 주제번호
    );

ALTER TABLE TOPIC
  MODIFY COLUMN tno INTEGER NOT NULL AUTO_INCREMENT COMMENT '주제번호';

-- 멘토
CREATE TABLE MENTO (
  eno   INTEGER      NOT NULL COMMENT '멘토일련번호', -- 멘토일련번호
  sarea VARCHAR(50)  NOT NULL COMMENT '전문분야', -- 전문분야
  darea VARCHAR(50)  NULL     COMMENT '세부분야', -- 세부분야
  carr  VARCHAR(100) NULL     COMMENT '경력' -- 경력
)
COMMENT '멘토';

-- 멘토
ALTER TABLE MENTO
  ADD CONSTRAINT PK_MENTO -- 멘토 기본키
    PRIMARY KEY (
      eno -- 멘토일련번호
    );

-- 영상
CREATE TABLE VIDEO (
  cono   INTEGER      NOT NULL COMMENT '영상일련번호', -- 영상일련번호
  kotl   TEXT         NOT NULL COMMENT '한글제목', -- 한글제목
  entl   TEXT         NOT NULL COMMENT '영문제목', -- 영문제목
  voimg  VARCHAR(255) NOT NULL COMMENT '영상썸네일', -- 영상썸네일
  vodsc  TEXT         NOT NULL COMMENT '소개', -- 소개
  spnm   VARCHAR(50)  NOT NULL COMMENT '작성자이름', -- 작성자이름
  sjob   VARCHAR(100) NOT NULL COMMENT '작성자직업', -- 작성자직업
  simg   VARCHAR(255) NOT NULL COMMENT '작성자썸네일', -- 작성자썸네일
  posted INTEGER      NOT NULL COMMENT '작성날짜' -- 작성날짜
)
COMMENT '영상';

-- 영상
ALTER TABLE VIDEO
  ADD CONSTRAINT PK_VIDEO -- 영상 기본키
    PRIMARY KEY (
      cono -- 영상일련번호
    );

-- 직업
CREATE TABLE JOB (
  cono  INTEGER      NOT NULL COMMENT '직업일련번호', -- 직업일련번호
  jbnm  VARCHAR(50)  NOT NULL COMMENT '직업명', -- 직업명
  jbdsc TEXT         NOT NULL COMMENT '직업설명', -- 직업설명
  jbimg VARCHAR(255) NOT NULL COMMENT '직업썸네일' -- 직업썸네일
)
COMMENT '직업';

-- 직업
ALTER TABLE JOB
  ADD CONSTRAINT PK_JOB -- 직업 기본키
    PRIMARY KEY (
      cono -- 직업일련번호
    );

-- 직업 유니크 인덱스
CREATE UNIQUE INDEX UIX_JOB
  ON JOB ( -- 직업
    jbnm ASC -- 직업명
  );

-- 설계도
CREATE TABLE PLAN (
  cono  INTEGER         NOT NULL COMMENT '설계도일련번호', -- 설계도일련번호
  eno   INTEGER         NOT NULL COMMENT '멘토일련번호', -- 멘토일련번호
  plmap BLOB            NOT NULL COMMENT '설계도', -- 설계도
  plnm  VARCHAR(50)     NOT NULL COMMENT '설계도 이름', -- 설계도 이름
  plimg VARBINARY(1000) NOT NULL COMMENT '설계도 썸네일' -- 설계도 썸네일
)
COMMENT '설계도';

-- 설계도
ALTER TABLE PLAN
  ADD CONSTRAINT PK_PLAN -- 설계도 기본키
    PRIMARY KEY (
      cono -- 설계도일련번호
    );

-- 인물
CREATE TABLE PERSON (
  cono   INTEGER      NOT NULL COMMENT '인물일련번호', -- 인물일련번호
  psimg1 VARCHAR(255) NOT NULL COMMENT '인물썸네일1', -- 인물썸네일1
  psimg2 VARCHAR(255) NOT NULL COMMENT '인물썸네일2', -- 인물썸네일2
  psnm   VARCHAR(50)  NOT NULL COMMENT '인물명', -- 인물명
  psjob  VARCHAR(100) NOT NULL COMMENT '인물직업', -- 인물직업
  psdsc  TEXT         NOT NULL COMMENT '인물설명' -- 인물설명
)
COMMENT '인물';

-- 인물
ALTER TABLE PERSON
  ADD CONSTRAINT PK_PERSON -- 인물 기본키
    PRIMARY KEY (
      cono -- 인물일련번호
    );

-- 회원
CREATE TABLE MEMBS (
  mno   INTEGER         NOT NULL COMMENT '회원일련번호', -- 회원일련번호
  name  VARCHAR(50)     NULL     COMMENT '이름', -- 이름
  age   INTEGER         NULL     COMMENT '나이', -- 나이
  email VARCHAR(40)     NULL     COMMENT '이메일', -- 이메일
  pwd   VARCHAR(50)     NULL     COMMENT '비밀번호', -- 비밀번호
  mimg  VARBINARY(1000) NULL     COMMENT '프로필사진' -- 프로필사진
)
COMMENT '회원';

-- 회원
ALTER TABLE MEMBS
  ADD CONSTRAINT PK_MEMBS -- 회원 기본키
    PRIMARY KEY (
      mno -- 회원일련번호
    );

-- 회원 유니크 인덱스
CREATE UNIQUE INDEX UIX_MEMBS
  ON MEMBS ( -- 회원
    email ASC -- 이메일
  );

ALTER TABLE MEMBS
  MODIFY COLUMN mno INTEGER NOT NULL AUTO_INCREMENT COMMENT '회원일련번호';

-- 학생
CREATE TABLE MENTEE (
  sno INTEGER NOT NULL COMMENT '학생일련번호' -- 학생일련번호
)
COMMENT '학생';

-- 학생
ALTER TABLE MENTEE
  ADD CONSTRAINT PK_MENTEE -- 학생 기본키
    PRIMARY KEY (
      sno -- 학생일련번호
    );

-- 질의응답
CREATE TABLE QNA (
  cono INTEGER  NOT NULL COMMENT '설계도일련번호', -- 설계도일련번호
  sno  INTEGER  NOT NULL COMMENT '학생일련번호', -- 학생일련번호
  sdat DATETIME NULL     COMMENT '학생확인일시', -- 학생확인일시
  mdat DATETIME NULL     COMMENT '멘토확인일시' -- 멘토확인일시
)
COMMENT '질의응답';

-- 질의응답
ALTER TABLE QNA
  ADD CONSTRAINT PK_QNA -- 질의응답 기본키
    PRIMARY KEY (
      cono, -- 설계도일련번호
      sno   -- 학생일련번호
    );

-- 좋아요
CREATE TABLE LKLST (
  cono INTEGER NOT NULL COMMENT '콘텐츠일련번호', -- 콘텐츠일련번호
  sno  INTEGER NOT NULL COMMENT '학생일련번호' -- 학생일련번호
)
COMMENT '좋아요';

-- 좋아요
ALTER TABLE LKLST
  ADD CONSTRAINT PK_LKLST -- 좋아요 기본키
    PRIMARY KEY (
      cono, -- 콘텐츠일련번호
      sno   -- 학생일련번호
    );

-- 적성검사결과
CREATE TABLE RESULT (
  reno INTEGER      NOT NULL COMMENT '검사결과일련번호', -- 검사결과일련번호
  sno  INTEGER      NOT NULL COMMENT '학생일련번호', -- 학생일련번호
  type VARCHAR(50)  NOT NULL COMMENT '적성검사종류', -- 적성검사종류
  rer  VARCHAR(100) NOT NULL COMMENT '검사결과' -- 검사결과
)
COMMENT '적성검사결과';

-- 적성검사결과
ALTER TABLE RESULT
  ADD CONSTRAINT PK_RESULT -- 적성검사결과 기본키
    PRIMARY KEY (
      reno -- 검사결과일련번호
    );

ALTER TABLE RESULT
  MODIFY COLUMN reno INTEGER NOT NULL AUTO_INCREMENT COMMENT '검사결과일련번호';

-- 콘텐츠주제
CREATE TABLE COPIC (
  tno  INTEGER NOT NULL COMMENT '주제번호', -- 주제번호
  cono INTEGER NOT NULL COMMENT '콘텐츠일련번호' -- 콘텐츠일련번호
)
COMMENT '콘텐츠주제';

-- 콘텐츠주제
ALTER TABLE COPIC
  ADD CONSTRAINT PK_COPIC -- 콘텐츠주제 기본키
    PRIMARY KEY (
      tno,  -- 주제번호
      cono  -- 콘텐츠일련번호
    );

-- 추천주제
CREATE TABLE SNATR (
  tno  INTEGER NOT NULL COMMENT '주제번호', -- 주제번호
  reno INTEGER NOT NULL COMMENT '검사결과일련번호' -- 검사결과일련번호
)
COMMENT '추천주제';

-- 추천주제
ALTER TABLE SNATR
  ADD CONSTRAINT PK_SNATR -- 추천주제 기본키
    PRIMARY KEY (
      tno,  -- 주제번호
      reno  -- 검사결과일련번호
    );

-- 대화내용
ALTER TABLE MESSG
  ADD CONSTRAINT FK_QNA_TO_MESSG -- 질의응답 -> 대화내용
    FOREIGN KEY (
      cono, -- 설계도일련번호
      sno   -- 학생일련번호
    )
    REFERENCES NEW_SCHEMA.QNA ( -- 질의응답
      cono, -- 설계도일련번호
      sno   -- 학생일련번호
    );

-- 멘토
ALTER TABLE MENTO
  ADD CONSTRAINT FK_MEMBS_TO_MENTO -- 회원 -> 멘토
    FOREIGN KEY (
      eno -- 멘토일련번호
    )
    REFERENCES MEMBS ( -- 회원
      mno -- 회원일련번호
    );

-- 영상
ALTER TABLE VIDEO
  ADD CONSTRAINT FK_CONTENTS_TO_VIDEO -- 콘텐츠헤더 -> 영상
    FOREIGN KEY (
      cono -- 영상일련번호
    )
    REFERENCES CONTENTS ( -- 콘텐츠헤더
      cono -- 콘텐츠일련번호
    );

-- 직업
ALTER TABLE JOB
  ADD CONSTRAINT FK_CONTENTS_TO_JOB -- 콘텐츠헤더 -> 직업
    FOREIGN KEY (
      cono -- 직업일련번호
    )
    REFERENCES CONTENTS ( -- 콘텐츠헤더
      cono -- 콘텐츠일련번호
    );

-- 설계도
ALTER TABLE PLAN
  ADD CONSTRAINT FK_CONTENTS_TO_PLAN -- 콘텐츠헤더 -> 설계도
    FOREIGN KEY (
      cono -- 설계도일련번호
    )
    REFERENCES CONTENTS ( -- 콘텐츠헤더
      cono -- 콘텐츠일련번호
    );

-- 설계도
ALTER TABLE PLAN
  ADD CONSTRAINT FK_MENTO_TO_PLAN -- 멘토 -> 설계도
    FOREIGN KEY (
      eno -- 멘토일련번호
    )
    REFERENCES MENTO ( -- 멘토
      eno -- 멘토일련번호
    );

-- 인물
ALTER TABLE PERSON
  ADD CONSTRAINT FK_CONTENTS_TO_PERSON -- 콘텐츠헤더 -> 인물
    FOREIGN KEY (
      cono -- 인물일련번호
    )
    REFERENCES CONTENTS ( -- 콘텐츠헤더
      cono -- 콘텐츠일련번호
    );

-- 학생
ALTER TABLE MENTEE
  ADD CONSTRAINT FK_MEMBS_TO_MENTEE -- 회원 -> 학생
    FOREIGN KEY (
      sno -- 학생일련번호
    )
    REFERENCES MEMBS ( -- 회원
      mno -- 회원일련번호
    );

-- 질의응답
ALTER TABLE QNA
  ADD CONSTRAINT FK_PLAN_TO_QNA -- 설계도 -> 질의응답
    FOREIGN KEY (
      cono -- 설계도일련번호
    )
    REFERENCES PLAN ( -- 설계도
      cono -- 설계도일련번호
    );

-- 질의응답
ALTER TABLE QNA
  ADD CONSTRAINT FK_MENTEE_TO_QNA -- 학생 -> 질의응답
    FOREIGN KEY (
      sno -- 학생일련번호
    )
    REFERENCES MENTEE ( -- 학생
      sno -- 학생일련번호
    );

-- 좋아요
ALTER TABLE LKLST
  ADD CONSTRAINT FK_CONTENTS_TO_LKLST -- 콘텐츠헤더 -> 좋아요
    FOREIGN KEY (
      cono -- 콘텐츠일련번호
    )
    REFERENCES CONTENTS ( -- 콘텐츠헤더
      cono -- 콘텐츠일련번호
    );

-- 좋아요
ALTER TABLE LKLST
  ADD CONSTRAINT FK_MENTEE_TO_LKLST -- 학생 -> 좋아요
    FOREIGN KEY (
      sno -- 학생일련번호
    )
    REFERENCES MENTEE ( -- 학생
      sno -- 학생일련번호
    );

-- 적성검사결과
ALTER TABLE RESULT
  ADD CONSTRAINT FK_MENTEE_TO_RESULT -- 학생 -> 적성검사결과
    FOREIGN KEY (
      sno -- 학생일련번호
    )
    REFERENCES MENTEE ( -- 학생
      sno -- 학생일련번호
    );

-- 콘텐츠주제
ALTER TABLE COPIC
  ADD CONSTRAINT FK_TOPIC_TO_COPIC -- 주제 -> 콘텐츠주제
    FOREIGN KEY (
      tno -- 주제번호
    )
    REFERENCES TOPIC ( -- 주제
      tno -- 주제번호
    );

-- 콘텐츠주제
ALTER TABLE COPIC
  ADD CONSTRAINT FK_CONTENTS_TO_COPIC -- 콘텐츠헤더 -> 콘텐츠주제
    FOREIGN KEY (
      cono -- 콘텐츠일련번호
    )
    REFERENCES CONTENTS ( -- 콘텐츠헤더
      cono -- 콘텐츠일련번호
    );

-- 추천주제
ALTER TABLE SNATR
  ADD CONSTRAINT FK_RESULT_TO_SNATR -- 적성검사결과 -> 추천주제
    FOREIGN KEY (
      reno -- 검사결과일련번호
    )
    REFERENCES RESULT ( -- 적성검사결과
      reno -- 검사결과일련번호
    );

-- 추천주제
ALTER TABLE SNATR
  ADD CONSTRAINT FK_TOPIC_TO_SNATR -- 주제 -> 추천주제
    FOREIGN KEY (
      tno -- 주제번호
    )
    REFERENCES TOPIC ( -- 주제
      tno -- 주제번호
    );
    
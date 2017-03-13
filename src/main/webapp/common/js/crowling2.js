var mysql = require('mysql');
var request = require("request");  
var cheerio = require("cheerio");  
var url = "https://www.ted.com/talks?language=ko&sort=newest&topics%5B%5D=astronomy";
/*https://www.ted.com/talks?language=ko&sort=newest&topics%5B%5D=astronomy
   https://www.ted.com/talks?language=ko&sort=newest&topics%5B%5D=biotech
      https://www.ted.com/talks?language=ko&sort=newest&topics%5B%5D=finance
*/
var dbConnection = mysql.createConnection({   
	host: 'localhost', 
	user: 'java89',   
	password: '1111',   
	database: 'sdb' 
});

function Ted() {
	this.cono = 0;
	this.count = 0;
	this.crtitle = new Array(); 
	this.anker = new Array();
	this.thumImg = new Array();
	this.author = new Array();
	this.vodsc = new Array(); 
	this.simg = new Array(); 
	this.spnm = new Array(); 
	this.spdsc = new Array();
	this.posted = new Array();
}

Ted.prototype.addCrTitile = function(title) {
	this.crtitle[this.count++] = title;
};
Ted.prototype.addAnker = function(anker) {
	this.anker[this.count++] = anker;
};
Ted.prototype.addThumImg = function(thumImg) {
	this.thumImg[this.count++] = thumImg;
};
Ted.prototype.addAuthor = function(author) {
	this.author[this.count++] = author;
};
Ted.prototype.addVodsc = function(vodsc) {
	this.vodsc[this.count++] = vodsc;
};
Ted.prototype.addSimg = function(simg) {
	this.simg[this.count++] = simg;
};
Ted.prototype.addSpnm = function(spnm) {
	this.spnm[this.count++] = spnm;
};
Ted.prototype.addSpdsc = function(spdsc) {
	this.spdsc[this.count++] = spdsc;
};
Ted.prototype.addPosted = function(posted) {
	this.posted[this.count++] = posted;
};


request(url, function(error, response, html){
       if (error) {return conole.log(error)};
   
       var ted = new Ted();
       
       var a = cheerio.load(html);
       
       a('div.media__message h4.h9').each(function(){ // 제목
          ted.addCrTitle(a(this).text().replace(/\n/g, ""));
       });
       console.log(crtitle);
       count= 0;
       a('div.media__image').each(function(){ // 영상 넘어가는 주소
    	   ted.addAnker("https://www.ted.com" + a(this).children("a").attr("href"));
       });
       count= 0;
       a('img.thumb__image').each(function(){ // 비디오 썸네일
          ted.addThumImg(a(this).attr("src"));
       });
       count= 0;
       a('div.media__message h4.h12').each(function(){ // speaker 이름
          ted.addAuthor(a(this).text());
       });
       count= 0;
       a('div.media__message .meta__item .meta__val').each(function(){ // 날짜
          post = a(this).text().replace(/\n/g, "").split(" ");
          switch(post[0]) {
          case "Jan": post[0] = "0"+1; break;
          case "Feb": post[0] = "0"+2; break;
          case "Mar": post[0] = "0"+3; break;
          case "Apr": post[0] = "0"+4; break;
          case "May": post[0] = "0"+5; break;
          case "Jun": post[0] = "0"+6; break;
          case "Jul": post[0] = "0"+7; break;
          case "Aug": post[0] = "0"+8; break;
          case "Sep": post[0] = "0"+9; break;
          case "Oct": post[0] = 10; break;
          case "Nov": post[0] = 11; break;
          case "Dec": post[0] = 12; break;
          }
          ted.addPosted(post[1] + post[0]);
        });

		count= 0;
		
		dbConnection.query(
			  'select cono from contents ORDER BY cono desc;', 
			  function(err, rows, fields) { // 서버에서 결과를 받았을 때 호출되는 함수
				  // connection.query () 을 실행하고 결과가 나온다음 이 function을 실행해라.
				  if (err) throw err;
				  
					cono = rows[0].cono;
		});
		
	for (i = 0; anker.length > i; i++) {
		  url = anker[i]; 
		  crowl(ted); 
		}
});

function crowl(ted) {
	request(url, function(error, response, html){  
	   if (error) {return console.log(error)};
	   
	   var a = cheerio.load(html);
	   
	   ted.addVodsc(a('p.talk-description').text().replace(/\n/g, "").replace(/\r/g, "")); // 비디오 설명.
	   ted.addSimg(a('img.thumb__image').attr("src").replace("?", "")); // 스피커 이미지
	   ted.addSpnm(a('a.talk-speaker__link').attr("href"));// 스피커 이름
	   ted.addSpdsc(a('div.talk-speaker__description').text()); // 스피커 직업
	   
	   dbConnection.query("insert into contents(type) values('video')",
			   function(err, rows, fields) {
		   console.log(rows);
		   test();
	   });
	   function test() {
		   dbConnection.query("insert into video(cono, kotl, entl, voimg, vodsc, spnm, sjob, simg, posted) values(?,?,?,?,?,?,?,?,?)", 
				   [++cono, crtitle[count], anker[count], thumImg[count], vodsc[count], spnm[count], spdsc[count], simg[count], posted[count]],
				   function (err, rows, fields) {
			   			console.log(err, rows, cono);
			});
	   };
	});
}
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
	database: 'dreamtree' 
});

var cono = 0;
var count = 0;
var crtitle = new Array(); 
var anker = new Array();
var thumImg = new Array();
var author = new Array();
var vodsc = new Array(); 
var simg = new Array(); 
var spnm = new Array(); 
var spdsc = new Array();
var posted = new Array();

request(url, function(error, response, html){
       if (error) {return conole.log(error)};
   
       var a = cheerio.load(html);
       a('div.media__message h4.h9').each(function(){ // 제목
          crtitle[count++] = a(this).text().replace(/\n/g, "");
       });
       console.log(crtitle);
       count= 0;
       a('div.media__image').each(function(){ // 영상 넘어가는 주소
          anker[count++] = "https://www.ted.com" + a(this).children("a").attr("href");
       });
       count= 0;
       a('img.thumb__image').each(function(){ // 비디오 썸네일
          thumImg[count++] = a(this).attr("src");
       });
       count= 0;
       a('div.media__message h4.h12').each(function(){ // speaker 이름
          author[count++] = a(this).text();
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
          posted[count++] = post[1] + post[0];
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
		  crowl(); 
		}
});

function crowl() {
	request(url, function(error, response, html){  
	   if (error) {return console.log(error)};
	   
	   count++
	   var a = cheerio.load(html);
	   
	   vodsc[count] = a('p.talk-description').text().replace(/\n/g, "").replace(/\r/g, "");
	   simg[count] = a('img.thumb__image').attr("src").replace("?", "");
	   spnm[count] = a('a.talk-speaker__link').attr("href");
	   spdsc[count] = a('div.talk-speaker__description').text(); // 스피커 직업
	   
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
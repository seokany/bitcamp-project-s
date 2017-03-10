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

request(url, function(error, response, html){
       if (error) {throw error};
   
       var a = cheerio.load(html);

       var count = 0;
       var crtitle = new Array(); 
       var anker = new Array();
       var thumImg = new Array();
       var author = new Array();    
       var vodsc = new Array(); 
       var simg = new Array(); 
       var spnm = new Array(); 
       var spdsc = new Array();

       a('div.media__message h4.h9').each(function(){ // 제목
          crtitle[count++] = a(this).text().replace(/\n/g, "").replace(/\r/g, "");
       });
       count= 0;
       a('div.media__image').each(function(){ // 제목
          anker[count++] = "https://www.ted.com" + a(this).children("a").attr("href");
//          console.log(anker[count-1]);
       });
       count= 0;
       a('img.thumb__image').each(function(){ // 제목
          thumImg[count++] = a(this).attr("src");
       });
       count= 0;
       a('div.media__message h4.h12').each(function(){ // 제목
          author[count++] = a(this).text();
       });
       
       count= 0;
       for (i = 0; anker.length > i; i++) {
    	   url = anker[i]; 
    	   crowl(); 
       }
       
       var a;
       var cono = 6; 
       function crowl() {
    	   request(url, function(error, response, html){  
    		   if (error) {throw error};
    		   
    		   count++
    		   a = cheerio.load(html);
    		   
    		   vodsc[count] = a('p.talk-description').text().replace(/\n/g, "").replace(/\r/g, "");
    		   simg[count] = a('img.thumb__image').attr("src").replace("?", "");
    		   spnm[count] = a('a.talk-speaker__link').attr("href");
    		   spdsc[count] = a('div.talk-speaker__description').text();
//    		   console.log(count + "in " + "spdsc " + spdsc[count] + "  vodsc " + vodsc[count]);
    		   
			   dbConnection.query("insert into video(cono, kotl, entl, voimg, vodsc, spnm, sjob, simg) values(?,?,?,?,?,?,?,?)", 
					   [cono++, crtitle[count], anker[count], thumImg[count], vodsc[count], spnm[count], spdsc[count], simg[count]], 
					   function (err, rows, fields) {
				   			console.log(rows);
			   			});
	   });
   }
});
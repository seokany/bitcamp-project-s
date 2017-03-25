function chartCreater(i,e,n,s,f,t,p,j) {
	var chart = AmCharts.makeChart("chartdiv", {
		  "type": "serial",
		  "theme": "chalk",
		  "rotate": true,
		  "marginBottom": 50,
		  "dataProvider": [{
		    "age": "extraverted",
		    "left": e,
		    "right": i
		  }, {
	      "age": "sensing",
	      "left": s,
	      "right": n
		  }, {
	      "age": "thinking",
	      "left": t,
	      "right": f
	    }, {
	      "age": "judging",
	      "left": j,
	      "right": p
	    }],
		  "startDuration": 1,
		  "graphs": [{
		    "fillAlphas": 10,
		    "lineAlpha": 2,
		    "type": "column",
		    "valueField": "left",
		    "title": "left",
		    "labelText": "[[value]]",
		    "clustered": false,
		    "labelFunction": function(item) {
		      return Math.abs(item.values.value);
		    },
		    "balloonFunction": function(item) {
		      return item.category + ": " + Math.abs(item.values.value) + "%";
		    }
		  }, {
		    "fillAlphas": 10,
		    "lineAlpha": 2,
		    "type": "column",
		    "valueField": "right",
		    "title": "right",
		    "labelText": "[[value]]",
		    "clustered": false,
		    "labelFunction": function(item) {
		      return Math.abs(item.values.value);
		    },
		    "balloonFunction": function(item) {
		      return item.category + ": " + Math.abs(item.values.value) + "%";
		    }
		  }],
		  "categoryField": "age",
		  "categoryAxis": {
		    "gridPosition": "start",
		    "gridAlpha": 0.2,
		    "axisAlpha": 0
		  },
		  "valueAxes": [{
		    "gridAlpha": 0,
		    "ignoreAxisWidth": true/* ,
		    "labelFunction": function(value) {
		      return Math.abs(value) + '%';
		    } */,
		    "guides": [{
		      "value": 0,
		      "lineAlpha": 0.2
		    }]
		  }],
		  "balloon": {
		    "fixedPosition": false
		  },
		  "chartCursor": {
		    "valueBalloonsEnabled": false,
		    "cursorAlpha": 0.05,
		    "fullWidth": true
		  },
		  "allLabels": [{
		    "text": "",
		    "x": "28%",
		    "y": "97%",
		    "bold": true,
		    "align": "middle"
		  }, {
		    "text": "",
		    "x": "75%",
		    "y": "97%",
		    "bold": true,
		    "align": "middle"
		  }],
		 "export": {
		    "enabled": false
		  }
		});
};





 //var julian[][]
 
 function vitreset(){
	document.getElementById("vit_form").reset();
	document.getElementById("result").innerText="";
 }
 /*
 vitcalc()
 takes amount of pills in the bottle and divides by how many to take per day
 to find how many days there are actually before the written expiry date
 takes expiry date and subtracts those days
 displays in result area
 */
 function vitcalc(){
	var expdate = new Date(document.getElementById("vit_expdate").value);
	var amt = document.getElementById("vit_pills").value/document.getElementById("vit_perday").value;
	
	var amttime = amt*86400000;
	var newdate = new Date(expdate.getTime()-amttime);
	document.getElementById("result").innerText="YYYY-MM-DD: "+newdate.getUTCFullYear()+"-"+(newdate.getUTCMonth()+1)+"-"+newdate.getUTCDate();
	//note javascript dates are 1-31 for days but 0-11 for months
	//why
	
	
 }
 function lotreset(){
	document.getElementById("result").innerText="inlotreset";
	document.getElementById("lot_form").reset();
 }
 function lotcalc(){
	document.getElementById("result").innerText="in lotcalc";
	var format = document.getElementById("lot_format").value;
	var lotnum = document.getElementById("lot_num").value;
	var months = document.getElementById("lot_months").value;
	var monthsms = months*86400000;
	var mandate = new Date();
	var expdate = new Date();
	var year, month, day;
	
	switch(format){
		case 'YYDDD':
			year=lotnum.substring(0,2);
			day=lotnum.substring(3);
			document.getElementById("result").innerText="year: "+year+". day: "+day;
			break;
		
		default:
			document.getElementById("result").innerText="x";
			
	}
	
 }}

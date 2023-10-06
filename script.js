 //var julian[][]
 
 function vitreset(){
	document.getElementById("vit_form").reset();
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
	var newdate = new Date();
	newdate.setDate(expdate.getUTCDate()+amt);
	
	document.getElementById("result").innerHTML="YYYY-MM-DD: "+newdate.getUTCFullYear()+"-"+(newdate.getUTCMonth()+1)+"-"+newdate.getUTCDate();
	//note javascript dates are 1-31 for days but 0-11 for months
	//why
	
	
 }
 function lotreset(){
	document.getElementById("lot_form").reset();
 }
 function lotcalc(){
	var format = document.getElementById("lot_format").value;
	var months = document.getElementById("lot_months").value;
	
	switch(format){
		case(MMDDYY):
			
	}
	
 }

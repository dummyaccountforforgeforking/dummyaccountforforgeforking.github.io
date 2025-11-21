function timeStampToDate(timeStamp_value) {
var theDate = new Date(timeStamp_value);
dateString = theDate.toISOString();
return dateString;
}

function Moon(type) {
	if (type == "Gold") {
		var var29 = parseInt(document.getElementById("moonTime").value);
		var var28 = math.floor((var29 - (-1800)) / 10800) * 10800;
		var var27 = new PCGRandom(var28).nextInt(1,100);
		while (var27 > 5) {
			var28 = Math.floor((var29 - (-1800)) / 10800) * 10800;
			var27 = new PCGRandom(var28).nextInt(1,100);
			if (var27 <= 5) {
				console.log(var27);
				console.log(var29);
				console.log(timeStampToDate(var29));
      }
			var29 = var29 + 10800;
    }
  }
	if (type == "Blood") {
		var var29 = parseInt(document.getElementById("moonTime").value);
		var var28 = Math.floor((var29 - (-1800)) / 10800) * 10800;
		var var27 = new PCGRandom(var28).nextInt(1,100);
		while (var27 > 15) {
			var28 = Math.floor((var29 - (-1800)) / 10800) * 10800;
			var27 = new PCGRandom(var28).nextInt(1,100);
			if (var27 <= 15) {
				print(var27);
				print(var29);
				print(os.date("%a %b %d %I:%M:%S %p %Y", var29));
      }
			var29 = var29 + 10800;
    }
  }
}
document.getElementById("calcButtonBlood").addEventListener("click", Moon("Blood"));
document.getElementById("calcButtonGold").addEventListener("click", Moon("Gold"));

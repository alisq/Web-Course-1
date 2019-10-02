


var students = ["Lina Akkawi", "Khes Bowen", "Karlo Calayag", "Sophia Choi", "Adrienne Dacoco", "Yasmin Emery", "Katherine Garnett", "Oleg Gorlenko", "Jaywhy Kim", "Hwa Koo Seung", "Siwoo Lee", "Justine Ly", "Andrea Mejia Neri", "Kyle Miron", "Alleesa Paragas", "Oanh Pham", "Sabrina Singh", "Su Tarhan", "Jillian Taverner", "Allison Truong", "Cole Wielgosz", "Christine Xia"]
var actions = ["Random", "Click", "Hover", "Show/Hide", "Cursor", "Scroll", "Type", "Drag", "Random", "Click", "Hover", "Show/Hide", "Cursor", "Scroll", "Type", "Drag", "Scroll", "Type", "Cursor", "Hover", "Click", "Show/Hide", "Random", "Drag", "Scroll"]


for (var i=0; i<students.length;i++) {

	$t = "<div class='listing'><div class='s'>"+students[i]+"</div><div class='a'>"+actions[i]+"</div></div>";

	$("body").append($t);


}



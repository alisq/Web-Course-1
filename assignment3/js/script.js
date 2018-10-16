


var students = ["Donya Aref", "Matthew Beaubien", "Abbey Chong", "Tess Dunn", "Justin Francisco", "Rachel Gilbert-O'Neil", "Andrea Gnanatheepan", "Christina Hayes", "Heesun Jung", "Lucia Kim", "Helen Kurnevich", "Connie Le", "Nhan Le", "Yubin Lee", "Jodie Leung", "Michelle Lu", "Joshua McKenna", "Jin ParkJoong", "Sam Rasmussen", "Minju Roh", "Lucy Son", "Nathaniel Tambakis", "Rebecca Wilkinson", "Justin Yoon", "Claire Zhang", "Yubai Zhang"]
var actions = ["Random", "Click", "Hover", "Show/Hide", "Cursor", "Scroll", "Type", "Drag", "Random", "Click", "Hover", "Show/Hide", "Cursor", "Scroll", "Type", "Drag", "Drag", "Scroll", "Type", "Cursor", "Hover", "Click", "Show/Hide", "Random", "Drag", "Scroll"]


for (var i=0; i<students.length;i++) {

	$t = "<div class='listing'><div class='s'>"+students[i]+"</div><div class='a'>"+actions[i]+"</div></div>";

	$("body").append($t);


}
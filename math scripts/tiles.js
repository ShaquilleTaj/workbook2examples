var roomlength = 24;
var roomheight = 12;
var roomarea = roomlength * roomheight;
var extra = 1.1;
var boxes = (roomarea / 12) * extra;
var totalboxes = Math.ceil(boxes);
console.log(totalboxes);
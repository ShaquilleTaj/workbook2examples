var roomlength = 24;
var roomheight = 12;
var roomarea = roomlength * roomheight;
var boxes = (roomarea / 12) * 1.1;
var totalboxes = Math.ceil(boxes);
console.log(totalboxes);
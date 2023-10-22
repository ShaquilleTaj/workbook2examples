var studentName = "Betty";
var studentMajor = "ENG";
function lookupMajorInfo(majorCode) {
  switch (majorCode) {
    case "Biol":
      return { name: "Biology", office: "Science bldg" };
    case "CSCI":
      return { name: "Computer Science", office: "Sheppard Hall" };
    case "ENG":
      return { name: "English", office: "Kerr Hall" };
    case "HIST":
      return { name: "History", office: "Kerr Hall" };
    case "MKT":
      return { name: "Marketing", office: "Westly Hall" };
    default:
      return { name: "<unknown>", office: "" };
  }
}


var majorInfo = lookupMajorInfo(studentMajor);


console.log("Student: " + studentName);
console.log("Major: " + majorInfo.name);
console.log("Advising location: " + (majorInfo.office || "N/A"));







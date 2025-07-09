// flat an Object

let obj = {
  Company: "GeeksforGeeks",
  Address: "Noida",
  contact: +91 - 999999999,
  mentor: {
    HTML: "GFG",
    CSS: "GFG",
    JavaScript: "GFG",
  },
};

//OutPut
// {
//   Company: 'GeeksforGeeks',
//   Address: 'Noida',
//   contact: -999999908,
//   'mentor.HTML': 'GFG',
//   'mentor.CSS': 'GFG',
//   'mentor.JavaScript': 'GFG'
// }

function flattenObj(obj, mainKey) {
  let resultObj = {};
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      resultObj = { ...resultObj, ...flattenObj(obj[key], key) };
    } else {
      resultObj[`${mainKey}${mainKey ? "." : ""}${key}`] = obj[key];
    }
  }
  return resultObj;
}

console.log("flatten object", flattenObj(obj, ""));

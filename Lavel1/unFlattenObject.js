// flat an Object

//output

// let obj = {
//   Company: "GeeksforGeeks",
//   Address: "Noida",
//   contact: +91 - 999999999,
//   mentor: {
//     HTML: "GFG",
//     CSS: "GFG",
//     JavaScript: "GFG",
//   },
// };

//input
let obj = {
  Company: "GeeksforGeeks",
  Address: "Noida",
  contact: 999999908,
  "mentor.HTML": "GFG",
  "mentor.CSS": "GFG",
  "mentor.JavaScript": "GFG",
};

function flattenObj(obj) {
  let resultObj = {};
  for (let key in obj) {
    const keys = key.split("."); //['mentor', 'HTML']
    if (keys.length > 1) {
      const [firstKey, ...restKeys] = keys; //['mentor', 'HTML']
      debugger;
      const newObj = flattenObj({ [restKeys.join(".")]: obj[key] });
      if (resultObj[firstKey]) {
        resultObj[firstKey] = { ...resultObj[firstKey], ...newObj };
      } else {
        resultObj[firstKey] = newObj;
      }
    } else {
      resultObj[key] = obj[key];
    }
  }
  return resultObj;
}

console.log("nested Object using flatten object", flattenObj(obj));

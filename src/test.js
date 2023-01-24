// const axios = require("axios");
// const XLSX = require("xlsx");
// const options = {
//   url: "https://firebasestorage.googleapis.com/v0/b/sequraise.appspot.com/o/excel%2FData.xlsx?alt=media&token=ae10e1ec-92b5-4e71-9d92-8360d240f31d",
//   responseType: "arraybuffer",
// };

// axios(options)
//   .then((axiosResponse) => {
//     const workbook = XLSX.read(axiosResponse.data);
//     let worksheets = workbook.SheetNames.map((sheetName) => {
//       return {
//         sheetName,
//         data: XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]),
//       };
//     });
//     console.log("json:\n", JSON.stringify(worksheets), "\n\n");
//   })
//   .catch((e) => {
//     console.log(e);
//   });

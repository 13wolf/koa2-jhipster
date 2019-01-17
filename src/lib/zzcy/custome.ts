import utils from "./axios";
const getJson = () => {
  return utils.get("/").then(result => {
    // tslint:disable-next-line: no-console
    console.log(result);
  }).catch(err => {
    // tslint:disable-next-line: no-console
    console.error(err);
  });
};
export default getJson;

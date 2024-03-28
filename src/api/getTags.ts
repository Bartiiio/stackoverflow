export async function getTags(pageSize: number) {
   console.log(pageSize);
   const URL: string = `https://api.stackexchange.com/2.3/tags?pagesize=${pageSize}&order=desc&sort=popular&site=stackoverflow`;
   const dataTags = await fetch(URL);
   const dataJson = await dataTags.json();

   return dataJson;
}

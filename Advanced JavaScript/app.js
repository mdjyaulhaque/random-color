let url = "https://catfact.ninja/fact";

// async function getFacts() {
//     try {

   
//     let res = await fetch(url);
//     let data = await res.json();
//     console.log(data.fact);
//      }catch (e) {
//     console.log("error - ", e);
// }
// console.log("bye");
// }

async function getFacts(){
    try{
        let res = await axios.get(url);
        console.log(res);
    }catch(e){
        console.log("error - ", e);
    }
}
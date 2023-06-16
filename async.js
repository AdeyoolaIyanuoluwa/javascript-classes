// let Myname = "Kunle"
// const test = ()=>{
//     setTimeout(() => {
//         Myname = "Sola"
//     }, 3000);
//     console.log(Myname);
// }
// const delay = ()=>{
//     setTimeout(() => {
//         Myname = "Sola"
//     }, 3000);
// }


const endpoint = "https://jsonplaceholder.typicode.com/users"
const test = async()=>{
    let response = await fetch(endpoint)
    let jsonResponse = await response.json()
    console.log(jsonResponse)
    jsonResponse.map((item)=>{
        // console.log(item)
        disp.innerHTML +=`
        
        `
    } )
}
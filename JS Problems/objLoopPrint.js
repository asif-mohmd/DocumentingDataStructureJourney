const obj = {
    name : "asif",
    age : 10,
    place : "Kochi"
}

for(const key in obj){
    if(obj[key]){
        console.log(key+" : "+obj[key])
    }
}
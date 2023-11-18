const set = new Set([1,2,3,4])

set.add(5)


console.log(set.has(4))

for(const item of set){
    console.log(item)
}
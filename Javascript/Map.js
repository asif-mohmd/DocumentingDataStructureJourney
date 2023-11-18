const map = new Map([['a',1], ['b',2]])


map.set('c',3)
for( const [key,value] of map){
    console.log(`${key}:${value}`)
}
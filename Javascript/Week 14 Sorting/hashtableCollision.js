class HashTable{
    constructor(size){
        this.table = new Array(size)
        this.size = size
    }

    hash(key){
        let total = 0
        for(let i=0;i<key.length;i++){
            total += key.charCodeAt(i)
        }
        return total % this.size
    }

    set(key,value){
        const index = this.hash(key)

        const bucket = this.table[index]

        if(!bucket){
            this.table[index] = [[key,value]]
        }else{
            const sameKeyValue = bucket.find(item => item[0] === key)
            if(sameKeyValue){
                sameKeyValue[i] = value
            }else{
                bucket.push([key,value])
            }
        }
       
    }

    get(key){
        const index = this.hash(key)

        const bucket = this.table[index]

        if(bucket){
            const sameKeyValue = bucket.find(item => item[0] === key)
            if(sameKeyValue){
                return sameKeyValue[1]
            }
        }

        return undefined
       
    }

    remove(key){
        const index = this.hash(key)

        const bucket = this.table[index]
        if(bucket){
            const sameKeyValue = bucket.find(item => item[0] == key)
            if(sameKeyValue){
                bucket.splice(bucket.indexOf(sameKeyValue),1)
            }
        }
        return undefined
       
    }

    display(){

        for(let i=0;i<this.table.length;i++){
            if(this.table[i]){
                console.log(i,this.table[i])
            }
        }
    }

    
}


const table = new HashTable(50)


table.set("name","asif")
table.set("mane","asiiiif")
table.set("age",45)
console.log(table.get("mane"))

table.display()

table.remove("name")
table.display()
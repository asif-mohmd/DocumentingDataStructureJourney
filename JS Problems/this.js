const obj = {
    a : 10,
    x: function (){
        console.log(this)
    }
}

obj.x()

//inside a function

const obj2 = {
    name: "asif",
    x: function(){
        // console.log("1:",this)
        const obj3 = {
            name : "jack",
            y: function(){
                console.log("2:",this)
            }

        }
        obj3.y()
    }
}
obj2.x()

// inside arrow functon (it enclosing lexical scope)

const obj3 = {
    name: "asif",
    x: function(){
        // console.log("1:",this)
        const obj4 = {
            name : "jack",
             y : () => {
                console.log("2:",this)
            }
        }
        obj4.y()
    }
}

obj3.x()
'use strict'

class ItemController {
    
    async itemData({request,response})
    {    
        
        response.send([{
            id:"1",
            title:"first product",
            price:"20",
            desciption:"nice product"
        },
        {
            id:"2",
            title:"second product",
            price:"20",
            desciption:"nice product"
        },
        {
            id:"3",
            title:"third product",
            price:"20",
            desciption:"nice product"
        },
        {
            id:"4",
            title:"forth product",
            price:"20",
            desciption:"nice product"
        },
        {
            id:"5",
            title:"fifth product",
            price:"20",
            desciption:"nice product"
        },
        {
            id:"6",
            title:"fifth product",
            price:"20",
            desciption:"nice product"
        },
        {
            id:"7",
            title:"fifth product",
            price:"20",
            desciption:"nice product"
        },
        {
            id:"8",
            title:"fifth product",
            price:"20",
            desciption:"nice product"
        }
    ])
    }

  async item({request , response}){
    let id = request.params.id;
    
    let obj=[{
        id:1,
        title:"first product",
        price:"20",
        desciption:"nice product"
    },
    {
        id:2,
        title:"second product",
        price:"20",
        desciption:"nice product"
    },
    {
        id:3,
        title:"third product",
        price:"20",
        desciption:"nice product"
    },
    {
        id:4,
        title:"forth product",
        price:"20",
        desciption:"nice product"
    },
    {
        id:5,
        title:"fifth product",
        price:"20",
        desciption:"nice product"
    }
]
for(let i in obj)
{
    if(obj[i].id==id)
    {
        response.send(obj[i]);
        return;
    }
    response.send("Item not present");
    
}
  }
}

module.exports = ItemController

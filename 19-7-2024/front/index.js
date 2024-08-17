
function init(){

document.getElementById("jsworld").innerHTML="hello kartik"
}

var product_list=[
    {name: "Apple",desc:"This is apple",price:"1"},
    {name: "Mango",desc:"THis is mango",price:"2"},
]

// function get_product()
// {
//     let row="";
//     for(var i=0;i<product_list.length;i++)
//         {
//             row=row+
//                    `<tr>
//                     <td>${product_list[i].name}</td>
//                     <td>${product_list[i].desc}</td>
//                     <td>${product_list[i].price}</td>
//                 </tr>
//             `
//         }
        
//     return row
// }

function getpro_map()
{   
    
      var rowpro=product_list.map((item,index)=>{                                                                                                                                                                                                                                     
        return `<tr>
                    <td>${item.name}</td>
                   <td>${item.desc}</td>
                   <td>${item.price}</td>
               </tr>`
    })
   
    return rowpro;
}



function initpro()
{
    document.getElementById("prodcut_menu").innerHTML=`
<table border="2">
            <thead>
                <tr>
                    <th>Sr.no</th>
                    <th>Product name</th>
                    <th>Price</th>
                </tr>
            
            </thead>

            <tbody>
            ${getpro_map()}

            </tbody>
        </table>`
}









initpro();

init();
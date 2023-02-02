import Products from "../pages/Products"

import Group from "../pages/ShowsProducts/Group";


export const showsProductRoute=[
    
    {path:'/group/:id', name:"Group", Component:Group},
    {path:'/product/:id', name:"Products", Component:Products},
    
   
  ];
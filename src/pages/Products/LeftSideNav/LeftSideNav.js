import React from 'react';
import  { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [groups, setGroups] = useState([]);
    
    useEffect(() => {
        fetch('groups.json')
            .then(res => res.json())
            .then(data => setGroups(data))
    }, [])
    return (
       <div className='sticky top-0'>
         <div   >
            <div >
            <h1 >Categories:{groups.length}</h1>
            <div>
                
            </div>
            <div  >
                {
                    groups.map(group => <div  key={group.id} >
                        <Link className='flex items-center gap-2 mb-2   ' to='/products'>

                            <div class="avatar">
                                <div class="w-16 rounded">
                                    <img src={group.img} alt="Tailwind-CSS-Avatar-component" />
                                </div>
                            </div>
                            <p>{group.name}</p>
                        </Link>



                    </div>
                    )
                }
            </div>
        </div>
        </div>
       </div>
        // <div >
        //     <h1>Categories:{groups.length}</h1>
        //     <div>
                
        //     </div>
        //     <div >
        //         {
        //             groups.map(group => <div key={group.id} >
        //                 <Link className='flex items-center gap-2   ' to='/products'>

        //                     <div class="avatar">
        //                         <div class="w-16 rounded">
        //                             <img src={group.img} alt="Tailwind-CSS-Avatar-component" />
        //                         </div>
        //                     </div>
        //                     <p>{group.name}</p>
        //                 </Link>



        //             </div>
        //             )
        //         }
        //     </div>
        // </div>

    )
};

export default LeftSideNav;
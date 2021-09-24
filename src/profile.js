import React from 'react' 
const Users=({loading,users})=>{ 
 
    return loading ?( 
    <div id="main"> 
        <img className="loader" src="https://media.giphy.com/media/e1F9EDv5qZWjC/giphy.gif?cid=790b7611e64bea511c6a5a005bdddae10cb992a8fb2f7229&rid=giphy.gif&ct=s"/>   
    </div>
 ): 
    ( 
        <div id="main"> 
            {users.map(user => 
            <div className="project col3"> 
                { 
                    console.log(user) 
                } 
            <div className="profile"> 
                <img src={user.avatar} alt={user.avatar} className="avatar"></img> 
                <h1 className="name">{user.first_name} {user.last_name}</h1> 
                <p className="email"> {user.email}</p> 
                <p>User ID:{user.id}</p> 
                </div> 
            </div> 
    ) 
} 
</div> 
) 
} 
export default Users;
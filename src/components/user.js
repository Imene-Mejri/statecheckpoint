



const user=(props)=>{
    
    return(
        
        <div>
            <h1>hello iam user</h1>
            <br/>
           NAME: {props.name} 
           <br/>
           AGE:{props.age}
           <br/>
           Job:{props.job}
           <br/>
           Bio:{props.Bio}
           <br/>
           pic:<img src="nature.jpg" alt="Nature" class="responsive" src={props.pic}/>
         
            </div>
    )
}
 

export default user;
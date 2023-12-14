export function Validation({FirstName,LastName,Email,Password,Phone},{FN,LN,EL,PD,PN}){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let flag=true
    let err={}
    if(FN){
        if(FirstName==''){
           err.FirstName={status:false,msg:'This field is required'}
           flag=false
        }else if(FirstName.length<4){
            err.FirstName={status:false,msg:'First name must be 4 characters'}
            flag=false
        }else{
            err.FirstName={status:true}
        }
    }
     if(LN){
        console.log(12);
        if(LastName==''){
            err.LastName={status:false,msg:'This field is required'}
            flag=false
         }else if(LastName.length<4){
             err.LastName={status:false,msg:'First name must be 4 characters'}
             flag=false
         }else{
             err.LastName={status:true}
         }
     }
     if(EL){
        if(Email==''){
            err.Email={status:false,msg:'This field is required'}
            flag=false
         }else if(!emailRegex.test(Email)){
            err.Email={status:false,msg:'Enter email format'}
            flag=false
         }
         else{
             err.Email={status:true}
         }
     }
     if(PD){
        if(Password==''){
            err.Password={status:false,msg:'This field is required'}
            flag=false
         }else if(Password.length<6){
             err.Password={status:false,msg:'First name must be 6 characters'}
             flag=false
         }else{
             err.Password={status:true}
         }
     }
     console.log(PN);
     if(PN){
        if(Phone==''){
            err.Phone={status:false,msg:'This field is required'}
            flag=false
         }else if(Phone.length==10){
             err.Phone={status:true}
         }else{
            err.Phone={status:false,msg:'Phone number must be 10 numbers'}
               flag=false
         }
     }
    
return {status:flag,err}
}
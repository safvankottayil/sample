export  function FormValidation({companysize,country,language,demo,demotime,api}) {
    let flag=true
    let err={}
    if(companysize==''){
        flag=false
        err.companysize=false
    }else{
        err.companysize=true
    }
    if(country==''){
        flag=false
        err.country=false
    }else{
        err.country=true
    }
    if(language==''){
        flag=false
        err.language=false
    }else{
        err.language=true
    }
    if(demo==''){
        flag=false
        err.demo=false
    }else{
        err.demo=true
    }
    if(demotime==''){
        flag=false
        err.demotime=false
    }else{
        err.demotime=true
    }
    if(api==''){
        flag=false
        err.api=false
    }else{
        err.api=true
    }
    return {flag,err}
}
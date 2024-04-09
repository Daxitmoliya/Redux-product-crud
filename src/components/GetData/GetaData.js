const GetData = () =>{

    const data = JSON.parse(localStorage.getItem('students'));

    if(data){
        return  data;
    }else{
        return [];
    }


    
}
export default GetData;
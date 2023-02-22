const getUser = async ()=>{
    let response = await fetch("http://locahost:8000/user");
    return await response.json();
}

export default getUser;
function Row({children}){
    // tailwind css 
    // css files (module)
    return (
    <div style={{display:"flex",justifyContent:"center",gap:"20px",alignItems:"center"}}>
        {children}
    </div>)
}

export default Row
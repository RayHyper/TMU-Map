import Card from "./Card"


const HomePage = ()=>{
    return(
        <div className="home-page">
             
            <div className="main-page">
             
            <img className="campus-image" src="./src/assets/maxresdefault.jpg" alt="tmu image" />
            <div className="right-homepage">
            
                <h1>Welcome To TMU Explore</h1>
    
        
                <p>Find your courses, way around campus, food spots and much more!</p>
                <img className="mascot-image" src="./src/assets/mascot.jpg" alt="tmu mascot" />
        
            </div>

           </div>
           <section className="card-section">
                <Card image="./src/assets/food.jpg" title="Foods" info="Cheap" info2="24/7"/>
                <Card image="./src/assets/students.jpg" title="Foods" info="Cheap" info2="24/7"/>
                <Card image="./src/assets/map.png" title="Foods" info="Cheap" info2="24/7"/>
               
           </section>
           
        </div>
         
    )
}


export default HomePage
const Card = (props)=>{
    return(
          <div className="card">
            <div>

            
            <img src={props.image} alt="" />
            </div>
            <div className="card-text">
                  <p>{props.title}</p>
                  <p>{props.info}</p>
                  <p>{props.info2}</p>
                  <div className="card-btn">
                   <a href="#">button</a>
                  </div>
                  
            </div>
          </div>
    )
}

export default Card;
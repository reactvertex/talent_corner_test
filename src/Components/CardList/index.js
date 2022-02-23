import React from "react"
import {CardListComponent} from './styleComponents';

function CardList(props){
    return(
        <CardListComponent>
            <div className="productList">
                <div className="product_name">{props.product}</div>
                <img onClick={()=>props.handleLike(props.id)} style={styles.image} src={props.likeStatus?require("../../Assests/like.jpeg"):require("../../Assests/dislike.jpeg")} />
            </div>
        </CardListComponent>
    )
}
const styles = {
    image:{
        height:"25px",
        width:"25px"
    }

}

export default React.memo(CardList);
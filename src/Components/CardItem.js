import React from "react";
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    Button
} from "reactstrap"

const CardItem = ({product, addItem}) => {
    return(
        <Card className="mt-2 mb-1">
            <CardImg top height="225" width="100%" src={product.smallImage}/>
            <CardBody className="text-center">
                <CardTitle>{product.productName}</CardTitle>
                <CardText>Price: {product.productPrice}$</CardText>
                <Button color="warning" onClick={()=>(
                    addItem(product)
                )}>Add to cart</Button>
            </CardBody>
        </Card>
    )
} 

export default CardItem;
import React from "react"
import {
    ListGroup,
    ListGroupItem,
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Col,
    Row,
    Container
} from "reactstrap"

const Cart = ({ cartItem, removeItem, buyNow }) => {
    let amount = 0;

    cartItem.forEach(item => (
        amount = parseFloat(amount) + parseFloat(item.productPrice)
    ));

    return(
        <Container fluid>
            <h1>Your Cart</h1>
            <ListGroup>
                {cartItem.map(item => (
                    <ListGroupItem key={item.id}>
                        <Row>
                            <Col>
                                <img
                                height={80}
                                src={item.tinyImage}
                                />
                            </Col>
                            <Col className="text-center">
                                <div className="text-primary">
                                    {item.ProductName}
                                </div>
                                <span>price:- {item.productPrice}$</span>
                                <Button
                                color="danger"
                                onClick={()=>(removeItem(item))}
                                >Remove</Button>
                            </Col>
                        </Row>
                    </ListGroupItem>
                ))}
            </ListGroup>
            {/* If everything is empty */}
            {
                cartItem.length >= 1 ? (
                    <Card className="text-center mt-3">
                        <CardHeader>
                            GrandTotal
                        </CardHeader>
                        <CardBody>
                            Your amount for {cartItem.length} product is: {amount}$
                        </CardBody>
                        <CardFooter>
                            <Button color="success" onClick={buyNow}>
                                Buy Now
                            </Button>
                        </CardFooter>
                    </Card>
                ) : (
                    <h1 className="text-warning">Cart is empty</h1>
                )
            }
        </Container>
    )
}

export default Cart
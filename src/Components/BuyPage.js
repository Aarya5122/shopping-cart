import React, { useState, useEffect } from "react"
import Axios from "axios"

import { random, commerce, datatype } from "faker"
import { Container, Col, Row } from "reactstrap"

import CardItem from "./CardItem"

const apiKey = "563492ad6f917000010000016aece4ec706d4ad1be3757ed1c7c68ec"

const url = "https://api.pexels.com/v1/search?query=laptop&per_page=6&page=1"

const localurl= "https://myjson.dit.upm.es/api/bins/do2h"

const BuyPage = ({addItem}) => {
    
    const [product, setProduct] = useState([])

    const fetchPhotos = async() => {

        // const {data} = await Axios.get(localurl)

        const response = await Axios.get(url,{
            headers:{ 
                Authorization: apiKey
                // "Authorization": apiKey
            }
        })

        const {photos} = response.data;

        const allProduct = photos.map(photo => ({
            smallImage: photo.src.medium,
            tinyImage: photo.src.tiny,
            productName: random.word(),
            productPrice: commerce.price(),
            id: datatype.uuid()
        }))

        setProduct(allProduct)
        
    }

    useEffect(()=>{
        fetchPhotos()
    }, [])

    return(
        <Container fluid>
            <h1 className="text-success text-center">
                Buy Page
            </h1>
            <Row>
                {product.map(product => (
                    <Col md={4} key={product.id} >
                        <CardItem product={product} addItem={addItem}/>
                    </Col>
                ))}
            </Row>
        </Container>
    )

}

export default BuyPage
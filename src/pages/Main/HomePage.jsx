import React, { useEffect, useState } from 'react';
// import { Card } from 'antd';
import { Card, Col, Row } from 'antd';

const HomePage = () => {
    const [products, setProducts] = useState()
    useEffect(() => {
        fetch("https://northwind.vercel.app/api/products")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);
    return (
        <>
            {products?.map((data, key) => {
                return (
                    <Row gutter={4}>
                        <Col span={8}>
                            <Card style={{
                                width: 300
                            }}>
                                <div key={data.name}>
                                    <p>{data.name}</p>
                                    <p>{data.id}</p>
                                    <p>{data.unitsInStock}</p>
                                    <p>{data.quantityPerUnit}</p>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                )
            })}
        </>


    )
}

export default HomePage
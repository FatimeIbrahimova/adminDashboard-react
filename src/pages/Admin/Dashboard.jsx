import React, { useState } from 'react'
import { Button, Modal } from 'antd';
import { v4 as uuidv4 } from 'uuid';

const Dashboard = ({box,setBox}) => {
    const [idInput, setIdInput] = useState("");
    const [nameInput, setNameInput] = useState("");
    const [priceInput, setPriceInput] = useState("");
    const [stockInput, setStockInput] = useState("");

    const [idSend, setIdSend] = useState(false);
    const [nameSend, setNameSend] = useState(false);
    const [priceSend, setPriceSend] = useState(false);
    const [stockSend, setStockSend] = useState(false);
 

    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
        setIdSend(true);
        console.log(idInput);
        setNameSend(true);
        console.log( nameInput);
        setPriceSend(true);
        console.log( priceInput);
        setStockSend(true);
        console.log( stockInput);
        let newBox={
            idInput:idInput,
            nameInput:nameInput,
            id:uuidv4(),
            priceInput:priceInput,
            stockInput:stockInput
        }
        console.log(newBox);
        setBox([...box,newBox]);
        setNameInput(0);
        setPriceInput(0);
        setStockInput(0);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <div>Dashboard</div>
            <Button type="primary" onClick={showModal}>
                Add Product
            </Button>
            <Modal title="Product Desc" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <input placeholder='enter product id' onChange={(e) => setIdInput(e.target.value)} />
                <input placeholder='enter product name' onChange={(e) => setNameInput(e.target.value)} />
                <input placeholder='enter product unitPrice' onChange={(e) => setPriceInput(e.target.value)} />
                <input placeholder='enter product unitsInStock' onChange={(e) => setStockInput(e.target.value)} />
                <input placeholder='enter product quantityPerUnit' />
                <input placeholder='enter product categoryId' />
            </Modal>
        </>

    )
}

export default Dashboard
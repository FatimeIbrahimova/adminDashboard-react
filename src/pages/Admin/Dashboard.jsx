import React, { useState } from 'react'
import { Button, Modal } from 'antd';

const Dashboard = () => {
    const [idInput, setIdInput] = useState("");
    const [nameInput, setNameInput] = useState("");
    const [priceInput, setPriceInput] = useState("");
    const [stockInput, setStockInput] = useState("");

    const [idSend, setIdSend] = useState(false);
    const [nameSend, setNameSend] = useState(false);
    const [priceSend, setPriceSend] = useState(false);
    const [stockSend, setStockSend] = useState(false);
    const sendProduct = () => {
        setIdSend(true);
        console.log("the name sent is" + idInput);
        setNameSend(true);
        console.log("the age sent is" + nameInput);
        setPriceSend(true);
        console.log("the age sent is" + priceInput);
        setStockSend(true);
        console.log("the name sent is" + stockInput);
    }

    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <div>Dashboard</div>
            <Button type="primary" onClick={showModal}>
                Open Modal
            </Button>
            <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <input placeholder='enter product id' onChange={(e) => setIdInput(e.target.value)} />
                <input placeholder='enter product name' onChange={(e) => setNameInput(e.target.value)} />
                <input placeholder='enter product unitPrice' onChange={(e) => setPriceInput(e.target.value)} />
                <input placeholder='enter product unitsInStock' onChange={(e) => setStockInput(e.target.value)} />
                <input placeholder='enter product quantityPerUnit' />
                <input placeholder='enter product categoryId' />
                <button onClick={() => sendProduct()}>add</button>
            </Modal>
        </>

    )
}

export default Dashboard
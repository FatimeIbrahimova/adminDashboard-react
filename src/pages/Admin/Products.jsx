import React, { useEffect, useState } from 'react'
import { Button, Table } from 'antd';
import { axiosInstance } from "../Admin/AxiosInstance/Index";

const Products = ({ box }) => {
    const [product, setProduct] = useState();
    useEffect(() => {
        fetch("https://northwind.vercel.app/api/products")
            .then((res) => res.json())
            .then((data) =>setProduct(data));
    }, [setProduct]);

    const handleDelete = async (id) => {
        await axiosInstance.delete(`products/${id}`);
        console.log("delete");
    };


    const columns = [

        {
            title: 'ID',
            dataIndex: 'id',
            key: "id",
        },
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
        },
        {
            title: 'unitPrice',
            dataIndex: 'unitPrice',
            defaultSortOrder: 'descend',
        },
        {
            title: 'unitsInStock',
            dataIndex: 'unitsInStock',
            key: 'unitsInStock'
            ,
        },

        {
            title: 'quantityPerUnit',
            dataIndex: 'quantityPerUnit',
            key: 'quantityPerUnit'
        },
        {
            title: 'categoryId',
            dataIndex: 'categoryId',
            key: 'categoryId'
        },
        {
            render: () => (
                <>
                    <Button danger onClick={(id) => handleDelete(id)}>Delete</Button>
                </>
            )

        }
    ];
    return (
        <div>
            <Table columns={columns} dataSource={product} />
          
            <Table/>
            {box?.map((item,index) => {
                console.log(item);
                return 
                <Table key={index} columns={columns} dataSource={item.nameInput}></Table>
            })}
        </div>
    )
}

export default Products
import React, { useEffect, useState } from 'react'
import { Button, Popconfirm, Table } from 'antd';
import { axiosInstance } from "../Admin/AxiosInstance/Index";

const Products = () => {
    const [user, setUser] = useState()
    useEffect(() => {
        fetch("https://northwind.vercel.app/api/products")
            .then((res) => res.json())
            .then((data) => setUser(data));
    }, [setUser]);

    const handleDelete = async (id) => {
        await axiosInstance.delete(`users/${id}`);
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
            <Table columns={columns} dataSource={user} />;

        </div>
    )
}

export default Products
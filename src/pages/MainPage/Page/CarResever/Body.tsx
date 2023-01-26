import MUIDataTable from "mui-datatables";
import React, { useEffect, useState } from 'react';
import { useParams , useNavigate} from 'react-router-dom';
import Button from '@mui/material/Button'
import axios from "axios";

export interface IBodyPageProps {}


type MyDataPost = {
    ut_id: string;
    ut_name: string;
    s_id: string;
};

 


const baseURL ="http://54.86.117.200:5000/usertype/list"

const BodyPage: React.FunctionComponent<IBodyPageProps> = (props) => {

    const [message, setMessage] = useState('');
    const { nametext } = useParams();
    const navigate = useNavigate();

    const [post, setpost] = useState<MyDataPost[]>([]);

    const [count, setcount] = useState('');

    // const [MyIdEdit, setMyIdEdit] = useState<IDEdit>();

    const LS = localStorage;
    // const SetLs_idEdit = () => {
    //     LS.setItem('idEdit', EditData_1);
    // }

    function SetLs_idEdit() {
        // console.log(EditData_1);
        LS.setItem('idEdit', EditData_1);
        // navigateadddata();
    }

    function GetLs_idDelete() {
        // console.log(EditCustomerData);
        LS.setItem('idEdit', DeleteData);
        // console.log(Number(DeleteData))

        // navigateadddata();
    }

    const [DeleteData, setDeleteData] = useState('');

    const [EditData_1, setEditData_1] = useState('');
    const [EditData_2, setEditData_2] = useState('');
    const [EditData_3, setEditData_3] = useState('');

    useEffect(() =>{
      axios.post(baseURL).then((response) => {
        setpost(response.data.data)
        console.log(response.data.data)
        setcount(response.data.data.length)
      })
    }, []);

    useEffect(() =>{
        // console.log("this data",post)
    }, [post]);

    useEffect(() =>{
        console.log("this count",count)
    }, [count]);

    /* Click And Go Next Page */

    useEffect(() =>{
        console.log("EditData",EditData_1)   
        SetLs_idEdit();
        if (EditData_1 != ''){
            navigateadddata();
        }
    }, [EditData_1]);

    const navigateadddata = () => {
        navigate('/addcredit');
    };

    /* Add Button */

    const Testcolumns = [
      "วันเวลา",
      "ชื่อ-นามสกุล",
      "ผู้เติมเงิน",
      "จำนวนเงิน",
    ];

    const options = {
        // caseSensitive: true,
        confirmFilters: false,
        sort: false,
        viewColumns: false,
        searchOpen: true,
        download: false,
        print: false,
        selectableRowsHeader: false,
    };


    return (
        <div style={{margin:'5vh 5vw'}}>
            <div style={{display:'flex',justifyContent:'flex-end',alignItems:'center',margin:'2vh 0vw'}}>
                <Button onClick={navigateadddata} style={{color:'black', backgroundColor:'#6CDCC0',borderRadius:'50px',width:'9.740vw'}}>เพิ่ม</Button>
            </div>
            <div style={{display:'flex',justifyContent:'flex-start'}}>
                <div style={{width:'100%'}}>
                <MUIDataTable
                    title={"ประวัติการเติมเงิน"}
                    data={post.map(item => {
                        return [
                            item.ut_id,
                            item.ut_name,
                        ]
                    })}
                    columns={Testcolumns}
                    options={options}
                />
                </div>
            </div>
        </div>
    );
};

export default BodyPage;
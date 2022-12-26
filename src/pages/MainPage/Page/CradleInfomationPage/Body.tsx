import MUIDataTable from "mui-datatables";
import React, { useEffect, useState } from 'react';
import { useParams , useNavigate} from 'react-router-dom';
import Button from '@mui/material/Button'
import axios from "axios";

export interface IBodyPageProps {}

type MyDataPost = {
    ctm_id: string;
    ctm_name: string;
};

type MyDeleteData = {
    ctm_name: string;
};

const baseURL ="http://54.86.117.200:5000/station/list"

const baseURLEdit ="http://54.86.117.200:5000/station/add"

const baseURLUpdateDelete ="http://54.86.117.200:5000/station/del"

const test ="http://54.86.117.200:5000/station/one"

const BodyPage: React.FunctionComponent<IBodyPageProps> = (props) => {

    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const [post, setpost] = useState<MyDataPost[]>([]);

    const [count, setcount] = useState('');

    const LS = localStorage;
    // const SetLs_idEdit = () => {
    //     LS.setItem('idEdit', EditCustomerData);
    // }

    function SetLs_idEdit() {
        // console.log(EditCustomerData);
        LS.setItem('idEdit', IDEditData);
        // navigateadddata();
    }

    function GetLs_idDelete() {
        // console.log(EditCustomerData);
        LS.setItem('idEdit', DeleteData);
        // console.log(Number(DeleteData))

        // navigateadddata();
    }

    const [IDEditData, setIDEditData] = useState('');
    // const [DeleteData, setDeleteData] = useState<MyDeleteData[]>([]);
    const [DeleteData, setDeleteData] = useState('');
    const [EditData_3, setEditData_3] = useState();

    useEffect(() =>{
      axios.post(baseURL,{
        "ctm_id": 5
      }).then((response) => {
        setpost(response.data.data)
        // console.log(post,"post data")
        console.log(response.data.data,"start data")
        // console.log(response.data.data.length)
        setcount(response.data.data.length)
      })
    }, []);

    useEffect(() =>{
        console.log(post,"this data")
    }, [post]);

    useEffect(() =>{
        console.log("this count",count)
    }, [count]);


    useEffect(() =>{
        console.log("EditCustomerData",IDEditData)   
        SetLs_idEdit();
        if (IDEditData != ''){
            navigateeditdata();
        }
    }, [IDEditData]);

    useEffect(() =>{
        console.log("CradleInfomationData",DeleteData)
        GetLs_idDelete();
        if ( DeleteData != ''){
            axios
            .post(baseURLUpdateDelete, {
                s_id: Number(DeleteData),
                u_id: "1",
            })
            .then((res) => {
                console.log(res,"this is delete");
                // console.log("ok");
            })
            .catch((err) => console.error(err));
        }

    }, [DeleteData]);

    const navigateadddata = () => {
        navigate('/addcradleinfomation');
    };

        const navigateeditdata = () => {
        navigate('/editcradleinfomation');
    };


    const columns = ["เลขที่กิจการ", "รูปแบบกิจการ", "ที่อยู่", "ชื่อเจ้าของอู่", "เบอร์ติดต่อ", "เวลาทำการ", "จำนวนรถ"];

    const Testcolumns = [
        "เลขที่กิจการ", 
        "รูปแบบกิจการ", 
        "ที่อยู่", 
        "ชื่อเจ้าของอู่", 
        "เบอร์ติดต่อ", 
        "เวลาทำการ", 
        "จำนวนรถ",
      {
        name: "Edit",
        options: {
            filter: false,
            sort: false,
            customBodyRenderLite: (dataIndex:any, rowIndex:any) => {
            return (
              <Button aria-label="edit" variant="outlined" style={{color:'white',backgroundColor:'#6CDCC0',borderRadius:'15px'}}
              onClick={() => {
                setIDEditData(post[dataIndex].ctm_id);
                SetLs_idEdit();   
          
              }}
              >
                {`Edit`}
              </Button>
            );
          }
        }
      },
      {
        name: "Delete",
        options: {
            filter: false,
            sort: false,
            customBodyRenderLite: (dataIndex:any, rowIndex:any) => {
            return (
              <Button aria-label="delete" variant="outlined" style={{color:'white',backgroundColor:'#6CDCC0',borderRadius:'15px'}}
              onClick={() => {
                setDeleteData(post[dataIndex].ctm_id);
                // GetLs_idDelete();
                // handleSubmit();
              }}
              >
                {`Delete`}
              </Button>
            );
          }
        }
      }
    ];

    const data = [
    ["Joe James", "Test Corp", "Yonkers", "NY"],
    ["John Walsh", "Test Corp", "Hartford", "CT"],
    ["Bob Herm", "Test Corp", "Tampa", "FL"],
    ["James Houston", "Test Corp", "Dallas", "TX"],
    ];

    const CradleInfomationPagedata = [
    ["11/10711", "อู่รถ ", "159/2 อ.เมือง จ.ลพบุรี", "ยอดชาย    ทรายทอง", "xxx-xxx-xxxx", "08.30-17.30 น.", "4"],
    ];



    return (
        <div style={{margin:'5vh 5vw'}}>
            <div style={{display:'flex',justifyContent:'flex-end',alignItems:'center',margin:'2vh 0vw'}}>
              <Button onClick={navigateadddata} style={{color:'black', backgroundColor:'#6CDCC0',borderRadius:'50px',width:'9.740vw'}}>เพิ่ม</Button>
            </div>
            <div style={{display:'flex',justifyContent:'flex-start'}}>
                <div style={{width:'100%'}}>
                <MUIDataTable
                    title={"ข้อมูลอู่"}
                    data={post.map(item => {
                        return [
                            item.ctm_id,
                            item.ctm_name,
                        ]
                    })}
                    columns={Testcolumns}
                />
                </div>
            </div>
        </div>
    );
};

export default BodyPage;
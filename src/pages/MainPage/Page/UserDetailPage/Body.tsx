import MUIDataTable from "mui-datatables";
import React, { useEffect, useState } from 'react';
import { useParams , useNavigate} from 'react-router-dom';
import Button from '@mui/material/Button'
import axios from "axios";



export interface IBodyPageProps {}

type MyDataPost = {
    u_id: any;
    u_name: string;
    ul_id: any;
    ut_id: any;
};

const baseURL ="http://54.86.117.200:5000/user/login"

const BodyPage: React.FunctionComponent<IBodyPageProps> = (props) => {

    const [post, setpost] = useState<MyDataPost[]>([]);
    const [count, setcount] = useState('');

    const [EditData_1, setEditData_1] = useState('');

    const LS = localStorage;

    function SetLs_idEdit() {

        LS.setItem('idEdit', EditData_1);

    }

    const navigate = useNavigate();

    const navigateadddata = () => {
        navigate('/adduserdetail');
    };

    useEffect(() =>{
      axios
        .post(baseURL, {
            uname: "admin",
            upass: "1234"
        })
        .then((res) => {
            setpost([res.data.data])
            // setcount(res.data)
        })
        .catch((err) => console.error(err));
    }, []);

    // function postdata() {
    //     axios
    //         .post(baseURL, {
    //             uname: "admin",
    //             upass: "1234"
    //         })
    //         .then((res) => {
    //             setpost([res.data.data])
    //             console.log(res.data.data)
    //         })
    //         .catch((err) => console.error(err));
    // }

    useEffect(() =>{
        // console.log("this data",post)
    }, [post]);

    useEffect(() =>{
        // console.log("this count",post.length)
    }, [count]);

    useEffect(() =>{
        console.log("EditData",EditData_1)   
        SetLs_idEdit();
        if (EditData_1 != ''){
            navigateadddata();
        }
    }, [EditData_1]);

    // if (!post) return null;


    const columns = ["เลขที่กิจการ", "รูปแบบกิจการ", "สถานะเปิด/ปิด", "ที่อยู่", "ชื่อเจ้าของอู่", "เบอร์ติดต่อ"];

    const UserDetailcolumns = [
        "เลขที่กิจการ",
        "รูปแบบกิจการ",
        "สถานะเปิด/ปิด",
        "ที่อยู่",
        "ชื่อเจ้าของอู่",
        "เบอร์ติดต่อ",
      {
        name: "Edit",
        options: {
            filter: false,
            sort: false,
            customBodyRenderLite: (dataIndex:any, rowIndex:any) => {
            return (
              <Button aria-label="edit" variant="outlined" style={{color:'white',backgroundColor:'#6CDCC0',borderRadius:'15px'}}
              onClick={() => {
                setEditData_1(post[dataIndex].ut_id)
                SetLs_idEdit();            
              }}
              >
                {`Edit`}
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

    const UserDetaildata = [
    ["11/10711", "สถานีประจุไฟ", "เปิด", "12/1 อ.เมือง จ.ลพบุรี", "คล่องแคล่ว    ว่องไว", "xxx-xxx-xxxx"],
    ];

    const myJSON = JSON.stringify(post);

    return (
        <div style={{margin:'5vh 5vw'}}>
            <div style={{display:'flex',justifyContent:'flex-end',alignItems:'center',margin:'2vh 0vw'}}>
                <Button onClick={navigateadddata} style={{color:'black', backgroundColor:'#6CDCC0',borderRadius:'50px',width:'9.740vw'}}>เพิ่ม</Button>
            </div>
            <div style={{display:'flex',justifyContent:'flex-start'}}>
                <div style={{width:'100%'}}>
                    <MUIDataTable
                        title={"ข้อมูลผู้ใช้งาน"}
                        // data = {data}
                        data={post.map(item => {
                            return [
                                item.u_id,
                                item.u_name,
                                item.ul_id,
                                item.ut_id
                            ]
                        })}
                        columns={UserDetailcolumns}
                    />
                </div>
            </div>
        </div>
    );
};

export default BodyPage;
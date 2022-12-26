import MUIDataTable from "mui-datatables";
import React, { useEffect, useState } from 'react';
import { useParams , useNavigate} from 'react-router-dom';
import Button from '@mui/material/Button'
import axios from "axios";

export interface IBodyPageProps {}

type MyDataPost = {
    c_id: string;
    ctm_name: string;
    c_license_plate: string;
};

type MyDeleteData = {
    ctm_name: string;
};

const BodyPage: React.FunctionComponent<IBodyPageProps> = (props) => {

    const baseURL ="http://54.86.117.200:5000/car/list"

    const baseURLUpdateDelete ="http://54.86.117.200:5000/car/del"

    const navigate = useNavigate();

    const [post, setpost] = useState<MyDataPost[]>([]);

    const [count, setcount] = useState('');

    const LS = localStorage;

    const [EditCarData, setEditCarData] = useState('');
    const [DeleteData, setDeleteData] = useState('');


    function SetLs_idEdit() {
      // console.log(EditCarData);
      LS.setItem('IdCarEdit', EditCarData);
      // navigateadddata();
    }

    function GetLs_idDelete() {
      // console.log(EditCarData);
      LS.setItem('IdCarDelete', DeleteData);
      // console.log(Number(DeleteData))
      // navigateadddata();
    }

    useEffect(() =>{
      axios.post(baseURL,{
        ctm_id: "2"
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

    /* Click And Go Next Page */

    useEffect(() =>{
      console.log("EditCarData",EditCarData)   
      SetLs_idEdit();
      if (EditCarData != ''){
          navigateeditdata();
      }
    }, [EditCarData]);

    useEffect(() =>{
      console.log("EditData",DeleteData)
      GetLs_idDelete();
      if ( DeleteData != ''){
        axios
        .post(baseURLUpdateDelete, {
            c_id: Number(DeleteData),
            u_id: "1",
        })
        .then((res) => {
            console.log(res,"this is delete");
            // console.log("ok");
        })
      .catch((err) => console.error(err));
    }}, [DeleteData]);



    const navigateeditdata = () => {
      navigate('/editcardetail');
    };

    const navigateaddcar = () => {
      navigate('/addcardetail');
    };



    const CarDetailPagedata = [
    ["กข 231", "อู่ 1", "ตุ๊กตุ๊ก", "ลิเธียม", "22/ก.ย./64", "40 กม./ชม.", "20", "22/ก.ย./64", "ดี"],
    ];

    const Testcolumns = [
        "ทะเบียนรถ", 
        "อู่", 
        "ประเภทรถ", 
        "ประเภทแบตเตอรี่", 
        "อายุแบตเตอรี่", 
        "ความเร็วรถ", 
        "เลขไมล์", 
        "วันที่เริ่มใช้งาน", 
        "สถานะรถ",
      {
        name: "Edit",
        options: {
            filter: false,
            sort: false,
            customBodyRenderLite: (dataIndex:any, rowIndex:any) => {
            return (
              <Button aria-label="edit" variant="outlined" style={{color:'white',backgroundColor:'#6CDCC0',borderRadius:'15px'}}
              onClick={() => {
                setEditCarData(post[dataIndex].c_id);
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
            //   onClick={() => {
            //     setDeleteData(post[dataIndex].ctm_id);
            //     GetLs_idDelete();
            //     handleSubmit();
            //   }}
              >
                {`Delete`}
              </Button>
            );
          }
        }
      }
    ];



    return (
      <div style={{margin:'5vh 5vw'}}>
          <div style={{display:'flex',justifyContent:'flex-end',alignItems:'center',margin:'2vh 0vw'}}>
            <Button onClick={navigateaddcar} style={{color:'black', backgroundColor:'#6CDCC0',borderRadius:'50px',width:'9.740vw'}}>เพิ่ม</Button>
          </div>          
          <div style={{display:'flex',justifyContent:'flex-start'}}>
              <div style={{width:'100%'}}>
                  <MUIDataTable
                    title={"ข้อมูลสถานี"}
                    data={post.map(item => {
                        return [
                            item.c_id,
                            item.ctm_name,
                            item.c_license_plate,
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
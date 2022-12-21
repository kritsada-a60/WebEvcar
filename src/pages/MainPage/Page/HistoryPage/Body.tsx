import axios, { Axios } from "axios";
import MUIDataTable from "mui-datatables";
import React, { useEffect, useState } from 'react';
import { useParams , useNavigate} from 'react-router-dom';
import Button from '@mui/material/Button'


export interface IBodyPageProps {}

type MyDataPost = {
  ut_id: string;
  ut_name: string;
};

const baseURL ="http://54.86.117.200:5000/usertype/list"


const BodyPage: React.FunctionComponent<IBodyPageProps> = (props) => {

    const [message, setMessage] = useState('');
    const { nametext } = useParams();

    const [post, setpost] = useState<MyDataPost[]>([]);
    const [EditData_1, setEditData_1] = useState('');
    
    useEffect(() =>{
      axios.get(baseURL).then((response) => {
        setpost(response.data.data)
        // console.log(response.data.data[0])
      })
    }, []);

    useEffect(() =>{
        console.log("this data",post)
    }, [post]);

    const LS = localStorage;


    function SetLs_idEdit() {

        LS.setItem('idEdit', EditData_1);

    }



    const columns = ["ทะเบียนรถ", "อู่", "Switch on", "Switch off", "ระยะทาง", "ปริมาณไฟฟ้าที่ใช้"];


    const Testcolumns = [
        "ทะเบียนรถ",
        "อู่",
        "Switch on",
        "Switch off",
        "ระยะทาง",
        "ปริมาณไฟฟ้าที่ใช้",
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
                {`ดูแผนที่`}
              </Button>
            );
          }
        }
      }
    ];

    return (
        <div style={{margin:'5vh 5vw'}}>
            <div style={{display:'flex',justifyContent:'flex-start'}}>
                <div style={{width:'100%'}}>
                    <MUIDataTable
                        title={"ประวัติการเดินทาง"}
                        // data={HistoryPagedata}
                        data={post.map(item => {
                            return [
                                item.ut_id,
                                item.ut_name,
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
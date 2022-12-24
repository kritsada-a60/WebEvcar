import MUIDataTable from "mui-datatables";
import React, { useEffect, useState } from 'react';
import { useParams , useNavigate} from 'react-router-dom';
import Button from '@mui/material/Button'
import axios from "axios";
// import { UseFormRegisterReturn } from 'react-hook-form';

export interface IBodyPageProps {}

// interface Props {
//   inpSec2: UseFormRegisterReturn[];
// }

type MyDataPost = {
    ctm_id: string;
    ctm_name: string;
};

type MyDeleteData = {
    ctm_name: string;
};

// interface IDEdit {
//     editdata_id: any;
// }
 


const baseURL ="http://54.86.117.200:5000/customer/list"

const baseURLEdit ="http://54.86.117.200:5000/customer/add"

const baseURLUpdateDelete ="http://54.86.117.200:5000/customer/del"

const test ="http://54.86.117.200:5000/customer/one"

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
        // console.log(EditData_1);
        LS.setItem('idDelete', DeleteData);
        // console.log(Number(DeleteData))

        // navigateadddata();
    }



    const [EditData_1, setEditData_1] = useState('');
    // const [DeleteData, setDeleteData] = useState<MyDeleteData[]>([]);
    const [DeleteData, setDeleteData] = useState('');
    const [EditData_3, setEditData_3] = useState();



    useEffect(() =>{
      axios.get(baseURL).then((response) => {
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
        console.log("EditData",EditData_1)   
        SetLs_idEdit();
        if (EditData_1 != ''){
            navigateeditdata();
        }
    }, [EditData_1]);



    useEffect(() =>{
        console.log("EditData",DeleteData)
        GetLs_idDelete();
        if ( DeleteData != ''){
            axios
            .post(baseURLUpdateDelete, {
                ctm_id: Number(DeleteData),
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
        navigate('/addcustomer');
    };

        const navigateeditdata = () => {
        navigate('/editcustomer');
    };

    useEffect(() => {
        if (nametext) {
            setMessage('The number is ' + nametext);
        } else {
            setMessage('No number was provided');
        }
    }, []);


    const handleSubmit = () => {
        // if (DeleteData != "0"){
        //     console.log(DeleteData,"Now Delete")
        // }
        console.log(DeleteData)
        // axios
        // .post(baseURLUpdateDelete, {
        //     ctm_id: Number(DeleteData),
        //     u_id: "1",
        // })
        // .then((res) => {
        //     console.log(res,"this is delete");
        //     // console.log("ok");
        // })
        // .catch((err) => console.error(err));
    };



    const columns = ["เลขที่กิจการ", "รูปแบบกิจการ", "สถานะเปิด/ปิด", "ที่อยู่", "ชื่อเจ้าของอู่", "เบอร์ติดต่อ", "เวลาทำการ"];

    const data = [
    ["Joe James", "Test Corp", "Yonkers", "NY"],
    ["John Walsh", "Test Corp", "Hartford", "CT"],
    ["Bob Herm", "Test Corp", "Tampa", "FL"],
    ["James Houston", "Test Corp", "Dallas", "TX"],
    ];

    const StationInformationPagedata = [
    ["11/10711", "สถานีประจุไฟ", "เปิด", "12/1 อ.เมือง จ.ลพบุรี", "คล่องแคล่ว    ว่องไว", "xxx-xxx-xxxx", "08.30-17.30 น."],
    ];

    /* Add Button */

    const Testcolumns = [
      "เลขที่กิจการ",
      "รูปแบบกิจการ",
      "สถานะเปิด/ปิด",
      "ที่อยู่",
      "ชื่อเจ้าของอู่",
      "เบอร์ติดต่อ",
      "เวลาทำการ",
      {
        name: "Edit",
        options: {
            filter: false,
            sort: false,
            customBodyRenderLite: (dataIndex:any, rowIndex:any) => {
            return (
              <Button aria-label="edit" variant="outlined" style={{color:'white',backgroundColor:'#6CDCC0',borderRadius:'15px'}}
              onClick={() => {
                setEditData_1(post[dataIndex].ctm_id);
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
    

    /* Add Button and Vaule */

    // console.log(Testcolumns,"Columns")
    // console.log(Testcolumns[7],"ColumnsEdit")

    // const data2 = [
    //     {id:1,name:'wahid'},
    //     {id:2,name:'jamil'},
    //     {id:3,name:'marin'},
    // ];

    // const columnss = [
    //     {
    //     name: "id",
    //     label: "Id",
    //     options: {
    //         display: false
    //     }
    //     },
    //     {
    //     name: "name",
    //     label: "Name",
    //     },
    //     {
    //     name: "Actions",
    //     options: {
    //         filter: false,
    //         sort: false,
    //         customBodyRenderLite: (dataIndex:any, rowIndex:any) => {
    //         return (
    //             <Button aria-label="edit" onClick={() => {
    //                 // alert(data2[dataIndex].name)
    //                 alert(post[rowIndex].ut_name)
                    
    //             }}>
    //                 Button
    //             </Button>
                
    //         );
    //     }
    //     },
        
    // }
    // ];

    return (
        <div style={{margin:'5vh 5vw'}}>
            <div style={{display:'flex',justifyContent:'flex-end',alignItems:'center',margin:'2vh 0vw'}}>
                <Button onClick={navigateadddata} style={{color:'black', backgroundColor:'#6CDCC0',borderRadius:'50px',width:'9.740vw'}}>เพิ่ม</Button>
            </div>
            <div style={{display:'flex',justifyContent:'flex-start'}}>
                <div style={{width:'100%'}}>
                <MUIDataTable
                    title={"ข้อมูลสถานี"}
                    data={post.map(item => {
                        return [
                            item.ctm_id,
                            item.ctm_name,
                        ]
                    })} 
                    columns={Testcolumns} 
                    
                />
                {/* <MUIDataTable
                    title={"ข้อมูลสถานี"}
                    data={data2}
                    columns={columnss} 
                /> */}
                </div>
                {/* <div style={{width:'10%',display:'table-row',justifyContent:'center',alignItems:'center'}}>
                    {count.length? && 
                        count.map((e:any, i:number) => {
                            return (
                                <Button onClick={navigateadddata}> Edit</Button>
                            );
                        })}
                    <Button onClick={navigateadddata}> Edit</Button>
                    {post?.length &&
                        post.map((e: any, i: number) => {
                        return (
                            <div key={i} >
                                <Button onClick={navigateadddata} style={{color:'white',backgroundColor:'#6CDCC0'}}> Edit</Button>
                            </div>
                        );
                    })}
                </div> */}
            </div>
        </div>
    );
};

export default BodyPage;
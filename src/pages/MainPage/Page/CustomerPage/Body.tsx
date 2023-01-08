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

type MyData = {
    ctm_address: string;
    ctm_amphur: string;
    ctm_bank: string;
    ctm_bank_no: string;
    ctm_cno: string;
    ctm_contact_name: string;
    ctm_id: string;
    ctm_mail: string;
    ctm_mobile: string;
    ctm_mqtt_code: any;
    ctm_name: string;
    ctm_province: string;
    ctm_tel: string;
    ctm_tumbon: string;
    ctm_zipcode: string;
    ctmt_id: number;
    ctmt_name: string;
};

const baseURL ="http://54.86.117.200:5000/customer/list"

const baseURLEdit ="http://54.86.117.200:5000/customer/add"

const baseURLUpdateDelete ="http://54.86.117.200:5000/customer/del"

const test ="http://54.86.117.200:5000/customer/one"

const BodyPage: React.FunctionComponent<IBodyPageProps> = (props) => {

    const [message, setMessage] = useState('');
    const { nametext } = useParams();
    const navigate = useNavigate();

    const [post, setpost] = useState<MyData[]>([]);

    const [count, setcount] = useState('');

    // const [MyIdEdit, setMyIdEdit] = useState<IDEdit>();

    const LS = localStorage;
    // const SetLs_idEdit = () => {
    //     LS.setItem('idEdit', EditCustomerData);
    // }

    function SetLs_idEdit() {
        // console.log(EditCustomerData);
        LS.setItem('IdCustomerEdit', EditCustomerData);
        // navigateadddata();
    }

    function GetLs_idDelete() {
        // console.log(EditCustomerData);
        LS.setItem('IdCustomerDelete', DeleteData);
        // console.log(Number(DeleteData))

        // navigateadddata();
    }



    const [EditCustomerData, setEditCustomerData] = useState('');
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
        console.log("EditCustomerData",EditCustomerData)   
        SetLs_idEdit();
        if (EditCustomerData != ''){
            navigateeditdata();
        }
    }, [EditCustomerData]);



    useEffect(() =>{
        console.log("EditCustomerData",DeleteData)
        GetLs_idDelete();
        if ( DeleteData != ''){
            axios
            .post(baseURLUpdateDelete, {
                ctm_id: Number(DeleteData),
                u_id: "1",
            })
            .then((res) => {
                console.log(res,"this is delete");
                window.location.reload();
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
        // "ID",
        "ชื่อลูกค้า", 
        "ประเภทลูกค้า", 
        "เลขทะเบียนการค้า", 
        // "ชื่อธนาคาร", 
        // "บัญขีธนาคาร", 
        "ชื่อผู้ติดต่อ", 
        // "ที่อยู่", 
        // "ตำบล", 
        // "อำเภอ",
        "จังหวัด", 
        // "รหัสไปรษณีย์", 
        // "โทรศัพท์", 
        "มือถือ",
        // "E-Mail", 
        "รหัส MQTT",
      {
        name: "Edit",
        options: {
            filter: false,
            sort: false,
            customBodyRenderLite: (dataIndex:any, rowIndex:any) => {
            return (
              <Button aria-label="edit" variant="outlined" style={{color:'white',backgroundColor:'#6CDCC0',borderRadius:'15px'}}
              onClick={() => {
                setEditCustomerData(post[dataIndex].ctm_id);
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
                GetLs_idDelete();
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
                    title={"ข้อมูลลูกค้า"}
                    data={post.map(item => {
                        return [
                            // item.ctm_id,
                            item.ctm_name,
                            item.ctmt_name,
                            item.ctm_cno,
                            // item.ctm_bank,
                            // item.ctm_bank_no,
                            item.ctm_contact_name,
                            item.ctm_province,
                            item.ctm_mobile,
                            item.ctm_mqtt_code,
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
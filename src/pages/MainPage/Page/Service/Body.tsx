import MUIDataTable from "mui-datatables";
import React, { useEffect, useState } from 'react';
import { useParams , useNavigate} from 'react-router-dom';
import Button from '@mui/material/Button'
import { Typography , TextField} from "@mui/material";
import axios from "axios";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
// import { UseFormRegisterReturn } from 'react-hook-form';

export interface IBodyPageProps {}

// interface Props {
//   inpSec2: UseFormRegisterReturn[];
// }

type MyDataPost = {
    ctm_id: string;
    ctm_name: string;
    pc_name: string;
    pt_name: string;
    s_active: string,
    s_address: string;
    s_amphur: string;
    s_contact: string;
    s_id: number;
    s_mqtt_code: string;
    s_name: string;
    s_province: string;
    s_tel: string;
    s_tumbon: string;
    s_zipcode: string;
    ss_id: any,
    sv_active: number;
    sv_capacity: any,
    sv_cmosfet: any,
    sv_credit: any,
    sv_current: any,
    sv_id: number;
    sv_mqtt_code: string;
    sv_name: string;
    sv_now: any,
    sv_price: number;
    sv_remark: string;
    sv_serial: string;
    sv_status: number;
    sv_status_txt: string;
    sv_temp: any,
    sv_ts: any,
    sv_unit: string;
};

type MyDeleteData = {
    ctm_name: string;
};

interface MyDorpDown {
    ctm_id: number;
    ctm_name: string;
    pc_name: string;
    pt_name: string;
    s_active: string,
    s_address: string;
    s_amphur: string;
    s_contact: string;
    s_id: number;
    s_mqtt_code: string;
    s_name: string;
    s_province: string;
    s_tel: string;
    s_tumbon: string;
    s_zipcode: string;
    ss_id: any,
    sv_active: number;
    sv_capacity: any,
    sv_cmosfet: any,
    sv_credit: any,
    sv_current: any,
    sv_id: number;
    sv_mqtt_code: string;
    sv_name: string;
    sv_now: any,
    sv_price: number;
    sv_remark: string;
    sv_serial: string;
    sv_status: number;
    sv_status_txt: string;
    sv_temp: any,
    sv_ts: any,
    sv_unit: string;
}

type MyDorpDownLength = {
    sv_id: number;
};
 


const baseURL ="http://54.86.117.200:5000/service/list"

const baseURLEdit ="http://54.86.117.200:5000/service/add"

const baseURLUpdateDelete ="http://54.86.117.200:5000/service/del"

const baseURLUpdateDataTable ="http://54.86.117.200:5000/service/one"

const BodyPage: React.FunctionComponent<IBodyPageProps> = (props) => {

    const [message, setMessage] = useState('');
    const { nametext } = useParams();
    const navigate = useNavigate();

    const [post, setpost] = useState<MyDataPost[]>([]);

    const [post2, setpost2] = useState<MyDataPost>();

    const [post3, setpost3] = useState<MyDataPost[]>([]);

    const [post4, setpost4] = useState("1");

    const [DorpDownStaion, setDorpDownStaion] = useState<MyDorpDown[]>([]);
    const [DorpDownId, setDorpDownID] = useState('');


    const [NumberDorpDown , setNumberDorpDown] = useState('');

    const [NameDorpDown , setNameDorpDown] = useState('');

    const [count, setcount] = useState('');

    const [age, setAge] = React.useState('');





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

    function SetLs_idEdit2() {
        // console.log(EditCustomerData);
        LS.setItem('IdCustomerEdit', NumberDorpDown);
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
      axios.post(baseURL,{
        ctm_id: "5",
        s_id: "2",
      }).then((response) => {
        console.log(response.data)
        setpost(response.data.data)
        // console.log(post,"post data")

        setDorpDownStaion(response.data.data)
        // console.log(DorpDownStaion,"post dorpdown")
        
        // console.log(response.data.data,"start data")
        // console.log(response.data.data.length)
        // setcount(response.data.data.length)
      })
    }, []);

    
    const resultDorpDownData = DorpDownStaion.filter((member) => {
        return member.ctm_name == "Station A"
    })






    useEffect(() =>{
        // console.log(post,"this data")
    }, [post]);

    useEffect(() =>{
        // console.log("this count",count)
    }, [count]);

    useEffect(() =>{
        console.log("this dorpdowndata",DorpDownStaion)
    }, [DorpDownStaion]);

    useEffect(() =>{
        // console.log("this numberDorpDown",NumberDorpDown)
        // setpost2(post => [...post])
        // setpost2(post[Number(NumberDorpDown)])
        
    }, [NumberDorpDown]);

    useEffect(() =>{
        // console.log(post2,"this post2")
        // console.log(Newdata,"old data")
        // console.log(post2,"new data")
        // post3.map((post2)=>[
        //     post3.push(post2)
        // ])
        // console.log(post3,"post3")
        if (post2 != null){
            // console.log(NumberDorpDown,"Happy")
            axios
            .post(baseURLUpdateDataTable , {
                sv_id: NumberDorpDown,
                // sv_id: LS.getItem("IdCustomerEdit"),

                
                // sv_id: "6",
            })
            .then((res) => {
                console.log(res.data.data,"this is Happy");
                setpost3(res.data.data)
                // console.log("ok");
            })
            .catch((err) => console.error(err));
        }
    }, [post2]);

    useEffect(() =>{
        // console.log(post3[0]?.sv_name,"post3")
        // console.log(post3)
    }, [post3]);

   

    /* Click And Go Next Page */

    useEffect(() =>{
        // console.log("EditCustomerData",EditCustomerData)   
        SetLs_idEdit();
        if (EditCustomerData != ''){
            navigateeditdata();
        }
    }, [EditCustomerData]);



    useEffect(() =>{
        // console.log("EditCustomerData",DeleteData)
        // GetLs_idDelete();
        // if ( DeleteData != ''){
        //     axios
        //     .post(baseURLUpdateDelete, {
        //         ctm_id: Number(DeleteData),
        //         u_id: "1",
        //     })
        //     .then((res) => {
        //         console.log(res,"this is delete");
        //         // console.log("ok");
        //     })
        //     .catch((err) => console.error(err));
        // }

    }, [DeleteData]);

    const navigateadddata = () => {
        navigate('/addservice');
    };

        const navigateeditdata = () => {
        navigate('/editservice');
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

    const handleChange = (event: SelectChangeEvent) => {
    //  setAge(event.target.value);
        // setNumberDorpDown(event.target.value); /* จุดเริ่มต้นของนรก */
        // SetLs_idEdit2();
        // setNameDorpDown(event.target.value);
        console.log(event.target)
        // console.log(post3[0]?.sv_id)
        axios.post(baseURLUpdateDataTable,{
            sv_id:event.target.value
            // sv_id: 
        }).then((res)=>{
            console.log(res.data.data)
            // setDorpDownStaion(res.data.data)
            setpost3(res.data.data)
        }).catch((err) => console.error(err))
        
    };



    /* Add Button */

    const Testcolumns = [
        "ID",
        "ชื่อบริการ",
        "ประเภท",
        "serial",
        "ราคา",
        "หน่วย",
        "MQTT_CODE",
        // "ชื่อลูกค้า", 
        // "ประเภทลูกค้า", 
        // "เลขทะเบียนการค้า", 
        // "ชื่อธนาคาร", 
        // "บัญขีธนาคาร", 
        // "ชื่อผู้ติดต่อ", 
        // "ที่อยู่", 
        // "ตำบล", 
        // "อำเภอ",
        // "จังหวัด", 
        // "รหัสไปรษณีย์", 
        // "โทรศัพท์", 
        // "มือถือ",
        // "E-Mail", 
        // "รหัส MQTT",
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

            <div style={{margin:'2.5vh 0',display:'flex',justifyContent:'flex-start',alignItems:'center'}}>
                <label>
                    <div style={{margin:'0 2.5vw 0 0'}}>
                        <p style={{fontSize:'36px'}}>
                            Station
                        </p>  
                    </div>
                </label>
                <label>
                    <Select type="ประเภทกิจการ" name="" style={{margin:'0 0vw',backgroundColor:'white',borderColor:'black', width:'15vw'}} placeholder="ประเภทกิจการ"
                    value={age}
                    onChange={handleChange}
                    // label="Age"
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                    >
                    {DorpDownStaion?.length &&
                        DorpDownStaion.map((e: any, i: number) => {
                        return (
                            <MenuItem key={e.sv_id} value={e.sv_id}
                            // onChange={e =>{
                            //     console.log(e,"E")
                            //     setNumberDorpDown(e.sv_id)
                            // }}
                            >
                            {e.s_name}
                            </MenuItem>
                        );
                    })}
                    </Select>
                    {/* {NumberDorpDown}          */}
                </label>
            </div>
            <div style={{display:'flex',justifyContent:'flex-end',alignItems:'center',margin:'2vh 0vw'}}>
                <Button onClick={navigateadddata} style={{color:'black', backgroundColor:'#6CDCC0',borderRadius:'50px',width:'9.740vw'}}>เพิ่ม</Button>
            </div>
            <div style={{display:'flex',justifyContent:'flex-start'}}>
                <div style={{width:'100%'}}>
                <MUIDataTable
                    title={"ข้อมูลลูกค้า"}
                    data={
                        post3?.map(item => {
                        return [
                            item.sv_id,
                            item.sv_name,
                            item.pc_name,
                            item.sv_serial,
                            item.sv_price,
                            item.sv_unit,
                            item.sv_mqtt_code,
                        ]
                    })} 
                    // data={post3}
                    columns={Testcolumns} 
                    
                />
                    {/* {post3?.length &&
                        post3.map((e: any, i: number) => {
                        return (
                            <div key={i} 
                            // onChange={e =>{
                            //     console.log(e,"E")
                            //     setNumberDorpDown(e.sv_id)
                            // }}
                            >
                            {e.sv_id}
                            {e.sv_name}
                            {console.log(e,"e")}
                            {console.log(i,"i")}
                            </div>
                        );
                    })} */}
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
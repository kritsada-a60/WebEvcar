import MUIDataTable from "mui-datatables";
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export interface IBodyPageProps {}

const BodyPage: React.FunctionComponent<IBodyPageProps> = (props) => {

    const [message, setMessage] = useState('');
    const { nametext } = useParams();

    useEffect(() => {
        if (nametext) {
            setMessage('The number is ' + nametext);
        } else {
            setMessage('No number was provided');
        }
    }, []);

    const columns = ["เลขที่กิจการ", "รูปแบบกิจการ", "สถานะเปิด/ปิด", "ที่อยู่", "ชื่อเจ้าของอู่", "เบอร์ติดต่อ"];

    const data = [
    ["Joe James", "Test Corp", "Yonkers", "NY"],
    ["John Walsh", "Test Corp", "Hartford", "CT"],
    ["Bob Herm", "Test Corp", "Tampa", "FL"],
    ["James Houston", "Test Corp", "Dallas", "TX"],
    ];

    const UserDetaildata = [
    ["11/10711", "สถานีประจุไฟ", "เปิด", "12/1 อ.เมือง จ.ลพบุรี", "คล่องแคล่ว    ว่องไว", "xxx-xxx-xxxx"],
    ];



    return (
        <div style={{marginTop:'10vh'}}>
            <MUIDataTable
                title={"ข้อมูลผู้ใช้งาน"}
                data={UserDetaildata}
                columns={columns}
            />
        </div>
    );
};

export default BodyPage;
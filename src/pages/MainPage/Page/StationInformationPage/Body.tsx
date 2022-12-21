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



    return (
        <div style={{marginTop:'10vh'}}>
            <MUIDataTable
                title={"ข้อมูลสถานี"}
                data={StationInformationPagedata}
                columns={columns}
            />
            
        </div>
    );
};

export default BodyPage;
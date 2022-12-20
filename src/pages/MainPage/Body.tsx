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

    const columns = ["Name", "Company", "City", "State"];

    const ColumnsHistory = ["ทะเบียนรถ", "อู่", "Switch on", "Switch off", "ระยะทาง", "ปริมาณไฟฟ้าที่ใช้"];

    const ColumnsAdmin = ["ทะเบียนรถ", "อู่", "ประเภทรถ", "ประเภทแบตเตอรี่", "อายุแบตเตอรี่", "ความเร็วรถ", "เลขไมล์", "วันที่เริ่มใช้งาน", "สถานะรถ"];

    const ColumnsCarDetail= ["เลขที่กิจการ", "รูปแบบกิจการ", "ที่อยู่", "ชื่อเจ้าของอู่", "เบอร์ติดต่อ", "เวลาทำการ", "จำนวนรถ"];

    const ColumnsCradleInfomation = ["เลขที่กิจการ", "รูปแบบกิจการ", "สถานะเปิด/ปิด", "ที่อยู่", "ชื่อเจ้าของอู่", "เบอร์ติดต่อ", "เวลาทำการ"];

    const ColumnsStationInformation = ["เลขที่กิจการ", "รูปแบบกิจการ", "สถานะเปิด/ปิด", "ที่อยู่", "ชื่อเจ้าของอู่", "เบอร์ติดต่อ"];

    const ColumnsUserDetail = ["เลขที่กิจการ", "ระดับสิทธิ", "ชื่อ-นามสกุล", "ชื่ออู่", "เบอร์ติดต่อ", "เวลาทำการ"];

    const data = [
    ["Joe James", "Test Corp", "Yonkers", "NY"],
    ["John Walsh", "Test Corp", "Hartford", "CT"],
    ["Bob Herm", "Test Corp", "Tampa", "FL"],
    ["James Houston", "Test Corp", "Dallas", "TX"],
    ];

    const HistoryPagedata = [
    ["กข 231", "อู่ 1", "110/1 อ.โคกสำรอง จ.ลพบุรี", "44/1 อ.เมือง จ.ลพบุรี", "7 กิโลเมตร", "82 kWh"],
    ];



    return (
        <>
            <MUIDataTable
                title={message}
                data={data}
                columns={columns}
            />
            
        </>
    );
};

export default BodyPage;
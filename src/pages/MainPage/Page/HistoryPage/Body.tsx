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

    const mycolumns = ["ทะเบียนรถ", "อู่", "Switch on", "Switch off", "ระยะทาง", "ปริมาณไฟฟ้าที่ใช้"];

    const mycolumns2 = ["ทะเบียนรถ", "อู่", "ประเภทรถ", "ประเภทแบตเตอรี่", "อายุแบตเตอรี่", "ความเร็วรถ", "เลขไมล์", "วันที่เริ่มใช้งาน", "สถานะรถ"];

    const mycolumns3 = ["เลขที่กิจการ", "รูปแบบกิจการ", "ที่อยู่", "ชื่อเจ้าของอู่", "เบอร์ติดต่อ", "เวลาทำการ", "จำนวนรถ"];

    const mycolumns4 = ["เลขที่กิจการ", "รูปแบบกิจการ", "สถานะเปิด/ปิด", "ที่อยู่", "ชื่อเจ้าของอู่", "เบอร์ติดต่อ", "เวลาทำการ"];

    const mycolumns5 = ["เลขที่กิจการ", "รูปแบบกิจการ", "สถานะเปิด/ปิด", "ที่อยู่", "ชื่อเจ้าของอู่", "เบอร์ติดต่อ"];

    const mycolumns6 = ["เลขที่กิจการ", "ระดับสิทธิ", "ชื่อ-นามสกุล", "ชื่ออู่", "เบอร์ติดต่อ", "เวลาทำการ"];

    const data = [
    ["Joe James", "Test Corp", "Yonkers", "NY"],
    ["John Walsh", "Test Corp", "Hartford", "CT"],
    ["Bob Herm", "Test Corp", "Tampa", "FL"],
    ["James Houston", "Test Corp", "Dallas", "TX"],
    ];

    const HistoryPagedata = [
    ["กข 231", "อู่ 1", "110/1 อ.โคกสำรอง จ.ลพบุรี", "44/1 อ.เมือง จ.ลพบุรี", "7 กิโลเมตร", "82 kWh"],
    ["ฮก 452", "อู่ 1", "59/1 อ.เมือง จ.ลพบุรี", "105/3 อ.เมือง จ.ลพบุรี", "15 กิโลเมตร", "120 kWh"],
    ["ขฟ 785", "อู่ 1", "31/2 อ.บ้านหมี่ จ.ลพบุรี", "303/1 อ.เมือง จ.ลพบุรี", "3 กิโลเมตร", "41 kWh"],
    ["อด 555", "อู่ 1", "22/2 อ.เมือง จ.ลพบุรี", "72/2 อ.เมือง จ.ลพบุรี", "1 กิโลเมตร", "22 kWh"],
    ];



    return (
        <div style={{marginTop:'10vh'}}>
            <MUIDataTable
                title={"ประวัติการเดินทาง"}
                data={HistoryPagedata}
                columns={mycolumns}
            />
            
        </div>
    );
};

export default BodyPage;
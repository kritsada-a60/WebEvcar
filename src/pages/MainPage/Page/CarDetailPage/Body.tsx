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

    const columns = ["ทะเบียนรถ", "อู่", "ประเภทรถ", "ประเภทแบตเตอรี่", "อายุแบตเตอรี่", "ความเร็วรถ", "เลขไมล์", "วันที่เริ่มใช้งาน", "สถานะรถ"];

    const data = [
    ["Joe James", "Test Corp", "Yonkers", "NY"],
    ["John Walsh", "Test Corp", "Hartford", "CT"],
    ["Bob Herm", "Test Corp", "Tampa", "FL"],
    ["James Houston", "Test Corp", "Dallas", "TX"],
    ];

    const CarDetailPagedata = [
    ["กข 231", "อู่ 1", "ตุ๊กตุ๊ก", "ลิเธียม", "22/ก.ย./64", "40 กม./ชม.", "20", "22/ก.ย./64", "ดี"],
    ];



    return (
        <div style={{marginTop:'10vh'}}>
            <MUIDataTable
                title={"ข้อมูลรถ"}
                data={CarDetailPagedata}
                columns={columns}
            />
            
        </div>
    );
};

export default BodyPage;
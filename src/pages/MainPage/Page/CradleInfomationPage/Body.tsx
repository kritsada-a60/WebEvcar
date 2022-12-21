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

    const columns = ["เลขที่กิจการ", "รูปแบบกิจการ", "ที่อยู่", "ชื่อเจ้าของอู่", "เบอร์ติดต่อ", "เวลาทำการ", "จำนวนรถ"];

    const data = [
    ["Joe James", "Test Corp", "Yonkers", "NY"],
    ["John Walsh", "Test Corp", "Hartford", "CT"],
    ["Bob Herm", "Test Corp", "Tampa", "FL"],
    ["James Houston", "Test Corp", "Dallas", "TX"],
    ];

    const CradleInfomationPagedata = [
    ["11/10711", "อู่รถ ", "159/2 อ.เมือง จ.ลพบุรี", "ยอดชาย    ทรายทอง", "xxx-xxx-xxxx", "08.30-17.30 น.", "4"],
    ];



    return (
        <div style={{marginTop:'10vh'}}>
            <MUIDataTable
                title={"ข้อมูลอู่"}
                data={CradleInfomationPagedata}
                columns={columns}
            />
            
        </div>
    );
};

export default BodyPage;
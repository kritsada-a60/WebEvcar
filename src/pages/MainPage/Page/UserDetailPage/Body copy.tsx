import MUIDataTable from 'mui-datatables';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios, { Axios } from 'axios';

export interface IBodyPageProps {}

type MyDataPost = {
    u_id: number;
    u_name: string;
    ul_id: number;
    ut_id: number;
};

const baseURL = 'https://evcarkmitl.com:5000/user/login';

const BodyPage: React.FunctionComponent<IBodyPageProps> = (props) => {
    const [post, setpost] = useState(['1', '2']);
    const [mypost, setmypost] = useState<MyDataPost[]>([{ u_id: 1, u_name: 'admin', ul_id: 1, ut_id: 1 }]);
    const [post2, setpost2] = useState<MyDataPost[]>([{ u_id: 2, u_name: 'admin', ul_id: 1, ut_id: 1 }]);

    // useEffect(() =>{
    //   axios
    //     .post(baseURL, {
    //         uname: "admin",
    //         upass: "1234"
    //     })
    //     .then((res) => {
    //         // setpost(res.data.data)
    //         console.log(res.data.data)
    //     })
    //     .catch((err) => console.error(err));
    // }, []);

    function postdata() {
        axios
            .post(baseURL, {
                uname: 'admin',
                upass: '1234'
            })
            .then((res) => {
                setpost(res.data.data);
                // setpost2(res.data.data)
                setpost2([res.data.data]);
                console.log(res.data.data);
            })
            .catch((err) => console.error(err));
    }

    useEffect(() => {
        console.log('this data', post);
    }, [post]);

    useEffect(() => {
        console.log('this data2', post2);
    }, [post2]);

    // if (!post) return null;

    const columns = ['เลขที่กิจการ', 'รูปแบบกิจการ', 'สถานะเปิด/ปิด', 'ที่อยู่', 'ชื่อเจ้าของอู่', 'เบอร์ติดต่อ'];

    const data = [
        ['Joe James', 'Test Corp', 'Yonkers', 'NY'],
        ['John Walsh', 'Test Corp', 'Hartford', 'CT'],
        ['Bob Herm', 'Test Corp', 'Tampa', 'FL'],
        ['James Houston', 'Test Corp', 'Dallas', 'TX']
    ];

    const UserDetaildata = [['11/10711', 'สถานีประจุไฟ', 'เปิด', '12/1 อ.เมือง จ.ลพบุรี', 'คล่องแคล่ว    ว่องไว', 'xxx-xxx-xxxx']];

    const myJSON = JSON.stringify(post);

    return (
        <div style={{ marginTop: '10vh' }}>
            <button onClick={postdata}>Click!</button>
            <p>
                {console.log(post)}
                {console.log(data)}
                {console.log(mypost)}
                {data}
            </p>
            <MUIDataTable
                title={'ข้อมูลผู้ใช้งาน'}
                // data = {data}
                data={post2.map((item) => {
                    return [item.u_id, item.u_name, item.ul_id, item.ut_id];
                })}
                columns={columns}
            />
            {post ? (
                <>1</>
            ) : (
                <>
                    <MUIDataTable
                        title={'ข้อมูลผู้ใช้งาน'}
                        data={post2}
                        // data={post.map(item => {
                        //     return [
                        //         item.u_id,
                        //         item.u_name,
                        //         item.ul_id,
                        //         item.ut_id
                        //     ]
                        // })}
                        columns={columns}
                    />
                </>
            )}
        </div>
    );
};

export default BodyPage;

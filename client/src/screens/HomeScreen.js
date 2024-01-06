import React, { useEffect, useState } from "react";
import axios from "axios";
import Room from "../components/Room";
import Loader from "../components/Loader";
import Error from "../components/Error";
import { DatePicker, Space } from 'antd';
import moment from "moment";

const { RangePicker } = DatePicker;

function HomeScreen() {
    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState(false);
    const [fromDate, setFromDate] = useState();
    const [toDate, setToDate] = useState();

    useEffect(() => {
        let getRes = async () => {
            try {
                setLoading(true);
                const response = (await axios.get("api/rooms/getAllRooms"))
                    .data;
                setRooms(response);
                setLoading(false);
            } catch (error) {
                console.log(error);
            }
        };
        getRes();
    }, []);

    function filterByDate(dates) {
        const dayFrom = new Date(dates[0]);
        const dayTo = new Date(dates[1]);
        
        setFromDate(moment(dayFrom).format('DD-MM-YYYY'))
        setToDate(moment(dayTo).format('DD-MM-YYYY'));
    }

    return (
        <div className="container">
            <div className="row mt-5">
                <Space direction="vertical" size={12}>
                    <RangePicker format='DD-MM-YYYY' onChange={filterByDate}/>
                </Space>
            </div>

            <div className="row justify-content-center mt-4">
                {loading ? (
                    <Loader />
                ) : rooms ? (
                    rooms.map((room) => {
                        return (
                            <div className="col-md-9 mt-2">
                                <Room room={room} fromDate = {fromDate} toDate = {toDate} />
                            </div>
                        );
                    })
                ) : (
                    <Error />
                )}
            </div>
        </div>
    );
}

export default HomeScreen;

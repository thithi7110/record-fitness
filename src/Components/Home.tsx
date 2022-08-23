import { useState, useEffect, ReactNode } from 'react';
import '../App.css'
import React from 'react';
import { useHistory } from "react-router-dom";
import { db } from '../firebase';
import { collection, getDocs, Timestamp } from 'firebase/firestore';
import Button from 'react-bootstrap/Button';
import { formatDateToString } from '../Utils/utils';
import Record from './Record';

function Home() {
    const history = useHistory();

    return (
        <>
            <Button onClick={() =>history.push('/Record')}>きょうのきろく</Button>
            <p>todo:Home画面にカレンダーつける＞カレンダーの日付クリックするとその日の明細に飛ぶ</p>
            <p>今日の登録で登録更新できるようにする</p>
            <p>今日の登録＞数値入力＞今日の登録で遷移した際に毎回FirebaseStoreへのアクセスするのではなく、StoreにState保持</p>
        </>
    );
}


export default Home;
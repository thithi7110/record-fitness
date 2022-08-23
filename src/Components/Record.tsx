import React, { useState, useEffect, ReactNode } from 'react';
import '../App.css'
import { db } from '../firebase';
import { collection, getDocs, Timestamp } from 'firebase/firestore';
import Button from 'react-bootstrap/Button';
import { formatDateToString } from '../Utils/utils';
import { Router, Switch, useHistory } from "react-router-dom";
import RecordCount from './RecordCount';
import { useSelector } from '../store'; //react-reduxのuseSeletorを直接つかわず型解決された独自版を使用
import { useDispatch } from 'react-redux';
import { setRecordState } from '../Slices/recordSlice';

function Record() {

    //画面で管理するデータをReduxで管理
    //日付、[種目、（㎏と回数配列）配列]
    const recordState = useSelector((state) => state.record);
    const dispatch = useDispatch();
    //stateに保存されている場合その値
    const [fits, setFits] = useState({ fitType: recordState.fitType, date: recordState.date, fitContents: recordState.fitContents });
    const history = useHistory();
    // type cType = { weight: number, count: number[] };
    // let updContents: cType[];

    useEffect(() => {
        //fitsに値が入っているかチェック
        if (!fits.date) {
            const fitnessCollectionRef = collection(db, 'fitness');
            getDocs(fitnessCollectionRef).then((querySnapshot) => {
                querySnapshot.docs.forEach((doc) => {
                    //console.log(doc.data().contents["fit-contents"]);
                    //使いやすい形に整形
                    var obj = {
                        fitType: doc.data().contents.fitType,
                        date: formatDateToString(doc.data().date.toDate()),
                        fitContents: doc.data().contents["fit-contents"]
                    }
                    obj.fitContents.map((content: { weight: number, count: number, fitdatetime: Timestamp }) => {
                        //同じKgでまとめる
                        /*
                        [{32,[5,4,3]},{28,[5,4,3]}]        
                         */
                        let findObj = fits?.fitContents.find((r) =>
                            r.weight === content.weight
                        );
                        if (!!findObj) {
                            findObj.count.push(content.count);
                        } else {
                            if (!!fits?.fitContents) {
                                fits.fitContents = [...fits?.fitContents, {
                                    weight: content.weight,
                                    count: [content.count]
                                }];
                            } else {
                                fits.fitContents = [{
                                    weight: content.weight,
                                    count: [content.count]
                                }];
                            }
                        }
                    });

                });

                setFits({...fits} );
            });
        }

    }, []);

    const createFitContents = (): ReactNode => {

        return fits.fitContents.map((r) => {
            let cnts = r.count.map((cnt) =>
                <Button variant="info" >{cnt}</Button>
            );

            return (
                <div>
                    <Button className={'icon-weight'}>{r.weight}</Button>
                    {cnts}
                    <Button variant="info" className={'icon-plus'}></Button>
                </div>

            );

        });

    }

    let fitcontentsForRender: ReactNode = createFitContents();

    const onChangeRecordCount = (e: React.ChangeEvent<HTMLInputElement>) => {
        return "";
    }

    const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        //storeにいったん保存
        dispatch(setRecordState(fits));

        history.push({
            pathname: "/RecordCount",
            state: {
                count: "1",
                onChange: onChangeRecordCount
            }
        });
    }

    return (
        <>
            <div>
                <p >date:{fits.date}</p>
                <p >fitType:{fits.fitType}</p>
                {fitcontentsForRender}
                <div>
                    <Button className={'icon-weight' + ' ' + 'icon-plus'} onClick={onClick}></Button>
                </div>
            </div>
        </>);
}


export default Record;
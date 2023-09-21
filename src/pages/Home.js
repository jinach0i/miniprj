import React from "react"
import {useLocation} from 'react-router-dom';

export default function Home (){
    const location=useLocation();

    return (
        <div className="homepage">

            <h1>{location.state.id}님 환영합니다!</h1>

        </div>
    )
}
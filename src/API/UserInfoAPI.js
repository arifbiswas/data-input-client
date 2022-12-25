import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

export const UseUserInfo =()=>{
    const {data : userinfo, refetch} = useQuery({
        queryKey : ["userinfo"],
        queryFn :()=> axios.get("https://data-input-server.vercel.app/userdata").then(res =>{
            return res.data;
        })
    })
    return [userinfo,refetch]
}
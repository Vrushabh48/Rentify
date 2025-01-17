"use client"

import { useRouter } from "next/navigation"


export default function Home (){
    const router = useRouter();
    return(
        <div>
            This is the Home Page
            <div>
                <button className="p-1 border-b-2 bg-blue-700 rounded-lg hover:bg-blue-500 m-3 text-white" onClick={()=> {router.push('/profile')}}>Profile</button>
            </div>
            <div>
                <button className="p-1 border-b-2 bg-blue-700 rounded-lg hover:bg-blue-500 m-3 text-white" onClick={()=> {router.push('/products')}}>Products</button>
            </div>
            <div>
                <button className="p-1 border-b-2 bg-blue-700 rounded-lg hover:bg-blue-500 m-3 text-white" onClick={()=> {router.push('/approvalrequests')}}>Approval Request</button>
            </div>
        </div>
    )
}
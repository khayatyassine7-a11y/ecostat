import { useState } from "react";
import { useRouter } from "next/router";

export default function Upload(){
  const [files,setFiles]=useState({});
  const router=useRouter();

  const send=async()=>{
    const fd=new FormData();
    Object.keys(files).forEach(k=>fd.append(k,files[k]));
    const res=await fetch("/api/upload",{method:"POST",body:fd});
    const data=await res.json();
    router.push({pathname:"/verify",query:{data:JSON.stringify(data)}});
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="font-bold mb-4">Upload</h2>
      <input type="file" onChange={e=>setFiles({...files,cgA:e.target.files[0]})}/>
      <input type="file" onChange={e=>setFiles({...files,cgB:e.target.files[0]})}/>
      <button onClick={send} className="bg-blue-600 text-white mt-4 p-2 w-full rounded">
        Analyser
      </button>
    </div>
  );
}
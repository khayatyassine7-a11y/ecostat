import { useRouter } from "next/router";
import { useState } from "react";

export default function Verify(){
  const router=useRouter();
  const data=JSON.parse(router.query.data||"{}");
  const [form,setForm]=useState(data);

  return (
    <div className="p-4">
      <h2>Vérification</h2>
      {Object.keys(form).map(k=>(
        <input key={k} value={form[k]?.nom||""}
        onChange={e=>setForm({...form,[k]:{...form[k],nom:e.target.value}})}
        className="border p-2 block mb-2"/>
      ))}
      <button onClick={()=>router.push({pathname:"/result",query:{data:JSON.stringify(form)}})}
      className="bg-blue-600 text-white p-2">Continuer</button>
    </div>
  );
}
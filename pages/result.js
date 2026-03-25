import { useRouter } from "next/router";

export default function Result(){
  const router=useRouter();
  const data=JSON.parse(router.query.data||"{}");

  const dl=async()=>{
    const res=await fetch("/api/pdf",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(data)});
    const blob=await res.blob();
    const url=URL.createObjectURL(blob);
    const a=document.createElement("a");
    a.href=url;
    a.download="constat.pdf";
    a.click();
  };

  return <div className="p-4">
    <h2>PDF prêt</h2>
    <button onClick={dl} className="bg-green-600 text-white p-2">Télécharger</button>
  </div>;
}
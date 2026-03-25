import { PDFDocument } from "pdf-lib";

export default async function handler(req,res){
  const pdf=await PDFDocument.create();
  const page=pdf.addPage([600,800]);
  page.drawText("Constat", {x:50,y:750});
  const bytes=await pdf.save();
  res.setHeader("Content-Type","application/pdf");
  res.send(Buffer.from(bytes));
}
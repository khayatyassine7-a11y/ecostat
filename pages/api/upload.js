import multer from "multer";
import nextConnect from "next-connect";
import fs from "fs";
import { extract } from "../../lib/googleVision";
import { parse } from "../../lib/parser";

const upload=multer({dest:"./tmp"});
const handler=nextConnect();
handler.use(upload.any());

handler.post(async(req,res)=>{
  let out={};
  for(const f of req.files){
    const txt=await extract(f.path);
    out[f.fieldname]=parse(txt);
    fs.unlinkSync(f.path);
  }
  res.json(out);
});

export const config={api:{bodyParser:false}};
export default handler;

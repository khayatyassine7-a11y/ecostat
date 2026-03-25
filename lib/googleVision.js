import vision from "@google-cloud/vision";
const client=new vision.ImageAnnotatorClient();

export async function extract(file){
  const [res]=await client.textDetection(file);
  return res.textAnnotations?.[0]?.description || "";
}
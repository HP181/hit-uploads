import { put } from '@vercel/blob';
import { handleUpload } from '@vercel/blob/client';
import { NextRequest, NextResponse } from 'next/server';




export async function POST(request, response) {
    const formDatas = await request.formData();
    console.log("rr", toString(formDatas));


  console.log("bo", formDatas);
  console.log("bo", formDatas);
 
  try {
      const file = formDatas.get("file")
      console.log("fi", file);

   const a = await put(file, file.name, {
    access : "public",
    // addRandomSuffix : false,
    // multipart : true
   })


 console.log("aaa", a);
    return NextResponse.json(a);
  } catch (error) {
    return NextResponse.json(
      { error:  error.message },

      { status: 400 }, // The webhook will retry 5 times waiting for a status 200
    );
  }
}
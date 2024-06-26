import {  httpsCallable } from 'firebase/functions';
import { initializeApp } from "firebase/app";
import {functions} from './firebase';
// const firebaseConfig = {
//   apiKey: "AIzaSyCGLCmhC9AMenKvgLT1Oeh6PH0qqcpEkuw",
//   authDomain: "clone-47127.firebaseapp.com",
//   projectId: "clone-47127",
//   appId: "1:1005442723878:web:10eb447ecf760d8cf9f6e7",
//   measurementId: "G-5G5CMRXY9M"
// };
// const app = initializeApp(firebaseConfig);


const generateUploadUrlFunction = httpsCallable(functions, 'generateUploadUrl');
const getVideosFunction = httpsCallable(functions, 'getVideos');

export async function uploadVideo(file: File) {
  const response: any = await generateUploadUrlFunction({
    fileExtension: file.name.split('.').pop()
  });

  // Upload the file to the signed URL
  const uploadResult = await fetch(response?.data?.url, {
    method: 'PUT',
    body: file,
    headers: {
      'Content-Type': file.type,
    },
    cache:'no-cache'
  });

  return uploadResult;
}



export interface Video {
  id?: string,
  uid?: string,
  filename?: string,
  status?: 'processing' | 'processed',
  title?: string,
  description?: string
}

export async function getVideos() {
  const response: any = await getVideosFunction();
  return response.data as Video[];
}


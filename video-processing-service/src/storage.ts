import {Storage} from '@google-cloud/storage';
import fs from 'fs';
import ffmpeg from 'fluent-ffmpeg';
import { resolve } from 'path';
import { rejects } from 'assert';

const storage = new Storage();

const rawVideoBucketName = "rahul-yt-raw-videos";
const processedVideoBucketName = "rahul-yt-processed-videos";

const localRawVideoPath = "./raw-videos";
const localProcessedVideoPath = "./processed-videos";

export function setupDirectories(){

}

export function convertVideo(rawVideoName: String,processedVideoName: String){
    return new Promise<void>((resolve,reject)=>{
        ffmpeg(`${localRawVideoPath}/${rawVideoName}`)
        .outputOptions('-vf', 'scale=-1:360') // 360p
        .on('end', function() {
            console.log('Processing finished successfully');
            resolve();
        })
        .on('error', function(err: any) {
            console.log('An error occurred: ' + err.message);
            reject(err);
        })
        .save(`${localProcessedVideoPath}/${processedVideoName}`);
    });
}
export async function downloadRawVideo(fileName:String){
    storage.bucket(rawVideoBucketName)
        .
}
export async function uploadProcessedVidep(fileName:String){
    
}
import {promises as fs} from 'fs';
import { NextResponse } from 'next/server';

export async function GET(request, {params}) {
    
    const file  = await  fs.readFile(process.cwd() + '/src/app/api/base/data.json', 'utf8');

    const id = params.id;

    const origin =  await JSON.parse(file);
    
    if(id > 0 && id <= origin.origin.length){
        return  NextResponse.json(origin.origin.find((user)=> user.id == id));
    }else{
        return id == 0 ? NextResponse.json(origin.origin) : NextResponse.redirect("http://localhost:3000/error")
    }
}

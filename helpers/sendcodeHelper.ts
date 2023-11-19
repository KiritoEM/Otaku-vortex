import React from 'react'

export default function sendcodeHelper(e: any) {
    //recuperation des valuers de l' input
    const form = e.target;
    const code = form["code"].value;
    console.log(code);
}

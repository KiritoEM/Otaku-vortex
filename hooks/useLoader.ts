import React, { useState } from 'react'

export default function useLoader() {
    const [loading, setLoading]= useState(true);

    return {loading,setLoading}
}

import React from 'react'
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from 'react'


export const Protected = (propsData) => {
  const Prop = propsData.prop

  const navigate = useNavigate();
  let getData = localStorage.getItem('login');
  useEffect(() => {
    if (getData == 1) {
      navigate("/Login");
    }
  }, [])

  return (
    <div><Prop /></div>
  )
}

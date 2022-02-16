import React, { useEffect, useState } from "react"


export const fetchTags = () => {
    return fetch("http://localhost:8000/tags", {
        method: "GET",
        headers: {
            "Authorization": `Token ${localStorage.getItem("token")}`
        }
    })
        .then((res) => res.json())
       
}

export const deleteTags = (tagId) => {
    return fetch(`http://localhost:8000/tags/${tagId}`, {
        method: "Delete",
        headers: {
            "Authorization": `Token ${localStorage.getItem("token")}`,
        },
    })
}

export const createTag = (tag) => {
    return fetch("http://localhost:8000/tags", {
      method: "POST",
      headers: {
        "Authorization": `Token ${localStorage.getItem("token")}`,
        'Content-Type': "application/json"
      },
      body: JSON.stringify(tag)
    })
      .then(res => res.json())
  }

  export const updateTag = (tag) => {
    return fetch(`http://localhost:8000/tags/${tag.id}`, {
      method: "PUT",
      headers: {
        "Authorization": `Token ${localStorage.getItem("token")}`,
        'Content-Type': "application/json"
      },
      body: JSON.stringify(tag)
    })
  }

  export const getTag = (tagId) => {
    return fetch(`http://localhost:8000/tags/${tagId}`, {
      headers: {
        'Authorization': `Token ${localStorage.getItem('token')}`
      }
    }).then(res => res.json())
  }  
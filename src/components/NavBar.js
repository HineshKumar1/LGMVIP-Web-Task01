import React from 'react'


export default function NavBar(props) {
  return (
    <>
    <nav class="navbar">
    <div class="container-fluid">
        <a class="navbar-brand text-center" href="/">
        {props.title}
        </a>
    </div>
    </nav>
    </>
  )
}

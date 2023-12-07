"use client";

import "../styles/Navbar.css";
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  return (
    <main>
      <nav className='Navbar'>
            <div className='Navbar-box'>
                <span data-texto="Home" onClick={() => {router.push("/home")}}>Home</span>
            </div>
            <div className='Navbar-box'>
                <span data-texto="About" onClick={() => {router.push("/about")}}>About</span>
            </div>
            <div className='Navbar-box'>
                <span data-texto="Blog" onClick={() => {router.push("/blog")}}>Blog</span>
            </div>
            <div className='Navbar-box'>
                <span data-texto="Project" onClick={() => {router.push("/project")}}>Project</span>
            </div>
            <div className='Navbar-box'>
                <span data-texto="Contact" onClick={() => {router.push("/contact")}}>Contact</span>
            </div>
        </nav>
    </main>
  )
}

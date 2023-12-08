"use client";

import React from 'react';
import { PROJECT } from '../../story/PROJECT';
import "../../styles/Project.scss";
import { useEffect } from 'react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import FetchAOS from "../../utils/FetchAOS";
import { FaBackward, FaBlogger, FaAddressCard, FaFileContract } from "react-icons/fa";

const Page = () => {
    FetchAOS();
    const [conteudoGeral, setConteudoGeral] = useState("js-conteudo-geral");
    const router = useRouter();
    const conteudoEmArray = (item) => {
        if(item){
            setConteudoGeral("caixa--componente-ativo")
            item.caixa = "caixa-conteudo-ativo";
        }
    }
    const botoesDeFechar = (e, item) => {
        if(item){
            e.stopPropagation();
            setConteudoGeral("");
            item.caixa = ""
        }
    }
    useEffect(() => {
        setTimeout(() => {
            setConteudoGeral("")
        }, 200)
    },[])
    // console.log(PROJECT)
    return (
        <div className='Skills'>
            <div className={`conteudo-gerals ${conteudoGeral}`}>
                <div className="componente-interno-geral">
                    {PROJECT.map((item) => {
                        return(
                            <div className={`componente ${item.caixa}`} key={item.id} onClick={() => conteudoEmArray(item)}>
                                <div className="componente-sem-rolagem">
                                    <div className="componente-interno">
                                        <div className="componente-fundo-imagem"></div>
                                        <div className="componente-visual-inicial">
                                            <h2 className="componente-titulo">{item.name}</h2>
                                        </div>
                                        <div className="componente-content">
                                            {item.id === 1 &&
                                            <div className="componente-text">
                                                <h3>Reactjs</h3>
                                                {item.project.map((project) => {
                                                    return(
                                                        <div className='componente-text_item' key={project.idProject}>
                                                            <div className='componente-text-detail'>
                                                                <div>
                                                                    <h4>Name:</h4>
                                                                    <p>{project.nameProject}</p>
                                                                </div>
                                                                <div>
                                                                    <h4>Code:</h4>
                                                                    <a href={project.soundCode}><p>{project.soundCode}</p></a>
                                                                </div>
                                                                <div>
                                                                    <h4>Deploy:</h4>
                                                                    <a href={project.deploy}><p>{project.deploy}</p></a>
                                                                </div>
                                                            </div>
                                                            <div className='componente-text-img'>
                                                                <img src={project.img.src} alt={project.nameProject} />
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                            </div>}
                                            {item.id === 2 &&
                                            <div className="componente-text">
                                                <h3>WordPress</h3>
                                                {item.project.map((project) => {
                                                    return(
                                                        <div className='componente-text_item' key={project.idProject}>
                                                            <div className='componente-text-detail'>
                                                                <div>
                                                                    <h4>Name:</h4>
                                                                    <p>{project.nameProject}</p>
                                                                </div>
                                                                <div>
                                                                    <h4>Code:</h4>
                                                                    <a href={project.soundCode}><p>{project.soundCode}</p></a>
                                                                </div>
                                                                <p><b><i style={{color: "red"}}>Note: You should change the file name from (Namefile)-WP to Namefile if you don't want to encounter errors</i></b></p>
                                                                <div>
                                                                    <h4>Database:</h4>
                                                                    <a href={project.link} download={project.nameDatabase}><p>{project.nameDatabase}</p></a>
                                                                </div>
                                                            </div>
                                                            <div className='componente-text-img'>
                                                                <video autoPlay loop muted poster={project.img.src}>
                                                                    <source src={project.video} type="video/mp4" />
                                                                </video>
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                            </div>}
                                            <div className="componente-botao-fechar" onClick={(e) => botoesDeFechar(e, item)}></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="componente-index">
                                    <div className="componente-index-back">{item.id}</div>
                                    <div className="componente-index-front">
                                        <div className="componente-index-overlay" data-index={item.id}>{item.id}</div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div style={{position: "absolute", top: 0, right: 20}} className='Skill_navigation'>
                <ul style={{margin: "20px 20px 0px"}}>
                    <li title='Menu' onClick={() => {router.push("/")}}><FaBackward /></li>
                    <li title='Blog' onClick={() => {router.push("/blog")}}><FaBlogger /></li>
                    <li title='About' onClick={() => {router.push("/about")}}><FaAddressCard  /></li>
                    <li title='Contact' onClick={() => {router.push("/contact")}}><FaFileContract /></li>
                </ul>
            </div>
        </div>
    );
};

export default Page;
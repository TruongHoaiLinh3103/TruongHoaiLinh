import kenshoImg from "../../public/kensho.png";
import cvImg from "../../public/aboutme.png";
import etcImg from "../../public/etc.png";
import hoangha from "../../public/HoangHa.mp4"
import TintuctonghopVideo from "../../public/TintuctonghopVideo.mp4"
import hoanghaImg from "../../public/HoangHaMobile.png"
import ttthImg from "../../public/Tin-tuc-tong-hop.png"
export const PROJECT = [
    {
        id: 1,
        name: "Reactjs",
        caixa: "",
        project: [
            {
                idProject: 1,
                nameProject: "ETC",
                soundCode: "https://github.com/TruongHoaiLinh3103/etc",
                deploy: "https://etc-31032003.web.app",
                img: etcImg
            },
            {
                idProject: 2,
                nameProject: "Kensho",
                soundCode: "https://github.com/TruongHoaiLinh3103/kensho",
                deploy: "https://kensho-31032003.web.app",
                img: kenshoImg
            },
            {
                idProject: 3,
                nameProject: "CV",
                soundCode: "https://github.com/TruongHoaiLinh3103/AboutMe",
                deploy: "https://truonghoailinh3103.github.io/AboutMe/",
                img: cvImg
            },
        ]
    },
    {
        id: 2,
        name: "WordPress",
        caixa: "",
        project: [
            {
                idProject: 1,
                nameProject: "Hoàng Hà mobile",
                soundCode: "https://github.com/TruongHoaiLinh3103/BanThietBiDiDong-WP",
                nameDatabase: "tbdd.sql",
                link: "https://github.com/TruongHoaiLinh3103/ZRespository/blob/main/CSDL/tbdd.sql",
                img: `${hoanghaImg}`,
                video: `${hoangha}`
            },
            {
                idProject: 2,
                nameProject: "Tin tức tổng hợp",
                soundCode: "https://github.com/TruongHoaiLinh3103/TinTuc-WP",
                nameDatabase: "tin-tuc.sql",
                link: "https://github.com/TruongHoaiLinh3103/ZRespository/blob/main/CSDL/tin-tuc.sql",
                img: `${ttthImg}`,
                video: `${TintuctonghopVideo}`
            },
        ]
        
    },
]
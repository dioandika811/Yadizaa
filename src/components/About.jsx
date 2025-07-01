import "../styles/About.css";
import { SiAutocad } from "react-icons/si";
import { SiArchicad } from "react-icons/si";
import { SiSketchup } from "react-icons/si";
function About() {
  return (
    <section id="about">
      <div className="wrapper">
        <h3>About</h3>
        <p>
          YADIZA RENO TABAH SIMBOLON, Saya Mahasiswa Universitas Satya Terra
          Bhinneka Prodi Informatika, saya tamatan SMK Negeri 5 Medan jurusan
          Desain Pemodelan dan Informasi Bangunan (DPIB). <br />
        </p>
        <p>
          Banyak yang ilmu yang saya dapat ketika menduduki bangku SMK, terutama
          saat PKL di bagian desain rumah minimalis, jalan dan drainase
          menggunakan Aplikasi AutoCAD dan ArchiCAD. Bahkan saya juga belajar
          Desain Interior menggunakan Aplikasi SketchUp dan ArchiCAD.
        </p>
        <h4>Architect & Design Buff</h4>
        <div className="skills">
          <SiAutocad />
          <SiArchicad />
          <SiSketchup />
        </div>
      </div>
    </section>
  );
}

export default About;

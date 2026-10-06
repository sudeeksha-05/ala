import React, { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

const projects = [
  {
    number:"01", featured:true, tone:"blue",
    name:"Viharam", type:"Multi-Agent AI Travel Planner",
    summary:"A multi-agent travel planning system that coordinates specialized agents to turn a destination, budget and preferences into a structured trip plan.",
    details:["Budget Agent — deterministic Python logic","Itinerary Agent — LLM-powered planning","Weather Agent — Open-Meteo integration","FastAPI orchestration","API-based travel information"],
    stack:["Python","FastAPI","Gemini","Open-Meteo","REST APIs","Multi-Agent AI"],
    link:"https://github.com/rajeswarikasani422-creator/viharam-travel-planner"
  },
  {
    number:"02", featured:true, tone:"violet",
    name:"Placement IQ", type:"AI × Career Intelligence",
    summary:"An intelligent placement-preparation platform built around assessment, performance analysis, skill-gap identification and actionable improvement.",
    details:["Student profile & readiness","Aptitude and coding practice","Performance analysis","Skill-gap identification","Personalized improvement guidance"],
    stack:["Python","React","FastAPI","MongoDB","AI","REST APIs"],
    link:"https://github.com/sudeeksha-05/Placement-IQ"
  },
  {
    number:"03", featured:true, tone:"green",
    name:"Campus Waste Intelligence", type:"AI × Sustainability",
    summary:"An AI-powered smart waste management system that predicts bin overflow, identifies high-risk bins and supports smarter collection with a grounded RAG assistant.",
    details:["Waste-level / sensor data","Overflow-risk prediction","High-risk bin analysis","Collection & route intelligence","RAG assistant with ChromaDB"],
    stack:["Machine Learning","RAG","ChromaDB","Python","Route Optimization"],
    link:"https://github.com/sudeeksha-05/campus-waste-intelligence"
  },
  {
    number:"04", name:"Churn Sense AI", type:"Machine Learning × Web",
    summary:"Interactive customer churn prediction that turns model output into a usable risk-analysis experience.",
    details:["Customer inputs","Churn classification","Risk analysis","Interactive frontend"],
    stack:["React","TypeScript","Vite","Tailwind CSS","ML"],
    link:"https://github.com/sudeeksha-05/Churn-sense-ai"
  },
  {
    number:"05", name:"Healthcare Analytics Platform", type:"Data × Better Decisions",
    summary:"Healthcare analytics work focused on turning patient data into trends, visual stories and decision-support insights.",
    details:["Exploratory analysis","Interactive dashboards","Data visualization","Machine-learning analysis"],
    stack:["Power BI","Python","Pandas","Machine Learning"],
    link:"https://github.com/sudeeksha-05/Healthcare-Analytics-Platform"
  },
  {
    number:"06", name:"Employee Attrition Analytics", type:"Workforce Intelligence",
    summary:"A predictive analytics concept exploring attrition, burnout, promotion insights, salary recommendations and workforce planning.",
    details:["Attrition risk","Burnout prediction","Promotion insights","Salary recommendation","Workforce planning"],
    stack:["Predictive Analytics","Power BI","Machine Learning"]
  }
];

const skills = [
  ["Programming","Python · Java · C · JavaScript · R"],
  ["Data Science","Pandas · NumPy · Matplotlib · Scikit-learn"],
  ["Generative AI","RAG · Embeddings · ChromaDB · Prompt Engineering · AI Agents"],
  ["Development","React · TypeScript · Vite · Tailwind CSS · REST APIs"],
  ["Databases","MySQL · MongoDB"],
  ["Tools & Cloud","Git · GitHub · Jupyter · Docker · AWS · GCP"]
];

function Cursor(){
  const dot=useRef(null), ring=useRef(null);
  const [label,setLabel]=useState("");
  useEffect(()=>{
    if(!window.matchMedia("(hover:hover) and (pointer:fine)").matches) return;
    document.documentElement.classList.add("cursor-mode");
    let x=innerWidth/2,y=innerHeight/2,dx=x,dy=y,rx=x,ry=y,raf;
    const move=e=>{
      x=e.clientX;y=e.clientY;
      const target=e.target.closest("[data-cursor],a,button");
      setLabel(target ? target.dataset.cursor || (target.matches("a") ? "↗" : "•") : "");
    };
    const tick=()=>{
      dx+=(x-dx)*.28;dy+=(y-dy)*.28;rx+=(x-rx)*.10;ry+=(y-ry)*.10;
      if(dot.current) dot.current.style.transform=`translate3d(${dx}px,${dy}px,0) translate(-50%,-50%)`;
      if(ring.current) ring.current.style.transform=`translate3d(${rx}px,${ry}px,0) translate(-50%,-50%)`;
      raf=requestAnimationFrame(tick);
    };
    addEventListener("pointermove",move);tick();
    return()=>{removeEventListener("pointermove",move);cancelAnimationFrame(raf);document.documentElement.classList.remove("cursor-mode")};
  },[]);
  const big=label && label!=="•";
  return <><div ref={ring} className={`cursor-ring ${big?"cursor-big":label?"cursor-active":""}`}><span/></div><div ref={dot} className={`cursor-dot ${big?"cursor-label":""}`}>{big?label:""}</div></>;
}

function useReveal(){
  useEffect(()=>{
    const els=document.querySelectorAll(".reveal");
    const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.12});
    els.forEach(e=>io.observe(e));return()=>io.disconnect();
  },[]);
}

function App(){
  const [menu,setMenu]=useState(false), [active,setActive]=useState(null);
  useReveal();
  return <div>
    <Cursor/>
    <header className="nav">
      <a className="logo" href="#top" data-cursor="Home">SA<span>.</span></a>
      <nav className={menu?"open":""}>
        <a href="#projects" onClick={()=>setMenu(false)}>Projects</a>
        <a href="#stack" onClick={()=>setMenu(false)}>Stack</a>
        <a href="#about" onClick={()=>setMenu(false)}>About</a>
        <a href="#contact" onClick={()=>setMenu(false)}>Contact</a>
      </nav>
      <a className="recruiter" href="#contact" data-cursor="Hello">Let's talk ↗</a>
      <button className="menu-btn" onClick={()=>setMenu(!menu)} aria-label="Toggle menu">☰</button>
    </header>

    <main id="top">
      <section className="hero">
        <div className="hero-glow"/>
        <div className="hero-copy reveal">
          <p className="eyebrow"><span>01</span> Data Science · Generative AI · Intelligent Applications</p>
          <h1>Building<br/><i>intelligence</i><br/>that feels useful.</h1>
          <p className="hero-text">I'm <strong>Sudeeksha Ala</strong>, a final-year B.Tech Data Science student building practical systems with machine learning, Generative AI, data and software.</p>
          <div className="hero-actions"><a className="primary-btn" href="#projects" data-cursor="Explore">Explore my work ↓</a><a className="text-btn" href="mailto:sudeekshaala@gmail.com">sudeekshaala@gmail.com ↗</a></div>
        </div>
        <div className="hero-visual reveal" data-cursor="Hello">
          <div className="portrait-frame">
            <img src="https://pixel-perfect-studio-496.lovable.app/__l5e/assets-v1/27f37a54-f2db-48b6-afe9-52c37425977b/sudeeksha-portrait.png" alt="Sudeeksha Ala"/>
            <div className="portrait-shade"/>
          </div>
          <div className="orbit"><span>AI</span><span>DATA</span><span>BUILD</span></div>
        </div>
      </section>

      <section className="statement reveal">
        <p className="eyebrow"><span>02</span> The idea</p>
        <h2>From <em>data</em> → patterns → decisions → products.</h2>
        <p>My strongest work sits where analytical thinking meets real-world problems: predictive systems, agentic workflows, RAG applications and data-driven experiences.</p>
      </section>

      <section id="projects" className="projects">
        <div className="section-head reveal"><p className="eyebrow"><span>03</span> Selected work</p><p>Built, tested, learned from.</p></div>
        <div className="project-list">
          {projects.map((p,i)=><article key={p.id||p.name} className={`project reveal ${p.featured?"featured":""} tone-${p.tone||"neutral"}`} onClick={()=>setActive(p)}>
            <div className="project-art">
              <div className="art-grid"/>
              <div className="art-number">{p.number}</div>
              <div className="art-orbit a"/><div className="art-orbit b"/><div className="art-core"/>
              <span className="art-label">{p.type}</span>
            </div>
            <div className="project-copy">
              <p className="eyebrow">{p.number} / {p.type}</p>
              <h3>{p.name}</h3>
              <p>{p.summary}</p>
              <div className="tags">{p.stack.slice(0,5).map(s=><span key={s}>{s}</span>)}</div>
              <span className="open-case">Open case study →</span>
            </div>
          </article>)}
        </div>
      </section>

      <section id="stack" className="stack-section">
        <div className="section-head reveal"><p className="eyebrow"><span>04</span> Technical arsenal</p><p>Scannable in ten seconds.</p></div>
        <div className="skill-grid">{skills.map(([a,b])=><div className="skill reveal" key={a}><span className="eyebrow">{a}</span><h3>{b}</h3></div>)}</div>
      </section>

      <section id="about" className="about reveal">
        <div><p className="eyebrow"><span>05</span> About</p><h2>Curious enough to explore.<br/><em>Practical enough to build.</em></h2></div>
        <div className="about-copy">
          <p>I'm interested in the space between machine learning, Generative AI and useful software. I like understanding how systems work — then turning that understanding into something people can actually use.</p>
          <p>Recent work spans multi-agent travel planning, placement intelligence, smart waste management, RAG, churn prediction and analytics.</p>
          <div className="facts"><div><strong>06+</strong><span>Featured projects</span></div><div><strong>RAG</strong><span>Built with ChromaDB</span></div><div><strong>AI</strong><span>Always experimenting</span></div></div>
        </div>
      </section>

      <section className="rag-banner reveal">
        <div><p className="eyebrow"><span>06</span> Featured technical thread</p><h2>Knowledge → embeddings → retrieval → <i>grounded answers.</i></h2></div>
        <div className="rag-flow">{["Knowledge Base","Chunking","Embeddings","ChromaDB","Retrieval","LLM","Answer"].map((x,i)=><React.Fragment key={x}><span>{x}</span>{i<6&&<b>→</b>}</React.Fragment>)}</div>
      </section>

      <section id="contact" className="contact reveal">
        <p className="eyebrow"><span>07</span> Start a conversation</p>
        <h2>Have a problem<br/><i>worth solving?</i></h2>
        <div className="contact-row"><a className="contact-circle" href="mailto:sudeekshaala@gmail.com" data-cursor="Write">Let's<br/>build</a><div><a className="email" href="mailto:sudeekshaala@gmail.com">sudeekshaala@gmail.com</a><div className="links"><a href="https://github.com/sudeeksha-05" target="_blank" rel="noreferrer">GitHub ↗</a><span>Hyderabad, India</span></div></div></div>
      </section>
    </main>

    <footer><span>© {new Date().getFullYear()} Sudeeksha Ala</span><span>Curious · Technical · Creative · Practical</span></footer>

    {active && <div className="modal-backdrop" onClick={()=>setActive(null)}><div className="case-modal" onClick={e=>e.stopPropagation()}>
      <button className="close" onClick={()=>setActive(null)}>Close ✕</button>
      <p className="eyebrow">{active.number} / {active.type}</p><h2>{active.name}</h2><p className="modal-summary">{active.summary}</p>
      <div className="modal-grid"><div><span className="eyebrow">What it solves</span><p>{active.details?.[0]}</p></div><div><span className="eyebrow">System / approach</span><ul>{active.details?.map(x=><li key={x}>{x}</li>)}</ul></div></div>
      <div className="tags modal-tags">{active.stack.map(s=><span key={s}>{s}</span>)}</div>
      {active.link && <a className="primary-btn" href={active.link} target="_blank" rel="noreferrer">View project ↗</a>}
    </div></div>}
  </div>
}
createRoot(document.getElementById("root")).render(<App/>);
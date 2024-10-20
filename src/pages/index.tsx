// src/pages/about.js
import Head from 'next/head';
import styles from '../styles/index.module.css';
import ContentBlock from "@/components/layout/content-block";
import Person from './business/person'
import Books from './business/books'
export default function About() {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth', // 设置平滑滚动
        block: 'start', // 滚动到目标的顶部
      });
    }
  };

  return (
    <>
        <Head>
          <link rel="icon" href="/tofu.ico" /> {/* 设置图标 */}
          <title>Tofu</title>
        </Head>
      <nav className={styles.navbar}>
        <ul>
          <li><a onClick={() => scrollToSection('introduction')}>个人介绍</a></li>
          <li><a onClick={() => scrollToSection('tech-stack')}>技术栈</a></li>
          <li><a onClick={() => scrollToSection('work-experience')}>工作经历</a></li>
          <li><a onClick={() => scrollToSection('hobbies')}>爱好</a></li>
        </ul>
      </nav>
      <main className={styles.main}>
        <ContentBlock id="introduction" >
          <Person />
        </ContentBlock>
        <ContentBlock id="tech-stack" >
           <Books/>
        </ContentBlock>
        <ContentBlock id="work-experience" >
          <h2>工作经历</h2>
          <p>在这里分享你的工作经历，包括公司名称、职位和工作内容等。</p>
        </ContentBlock>
        <ContentBlock id="hobbies" >
          <h2>爱好</h2>
          <p>在这里描述你的爱好和兴趣，例如阅读、旅行、运动等。</p>
        </ContentBlock>
      </main>
    </>
  );
}

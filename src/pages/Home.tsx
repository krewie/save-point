import HomeCard from "../components/home/HomeCard";
import HomeSection from "../components/home/HomeSection";
import bioCard from "../assets/img/bio1-card.png";
import shCard from "../assets/img/sh1-card.png";
import ff7Card from "../assets/img/ff7-card.png";

export default function Home() {
  return (
    <div>
      <section className="site-header">
      </section>

      <div className="intro">
        <p>皆さん、ようこそ。</p>
        <p>ここは私の日本語セーブポイントです。</p>
        <p>ゲームのメモ、スクリプト、文書、ドリルを集めています。</p>
      </div>

      <HomeSection
        title="Channels"
        description="ゲームのメモ、スクリプト、文書を読む"
      >
        <HomeCard
          href="/biohazard/pages/index.html"
          image={bioCard}
          alt="Biohazard"
          title="BIOHAZARD"
          description="メモとゲーム内テキストを読む"
        />

        <HomeCard
          href="/silent_hill/pages/index.html"
          image={shCard}
          alt="Silent Hill"
          title="SILENT HILL"
          description="メモと文書を読む"
        />

        <HomeCard
          href="/ff7/pages/index.html"
          image={ff7Card}
          alt="Final Fantasy VII"
          title="FINAL FANTASY VII"
          description="ゲームスクリプトを読む"
        />
      </HomeSection>

      <HomeSection title="Practice" description="日本語のクイズとドリル">
        <HomeCard
          href="/drills"
          title="DRILLS"
          description="クイズと練習モード"
        />

        <HomeCard
          href="/flashdrill"
          title="FLASH DRILL"
          description="JLPT kanji and reading practice"
        />

        <HomeCard
          href="/kanjireadingquiz"
          title="KANJI READING QUIZ"
          description="Practice kanji readings"
        />
      </HomeSection>

      <HomeSection
        title="Save Manager"
        description="技術メモ、改造メモ、調べたこと"
      >
        <HomeCard
          href="/docs/psx-ode"
          image="/assets/img/psx.png"
          alt="PSX"
          title="PSX MOD"
          description="Installing an ODE"
        />
      </HomeSection>
    </div>
  );
}
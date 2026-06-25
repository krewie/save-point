import HomeCard from "../components/home/HomeCard";
import HomeSection from "../components/home/HomeSection";

export default function Home() {
  return (
    <div>
      <div className="intro">
        <p>皆さん、ようこそ。</p>
        <p>ここは私の日本語セーブポイントです。</p>
        <p>
          ゲームのメモ、スクリプト、文書、ドリルを集めています。
        </p>
      </div>

      <HomeSection
        title="読む"
        description="ゲームのメモ、スクリプト、文書を読む"
      >
        <HomeCard
          href="/biohazard/pages/index.html"
          image="/assets/img/biohazard-card.png"
          alt="Biohazard"
          title="ビオハザード"
          description="メモとゲーム内テキストを読む"
        />

        <HomeCard
          href="/silent_hill/pages/index.html"
          image="/assets/img/silent-hill-card.png"
          alt="Silent Hill"
          title="サイレント・ヒル"
          description="メモと文書を読む"
        />

        <HomeCard
          href="/ff7/pages/index.html"
          image="/assets/img/ff7-card.png"
          alt="Final Fantasy VII"
          title="ファイナルファンタジーVII"
          description="ゲームスクリプトを読む"
        />
      </HomeSection>

      <HomeSection title="練習" description="日本語のクイズとドリル">
        <HomeCard
          href="/drills"
          title="Drills"
          description="クイズと練習モード"
        />

        <HomeCard
          href="/flashdrill"
          title="Flash Drill"
          description="JLPT kanji and reading practice"
        />

        <HomeCard
          href="/kanjireadingquiz"
          title="Kanji Reading Quiz"
          description="Practice kanji readings"
        />
      </HomeSection>

      <HomeSection title="資料" description="技術メモ、改造メモ、調べたこと">
        <HomeCard
          href="/psx"
          image="/assets/img/psx.png"
          alt="PSX"
          title="PSX MOD"
          description="Installing an ODE"
        />
      </HomeSection>
    </div>
  );
}
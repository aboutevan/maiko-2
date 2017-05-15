import React from 'react';
import { Helmet } from 'react-helmet';

const PageAbout = () => (
  <div className="page-about main-row">
    <Helmet>
      <title>About | Special Effects Artist Los Angeles | Maiko Chiba</title>
      <meta name="description" content="Maiko Chiba is a Special Effects Artist working in Los Angeles" />
    </Helmet>
    <div className="page-about__content">
      <div className="page-about__image">
        <img src="/assets/img/portrait.jpg" alt="Maiko Chiba" />
      </div>
      <div className="page-about__copy-wrapper clearfix">
        <div className="page-about__copy page-about__copy--eng columns medium-7 medium-push-1">
          <p>Maiko Chiba is a Japanese-born, Los Angeles based makeup artist for the television,
           film and art industries. For more than a decade she&apos;s
           worked with high-level professionals and studios in Japan
           and America.  She specializes in advanced lab techniques
           including painting, sculpting, prosthetics, fabrication and character design.</p>
          <p>Currently a painter and sculptor at <a href="https://www.afxstudio.net" target="_blank" rel="noopener noreferrer">AFX Studios</a>, Maiko is working on her third season of American Horror Story.  Previously, she&apos;s been part of <a href="http://www.legacyefx.com/" target="_blank" rel="noopener noreferrer">Legacy Effects</a>, ADI and a number of labs in Tokyo.</p>
        </div>
        <div className="page-about__copy page-about__copy--jp columns medium-7 medium-pull-1">
          <p>士ヲアニワ席小ふげ目禁キセウ選破2待メフソ入曲
          ヱ気択かもだ著風る吹口ノヤ以様ソロ営教レ更3南あの多業ヤニカ岡現
          まよ牽教サレオテ場国ルら模投乙クちご。載レ力室86求牛
          野戻84深ロユム実学オエセシ写岡べゃ努央ふドめ毎告イあうト部
          郵かり面6逃ちつッり別政にてよッ株転性ソエマハ書更転止コヤ諾冬密予現ゃ。</p>
          <p>票物つき軽実ねょで端米円リウミ情99関ぐラ立広せク対前ム源
          式ぱリしで息質オキ壇調ヘオフケ得問全ムロチ中芋ヘエソ済館せ
          作感様描除ごドくり。降女新セオヒケ沢定こらどラ特4補ばぜ払
          室サツカシ核62松会ムウヲキ技第覧あか断5雪のぐた例組教まぎ
          声育ひょ発結ひぶをす加江すわ事検メルタ皮何乞ぽきど。</p>
        </div>

      </div>
      <div className="page-about__contact columns small-16 text-center">
        <p>Inquiries:</p>
        <p>chibamakeup@gmail.com</p>
      </div>
    </div>
  </div>
);

export default PageAbout;

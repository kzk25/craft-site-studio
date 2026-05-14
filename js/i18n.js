/* ===== i18n.js — 日英切替 ===== */

const translations = {
  ja: {
    /* ── ナビゲーション ── */
    'nav.about':    '宝鏡寺について',
    'nav.honzon':   '御本尊',
    'nav.events':   '年間行事',
    'nav.practice': '参禅',
    'nav.service':  '御供養・御祈祷',
    'nav.access':   'アクセス',

    /* ── Hero ── */
    'hero.label':    'DAIYUZAN HOKYOJI',
    'hero.title':    '大雄山 宝鏡寺',
    'hero.subtitle': '竹之下地蔵尊',
    'hero.badge':    '曹洞宗 ｜ 創建 天平19年',

    /* ── インフォバー ── */
    'info.access': '足柄駅 徒歩7分',
    'info.tel':    '0550-76-0759',
    'info.hours':  '9:00〜16:00',

    /* ── about セクション ── */
    'about.label': 'ABOUT',
    'about.title': '宝鏡寺について',
    'about.caption': '大雄山 宝鏡寺',

    /* ── 御本尊セクション（ホーム）── */
    'honzon.label': 'MAIN DEITY',
    'honzon.title': '御本尊 延命地蔵菩薩',
    'honzon.tradition': '伝 聖徳太子 御神作',

    /* ── 年間行事セクション ── */
    'events.label': 'ANNUAL EVENTS',
    'events.title': '年間行事',
    'events.hatsujizo.date': '1月 23日・24日',
    'events.hatsujizo.name': '初地蔵供養',
    'events.hatsujizo.desc': '新年最初の縁日。大般若転読・先祖供養。',
    'events.taisai.date': '8月 23日・24日',
    'events.taisai.name': '竹之下地蔵尊大祭',
    'events.taisai.desc': '夏の大祭。相撲奉納・大般若祈祷。',
    'events.koyo.date': '11月（勤労感謝の日前後）',
    'events.koyo.name': '紅葉ライトアップ',
    'events.koyo.desc': '竹あかりと紅葉の幻想的な夜。',

    /* ── 参禅セクション（ホーム）── */
    'zazen.label':  'PRACTICE',
    'zazen.title':  '参禅・坐禅会',
    'zazen.quote':  'やさしい坐禅',
    'zazen.desc':   '初心者の方も、どなたでもお気軽にご参加ください。',
    'zazen.btn':    '坐禅会について',

    /* ── NEWS ── */
    'news.label': 'NEWS',
    'news.more':  'すべてのお知らせを見る',

    /* ── アクセス ── */
    'access.label': 'ACCESS',
    'access.title': 'アクセス',

    /* ── フッター ── */
    'footer.copy': '© 大雄山宝鏡寺 All Rights Reserved.',

    /* ── ページタイトル ── */
    'page.about.label':    'ABOUT',
    'page.about.title':    '宝鏡寺について',
    'page.honzon.label':   'MAIN DEITY',
    'page.honzon.title':   '御本尊',
    'page.events.label':   'ANNUAL EVENTS',
    'page.events.title':   '年間行事',
    'page.practice.label': 'PRACTICE',
    'page.practice.title': '参禅・坐禅会',
    'page.service.label':  'SERVICE',
    'page.service.title':  '御供養・御祈祷',
    'page.access.label':   'ACCESS',
    'page.access.title':   'アクセス・お問合わせ',

    /* ── お問合わせフォーム ── */
    'form.name':    'お名前',
    'form.email':   'メールアドレス',
    'form.tel':     'お電話番号',
    'form.type':    'お問合わせ種別',
    'form.message': 'メッセージ',
    'form.submit':  '送信する',
    'form.type.general': '一般',
    'form.type.zazen':   '坐禅会',
    'form.type.service': '御祈祷・御供養',
    'form.type.other':   'その他',
  },

  en: {
    /* ── ナビゲーション ── */
    'nav.about':    'About',
    'nav.honzon':   'Main Deity',
    'nav.events':   'Events',
    'nav.practice': 'Zazen',
    'nav.service':  'Ceremonies',
    'nav.access':   'Access',

    /* ── Hero ── */
    'hero.label':    'DAIYUZAN HOKYOJI',
    'hero.title':    'Daiyuzan Hokyoji',
    'hero.subtitle': 'Takenoshita Jizo-son',
    'hero.badge':    'Soto Zen Buddhism | Founded 747 CE',

    /* ── インフォバー ── */
    'info.access': '7 min walk from Ashigara Sta.',
    'info.tel':    '0550-76-0759',
    'info.hours':  '9:00–16:00',

    /* ── about セクション ── */
    'about.label': 'ABOUT',
    'about.title': 'About Hokyoji',
    'about.caption': 'Daiyuzan Hokyoji',

    /* ── 御本尊セクション（ホーム）── */
    'honzon.label': 'MAIN DEITY',
    'honzon.title': 'Main Deity (Gohonzon)',
    'honzon.tradition': 'Said to be carved by Prince Shotoku',

    /* ── 年間行事セクション ── */
    'events.label': 'ANNUAL EVENTS',
    'events.title': 'Annual Events',
    'events.hatsujizo.date': 'Jan 23–24',
    'events.hatsujizo.name': 'Hatsu-Jizo Memorial',
    'events.hatsujizo.desc': 'First rite day of the year. Sutra reading, ancestor memorial.',
    'events.taisai.date': 'Aug 23–24',
    'events.taisai.name': 'Grand Festival',
    'events.taisai.desc': 'Summer grand festival. Sumo dedication, prayer ceremony.',
    'events.koyo.date': 'November (around Labor Thanksgiving Day)',
    'events.koyo.name': 'Autumn Light-Up',
    'events.koyo.desc': 'Magical night of bamboo lanterns and autumn foliage.',

    /* ── 参禅セクション（ホーム）── */
    'zazen.label':  'PRACTICE',
    'zazen.title':  'Zazen Practice',
    'zazen.quote':  'Gentle Zazen',
    'zazen.desc':   'Beginners are warmly welcome. No experience necessary.',
    'zazen.btn':    'About Zazen Sessions',

    /* ── NEWS ── */
    'news.label': 'NEWS',
    'news.more':  'View all news',

    /* ── アクセス ── */
    'access.label': 'ACCESS',
    'access.title': 'Access',

    /* ── フッター ── */
    'footer.copy': '© Daiyuzan Hokyoji All Rights Reserved.',

    /* ── ページタイトル ── */
    'page.about.label':    'ABOUT',
    'page.about.title':    'About',
    'page.honzon.label':   'MAIN DEITY',
    'page.honzon.title':   'Main Deity',
    'page.events.label':   'ANNUAL EVENTS',
    'page.events.title':   'Events',
    'page.practice.label': 'PRACTICE',
    'page.practice.title': 'Zazen',
    'page.service.label':  'SERVICE',
    'page.service.title':  'Ceremonies',
    'page.access.label':   'ACCESS',
    'page.access.title':   'Access & Contact',

    /* ── お問合わせフォーム ── */
    'form.name':    'Your Name',
    'form.email':   'Email Address',
    'form.tel':     'Phone Number',
    'form.type':    'Inquiry Type',
    'form.message': 'Message',
    'form.submit':  'Send',
    'form.type.general': 'General',
    'form.type.zazen':   'Zazen Session',
    'form.type.service': 'Ceremonies',
    'form.type.other':   'Other',
  },
};

function setLang(lang) {
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    const text = translations[lang]?.[key];
    if (text != null) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = text;
      } else {
        el.textContent = text;
      }
    }
  });

  document.documentElement.lang = lang === 'ja' ? 'ja' : 'en';
  localStorage.setItem('lang', lang);

  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('lang') || 'ja';
  setLang(saved);
});

// グローバルに公開（onclickから呼べるように）
window.setLang = setLang;

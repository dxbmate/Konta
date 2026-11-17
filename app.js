// Тонкие линейные иконки Konta — 24×24, stroke 1.5, round
const ICONS = {
  // расходы
  taxi: '<path d="M5 16.5V12l1.7-4.3A1.5 1.5 0 0 1 8.1 6.8h7.8a1.5 1.5 0 0 1 1.4.9L19 12v4.5"/><path d="M4 12h16v4.5H4z"/><path d="M6.5 16.5v1.8M17.5 16.5v1.8"/><path d="M10 4.5h4"/><circle cx="7.5" cy="14.2" r=".6"/><circle cx="16.5" cy="14.2" r=".6"/>',
  delivery: '<circle cx="6.5" cy="17" r="2"/><circle cx="17.5" cy="17" r="2"/><path d="M8.5 17h5.5l3-6h-4"/><path d="M14 11l-1.5-4H10"/><path d="M3.5 9.5h6v4.5h-6z"/>',
  food: '<path d="M5 9H19L18 20H6L5 9Z"/><path d="M9 9C9 4 15 4 15 9"/>',
  cafe: '<path d="M5 9H16V16C16 18 14.5 19 12.5 19H8.5C6.5 19 5 18 5 16V9Z"/><path d="M16 11H18C21 11 21 16 17 16H16"/><path d="M8 6C6 4 9 3 8 2M12 6C10 4 13 3 12 2"/>',
  trans: '<path d="M5 20V8C5 5 7 4 12 4S19 5 19 8V20"/><path d="M5 15H19M8 8H16"/><circle cx="8" cy="18" r="1"/><circle cx="16" cy="18" r="1"/>',
  market: '<path d="M4 8L12 4L20 8V17L12 21L4 17V8Z"/><path d="M4 8L12 12L20 8M12 12V21"/>',
  health: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M12 7V17M7 12H17"/>',
  tobacco: '<path d="M4 15H17V18H4Z"/><path d="M17 15V18"/><path d="M19 15V18"/><path d="M15 12C18 10 15 8 18 6C20 4 18 3 19 2"/>',
  subs: '<rect x="6" y="2.5" width="12" height="19" rx="2"/><path d="M10 5H14M11 18.5H13"/>',
  gifts: '<rect x="3" y="10" width="18" height="11" rx="2"/><path d="M2 7H22V10H2Z"/><path d="M12 7V21"/><path d="M12 7C7 7 5 5 7 3C9 1 12 5 12 7C12 5 15 1 17 3C19 5 17 7 12 7Z"/>',
  home: '<path d="M3 11L12 3L21 11"/><path d="M5 10V21H19V10"/><path d="M9 21V14H15V21"/>',
  clothes: '<path d="M8 4L4 6L2.5 11L6 13L8 10V21H16V10L18 13L21.5 11L20 6L16 4C14 7 10 7 8 4Z"/>',
  fun: '<path d="M4 5H20V19H4Z"/><path d="M8 5V7M8 17V19M16 5V7M16 17V19"/><path d="M10 9L15 12L10 15V9Z"/>',
  pet: '<ellipse cx="12" cy="15.5" rx="5" ry="4"/><circle cx="6" cy="9" r="2"/><circle cx="10" cy="6" r="2"/><circle cx="14" cy="6" r="2"/><circle cx="18" cy="9" r="2"/>',
  transfer: '<path d="M3 8H20L16 4M20 8L16 12"/><path d="M21 16H4L8 12M4 16L8 20"/>',
  fees: '<path d="M6 4a1 1 0 011-1h10a1 1 0 011 1v17l-2-1.5-2 1.5-2-1.5-2 1.5-2-1.5-2 1.5z"/><path d="M9 8h6M9 11.5h6M9 15h4"/>',
  other: '<circle cx="5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/>',
  // доходы
  salary: '<rect x="2.5" y="5" width="19" height="14" rx="2"/><circle cx="12" cy="12" r="3"/><path d="M5 9H6M18 15H19"/>',
  in_transfer: '<path d="M19 5L5 19M5 19V12M5 19H12"/>',
  side: '<rect x="3" y="4" width="18" height="13" rx="2"/><path d="M2 20H22M8 17L7 20M16 17L17 20"/>',
  cashback: '<circle cx="12" cy="12" r="8"/><path d="M9 9H14C16 9 16 12 14 12H10C8 12 8 15 10 15H15"/><path d="M12 5L15 8L12 11"/>',
  cash: '<rect x="4" y="7" width="16" height="12" rx="2"/><path d="M7 7V4H20V16H17"/><circle cx="12" cy="13" r="2"/>',
  in_other: '<path d="M12 5V19M5 12H19"/>',
  // активы
  a_bank: '<path d="M3 9L12 3L21 9H3Z"/><path d="M5 10V18M10 10V18M14 10V18M19 10V18"/><path d="M3 19H21M2 21H22"/>',
  a_dep: '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/><path d="M12 7V9M17 12H15M12 17V15"/>',
  a_cash: '<rect x="3" y="6" width="18" height="12" rx="2"/><circle cx="12" cy="12" r="2"/><path d="M6 9H7M17 15H18"/>',
  a_crypto: '<circle cx="12" cy="12" r="8.5"/><path d="M10 8h3a2 2 0 010 4h-3zM10 12h3.5a2 2 0 010 4H10zM10 8v8M11.5 6.5V8M11.5 16v1.5"/>',
  a_stocks: '<path d="M3 19V5M3 19H21"/><path d="M5 15L10 11L13 13L20 5"/><path d="M15 5H20V10"/>',
  a_realty: '<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 7H10V9H8ZM14 7H16V9H14ZM8 13H10V15H8ZM14 13H16V15H14ZM10 21V17H14V21"/>',
  a_debt: '<rect x="2.5" y="5" width="19" height="14" rx="2"/><path d="M3 9H21M6 14H11M6 16H9"/>',
  a_other: '<path d="M12 3L21 12L12 21L3 12L12 3Z"/><path d="M3 12H21M12 3L8 12L12 21L16 12L12 3Z"/>',
  // интерфейс
  ui_overview: '<rect x="3" y="3" width="7" height="7" rx="2"/><rect x="14" y="3" width="7" height="7" rx="2"/><rect x="3" y="14" width="7" height="7" rx="2"/><rect x="14" y="14" width="7" height="7" rx="2"/>',
  ui_chart: '<path d="M3 19V5M3 19H21"/><path d="M5 15L10 10L14 13L20 6"/>',
  ui_cap: '<path d="M12 3V12H21"/><path d="M20.5 13A9 9 0 1 1 11 3"/>',
  ui_more: '<circle cx="5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/>',
  ui_goal: '<path d="M3 20L9 9L13 15L16 11L21 20H3Z"/><path d="M16 11V3H21V7H16"/>',
  ui_shield: '<path d="M12 3L20 6V12C20 17 16.5 20 12 21C7.5 20 4 17 4 12V6L12 3Z"/><path d="M8 12L11 15L16 9"/>',
  ui_compass: '<circle cx="12" cy="12" r="8"/><path d="M15.5 8.5L13 13L8.5 15.5L11 11L15.5 8.5Z"/>',
  ui_minus: '<path d="M5 12H19"/>',
  ui_plus: '<path d="M12 5V19M5 12H19"/>',
  ui_back: '<path d="M11 4H21V20H11L3 12L11 4Z"/><path d="M13 9L18 15M18 9L13 15"/>',
  ui_cal: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3V7M17 3V7M3 10H21M8 14H10M14 14H16M8 17H10"/>',
  ui_left: '<path d="M15 5L8 12L15 19"/>',
  ui_right: '<path d="M9 5L16 12L9 19"/>',
  ui_down: '<path d="M5 9L12 16L19 9"/>',
  ui_close: '<path d="M6 6L18 18M18 6L6 18"/>',
  ui_copy: '<rect x="8" y="3" width="13" height="14" rx="2"/><path d="M16 17V21H3V7H8"/>',
  ui_edit:'<path d="M14 5L19 10L9 20H4V15L14 5Z"/><path d="M12 7L17 12"/>',
  ui_check:'<path d="M4 12L10 18L20 6"/>',
  ui_seal:'<circle cx="12" cy="10" r="8"/><path d="M8 17L7 22L12 19L17 22L16 17"/><path d="M8.5 10L11 12.5L15.5 8"/>',
  ui_search:'<circle cx="10.5" cy="10.5" r="6.5"/><path d="M15.5 15.5L21 21"/>',
  ui_trash: '<path d="M4 7H20M9 7V4H15V7"/><path d="M6 7L7 20H17L18 7"/><path d="M10 11V16M14 11V16"/>',
  ui_spark: '<path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"/>',
  ui_eye: '<path d="M2 12C4.5 7.5 8 5 12 5S19.5 7.5 22 12C19.5 16.5 16 19 12 19S4.5 16.5 2 12Z"/><circle cx="12" cy="12" r="3"/>',
  ui_eyeoff: '<path d="M3 3L21 21"/><path d="M10 5.3C10.7 5.1 11.3 5 12 5C16 5 19.5 7.5 22 12C21 13.8 19.8 15.2 18.3 16.2"/><path d="M6.1 6.1C4.5 7.3 3.1 9.2 2 12C4.5 16.5 8 19 12 19C13.4 19 14.7 18.7 15.8 18.1"/>',
  ui_face: '<path d="M3 9V5C3 3.9 3.9 3 5 3H9M15 3H19C20.1 3 21 3.9 21 5V9M21 15V19C21 20.1 20.1 21 19 21H15M9 21H5C3.9 21 3 20.1 3 19V15"/><circle cx="9" cy="10" r="1"/><circle cx="15" cy="10" r="1"/><path d="M9 15C10.5 17 13.5 17 15 15"/>',
  ui_import: '<path d="M3 14V19H21V14"/><path d="M12 3V15M7 10L12 15L17 10"/>',
  ui_letter: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7L12 14L21 7"/>',
  ui_bolt: '<path d="M13 2L5 13H11L10 22L19 10H13L13 2Z"/>',
  ui_income: '<path d="M12 4v11M7.5 10.5 12 15l4.5-4.5"/><path d="M4 18.5h16"/>',
};
// ================= Telegram =================
const tg = window.Telegram && window.Telegram.WebApp ? window.Telegram.WebApp : null;
const inTG = !!(tg && tg.initData);
if (tg) { try { tg.ready(); tg.expand(); tg.setHeaderColor('#000000'); tg.setBackgroundColor('#000000'); tg.disableVerticalSwipes && tg.disableVerticalSwipes(); } catch (e) {} }
const haptic = (t = 'light') => { try { tg && tg.HapticFeedback.impactOccurred(t); } catch (e) {} };
const hapticOk = () => { try { tg && tg.HapticFeedback.notificationOccurred('success'); } catch (e) {} };
const ic = (k, cls = 'i') => `<svg class="${cls}" viewBox="0 0 24 24">${ICONS[k] || ICONS.other}</svg>`;
document.querySelectorAll('svg[data-ic]').forEach(s => { s.innerHTML = ICONS[s.dataset.ic]; });

// ================= Categories =================
const OUT = [
  ['taxi', 'Такси', '#d8b45a', ['такси', 'яндекс го', 'yandex go', '=go', 'uber', 'ситимобил', 'максим']],
  ['delivery', 'Доставка еды', '#d4895a', ['яндекс еда', '=еда', 'eda', 'edarit', 'доставк', 'delivery', 'foodpicasso', 'пицц', 'кухня на районе']],
  ['food', 'Продукты', '#9db592', ['продукт', 'пятерочк', 'пятёрочк', 'pyaterochka', 'перекрест', 'перекрёст', 'магнит', 'magnit', 'дикси', 'dixy', 'лента', 'lenta', 'ашан', 'вкусвилл', 'лавка', 'lavka', 'lavkarit', 'самокат', 'азбука', 'рынок', 'метро кэш']],
  ['cafe', 'Кафе и фастфуд', '#b79a7e', ['кофе', 'coffee', 'кафе', 'ресторан', 'обед', 'ужин', 'завтрак', '=бар', 'пиво', 'шаурм', 'бургер', 'burger', 'вкусно и точка', 'vkusnoitochka', 'kfc', 'ростикс', 'суши', 'роллы', 'ланч', 'сова', 'sova', 'клён', 'клен', 'klen', 'столов', 'макарон', 'melomakarona']],
  ['trans', 'Транспорт', '#8fa6c4', ['метро', 'автобус', 'электричк', 'бензин', 'заправк', 'азс', 'парковк', 'каршеринг', 'тройка', 'whoosh', 'вуш', 'юрент', 'кикшеринг', 'поезд', 'ржд', 'мойка', 'транспорт']],
  ['market', 'Маркетплейсы', '#8db6b8', ['ozon', 'ozonpa', 'озон', 'wildberries', '=вб', '=wb', 'яндекс маркет', 'я.маркет', 'aliexpress', 'мегамаркет', 'panam', '=ym']],
  ['health', 'Здоровье', '#c98a8a', ['аптек', 'apteka', 'mskapt', 'врач', 'лекарств', 'стоматолог', 'анализ', 'клиник', 'витамин', 'таблетк']],
  ['tobacco', 'Табак', '#8e8a84', ['табак', 'tabach', 'сигарет', 'вейп', 'стики', 'iqos', 'жиж', 'снюс']],
  ['subs', 'Связь и подписки', '#9aa7b8', ['мтс', 'mts', 'билайн', 'мегафон', 'теле2', 'tele2', 'связь', 'мобильн', 'подписк', '=плюс', 'icloud', 'spotify', 'netflix', 'chatgpt', 'claude', 'vpn', 'впн']],
  ['gifts', 'Цветы и подарки', '#c795a8', ['цвет', 'букет', 'flower', 'rosalia', 'подар']],
  ['home', 'Дом', '#a89bc2', ['квартир', 'аренд', 'жкх', 'коммуналк', 'интернет', 'ремонт', 'икеа', 'хозтовар', 'бытов', 'леруа']],
  ['clothes', 'Одежда', '#c2a68c', ['одежд', 'обувь', 'кроссовк', 'куртк', 'футболк', 'джинс', 'худи', 'шмот']],
  ['fun', 'Развлечения', '#d9a066', ['кино', 'концерт', 'театр', 'клуб', 'боулинг', 'steam', 'стим', 'кальян', '=игра', 'игры']],
  ['pet', 'Питомец', '#a3b57e', ['корм', 'ветеринар', 'ветклиник', 'зоомагазин', 'груминг', 'четыре лапы']],
  ['transfer', 'Переводы', '#9c9ec9', ['перевод', 'сбп', 'скинул', 'долг', 'отдал']],
  ['fees', 'Комиссии и наличные', '#77736d', ['комисс', 'снятие', 'снял', 'наличн', '=смс', 'банкомат']],
  ['other', 'Другое', '#5f5c58', []],
].map(([id, n, c, k]) => ({ id, n, c, k, kind: 'out' }));
const IN = [
  ['salary', 'Зарплата', '#a9c2a0', ['зарплат', '=зп', 'аванс', 'премия', 'оклад']],
  ['in_transfer', 'Переводы', '#9c9ec9', ['перевод', 'скинул', 'вернул', 'долг']],
  ['side', 'Подработка', '#8db6b8', ['фриланс', 'проект', 'гонорар', 'подработ', 'консультац']],
  ['cashback', 'Кэшбэк и возвраты', '#d8b45a', ['кэшбэк', 'кешбек', 'cashback', 'возврат']],
  ['cash', 'Наличные', '#b79a7e', ['налич', 'внес']],
  ['in_other', 'Другое', '#77736d', []],
].map(([id, n, c, k]) => ({ id, n, c, k, kind: 'in' }));
const CAT = Object.fromEntries([...OUT, ...IN].map(c => [c.id, c]));
const catOf = t => CAT[t.c] || (t.k === 'in' ? CAT.in_other : CAT.other);

// ================= Utils =================
const $ = s => document.querySelector(s);
const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const M = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];
const MG = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
const MP = ['январе', 'феврале', 'марте', 'апреле', 'мае', 'июне', 'июле', 'августе', 'сентябре', 'октябре', 'ноябре', 'декабре'];
const WD = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
const WDF = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
const cap = s => s[0].toUpperCase() + s.slice(1);
const pad = n => String(n).padStart(2, '0');
const key = d => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
const D = k => new Date(k + 'T12:00:00');
const addD = (d, n) => { const x = new Date(d); x.setDate(x.getDate() + n); return x; };
const today = () => { const d = new Date(); d.setHours(12, 0, 0, 0); return d; };
const todayK = () => key(today());
const plural = (n, a, b, c) => { const m10 = n % 10, m100 = n % 100; return m10 === 1 && m100 !== 11 ? a : m10 >= 2 && m10 <= 4 && (m100 < 10 || m100 >= 20) ? b : c; };
const fmtN = r => r.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
function rub(k, o = {}) {
  const neg = k < 0; k = Math.abs(k);
  let r = Math.round(k) / 100;
  if (o.short && r >= 10000) {
    const [div, suf] = r >= 1e9 ? [1e9, ' млрд'] : r >= 1e6 ? [1e6, ' млн'] : [1e3, 'к'];
    const v = r / div, s = v.toFixed(v >= 100 ? 0 : 1).replace('.', ',').replace(/,0$/, '');
    return (neg ? '−' : o.sign ? '+' : '') + s + suf + (o.bare ? '' : ' ' + (o.sym || '₽'));
  }
  if (o.round) r = Math.round(r);
  const s = Number.isInteger(r) ? String(r) : r.toFixed(2).replace('.', ',');
  return (neg ? '−' : o.sign ? '+' : '') + fmtN(s) + (o.bare ? '' : ' ' + (o.sym || '₽'));
}
const big = (k, cls = '') => `${rub(k, { round: true, bare: true }).replace(/\u2009/g, '\u2005')}<small>₽</small>`;
function dayTitle(k) {
  if (k === todayK()) return 'Сегодня';
  if (k === key(addD(today(), -1))) return 'Вчера';
  const d = D(k);
  return `${d.getDate()} ${MG[d.getMonth()]}, ${WD[(d.getDay() + 6) % 7]}`;
}
const words = s => s.toLowerCase().split(/[^a-zа-яё0-9]+/i).filter(Boolean);
function guess(note, kind, useRules = true) {
  const low = note.toLowerCase().trim();
  if (!low) return null;
  const list = kind === 'in' ? IN : OUT;
  const w = words(low);
  if (!w.length) return null;
  for (const c of list) if (w[0] === words(c.n)[0]) return c.id;
  if (useRules) { const r = S.rules[kind + ':' + w[0]]; if (r && CAT[r]) return r; }
  for (const c of list) if (c.k.some(k => k.includes(' ') ? low.includes(k) : k[0] === '=' ? w.includes(k.slice(1)) : w.some(x => x.startsWith(k)))) return c.id;
  return null;
}
let toastFn = null;
function toast(t, fn, ms) {
  const el = $('#toast'); toastFn = fn || null; ms = ms || (fn ? 6000 : 2000);
  el.innerHTML = `<span>${esc(t)}</span>`; el.classList.toggle('act', !!fn);
  if (fn) {
    const u = document.createElement('u');
    u.innerHTML = `<svg viewBox="0 0 20 20"><circle cx="10" cy="10" r="8"/><circle class="cd" cx="10" cy="10" r="8" style="animation-duration:${ms}ms"/></svg>Вернуть`;
    el.appendChild(u);
  }
  el.classList.remove('on'); el.offsetHeight; el.classList.add('on');
  clearTimeout(toast._t); toast._t = setTimeout(() => { el.classList.remove('on'); toastFn = null; }, ms);
}
function confirmDlg(text, ok = 'Да') {
  return new Promise(res => {
    const d = document.createElement('div'); d.className = 'dlg';
    d.innerHTML = `<div><p>${esc(text)}</p><div class="b2"><button class="btn ghost">Отмена</button><button class="btn danger">${esc(ok)}</button></div></div>`;
    document.body.appendChild(d);
    const [n, y] = d.querySelectorAll('button');
    n.onclick = () => { d.remove(); res(false); };
    y.onclick = () => { d.remove(); res(true); };
  });
}

// ================= Storage =================
let S = { v: 2, tx: [], limits: {}, rules: {}, seq: 1, acc: [], rates: {}, prices: {}, capHist: [], closed: {} };
const LKEY = 'fin_v2', CHUNK = 3800;
const cloud = inTG && tg.CloudStorage && tg.isVersionAtLeast && tg.isVersionAtLeast('6.9') ? tg.CloudStorage : null;
const cget = keys => new Promise(r => cloud.getItems(keys, (e, v) => r(e ? {} : v || {})));
const cset = (k, v) => new Promise(r => cloud.setItem(k, v, () => r()));
const cdel = keys => new Promise(r => cloud.removeItems(keys, () => r()));
// облако: два «слота» A/B — новая версия пишется в свободный слот, и только потом переключается указатель.
// Если запись оборвётся (закрыли приложение), остаётся целая предыдущая версия.
async function cgetMany(keys) { const out = {}; for (let i = 0; i < keys.length; i += 40) Object.assign(out, await cget(keys.slice(i, i + 40))); return out; }
async function cloudRead() {
  const m = (await cget(['v3_meta'])).v3_meta;
  if (m) {
    try {
      const { s, n, h } = JSON.parse(m), ks = Array.from({ length: n }, (_, i) => `${s}_${i}`), p = await cgetMany(ks);
      const raw = ks.map(k => p[k] || '').join('');
      if (raw.length === h) return raw;
    } catch (e) {}
  }
  const n = +((await cget(['v2_meta'])).v2_meta || 0); // старый формат
  if (n) { const ks = Array.from({ length: n }, (_, i) => 'v2_' + i), p = await cgetMany(ks); return ks.map(k => p[k] || '').join(''); }
  return null;
}
const parseS = raw => { try { const o = JSON.parse(raw); return o && Array.isArray(o.tx) ? o : null; } catch (e) { return null; } };
async function load() {
  let local = null, remote = null;
  try { local = parseS(localStorage.getItem(LKEY)); } catch (e) {}
  if (cloud) {
    try { remote = parseS(await cloudRead()); } catch (e) {}
    // в облаке что-то есть, но прочитать не вышло — не перезаписываем его в этой сессии
    if (!remote) { try { const m = await cget(['v3_meta', 'v2_meta']); if (m.v3_meta || m.v2_meta) cloudBlock = true; } catch (e) { cloudBlock = true; } }
  }
  // берём более свежую целую копию
  const best = [local, remote].filter(Boolean).sort((a, b) => (b.ts || 0) - (a.ts || 0))[0];
  if (best) { S = Object.assign(S, best); if (best === remote) { try { localStorage.setItem(LKEY, JSON.stringify(S)); } catch (e) {} } else if (cloud && (!remote || (remote.ts || 0) < (local.ts || 0))) save(); return; }
  try {
    const old = JSON.parse(localStorage.getItem('exp_v1') || 'null');
    if (old && old.items) {
      const map = { gift: 'gifts' };
      S.tx = old.items.map(i => ({ id: newId(), k: 'out', a: i.a, n: i.n, c: CAT[map[i.c] || i.c] ? (map[i.c] || i.c) : 'other', d: i.d, t: i.t }));
    }
  } catch (e) {}
}
let saveT, saving = false, saveAgain = false, cloudBlock = false;
function save() {
  track(); snap();
  S.ts = Date.now();
  const raw = JSON.stringify(S);
  try { localStorage.setItem(LKEY, raw); } catch (e) {}
  scheduleSync();
  if (!cloud) return;
  clearTimeout(saveT);
  saveT = setTimeout(cloudWrite, 500);
}
async function cloudWrite() {
  if (cloudBlock) return;
  if (saving) { saveAgain = true; return; }
  saving = true;
  try {
    const raw = JSON.stringify(S), parts = [];
    for (let i = 0; i < raw.length; i += CHUNK) parts.push(raw.slice(i, i + CHUNK));
    let cur = null; try { cur = JSON.parse((await cget(['v3_meta'])).v3_meta || 'null'); } catch (e) {}
    const slot = cur && cur.s === 'a' ? 'b' : 'a';
    for (let i = 0; i < parts.length; i += 8) await Promise.all(parts.slice(i, i + 8).map((p, j) => cset(`${slot}_${i + j}`, p)));
    await cset('v3_meta', JSON.stringify({ s: slot, n: parts.length, h: raw.length, ts: S.ts }));
    // хвосты старых версий в этом слоте больше не нужны
    const prevN = cur && cur.s === slot ? cur.n : 0, oldV2 = +((await cget(['v2_meta'])).v2_meta || 0);
    if (prevN > parts.length) await cdel(Array.from({ length: prevN - parts.length }, (_, i) => `${slot}_${parts.length + i}`));
    if (oldV2) { await cdel(Array.from({ length: oldV2 }, (_, i) => 'v2_' + i)); await cdel(['v2_meta']); }
  } catch (e) {}
  saving = false;
  if (saveAgain) { saveAgain = false; cloudWrite(); }
}

// ================= Data helpers =================
const sel = (kind, from, to, c) => S.tx.filter(t => t.k === kind && t.d >= from && t.d <= to && (!c || t.c === c));
const total = a => a.reduce((s, t) => s + t.a, 0);
function range(type, off) {
  const now = today(); let s, e, label;
  if (type === 'w') { const dow = (now.getDay() + 6) % 7; s = addD(now, -dow + off * 7); e = addD(s, 6); label = `${s.getDate()} ${MG[s.getMonth()].slice(0, 3)} – ${e.getDate()} ${MG[e.getMonth()].slice(0, 3)}`; }
  else if (type === 'm') { s = new Date(now.getFullYear(), now.getMonth() + off, 1, 12); e = new Date(s.getFullYear(), s.getMonth() + 1, 0, 12); label = M[s.getMonth()] + (s.getFullYear() !== now.getFullYear() ? ' ' + s.getFullYear() : ''); }
  else if (type === 'q') { const q = Math.floor(now.getMonth() / 3) + off; s = new Date(now.getFullYear(), q * 3, 1, 12); e = new Date(s.getFullYear(), s.getMonth() + 3, 0, 12); label = `${Math.floor(s.getMonth() / 3) + 1} кв. ${s.getFullYear()}`; }
  else { s = new Date(now.getFullYear() + off, 0, 1, 12); e = new Date(s.getFullYear(), 11, 31, 12); label = String(s.getFullYear()); }
  const days = Math.round((e - s) / 864e5) + 1, tk = key(now), from = key(s), to = key(e);
  const elapsed = tk < from ? 0 : tk > to ? days : Math.round((now - s) / 864e5) + 1;
  return { type, off, s, e, from, to, label, days, elapsed, current: tk >= from && tk <= to };
}
function buckets(r) {
  const out = [];
  if (r.type === 'w' || r.type === 'm') for (let i = 0; i < r.days; i++) { const d = addD(r.s, i); out.push({ from: key(d), to: key(d), lab: r.type === 'w' ? WD[i] : String(d.getDate()), tip: `${d.getDate()} ${MG[d.getMonth()]}` }); }
  else if (r.type === 'q') for (let d = new Date(r.s); d <= r.e; d = addD(d, 7)) { const e = addD(d, 6) > r.e ? r.e : addD(d, 6); out.push({ from: key(d), to: key(e), lab: `${d.getDate()}.${pad(d.getMonth() + 1)}`, tip: `${d.getDate()} ${MG[d.getMonth()].slice(0, 3)} – ${e.getDate()} ${MG[e.getMonth()].slice(0, 3)}` }); }
  else for (let m = 0; m < 12; m++) { const a = new Date(r.s.getFullYear(), m, 1, 12), b = new Date(r.s.getFullYear(), m + 1, 0, 12); out.push({ from: key(a), to: key(b), lab: M[m].slice(0, 3), tip: cap(M[m]) }); }
  return out;
}
function prevComparable(r, kind, c) {
  const p = range(r.type, r.off - 1);
  const to = r.current ? key(addD(p.s, r.elapsed - 1)) : p.to;
  return total(sel(kind, p.from, to > p.to ? p.to : to, c));
}
function delta(cur, prev, goodWhenUp = false) {
  if (!prev) return cur ? `<span class="c-mut">новое</span>` : '';
  const p = Math.round((cur - prev) / prev * 100);
  if (p === 0) return `<span class="c-mut">без изменений</span>`;
  const up = p > 0;
  return `<span class="${up ? (goodWhenUp ? 'up-good' : 'up-bad') : (goodWhenUp ? 'down-bad' : 'down-good')}">${up ? '+' : '−'}${Math.abs(p)}%</span>`;
}

// ================= Charts =================
// монотонная кривая через точки (без провалов и «ступенек»)
function monoPath(xs, ys) {
  const n = xs.length; if (n < 2) return '';
  const dx = [], m = [], t = [];
  for (let i = 0; i < n - 1; i++) { dx[i] = xs[i + 1] - xs[i]; m[i] = (ys[i + 1] - ys[i]) / dx[i]; }
  t[0] = m[0]; t[n - 1] = m[n - 2];
  for (let i = 1; i < n - 1; i++) t[i] = m[i - 1] * m[i] <= 0 ? 0 : (m[i - 1] + m[i]) / 2;
  for (let i = 0; i < n - 1; i++) { if (m[i] === 0) { t[i] = 0; t[i + 1] = 0; continue; } const a = t[i] / m[i], b = t[i + 1] / m[i], h = a * a + b * b; if (h > 9) { const k = 3 / Math.sqrt(h); t[i] = k * a * m[i]; t[i + 1] = k * b * m[i]; } }
  const f = v => +v.toFixed(2); let d = `M${f(xs[0])},${f(ys[0])}`;
  for (let i = 0; i < n - 1; i++) d += `C${f(xs[i] + dx[i] / 3)},${f(ys[i] + t[i] * dx[i] / 3)} ${f(xs[i + 1] - dx[i] / 3)},${f(ys[i + 1] - t[i + 1] * dx[i] / 3)} ${f(xs[i + 1])},${f(ys[i + 1])}`;
  return d;
}
function barChart(vals, b, { hi = -1, color, h = 110, avg = 0, id, wide, mode }) {
  const max = Math.max(...vals, avg, 1), n = vals.length;
  const labIdx = n <= 12 ? vals.map((_, i) => i) : [0, Math.floor(n / 4), Math.floor(n / 2), Math.floor(3 * n / 4), n - 1];
  let over = '';
  if (mode === 'curve' && n > 1) {
    const tk = todayK(); let last = n - 1; while (last > 0 && b[last] && b[last].from > tk) last--;
    const xs = vals.slice(0, last + 1).map((_, i) => (i + .5) / n * 100), ys = vals.slice(0, last + 1).map(v => 100 - v / max * 96 - 2);
    const di = hi >= 0 && hi <= last ? hi : last;
    over = `<svg class="bcv" viewBox="0 0 100 100" preserveAspectRatio="none"><path d="${monoPath(xs, ys)}"/></svg>` + (xs.length ? `<b class="bdot" style="left:${xs[di]}%;top:${ys[di]}%"></b>` : '');
  }
  return `<div class="bars ${mode === 'bars' || (mode !== 'ticks' && (wide || n <= 13)) ? 'wide' : ''} ${mode === 'curve' ? 'cvm' : mode === 'ticks' ? 'tkm' : ''}" data-chart="${id}" style="height:${h}px">` + over +
    vals.map((v, i) => `<i data-tip="${esc(b[i].tip)}" data-v="${v}" class="${v ? '' : 'z'} ${i === hi ? 'hi' : ''}" style="height:${Math.max(v / max * 100, 2)}%;${color && v && i !== hi ? `background:${color}` : ''}"></i>`).join('') +
    (avg ? `<b class="avgl" style="bottom:${avg / max * 100}%"></b>` : '') +
    `</div><div class="blabs">${labIdx.map(i => `<span>${b[i].lab}</span>`).join('')}</div>`;
}
function lineChart(cur, prev, h = 150, fit = false) {
  const n = Math.max(cur.length, prev.length, 2), all = [...cur, ...prev];
  const mn = fit ? Math.min(...all) : 0, mxv = Math.max(...all, 1), pad = fit ? (mxv - mn) * .25 || 1 : 0;
  const lo = mn - pad, max = fit ? mxv + pad * .4 : mxv * 1.15;
  const X = i => i / (n - 1) * 100, Y = v => 100 - (v - lo) / (max - lo) * 100;
  // сглаженная кривая
  // монотонная кривая (Фриц — Карлсон): плавно, без «ступенек» и без провалов ниже данных
  const path = a => {
    const n = a.length; if (n < 2) return '';
    const xs = a.map((_, i) => X(i)), ys = a.map(v => Y(v)), dx = [], m = [], t = [];
    for (let i = 0; i < n - 1; i++) { dx[i] = xs[i + 1] - xs[i]; m[i] = (ys[i + 1] - ys[i]) / dx[i]; }
    t[0] = m[0]; t[n - 1] = m[n - 2];
    for (let i = 1; i < n - 1; i++) t[i] = m[i - 1] * m[i] <= 0 ? 0 : (m[i - 1] + m[i]) / 2;
    for (let i = 0; i < n - 1; i++) {
      if (m[i] === 0) { t[i] = 0; t[i + 1] = 0; continue; }
      const a1 = t[i] / m[i], b1 = t[i + 1] / m[i], h = a1 * a1 + b1 * b1;
      if (h > 9) { const k = 3 / Math.sqrt(h); t[i] = k * a1 * m[i]; t[i + 1] = k * b1 * m[i]; }
    }
    const f = v => +v.toFixed(2);
    let d = `M${f(xs[0])},${f(ys[0])}`;
    for (let i = 0; i < n - 1; i++) d += `C${f(xs[i] + dx[i] / 3)},${f(ys[i] + t[i] * dx[i] / 3)} ${f(xs[i + 1] - dx[i] / 3)},${f(ys[i + 1] - t[i + 1] * dx[i] / 3)} ${f(xs[i + 1])},${f(ys[i + 1])}`;
    return d;
  };
  const last = cur.length - 1;
  const area = cur.length > 1 ? path(cur) + `L${X(last)},100L0,100Z` : '';
  return `<div class="lc"><svg viewBox="0 0 100 100" preserveAspectRatio="none" style="height:${h}px">
    <defs><linearGradient id="lg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="currentColor" stop-opacity=".14"/><stop offset="1" stop-color="currentColor" stop-opacity="0"/></linearGradient></defs>
    ${prev.length > 1 ? `<path d="${path(prev)}" fill="none" stroke="currentColor" stroke-opacity=".22" stroke-width="1.2" stroke-dasharray="3 4" vector-effect="non-scaling-stroke"/>` : ''}
    <path d="${area}" fill="url(#lg)"/>
    ${cur.length > 1 ? `<path class="ln" pathLength="100" d="${path(cur)}" fill="none" stroke="currentColor" stroke-opacity=".85" stroke-width="1.6" vector-effect="non-scaling-stroke"/>` : ''}
  </svg>${last >= 0 ? `<span class="sun" style="left:${X(last)}%;top:${Y(cur[last]) / 100 * h}px"></span>` : ''}</div>`;
}
const comp = (parts, sum) => { const top = parts.slice(0, 3), rest = parts.slice(3).reduce((s, p) => s + p.v, 0); return `<div class="comp">${top.map(p => `<i style="flex:${p.v / sum};background:${p.c.c}"></i>`).join('')}${rest > 0 ? `<i style="flex:${rest / sum};background:rgba(242,239,233,.16)"></i>` : ''}</div>`; };


function fitBig(el) { const n = Math.max(1, (el.value || el.placeholder || '0').length); el.style.width = (n + .25) + 'ch'; }
// ================= Синхронизация бот ⇄ сайт =================
const SYNC_API = 'https://functions.yandexcloud.net/d4ebgj5lmvuc5rbuh3u1';
const BOT_NAME = 'KontaCieBot';
const APP_URL = 'https://kontacie.com/';

// уникальные id: одинаковые номера с разных устройств не столкнутся
let _lastId = 0;
function newId() { let v = Date.now() * 100 + Math.floor(Math.random() * 100); if (v <= _lastId) v = _lastId + 1; _lastId = v; return v; }

// что изменилось с прошлого сохранения: правки получают метку u, удалённое — запись в S.del
let SNAP = null;
const snapOf = () => { const m = new Map(); (S.tx || []).forEach(t => m.set('t' + t.id, JSON.stringify(t))); (S.acc || []).forEach(a => m.set('a' + a.id, JSON.stringify(a))); (S.goals || []).forEach(g => m.set('g' + g.id, JSON.stringify(g))); return m; };
function snap() { SNAP = snapOf(); }
function track() {
  if (!SNAP) return;
  const now = Date.now(), seen = new Set();
  S.del = S.del || {};
  const walk = (list, p) => (list || []).forEach(x => {
    const k = p + x.id; seen.add(k);
    const was = SNAP.get(k);
    if (was === undefined || was !== JSON.stringify(x)) { x.u = now; }
    if (S.del[x.id]) delete S.del[x.id]; // вернули удалённое
  });
  walk(S.tx, 't'); walk(S.acc, 'a'); walk(S.goals, 'g');
  SNAP.forEach((_, k) => { if (!seen.has(k)) S.del[k.slice(1)] = now; });
  // старые отметки об удалении больше не нужны
  const old = now - 200 * 864e5; Object.keys(S.del).forEach(id => { if (S.del[id] < old) delete S.del[id]; });
}
function afterLoad() {
  if (!S.gid) {
    const map = {};
    (S.tx || []).forEach(t => { if (t.id < 1e12) t.id = newId(); });
    (S.acc || []).forEach(a => { if (a.id < 1e12) { const n = newId(); map[a.id] = n; a.id = n; } });
    S.gid = 1;
  }
  [...(S.tx || []), ...(S.acc || []), ...(S.goals || [])].forEach(x => { if (x.id > _lastId) _lastId = x.id; });
  snap();
}

// слияние двух копий: по каждой записи берём более свежую, удалённое не воскрешаем
function mergeS(a, b) {
  const nw = (a.ts || 0) >= (b.ts || 0) ? a : b, ol = nw === a ? b : a;
  const m = Object.assign({}, ol, nw);
  const del = Object.assign({}, ol.del || {}); Object.entries(nw.del || {}).forEach(([k, v]) => { if (!del[k] || v > del[k]) del[k] = v; });
  const when = x => x.u || x.t || 0;
  const list = k => {
    const map = new Map();
    [...(ol[k] || []), ...(nw[k] || [])].forEach(x => { const p = map.get(x.id); if (!p || when(x) >= when(p)) map.set(x.id, x); });
    return [...map.values()].filter(x => !(del[x.id] && del[x.id] >= when(x)));
  };
  m.tx = list('tx').sort((x, y) => (x.t || 0) - (y.t || 0));
  m.acc = list('acc');
  m.goals = list('goals');
  m.del = del;
  m.closed = Object.assign({}, ol.closed || {}, nw.closed || {});
  const byKey = (k, f) => { const map = new Map(); [...(ol[k] || []), ...(nw[k] || [])].forEach(x => map.set(x[f], x)); return [...map.values()]; };
  m.imports = byKey('imports', 'im').slice(-10);
  m.capHist = byKey('capHist', 'd').sort((x, y) => x.d < y.d ? -1 : 1);
  const fresh = k => { const o = Object.assign({}, ol[k] || {}); Object.entries(nw[k] || {}).forEach(([c, v]) => { if (!o[c] || (v.at || 0) >= (o[c].at || 0)) o[c] = v; }); return o; };
  m.rates = fresh('rates'); m.prices = fresh('prices');
  m.ts = Math.max(a.ts || 0, b.ts || 0);
  m.gid = 1;
  return m;
}

// ---------- обмен с сервером ----------
let SESS = (() => { try { return localStorage.getItem('konta_sess'); } catch (e) { return null; } })();
let SUSER = (() => { try { return JSON.parse(localStorage.getItem('konta_suser') || 'null'); } catch (e) { return null; } })();
const SYNC = { at: 0, err: '', busy: false };
const authHeader = () => inTG && tg.initData ? 'tma ' + tg.initData : SESS ? 'Bearer ' + SESS : '';
const syncOn = () => !!(SYNC_API && authHeader());
async function api(a, body) {
  const ctl = new AbortController(), tm = setTimeout(() => ctl.abort(), 15000);
  let r;
  try { r = await fetch(`${SYNC_API}?a=${a}`, { method: body ? 'POST' : 'GET', headers: { 'X-Konta-Auth': authHeader(), 'Content-Type': 'application/json' }, body: body ? JSON.stringify(body) : undefined, signal: ctl.signal, cache: 'no-store' }); }
  catch (e) { SYNC.why = e.name === 'AbortError' ? 'timeout' : 'net'; throw new Error('net'); }
  finally { clearTimeout(tm); }
  if (r.status >= 500) SYNC.why = 'server ' + r.status;
  if (r.status === 401) { let w = ''; try { w = (await r.json()).why || ''; } catch (e) {} SYNC.why = w; if (!inTG) signOut(true); throw new Error('auth'); }
  if (!r.ok) throw new Error('http ' + r.status);
  return r.json();
}
let syncT, syncAgain = false;
function scheduleSync(ms = 2500) { if (!syncOn()) return; clearTimeout(syncT); syncT = setTimeout(syncNow, ms); }
const coreJSON = s => JSON.stringify({ tx: s.tx, acc: s.acc, del: s.del, limits: s.limits, rules: s.rules, closed: s.closed });
async function syncNow() {
  if (!syncOn()) return;
  if (SYNC.busy) { syncAgain = true; return; }
  SYNC.busy = true; syncIcoUpd();
  try {
    const r = await api('load');
    if (r.user && !inTG) { SUSER = Object.assign(SUSER || {}, r.user); try { localStorage.setItem('konta_suser', JSON.stringify(SUSER)); } catch (e) {} }
    let push = !r.data;
    if (r.data && Array.isArray(r.data.tx)) {
      const before = coreJSON(S);
      const m = mergeS(S, r.data);
      if (coreJSON(m) !== before) {
        S = Object.assign(S, m); snap();
        try { localStorage.setItem(LKEY, JSON.stringify(S)); } catch (e) {}
        if (cloud) { clearTimeout(saveT); saveT = setTimeout(cloudWrite, 500); }
        if (!stack.length) render();
      }
      push = coreJSON(S) !== coreJSON(r.data) || (S.ts || 0) > (r.data.ts || 0);
    }
    if (r.inbox && (r.inbox.tx || r.inbox.del)) {
      const had = new Set(S.tx.map(t => t.id)), before = coreJSON(S);
      const m = mergeS(S, { ts: 0, tx: r.inbox.tx || [], del: r.inbox.del || {} });
      if (coreJSON(m) !== before) {
        S = Object.assign(S, m); snap();
        try { localStorage.setItem(LKEY, JSON.stringify(S)); } catch (e) {}
        if (cloud) { clearTimeout(saveT); saveT = setTimeout(cloudWrite, 500); }
        const fresh = S.tx.filter(t => !had.has(t.id) && t.src === 'bot');
        if (!stack.length) render();
        if (fresh.length) toast(fresh.length === 1 ? `Из бота: ${fresh[0].n} · ${rub(fresh[0].a, { round: true })}` : `Из бота: ${fresh.length} ${plural(fresh.length, 'запись', 'записи', 'записей')}`);
        push = true;
      }
    }
    if (S.tzo !== -new Date().getTimezoneOffset()) { S.tzo = -new Date().getTimezoneOffset(); push = true; }
    if (push) await api('save', { data: S });
    SYNC.at = Date.now(); SYNC.err = ''; SYNC.why = ''; SYNC.fails = 0;
  } catch (e) { SYNC.err = e.message === 'auth' ? 'auth' : 'net'; SYNC.fails = (SYNC.fails || 0) + 1; }
  SYNC.busy = false; syncIcoUpd();
  if (SYNC.err === 'net') { clearTimeout(syncT); syncT = setTimeout(syncNow, 20000); }
  { const el = $('#sync-s'); if (el) el.textContent = syncLine(); }
  if (syncAgain) { syncAgain = false; syncNow(); }
}
function syncLine() {
  if (SYNC.busy) return 'Синхронизация…';
  if (SYNC.err === 'net') return `Нет связи${SYNC.why ? ' · ' + SYNC.why : ''} — нажмите, чтобы повторить`;
  if (SYNC.err === 'auth') return inTG ? `Сервер не принял вход${SYNC.why ? ' · ' + SYNC.why : ''}` : 'Войдите снова';
  return SYNC.at ? `Синхронизировано · ${ago(SYNC.at)}` : 'Ожидание';
}
document.addEventListener('visibilitychange', () => { if (!document.hidden) scheduleSync(300); });
// пока приложение открыто — подтягиваем изменения с других устройств
setInterval(() => { if (!document.hidden && !stack.length && syncOn() && !SYNC.busy) syncNow(); }, 30000);
function syncTap() { if (SYNC.busy) return; haptic(); const el = $('#sync-s'); SYNC.at = SYNC.at; if (el) el.textContent = 'Синхронизация…'; syncNow(); }
addEventListener('online', () => { syncIcoUpd(); scheduleSync(300); });
addEventListener('offline', () => syncIcoUpd());

// ---------- вход на сайте через Telegram ----------
async function loginFromUrl() {
  if (inTG || !SYNC_API) return;
  const q = new URLSearchParams(location.search);
  if (!q.get('hash') || !q.get('id')) return;
  const f = {}; q.forEach((v, k) => { f[k] = v; });
  history.replaceState(null, '', location.pathname);
  try {
    const r = await fetch(`${SYNC_API}?a=login`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(f) });
    if (!r.ok) throw new Error();
    const j = await r.json();
    SESS = j.token; SUSER = j.user;
    try { localStorage.setItem('konta_sess', SESS); localStorage.setItem('konta_suser', JSON.stringify(SUSER)); } catch (e) {}
    hapticOk(); toast('Вы вошли через Telegram');
    await syncNow();
  } catch (e) { toast('Не удалось войти — попробуйте ещё раз'); }
}
function signOut(silent) {
  SESS = null; SUSER = null;
  try { localStorage.removeItem('konta_sess'); localStorage.removeItem('konta_suser'); } catch (e) {}
  if (!silent) { toast('Вы вышли'); render(); }
}
function openLogin() {
  $('#sheet2').innerHTML = `<div class="grab"></div><h2 style="margin-top:6px">Войти через Telegram</h2>
    <p class="note" style="margin:-2px 0 18px">Те же траты и капитал, что в боте @${BOT_NAME}. Пароль не нужен — вход подтверждается в Telegram.</p>
    <div id="tg-login" class="tglogin"></div>
    <p class="note" style="margin-top:16px">Данные хранятся в зашифрованном виде и доступны только вам.</p>
    <div style="height:10px"></div><button class="btn ghost" data-act="close2">Позже</button>`;
  const s = document.createElement('script');
  s.async = true; s.src = 'https://telegram.org/js/telegram-widget.js?22';
  s.setAttribute('data-telegram-login', BOT_NAME); s.setAttribute('data-size', 'large'); s.setAttribute('data-radius', '14');
  s.setAttribute('data-auth-url', APP_URL); s.setAttribute('data-request-access', 'write'); s.setAttribute('data-userpic', 'false');
  $('#tg-login').appendChild(s);
  open('#sheet2');
}
function syncSection() {
  if (!SYNC_API) return '';
  if (inTG) return `<h2>Синхронизация</h2><div class="row" data-act="synctap"><span class="ic">${ic('ui_check')}</span><span class="t"><span class="n">Бот и сайт связаны</span><span class="s" id="sync-s">${syncLine()}</span></span></div>`;
  if (!SESS) return `<h2>Синхронизация</h2><button class="row" data-act="login"><span class="ic">${ic('ui_import')}</span><span class="t"><span class="n">Войти через Telegram</span><span class="s">Те же данные, что в боте @${BOT_NAME}</span></span>${ic('ui_right', 'i chev')}</button>`;
  return `<h2>Синхронизация</h2><div class="row" data-act="synctap"><span class="ic">${ic('ui_check')}</span><span class="t"><span class="n">${esc(SUSER && SUSER.username ? '@' + SUSER.username : SUSER && SUSER.name || 'Telegram')}</span><span class="s" id="sync-s">${syncLine()}</span></span><button class="rb txt" data-act="logout">Выйти</button></div>`;
}

// Значок синхронизации рядом с месяцем: тихий, когда всё хорошо
function syncState() {
  if (!syncOn()) return '';
  if (SYNC.err === 'auth') return 'err';
  if (navigator.onLine === false || (SYNC.err === 'net' && (SYNC.fails || 0) >= 2)) return 'off';
  if (SYNC.busy || SYNC.err) return 'busy';
  return SYNC.at ? 'ok' : 'busy';
}
function syncIco() {
  const st = syncState(); if (!st) return '';
  const arrows = '<svg viewBox="0 0 24 24"><g class="ar"><path d="M19.5 9.5A8 8 0 0 0 5.2 7.8"/><path d="M5 4v4h4"/><path d="M4.5 14.5a8 8 0 0 0 14.3 1.7"/><path d="M19 20v-4h-4"/></g></svg>';
  const cloudOff = '<svg viewBox="0 0 24 24"><path d="M7.5 18.5h9.2a3.8 3.8 0 0 0 .6-7.55A5.5 5.5 0 0 0 6.9 9.6 4.5 4.5 0 0 0 7.5 18.5z"/><path d="M4.5 4.5l15 15"/></svg>';
  const bd = st === 'ok' ? '<svg viewBox="0 0 12 12"><path d="m3.2 6.2 1.9 1.9 3.7-3.9"/></svg>' : st === 'err' ? '<svg viewBox="0 0 12 12"><path d="M6 3.2v3.6M6 8.6v.1"/></svg>' : '';
  return `<button class="rb syn ${st}" data-act="synci" aria-label="Синхронизация">${st === 'off' ? cloudOff : arrows}<i class="bd">${bd}</i></button>`;
}
function syncIcoUpd() {
  const el = document.querySelector('.syn'), st = syncState();
  if (!el) return;
  if (el.classList.contains(st)) return;
  const tmp = document.createElement('div'); tmp.innerHTML = syncIco(); if (tmp.firstChild) el.replaceWith(tmp.firstChild); else el.remove();
}
function syncIcoTap() {
  const st = syncState();
  if (st === 'off') { toast('Нет связи. Всё сохранено на телефоне, отправлю, как появится сеть'); if (navigator.onLine !== false) syncTap(); return; }
  if (st === 'err') toast(SYNC.err === 'auth' ? (inTG ? 'Сервер не принял вход' : 'Войдите снова в Настройках') : 'Нет связи с облаком, повторяю. Данные сохранены на устройстве');
  else if (st === 'ok') toast(`Синхронизировано · ${ago(SYNC.at)}`);
  if (SYNC.err !== 'auth') syncTap();
}
// ================= i18n (RU → EN, перевод готового DOM) =================
let LANG = (() => { try { return localStorage.getItem('konta_lang') || ''; } catch (e) { return ''; } })();
if (!LANG) { const lc = tg && tg.initDataUnsafe && tg.initDataUnsafe.user && tg.initDataUnsafe.user.language_code; LANG = !lc || lc.startsWith('ru') ? 'ru' : 'en'; }
const EN_M = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const EN_WD = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const EN_WDF = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const mIdx = w => { w = w.toLowerCase(); const i = M.findIndex(m => w.startsWith(m.slice(0, 3))); return i; };
const RU_WDACC = ['понедельник', 'вторник', 'среду', 'четверг', 'пятницу', 'субботу', 'воскресенье'];
const DICT = {
  // навигация и заголовки
  'Обзор': 'Overview', 'Аналитика': 'Analytics', 'Капитал': 'Capital', 'Ещё': 'More', 'Настройки': 'Settings',
  'Расходы': 'Spending', 'Доходы': 'Income', 'Расход': 'Expense', 'Доход': 'Income', 'расходы': 'spending', 'доходы': 'income',
  'Сегодня': 'Today', 'Вчера': 'Yesterday', 'сегодня': 'today', 'В день': 'Per day', 'Прогноз': 'Forecast', 'Потрачено': 'Spent', 'Остаток': 'Left',
  'Операции': 'Transactions', 'Операций': 'Transactions', 'Категории': 'Categories', 'Сальдо': 'Net', 'Средний чек': 'Avg. ticket', 'Отложено': 'Saved',
  'Неделя': 'Week', 'Месяц': 'Month', 'Квартал': 'Quarter', 'Год': 'Year', 'По дням': 'By day', 'По неделям': 'By week', 'По месяцам': 'By month',
  'Темп': 'Pace', 'Дни недели': 'Weekdays', 'Чаще всего': 'Top places', 'Полгода': 'Six months', 'Динамика': 'Trend', 'Где чаще всего': 'Top places',
  'Доля': 'Share', 'Всего': 'Total', 'Структура': 'Allocation', 'Курсы': 'Rates', 'Курсы валют': 'Exchange rates', 'Акции': 'Stocks', 'Пик дня': 'Peak day',
  'Источники': 'Sources', 'Поступления': 'Received', 'Поступило': 'Received', 'Лимиты': 'Limits', 'Лимиты на месяц': 'Monthly limits', 'Данные': 'Data',
  'Оформление': 'Appearance', 'Язык': 'Language', 'Тип': 'Type', 'Валюта': 'Currency', 'Цена': 'Price', 'Суммой': 'As amount', 'По тикеру': 'By ticker',
  // кнопки
  'Добавить': 'Add', 'Записать': 'Save', 'Сохранить': 'Save', 'Удалить': 'Delete', 'Закрыть': 'Close', 'Готово': 'Done', 'Отмена': 'Cancel', 'Удалить всё': 'Delete all',
  'Добавить актив': 'Add asset', 'Добавить доход': 'Add income', 'Обновить сейчас': 'Refresh now', 'Экспорт в CSV': 'Export CSV', 'Скопировать': 'Copy',
  'Удалить все данные': 'Delete all data', 'Показать на демо-данных': 'Try with demo data', 'Сбросить выученные категории': 'Reset learned categories', 'Своё фото': 'Own photo', 'Выбрать фото': 'Choose photo',
  // категории
  'Такси': 'Taxi', 'Доставка еды': 'Food delivery', 'Продукты': 'Groceries', 'Кафе и фастфуд': 'Cafés & fast food', 'Транспорт': 'Transport', 'Маркетплейсы': 'Marketplaces',
  'Здоровье': 'Health', 'Табак': 'Tobacco', 'Связь и подписки': 'Phone & subscriptions', 'Цветы и подарки': 'Flowers & gifts', 'Дом': 'Home', 'Одежда': 'Clothing',
  'Развлечения': 'Entertainment', 'Питомец': 'Pet', 'Переводы': 'Transfers', 'Комиссии и наличные': 'Fees & cash', 'Другое': 'Other',
  'Зарплата': 'Salary', 'Подработка': 'Side income', 'Кэшбэк и возвраты': 'Cashback & refunds', 'Наличные': 'Cash',
  'Вклад и накопительный': 'Deposits & savings', 'Криптовалюта': 'Crypto', 'Акции и облигации': 'Stocks & bonds', 'Недвижимость и авто': 'Property & vehicles',
  'Долги и кредиты': 'Debts & loans', 'Счета': 'Accounts', 'Вклад': 'Deposits', 'Недвижимость': 'Property', 'Долги': 'Debts',
  // темы
  'Аврора': 'Aurora', 'Платина': 'Platinum', 'Доллар': 'Dollar', 'Франк': 'Franc', 'Золото': 'Gold', 'Русский': 'Русский',
  // фразы
  'новое': 'new', 'без изменений': 'no change', 'шт': 'pcs', 'Нет': 'None',
  'к прошлому периоду': 'vs last period', 'к прошлому периоду на эту дату': 'vs last period to date', 'к прошлому месяцу': 'vs last month',
  'Категория определена по тексту': 'Category detected from text', 'Нажмите на столбец': 'Tap a bar', 'В этом месяце трат нет.': 'No spending this month.',
  'В этом месяце доходов нет.': 'No income this month.', 'Здесь появятся ваши операции.': 'Your transactions will appear here.', 'Нажмите «+», чтобы добавить первую.': 'Tap “+” to add the first one.',
  'Нет данных за этот период.': 'No data for this period.', 'Укажите курс ниже': 'Enter the rate below', 'Будет вычтено из капитала': 'Will be subtracted from capital',
  'Укажите тикер': 'Enter a ticker', 'Акции и фонды Мосбиржи. Цена обновляется сама, если не вышло — впишите вручную.': 'MOEX stocks and funds. The price updates automatically; if it fails, enter it manually.',
  'Всё, что отложено, в одном месте: вклады, валюта, крипта, акции. Приложение пересчитает капитал в рубли по актуальному курсу.': 'Everything you’ve saved in one place: deposits, currency, crypto, stocks. Converted to rubles at current rates.',
  'Предупрежу, когда потратите 80% и 100%.': 'You’ll get a warning at 80% and 100%.',
  // плейсхолдеры
  'Комментарий': 'Note', 'Источник': 'Source', 'Название (необязательно)': 'Name (optional)', 'Название: вклад Сбер, Binance, ИИС…': 'Name: savings account, Binance, IIS…',
  'Тикер: SBER, YDEX, LQDT…': 'Ticker: SBER, YDEX, LQDT…', 'курс в рублях': 'rate in rubles', 'подтянется с Мосбиржи': 'fetched from MOEX',
  // тосты и диалоги
  'Сохранено': 'Saved', 'Удалено': 'Deleted', 'Актив добавлен': 'Asset added', 'Введите сумму': 'Enter an amount', 'Добавьте название': 'Add a name', 'Скопировано': 'Copied',
  'Выделите и скопируйте вручную': 'Select and copy manually', 'Выученные категории сброшены': 'Learned categories reset', 'Данные удалены': 'Data deleted', 'Демо-данные загружены': 'Demo data loaded',
  'Не удалось обновить курсы': 'Couldn’t update rates', 'Обновляю…': 'Updating…', 'Курсы сохранены': 'Rates saved', 'Удалить запись?': 'Delete this entry?',
  'Удалить все записи, лимиты и выученные категории? Это нельзя отменить.': 'Delete all entries, limits and learned categories? This can’t be undone.',
  'Тема': 'Theme', 'Женева': 'Geneva', 'Альпы': 'Alps', 'Циферблат': 'Dial', 'Кашемир': 'Cashmere', 'Солнечная гильошировка цвета шампань': 'Champagne sunburst guilloché', 'Тёплый беж и мягкая саржа': 'Warm beige and soft twill', 'Лимиты на месяц': 'Monthly limits', 'Бюджет': 'Budget', 'Не заданы': 'Not set', 'Готово': 'Done', 'Банкнота': 'Banknote', 'Цели': 'Goals', 'Новая цель': 'New goal', 'В цель': 'To goal', 'Пополнить': 'Add', 'Снять': 'Withdraw', 'Отложено': 'Saved', 'Исполнено': 'Achieved', 'Составить план': 'Make a plan', 'План': 'Plan', 'К сроку': 'By date', 'По силам': 'At my pace', 'Где взять': 'Where to find it', 'Создать цель': 'Create goal', 'Удалить цель': 'Delete goal', 'Где копите': 'Where you save', 'Откладываю сам': 'I set it aside myself', 'Без срока': 'No deadline', 'Убрать план': 'Remove plan', 'Убрать срок': 'Remove deadline', 'Ставка вклада': 'Deposit rate', 'Откладываю в месяц': 'I save per month', 'Срок': 'Deadline', 'История': 'History', 'Прекрасно': 'Wonderful', 'Подушка безопасности': 'Safety cushion', 'Изменить': 'Edit', 'Бордо': 'Bordeaux', 'Мрамор': 'Marble', 'Сапфир': 'Sapphire', 'Винный бархат и муар шёлковой подкладки': 'Wine velvet and a silk-lining moiré', 'Чёрный мрамор с золотой прожилкой': 'Black marble with a vein of gold', 'Грани сапфирового стекла часов': 'The facets of a watch sapphire crystal', 'Синхронизировано': 'Synced', 'Нет связи с облаком': 'No connection to the cloud', 'Ночное небо и свечение над озером': 'Night sky and the glow over the lake', 'Хребты в тумане и звёзды': 'Ridges in the mist and stars', 'Циферблат двери частного сейфа': 'The dial of a private vault door', 'Модульная сетка и красная линия': 'Modular grid and a red rule', 'Гравировка и зелень доллара': 'Engraving and dollar green', 'Любая картинка с телефона': 'Any picture from your phone', 'Цветы': 'Flowers', 'Кафе': 'Cafés', 'Связь': 'Phone', 'Комиссии': 'Fees', 'Доставка': 'Delivery', 'Кэшбэк': 'Cashback', 'Карта': 'Cards',
  'Скрывать суммы': 'Hide amounts',
  'Или коснитесь крупной суммы на любом экране': 'Or tap any large amount',
  'Вход по Face ID': 'Face ID unlock',
  'Через Telegram': 'Via Telegram',
  'Доступно внутри Telegram': 'Available inside Telegram',
  'Приватность': 'Privacy',
  'Тёмная': 'Dark',
  'Светлая': 'Light',
  'Как в системе': 'System',
  'Face ID выключен': 'Face ID off',
  'Face ID не подключён': 'Face ID not set up',
  'Без входа через Telegram код не восстановить. Можно только удалить все данные на этом устройстве и начать заново.': 'Without a Telegram sign-in the passcode can’t be recovered. You can only delete all data on this device and start over.',
  'Данные удалены, код сброшен': 'Data deleted, passcode reset',
  'Код недоступен в этом браузере': 'Passcode isn’t available in this browser',
  'Назовите цель': 'Name your goal',
  'Нет доступа к датчику движения': 'No access to the motion sensor',
  'Нет связи. Всё сохранено на телефоне, отправлю, как появится сеть': 'Offline. Everything is saved on your phone and will sync once you’re back online',
  'Сбросить код': 'Reset passcode',
  'Сбросить код? Вы вошли через свой Telegram, поэтому данные останутся на месте. Новый код можно поставить в Настройках.': 'Reset the passcode? You’re signed in with Telegram, so your data stays. You can set a new passcode in Settings.',
  'Скрыто. Вернуть — в Настройках': 'Hidden. You can bring it back in Settings',
  'Сначала включите код-пароль': 'Turn on the passcode first',
  'Убрать': 'Remove',
  'Убрать из подписок? Сами платежи останутся в истории.': 'Remove from subscriptions? The payments stay in your history.',
  'Удалить все операции из последнего импорта?': 'Delete all transactions from the last import?',
  'Цель удалена': 'Goal deleted',
  'Чтобы сбросить код, выйдите и войдите снова через Telegram. Данные на этом устройстве удалятся и вернутся из облака после входа.': 'To reset the passcode, sign out and sign in again with Telegram. Data on this device will be removed and restored from the cloud after sign-in.',
  'Сверх дневного': 'Over daily',
  'Риски': 'Ticks',
  'Кривая': 'Curve',
  'Столбцы': 'Bars',
  'Записывать сообщением': 'Log by message',
  'Траты сообщением': 'Log by message',
  'Открыть @KontaCieBot': 'Open @KontaCieBot',
  'Живой фон': 'Live background',
  'Фон темы чуть смещается при наклоне телефона': 'The theme background shifts slightly as you tilt the phone',
  'Можно тратить сегодня': 'Safe to spend today',
  'Дневной ориентир на главном экране': 'Daily guide on the home screen',
  'Не открывая приложение — просто напишите @KontaCieBot. Категорию бот подберёт сам, запись появится здесь при следующей синхронизации.': 'No need to open the app: just text @KontaCieBot. The bot picks the category itself, and the entry shows up here on the next sync.',
  'Несколько трат — каждая с новой строки. Под ответом бота есть кнопки «Категория» и «Отменить». /today — итог за сегодня.': 'Several expenses: one per line. Under the bot’s reply there are “Category” and “Undo” buttons. /today shows today’s total.',
  'Спокойный ориентир: сколько можно тратить каждый день, чтобы месяц сошёлся и цели шли по плану.': 'A calm guide: how much you can spend each day so the month adds up and your goals stay on track.',
  'Доход за месяц': 'Income this month',
  'Потрачено до сегодня': 'Spent before today',
  'Скрыть с главного экрана': 'Hide from home screen',
  'Вернуть можно в Настройках → Главный экран': 'You can turn it back on in Settings → Home screen',
  'Сколько нужно': 'Target amount',
  'Машина, отпуск, подушка…': 'Car, vacation, rainy-day fund…',
  'Пополняйте цель через «+» на главном — вкладка «В цель».': 'Top up the goal with “+” on the home screen, “To goal” tab.',
  'Пополняйте цель через «+» на главном — вкладка «В цель». Если копите на вкладе — добавьте его в «Капитал», и цель будет считаться по его балансу.': 'Top up the goal with “+” on the home screen, “To goal” tab. Saving in a deposit? Add it to “Capital” and the goal will track its balance.',
  'Машина, отпуск, подушка на чёрный день. Копите в своём темпе — или попросите составить план: приложение посчитает, сколько откладывать, что дадут проценты и реально ли это с вашими доходами.': 'A car, a vacation, a rainy-day fund. Save at your own pace, or ask for a plan: the app works out how much to set aside, what interest adds and whether it’s realistic on your income.',
  'Следующий ожидается': 'Next one is due',
  'в год.': 'a year.',
  'Хранятся в облаке и синхронизируются между устройствами.': 'Stored in the cloud and synced across devices.',
  'Регулярные платежи': 'Recurring payments',
  'Подписки': 'Subscriptions',
  'Каждый месяц': 'Every month',
  'Каждую неделю': 'Every week',
  'В месяц': 'Per month',
  'В год': 'Per year',
  'в месяц': 'per month',
  'Коснитесь строки, если это не подписка': 'Tap a row if it isn’t a subscription',
  'Нашли по платежам, которые повторяются с одной суммой каждый месяц или неделю.': 'Found from payments that repeat with the same amount every month or week.',
  'Код-пароль': 'Passcode',
  '4 цифры при входе в Konta': '4 digits to open Konta',
  'Сменить код': 'Change passcode',
  'Запрашивать код': 'Require passcode',
  'Сразу': 'Immediately',
  '1 мин': '1 min',
  '5 мин': '5 min',
  'После того как приложение свернули. При каждом запуске код спрашивается всегда.': 'After the app goes to background. Always required on launch.',
  'Суммы': 'Amounts',
  'Введите код': 'Enter passcode',
  'Придумайте код': 'Create a passcode',
  'Повторите код': 'Repeat passcode',
  'Введите текущий код': 'Enter current passcode',
  'Неверный код': 'Wrong passcode',
  'Коды не совпали. Ещё раз': 'Codes didn’t match. Try again',
  'Забыли код?': 'Forgot passcode?',
  'Отмена': 'Cancel',
  'Вместо кода': 'Instead of passcode',
  'Код-пароль включён': 'Passcode on',
  'Код-пароль выключен': 'Passcode off',
  'Код изменён': 'Passcode changed',
  'Код сброшен': 'Passcode reset',
  'Каждый день': 'Every day',
  'Параметры': 'Preferences',
  'Главный экран': 'Home screen',
  'Бюджет и валюта': 'Budget & currency',
  'Данные': 'Data',
  'Вид графика': 'Chart style',
  'Напишите боту «кофе 350»': 'Text the bot “coffee 350”',
  'PDF или CSV из любого банка': 'PDF or CSV from any bank',
  'Ещё можно переключать касанием по графику.': 'You can also tap the chart to switch.',
  'Суммы скрыты': 'Amounts hidden',
  'Валюта капитала': 'Capital currency',
  'Банк': 'Bank',
  'Импорт выписки': 'Import statement',
  'PDF или CSV из банка': 'PDF or CSV from your bank',
  'Итоги прошлого месяца': 'Last month’s summary',
  'Письмо от Konta & Cie': 'A letter from Konta & Cie',
  'Разблокировать': 'Unlock',
  'Face ID работает внутри Telegram': 'Face ID works inside Telegram',
  'Биометрия недоступна на этом устройстве': 'Biometrics unavailable on this device',
  'Вход по Face ID выключен': 'Face ID unlock off',
  'Доступ не выдан': 'Access not granted',
  'Читаю выписку…': 'Reading statement…',
  'Не нашёл операций в файле': 'No transactions found in the file',
  'Не удалось открыть PDF': 'Couldn’t open the PDF',
  'Не удалось прочитать файл': 'Couldn’t read the file',
  'Новых': 'New',
  'Категории расставлены автоматически. Поправить можно после импорта — тапом по операции.': 'Categories were set automatically. You can adjust them after import by tapping a transaction.',
  'Больше всего': 'Top category',
  'Крупнейшая трата': 'Largest purchase',
  'С уважением,': 'Sincerely,',
  'Благодарю': 'Thank you',
  'Частный учёт': 'Private accounting',
  'ваших денег': 'for your money',
  'Траты, доходы и капитал — в одном спокойном месте.': 'Spending, income and capital — in one calm place.',
  'Записывайте': 'Record it',
  'за секунду': 'in a second',
  'Сумма, и всё — категорию приложение поймёт само. Или загрузите выписку из банка.': 'Just the amount — the app figures out the category. Or upload a bank statement.', 'Binance, Tonkeeper, холодный кошелёк…': 'Binance, Tonkeeper, cold wallet…',
  'Только': 'Only',
  'для вас': 'for you',
  'Данные зашифрованы и видны только вам. Скрытие сумм одним касанием.': 'Your data is encrypted and visible only to you. One-tap amount hiding.',
  'Данные в облаке Telegram. Вход по Face ID и скрытие сумм одним касанием.': 'Data lives in the Telegram cloud. Face ID unlock and one-tap amount hiding.',
  'Далее': 'Next',
  'Записать первую трату': 'Add first expense',
  'Загрузить выписку': 'Upload statement',
  'Посмотреть на демо': 'Try the demo',
  'Кофе': 'Coffee',
  'В этом месяце операций не было.': 'No transactions this month.',
  'Первый месяц в Konta — дальше будет с чем сравнить.': 'Your first month in Konta — next time there will be something to compare.', 'Подробнее': 'More details', 'Скрыть подробности': 'Hide details', 'Свернуть': 'Collapse', 'Вернуть': 'Undo', 'Вернул': 'Restored', 'Приложение на экране «Домой»': 'App on your Home Screen', 'kontacie.com — на весь экран, без Telegram': 'kontacie.com — full screen, no Telegram', 'Konta на экране «Домой»': 'Konta on your Home Screen', 'Открыть kontacie.com': 'Open kontacie.com', 'Отдельное приложение с иконкой: открывается на весь экран, без Telegram. Траты те же, что здесь, — синхронизируются сами.': 'A standalone app with its own icon: full screen, no Telegram. Same spending as here — synced automatically.', 'Откройте kontacie.com в Safari — кнопка ниже': 'Open kontacie.com in Safari — button below', 'Нажмите «Поделиться» → «На экран "Домой"» → «Добавить»': 'Tap Share → “Add to Home Screen” → Add', 'Откройте Konta с иконки → Ещё → «Войти через Telegram»': 'Open Konta from the icon → More → “Sign in with Telegram”', 'Важно открыть именно в Safari: из Telegram и других браузеров iPhone не даст добавить на экран «Домой».': 'Use Safari: iPhone only allows adding to the Home Screen from Safari.', 'Откройте kontacie.com в браузере — кнопка ниже': 'Open kontacie.com in your browser — button below', 'Меню ⋮ → «Установить приложение» или «Добавить на главный экран»': 'Menu ⋮ → “Install app” or “Add to Home screen”', 'Подойдёт Chrome или любой браузер с пунктом «Установить приложение».': 'Chrome or any browser with “Install app” works.', 'Загружаю курс…': 'Loading rate…', 'Нет курса — проверьте интернет': 'No rate — check your connection', 'Синхронизация': 'Sync', 'Бот и сайт связаны': 'Bot and web are linked', 'Синхронизация…': 'Syncing…', 'Нет связи — синхронизирую, когда появится сеть': 'Offline — will sync when back online', 'Войдите снова': 'Please sign in again', 'Сервер не принял вход': 'Server rejected sign-in', 'Ожидание': 'Waiting', 'Войти через Telegram': 'Sign in with Telegram', 'Выйти': 'Sign out', 'Позже': 'Later', 'Вы вошли через Telegram': 'Signed in with Telegram', 'Не удалось войти — попробуйте ещё раз': 'Sign-in failed — try again', 'Вы вышли': 'Signed out', 'Данные хранятся в зашифрованном виде и доступны только вам.': 'Your data is stored encrypted and only you can access it.', 'Уже пользуюсь ботом — войти': 'I already use the bot — sign in', 'Пока вы не вошли через Telegram, данные хранятся только на этом устройстве.': 'Until you sign in with Telegram, data stays on this device only.', 'Выйти из аккаунта на этом устройстве? Данные останутся в боте.': 'Sign out on this device? Your data stays in the bot.', 'Установить на экран «Домой»': 'Install to Home Screen', 'Откроется на весь экран, как обычное приложение': 'Opens full screen, like a regular app', 'Веб-версия хранит данные только на этом устройстве. Раз в месяц делайте экспорт в CSV.': 'The web version keeps data on this device only. Export a CSV once a month.', 'На экран «Домой»': 'Home Screen', 'Нажмите «Поделиться» внизу Safari': 'Tap Share at the bottom of Safari', 'Выберите «На экран "Домой"»': 'Choose “Add to Home Screen”', 'Нажмите «Добавить» — появится иконка Konta': 'Tap Add — the Konta icon appears', 'Откройте меню браузера ⋮': 'Open the browser menu ⋮', 'Выберите «Установить приложение» или «Добавить на главный экран»': 'Choose “Install app” or “Add to Home screen”', 'Подтвердите — появится иконка Konta': 'Confirm — the Konta icon appears', 'С экрана «Домой» Konta открывается без адресной строки и работает без интернета.': 'From the Home Screen Konta opens without the address bar and works offline.', 'Понятно': 'Got it', 'Озон, такси, Пятёрочка…': 'Ozon, taxi, Starbucks…', 'Всё время': 'All time', 'Все банки': 'All banks', 'Пришло': 'Received', 'Потрачено': 'Spent', 'Найдите магазин, человека или категорию — покажу, сколько ушло за период и как это распределялось по месяцам.': 'Search a store, a person or a category — see how much went there and how it spread across months.', 'Ничего не нашлось — попробуйте «Всё время»': 'Nothing found — try “All time”', 'Категория': 'Category', 'Крупный текст': 'Larger text', 'Подписи и мелкий текст крупнее и контрастнее': 'Captions and small text get bigger and clearer', 'Быстрый доступ': 'Quick access', 'Добавить на экран «Домой»': 'Add to Home Screen', 'Konta & Cie откроется одним касанием, как обычное приложение': 'Open Konta & Cie with one tap, like a regular app', 'Иконка добавлена': 'Icon added', 'Обновите Telegram': 'Update Telegram', 'Монета': 'Coin', 'Найти другую монету': 'Find another coin', 'Ничего не нашлось': 'Nothing found', 'Поиск недоступен — впишите курс вручную': 'Search unavailable — enter the rate manually', 'Закрыть день': 'Close the day', 'День закрыт': 'Day closed', 'Открыть': 'Reopen', 'День без трат. Красиво': 'A day without spending. Nice', 'Насыщенный день. Завтра — новый': 'A full day. Tomorrow is a new one', 'В вашем обычном ритме': 'Right in your usual rhythm', 'Изменить': 'Edit', 'Наберите новую сумму': 'Type a new amount', 'Фото слишком большое': 'Photo is too large',
};
for (let i = 0; i < 12; i++) { DICT[M[i]] = EN_M[i]; DICT[cap(M[i])] = EN_M[i]; DICT[M[i].slice(0, 3)] = EN_M[i].slice(0, 3); }
for (let i = 0; i < 7; i++) DICT[WD[i]] = EN_WD[i];
const enMonth = w => { const i = mIdx(w); return i >= 0 ? EN_M[i] : w; };
const enMon3 = w => { const i = mIdx(w); return i >= 0 ? EN_M[i].slice(0, 3) : w; };
const RULES = [
  [/^Удалить «(.+)»\?$/, (m, n) => `Delete “${n}”?`],
  [/^Завтра — (.+) в день$/, (m, a) => `Tomorrow: ${a} per day`],
  [/^Пик (.+?) ·$/, (m, d) => `Peak ${TR(d)} ·`],
  [/^(\d+) подпис(?:ка|ки|ок)$/, (m, n) => `${n} subscription${n === '1' ? '' : 's'}`],
  [/^(.+) в год$/, (m, a) => `${a} per year`],
  [/^(\d+) лимит(?:а|ов)?$/, (m, n) => `${n} limit${n === '1' ? '' : 's'}`],
  [/^Следующий (?:≈ )?завтра$/, () => 'Next one tomorrow'],
  [/^Следующий ≈ (.+)$/, (m, d) => `Next ≈ ${TR(d)}`],
  [/^Самая дорогая, (.+):$/, (m, n) => `The priciest, ${n}:`],
  [/^Три месяца ваших расходов — (.+)$/, (m, a) => `Three months of your spending: ${a}`],
  [/^Осталось на (\d+) дн\S*$/, (m, n) => `Left for ${n} day${n === '1' ? '' : 's'}`],
  [/^Сейчас хранятся в этом браузере\. ([\d\s]+) запис\S*\.$/, (m, n) => `Stored in this browser for now. ${n.trim()} entries.`],
  [/^Хранятся в облаке и синхронизируются между устройствами\. ([\d\s]+) запис\S*\.$/, (m, n) => `Stored in the cloud and synced across devices. ${n.trim()} entries.`],
  [/^Нет связи(.*) — нажмите, чтобы повторить$/, (m, w) => `Offline${w} — tap to retry`],
  [/^≈ (.+) · курс (.+) ₽$/, (m, a, r) => `≈ ${a} · rate ${r} ₽`],
  [/^Синхронизировано · (.+)$/, (m, a) => `Synced · ${a}`], [/^Те же данные, что в боте (.+)$/, (m, b) => `Same data as in ${b}`], [/^Те же траты и капитал, что в боте (.+)\. Пароль не нужен — вход подтверждается в Telegram\.$/, (m, b) => `Same spending and capital as in ${b}. No password — you confirm the sign-in in Telegram.`],
  [/^В среднем (.+)$/, (m, a) => `Avg ${a}`], [/^(.+) в месяц$/, (m, a) => `${a} per month`], [/^и ещё ([\d\s]+) — уточните запрос$/, (m, n) => `and ${n} more — refine the search`],
  [/^· пополнения (.+)$/, (m, a) => `· deposits ${a}`],
  [/^([+−][\d,]+)% за сутки$/, (m, p) => `${p}% in 24h`],
  [/^Спокойнее обычного на (.+)$/, (m, a) => `${a} calmer than usual`],
  [/^Заданы: (\d+)$/, (m, n) => `Set: ${n}`],
  [/^Заданы: (\d+) · превышено: (\d+)$/, (m, n, x) => `Set: ${n} · over: ${x}`],
  [/^Удалено · (.+)$/, (m, a) => `Deleted · ${a}`],
  [/^(\d{1,2}) ([а-яё]+), ([а-я]{2})$/i, (m, d, mo, wd) => `${EN_WD[WD.indexOf(wd)] || wd}, ${d} ${enMonth(mo)}`],
  [/^(\d{1,2}) ([а-яё]+)$/i, (m, d, mo) => mIdx(mo) >= 0 ? `${d} ${mo.length <= 3 ? enMon3(mo) : enMonth(mo)}` : null],
  [/^(\d{1,2}) ([а-яё]{3}) – (\d{1,2}) ([а-яё]{3})$/i, (m, a, b, c, d) => `${a} ${enMon3(b)} – ${c} ${enMon3(d)}`],
  [/^([а-яё]+) (\d{4})$/i, (m, mo, y) => mIdx(mo) >= 0 ? `${enMonth(mo)} ${y}` : null],
  [/^(\d) кв\. (\d{4})$/, (m, q, y) => `Q${q} ${y}`],
  [/^(\d+) раза? · в среднем (.+)$/, (m, n, v) => `${n}× · avg ${v}`],
  [/^(\d+) раза?$/, (m, n) => `${n}×`],
  [/^(\d+) (операция|операции|операций)$/, (m, n) => `${n} ${n === '1' ? 'transaction' : 'transactions'}`],
  [/^(\d+) (запись|записи|записей)$/, (m, n) => `${n} ${n === '1' ? 'entry' : 'entries'}`],
  [/^в этом месяце (.+)$/, (m, v) => `this month ${v}`],
  [/^из (.+)$/, (m, v) => `of ${v}`],
  [/^(.+) из (.+)$/, (m, a, b) => `${a} of ${b}`],
  [/^Пик (.+) — ?$/, (m, d) => `Peak · ${TR(d)} — `],
  [/^к этой же дате в ([а-яё]+)$/i, (m, mo) => `vs same date in ${enMonth(mo)}`],
  [/^к ([а-яё]+)$/i, (m, mo) => mIdx(mo) >= 0 ? `vs ${enMonth(mo)}` : null],
  [/^(\d+)% капитала$/, (m, n) => `${n}% of capital`],
  [/^Больше всего — в ([а-яё]+), в среднем (.+)\.$/i, (m, d, v) => `Highest on ${EN_WDF[RU_WDACC.indexOf(d)] || d}s, avg ${v}.`],
  [/^Тратите (быстрее|медленнее), чем в прошлом периоде, на (.+)\.$/, (m, w, v) => `Spending ${w === 'быстрее' ? 'faster' : 'slower'} than last period by ${v}.`],
  [/^за месяц · (.+)$/, (m, v) => `this month · ${v}`],
  [/^(.+): лимит превышен$/, (m, c) => `${TR(c)}: limit exceeded`],
  [/^(.+): (\d+)% лимита$/, (m, c, p) => `${TR(c)}: ${p}% of limit`],
  [/^Лимит «(.+)»: (.+)$/, (m, c, v) => `${TR(c)} limit: ${v}`],
  [/^Лимит «(.+)» снят$/, (m, c) => `${TR(c)} limit removed`],
  [/^Лимит (.+) превышен на (.+)\.$/, (m, a, b) => `Limit ${a} exceeded by ${b}.`],
  [/^Осталось (.+) из (.+?)(?: — примерно (.+) в день)?\.$/, (m, a, b, c) => `${a} left of ${b}${c ? ` — about ${c} per day` : ''}.`],
  [/^Удалить «(.+)»\?$/, (m, n) => `Delete “${n}”?`],
  [/^Запомню: «(.+)» → (.+)$/, (m, w, c) => `Will remember: “${w}” → ${TR(c)}`],
  [/^Сбросить выученные категории \((\d+)\)$/, (m, n) => `Reset learned categories (${n})`],
  [/^Private finance · версия (.+)$/, (m, v) => `Private finance · version ${v}`],
  [/^Сейчас хранятся в этом браузере\. В Telegram — в облаке\. (.+)\.$/, (m, n) => `Stored in this browser for now. In Telegram — in the cloud. ${TR(n)}.`],
  [/^Хранятся в облаке Telegram и синхронизируются между устройствами\. (.+)\.$/, (m, n) => `Stored in Telegram cloud and synced across devices. ${TR(n)}.`],
  [/^Обновляются сами при открытии и каждые 30 минут: валюты — по ЦБ, крипта — по CoinGecko\.(?: Последнее обновление (.+)\.)? Можно задать и вручную\.$/, (m, t) => `Update automatically on open and every 30 minutes: currencies from the Central Bank, crypto from CoinGecko.${t ? ` Last update ${TR(t)}.` : ''} You can also set them manually.`],
  [/^Все категории · (\d+)$/, (m, n) => `All categories · ${n}`],
  [/^Вход по (.+) включён$/, (m, t) => `${t} unlock on`],
  [/^Нужен курс (\w+) — обновляю$/, (m, c) => `${c} rate needed — updating`],
  [/^Всего · нет курса (\w+), показываю в рублях$/, (m, c) => `Total · no ${c} rate, showing in rubles`],
  [/^(.+) — (.+)\. Найдено (\d+) (?:операция|операции|операций)(?:, (\d+) уже есть в приложении)?\.$/, (m, a, b, n, d) => `${TR(a)} — ${TR(b)}. Found ${n} transactions${d ? `, ${d} already in the app` : ''}.`],
  [/^Импортировать (\d+)$/, (m, n) => `Import ${n}`], [/^Импортировано (\d+)$/, (m, n) => `Imported ${n}`], [/^и ещё (\d+)$/, (m, n) => `and ${n} more`],
  [/^([А-Яа-яЁё]+) (\d{4}) · итоги месяца$/, (m, mo, y) => `${enMonth(mo)} ${y} · monthly summary`],
  [/^(.*?)(?:В|в)от как прошёл ([а-яё]+)\.$/i, (m, nm, mo) => `${nm ? nm.replace(/, $/, '') + ', h' : 'H'}ere is how ${enMonth(mo)} went.`],
  [/^Расходы ниже, чем месяцем ранее, на (.+)\. Хороший месяц\.$/, (m, v) => `Spending was ${v} lower than the month before. A good month.`],
  [/^Расходы выше, чем месяцем ранее\. Больше всего ушло на «(.+)»\.$/, (m, c) => `Spending was higher than the month before. Most went to “${TR(c)}”.`],
  [/^(\d+) мин назад$/, (m, n) => `${n} min ago`], [/^(\d+) ч назад$/, (m, n) => `${n} h ago`], [/^только что$/, () => 'just now'],
  [/^≈ (.+)$/, () => null],
  [/^(.+?) (\d+%)$/, (m, n, p) => { const t = TR(n); return t !== n ? `${t} ${p}` : null; }],
];
const TOKENS = [[/(\d)к(?=\s?₽|$|\s)/g, '$1k'], [/(\d) млн(?=\s|$)/g, '$1M'], [/(\d) млрд(?=\s|$)/g, '$1B'], [/ шт(?=[\s\u00a0]|$)/g, ' pcs'], [/демо/g, 'demo'], [/только что/g, 'just now'], [/(\d+) мин назад/g, '$1 min ago'], [/(\d+) ч назад/g, '$1 h ago'],
  [/нет цены/g, 'no price'], [/нет курса/g, 'no rate'], [/обновлены/g, 'updated'], [/Курсы:/g, 'Rates:'], [/Цены акций/g, 'Stock prices'], [/вручную/g, 'manual'], [/ЦБ/g, 'CBR'], [/Мосбиржа/g, 'MOEX'], [/не задан/g, 'not set']];
const CYR = /[А-Яа-яЁё]/;
function TR(s) {
  if (LANG !== 'en' || !s || !CYR.test(s)) return s;
  const t = s.trim(); if (!t) return s;
  const lead = s.slice(0, s.indexOf(t)), tail = s.slice(s.indexOf(t) + t.length);
  let out = DICT[t];
  if (out === undefined) for (const [re, fn] of RULES) { const m = t.match(re); if (m) { const r = fn(...m); if (r != null) { out = r; break; } } }
  if (out === undefined && t.includes(' · ')) { const parts = t.split(' · ').map(p => TR(p)); out = parts.join(' · '); }
  if (out === undefined) { out = t; for (const [re, rep] of TOKENS) out = out.replace(re, rep); }
  return lead + out + tail;
}
function translateTree(root) {
  if (LANG !== 'en' || !root) return;
  if (root.nodeType === 3) { const v = TR(root.nodeValue); if (v !== root.nodeValue) root.nodeValue = v; return; }
  if (root.nodeType !== 1) return;
  if (root.tagName === 'TEXTAREA' || root.tagName === 'SCRIPT' || root.tagName === 'STYLE') return;
  if (root.placeholder && CYR.test(root.placeholder)) root.placeholder = TR(root.placeholder);
  const w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT);
  let n;
  while ((n = w.nextNode())) {
    if (n.nodeType === 3) { if (n.parentNode && n.parentNode.tagName === 'TEXTAREA') continue; const v = TR(n.nodeValue); if (v !== n.nodeValue) n.nodeValue = v; }
    else if (n.placeholder && CYR.test(n.placeholder)) n.placeholder = TR(n.placeholder);
  }
}
if (LANG === 'en') {
  document.documentElement.lang = 'en';
  new MutationObserver(ms => ms.forEach(m => { m.addedNodes.forEach(translateTree); if (m.type === 'characterData') translateTree(m.target); }))
    .observe(document.body, { childList: true, subtree: true, characterData: true });
  translateTree(document.body);
}
function setLang(l) { try { localStorage.setItem('konta_lang', l); } catch (e) {} location.reload(); }
// ================= Themes — у каждой своя идея =================
const svgUrl = s => `url("data:image/svg+xml;utf8,${encodeURIComponent(s).replace(/'/g, '%27')}")`;
function rng(seed) { let s = seed; return () => (s = (s * 9301 + 49297) % 233280) / 233280; }

// Женева — свечение над озером (CSS)
const genevaBg = () => `radial-gradient(38% 22% at 22% 100%,rgba(222,82,104,.55),transparent 70%),radial-gradient(40% 24% at 50% 104%,rgba(140,66,184,.6),transparent 72%),radial-gradient(42% 22% at 80% 100%,rgba(52,80,210,.65),transparent 72%),linear-gradient(180deg,#101830 0%,#0b1020 24%,#000 52%)`;

// Альпы — хребты в тумане и звёзды
function alpsSVG() {
  const R = rng(11);
  const ridge = (base, amp, step, seed) => { const r = rng(seed); let pts = [], x = -20, y = base; while (x <= 410) { y = base - r() * amp; pts.push([x, y]); x += step * (.7 + r() * .8); } return pts; };
  const layers = [[640, 110, 58, 3, .09, '#070a14'], [700, 80, 48, 7, .14, '#05070d'], [760, 50, 40, 13, .2, '#020305']];
  let g = '';
  layers.forEach(([b, a, s, sd, op, fill]) => {
    const p = ridge(b, a, s, sd), line = p.map(([x, y], i) => (i ? 'L' : 'M') + x.toFixed(1) + ',' + y.toFixed(1)).join('');
    g += `<path d="${line}L410,844L-20,844Z" fill="${fill}"/><path d="${line}" fill="none" stroke="#e8eef8" stroke-opacity="${op}" stroke-width=".7" stroke-linejoin="round"/>`;
    p.forEach(([x, y], i) => { if (i && i < p.length - 1 && y < p[i - 1][1] - 12 && y < p[i + 1][1] - 12) g += `<path d="M${x - 7},${y + 9}L${x},${y}L${x + 6},${y + 8}" fill="none" stroke="#fff" stroke-opacity="${op * 1.5}" stroke-width=".9"/>`; });
  });
  let stars = '';
  for (let i = 0; i < 70; i++) stars += `<circle cx="${(R() * 390).toFixed(1)}" cy="${(R() * 440).toFixed(1)}" r="${(.3 + R() * .7).toFixed(2)}" fill="#fff" opacity="${(.15 + R() * .55).toFixed(2)}"/>`;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 390 844" preserveAspectRatio="xMidYMax slice"><defs><radialGradient id="m" cx=".5" cy=".72" r=".5"><stop offset="0" stop-color="#9cc3ff" stop-opacity=".22"/><stop offset="1" stop-color="#9cc3ff" stop-opacity="0"/></radialGradient></defs>${stars}<rect x="-40" y="380" width="470" height="400" fill="url(#m)"/>${g}</svg>`;
}
const alpsBg = () => `${svgUrl(alpsSVG())} center bottom/cover no-repeat,linear-gradient(180deg,#0a1222 0%,#060a14 45%,#000 80%)`;

// Циферблат — солнечная гильошировка, как у часового циферблата
function dialSVG() {
  // тонкие гильошированные кольца (волна по окружности), только наверху
  let g = '';
  for (let k = 0; k < 26; k++) {
    const R0 = 120 + k * 15; let d = '';
    for (let a = 0; a <= 360; a += 3) { const t = a * Math.PI / 180, r = R0 + 2.2 * Math.sin(a * Math.PI / 15 + k * .55); d += (a ? 'L' : 'M') + (195 + r * Math.cos(t)).toFixed(1) + ',' + (-60 + r * Math.sin(t)).toFixed(1); }
    g += `<path d="${d}Z"/>`;
  }
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 390 844" preserveAspectRatio="xMidYMin slice"><defs><radialGradient id="f" cx="195" cy="-60" r="520" gradientUnits="userSpaceOnUse"><stop offset=".15" stop-color="#fff" stop-opacity=".9"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></radialGradient><mask id="m"><rect width="390" height="844" fill="url(#f)"/></mask></defs><g mask="url(#m)" fill="none" stroke="rgba(236,214,170,.11)" stroke-width=".5">${g}</g></svg>`;
}
const dialBg = () => [
  'linear-gradient(180deg,transparent 0%,transparent 34%,rgba(0,0,0,.75) 62%,#000 82%)',
  svgUrl(dialSVG()) + ' center top/cover no-repeat',
  'conic-gradient(from 180deg at 50% -8%,transparent 0deg,rgba(255,228,178,.10) 22deg,transparent 48deg,transparent 140deg,rgba(255,228,178,.07) 168deg,transparent 196deg,transparent 300deg,rgba(255,228,178,.09) 328deg,transparent 360deg)',
  'repeating-conic-gradient(from 0deg at 50% -8%,rgba(236,214,170,.035) 0deg .35deg,transparent .35deg 1.1deg)',
  'radial-gradient(90% 46% at 50% -6%,rgba(176,140,82,.42),transparent 70%)',
  'radial-gradient(60% 18% at 50% 104%,rgba(176,140,82,.22),transparent 72%)',
  'linear-gradient(180deg,#17120a 0%,#0a0806 40%,#000 70%)'
].join(',');

// Кашемир — тёплый беж и саржевое плетение
const cashBg = () => [
  'repeating-linear-gradient(45deg,rgba(255,236,214,.028) 0 1px,transparent 1px 3px)',
  'repeating-linear-gradient(-45deg,rgba(0,0,0,.22) 0 1px,transparent 1px 5px)',
  'radial-gradient(70% 34% at 28% 104%,rgba(201,160,122,.42),transparent 72%)',
  'radial-gradient(62% 30% at 80% 106%,rgba(150,112,86,.40),transparent 72%)',
  'radial-gradient(90% 40% at 50% -10%,rgba(120,92,70,.30),transparent 70%)',
  'linear-gradient(180deg,#1a1410 0%,#0e0b09 45%,#070505 100%)'
].join(',');

// Банкнота — гравировка и зелень
function latheSVG(col) {
  let g = '';
  for (let i = 0; i < 46; i++) {
    let d = ''; const y0 = 470 + i * 8.4, ph = i * .23;
    for (let x = -10; x <= 400; x += 5) { const y = y0 + 6 * Math.sin(x / 47 + ph) * Math.sin(x / 163 - i * .07) + 2.2 * Math.sin(x / 13 + i); d += (x === -10 ? 'M' : 'L') + x + ',' + y.toFixed(1); }
    g += `<path d="${d}"/>`;
  }
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 390 844" preserveAspectRatio="xMidYMax slice"><defs><linearGradient id="f" x1="0" y1="0" x2="0" y2="1"><stop offset=".52" stop-color="#fff" stop-opacity="0"/><stop offset=".8" stop-color="#fff" stop-opacity=".9"/><stop offset="1" stop-color="#fff" stop-opacity=".35"/></linearGradient><mask id="m"><rect width="390" height="844" fill="url(#f)"/></mask></defs><g mask="url(#m)" fill="none" stroke="${col}" stroke-width=".45">${g}</g></svg>`;
}
const noteBg = () => `${svgUrl(latheSVG('rgba(150,200,160,.16)'))} center bottom/cover no-repeat,radial-gradient(55% 32% at 30% 104%,rgba(60,150,98,.5),transparent 72%),radial-gradient(60% 36% at 72% 106%,rgba(34,96,62,.45),transparent 72%),linear-gradient(180deg,#07140d 0%,#000 46%)`;

// Бордо — винный бархат и муар шёлковой подкладки
function moireSVG() {
  let g = '';
  for (let i = 0; i < 60; i++) { const r = 40 + i * 9; g += `<circle cx="120" cy="900" r="${r}"/><circle cx="300" cy="930" r="${r * 1.02}"/>`; }
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 390 844" preserveAspectRatio="xMidYMax slice"><defs><linearGradient id="f" x1="0" y1="0" x2="0" y2="1"><stop offset=".45" stop-color="#fff" stop-opacity="0"/><stop offset=".85" stop-color="#fff" stop-opacity=".8"/><stop offset="1" stop-color="#fff" stop-opacity=".3"/></linearGradient><mask id="m"><rect width="390" height="844" fill="url(#f)"/></mask></defs><g mask="url(#m)" fill="none" stroke="rgba(255,180,190,.11)" stroke-width=".6">${g}</g></svg>`;
}
const bordeauxBg = () => [
  svgUrl(moireSVG()) + ' center bottom/cover no-repeat',
  'radial-gradient(70% 34% at 24% 106%,rgba(172,30,62,.78),transparent 72%)',
  'radial-gradient(62% 32% at 82% 104%,rgba(118,16,44,.75),transparent 72%)',
  'radial-gradient(90% 40% at 50% -8%,rgba(128,26,48,.5),transparent 70%)',
  'linear-gradient(180deg,#2a0912 0%,#140509 42%,#0a0204 100%)'
].join(',');

// Мрамор — чёрный Nero Marquina с белыми и золотыми прожилками
function marbleSVG() {
  const R = rng(29); let g = '', gold = '';
  const vein = (x0, y0, len, w, col, op) => { let d = `M${x0},${y0}`, x = x0, y = y0, a = .45 + R() * .5; for (let i = 0; i < len; i++) { a += (R() - .5) * .38; x += 16 * Math.cos(a); y += 16 * Math.sin(a) * .8; d += `L${x.toFixed(1)},${y.toFixed(1)}`; } return `<path d="${d}" stroke="${col}" stroke-opacity="${op}" stroke-width="${w}"/>`; };
  for (let i = 0; i < 12; i++) g += vein(-60 + R() * 260, 20 + R() * 380, 34, (.5 + R() * 1.8).toFixed(2), '#f2efe9', (.08 + R() * .16).toFixed(2));
  for (let i = 0; i < 2; i++) gold += vein(R() * 160, 60 + R() * 220, 30, (.7 + R() * .6).toFixed(2), '#e2c27f', (.22 + R() * .12).toFixed(2));
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 390 844" preserveAspectRatio="xMidYMid slice"><defs><filter id="b"><feGaussianBlur stdDeviation="1.6"/></filter><filter id="s"><feGaussianBlur stdDeviation="7"/></filter><filter id="g"><feGaussianBlur stdDeviation="2.5"/></filter></defs><g fill="none" stroke-linejoin="round"><g filter="url(#s)" opacity=".7">${g}</g><g filter="url(#b)">${g}</g><g filter="url(#g)">${gold}</g>${gold}</g></svg>`;
}
const marbleBg = () => [
  'linear-gradient(180deg,rgba(0,0,0,.35) 0%,rgba(0,0,0,.15) 22%,rgba(0,0,0,.55) 48%,rgba(0,0,0,.82) 70%,rgba(0,0,0,.88) 100%)',
  svgUrl(marbleSVG()) + ' center/cover no-repeat',
  'radial-gradient(70% 34% at 60% 88%,rgba(84,80,74,.35),transparent 72%)','radial-gradient(50% 24% at 20% 100%,rgba(170,138,80,.18),transparent 72%)',
  'linear-gradient(160deg,#141414 0%,#0b0b0b 50%,#060606 100%)'
].join(',');

// Сапфир — грани сапфирового стекла часов
function facetSVG() {
  const R = rng(5), cx = 195, cy = -40; let g = '';
  const N = 14;
  for (let i = 0; i < N; i++) {
    const a1 = Math.PI * (.08 + .84 * i / N), a2 = Math.PI * (.08 + .84 * (i + 1) / N), r1 = 520 + R() * 120, r2 = 520 + R() * 120;
    const op = (.008 + R() * .045).toFixed(3);
    g += `<path d="M${cx},${cy}L${(cx + r1 * Math.cos(a1)).toFixed(1)},${(cy + r1 * Math.sin(a1)).toFixed(1)}L${(cx + r2 * Math.cos(a2)).toFixed(1)},${(cy + r2 * Math.sin(a2)).toFixed(1)}Z" fill="#a9c4ff" fill-opacity="${op}" stroke="#cfe0ff" stroke-opacity=".06" stroke-width=".5"/>`;
  }
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 390 844" preserveAspectRatio="xMidYMin slice"><defs><radialGradient id="f" cx="195" cy="-40" r="600" gradientUnits="userSpaceOnUse"><stop offset=".1" stop-color="#fff"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></radialGradient><mask id="m"><rect width="390" height="844" fill="url(#f)"/></mask></defs><g mask="url(#m)">${g}</g></svg>`;
}
const sapphireBg = () => [
  svgUrl(facetSVG()) + ' center top/cover no-repeat',
  'radial-gradient(80% 40% at 50% -6%,rgba(46,78,200,.5),transparent 70%)',
  'radial-gradient(50% 22% at 50% 104%,rgba(30,60,170,.35),transparent 72%)',
  'linear-gradient(180deg,#081030 0%,#040818 42%,#000 78%)'
].join(',');

const THEMES = {
  aurora: { n: 'Женева', d: 'Ночное небо и свечение над озером', bg: genevaBg, acc: '#c9b8ff' },
  alps: { n: 'Альпы', d: 'Хребты в тумане и звёзды', bg: alpsBg, acc: '#9cc3ff' },
  dial: { n: 'Циферблат', d: 'Солнечная гильошировка цвета шампань', bg: dialBg, acc: '#dcc49a' },
  cash: { n: 'Кашемир', d: 'Тёплый беж и мягкая саржа', bg: cashBg, acc: '#d0ac90' },
  bordeaux: { n: 'Бордо', d: 'Винный бархат и муар шёлковой подкладки', bg: bordeauxBg, acc: '#e0909e' },
  marble: { n: 'Мрамор', d: 'Чёрный мрамор с золотой прожилкой', bg: marbleBg, acc: '#e3cf9f' },
  sapphire: { n: 'Сапфир', d: 'Грани сапфирового стекла часов', bg: sapphireBg, acc: '#9db8ff' },
  note: { n: 'Банкнота', d: 'Гравировка и зелень доллара', bg: noteBg, acc: '#7fcf9a' },
  photo: { n: 'Своё фото', d: 'Любая картинка с телефона', acc: '#f2efe9' },
};
const THEME_MIGRATE = { platinum: 'cash', franc: 'alps', gold: 'dial', dollar: 'note', vault: 'dial', zurich: 'cash' };
let THEME = (() => { try { const t = localStorage.getItem('konta_theme') || 'aurora'; return THEME_MIGRATE[t] || t; } catch (e) { return 'aurora'; } })();
const themeCache = {};
const themeBg = k => themeCache[k] || (themeCache[k] = THEMES[k].bg());
// режим: тёмный, светлый или как в системе (в Telegram: как в Telegram)
let MODE = (() => { try { return localStorage.getItem('konta_mode') || 'dark'; } catch (e) { return 'dark'; } })();
const LIGHT_SKY = 'radial-gradient(90% 38% at 75% -6%,rgba(var(--sl),.45),rgba(var(--sl),0) 70%),radial-gradient(70% 30% at 0% 0%,rgba(var(--sl),.18),rgba(var(--sl),0) 70%),linear-gradient(180deg,#f7f3eb 0%,#f1ece2 60%,#ece6da 100%)';
const sysLight = () => tg && tg.colorScheme ? tg.colorScheme === 'light' : !!(window.matchMedia && matchMedia('(prefers-color-scheme: light)').matches);
const isLight = () => MODE === 'light' || (MODE === 'auto' && sysLight());
function setMode(m) { MODE = m; try { localStorage.setItem('konta_mode', m); } catch (e) {} haptic(); applyTheme(); render(); }
try { matchMedia('(prefers-color-scheme: light)').addEventListener('change', () => { if (MODE === 'auto') { applyTheme(); render(); } }); } catch (e) {}
try { tg && tg.onEvent && tg.onEvent('themeChanged', () => { if (MODE === 'auto') { applyTheme(); render(); } }); } catch (e) {}

// светлая версия рисунка темы: инвертируем яркость каждого цвета, сохраняя оттенок (тёмный мрамор становится белым с тёмными прожилками)
function lightColor(r, g, b, a) {
  r /= 255; g /= 255; b /= 255;
  const mx = Math.max(r, g, b), mn = Math.min(r, g, b); let h = 0, sat = 0; const l = (mx + mn) / 2;
  if (mx !== mn) { const d = mx - mn; sat = l > .5 ? d / (2 - mx - mn) : d / (mx + mn); h = mx === r ? (g - b) / d + (g < b ? 6 : 0) : mx === g ? (b - r) / d + 2 : (r - g) / d + 4; h /= 6; }
  let L = 1 - l; if (L > .8) { L = .9 + (L - .8) * .4; if (sat < .25) { h = 40 / 360; sat = Math.max(sat, .3); } }
  const q = L < .5 ? L * (1 + sat) : L + sat - L * sat, pp = 2 * L - q;
  const hk = t => { t = (t + 1) % 1; return t < 1 / 6 ? pp + (q - pp) * 6 * t : t < .5 ? q : t < 2 / 3 ? pp + (q - pp) * (2 / 3 - t) * 6 : pp; };
  const R = Math.round(hk(h + 1 / 3) * 255), G = Math.round(hk(h) * 255), B = Math.round(hk(h - 1 / 3) * 255);
  return a == null ? `rgb(${R},${G},${B})` : `rgba(${R},${G},${B},${a})`;
}
function lightCss(str) {
  // один проход, чтобы уже осветлённый цвет не инвертировался второй раз
  return str.replace(/#([0-9a-f]{6}|[0-9a-f]{3})\b|rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*([\d.]+)\s*)?\)|(^|[\s,(])(black|white)\b/gi, (m, hx, r, g, b, a, p0, w) => {
    if (hx) { if (hx.length === 3) hx = hx.split('').map(c => c + c).join(''); return lightColor(parseInt(hx.slice(0, 2), 16), parseInt(hx.slice(2, 4), 16), parseInt(hx.slice(4, 6), 16)); }
    if (w) return p0 + (w.toLowerCase() === 'black' ? 'rgb(246,242,234)' : 'rgb(28,26,22)');
    return lightColor(+r, +g, +b, a == null ? null : +a);
  });
}
const lightCache = {};
function lightBg(k) {
  if (lightCache[k]) return lightCache[k];
  const src = themeBg(k).replace(/url\("data:image\/svg\+xml;utf8,([^"]+)"\)/g, (m, enc) => svgUrl(lightCss(decodeURIComponent(enc))));
  return (lightCache[k] = lightCss(src.replace(/url\("data:image\/svg\+xml;utf8,[^"]+"\)/g, u => '\u0000' + btoa(unescape(encodeURIComponent(u))) + '\u0000')).replace(/\u0000([^\u0000]+)\u0000/g, (m, b) => decodeURIComponent(escape(atob(b)))));
}
function applyTheme() {
  const sky = $('.sky'); let t = THEMES[THEME];
  if (!t) { THEME = 'aurora'; t = THEMES.aurora; }
  sky.className = 'sky flat';
  if (THEME === 'photo') {
    let img = null; try { img = localStorage.getItem('konta_photo'); } catch (e) {}
    if (!img) { THEME = 'aurora'; return applyTheme(); }
    sky.style.background = `linear-gradient(180deg,rgba(0,0,0,.45),rgba(0,0,0,.82) 55%,#000),url(${img}) center/cover no-repeat`;
  } else sky.style.background = isLight() ? lightBg(THEME) : themeBg(THEME);
  if (THEME === 'photo' && isLight()) sky.style.background = LIGHT_SKY;
  document.documentElement.classList.toggle('light', isLight());
  { const de = document.documentElement, cs = getComputedStyle(de), dk = (v, k) => v.split(',').map(x => Math.round(+x * k)).join(',');
    const a = cs.getPropertyValue('--sl').trim(), b = cs.getPropertyValue('--sl2').trim() || a;
    if (a) { de.style.setProperty('--sll', a); de.style.setProperty('--sld', dk(a, .55)); de.style.setProperty('--sld2', dk(b, .42)); } }
  if (tg) { const c = isLight() ? '#f2eee6' : '#000000'; try { tg.setHeaderColor(c); tg.setBackgroundColor(c); tg.setBottomBarColor && tg.setBottomBarColor(c); } catch (e) {} }
  document.documentElement.style.setProperty('--acc', t.acc);
  document.body.dataset.theme = THEME; document.documentElement.dataset.th = THEME;
}
function setTheme(k) {
  THEME = k; try { localStorage.setItem('konta_theme', k); } catch (e) {}
  const row = document.querySelector('.themes'), sl = row ? row.scrollLeft : 0;
  applyTheme(); haptic(); render();
  const nr = document.querySelector('.themes'); if (!nr) return;
  nr.style.scrollSnapType = 'none'; nr.scrollLeft = sl; nr.style.scrollSnapType = '';
  const on = nr.querySelector('.th.on');
  if (on) { const a = on.offsetLeft - nr.scrollLeft, w = nr.clientWidth; if (a < 12 || a + on.offsetWidth > w - 12) nr.scrollTo({ left: on.offsetLeft - (w - on.offsetWidth) / 2, behavior: 'smooth' }); }
  const d = document.querySelector('.thd'); if (d) { d.style.opacity = 0; requestAnimationFrame(() => { d.style.transition = 'opacity .35s'; d.style.opacity = 1; }); }
}
function pickPhoto(file) {
  const fr = new FileReader();
  fr.onload = () => {
    const im = new Image();
    im.onload = () => {
      const sc = Math.min(1, 1100 / Math.max(im.width, im.height)), c = document.createElement('canvas');
      c.width = Math.round(im.width * sc); c.height = Math.round(im.height * sc);
      c.getContext('2d').drawImage(im, 0, 0, c.width, c.height);
      const data = c.toDataURL('image/jpeg', .72);
      try { localStorage.setItem('konta_photo', data); } catch (e) { toast('Фото слишком большое'); return; }
      setTheme('photo');
    };
    im.src = fr.result;
  };
  fr.readAsDataURL(file);
}
function swBg(k) {
  if (k === 'photo') { let img = null; try { img = localStorage.getItem('konta_photo'); } catch (e) {} return img ? `linear-gradient(rgba(0,0,0,.3),rgba(0,0,0,.6)),url(${img}) center/cover` : '#1c1c1e'; }
  return isLight() ? lightBg(k) : themeBg(k);
}
function settingsExtra() {
  return `<h2>Оформление</h2><div class="seg" style="margin:4px 0 14px">${[['dark', 'Тёмная'], ['light', 'Светлая'], ['auto', 'Как в системе']].map(([k, n]) => `<button class="${MODE === k ? 'on' : ''}" data-act="mode" data-m="${k}">${n}</button>`).join('')}</div><div class="themes">${Object.entries(THEMES).map(([k, t]) => `<button class="th ${THEME === k ? 'on' : ''}" data-act="${k === 'photo' ? 'photo' : 'theme'}" data-t="${k}"><span class="sw" style='background:${swBg(k)}'>${k === 'photo' ? ic('ui_plus') : ''}<i class="acc" style="background:${t.acc}"></i></span><span class="tn">${t.n}</span></button>`).join('')}</div><p class="thd">${(THEMES[THEME] || THEMES.aurora).d}</p>
    <input type="file" id="photo-in" accept="image/*" hidden>
    <button class="row" data-act="bigtext" style="margin-top:10px"><span class="ic"><svg class="i" viewBox="0 0 24 24"><path d="M4 18L8.5 6 13 18M5.6 14h5.8M15 18l3-8 3 8M15.9 15.6h4.2"/></svg></span><span class="t"><span class="n">Крупный текст</span><span class="s">Подписи и мелкий текст крупнее и контрастнее</span></span><span class="sw2 ${BIGT ? 'on' : ''}"><i></i></span></button>${typeof tiltRow === 'function' ? tiltRow() : ''}${typeof dailySetRow === 'function' ? dailySetRow() : ''}
    <h2>Язык</h2><div class="seg" style="width:220px"><button class="${LANG === 'ru' ? 'on' : ''}" data-act="lang" data-l="ru">Русский</button><button class="${LANG === 'en' ? 'on' : ''}" data-act="lang" data-l="en">English</button></div>`;
}

let BIGT = (() => { try { return localStorage.getItem('konta_big') === '1'; } catch (e) { return false; } })();
document.body.classList.toggle('big', BIGT);
function toggleBig() {
  BIGT = !BIGT; try { localStorage.setItem('konta_big', BIGT ? '1' : '0'); } catch (e) {}
  const sc = $('#s-more'), y = sc ? sc.scrollTop : 0, row = document.querySelector('.themes'), sl = row ? row.scrollLeft : 0;
  document.body.classList.toggle('big', BIGT); haptic(); render();
  if (sc) sc.scrollTop = y; const nr = document.querySelector('.themes'); if (nr) nr.scrollLeft = sl;
}
applyTheme();
// ================= Движение: барабаны цифр, наклон, глубина =================
const CALM = (() => { try { return matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) { return false; } })();
// --- барабаны: каждая цифра прокручивается своим колесом ---
const drumCol = d => `<span class="dg"><span class="dr" style="transform:translateY(${-d * 10}%)">${'0123456789'.split('').map(x => `<i>${x}</i>`).join('')}</span></span>`;
function drumRoll(el, fromS, toS) {
  if (CALM) { el.textContent = toS; return; }
  const fd = fromS.replace(/\D/g, '').split('').reverse();
  let pos = toS.replace(/\D/g, '').length;
  el.innerHTML = toS.split('').map(c => { if (!/\d/.test(c)) return `<span class="sp">${c}</span>`; pos--; return drumCol(+(fd[pos] || 0)); }).join('');
  el.classList.add('drum');
  const cols = [...el.querySelectorAll('.dr')], digs = toS.replace(/\D/g, '').split('');
  el.offsetWidth;
  cols.forEach((c, i) => { c.style.transitionDelay = `${i * 35}ms`; c.style.transform = `translateY(${-digs[i] * 10}%)`; });
  clearTimeout(el._dt); el._dt = setTimeout(() => { el.classList.remove('drum'); el.textContent = toS; }, 900 + cols.length * 35);
}
// --- наклон телефона: фон смещается на несколько пикселей ---
const TILT = { on: false, x: 0, y: 0, tx: 0, ty: 0, b0: null, g0: null, raf: 0 };
const tiltIOSWeb = !inTG && typeof DeviceOrientationEvent !== 'undefined' && typeof DeviceOrientationEvent.requestPermission === 'function';
let TILT_PREF = (() => { try { const v = localStorage.getItem('konta_tilt'); return v === null ? (tiltIOSWeb ? '0' : '1') : v; } catch (e) { return '1'; } })() === '1';
function tiltFeed(beta, gamma) {
  if (beta == null || gamma == null) return;
  if (TILT.b0 === null) { TILT.b0 = beta; TILT.g0 = gamma; }
  TILT.b0 += (beta - TILT.b0) * .02; TILT.g0 += (gamma - TILT.g0) * .02; // нейтраль медленно подстраивается под то, как держат телефон
  const cl = v => Math.max(-1, Math.min(1, v));
  TILT.tx = cl((gamma - TILT.g0) / 20) * 7; TILT.ty = cl((beta - TILT.b0) / 20) * 7;
  if (!TILT.raf) TILT.raf = requestAnimationFrame(tiltFrame);
}
function tiltFrame() {
  TILT.raf = 0;
  TILT.x += (TILT.tx - TILT.x) * .12; TILT.y += (TILT.ty - TILT.y) * .12;
  const sky = $('.sky'); if (sky) { const pw = document.documentElement.classList.contains('pwa'); Object.assign(sky.style, { top: `${(-8 - TILT.y).toFixed(1)}px`, left: `${(-8 - TILT.x).toFixed(1)}px`, right: 'auto', bottom: 'auto', width: 'calc(100% + 16px)', height: pw ? 'calc(var(--fullh) + 16px)' : 'calc(100% + 16px)' }); }
  if (Math.abs(TILT.tx - TILT.x) > .05 || Math.abs(TILT.ty - TILT.y) > .05) TILT.raf = requestAnimationFrame(tiltFrame);
}
const onDevOr = e => tiltFeed(e.beta, e.gamma);
const onTgOr = () => { const o = tg.DeviceOrientation; if (o && o.beta != null) tiltFeed(o.beta * 57.2958, o.gamma * 57.2958); };
function tiltStart() {
  if (TILT.on || CALM || !TILT_PREF) return;
  TILT.on = true; TILT.b0 = null;
  if (inTG && tg.DeviceOrientation && tg.isVersionAtLeast && tg.isVersionAtLeast('8.0')) {
    try { tg.onEvent('deviceOrientationChanged', onTgOr); tg.DeviceOrientation.start({ refresh_rate: 50 }); return; } catch (e) {}
  }
  addEventListener('deviceorientation', onDevOr);
}
function tiltStop() {
  if (!TILT.on) return; TILT.on = false;
  try { if (inTG && tg.DeviceOrientation) { tg.offEvent('deviceOrientationChanged', onTgOr); tg.DeviceOrientation.stop(); } } catch (e) {}
  removeEventListener('deviceorientation', onDevOr);
  TILT.tx = TILT.ty = 0; if (!TILT.raf) TILT.raf = requestAnimationFrame(tiltFrame);
}
async function toggleTilt() {
  if (!TILT_PREF && tiltIOSWeb) { try { if ((await DeviceOrientationEvent.requestPermission()) !== 'granted') { toast('Нет доступа к датчику движения'); return; } } catch (e) { toast('Нет доступа к датчику движения'); return; } }
  TILT_PREF = !TILT_PREF; try { localStorage.setItem('konta_tilt', TILT_PREF ? '1' : '0'); } catch (e) {}
  haptic(); TILT_PREF ? tiltStart() : tiltStop();
  const sc = $('#s-more'), y = sc ? sc.scrollTop : 0, row = document.querySelector('.themes'), sl = row ? row.scrollLeft : 0;
  render(); if (sc) sc.scrollTop = y; const nr = document.querySelector('.themes'); if (nr) nr.scrollLeft = sl;
}
document.addEventListener('visibilitychange', () => { if (document.hidden) tiltStop(); else tiltStart(); });
const tiltRow = () => CALM ? '' : `<button class="row" data-act="tilt"><span class="ic"><svg class="i" viewBox="0 0 24 24"><rect x="7.5" y="3.5" width="9" height="17" rx="2.2" transform="rotate(-12 12 12)"/><path d="M3.5 9.5c-.8 1.6-.8 3.4 0 5M20.5 9.5c.8 1.6.8 3.4 0 5"/></svg></span><span class="t"><span class="n">Живой фон</span><span class="s">Фон темы чуть смещается при наклоне телефона</span></span><span class="sw2 ${TILT_PREF ? 'on' : ''}"><i></i></span></button>`;
// --- шкала цели: 60 рисок, как минутная разметка циферблата ---
const GLIT = {};
function goalDial(g, s, pct) {
  const N = 60, lit = s > 0 ? Math.max(1, Math.min(N, Math.round(pct / 100 * N))) : 0, from = Math.min(GLIT[g.id] ?? 0, lit);
  let t = '';
  for (let i = 0; i < N; i++) {
    const a = (i / N) * 2 * Math.PI - Math.PI / 2, big = i % 5 === 0, r1 = big ? 98 : 101, r2 = 112;
    const on = i < lit, now = i < from;
    t += `<line x1="${(120 + r1 * Math.cos(a)).toFixed(2)}" y1="${(120 + r1 * Math.sin(a)).toFixed(2)}" x2="${(120 + r2 * Math.cos(a)).toFixed(2)}" y2="${(120 + r2 * Math.sin(a)).toFixed(2)}" class="${big ? 'bg ' : ''}${now ? 'on' : on ? 'go' : ''}" ${on && !now ? `style="transition-delay:${((i - from) * 14 + 120)}ms"` : ''}/>`;
  }
  GLIT[g.id] = lit;
  return `<div class="gdial"><svg viewBox="0 0 240 240">${t}</svg><div class="gc"><div class="gn">${rub(s, { round: true, bare: true })}<small>₽</small></div><div class="gof">из ${rub(g.sum, { round: true, short: true })}</div><div class="gp">${pct >= 1 || !s ? Math.floor(pct) : '<1'}%</div></div></div>`;
}
function dialGo(root) { if (!root) return; requestAnimationFrame(() => requestAnimationFrame(() => root.querySelectorAll('.gdial line.go').forEach(l => l.classList.add('on')))); }
// ================= State / shared UI =================
let tab = 'home', mOff = 0, aType = 'm', aOff = 0, hMode = 'out', aMore = false, aCats = false;
const counters = {};
function animateCounts() {
  if (document.body.classList.contains('boot')) return;
  document.querySelectorAll('[data-count]').forEach(el => {
    const to = +el.dataset.count, k = el.dataset.ck || 'x', from = counters[k] ?? 0;
    counters[k] = to;
    const fmt = v => rub(v, { round: true, bare: true }).replace(/\u2009/g, '\u2005');
    const host = el.closest('.num'); if (host) { const n = fmt(to).replace(/\D/g, '').length; host.style.fontSize = n <= 7 ? '' : n === 8 ? '54px' : n === 9 ? '48px' : n === 10 ? '43px' : '38px'; }
    if (from === to) { el.textContent = fmt(to); return; }
    drumRoll(el, fmt(from), fmt(to));
  });
}
const eyeBtn = () => `<button class="rb eye" data-act="priv" aria-label="Скрыть суммы">${ic(PRIV ? 'ui_eyeoff' : 'ui_eye')}</button>`;
const header = (title, off, act, sub = '', eye = false) => `<header class="hdr"><div><h1>${title}</h1>${sub ? `<div class="sub">${sub}</div>` : ''}</div>
  <div class="arrows">${eye ? eyeBtn() : ''}<button class="rb" data-act="${act}" data-d="-1" aria-label="Назад">${ic('ui_left')}</button><button class="rb" data-act="${act}" data-d="1" ${off >= 0 ? 'disabled' : ''} aria-label="Вперёд">${ic('ui_right')}</button></div></header>`;
function txRow(t) {
  const c = catOf(t);
  return `<div class="swr" data-id="${t.id}"><div class="del"><button class="edt" data-act="swedit" data-id="${t.id}">${ic('ui_edit')}<span>Изменить</span></button><button class="rm" data-act="swdel" data-id="${t.id}">${ic('ui_trash')}<span>Удалить</span></button></div><button class="row" data-act="edit" data-id="${t.id}"><span class="ic">${ic(c.id)}</span>
    <span class="t"><span class="n">${esc(t.n || c.n)}</span>${t.n && t.n.trim().toLowerCase() !== c.n.toLowerCase() ? `<span class="s">${c.n}</span>` : ''}</span>
    <span class="a ${t.k === 'in' ? 'in' : ''}">${t.cur ? `${t.k === 'in' ? '+' : ''}${fmtCur(t.oa / 100, t.cur)}<small>${rub(t.a, { round: true })}</small>` : `${t.k === 'in' ? '+' : ''}${rub(t.a)}`}</span></button></div>`;
}
function feed(list, limit = 0) {
  const by = {};
  list.forEach(t => (by[t.d] = by[t.d] || []).push(t));
  let days = Object.keys(by).sort().reverse();
  return days.map(d => {
    const arr = by[d].sort((a, b) => b.t - a.t);
    return `<div class="dh"><span>${dayTitle(d)}</span><span>${d === todayK() && hMode === 'out' && mOff === 0 ? '' : rub(total(arr))}</span></div>${arr.map(txRow).join('')}`;
  }).join('');
}
let CHART = (() => { try { return localStorage.getItem('konta_chart') || 'ticks'; } catch (e) { return 'ticks'; } })();
const CHARTS = ['ticks', 'curve', 'bars'], CHART_N = { ticks: 'Риски', curve: 'Кривая', bars: 'Столбцы' };
function ticks(r, vals) {
  const ti = r.current ? r.elapsed - 1 : -1, mx = Math.max(...vals, 1), cl = S.closed || {};
  const dk = i => key(new Date(r.s.getFullYear(), r.s.getMonth(), i + 1, 12));
  const last = r.current ? ti : vals.length - 1;
  if (CHART === 'curve') {
    const W = 350, H = 44, n = vals.length, cum = []; let s = 0;
    vals.forEach((v, i) => { s += v; cum.push(s); });
    const done = cum.slice(0, last + 1), pace = last >= 0 ? cum[last] / (last + 1) : 0, end = Math.max(cum[last] || 0, pace * n, 1);
    const X = i => (n > 1 ? i / (n - 1) : 0) * W, Y = v => H - 3 - v / end * (H - 8);
    let d = ''; done.forEach((v, i) => { d += (i ? 'L' : 'M') + X(i).toFixed(1) + ',' + Y(v).toFixed(1); });
    const proj = r.current && last < n - 1 ? `<path class="pj" d="M${X(last).toFixed(1)},${Y(cum[last]).toFixed(1)}L${W},${Y(pace * n).toFixed(1)}"/>` : '';
    const area = '';
    const dot = last >= 0 ? `<i class="dt" style="left:${(X(last) / W * 100).toFixed(2)}%;top:${Y(cum[last]).toFixed(1)}px"></i>` : '';
    return `<button class="chart" data-act="chartnext" aria-label="Вид графика"><span class="cvw">${dot}<svg class="cv" viewBox="0 0 ${W} ${H}" preserveAspectRatio="none"><defs><linearGradient id="cvg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="currentColor" stop-opacity=".16"/><stop offset="1" stop-color="currentColor" stop-opacity="0"/></linearGradient></defs>${area}${proj}<path class="ln" d="${d}"/></svg></span></button>`;
  }
  const bars = CHART === 'bars';
  return `<button class="chart" data-act="chartnext" aria-label="Вид графика"><div class="ticks ${bars ? 'bars2' : ''}">${vals.map((v, i) => {
    const c = cl[dk(i)] ? ' cl' : '';
    const past = !r.current || i < ti, k = v / mx;
    if (i === ti) return `<i class="t${c}" style="--h:${bars ? Math.max(.12, k) : 1.5}"></i>`;
    const h = past ? (v ? (bars ? Math.max(.08, k) : .35 + .65 * k) : (bars ? .04 : .3)) : (bars ? .04 : .3);
    return `<i class="${c.trim()}" style="--o:${past ? (v ? .35 + .65 * k : .18) : .08};--h:${h.toFixed(3)}"></i>`;
  }).join('')}</div></button>`;
}
function chartNext() {
  CHART = CHARTS[(CHARTS.indexOf(CHART) + 1) % CHARTS.length];
  try { localStorage.setItem('konta_chart', CHART); } catch (e) {}
  haptic();
  const sc = $('#s-' + tab), y = sc ? sc.scrollTop : 0; render(); if (sc) sc.scrollTop = y;
  const c = document.querySelector(`#s-${tab} .chart, #s-${tab} .bars[data-chart="dyn"]`); if (c) { c.classList.add('swap'); setTimeout(() => c.classList.remove('swap'), 700); }
  if (tab === 'home') toast(CHART_N[CHART]);
}
const stat = (label, val, cls = '') => `<div><span>${label}</span><b class="${cls}">${val}</b></div>`;
const catLine = (c, v, sum, extra = '') => `<button class="row" data-act="cat" data-c="${c.id}"><span class="ic">${ic(c.id)}</span>
  <span class="t"><span class="n">${c.n}</span>${extra}</span><span class="a">${rub(v, { round: true })}<span class="pct">${Math.round(v / sum * 100)}%</span></span></button>`;

// ================= Screens =================
// Закрытие дня — тихий вечерний ритуал, не обязанность
let dayNote = '';
function closeDayRow(v) {
  const k = todayK();
  if (S.closed && S.closed[k]) return `<button class="dayc done" data-act="reopenday">${ic('ui_seal')}<span>${dayNote || 'День закрыт'}</span><em>Открыть</em></button>`;
  if (new Date().getHours() < 18) return '';
  return `<button class="dayc" data-act="closeday">${ic('ui_check')}<span>Закрыть день</span></button>`;
}
function dayInsight(v) {
  const t = today(), days = [];
  for (let i = 1; i <= 30; i++) { const d = key(addD(t, -i)); days.push(total(sel('out', d, d))); }
  const act = days.filter(x => x > 0), avg = act.length ? days.reduce((a, b) => a + b, 0) / days.length : 0;
  if (!v) return 'День без трат. Красиво';
  if (!avg) return 'День закрыт';
  if (v < avg * .8) return `Спокойнее обычного на ${rub(avg - v, { round: true })}`;
  if (v > avg * 1.25) return 'Насыщенный день. Завтра — новый';
  return 'В вашем обычном ритме';
}
function reopenDay() {
  const k = todayK(); if (!S.closed || !S.closed[k]) return;
  delete S.closed[k]; dayNote = ''; save(); haptic(); render();
}
function closeDay() {
  const k = todayK(), v = total(sel('out', k, k));
  S.closed = S.closed || {}; S.closed[k] = 1; save();
  dayNote = dayInsight(v); hapticOk();
  const row = document.querySelector('.dayc'); if (row) row.classList.add('going');
  setTimeout(() => { toast('День закрыт', reopenDay, 6000); render(); const n = document.querySelector('.dayc.done'); if (n) n.classList.add('fresh'); const t = document.querySelector('.ticks i.t'); if (t) t.classList.add('fresh'); }, 260);
}
function renderHome() {
  const r = range('m', mOff), outs = sel('out', r.from, r.to), ins = sel('in', r.from, r.to);
  const spent = total(outs), income = total(ins);
  const pm = (r.s.getMonth() + 11) % 12;
  const isOut = hMode === 'out', list = isOut ? outs : ins, sum = isOut ? spent : income;
  const prev = prevComparable(r, hMode);
  const days = r.current ? r.elapsed : r.days, perDay = days ? spent / days : 0;
  let h = header(cap(M[r.s.getMonth()]), mOff, 'mnav', r.s.getFullYear() !== today().getFullYear() ? r.s.getFullYear() : '', true);
  h = h.replace('<div class="arrows">', '<div class="arrows">' + syncIco());
  h += `<div class="seg mode">${[['out', 'Расходы'], ['in', 'Доходы']].map(([k, t]) => `<button class="${hMode === k ? 'on' : ''}" data-act="hmode" data-m="${k}">${t}</button>`).join('')}</div>`;
  h += `<section class="hero"><div class="num ${isOut ? '' : 'sage'}" data-act="priv"><span data-count="${sum}" data-ck="h${hMode}">0</span><small>₽</small></div>
    <div class="cmp">${prev ? `${delta(sum, prev, !isOut)} к ${r.current ? `этой же дате в ${MP[pm]}` : MP[pm].replace(/е$/, 'ю')}` : '&nbsp;'}</div>`;
  if (isOut && !S.tx.length) {
    h += `</section>`;
  } else if (isOut) {
    const b = buckets(r), vals = b.map(x => total(outs.filter(t => t.d === x.from)));
    h += ticks(r, vals) + `</section>`;
    h += `<div class="meta">${r.current ? `<span>Сегодня <b>${rub(vals[r.elapsed - 1] || 0, { round: true })}</b></span><span>Прогноз <b>${rub(perDay * r.days, { round: true, short: true })}</b>${(() => { const pr = range('m', mOff - 1), pt = total(sel('out', pr.from, pr.to)); if (!pt) return ''; const p = Math.round((perDay * r.days / pt - 1) * 100); return Math.abs(p) < 1 ? '' : `<em class="fc">${p > 0 ? '+' : '−'}${Math.abs(p)}%</em>`; })()}</span>` : `<span>В день <b>${rub(perDay, { round: true })}</b></span><span>Операций <b>${outs.length}</b></span>`}</div>`;
    if (r.current && S.tx.length) h += dailyRow() + closeDayRow(vals[r.elapsed - 1] || 0);
    // лимиты — только когда горит
    const hot = Object.entries(S.limits).filter(([c]) => CAT[c]).map(([c, lim]) => ({ c, lim, s: total(sel('out', r.from, r.to, c)) })).filter(x => x.s / x.lim >= .8);
    if (hot.length) h += hot.map(x => `<button class="alert" data-act="cat" data-c="${x.c}"><span class="ic sm">${ic(x.c)}</span><span>${CAT[x.c].n}: ${x.s >= x.lim ? 'лимит превышен' : `${Math.round(x.s / x.lim * 100)}% лимита`}</span><b>${rub(x.lim - x.s, { round: true, sign: x.s > x.lim ? false : false })}</b></button>`).join('');
  } else {
    const gNet = S.tx.filter(t => t.k === 'g' && t.d >= r.from && t.d <= r.to).reduce((s, t) => s + (t.w ? -t.a : t.a), 0), left = income - spent - gNet;
    h += `</section><div class="meta"><span>Потрачено <b>${rub(spent, { round: true, short: true })}</b></span>${gNet ? `<span>В цели <b>${rub(gNet, { round: true, short: true })}</b></span>` : ''}<span>Остаток <b class="${left < 0 ? 'c-clay' : 'c-sage'}">${rub(left, { round: true, short: true, sign: true })}</b></span></div>`;
  }
  if (!list.length) {
    h += `<div class="empty">${S.tx.length ? '' : engr('alps')}${S.tx.length ? (isOut ? 'В этом месяце трат нет.' : 'В этом месяце доходов нет.') : 'Здесь появятся ваши операции.<br>Нажмите «+», чтобы добавить первую.'}</div>`;
    if (!S.tx.length) h += `<button class="btn ghost" data-act="seed">Показать на демо-данных</button>`;
  } else {
    const byc = {}; list.forEach(t => byc[t.c] = (byc[t.c] || 0) + t.a);
    const parts = Object.entries(byc).map(([c, v]) => ({ c: CAT[c] || CAT.other, v })).sort((a, b) => b.v - a.v);
    h += `<button class="compw" ${isOut ? 'data-tab="an"' : ''}>${comp(parts, sum)}<span class="cap"><span>${(() => { const L = parts.slice(0, 3).map(p => [p, `${p.c.n.split(' ')[0]} ${Math.round(p.v / sum * 100)}%`]); const n = L.reduce((a, x) => a + x[1].length, 0) > 32 ? 2 : 3; return L.slice(0, n).map(([p, t]) => `<i class="dot" style="background:${p.c.c}"></i>${t}`).join('<em></em>'); })()}</span>${isOut ? ic('ui_right', 'i chev') : ''}</span></button>`;
    h += feed(list);
  }
  $('#s-home').innerHTML = h;
}

function renderAn() {
  const r = range(aType, aOff), outs = sel('out', r.from, r.to), ins = sel('in', r.from, r.to);
  const spent = total(outs), income = total(ins), prevOut = prevComparable(r, 'out');
  const days = r.current ? r.elapsed : r.days;
  let h = header('Аналитика', aOff, 'anav', r.label).replace('<div class="arrows">', `<div class="arrows"><button class="rb" data-act="search" aria-label="Поиск">${ic('ui_search')}</button>`);
  h += `<div class="seg">${[['w', 'Неделя'], ['m', 'Месяц'], ['q', 'Квартал'], ['y', 'Год']].map(([k, t]) => `<button class="${aType === k ? 'on' : ''}" data-act="atype" data-t="${k}">${t}</button>`).join('')}</div>`;
  h += `<section class="hero"><div class="lbl">Расходы</div><div class="num" data-act="priv"><span data-count="${spent}" data-ck="as">0</span><small>₽</small></div>
    <div class="cmp">${prevOut ? `${delta(spent, prevOut)} к прошлому периоду${r.current ? ' на эту дату' : ''}` : '&nbsp;'}</div></section>`;
  if (!outs.length && !ins.length) { $('#s-an').innerHTML = h + `<div class="empty">${engr('alps')}Нет данных за этот период.</div>`; return; }

  const avgCheck = outs.length ? spent / outs.length : 0;
  h += `<div class="stats">${stat('Доходы', rub(income, { round: true, short: true }), 'c-sage')}${stat('Сальдо', rub(income - spent, { round: true, short: true, sign: true }), income - spent < 0 ? 'c-clay' : '')}${stat('В день', rub(days ? spent / days : 0, { round: true }))}</div>`;

  const b = buckets(r), vals = b.map(x => total(outs.filter(t => t.d >= x.from && t.d <= x.to)));
  const hiIdx = r.current ? b.findIndex(x => todayK() >= x.from && todayK() <= x.to) : -1;
  const nb = r.current ? b.filter(x => x.from <= todayK()).length : b.length, avg = nb ? spent / nb : 0;
  const mx = vals.indexOf(Math.max(...vals));
  h += `<h2 class="h2r">По ${aType === 'q' ? 'неделям' : aType === 'y' ? 'месяцам' : 'дням'}<button class="chsw" data-act="chartnext">${CHART_N[CHART]}</button></h2><div class="tip" id="tip-dyn">Пик ${b[mx].tip} · <b>${rub(vals[mx], { round: true })}</b></div>${barChart(vals, b, { hi: hiIdx, avg, id: 'dyn', mode: CHART })}`;

  if (outs.length) {
    const byc = {}; outs.forEach(t => byc[t.c] = (byc[t.c] || 0) + t.a);
    const parts = Object.entries(byc).map(([c, v]) => ({ c: CAT[c] || CAT.other, v })).sort((a, b) => b.v - a.v);
    const shown = aCats ? parts : parts.slice(0, 5);
    h += `<h2>Категории</h2>${comp(parts, spent)}` + shown.map(x => {
      const pv = prevComparable(r, 'out', x.c.id);
      return catLine(x.c, x.v, spent, `<span class="s">${delta(x.v, pv) || '&nbsp;'}</span>`);
    }).join('') + (parts.length > 5 ? `<button class="morebtn" data-act="acats">${aCats ? 'Свернуть' : `Все категории · ${parts.length}`}</button>` : '');
  }

  h += subsBlock();
  h += `<button class="morebtn big" data-act="amore">${aMore ? 'Скрыть подробности' : 'Подробнее'}${ic(aMore ? 'ui_down' : 'ui_down', 'i chev' + (aMore ? ' up' : ''))}</button>`;
  if (aMore) {
    h += `<div class="stats" style="margin-top:6px">${stat('Операций', outs.length)}${stat('Средний чек', rub(avgCheck, { round: true }))}${r.current ? stat('Прогноз', rub(days ? spent / days * r.days : 0, { round: true, short: true })) : stat('Отложено', income ? Math.max(0, Math.round((income - spent) / income * 100)) + '%' : '—')}</div>`;
    const p = range(aType, aOff - 1), pvals = buckets(p).map(x => total(sel('out', x.from, x.to)));
    const cum = a => { let s = 0; return a.map(v => s += v); };
    const curCum = cum(vals).slice(0, r.current ? Math.max(hiIdx + 1, 1) : vals.length), prevCum = cum(pvals);
    const at = prevCum[Math.min(curCum.length, prevCum.length) - 1] || 0, nowV = curCum[curCum.length - 1] || 0;
    h += `<h2>Темп</h2>${lineChart(curCum, prevCum, 120)}<div class="legend"><span><i></i>${r.label}</span><span><i class="d"></i>${p.label}</span></div>
      ${at ? `<p class="note">${nowV > at ? `Тратите быстрее, чем в прошлом периоде, на ${rub(nowV - at, { round: true })}.` : `Тратите медленнее, чем в прошлом периоде, на ${rub(at - nowV, { round: true })}.`}</p>` : ''}`;
    if (outs.length) {
      const wsum = Array(7).fill(0), wcnt = Array(7).fill(0);
      for (let i = 0; i < days; i++) wcnt[(addD(r.s, i).getDay() + 6) % 7]++;
      outs.forEach(t => wsum[(D(t.d).getDay() + 6) % 7] += t.a);
      const wavg = wsum.map((s, i) => wcnt[i] ? s / wcnt[i] : 0), wmax = Math.max(...wavg, 1), wi = wavg.indexOf(wmax);
      if (days >= 7) h += `<h2>Дни недели</h2><div class="wd">${wavg.map((v, i) => `<div><i class="${i === wi ? 'mx' : ''}" style="height:${Math.max(v / wmax * 100, 4)}%"></i><span>${WD[i]}</span></div>`).join('')}</div><p class="note">Больше всего — в ${['понедельник', 'вторник', 'среду', 'четверг', 'пятницу', 'субботу', 'воскресенье'][wi]}, в среднем ${rub(wmax, { round: true })}.</p>`;
      const byn = {};
      outs.forEach(t => { const k = (t.n || catOf(t).n).trim().toLowerCase(); (byn[k] = byn[k] || { n: t.n || catOf(t).n, c: catOf(t), v: 0, k: 0 }); byn[k].v += t.a; byn[k].k++; });
      h += `<h2>Чаще всего</h2>` + Object.values(byn).sort((a, b) => b.v - a.v).slice(0, 5).map(x => `<div class="row"><span class="ic">${ic(x.c.id)}</span><span class="t"><span class="n">${esc(x.n)}</span><span class="s">${x.k} ${plural(x.k, 'раз', 'раза', 'раз')} · в среднем ${rub(x.v / x.k, { round: true })}</span></span><span class="a">${rub(x.v, { round: true })}</span></div>`).join('');
    }
    const ms = [], base = new Date(r.e.getFullYear(), r.e.getMonth(), 15, 12);
    for (let i = 5; i >= 0; i--) { const a = new Date(base.getFullYear(), base.getMonth() - i, 1, 12), z = new Date(a.getFullYear(), a.getMonth() + 1, 0, 12); ms.push({ l: M[a.getMonth()].slice(0, 3), i: total(sel('in', key(a), key(z))), o: total(sel('out', key(a), key(z))) }); }
    const gm = Math.max(...ms.map(x => Math.max(x.i, x.o)), 1);
    h += `<h2>Полгода</h2><div class="gb">${ms.map(x => `<div><div class="p"><i style="height:${Math.max(x.i / gm * 100, 2)}%;background:var(--sage)"></i><i style="height:${Math.max(x.o / gm * 100, 2)}%;background:var(--iv)"></i></div><span>${x.l}</span></div>`).join('')}</div>
      <div class="legend"><span><i style="background:var(--sage)"></i>доходы</span><span><i></i>расходы</span></div>`;
  }
  $('#s-an').innerHTML = h;
}

function limitsRow() {
  const r = range('m', 0), ids = Object.keys(S.limits).filter(id => CAT[id]);
  const over = ids.filter(id => total(sel('out', r.from, r.to, id)) >= S.limits[id]).length;
  return `<button class="row" data-act="limits"><span class="ic">${ic('ui_bolt')}</span><span class="t"><span class="n">Лимиты на месяц</span><span class="s">${ids.length ? `Заданы: ${ids.length}${over ? ` · превышено: ${over}` : ''}` : 'Не заданы'}</span></span>${ic('ui_right', 'i chev')}</button>`;
}
function limitsList() {
  const r = range('m', 0);
  return OUT.filter(c => c.id !== 'other').map(c => {
    const s = total(sel('out', r.from, r.to, c.id)), lim = S.limits[c.id];
    return `<div class="row"><span class="ic">${ic(c.id)}</span><span class="t"><span class="n">${c.n}</span><span class="s">${lim ? `${rub(s, { round: true })} из ${rub(lim, { round: true })}` : s ? `в этом месяце ${rub(s, { round: true })}` : '&nbsp;'}</span></span>
      <input class="lim" inputmode="numeric" data-lim="${c.id}" placeholder="Нет" value="${lim ? lim / 100 : ''}"></div>`;
  }).join('');
}
function openLimits() {
  $('#sheet').innerHTML = `<div class="grab"></div><h2 style="margin-top:6px">Лимиты на месяц</h2><p class="note" style="margin:-2px 0 8px">Предупрежу, когда потратите 80% и 100%.</p><div id="limlist">${limitsList()}</div><div style="height:16px"></div><button class="btn" data-act="limdone">Готово</button>`;
  open('#sheet');
}
function renderMore() {
  const r = range('m', 0);
  let h = `<header class="hdr"><div><h1>Настройки</h1></div></header>${settingsExtra()}${settingsFeat()}
    <h2>Бюджет</h2>${limitsRow()}
    <h2>Данные</h2><p class="note" style="margin-top:-4px">${cloud ? 'Хранятся в облаке Telegram и синхронизируются между устройствами.' : 'Сейчас хранятся в этом браузере. В Telegram — в облаке.'} ${S.tx.length} ${plural(S.tx.length, 'запись', 'записи', 'записей')}.</p>
    <div class="stack" style="margin-top:14px"><button class="btn ghost" data-act="csv">Экспорт в CSV</button><div id="csvbox"></div>
      ${Object.keys(S.rules).length ? `<button class="btn ghost" data-act="rules">Сбросить выученные категории (${Object.keys(S.rules).length})</button>` : ''}
      <button class="btn danger" data-act="wipe">Удалить все данные</button></div>
    <div class="wm sm"><b>Konta</b><i>&amp; Cie</i></div><div class="ver">Private finance · версия 3.2</div>`;
  $('#s-more').innerHTML = h;
}

function render() {
  ({ home: renderHome, an: renderAn, goals: renderGoals, cap: renderCap, more: renderMore })[tab]();
  animateCounts(); animSegs(); enterFx();
}
// ---- motion helpers ----
const SEGPOS = {};
function animSegs(root = document) {
  root.querySelectorAll('.seg,.ktoggle').forEach(seg => {
    const on = seg.querySelector('button.on'); if (!on) return;
    const key = (seg.querySelector('button') || {}).dataset ? seg.querySelector('button').dataset.act : 'x';
    let ind = seg.querySelector('.sind'), fresh = false; if (!ind) { ind = document.createElement('i'); ind.className = 'sind'; seg.prepend(ind); fresh = true; }
    const x = on.offsetLeft, w = on.offsetWidth, p = SEGPOS[key];
    // новая плашка встаёт на прежнее место без анимации, а не едет от левого края
    if (fresh || (p && (p.x !== x || p.w !== w))) { const q = p || { x, w }; ind.style.transition = 'none'; ind.style.width = q.w + 'px'; ind.style.transform = `translateX(${q.x}px)`; ind.offsetWidth; ind.style.transition = ''; }
    ind.style.width = w + 'px'; ind.style.transform = `translateX(${x}px)`;
    SEGPOS[key] = { x, w };
  });
}
function moveInd() { const on = $('.tabs button.on'), ind = $('.tabs .ind'); if (!on || !ind) return; ind.style.width = on.offsetWidth + 'px'; ind.style.transform = `translateX(${on.offsetLeft}px)`; }


// ================= Add / edit sheet =================
let F = null;
function openSheet(id = null, kind = 'out', o = {}) {
  const t = id ? S.tx.find(x => x.id === id) : null;
  const tc = t && t.cur ? t.cur : (S.lastCur || 'RUB');
  F = { id, cur: tc, curOpen: false, kind: t ? t.k : kind, amt: t ? String((t.cur ? t.oa : t.a) / 100).replace('.', ',') : '', note: t ? t.n : '', cat: t ? t.c : null, src: t ? 'saved' : null, sel: !!t, pickedAfterNote: false, date: t ? t.d : todayK(), goal: t && t.k === 'g' ? t.g : o.goal || null, w: t ? !!t.w : !!o.w };
  if (!F.goal) { const gl = GS().filter(g => !g.done && !g.acc); if (gl.length === 1) F.goal = gl[0].id; }
  drawSheet(); open('#sheet');
}
function drawSheet() {
  const list = F.kind === 'in' ? IN : OUT;
  F.quick = [];
  const dl = F.date === todayK() ? 'Сегодня' : F.date === key(addD(today(), -1)) ? 'Вчера' : `${D(F.date).getDate()} ${MG[D(F.date).getMonth()].slice(0, 3)}`;
  $('#sheet').innerHTML = `<div class="grab"></div>
    <div class="ktoggle glass"><button class="${F.kind === 'out' ? 'on' : ''}" data-act="kind" data-k="out">Расход</button><button class="${F.kind === 'in' ? 'on' : ''}" data-act="kind" data-k="in">Доход</button><button class="${F.kind === 'g' ? 'on' : ''}" data-act="kind" data-k="g">В цель</button></div>
    <div class="amt"><div class="v ${F.amt ? '' : 'ph'} ${F.kind === 'in' || (F.kind === 'g' && !F.w) ? 'in' : ''} ${F.sel ? 'sel' : ''}" id="amtv" data-act="amtsel">${amtView()}</div><button class="curb" data-act="fcur">${F.cur === 'RUB' ? '₽' : F.cur}</button>
      <div class="curl" id="curl">${curLine()}</div>
      ${F.curOpen ? `<div class="chips curs">${TX_CURS.map(c => `<button class="chip ${F.cur === c ? 'on' : ''}" data-act="fcurpick" data-c="${c}">${c === 'RUB' ? '₽ RUB' : (CSYM[c] !== c ? CSYM[c] + ' ' : '') + c}</button>`).join('')}</div>` : ''}
      ${F.id ? `<div class="amth">${F.sel ? 'Наберите новую сумму' : '&nbsp;'}</div>` : ''}</div>
    <div class="frow"><input class="inp" id="f-note" placeholder="${F.kind === 'in' ? 'Источник' : F.kind === 'g' ? (F.w ? 'На что сняли' : 'Комментарий') : 'Комментарий'}" value="${esc(F.note)}" autocomplete="off" enterkeyhint="done">
      <label class="datep glass">${ic('ui_cal')}<span>${dl}</span><input type="date" id="f-date" value="${F.date}" max="${todayK()}"></label></div>
    ${F.kind === 'g' ? goalPicker() : `<div class="hintl" id="f-hint">${hintText()}</div>
    <div class="chips" id="f-cats"><label class="csr" id="csr" data-act="csearch">${ic('ui_search')}<input id="f-cq" placeholder="Категория" autocomplete="off" enterkeyhint="done"></label>${list.map(c => `<button class="chip ${F.cat === c.id ? 'on' : ''}" data-act="pick" data-c="${c.id}">${ic(c.id)}${c.n}</button>`).join('')}<span class="cnone" hidden>Ничего не нашлось</span></div>`}
    ${F.quick.length ? `<div class="chips quick">${F.quick.map((e, i) => `<button class="qchip" data-act="quick" data-i="${i}">${ic(e.c)}<span>${esc(e.n)}</span><b>${rub(e.a, { round: true })}</b></button>`).join('')}</div>` : ''}
    <div class="pad">${['1', '2', '3', '4', '5', '6', '7', '8', '9', ',', '0', '⌫'].map(k => `<button data-act="key" data-k="${k}">${k === '⌫' ? ic('ui_back') : k}</button>`).join('')}</div>
    <div class="stack"><button class="btn" data-act="save">${F.id ? 'Сохранить' : 'Записать'}</button>
    ${F.id ? `<button class="btn danger" data-act="del">Удалить</button>` : ''}</div>`;
  const on = $('#f-cats .on'); if (on) on.scrollIntoView({ inline: 'center', block: 'nearest' });
  animSegs($('#sheet'));
}
const TX_CURS = ['RUB', 'USD', 'EUR', 'CNY', 'GBP', 'AED', 'TRY', 'KZT', 'GEL', 'AMD', 'THB', 'JPY', 'CHF', 'HKD', 'SGD'];
function goalPicker() {
  const gl = GS().filter(g => !g.done && !g.acc || g.id === F.goal);
  return `<div class="seg gsw" style="margin-top:12px"><button class="${!F.w ? 'on' : ''}" data-act="gw" data-w="0">Пополнить</button><button class="${F.w ? 'on' : ''}" data-act="gw" data-w="1">Снять</button></div>
    <div class="chips" id="f-goals">${gl.length ? gl.map(g => `<button class="chip ${F.goal === g.id ? 'on' : ''}" data-act="gpick" data-id="${g.id}">${ic('ui_goal')}${esc(g.n)}</button>`).join('') : ''}<button class="chip" data-act="gnewin">${ic('ui_plus')}Новая цель</button></div>`;
}
function amtView() {
  if (!F.amt) return '0';
  const [i, d] = F.amt.split(',');
  return fmtN(i).replace(/\u2009/g, '\u2005') + (d !== undefined ? ',' + d : '');
}
function curLine() {
  if (F.cur === 'RUB') return '&nbsp;';
  const r = rate(F.cur);
  if (!r) return 'Загружаю курс…';
  const v = parseFloat((F.amt || '0').replace(',', '.')) || 0;
  return `≈ ${rub(Math.round(v * r * 100), { round: true })} · курс ${String(+r.toFixed(r < 1 ? 4 : 2)).replace('.', ',')} ₽`;
}
function setCur(c) {
  F.cur = c; F.curOpen = false; S.lastCur = c; haptic(); drawSheet();
  if (c !== 'RUB' && !rate(c)) fetchRates(true).then(() => { const l = $('#curl'); if (l) l.innerHTML = curLine(); });
}
function hintText() {
  if (F.src === 'auto' && F.cat) return `Категория определена по тексту`;
  if (F.src === 'manual' && F.note && F.pickedAfterNote) return `Запомню: «${words(F.note)[0] || ''}» → ${CAT[F.cat].n}`;
  return '';
}
function catFilter(q) {
  q = q.trim().toLowerCase().replace(/ё/g, 'е');
  let any = false;
  document.querySelectorAll('#f-cats .chip').forEach(b => {
    const c = CAT[b.dataset.c], hay = (c.n + ' ' + (c.k || []).join(' ')).toLowerCase().replace(/ё/g, 'е').replace(/=/g, '');
    const hit = !q || hay.split(/\s+/).some(w => w.startsWith(q)) || hay.includes(q);
    b.hidden = !hit; if (hit) any = true;
  });
  const n = $('#f-cats .cnone'); if (n) n.hidden = any;
  $('#f-cats').scrollLeft = 0;
}
function catSearch(on) {
  const l = $('#csr'); if (!l) return;
  l.classList.toggle('on', on);
  const i = $('#f-cq');
  if (on) { i.focus(); } else { i.value = ''; i.blur(); catFilter(''); }
}
function refreshCats() {
  document.querySelectorAll('#f-cats .chip').forEach(b => b.classList.toggle('on', b.dataset.c === F.cat));
  $('#f-hint').textContent = hintText();
  const on = $('#f-cats .on'); if (on) on.scrollIntoView({ inline: 'center', block: 'nearest', behavior: 'smooth' });
}
function onNote(v) {
  F.note = v; if (F.kind === 'g') return;
  const g = guess(v, F.kind);
  if (g) { F.cat = g; F.src = 'auto'; F.pickedAfterNote = false; }
  else if (F.src === 'auto') { F.cat = null; F.src = null; }
  refreshCats();
}
function onKey(k) {
  haptic('light');
  let a = F.amt;
  if (F.sel) { F.sel = false; $('#amtv').classList.remove('sel'); a = ''; const h = $('.amth'); if (h) h.innerHTML = '&nbsp;'; if (k === '⌫') { F.amt = ''; $('#amtv').innerHTML = amtView(); $('#amtv').classList.add('ph'); return; } }
  if (k === '⌫') a = a.slice(0, -1);
  else if (k === ',') { if (!a.includes(',')) a = (a || '0') + ','; }
  else {
    if (a.includes(',') && a.split(',')[1].length >= 2) return;
    if (!a.includes(',') && a.replace(/\D/g, '').length >= 8) return;
    a = a === '0' ? k : a + k;
  }
  F.amt = a;
  const el = $('#amtv'); el.innerHTML = amtView(); el.classList.toggle('ph', !a);
  const l = $('#curl'); if (l) l.innerHTML = curLine();
}
function submit() {
  ymGoal(F.id ? 'tx_edit' : 'tx_add', { kind: F.kind || '' });
  const oa = Math.round(parseFloat((F.amt || '0').replace(',', '.')) * 100);
  let a = oa;
  if (F.cur !== 'RUB') { const r = rate(F.cur); if (!r) { toast('Нет курса — проверьте интернет'); return; } a = Math.round(oa * r / 100) * 100 || 100; }
  if (!a) { toast('Введите сумму'); try { tg && tg.HapticFeedback.notificationOccurred('error'); } catch (e) {} return; }
  let n = ($('#f-note').value || '').trim(); if (n) n = n[0].toUpperCase() + n.slice(1);
  if (F.kind === 'g') return submitGoal(a, n);
  const c = F.cat || (F.kind === 'in' ? 'in_other' : 'other');
  if (n && F.src === 'manual' && F.pickedAfterNote) {
    const w = words(n)[0], plain = guess(n, F.kind, false);
    if (w && plain !== c && !words(CAT[c].n).includes(w)) S.rules[F.kind + ':' + w] = c;
  }
  const rec = F.cur !== 'RUB' ? { k: F.kind, a, n, c, d: F.date, cur: F.cur, oa, rt: rate(F.cur) } : { k: F.kind, a, n, c, d: F.date, cur: undefined, oa: undefined, rt: undefined };
  if (F.id) Object.assign(S.tx.find(t => t.id === F.id), rec);
  else S.tx.push({ id: newId(), ...rec, t: Date.now() });
  save(); hapticOk();
  const wasEdit = !!F.id;
  if (wasEdit && inSearch()) { close(); render(); searchRun(); return; }
  while (stack.length) close();
  const [y1, m1] = F.date.split('-').map(Number), now = today();
  mOff = (y1 - now.getFullYear()) * 12 + (m1 - 1 - now.getMonth()); hMode = F.kind;
  render();
  if (F.kind === 'out' && S.limits[c]) {
    const r = range('m', mOff), s = total(sel('out', r.from, r.to, c)), p = s / S.limits[c];
    if (p >= 1) return toast(`${CAT[c].n}: лимит превышен`);
    if (p >= .8) return toast(`${CAT[c].n}: ${Math.round(p * 100)}% лимита`);
  }
  toast(wasEdit ? 'Сохранено' : `${F.kind === 'in' ? '+' : ''}${F.cur !== 'RUB' ? fmtCur(oa / 100, F.cur) : rub(a)} · ${CAT[c].n}`);
}


function submitGoal(a, n) {
  const g = goalById(F.goal);
  if (!g) { toast(GS().some(x => !x.done) ? 'Выберите цель' : 'Сначала создайте цель'); return; }
  if (F.w && !F.id && a > goalSaved(g)) { toast(`В цели только ${rub(goalSaved(g), { round: true })}`); return; }
  const rec = { k: 'g', a, n, c: 'other', d: F.date, g: g.id, w: F.w ? 1 : undefined, cur: undefined, oa: undefined, rt: undefined };
  if (F.cur !== 'RUB') Object.assign(rec, { cur: F.cur, oa: Math.round(parseFloat((F.amt || '0').replace(',', '.')) * 100), rt: rate(F.cur) });
  const wasEdit = !!F.id;
  if (wasEdit) Object.assign(S.tx.find(t => t.id === F.id), rec);
  else S.tx.push({ id: newId(), ...rec, t: Date.now() });
  save(); hapticOk(); close();
  if (stack.includes('#sheet2') && GV === g.id) drawGoal();
  render(); goalAfterAdd(g.id);
  toast(wasEdit ? 'Сохранено' : `${F.w ? '−' : '+'}${rub(a)} · ${g.n}`);
}
// ================= Category detail =================
function openCat(cid) {
  const c = CAT[cid];
  const r = tab === 'an' ? range(aType, aOff) : range('m', mOff);
  const list = sel(c.kind, r.from, r.to, cid), sum = total(list), all = total(sel(c.kind, r.from, r.to));
  const pv = prevComparable(r, c.kind, cid);
  const b = buckets(r), vals = b.map(x => total(list.filter(t => t.d >= x.from && t.d <= x.to)));
  const byn = {}; list.forEach(t => { const k = (t.n || '—').toLowerCase(); (byn[k] = byn[k] || { n: t.n || 'Без описания', v: 0, k: 0 }); byn[k].v += t.a; byn[k].k++; });
  const lim = S.limits[cid];
  let h = `<div class="grab"></div>
    <section class="hero" style="padding-top:4px"><div class="lbl" style="display:flex;align-items:center;gap:8px"><span class="ic sm">${ic(cid)}</span>${c.n} · ${r.label}</div>
    <div class="num">${big(sum)}</div><div class="cmp">${pv ? delta(sum, pv, c.kind === 'in') + ' к прошлому периоду' : '&nbsp;'}</div></section>
    <div class="stats">${stat('Доля', (all ? Math.round(sum / all * 100) : 0) + '%')}${stat('Операций', list.length)}${stat('Средний чек', rub(list.length ? sum / list.length : 0, { round: true }))}</div>`;
  if (lim && r.type === 'm') {
    const p = sum / lim;
    h += `<div class="limbox"><div class="ln"><i style="width:${Math.min(p, 1) * 100}%;background:${p >= 1 ? 'var(--clay)' : p >= .8 ? 'var(--amb)' : 'var(--iv)'}"></i></div><p class="note">${p >= 1 ? `Лимит ${rub(lim, { round: true })} превышен на ${rub(sum - lim, { round: true })}.` : `Осталось ${rub(lim - sum, { round: true })} из ${rub(lim, { round: true })}${r.current ? ` — примерно ${rub((lim - sum) / Math.max(r.days - r.elapsed + 1, 1), { round: true })} в день` : ''}.`}</p></div>`;
  }
  h += `<h2>Динамика</h2><div class="tip" id="tip-cd">Нажмите на столбец</div>${barChart(vals, b, { id: 'cd', h: 80 })}`;
  const tops = Object.values(byn).sort((a, b) => b.v - a.v).slice(0, 5);
  if (tops.length > 1) h += `<h2>Где чаще всего</h2>${tops.map(x => `<div class="row"><span class="t"><span class="n">${esc(x.n)}</span><span class="s">${x.k} ${plural(x.k, 'раз', 'раза', 'раз')}</span></span><span class="a">${rub(x.v, { round: true })}</span></div>`).join('')}`;
  h += `<h2>Операции</h2>` + feed(list) + `<div style="height:18px"></div><button class="btn ghost" data-act="close2">Закрыть</button>`;
  $('#sheet2').innerHTML = h; $('#sheet2').scrollTop = 0; open('#sheet2');
}

// ================= Поиск по истории =================
let Q = null;
const TRL = { а: 'a', б: 'b', в: 'v', г: 'g', д: 'd', е: 'e', ё: 'e', ж: 'zh', з: 'z', и: 'i', й: 'y', к: 'k', л: 'l', м: 'm', н: 'n', о: 'o', п: 'p', р: 'r', с: 's', т: 't', у: 'u', ф: 'f', х: 'h', ц: 'c', ч: 'ch', ш: 'sh', щ: 'sch', ъ: '', ы: 'y', ь: '', э: 'e', ю: 'yu', я: 'ya' };
const norm = s => (s || '').toLowerCase().replace(/ё/g, 'е').trim();
// озон ↔ ozon, яндекс ↔ yandex: сравниваем в латинице
const lat = s => norm(s).replace(/[а-я]/g, c => TRL[c] ?? c).replace(/ks/g, 'x').replace(/[^a-z0-9 ]/g, '');
function openSearch() {
  Q = Q || { q: '', per: 'y', kind: 'out', bank: '' };
  const banks = [...new Set(S.tx.map(t => t.b).filter(Boolean))];
  $('#sheet2').innerHTML = `<div class="grab"></div>
    <label class="sbox">${ic('ui_search')}<input id="q-in" placeholder="Озон, такси, Пятёрочка…" autocomplete="off" enterkeyhint="search" value="${esc(Q.q)}"></label>
    <div class="qf">
      <div class="seg sm" id="q-kind">${[['out', 'Расходы'], ['in', 'Доходы']].map(([k, t]) => `<button class="${Q.kind === k ? 'on' : ''}" data-act="qkind" data-k="${k}">${t}</button>`).join('')}</div>
      <div class="chips">${[['m', 'Месяц'], ['y', 'Год'], ['all', 'Всё время']].map(([k, t]) => `<button class="chip ${Q.per === k ? 'on' : ''}" data-act="qper" data-p="${k}">${t}</button>`).join('')}</div>
      ${banks.length > 1 ? `<div class="chips">${[['', 'Все банки'], ...banks.map(b => [b, b])].map(([k, t]) => `<button class="chip ${Q.bank === k ? 'on' : ''}" data-act="qbank" data-b="${esc(k)}">${esc(t)}</button>`).join('')}</div>` : ''}
    </div>
    <div id="q-res"></div>`;
  open('#sheet2'); animSegs($('#sheet2')); searchRun();
  if (!Q.q) setTimeout(() => { const i = $('#q-in'); i && i.focus(); }, 380);
}
function qRange() {
  if (Q.per === 'm') { const r = range('m', 0); return [r.from, r.to]; }
  if (Q.per === 'y') return [key(addD(today(), -364)), todayK()];
  return ['0000', '9999'];
}
function searchRun() {
  const box = $('#q-res'); if (!box) return;
  const q = norm(Q.q), ql = lat(Q.q), [from, to] = qRange();
  const catHit = q.length >= 3 ? Object.values(CAT).filter(c => norm(c.n).includes(q)).map(c => c.id) : [];
  const list = S.tx.filter(t => t.k === Q.kind && t.d >= from && t.d <= to && (!Q.bank || t.b === Q.bank) &&
    (!q || norm(t.n).includes(q) || (ql && lat(t.n).includes(ql)) || catHit.includes(t.c))).sort((a, b) => a.d < b.d ? 1 : a.d > b.d ? -1 : b.t - a.t);
  if (!q && !Q.bank) { box.innerHTML = `<p class="note qhint">Найдите магазин, человека или категорию — покажу, сколько ушло за период и как это распределялось по месяцам.</p>`; return; }
  if (!list.length) { box.innerHTML = `<p class="note qhint">Ничего не нашлось${Q.per !== 'all' ? ' — попробуйте «Всё время»' : ''}</p>`; return; }
  const sum = total(list), months = {};
  list.forEach(t => { const m = t.d.slice(0, 7); months[m] = (months[m] || 0) + t.a; });
  const mk = Object.keys(months).sort(), mx = Math.max(...Object.values(months));
  const span = Q.per === 'm' ? 1 : Math.max(1, mk.length);
  let h = `<section class="qsum"><div class="lbl">${Q.kind === 'in' ? 'Пришло' : 'Потрачено'}${q ? ` · «${esc(Q.q.trim())}»` : ''}</div>
    <div class="qnum">${rub(sum, { round: true })}</div>
    <div class="qmeta"><span>${fmtN(String(list.length))} ${plural(list.length, 'операция', 'операции', 'операций')}</span><span>В среднем ${rub(sum / list.length, { round: true })}</span>${span > 1 ? `<span>${rub(sum / span, { round: true })} в месяц</span>` : ''}</div></section>`;
  if (mk.length > 1) {
    h += `<div class="qbars">${mk.slice(-12).map(m => `<div class="qb"><i style="height:${Math.max(4, Math.round(months[m] / mx * 100))}%"></i><span>${MG[+m.slice(5) - 1].slice(0, 3)}</span></div>`).join('')}</div>`;
  }
  h += `<div class="feed qfeed">${list.slice(0, 80).map(t => { const c = catOf(t); return `<button class="row" data-act="qedit" data-id="${t.id}"><span class="ic">${ic(c.id)}</span><span class="t"><span class="n">${esc(t.n || c.n)}</span><span class="s">${dayTitle(t.d)}${t.d.slice(0, 4) !== todayK().slice(0, 4) ? ' ' + t.d.slice(0, 4) : ''}${t.b ? ' · ' + esc(t.b) : ''}</span></span><span class="a ${t.k === 'in' ? 'in' : ''}">${t.k === 'in' ? '+' : ''}${rub(t.a)}</span></button>`; }).join('')}</div>`;
  if (list.length > 80) h += `<p class="note" style="text-align:center">и ещё ${fmtN(String(list.length - 80))} — уточните запрос</p>`;
  box.innerHTML = h;
}
// после правки из поиска возвращаемся к результатам
function inSearch() { return stack[stack.length - 2] === '#sheet2' && Q && $('#q-res'); }
// ================= Capital =================
const ATYPES = [
  ['dep', 'Вклад и накопительный', 'a_dep', '#9fbf98'],
  ['cash', 'Наличные', 'a_cash', '#c2a68c'],
  ['crypto', 'Криптовалюта', 'a_crypto', '#d8b45a'],
  ['stocks', 'Акции и облигации', 'a_stocks', '#a89bc2'],
  ['realty', 'Недвижимость и авто', 'a_realty', '#8db6b8'],
  ['debt', 'Долги и кредиты', 'a_debt', '#df7b62'],
  ['other', 'Другое', 'a_other', '#77736d'],
].map(([id, n, i, c]) => ({ id, n, i, c }));
const AT = Object.fromEntries(ATYPES.map(t => [t.id, t]));
AT.bank = { id: 'bank', n: 'Счета', i: 'a_bank', c: '#8fa6c4' }; // старые записи
const FIAT = ['RUB', 'USD', 'EUR', 'CHF', 'CNY', 'GBP', 'AED', 'TRY', 'KZT', 'JPY', 'HKD', 'SGD', 'THB', 'GEL', 'AMD'];
const COINS = {
  BTC: 'bitcoin', ETH: 'ethereum', USDT: 'tether', TON: 'the-open-network', USDC: 'usd-coin', SOL: 'solana', BNB: 'binancecoin', XRP: 'ripple',
  TRX: 'tron', DOGE: 'dogecoin', ADA: 'cardano', LTC: 'litecoin', DOT: 'polkadot', AVAX: 'avalanche-2', LINK: 'chainlink', SUI: 'sui',
  XMR: 'monero', ATOM: 'cosmos', ARB: 'arbitrum', OP: 'optimism', APT: 'aptos', SHIB: 'shiba-inu', PEPE: 'pepe', POL: 'polygon-ecosystem-token',
  NOT: 'notcoin', DOGS: 'dogs-2', HMSTR: 'hamster-kombat', PAXG: 'pax-gold', DAI: 'dai', WBTC: 'wrapped-bitcoin'
};
const coinId = c => (S.coins && S.coins[c]) || COINS[c];
const isCoin = c => !!coinId(c);
const CURS = [...FIAT, ...Object.keys(COINS)];
const CSYM_ = { RUB: '₽', USD: '$', EUR: '€', CNY: '¥', GBP: '£', JPY: '¥', TRY: '₺', KZT: '₸', GEL: '₾', AMD: '֏', THB: '฿', BTC: '₿', ETH: 'Ξ' };
const CSYM = new Proxy(CSYM_, { get: (o, k) => o[k] || k });
const rate = c => c === 'RUB' ? 1 : (S.rates[c] && S.rates[c].v) || 0;
const price = tk => (S.prices[tk] && S.prices[tk].v) || 0;
const unitRub = a => a.tk ? price(a.tk) : rate(a.cur);
const accRub = a => Math.round((a.type === 'debt' ? -1 : 1) * a.amt * unitRub(a) * 100); // копейки
const capTotal = () => S.acc.reduce((s, a) => s + accRub(a), 0);
function fmtCur(v, c) {
  const dec = isCoin(c) ? (rate(c) > 1000 ? 6 : rate(c) > 1 ? 4 : 2) : 2;
  let s = (+v).toFixed(dec);
  s = isCoin(c) ? s.replace(/0+$/, '').replace(/\.$/, '') : s.replace(/\.00$/, '');
  s = s.replace('.', ',');
  const [i, d] = s.split(',');
  s = fmtN(i) + (d ? ',' + d : '');
  return ['USD', 'EUR'].includes(c) ? CSYM[c] + s : s + ' ' + CSYM[c];
}
function snapshot() {
  const d = todayK(), v = capTotal();
  const last = S.capHist[S.capHist.length - 1];
  if (last && last.d === d) last.v = v; else S.capHist.push({ d, v });
  if (S.capHist.length > 800) S.capHist = S.capHist.slice(-800);
}
// пополнения и изъятия капитала вручную — чтобы не путать их с ростом
function capFlow(v) { if (!v) return; S.capFlow = S.capFlow || []; S.capFlow.push({ d: todayK(), v }); if (S.capFlow.length > 400) S.capFlow = S.capFlow.slice(-400); }
let ratesBusy = false;
async function fetchRates(force = false) {
  const need = [...new Set([...S.acc.filter(a => !a.tk).map(a => a.cur), S.base || 'RUB'])].filter(c => c !== 'RUB');
  const tks = [...new Set(S.acc.filter(a => a.tk).map(a => a.tk))];
  if ((!need.length && !tks.length) || ratesBusy) return;
  if (!force && S.ratesAt && Date.now() - S.ratesAt < 30 * 60e3) return;
  ratesBusy = true;
  let ok = false;
  try {
    const r = await fetch('https://www.cbr-xml-daily.ru/daily_json.js').then(r => r.json());
    FIAT.forEach(c => { const x = r.Valute[c]; if (x) { S.rates[c] = { v: x.Value / x.Nominal, at: Date.now(), src: 'ЦБ' }; ok = true; } });
  } catch (e) {}
  if (await fetchCoins(need.filter(isCoin))) ok = true;
  if (tks.length) { const got = await fetchMoex(tks); if (got) ok = true; }
  ratesBusy = false;
  if (ok) { S.ratesAt = Date.now(); snapshot(); save(); if (tab === 'cap') render(); }
  else if (force) toast('Не удалось обновить курсы');
}
async function fetchCoins(cs) {
  if (!cs.length) return false;
  const ids = [...new Set(cs.map(coinId))];
  try {
    const r = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${ids.join(',')}&vs_currencies=rub&include_24hr_change=true`).then(r => r.json());
    let ok = false;
    cs.forEach(c => { const x = r[coinId(c)]; if (x && x.rub) { S.rates[c] = { v: x.rub, ch: x.rub_24h_change, at: Date.now(), src: 'CoinGecko' }; ok = true; } });
    return ok;
  } catch (e) { return false; }
}
let coinT, coinRes = [];
function onCoinSearch(q) {
  clearTimeout(coinT); q = q.trim();
  const box = $('#coin-res'); if (!box) return;
  if (q.length < 2) { box.innerHTML = ''; return; }
  coinT = setTimeout(async () => {
    try {
      const r = await fetch(`https://api.coingecko.com/api/v3/search?query=${encodeURIComponent(q)}`).then(r => r.json());
      coinRes = (r.coins || []).slice(0, 6);
      if ($('#coin-res')) $('#coin-res').innerHTML = coinRes.length ? coinRes.map((c, i) => `<button class="chip" data-act="coinpick" data-i="${i}"><b>${esc(c.symbol.toUpperCase())}</b>&nbsp;${esc(c.name)}</button>`).join('') : '<span class="note">Ничего не нашлось</span>';
    } catch (e) { if ($('#coin-res')) $('#coin-res').innerHTML = '<span class="note">Поиск недоступен — впишите курс вручную</span>'; }
  }, 450);
}
async function coinPick(i) {
  const c = coinRes[i]; if (!c) return;
  const sym = c.symbol.toUpperCase();
  S.coins = S.coins || {}; if (!COINS[sym] || COINS[sym] !== c.id) S.coins[sym] = c.id;
  syncAcc(); A.cur = sym; haptic(); drawAcc();
  if (await fetchCoins([sym]) && A && A.cur === sym) { save(); drawAcc(); }
}
async function fetchMoex(tks) {
  let ok = false;
  for (const [market, board] of [['shares', 'TQBR'], ['shares', 'TQTF']]) {
    const left = tks.filter(t => !(S.prices[t] && S.prices[t].at > Date.now() - 60e3));
    if (!left.length) break;
    try {
      const u = `https://iss.moex.com/iss/engines/stock/markets/${market}/boards/${board}/securities.json?securities=${left.join(',')}&iss.meta=off&iss.only=marketdata,securities&marketdata.columns=SECID,LAST,LCURRENTPRICE&securities.columns=SECID,SHORTNAME,PREVPRICE`;
      const r = await fetch(u).then(r => r.json());
      const names = Object.fromEntries((r.securities.data || []).map(([id, n, pp]) => [id, { n, pp }]));
      (r.marketdata.data || []).forEach(([id, last, cur]) => {
        const v = last || cur || (names[id] && names[id].pp);
        if (v) { S.prices[id] = { v, at: Date.now(), name: names[id] ? names[id].n : id, src: 'Мосбиржа' }; ok = true; }
      });
    } catch (e) {}
  }
  return ok;
}
function ago(ts) {
  const m = Math.round((Date.now() - ts) / 60e3);
  if (m < 1) return 'только что'; if (m < 60) return `${m} мин назад`;
  const h = Math.round(m / 60); if (h < 24) return `${h} ч назад`;
  return new Date(ts).toLocaleDateString('ru-RU');
}
setInterval(() => fetchRates(), 30 * 60e3);
document.addEventListener('visibilitychange', () => { if (!document.hidden) fetchRates(); });

function renderCap() {
  const tot = capTotal();
  let h = `<header class="hdr"><div><h1>Капитал</h1></div><div class="arrows">${S.acc.length ? eyeBtn() + '<button class="rb txt" data-act="rates">Курсы</button>' : ''}</div></header>`;
  if (!S.acc.length) {
    h += `<section class="hero"><div class="lbl">Всего</div><div class="num">0<small>${bsym()}</small></div></section>
      <div class="empty">${engr('gear')}Всё, что отложено, в одном месте: вклады, валюта, крипта, акции. Приложение пересчитает капитал в рубли по актуальному курсу.</div>
      <div class="stack"><button class="btn" data-act="addacc">${ic('ui_plus')}Добавить актив</button>${S.tx.length ? '' : '<button class="btn ghost" data-act="seed">Показать на демо-данных</button>'}</div>`;
    $('#s-cap').innerHTML = h; return;
  }
  // динамика за 30 дней
  const hist = S.capHist.filter(x => x.d >= key(addD(today(), -90)));
  const agoP = [...S.capHist].reverse().find(x => x.d <= key(addD(today(), -30)));
  h += `<section class="hero"><div class="lbl">Всего${baseOk() ? '' : ` · нет курса ${baseCur()}, показываю в рублях`}</div><div class="num" data-act="priv"><span data-count="${Math.round(cconv(tot))}" data-ck="cap">0</span><small data-act="cyclebase">${bsym()}</small></div>
    <div class="cmp">${(() => {
      if (!agoP || !agoP.v) return '&nbsp;';
      const flow = (S.capFlow || []).filter(f => f.d > agoP.d).reduce((x, f) => x + f.v, 0), grow = tot - agoP.v - flow;
      return `${delta(agoP.v + grow, agoP.v, true)} за месяц · ${cfmt(grow, { round: true, sign: true })}${flow ? ` <span class="flow">· пополнения ${cfmt(flow, { round: true, sign: true })}</span>` : ''}`;
    })()}</div></section>`;
  if (hist.length > 2) h += `<div style="margin:18px 0 6px">${lineChart(hist.map(x => x.v), [], 90, true)}</div><div class="blabs"><span>${dayTitle(hist[0].d).replace(/, .*/, '')}</span><span>сегодня</span></div>`;

  // структура
  const pos = S.acc.filter(a => a.type !== 'debt'), gross = pos.reduce((s, a) => s + accRub(a), 0);
  const byT = {}; S.acc.forEach(a => byT[a.type] = (byT[a.type] || 0) + accRub(a));
  const parts = Object.entries(byT).filter(([t]) => t !== 'debt').map(([t, v]) => ({ c: AT[t], v })).sort((a, b) => b.v - a.v);
  if (gross > 0) h += `<h2>Структура</h2>${comp(parts, gross)}<div class="cap" style="margin-bottom:4px"><span>${parts.slice(0, 3).map(p => `<i class="dot" style="background:${p.c.c}"></i>${p.c.n.split(' ')[0]} ${Math.round(p.v / gross * 100)}%`).join('<em></em>')}</span></div>`;

  // счета по типам
  const order = ATYPES.map(t => t.id);
  const groups = {}; S.acc.forEach(a => (groups[a.type] = groups[a.type] || []).push(a));
  Object.keys(groups).sort((a, b) => order.indexOf(a) - order.indexOf(b)).forEach(t => {
    const arr = groups[t].sort((a, b) => Math.abs(accRub(b)) - Math.abs(accRub(a))), s = arr.reduce((x, a) => x + accRub(a), 0);
    h += `<div class="dh" style="padding-top:26px"><span>${AT[t].n}</span><span>${cfmt(s, { round: true })}</span></div>` + arr.map(a => {
      const v = accRub(a), noRate = a.tk ? !price(a.tk) : a.cur !== 'RUB' && !rate(a.cur);
      return `<button class="row" data-act="editacc" data-id="${a.id}"><span class="ic">${ic(AT[a.type].i)}</span>
        <span class="t"><span class="n">${esc(a.n)}</span><span class="s">${a.tk ? `${a.tk} · ${fmtN(String(a.amt))} шт${price(a.tk) ? ' × ' + rub(price(a.tk) * 100) : ' · нет цены'}` : a.cur !== 'RUB' ? fmtCur(a.amt, a.cur) + (noRate ? ' · нет курса' : S.rates[a.cur] && S.rates[a.cur].ch != null ? ` · <span class="${S.rates[a.cur].ch >= 0 ? 'c-sage' : 'c-clay'}">${S.rates[a.cur].ch >= 0 ? '+' : '−'}${Math.abs(S.rates[a.cur].ch).toFixed(1).replace('.', ',')}% за сутки</span>` : '') : gross > 0 && v > 0 ? Math.round(v / gross * 100) + '% капитала' : '&nbsp;'}</span></span>
        <span class="a ${v < 0 ? 'c-clay' : ''}">${noRate ? '—' : cfmt(v, { round: true })}</span></button>`;
    }).join('');
  });
  h += `<div style="height:22px"></div><button class="btn ghost" data-act="addacc">${ic('ui_plus')}Добавить актив</button>`;
  const used = [...new Set(S.acc.filter(a => !a.tk).map(a => a.cur))].filter(c => c !== 'RUB');
  if (used.length || S.acc.some(a => a.tk)) h += `<button class="note ratesline" data-act="rates">${used.length ? 'Курсы: ' : 'Цены акций'}${used.map(c => `${c} ${rate(c) ? fmtN(String(Math.round(rate(c) * 100) / 100).replace('.', ',')) : '—'}`).join(' · ')}${S.ratesAt ? (Date.now() - S.ratesAt > 432e5 ? ` · от ${new Date(S.ratesAt).getDate()} ${MG[new Date(S.ratesAt).getMonth()]}` : ` · обновлены ${ago(S.ratesAt)}`) + (navigator.onLine === false ? ' · без сети' : '') : used[0] && S.rates[used[0]] && S.rates[used[0]].src ? ` · ${S.rates[used[0]].src}` : ''}</button>`;
  $('#s-cap').innerHTML = h;
}

// --- account sheet ---
let A = null;
function openAcc(id = null) {
  const a = id ? S.acc.find(x => x.id === id) : null;
  A = a ? { ...a, amtS: String(a.amt).replace('.', ','), byTk: !!a.tk } : { id: null, n: '', type: 'dep', cur: 'RUB', amtS: '', tk: '', byTk: false };
  drawAcc(); open('#sheet');
}
function drawAcc() {
  const isTk = A.type === 'stocks' && A.byTk;
  const needRate = !isTk && A.cur !== 'RUB';
  $('#sheet').innerHTML = `<div class="grab"></div>
    <div class="amt"><div class="v" id="acc-v"><input id="acc-amt" class="bigin" inputmode="decimal" placeholder="0" value="${esc(A.amtS)}" autocomplete="off"><small>${isTk ? 'шт' : CSYM[A.cur]}</small></div>
    <div class="cmp" id="acc-rub">${accPreview()}</div></div>
    <div class="hintl">Тип</div>
    <div class="chips">${ATYPES.map(t => `<button class="chip ${A.type === t.id ? 'on' : ''}" data-act="atype2" data-t="${t.id}">${ic(t.i)}${t.n}</button>`).join('')}</div>
    ${A.type === 'stocks' ? `<div class="seg" style="margin:0 0 12px"><button class="${!A.byTk ? 'on' : ''}" data-act="bytk" data-v="0">Суммой</button><button class="${A.byTk ? 'on' : ''}" data-act="bytk" data-v="1">По тикеру</button></div>` : ''}
    ${isTk ? `<div class="frow" style="margin-bottom:8px"><input class="inp" id="acc-tk" placeholder="Тикер: SBER, YDEX, LQDT…" value="${esc(A.tk || '')}" autocomplete="off" autocapitalize="characters" style="text-transform:uppercase"></div>
      <div class="frow" style="margin-bottom:6px"><span class="ratelbl">Цена</span><input class="inp" id="acc-price" inputmode="decimal" placeholder="подтянется с Мосбиржи" value="${A.tk && price(A.tk) ? String(price(A.tk)).replace('.', ',') : ''}"><span class="ratelbl">₽</span></div>
      <p class="note" style="margin:0 4px 12px">Акции и фонды Мосбиржи. Цена обновляется сама, если не вышло — впишите вручную.</p>` : ''}
    <div class="frow" style="margin-bottom:12px"><input class="inp" id="acc-n" placeholder="${isTk ? 'Название (необязательно)' : A.type === 'crypto' ? 'Binance, Tonkeeper, холодный кошелёк…' : 'Название: вклад Сбер, Binance, ИИС…'}" value="${esc(A.n)}" autocomplete="off"></div>
    ${isTk ? '' : A.type === 'crypto' ? `<div class="hintl">Монета</div>
    <div class="chips">${[...new Set([...Object.keys(COINS), ...Object.keys(S.coins || {}), ...(isCoin(A.cur) ? [A.cur] : [])])].map(c => `<button class="chip ${A.cur === c ? 'on' : ''}" data-act="acur" data-c="${c}">${c}</button>`).join('')}</div>
    <div class="frow" style="margin-bottom:6px"><input class="inp" id="coin-q" placeholder="Найти другую монету" autocomplete="off"></div><div class="chips" id="coin-res"></div>` : `<div class="hintl">Валюта</div>
    <div class="chips">${FIAT.map(c => `<button class="chip ${A.cur === c ? 'on' : ''}" data-act="acur" data-c="${c}">${c}</button>`).join('')}</div>`}
    ${needRate ? `<div class="frow" style="margin-bottom:14px"><span class="ratelbl">1 ${A.cur} =</span><input class="inp" id="acc-rate" inputmode="decimal" placeholder="курс в рублях" value="${rate(A.cur) ? String(rate(A.cur)).replace('.', ',') : ''}"><span class="ratelbl">₽</span></div>` : ''}
    <div class="stack"><button class="btn" data-act="saveacc">${A.id ? 'Сохранить' : 'Добавить'}</button>${A.id ? `<button class="btn danger" data-act="delacc">Удалить</button>` : ''}</div>`;
  document.querySelectorAll('#sheet .chip.on').forEach(c => c.scrollIntoView({ inline: 'center', block: 'nearest' }));
  animSegs($('#sheet'));
}
function syncAcc() {
  if ($('#acc-amt')) A.amtS = $('#acc-amt').value;
  if ($('#acc-n')) A.n = $('#acc-n').value;
  if ($('#acc-tk')) A.tk = $('#acc-tk').value.trim().toUpperCase();
}
let tkT;
function onTicker() {
  syncAcc(); clearTimeout(tkT);
  if (A.tk.length < 2) return;
  tkT = setTimeout(async () => {
    const tk = A.tk;
    if (await fetchMoex([tk]) && A.tk === tk) {
      if ($('#acc-price')) $('#acc-price').value = String(price(tk)).replace('.', ',');
      if (!$('#acc-n').value && S.prices[tk].name) { $('#acc-n').value = S.prices[tk].name; A.n = S.prices[tk].name; }
      $('#acc-rub').innerHTML = accPreview();
    }
  }, 500);
}
const num = s => parseFloat(String(s || '').replace(/[\s  ]/g, '').replace(',', '.')) || 0;
function accPreview() {
  if (A.type === 'stocks' && A.byTk) {
    const p = num($('#acc-price') ? $('#acc-price').value : '') || (A.tk && price(A.tk));
    return p ? `≈ ${rub(num(A.amtS) * p * 100, { round: true })}` : 'Укажите тикер';
  }
  if (A.cur === 'RUB') return A.type === 'debt' ? 'Будет вычтено из капитала' : '&nbsp;';
  const r = num($('#acc-rate') ? $('#acc-rate').value : '') || rate(A.cur);
  return r ? `≈ ${rub(num(A.amtS) * r * 100, { round: true })}` : 'Укажите курс ниже';
}
function saveAcc() {
  syncAcc();
  const amt = num(A.amtS), isTk = A.type === 'stocks' && A.byTk;
  if (isTk) {
    if (!A.tk) { toast('Укажите тикер'); return; }
    const p = num($('#acc-price') ? $('#acc-price').value : '');
    if (p > 0 && p !== price(A.tk)) S.prices[A.tk] = { v: p, at: Date.now(), name: (S.prices[A.tk] || {}).name || A.tk, src: 'вручную' };
    if (!A.n) A.n = (S.prices[A.tk] && S.prices[A.tk].name) || A.tk;
  } else if (!A.n) { toast('Добавьте название'); return; }
  if ($('#acc-rate')) { const r = num($('#acc-rate').value); if (r > 0 && Math.abs(r - rate(A.cur)) > 1e-9) S.rates[A.cur] = { v: r, at: Date.now(), src: 'вручную' }; }
  if (A.cur !== 'RUB' && !rate(A.cur)) setTimeout(() => fetchRates(true), 50);
  const rec = isTk ? { n: A.n, type: 'stocks', cur: 'RUB', amt, tk: A.tk } : { n: A.n, type: A.type, cur: A.cur, amt, tk: '' };
  const before = A.id ? accRub(S.acc.find(x => x.id === A.id)) : 0;
  if (A.id) Object.assign(S.acc.find(x => x.id === A.id), rec);
  else S.acc.push({ id: newId(), ...rec, t: Date.now() });
  capFlow(accRub(A.id ? S.acc.find(x => x.id === A.id) : S.acc[S.acc.length - 1]) - before);
  snapshot(); save(); hapticOk();
  while (stack.length) close();
  render(); toast(A.id ? 'Сохранено' : 'Актив добавлен');
}
function openRates() {
  const used = [...new Set([...S.acc.filter(a => !a.tk).map(a => a.cur), 'USD', 'EUR'])].filter(c => c !== 'RUB');
  const tks = [...new Set(S.acc.filter(a => a.tk).map(a => a.tk))];
  $('#sheet').innerHTML = `<div class="grab"></div><h2 style="margin-top:6px">Курсы валют</h2>
    <p class="note" style="margin:-2px 0 10px">Обновляются сами при открытии и каждые 30 минут: валюты — по ЦБ, крипта — по CoinGecko.${S.ratesAt ? ` Последнее обновление ${ago(S.ratesAt)}.` : ''} Можно задать и вручную.</p><button class="btn ghost" data-act="refreshrates" style="margin-bottom:10px">Обновить сейчас</button>` +
    used.map(c => `<div class="row"><span class="t"><span class="n">${c}</span><span class="s">${S.rates[c] ? `${S.rates[c].src || ''} · ${new Date(S.rates[c].at).toLocaleDateString('ru-RU')}` : 'не задан'}</span></span><input class="lim" inputmode="decimal" data-rate="${c}" placeholder="₽" value="${rate(c) ? String(rate(c)).replace('.', ',') : ''}" style="width:130px"></div>`).join('') +
    (tks.length ? `<h2>Акции</h2>` + tks.map(t => `<div class="row"><span class="t"><span class="n">${t}</span><span class="s">${S.prices[t] ? `${esc(S.prices[t].name || '')} · ${S.prices[t].src || ''} · ${ago(S.prices[t].at)}` : 'нет цены'}</span></span><input class="lim" inputmode="decimal" data-price="${t}" placeholder="₽" value="${price(t) ? String(price(t)).replace('.', ',') : ''}" style="width:130px"></div>`).join('') : '') +
    `<div style="height:16px"></div><button class="btn" data-act="saverates">Готово</button>`;
  open('#sheet');
}
// ================= Цели =================
const GS = () => S.goals || (S.goals = []);
const goalById = id => GS().find(g => g.id === id);
const goalAcc = g => g && g.acc ? (S.acc || []).find(a => a.id === g.acc) : null;
const goalTx = g => S.tx.filter(t => t.k === 'g' && t.g === g.id);
function goalSaved(g) {
  const a = goalAcc(g);
  if (a) return Math.max(0, accRub(a));
  return goalTx(g).reduce((s, t) => s + (t.w ? -t.a : t.a), 0);
}
// месяцы от сегодня до даты (не меньше 1)
function monthsTo(k) {
  const a = today(), b = D(k);
  let n = (b.getFullYear() - a.getFullYear()) * 12 + b.getMonth() - a.getMonth();
  if (b.getDate() < a.getDate()) n--;
  return Math.max(1, n);
}
const mAhead = n => { const d = today(); return new Date(d.getFullYear(), d.getMonth() + n, 1, 12); };
const mLabel = d => `${M[d.getMonth()]}${d.getFullYear() !== today().getFullYear() ? ' ' + d.getFullYear() : ''}`;
const mLabelTo = d => `к ${MD[d.getMonth()]}${d.getFullYear() !== today().getFullYear() ? ' ' + d.getFullYear() : ''}`;
const MD = ['январю', 'февралю', 'марту', 'апрелю', 'маю', 'июню', 'июлю', 'августу', 'сентябрю', 'октябрю', 'ноябрю', 'декабрю'];
const nMonths = n => n < 12 ? `${n} ${plural(n, 'месяц', 'месяца', 'месяцев')}` : (() => { const y = Math.floor(n / 12), m = n % 12; return `${y} ${plural(y, 'год', 'года', 'лет')}${m ? ` ${m} мес` : ''}`; })();
// сколько откладывать в месяц, чтобы за n месяцев из pv получить fv при ставке r годовых
function needPay(fv, pv, n, rate) {
  const r = rate / 1200; if (fv <= pv) return 0;
  if (!r) return Math.ceil((fv - pv) / n);
  const k = Math.pow(1 + r, n); return Math.max(0, Math.ceil((fv - pv * k) * r / (k - 1)));
}
// через сколько месяцев наберётся
function monthsNeed(fv, pv, pay, rate) {
  const r = rate / 1200; let v = pv;
  for (let n = 1; n <= 600; n++) { v = v * (1 + r) + pay; if (v >= fv) return n; }
  return null;
}
// сколько остаётся в среднем: полные месяцы за последние полгода, где есть и доходы, и расходы
function freeAvg() {
  const rows = [];
  for (let i = 1; i <= 6 && rows.length < 3; i++) {
    const r = range('m', -i), inc = total(sel('in', r.from, r.to)), out = total(sel('out', r.from, r.to));
    if (inc > 0 && out > 0) rows.push({ r, inc, out });
  }
  if (!rows.length) return null;
  const n = rows.length;
  return { n, inc: rows.reduce((s, x) => s + x.inc, 0) / n, out: rows.reduce((s, x) => s + x.out, 0) / n, free: rows.reduce((s, x) => s + x.inc - x.out, 0) / n, rows };
}
function avgOut() {
  let s = 0, n = 0;
  for (let i = 1; i <= 6 && n < 3; i++) { const r = range('m', -i), o = total(sel('out', r.from, r.to)); if (o > 0) { s += o; n++; } }
  return n ? s / n : 0;
}
const FLEX = ['cafe', 'delivery', 'taxi', 'market', 'fun', 'clothes', 'tobacco', 'gifts'];
function cutTips(rows) {
  if (!rows || !rows.length) return [];
  return FLEX.map(c => ({ c, v: rows.reduce((s, x) => s + total(sel('out', x.r.from, x.r.to, c)), 0) / rows.length }))
    .filter(x => x.v >= 300000).sort((a, b) => b.v - a.v).slice(0, 2);
}
// план цели: сколько в месяц и когда
function goalPlan(g) {
  const p = g.plan; if (!p) return null;
  const saved = goalSaved(g), rate = p.rate || 0;
  if (p.mode === 'pay') {
    if (!p.pay) return { saved, rate, empty: true };
    const n = monthsNeed(g.sum, saved, p.pay, rate), n0 = monthsNeed(g.sum, saved, p.pay, 0);
    return { saved, rate, pay: p.pay, n, n0 };
  }
  if (!g.d) return { saved, rate, empty: true };
  const n = monthsTo(g.d), pay = needPay(g.sum, saved, n, rate), pay0 = needPay(g.sum, saved, n, 0);
  return { saved, rate, pay, pay0, n, gain: Math.max(0, (pay0 - pay) * n) };
}
// сколько в месяц уже забирают другие цели с планом
const otherPlans = g => GS().filter(x => x.id !== g.id && !x.done && x.plan).reduce((s, x) => { const p = goalPlan(x); return s + (p && p.pay ? p.pay : 0); }, 0);

// ---------- экран ----------
function renderGoals() {
  const act = GS().filter(g => !g.done), done = GS().filter(g => g.done).sort((a, b) => a.done < b.done ? 1 : -1);
  let h = `<header class="hdr"><div><h1>Цели</h1></div></header>`;
  if (!act.length) {
    h += `<div class="gempty"><div class="gmark">${ic('ui_goal')}</div><p>Машина, отпуск, подушка на чёрный день. Копите в своём темпе — или попросите составить план: приложение посчитает, сколько откладывать, что дадут проценты и реально ли это с вашими доходами.</p></div>
      <div class="stack"><button class="btn" data-act="gnew">${ic('ui_plus')}Новая цель</button></div>`;
    const o = avgOut();
    if (o > 0 && !GS().some(g => /подушк/i.test(g.n))) h += `<button class="row gsug" data-act="gcushion"><span class="ic">${ic('ui_shield')}</span><span class="t"><span class="n">Подушка безопасности</span><span class="s">Три месяца ваших расходов — ${rub(Math.round(o * 3 / 100000) * 100000, { round: true })}</span></span>${ic('ui_right', 'i chev')}</button>`;
  } else {
    const tot = act.reduce((s, g) => s + goalSaved(g), 0), aim = act.reduce((s, g) => s + g.sum, 0);
    h += `<section class="hero"><div class="lbl">Отложено</div><div class="num" data-act="priv"><span data-count="${tot}" data-ck="goals">0</span><small>₽</small></div><div class="cmp">из ${rub(aim, { round: true, short: true })} · ${act.length} ${plural(act.length, 'цель', 'цели', 'целей')}</div></section>`;
    h += `<div class="gcards">${act.map(goalCard).join('')}</div>`;
    h += `<div style="height:14px"></div><button class="btn ghost" data-act="gnew">${ic('ui_plus')}Новая цель</button>`;
  }
  if (done.length) h += `<h2>Исполнено</h2>` + done.map(g => `<button class="row" data-act="gopen" data-id="${g.id}"><span class="ic">${ic('ui_check')}</span><span class="t"><span class="n">${esc(g.n)}</span><span class="s">${D(g.done).getDate()} ${MG[D(g.done).getMonth()]} ${D(g.done).getFullYear()}</span></span><span class="a">${rub(g.sum, { round: true })}</span></button>`).join('');
  $('#s-goals').innerHTML = h;
}
function goalCard(g) {
  const s = goalSaved(g), pct = Math.min(100, g.sum ? s / g.sum * 100 : 0), p = goalPlan(g), a = goalAcc(g);
  let sub = '';
  if (p && !p.empty) sub = p.n0 !== undefined ? (p.n ? `${rub(p.pay, { round: true })}/мес · ${mLabelTo(mAhead(p.n))}` : 'не сходится') : `План: ${rub(p.pay, { round: true })}/мес`;
  else if (g.d) sub = `К ${D(g.d).getDate()} ${MG[D(g.d).getMonth()]}${D(g.d).getFullYear() !== today().getFullYear() ? ' ' + D(g.d).getFullYear() : ''}`;
  if (a) sub = (sub ? sub + ' · ' : '') + esc(a.n);
  return `<button class="gcard" data-act="gopen" data-id="${g.id}"><div class="gt"><span class="n">${esc(g.n)}</span><span class="pc">${pct >= 1 || !s ? Math.floor(pct) : '<1'}%</span></div>
    <div class="gbar"><i style="width:${pct.toFixed(1)}%"></i></div>
    <div class="gs"><span><b class="pv">${rub(s, { round: true })}</b> из ${rub(g.sum, { round: true, short: true })}</span><span>${sub}</span></div></button>`;
}

// ---------- создание / правка ----------
let GE = null;
function openGoalEdit(id = null, preset = null) {
  const g = id ? goalById(id) : null;
  GE = g ? { id: g.id, n: g.n, sumS: String(g.sum / 100), d: g.d || '', acc: g.acc || null } : { id: null, n: '', sumS: '', d: '', acc: null, ...(preset || {}) };
  drawGoalEdit(); open('#sheet');
}

function drawGoalEdit() {
  const accs = (S.acc || []).filter(a => a.type !== 'debt');
  const dl = GE.d ? `${D(GE.d).getDate()} ${MG[D(GE.d).getMonth()].slice(0, 3)} ${D(GE.d).getFullYear()}` : 'Без срока';
  $('#sheet').innerHTML = `<div class="grab"></div><h2 style="margin-top:4px">${GE.id ? 'Цель' : 'Новая цель'}</h2>
    <div class="amt" style="margin:10px 0 14px"><div class="v"><input id="ge-sum" class="bigin" inputmode="decimal" placeholder="0" value="${esc(GE.sumS ? fmtN(GE.sumS.replace('.', ',')) : '')}" autocomplete="off"><small>₽</small></div><div class="cmp">Сколько нужно</div></div>
    <div class="frow" style="margin-bottom:10px"><input class="inp" id="ge-n" placeholder="Машина, отпуск, подушка…" value="${esc(GE.n)}" autocomplete="off" enterkeyhint="done">
      <label class="datep glass">${ic('ui_cal')}<span>${dl}</span><input type="date" id="ge-d" value="${GE.d}" min="${key(addD(today(), 1))}"></label></div>
    ${GE.d ? `<button class="note gclr" data-act="gdclr">Убрать срок</button>` : ''}
    ${accs.length ? `<div class="hintl" style="height:auto;margin-top:12px">Где копите</div>
    <div class="chips"><button class="chip ${!GE.acc ? 'on' : ''}" data-act="geacc" data-id="">Откладываю сам</button>${accs.map(a => `<button class="chip ${GE.acc === a.id ? 'on' : ''}" data-act="geacc" data-id="${a.id}">${ic(AT[a.type].i)}${esc(a.n)}</button>`).join('')}</div>
    <p class="note" style="margin:2px 4px 8px">${GE.acc ? 'Прогресс считается по балансу этого актива из «Капитала» — вносить вручную не нужно.' : 'Пополняйте цель через «+» на главном — вкладка «В цель».'}</p>` : `<p class="note" style="margin:10px 4px 8px">Пополняйте цель через «+» на главном — вкладка «В цель». Если копите на вкладе — добавьте его в «Капитал», и цель будет считаться по его балансу.</p>`}
    <div style="height:8px"></div><div class="stack"><button class="btn" data-act="gesave">${GE.id ? 'Сохранить' : 'Создать цель'}</button>${GE.id ? `<button class="btn danger" data-act="gedel">Удалить цель</button>` : ''}</div>`;
  const si = $('#ge-sum'); if (si) fitSum(si);
}
const fitSum = el => { const n = (el.value || '0').length; el.style.width = Math.max(1, n + .3) + 'ch'; const v = el.closest('.v'); if (v) v.style.fontSize = n > 9 ? '36px' : n > 6 ? '44px' : ''; };
function geSync() { if ($('#ge-n')) GE.n = $('#ge-n').value; if ($('#ge-sum')) GE.sumS = String(num($('#ge-sum').value)); }
function saveGoal() {
  ymGoal('goal_save');
  geSync();
  const sum = Math.round(num(GE.sumS) * 100), n = (GE.n || '').trim();
  if (!sum) { toast('Введите сумму'); return; }
  if (!n) { toast('Назовите цель'); $('#ge-n').focus(); return; }
  const nm = n[0].toUpperCase() + n.slice(1);
  let g = GE.id ? goalById(GE.id) : null;
  if (g) Object.assign(g, { n: nm, sum, d: GE.d || '', acc: GE.acc || null });
  else { g = { id: newId(), n: nm, sum, d: GE.d || '', acc: GE.acc || null, t: Date.now() }; GS().push(g); }
  if (g.done && goalSaved(g) < g.sum) g.done = '';
  save(); hapticOk(); close();
  if (tab === 'goals') render();
  if (stack.includes('#sheet2')) drawGoal(); else openGoal(g.id);
  toast(GE.id ? 'Сохранено' : 'Цель создана');
}
async function delGoal() {
  const g = goalById(GE.id); if (!g) return;
  const tx = goalTx(g);
  if (!(await confirmDlg(`Удалить цель «${g.n}»?${tx.length ? ' Пополнения тоже удалятся.' : ''}`, 'Удалить'))) return;
  S.goals = GS().filter(x => x.id !== g.id); S.tx = S.tx.filter(t => !(t.k === 'g' && t.g === g.id));
  save(); while (stack.length) close(); render(); toast('Цель удалена');
}

// ---------- карточка цели и план ----------
let GV = null;
function openGoal(id) { GV = id; delete GLIT[id]; drawGoal(); open('#sheet2'); }
function drawGoal() {
  const g = goalById(GV); if (!g) { if (stack.includes('#sheet2')) close(); return; }
  const s = goalSaved(g), pct = Math.min(100, g.sum ? s / g.sum * 100 : 0), a = goalAcc(g);
  let h = `<div class="grab"></div><div class="ghd"><h2 style="margin:4px 0 0">${esc(g.n)}</h2><button class="rb txt" data-act="gedit">Изменить</button></div>
    <div class="note" style="margin-top:2px">${g.done ? `Исполнено ${D(g.done).getDate()} ${MG[D(g.done).getMonth()]} ${D(g.done).getFullYear()}` : g.d ? `Срок — ${D(g.d).getDate()} ${MG[D(g.d).getMonth()]} ${D(g.d).getFullYear()}` : 'Без срока'}${a ? ` · копится на «${esc(a.n)}»` : ''}</div>
    ${goalDial(g, s, pct)}<div class="note" style="text-align:center;margin:0 0 18px">${s < g.sum ? `Осталось ${rub(g.sum - s, { round: true })}` : `Собрано ${rub(g.sum, { round: true })}`}</div>`;
  if (!a && !g.done) h += `<div class="b2 gact"><button class="btn" data-act="gadd" data-w="0">${ic('ui_plus')}Пополнить</button><button class="btn ghost" data-act="gadd" data-w="1">Снять</button></div>`;
  if (!g.done) h += g.plan ? planView(g) : `<button class="gplanb" data-act="gplan"><span class="ic">${ic('ui_compass')}</span><span class="t"><span class="n">Составить план</span><span class="s">Сколько откладывать, что дадут проценты и реально ли это с вашими доходами</span></span>${ic('ui_right', 'i chev')}</button>`;
  const tx = goalTx(g).sort((x, y) => x.d < y.d ? 1 : x.d > y.d ? -1 : y.t - x.t);
  if (tx.length && !a) h += `<h2>История</h2>` + tx.slice(0, 20).map(t => `<button class="row" data-act="edit" data-id="${t.id}"><span class="ic">${ic(t.w ? 'ui_minus' : 'ui_plus')}</span><span class="t"><span class="n">${esc(t.n || (t.w ? 'Снято' : 'Пополнение'))}</span><span class="s">${dayTitle(t.d)}</span></span><span class="a ${t.w ? '' : 'in'}">${t.w ? '−' : '+'}${rub(t.a)}</span></button>`).join('');
  $('#sheet2').innerHTML = h;
  animSegs($('#sheet2')); dialGo($('#sheet2'));
}
function planView(g) {
  const p = g.plan;
  return `<div class="gplan"><div class="ghd"><h2 style="margin:0">План</h2><button class="note gclr" data-act="gplanoff" style="margin:0">Убрать план</button></div>
    <div class="seg" style="margin:10px 0 12px"><button class="${p.mode !== 'pay' ? 'on' : ''}" data-act="gmode" data-m="date">К сроку</button><button class="${p.mode === 'pay' ? 'on' : ''}" data-act="gmode" data-m="pay">По силам</button></div>
    <div class="gin">${p.mode === 'pay' ? `<label><span>Откладываю в месяц</span><span class="f"><input id="gp-pay" inputmode="decimal" placeholder="0" value="${p.pay ? fmtN(String(p.pay / 100)) : ''}"> ₽</span></label>` : `<label class="datel"><span>Срок</span><span class="f">${g.d ? `${D(g.d).getDate()} ${MG[D(g.d).getMonth()].slice(0, 3)} ${D(g.d).getFullYear()}` : 'выбрать'}<input type="date" id="gp-d" value="${g.d || ''}" min="${key(addD(today(), 1))}"></span></label>`}
    <label><span>Ставка вклада</span><span class="f"><input id="gp-rate" inputmode="decimal" placeholder="0" value="${p.rate ? String(p.rate).replace('.', ',') : ''}"> % годовых</span></label></div>
    <div id="gp-res">${planRes(g)}</div></div>`;
}
function planRes(g) {
  const p = goalPlan(g);
  if (!p || p.empty) return `<p class="note">${g.plan.mode === 'pay' ? 'Впишите, сколько готовы откладывать в месяц.' : 'Выберите срок — посчитаю, сколько откладывать.'}</p>`;
  if (p.saved >= g.sum) return `<p class="gv ok"><i></i><span>Цель уже собрана.</span></p>`;
  let h = '', pay = p.pay;
  if (g.plan.mode === 'pay') {
    if (!p.n) return `<div class="gbig">Не хватит<small>даже за 50 лет — увеличьте сумму в месяц</small></div>`;
    h += `<div class="gbig">${cap(mLabel(mAhead(p.n)))}<small>через ${nMonths(p.n)}${p.rate && p.n0 && p.n0 > p.n ? ` · без процентов — ${mLabel(mAhead(p.n0))}` : ''}</small></div>`;
  } else {
    h += `<div class="gbig">${rub(pay, { round: true })}<small>в месяц, ${nMonths(p.n)}${p.rate && p.gain >= 100 ? ` · без процентов ${rub(p.pay0, { round: true })}, проценты добавят ${rub(p.gain, { round: true, short: true })}` : ''}</small></div>`;
  }
  // реалистичность
  const f = freeAvg();
  if (!f) h += `<p class="gv"><i></i><span>Записывайте доходы и расходы хотя бы месяц — тогда скажу, реально ли это.</span></p>`;
  else {
    const other = otherPlans(g), free = f.free - other, share = free > 0 ? pay / free : Infinity;
    const lvl = share <= .4 ? ['ok', 'Комфортно'] : share <= .7 ? ['mid', 'Напряжённо, но реально'] : share <= 1 ? ['hard', 'На пределе'] : ['no', 'Не сходится'];
    h += `<p class="gv ${lvl[0]}"><i></i><span><b>${lvl[1]}.</b> ${free > 0 ? `В среднем после трат остаётся ${rub(free, { round: true })} в месяц${other ? ' с учётом других целей' : ''} — план забирает ${Math.round(share * 100)}%.` : `За последние месяцы расходы ${other ? 'вместе с другими целями ' : ''}не меньше доходов — откладывать пока не из чего.`}</span></p>`;
    if (share > .7 && free > 0) {
      const half = free * .5, n2 = monthsNeed(g.sum, p.saved, half, p.rate);
      if (n2 && g.plan.mode !== 'pay') h += `<p class="gv sub"><i></i><span>Если откладывать половину свободного — ${rub(half, { round: true })} в месяц, цель будет ${mLabelTo(mAhead(n2))}.</span></p>`;
    }
    // где взять
    const tips = cutTips(f.rows);
    if (tips.length && share > .3) {
      const cut = tips.reduce((s, x) => s + x.v * .25, 0);
      let gainTxt = '';
      if (g.plan.mode === 'pay') { const n3 = monthsNeed(g.sum, p.saved, pay + cut, p.rate); if (n3 && p.n && p.n - n3 >= 1) gainTxt = ` — и цель на ${nMonths(p.n - n3)} ближе`; }
      else if (free > 0) gainTxt = ` — это ${Math.round(cut / pay * 100)}% от нужного взноса`;
      h += `<div class="gtip"><div class="hl">Где взять</div><p>${tips.map(x => `${CAT[x.c].n} — ${rub(x.v, { round: true })}`).join(', ')} в месяц. Минус четверть здесь даст ${rub(cut, { round: true })}${gainTxt}.</p></div>`;
    }
  }
  // ритм этого месяца — для целей, которые пополняются вручную
  if (!goalAcc(g) && pay) {
    const r = range('m', 0), got = goalTx(g).filter(t => t.d >= r.from && t.d <= r.to).reduce((s, t) => s + (t.w ? -t.a : t.a), 0);
    h += `<div class="gpace"><span>В ${MP[r.s.getMonth()]} отложено</span><b>${rub(Math.max(0, got), { round: true })} <em>из ${rub(pay, { round: true })}</em></b></div><div class="gbar sm"><i style="width:${Math.min(100, Math.max(0, got) / pay * 100).toFixed(1)}%"></i></div>`;
  }
  h += `<p class="note gleg">Это расчёт, а не рекомендация. Ставка по вкладу может измениться, с процентов сверх необлагаемого лимита удерживается НДФЛ.</p>`;
  return h;
}
function planInput() {
  const g = goalById(GV); if (!g || !g.plan) return;
  if ($('#gp-rate')) g.plan.rate = Math.min(60, num($('#gp-rate').value));
  if ($('#gp-pay')) g.plan.pay = Math.round(num($('#gp-pay').value) * 100);
  clearTimeout(planInput._t); planInput._t = setTimeout(() => { save(); if (tab === 'goals') renderGoals(); }, 600);
  $('#gp-res').innerHTML = planRes(g);
}
function goalAct(a, t) {
  if (a === 'gnew') { haptic(); openGoalEdit(); return true; }
  if (a === 'gcushion') { haptic(); openGoalEdit(null, { n: 'Подушка безопасности', sumS: String(Math.round(avgOut() * 3 / 100000) * 1000) }); return true; }
  if (a === 'gopen') { haptic(); openGoal(+t.dataset.id); return true; }
  if (a === 'gedit') { haptic(); openGoalEdit(GV); return true; }
  if (a === 'gesave') { saveGoal(); return true; }
  if (a === 'gedel') { delGoal(); return true; }
  if (a === 'gdclr') { geSync(); GE.d = ''; haptic(); drawGoalEdit(); return true; }
  if (a === 'geacc') { geSync(); GE.acc = t.dataset.id ? +t.dataset.id : null; haptic(); drawGoalEdit(); return true; }
  if (a === 'gadd') { haptic('medium'); openSheet(null, 'g', { goal: GV, w: t.dataset.w === '1' }); return true; }
  if (a === 'gplan') { const g = goalById(GV); g.plan = { mode: g.d ? 'date' : 'pay', rate: 0, pay: 0 }; save(); haptic(); drawGoal(); const i = $(g.d ? '#gp-rate' : '#gp-pay'); return true; }
  if (a === 'gplanoff') { const g = goalById(GV); delete g.plan; save(); haptic(); drawGoal(); render(); return true; }
  if (a === 'gmode') { const g = goalById(GV); if (g.plan.mode === t.dataset.m) return true; g.plan.mode = t.dataset.m; save(); haptic(); drawGoal(); render(); return true; }
  if (a === 'gpick') { F.goal = +t.dataset.id; haptic(); document.querySelectorAll('#f-goals .chip').forEach(b => b.classList.toggle('on', +b.dataset.id === F.goal)); return true; }
  if (a === 'gw') { F.w = t.dataset.w === '1'; haptic(); F.amt = F.amt; F.note = $('#f-note').value; drawSheet(); return true; }
  if (a === 'gnewin') { haptic(); while (stack.length) close(); goTab('goals'); setTimeout(() => openGoalEdit(), 200); return true; }
  return false;
}
function goalChange(e) {
  if (e.target.id === 'ge-d') { geSync(); GE.d = e.target.value || ''; drawGoalEdit(); return true; }
  if (e.target.id === 'gp-d') { const g = goalById(GV); g.d = e.target.value || ''; save(); drawGoal(); render(); return true; }
  return false;
}
function goalInput(e) {
  if (e.target.id === 'gp-rate') { planInput(); return true; }
  if (e.target.id === 'ge-sum' || e.target.id === 'gp-pay') { const el = e.target, raw = el.value.replace(/[^\d,.]/g, '').replace('.', ','), [i, d] = raw.split(','); const v = fmtN(i || '') + (d !== undefined ? ',' + d.slice(0, 2) : ''); if (v !== el.value) el.value = v; if (el.id === 'ge-sum') fitSum(el); else planInput(); return true; }
  if (e.target.id === 'gp-pay') return true;
  return false;
}
// пополнение — проверить, не собрана ли цель
function goalAfterAdd(gid) {
  const g = goalById(gid); if (!g) return;
  if (!g.done && goalSaved(g) >= g.sum) {
    g.done = todayK(); save();
    const first = goalTx(g).reduce((m, t) => t.d < m ? t.d : m, todayK()), n = Math.max(1, monthsBetween(first, todayK()));
    setTimeout(() => goalDone(g, n), 400);
  } else if (g.done && goalSaved(g) < g.sum) { g.done = ''; save(); }
}
const monthsBetween = (a, b) => { const x = D(a), y = D(b); return (y.getFullYear() - x.getFullYear()) * 12 + y.getMonth() - x.getMonth(); };
function goalDone(g, n) {
  hapticOk();
  $('#sheet2').innerHTML = `<div class="grab"></div><div class="gdone"><div class="gmark on">${ic('ui_goal')}</div><div class="hl">Исполнено</div><h2>${esc(g.n)}</h2><p>${rub(g.sum, { round: true })} — за ${nMonths(n)}.<br>Тихо, спокойно, по плану.</p></div><div class="stack"><button class="btn" data-act="close2">Прекрасно</button></div>`;
  GV = g.id; if (!stack.includes('#sheet2')) open('#sheet2');
}
function goTab(n) {
  if (n === 'more' && typeof MSUB !== 'undefined') MSUB = null;
  tab = n;
  document.querySelectorAll('.tabs [data-tab]').forEach(b => b.classList.toggle('on', b.dataset.tab === tab));
  SCREENS.forEach(s => $('#s-' + s).classList.toggle('hidden', s !== tab)); moveInd(); render();
}
const SCREENS = ['home', 'an', 'goals', 'cap', 'more'];
// ================= «Можно тратить сегодня» =================
let DAILY = (() => { try { return localStorage.getItem('konta_daily') !== '0'; } catch (e) { return true; } })();
function dailyCalc() {
  const r = range('m', 0), tk = todayK();
  let inc = total(sel('in', r.from, r.to)), src = 'month';
  if (!inc) { const f = freeAvg(); if (f && f.inc) { inc = f.inc; src = 'avg'; } }
  if (!inc) return null;
  const before = total(sel('out', r.from, key(addD(today(), -1)))), todayOut = total(sel('out', tk, tk));
  const gNet = S.tx.filter(t => t.k === 'g' && t.d >= r.from && t.d <= r.to).reduce((s, t) => s + (t.w ? -t.a : t.a), 0);
  const plan = GS().filter(g => !g.done && g.plan).reduce((s, g) => { const p = goalPlan(g); return s + (p && p.pay ? p.pay : 0); }, 0);
  const goalsLeft = Math.max(0, plan - Math.max(0, gNet));
  const daysLeft = r.days - today().getDate() + 1;
  const avail = inc - before - Math.max(0, gNet) - goalsLeft;
  const per = Math.max(0, Math.floor(avail / daysLeft / 100) * 100);
  return { inc, src, before, todayOut, gNet, goalsLeft, daysLeft, avail, per, left: per - todayOut };
}
function dailyRow() {
  if (!DAILY) return '';
  const d = dailyCalc();
  if (!d) return `<button class="daily hint" data-act="dailyinc"><span class="dl"><span>Можно тратить сегодня</span></span><span class="dn">Добавьте доход, и я посчитаю дневной ориентир</span></button>`;
  if (d.avail <= 0) return `<button class="daily over" data-act="daily"><span class="dl"><span>Можно тратить сегодня</span><b>0 ₽</b></span><span class="dn">Бюджет месяца исчерпан</span></button>`;
  const pct = d.per ? Math.min(100, d.todayOut / d.per * 100) : 100, over = d.left < 0;
  const tomorrow = d.daysLeft > 1 ? Math.max(0, Math.floor((d.avail - d.todayOut) / (d.daysLeft - 1) / 100) * 100) : 0;
  return `<button class="daily ${over ? 'over' : ''}" data-act="daily"><span class="dl"><span>${over ? 'Сверх дневного' : 'Можно тратить сегодня'}</span><b>${rub(Math.abs(d.left), { round: true })}</b>${over ? '' : `<em>из ${rub(d.per, { round: true })}</em>`}</span>
    <span class="dbar"><i style="width:${pct.toFixed(1)}%"></i></span>${over && d.daysLeft > 1 ? `<span class="dn">Завтра — ${rub(tomorrow, { round: true })} в день</span>` : ''}</button>`;
}
function dailyInfo() {
  const d = dailyCalc(); if (!d) return;
  haptic();
  const ln = (a, b, c = '') => `<div class="dline ${c}"><span>${a}</span><b>${b}</b></div>`;
  $('#sheet2').innerHTML = `<div class="grab"></div><h2 style="margin-top:4px">Можно тратить сегодня</h2>
    <p class="note" style="margin:6px 2px 14px;line-height:1.5">Спокойный ориентир: сколько можно тратить каждый день, чтобы месяц сошёлся и цели шли по плану.</p>
    <div class="dcalc">${ln(d.src === 'avg' ? 'Доход — в среднем за месяц' : 'Доход за месяц', rub(d.inc, { round: true }))}${ln('Потрачено до сегодня', '− ' + rub(d.before, { round: true }))}${d.gNet > 0 ? ln('Отложено в цели', '− ' + rub(d.gNet, { round: true })) : ''}${d.goalsLeft ? ln('Ещё отложить по планам целей', '− ' + rub(d.goalsLeft, { round: true })) : ''}${ln(`Осталось на ${d.daysLeft} ${plural(d.daysLeft, 'день', 'дня', 'дней')}`, rub(Math.max(0, d.avail), { round: true }), 'sum')}${ln('В день', rub(d.per, { round: true }), 'sum')}</div>
    ${d.src === 'avg' ? '<p class="note" style="margin:10px 2px 0">Доходов в этом месяце пока нет — беру средний за прошлые месяцы.</p>' : ''}
    <div style="height:16px"></div><div class="stack"><button class="btn ghost" data-act="dailytog">Скрыть с главного экрана</button></div>
    <p class="note" style="text-align:center;margin-top:10px">Вернуть можно в Настройках → Главный экран</p>`;
  open('#sheet2');
}
function dailyToggle() {
  DAILY = !DAILY; try { localStorage.setItem('konta_daily', DAILY ? '1' : '0'); } catch (e) {}
  haptic();
  if (stack.includes('#sheet2')) close();
  const sc = $('#s-' + tab), y = sc ? sc.scrollTop : 0, row = document.querySelector('.themes'), sl = row ? row.scrollLeft : 0;
  render(); if (sc) sc.scrollTop = y; const nr = document.querySelector('.themes'); if (nr) nr.scrollLeft = sl;
  if (tab === 'home' && !DAILY) toast('Скрыто. Вернуть — в Настройках');
}
const dailySetRow = () => `<button class="row" data-act="dailytog"><span class="ic"><svg class="i" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/></svg></span><span class="t"><span class="n">Можно тратить сегодня</span><span class="s">Дневной ориентир на главном экране</span></span><span class="sw2 ${DAILY ? 'on' : ''}"><i></i></span></button>`;

// ================= Оттиск печати при закрытии дня =================
const ROM = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'];
function sealStamp() {
  if (CALM) return;
  const d = today(), el = document.createElement('div');
  el.className = 'seal';
  el.innerHTML = `<svg viewBox="0 0 200 200"><defs><path id="sealc" d="M100,100 m-72,0 a72,72 0 1,1 144,0 a72,72 0 1,1 -144,0"/></defs>
    <circle cx="100" cy="100" r="92" fill="none" stroke-width="2.4"/><circle cx="100" cy="100" r="84" fill="none" stroke-width=".9"/><circle cx="100" cy="100" r="56" fill="none" stroke-width=".9"/>
    <text font-size="13" letter-spacing="4.2"><textPath href="#sealc" startOffset="2%">KONTA &amp; CIE · PRIVATE FINANCE · KONTA &amp; CIE ·</textPath></text>
    <text x="100" y="94" text-anchor="middle" font-size="15" letter-spacing="3">ЗАКРЫТО</text>
    <text x="100" y="118" text-anchor="middle" font-size="17" letter-spacing="1.5">${d.getDate()} · ${ROM[d.getMonth()]} · ${String(d.getFullYear()).slice(2)}</text></svg>`;
  document.body.appendChild(el);
  setTimeout(() => haptic('heavy'), 240);
  setTimeout(() => el.remove(), 2100);
}

// ================= Гравюры для пустых экранов =================
function engr(kind = 'alps') {
  if (kind === 'gear') {
    let t = ''; for (let i = 0; i < 24; i++) { const a = i / 24 * Math.PI * 2; t += `<path d="M${(120 + 40 * Math.cos(a)).toFixed(1)},${(62 + 40 * Math.sin(a)).toFixed(1)} L${(120 + 47 * Math.cos(a)).toFixed(1)},${(62 + 47 * Math.sin(a)).toFixed(1)}"/>`; }
    return `<svg class="engr" viewBox="0 0 240 124"><defs><pattern id="eh" width="3.2" height="3.2" patternUnits="userSpaceOnUse" patternTransform="rotate(35)"><path d="M0 0V3.2" stroke-width=".7"/></pattern></defs>
      <circle cx="120" cy="62" r="40" fill="url(#eh)"/><circle cx="120" cy="62" r="40" fill="none"/>${t}<circle cx="120" cy="62" r="22" fill="#000" fill-opacity=".55"/><circle cx="120" cy="62" r="22" fill="none"/><circle cx="120" cy="62" r="5"/>
      <circle cx="176" cy="88" r="20" fill="url(#eh)"/><circle cx="176" cy="88" r="20" fill="none"/><circle cx="176" cy="88" r="3"/><circle cx="72" cy="94" r="14" fill="none"/><circle cx="72" cy="94" r="14" fill="url(#eh)"/><circle cx="72" cy="94" r="2.5"/></svg>`;
  }
  const lines = []; for (let y = 40; y < 108; y += 3.4) lines.push(`<path d="M0 ${y.toFixed(1)}H240"/>`);
  return `<svg class="engr" viewBox="0 0 240 124"><defs><clipPath id="em"><path d="M0 108 L46 58 L62 70 L96 30 L124 62 L140 50 L184 92 L204 78 L240 108Z"/></clipPath>
      <pattern id="eh2" width="3" height="3" patternUnits="userSpaceOnUse" patternTransform="rotate(-38)"><path d="M0 0V3" stroke-width=".6"/></pattern></defs>
    <circle cx="176" cy="34" r="13" fill="none"/><g stroke-width=".5">${[...Array(6)].map((_, i) => `<path d="M${163 + i * 0.2} ${28 + i * 3}H${189 - i * 0.2}"/>`).join('')}</g>
    <g clip-path="url(#em)" stroke-width=".55">${lines.join('')}</g><path d="M96 30 L106 42 L101 41 L96 47 L91 42 L86 44Z" fill="url(#eh2)"/>
    <path d="M0 108 L46 58 L62 70 L96 30 L124 62 L140 50 L184 92 L204 78 L240 108" fill="none"/><path d="M20 108H220" stroke-width=".5"/><path d="M60 114H180" stroke-width=".4"/></svg>`;
}

// ================= Каскад при входе на экран =================
let ENTER_KEY = '';
function enterFx() {
  if (CALM) return;
  const k = tab + '|' + (tab === 'home' ? mOff + hMode : tab === 'an' ? aType + aOff : '');
  if (k === ENTER_KEY) return;
  ENTER_KEY = k;
  const sc = $('#s-' + tab); if (!sc) return;
  sc.classList.remove('enter'); sc.offsetWidth; sc.classList.add('enter');
  [...sc.querySelectorAll('.row,.gcard,.line,.crow')].slice(0, 14).forEach((r, i) => r.style.animationDelay = `${60 + i * 28}ms`);
  sc.querySelectorAll('.bars').forEach(b => [...b.querySelectorAll('i')].forEach((x, i, a) => x.style.animationDelay = `${100 + i / a.length * 380}ms`));
  sc.querySelectorAll('.wd i').forEach((x, i) => x.style.animationDelay = `${120 + i * 40}ms`);
  clearTimeout(enterFx._t); enterFx._t = setTimeout(() => sc.classList.remove('enter'), 1400);
}
// ================= Privacy =================
let PRIV = (() => { try { return localStorage.getItem('konta_priv') === '1'; } catch (e) { return false; } })();
document.body.classList.toggle('priv', PRIV);
function togglePriv() {
  PRIV = !PRIV; try { localStorage.setItem('konta_priv', PRIV ? '1' : '0'); } catch (e) {}
  document.body.classList.toggle('priv', PRIV); haptic('medium'); render();
}

// ================= Face ID (Telegram BiometricManager) =================
const BM = tg && tg.BiometricManager && tg.isVersionAtLeast && tg.isVersionAtLeast('7.2') ? tg.BiometricManager : null;
let BIO = (() => { try { return localStorage.getItem('konta_bio') === '1'; } catch (e) { return false; } })();
let bioReady = false, bioAvail = false, bioType = 'Face ID';
function bioInit(cb) {
  if (!BM) { cb && cb(); return; }
  if (bioReady) { cb && cb(); return; }
  try { BM.init(() => { bioReady = true; bioAvail = !!BM.isBiometricAvailable; bioType = BM.biometricType === 'finger' ? 'Touch ID' : 'Face ID'; cb && cb(); }); } catch (e) { cb && cb(); }
}
function showLock() {
  if ($('#lock')) return;
  const d = document.createElement('div'); d.id = 'lock';
  d.innerHTML = `<div class="wm"><b>Konta</b><i>&amp; Cie</i></div><button class="btn ghost" data-act="unlock" style="width:auto;padding:0 28px;margin-top:40px">${ic('ui_face')}Разблокировать</button>`;
  document.body.appendChild(d);
}
function hideLock() { const d = $('#lock'); if (d) { d.classList.add('out'); setTimeout(() => d.remove(), 500); } }
function unlock() {
  if (!BM) { hideLock(); return; }
  bioInit(() => {
    if (!bioAvail) { hideLock(); return; }
    try { BM.authenticate({ reason: 'Вход в Konta' }, ok => { if (ok) { hapticOk(); hideLock(); } }); } catch (e) { hideLock(); }
  });
}
function toggleBio() {
  if (!BM) { toast('Face ID работает внутри Telegram'); return; }
  bioInit(() => {
    if (!bioAvail) { toast('Биометрия недоступна на этом устройстве'); return; }
    if (BIO) { BIO = false; try { localStorage.setItem('konta_bio', '0'); } catch (e) {} render(); toast('Вход по Face ID выключен'); return; }
    const enable = () => { BIO = true; try { localStorage.setItem('konta_bio', '1'); } catch (e) {} render(); toast(`Вход по ${bioType} включён`); };
    if (BM.isAccessGranted) enable();
    else BM.requestAccess({ reason: 'Чтобы защищать Konta' }, ok => ok ? enable() : toast('Доступ не выдан'));
  });
}

// ================= Base currency =================
const BASES = ['RUB', 'USD', 'EUR', 'CHF'];
const BSYM = { RUB: '₽', USD: '$', EUR: '€', CHF: 'CHF' };
const baseCur = () => (S.base && BASES.includes(S.base)) ? S.base : 'RUB';
const baseOk = () => baseCur() === 'RUB' || rate(baseCur()) > 0;
const cconv = k => baseOk() && baseCur() !== 'RUB' ? k / rate(baseCur()) : k;
const bsym = () => baseOk() ? BSYM[baseCur()] : '₽';
const cfmt = (k, o = {}) => rub(cconv(k), { ...o, sym: bsym() });
function setBase(c) { S.base = c; save(); haptic(); if (c !== 'RUB' && !rate(c)) { fetchRates(true); toast(`Нужен курс ${c} — обновляю`); } render(); }

// ================= Quick add =================
function frequent(kind) {
  const from = key(addD(today(), -90)), g = {};
  S.tx.filter(t => t.k === kind && t.n && t.d >= from).forEach(t => {
    const k = t.n.trim().toLowerCase(); const e = g[k] || (g[k] = { n: t.n.trim(), c: t.c, a: t.a, cnt: 0, last: 0 });
    e.cnt++; if (t.t > e.last) { e.last = t.t; e.a = t.a; e.c = t.c; }
  });
  return Object.values(g).filter(e => e.cnt >= 2).sort((a, b) => b.cnt - a.cnt || b.last - a.last).slice(0, 8);
}
function quickAdd(i) {
  const e = (F && F.quick || [])[i]; if (!e) return;
  const d = F.date || todayK();
  const rec = { id: newId(), k: F.kind, a: e.a, n: e.n, c: e.c, d, t: Date.now() };
  S.tx.push(rec); save(); hapticOk(); while (stack.length) close(); hMode = F.kind; render();
  toast(`${F.kind === 'in' ? '+' : ''}${rub(e.a)} · ${e.n}`, () => { S.tx = S.tx.filter(x => x.id !== rec.id); save(); render(); });
}

// ================= Monthly report =================
function userName() { try { return (tg && tg.initDataUnsafe && tg.initDataUnsafe.user && tg.initDataUnsafe.user.first_name) || ''; } catch (e) { return ''; } }
function openReport(off = -1) {
  const r = range('m', off), p = range('m', off - 1);
  const outs = sel('out', r.from, r.to), ins = sel('in', r.from, r.to);
  const spent = total(outs), income = total(ins), pSpent = total(sel('out', p.from, p.to)), pIn = total(sel('in', p.from, p.to));
  const saved = income - spent, savedPct = income ? Math.round(saved / income * 100) : null;
  const byc = {}; outs.forEach(t => byc[t.c] = (byc[t.c] || 0) + t.a);
  const top = Object.entries(byc).sort((a, b) => b[1] - a[1])[0];
  const bigT = [...outs].sort((a, b) => b.a - a.a)[0];
  const h0 = [...S.capHist].reverse().find(x => x.d < r.from), h1 = [...S.capHist].reverse().find(x => x.d <= r.to);
  const mName = M[r.s.getMonth()], nm = userName();
  const dlt = (c, pv, good) => pv ? ` <span class="${(c > pv) === good ? 'c-sage' : 'c-clay'}">${c > pv ? '+' : '−'}${Math.abs(Math.round((c - pv) / pv * 100))}%</span>` : '';
  let verdict;
  if (!spent && !income) verdict = 'В этом месяце операций не было.';
  else if (pSpent && spent < pSpent) verdict = `Расходы ниже, чем месяцем ранее, на ${rub(pSpent - spent, { round: true })}. Хороший месяц.`;
  else if (pSpent && top) verdict = `Расходы выше, чем месяцем ранее. Больше всего ушло на «${CAT[top[0]].n}».`;
  else verdict = 'Первый месяц в Konta — дальше будет с чем сравнить.';
  let h = `<div class="grab"></div><div class="letter">
    <div class="wm sm" style="margin:6px 0 2px"><b>Konta</b><i>&amp; Cie</i></div>
    <div class="ver" style="margin-bottom:26px">${cap(mName)} ${r.s.getFullYear()} · итоги месяца</div>
    <p class="lead">${nm ? esc(nm) + ', в' : 'В'}от как прошёл ${mName}.</p>
    <div class="kvl"><span>Расходы</span><b>${rub(spent, { round: true })}${dlt(spent, pSpent, false)}</b></div>
    <div class="kvl"><span>Доходы</span><b>${rub(income, { round: true })}${dlt(income, pIn, true)}</b></div>
    <div class="kvl"><span>Отложено</span><b class="${saved < 0 ? 'c-clay' : ''}">${savedPct === null ? '—' : `${Math.max(savedPct, 0)}% · ${rub(saved, { round: true, sign: true })}`}</b></div>
    ${h0 && h1 && h0.v ? `<div class="kvl"><span>Капитал</span><b>${cfmt(h1.v, { round: true, short: true })} <span class="${h1.v >= h0.v ? 'c-sage' : 'c-clay'}">${h1.v >= h0.v ? '+' : '−'}${Math.abs(Math.round((h1.v - h0.v) / h0.v * 1000) / 10).toString().replace('.', ',')}%</span></b></div>` : ''}
    ${top ? `<div class="kvl"><span>Больше всего</span><b>${CAT[top[0]].n} · ${rub(top[1], { round: true })}</b></div>` : ''}
    ${bigT ? `<div class="kvl"><span>Крупнейшая трата</span><b>${esc(bigT.n || catOf(bigT).n)} · ${rub(bigT.a, { round: true })}</b></div>` : ''}
    <p class="lead" style="margin-top:22px">${verdict}</p>
    <p class="sign">С уважением,<br><span class="wm sm" style="display:inline-flex;margin:4px 0 0"><b>Konta</b><i>&amp; Cie</i></span></p>
  </div><div style="height:12px"></div><button class="btn" data-act="close2">Благодарю</button>`;
  $('#sheet2').innerHTML = h; $('#sheet2').scrollTop = 0; open('#sheet2');
}
function maybeReport() {
  const p = range('m', -1), k = p.from.slice(0, 7);
  if (S.lastReport === k || !S.onb) return;
  if (sel('out', p.from, p.to).length + sel('in', p.from, p.to).length < 3) return;
  S.lastReport = k; save(); setTimeout(() => openReport(-1), 500);
}

// ================= Onboarding =================
function showOnboarding() {
  const d = document.createElement('div'); d.id = 'onb';
  d.innerHTML = `<div class="slides" id="slides">
    <section><div class="wm"><b>Konta</b><i>&amp; Cie</i></div><h3>Частный учёт<br>ваших денег</h3><p>Траты, доходы и капитал — в одном спокойном месте.</p></section>
    <section><div class="demo"><div class="dnum">280<small>₽</small></div><div class="dchip">${ic('cafe')}Кофе</div></div><h3>Записывайте<br>за секунду</h3><p>Сумма, и всё — категорию приложение поймёт само. Или загрузите выписку из банка.</p></section>
    <section><div class="demo">${ic('ui_face', 'i big')}</div><h3>Только<br>для вас</h3><p>${inTG ? 'Данные в облаке Telegram. Вход по Face ID и скрытие сумм одним касанием.' : 'Данные зашифрованы и видны только вам. Скрытие сумм одним касанием.'}</p></section>
  </div>
  <div class="dots"><i class="on"></i><i></i><i></i></div>
  <div class="onb-cta"><button class="btn" data-act="onbnext">Далее</button><div class="onb-more"></div></div>`;
  document.body.appendChild(d);
  const sl = $('#slides');
  sl.addEventListener('scroll', () => { const i = Math.round(sl.scrollLeft / sl.clientWidth); onbStep(i); }, { passive: true });
}
let onbI = 0;
function onbStep(i) {
  if (i === onbI) return; onbI = i;
  document.querySelectorAll('#onb .dots i').forEach((x, j) => x.classList.toggle('on', j === i));
  const last = i === 2;
  $('#onb .onb-cta .btn').textContent = last ? 'Записать первую трату' : 'Далее';
  $('#onb .onb-cta .btn').dataset.act = last ? 'onbadd' : 'onbnext';
  $('#onb .onb-more').innerHTML = last ? `${SYNC_API && !inTG && !SESS ? '<button data-act="onblogin">Уже пользуюсь ботом — войти</button>' : ''}<button data-act="onbimport">Загрузить выписку</button><button data-act="onbdemo">Посмотреть на демо</button>` : '';
  if (LANG === 'en') translateTree($('#onb'));
}
function onbDone() { S.onb = true; save(); const d = $('#onb'); if (d) { d.classList.add('out'); setTimeout(() => d.remove(), 450); } }

// ================= Settings block =================
// Иконка на экране «Домой» (Telegram Bot API 8.0+)
let HS = 'unsupported';
const STANDALONE = (() => { try { return matchMedia('(display-mode: standalone)').matches || navigator.standalone === true; } catch (e) { return false; } })();
function webAppHelp() {
  const ios = /iPhone|iPad|iPod/.test(navigator.userAgent) || (tg && tg.platform === 'ios');
  const steps = ios
    ? [['ui_import', 'Откройте kontacie.com в Safari — кнопка ниже'], ['ui_plus', 'Нажмите «Поделиться» → «На экран "Домой"» → «Добавить»'], ['ui_check', 'Откройте Konta с иконки → Ещё → «Войти через Telegram»']]
    : [['ui_import', 'Откройте kontacie.com в браузере — кнопка ниже'], ['ui_plus', 'Меню ⋮ → «Установить приложение» или «Добавить на главный экран»'], ['ui_check', 'Откройте Konta с иконки → Ещё → «Войти через Telegram»']];
  $('#sheet2').innerHTML = `<div class="grab"></div><h2 style="margin-top:6px">Konta на экране «Домой»</h2>
    <p class="note" style="margin:-2px 0 14px">Отдельное приложение с иконкой: открывается на весь экран, без Telegram. Траты те же, что здесь, — синхронизируются сами.</p>
    <div class="impn">${steps.map(([i, t], n) => `<p>${ic(i)}<span><b>${n + 1}.</b> ${t}</span></p>`).join('')}</div>
    <p class="note" style="margin-top:14px">${ios ? 'Важно открыть именно в Safari: из Telegram и других браузеров iPhone не даст добавить на экран «Домой».' : 'Подойдёт Chrome или любой браузер с пунктом «Установить приложение».'}</p>
    <div style="height:14px"></div><div class="stack"><button class="btn" data-act="openweb">Открыть kontacie.com</button><button class="btn ghost" data-act="close2">Позже</button></div>`;
  open('#sheet2');
}
function pwaHelp() {
  const ios = /iPhone|iPad|iPod/.test(navigator.userAgent);
  $('#sheet2').innerHTML = `<div class="grab"></div><h2 style="margin-top:6px">На экран «Домой»</h2>
    <div class="impn">${(ios ? [['ui_import', 'Нажмите «Поделиться» внизу Safari'], ['ui_plus', 'Выберите «На экран "Домой"»'], ['ui_check', 'Нажмите «Добавить» — появится иконка Konta']]
      : [['ui_more', 'Откройте меню браузера ⋮'], ['ui_plus', 'Выберите «Установить приложение» или «Добавить на главный экран»'], ['ui_check', 'Подтвердите — появится иконка Konta']]).map(([i, t]) => `<p>${ic(i)}<span>${t}</span></p>`).join('')}</div>
    <p class="note" style="margin-top:14px">С экрана «Домой» Konta открывается без адресной строки и работает без интернета.</p>
    <div style="height:14px"></div><button class="btn" data-act="close2">Понятно</button>`;
  open('#sheet2');
}
function hsInit() {
  try {
    if (!tg || !tg.isVersionAtLeast || !tg.isVersionAtLeast('8.0') || !tg.checkHomeScreenStatus) return;
    tg.checkHomeScreenStatus(st => { HS = st || 'unsupported'; if (tab === 'more') render(); });
    tg.onEvent('homeScreenAdded', () => { HS = 'added'; toast('Иконка добавлена'); hapticOk(); if (tab === 'more') render(); });
  } catch (e) {}
}
function addHome() { try { tg.addToHomeScreen(); } catch (e) { toast('Обновите Telegram'); } }
function settingsFeat() {
  return `${syncSection()}${botRow()}<h2>Приватность</h2>
    <button class="row" data-act="priv"><span class="ic">${ic(PRIV ? 'ui_eyeoff' : 'ui_eye')}</span><span class="t"><span class="n">Скрывать суммы</span><span class="s">Или коснитесь крупной суммы на любом экране</span></span><span class="sw2 ${PRIV ? 'on' : ''}"><i></i></span></button>
    ${inTG || (SYNC_API && SESS) ? '' : `<p class="note" style="margin:2px 0 10px">${SYNC_API ? 'Пока вы не вошли через Telegram, данные хранятся только на этом устройстве.' : 'Веб-версия хранит данные только на этом устройстве. Раз в месяц делайте экспорт в CSV.'}</p>`}
    ${inTG ? `<button class="row" data-act="bio"><span class="ic">${ic('ui_face')}</span><span class="t"><span class="n">Вход по Face ID</span><span class="s">${BM ? 'Через Telegram' : 'Доступно внутри Telegram'}</span></span><span class="sw2 ${BIO ? 'on' : ''}"><i></i></span></button>` : ''}
    <h2>Валюта капитала</h2><div class="seg" style="margin-top:2px">${BASES.map(c => `<button class="${baseCur() === c ? 'on' : ''}" data-act="base" data-c="${c}">${c}</button>`).join('')}</div>
    ${!inTG && !STANDALONE ? `<h2>Быстрый доступ</h2><button class="row" data-act="pwahelp"><span class="ic">${ic('ui_plus')}</span><span class="t"><span class="n">Установить на экран «Домой»</span><span class="s">Откроется на весь экран, как обычное приложение</span></span>${ic('ui_right', 'i chev')}</button>` : ''}
    ${inTG ? `<h2>Быстрый доступ</h2><button class="row" data-act="webapphelp"><span class="ic">${ic('ui_overview')}</span><span class="t"><span class="n">Приложение на экране «Домой»</span><span class="s">kontacie.com — на весь экран, без Telegram</span></span>${ic('ui_right', 'i chev')}</button>` : ''}
    ${HS === 'missed' || HS === 'unknown' ? `${inTG ? '' : '<h2>Быстрый доступ</h2>'}<button class="row" data-act="homescreen"><span class="ic">${ic('ui_plus')}</span><span class="t"><span class="n">Добавить на экран «Домой»</span><span class="s">Konta & Cie откроется одним касанием, как обычное приложение</span></span>${ic('ui_right', 'i chev')}</button>` : ''}
    <h2>Банк</h2>
    <button class="row" data-act="import"><span class="ic">${ic('ui_import')}</span><span class="t"><span class="n">Импорт выписки</span><span class="s">PDF или CSV · можно сразу несколько банков</span></span>${ic('ui_right', 'i chev')}</button>
    <button class="row" data-act="report"><span class="ic">${ic('ui_letter')}</span><span class="t"><span class="n">Итоги прошлого месяца</span><span class="s">Письмо от Konta & Cie</span></span>${ic('ui_right', 'i chev')}</button>
    ${(S.imports || []).length ? (() => { const L = S.imports[S.imports.length - 1], n = S.tx.filter(t => t.im === L.im).length; return n ? `<button class="row" data-act="undoimp" data-im="${L.im}"><span class="ic">${ic('ui_back')}</span><span class="t"><span class="n">Отменить последний импорт</span><span class="s">${L.banks.join(', ')} · ${fmtN(String(n))} ${plural(n, 'операция', 'операции', 'операций')}</span></span></button>` : ''; })() : ''}
    <input type="file" id="imp-in" accept=".pdf,.csv,.txt,application/pdf,text/csv" multiple hidden>`;
}

const botRow = () => `<button class="row" data-act="botwrite"><span class="ic"><svg class="i" viewBox="0 0 24 24"><path d="M20.5 4.5 3.8 11c-.9.4-.9 1.6 0 1.9l4.1 1.4 1.6 5c.3.8 1.3 1 1.9.4l2.3-2.2 4.2 3.1c.7.5 1.7.1 1.9-.7l2.7-13.6c.2-1-.8-1.8-1.7-1.4z"/><path d="m8 14.3 9-7"/></svg></span><span class="t"><span class="n">Записывать сообщением</span><span class="s">Напишите боту «кофе 350» — трата появится здесь</span></span>${ic('ui_right', 'i chev')}</button>`;
function botWrite() {
  haptic();
  $('#sheet2').innerHTML = `<div class="grab"></div><h2 style="margin-top:4px">Траты сообщением</h2>
    <p class="note" style="margin:8px 2px 14px;font-size:14px;line-height:1.55">Не открывая приложение — просто напишите @KontaCieBot. Категорию бот подберёт сам, запись появится здесь при следующей синхронизации.</p>
    <div class="botex">${['кофе 350', 'такси 600 вчера', '+80 000 зарплата', '$25 подписка', 'продукты 1 240\nаптека 380'].map(x => `<code>${esc(x).replace(/\n/g, '<br>')}</code>`).join('')}</div>
    <p class="note" style="margin:12px 2px 18px">Несколько трат — каждая с новой строки. Под ответом бота есть кнопки «Категория» и «Отменить». /today — итог за сегодня.</p>
    <div class="stack"><button class="btn" data-act="openbot">Открыть @KontaCieBot</button></div>`;
  open('#sheet2');
}

// ================= «Ещё»: короткий главный экран + группы =================
let MSUB = null;
const MSUB_T = { look: 'Оформление', home: 'Главный экран', budget: 'Бюджет и валюта', priv: 'Приватность', data: 'Данные' };
const mRow = (act, icon, n, s, v, extra = '') => `<button class="row" data-act="${act}"${extra}><span class="ic">${icon}</span><span class="t"><span class="n">${n}</span>${s ? `<span class="s">${s}</span>` : ''}</span>${v ? `<span class="rv">${v}</span>` : ''}${ic('ui_right', 'i chev')}</button>`;
const mGrp = (s, icon, n, v) => mRow('msub', ic(icon), n, '', v, ` data-s="${s}"`);
function mProfile() {
  if (!SYNC_API) return '';
  if (inTG) return `<div class="row mprof" data-act="synctap"><span class="ic">${ic('ui_check')}</span><span class="t"><span class="n">Бот и сайт связаны</span><span class="s" id="sync-s">${syncLine()}</span></span></div>`;
  if (!SESS) return `<button class="row mprof" data-act="login"><span class="ic">${ic('ui_import')}</span><span class="t"><span class="n">Войти через Telegram</span><span class="s">Те же данные, что в боте @${BOT_NAME}</span></span>${ic('ui_right', 'i chev')}</button>`;
  return `<div class="row mprof" data-act="synctap"><span class="ic">${ic('ui_check')}</span><span class="t"><span class="n">${esc(SUSER && SUSER.username ? '@' + SUSER.username : SUSER && SUSER.name || 'Telegram')}</span><span class="s" id="sync-s">${syncLine()}</span></span><button class="rb txt" data-act="logout">Выйти</button></div>`;
}
function mHomeRows() {
  let h = '';
  if (!inTG && !STANDALONE) h += mRow('pwahelp', ic('ui_plus'), 'Установить на экран «Домой»', 'Откроется на весь экран, как обычное приложение');
  if (inTG) h += mRow('webapphelp', ic('ui_overview'), 'Приложение на экране «Домой»', 'kontacie.com, на весь экран, без Telegram');
  if (HS === 'missed' || HS === 'unknown') h += mRow('homescreen', ic('ui_plus'), 'Добавить на экран «Домой»', 'Konta & Cie откроется одним касанием');
  return h ? `<h2>Быстрый доступ</h2>${h}` : '';
}
function mMain() {
  const ids = Object.keys(S.limits).filter(id => CAT[id]).length;
  const homeOn = [DAILY].filter(Boolean).length;
  return `<header class="hdr"><div><h1>Настройки</h1></div></header>
    ${mProfile()}
    <h2>Каждый день</h2>${mRow('botwrite', '<svg class="i" viewBox="0 0 24 24"><path d="M20.5 4.5 3.8 11c-.9.4-.9 1.6 0 1.9l4.1 1.4 1.6 5c.3.8 1.3 1 1.9.4l2.3-2.2 4.2 3.1c.7.5 1.7.1 1.9-.7l2.7-13.6c.2-1-.8-1.8-1.7-1.4z"/><path d="m8 14.3 9-7"/></svg>', 'Записывать сообщением', 'Напишите боту «кофе 350»')}
    ${mRow('import', ic('ui_import'), 'Импорт выписки', 'PDF или CSV из любого банка')}
    ${mRow('report', ic('ui_letter'), 'Итоги прошлого месяца', 'Письмо от Konta & Cie')}
    <input type="file" id="imp-in" accept=".pdf,.csv,.txt,application/pdf,text/csv" multiple hidden>
    <h2>Параметры</h2>
    ${mGrp('look', 'ui_spark', 'Оформление', THEMES[THEME] ? THEMES[THEME].n : '')}
    ${mGrp('home', 'ui_overview', 'Главный экран', CHART_N[CHART])}
    ${mGrp('budget', 'ui_cap', 'Бюджет и валюта', baseCur())}
    ${mGrp('priv', 'ui_shield', 'Приватность', PIN ? 'Код' + (bioOn() ? ' · Face ID' : '') : PRIV ? 'Суммы скрыты' : '')}
    ${mGrp('data', 'ui_copy', 'Данные', fmtN(String(S.tx.length)) + ' ' + plural(S.tx.length, 'запись', 'записи', 'записей'))}
    ${mHomeRows()}
    <div class="wm sm"><b>Konta</b><i>&amp; Cie</i></div><div class="ver">Private finance · версия 3.2</div>`;
}
function mSub(s) {
  const head = `<header class="hdr msubh"><button class="rb" data-act="mback" aria-label="Назад">${ic('ui_left')}</button><h1>${MSUB_T[s]}</h1><i></i></header>`;
  if (s === 'look') return head + settingsExtra().replace(/<h2>Оформление<\/h2>/, '').replace(dailySetRow(), '');
  if (s === 'home') return head + dailySetRow() + `<h2>Вид графика</h2><div class="seg" style="margin-top:2px">${CHARTS.map(c => `<button class="${CHART === c ? 'on' : ''}" data-act="chartset" data-c="${c}">${CHART_N[c]}</button>`).join('')}</div><p class="note" style="margin-top:10px">Ещё можно переключать касанием по графику.</p>`;
  if (s === 'budget') return head + limitsRow() + `<h2>Валюта капитала</h2><div class="seg" style="margin-top:2px">${BASES.map(c => `<button class="${baseCur() === c ? 'on' : ''}" data-act="base" data-c="${c}">${c}</button>`).join('')}</div>`;
  if (s === 'priv') return head + lockRows() + `<h2>Суммы</h2><button class="row" data-act="priv"><span class="ic">${ic(PRIV ? 'ui_eyeoff' : 'ui_eye')}</span><span class="t"><span class="n">Скрывать суммы</span><span class="s">Или коснитесь крупной суммы на любом экране</span></span><span class="sw2 ${PRIV ? 'on' : ''}"><i></i></span></button>
    ${inTG || (SYNC_API && SESS) ? '' : `<p class="note" style="margin:6px 0 10px">${SYNC_API ? 'Пока вы не вошли через Telegram, данные хранятся только на этом устройстве.' : 'Веб-версия хранит данные только на этом устройстве. Раз в месяц делайте экспорт в CSV.'}</p>`}`;
  if (s === 'data') {
    const L = (S.imports || []).length ? S.imports[S.imports.length - 1] : null, n = L ? S.tx.filter(t => t.im === L.im).length : 0;
    return head + `<p class="note" style="margin-top:2px">${cloud ? 'Хранятся в облаке и синхронизируются между устройствами.' : 'Сейчас хранятся в этом браузере.'} ${fmtN(String(S.tx.length))} ${plural(S.tx.length, 'запись', 'записи', 'записей')}.</p>
      ${n ? `<button class="row" data-act="undoimp" data-im="${L.im}"><span class="ic">${ic('ui_back')}</span><span class="t"><span class="n">Отменить последний импорт</span><span class="s">${L.banks.join(', ')} · ${fmtN(String(n))} ${plural(n, 'операция', 'операции', 'операций')}</span></span></button>` : ''}
      <div class="stack" style="margin-top:14px"><button class="btn ghost" data-act="csv">Экспорт в CSV</button><div id="csvbox"></div>
      ${Object.keys(S.rules).length ? `<button class="btn ghost" data-act="rules">Сбросить выученные категории (${Object.keys(S.rules).length})</button>` : ''}</div>
      <div class="stack mdanger"><button class="btn danger" data-act="wipe">Удалить все данные</button></div>`;
  }
  return '';
}
function renderMore() {
  const el = $('#s-more'); if (!el) return;
  el.innerHTML = MSUB ? mSub(MSUB) : mMain();
}
function moreGo(s) {
  haptic(); const el = $('#s-more');
  MSUB = s; renderMore(); if (el) el.scrollTop = 0;
  if (el) { el.classList.remove('mpush', 'mpop'); void el.offsetWidth; el.classList.add(s ? 'mpush' : 'mpop'); }
  animSegs(); if (typeof enterFx === 'function') enterFx();
}
function chartSet(c) { CHART = c; try { localStorage.setItem('konta_chart', CHART); } catch (e) {} haptic(); render(); }

// ================= Код-пароль =================
// Код хранится только как хэш PBKDF2 с солью, на этом устройстве. Закрывает интерфейс, данные не шифрует.
const LS = (k, v) => { try { if (v === undefined) return localStorage.getItem(k); if (v === null) localStorage.removeItem(k); else localStorage.setItem(k, v); } catch (e) { return null; } };
let PIN = (() => { try { return JSON.parse(LS('konta_pin') || 'null'); } catch (e) { return null; } })();
let PIN_AFTER = +(LS('konta_pin_after') || 60);
let WA = LS('konta_wa'); // id ключа Face ID для веб-версии
const b64 = u => btoa(String.fromCharCode(...new Uint8Array(u)));
const ub64 = s => Uint8Array.from(atob(s), c => c.charCodeAt(0));
async function pinHash(code, salt) {
  const k = await crypto.subtle.importKey('raw', new TextEncoder().encode(code), 'PBKDF2', false, ['deriveBits']);
  return b64(await crypto.subtle.deriveBits({ name: 'PBKDF2', salt, iterations: 120000, hash: 'SHA-256' }, k, 256));
}
async function pinSave(code) {
  const salt = crypto.getRandomValues(new Uint8Array(16));
  PIN = { s: b64(salt), h: await pinHash(code, salt) }; LS('konta_pin', JSON.stringify(PIN)); LS('konta_pin_fail', null);
}
async function pinCheck(code) { return !!PIN && (await pinHash(code, ub64(PIN.s))) === PIN.h; }
const pinFail = () => { try { return JSON.parse(LS('konta_pin_fail') || '{"n":0,"u":0}'); } catch (e) { return { n: 0, u: 0 }; } };

// --- Face ID в веб-версии (WebAuthn, ключ платформы) ---
let waOk = false;
try { if (window.PublicKeyCredential && PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable) PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable().then(v => { waOk = !!v && !inTG; if (tab === 'more') renderMore(); }).catch(() => {}); } catch (e) {}
async function waCreate() {
  const c = await navigator.credentials.create({ publicKey: { rp: { name: 'Konta & Cie' }, user: { id: crypto.getRandomValues(new Uint8Array(16)), name: 'konta', displayName: 'Konta & Cie' }, challenge: crypto.getRandomValues(new Uint8Array(32)), pubKeyCredParams: [{ type: 'public-key', alg: -7 }, { type: 'public-key', alg: -257 }], authenticatorSelection: { authenticatorAttachment: 'platform', userVerification: 'required', residentKey: 'discouraged' }, timeout: 60000 } });
  WA = b64(c.rawId); LS('konta_wa', WA);
}
async function waGet() {
  await navigator.credentials.get({ publicKey: { challenge: crypto.getRandomValues(new Uint8Array(32)), allowCredentials: [{ type: 'public-key', id: ub64(WA) }], userVerification: 'required', timeout: 60000 } });
}
const bioOn = () => inTG ? BIO : !!(WA && waOk);
const bioName = () => inTG ? bioType : 'Face ID';

// --- экран ввода ---
// mode: 'unlock' | 'set' | 'confirm' | 'check'
let PL = { mode: 'unlock', code: '', first: '', done: null, title: '' };
function lockHTML() {
  const t = PL.mode === 'set' ? 'Придумайте код' : PL.mode === 'confirm' ? 'Повторите код' : PL.title || 'Введите код';
  const f = pinFail(), wait = Math.max(0, Math.ceil((f.u - Date.now()) / 1000));
  const keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'bio', '0', 'del'];
  const canBio = PL.mode === 'unlock' && bioOn();
  return `<div class="lk">
    <div class="wm"><b>Konta</b><i>&amp; Cie</i></div>
    <div class="lkt" id="lkt">${wait ? `Попробуйте через ${wait} с` : t}</div>
    <div class="lkd" id="lkd">${[0, 1, 2, 3].map(i => `<i class="${i < PL.code.length ? 'on' : ''}"></i>`).join('')}</div>
    <div class="lkp">${keys.map(k => k === 'bio' ? (canBio ? `<button data-act="lkbio" aria-label="${bioName()}">${ic('ui_face')}</button>` : PL.mode !== 'unlock' ? `<button data-act="lkcancel" class="lkx">Отмена</button>` : '<span></span>') : k === 'del' ? `<button data-act="lkdel" aria-label="Стереть">${ic('ui_back')}</button>` : `<button data-act="lkkey" data-k="${k}">${k}</button>`).join('')}</div>
    ${PL.mode === 'unlock' ? '<button class="lkf" data-act="lkforgot">Забыли код?</button>' : '<span class="lkf"></span>'}
  </div>`;
}
function lockDraw() { const d = $('#lock'); if (d) d.innerHTML = lockHTML(); }
function lockOpen(mode, o = {}) {
  PL = { mode, code: '', first: '', done: o.done || null, title: o.title || '' };
  let d = $('#lock');
  if (!d) { d = document.createElement('div'); d.id = 'lock'; document.body.appendChild(d); }
  d.className = mode === 'unlock' ? '' : 'sheetlk';
  d.innerHTML = lockHTML();
  if (mode === 'unlock') { document.activeElement && document.activeElement.blur && document.activeElement.blur(); }
}
function showLock() {
  if (PIN) lockOpen('unlock');
  else if (BIO && !$('#lock')) { const d = document.createElement('div'); d.id = 'lock'; d.innerHTML = `<div class="wm"><b>Konta</b><i>&amp; Cie</i></div><button class="btn ghost" data-act="unlock" style="width:auto;padding:0 28px;margin-top:40px">${ic('ui_face')}Разблокировать</button>`; document.body.appendChild(d); }
}
function bootUnlocked() {
  const sp = $('#splash'); if (!sp || !sp.classList.contains('lkwait')) return;
  sp.classList.remove('lkwait'); T0 = performance.now(); if (splashReady) splashEnd();
}
function hideLock() {
  if (PL.mode === 'unlock' || !$('#lock .lk')) bootUnlocked(); const d = $('#lock'); if (d) { d.classList.add('out'); setTimeout(() => d.remove(), 450); } }
function lockShake(msg) {
  try { tg && tg.HapticFeedback.notificationOccurred('error'); } catch (e) {} const d = $('#lkd'); if (d) { d.classList.remove('sh'); void d.offsetWidth; d.classList.add('sh'); }
  if (msg) { const t = $('#lkt'); if (t) t.textContent = msg; }
}
let LQ = Promise.resolve();
function lockKey(k) { LQ = LQ.then(() => lockKey0(k)).catch(() => {}); return LQ; }
async function lockKey0(k) {
  if (PL.mode === 'unlock') { const f = pinFail(); if (f.u > Date.now()) { lockShake(); return; } }
  if (PL.code.length >= 4) return;
  PL.code += k; haptic();
  const ds = document.querySelectorAll('#lkd i'); ds.forEach((e, i) => e.classList.toggle('on', i < PL.code.length));
  if (PL.code.length < 4) return;
  const c = PL.code;
  await new Promise(r => setTimeout(r, 140));
  if (PL.mode === 'set') { PL.first = c; PL.mode = 'confirm'; PL.code = ''; lockDraw(); return; }
  if (PL.mode === 'confirm') {
    if (c !== PL.first) { PL.mode = 'set'; PL.code = ''; PL.first = ''; lockDraw(); lockShake('Коды не совпали. Ещё раз'); return; }
    await pinSave(c); hapticOk(); hideLock(); PL.done && PL.done(true); return;
  }
  if (await pinCheck(c)) {
    LS('konta_pin_fail', null); hapticOk(); hideLock(); PL.done && PL.done(true); return;
  }
  PL.code = '';
  if (PL.mode === 'unlock') {
    const f = pinFail(); f.n++;
    if (f.n >= 5) f.u = Date.now() + 30000 * Math.pow(2, Math.min(f.n - 5, 5));
    LS('konta_pin_fail', JSON.stringify(f));
    lockDraw(); lockShake(f.n >= 5 ? `Попробуйте через ${Math.ceil((f.u - Date.now()) / 1000)} с` : `Неверный код${f.n >= 3 ? ` · осталось ${5 - f.n}` : ''}`);
    if (f.u > Date.now()) lockTick();
  } else { lockDraw(); lockShake('Неверный код'); }
}
let lockTimer = 0;
function lockTick() {
  clearInterval(lockTimer);
  lockTimer = setInterval(() => { const f = pinFail(), t = $('#lkt'); if (!t) { clearInterval(lockTimer); return; } const w = Math.ceil((f.u - Date.now()) / 1000); if (w > 0) t.textContent = `Попробуйте через ${w} с`; else { clearInterval(lockTimer); t.textContent = 'Введите код'; } }, 500);
}
function lockDel() { if (!PL.code) return; PL.code = PL.code.slice(0, -1); haptic(); document.querySelectorAll('#lkd i').forEach((e, i) => e.classList.toggle('on', i < PL.code.length)); }
async function lockBio() {
  if (inTG) {
    if (!BM) return;
    bioInit(() => { if (!bioAvail) return; try { BM.authenticate({ reason: 'Вход в Konta' }, ok => { if (ok) { LS('konta_pin_fail', null); hapticOk(); hideLock(); } }); } catch (e) {} });
    return;
  }
  try { await waGet(); LS('konta_pin_fail', null); hapticOk(); hideLock(); } catch (e) {}
}
function unlock() { if (PIN) { if (bioOn()) lockBio(); return; } if (BIO) lockBio(); }
async function lockForgot() {
  if (inTG) {
    if (!(await confirmDlg('Сбросить код? Вы вошли через свой Telegram, поэтому данные останутся на месте. Новый код можно поставить в Настройках.', 'Сбросить код'))) return;
    pinOff(); hideLock(); toast('Код сброшен'); return;
  }
  if (SYNC_API && SESS) {
    if (!(await confirmDlg('Чтобы сбросить код, выйдите и войдите снова через Telegram. Данные на этом устройстве удалятся и вернутся из облака после входа.', 'Выйти'))) return;
    pinOff(); signOut(true);
    S = { v: 2, tx: [], limits: {}, rules: {}, seq: 1, acc: [], rates: {}, prices: {}, capHist: [], onb: true, gid: 1 }; save();
    hideLock(); render(); setTimeout(() => openLogin && openLogin(), 500); return;
  }
  if (!(await confirmDlg('Без входа через Telegram код не восстановить. Можно только удалить все данные на этом устройстве и начать заново.', 'Удалить всё'))) return;
  pinOff(); S = { v: 2, tx: [], limits: {}, rules: {}, seq: 1, acc: [], rates: {}, prices: {}, capHist: [], onb: true, gid: 1 }; save();
  hideLock(); render(); toast('Данные удалены, код сброшен');
}
function pinOff() { PIN = null; LS('konta_pin', null); LS('konta_pin_fail', null); WA = null; LS('konta_wa', null); if (inTG && BIO) { BIO = false; LS('konta_bio', '0'); } }

// --- настройки ---
function pinToggle() {
  if (!crypto.subtle) { toast('Код недоступен в этом браузере'); return; }
  if (!PIN) { lockOpen('set', { done: () => { render(); toast('Код-пароль включён'); } }); return; }
  lockOpen('check', { title: 'Введите текущий код', done: () => { pinOff(); render(); toast('Код-пароль выключен'); } });
}
function pinChange() { lockOpen('check', { title: 'Введите текущий код', done: () => setTimeout(() => lockOpen('set', { done: () => toast('Код изменён') }), 460) }); }
function pinAfter(v) { PIN_AFTER = +v; LS('konta_pin_after', String(PIN_AFTER)); haptic(); render(); }
async function bioToggle() {
  if (!PIN) { toast('Сначала включите код-пароль'); return; }
  if (inTG) { toggleBio(); return; }
  if (WA) { WA = null; LS('konta_wa', null); render(); toast('Face ID выключен'); return; }
  try { await waCreate(); render(); toast('Вход по Face ID включён'); } catch (e) { toast('Face ID не подключён'); }
}
const AFTER_N = { 0: 'Сразу', 60: '1 мин', 300: '5 мин' };
function lockRows() {
  const sw = on => `<span class="sw2 ${on ? 'on' : ''}"><i></i></span>`;
  let h = `<button class="row" data-act="pin"><span class="ic">${ic('ui_shield')}</span><span class="t"><span class="n">Код-пароль</span><span class="s">4 цифры при входе в Konta</span></span>${sw(!!PIN)}</button>`;
  if (PIN) {
    const canBio = inTG ? !!BM : waOk;
    if (canBio) h += `<button class="row" data-act="lkbiot"><span class="ic">${ic('ui_face')}</span><span class="t"><span class="n">Вход по ${inTG ? (bioType || 'Face ID') : 'Face ID'}</span><span class="s">Вместо кода</span></span>${sw(bioOn())}</button>`;
    h += `<button class="row" data-act="pinchg"><span class="ic">${ic('ui_edit')}</span><span class="t"><span class="n">Сменить код</span></span>${ic('ui_right', 'i chev')}</button>`;
    h += `<h2>Запрашивать код</h2><div class="seg" style="margin-top:2px">${[0, 60, 300].map(v => `<button class="${PIN_AFTER === v ? 'on' : ''}" data-act="pinafter" data-v="${v}">${AFTER_N[v]}</button>`).join('')}</div><p class="note" style="margin-top:10px">После того как приложение свернули. При каждом запуске код спрашивается всегда.</p>`;
  }
  return h;
}
// при сворачивании
let hiddenAt = 0;
document.addEventListener('visibilitychange', () => {
  if (!PIN) return;
  if (document.hidden) { hiddenAt = Date.now(); return; }
  if (hiddenAt && Date.now() - hiddenAt >= PIN_AFTER * 1000 && !$('#lock')) { lockOpen('unlock'); unlock(); }
});
// клавиатура компьютера на экране кода
document.addEventListener('keydown', e => {
  if (!$('#lock .lk')) return;
  if (/^[0-9]$/.test(e.key)) { e.preventDefault(); e.stopImmediatePropagation(); lockKey(e.key); }
  else if (e.key === 'Backspace') { e.preventDefault(); e.stopImmediatePropagation(); lockDel(); }
  else if (e.key === 'Escape' && PL.mode !== 'unlock') { e.stopImmediatePropagation(); hideLock(); }
}, true);
if (PIN || BIO) {
  showLock();
  const sp = $('#splash'); if (sp) sp.classList.add('lkwait');
  setTimeout(() => { if ($('#lock')) unlock(); }, 450);
}

// ================= Подписки: регулярные списания =================
const subN = s => (s || '').toLowerCase().replace(/ё/g, 'е').replace(/[^a-zа-я+ ]/g, ' ').replace(/\s+/g, ' ').trim();
const medOf = a => { const s = [...a].sort((x, y) => x - y); return s[Math.floor(s.length / 2)]; };
function findSubs() {
  const from = key(addD(today(), -125)), hide = S.subsHide || [], g = {};
  S.tx.forEach(t => { if (t.k !== 'out' || t.d < from || !t.n || t.c === 'transfer') return; const k = subN(t.n); if (!k || hide.includes(k)) return; (g[k] = g[k] || []).push(t); });
  const res = [];
  for (const [k, arr] of Object.entries(g)) {
    if (arr.length < 2) continue;
    arr.sort((a, b) => a.d < b.d ? -1 : a.d > b.d ? 1 : 0);
    const ds = arr.map(t => new Date(t.d + 'T12:00'));
    const gaps = []; for (let i = 1; i < ds.length; i++) gaps.push(Math.round((ds[i] - ds[i - 1]) / 864e5));
    const gm = medOf(gaps);
    let per = null;
    if (gm >= 26 && gm <= 35 && gaps.every(x => x >= 20 && x <= 40)) per = 'm';
    else if (arr.length >= 3 && gm >= 6 && gm <= 8 && gaps.every(x => x >= 5 && x <= 9)) per = 'w';
    if (!per) continue;
    const am = arr.map(t => t.a), mA = medOf(am);
    if (Math.max(...am) > mA * 1.2 || Math.min(...am) < mA * 0.8) continue;
    const last = arr[arr.length - 1], since = (today() - new Date(last.d + 'T12:00')) / 864e5;
    if (since > (per === 'm' ? 45 : 12)) continue; // давно не списывали: видимо, отменили
    res.push({ k, n: last.n, c: last.c, a: mA, per, month: per === 'm' ? mA : Math.round(mA * 52 / 12), next: addD(new Date(last.d + 'T12:00'), gm) });
  }
  return res.sort((a, b) => b.month - a.month);
}
const subsWord = n => plural(n, 'подписка', 'подписки', 'подписок');
function subsBlock() {
  const L = findSubs(); if (!L.length) return '';
  const m = L.reduce((s, x) => s + x.month, 0);
  return `<h2>Регулярные платежи</h2><button class="row" data-act="subs"><span class="ic">${ic('subs')}</span><span class="t"><span class="n">${L.length} ${subsWord(L.length)}</span><span class="s">${rub(m * 12, { round: true })} в год</span></span><span class="a">${rub(m, { round: true })}<small>в месяц</small></span>${ic('ui_right', 'i chev')}</button>`;
}
function openSubs() {
  const L = findSubs(); haptic();
  const m = L.reduce((s, x) => s + x.month, 0);
  const nx = d => { const dd = Math.round((d - today()) / 864e5); return dd <= 0 ? 'ожидается' : dd === 1 ? 'завтра' : `≈ ${d.getDate()} ${MG[d.getMonth()]}`; };
  const top = L[0];
  $('#sheet2').innerHTML = `<div class="grab"></div><h2 style="margin-top:4px">Подписки</h2>
    <p class="note" style="margin:6px 2px 14px;line-height:1.5">Нашли по платежам, которые повторяются с одной суммой каждый месяц или неделю.</p>
    <div class="dcalc"><div class="dline"><span>В месяц</span><b>${rub(m, { round: true })}</b></div><div class="dline"><span>В год</span><b>${rub(m * 12, { round: true })}</b></div></div>
    <div style="height:10px"></div>
    ${L.map(x => `<button class="row" data-act="subhide" data-k="${esc(x.k)}"><span class="ic">${ic((CAT[x.c] || CAT.other).id)}</span><span class="t"><span class="n">${esc(x.n)}</span><span class="s">${x.per === 'w' ? 'Каждую неделю · ' : ''}Следующий ${nx(x.next)}</span></span><span class="a">${rub(x.a, { round: true })}</span></button>`).join('')}
    ${top ? `<p class="note" style="margin:14px 2px 0;line-height:1.5">Самая дорогая, ${esc(top.n)}: <span style="white-space:nowrap">${rub(top.month * 12, { round: true })}</span> в год.</p>` : ''}
    <p class="note" style="margin:10px 2px 0;text-align:center">Коснитесь строки, если это не подписка</p>`;
  open('#sheet2');
}
async function subHide(k) {
  if (!(await confirmDlg('Убрать из подписок? Сами платежи останутся в истории.', 'Убрать'))) return;
  S.subsHide = [...(S.subsHide || []), k]; save(); haptic();
  if (findSubs().length) openSubs(); else close();
  render();
}
// ================= Statement engine (pure, без DOM) =================
// Разбирает строки PDF-выписки (rows: [{p, y, items:[{x, s}]}]) любого табличного банка.
const ST_DATE = /^(\d{2})\.(\d{2})\.(\d{4})$/;
const ST_DATE_IN = /^(\d{2})\.(\d{2})\.(\d{4})(?:\s+\d{2}:\d{2}(?::\d{2})?)?$/;
const ST_TIME = /^\d{2}:\d{2}(:\d{2})?$/;
const ST_AMT = /^([+\-−–]\s?)?(\d{1,3}(?:[   ]\d{3})+|\d+)[.,]\d{2}(?:\s?(₽|RUB|RUR|руб\.?|USD|EUR|\$|€))?$/i;
const ST_CUR = /^(₽|RUB|RUR|руб\.?|USD|EUR|\$|€)$/i;
const ST_HEAD = /^(дата|время|операци|сумм|приход|расход|валют|российские|рубл|описан|назначен|получател|отправител|банком|списани|карт|счета|счёта|номер|документ|код|наименование|обработки|проводки|в валюте|категори|mcc)/i;
const ST_JUNK = /(^\d{4}$|^[А-ЯЁ]\.\s?[А-ЯЁ]\.\s?[А-ЯЁ][а-яё]+$|^\(подпись|спасибо, что вы с нами|всегда ваш|уполномоченн|страниц[аы]\s*\d|лицензи[яи] банка|к\/с\s*\d|^инн\b|^бик\b|^\d{1,3}$|^исх\.|^продолжение|^итого|^подпись|^м\.п\.)/i;

const stTxt = r => r.items.map(i => i.s).join(' ').replace(/\s+/g, ' ').trim();
const stAmt = s => { const neg = /^[\-−–]/.test(s.trim()), pos = /^\+/.test(s.trim()); const v = parseFloat(s.replace(/[^\d.,]/g, '').replace(',', '.')); return { v: Math.round(v * 100), sign: neg ? -1 : pos ? 1 : 0 }; };
const stISO = m => `${m[3]}-${m[2]}-${m[1]}`;

function stBank(text) {
  const t = text.slice(0, 4000);
  const B = [[/озон банк/i, 'Озон Банк'], [/«тбанк»|ао «тбанк»|тбанк\.ru|т-банк|тинькофф банк/i, 'Т-Банк'], [/сбербанк|sberbank\.ru|www\.sberbank/i, 'Сбер'], [/альфа-банк/i, 'Альфа-Банк'],
    [/банк втб|втб \(пао\)/i, 'ВТБ'], [/газпромбанк/i, 'Газпромбанк'], [/яндекс банк|yandex bank/i, 'Яндекс Банк'], [/райффайзен/i, 'Райффайзен'], [/мтс банк/i, 'МТС Банк'],
    [/совкомбанк/i, 'Совкомбанк'], [/почта банк/i, 'Почта Банк'], [/открытие/i, 'Открытие'], [/росбанк/i, 'Росбанк'], [/уралсиб/i, 'Уралсиб'], [/ленинградское шоссе,?\s*д\.?\s*16а/i, 'Ленинградское ш.']];
  let name = '';
  // название банка бывает и в шапке, и в подвале; считаем, какой банк упоминается как «банк выписки» чаще всего
  let best = 0;
  for (const [re, n] of B) { const c = (text.match(new RegExp(re.source, 'gi')) || []).length + (re.test(t) ? 3 : 0); if (c > best) { best = c; name = n; } }
  const acc = (t.match(/408\d{2}[\s\d]{12,24}/) || [''])[0].replace(/\s/g, '');
  const card = (t.match(/(?:\*{2,}|•{2,}|X{4,}|\+{4,})\s?(\d{4})/) || [])[1] || '';
  const tail = acc ? acc.slice(-4) : card;
  if (name === 'Ленинградское ш.') name = '';
  return { name: name || (tail ? `Счёт •${tail}` : 'Банк'), tail };
}
function stOwner(text) {
  const t = text.slice(0, 3000);
  const m = t.match(/(?:Владелец(?: счёта| счета)?|Клиент|Кому|ФИО)[:\s]*([А-ЯЁ][а-яё]+|[А-ЯЁ]{2,})\s+([А-ЯЁ][а-яё]+|[А-ЯЁ]{2,})\s+([А-ЯЁ][а-яё]+|[А-ЯЁ]{2,})/) || t.match(/^\s*([А-ЯЁ][а-яё]+)\s+([А-ЯЁ][а-яё]+)\s+([А-ЯЁ][а-яё]+(?:вич|вна|ична|чна))(?![а-яё])/m);
  if (!m) return null;
  const cap = s => s[0] + s.slice(1).toLowerCase();
  return { last: cap(m[1]), first: cap(m[2]), mid: cap(m[3]) };
}

function parseRows(rows) {
  rows = rows.filter(r => r.items.length);
  // колонка описания и строки шапки
  let descX = null;
  const isHead = new Set();
  rows.forEach((r, i) => {
    const tx = stTxt(r);
    if (/дата/i.test(tx) && /(описан|назначен|операци|сумм)/i.test(tx) && !r.items.some(it => ST_DATE_IN.test(it.s.trim()))) {
      isHead.add(i);
      const d = r.items.find(it => /^(описан|назначен)/i.test(it.s.trim()));
      if (d && descX == null) descX = d.x;
      for (let j = i + 1; j < rows.length && j < i + 6; j++) {
        if (rows[j].p !== r.p || Math.abs(rows[j].y - rows[j - 1].y) > 16) break;
        if (rows[j].items.every(it => ST_HEAD.test(it.s.trim()))) { isHead.add(j); const d2 = rows[j].items.find(it => /^(описан|назначен)/i.test(it.s.trim())); if (d2 && descX == null) descX = d2.x; } else break;
      }
    }
  });
  // строки-операции: первая ячейка — дата, и в строке есть сумма
  const isOp = rows.map((r, i) => {
    if (isHead.has(i)) return false;
    const f = r.items[0]; if (!f || !ST_DATE_IN.test(f.s.trim())) return false;
    if (descX != null && f.x > descX - 20) return false;
    return r.items.some(it => ST_AMT.test(it.s.trim()));
  });
  const opIdx = isOp.map((v, i) => v ? i : -1).filter(i => i >= 0);
  if (!opIdx.length) return null;
  if (descX == null) { const xs = opIdx.map(i => rows[i].items.find(it => /[A-Za-zА-Яа-яЁё]{3}/.test(it.s))).filter(Boolean).map(it => it.x).sort((a, b) => a - b); descX = xs[Math.floor(xs.length / 2)] || 150; }

  // описание по центру строки (текст и выше, и ниже даты) или сверху
  const firstOp = opIdx[0];
  let centered = false;
  for (let i = firstOp - 1; i >= 0 && rows[i].p === rows[firstOp].p; i--) {
    if (isHead.has(i)) break;
    if (Math.abs(rows[i].y - rows[i + 1].y) > 16) break;
    if (rows[i].items[0].x >= descX - 20) { centered = true; break; }
  }
  const firstX = i => { const it = rows[i].items.find(it => !ST_TIME.test(it.s.trim()) && !ST_DATE_IN.test(it.s.trim())); return it ? it.x : -1; };
  const cont = i => !isHead.has(i) && !isOp[i] && firstX(i) >= descX - 25 && !ST_JUNK.test(stTxt(rows[i]));
  const attach = opIdx.map(() => []);
  if (centered) {
    rows.forEach((r, i) => {
      if (!cont(i)) return;
      let best = -1, bd = 1e9;
      opIdx.forEach((oi, k) => { if (rows[oi].p !== r.p) return; const d = Math.abs(rows[oi].y - r.y); if (d < bd) { bd = d; best = k; } });
      if (best >= 0 && bd < 40) attach[best].push(i);
    });
  } else {
    opIdx.forEach((oi, k) => {
      let prevY = rows[oi].y;
      for (let i = oi + 1; i < rows.length && !isOp[i]; i++) {
        if (rows[i].p !== rows[oi].p || prevY - rows[i].y > 18) break;
        if (cont(i)) attach[k].push(i); else if (isHead.has(i)) break;
        prevY = rows[i].y;
      }
    });
  }

  const out = [];
  opIdx.forEach((oi, k) => {
    const r = rows[oi];
    const d = stISO(r.items[0].s.trim().match(/^(\d{2})\.(\d{2})\.(\d{4})/));
    const amts = [];
    const desc = [];
    r.items.forEach((it, j) => {
      const s = it.s.trim();
      if (j === 0 || ST_DATE_IN.test(s) || ST_TIME.test(s) || ST_CUR.test(s)) return;
      if (ST_AMT.test(s)) { const next = r.items[j + 1]; amts.push({ ...stAmt(s), rub: /₽|RUB|RUR|руб/i.test(s) || (next && /^(₽|RUB|RUR|руб)/i.test(next.s.trim())), x: it.x }); return; }
      if (it.x < descX - 25) return; // номера документов, коды
      if (/^\d{4}$/.test(s) && it.x > descX + 60) return; // номер карты
      desc.push({ y: r.y, x: it.x, s });
    });
    attach[k].forEach(i => rows[i].items.forEach(it => { const s = it.s.trim(); if (!ST_TIME.test(s) && !ST_DATE_IN.test(s) && it.x >= descX - 25) desc.push({ y: rows[i].y, x: it.x, s }); }));
    desc.sort((a, b) => b.y - a.y || a.x - b.x);
    // колонки «описание» и «получатель» склеиваем по отдельности
    const main = desc.filter(t => t.x < descX + 140).map(t => t.s).join(' ');
    const side = desc.filter(t => t.x >= descX + 140).map(t => t.s).join(' ');
    let text = (main + (side ? ' · ' + side : '')).replace(/\s+/g, ' ').replace(/^\d{1,4}\s(?=\D)/, '').trim();
    text = text.replace(/\s?\b\d{4}$/, '').trim(); // номер карты в последней колонке
    if (!amts.length) return;
    let a, k2;
    if (amts.length >= 3 && amts[1].sign === 0 && amts[2].sign <= 0 && !amts.some(x => x.sign > 0)) {
      // приход / расход отдельными колонками (после суммы в валюте операции)
      const inc = amts[1].v, exp = amts[2].v;
      if (inc > 0) { a = inc; k2 = 'in'; } else if (exp > 0) { a = exp; k2 = 'out'; } else return; // блокировки и арестованные суммы
    } else {
      const pick = amts.find(x => x.rub) || amts[0];
      a = pick.v; k2 = pick.sign < 0 ? 'out' : 'in';
      if (pick.sign === 0 && /(оплата|покупк|списани|погашени|комисси|взыскан)/i.test(text) && !/(зачислени|поступлени|возврат|пополнени)/i.test(text)) k2 = 'out';
    }
    if (!a) return;
    out.push({ d, a, k: k2, raw: text });
  });
  return out;
}

// MCC → категория
const MCC = [[/^(5411|5422|5441|5451|5462|5499|5331|5300)$/, 'food'], [/^(5812|5813|5814)$/, 'cafe'], [/^4121$/, 'taxi'], [/^(4111|4112|4131|4784|5541|5542|7523|7512|4789)$/, 'trans'],
  [/^(5912|8011|8021|8031|8041|8042|8043|8062|8071|8099|5122)$/, 'health'], [/^(5993)$/, 'tobacco'], [/^(4812|4814|4899|5815|5816|5817|5818|4816)$/, 'subs'], [/^(5992|5947)$/, 'gifts'],
  [/^(5200|5211|5251|5712|5719|5722|4900)$/, 'home'], [/^(5611|5621|5631|5641|5651|5661|5691|5699|5137|5139)$/, 'clothes'], [/^(7832|7922|7929|7991|7994|7996|7999|5735|5945)$/, 'fun'], [/^(5995|0742)$/, 'pet'],
  [/^(6010|6011|6012)$/, 'fees'], [/^(5262|5310|5311|5399|5964|5969)$/, 'market']];
const mccOf = code => { for (const [re, c] of MCC) if (re.test(code)) return c; return ''; };
const mccCat = s => { const inner = s.match(/(?:YANDEX|SBER|OZON|VK)\s?(\d{4})\s?[A-Z]/i); if (inner && mccOf(inner[1])) return mccOf(inner[1]); const m = s.match(/MCC\s?(\d{4})/i); return m ? mccOf(m[1]) : ''; };
// Номера телефонов, которые встречаются и во входящих, и в исходящих переводах в разных банках — вероятно, ваши счета
function stPhones(ops) {
  const P = {};
  ops.forEach(o => { const p = (o.raw.match(/\+7\d{10}/) || [])[0]; if (!p || o.own || /betboom|ставк/i.test(o.raw)) return; const x = P[p] = P[p] || { p, n: 0, banks: new Set(), in: 0, out: 0, sum: 0 }; x.n++; x.banks.add(o.src); x[o.k]++; x.sum += o.a; });
  return Object.values(P).filter(x => x.n >= 6 && x.in >= 2 && x.out >= 2 && x.banks.size >= 2).sort((a, b) => b.n - a.n).slice(0, 3);
}

const BRANDS = [[/YANDEX[^A-Z]*(?:\d{4}\s)?GO\b|ЯНДЕКС ?ГО|FASTEN|YANDEX\*4121|Yandex\.Uber/i, 'Яндекс Го'], [/ТАНДЕР|TANDER/i, 'Магнит'], [/BETBOOM/i, 'BetBoom'], [/WINELAB/i, 'Winelab'], [/KRASNOE&?\s?BELOE|КРАСНОЕ\s?&?\s?БЕЛОЕ/i, 'Красное&Белое'], [/VKUSVILL|ВКУСВИЛЛ/i, 'ВкусВилл'], [/SURF COFFEE/i, 'Surf Coffee'], [/SOVA VARIT/i, 'Сова варит'], [/PANAMPIZZA/i, 'Пан Американ Пицца'], [/STEAM/i, 'Steam'], [/YANDEX[^A-Z]*(?:\d{4}\s)?(?:EDA|DK)\b|EDA\.YANDEX/i, 'Яндекс Еда'], [/LAVKA|ЛАВКА/i, 'Яндекс Лавка'],
  [/YANDEX[^A-Z]*(?:\d{4}\s)?MARKET|ЯНДЕКС МАРКЕТ/i, 'Яндекс Маркет'], [/YANDEX[^A-Z]*(?:\d{4}\s)?PLUS|ЯНДЕКС ПЛЮС/i, 'Яндекс Плюс'], [/SAMOKAT|\bSAMO\b/i, 'Самокат'], [/OZON|ОЗОН/i, 'Ozon'],
  [/WILDBERRIES|\bWB\b|ВАЙЛДБЕРРИЗ/i, 'Wildberries'], [/PYATEROCHKA|ПЯТЁРОЧКА|ПЯТЕРОЧКА/i, 'Пятёрочка'], [/MAGNIT|МАГНИТ/i, 'Магнит'], [/PEREKRESTOK|ПЕРЕКРЕСТОК/i, 'Перекрёсток'], [/DIXY|ДИКСИ/i, 'Дикси'],
  [/VKUSNOITOCHKA|ВКУСНО И ТОЧКА/i, 'Вкусно и точка'], [/DOLYAME|ДОЛЯМИ/i, 'Долями'], [/MSKAPT|APTEKA|АПТЕКА/i, 'Аптека'], [/mBank\.MTS|\bMTS\b|МТС/i, 'МТС'], [/KFC|РОСТИКС|ROSTICS/i, 'Rostic\'s'], [/BURGER BON/i, 'Burger Bon']];
// Нормализованное «человеческое» название операции
function stName(raw, kind) {
  let s = raw;
  const place = s.match(/место совершения операции:\s*([^,]+?)(?:\s*MCC\d{4}|$)/i);
  const brand = BRANDS.find(([re]) => re.test(raw));
  if (place) s = place[1].split(/[\\/>]/).filter(x => /[A-Za-zА-Яа-я]{3}/.test(x) && !/^(RU|RUS|MOSKVA|MOSCOW)$/i.test(x.trim())).pop() || place[1];
  const inMerch = raw.match(/(?:по карте \d{4} сумма [\d.]+ в|^Оплата в)\s+(.+?)(?:\s+(?:RU|RUS)\b.*|\s+дата.*)?$/i);
  if (inMerch && !place) { s = inMerch[1]; if (/\s(RU|RUS)\b/.test(raw.slice(raw.indexOf(inMerch[1]) + inMerch[1].length, raw.indexOf(inMerch[1]) + inMerch[1].length + 6)) || / RUS?( |$)/.test(raw)) s = s.replace(/\s+[A-Za-z-]+$/, ''); }
  s = s.replace(/^(Оплата товаров и услуг\.?|Оплата товаров\/услуг|Оплата по|Оплата в|Покупка|Операция по карте:?|Списание по транзакции\.?|Платеж в пользу)\s*/i, '');
  s = s.replace(/\.\s*РОССИЯ\..*$/i, '').replace(/,\s*\d{6,}.*$/, '');
  if (/через (систему быстрых платежей|сбп)|внешний перевод|переводы через сбп|^перевод(\s|$)|поступление средств по ув|отправитель:/i.test(raw) && !/betboom|ставк/i.test(raw)) {
    const who = raw.match(/(?:Получатель|Отправитель|отправитель):?\s*([А-ЯЁ][а-яё]+\s+[А-ЯЁ][а-яё]+(?:\s+[А-ЯЁ]\.?)?)/) || raw.match(/·\s*([А-ЯЁ][А-ЯЁа-яё]+\s+[А-ЯЁ][А-ЯЁа-яё]+(?:\s+[А-ЯЁ][А-ЯЁа-яё]+)?)\s*$/);
    const ph = raw.match(/\+7\d{10}/);
    const org = raw.match(/Получатель:\s*(?:ООО|АО|ПАО|ИП|ТОВАРИЩЕСТВО[А-ЯЁ\s]*?ОТВЕТСТВЕННОСТЬЮ)\s*["«]([^"»]+)["»]/) || raw.match(/Получатель:\s*([A-Za-z][\w .&-]{2,30}?)\.\s/);
    const from = /отправител|(^|\s)от\s\+7|пополнени/i.test(raw);
    if (org && !who) { const b = BRANDS.find(([re]) => re.test(org[1])); s = b ? b[1] : org[1][0] + org[1].slice(1).toLowerCase(); }
    else s = who ? `Перевод · ${who[1].replace(/([А-ЯЁ])([А-ЯЁ]+)/g, (m, a, b) => a + b.toLowerCase())}` : ph ? `Перевод ${from ? 'от' : 'на'} ${ph[0].replace(/(\+7)(\d{3})(\d{3})(\d{2})(\d{2})/, '$1 $2 $3-$4-$5')}` : 'Перевод';
  }
  if (/взыскан|постановлени|(^|\s)спи(\s|$)|судебн|и\/п/i.test(raw)) s = 'Взыскание приставов';
  if (/кешб[эе]к|cashback|бонусных рублей/i.test(raw)) s = 'Кэшбэк';
  if (/пособи[ея] по врем|нетрудоспособност/i.test(raw)) s = 'Больничный';
  else if (/пособи/i.test(raw)) s = 'Пособие';
  if (/заработн\S* плат|salary|зарплат|аванс/i.test(raw) && kind === 'in') { const org = raw.match(/ООО\s*"([^"]+)"|ООО\s*«([^»]+)»/); s = 'Зарплата' + (org ? ` · ${org[1] || org[2]}` : ''); }
  if (/внесение наличных/i.test(raw)) s = 'Внесение наличных';
  if (/снятие наличных|ATM|банкомат/i.test(raw) && !/комисси/i.test(raw)) s = /внесение/i.test(raw) || kind === 'in' ? 'Внесение наличных' : 'Снятие наличных';
  if (/пополнение\. система быстрых платежей/i.test(raw)) s = 'Пополнение через СБП';
  if (/перевод с договора|перевод между счетами|между своими|перечисление средств на сч[её]т|внутренний перевод|внутрибанковский перевод/i.test(raw)) s = 'Перевод между счетами';
  if (/^для зачисления на/i.test(raw) && /^Для зачисления|^ДЛЯ ЗАЧИСЛЕНИЯ/.test(s)) { let r = raw.replace(/^для зачисления на (?:рас\/)?сч[её]т[\s\d,]*/i, '').replace(/^([А-ЯЁ][А-ЯЁа-яё]+[\s,]+){3}/, '').replace(/,?\s*Сумма.*$/i, '').replace(/^[\s,]+/, ''); s = r ? r[0].toUpperCase() + r.slice(1).toLowerCase() : 'Зачисление'; }
  if (/подотч[её]тн/i.test(raw)) s = 'Подотчётные средства';
  if (/возврат излишне/i.test(raw)) s = 'Возврат переплаты';
  if (/^возврат|отмена операции/i.test(raw) && kind === 'in' && !/^Возврат/.test(s)) s = 'Возврат' + (brand ? ` · ${brand[1]}` : '');
  if (/betboom|ставк/i.test(raw)) s = 'BetBoom';
  if (/комисси/i.test(raw)) s = /смс/i.test(raw) ? 'Комиссия за СМС' : 'Комиссия банка';
  if (/погашение задолженности|погашение кредит/i.test(raw)) s = 'Погашение кредита';
  s = s.replace(/[A-Z]\d{10,}\w*/g, '').replace(/\b\d{5,}\b/g, '').replace(/\*/g, ' ').replace(/\b(RUS|RU|MOSKVA|MOSCOW|OBNINSK)\b/g, '').replace(/[.,;]\s*$/, '').replace(/\s+/g, ' ').trim();
  s = s.replace(/\b\d{4}\b/g, '').replace(/\s+/g, ' ').trim();
  if (brand && !/^(Перевод|Взыскание|Кэшбэк|Зарплата|Внесение|Снятие|Комиссия|Погашение|Пополнение|Возврат|BetBoom)/.test(s)) s = brand[1];
  if (/^[A-Z0-9 .,\-_&']+$/.test(s) && /[A-Z]{3}/.test(s)) s = s.toLowerCase().replace(/(^|\s)\S/g, c => c.toUpperCase()).replace(/^Ooo /, '');
  s = s.replace(/^(Ip|IP)\s/, 'ИП ').replace(/^ИП ([A-Za-z]+)( [A-Z]\.? ?[A-Z]?\.?)?$/, (m, a) => 'ИП ' + a[0].toUpperCase() + a.slice(1).toLowerCase());
  return (s || raw).slice(0, 48);
}
function stIsSelf(raw, owner) {
  if (!owner) return false;
  const r = raw.replace(/ё/g, 'е').toLowerCase(), L = owner.last.toLowerCase().replace(/ё/g, 'е'), F = owner.first.toLowerCase(), Mi = owner.mid.toLowerCase();
  if (/зарплат|аванс|заработн|пособи|начислени|взыскан/.test(r)) return false;
  if (!/перевод|сбп|пополнени|между|перечислен/.test(r)) return false;
  return r.includes(L) && r.includes(F) || r.includes(`${F} ${Mi} ${L[0]}`) || r.includes(`${F} ${Mi}`);
}

// Склейка нескольких выписок: дубли, переводы между своими счетами
function stMerge(files, existing) {
  const all = [];
  files.forEach((f, fi) => f.ops.forEach(o => all.push({ ...o, src: f.bank, fi })));
  // дубли внутри загрузки: та же операция из другого файла того же банка (перекрывающиеся периоды)
  const firstFile = new Map(), uniq = [];
  let dupIn = 0;
  all.forEach(o => { const key = `${o.src}|${o.d}|${o.k}|${o.a}|${o.raw.slice(0, 40)}`; const f0 = firstFile.get(key); if (f0 === undefined) { firstFile.set(key, o.fi); uniq.push(o); } else if (f0 !== o.fi) dupIn++; else uniq.push(o); });
  // уже есть в приложении
  const have = new Map(); (existing || []).forEach(t => { const k = `${t.d}|${t.k}|${t.a}`; have.set(k, (have.get(k) || 0) + 1); });
  uniq.forEach(o => { const k = `${o.d}|${o.k}|${o.a}`, n = have.get(k) || 0; if (n > 0) { o.dup = true; have.set(k, n - 1); } });
  // переводы себе: пары «минус в одном банке — плюс в другом», та же сумма, ±2 дня
  const day = s => Date.UTC(+s.slice(0, 4), +s.slice(5, 7) - 1, +s.slice(8, 10)) / 864e5;
  const outs = uniq.filter(o => o.k === 'out' && !o.dup), ins = uniq.filter(o => o.k === 'in' && !o.dup);
  const used = new Set();
  outs.forEach(o => {
    if (o.own) return;
    let best = null, bd = 9;
    ins.forEach(i => { if (used.has(i) || i.src === o.src || i.a !== o.a) return; const dd = Math.abs(day(i.d) - day(o.d)); if (dd <= 2 && dd < bd) { bd = dd; best = i; } });
    if (best && !/betboom|ставк/i.test(o.raw + best.raw) && (/перевод|сбп|пополнени|зачислени|поступлени|внешний|с договора|с карты|на карту/i.test(o.raw + ' ' + best.raw))) { used.add(best); o.own = best.own = 'pair'; }
  });
  uniq.forEach(o => { if (!o.own && o.self) o.own = 'name'; });
  return { ops: uniq, dupIn };
}
// ================= Import (PDF / CSV) =================
const RE_DATE = /(\d{2})\.(\d{2})\.(\d{4})|(\d{4})-(\d{2})-(\d{2})/;
const RE_AMT = /^[−\-+]?\s?\d{1,3}(?:[\s  ]?\d{3})*(?:[.,]\d{2})\s*(?:₽|руб\.?|RUB|р\.?)?$/i;
const IN_WORDS = /(пополнени|зачислени|поступлени|приход|возврат|кэшбэк|cashback|refund|salary|зарплат|incoming)/i;
const parseDate = s => { const m = s.match(RE_DATE); if (!m) return null; return m[1] ? `${m[3]}-${m[2]}-${m[1]}` : `${m[4]}-${m[5]}-${m[6]}`; };
const parseAmt = s => { const neg = /^[−\-]/.test(s.trim()); const v = parseFloat(s.replace(/[^\d.,]/g, '').replace(/[\s  ]/g, '').replace(',', '.')); return isFinite(v) ? (neg ? -1 : 1) * Math.round(v * 100) : 0; };
function cleanDesc(s) {
  let t = s.replace(/^(Покупка|Оплата товаров и услуг|Операция по карте)\s+/i, '').replace(/-\d+\w*\b/g, '').replace(/\*/g, ' ').replace(/\b\d{3,}\b/g, ' ').replace(/\s+/g, ' ').trim();
  if (/^[A-Z0-9 .\-_]+$/.test(t) && /[A-Z]{3}/.test(t)) t = t.toLowerCase().replace(/(^|\s)\S/g, c => c.toUpperCase()).replace(/rit\b/i, '');
  return t.slice(0, 60) || s.slice(0, 60);
}
const BANKCAT = [[/супермаркет|продукт/i, 'food'], [/фастфуд|ресторан|кафе|кофе/i, 'cafe'], [/такси/i, 'taxi'], [/транспорт|топливо|азс|каршеринг|самокат/i, 'trans'], [/аптек|медицин|здоров/i, 'health'],
  [/маркетплейс|одежда|обувь/i, 'market'], [/связь|телеком|мобильн|подписк|цифров/i, 'subs'], [/развлеч|кино|театр/i, 'fun'], [/цвет|подар/i, 'gifts'], [/дом|ремонт|жкх/i, 'home'], [/живот|зоо/i, 'pet'], [/перевод|сбп/i, 'transfer'], [/комисс|наличн|снятие/i, 'fees']];
function catFor(desc, kind, bankCat = '') {
  const g = guess(desc, kind); if (g) return g;
  if (kind === 'out') { for (const [re, c] of BANKCAT) if (re.test(bankCat) || re.test(desc)) return c; return 'other'; }
  if (/налич/i.test(desc + bankCat)) return 'cash';
  if (/кэшбэк|cashback|возврат/i.test(desc + bankCat)) return 'cashback';
  if (/зарплат|аванс|salary/i.test(desc + bankCat)) return 'salary';
  if (/перевод|пополнени|поступлени|зачислени/i.test(desc + bankCat)) return 'in_transfer';
  return 'in_other';
}
// PDF/текст: блоки «дата → описание → сумма»
function parseStatementLines(lines) {
  const out = [];
  const L = lines.map(s => s.replace(/\s+/g, ' ').trim()).filter(Boolean);
  const idx = []; L.forEach((s, i) => { if (RE_DATE.test(s)) idx.push(i); });
  for (let j = 0; j < idx.length; j++) {
    const i = idx[j], end = j + 1 < idx.length ? idx[j + 1] : Math.min(L.length, i + 12);
    const d = parseDate(L[i]);
    // хвост строки с датой тоже может содержать описание и сумму (табличная вёрстка)
    const rest = L[i].replace(RE_DATE, ' ').replace(/\b\d{2}:\d{2}(:\d{2})?\b/g, ' ').trim();
    const block = (rest ? [rest] : []).concat(L.slice(i + 1, end));
    let desc = '', amt = 0;
    for (const s of block) {
      const parts = s.split(/\s{1,}(?=[−\-+]?\d)/);
      if (!amt && RE_AMT.test(s)) { amt = parseAmt(s); continue; }
      if (!amt) { const m = s.match(/([−\-+]?\d{1,3}(?:[\s ]?\d{3})*[.,]\d{2})\s*(?:₽|руб\.?|RUB)?\s*$/); if (m && /[A-Za-zА-Яа-я]/.test(s)) { if (!desc) desc = s.slice(0, m.index).trim(); amt = parseAmt(m[1]); continue; } }
      if (!desc && /[A-Za-zА-Яа-яЁё]{3}/.test(s) && !/^(Номер|Дата|Операция|Расход|Приход|Назначение|Карта:|Договор:|Счет:|Кому:|по:|с:)/i.test(s)) desc = s;
      if (amt && desc) break;
    }
    if (!d || !amt || !desc) continue;
    const kind = amt < 0 ? 'out' : IN_WORDS.test(desc) ? 'in' : 'out';
    const full = block.filter(x => !RE_AMT.test(x) && !/^\d{1,4}$/.test(x)).join(' ');
    out.push({ d, a: Math.abs(amt), k: kind, n: cleanDesc(desc), raw: full || desc });
  }
  return out;
}
// CSV
function parseCSV(text) {
  text = text.replace(/^﻿/, '');
  const first = text.split(/\r?\n/)[0] || '';
  const delim = [';', '\t', ','].sort((a, b) => first.split(b).length - first.split(a).length)[0];
  const rows = []; let row = [], cell = '', q = false;
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (q) { if (ch === '"') { if (text[i + 1] === '"') { cell += '"'; i++; } else q = false; } else cell += ch; }
    else if (ch === '"') q = true; else if (ch === delim) { row.push(cell); cell = ''; } else if (ch === '\n' || ch === '\r') { if (ch === '\r' && text[i + 1] === '\n') i++; row.push(cell); rows.push(row); row = []; cell = ''; } else cell += ch;
  }
  if (cell || row.length) { row.push(cell); rows.push(row); }
  const hi = rows.findIndex(r => r.some(c => /дата|date/i.test(c)));
  if (hi < 0) return parseStatementLines(rows.map(r => r.join(' ')));
  const H = rows[hi].map(c => c.toLowerCase().trim());
  const col = re => H.findIndex(h => re.test(h));
  const cD = col(/дата операции|^дата|date/), cA = col(/сумма операции|^сумма|amount|сумма в валюте счета/), cOut = col(/^расход|списани|debit/), cIn = col(/^приход|поступлени|зачислени|credit/);
  const cType = col(/^тип$|^type$/);
  const cDesc = col(/описание|назначение|description|merchant|получатель|контрагент/), cCat = col(/категория|category/), cOp = col(/^операция|тип/);
  const out = [];
  for (const r of rows.slice(hi + 1)) {
    if (!r || r.length < 2) continue;
    const d = parseDate(r[cD] || ''); if (!d) continue;
    let a = 0, k = 'out';
    if (cA >= 0 && r[cA]) { a = parseAmt(r[cA]); k = a < 0 ? 'out' : 'in'; }
    else { const o = cOut >= 0 ? parseAmt(r[cOut] || '') : 0, p = cIn >= 0 ? parseAmt(r[cIn] || '') : 0; if (o) { a = o; k = 'out'; } else if (p) { a = p; k = 'in'; } }
    if (!a) continue;
    const desc = [cDesc >= 0 ? r[cDesc] : '', cOp >= 0 ? r[cOp] : ''].filter(Boolean).join(' ').trim() || (cCat >= 0 ? r[cCat] : '') || '—';
    if (cA >= 0 && a > 0 && !IN_WORDS.test(desc + ' ' + (r[cCat] || '')) && /списани|покупк|оплат/i.test(desc)) k = 'out';
    if (cType >= 0 && r[cType]) { const ty = r[cType].trim().toLowerCase(); if (/расход|списан|expense|out/.test(ty)) k = 'out'; else if (/доход|приход|поступ|income|in/.test(ty)) k = 'in'; }
    const own = cCat >= 0 && r[cCat] ? (k === 'in' ? IN : OUT).find(c => c.n.toLowerCase() === r[cCat].trim().toLowerCase()) : null;
    out.push({ d, a: Math.abs(a), k, n: cType >= 0 ? desc : cleanDesc(desc), raw: desc, bc: cCat >= 0 ? r[cCat] : '', c: own ? own.id : '' });
  }
  return out;
}
// PDF через pdf.js
let pdfLib = null;
function loadPdfJs() {
  if (pdfLib) return Promise.resolve(pdfLib);
  return new Promise((res, rej) => {
    const s = document.createElement('script');
    s.src = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js';
    s.onload = () => { pdfLib = window.pdfjsLib; pdfLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js'; res(pdfLib); };
    s.onerror = () => rej(new Error('pdf.js'));
    document.head.appendChild(s);
  });
}
async function pdfRows(buf) {
  const lib = await loadPdfJs();
  const doc = await lib.getDocument({ data: buf }).promise;
  const out = [];
  for (let p = 1; p <= doc.numPages; p++) {
    const page = await doc.getPage(p), tc = await page.getTextContent();
    const rows = [];
    tc.items.forEach(it => { if (!it.str.trim()) return; const y = Math.round(it.transform[5]); let r = rows.find(r => Math.abs(r.y - y) <= 2); if (!r) rows.push(r = { p, y, items: [] }); r.items.push({ x: Math.round(it.transform[4]), s: it.str }); });
    rows.sort((a, b) => b.y - a.y).forEach(r => { r.items.sort((a, b) => a.x - b.x); out.push(r); });
  }
  return out;
}
// итоги, которые банк сам пишет в выписке, — для сверки
function stTotals(text) {
  const n = s => s ? Math.round(parseFloat(s.replace(/[\s ]/g, '').replace(',', '.')) * 100) : null;
  const num = '([\\d\\s\\u00a0]+[.,]\\d{2})';
  const inn = text.match(new RegExp('(?:Итого зачислений за период|Пополнения|Поступления|Пополнение)[:\\s]*' + num));
  const out = text.match(new RegExp('(?:Итого списаний за период|Расходные операции|Расходы|Списание)[:\\s]*' + num));
  return { in: n(inn && inn[1]), out: n(out && out[1]) };
}
let IMP = null;
async function readStatement(file) {
  if (/\.pdf$/i.test(file.name) || file.type === 'application/pdf') {
    const rows = await pdfRows(await file.arrayBuffer());
    const text = rows.map(r => r.items.map(i => i.s).join(' ')).join('\n');
    const bank = stBank(text), owner = stOwner(text);
    let ops = parseRows(rows);
    if (!ops || !ops.length) ops = parseStatementLines(rows.flatMap(r => r.items.map(i => i.s))).map(o => ({ d: o.d, a: o.a, k: o.k, raw: o.raw }));
    ops.forEach(o => { o.n = stName(o.raw, o.k); o.self = stIsSelf(o.raw, owner); });
    return { bank: bank.name, ops, tot: stTotals(text), file: file.name };
  }
  const ops = parseCSV(await file.text()).map(o => ({ d: o.d, a: o.a, k: o.k, raw: o.raw, n: o.n, bc: o.bc, c: o.c || undefined }));
  return { bank: file.name.replace(/\.[^.]+$/, '').slice(0, 24), ops, tot: {}, file: file.name };
}
async function handleImport(files) {
  files = [...files]; if (!files.length) return;
  const res = [];
  for (let i = 0; i < files.length; i++) {
    toast(files.length > 1 ? `Читаю выписки · ${i + 1} из ${files.length}` : 'Читаю выписку…', null, 60000);
    try { res.push(await readStatement(files[i])); } catch (e) { res.push({ bank: files[i].name, ops: [], err: /pdf/.test(e.message) ? 'pdf' : 'read', file: files[i].name }); }
  }
  const ok = res.filter(r => r.ops.length);
  if (!ok.length) { toast(res.some(r => r.err === 'pdf') ? 'Не удалось открыть PDF' : 'Не нашёл операций в файлах'); return; }
  // одинаковые банки с разными счетами различаем по имени файла не нужно — имя банка + счёт уже в bank
  const m = stMerge(ok, S.tx.map(t => t.k === 'x' ? { ...t, k: t.xk || 'out' } : t));
  m.ops.forEach(o => { if (!o.c) o.c = o.own || /^Перевод( ·| на| от|$)/.test(o.n) ? (o.k === 'in' ? 'in_transfer' : 'transfer') : (guess(o.n, o.k) || (o.k === 'out' && mccCat(o.raw)) || catFor(o.raw + ' ' + o.n, o.k, o.bc || '')); });
  const banks = res.map(r => {
    const ds = r.ops.map(o => o.d).sort(), si = r.ops.filter(o => o.k === 'in').reduce((s, o) => s + o.a, 0), so = r.ops.filter(o => o.k === 'out').reduce((s, o) => s + o.a, 0);
    return { bank: r.bank, n: r.ops.length, from: ds[0], to: ds[ds.length - 1], err: r.err, file: r.file, check: r.ops.length > 0 && r.tot && r.tot.in != null && r.tot.out != null && r.tot.in === si && r.tot.out === so };
  });
  IMP = { ops: m.ops, dupIn: m.dupIn, banks, phones: stPhones(m.ops).map(x => ({ ...x, on: false })) };
  $('#toast').classList.remove('on'); openImport();
}
function impApply() {
  const ph = IMP.phones.filter(p => p.on).map(p => p.p);
  IMP.ops.forEach(o => { o.ownPh = !o.own && ph.some(p => o.raw.includes(p)); });
}
const isOwn = o => o.own || o.ownPh;
function openImport() {
  impApply();
  const ops = IMP.ops, fresh = ops.filter(o => !o.dup), own = fresh.filter(isOwn), real = fresh.filter(o => !isOwn(o));
  const out = real.filter(o => o.k === 'out'), inn = real.filter(o => o.k === 'in');
  const short = d => d ? `${+d.slice(8)} ${MG[+d.slice(5, 7) - 1].slice(0, 3)} ${d.slice(2, 4)}` : '';
  let h = `<div class="grab"></div><h2 style="margin-top:4px">${IMP.banks.length > 1 ? 'Выписки' : 'Импорт выписки'}</h2>
    <div class="impb">${IMP.banks.map(b => `<div class="row"><span class="ic">${ic('a_bank')}</span><span class="t"><span class="n">${esc(b.bank)}</span><span class="s">${b.err ? 'Не удалось прочитать файл' : b.n ? `${short(b.from)} — ${short(b.to)} · ${b.n} ${plural(b.n, 'операция', 'операции', 'операций')}` : 'Операций нет'}</span></span>${b.check ? `<span class="chk">${ic('ui_check')}Сверено</span>` : ''}</div>`).join('')}</div>
    <div class="stats" style="margin-top:14px">${stat('Расходы', rub(total(out), { round: true, short: true }))}${stat('Доходы', rub(total(inn), { round: true, short: true }), 'c-sage')}${stat('Новых', fmtN(String(real.length)))}</div>
    <div class="impn">${own.length ? `<p>${ic('ui_check')}<span><b>${own.length} ${plural(own.length, 'перевод', 'перевода', 'переводов')} между вашими счетами</b> — не расходы и не доходы, в статистику не попадут.</span></p>` : ''}
    ${ops.length - fresh.length + IMP.dupIn ? `<p>${ic('ui_check')}<span><b>${ops.length - fresh.length + IMP.dupIn} уже ${plural(ops.length - fresh.length + IMP.dupIn, 'была', 'были', 'было')}</b> в приложении или в другой выписке — пропущу.</span></p>` : ''}
    <p>${ic('ui_check')}<span>Неподтверждённые блокировки и аресты не учитываются.</span></p></div>`;
  if (IMP.phones.length) h += `<h2>Это ваши счета?</h2><p class="note" style="margin:-4px 0 8px">На этот номер и с него часто идут переводы в разных банках. Если это ваш номер в другом банке — включите, и такие переводы не попадут в расходы и доходы.</p>` + IMP.phones.map((p, i) => `<button class="row" data-act="impph" data-i="${i}"><span class="t"><span class="n">${p.p.replace(/(\+7)(\d{3})(\d{3})(\d{2})(\d{2})/, '$1 $2 $3-$4-$5')}</span><span class="s">${p.n} ${plural(p.n, 'перевод', 'перевода', 'переводов')} · ${[...p.banks].join(', ')}</span></span><span class="sw2 ${p.on ? 'on' : ''}"><i></i></span></button>`).join('');
  h += `<h2>Первые операции</h2>` + real.slice().sort((a, b) => a.d < b.d ? 1 : -1).slice(0, 30).map(o => { const c = CAT[o.c] || CAT.other; return `<div class="row"><span class="ic">${ic(c.id)}</span><span class="t"><span class="n">${esc(o.n)}</span><span class="s">${dayTitle(o.d)} · ${c.n} · ${esc(o.src)}</span></span><span class="a ${o.k === 'in' ? 'in' : ''}">${o.k === 'in' ? '+' : ''}${rub(o.a)}</span></div>`; }).join('');
  if (real.length > 30) h += `<p class="note" style="text-align:center">и ещё ${fmtN(String(real.length - 30))}</p>`;
  h += `<p class="note" style="margin-top:10px">Всё разобрано прямо на телефоне — выписки никуда не отправляются. Категорию любой операции можно поправить потом.</p>
    <div class="impact"><div class="stack">${fresh.length ? `<button class="btn" data-act="doimport">Импортировать ${fmtN(String(real.length))}</button>` : ''}<button class="btn ghost" data-act="close2">Отмена</button></div></div>`;
  const sc = $('#sheet2').scrollTop;
  $('#sheet2').innerHTML = h; if (!$('#sheet2').classList.contains('on')) { $('#sheet2').scrollTop = 0; open('#sheet2'); } else $('#sheet2').scrollTop = sc;
}
function doImport() {
  impApply();
  const fresh = IMP.ops.filter(o => !o.dup), t0 = Date.now(), im = t0;
  fresh.forEach((o, i) => S.tx.push({ id: newId(), k: isOwn(o) ? 'x' : o.k, ...(isOwn(o) ? { xk: o.k } : {}), a: o.a, n: o.n, c: o.c, d: o.d, t: t0 - i, b: o.src, im }));
  const real = fresh.filter(o => !isOwn(o)).length;
  S.imports = (S.imports || []).concat({ im, at: t0, n: fresh.length, banks: [...new Set(fresh.map(o => o.src))] }).slice(-10);
  save(); while (stack.length) close(); IMP = null; hapticOk();
  const last = fresh.filter(o => !isOwn(o)).map(o => o.d).sort().pop(); if (last) { const [y, m] = last.split('-').map(Number), now = today(); mOff = Math.min(0, (y - now.getFullYear()) * 12 + (m - 1 - now.getMonth())); }
  tab = 'home'; document.querySelectorAll('.tabs [data-tab]').forEach(b => b.classList.toggle('on', b.dataset.tab === 'home')); SCREENS.forEach(s => $('#s-' + s).classList.toggle('hidden', s !== 'home')); moveInd();
  render(); toast(`Импортировано ${fmtN(String(real))}`, () => undoImport(im), 8000);
}
function undoImport(im) {
  const n = S.tx.length; S.tx = S.tx.filter(t => t.im !== im); S.imports = (S.imports || []).filter(x => x.im !== im);
  save(); render(); hapticOk(); toast(`Импорт отменён · ${fmtN(String(n - S.tx.length))}`);
}
// ================= Sheets plumbing =================
const stack = [];
function open(id) {
  if (stack.includes(id)) return;
  stack.push(id); $(id).querySelectorAll('.bigin').forEach(fitBig); $(id).classList.add('on'); $('#veil').classList.add('on'); document.body.classList.add('deep');
  $(id).style.zIndex = 11 + stack.length * 2; $('#veil').style.zIndex = 10 + stack.length * 2;
  try { tg && tg.BackButton.show(); } catch (e) {}
}
function close() {
  const id = stack.pop(); if (!id) return;
  $(id).classList.remove('on'); document.activeElement && document.activeElement.blur();
  if (!stack.length) { $('#veil').classList.remove('on'); document.body.classList.remove('deep'); try { tg && tg.BackButton.hide(); } catch (e) {} }
  else $('#veil').style.zIndex = 10 + stack.length * 2;
}
try { tg && tg.BackButton.onClick(close); } catch (e) {}
$('#veil').onclick = close;
['#sheet', '#sheet2'].forEach(id => {
  const sh = $(id); let y0 = null, ly = 0, lt = 0, v = 0, dy = 0;
  sh.addEventListener('touchstart', e => { if (sh.scrollTop <= 0 && !e.target.closest('.chips,.pad,.bars,input')) { y0 = ly = e.touches[0].clientY; lt = performance.now(); v = 0; dy = 0; } }, { passive: true });
  sh.addEventListener('touchmove', e => {
    if (y0 === null) return; const y = e.touches[0].clientY, now = performance.now();
    v = (y - ly) / Math.max(now - lt, 1); ly = y; lt = now; dy = y - y0;
    const d = dy > 0 ? dy : dy * .2; // резинка вверх
    sh.style.transition = 'none'; sh.style.transform = `translateY(${d}px)`;
    $('#veil').style.opacity = String(Math.max(.2, 1 - Math.max(dy, 0) / 500));
  }, { passive: true });
  sh.addEventListener('touchend', () => {
    if (y0 === null) return; y0 = null; sh.style.transition = ''; $('#veil').style.opacity = '';
    if (dy > 130 || (v > .55 && dy > 30)) { sh.style.transform = ''; close(); } else sh.style.transform = '';
  });
});

// ================= Swipe to delete =================
let sw = null, suppressClick = 0;
function openSw(w) { w.classList.add('open'); w.querySelector('.row').style.transform = 'translateX(-172px)'; w.querySelector('.del').style.width = '172px'; }
function closeSw(w) { w.classList.remove('open'); w.querySelector('.row').style.transform = ''; w.querySelector('.del').style.width = ''; }
function deleteTx(id) {
  const w = document.querySelector(`.swr[data-id="${id}"]`), i = S.tx.findIndex(x => x.id === id); if (i < 0) return;
  const removed = S.tx[i];
  try { tg && tg.HapticFeedback.notificationOccurred('warning'); } catch (e) {}
  const finish = () => { S.tx.splice(i, 1); save(); render(); undoDel(removed, i); };
  if (w) { w.style.height = w.offsetHeight + 'px'; w.offsetHeight; w.classList.add('gone'); w.style.height = '0px'; setTimeout(finish, 300); } else finish();
}
document.addEventListener('touchstart', e => {
  const w = e.target.closest('.swr');
  document.querySelectorAll('.swr.open').forEach(o => { if (o !== w) closeSw(o); });
  if (!w || e.target.closest('.del button')) { sw = null; return; }
  sw = { w, row: w.querySelector('.row'), del: w.querySelector('.del'), x0: e.touches[0].clientX, y0: e.touches[0].clientY, base: w.classList.contains('open') ? -172 : 0, dx: 0, lock: null };
}, { passive: true });
document.addEventListener('touchmove', e => {
  if (!sw) return; const dx = e.touches[0].clientX - sw.x0, dy = e.touches[0].clientY - sw.y0;
  if (sw.lock === null && (Math.abs(dx) > 8 || Math.abs(dy) > 8)) sw.lock = Math.abs(dx) > Math.abs(dy) * 1.2 ? 'x' : 'y';
  if (sw.lock !== 'x') return;
  let x = sw.base + dx; if (x > 0) x *= .25; if (x < -172) x = -172 + (x + 172) * .6;
  if (sw.dx > -260 && x <= -260) haptic('medium'); sw.del.classList.toggle('full', x <= -260);
  sw.dx = x; sw.row.classList.add('drag'); sw.del.classList.add('drag');
  sw.row.style.transform = `translateX(${x}px)`; sw.del.style.width = Math.max(0, -x) + 'px';
}, { passive: true });
document.addEventListener('touchend', () => {
  if (!sw) return; const s = sw; sw = null; if (s.lock !== 'x') return;
  s.row.classList.remove('drag'); s.del.classList.remove('drag'); suppressClick = Date.now();
  if (s.dx <= -260) { s.del.style.width = '100%'; s.row.style.transform = 'translateX(-110%)'; deleteTx(+s.w.dataset.id); return; }
  if (s.dx < -50) { openSw(s.w); haptic(); } else closeSw(s.w);
});
document.addEventListener('touchstart', () => {}, { passive: true }); // :active на iOS
// запрет зума: щипок, двойной тап, жесты Safari
['gesturestart', 'gesturechange', 'gestureend'].forEach(ev => document.addEventListener(ev, e => e.preventDefault(), { passive: false }));
document.addEventListener('touchmove', e => { if (e.touches.length > 1 || (e.scale && e.scale !== 1)) e.preventDefault(); }, { passive: false });
document.addEventListener('dblclick', e => e.preventDefault(), { passive: false });
function undoDel(rec, i) {
  toast(`Удалено · ${rub(rec.a, { round: true })}`, () => {
    S.tx.splice(Math.min(i, S.tx.length), 0, rec); save(); render(); hapticOk();
    requestAnimationFrame(() => { const w = document.querySelector(`.swr[data-id="${rec.id}"]`); if (w) w.classList.add('back'); });
    toast('Вернул');
  }, 8000);
}
$('#toast').addEventListener('click', e => { if (Date.now() - ($('#toast')._dragged || 0) < 350) return; if (toastFn && e.target.closest('u')) { const f = toastFn; toastFn = null; $('#toast').classList.remove('on'); f(); } });

// ================= Events =================
document.addEventListener('click', async e => {
  const bar = e.target.closest('.bars i');
  if (bar) {
    const ch = bar.parentElement, tip = $('#tip-' + ch.dataset.chart);
    ch.querySelectorAll('i').forEach(i => i.classList.toggle('sel', i === bar));
    if (tip) tip.innerHTML = `${esc(bar.dataset.tip)} · <b>${rub(+bar.dataset.v, { round: true })}</b>`;
    haptic(); return;
  }
  if (Date.now() - suppressClick < 350) return;
  const t = e.target.closest('[data-tab],[data-act]'); if (!t) return;
  const opened = t.closest('.swr.open'); if (opened && t.dataset.act === 'edit') { closeSw(opened); return; }
  if (t.dataset.act === 'swdel') return deleteTx(+t.dataset.id);
  if (t.dataset.act === 'swedit') { const w = t.closest('.swr'); closeSw(w); return setTimeout(() => openSheet(+t.dataset.id), 120); }
  if (t.dataset.tab) {
    // повторное нажатие на «Ещё» внутри группы возвращает к списку настроек
    if (t.dataset.tab === 'more' && tab === 'more') { if (MSUB) moreGo(null); else { const m = $('#s-more'); if (m) m.scrollTo({ top: 0, behavior: 'smooth' }); } return; }
    if (t.dataset.tab === 'more') MSUB = null;
    tab = t.dataset.tab;
    document.querySelectorAll('.tabs [data-tab]').forEach(b => b.classList.toggle('on', b.dataset.tab === tab));
    SCREENS.forEach(s => $('#s-' + s).classList.toggle('hidden', s !== tab));
    const scr = $('#s-' + tab); scr.scrollTop = 0; scr.classList.remove('enter'); scr.offsetWidth; scr.classList.add('enter'); moveInd(); haptic(); render(); if (tab === 'cap') fetchRates(); return;
  }
  const a = t.dataset.act;
  if (a && a[0] === 'g' && goalAct(a, t)) return;
  if (a === 'tilt') return toggleTilt();
  if (a === 'add') { haptic('medium'); return tab === 'cap' ? openAcc() : tab === 'goals' ? openGoalEdit() : openSheet(null, tab === 'home' && hMode === 'in' ? 'in' : 'out'); }
  if (a === 'hmode') { hMode = t.dataset.m; haptic(); return render(); }
  if (a === 'addacc') return openAcc();
  if (a === 'editacc') return openAcc(+t.dataset.id);
  if (a === 'atype2') { syncAcc(); A.type = t.dataset.t; if (A.type === 'crypto' && !isCoin(A.cur)) A.cur = 'BTC'; if (A.type !== 'crypto' && isCoin(A.cur)) A.cur = 'RUB'; haptic(); drawAcc(); if (A.type === 'crypto' && !rate(A.cur)) fetchCoins([A.cur]).then(ok => { if (ok && A) { save(); drawAcc(); } }); return; }
  if (a === 'bytk') { syncAcc(); A.byTk = t.dataset.v === '1'; haptic(); drawAcc(); return; }
  if (a === 'coinpick') return coinPick(+t.dataset.i);
  if (a === 'acur') { syncAcc(); A.cur = t.dataset.c; haptic(); drawAcc(); if (isCoin(A.cur) && !rate(A.cur)) fetchCoins([A.cur]).then(ok => { if (ok && A && A.cur === t.dataset.c) { save(); drawAcc(); } }); return; }
  if (a === 'saveacc') return saveAcc();
  if (a === 'delacc') { if (!(await confirmDlg('Удалить «' + A.n + '»?', 'Удалить'))) return; capFlow(-accRub(S.acc.find(x => x.id === A.id))); S.acc = S.acc.filter(x => x.id !== A.id); snapshot(); save(); while (stack.length) close(); render(); toast('Удалено'); return; }
  if (a === 'rates') return openRates();
  if (a === 'subs') return openSubs();
  if (a === 'subhide') return subHide(t.dataset.k);
  if (a === 'lkkey') return lockKey(t.dataset.k);
  if (a === 'lkdel') return lockDel();
  if (a === 'lkbio') return lockBio();
  if (a === 'lkforgot') return lockForgot();
  if (a === 'lkcancel') return hideLock();
  if (a === 'pin') return pinToggle();
  if (a === 'pinchg') return pinChange();
  if (a === 'pinafter') return pinAfter(t.dataset.v);
  if (a === 'lkbiot') return bioToggle();
  if (a === 'msub') return moreGo(t.dataset.s);
  if (a === 'mback') return moreGo(null);
  if (a === 'chartset') return chartSet(t.dataset.c);
  if (a === 'mode') return setMode(t.dataset.m);
  if (a === 'theme') return setTheme(t.dataset.t);
  if (a === 'priv') return togglePriv();
  if (a === 'cyclebase') { e.stopPropagation(); return setBase(BASES[(BASES.indexOf(baseCur()) + 1) % BASES.length]); }
  if (a === 'base') return setBase(t.dataset.c);
  if (a === 'bio') return toggleBio();
  if (a === 'unlock') return unlock();
  if (a === 'import') return $('#imp-in').click();
  if (a === 'doimport') return doImport();
  if (a === 'impph') { const p = IMP.phones[+t.dataset.i]; p.on = !p.on; haptic(); return openImport(); }
  if (a === 'undoimp') { if (!(await confirmDlg('Удалить все операции из последнего импорта?', 'Удалить'))) return; return undoImport(+t.dataset.im); }
  if (a === 'report') return openReport(-1);
  if (a === 'quick') return quickAdd(+t.dataset.i);
  if (a === 'onbnext') { const sl = $('#slides'); sl.scrollTo({ left: sl.clientWidth * (onbI + 1), behavior: 'smooth' }); return; }
  if (a === 'onbadd') { onbDone(); return setTimeout(() => openSheet(), 350); }
  if (a === 'onbimport') { onbDone(); tab = 'more'; document.querySelectorAll('.tabs [data-tab]').forEach(b => b.classList.toggle('on', b.dataset.tab === 'more')); SCREENS.forEach(s => $('#s-' + s).classList.toggle('hidden', s !== 'more')); moveInd(); render(); return setTimeout(() => $('#imp-in').click(), 50); }
  if (a === 'onbdemo') { onbDone(); return seed(); }
  if (a === 'photo') { let has = false; try { has = !!localStorage.getItem('konta_photo'); } catch (e) {} if (has && THEME !== 'photo') return setTheme('photo'); return $('#photo-in').click(); }
  if (a === 'lang') { if (t.dataset.l !== LANG) setLang(t.dataset.l); return; }
  if (a === 'refreshrates') { toast('Обновляю…'); await fetchRates(true); while (stack.length) close(); render(); return; }
  if (a === 'saverates') { document.querySelectorAll('[data-rate]').forEach(i => { const v = num(i.value); if (v > 0 && v !== rate(i.dataset.rate)) S.rates[i.dataset.rate] = { v, at: Date.now(), src: 'вручную' }; }); document.querySelectorAll('[data-price]').forEach(i => { const v = num(i.value), k = i.dataset.price; if (v > 0 && v !== price(k)) S.prices[k] = { ...(S.prices[k] || {}), v, at: Date.now(), src: 'вручную' }; }); snapshot(); save(); while (stack.length) close(); render(); toast('Курсы сохранены'); return; }
  if (a === 'addin') return openSheet(null, 'in');
  if (a === 'closeday') return closeDay();
  if (a === 'synctap') return syncTap();
  if (a === 'synci') return syncIcoTap();
  if (a === 'botwrite') return botWrite();
  if (a === 'openbot') { const u = 'https://t.me/KontaCieBot'; if (inTG && tg.openTelegramLink) tg.openTelegramLink(u); else window.open(u, '_blank'); return; }
  if (a === 'daily') return dailyInfo();
  if (a === 'dailyinc') { haptic('medium'); return openSheet(null, 'in'); }
  if (a === 'chartnext') return chartNext();
  if (a === 'dailytog') return dailyToggle();
  if (a === 'login') { haptic(); return openLogin(); }
  if (a === 'onblogin') { onbDone(); return openLogin(); }
  if (a === 'logout') { if (!(await confirmDlg('Выйти из аккаунта на этом устройстве? Данные останутся в боте.', 'Выйти'))) return; signOut(); return; }
  if (a === 'pwahelp') { haptic(); return pwaHelp(); }
  if (a === 'webapphelp') { haptic(); return webAppHelp(); }
  if (a === 'openweb') { haptic(); try { tg.openLink('https://kontacie.com/', { try_browser: 'safari' }); } catch (e) { location.href = 'https://kontacie.com/'; } return; }
  if (a === 'search') { haptic(); return openSearch(); }
  if (a === 'qkind') { Q.kind = t.dataset.k; t.parentNode.querySelectorAll('button').forEach(b => b.classList.toggle('on', b === t)); animSegs($('#sheet2')); haptic(); return searchRun(); }
  if (a === 'qper' || a === 'qbank') { if (a === 'qper') Q.per = t.dataset.p; else Q.bank = t.dataset.b; t.parentNode.querySelectorAll('.chip').forEach(b => b.classList.toggle('on', b === t)); haptic(); return searchRun(); }
  if (a === 'qedit') { $('#q-in') && $('#q-in').blur(); return openSheet(+t.dataset.id); }
  if (a === 'reopenday') return reopenDay();
  if (a === 'bigtext') return toggleBig();
  if (a === 'homescreen') { haptic(); return addHome(); }
  if (a === 'limits') { haptic(); return openLimits(); }
  if (a === 'limdone') { while (stack.length) close(); return; }
  if (a === 'edit') return openSheet(+t.dataset.id);
  if (a === 'cat') { haptic(); return openCat(t.dataset.c); }
  if (a === 'close2') return close();
  if (a === 'mnav') { mOff = Math.min(0, mOff + +t.dataset.d); haptic(); return render(); }
  if (a === 'anav') { aOff = Math.min(0, aOff + +t.dataset.d); haptic(); return render(); }
  if (a === 'amore') { aMore = !aMore; haptic(); render(); if (aMore) setTimeout(() => t.scrollIntoView({ behavior: 'smooth', block: 'start' }), 60); return; }
  if (a === 'acats') { aCats = !aCats; haptic(); return render(); }
  if (a === 'atype') { aType = t.dataset.t; aOff = 0; haptic(); return render(); }
  if (a === 'key') { const r = onKey(t.dataset.k); const h = $('.amth'); if (h && !F.sel) h.innerHTML = '&nbsp;'; return r; }
  if (a === 'fcur') { F.curOpen = !F.curOpen; haptic(); return drawSheet(); }
  if (a === 'fcurpick') return setCur(t.dataset.c);
  if (a === 'amtsel') { if (!F.amt) return; F.sel = !F.sel; t.classList.toggle('sel', F.sel); const h = $('.amth'); if (h) h.innerHTML = F.sel ? 'Наберите новую сумму' : '&nbsp;'; haptic(); return; }
  if (a === 'csearch') { if (!t.classList.contains('on')) { haptic(); catSearch(true); } return; }
  if (a === 'pick') {
    haptic(); if ($('#csr') && $('#csr').classList.contains('on')) catSearch(false);
    if (F.cat === t.dataset.c) { F.cat = null; F.src = null; F.pickedAfterNote = false; }
    else { F.cat = t.dataset.c; F.src = 'manual'; F.pickedAfterNote = !!($('#f-note').value || '').trim(); }
    return refreshCats();
  }
  if (a === 'kind') { if (F.kind === t.dataset.k) return; F.kind = t.dataset.k; F.note = $('#f-note').value; F.cat = guess(F.note, F.kind); F.src = F.cat ? 'auto' : null; haptic(); return drawSheet(); }
  if (a === 'save') return submit();
  if (a === 'del') {
    const i = S.tx.findIndex(x => x.id === F.id), removed = S.tx[i]; haptic('medium');
    S.tx.splice(i, 1); save(); if (inSearch()) { close(); render(); searchRun(); } else { while (stack.length) close(); render(); } undoDel(removed, i); return;
  }
  if (a === 'seed') return seed();
  if (a === 'csv') {
    const rows = [...S.tx].filter(x => x.k !== 'x').sort((x, y) => x.d < y.d ? -1 : x.d > y.d ? 1 : x.t - y.t).map(x => [x.d, x.k === 'in' ? 'Доход' : x.k === 'g' ? (x.w ? 'Из цели' : 'В цель') : 'Расход', x.k === 'g' ? ((goalById(x.g) || {}).n || '') : catOf(x).n, (x.a / 100).toFixed(2).replace('.', ','), `"${(x.n || '').replace(/"/g, '""')}"`].join(';'));
    $('#csvbox').innerHTML = `<textarea class="csv" readonly>${esc('Дата;Тип;Категория;Сумма;Описание\n' + rows.join('\n'))}</textarea><button class="btn" data-act="copycsv" style="margin-top:10px">${ic('ui_copy')}Скопировать</button>`;
    return;
  }
  if (a === 'copycsv') { try { await navigator.clipboard.writeText($('.csv').value); toast('Скопировано'); } catch (err) { $('.csv').select(); toast('Выделите и скопируйте вручную'); } return; }
  if (a === 'rules') { S.rules = {}; save(); render(); toast('Выученные категории сброшены'); return; }
  if (a === 'wipe') {
    if (!(await confirmDlg('Удалить все записи, лимиты и выученные категории? Это нельзя отменить.', 'Удалить всё'))) return;
    S = { v: 2, tx: [], limits: {}, rules: {}, seq: 1, acc: [], rates: {}, prices: {}, capHist: [], onb: true, gid: 1 }; save(); render(); toast('Данные удалены');
  }
});
document.addEventListener('input', e => { if (e.target.classList && e.target.classList.contains('bigin')) fitBig(e.target); if (goalInput(e)) return; if (e.target.id === 'f-note') onNote(e.target.value); if (['acc-amt', 'acc-rate', 'acc-price'].includes(e.target.id)) { A.amtS = $('#acc-amt').value; $('#acc-rub').innerHTML = accPreview(); } if (e.target.id === 'acc-tk') onTicker(); if (e.target.id === 'coin-q') onCoinSearch(e.target.value); if (e.target.id === 'f-cq') catFilter(e.target.value); if (e.target.id === 'q-in') { Q.q = e.target.value; clearTimeout(searchRun._t); searchRun._t = setTimeout(searchRun, 120); } });
document.addEventListener('change', e => {
  if (goalChange(e)) return;
  if (e.target.id === 'imp-in') { const f = [...e.target.files]; e.target.value = ''; if (f.length) handleImport(f); return; }
  if (e.target.id === 'photo-in') { if (e.target.files[0]) pickPhoto(e.target.files[0]); return; }
  if (e.target.id === 'f-date') { if (e.target.value) { F.date = e.target.value > todayK() ? todayK() : e.target.value; F.note = $('#f-note').value; drawSheet(); } return; }
  const id = e.target.dataset && e.target.dataset.lim; if (!id) return;
  const v = Math.round(parseFloat(String(e.target.value).replace(/\s/g, '').replace(',', '.')) * 100) || 0;
  if (v > 0) S.limits[id] = v; else delete S.limits[id];
  save(); renderMore(); const ll = $('#limlist'); if (ll) ll.innerHTML = limitsList(); toast(v ? `Лимит «${CAT[id].n}»: ${rub(v)}` : `Лимит «${CAT[id].n}» снят`);
});
document.addEventListener('keydown', e => {
  // физическая клавиатура в листе суммы (компьютер, Telegram Desktop)
  const tg_ = e.target, typing = tg_ && (tg_.tagName === 'INPUT' || tg_.tagName === 'TEXTAREA' || tg_.isContentEditable);
  if (!typing && !e.metaKey && !e.ctrlKey && !e.altKey && stack[stack.length - 1] === '#sheet' && $('#sheet .pad')) {
    const k = /^[0-9]$/.test(e.key) ? e.key : (e.key === ',' || e.key === '.') ? ',' : e.key === 'Backspace' ? '⌫' : null;
    if (k) { const btn = document.querySelector(`#sheet .pad [data-k="${k}"]`); if (btn) { e.preventDefault(); btn.click(); } return; }
    if (e.key === 'Enter') { const sv = document.querySelector('#sheet [data-act="save"]'); if (sv) { e.preventDefault(); sv.click(); } return; }
  }
  if (e.key === 'Escape' && stack.length && !typing) { close(); return; }
  if (e.target.id === 'f-note' && e.key === 'Enter') e.target.blur();
  if (e.target.id === 'q-in' && e.key === 'Enter') e.target.blur();
  if (e.target.id === 'f-cq' && e.key === 'Enter') { const v = [...document.querySelectorAll('#f-cats .chip')].filter(b => !b.hidden); if (v.length === 1) v[0].click(); else e.target.blur(); }
});
document.addEventListener('focusout', e => { if (e.target.id === 'f-cq' && !e.target.value.trim()) setTimeout(() => catSearch(false), 120); });

// ================= Demo =================
function seed() {
  const out = [['Яндекс Го', 'taxi', 390, 14], ['Яндекс Еда', 'delivery', 1400, 3], ['Яндекс Лавка', 'food', 1900, 2], ['Пятёрочка', 'food', 780, 4], ['Дикси', 'food', 750, 4], ['Лента', 'food', 3200, 1], ['Магнит', 'food', 520, 3],
    ['Бургер Бон', 'cafe', 230, 4], ['Вкусно и точка', 'cafe', 540, 2], ['Сова варит', 'cafe', 490, 4], ['Озон', 'market', 2600, 2], ['Яндекс Маркет', 'market', 1900, 1], ['Цветы', 'gifts', 3800, 1],
    ['Аптека', 'health', 260, 3], ['Табачный', 'tobacco', 470, 2], ['Whoosh', 'trans', 90, 3], ['МТС', 'subs', 350, 1], ['Перевод', 'transfer', 1800, 3], ['Комиссия за смс', 'fees', 99, 1]];
  const now = today(); let rnd = 7;
  const R = () => (rnd = (rnd * 9301 + 49297) % 233280) / 233280;
  for (let m = 0; m < 3; m++) {
    const days = m === 0 ? now.getDate() : 30;
    out.forEach(([n, c, a, k]) => {
      const cnt = Math.max(1, Math.round(k * (m === 0 ? days / 30 : 1) * (0.7 + R() * 0.6)));
      for (let i = 0; i < cnt; i++) {
        const d = m === 0 ? addD(now, -Math.floor(R() * days)) : addD(new Date(now.getFullYear(), now.getMonth() - m, 1, 12), Math.floor(R() * 28));
        S.tx.push({ id: newId(), k: 'out', a: Math.round(a * (0.6 + R() * 0.8)) * 100, n, c, d: key(d), t: d.getTime() + i });
      }
    });
    // демо-подписки: одна сумма каждый месяц
    [['Яндекс Плюс', 'subs', 399, 7], ['iCloud+', 'subs', 149, 12], ['Okko', 'subs', 399, 18], ['Telegram Premium', 'subs', 299, 3]].forEach(([n, c, a, day]) => {
      const d = new Date(now.getFullYear(), now.getMonth() - m, day, 12); if (key(d) > todayK()) return;
      S.tx.push({ id: newId(), k: 'out', a: a * 100, n, c, d: key(d), t: d.getTime() });
    });
    const base = new Date(now.getFullYear(), now.getMonth() - m, 1, 12);
    [['Зарплата', 'salary', 45000, 5], ['Аванс', 'salary', 30000, 20], ['Перевод', 'in_transfer', 5000, 12], ['Кэшбэк', 'cashback', 640, 3]].forEach(([n, c, a, day]) => {
      const d = addD(base, day - 1); if (key(d) > todayK()) return;
      S.tx.push({ id: newId(), k: 'in', a: Math.round(a * (0.9 + R() * 0.2)) * 100, n, c, d: key(d), t: d.getTime() });
    });
  }
  S.limits = { taxi: 600000, cafe: 400000, delivery: 500000 }; S.onb = true; S.lastReport = range('m', -1).from.slice(0, 7);
  if (!S.acc.length) {
    const at = Date.now();
    Object.assign(S.rates, { USD: { v: 80, at, src: 'демо' }, EUR: { v: 93, at, src: 'демо' }, BTC: { v: 8000000, at, src: 'демо' }, USDT: { v: 80, at, src: 'демо' } });
    [['Сбер накопительный', 'dep', 'RUB', 350000], ['Вклад Альфа', 'dep', 'RUB', 500000], ['Наличные', 'cash', 'USD', 2000],
     ['Bitcoin', 'crypto', 'BTC', 0.05], ['USDT на бирже', 'crypto', 'USDT', 1500], ['Кредитка', 'debt', 'RUB', 24000]]
      .forEach(([n, type, cur, amt]) => S.acc.push({ id: newId(), n, type, cur, amt, tk: '', t: at }));
    Object.assign(S.prices, { SBER: { v: 300, at, name: 'Сбербанк', src: 'демо' }, YDEX: { v: 4200, at, name: 'Яндекс', src: 'демо' }, LQDT: { v: 1.8, at, name: 'Ликвидность', src: 'демо' } });
    [['Сбербанк', 'SBER', 300], ['Яндекс', 'YDEX', 15], ['Фонд ликвидности', 'LQDT', 20000]].forEach(([n, tk, q]) => S.acc.push({ id: newId(), n, type: 'stocks', cur: 'RUB', amt: q, tk, t: at }));
    const end = capTotal(); S.capHist = [];
    for (let i = 90; i >= 1; i--) { const f = 0.86 + 0.14 * (90 - i) / 90 + Math.sin(i / 6) * 0.012; S.capHist.push({ d: key(addD(today(), -i)), v: Math.round(end * f) }); }
    snapshot();
  }
  save(); render(); toast('Демо-данные загружены');
}

// экран «Домой» на iPhone: растягиваем всё до нижнего края, под полоску жеста
if (!inTG && STANDALONE) {
  const fullH = () => { const r = document.documentElement; const h = Math.max(innerHeight, screen.height > screen.width === innerHeight > innerWidth ? screen.height : screen.width); r.style.setProperty('--fullh', h + 'px'); r.style.setProperty('--vh0', innerHeight + 'px'); r.style.setProperty('--gap', Math.max(0, h - innerHeight) + 'px'); r.classList.add('pwa'); r.classList.toggle('pwacut', innerHeight < screen.height - 20 && screen.height > screen.width); };
  fullH(); addEventListener('resize', fullH); addEventListener('orientationchange', () => setTimeout(fullH, 300));
}
// веб-версия: офлайн-кэш и защита данных от автоочистки браузера
if (!inTG && 'serviceWorker' in navigator && (location.protocol === 'https:' || location.hostname === 'localhost')) navigator.serviceWorker.register('sw.js').catch(() => {});
if (!inTG && navigator.storage && navigator.storage.persist) navigator.storage.persist().catch(() => {});
let T0 = performance.now();
let splashDone = false, splashReady = false;
function splashEnd(now) {
  splashReady = true;
  if (splashDone) return;
  const sp0 = $('#splash'); if (sp0 && sp0.classList.contains('lkwait')) return;
  const wait = now ? 0 : Math.max(0, (S.onb ? 2100 : 2500) - (performance.now() - T0));
  clearTimeout(splashEnd._t);
  splashEnd._t = setTimeout(() => {
    if (splashDone) return; splashDone = true;
    const s = $('#splash'); s.classList.add('out'); setTimeout(() => s.remove(), 1000);
    setTimeout(() => { document.body.classList.remove('boot'); setTimeout(animateCounts, 180); if (!S.onb) showOnboarding(); else maybeReport(); }, 260);
  }, wait);
}
$('#splash').addEventListener('click', () => { if (splashReady && performance.now() - T0 > 700) splashEnd(true); });
load().then(() => {
  afterLoad();
  if (!S.onb && (S.tx.length || S.acc.length)) { S.onb = true; save(); }
  render(); moveInd(); addEventListener('resize', moveInd); if (document.fonts) document.fonts.ready.then(() => { moveInd(); animSegs(); }); fetchRates(); hsInit(); loginFromUrl().then(() => syncNow()); splashEnd(); });

tiltStart();
setTimeout(() => { if (navigator.onLine === false || !('serviceWorker' in navigator)) return; ['https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js', 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js'].forEach(u => fetch(u, { mode: 'cors' }).catch(() => {})); }, 12000);
['#sheet', '#sheet2'].forEach(id => { const el = $(id); if (el) new MutationObserver(() => el.querySelectorAll('.bigin').forEach(fitBig)).observe(el, { childList: true }); });
// уведомление сверху можно смахнуть вверх
(() => {
  const el = $('#toast'); let y0 = null, dy = 0, t0 = 0;
  el.addEventListener('pointerdown', e => { if (!el.classList.contains('on')) return; y0 = e.clientY; dy = 0; t0 = Date.now(); el.style.transition = 'none'; el._pid = e.pointerId; el._cap = false; });
  el.addEventListener('pointermove', e => { if (y0 === null) return; dy = e.clientY - y0; if (!el._cap && Math.abs(dy) > 5) { el._cap = true; try { el.setPointerCapture(el._pid); } catch (x) {} } el.style.transform = `translate(-50%,${dy < 0 ? dy : dy * .25}px)`; });
  const end = () => {
    if (y0 === null) return;
    const fast = dy < -8 && Date.now() - t0 < 220;
    el.style.transition = ''; el.style.transform = '';
    if (dy < -22 || fast) { el.classList.remove('on'); clearTimeout(toast._t); toastFn = null; haptic(); }
    if (Math.abs(dy) > 5) el._dragged = Date.now();
    y0 = null;
  };
  el.addEventListener('pointerup', end); el.addEventListener('pointercancel', end);
})();

// обезличенная статистика: раз в день сообщаем «приложение открыли», без сумм и личных данных
(function statPing() {
  if (!SYNC_API) return;
  try {
    const day = new Date().toISOString().slice(0, 10);
    if (localStorage.getItem('konta_hit') === day) return;
    let d = localStorage.getItem('konta_dev'), n = 0;
    if (!d) { d = Array.from(crypto.getRandomValues(new Uint8Array(9)), b => b.toString(16).padStart(2, '0')).join(''); localStorage.setItem('konta_dev', d); n = 1; }
    const send = () => fetch(SYNC_API + (SYNC_API.includes('?') ? '&' : '?') + 'a=hit', { method: 'POST', keepalive: true, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ d, n, p: inTG ? 'tg' : STANDALONE ? 'pwa' : 'web', l: LANG, th: THEME }) })
      .then(r => { if (r.ok) localStorage.setItem('konta_hit', day); }).catch(() => {});
    setTimeout(send, 4000);
  } catch (e) {}
})();

// Яндекс Метрика: грузится после заставки, без вебвизора и записи экрана (суммы не уходят наружу)
const YM_ID = 114305391;
const ymGoal = (g, p) => { try { window.ym && ym(YM_ID, 'reachGoal', g, p); } catch (e) {} };
setTimeout(() => {
  try {
    (function (m, e, t, r, i, k, a) { m[i] = m[i] || function () { (m[i].a = m[i].a || []).push(arguments); }; m[i].l = 1 * new Date(); k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k, a); })(window, document, 'script', 'https://mc.yandex.ru/metrika/tag.js?id=' + YM_ID, 'ym');
    const src = (() => { try { const q = new URLSearchParams(location.search); return q.get('from') || q.get('utm_source') || (tg && tg.initDataUnsafe && tg.initDataUnsafe.start_param) || ''; } catch (e) { return ''; } })();
    ym(YM_ID, 'init', { webvisor: false, clickmap: false, trackLinks: true, accurateTrackBounce: true, referrer: document.referrer, url: location.href, params: { platform: inTG ? 'telegram' : STANDALONE ? 'home_screen' : 'web', lang: LANG, theme: THEME, mode: typeof MODE !== 'undefined' ? MODE : 'dark', from: src || undefined } });
  } catch (e) {}
}, 3500);

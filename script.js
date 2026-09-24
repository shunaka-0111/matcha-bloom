// 実際の予約・注文・公式SNSのURLが確定したら設定してください。
const links = { reservation: '', order: '', instagram: '', campaign: '', contact: '' };
const notices = {
  reservation: ['店舗予約について', '予約の受付先は準備中です。詳細が決まり次第、こちらでご案内します。'],
  order: ['モバイルオーダーについて', 'モバイルオーダーは準備中です。受付開始までお待ちください。'],
  instagram: ['公式Instagramについて', '公式アカウントは準備中です。公開までお待ちください。'],
  campaign: ['キャンペーンについて', '実施期間・賞品・応募規約などの詳細は、決まり次第お知らせします。現在は応募を受け付けていません。'],
  contact: ['お問い合わせについて', 'お問い合わせ窓口は準備中です。詳細が決まり次第お知らせします。']
};
const dialog = document.querySelector('#notice');
document.querySelectorAll('[data-action]').forEach(button => button.addEventListener('click', () => {
  const action = button.dataset.action;
  if (links[action]) { window.location.href = links[action]; return; }
  document.querySelector('#notice-title').textContent = notices[action][0];
  document.querySelector('#notice-body').textContent = notices[action][1];
  dialog.showModal();
}));
document.querySelectorAll('.dialog-close,.dialog-ok').forEach(button => button.addEventListener('click', () => dialog.close()));
dialog.addEventListener('click', event => { if(event.target === dialog){ const rect = dialog.getBoundingClientRect(); if(event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close(); }});

// Remove the opening overlay after its four-second CSS animation finishes.
const pageLoader = document.querySelector('.page-loader');
if (pageLoader) {
  pageLoader.addEventListener('animationend', event => {
    if (event.target === pageLoader && event.animationName === 'loader-exit') pageLoader.remove();
  });
  setTimeout(() => pageLoader.remove(), 4200);
}


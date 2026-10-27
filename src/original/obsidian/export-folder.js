export function pickFolder(doc) {
  return new Promise(resolve => {
    const input = doc.createElement('input'); input.type = 'file'; input.setAttribute('webkitdirectory', ''); input.classList.add('qaudio-hidden');
    input.addEventListener('change', () => {
      const file = input.files?.[0]; input.remove();
      if (!file) { resolve(null); return; }
      let full = '';
      // eslint-disable-next-line @typescript-eslint/no-require-imports -- Desktop-only host bridge; this picker is only offered on desktop.
      full = file.path || '';
      const relative = file.webkitRelativePath || '', root = relative.split('/')[0];
      resolve(full && relative ? full.slice(0, full.length - (relative.length - root.length)) : null);
    });
    input.addEventListener('cancel', () => { input.remove(); resolve(null); });
    doc.body.appendChild(input); input.click();
  });
}

export const revealPath=()=>false;
export const saveToFolder=()=>{throw Error('Host export bridge required');};

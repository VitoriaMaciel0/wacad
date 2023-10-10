import { Prof } from './helpersTypes';
import { Tech } from './helpersTypes';

export function listProfs(profs: Prof[]) {
const list = profs.map((p)=>`<li>${p.nome}-${p.sala}</li>`);
return `<ul>${list.join('')}</ul>`;
}

export function listTech2(technologies: Tech[]){
const list = technologies.filter((t) => t.poweredByNodejs === true).map((p) => `<li>${p.name}-${p.type}</li>`);
return `<ul>${list.join('')}</ul>`;
}


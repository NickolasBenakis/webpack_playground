import './index.scss';


const onClick = (multiplyByTwo) => {
  const child = document.querySelector('button');
  child.innerHTML = `This is my age ${multiplyByTwo(10)}`
}
const getButton = () => document.querySelector('button');

const createButton = () => {
  const button = document.createElement('button');
  button.innerHTML = 'press';
  const container = document.createElement('div');
  container.innerHTML = '';
  root.appendChild(button);
  button.appendChild(container);
}

window.addEventListener('load', () => {
  const root = document.getElementById('root');
  root.innerHTML = `Hello mister`;

  createButton();

  getButton().addEventListener('mouseenter', (ctx) => {
    return import('../utils').then(
      ({multiplyByTwo}) => {
        ctx.srcElement.addEventListener('click', ()=> onClick(multiplyByTwo));
      }
    ).catch(
      error => 'An error occured'
    )
  }
  );
  root.appendChild(getButton());
});


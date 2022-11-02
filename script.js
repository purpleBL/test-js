const head = document.querySelector('.heading')
// const x = document.querySelector('.pl')

// for (let i = 0; i < head.length; i++) {
//   head[i].addEventListener('click', () => {
//     head[i].classList.toggle('tran')
//   })
// }

// head.addEventListener('click', () => {
//     head.classList.toggle('tran')
//   })

head.onclick = () => {
  head.classList.toggle('tran')
}

// for (let i = 0; i < head.length; i++) {
//   head[i].onclick = () => {
//   head[i].classList.toggle('tran')
//   }
// }


// head.onclick = () => {
//   if (x.innerHTML === 'Hello,') {
//     x.innerHTML = 'Привет,'
//   } else {
//     x.innerHTML = 'Hello,'
//   }
// }


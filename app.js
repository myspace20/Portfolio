const form = document.querySelector('form')


form.addEventListener('submit', e =>{
    e.preventDefault()

    form.submit(e.value)
})
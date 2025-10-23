const href = document.querySelector('a')
href.addEventListener('click', function (event) {
    const link = event.target.getAttribute('href')
    event.preventDefault()
    console.log('klik')
    // setTimeout(() => {
    //    window.location = link 
    // }, 3000);
})

const form = document.querySelector('form')
form.addEventListener('submit', function (ev) {
    ev.preventDefault()
    Swal.fire({
        title: 'Sure?',
        text: 'Do you want to continue',
        icon: 'warning',
        confirmButtonText: 'Yes'
    }).then((result) => {
        if (result.isConfirmed) {
            form.submit()
        }
    });
})

// https://doodles.google/
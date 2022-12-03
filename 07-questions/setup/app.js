//using selectors inside the element
// traversing the dom

// const questionBtns = document.querySelectorAll('.question-btn');

// questionBtns.forEach(function(btn) {
//     btn.addEventListener('click', function(e) {
//         const question = e.currentTarget.parentElement.parentElement;
//         question.classList.toggle('show-text');
//     })
// })

const questions = document.querySelectorAll('.question');

questions.forEach(function(question) {
    const btn = question.querySelector('.question-btn');
    btn.addEventListener('click', function() {
        questions.forEach('click', function(item) {
            if(item !== question) {
                item.classList.remove('show-text');
            }
        })
        question.classList.toggle("show-text");
    })
})

const SIGNIN = 0;
const SIGNUP = 1;
let currentView = SIGNIN;

let params;

window.onload = function() {
    const query = window.location.search;
    params = new URLSearchParams(query);

    currentView = (params.get('ref') == 'signin') ? SIGNIN : SIGNUP;

    configureView();

    setTimeout(function() {
        document.getElementsByClassName('page-container')[0].classList.add('visible');
    }, 500);
}

function configureView() {
    let pageTitle = (currentView == SIGNIN) ? "Sign in" : "Create an Account";
    document.title = `OurShelf - ${pageTitle}`;

    document.getElementsByClassName('js-header-title')[0].innerHTML = pageTitle;

    if(currentView == SIGNIN) {
        document.getElementsByClassName('js-signup')[0].style.display = 'none';
        document.getElementsByClassName('js-signin')[0].style.display = 'block';

        document.getElementsByClassName('js-right')[0].style.display = 'none';
        document.getElementsByClassName('js-left')[0].style.display = 'block';
    } else if(currentView == SIGNUP) {
        document.getElementsByClassName('js-signin')[0].style.display = 'none';
        document.getElementsByClassName('js-signup')[0].style.display = 'block';

        document.getElementsByClassName('js-left')[0].style.display = 'none';
        document.getElementsByClassName('js-right')[0].style.display = 'block';
    }
}

function setView(view) {
    currentView = view == 'signup' ? SIGNUP : SIGNIN;
    params.set('ref', view);

    window.history.replaceState({}, 'OurShelf', `account.html?${params.toString()}`);

    configureView();
}

function show(name) {
    let input = document.getElementById(`signup-${name}`);
    input.setAttribute('type', 'text');
}

function hide(name) {
    let input = document.getElementById(`signup-${name}`);
    input.setAttribute('type', 'password');
}
// animation skills section
const numbers = document.querySelectorAll('.number');
const svgEl = document.querySelectorAll('svg circle');
const counters = Array(numbers.length);
const intervals = Array(counters.length);
counters.fill(0);

window.addEventListener('scroll',() => {
    if (window.scrollY > document.querySelector('.my-toolkit').offsetTop - 20 ) {
        numbers.forEach((number, index) => {
            intervals[index] = setInterval(() => {
                if(counters[index] === parseInt(number.dataset.num)){
                    clearInterval(counters[index]);
                }else{
                    counters[index] += 1;
                    number.innerHTML = counters[index] + "%";
                    svgEl[index].style.strokeDashoffset = Math.floor(472 - 370 * parseFloat(number.dataset.num / 100));
                }
            }, 24);
        })
    }
    // rend header fixed 
    if (window.scrollY > document.querySelector('.landing').offsetHeight + 10 ) {
        document.querySelector('.header .container').classList.add('fixed');
    }else {
        document.querySelector('.header .container').classList.remove('fixed');
    }
})
//setting heights dynimically.
//document.querySelector('.landing-content').style.height = `calc(100vh - ${document.querySelector('.header').offsetHeight}px)`

// Send Message
emailjs.init()
const form = document.querySelector('.form');
const submitHandler = (e) => {
    e.preventDefault();
    const  name = document.querySelector('.name'),
           email = document.querySelector('.email'),
           msg = document.querySelector('.msg'); 
    
    var params = {
        from_name: name.value,
        message: msg.value,
        replay_to: email.value
    }

    emailjs.send("service_c4zsw7i", "template_zm3amts", params, "SKVsFuaGbCBGik-_E").then((res)=> alert("Success! " + res.status))
                                .catch(error => alert(error)); 
};

form.addEventListener('submit', submitHandler);

















